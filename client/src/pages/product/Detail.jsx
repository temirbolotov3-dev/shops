import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingBag } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-10">
      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-12 mb-6">
        <button onClick={() => navigate(-1)} className="p-3 bg-[#F9F9F9] rounded-full">
          <ArrowLeft size={20} />
        </button>
        <h2 className="font-bold text-lg">Details</h2>
        <button className="p-3 bg-[#F9F9F9] rounded-full">
          <Heart size={20} />
        </button>
      </div>

      {/* Product Image Area */}
      <div className="flex justify-center items-center py-10 relative">
         <div className="w-64 h-64 bg-[#F6F6F6] rounded-full absolute z-0"></div>
         <img src="/puma.png" alt="Sneaker" className="w-60 z-10 relative object-contain" />
      </div>

      {/* Info Section */}
      <div className="px-8 mt-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-400 text-sm">Description</p>
            <h1 className="text-2xl font-bold">Puma Running Shoe</h1>
          </div>
          <p className="text-xl font-bold">$23,87</p>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion... <span className="text-black font-bold">see more</span>
        </p>

        {/* Sizes */}
        <h3 className="font-bold mb-4">Choose Size</h3>
        <div className="flex gap-3 mb-10 overflow-x-auto no-scrollbar">
          {[40, 41, 42, 43, 44].map((size) => (
            <button key={size} className={`w-12 h-12 rounded-xl border flex items-center justify-center font-bold ${size === 40 ? 'bg-black text-white' : 'bg-white text-gray-400'}`}>
              {size}
            </button>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex gap-4">
          <button className="p-4 border rounded-2xl">
            <ShoppingBag size={24} />
          </button>
          <button className="flex-1 bg-gradient-to-b from-[#4B4B4B] to-black text-white font-bold rounded-2xl py-4 shadow-xl active:scale-95 transition-all">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;