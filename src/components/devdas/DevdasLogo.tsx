import React from 'react';

interface DevdasLogoProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubline?: boolean;
}

export const DevdasLogo: React.FC<DevdasLogoProps> = ({
  theme = 'dark',
  size = 'md',
  showSubline = true,
}) => {
  const isLight = theme === 'light';

  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  }[size];

  const brandTextSize = {
    sm: 'text-base',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const sublineTextSize = {
    sm: 'text-[8px] tracking-[0.22em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.28em]',
    lg: 'text-[11px] sm:text-xs tracking-[0.32em]',
  }[size];

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer">
      {/* Royal Floral Arch / Crown Insignia */}
      <div
        className={`relative ${iconDimensions} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm overflow-hidden ${
          isLight
            ? 'bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-slate-950 shadow-amber-500/20'
            : 'bg-gradient-to-br from-[#7A1C30] via-[#651526] to-[#4F0F1D] text-amber-300 border border-amber-500/30 shadow-red-950/40'
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4 transform group-hover:rotate-3 transition-transform duration-300"
        >
          {/* Royal Mughal Arch & Lotus Petal Motif */}
          <path
            d="M20 6C13 11 9 17 9 25C9 30.5 13.5 35 20 35C26.5 35 31 30.5 31 25C31 17 27 11 20 6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12C16 16 14 20 14 25C14 28 16.5 31 20 31C23.5 31 26 28 26 25C26 20 24 16 20 12Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          {/* Crown Peak */}
          <circle cx="20" cy="5" r="2" fill="currentColor" />
          <path
            d="M13 25H27"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div
          className={`font-serif font-extrabold tracking-wider leading-none ${brandTextSize} ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
          <span>DEVDAS </span>
          <span className="text-[#C5A059] font-normal italic">WEDDING</span>
        </div>

        {showSubline && (
          <span
            className={`font-sans font-bold uppercase mt-1 ${sublineTextSize} ${
              isLight ? 'text-amber-200/90' : 'text-[#7A1C30]'
            }`}
          >
            DESTINATION WEDDING PLANNERS
          </span>
        )}
      </div>
    </div>
  );
};
