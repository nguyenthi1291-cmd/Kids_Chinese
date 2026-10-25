import React, { useState, useEffect } from 'react';
import { TEXTBOOK_LESSONS } from '../data/textbookData';
import { sound } from '../utils/audio';

export default function TextbookScreen({ onBack, onCompleteLesson }) {
  const [activeLessonId, setActiveLessonId] = useState(TEXTBOOK_LESSONS[0].id);
  const [activeTab, setActiveTab] = useState('text'); // 'text' | 'vocab' | 'strokes' | 'dialogue' | 'quiz'
  const [playingSentenceIndex, setPlayingSentenceIndex] = useState(null);
  
  // Trạng thái bài tập
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [exerciseResults, setExerciseResults] = useState({});
  const [completedQuizzes, setCompletedQuizzes] = useState(false);

  const currentLesson = TEXTBOOK_LESSONS.find(l => l.id === activeLessonId) || TEXTBOOK_LESSONS[0];

  // Reset trạng thái bài tập khi đổi bài
  useEffect(() => {
    setSelectedAnswers({});
    setExerciseResults({});
    setCompletedQuizzes(false);
    setPlayingSentenceIndex(null);
  }, [activeLessonId]);

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
      // Khoảng nghỉ giữa các câu dựa theo độ dài câu
      const delay = Math.max(1600, s.cn.length * 450);
      await new Promise(r => setTimeout(r, delay));
    }
    setPlayingSentenceIndex(null);
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

    // Kiểm tra xem đã hoàn thành hết bài tập của bài chưa
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Thanh điều hướng quay lại & Tiêu đề trang */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-3xl border-2 border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playPop();
              onBack();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-black text-sm transition-all btn-bouncy"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Về Trang Chủ</span>
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-rose-500 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase">
                Tài Liệu Học Tập
              </span>
              <span className="text-xs font-bold text-slate-500">{currentLesson.pageRange}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-800">
              Sách Giáo Khoa Tiếng Hoa Lớp 1 📖
            </h1>
          </div>
        </div>

        {/* Nút nghe đọc tổng thể */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePlayFullText(false)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm shadow-md transition-all btn-bouncy"
            title="Đọc toàn bộ bài khóa"
          >
            <i className="fa-solid fa-volume-high"></i>
            <span>Đọc Toàn Bài</span>
          </button>
          <button
            onClick={() => handlePlayFullText(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs sm:text-sm shadow-md transition-all btn-bouncy"
            title="Đọc chậm từng từ cho bé nghe rõ"
          >
            <span>🐢 Đọc Chậm</span>
          </button>
        </div>
      </div>

      {/* Danh sách các bài học (Carousel / Tabs bài) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {TEXTBOOK_LESSONS.map((lesson) => {
          const isActive = lesson.id === activeLessonId;
          return (
            <button
              key={lesson.id}
              onClick={() => {
                sound.playPop();
                setActiveLessonId(lesson.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition-all border-2 shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white border-amber-500 shadow-md scale-105'
                  : 'bg-white hover:bg-amber-50 text-slate-700 border-slate-200 hover:border-amber-300'
              }`}
            >
              <i className={`${lesson.icon} text-base`}></i>
              <span>Bài {lesson.lessonNumber}: {lesson.title}</span>
            </button>
          );
        })}
      </div>

      {/* Header Banner Bài Học Hiện Tại */}
      <div className={`p-6 sm:p-7 rounded-3xl bg-gradient-to-r ${currentLesson.themeColor} text-white shadow-lg border-4 ${currentLesson.borderColor} relative overflow-hidden`}>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/25 backdrop-blur-sm text-xs font-black mb-2">
              <i className="fa-solid fa-book-bookmark"></i>
              <span>BÀI HỌC {currentLesson.lessonNumber} • {currentLesson.pageRange}</span>
            </div>
            <div className="flex items-baseline gap-3">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{currentLesson.title}</h2>
              <span className="text-xl sm:text-2xl font-bold opacity-90">{currentLesson.titlePinyin}</span>
            </div>
            <p className="text-base sm:text-lg font-bold opacity-95 mt-1">
              Ý nghĩa: <span className="underline decoration-white/60">{currentLesson.titleVn}</span>
            </p>
            <p className="text-xs sm:text-sm text-white/90 mt-2 max-w-xl font-medium">
              {currentLesson.description}
            </p>
          </div>

          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl shadow-inner border border-white/40 shrink-0">
            <i className={currentLesson.icon}></i>
          </div>
        </div>
      </div>

      {/* Thanh Menu chức năng của bài */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
        <button
          onClick={() => {
            sound.playPop();
            setActiveTab('text');
          }}
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
          onClick={() => {
            sound.playPop();
            setActiveTab('vocab');
          }}
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
          onClick={() => {
            sound.playPop();
            setActiveTab('strokes');
          }}
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
          onClick={() => {
            sound.playPop();
            setActiveTab('dialogue');
          }}
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
          onClick={() => {
            sound.playPop();
            setActiveTab('quiz');
          }}
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
          <div className="bg-amber-50/60 border-2 border-amber-200 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-amber-200/80">
              <div className="flex items-center gap-2 text-amber-900 font-black text-sm uppercase">
                <i className="fa-solid fa-book text-amber-600"></i>
                <span>Nội dung bài khóa chính khóa</span>
              </div>
              <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                Bấm vào câu hoặc chữ để nghe phát âm 🔊
              </span>
            </div>

            {/* Khối các câu trong bài */}
            <div className="space-y-4">
              {currentLesson.readingText.map((line, idx) => {
                const isPlaying = playingSentenceIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      sound.playPop();
                      setPlayingSentenceIndex(idx);
                      sound.speak(line.cn);
                      setTimeout(() => setPlayingSentenceIndex(null), 2500);
                    }}
                    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      isPlaying
                        ? 'bg-amber-200/90 border-amber-500 scale-[1.02] shadow-md'
                        : 'bg-white hover:bg-amber-50/80 border-amber-200 shadow-sm'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-amber-800 tracking-wider">
                        {line.pinyin}
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-slate-800 tracking-widest font-serif">
                        {line.cn}
                      </div>
                      <div className="text-sm font-bold text-slate-500 italic pt-1">
                        👉 {line.vn}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.speakSlowly(line.cn);
                        }}
                        className="w-10 h-10 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center justify-center text-sm font-black transition-colors"
                        title="Nghe phát âm chậm"
                      >
                        🐢
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.speak(line.cn);
                        }}
                        className="w-10 h-10 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 flex items-center justify-center text-base shadow-sm transition-colors"
                        title="Nghe phát âm chuẩn"
                      >
                        <i className="fa-solid fa-volume-high"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mẹo học & Lời dẫn bài học */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center text-lg shrink-0">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <div>
              <div className="text-xs font-black text-slate-700 uppercase">Mẹo đọc lưu loát:</div>
              <p className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5">
                Bé hãy đọc theo nhịp điệu của bài thơ, chú ý ngắt giọng ở các dấu phẩy, và nghe đi nghe lại nhiều lần với chế độ rùa con 🐢 để phát âm chuẩn thanh điệu nhé!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: TỪ VỰNG (生字新词) ================= */}
      {activeTab === 'vocab' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentLesson.vocabulary.map((vocab, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border-2 border-slate-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Bộ thủ: {vocab.radical} • {vocab.strokes} nét
                    </span>
                    <button
                      onClick={() => {
                        sound.playPop();
                        sound.speak(vocab.cn);
                      }}
                      className="w-9 h-9 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center justify-center transition-colors"
                      title="Nghe phát âm"
                    >
                      <i className="fa-solid fa-volume-high text-xs"></i>
                    </button>
                  </div>

                  <div className="text-center py-2">
                    <div className="text-3xl font-black text-slate-800 tracking-wider font-serif">
                      {vocab.cn}
                    </div>
                    <div className="text-sm font-bold text-amber-700 mt-1">
                      {vocab.pinyin}
                    </div>
                    <div className="text-base font-black text-slate-700 mt-2">
                      {vocab.vn}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-slate-500 bg-slate-50 p-2.5 rounded-xl flex items-center gap-2">
                  <i className={`${vocab.icon} text-amber-500 text-sm shrink-0`}></i>
                  <span>{vocab.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 3: TẬP VIẾT NÉT CHỮ (笔顺练习) ================= */}
      {activeTab === 'strokes' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900 font-black text-sm uppercase mb-4">
              <i className="fa-solid fa-pen-fancy text-indigo-500"></i>
              <span>Quy tắc bút thuận chuẩn trong ô điền (田字格)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentLesson.strokeGuide.map((guide, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-5 border-2 border-indigo-100 space-y-4"
                >
                  {/* Ô chữ điền Tianzige */}
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-white rounded-2xl border-2 border-indigo-300 relative flex items-center justify-center shadow-inner overflow-hidden">
                      {/* Đường kẻ chia ô chữ điền */}
                      <div className="absolute inset-0 border-b border-dashed border-indigo-200 top-1/2 -translate-y-1/2"></div>
                      <div className="absolute inset-0 border-r border-dashed border-indigo-200 left-1/2 -translate-x-1/2"></div>
                      <span className="relative z-10 text-5xl font-black text-indigo-950 font-serif">
                        {guide.char}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-black text-indigo-950">{guide.char}</span>
                        <span className="text-sm font-bold text-indigo-600 font-mono">({guide.pinyin})</span>
                      </div>
                      <div className="text-sm font-black text-slate-700">Nghĩa: {guide.meaning}</div>
                      <div className="text-xs font-bold text-slate-500 mt-1">Tổng cộng: {guide.strokesTotal} nét</div>
                      <div className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md mt-1 inline-block">
                        {guide.structure}
                      </div>
                    </div>
                  </div>

                  {/* Thứ tự từng nét bút */}
                  <div className="space-y-1.5 pt-2 border-t border-indigo-100">
                    <div className="text-xs font-black text-slate-600">Thứ tự các nét viết:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {guide.strokeSteps.map((step, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-bold bg-white border border-indigo-200 text-indigo-900 px-2.5 py-1 rounded-lg shadow-2xs"
                        >
                          <span className="font-mono text-indigo-500 font-black mr-1">{sIdx + 1}.</span>
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 4: LUYỆN NÓI ĐỐI THOẠI (看图说话) ================= */}
      {activeTab === 'dialogue' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b pb-3 border-slate-200">
            <div className="flex items-center gap-2 text-emerald-900 font-black text-sm uppercase">
              <i className="fa-solid fa-comments text-emerald-500"></i>
              <span>Luyện nói & Phản xạ tình huống thực tế</span>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Bé bấm vào từng bong bóng để nghe lời thoại 💬
            </span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {currentLesson.dialogues.map((dlg, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    sound.playPop();
                    sound.speak(dlg.cn);
                  }}
                  className={`flex items-start gap-3 cursor-pointer group ${
                    isEven ? 'flex-row' : 'flex-row-reverse text-right'
                  }`}
                >
                  {/* Avatar nhân vật */}
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-xl shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    {dlg.speaker.slice(-2)}
                  </div>

                  {/* Nội dung bong bóng chat */}
                  <div
                    className={`p-4 rounded-3xl border-2 transition-all max-w-[85%] ${
                      isEven
                        ? 'bg-emerald-50/80 border-emerald-200 group-hover:border-emerald-400 rounded-tl-sm'
                        : 'bg-sky-50/80 border-sky-200 group-hover:border-sky-400 rounded-tr-sm'
                    }`}
                  >
                    <div className="text-[11px] font-black text-slate-500 mb-1">
                      {dlg.speaker} ({dlg.role})
                    </div>
                    <div className="text-xs font-bold text-slate-600 mb-0.5">
                      {dlg.pinyin}
                    </div>
                    <div className="text-lg font-black text-slate-800 font-serif">
                      {dlg.cn}
                    </div>
                    <div className="text-xs font-bold text-slate-500 italic mt-1 pt-1 border-t border-slate-200/50">
                      {dlg.vn}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= TAB 5: BÀI TẬP TƯƠNG TÁC (课后练习) ================= */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <div className="flex items-center gap-2 text-amber-900 font-black text-sm uppercase">
                <i className="fa-solid fa-star text-amber-500"></i>
                <span>Thử tài bé yêu với bài tập trong sách</span>
              </div>
              <span className="text-xs font-bold text-slate-500">
                {currentLesson.exercises.length} câu hỏi vui nhộn
              </span>
            </div>

            {/* Danh sách câu hỏi */}
            <div className="space-y-6">
              {currentLesson.exercises.map((ex, exIdx) => {
                const userChoice = selectedAnswers[ex.id];
                const isCorrect = exerciseResults[ex.id];
                const hasAnswered = userChoice !== undefined;

                return (
                  <div
                    key={ex.id}
                    className="p-5 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-900 font-black text-xs flex items-center justify-center shrink-0">
                        {exIdx + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-black text-slate-800">
                        {ex.question}
                      </h3>
                    </div>

                    {/* Các lựa chọn */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ex.options.map((opt, optIdx) => {
                        const isSelected = userChoice === opt;
                        let btnStyle = 'bg-white hover:bg-amber-50 text-slate-700 border-slate-200';
                        if (hasAnswered) {
                          if (opt === ex.correctAnswer) {
                            btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
                          } else if (isSelected && !isCorrect) {
                            btnStyle = 'bg-rose-500 text-white border-rose-600';
                          } else {
                            btnStyle = 'bg-white/60 text-slate-400 border-slate-200 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerExercise(ex.id, opt, ex.correctAnswer)}
                            className={`p-3.5 rounded-2xl font-black text-xs sm:text-sm text-left border-2 transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {hasAnswered && opt === ex.correctAnswer && (
                              <i className="fa-solid fa-circle-check text-white"></i>
                            )}
                            {hasAnswered && isSelected && !isCorrect && (
                              <i className="fa-solid fa-circle-xmark text-white"></i>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Giải thích sau khi trả lời */}
                    {hasAnswered && (
                      <div className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${
                        isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                      }`}>
                        <i className={`fa-solid ${isCorrect ? 'fa-check text-emerald-600' : 'fa-xmark text-rose-600'}`}></i>
                        <span>{ex.explanation}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Thông báo hoàn thành xuất sắc */}
            {completedQuizzes && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 text-amber-950 text-center space-y-2 border-2 border-amber-400 shadow-md animate-bounce">
                <div className="text-4xl">🎉 🌟 🐼</div>
                <h4 className="text-xl font-black">Xuất sắc quá! Bé đã làm đúng tất cả câu hỏi!</h4>
                <p className="text-xs sm:text-sm font-bold">
                  Bé đã nắm vững toàn bộ kiến thức của {currentLesson.title}. Tiếp tục giữ vững phong độ nhé!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
