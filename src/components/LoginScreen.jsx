import React, { useState, useEffect } from 'react';
import { AVATAR_OPTIONS } from '../data/lessonsData';
import { sound } from '../utils/audio';
import { Sparkles, ArrowRight, UserPlus, LogIn, Users, Cloud, HardDrive, Hash, CheckCircle2, RefreshCw } from 'lucide-react';

export default function LoginScreen({ onLogin, isGasConnected, onOpenSettings, onOpenTextbook }) {
  const [activeTab, setActiveTab] = useState('register'); // 'register' hoặc 'login'
  const [childName, setChildName] = useState('');
  const [userId, setUserId] = useState('');
  const [loginIdInput, setLoginIdInput] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0].faIcon);
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusNote, setStatusNote] = useState('');

  // Tự động sinh mã User ID tiếp theo
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kids_chinese_local_users');
      if (saved) {
        const parsed = JSON.parse(saved);
        setSavedProfiles(parsed);
        // Sinh mã mới dạng U001, U002...
        const nextNum = parsed.length + 1;
        setUserId(`U${String(nextNum).padStart(3, '0')}`);
      } else {
        setUserId('U001');
      }
    } catch (e) {
      setUserId('U001');
    }
  }, []);

  const handleGenerateNewId = () => {
    sound.playPop();
    const rand = Math.floor(100 + Math.random() * 900);
    setUserId(`U${rand}`);
  };

  // 1. Tạo tài khoản học viên mới
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!childName.trim()) {
      sound.playWrong();
      return;
    }

    sound.playPop();
    setIsSubmitting(true);
    setStatusNote(`Đang tạo mã học viên ${userId} trên Google Sheets...`);

    const finalId = userId.trim() || `U${Math.floor(100 + Math.random() * 900)}`;
    await onLogin(childName.trim(), finalId, selectedAvatar);

    sound.playSuccess();
    setIsSubmitting(false);
  };

  // 2. Đăng nhập bằng mã ID đã có
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginIdInput.trim()) {
      sound.playWrong();
      return;
    }

    sound.playPop();
    setIsSubmitting(true);
    const cleanId = loginIdInput.trim().toUpperCase();
    setStatusNote(`Đang tìm mã học viên ${cleanId}...`);

    await onLogin(null, cleanId, null);

    sound.playSuccess();
    setIsSubmitting(false);
  };

  // 3. Đăng nhập nhanh từ thẻ học viên đã lưu
  const handleQuickLogin = async (profile) => {
    sound.playPop();
    setIsSubmitting(true);
    setStatusNote(`Đang tải tiến độ của ${profile.child_name} (${profile.user_id})...`);
    await onLogin(profile.child_name, profile.user_id, profile.avatar);
    sound.playSuccess();
    setIsSubmitting(false);
  };

  return (
    <div className="min-w-full min-h-[calc(100vh-80px)] flex items-center justify-center p-4 bg-gradient-to-b from-[#FFFDF0] via-[#F8F9FE] to-[#EFF6FF]">
      <div className="w-full max-w-lg">
        {/* Banner chào mừng */}
        <div className="text-center mb-5">
          <div className="inline-block p-3.5 rounded-3xl bg-amber-100 border-4 border-amber-300 shadow-md mb-2 transform hover:scale-105 transition-transform">
            <span className="text-5xl sm:text-6xl animate-bounce-slow inline-block">🐼</span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Kids Chinese Learning
          </h1>
          <p className="text-slate-600 font-bold text-sm mt-0.5">
            Ứng dụng học tiếng Trung theo giáo trình chuẩn tiểu học cho bé
          </p>
        </div>

        {/* Khung chính */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border-4 border-amber-200">
          {/* Tabs: Đăng Ký Bé Mới vs Đăng Nhập Bé Cũ */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 mb-6 gap-1">
            <button
              type="button"
              onClick={() => {
                sound.playPop();
                setActiveTab('register');
              }}
              className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'register'
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Bé Mới (Tạo Mã ID)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playPop();
                setActiveTab('login');
              }}
              className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'login'
                  ? 'bg-sky-400 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Đã Có Mã Học Viên</span>
            </button>
          </div>

          {/* TAB 1: FORM ĐĂNG KÝ BÉ MỚI */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              {/* Tên bé */}
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase mb-1">
                  Tên của bé yêu:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Bé Bo, An Nhiên, Minh Khôi..."
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-slate-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-slate-800 font-bold placeholder-slate-400 outline-none transition-all text-base"
                />
              </div>

              {/* Mã Học Viên Tự Sinh */}
              <div className="bg-amber-50/70 rounded-2xl p-3.5 border-2 border-amber-200">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-black text-amber-900 uppercase flex items-center gap-1">
                    <Hash className="w-3.5 h-3.5" />
                    <span>Mã học viên dành cho bé:</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleGenerateNewId}
                    className="text-[11px] font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
                    title="Đổi mã ngẫu nhiên khác"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Đổi mã</span>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value.toUpperCase())}
                    className="font-mono text-xl font-black bg-white border-2 border-amber-300 rounded-xl px-3 py-1.5 text-amber-950 tracking-wider w-full"
                    placeholder="U001"
                  />
                </div>
                <p className="text-[11px] text-amber-800/80 mt-1 font-semibold">
                  * Ba mẹ hãy ghi nhớ mã này để đăng nhập lại trên thiết bị khác hoặc tra cứu điểm nhé!
                </p>
              </div>

              {/* Chọn Avatar ngộ nghĩnh (Vector Font Awesome) */}
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase mb-2">
                  Chọn biểu tượng bé thích:
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {AVATAR_OPTIONS.map((av) => {
                    const isSelected = selectedAvatar === av.faIcon;
                    return (
                      <button
                        type="button"
                        key={av.id}
                        onClick={() => {
                          sound.playPop();
                          setSelectedAvatar(av.faIcon);
                        }}
                        className={`p-3 rounded-2xl border-3 flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? 'border-amber-500 bg-amber-100 scale-105 shadow-md ring-2 ring-amber-300'
                            : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <i className={`${av.faIcon} text-2xl ${av.color}`}></i>
                        <span className="text-[10px] font-black text-slate-700 mt-1">{av.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Nút Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-2xl btn-card-yellow font-black text-base flex items-center justify-center gap-2 shadow-lg btn-bouncy mt-2"
              >
                {isSubmitting ? (
                  <span>Đang khởi tạo...</span>
                ) : (
                  <>
                    <span>Bắt Đầu Vào Học Ngay</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* TAB 2: FORM ĐĂNG NHẬP BẰNG MÃ ĐÃ CÓ */}
          {activeTab === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase mb-1">
                  Nhập Mã Học Viên của bé:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: U001, U123..."
                  value={loginIdInput}
                  onChange={(e) => setLoginIdInput(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-200 text-slate-800 font-mono font-black placeholder-slate-400 outline-none transition-all text-xl tracking-wider uppercase text-center"
                />
                <p className="text-xs text-slate-500 mt-1.5 font-semibold text-center">
                  Hệ thống sẽ tự động đồng bộ lại số Sao vàng và các bài bé đã hoàn thành!
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-2xl btn-card-blue font-black text-base flex items-center justify-center gap-2 shadow-lg btn-bouncy"
              >
                {isSubmitting ? (
                  <span>Đang kiểm tra...</span>
                ) : (
                  <>
                    <span>Đăng Nhập Ngay</span>
                    <LogIn className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Trạng thái xử lý */}
          {statusNote && (
            <div className="mt-3 p-2.5 rounded-xl bg-amber-50 text-amber-900 text-xs font-bold text-center border border-amber-200 animate-pulse">
              {statusNote}
            </div>
          )}

          {/* Danh sách học viên đã từng đăng nhập trên máy này */}
          {savedProfiles.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase mb-2.5">
                <Users className="w-4 h-4" />
                <span>Bé đã từng học trên máy này:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                {savedProfiles.map((p) => (
                  <button
                    type="button"
                    key={p.user_id}
                    onClick={() => handleQuickLogin(p)}
                    className="flex items-center justify-between p-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 text-left transition-all btn-bouncy"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white border border-amber-300 flex items-center justify-center shrink-0">
                        {p.avatar?.startsWith('fa-') ? (
                          <i className={`${p.avatar} text-amber-600 text-lg`}></i>
                        ) : (
                          <i className="fa-solid fa-graduation-cap text-indigo-600 text-lg"></i>
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-800 leading-tight">{p.child_name}</div>
                        <div className="font-mono text-[10px] font-extrabold text-amber-800">
                          ID: <span className="bg-amber-200 px-1 py-0.2 rounded">{p.user_id}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-black text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-full">
                      ⭐ {p.total_stars || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* LỐI TẮT MỞ TRỰC TIẾP SÁCH GIÁO KHOA TAILIEUHOC - KHÔNG CẦN ĐĂNG NHẬP */}
          {onOpenTextbook && (
            <div
              onClick={() => {
                sound.playPop();
                onOpenTextbook();
              }}
              className="mt-5 p-4 rounded-3xl bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 text-slate-900 border-3 border-amber-300 shadow-md cursor-pointer transform hover:scale-[1.02] transition-transform flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl shrink-0">
                  📖
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black uppercase text-amber-950">Khám Phá Sách Giáo Khoa</span>
                    <span className="bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">Mới</span>
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-800">
                    Học theo tài liệu SGK Lớp 1 (tailieuhoc)
                  </div>
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-black text-xs shrink-0 flex items-center gap-1 shadow-sm">
                <span>Vào Xem Ngay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          )}

          {/* Trạng thái kết nối Google Sheets */}
          <div className="mt-5 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              {isGasConnected ? (
                <>
                  <Cloud className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-700 font-bold">Google Sheets: Đã kết nối tự động</span>
                </>
              ) : (
                <>
                  <HardDrive className="w-4 h-4 text-amber-500" />
                  <span>Lưu trên máy (Offline)</span>
                </>
              )}
            </div>
            <button
              onClick={() => {
                sound.playPop();
                onOpenSettings();
              }}
              className="text-amber-700 hover:text-amber-900 underline font-bold"
            >
              Cấu hình Sheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
