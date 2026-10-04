import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Award,
  Heart,
  ArrowRight,
  MapPin,
  Calculator,
} from 'lucide-react';
import { DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasHeroProps {
  onOpenInquiry: () => void;
  onOpenCalculator: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const DevdasHero: React.FC<DevdasHeroProps> = ({
  onOpenInquiry,
  onOpenCalculator,
  onNavigateToSection,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const SLIDES = [
    {
      id: 'slide-1',
      badge: 'Royal Heritage Rajasthan',
      title: 'Timeless Palace Weddings in Udaipur & Jaipur',
      highlight: 'Lakeside Marble Vows, Fort Courtyards & Regal Mewar Hospitality',
      desc: 'Orchestrating bespoke royal destination weddings across Udaipur lake palaces, Jaipur fortified estates, and Jodhpur heritage havelis with transparent planning fees.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1800&q=80',
      actionText: 'Explore Royal Palaces',
      targetSection: 'destinations',
    },
    {
      id: 'slide-2',
      badge: 'Barefoot Luxury & Ocean Breezes',
      title: 'Sun-Kissed Coastal Beach Weddings in Goa',
      highlight: 'Golden Hour Sands, Private 5-Star Oceanfront Lawns & Sundowners',
      desc: 'From secluded South Goa lagoons to high-energy North Goa beach clubs, we handle Coastal Regulation Zone permits, tropical mandap decor, and 24/7 guest concierge.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=80',
      actionText: 'View Beachfront Venues',
      targetSection: 'destinations',
    },
    {
      id: 'slide-3',
      badge: 'Forest Elegance 5 Hours from Delhi',
      title: 'Wilderness & Riverside Vows in Jim Corbett',
      highlight: 'Kosi Riverbank Mandaps, Forest Lodges & Mountain Bonfires',
      desc: 'Escape the city rush for pristine Himalayan foothills. Intimate wilderness weddings with open-jeep guest safaris, local organic dining, and mountain starlit receptions.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80',
      actionText: 'Discover Wilderness Lodges',
      targetSection: 'destinations',
    },
    {
      id: 'slide-4',
      badge: 'Tropical International Escapes',
      title: 'Luxury Indian Weddings in Thailand & Bali',
      highlight: 'Exotic Oceanfront Resorts, Authentic Indian Chefs & VIP Transit',
      desc: 'Global celebrations with complete legal assistance, Bangkok/Phuket airport transfers, and certified Indian master chefs flown in for authentic cross-cultural feasts.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80',
      actionText: 'Plan International Wedding',
      targetSection: 'destinations',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [SLIDES.length]);

  const slide = SLIDES[activeSlide];

  return (
    <section id="hero" className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none">
      {/* Background Image Carousel with Fade Animation */}
      {SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-7000`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered dark & crimson gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#7A1C30]/40 via-transparent to-black/30 pointer-events-none" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20 sm:py-24 space-y-6 sm:space-y-8 animate-in fade-in duration-700">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold shadow-xl">
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>{slide.badge}</span>
          <span className="text-amber-500">•</span>
          <span className="text-white/90">280+ Weddings Executed</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.15]">
            {slide.title}
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-amber-200/90 font-medium max-w-3xl mx-auto leading-relaxed">
            {slide.highlight}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-base text-slate-200/90 max-w-2xl mx-auto leading-relaxed font-sans">
          {slide.desc}
        </p>

        {/* Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onOpenInquiry}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-amber-500/25 cursor-pointer flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Free Consultation</span>
          </button>

          <button
            onClick={onOpenCalculator}
            className="px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
          >
            <Calculator className="w-4 h-4 text-amber-300" />
            <span>Calculate Wedding Cost</span>
          </button>

          <button
            onClick={() => onNavigateToSection(slide.targetSection)}
            className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#7A1C30]/80 hover:bg-[#7A1C30] text-white border border-amber-500/30 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>{slide.actionText}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-6 sm:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-[11px]">
              <div className="font-bold text-white">Transparent Fee Model</div>
              <div className="text-slate-400">Zero vendor commission markup</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-[11px]">
              <div className="font-bold text-white">280+ Bespoke Events</div>
              <div className="text-slate-400">Palace, beach &amp; forest venues</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-rose-400 shrink-0" />
            <div className="text-[11px]">
              <div className="font-bold text-white">110+ NRI Celebrations</div>
              <div className="text-slate-400">UK, USA, UAE &amp; Australia</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-[11px]">
              <div className="font-bold text-white">Free Initial Session</div>
              <div className="text-slate-400">1-on-1 budget &amp; recce review</div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Slide Controls */}
      <button
        onClick={() => setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % SLIDES.length)}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`transition-all cursor-pointer rounded-full ${
              activeSlide === idx
                ? 'w-8 h-2 bg-amber-400 shadow-md'
                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
