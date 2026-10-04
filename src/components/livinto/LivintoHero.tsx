import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Clock,
  Award,
  ArrowRight,
  Building,
} from 'lucide-react';
import { LIVINTO_CONFIG } from '../../data/livintoInteriorsData';

interface LivintoHeroProps {
  onOpenConsultation: () => void;
  onOpenEstimate: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const LivintoHero: React.FC<LivintoHeroProps> = ({
  onOpenConsultation,
  onOpenEstimate,
  onNavigateToSection,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const SLIDES = [
    {
      id: 'slide-1',
      badge: '22+ Years of Design Excellence',
      title: 'Custom-Made Contemporary Home Interiors',
      highlight: 'Turnkey Design & Precision Factory Execution',
      desc: '100% boiling-waterproof marine plywood carcasses, German soft-close fittings, and dedicated project managers across 15+ metropolitan cities.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80',
      actionText: 'Explore Customized Interiors',
      targetSection: 'what-we-do',
    },
    {
      id: 'slide-2',
      badge: 'Guaranteed On-Time Handover',
      title: 'Project Completion in 40 Working Days',
      highlight: 'Zero Dust, Zero Delay Modular Assembly',
      desc: 'Manufactured with high-speed German CNC precision at our 350,000 sq ft facility, ensuring millimeter fit and zero-stress on-site installation.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=80',
      actionText: 'View 40-Day Process',
      targetSection: 'process',
    },
    {
      id: 'slide-3',
      badge: 'Uncompromising Quality Standard',
      title: '10 Years Warranty & Lifelong Service Support',
      highlight: 'Authentic Blum & Hafele German Hardware',
      desc: 'Backed by 16,000+ satisfied homeowners. Transparent pricing, fixed quotations, and lifelong service assistance for total peace of mind.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=80',
      actionText: 'Browse Package Offers',
      targetSection: 'offers',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [SLIDES.length]);

  const current = SLIDES[activeSlide];

  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden min-h-[520px] sm:min-h-[640px] flex items-center">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
            } transform transition-transform duration-7000`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#814882]/40 border border-purple-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{current.badge}</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-[1.15] text-white">
              {current.title}
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-white">
              {current.highlight}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
            {current.desc}
          </p>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#814882] via-[#945595] to-[#814882] hover:from-[#6d396e] hover:to-[#542855] text-white font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-purple-500/25 transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Free Consultation</span>
            </button>

            <button
              onClick={onOpenEstimate}
              className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 hover:text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-amber-400/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get 1-Min Estimate</span>
            </button>

            <button
              onClick={() => onNavigateToSection(current.targetSection)}
              className="px-4 py-3.5 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{current.actionText}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Carousel Indicators & Counter */}
          <div className="flex items-center gap-3 pt-6">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeSlide === i
                    ? 'w-8 bg-amber-400'
                    : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <span className="text-xs text-slate-400 font-mono ml-2">
              0{activeSlide + 1} / 0{SLIDES.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
