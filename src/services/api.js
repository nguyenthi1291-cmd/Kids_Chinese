import { DEFAULT_LESSONS } from '../data/lessonsData';

const STORAGE_KEYS = {
  API_URL: 'kids_chinese_gas_api_url',
  CURRENT_USER: 'kids_chinese_current_user',
  ALL_USERS: 'kids_chinese_local_users',
  LOCAL_PROGRESS: 'kids_chinese_local_progress',
  CACHED_LESSONS: 'kids_chinese_cached_lessons',
};

const DEFAULT_GAS_URL = 'https://script.google.com/macros/s/AKfycbxCv1dBdhjYkr0Og8MqYUlDy8BWwjrn9mn4i29A-jrwEsDoMtL7VxAcawuCfeI6Lot3/exec';

async function fetchWithTimeout(url, options = {}, timeout = 3500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timer);
    return response;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

class ApiService {
  constructor() {
    const saved = localStorage.getItem(STORAGE_KEYS.API_URL);
    if (!saved || !saved.trim()) {
      this.apiUrl = DEFAULT_GAS_URL;
      try {
        localStorage.setItem(STORAGE_KEYS.API_URL, DEFAULT_GAS_URL);
      } catch (e) {}
    } else {
      this.apiUrl = saved.trim();
    }
  }

  getApiUrl() {
    return this.apiUrl;
  }

  setApiUrl(url) {
    this.apiUrl = (url || '').trim();
    localStorage.setItem(STORAGE_KEYS.API_URL, this.apiUrl);
  }

  isConfigured() {
    return Boolean(this.apiUrl && this.apiUrl.startsWith('http'));
  }

