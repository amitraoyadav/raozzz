import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

export const Site79Awards: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-28 overflow-hidden flex flex-col items-center justify-center bg-[#050505] text-white border-t border-white/5">
      {/* Huge Background Watermark matching Priveé */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <h2 className="text-[14vw] sm:text-[11vw] font-black uppercase tracking-[0.15em] text-white/[0.02] select-none whitespace-nowrap font-['Cinzel',serif]">
          RECOGNITION
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#DFB759]" />
            <span className="text-[#DFB759] text-xs sm:text-sm uppercase tracking-[0.4em] font-semibold">
              Hall of Fame
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#DFB759]" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-widest uppercase font-['Cinzel',serif]">
            Our{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">
              Awards
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto">
            Celebrated by national lifestyle publications and hospitality juries for setting the benchmark in luxury nightclub experiences.
          </p>
        </div>

        {/* Central Glow Line */}
        <div className="hidden md:block absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#DFB759]/30 to-transparent blur-[1px] pointer-events-none z-0" />
        <div className="hidden md:block absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[120px] bg-[#DFB759]/5 blur-[70px] pointer-events-none z-0" />

        {/* Two Spinning 3D Gold Medallions */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28 lg:gap-36 relative z-10 w-full">
          {/* MEDALLION 1: Times Nightlife Award */}
          <div className="flex flex-col items-center relative group w-full md:w-auto">
            <div className="relative flex items-center justify-center w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 cursor-pointer">
              {/* Spinning Concentric Gold Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#a37912] via-[#F4D774] to-[#bd9526] shadow-[0_0_50px_rgba(223,183,89,0.25)] group-hover:shadow-[0_0_80px_rgba(223,183,89,0.55)] animate-[spin_18s_linear_infinite] transition-all duration-700">
                <div className="absolute inset-0 rounded-full border border-black/15 m-[8%]" />
                <div className="absolute inset-0 rounded-full border border-black/15 m-[16%]" />
                <div className="absolute inset-0 rounded-full border border-black/15 m-[24%]" />
                <div className="absolute inset-0 rounded-full border border-black/15 m-[32%]" />
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.4)_45deg,transparent_90deg,transparent_180deg,rgba(255,255,255,0.4)_225deg,transparent_270deg)] mix-blend-overlay" />
              </div>

              {/* Glass Frosted Outer Ring */}
              <div className="absolute -inset-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-[2px] shadow-2xl pointer-events-none group-hover:border-[#DFB759]/40 transition-colors duration-500" />

              {/* Inner Medallion Center Emblem */}
              <div className="absolute inset-[6%] rounded-full bg-[#0d0a06] border-2 border-[#DFB759] flex flex-col items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.08] z-10 shadow-2xl p-6">
                <Trophy className="w-12 h-12 text-[#DFB759] mb-2 drop-shadow-[0_0_15px_rgba(223,183,89,0.7)]" />
                <span className="font-['Cinzel',serif] text-base sm:text-lg font-black tracking-widest text-white uppercase text-center">
                  Times
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#DFB759] font-bold uppercase text-center mt-0.5">
                  Nightlife Award
                </span>
                <div className="flex gap-1 mt-2 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Subtitle Label */}
            <div className="mt-8 transition-transform duration-500 group-hover:-translate-y-1 text-center relative z-20">
              <span className="inline-block text-[#DFB759] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-2 py-1 px-3 border border-[#DFB759]/30 rounded-full bg-[#DFB759]/5 backdrop-blur-md">
                Excellence
              </span>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-widest uppercase font-['Cinzel',serif]">
                Times Nightlife
              </h3>
            </div>
          </div>

          {/* MEDALLION 2: Industry Recognition */}
          <div className="flex flex-col items-center relative group w-full md:w-auto">
            <div className="relative flex items-center justify-center w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 cursor-pointer">
              {/* Spinning Concentric Gold Rings (Reverse) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-[#a37912] via-[#F4D774] to-[#bd9526] shadow-[0_0_50px_rgba(223,183,89,0.25)] group-hover:shadow-[0_0_80px_rgba(223,183,89,0.55)] animate-[spin_18s_linear_infinite_reverse] transition-all duration-700">
                <div className="absolute inset-0 rounded-full border border-black/15 m-[8%]" />
                <div className="absolute inset-0 rounded-full border border-black/15 m-[16%]" />
                <div className="absolute inset-0 rounded-full border border-black/15 m-[24%]" />
                <div className="absolute inset-0 rounded-full border border-black/15 m-[32%]" />
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.4)_45deg,transparent_90deg,transparent_180deg,rgba(255,255,255,0.4)_225deg,transparent_270deg)] mix-blend-overlay" />
              </div>

              {/* Glass Frosted Outer Ring */}
              <div className="absolute -inset-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-[2px] shadow-2xl pointer-events-none group-hover:border-[#DFB759]/40 transition-colors duration-500" />

              {/* Inner Medallion Center Emblem */}
              <div className="absolute inset-[6%] rounded-full bg-[#0d0a06] border-2 border-[#DFB759] flex flex-col items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.08] z-10 shadow-2xl p-6">
                <Award className="w-12 h-12 text-[#DFB759] mb-2 drop-shadow-[0_0_15px_rgba(223,183,89,0.7)]" />
                <span className="font-['Cinzel',serif] text-base sm:text-lg font-black tracking-widest text-white uppercase text-center">
                  INCA Best
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#DFB759] font-bold uppercase text-center mt-0.5">
                  Nightclub & Lounge
                </span>
                <div className="flex gap-1 mt-2 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Subtitle Label */}
            <div className="mt-8 transition-transform duration-500 group-hover:-translate-y-1 text-center relative z-20">
              <span className="inline-block text-[#DFB759] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-2 py-1 px-3 border border-[#DFB759]/30 rounded-full bg-[#DFB759]/5 backdrop-blur-md">
                Industry
              </span>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-widest uppercase font-['Cinzel',serif]">
                Recognition
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
