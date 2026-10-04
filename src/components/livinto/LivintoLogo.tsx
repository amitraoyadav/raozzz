import React from 'react';

interface LivintoLogoProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubline?: boolean;
}

export const LivintoLogo: React.FC<LivintoLogoProps> = ({
  theme = 'dark',
  size = 'md',
  showSubline = true,
}) => {
  const isLight = theme === 'light';

  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const brandTextSize = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const sublineTextSize = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] sm:text-[11px] tracking-[0.3em]',
    lg: 'text-xs sm:text-sm tracking-[0.35em]',
  }[size];

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer">
      {/* Brand Icon: Architectural Interlocking Room Matrix */}
      <div
        className={`relative ${iconDimensions} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm overflow-hidden ${
          isLight
            ? 'bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-amber-500/20'
            : 'bg-gradient-to-br from-[#814882] via-[#6d396e] to-[#542855] text-amber-300 shadow-purple-950/30'
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5 transform group-hover:rotate-3 transition-transform duration-300"
        >
          {/* Architectural Living Isometric Plan Vector */}
          <path
            d="M20 5L34 13V27L20 35L6 27V13L20 5Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M20 5V35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            className="opacity-70"
          />
          <path
            d="M6 13L20 21L34 13"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M20 21V35"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          {/* Interior Hearth Point */}
          <circle cx="20" cy="21" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif tracking-widest font-extrabold uppercase ${brandTextSize} ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
          >
            LIVINTO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block mb-1" />
        </div>
        {showSubline && (
          <span
            className={`font-sans font-semibold uppercase transition-colors ${sublineTextSize} ${
              isLight ? 'text-amber-300/90' : 'text-[#814882]'
            }`}
          >
            HOME INTERIORS
          </span>
        )}
      </div>
    </div>
  );
};
