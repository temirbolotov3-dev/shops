import React, { useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, favorites, toggleFavorite, addToCart } = useShop();

  const product = useMemo(
    () => products.find((item) => item.id === Number(id)),
    [products, id]
  );

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.length ? product.sizes[0] : null
  );

  if (!product) {
    return (
      <div className="mx-auto flex min-h-screen max-w-[430px] items-center justify-center bg-[#f5f5f5] px-6">
        <div className="text-center">
          <p className="mb-4 text-gray-500">Product not found</p>
          <Link
            to="/home"
            className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const isLiked = favorites.includes(product.id);

  return (
    <div className="relative mx-auto min-h-screen max-w-[430px] overflow-x-hidden bg-[#f5f5f5] px-5 pb-32 pt-10 font-sans">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] text-[#555] shadow-sm"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>

        <h2 className="text-[18px] font-medium text-[#383838]">Details</h2>

        <button
          onClick={() => toggleFavorite(product.id)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] shadow-sm"
        >
          <Heart
            size={18}
            strokeWidth={2}
            className={isLiked ? 'text-[#4e4e4e]' : 'text-[#777]'}
            fill={isLiked ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      {/* Image area */}
      <div className="mb-6 flex flex-col items-center">
        <div className="relative flex h-[230px] w-full items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 max-h-[190px] w-auto object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.10)]"
          />
        </div>

        <div className="relative mt-1 h-[22px] w-[275px] rounded-full border border-[#d7d7d7]">
          <div className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-b from-[#727272] to-[#2c2c2c] text-[10px] text-white shadow">
            ↔
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#242424]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7d7d7]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7d7d7]" />
        </div>
      </div>

      {/* Details card */}
      <div className="rounded-[28px] bg-[#e8e8e8] p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="mb-1 text-[14px] text-[#7f7f7f]">Description</p>
            <h1 className="text-[20px] font-extrabold leading-tight text-[#4a4a4a]">
              {product.name}
            </h1>
          </div>

          <p className="whitespace-nowrap text-[18px] font-bold text-[#222]">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <p className="mb-8 text-[14px] leading-6 text-[#666]">
          {product.description}
          <span className="ml-1 font-medium text-[#333]">see more</span>
        </p>

        {product.sizes?.length > 0 && (
          <>
            <h3 className="mb-4 text-[16px] font-medium text-[#4d4d4d]">
              Choose Size
            </h3>

            <div className="mb-2 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {product.sizes.map((size, index) => (
                <button
                  key={`${size}-${index}`}
                  onClick={() => setSelectedSize(size)}
                  className={`flex h-14 min-w-[56px] items-center justify-center rounded-[16px] text-[16px] font-medium shadow-sm transition-all ${
                    selectedSize === size
                      ? 'bg-gradient-to-b from-[#7a7a7a] to-[#2d2d2d] text-white'
                      : 'bg-[#f6f6f6] text-[#555]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex max-w-[430px] gap-4 bg-white/80 px-5 py-5 backdrop-blur-xl">
        <button
          onClick={() => addToCart(product, selectedSize)}
          className="flex h-14 w-16 items-center justify-center rounded-[16px] border border-[#d7d7d7] bg-[#f8f8f8] shadow-sm"
        >
          <ShoppingBag size={18} className="text-[#555]" strokeWidth={2} />
        </button>

        <button
          onClick={() => {
            addToCart(product, selectedSize);
            navigate('/checkout-step-1');
          }}
          className="flex-1 rounded-[16px] bg-gradient-to-b from-[#7d7d7d] via-[#515151] to-[#1f1f1f] py-4 text-center text-[18px] font-medium text-white shadow-lg"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;