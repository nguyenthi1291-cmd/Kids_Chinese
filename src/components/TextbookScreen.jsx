import React, { useState, useEffect } from 'react';
import { TEXTBOOK_LESSONS, TEXTBOOK_PAGES_66 } from '../data/textbookData';
import { sound } from '../utils/audio';

export default function TextbookScreen({ onBack, onCompleteLesson }) {
  // Chế độ xem: 'curriculum' (Lộ trình 13 bài học) | 'flipbook' (Lật sách 66 trang)
  const [viewMode, setViewMode] = useState('curriculum');
  
  // Trạng thái Lộ trình bài học
  const [activeLessonId, setActiveLessonId] = useState(TEXTBOOK_LESSONS[0].id);
  const [activeTab, setActiveTab] = useState('text'); // 'text' | 'vocab' | 'strokes' | 'dialogue' | 'quiz'
  const [playingSentenceIndex, setPlayingSentenceIndex] = useState(null);
  const [curriculumFilter, setCurriculumFilter] = useState('all'); // 'all' | 'part1' | 'part2'
  
  // Trạng thái bài tập của lộ trình
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [exerciseResults, setExerciseResults] = useState({});
  const [completedQuizzes, setCompletedQuizzes] = useState(false);

  // Trạng thái Lật sách 66 trang
  const [currentPageIndex, setCurrentPageIndex] = useState(1); // 1 to 66
  const [showGridModal, setShowGridModal] = useState(false);
  const [isReadingPage, setIsReadingPage] = useState(false);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);

  const currentLesson = TEXTBOOK_LESSONS.find(l => l.id === activeLessonId) || TEXTBOOK_LESSONS[0];
  const currentPage = TEXTBOOK_PAGES_66.find(p => p.pageIndex === currentPageIndex) || TEXTBOOK_PAGES_66[0];

  // Reset trạng thái bài tập khi đổi bài
  useEffect(() => {
    setSelectedAnswers({});
    setExerciseResults({});
    setCompletedQuizzes(false);
    setPlayingSentenceIndex(null);
  }, [activeLessonId]);

  // Reset trạng thái lật thẻ khi chuyển trang sách
  useEffect(() => {
    setFlashcardFlipped(false);
    setIsReadingPage(false);
  }, [currentPageIndex]);

  // Đọc toàn bộ bài khóa
  const handlePlayFullText = async (slow = false) => {
    sound.playPop();
    const sentences = currentLesson.readingText;
    for (let i = 0; i < sentences.length; i++) {
      setPlayingSentenceIndex(i);
      const s = sentences[i];
      if (slow) {
        sound.speakSlowly(s.cn);
      } else {
        sound.speak(s.cn, 0.75);
      }
      const delay = Math.max(1600, s.cn.length * 450);
      await new Promise(r => setTimeout(r, delay));
    }
    setPlayingSentenceIndex(null);
  };

  // Đọc âm thanh cho trang sách 66 trang
  const handleReadCurrentPage = (slow = false) => {
    sound.playPop();
    setIsReadingPage(true);
    const textToRead = currentPage.audioText || currentPage.content;
    if (slow) {
      sound.speakSlowly(textToRead);
    } else {
      sound.speak(textToRead, 0.75);
    }
    setTimeout(() => {
      setIsReadingPage(false);
    }, Math.max(2000, textToRead.length * 400));
  };

  // Trả lời bài tập trắc nghiệm
  const handleAnswerExercise = (exerciseId, option, correctAnswer) => {
    sound.playPop();
    const isCorrect = option === correctAnswer;
    setSelectedAnswers(prev => ({ ...prev, [exerciseId]: option }));
    setExerciseResults(prev => ({ ...prev, [exerciseId]: isCorrect }));

    if (isCorrect) {
      sound.playSuccess();
    } else {
      sound.playError();
    }

    const allEx = currentLesson.exercises;
    const newAnswers = { ...selectedAnswers, [exerciseId]: option };
    const allDone = allEx.every(ex => newAnswers[ex.id] === ex.correctAnswer);
    if (allDone) {
      setTimeout(() => {
        setCompletedQuizzes(true);
        sound.playFanfare();
        if (onCompleteLesson) {
          onCompleteLesson(currentLesson.id);
        }
      }, 600);
    }
  };

  // Lọc bài học theo phần
  const filteredLessons = TEXTBOOK_LESSONS.filter(l => {
    if (curriculumFilter === 'part1') return l.lessonNumber <= 5;
    if (curriculumFilter === 'part2') return l.lessonNumber >= 6;
    return true;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-4 sm:py-6 space-y-6">
      {/* 1. Header & Điều hướng chính */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-3xl border-2 border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playPop();
              onBack();
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-black text-xs sm:text-sm transition-all btn-bouncy"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Về Trang Chủ</span>
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-rose-500 text-white text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Trọn bộ 66 Trang
              </span>
              <span className="text-xs font-bold text-slate-500 hidden sm:inline">
                Sách Giáo Khoa Tiếng Hoa Lớp 1
              </span>
            </div>
            <h1 className="text-lg sm:text-2xl font-black text-slate-800 flex items-center gap-2">
              <span>Sách Giáo Khoa Tiếng Hoa</span>
              <span className="text-amber-500">📖</span>
            </h1>
          </div>
        </div>

        {/* Chuyển đổi 2 chế độ học */}
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 w-full sm:w-auto">
          <button
            onClick={() => {
              sound.playPop();
              setViewMode('curriculum');
            }}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl font-black text-xs sm:text-sm transition-all ${
              viewMode === 'curriculum'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-layer-group"></i>
            <span>Lộ Trình 13 Bài</span>
          </button>
          <button
            onClick={() => {
              sound.playPop();
              setViewMode('flipbook');
            }}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl font-black text-xs sm:text-sm transition-all ${
              viewMode === 'flipbook'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-book-open"></i>
            <span>Lật Sách 66 Trang</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CHẾ ĐỘ 1: LỘ TRÌNH BÀI HỌC THEO THỨ TỰ TRANG SÁCH & LOGIC (BÀI 1 -> BÀI 13) */}
      {/* ========================================================================= */}
      {viewMode === 'curriculum' && (
        <div className="space-y-6">
          {/* Bộ lọc bài học: Phần 1 (Tượng hình 1-5) vs Phần 2 (Bài khóa 6-13) */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-amber-50/70 p-3 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-1.5 text-xs font-black text-amber-900">
              <i className="fa-solid fa-filter text-amber-600"></i>
              <span>Phân loại nội dung:</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => { sound.playPop(); setCurriculumFilter('all'); }}
                className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
                  curriculumFilter === 'all'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                Tất cả (13 Bài • 66 Trang)
              </button>
              <button
                onClick={() => { sound.playPop(); setCurriculumFilter('part1'); }}
                className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
                  curriculumFilter === 'part1'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200'
                }`}
              >
                Phần 1: Chữ Tượng Hình (Bài 1 - 5)
              </button>
              <button
                onClick={() => { sound.playPop(); setCurriculumFilter('part2'); }}
                className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
                  curriculumFilter === 'part2'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-rose-50 border border-slate-200'
                }`}
              >
                Phần 2: Bài Khóa Lớp 1 (Bài 6 - 13)
              </button>
            </div>
          </div>

          {/* Thanh cuộn ngang các bài học theo thứ tự trang */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filteredLessons.map((lesson) => {
              const isActive = lesson.id === activeLessonId;
              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    sound.playPop();
                    setActiveLessonId(lesson.id);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition-all border-2 shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white border-amber-500 shadow-md scale-105'
                      : 'bg-white hover:bg-amber-50 text-slate-700 border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <i className={`${lesson.icon} text-sm sm:text-base`}></i>
                  <span>Bài {lesson.lessonNumber}: {lesson.title}</span>
                </button>
              );
            })}
          </div>

          {/* Header Banner Bài Học Hiện Tại */}
          <div className={`p-5 sm:p-7 rounded-3xl bg-gradient-to-r ${currentLesson.themeColor} text-white shadow-lg border-4 ${currentLesson.borderColor} relative overflow-hidden`}>
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/25 backdrop-blur-sm text-xs font-black mb-2">
                  <i className="fa-solid fa-book-bookmark"></i>
                  <span>{currentLesson.part} • {currentLesson.pageRange}</span>
                </div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight">{currentLesson.title}</h2>
                  <span className="text-lg sm:text-2xl font-bold opacity-90">{currentLesson.titlePinyin}</span>
                </div>
                <p className="text-base sm:text-lg font-bold opacity-95 mt-1">
                  Ý nghĩa: <span className="underline decoration-white/60">{currentLesson.titleVn}</span>
                </p>
                <p className="text-xs sm:text-sm text-white/90 mt-2 max-w-xl font-medium">
                  {currentLesson.description}
                </p>
              </div>

              <div className="flex sm:flex-col items-center gap-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-inner border border-white/40 shrink-0">
                  <i className={currentLesson.icon}></i>
                </div>
                <button
                  onClick={() => {
                    sound.playPop();
                    // Nhảy sang trang sách đầu tiên của bài này trong chế độ flipbook
                    const firstPageNum = currentLesson.lessonNumber === 1 ? 1 : 
                      currentLesson.lessonNumber === 2 ? 3 :
                      currentLesson.lessonNumber === 3 ? 11 :
                      currentLesson.lessonNumber === 4 ? 21 :
                      currentLesson.lessonNumber === 5 ? 31 :
                      currentLesson.lessonNumber === 6 ? 36 :
                      currentLesson.lessonNumber === 7 ? 39 :
                      currentLesson.lessonNumber === 8 ? 43 :
                      currentLesson.lessonNumber === 9 ? 47 :
                      currentLesson.lessonNumber === 10 ? 51 :
                      currentLesson.lessonNumber === 11 ? 55 :
                      currentLesson.lessonNumber === 12 ? 59 : 63;
                    setCurrentPageIndex(firstPageNum);
                    setViewMode('flipbook');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-slate-800 text-[11px] font-black shadow-sm transition-all"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square mr-1"></i>
                  Xem Trang Sách Gốc
                </button>
              </div>
            </div>
          </div>

          {/* Thanh Menu chức năng của bài */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => { sound.playPop(); setActiveTab('text'); }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm transition-all ${
                activeTab === 'text'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <i className="fa-solid fa-book-open text-amber-500"></i>
              <span>Bài Khóa</span>
            </button>

            <button
              onClick={() => { sound.playPop(); setActiveTab('vocab'); }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm transition-all ${
                activeTab === 'vocab'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <i className="fa-solid fa-shapes text-rose-500"></i>
              <span>Từ Vựng ({currentLesson.vocabulary.length})</span>
            </button>

            <button
              onClick={() => { sound.playPop(); setActiveTab('strokes'); }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm transition-all ${
                activeTab === 'strokes'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <i className="fa-solid fa-pen-nib text-indigo-500"></i>
              <span>Tập Viết Nét</span>
            </button>

            <button
              onClick={() => { sound.playPop(); setActiveTab('dialogue'); }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm transition-all ${
                activeTab === 'dialogue'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <i className="fa-solid fa-comments text-emerald-500"></i>
              <span>Luyện Nói</span>
            </button>

            <button
              onClick={() => { sound.playPop(); setActiveTab('quiz'); }}
              className={`col-span-2 sm:col-span-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm transition-all ${
                activeTab === 'quiz'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <i className="fa-solid fa-puzzle-piece text-amber-600"></i>
              <span>Bài Tập</span>
            </button>
          </div>

          {/* ================= TAB 1: BÀI KHÓA (课文) ================= */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-amber-50/60 p-3.5 rounded-2xl border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm">
                  <i className="fa-solid fa-headphones text-amber-600"></i>
                  <span>Bé hãy bấm vào từng câu hoặc bấm nút bên phải để nghe cô giáo đọc mẫu nhé!</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePlayFullText(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs shadow-sm transition-all btn-bouncy"
                  >
                    <i className="fa-solid fa-volume-high"></i>
                    <span>Đọc Toàn Bài</span>
                  </button>
                  <button
                    onClick={() => handlePlayFullText(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs shadow-sm transition-all btn-bouncy"
                  >
                    <span>🐢 Đọc Chậm</span>
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-sm space-y-4">
                {currentLesson.readingText.map((sentence, idx) => {
                  const isPlaying = playingSentenceIndex === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        sound.playPop();
                        setPlayingSentenceIndex(idx);
                        sound.speak(sentence.cn, 0.75);
                        setTimeout(() => setPlayingSentenceIndex(null), 2500);
                      }}
                      className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isPlaying
                          ? 'bg-amber-100 border-amber-400 shadow-md scale-[1.02]'
                          : 'bg-slate-50 hover:bg-amber-50/60 border-slate-200 hover:border-amber-300'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-xs sm:text-sm font-bold text-slate-400 font-mono tracking-wider">
                          {sentence.pinyin}
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-slate-800 font-kids tracking-wide">
                          {sentence.cn}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-amber-800">
                          {sentence.vn}
                        </div>
                      </div>

                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm shrink-0 transition-all ${
                        isPlaying
                          ? 'bg-amber-500 text-white animate-pulse'
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}>
                        <i className="fa-solid fa-volume-high"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= TAB 2: TỪ VỰNG (生字词) ================= */}
          {activeTab === 'vocab' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentLesson.vocabulary.map((vocab, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm hover:border-amber-300 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {vocab.strokes} nét • Bộ {vocab.radical}
                      </span>
                      <button
                        onClick={() => {
                          sound.playPop();
                          sound.speak(vocab.cn, 0.7);
                        }}
                        className="w-8 h-8 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-800 flex items-center justify-center text-xs transition-all btn-bouncy"
                        title="Phát âm từ này"
                      >
                        <i className="fa-solid fa-volume-high"></i>
                      </button>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-400 font-mono">{vocab.pinyin}</div>
                      <div className="text-3xl font-black text-slate-800 tracking-wide">{vocab.cn}</div>
                      <div className="text-sm font-black text-amber-700">{vocab.vn}</div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      💡 {vocab.note}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      sound.playPop();
                      sound.speakSlowly(vocab.cn);
                    }}
                    className="w-full py-1.5 rounded-xl bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 font-black text-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>🐢 Nghe chậm</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* ================= TAB 3: TẬP VIẾT NÉT (笔顺) ================= */}
          {activeTab === 'strokes' && (
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-200 text-indigo-900 text-xs sm:text-sm font-bold flex items-center gap-2">
                <i className="fa-solid fa-pen-fancy text-indigo-600"></i>
                <span>Hướng dẫn quy tắc viết chuẩn từng nét bút theo thứ tự trong sách giáo khoa:</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentLesson.strokeGuide.map((stroke, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center text-3xl font-black text-indigo-700">
                          {stroke.char}
                        </div>
                        <div>
                          <div className="text-xs font-mono font-bold text-slate-400">{stroke.pinyin}</div>
                          <div className="text-base font-black text-slate-800">{stroke.meaning}</div>
                          <div className="text-xs font-bold text-indigo-600">{stroke.strokesTotal} nét</div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          sound.playPop();
                          sound.speak(stroke.char);
                        }}
                        className="w-9 h-9 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-800 flex items-center justify-center text-sm transition-all"
                      >
                        <i className="fa-solid fa-volume-high"></i>
                      </button>
                    </div>

                    <div>
                      <div className="text-xs font-black text-slate-500 mb-2">
                        Thứ tự từng nét (Quy tắc bút thuận):
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stroke.strokeSteps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700"
                          >
                            <span className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                              {sIdx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200">
                      <span className="font-bold text-amber-800">Cấu tạo: </span>
                      <span>{stroke.structure}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB 4: LUYỆN NÓI (会话) ================= */}
          {activeTab === 'dialogue' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-sm space-y-5">
              <div className="text-sm font-black text-slate-700 border-b border-slate-100 pb-3 flex items-center gap-2">
                <i className="fa-solid fa-comments text-emerald-500"></i>
                <span>Đoạn hội thoại mẫu cho bé luyện nói cùng bạn bè và người thân:</span>
              </div>

              <div className="space-y-4">
                {currentLesson.dialogues.map((dlg, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-emerald-800 text-xs sm:text-sm">
                        {dlg.speaker} ({dlg.role})
                      </span>
                      <button
                        onClick={() => {
                          sound.playPop();
                          sound.speak(dlg.cn, 0.8);
                        }}
                        className="px-2.5 py-1 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-black transition-all flex items-center gap-1"
                      >
                        <i className="fa-solid fa-volume-high"></i>
                        <span>Nghe</span>
                      </button>
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-400">{dlg.pinyin}</div>
                    <div className="text-lg sm:text-xl font-black text-slate-800 font-kids">{dlg.cn}</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-900">{dlg.vn}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB 5: BÀI TẬP (练习) ================= */}
          {activeTab === 'quiz' && (
            <div className="space-y-5">
              {completedQuizzes && (
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-5 rounded-3xl shadow-lg flex items-center justify-between gap-4 animate-bounce">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🎉</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-black">Xuất Sắc! Bé Đã Hoàn Thành Bài Tập!</h3>
                      <p className="text-xs sm:text-sm opacity-90">Bé đã nắm vững kiến thức trọng tâm của bài học này.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      sound.playPop();
                      // Chuyển sang bài tiếp theo nếu có
                      const currentIndex = TEXTBOOK_LESSONS.findIndex(l => l.id === activeLessonId);
                      if (currentIndex < TEXTBOOK_LESSONS.length - 1) {
                        setActiveLessonId(TEXTBOOK_LESSONS[currentIndex + 1].id);
                      }
                    }}
                    className="px-4 py-2 rounded-2xl bg-white text-emerald-700 font-black text-xs sm:text-sm shadow-md hover:bg-emerald-50 transition-all shrink-0"
                  >
                    <span>Bài Tiếp Theo</span>
                    <i className="fa-solid fa-arrow-right ml-1.5"></i>
                  </button>
                </div>
              )}

              <div className="space-y-4">
                {currentLesson.exercises.map((ex, idx) => {
                  const userAnswer = selectedAnswers[ex.id];
                  const isAnswered = userAnswer !== undefined;
                  const isCorrect = exerciseResults[ex.id];

                  return (
                    <div
                      key={ex.id}
                      className="bg-white p-5 sm:p-6 rounded-3xl border-2 border-slate-200 shadow-sm space-y-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="text-base font-black text-slate-800">{ex.question}</h4>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {ex.options.map((opt, oIdx) => {
                          const isThisSelected = userAnswer === opt;
                          let btnStyle = 'bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-700';

                          if (isAnswered) {
                            if (opt === ex.correctAnswer) {
                              btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-black shadow-md';
                            } else if (isThisSelected) {
                              btnStyle = 'bg-rose-500 text-white border-rose-600 font-black';
                            } else {
                              btnStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              disabled={isAnswered}
                              onClick={() => handleAnswerExercise(ex.id, opt, ex.correctAnswer)}
                              className={`p-3.5 rounded-2xl border-2 text-left font-bold text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {isAnswered && opt === ex.correctAnswer && (
                                <i className="fa-solid fa-circle-check text-white"></i>
                              )}
                              {isAnswered && isThisSelected && opt !== ex.correctAnswer && (
                                <i className="fa-solid fa-circle-xmark text-white"></i>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <div className={`p-3 rounded-2xl text-xs font-bold ${
                          isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}>
                          <span className="font-black">{isCorrect ? '✨ Chính xác!' : '💡 Gợi ý giải thích:'} </span>
                          <span>{ex.explanation}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* CHẾ ĐỘ 2: LẬT SÁCH 66 TRANG (TRANG 1 ➔ TRANG 66 [SÁCH GỐC TRANG 4 ➔ 69]) */}
      {/* ========================================================================= */}
      {viewMode === 'flipbook' && (
        <div className="space-y-6">
          {/* Thanh điều khiển trang sách (Pagination & Slider) */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border-2 border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPageIndex <= 1}
                  onClick={() => {
                    sound.playPop();
                    setCurrentPageIndex(prev => Math.max(1, prev - 1));
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-black text-xs sm:text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed btn-bouncy"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                  <span>Trang Trước</span>
                </button>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-black text-slate-800">
                  <span>Trang {currentPageIndex}</span>
                  <span className="text-slate-400">/ 66</span>
                  <span className="text-[10px] text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full ml-1">
                    Sách gốc: p.{currentPage.bookPage}
                  </span>
                </div>

                <button
                  disabled={currentPageIndex >= 66}
                  onClick={() => {
                    sound.playPop();
                    setCurrentPageIndex(prev => Math.min(66, prev + 1));
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-black text-xs sm:text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed btn-bouncy"
                >
                  <span>Trang Sau</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>

              {/* Nút mở lưới ma trận 66 trang */}
              <button
                onClick={() => {
                  sound.playPop();
                  setShowGridModal(!showGridModal);
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-black text-xs sm:text-sm border border-indigo-200 transition-all"
              >
                <i className="fa-solid fa-table-cells"></i>
                <span>{showGridModal ? 'Ẩn Lưới 66 Trang' : 'Mục Lục 66 Trang'}</span>
              </button>
            </div>

            {/* Thanh trượt Range chọn nhanh trang từ 1 đến 66 */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-[11px] font-black text-slate-400">
                <span>Trang 1 (Bắt đầu)</span>
                <span className="text-amber-600 font-black">Kéo để lật nhanh trang (Trang {currentPageIndex})</span>
                <span>Trang 66 (Kết thúc)</span>
              </div>
              <input
                type="range"
                min="1"
                max="66"
                value={currentPageIndex}
                onChange={(e) => {
                  setCurrentPageIndex(parseInt(e.target.value));
                }}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Lưới chọn trang ma trận 66 ô (Hiện khi bấm nút Mục Lục) */}
            {showGridModal && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3 mt-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-700">
                    Bấm vào số trang bất kỳ để mở ngay lập tức:
                  </span>
                  <span className="text-[11px] text-slate-400">Đủ 66 trang sách gốc</span>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-11 gap-1.5 max-h-60 overflow-y-auto p-1">
                  {TEXTBOOK_PAGES_66.map((p) => {
                    const isSelected = p.pageIndex === currentPageIndex;
                    return (
                      <button
                        key={p.pageIndex}
                        onClick={() => {
                          sound.playPop();
                          setCurrentPageIndex(p.pageIndex);
                          setShowGridModal(false);
                        }}
                        className={`h-9 rounded-xl font-black text-xs transition-all border ${
                          isSelected
                            ? 'bg-amber-500 text-white border-amber-600 shadow-md scale-105'
                            : 'bg-white hover:bg-amber-100 text-slate-700 border-slate-200'
                        }`}
                        title={`Trang ${p.pageIndex}: ${p.title}`}
                      >
                        {p.pageIndex}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Giao diện Trang Sách Giả Lập Cổ Điển (Classic Paper Page Card) */}
          <div className="bg-[#FFFDF9] rounded-3xl border-4 border-[#F0E6D2] shadow-xl p-6 sm:p-10 space-y-6 relative overflow-hidden">
            {/* Dải nẹp trang sách màu đỏ truyền thống */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-400 via-amber-400 to-red-400"></div>

            {/* Header thông tin trang sách */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-[#E8DCBF] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-black text-xs">
                    {currentPage.category}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {currentPage.unitTitle}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 mt-1">
                  {currentPage.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleReadCurrentPage(false)}
                  disabled={isReadingPage}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm shadow-md transition-all btn-bouncy disabled:opacity-60"
                >
                  <i className="fa-solid fa-volume-high"></i>
                  <span>{isReadingPage ? 'Đang đọc...' : 'Nghe Đọc Trang'}</span>
                </button>
                <button
                  onClick={() => handleReadCurrentPage(true)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs sm:text-sm shadow-md transition-all btn-bouncy"
                  title="Đọc chậm cho bé tập theo"
                >
                  <span>🐢 Đọc Chậm</span>
                </button>
              </div>
            </div>

            {/* Khung nội dung chữ Hán to đẹp của trang sách */}
            <div className="bg-white/80 p-6 sm:p-8 rounded-3xl border-2 border-[#EADBB8] shadow-sm text-center space-y-4">
              <div className="text-sm sm:text-base font-mono font-bold text-amber-700 tracking-wider">
                {currentPage.pinyin}
              </div>
              <div className="text-3xl sm:text-5xl font-black text-slate-800 font-kids tracking-widest leading-relaxed">
                {currentPage.content}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-600 border-t border-slate-100 pt-3 max-w-2xl mx-auto">
                Dịch nghĩa: <span className="text-slate-800 font-extrabold">{currentPage.meaning}</span>
              </div>
            </div>

            {/* Danh sách từ khóa & nét chữ trọng tâm của trang này */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-700 flex items-center gap-2">
                <i className="fa-solid fa-highlighter text-amber-500"></i>
                <span>Từ khóa & Nét chữ trọng tâm của Trang {currentPageIndex}:</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {currentPage.keyWords.map((kw, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      sound.playPop();
                      sound.speak(kw.cn, 0.7);
                    }}
                    className="p-3 bg-white rounded-2xl border-2 border-slate-200 hover:border-amber-400 shadow-sm transition-all cursor-pointer text-center space-y-1 hover:scale-105"
                  >
                    <div className="text-[11px] font-mono text-slate-400 font-bold">{kw.py}</div>
                    <div className="text-2xl font-black text-slate-800">{kw.cn}</div>
                    <div className="text-xs font-black text-amber-700">{kw.vn}</div>
                    {kw.note && (
                      <div className="text-[10px] text-slate-400 font-medium">{kw.note}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Ghi chú sư phạm & Hướng dẫn bé học */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium space-y-1">
              <div className="font-black text-amber-800 flex items-center gap-1.5">
                <i className="fa-solid fa-lightbulb"></i>
                <span>Hướng dẫn học & Quy tắc nét bút của trang này:</span>
              </div>
              <p>{currentPage.strokesNotes}</p>
            </div>

            {/* Thẻ ghi nhớ Flashcard lật mặt để tự kiểm tra */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-dashed border-[#E8DCBF]">
              <div className="text-xs text-slate-500 font-bold">
                💡 Bé hãy thử che mặt chữ và đọc to phát âm trước khi lật trang tiếp theo nhé!
              </div>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPageIndex <= 1}
                  onClick={() => {
                    sound.playPop();
                    setCurrentPageIndex(prev => Math.max(1, prev - 1));
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs transition-all disabled:opacity-40"
                >
                  ← Trang trước
                </button>
                <button
                  disabled={currentPageIndex >= 66}
                  onClick={() => {
                    sound.playPop();
                    setCurrentPageIndex(prev => Math.min(66, prev + 1));
                  }}
                  className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs transition-all disabled:opacity-40"
                >
                  Sang trang sau →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
