import React from 'react';
import { Download } from 'lucide-react';

const NotificationCard = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed top-6 left-1/2 z-50 w-[90%] max-w-[360px] -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-[20px] bg-[#dcdcdc] px-4 py-3 text-[#2a2a2a] shadow-xl">
        
        {/* Icon */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
          <Download size={18} />
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="text-[14px] font-semibold">E - Receipt</p>
          <p className="text-[12px] text-[#555]">
            Downloaded Successfully.
          </p>
        </div>

        {/* Time */}
        <span className="text-[11px] text-[#666]">Just now</span>
      </div>
    </div>
  );
};

export default NotificationCard;