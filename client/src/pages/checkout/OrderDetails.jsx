import React, { useState } from 'react';
import {
  ChevronLeft,
  Bell,
  Pencil,
  Package,
  Download,
  MoreVertical,
  CreditCard,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NotificationCard from '../../components/NotificationCard';

const OrderDetails = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const handleDownloadReceipt = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-5 pb-8 pt-10 font-sans">
      <NotificationCard show={showNotification} />

      <div className="mb-7 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm"
        >
          <ChevronLeft size={20} className="text-[#444]" />
        </button>

        <h1 className="text-[18px] font-medium text-[#333]">Order Details</h1>

        <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm">
          <Bell size={19} className="text-[#333]" />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#2b7cff]" />
        </button>
      </div>

      <div className="mb-5">
        <p className="mb-3 text-[15px] font-medium text-[#333]">Order</p>

        <div className="rounded-[22px] bg-[#e9e9e9] p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-[16px] bg-[#f4f4f4]">
              <img
                src="/puma.png"
                alt="Puma Running Shoe"
                className="max-h-full w-auto object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[16px] font-semibold text-[#333]">
                Puma Running Shoe
              </h3>
              <p className="text-[12px] text-[#666]">Color: White</p>
              <p className="text-[12px] text-[#666]">Size: 40</p>
              <p className="text-[12px] text-[#666]">Quantity: 1</p>
            </div>

            <div className="text-right">
              <p className="text-[12px] text-[#666]">Price:</p>
              <p className="text-[22px] font-bold text-[#2b7cff]">$23.87</p>
              <p className="text-[11px] text-[#9a9a9a]">GST: 25%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <p className="mb-3 text-[15px] font-medium text-[#333]">Delivery Address</p>

        <div className="rounded-[22px] bg-[#e9e9e9] p-3 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium text-[#333]">Address</span>
              <span className="rounded-full bg-[#2b7cff] px-2 py-0.5 text-[10px] text-white">
                Home
              </span>
            </div>

            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5f5f5]">
              <Pencil size={13} className="text-[#555]" />
            </button>
          </div>

          <div className="grid grid-cols-[1fr_120px] gap-3">
            <div className="text-[12px] leading-5 text-[#666]">
              <p>Andria Kate</p>
              <p>25/3 Housing Estate, India 31165</p>
              <p>+9125665895410</p>
              <p>example@gmail.com</p>
            </div>

            <div className="overflow-hidden rounded-[16px] bg-[#f2f2f2]">
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=Delhi,India&zoom=4&size=240x160&maptype=roadmap"
                alt="Map"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <p className="mb-3 text-[15px] font-medium text-[#333]">Payment Method</p>

        <div className="rounded-[22px] bg-[#e9e9e9] p-3 shadow-sm">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-medium text-[#333]">Credit Card</p>
                <CreditCard size={13} className="text-[#666]" />
              </div>
              <p className="text-[12px] text-[#666]">Andria Kate</p>
              <p className="text-[12px] text-[#666]">5447 5438 3254 ****</p>
              <p className="text-[12px] text-[#666]">Expiry: 12/28</p>
            </div>

            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5f5f5]">
              <Pencil size={13} className="text-[#555]" />
            </button>
          </div>

          <p className="text-[11px] text-[#8a8a8a]">
            Secure checkout powered by{' '}
            <span className="font-medium text-[#2b7cff]">Reserve Bank of India RBI</span>
          </p>
        </div>
      </div>

      <div className="mb-5 flex gap-3">
        <button
          onClick={() => navigate('/tracking-details')}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#666] to-[#1f1f1f] py-4 text-white shadow-lg"
        >
          <Package size={18} />
          <span>Track Order</span>
        </button>

        <button
          onClick={handleDownloadReceipt}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#d8d8d8] bg-[#f4f4f4] py-4 text-[#333]"
        >
          <Download size={18} />
          <span>Download Receipt</span>
        </button>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[15px] font-medium text-[#333]">Current Status</p>
          <button className="text-[#555]">
            <MoreVertical size={18} />
          </button>
        </div>

        <div className="rounded-[22px] bg-[#e9e9e9] p-3 shadow-sm">
          <div className="flex gap-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-[16px] bg-[#f4f4f4]">
              <img
                src="/puma.png"
                alt="Puma Running Shoe"
                className="max-h-full w-auto object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[16px] font-semibold text-[#333]">
                Puma Running Shoe
              </h3>
              <p className="mb-3 text-[12px] text-[#777]"># Tracking ID: H0123456789</p>

              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-[12px] text-[#777]">From</p>
                  <div className="mx-auto my-1 h-5 w-5 rounded-full bg-gradient-to-b from-[#666] to-[#1f1f1f]" />
                  <p className="text-[11px] text-[#333]">02/03 Delhi India</p>
                </div>

                <div className="h-[2px] flex-1 bg-[#999]" />

                <div className="text-center">
                  <p className="text-[12px] text-[#777]">To</p>
                  <div className="mx-auto my-1 h-5 w-5 rounded-full border-2 border-[#666] bg-white" />
                  <p className="text-[11px] text-[#333]">03/04 Kerala India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="h-1.5 w-24 rounded-full bg-black" />
      </div>
    </div>
  );
};

export default OrderDetails;