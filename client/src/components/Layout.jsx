import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center">
      <div className="w-[390px] h-[844px] flex flex-col rounded-[44px] bg-[#f7f7f7] px-5 pt-5 pb-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {children}
      </div>
    </div>
  );
};

export default Layout;