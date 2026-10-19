import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';

export default function QuizGameScreen({ lesson, onBack, onComplete }) {
  const words = lesson.content || [];
  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  // Sinh các câu hỏi trắc nghiệm thông minh từ danh sách từ vựng
  useEffect(() => {
    if (!words || words.length === 0) return;

    const generated = words.map((targetWord, index) => {
      const otherWords = words.filter(w => w.id !== targetWord.id);
      const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [targetWord, ...shuffledOthers].sort(() => 0.5 - Math.random());

      const type = index % 3; // 0: Nghe, 1: Chữ Hán, 2: Tiếng Việt

      return {
        target: targetWord,
        options,
        type: type === 0 ? 'audio' : (type === 1 ? 'kanji' : 'vn')
      };
    });

    setQuestions(generated.sort(() => 0.5 - Math.random()));
    setCurrentQIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedOption(null);
  }, [lesson]);

  const currentQ = questions[currentQIndex];

  useEffect(() => {
    if (currentQ && currentQ.target) {
      sound.speak(currentQ.target.cn, 0.85);
    }
  }, [currentQIndex, currentQ]);

  if (!currentQ) {
    return (
      <div className="text-center py-12">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="font-bold text-slate-600">Đang chuẩn bị trò chơi...</p>
      </div>
    );
  }

  const handleSelectOption = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option.id === currentQ.target.id;

    if (isCorrect) {
      sound.playSuccess();
      setScore(prev => prev + 1);
    } else {
      sound.playWrong();
    }

    // Tự động chuyển câu hỏi sau 1.1s
    setTimeout(() => {
      if (currentQIndex < questions.length - 1) {
        setCurrentQIndex(prev => prev + 1);
        setIsAnswered(false);
        setSelectedOption(null);
      } else {
        const finalScore = isCorrect ? score + 1 : score;
        const total = questions.length;
        const percent = Math.round((finalScore / total) * 100);
        const stars = percent >= 80 ? 3 : (percent >= 50 ? 2 : 1);
        onComplete({ score: percent, stars, totalCorrect: finalScore, totalQuestions: total });
      }
    }, 1100);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      {/* Thanh điều hướng & NÚT TẮT TRÒ CHƠI */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            sound.playPop();
            onBack();
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border-2 border-slate-300 font-black text-xs text-slate-700 hover:bg-slate-50 btn-bouncy shadow-sm"
          title="Tắt / Thoát trò chơi về danh sách bài"
        >
          <i className="fa-solid fa-xmark text-sm text-rose-500"></i>
          <span>Thoát Trò Chơi</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-slate-500">CÂU HỎI:</span>
          <span className="px-3 py-1 bg-amber-200 text-amber-950 font-black rounded-full text-xs sm:text-sm">
            {currentQIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Thanh tiến độ câu hỏi */}
      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
        <div
          className="bg-amber-400 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Khung Câu Hỏi */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border-4 border-amber-300 shadow-lg text-center relative">
        {currentQ.type === 'audio' && (
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs mb-3">
              <i className="fa-solid fa-headphones"></i>
              <span>Bé nghe phát âm và chọn đáp án đúng:</span>
            </span>
            <div className="my-2">
              <button
                onClick={() => {
                  sound.playPop();
                  sound.speak(currentQ.target.cn, 0.85);
                }}
                className="w-20 h-20 mx-auto rounded-3xl bg-amber-400 hover:bg-amber-500 text-slate-900 flex items-center justify-center shadow-lg transform hover:scale-105 active:scale-95 transition-all"
                title="Bấm để nghe lại"
              >
                <i className="fa-solid fa-volume-high text-3xl animate-wiggle"></i>
              </button>
              <p className="text-xs font-black text-amber-700 mt-2">Bấm vào loa để nghe lại</p>
            </div>
          </div>
        )}

        {currentQ.type === 'kanji' && (
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-extrabold text-xs mb-2">
              <i className="fa-solid fa-question"></i>
              <span>Chữ Hán này có nghĩa là gì nhỉ?</span>
            </span>
            <div className="my-2">
              <div className="font-chinese text-5xl sm:text-7xl font-black text-slate-900 tracking-wider">
                {currentQ.target.cn}
              </div>
              <div className="text-2xl font-black text-amber-600 mt-1">
                {currentQ.target.pinyin}
              </div>
            </div>
          </div>
        )}

        {currentQ.type === 'vn' && (
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs mb-2">
              <i className="fa-solid fa-bullseye"></i>
              <span>Tìm chữ Hán tương ứng với nghĩa:</span>
            </span>
            <div className="my-2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-3xl mb-2">
                <i className={`${currentQ.target.faIcon || 'fa-solid fa-star'} ${currentQ.target.iconColor || 'text-amber-500'}`}></i>
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-800 bg-amber-100 px-4 py-1.5 rounded-2xl border-2 border-amber-300">
                {currentQ.target.vn}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4 Phương án lựa chọn với FONT AWESOME ICONS */}
      <div className="grid grid-cols-2 gap-3">
        {currentQ.options.map((opt) => {
          const isTarget = opt.id === currentQ.target.id;
          const isChosen = selectedOption?.id === opt.id;

          let btnStyle = 'bg-white border-3 border-amber-200 hover:border-amber-400 hover:bg-amber-50/50';

          if (isAnswered) {
            if (isTarget) {
              btnStyle = 'bg-emerald-100 border-4 border-emerald-500 scale-102 text-emerald-950 shadow-md';
            } else if (isChosen) {
              btnStyle = 'bg-rose-100 border-4 border-rose-500 text-rose-950 opacity-90';
            } else {
              btnStyle = 'bg-slate-100 border-2 border-slate-200 opacity-40';
            }
          }

          return (
            <button
              key={opt.id}
              disabled={isAnswered}
              onClick={() => handleSelectOption(opt)}
              className={`p-3.5 rounded-3xl flex flex-col items-center justify-center transition-all duration-150 btn-bouncy min-h-[110px] text-center ${btnStyle}`}
            >
              {/* Icon Font Awesome */}
              <div className="text-3xl sm:text-4xl mb-1.5">
                <i className={`${opt.faIcon || 'fa-solid fa-star'} ${opt.iconColor || 'text-amber-500'}`}></i>
              </div>

              {currentQ.type === 'vn' ? (
                <span className="font-chinese text-2xl font-black text-slate-900 mt-0.5">
                  {opt.cn}
                </span>
              ) : (
                <>
                  <span className="font-black text-sm sm:text-base text-slate-800 leading-tight">
                    {opt.vn}
                  </span>
                  <span className="font-chinese text-xs font-bold text-slate-500 mt-0.5">
                    {opt.cn} ({opt.pinyin})
                  </span>
                </>
              )}

              {/* Icon kết quả đúng / sai */}
              {isAnswered && isTarget && (
                <i className="fa-solid fa-circle-check text-emerald-600 text-lg mt-1 animate-bounce"></i>
              )}
              {isAnswered && isChosen && !isTarget && (
                <i className="fa-solid fa-circle-xmark text-rose-600 text-lg mt-1"></i>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
