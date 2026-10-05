import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { CLUB_HERO_SLIDES, ClubHeroSlide } from '../../data/site78ClubData';

interface Site78ClubHeroSliderProps {
  onNavigate: (view: string, facilitySlug?: string) => void;
}

export const Site78ClubHeroSlider: React.FC<Site78ClubHeroSliderProps> = ({ onNavigate }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide every 6.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % CLUB_HERO_SLIDES.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlideIndex(prev => (prev + 1) % CLUB_HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex(prev => (prev - 1 + CLUB_HERO_SLIDES.length) % CLUB_HERO_SLIDES.length);
  };

  const currentSlide = CLUB_HERO_SLIDES[currentSlideIndex];

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-[520px] sm:h-[620px] lg:h-[680px] bg-[#0A1926] text-white overflow-hidden group select-none font-['Jost',sans-serif]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      {CLUB_HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlideIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Cinematic layered gradients matching premium club atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1926] via-transparent to-black/50" />
          </div>
        );
      })}

      {/* Slide Text Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-16 sm:pt-20">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A869]/40 text-[#C5A869] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C5A869]" />
            <span>{currentSlide.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight drop-shadow-md">
            {currentSlide.title}
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-sm sm:text-lg text-stone-200 font-light leading-relaxed max-w-2xl drop-shadow-sm">
            {currentSlide.subtitle}
          </p>

          {/* Action CTA Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate(currentSlide.targetView, currentSlide.targetFacilitySlug)}
              className="px-7 py-3 rounded-md bg-[#C5A869] hover:bg-[#d4bc82] text-[#0F2537] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2"
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('facilities')}
              className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-all backdrop-blur-xs cursor-pointer"
            >
              All Facilities
            </button>
          </div>
        </div>
      </div>

      {/* Prev / Next Slider Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#C5A869] hover:text-[#0F2537] text-white border border-white/20 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer backdrop-blur-xs"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#C5A869] hover:text-[#0F2537] text-white border border-white/20 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer backdrop-blur-xs"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Navigation Dots (Panchshila Slider pagination style) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {CLUB_HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlideIndex
                ? 'w-8 h-2 bg-[#C5A869]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
