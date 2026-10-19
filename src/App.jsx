import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';
import LessonListScreen from './components/LessonListScreen';
import VocabularyScreen from './components/VocabularyScreen';
import QuizGameScreen from './components/QuizGameScreen';
import VictoryModal from './components/VictoryModal';
import SettingsModal from './components/SettingsModal';
import { api } from './services/api';
import { sound } from './utils/audio';

export default function App() {
  const [user, setUser] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login' | 'lesson_list' | 'vocabulary' | 'quiz'
  const [activeLesson, setActiveLesson] = useState(null);
  const [victoryResult, setVictoryResult] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [isGasConnected, setIsGasConnected] = useState(api.isConfigured());
  const [isLoading, setIsLoading] = useState(true);

  // Khởi tạo và tải dữ liệu ban đầu
  useEffect(() => {
    async function initApp() {
      setIsLoading(true);
      // 1. Tải danh sách bài học
      const loadedLessons = await api.getLessons();
      setLessons(loadedLessons);

      // 2. Kiểm tra xem bé đã đăng nhập trước đó chưa
      const currentUser = api.getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        const userProg = await api.getUserProgress(currentUser.user_id);
        if (userProg && userProg.progress) {
          setProgressList(userProg.progress);
        }
        if (userProg && userProg.user) {
          setUser(userProg.user);
        }
        setCurrentScreen('lesson_list');
      }

      setIsLoading(false);
    }

    initApp();
  }, []);

  // Đăng nhập bé
  const handleLogin = async (childName, userId, avatar) => {
    const res = await api.login(childName, userId, avatar);
    if (res && res.user) {
      setUser(res.user);
      setProgressList(res.progress || []);
      setCurrentScreen('lesson_list');
    }
  };

  // Đăng xuất bé
  const handleLogout = () => {
    api.logout();
    setUser(null);
    setProgressList([]);
    setCurrentScreen('login');
  };

  // Chọn bài học từ danh sách
  const handleSelectLesson = (lesson, mode = 'learn') => {
    setActiveLesson(lesson);
    if (mode === 'quiz') {
      setCurrentScreen('quiz');
    } else {
      setCurrentScreen('vocabulary');
    }
  };

  // Bắt đầu Mini-game sau khi học xong từ vựng
  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
  };

  // Hoàn thành Mini-game & Tự động lưu tiến độ lên Google Sheets
  const handleCompleteQuiz = async (result) => {
    if (!user || !activeLesson) return;

    // Lưu tiến độ và cộng sao
    const saveRes = await api.saveProgress({
      userId: user.user_id,
      lessonId: activeLesson.lesson_id,
      status: 'Completed',
      score: result.score,
      starsToAdd: result.stars
    });

    // Cập nhật state nội bộ
    setUser(prev => ({
      ...prev,
      total_stars: (prev?.total_stars || 0) + result.stars
    }));

    setProgressList(prev => {
      const idx = prev.findIndex(p => p.lesson_id === activeLesson.lesson_id);
      const updatedItem = {
        user_id: user.user_id,
        lesson_id: activeLesson.lesson_id,
        status: 'Completed',
        score: result.score,
        updated_at: new Date().toISOString().split('T')[0]
      };
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = updatedItem;
        return copy;
      }
      return [...prev, updatedItem];
    });

    // Mở màn hình pháo hoa chiến thắng
    setVictoryResult({
      ...result,
      isSynced: saveRes?.synced
    });
  };

  // Nút Ôn tập lại trong màn hình chiến thắng
  const handleReplayLesson = () => {
    setVictoryResult(null);
    setCurrentScreen('vocabulary');
  };

  // Nút Bài tiếp theo trong màn hình chiến thắng
  const handleNextLesson = () => {
    setVictoryResult(null);
    const currentIndex = lessons.findIndex(l => l.lesson_id === activeLesson.lesson_id);
    if (currentIndex >= 0 && currentIndex < lessons.length - 1) {
      setActiveLesson(lessons[currentIndex + 1]);
      setCurrentScreen('vocabulary');
    } else {
      setCurrentScreen('lesson_list');
    }
  };

  // Lưu cấu hình URL Google Apps Script
  const handleSaveApiUrl = async (newUrl) => {
    api.setApiUrl(newUrl);
    setIsGasConnected(api.isConfigured());

    if (api.isConfigured()) {
      // Tải lại bài học và tiến độ theo link mới
      const refreshedLessons = await api.getLessons();
      setLessons(refreshedLessons);
      if (user) {
        const res = await api.getUserProgress(user.user_id);
        if (res && res.progress) setProgressList(res.progress);
        if (res && res.user) setUser(res.user);
      }
    }
  };

  // Tải lại dữ liệu trực tiếp từ Google Sheets
  const handleSyncNow = async () => {
    const refreshedLessons = await api.getLessons();
    setLessons(refreshedLessons);
    if (user) {
      const res = await api.getUserProgress(user.user_id);
      if (res && res.progress) setProgressList(res.progress);
      if (res && res.user) setUser(res.user);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="text-7xl animate-bounce-slow">🐼</div>
          <div className="text-2xl font-black text-slate-800">Kids Chinese</div>
          <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-bold text-slate-500">Đang khởi động ứng dụng học tiếng Trung cho bé...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FE] flex flex-col justify-between">
      {/* Header điều hướng */}
      <Header
        user={user}
        onOpenSettings={() => setShowSettings(true)}
        onLogout={handleLogout}
        isGasConnected={isGasConnected}
      />

      {/* Nội dung Màn hình chính */}
      <main className="flex-1 pb-10">
        {currentScreen === 'login' && (
          <LoginScreen
            onLogin={handleLogin}
            isGasConnected={isGasConnected}
            onOpenSettings={() => setShowSettings(true)}
          />
        )}

        {currentScreen === 'lesson_list' && (
          <LessonListScreen
            lessons={lessons}
            progressList={progressList}
            onSelectLesson={handleSelectLesson}
            user={user}
          />
        )}

        {currentScreen === 'vocabulary' && activeLesson && (
          <VocabularyScreen
            lesson={activeLesson}
            onBack={() => setCurrentScreen('lesson_list')}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {currentScreen === 'quiz' && activeLesson && (
          <QuizGameScreen
            lesson={activeLesson}
            onBack={() => setCurrentScreen('lesson_list')}
            onComplete={handleCompleteQuiz}
          />
        )}
      </main>

      {/* Màn hình tung hoa chúc mừng khi hoàn thành bài */}
      {victoryResult && activeLesson && (
        <VictoryModal
          result={victoryResult}
          lesson={activeLesson}
          onReplay={handleReplayLesson}
          onNext={handleNextLesson}
          onClose={() => {
            setVictoryResult(null);
            setCurrentScreen('lesson_list');
          }}
          isSynced={victoryResult.isSynced}
        />
      )}

      {/* Modal Cài đặt kết nối Google Sheets */}
      {showSettings && (
        <SettingsModal
          currentUrl={api.getApiUrl()}
          onSaveUrl={handleSaveApiUrl}
          onClose={() => setShowSettings(false)}
          onTestConnection={(url) => api.testConnection(url)}
          onSyncNow={handleSyncNow}
        />
      )}

      {/* Footer nhỏ nhẹ */}
      <footer className="text-center py-3 text-xs font-bold text-slate-400 border-t border-slate-200 bg-white">
        Kids Chinese Learning App • Song Ngữ Trung - Việt • Hỗ trợ đồng bộ Google Sheets API
      </footer>
    </div>
  );
}
