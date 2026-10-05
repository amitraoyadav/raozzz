import React, { useState, useEffect } from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';

interface GlobalHeroProps {
  onCheckDate: () => void;
  onViewWeddings: () => void;
}

export const GlobalHero: React.FC<GlobalHeroProps> = ({
  onCheckDate,
  onViewWeddings
}) => {
  const slides = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=85',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=85'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#0D0B0A] text-white overflow-hidden">
      {/* Background Slideshow with Slow Dissolve */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Global Plannerss Luxury Wedding Background"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-40 scale-105 transition-transform duration-[7000ms]' : 'opacity-0'
            }`}
          />
        ))}
        {/* Grain overlay & Vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/70 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0B0A]/50 to-[#0D0B0A] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Tagline pill */}
        <p className="inline-block text-xs sm:text-sm font-sans tracking-[0.2em] uppercase text-[#E5D7B7] mb-6 border-b border-[#C19A4B]/40 pb-1">
          {globalPlannerssConfig.SITE_NAME} · Delhi NCR · Goa · Udaipur · Dubai
        </p>

        {/* Monumental Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-stone-100 tracking-tight leading-[1.1] mb-6">
          We Carry
          <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] via-[#F1DFAE] to-[#C19A4B]">
            Weddings.
          </span>
        </h1>

        {/* Promise */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 font-sans font-light max-w-2xl leading-relaxed mb-8 text-balance">
          {globalPlannerssConfig.HERO_PROMISE}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-8">
          <button
            onClick={onCheckDate}
            className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-[#B08D57] via-[#C19A4B] to-[#9C7B4E] text-[#171410] font-serif font-bold text-xs sm:text-sm tracking-widest uppercase shadow-2xl hover:brightness-110 active:scale-98 transition-all"
          >
            {globalPlannerssConfig.CTAS.checkDate}
          </button>

          <button
            onClick={onViewWeddings}
            className="w-full sm:w-auto px-7 py-4 rounded bg-stone-900/80 hover:bg-stone-800 text-white border border-[#C19A4B]/40 text-xs sm:text-sm font-sans tracking-wider uppercase transition-all backdrop-blur-sm"
          >
            {globalPlannerssConfig.CTAS.viewWeddings}
          </button>
        </div>

        {/* Scarcity Pulse */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-stone-800 backdrop-blur-md text-xs text-stone-300">
          <span className="w-2 h-2 rounded-full bg-[#C19A4B] animate-ping shrink-0" />
          <span>
            We take on <strong>{globalPlannerssConfig.ANNUAL_CAP} weddings a year</strong> —{' '}
            <button
              onClick={onCheckDate}
              className="text-[#C19A4B] font-semibold underline underline-offset-2 hover:text-[#E5D7B7]"
            >
              {globalPlannerssConfig.REMAINING_DATES_COUNT} dates remaining in {globalPlannerssConfig.SEASON_YEARS}
            </button>
            .
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase font-sans tracking-[0.25em] text-stone-500 animate-bounce">
        Scroll ↓
      </div>
    </section>
  );
};
