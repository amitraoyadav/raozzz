import React from 'react';

interface SkinScieneLogoProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const SkinScieneLogo: React.FC<SkinScieneLogoProps> = ({
  theme = 'dark',
  size = 'md',
  showTagline = true,
}) => {
  const isLight = theme === 'light';

  // Sizing definitions
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const brandTextSize = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const subTextSize = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] sm:text-[11px] tracking-[0.3em]',
    lg: 'text-xs sm:text-sm tracking-[0.35em]',
  }[size];

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer">
      {/* Brand Icon: Botanical Cellular Droplet Emblem */}
      <div
        className={`relative ${iconDimensions} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm overflow-hidden bg-gradient-to-br ${
          isLight
            ? 'from-emerald-400 via-teal-500 to-emerald-600 text-slate-950 shadow-emerald-500/20'
            : 'from-emerald-800 via-teal-900 to-slate-900 border border-emerald-700/60 shadow-emerald-950/40 text-emerald-300'
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5 transform group-hover:rotate-6 transition-transform duration-300"
        >
          {/* Aesthetic Lotus Droplet Vector */}
          <path
            d="M18 3C18 3 7 13.5 7 21C7 27.075 11.925 32 18 32C24.075 32 29 27.075 29 21C29 13.5 18 3 18 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />
          <path
            d="M18 8C18 8 11.5 16 11.5 21.5C11.5 25.09 14.41 28 18 28C21.59 28 24.5 25.09 24.5 21.5C24.5 16 18 8 18 8Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="18" cy="19" r="2.8" fill="currentColor" />
          <path
            d="M13 22C14.5 24 16.2 24.8 18 24.8C19.8 24.8 21.5 24 23 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif tracking-wider font-extrabold uppercase ${brandTextSize} ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
          >
            SKINSCIENE
          </span>
        </div>
        <span
          className={`font-sans font-bold uppercase transition-colors ${subTextSize} ${
            isLight ? 'text-emerald-300' : 'text-emerald-700'
          }`}
        >
          NATURALS
        </span>
        {showTagline && size === 'lg' && (
          <span
            className={`text-[10px] tracking-wide font-medium mt-1 ${
              isLight ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Clinical Skin, Hair & Aesthetics
          </span>
        )}
      </div>
    </div>
  );
};
