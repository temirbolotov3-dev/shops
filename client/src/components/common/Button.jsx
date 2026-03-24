export const Button = ({ children, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`w-full py-4 bg-gradient-to-b from-[#4B4B4B] to-[#000000] text-white font-bold rounded-[20px] active:scale-95 transition-all shadow-lg ${className}`}
  >
    {children}
  </button>
);