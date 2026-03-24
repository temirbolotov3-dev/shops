import React from 'react';
import { ChevronLeft, MoreHorizontal, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  'Delivery Address',
  'Payment',
  'Order Placed',
];

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-5 pb-8 pt-10 font-sans">
      {/* Header */}
      <div className="mb-7 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm transition active:scale-95"
        >
          <ChevronLeft size={20} className="text-[#444]" />
        </button>

        <h1 className="text-[18px] font-medium tracking-[-0.2px] text-[#333]">
          Checkout(3/3)
        </h1>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm transition active:scale-95"
        >
          <MoreHorizontal size={20} className="text-[#444]" />
        </button>
      </div>

      {/* Stepper */}
      <div className="mb-8 px-2">
        <div className="relative flex items-start justify-between">
          <div className="absolute left-[13%] right-[13%] top-[11px] border-t border-dashed border-[#2b7cff]" />

          {steps.map((step, index) => (
            <div key={step} className="relative z-10 flex w-[86px] flex-col items-center text-center">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2b7cff] shadow-[0_4px_10px_rgba(43,124,255,0.28)]">
                <Check size={11} strokeWidth={3} className="text-white" />
              </div>
              <span className="mt-2 text-[9px] font-medium leading-3 text-[#2b7cff]">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Illustration */}
      <div className="mb-3 flex justify-center">
        <img
          src="/Online Shopping.png"
          alt="Order placed"
          className="h-[250px] w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
        />
      </div>

      {/* Success Icon */}
      <div className="mb-5 flex justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2b7cff] bg-white shadow-[0_8px_18px_rgba(43,124,255,0.10)]">
          <Check size={18} strokeWidth={2.8} className="text-[#2b7cff]" />
        </div>
      </div>

      {/* Content */}
      <div className="mb-8 text-center">
        <h2 className="text-[22px] font-extrabold tracking-[-0.4px] text-[#222]">
          Order Placed
        </h2>
        <p className="mx-auto mt-2 max-w-[255px] text-[14px] leading-[22px] text-[#8a8a8a]">
          Your order has been successfully processed and is on its way to you soon!
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => navigate('/order-details')}
          className="w-full rounded-full bg-gradient-to-b from-[#9b9b9b] via-[#5a5a5a] to-[#1a1a1a] py-[15px] text-[18px] font-medium tracking-[-0.2px] text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)] transition active:scale-[0.98]"
        >
          My Order Details
        </button>

        <button
          type="button"
          onClick={() => navigate('/home')}
          className="w-full rounded-full border border-[#d7d7d7] bg-[#f7f7f7] py-[15px] text-[18px] font-medium tracking-[-0.2px] text-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition active:scale-[0.98]"
        >
          Continue Shopping
        </button>
      </div>

      {/* Bottom handle */}
      <div className="mt-5 flex justify-center">
        <div className="h-1.5 w-24 rounded-full bg-black" />
      </div>
    </div>
  );
};

export default CheckoutSuccess;