import React, { useState } from 'react';
import { sound } from '../utils/audio';

export default function LessonListScreen({ lessons, progressList, onSelectLesson, user }) {
  const [filterMode, setFilterMode] = useState('all'); // 'all' hoặc 'review'

  const getLessonStatus = (lessonId) => {
    const p = progressList.find((item) => item.lesson_id === lessonId);
    if (!p) return { status: 'NotStarted', score: 0 };
    return { status: p.status, score: p.score };
  };

  const completedCount = progressList.filter((p) => p.status === 'Completed').length;
  const progressPercent = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  const filteredLessons = lessons.filter((lesson) => {
    if (filterMode === 'review') {
      const { status } = getLessonStatus(lesson.lesson_id);
      return status === 'Completed';
    }
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Banner chào bé & Tiến độ tổng thể */}
      <div className="bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-100 rounded-3xl p-6 sm:p-7 border-4 border-amber-300 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-inner border-2 border-amber-300 flex items-center justify-center text-3xl sm:text-4xl shrink-0">
              {user?.avatar?.startsWith('fa-') ? (
                <i className={`${user.avatar} text-amber-600`}></i>
              ) : (
                <i className="fa-solid fa-graduation-cap text-indigo-600 text-3xl"></i>
              )}
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-black mb-1">
                <i className="fa-solid fa-sparkles text-xs"></i>
                <span>HỌC VIÊN: {user?.child_name?.toUpperCase() || 'BÉ YÊU'} (MÃ: {user?.user_id})</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
                Lộ Trình Tiếng Trung Chuẩn YCT 1 🌟
              </h2>
              <p className="text-sm font-bold text-slate-600 mt-0.5">
                Bé đã hoàn thành <span className="text-amber-800 font-black">{completedCount}/{lessons.length}</span> bài học xuất sắc!
              </p>
            </div>
          </div>

          {/* Huy hiệu tổng kết */}
          <div className="bg-white/95 rounded-2xl p-3.5 border-2 border-amber-300 flex items-center gap-3.5 min-w-[200px] shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center text-slate-900 font-black shadow-inner">
              <i className="fa-solid fa-award text-2xl text-amber-900"></i>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">Tiến độ khóa học</div>
              <div className="text-2xl font-black text-amber-600">{progressPercent}%</div>
              <div className="w-28 bg-slate-200 rounded-full h-2 overflow-hidden mt-1">
                <div
                  className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs chuyển đổi: Lộ trình bài học vs Góc Ôn tập bài cũ (Review Mode) */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300">
          <button
            onClick={() => {
              sound.playPop();
              setFilterMode('all');
            }}
            className={`px-4 py-2 rounded-xl font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
              filterMode === 'all'
                ? 'bg-white text-slate-900 shadow-md scale-102'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-book-open text-xs"></i>
            <span>Lộ Trình 10 Bài Học ({lessons.length})</span>
          </button>
          <button
            onClick={() => {
              sound.playPop();
              setFilterMode('review');
            }}
            className={`px-4 py-2 rounded-xl font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
              filterMode === 'review'
                ? 'bg-amber-400 text-slate-950 shadow-md scale-102'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-rotate-left text-xs"></i>
            <span>Góc Ôn Tập ({completedCount})</span>
          </button>
        </div>

        <div className="text-xs font-bold text-slate-500">
          * Bé có thể nhấn vào bất kỳ bài nào để ôn lại không giới hạn!
        </div>
      </div>

      {/* Nếu đang ở chế độ Ôn tập nhưng chưa có bài hoàn thành */}
      {filterMode === 'review' && filteredLessons.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border-3 border-dashed border-amber-300 p-8">
          <div className="text-5xl text-amber-400 mb-3">
            <i className="fa-solid fa-box-open"></i>
          </div>
          <h3 className="text-xl font-black text-slate-700">Bé chưa có bài cũ nào cần ôn!</h3>
          <p className="text-slate-500 font-bold text-sm mt-1 mb-4">
            Hãy bắt đầu học bài đầu tiên để mở khóa kho báu ôn tập nhé!
          </p>
          <button
            onClick={() => {
              sound.playPop();
              setFilterMode('all');
            }}
            className="px-6 py-2.5 rounded-2xl btn-card-yellow font-extrabold text-sm"
          >
            Quay lại Lộ trình học
          </button>
        </div>
      )}

      {/* Danh sách Cards bài học với FONT AWESOME ICONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLessons.map((lesson, idx) => {
          const { status } = getLessonStatus(lesson.lesson_id);
          const isCompleted = status === 'Completed';
          const vocabCount = lesson.content ? lesson.content.length : 0;

          return (
            <div
              key={lesson.lesson_id}
              className={`relative bg-white rounded-3xl p-5 border-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                isCompleted ? 'border-emerald-300 bg-emerald-50/20' : 'border-amber-200 hover:border-amber-400'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    {/* Icon Vector Font Awesome của bài học */}
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                      <i className={`${lesson.faIcon || 'fa-solid fa-book-open'} ${lesson.iconColor || 'text-amber-500'} text-2xl`}></i>
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-400">
                        Cấp độ {lesson.level || 1}
                      </span>
                      <h3 className="font-black text-lg text-slate-800 leading-tight">
                        {lesson.topic_vn}
                      </h3>
                    </div>
                  </div>

                  {/* Trạng thái bài */}
                  {isCompleted ? (
                    <div className="flex flex-col items-end shrink-0">
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-black px-2 py-0.5 rounded-full">
                        <i className="fa-solid fa-check text-[10px]"></i>
                        <span>Đã xong</span>
                      </span>
                      <div className="flex items-center gap-0.5 text-yellow-400 mt-1">
                        <i className="fa-solid fa-star text-xs"></i>
                        <i className="fa-solid fa-star text-xs"></i>
                        <i className="fa-solid fa-star text-xs"></i>
                      </div>
                    </div>
                  ) : (
                    <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black px-2 py-0.5 rounded-full shrink-0">
                      Chưa học
                    </span>
                  )}
                </div>

                {/* Tên tiếng Trung & Pinyin */}
                <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 mb-3.5">
                  <div className="font-chinese text-2xl font-black text-amber-900 text-center tracking-wide">
                    {lesson.topic_cn}
                  </div>
                  <div className="text-xs font-bold text-slate-500 text-center mt-0.5">
                    Số lượng: {vocabCount} từ vựng chuẩn YCT
                  </div>
                </div>

                {/* Từ vựng xem trước với Font Awesome icons */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {lesson.content?.slice(0, 4).map((w) => (
                    <span
                      key={w.id}
                      className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-slate-800 text-xs font-bold px-2 py-0.5 rounded-lg"
                    >
                      <i className={`${w.faIcon || 'fa-solid fa-star'} ${w.iconColor || 'text-amber-500'} text-xs`}></i>
                      <span className="font-chinese font-bold">{w.cn}</span>
                    </span>
                  ))}
                  {vocabCount > 4 && (
                    <span className="text-xs font-extrabold text-slate-400 self-center">
                      +{vocabCount - 4} từ nữa
                    </span>
                  )}
                </div>
              </div>

              {/* Nút hành động */}
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => {
                    sound.playPop();
                    onSelectLesson(lesson, 'learn');
                  }}
                  className={`flex-1 py-2.5 px-3 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 btn-bouncy ${
                    isCompleted ? 'btn-card-green' : 'btn-card-yellow'
                  }`}
                >
                  <i className="fa-solid fa-book-open"></i>
                  <span>{isCompleted ? 'Ôn Tập Lại' : 'Học Bài Ngay'}</span>
                </button>

                <button
                  onClick={() => {
                    sound.playPop();
                    onSelectLesson(lesson, 'quiz');
                  }}
                  className="p-2.5 px-3.5 rounded-2xl btn-card-blue btn-bouncy text-slate-900"
                  title="Chơi trò chơi ôn tập ngay"
                >
                  <i className="fa-solid fa-gamepad text-base"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
