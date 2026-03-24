import React from 'react';
import { Button } from '../../components/common/Button';

const Onboarding = () => {
  return (
    <div className="flex flex-col items-center px-8 pt-12 pb-10 min-h-screen bg-white">
      {/* Image Area */}
      <div className="w-full h-[450px] bg-[#EBEBEB] rounded-[40px] overflow-hidden mb-10">
        <img src="/hero.png" alt="Hero" className="w-full h-full object-cover" />
      </div>

      <h1 className="text-[32px] font-bold text-center leading-tight mb-4">
        Find Your <br /> Best Style
      </h1>
      
      <p className="text-gray-500 text-center mb-10 px-4">
        Join and discover the best style according to your passion
      </p>

      <Button onClick={() => window.location.href='/login'}>
        Get Started
      </Button>
    </div>
  );
};

export default Onboarding;