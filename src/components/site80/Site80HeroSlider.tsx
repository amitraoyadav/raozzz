import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { HERO_SLIDES, ClubHeroSlide } from '../../data/site80Data';

interface Site80HeroSliderProps {
  onOpenBooking: () => void;
  onExploreEvents: () => void;
}

export const Site80HeroSlider: React.FC<Site80HeroSliderProps> = ({
  onOpenBooking,
  onExploreEvents
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Autoplay timer with 5000ms pause-on-hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[92vh] bg-black overflow-hidden pt-16 sm:pt-20 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover brightness-[0.45] contrast-110 scale-105 transition-transform duration-[6000ms]"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)] pointer-events-none" />
        </div>
      ))}

      {/* Slide Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#FFD700]/50 text-[#FFD700] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-md mb-4 sm:mb-6 animate-fadeIn">
          <Sparkles className="w-3 h-3 text-[#FFD700]" />
          <span>{currentSlide.tagline}</span>
        </div>

        <h1 className="font-['Cinzel',serif] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.14em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] leading-tight max-w-4xl">
          {currentSlide.title}
        </h1>

        <p className="max-w-xl text-xs sm:text-sm md:text-base text-gray-300 font-light mt-4 sm:mt-6 leading-relaxed font-['Alegreya_Sans',sans-serif] px-4">
          {currentSlide.subtitle}
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <button
            onClick={onOpenBooking}
            className="px-6 sm:px-8 py-3.5 rounded-full bg-[#FFD700] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 hover:scale-105 transition-all cursor-pointer shadow-[0_0_30px_rgba(255,215,0,0.6)]"
          >
            Reserve a Table
          </button>

          <button
            onClick={onExploreEvents}
            className="px-6 sm:px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Upcoming Events</span>
            <ArrowRight className="w-4 h-4 text-[#FFD700]" />
          </button>
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/50 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700] backdrop-blur-md transition-all cursor-pointer shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/50 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700] backdrop-blur-md transition-all cursor-pointer shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pagination Bullets */}
      <div className="absolute bottom-6 inset-x-0 z-30 flex items-center justify-center gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === currentIndex
                ? 'w-8 h-2 bg-[#FFD700]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
