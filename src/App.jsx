import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';
import LessonListScreen from './components/LessonListScreen';
import VocabularyScreen from './components/VocabularyScreen';
import QuizGameScreen from './components/QuizGameScreen';
import TextbookScreen from './components/TextbookScreen';
import VictoryModal from './components/VictoryModal';
import SettingsModal from './components/SettingsModal';
import DisplaySettingsModal from './components/DisplaySettingsModal';
import { api } from './services/api';
import { sound } from './utils/audio';

export default function App() {
  const initialUser = api.getCurrentUser();
  const [user, setUser] = useState(initialUser);
  const [lessons, setLessons] = useState(() => api.getLocalLessons());
  const [progressList, setProgressList] = useState(() => initialUser ? api.getLocalProgress(initialUser.user_id) : []);
  const [currentScreen, setCurrentScreen] = useState(() => initialUser ? 'lesson_list' : 'login'); // 'login' | 'lesson_list' | 'vocabulary' | 'quiz' | 'textbook'
  const [activeLesson, setActiveLesson] = useState(null);
  const [victoryResult, setVictoryResult] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [isGasConnected, setIsGasConnected] = useState(api.isConfigured());

  // Tùy chỉnh kích thước tối ưu cho iPad / Tablet
  const [displayScale, setDisplayScale] = useState(() => {
    try {
      const saved = localStorage.getItem('kids_chinese_display_scale');
      if (saved) return parseInt(saved);
    } catch (e) {}
    // Mặc định tự động 115% nếu là màn hình iPad / Tablet (768px - 1366px)
    if (typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1366) {
      return 115;
    }
    return 100;
  });

  const [layoutWidth, setLayoutWidth] = useState(() => {
    try {
      return localStorage.getItem('kids_chinese_layout_width') || 'standard';
    } catch (e) {
      return 'standard';
    }
  });

  const [showDisplayModal, setShowDisplayModal] = useState(false);

  const handleUpdateScale = (newScale) => {
    setDisplayScale(newScale);
    try {
      localStorage.setItem('kids_chinese_display_scale', newScale.toString());
    } catch (e) {}
  };

  const handleUpdateLayoutWidth = (newWidth) => {
    setLayoutWidth(newWidth);
    try {
      localStorage.setItem('kids_chinese_layout_width', newWidth);
    } catch (e) {}
  };

  const handleQuickZoom = (delta) => {
    const nextVal = Math.min(150, Math.max(80, displayScale + delta));
    handleUpdateScale(nextVal);
  };

  // Đồng bộ ngầm với Google Sheets (Stale-While-Revalidate - tải tức thì < 0.1s không chờ mạng)
  useEffect(() => {
    let isMounted = true;

    // 1. Tải bài học mới nhất từ Google Sheets trong nền
    api.getLessons().then(loadedLessons => {
      if (isMounted && loadedLessons && loadedLessons.length > 0) {
        setLessons(loadedLessons);
      }
    }).catch(err => console.warn('Sync lessons background warning:', err));

    // 2. Tải tiến độ mới nhất trong nền nếu bé đã đăng nhập
    const currentUser = api.getCurrentUser();
    if (currentUser?.user_id) {
      api.getUserProgress(currentUser.user_id).then(userProg => {
        if (!isMounted) return;
        if (userProg && userProg.progress) {
          setProgressList(userProg.progress);
        }
        if (userProg && userProg.user) {
          setUser(userProg.user);
        }
      }).catch(err => console.warn('Sync progress background warning:', err));
    }

    return () => { isMounted = false; };
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

  // Hoàn thành bài tập SGK trong TextbookScreen -> Thưởng sao cho bé
  const handleCompleteTextbookLesson = async (textbookLessonId) => {
    if (!user) return;
    const starsToAdd = 3;

    await api.saveProgress({
      userId: user.user_id,
      lessonId: textbookLessonId,
      status: 'Completed',
      score: 100,
      starsToAdd: starsToAdd
    });

    setUser(prev => ({
      ...prev,
      total_stars: (prev?.total_stars || 0) + starsToAdd
    }));
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

  return (
    <div 
      className="min-h-screen bg-[#F8F9FE] flex flex-col justify-between"
      style={{
        zoom: `${displayScale}%`,
        WebkitTextSizeAdjust: '100%'
      }}
    >
      {/* Header điều hướng */}
      <Header
        user={user}
        onOpenSettings={() => setShowSettings(true)}
        onLogout={handleLogout}
        isGasConnected={isGasConnected}
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        displayScale={displayScale}
        onOpenDisplayModal={() => setShowDisplayModal(true)}
        onQuickZoom={handleQuickZoom}
      />

      {/* Nội dung Màn hình chính */}
      <main className={`flex-1 pb-10 ${
        layoutWidth === 'full' 
          ? 'w-full px-2 sm:px-6' 
          : layoutWidth === 'ipad-pro' 
            ? 'max-w-6xl mx-auto w-full px-3 sm:px-5' 
            : 'max-w-5xl mx-auto w-full px-3 sm:px-4'
      }`}>
        {currentScreen === 'login' && (
          <LoginScreen
            onLogin={handleLogin}
            isGasConnected={isGasConnected}
            onOpenSettings={() => setShowSettings(true)}
            onOpenTextbook={() => setCurrentScreen('textbook')}
          />
        )}

        {currentScreen === 'lesson_list' && (
          <LessonListScreen
            lessons={lessons}
            progressList={progressList}
            onSelectLesson={handleSelectLesson}
            user={user}
            onOpenTextbook={() => setCurrentScreen('textbook')}
          />
        )}

        {currentScreen === 'textbook' && (
          <TextbookScreen
            onBack={() => setCurrentScreen(user ? 'lesson_list' : 'login')}
            onCompleteLesson={handleCompleteTextbookLesson}
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

      {/* Modal Tùy chỉnh kích thước hiển thị cho iPad / Màn hình */}
      <DisplaySettingsModal
        isOpen={showDisplayModal}
        onClose={() => setShowDisplayModal(false)}
        scale={displayScale}
        onChangeScale={handleUpdateScale}
        layoutWidth={layoutWidth}
        onChangeLayoutWidth={handleUpdateLayoutWidth}
      />

      {/* Footer nhỏ nhẹ */}
      <footer className="text-center py-3 text-xs font-bold text-slate-400 border-t border-slate-200 bg-white">
        Kids Chinese Learning App • Song Ngữ Trung - Việt • Hỗ trợ tài liệu SGK tailieuhoc & Chuẩn YCT 1
      </footer>
    </div>
  );
}
