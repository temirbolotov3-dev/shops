import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Welcome from './pages/auth/Welcome';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/Signup';

import Home from './pages/home/Home';
import ProductDetail from './pages/product/ProductDetail';
import Favorite from './pages/favorite/Favorite';

import CheckoutAddress from './pages/checkout/CheckoutAddress';
import CheckoutPayment from './pages/checkout/CheckoutPayment';
import CheckoutSuccess from './pages/checkout/CheckoutSuccess';
import OrderDetails from './pages/checkout/OrderDetails';

import TrackingDetails from './pages/checkout/TrackingDetails';
import LiveTracking from './pages/checkout/LiveTracking';

import { ShopProvider } from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <div className="relative mx-auto min-h-screen max-w-[430px] overflow-x-hidden bg-white font-sans shadow-2xl">
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" replace />} />

          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorite />} />

          <Route path="/checkout-step-1" element={<CheckoutAddress />} />
          <Route path="/checkout-step-2" element={<CheckoutPayment />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/order-details" element={<OrderDetails />} />

          <Route path="/tracking-details" element={<TrackingDetails />} />
          <Route path="/live-tracking" element={<LiveTracking />} />
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </div>
    </ShopProvider>
  );
}

export default App;