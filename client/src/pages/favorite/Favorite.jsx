import React, { useMemo, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import { useShop } from '../../context/ShopContext';

const tabs = [
  { key: 'shoes', label: "Shoe's" },
  { key: 'bags', label: 'Bags' },
  { key: 'tshirt', label: 'T-Shirt' },
  { key: 'clothes', label: 'Cloths' },
  { key: 'pants', label: 'Pants' },
];

const Favorite = () => {
  const navigate = useNavigate();
  const { favoriteProducts, cart, addToCart } = useShop();
  const [activeTab, setActiveTab] = useState('shoes');

  const filtered = useMemo(() => {
    if (activeTab === 'shoes') {
      return favoriteProducts.filter((item) => item.category === 'shoes');
    }
    if (activeTab === 'bags') {
      return favoriteProducts.filter((item) => item.category === 'bags');
    }
    if (activeTab === 'clothes' || activeTab === 'tshirt') {
      return favoriteProducts.filter((item) => item.category === 'clothes');
    }
    return favoriteProducts;
  }, [favoriteProducts, activeTab]);

  return (
    <div className="relative min-h-screen bg-[#f5f5f5] px-5 pb-32 pt-10 font-sans">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm"
        >
          <ChevronLeft size={20} />
        </button>

        <h1 className="text-[18px] font-semibold text-[#333]">Favorite's</h1>

        <div className="h-11 w-11" />
      </div>

      {/* Tabs */}
      <div className="mb-5 flex gap-3 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-[14px] shadow-sm ${
              activeTab === tab.key
                ? 'bg-gradient-to-b from-[#6e6e6e] to-[#2c2c2c] text-white'
                : 'bg-[#ececec] text-[#8b8b8b]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="mb-6 flex items-center gap-3">
        <button type="button" className="text-[#888]">
          ◀
        </button>
        <div className="h-3 flex-1 rounded-full bg-[#8e8e8e]" />
        <button type="button" className="text-[#888]">
          ▶
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-4 pb-28">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-[22px] bg-[#efefef] p-3 shadow-sm"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-[16px] bg-[#e7e7e7]">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full w-auto object-contain"
              />
            </div>

            <div className="flex flex-1 items-start justify-between gap-3">
              <div>
                <h3 className="mb-1 text-[15px] font-semibold text-[#333]">
                  {item.name}
                </h3>
                <p className="text-[13px] text-[#777]">Size: {item.sizes?.[0] || '-'}</p>
                <p className="text-[13px] text-[#777]">Quantity: 01</p>
                <p className="text-[13px] text-[#777]">Color: {item.color || 'Default'}</p>
              </div>

              <p className="self-end text-[16px] font-bold text-[#1f77ff]">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="pt-10 text-center text-sm text-[#888]">
            No favorite products
          </div>
        )}
      </div>

      {/* Buy button */}
      <div className="fixed bottom-24 left-0 right-0 mx-auto max-w-[430px] px-5">
        <button
          onClick={() => {
            filtered.forEach((item) => addToCart(item, item.sizes?.[0] || null));
            navigate('/checkout-step-1');
          }}
          className="w-full rounded-full bg-gradient-to-b from-[#6e6e6e] to-[#121212] py-5 text-[20px] font-medium text-white shadow-lg"
        >
          Buy Now
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Favorite;