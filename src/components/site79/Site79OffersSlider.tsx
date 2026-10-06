import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { WHAT_WE_OFFER_SLIDES } from '../../data/site79Data';

export const Site79OffersSlider: React.FC = () => {
  const [scrollIdx, setScrollIdx] = useState(0);

  const nextSlide = () => {
    setScrollIdx(prev => (prev + 1) % WHAT_WE_OFFER_SLIDES.length);
  };

  const prevSlide = () => {
    setScrollIdx(prev => (prev - 1 + WHAT_WE_OFFER_SLIDES.length) % WHAT_WE_OFFER_SLIDES.length);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 text-center w-full mx-auto bg-[#050505] text-white border-t border-white/5 relative overflow-hidden">
      {/* Header */}
      <div className="mb-12 sm:mb-16 w-full">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Cinzel',serif] flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            WHAT WE
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#e8c676]">
            OFFER
          </span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto">
          From personalized hospitality to priority fast-track entries, discover the signature hallmarks that define an evening at Elysium.
        </p>
      </div>

      {/* Cards Slider Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation arrows */}
        <div className="flex items-center justify-end gap-2 mb-4 pr-2">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-2.5 rounded-full border border-white/20 bg-white/5 hover:border-[#DFB759] hover:text-[#DFB759] text-white transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 sm:p-2.5 rounded-full border border-white/20 bg-white/5 hover:border-[#DFB759] hover:text-[#DFB759] text-white transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Card Grid with responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_OFFER_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className="relative rounded-3xl overflow-hidden group shadow-xl border border-white/10 hover:border-[#DFB759]/50 transition-all duration-500 bg-zinc-950 aspect-[3/4] flex flex-col justify-end text-left p-6"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                loading="lazy"
              />

              {/* Scrim Overlay matching reference */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.92) 100%)'
                }}
              />

              {/* Text content */}
              <div className="relative z-10">
                <span className="w-8 h-0.5 bg-[#DFB759] block mb-2" />
                <h3
                  className="text-xl sm:text-2xl font-bold text-white leading-tight font-['Cinzel',serif]"
                  style={{ textShadow: '0 8px 25px rgba(0,0,0,0.8)' }}
                >
                  {slide.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-300 italic leading-relaxed font-['Inter']">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