  /**
   * 1. Lấy danh sách bài học (getLessons) - Tối ưu Timeout 3.5s
   */
  async getLessons() {
    if (!this.isConfigured()) {
      return this.getLocalLessons();
    }

    try {
      const response = await fetchWithTimeout(`${this.apiUrl}?action=getLessons`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      }, 3500);

      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const text = await response.text();
      let resData = null;
      try {
        resData = JSON.parse(text);
      } catch (e) {
        console.warn('Cannot parse JSON from Google Sheets, using offline lessons:', text);
        return this.getLocalLessons();
      }

      let lessonsArray = [];
      if (Array.isArray(resData)) {
        lessonsArray = resData;
      } else if (resData && Array.isArray(resData.data)) {
        lessonsArray = resData.data;
      }

      if (lessonsArray.length > 0) {
        const mergedLessons = lessonsArray.map((item, index) => {
          const fallback = DEFAULT_LESSONS.find(d => d.lesson_id === item.lesson_id) || DEFAULT_LESSONS[index % DEFAULT_LESSONS.length];
          return {
            ...fallback,
            ...item,
            content: (item.content && item.content.length > 0) ? item.content : fallback.content
          };
        });
        localStorage.setItem(STORAGE_KEYS.CACHED_LESSONS, JSON.stringify(mergedLessons));
        return mergedLessons;
      }
      return this.getLocalLessons();
    } catch (err) {
      console.warn('Cannot fetch lessons from Google Sheets, using offline cached data:', err);
      return this.getLocalLessons();
    }
  }

  getLocalLessons() {
    const cached = localStorage.getItem(STORAGE_KEYS.CACHED_LESSONS);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {}
    }
    return DEFAULT_LESSONS;
  }

  /**
   * 2. Đăng nhập hoặc Tạo hồ sơ bé (login)
   */
  async login(childName, userId, avatar = 'fa-solid fa-child-reaching') {
    if (!this.isConfigured()) {
      return this.localLogin(childName, userId, avatar);
    }

    // 1. Thử qua GET trước (Google Apps Script xử lý GET không bao giờ bị lỗi CORS hay preflight) - Timeout 3.5s
    try {
      const getUrl = `${this.apiUrl}?action=login&childName=${encodeURIComponent(childName)}&userId=${encodeURIComponent(userId || '')}&avatar=${encodeURIComponent(avatar || 'fa-solid fa-child-reaching')}`;
      const response = await fetchWithTimeout(getUrl, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      }, 3500);

      if (response.ok) {
        const text = await response.text();
        if (!text.includes('<!DOCTYPE html>')) {
          const resData = JSON.parse(text);
          if (resData.success && resData.user) {
            this.saveCurrentSession(resData.user, resData.progress || []);
            return { ...resData, isGoogleSynced: true };
          }
        }
      }
    } catch (errGet) {
      console.warn('GET login failed or timed out, trying POST...', errGet);
    }

    // 2. Thử qua POST nếu GET chưa trả về - Timeout 3.5s
    try {
      const response = await fetchWithTimeout(this.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'login',
          childName,
          userId,
          avatar
        }),
      }, 3500);

      if (response.ok) {
        const text = await response.text();
        if (!text.includes('<!DOCTYPE html>')) {
          const resData = JSON.parse(text);
          if (resData.success && resData.user) {
            this.saveCurrentSession(resData.user, resData.progress || []);
            return { ...resData, isGoogleSynced: true };
          }
        }
      }
      return this.localLogin(childName, userId, avatar);
    } catch (err) {
      console.warn('Cannot login via Google Sheets, falling back to local storage:', err);
      return this.localLogin(childName, userId, avatar);
    }
  }

  localLogin(childName, userId, avatar) {
    const usersStr = localStorage.getItem(STORAGE_KEYS.ALL_USERS);
    let users = usersStr ? JSON.parse(usersStr) : [];
    
    // Phân biệt duy nhất theo user_id trước
    let existing = null;
    if (userId) {
      existing = users.find(u => u.user_id.toUpperCase() === userId.trim().toUpperCase());
    } else if (childName) {
      existing = users.find(u => u.child_name.toLowerCase() === childName.trim().toLowerCase());
    }

    const now = new Date().toISOString().split('T')[0];

    if (!existing) {
      const newId = (userId || `U${String(users.length + 1).padStart(3, '0')}`).trim().toUpperCase();
      existing = {
        user_id: newId,
        child_name: childName || `Học viên ${newId}`,
        last_login: now,
        total_stars: 0,
        avatar: avatar || 'fa-solid fa-child-reaching'
      };
      users.push(existing);
      localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(users));
    } else {
      existing.last_login = now;
      if (childName && !childName.startsWith('Học viên')) existing.child_name = childName;
      if (avatar) existing.avatar = avatar;
      localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(users));
    }

    const localProgress = this.getLocalProgress(existing.user_id);
    this.saveCurrentSession(existing, localProgress);

    return {
      success: true,
      user: existing,
      progress: localProgress,
      isLocal: true
    };
  }

  /**
   * 3. Lấy tiến độ học tập cá nhân (getUserProgress) - Timeout 3.5s
   */
  async getUserProgress(userId) {
    if (!this.isConfigured()) {
      return {
        user: this.getCurrentUser(),
        progress: this.getLocalProgress(userId)
      };
    }

    try {
      const response = await fetchWithTimeout(`${this.apiUrl}?action=getUserProgress&userId=${encodeURIComponent(userId)}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      }, 3500);

      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const resData = await response.json();

      if (resData.success && resData.data) {
        if (resData.data.user) {
          localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(resData.data.user));
        }
        if (Array.isArray(resData.data.progress)) {
          this.setLocalProgress(userId, resData.data.progress);
        }
        return resData.data;
      }
      return {
        user: this.getCurrentUser(),
        progress: this.getLocalProgress(userId)
      };
    } catch (err) {
      console.warn('Cannot fetch progress from Google Sheets, using local:', err);
      return {
        user: this.getCurrentUser(),
        progress: this.getLocalProgress(userId)
      };
    }
  }

  /**
   * 4. Lưu và cập nhật tiến độ bài học ngược lên Google Sheets (saveProgress) - Timeout 3.5s
   */
  async saveProgress({ userId, lessonId, status = 'Completed', score = 100, starsToAdd = 3 }) {
    // Luôn luôn cập nhật LocalStorage trước để giao diện mượt mà tức thì
    const now = new Date().toISOString().split('T')[0];
    const currentProgress = this.getLocalProgress(userId);
    const existingIdx = currentProgress.findIndex(p => p.lesson_id === lessonId);

    const progressItem = {
      user_id: userId,
      lesson_id: lessonId,
      status,
      score,
      updated_at: now
    };

    if (existingIdx >= 0) {
      currentProgress[existingIdx] = progressItem;
    } else {
      currentProgress.push(progressItem);
    }
    this.setLocalProgress(userId, currentProgress);

    // Cập nhật sao cho user hiện tại
    const currentUser = this.getCurrentUser();
    if (currentUser && currentUser.user_id === userId) {
      currentUser.total_stars = (currentUser.total_stars || 0) + Number(starsToAdd);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(currentUser));

      const usersStr = localStorage.getItem(STORAGE_KEYS.ALL_USERS);
      if (usersStr) {
        let users = JSON.parse(usersStr);
        const uIdx = users.findIndex(u => u.user_id === userId);
        if (uIdx >= 0) {
          users[uIdx].total_stars = currentUser.total_stars;
          localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(users));
        }
      }
    }

    // Nếu có Google Sheets API, gửi request lưu tiến độ lên Apps Script
    if (this.isConfigured()) {
      // 1. Thử qua GET
      try {
        const getSaveUrl = `${this.apiUrl}?action=saveProgress&userId=${encodeURIComponent(userId)}&lessonId=${encodeURIComponent(lessonId)}&status=${encodeURIComponent(status)}&score=${encodeURIComponent(score)}&starsToAdd=${encodeURIComponent(starsToAdd || 0)}`;
        const res = await fetchWithTimeout(getSaveUrl, { method: 'GET', headers: { 'Accept': 'application/json' } }, 3500);
        if (res.ok) {
          const text = await res.text();
          if (!text.includes('<!DOCTYPE html>')) {
            const resData = JSON.parse(text);
            return { success: true, synced: true, data: resData };
          }
        }
      } catch (eGet) {}

      // 2. Thử qua POST
      try {
        const response = await fetchWithTimeout(this.apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            action: 'saveProgress',
            userId,
            lessonId,
            status,
            score,
            starsToAdd
          }),
        }, 3500);

        const text = await response.text();
        if (!text.includes('<!DOCTYPE html>')) {
          const resData = JSON.parse(text);
          return { success: true, synced: true, data: resData };
        }
        return { success: true, synced: false, isLocal: true };
      } catch (err) {
        console.warn('Saved locally, but failed to sync to Google Sheets:', err);
        return { success: true, synced: false, error: err.message };
      }
    }

    return { success: true, synced: false, isLocal: true };
  }

  /**
   * Kiểm tra kết nối đến Google Apps Script Web App
   */
  async testConnection(testUrl) {
    const url = testUrl || this.apiUrl;
    if (!url) return { success: false, error: 'Chưa nhập URL Google Apps Script' };

    try {
      const response = await fetchWithTimeout(`${url}?action=getLessons`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      }, 5000);

      const text = await response.text();
      if (text.includes('accounts.google.com') || text.includes('ServiceLogin')) {
        return {
          success: false,
          error: 'Chưa mở quyền truy cập công khai! Bạn cần vào Apps Script > Deploy > Sửa "Who has access" thành "Anyone" (Bất kỳ ai).'
        };
      }

      if (text.includes('<!DOCTYPE html>') && text.includes('errorMessage')) {
        return {
          success: false,
          error: 'Google Apps Script báo lỗi trong mã. Hãy mở Apps Script chạy hàm setupDatabase() một lần.'
        };
      }

      let data = null;
      try {
        data = JSON.parse(text);
      } catch (e) {
        return { success: false, error: 'Phản hồi không phải JSON: ' + text.slice(0, 100) };
      }

      // Hỗ trợ cả 2 định dạng: mảng trực tiếp [] hoặc object { success: true, ... }
      if (Array.isArray(data)) {
        return {
          success: true,
          data,
          message: data.length > 0 
            ? `Kết nối thành công! Bảng tính có ${data.length} bài học.`
            : 'Kết nối Google Sheets thành công! (Bảng tính hiện chưa có dòng bài học, app sẽ dùng bài học mẫu).'
        };
      }

      if (data && (data.success || data.status === 'ok' || data.lessons)) {
        return { success: true, data, message: 'Kết nối Google Sheets thành công!' };
      }

      return { success: true, data, message: 'Kết nối Google Sheets thành công!' };
    } catch (e) {
      return { 
        success: false, 
        error: e.message || 'Không thể kết nối đến Web App' 
      };
    }
  }

  saveCurrentSession(user, progress) {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    }
    if (progress && user) {
      this.setLocalProgress(user.user_id, progress);
    }
  }

  getCurrentUser() {
    const u = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (!u) return null;
    try {
      return JSON.parse(u);
    } catch (e) {
      return null;
    }
  }

  logout() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }

  getLocalProgress(userId) {
    const p = localStorage.getItem(`${STORAGE_KEYS.LOCAL_PROGRESS}_${userId}`);
    if (!p) return [];
    try {
      return JSON.parse(p);
    } catch (e) {
      return [];
    }
  }

  setLocalProgress(userId, progress) {
    localStorage.setItem(`${STORAGE_KEYS.LOCAL_PROGRESS}_${userId}`, JSON.stringify(progress));
  }
}

export const api = new ApiService();
