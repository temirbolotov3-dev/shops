import React from 'react';
import { ChevronLeft, Bell, Navigation, Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LiveTracking = () => {
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = 'tel:+996500092097';
  };

  const handleMessage = () => {
    window.location.href = 'sms:+996500092097';
  };

  return (
    <div className="relative mx-auto min-h-screen max-w-[430px] overflow-hidden bg-[#f5f5f5] font-sans">
      {/* Google Map */}
      <div className="absolute inset-0">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Kerala%20India&z=14&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Header */}
      <div className="relative z-20 px-5 pt-10">
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 shadow-sm backdrop-blur-sm"
          >
            <ChevronLeft size={20} className="text-[#333]" />
          </button>

          <h1 className="text-[18px] font-medium text-[#333]">Live Tracking</h1>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/85 shadow-sm backdrop-blur-sm"
          >
            <Bell size={19} className="text-[#333]" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#2b7cff]" />
          </button>
        </div>
      </div>

      {/* Map pins */}
      <div className="relative z-10 h-[58vh]">
        {/* Pin 1 */}
        <div className="absolute left-[14%] top-[16%] h-7 w-7 rounded-full border-4 border-white bg-black shadow-[0_8px_18px_rgba(0,0,0,0.22)]" />

        {/* Pin 2 */}
        <div className="absolute right-[18%] top-[36%] h-6 w-6 rounded-full border-4 border-white bg-[#2b7cff] shadow-[0_8px_18px_rgba(43,124,255,0.28)]" />

        {/* Current location button */}
        <button
          type="button"
          className="absolute bottom-[14%] left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#1d1d1f] text-white shadow-[0_14px_28px_rgba(0,0,0,0.22)]"
        >
          <Navigation size={18} />
        </button>
      </div>

      {/* Bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 z-30 rounded-t-[34px] bg-[#161616] px-5 pb-6 pt-5 text-white shadow-2xl">
        <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-white/85" />

        <h2 className="mb-4 text-[18px] font-medium">Package Information</h2>

        <div className="mb-4 rounded-[20px] bg-[#f3f3f3] p-4 text-[#333] shadow-sm">
          <div className="grid grid-cols-2 gap-y-3 text-[14px]">
            <p className="text-[#8a8a8a]">Delivery Type:</p>
            <p className="text-right">Blue dart</p>

            <p className="text-[#8a8a8a]">Item:</p>
            <p className="text-right">Shoe</p>

            <p className="text-[#8a8a8a]">Delivery Date</p>
            <p className="text-right">17 October 2024</p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-full bg-[#2a2a2a] p-2 shadow-inner">
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s"
              alt="Shipper"
              className="h-11 w-11 rounded-full object-cover"
            />

            <div className="leading-tight">
              <p className="text-[10px] text-white/60">Your Shipper</p>
              <p className="text-[14px] font-medium text-white">Andrews Kate</p>
              <p className="text-[11px] text-white/65">+996 500 092 097</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleCall}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#444] text-white transition active:scale-95"
            >
              <Phone size={18} />
            </button>

            <button
              type="button"
              onClick={handleMessage}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#444] text-white transition active:scale-95"
            >
              <MessageCircle size={18} />
            </button>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <div className="h-1.5 w-24 rounded-full bg-white/90" />
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;