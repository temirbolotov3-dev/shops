import React, { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import { useShop } from '../../context/ShopContext';

const categories = [
  { key: 'all', label: 'popular', icon: '◔' },
  { key: 'clothes', label: '', icon: '👕' },
  { key: 'shoes', label: '', icon: '👟' },
  { key: 'bags', label: '', icon: '👜' },
  { key: 'watch', label: '', icon: '⌚' },
];

const Home = () => {
  const { products, favorites, toggleFavorite, cart } = useShop();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeTab !== 'all') {
      result = result.filter((item) => item.category === activeTab);
    }

    if (searchTerm.trim()) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [products, activeTab, searchTerm]);

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-5 pb-28 pt-10 font-sans">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s"
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-[13px] text-[#9f9f9f]">Hello Zara Lindell</p>
            <h2 className="text-[18px] font-extrabold leading-none text-[#1e1e1e]">
              Welcome Back!
            </h2>
          </div>
        </div>

        <Link
          to="/favorites"
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm"
        >
          <ShoppingBag size={18} className="text-[#4a4a4a]" strokeWidth={1.8} />
          <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[8px] font-bold text-white">
            {String(cart.length).padStart(2, '0')}
          </span>
        </Link>
      </div>

      {/* Search */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 flex-1 items-center rounded-full border border-[#d6d6d6] bg-[#e9e9e9] px-4 shadow-inner">
          <Search size={17} className="mr-3 text-[#707070]" strokeWidth={1.8} />
          <input
            type="text"
            placeholder="What do you need?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-[14px] text-[#444] outline-none placeholder:text-[#7d7d7d]"
          />
        </div>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#7a7a7a] to-[#2c2c2c] text-white shadow-lg"
        >
          <SlidersHorizontal size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6 flex gap-3 overflow-x-auto no-scrollbar">
        {categories.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActiveTab(item.key)}
            className={`flex h-12 items-center justify-center gap-2 rounded-full px-5 shadow-md transition-all ${
              activeTab === item.key
                ? 'bg-gradient-to-b from-[#838383] to-[#2f2f2f] text-white'
                : 'bg-[#fbfbfb] text-[#5e5e5e]'
            }`}
          >
            <span className="text-[16px]">{item.icon}</span>
            {item.label ? (
              <span className="text-[14px] font-medium">{item.label}</span>
            ) : null}
          </button>
        ))}
      </div>

      {/* Slider strip */}
      <div className="mb-5 flex items-center gap-4 px-1">
        <button type="button" className="text-[#8b8b8b] text-[18px]">
          ◀
        </button>
        <div className="h-4 flex-1 rounded-full bg-[#9b9b9b]" />
        <button type="button" className="text-[#8b8b8b] text-[18px]">
          ▶
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((item) => {
          const isFav = favorites.includes(item.id);

          return (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="rounded-[22px] bg-[#e8e8e8] p-3 shadow-sm"
            >
              <div className="mb-2 flex items-start justify-between">
                <span className="text-[11px] font-bold tracking-wide text-[#9a9a9a]">
                  {item.brand}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f8f8f8] shadow-sm"
                >
                  <Heart
                    size={16}
                    strokeWidth={2}
                    className={isFav ? 'text-[#4b4b4b]' : 'text-[#5e5e5e]'}
                    fill={isFav ? 'currentColor' : 'none'}
                  />
                </button>
              </div>

              <div className="mb-3 flex h-32 items-center justify-center rounded-[18px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <h3 className="mb-1 text-[14px] font-medium text-[#707070]">
                {item.name}
              </h3>
              <p className="text-[16px] font-extrabold leading-none text-[#1f1f1f]">
                ${item.price.toFixed(2)}
              </p>
            </Link>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;