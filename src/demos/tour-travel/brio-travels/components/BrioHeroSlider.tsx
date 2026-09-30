import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, MapPin, Calendar, Sparkles, Compass } from 'lucide-react';

interface BrioHeroSliderProps {
  onExploreTours: () => void;
  onOurServices: () => void;
  onSearch: (query: string) => void;
}

const SLIDES = [
  {
    id: 1,
    headline: 'Natural Wonder of the World',
    subtext: 'Discover pristine Himalayan peaks, tranquil Kerala backwaters, and golden royal palaces crafted with authentic experiences.',
    badge: '★ Best Travel Agency in Delhi NCR',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85'
  },
  {
    id: 2,
    headline: "Let's Make Your Best Trip With Us",
    subtext: 'Handcrafted holiday packages with personally verified 4-star hotels, experienced chauffeurs, and 24x7 trip support.',
    badge: '✓ 4.9k Happy Travellers & Families',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85'
  },
  {
    id: 3,
    headline: 'Explore Beauty of the Whole World',
    subtext: 'Seamless international getaways from Delhi to Dubai, Bali, Europe, Thailand, Kazakhstan & beyond with rapid visa assistance.',
    badge: '✈ International & Domestic Specialists',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85'
  }
];

export const BrioHeroSlider: React.FC<BrioHeroSliderProps> = ({
  onExploreTours,
  onOurServices,
  onSearch
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % SLIDES.length);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    } else {
      onExploreTours();
    }
  };

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image Carousel with crossfade */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={s.image}
            alt={s.headline}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-slate-950/75" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md animate-fadeIn">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{slide.badge}</span>
        </div>

        {/* Dynamic Slide Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-['Poppins'] tracking-tight leading-tight text-white mb-5 transition-all duration-500">
          {slide.headline}
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-slate-200 leading-relaxed mb-8 font-['Inter']">
          {slide.subtext}
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            onClick={onExploreTours}
            className="min-h-[48px] px-6 sm:px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-teal-700/30 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Tours</span>
          </button>

          <button
            onClick={onOurServices}
            className="min-h-[48px] px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-xl font-bold text-sm sm:text-base active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Our Services</span>
          </button>
        </div>

        {/* Integrated Floating Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-2 border border-slate-100"
        >
          <div className="flex-1 w-full flex items-center gap-2 px-3 text-slate-600">
            <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Where do you want to travel? (e.g. Kashmir, Dubai, Agra, Bali)"
              className="w-full py-2.5 text-xs sm:text-sm text-slate-800 bg-transparent outline-none placeholder:text-slate-400 font-medium"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0 shadow-md shadow-orange-500/20"
          >
            <Search className="w-4 h-4" />
            <span>Search Packages</span>
          </button>
        </form>
      </div>

      {/* Slide Controls (Prev / Next) */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-sm items-center justify-center transition-all cursor-pointer z-20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-sm items-center justify-center transition-all cursor-pointer z-20"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              i === currentSlide ? 'w-8 bg-teal-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
