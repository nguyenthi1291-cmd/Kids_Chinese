import React from 'react';
import { sound } from '../utils/audio';

export default function DisplaySettingsModal({
  isOpen,
  onClose,
  scale,
  onChangeScale,
  layoutWidth,
  onChangeLayoutWidth
}) {
  if (!isOpen) return null;

  const presets = [
    {
      id: 'mini',
      name: 'iPad Mini (8.3")',
      scale: 100,
      width: 'standard',
      icon: 'fa-solid fa-mobile-screen',
      desc: 'Kích thước tiêu chuẩn, gọn gàng, hiển thị nhiều nội dung'
    },
    {
      id: 'air',
      name: 'iPad Gen / iPad Air (10.2" - 10.9")',
      scale: 115,
      width: 'standard',
      icon: 'fa-solid fa-tablet-screen-button',
      desc: 'Tỷ lệ khuyến nghị tối ưu nhất cho màn hình iPad phổ biến'
    },
    {
      id: 'pro',
      name: 'iPad Pro (11" - 12.9")',
      scale: 125,
      width: 'ipad-pro',
      icon: 'fa-solid fa-tablet',
      desc: 'Phóng to thẻ và mở rộng khung hiển thị trên màn hình lớn'
    },
    {
      id: 'kids_big',
      name: 'Chế Độ Chữ To Cho Bé (To Rõ Nhất)',
      scale: 135,
      width: 'full',
      icon: 'fa-solid fa-eye',
      desc: 'Chữ Hán siêu to, nút bấm lớn giúp bé dễ chạm cảm ứng và bảo vệ mắt'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playPop();
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-3xl p-5 sm:p-7 max-w-xl w-full border-4 border-indigo-300 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Nút đóng */}
        <button
          onClick={() => {
            sound.playPop();
            onClose();
          }}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-600 text-slate-500 border-2 border-slate-200 hover:border-rose-300 flex items-center justify-center transition-all btn-bouncy"
          title="Đóng cửa sổ"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* Tiêu đề */}
        <div className="flex items-center gap-3 mb-5 pr-8">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 border-2 border-indigo-300 flex items-center justify-center text-2xl text-indigo-700 shadow-sm shrink-0">
            <i className="fa-solid fa-tablet-screen-button"></i>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-800 flex items-center gap-2">
              <span>Tùy Chỉnh Kích Thước Cho iPad</span>
              <span className="bg-indigo-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                {scale}%
              </span>
            </h2>
            <p className="text-xs font-bold text-slate-500">
              Điều chỉnh độ phóng to, cỡ chữ và độ rộng giao diện phù hợp với iPad của bé
            </p>
          </div>
        </div>

        {/* Các cấu hình mẫu (Presets) */}
        <div className="space-y-3 mb-5">
          <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            1. Chọn nhanh theo dòng iPad của bạn:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {presets.map((p) => {
              const isSelected = scale === p.scale && layoutWidth === p.width;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    sound.playPop();
                    onChangeScale(p.scale);
                    onChangeLayoutWidth(p.width);
                  }}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-500 shadow-md ring-2 ring-indigo-200'
                      : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-indigo-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 mt-0.5 ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <i className={p.icon}></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-xs text-slate-800">{p.name}</span>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-600 font-mono">Tỷ lệ: {p.scale}%</span>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{p.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Thanh trượt điều chỉnh độ phóng to tự do (Slider) */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3 mb-5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <i className="fa-solid fa-magnifying-glass-plus text-indigo-500"></i>
              <span>2. Kéo thanh trượt để phóng to / thu nhỏ:</span>
            </label>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  sound.playPop();
                  onChangeScale(Math.max(80, scale - 5));
                }}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-black"
                title="Giảm 5%"
              >
                A-
              </button>
              <span className="font-mono font-black text-xs bg-indigo-100 text-indigo-900 px-2 py-1 rounded-lg">
                {scale}%
              </span>
              <button
                onClick={() => {
                  sound.playPop();
                  onChangeScale(Math.min(150, scale + 5));
                }}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-black"
                title="Tăng 5%"
              >
                A+
              </button>
            </div>
          </div>

          <input
            type="range"
            min="80"
            max="150"
            step="5"
            value={scale}
            onChange={(e) => onChangeScale(parseInt(e.target.value))}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />

          <div className="flex justify-between text-[10px] font-bold text-slate-400">
            <span>80% (Nhỏ gọn)</span>
            <span>100% (Chuẩn)</span>
            <span>115% (iPad Air)</span>
            <span>125% (iPad Pro)</span>
            <span>150% (Rất Lớn)</span>
          </div>
        </div>

        {/* Chiều rộng khung hiển thị (Layout Container Width) */}
        <div className="space-y-2 mb-6">
          <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            3. Độ rộng khung hiển thị trên màn hình iPad:
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => {
                sound.playPop();
                onChangeLayoutWidth('standard');
              }}
              className={`py-2 px-3 rounded-xl border-2 font-black text-xs transition-all ${
                layoutWidth === 'standard'
                  ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              Tiêu chuẩn (1024px)
            </button>
            <button
              onClick={() => {
                sound.playPop();
                onChangeLayoutWidth('ipad-pro');
              }}
              className={`py-2 px-3 rounded-xl border-2 font-black text-xs transition-all ${
                layoutWidth === 'ipad-pro'
                  ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              Rộng (1180px)
            </button>
            <button
              onClick={() => {
                sound.playPop();
                onChangeLayoutWidth('full');
              }}
              className={`py-2 px-3 rounded-xl border-2 font-black text-xs transition-all ${
                layoutWidth === 'full'
                  ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              Toàn Màn Hình
            </button>
          </div>
        </div>

        {/* Nút hành động */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <button
            onClick={() => {
              sound.playPop();
              onChangeScale(115);
              onChangeLayoutWidth('standard');
            }}
            className="px-3.5 py-2 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-bold transition-colors"
          >
            <i className="fa-solid fa-rotate-left mr-1"></i>
            Khôi phục mặc định iPad
          </button>

          <button
            onClick={() => {
              sound.playSuccess();
              onClose();
            }}
            className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs sm:text-sm shadow-md transition-all btn-bouncy"
          >
            <i className="fa-solid fa-check mr-1.5"></i>
            Đã Xong & Lưu Lại
          </button>
        </div>
      </div>
    </div>
  );
}
