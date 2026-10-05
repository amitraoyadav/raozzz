import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, Pause, ChevronLeft, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';
import { site74Config } from '../../config/site74Config';

interface Site74HeroProps {
  onStartPlanning: () => void;
  onExploreDestinations: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85',
    eyebrow: 'ROYAL PALACES OF RAJASTHAN',
    title: 'Where Imperial Grandeur Crowns Your Vows',
    caption: 'Lake Pichola, Udaipur · The Grandeur Water Palace Terrace'
  },
  {
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1920&q=85',
    eyebrow: 'COASTAL BEACH SANCTUARIES',
    title: 'Sunset Mandaps Whispering to the Arabian Sea',
    caption: 'Cavelossim Beach, Goa · Private Palm Oceanfront Lawns'
  },
  {
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=85',
    eyebrow: 'FORTRESS SANGEET NIGHTS',
    title: 'Thousands of Flickering Diyas & Royal Cavalry Arrivals',
    caption: 'Kukas Fortress, Jaipur · Mughal Garden Amphitheatre'
  }
];

export const Site74Hero: React.FC<Site74HeroProps> = ({
  onStartPlanning,
  onExploreDestinations
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-[#141210] text-white overflow-hidden">
      {/* Background Slideshow */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
          {/* Measured Cinematic Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#11100F] via-black/40 to-black/60" />
        </div>
      ))}

      {/* Hero Editorial Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-6 py-20 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-amber-300 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{slide.eyebrow}</span>
        </div>

        <h1 className="font-serif font-medium text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white max-w-4xl mx-auto text-balance">
          Where Everlasting Vows Meet <span className="italic text-amber-300">Timeless Grandeur</span>
        </h1>

        <p className="text-base sm:text-lg text-stone-200 font-light max-w-2xl mx-auto leading-relaxed text-balance">
          Curating India’s most breathtaking royal palaces, sunset coastal oceanfront lawns, and iconic metropolitan ballrooms with seamless turnkey coordination.
        </p>

        {/* Dual Actions */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartPlanning}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4B26F] via-[#C5A059] to-[#A37E36] hover:from-[#E2C78A] hover:to-[#B59148] text-[#141210] font-bold text-xs sm:text-sm uppercase tracking-widest shadow-2xl transition-all hover:scale-102 active:scale-98 cursor-pointer"
          >
            <span>Start Planning Your Wedding</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreDestinations}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/30 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all hover:border-amber-300 cursor-pointer"
          >
            <span>Explore Destinations</span>
          </button>
        </div>

        {/* Slide Location Caption */}
        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-stone-300 font-mono">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{slide.caption}</span>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 left-6 right-6 z-20 hidden sm:flex items-center justify-between text-xs text-stone-400 font-mono">
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all rounded-full ${
                idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="p-1.5 rounded-full bg-black/40 border border-white/20 hover:text-white"
            title={isAutoPlay ? 'Pause auto-play' : 'Resume auto-play'}
          >
            {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="p-1.5 rounded-full bg-black/40 border border-white/20 hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length)}
            className="p-1.5 rounded-full bg-black/40 border border-white/20 hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Floating Stats Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#11100F]/90 backdrop-blur-md border-t border-stone-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-4 divide-x divide-stone-800 text-center">
          {site74Config.STATS.map((stat, idx) => (
            <div key={idx} className="px-4">
              <span className="font-serif text-xl lg:text-2xl font-bold text-amber-300 block">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] lg:text-[11px] text-stone-400 uppercase tracking-wider block mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site74Hero;
