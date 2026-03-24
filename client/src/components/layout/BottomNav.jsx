import React from 'react';
import { Home, Heart, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
  const location = useLocation();

  const isHome = location.pathname === '/home';
  const isFavorite = location.pathname === '/favorites';

  return (
    <div className="fixed bottom-3 left-1/2 z-50 flex w-[330px] -translate-x-1/2 items-center justify-between rounded-full bg-[#f8f8f8]/95 px-6 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <Link
        to="/home"
        className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
          isHome ? 'bg-[#ececec] text-[#222]' : 'text-[#666]'
        }`}
      >
        <Home size={20} strokeWidth={2} />
      </Link>

      <Link
        to="/favorites"
        className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
          isFavorite ? 'bg-[#ececec] text-[#222]' : 'text-[#666]'
        }`}
      >
        <Heart
          size={20}
          strokeWidth={2}
          fill={isFavorite ? 'currentColor' : 'none'}
        />
      </Link>

      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full text-[#666]"
      >
        <Bell size={20} strokeWidth={2} />
      </button>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s"
        alt="Profile"
        className="h-11 w-11 rounded-full object-cover"
      />
    </div>
  );
}

export default BottomNav;