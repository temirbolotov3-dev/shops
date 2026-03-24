import React from 'react';
import { ChevronLeft, Bell, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    title: 'Moving From',
    text: '12, Anywhere street, Delhi, India',
    active: true,
  },
  {
    title: 'In Transits',
    text: '12, Anywhere street, Bangalore, India',
    active: true,
  },
  {
    title: 'Out of Delivery',
    text: '12 October 2024 | Kerala',
    active: true,
  },
  {
    title: 'Delivered',
    text: '17 October 2024.',
    active: false,
  },
];

const TrackingDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-5 pb-8 pt-10 font-sans">
      <div className="mb-7 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm"
        >
          <ChevronLeft size={20} className="text-[#444]" />
        </button>

        <h1 className="text-[18px] font-medium text-[#333]">Tracking Details</h1>

        <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm">
          <Bell size={19} className="text-[#333]" />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#2b7cff]" />
        </button>
      </div>

      <div className="mb-5 text-center">
        <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-[18px] bg-[#ececec] shadow-sm">
          <img
            src="/puma.png"
            alt="Puma Running Shoe"
            className="max-h-full w-auto object-contain"
          />
        </div>

        <h2 className="text-[17px] font-semibold text-[#333]">Puma Running Shoe</h2>
        <p className="text-[13px] text-[#8a8a8a]"># Tracking ID: H0123456789</p>
      </div>

      <div className="mb-6 rounded-[22px] bg-[#cfe0f6] p-4 shadow-sm">
        <div className="grid grid-cols-2 gap-y-3 text-[14px]">
          <p className="text-[#666]">From:</p>
          <p className="text-right text-[#333]">Delhi India</p>

          <p className="text-[#666]">Destination:</p>
          <p className="text-right text-[#333]">Kerala India</p>

          <p className="text-[#666]">Customer:</p>
          <p className="text-right text-[#333]">Andria Kate</p>

          <p className="text-[#666]">Weight:</p>
          <p className="text-right text-[#333]">1.2 kg</p>

          <p className="text-[#666]">Status:</p>
          <p className="text-right font-medium text-[#333]">In Transits</p>
        </div>
      </div>

      <div className="relative">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex gap-4 pb-8">
            <div className="relative flex w-6 justify-center">
              <div
                className={`z-10 mt-1 h-5 w-5 rounded-full ${
                  step.active
                    ? 'bg-gradient-to-b from-[#666] to-[#1f1f1f]'
                    : 'border-2 border-[#666] bg-white'
                }`}
              />
              {index !== steps.length - 1 && (
                <div className="absolute top-6 h-full w-[2px] bg-[#d5d5d5]" />
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-[16px] font-medium text-[#333]">{step.title}</h3>
              <p className="text-[13px] text-[#8a8a8a]">{step.text}</p>
            </div>

            {index === 0 && (
              <button
                onClick={() => navigate('/live-tracking')}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#cfe0f6] text-[#333] shadow-sm"
              >
                <Map size={22} />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <div className="h-1.5 w-24 rounded-full bg-black" />
      </div>
    </div>
  );
};

export default TrackingDetails;