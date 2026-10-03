import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Stethoscope,
  HeartPulse,
  Award,
  Clock,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

interface MedicarePlusHeroProps {
  onOpenAppointmentModal: () => void;
  onExploreDoctors: () => void;
  onExploreSpecialities: () => void;
}

export const MedicarePlusHero: React.FC<MedicarePlusHeroProps> = ({
  onOpenAppointmentModal,
  onExploreDoctors,
  onExploreSpecialities,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Advanced Healthcare. Compassionate Care.',
      subtitle:
        'Delivering clinical excellence through robotic surgery, Level-3 tertiary critical care, and precision medicine.',
      kicker: 'Tertiary Care Multispeciality Hospital',
      badge: '24x7 Emergency & Trauma Bay',
      imageUrl:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
      accentColor: '#00A896',
    },
    {
      title: 'Expert Specialists Under One Roof.',
      subtitle:
        'Over 40 specialized departments staffed by internationally accredited surgeons, clinicians, and researchers.',
      kicker: '400+ Senior Medical Faculty',
      badge: 'Sub-Millimetre Robotic Precision',
      imageUrl:
        'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80',
      accentColor: '#0C4A60',
    },
    {
      title: 'Comprehensive Multispeciality Care.',
      subtitle:
        'From primary angioplasties in under 40 minutes to living donor liver and kidney transplantation suites.',
      kicker: 'World-Class Clinical Benchmarks',
      badge: '3.0T Silent MRI & 256-Slice CT',
      imageUrl:
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80',
      accentColor: '#0284C7',
    },
    {
      title: 'Your Health. Our Lifelong Priority.',
      subtitle:
        'Compassionate inpatient comfort, dedicated patient care buddies, and transparent cashless insurance processing.',
      kicker: 'Holistic Patient Recovery',
      badge: '100% Cashless TPA Network',
      imageUrl:
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80',
      accentColor: '#0D9488',
    },
  ];

  // Auto advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full overflow-hidden bg-[#051E28] text-white font-['Satoshi',sans-serif]">
      {/* Background Image Carousel with Smooth Transitions */}
      <div className="relative h-[480px] sm:h-[540px] lg:h-[620px] w-full">
        {slides.map((s, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={s.imageUrl}
              alt={s.title}
              className="w-full h-full object-cover object-center brightness-60 contrast-105"
            />
            {/* Elegant Healthcare Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#03151D]/90 via-[#03151D]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03151D] via-transparent to-black/30" />
          </div>
        ))}

        {/* Foreground Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-400/30 backdrop-blur-md">
                {slide.kicker}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-200 border border-white/20 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>{slide.badge}</span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-md text-white">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow-sm">
              {slide.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAppointmentModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00A896] to-[#028090] hover:from-[#028090] hover:to-[#00A896] text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-950/40 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>

              <button
                onClick={onExploreDoctors}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-teal-300" />
                <span>Find a Doctor</span>
              </button>

              <a
                href={`tel:${MEDICARE_CONFIG.phoneCasualty}`}
                className="hidden md:inline-flex items-center gap-2 text-xs font-bold text-rose-300 hover:text-white px-3 py-2"
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                <span>Casualty: {MEDICARE_CONFIG.phoneCasualty}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white backdrop-blur-xs transition-all border border-white/20 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white backdrop-blur-xs transition-all border border-white/20 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all rounded-full cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 bg-[#00A896]'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
