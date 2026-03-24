import React, { useState } from 'react';
import {
  ChevronLeft,
  MoreHorizontal,
  Pencil,
  Plus,
  CreditCard,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthToast from '../../components/AuthToast';

const CheckoutPayment = () => {
  const navigate = useNavigate();

  const [selectedMethod, setSelectedMethod] = useState('card');
  const [promoCode, setPromoCode] = useState('');
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'info',
  });

  const showToast = (message, type = 'info') => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 2200);
  };

  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      showToast('Promo code жазыңыз.');
      return;
    }

    showToast('Promo code applied.', 'success');
  };

  const handlePlaceOrder = () => {
    showToast('Order placed successfully.', 'success');

    setTimeout(() => {
      navigate('/checkout-success');
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-5 pb-8 pt-10 font-sans">
      <AuthToast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm"
        >
          <ChevronLeft size={20} className="text-[#444]" />
        </button>

        <h1 className="text-[18px] font-medium text-[#333]">Checkout(2/3)</h1>

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
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2b7cff] bg-white">
              <div className="h-2.5 w-2.5 rounded-full bg-[#2b7cff]" />
            </div>
            <span className="mt-1 text-[10px] text-[#2b7cff]">Payment</span>
          </div>

          <div className="z-10 flex flex-col items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#b9b9b9] bg-white">
              <div className="h-2.5 w-2.5 rounded-full bg-[#d8d8d8]" />
            </div>
            <span className="mt-1 text-[10px] text-[#a0a0a0]">Order Placed</span>
          </div>
        </div>
      </div>

      <h2 className="mb-3 text-[16px] font-medium text-[#333]">Select payment method</h2>

      {/* Card method */}
      <button
        type="button"
        onClick={() => setSelectedMethod('card')}
        className={`mb-4 w-full rounded-[22px] p-4 text-left shadow-sm transition ${
          selectedMethod === 'card'
            ? 'bg-[#e9e9e9] ring-2 ring-[#2b7cff]/15'
            : 'bg-[#ececec]'
        }`}
      >
        <div className="mb-2 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <p className="text-[15px] font-medium text-[#333]">Credit Card</p>
            <CreditCard size={14} className="text-[#555]" />
          </div>

          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f6f6f6]"
          >
            <Pencil size={13} className="text-[#555]" />
          </button>
        </div>

        <p className="text-[12px] text-[#666]">Andria Kate</p>
        <p className="text-[12px] text-[#666]">5447 5438 3254 ****</p>
        <p className="text-[12px] text-[#666]">Expiry: 12/28</p>

        <p className="mt-2 text-[11px] text-[#8a8a8a]">
          Secure checkout powered by{' '}
          <span className="font-medium text-[#2b7cff]">Reserve Bank of India RBI</span>
        </p>
      </button>

      {/* COD */}
      <button
        type="button"
        onClick={() => setSelectedMethod('cod')}
        className={`mb-5 w-full rounded-[22px] p-4 text-left shadow-sm transition ${
          selectedMethod === 'cod'
            ? 'bg-[#e9e9e9] ring-2 ring-[#2b7cff]/15'
            : 'bg-[#ececec]'
        }`}
      >
        <p className="text-[15px] font-medium text-[#333]">Cash on Delivery</p>
        <p className="mt-1 text-[12px] text-[#777]">
          Additional INR 20 charges for COD services
        </p>
      </button>

      {/* Promo */}
      <div className="mb-5">
        <h3 className="mb-3 text-[16px] font-medium text-[#333]">Do You Have Promocode?</h3>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="h-14 flex-1 rounded-full bg-[#ececec] px-5 text-[14px] text-[#333] outline-none placeholder:text-[#9a9a9a]"
          />

          <button
            type="button"
            onClick={handleApplyPromo}
            className="rounded-full bg-gradient-to-b from-[#8b8b8b] via-[#4f4f4f] to-[#181818] px-6 text-[15px] font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Add payment */}
      <button
        type="button"
        className="mb-5 flex h-14 w-full items-center justify-center gap-2 rounded-[16px] bg-[#eaeaea] text-[#2b7cff]"
      >
        <Plus size={18} />
        <span className="text-[15px] font-medium">Add New Payment Method</span>
      </button>

      {/* Logos */}
      <div className="mb-8 flex gap-2">
        {['Pay', 'pay', 'VISA', 'PayPal', '◎◎'].map((item) => (
          <div
            key={item}
            className="flex h-7 min-w-[30px] items-center justify-center rounded-md border border-[#aab3c8] bg-[#f8f8f8] px-1 text-[10px] font-medium text-[#20304f]"
          >
            {item}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <button
          type="button"
          onClick={handlePlaceOrder}
          className="w-full rounded-full bg-gradient-to-b from-[#8b8b8b] via-[#4f4f4f] to-[#181818] py-4 text-[17px] font-medium text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)]"
        >
          Place your Order
        </button>
      </div>

      {/* Bottom line */}
      <div className="mt-4 flex justify-center">
        <div className="h-1.5 w-24 rounded-full bg-black" />
      </div>
    </div>
  );
};

export default CheckoutPayment;