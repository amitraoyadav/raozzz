import React from 'react';

interface MedicarePlusLogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export const MedicarePlusLogo: React.FC<MedicarePlusLogoProps> = ({
  size = 'md',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

  const iconSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-2.5 select-none font-['Satoshi',sans-serif]">
      {/* Hospital Cross / Medical Shield Mark */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#0C4A60] via-[#007A87] to-[#00A896] text-white flex items-center justify-center shadow-sm relative overflow-hidden shrink-0 border border-teal-400/20`}
      >
        <div className="absolute inset-0 bg-radial from-white/20 to-transparent pointer-events-none" />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 drop-shadow-xs"
        >
          {/* Medical Cross with Subtle Pulse Heart Rhythm */}
          <path d="M10 3h4v5h5v4h-5v7h-4v-7H5V8h5V3z" />
          <path
            d="M3 13h3l1.5-3 2 6 2-4 1.5 2h3"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-tight ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-[#0C4A60]'
          }`}
        >
          Medicare<span className="text-[#00A896]">Plus</span>
        </span>
        <span
          className={`text-[9px] uppercase tracking-[0.2em] font-bold mt-0.5 ${
            isLight ? 'text-teal-200' : 'text-slate-500'
          }`}
        >
          HOSPITAL · MULTISPECIALITY
        </span>
      </div>
    </div>
  );
};
