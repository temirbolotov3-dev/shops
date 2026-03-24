import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-4 py-6 font-sans">
      <div className="mx-auto flex min-h-[94vh] max-w-[430px] flex-col rounded-[42px] bg-[#f7f7f7] px-4 pb-5 pt-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
        <div className="mb-4 flex justify-center">
          <div className="h-8 w-28 rounded-full bg-black" />
        </div>

        <div className="overflow-hidden rounded-[30px] bg-[#ececec]">
          <img
            src="/onboarding.png"
            alt="Welcome"
            className="h-[360px] w-full object-cover"
          />
        </div>

        <div className="px-5 pt-8 text-center">
          <h1 className="mb-4 text-[28px] font-extrabold leading-tight tracking-[-0.6px] text-[#222]">
            Find Your
            <br />
            Best Style
          </h1>

          <p className="mx-auto max-w-[265px] text-[16px] leading-6 text-[#8d8d8d]">
            Join and discover the best style according to your passion
          </p>
        </div>

        <div className="mt-auto px-5 pt-10">
          <button
            onClick={() => navigate('/login')}
            className="w-full rounded-full bg-gradient-to-b from-[#8a8a8a] via-[#4f4f4f] to-[#171717] py-4 text-[17px] font-medium text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)] transition active:scale-[0.98]"
          >
            Get Started
          </button>
        </div>

        <div className="mt-5 flex justify-center">
          <div className="h-1.5 w-24 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;