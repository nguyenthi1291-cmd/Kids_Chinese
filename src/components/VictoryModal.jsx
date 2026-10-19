import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function VictoryModal({ result, lesson, onReplay, onNext, onClose, isSynced }) {
  const { score = 100, stars = 3, totalCorrect = 0, totalQuestions = 0 } = result || {};

  useEffect(() => {
    // Phát âm thanh chiến thắng
    sound.playFanfare();

    // Bắn pháo hoa Confetti rực rỡ
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFDE59', '#5CE1E6', '#FF94B9', '#7ED957']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFDE59', '#5CE1E6', '#FF94B9', '#7ED957']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Lắng nghe phím ESC để đóng
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        sound.playPop();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={(e) => {
        // Đóng khi click ra ngoài vùng nền mờ
        if (e.target === e.currentTarget) {
          sound.playPop();
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border-4 border-yellow-300 shadow-2xl text-center relative transform animate-bounce-slow">
        {/* NÚT TẮT CỬA SỔ THÔNG BÁO (CLOSE BUTTON) */}
        <button
          onClick={() => {
            sound.playPop();
            onClose();
          }}
          className="absolute top-3.5 right-3.5 w-10 h-10 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-600 text-slate-500 border-2 border-slate-200 hover:border-rose-300 flex items-center justify-center transition-all btn-bouncy shadow-sm z-10"
          title="Tắt thông báo (Esc)"
          aria-label="Đóng cửa sổ"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        {/* Cúp vàng Font Awesome */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-200 to-yellow-100 border-4 border-yellow-400 flex items-center justify-center shadow-md mb-3">
          <i className="fa-solid fa-trophy text-4xl text-amber-500 drop-shadow"></i>
        </div>

        {/* Lời khen song ngữ Trung - Việt */}
        <div className="mb-4">
          <div className="font-chinese text-3xl font-black text-amber-900 tracking-wider">
            太棒了! (Tài bàng le!)
          </div>
          <h2 className="text-2xl font-black text-slate-800 mt-1">
            Bé Thật Là Giỏi!
          </h2>
          <p className="text-sm font-bold text-slate-500">
            Hoàn thành: <span className="text-amber-700">{lesson?.topic_vn}</span>
          </p>
        </div>

        {/* 3 Ngôi Sao Vàng Font Awesome */}
        <div className="flex items-center justify-center gap-2.5 my-4">
          {[1, 2, 3].map((starIdx) => {
            const hasStar = starIdx <= stars;
            return (
              <div
                key={starIdx}
                className={`p-1 transform transition-transform ${
                  hasStar ? 'scale-110 animate-bounce' : 'opacity-25'
                }`}
                style={{ animationDelay: `${starIdx * 0.15}s` }}
              >
                <i
                  className={`fa-solid fa-star text-4xl ${
                    hasStar
                      ? 'text-yellow-400 drop-shadow-[0_4px_6px_rgba(250,204,21,0.5)]'
                      : 'text-slate-300'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Điểm số */}
        <div className="bg-amber-50 rounded-2xl p-3 border-2 border-amber-200 mb-4">
          <div className="text-xs font-bold text-slate-600">
            Đúng {totalCorrect} / {totalQuestions} câu hỏi trắc nghiệm
          </div>
          <div className="text-xl font-black text-amber-800 mt-0.5">
            Đạt: {score}/100 • Nhận +{stars} Sao
          </div>
        </div>

        {/* Trạng thái đồng bộ Google Sheets */}
        <div className="text-xs font-bold mb-5 flex items-center justify-center gap-1.5 text-slate-500">
          {isSynced ? (
            <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-flex items-center gap-1.5">
              <i className="fa-solid fa-cloud-arrow-up text-emerald-600"></i>
              <span>Đã lưu vào Google Sheets (User_Progress)!</span>
            </span>
          ) : (
            <span className="text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 inline-flex items-center gap-1.5">
              <i className="fa-solid fa-floppy-disk text-amber-500"></i>
              <span>Đã lưu an toàn trên máy bé!</span>
            </span>
          )}
        </div>

        {/* Nút hành động */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              sound.playPop();
              onReplay();
            }}
            className="flex-1 py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-sm flex items-center justify-center gap-2 border-2 border-slate-300 btn-bouncy"
          >
            <i className="fa-solid fa-rotate-left"></i>
            <span>Ôn Tập Lại</span>
          </button>

          <button
            onClick={() => {
              sound.playPop();
              onNext();
            }}
            className="flex-1 py-3 px-4 rounded-2xl btn-card-yellow text-slate-900 font-black text-base flex items-center justify-center gap-2 btn-bouncy shadow-md"
          >
            <span>Bài Tiếp Theo</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
