import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

const AuthToast = ({ show, message, onClose, type = 'info' }) => {
  if (!show) return null;

  return (
    <div className="fixed top-5 left-1/2 z-[100] w-[90%] max-w-[360px] -translate-x-1/2">
      <div className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
        <div className="mt-0.5">
          {type === 'success' ? (
            <CheckCircle2 size={20} className="text-green-600" />
          ) : (
            <Info size={20} className="text-[#2b7cff]" />
          )}
        </div>

        <div className="flex-1">
          <p className="text-[14px] font-semibold text-[#222]">Notification</p>
          <p className="mt-0.5 text-[13px] leading-5 text-[#666]">{message}</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1 text-[#777] transition hover:bg-[#f2f2f2]"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default AuthToast;