import React, { createContext, useContext, useMemo, useState } from 'react';

const ShopContext = createContext(null);

const initialProducts = [
  {
    id: 1,
    brand: 'PUMA',
    name: 'Puma Running Shoe',
    price: 23.87,
    image: '/puma.png',
    category: 'shoes',
    color: 'Black',
    sizes: [40, 41, 42, 43],
    description:
      'Designed for comfort and built for speed, PUMA running shoes provide the ultimate in traction, grip and cushioning.',
  },
  {
    id: 2,
    brand: 'EIGER',
    name: 'Eiger Backpack',
    price: 27.9,
    image: '/backpack.png',
    category: 'bags',
    color: 'Green',
    sizes: ['15 L', '18 L'],
    description:
      'Durable backpack with multiple compartments, ideal for daily commuting and travel.',
  },
  {
    id: 3,
    brand: 'NIKE',
    name: 'Nike Plain T-Shirt',
    price: 45.87,
    image: '/shirt.png',
    category: 'clothes',
    color: 'Black',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Soft everyday t-shirt with a relaxed fit and minimal branding.',
  },
  {
    id: 4,
    brand: 'NIKE',
    name: 'Nike Running Shoe',
    price: 34.0,
    image: '/nike.png',
    category: 'shoes',
    color: 'Red',
    sizes: [41, 42, 43, 44],
    description:
      'High-top sneakers with a bold silhouette and comfortable ankle support.',
  },
];

export function ShopProvider({ children }) {
  const [products] = useState(initialProducts);
  const [favorites, setFavorites] = useState([1, 4]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product, selectedSize = null) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          selectedSize,
          quantity: 1,
        },
      ];
    });
  };

  const favoriteProducts = useMemo(
    () => products.filter((item) => favorites.includes(item.id)),
    [products, favorites]
  );

  const value = {
    products,
    favorites,
    cart,
    favoriteProducts,
    toggleFavorite,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used inside ShopProvider');
  }
  return context;
}