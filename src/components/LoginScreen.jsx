import React, { useState, useEffect } from 'react';
import { AVATAR_OPTIONS } from '../data/lessonsData';
import { sound } from '../utils/audio';
import { Sparkles, ArrowRight, UserPlus, LogIn, Users, Cloud, HardDrive, Hash, CheckCircle2, RefreshCw } from 'lucide-react';

export default function LoginScreen({ onLogin, isGasConnected, onOpenSettings }) {
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
    setStatusNote(`Đang tra cứu mã học viên ${loginIdInput.trim().toUpperCase()}...`);

    // Tìm trong savedProfiles xem có tên tương ứng không
    const matched = savedProfiles.find(
      p => p.user_id.toLowerCase() === loginIdInput.trim().toLowerCase()
    );

    const name = matched ? matched.child_name : `Học viên ${loginIdInput.trim().toUpperCase()}`;
    const avatar = matched ? matched.avatar : '🐼';

    await onLogin(name, loginIdInput.trim().toUpperCase(), avatar);

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
              <span>Bé Cũ (Đã Có Mã ID)</span>
            </button>
          </div>

          {/* TAB 1: ĐĂNG KÝ HỌC VIÊN MỚI */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-5">
              {/* Mã Học Viên Tự Động Được Cấp */}
              <div className="bg-amber-50 rounded-2xl p-3.5 border-2 border-amber-300">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-black text-amber-900 flex items-center gap-1">
                    <Hash className="w-3.5 h-3.5" />
                    <span>MÃ HỌC VIÊN CỦA BÉ (USER ID):</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleGenerateNewId}
                    className="text-[11px] font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 underline"
                    title="Đổi mã số ngẫu nhiên khác"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Đổi mã khác</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    required
                    value={userId}
                    onChange={(e) => setUserId(e.target.value.toUpperCase())}
                    className="w-full text-lg font-mono font-black px-3.5 py-2 rounded-xl border-2 border-amber-400 bg-white text-amber-950 tracking-wider focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="Ví dụ: U001"
                  />
                  <div className="text-[11px] font-bold text-amber-700 leading-tight shrink-0 max-w-[140px]">
                    * Lưu vào cột <span className="font-mono bg-amber-200 px-1 rounded">user_id</span> trên Google Sheets
                  </div>
                </div>
              </div>

              {/* Tên bé */}
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Tên của bé yêu:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Bảo Minh, Gia Huy, Bé Miu..."
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full text-base font-bold px-4 py-3 rounded-2xl border-2 border-slate-300 focus:border-amber-500 focus:outline-none focus:ring-3 focus:ring-amber-100 bg-slate-50 text-slate-800"
                />
              </div>

              {/* Chọn Avatar Font Awesome */}
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <i className="fa-solid fa-icons text-amber-500"></i>
                  <span>Chọn biểu tượng học viên (Font Awesome):</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {AVATAR_OPTIONS.map((item) => {
                    const avatarVal = item.faIcon || item.id;
                    const isSelected = selectedAvatar === avatarVal;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          sound.playPop();
                          setSelectedAvatar(avatarVal);
                        }}
                        className={`p-2.5 rounded-2xl flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-amber-100 border-3 border-amber-500 scale-105 shadow-md ring-2 ring-amber-300'
                            : 'bg-slate-50 border-2 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="h-8 flex items-center justify-center">
                          <i className={`${item.faIcon} ${item.color} text-2xl`}></i>
                        </div>
                        <span className="text-[10px] font-black text-slate-700 mt-1 truncate max-w-full">
                          {item.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Nút Tạo học viên */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl btn-card-yellow btn-bouncy text-lg font-black shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    <span>{statusNote || 'Đang tạo học viên trên Google Sheet...'}</span>
                  </div>
                ) : (
                  <>
                    <span>Tạo Hồ Sơ [{userId}] & Học Ngay!</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* TAB 2: ĐĂNG NHẬP BẰNG MÃ ID ĐÃ CÓ */}
          {activeTab === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div className="bg-sky-50 rounded-2xl p-4 border-2 border-sky-300">
                <label className="block text-xs font-black text-sky-950 uppercase tracking-wider mb-1.5">
                  Nhập Mã Học Viên (User ID) của bé:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: U001, U002..."
                    value={loginIdInput}
                    onChange={(e) => setLoginIdInput(e.target.value.toUpperCase())}
                    className="w-full text-lg font-mono font-black px-4 py-3 rounded-2xl border-2 border-sky-400 bg-white text-slate-900 tracking-wider focus:outline-none focus:ring-3 focus:ring-sky-200"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-3 rounded-2xl btn-card-blue btn-bouncy font-black text-sm shrink-0"
                  >
                    Vào Học
                  </button>
                </div>
                <p className="text-[11px] font-semibold text-sky-800 mt-2">
                  * App sẽ tự động tải lại chính xác số sao ⭐ và tiến độ bài học của mã bé này từ Google Sheets.
                </p>
              </div>
            </form>
          )}

          {/* Danh sách các bé đã lưu gần đây (Quick Selection) */}
          {savedProfiles.length > 0 && (
            <div className="mt-5 pt-4 border-t-2 border-dashed border-slate-200">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-600 uppercase">
                  <Users className="w-3.5 h-3.5" />
                  <span>Danh sách học viên đã lưu ({savedProfiles.length}):</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1">
                {savedProfiles.map((p) => (
                  <button
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
