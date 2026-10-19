import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';

export default function SettingsModal({ currentUrl, onSaveUrl, onClose, onTestConnection, onSyncNow }) {
  const [url, setUrl] = useState(currentUrl || '');
  const [testStatus, setTestStatus] = useState(null); // 'loading', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        sound.playPop();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleTest = async () => {
    sound.playPop();
    if (!url.trim()) {
      setTestStatus('error');
      setStatusMessage('Vui lòng nhập URL Google Apps Script Web App!');
      sound.playWrong();
      return;
    }

    setTestStatus('loading');
    setStatusMessage('Đang kết nối thử nghiệm đến Google Sheets...');

    const res = await onTestConnection(url.trim());
    if (res.success) {
      setTestStatus('success');
      setStatusMessage(res.message || 'Kết nối thành công! Google Sheets đã sẵn sàng đồng bộ.');
      sound.playSuccess();
    } else {
      setTestStatus('error');
      setStatusMessage(res.error || 'Lỗi kết nối. Hãy kiểm tra quyền "Bất kỳ ai (Anyone)" khi Deploy.');
      sound.playWrong();
    }
  };

  const handleSave = () => {
    sound.playPop();
    onSaveUrl(url.trim());
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playPop();
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border-4 border-amber-300 shadow-2xl relative">
        {/* NÚT TẮT CỬA SỔ (CLOSE BUTTON) */}
        <button
          onClick={() => {
            sound.playPop();
            onClose();
          }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-600 text-slate-500 border-2 border-slate-200 hover:border-rose-300 flex items-center justify-center transition-all btn-bouncy shadow-sm"
          title="Tắt cửa sổ cài đặt (Esc)"
          aria-label="Đóng"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        {/* Tiêu đề với Font Awesome */}
        <div className="flex items-center gap-3 mb-5 pr-8">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl text-amber-700 shadow-sm shrink-0">
            <i className="fa-solid fa-gear"></i>
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-800">
              Cài Đặt Kết Nối Google Sheets
            </h2>
            <p className="text-xs font-bold text-slate-500">
              Đồng bộ dữ liệu học sinh, bài học & điểm số vào bảng tính
            </p>
          </div>
        </div>

        {/* Ô nhập URL */}
        <div className="space-y-4 mb-5">
          <div>
            <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <i className="fa-solid fa-link text-slate-400"></i>
              <span>URL Google Apps Script Web App:</span>
            </label>
            <input
              type="url"
              placeholder="https://script.google.com/macros/s/AKfycb.../exec"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full text-xs font-mono font-semibold px-3.5 py-3 rounded-2xl border-2 border-slate-300 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100 bg-slate-50 text-slate-800"
            />
          </div>

          {/* Nút kiểm tra */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleTest}
              disabled={testStatus === 'loading'}
              className="flex-1 py-2.5 px-3 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 font-extrabold text-xs flex items-center justify-center gap-2 border border-sky-300 btn-bouncy"
            >
              <i className="fa-solid fa-cloud"></i>
              <span>{testStatus === 'loading' ? 'Đang kiểm tra...' : 'Kiểm Tra Kết Nối'}</span>
            </button>

            {currentUrl && (
              <button
                onClick={async () => {
                  sound.playPop();
                  await onSyncNow();
                }}
                className="py-2.5 px-3 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-extrabold text-xs flex items-center justify-center gap-2 border border-emerald-300 btn-bouncy"
                title="Tải lại dữ liệu từ Sheet"
              >
                <i className="fa-solid fa-rotate"></i>
                <span>Tải Lại Sheet</span>
              </button>
            )}
          </div>

          {/* Thông báo trạng thái kiểm tra */}
          {testStatus && (
            <div
              className={`p-3 rounded-2xl text-xs font-bold flex items-start gap-2 border ${
                testStatus === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : testStatus === 'error'
                  ? 'bg-rose-50 text-rose-800 border-rose-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}
            >
              {testStatus === 'success' && <i className="fa-solid fa-circle-check text-emerald-600 mt-0.5 text-sm shrink-0"></i>}
              {testStatus === 'error' && <i className="fa-solid fa-circle-exclamation text-rose-600 mt-0.5 text-sm shrink-0"></i>}
              <span>{statusMessage}</span>
            </div>
          )}
        </div>

        {/* Hướng dẫn nhanh */}
        <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200 text-xs text-slate-700 space-y-2 mb-6">
          <div className="font-black text-amber-900 flex items-center gap-1.5">
            <i className="fa-solid fa-lightbulb text-amber-500"></i>
            <span>Hướng dẫn lấy URL Google Sheets:</span>
          </div>
          <ol className="list-decimal pl-4 space-y-1 text-slate-600 font-semibold">
            <li>Mở file Google Sheet của bạn ➔ <strong>Tiện ích mở rộng ➔ Apps Script</strong>.</li>
            <li>Dán mã trong file <code className="bg-amber-200/60 px-1 py-0.5 rounded font-mono">google_apps_script/Code.gs</code>.</li>
            <li>Bấm <strong>Triển khai (Deploy) ➔ Quản lý bản triển khai mới ➔ Ứng dụng web</strong>.</li>
            <li>Chọn quyền truy cập: <strong>Bất kỳ ai (Anyone)</strong> rồi copy link dán vào đây!</li>
          </ol>
        </div>

        {/* Nút hành động */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="flex-1 py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-sm border-2 border-slate-300 btn-bouncy flex items-center justify-center gap-1.5"
          >
            <i className="fa-solid fa-xmark"></i>
            <span>Đóng</span>
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 px-4 rounded-2xl btn-card-yellow text-slate-900 font-black text-sm btn-bouncy shadow-md flex items-center justify-center gap-1.5"
          >
            <i className="fa-solid fa-check"></i>
            <span>Lưu Cấu Hình</span>
          </button>
        </div>
      </div>
    </div>
  );
}
