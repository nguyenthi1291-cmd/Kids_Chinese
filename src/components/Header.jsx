import React from 'react';
import { Star, Settings, LogOut, Sparkles, Copy, Check } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Header({ user, onOpenSettings, onLogout, isGasConnected, currentScreen, onNavigate }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyId = () => {
    if (user?.user_id) {
      sound.playPop();
      navigator.clipboard?.writeText(user.user_id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-amber-200 px-4 py-2.5 shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo App & Tab Chuyển Đổi */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-3">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              sound.playPop();
              if (onNavigate) onNavigate('lesson_list');
            }}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-300 to-yellow-200 border-2 border-amber-400 flex items-center justify-center text-2xl shadow-md transform hover:rotate-6 transition-transform">
              🐼
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-slate-800 tracking-tight">Kids Chinese</span>
                <span className="bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                  Song Ngữ
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-500 hidden sm:block">Tiếng Trung tiểu học cho bé</p>
            </div>
          </div>

          {/* Tab Navigation trên mobile */}
          {user && onNavigate && (
            <div className="flex sm:hidden items-center gap-1 bg-amber-100/90 p-1 rounded-2xl border border-amber-300">
              <button
                onClick={() => {
                  sound.playPop();
                  onNavigate('lesson_list');
                }}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition-all ${
                  currentScreen !== 'textbook'
                    ? 'bg-white text-slate-800 shadow-sm border border-amber-300'
                    : 'text-amber-900'
                }`}
              >
                YCT 1
              </button>
              <button
                onClick={() => {
                  sound.playPop();
                  onNavigate('textbook');
                }}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition-all ${
                  currentScreen === 'textbook'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                    : 'text-amber-900'
                }`}
              >
                📖 Sách SGK
              </button>
            </div>
          )}
        </div>

        {/* Tab Navigation trên máy tính (Desktop/Tablet) */}
        {user && onNavigate && (
          <nav className="hidden sm:flex items-center gap-1.5 bg-amber-100/80 p-1.5 rounded-2xl border-2 border-amber-300/80">
            <button
              onClick={() => {
                sound.playPop();
                onNavigate('lesson_list');
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                currentScreen !== 'textbook'
                  ? 'bg-white text-slate-800 shadow-sm border border-amber-300 scale-102'
                  : 'text-amber-900 hover:bg-white/60'
              }`}
            >
              <i className="fa-solid fa-graduation-cap text-amber-600"></i>
              <span>Khóa Học YCT 1</span>
            </button>
            <button
              onClick={() => {
                sound.playPop();
                onNavigate('textbook');
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                currentScreen === 'textbook'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm scale-102'
                  : 'text-amber-900 hover:bg-white/60'
              }`}
            >
              <i className="fa-solid fa-book-open"></i>
              <span>Sách Giáo Khoa (tailieuhoc)</span>
              <span className="bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">
                MỚI
              </span>
            </button>
          </nav>
        )}

        {/* Thông tin bé & Thao tác */}
        <div className="flex items-center justify-end w-full sm:w-auto gap-2 sm:gap-3">
          {user && (
            <>
              {/* Badge Bé & Mã Học Viên (User ID) */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl px-3 py-1 shadow-sm">
                <span className="text-xl sm:text-2xl">{user.avatar || '🐼'}</span>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-black text-amber-700 uppercase">Mã Bé:</span>
                    <button
                      onClick={handleCopyId}
                      className="font-mono text-xs font-black bg-amber-200 text-amber-950 px-1.5 py-0.2 rounded hover:bg-amber-300 inline-flex items-center gap-0.5 transition-colors"
                      title="Bấm để sao chép mã học viên"
                    >
                      <span>{user.user_id}</span>
                      {copied ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-2.5 h-2.5 text-amber-800 opacity-60" />}
                    </button>
                  </div>
                  <div className="text-xs sm:text-sm font-black text-slate-800 leading-tight truncate max-w-[100px] sm:max-w-[130px]">
                    {user.child_name}
                  </div>
                </div>
              </div>

              {/* Huy hiệu Sao vàng */}
              <div 
                className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 border-2 border-yellow-500 rounded-2xl px-2.5 sm:px-3 py-1 font-black text-xs sm:text-sm shadow-sm cursor-pointer hover:scale-105 transition-transform"
                onClick={() => sound.playStarSound()}
                title="Số sao bé đã tích lũy!"
              >
                <Star className="w-4 h-4 fill-yellow-100 text-yellow-900 animate-wiggle" />
                <span>{user.total_stars || 0}</span>
                <Sparkles className="w-3 h-3 text-amber-900 hidden sm:inline" />
              </div>
            </>
          )}

          {/* Nút Cài đặt Google Sheets */}
          <button
            onClick={() => {
              sound.playPop();
              onOpenSettings();
            }}
            className="relative p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 border-2 border-slate-300 text-slate-700 transition-all btn-bouncy"
            title="Cài đặt kết nối Google Sheets"
          >
            <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            <span
              className={`absolute top-1 right-1 w-2.5 h-2.5 rounded-full border-2 border-white ${
                isGasConnected ? 'bg-emerald-500 ring-2 ring-emerald-200' : 'bg-amber-400'
              }`}
            />
          </button>

          {/* Nút Đổi bé / Đăng xuất */}
          {user && (
            <button
              onClick={() => {
                sound.playPop();
                onLogout();
              }}
              className="p-2 rounded-2xl bg-rose-50 hover:bg-rose-100 border-2 border-rose-200 text-rose-600 transition-all btn-bouncy"
              title="Đổi tài khoản học viên khác"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
