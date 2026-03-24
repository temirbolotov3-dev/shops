import React, { useState } from 'react';
import { ChevronLeft, MoreHorizontal, Pencil, Plus, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const addresses = [
  {
    id: 1,
    label: 'Work',
    name: 'Andria Kate',
    address: '25/3 Housing Estate, India 31165',
    phone: '+9125665895410',
    email: 'example@gmail.com',
    map:
      'https://maps.googleapis.com/maps/api/staticmap?center=Delhi,India&zoom=4&size=320x180&maptype=roadmap',
  },
  {
    id: 2,
    label: 'Home',
    name: 'Andria Kate',
    address: '25/3 Housing Estate, India 31165',
    phone: '+9125665895410',
    email: 'example@gmail.com',
    map:
      'https://maps.googleapis.com/maps/api/staticmap?center=Kerala,India&zoom=4&size=320x180&maptype=roadmap',
  },
];

const CheckoutAddress = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(1);

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-5 pb-8 pt-10 font-sans">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm"
        >
          <ChevronLeft size={20} className="text-[#444]" />
        </button>

        <h1 className="text-[18px] font-medium text-[#333]">Checkout(1/3)</h1>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm"
        >
          <MoreHorizontal size={20} className="text-[#444]" />
        </button>
      </div>

      {/* Stepper */}
      <div className="mb-8 px-1">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-[16%] right-[16%] top-3 border-t border-dashed border-[#7d7d7d]" />

          <div className="z-10 flex flex-col items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2b7cff] bg-white">
              <div className="h-2.5 w-2.5 rounded-full bg-[#2b7cff]" />
            </div>
            <span className="mt-1 text-[10px] text-[#2b7cff]">Delivery Address</span>
          </div>

          <div className="z-10 flex flex-col items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#b9b9b9] bg-white">
              <div className="h-2.5 w-2.5 rounded-full bg-[#d8d8d8]" />
            </div>
            <span className="mt-1 text-[10px] text-[#a0a0a0]">Payment</span>
          </div>

          <div className="z-10 flex flex-col items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#b9b9b9] bg-white">
              <div className="h-2.5 w-2.5 rounded-full bg-[#d8d8d8]" />
            </div>
            <span className="mt-1 text-[10px] text-[#a0a0a0]">Order Placed</span>
          </div>
        </div>
      </div>

      <h2 className="mb-3 text-[16px] font-medium text-[#333]">Select delivery address</h2>

      {/* Add new */}
      <button
        type="button"
        className="mb-4 flex h-14 w-full items-center justify-center gap-2 rounded-[16px] bg-[#eaeaea] text-[#2b7cff]"
      >
        <Plus size={18} />
        <span className="text-[15px] font-medium">Add New Address</span>
      </button>

      {/* Address cards */}
      <div className="space-y-4">
        {addresses.map((item) => {
          const active = selectedAddress === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedAddress(item.id)}
              className={`w-full rounded-[22px] p-3 text-left shadow-sm transition ${
                active ? 'bg-[#e9e9e9] ring-2 ring-[#2b7cff]/15' : 'bg-[#ececec]'
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-medium text-[#333]">Address</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] text-white ${
                      item.label === 'Work' ? 'bg-[#2b7cff]' : 'bg-[#4f8ef7]'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f6f6f6]"
                >
                  <Pencil size={13} className="text-[#555]" />
                </button>
              </div>

              <div className="grid grid-cols-[1fr_120px] gap-3">
                <div className="text-[12px] leading-5 text-[#666]">
                  <p>{item.name}</p>
                  <p>{item.address}</p>
                  <p>{item.phone}</p>
                  <p>{item.email}</p>
                </div>

                <div className="overflow-hidden rounded-[16px] bg-[#f4f4f4]">
                  <img
                    src={item.map}
                    alt="Map"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Note */}
      <div className="mt-8 rounded-[18px] bg-[#ececec] px-4 py-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f5] text-[#2b7cff]">
            <ShieldAlert size={16} />
          </div>

          <p className="text-[12px] leading-5 text-[#666]">
            You are selecting a different city as before which as India.
            Delivery charges may vary for this city.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <button
          type="button"
          onClick={() => navigate('/checkout-step-2')}
          className="w-full rounded-full bg-gradient-to-b from-[#8b8b8b] via-[#4f4f4f] to-[#181818] py-4 text-[17px] font-medium text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)]"
        >
          proceed to Payment
        </button>
      </div>

      {/* Bottom line */}
      <div className="mt-4 flex justify-center">
        <div className="h-1.5 w-24 rounded-full bg-black" />
      </div>
    </div>
  );
};

export default CheckoutAddress;