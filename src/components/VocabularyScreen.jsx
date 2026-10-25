import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';

export default function VocabularyScreen({ lesson, onBack, onStartQuiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = lesson.content || [];
  const currentWord = words[currentIndex] || {};

  // Tự động phát âm khi chuyển sang từ mới
  useEffect(() => {
    if (currentWord && currentWord.cn) {
      sound.speak(currentWord.cn, 0.85);
    }
  }, [currentIndex]);

  const handleNext = () => {
    sound.playPop();
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Đã học hết từ trong bài -> gợi ý chơi quiz
      onStartQuiz();
    }
  };

  const handlePrev = () => {
    sound.playPop();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-5 space-y-5">
      {/* Thanh công cụ trên cùng */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => {
            sound.playPop();
            onBack();
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border-2 border-slate-300 font-black text-xs sm:text-sm text-slate-700 hover:bg-slate-50 btn-bouncy shadow-sm"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Danh Sách Bài</span>
        </button>

        <div className="text-center">
          <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">{lesson.topic_vn}</div>
          <div className="text-sm sm:text-base font-black text-amber-700">
            Từ vựng {currentIndex + 1} / {words.length}
          </div>
        </div>

        <button
          onClick={() => {
            sound.playPop();
            onStartQuiz();
          }}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl btn-card-blue font-black text-xs sm:text-sm btn-bouncy shadow-sm"
        >
          <i className="fa-solid fa-gamepad"></i>
          <span>Chơi Trò Chơi</span>
        </button>
      </div>

      {/* Thanh tiến độ học từ */}
      <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden p-0.5 border border-slate-300">
        <div
          className="bg-gradient-to-r from-amber-400 to-yellow-400 h-full rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
        />
      </div>

      {/* Thẻ Từ Vựng Khổng Lồ với Font Awesome Icon Vector (Cỡ chữ phóng to 150% cực nét cho iPad) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-4 border-amber-300 shadow-xl relative overflow-hidden text-center flex flex-col items-center">
        {/* Nhãn thẻ */}
        <div className="absolute top-4 left-4 bg-amber-100 text-amber-800 text-xs font-black px-3.5 py-1 rounded-full border border-amber-300 flex items-center gap-1.5">
          <i className="fa-solid fa-book-bookmark text-amber-600"></i>
          <span>Thẻ Từ Vựng Chuẩn YCT</span>
        </div>

        {/* Khung Icon Vector FONT AWESOME sắc nét, chân thực */}
        <div 
          onClick={() => {
            sound.speak(currentWord.cn, 0.85);
            sound.playPop();
          }}
          className="w-32 h-32 sm:w-44 sm:h-44 my-4 rounded-3xl bg-gradient-to-b from-amber-50 to-yellow-100 border-4 border-amber-300 flex items-center justify-center shadow-inner cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          title="Bấm vào hình để nghe phát âm!"
        >
          {currentWord.faIcon ? (
            <i className={`${currentWord.faIcon} ${currentWord.iconColor || 'text-amber-500'} text-6xl sm:text-8xl drop-shadow`}></i>
          ) : (
            <i className="fa-solid fa-shapes text-amber-500 text-6xl sm:text-7xl"></i>
          )}
        </div>

        {/* Chữ Hán to gấp 150% (Siêu to, rõ từng nét chữ cho iPad) */}
        <div className="my-2 sm:my-3">
          <h1 
            className="font-chinese text-7xl sm:text-8xl md:text-9xl font-black text-slate-900 tracking-wider hover:text-amber-600 transition-colors cursor-pointer leading-tight select-none drop-shadow-sm"
            onClick={() => sound.speak(currentWord.cn, 0.85)}
            title="Bấm để nghe phát âm"
          >
            {currentWord.cn}
          </h1>
          {/* Pinyin phiên âm to rõ ràng */}
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-600 tracking-widest mt-2">
            {currentWord.pinyin}
          </div>
        </div>

        {/* Nghĩa tiếng Việt chữ to rõ ràng */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl px-8 py-3 my-3">
          <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800">
            {currentWord.vn}
          </span>
        </div>

        {/* Các nút phát âm (Web Speech API) */}
        <div className="flex items-center justify-center gap-3 my-3">
          {/* Nút Loa Chuẩn */}
          <button
            onClick={() => {
              sound.playPop();
              sound.speak(currentWord.cn, 0.85);
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl btn-card-yellow text-slate-900 font-black text-sm sm:text-lg shadow-md btn-bouncy"
          >
            <i className="fa-solid fa-volume-high text-xl"></i>
            <span>Nghe Phát Âm</span>
          </button>

          {/* Nút Đọc Chậm */}
          <button
            onClick={() => {
              sound.playPop();
              sound.speakSlowly(currentWord.cn);
            }}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl btn-card-green text-slate-900 font-black text-sm sm:text-lg shadow-md btn-bouncy"
            title="Đọc chậm rãi từng âm cho bé nhại theo"
          >
            <i className="fa-solid fa-gauge-simple-low text-xl text-emerald-950"></i>
            <span>🐢 Đọc Chậm</span>
          </button>
        </div>

        {/* Mẫu câu ứng dụng song ngữ cho bé */}
        {currentWord.sentence && (
          <div className="w-full mt-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 text-left">
            <div className="flex items-center gap-1.5 text-xs font-black text-amber-700 uppercase tracking-wider mb-1.5">
              <i className="fa-solid fa-comment-dots"></i>
              <span>Mẫu câu giao tiếp của bé:</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="font-chinese text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
                  {currentWord.sentence}
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-600 mt-0.5">
                  {currentWord.sentenceVn || ''}
                </div>
              </div>
              <button
                onClick={() => sound.speak(currentWord.sentence, 0.8)}
                className="w-11 h-11 rounded-2xl bg-amber-200 hover:bg-amber-300 text-amber-900 btn-bouncy flex items-center justify-center shrink-0 shadow-sm"
                title="Nghe đọc mẫu câu"
              >
                <i className="fa-solid fa-volume-high text-base"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Điều hướng chuyển từ */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex-1 py-3 px-4 rounded-2xl bg-white border-2 border-slate-300 text-slate-700 font-black text-sm sm:text-base hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed btn-bouncy shadow-sm flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-chevron-left"></i>
          <span>Từ Trước</span>
        </button>

        <button
          onClick={handleNext}
          className="flex-1 py-3 px-4 rounded-2xl btn-card-orange text-white font-black text-sm sm:text-base btn-bouncy shadow-md flex items-center justify-center gap-2"
        >
          <span>{currentIndex < words.length - 1 ? 'Từ Tiếp Theo' : 'Hoàn Thành & Chơi Game'}</span>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
