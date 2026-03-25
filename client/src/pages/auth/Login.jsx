import React, { useState } from 'react';
import { ChevronLeft, Mail, Shield, Eye, EyeOff } from 'lucide-react';
import { FaApple, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AuthToast from '../../components/AuthToast';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'info',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      showToast('Email жана password толтуруңуз.');
      return;
    }

    showToast('Login successful.', 'success');

    setTimeout(() => {
      navigate('/home');
    }, 700);
  };

  const handleForgotPassword = () => {
    showToast('Password reset функциясы кийин кошулат.');
  };

  const handleAppleLogin = () => {
    showToast('Apple login азырынча даяр эмес.');
  };

  const handleGoogleLogin = () => {
    showToast('Google login азырынча даяр эмес.');
  };

  const handleFacebookLogin = () => {
    showToast('Facebook login азырынча даяр эмес.');
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center">
      <AuthToast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

      <div className="flex w-[390px] h-[844px] flex-col rounded-[44px] bg-[#f7f7f7] px-5 pb-6 pt-5 shadow-[0_18px_35px_rgba(0,0,0,0.25)]">
        <div className="mb-4 flex justify-center">
          <div className="h-8 w-28 rounded-full bg-black" />
        </div>

        <div className="mb-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] text-[#555] shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        <div className="mb-5 flex justify-center">
          <img
          src="/welcome.png"
           alt="Welcome"
           className="h-[180px] w-auto object-contain"
/>
        </div>

        <div className="mb-6 text-center">
          <h1 className="text-[18px] font-extrabold text-[#222]">Welcome</h1>
          <p className="mt-1 text-[14px] text-[#8a8a8a]">Login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex h-14 items-center rounded-full bg-[#ececec] px-4">
            <Mail size={18} className="mr-3 shrink-0 text-[#555]" />
            <input
              type="text"
              placeholder="Mobile or Email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-transparent text-[14px] text-[#333] outline-none placeholder:text-[#8a8a8a]"
            />
          </div>

          <div className="flex h-14 items-center rounded-full bg-[#ececec] px-4">
            <Shield size={18} className="mr-3 shrink-0 text-[#555]" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={form.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full bg-transparent text-[14px] text-[#333] outline-none placeholder:text-[#8a8a8a]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="ml-2 text-[#555]"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          <div className="flex items-center justify-between px-1">
            <button
              type="button"
              onClick={() => handleChange('remember', !form.remember)}
              className="flex items-center gap-2 text-[11px] text-[#2b7cff]"
            >
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  form.remember ? 'bg-[#2b7cff]' : 'bg-[#d9d9d9]'
                }`}
              >
                {form.remember && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </span>
              Remember me
            </button>

            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-[11px] text-red-500"
            >
              Forgot Password?
            </button>
          </div>

          <div className="pt-3">
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={handleAppleLogin}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ececec] text-[#222] transition active:scale-95"
              >
                <FaApple size={18} />
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ececec] text-[#222] transition active:scale-95"
              >
                <FaGoogle size={18} />
              </button>

              <button
                type="button"
                onClick={handleFacebookLogin}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ececec] text-[#222] transition active:scale-95"
              >
                <FaFacebookF size={17} />
              </button>
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-b from-[#8b8b8b] via-[#4f4f4f] to-[#181818] py-4 text-[17px] font-medium text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)]"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-auto pt-5 text-center text-[14px] text-[#8a8a8a]">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="font-medium text-[#2b7cff]"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="h-1.5 w-24 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
};

export default Login;