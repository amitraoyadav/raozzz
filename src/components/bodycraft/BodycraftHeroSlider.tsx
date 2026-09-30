import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { BodycraftOutlet, BODYCRAFT_OUTLETS } from '../../data/bodycraftData';

interface BodycraftHeroSliderProps {
  onOpenBookingModal: (cat?: 'salon' | 'clinic' | 'spa' | 'bridal') => void;
  onScrollToQuiz: () => void;
  bookingCategory: 'salon' | 'clinic' | 'spa' | 'bridal';
  setBookingCategory: (cat: 'salon' | 'clinic' | 'spa' | 'bridal') => void;
  bookingCity: string;
  setBookingCity: (city: string) => void;
  bookingOutlet: string;
  setBookingOutlet: (outlet: string) => void;
  bookingService: string;
  setBookingService: (svc: string) => void;
  guestName: string;
  setGuestName: (name: string) => void;
  guestPhone: string;
  setGuestPhone: (phone: string) => void;
  onBookingSubmit: (e: React.FormEvent) => void;
}

const HERO_SLIDES = [
  {
    kicker: 'India’s Premier Hybrid Clinic-Salon Since 1997',
    headline: 'Salon Care Backed By',
    headlineHighlight: 'Dermatology Expertise.',
    description: 'Where world-class creative hair styling meets US-FDA approved clinical skin aesthetics and restorative spa rituals. Over 28 years of trusted excellence across 30+ centers.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1800&q=80',
    category: 'salon' as const
  },
  {
    kicker: 'Board-Certified Aesthetic Dermatology',
    headline: 'US-FDA Clinical Tech for',
    headlineHighlight: 'Luminous Skin & Rejuvenation.',
    description: 'Experience HydraFacial MD Elite, Morpheus8 RF Microneedling, and Painless Triple-Wavelength Laser Hair Reduction under senior dermatologist supervision.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=80',
    category: 'clinic' as const
  },
  {
    kicker: 'Bespoke Parisian Hair Artistry',
    headline: 'French Balayage, Glossing &',
    headlineHighlight: 'Kérastase Caviar Spas.',
    description: 'Personalized face-contour haircutting, zero-ammonia Inoa coloring, and Nanoplastia smoothing by Vidal Sassoon-trained Creative Directors.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=80',
    category: 'salon' as const
  },
  {
    kicker: 'Holistic Urban Sanctuary',
    headline: 'Balinese Aromatherapy &',
    headlineHighlight: '24K Gold Body Polishing.',
    description: 'Immerse in holistic tension-release body massages, antioxidant cocoa scrubs, and couples suites designed for deep mental and muscular recovery.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=80',
    category: 'spa' as const
  }
];

export const BodycraftHeroSlider: React.FC<BodycraftHeroSliderProps> = ({
  onOpenBookingModal,
  onScrollToQuiz,
  bookingCategory,
  setBookingCategory,
  bookingCity,
  setBookingCity,
  bookingOutlet,
  setBookingOutlet,
  bookingService,
  setBookingService,
  guestName,
  setGuestName,
  guestPhone,
  setGuestPhone,
  onBookingSubmit
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#2B231D] text-white flex items-center overflow-hidden">
      {/* Background Image with smooth transition */}
      <div className="absolute inset-0 opacity-25 transition-opacity duration-1000">
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.headline}
          className="w-full h-full object-cover animate-fadeIn"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Slide Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/30 text-[#C5A880] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{slide.kicker}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-serif tracking-tight leading-[1.12]">
              {slide.headline} <br />
              <span className="text-[#C5A880] italic">{slide.headlineHighlight}</span>
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal max-w-xl">
              {slide.description}
            </p>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>30+ Certified Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>US-FDA Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Parisian Hair Rituals</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenBookingModal(slide.category)}
                className="px-7 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#d8bb91] text-[#121212] font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                Schedule Appointment
              </button>
              <button
                onClick={onScrollToQuiz}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Take Diagnostic Quiz
              </button>
            </div>

            {/* Slider Navigation Dots and Arrows */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? 'w-6 bg-[#C5A880]' : 'w-2 bg-white/40'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Quick Appointment Booking Card */}
          <div className="lg:col-span-5 bg-white text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C7A65]">
                  Instant Reservation
                </span>
                <h3 className="text-xl font-black font-serif text-[#121212]">
                  Book Your Session
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-stone-100 text-[#C5A880] flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>

            <form onSubmit={onBookingSubmit} className="space-y-3 text-xs">
              {/* Vertical Select */}
              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  Choose Vertical *
                </label>
                <div className="grid grid-cols-4 gap-1 p-1 bg-stone-100 rounded-xl">
                  {(['salon', 'clinic', 'spa', 'bridal'] as const).map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setBookingCategory(cat);
                        if (cat === 'salon') setBookingService('Bespoke Precision Haircut & Styling');
                        if (cat === 'clinic') setBookingService('HydraFacial MD Elite (US-FDA 4-Step Vortex)');
                        if (cat === 'spa') setBookingService('Authentic Balinese Aromatherapy Massage');
                        if (cat === 'bridal') setBookingService('The Royal Bride 60-Day Regimen');
                      }}
                      className={`py-1.5 rounded-lg text-center font-bold capitalize transition-all cursor-pointer ${
                        bookingCategory === cat
                          ? 'bg-[#121212] text-[#C5A880] shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* City & Outlet Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    City *
                  </label>
                  <select
                    value={bookingCity}
                    onChange={e => {
                      const newCity = e.target.value;
                      setBookingCity(newCity);
                      const defaultOutlet = BODYCRAFT_OUTLETS.find(o => o.city === newCity);
                      if (defaultOutlet) setBookingOutlet(defaultOutlet.name);
                    }}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl font-semibold"
                  >
                    <option value="Bengaluru">Bengaluru (18 Outlets)</option>
                    <option value="Mumbai">Mumbai (Bandra / Kemps Corner)</option>
                    <option value="Gurugram">Gurugram (Golf Course Rd)</option>
                    <option value="Chennai">Chennai (KNK Road)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Branch Outlet *
                  </label>
                  <select
                    value={bookingOutlet}
                    onChange={e => setBookingOutlet(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl font-semibold text-stone-800"
                  >
                    {BODYCRAFT_OUTLETS.filter(o => o.city === bookingCity).map(o => (
                      <option key={o.id} value={o.name}>
                        {o.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Iyer"
                    value={guestName}
                    onChange={e => setGuestName(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 XXXXX"
                    value={guestPhone}
                    onChange={e => setGuestPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#121212] hover:bg-[#222] text-[#C5A880] font-black rounded-xl uppercase tracking-wider shadow-md transition-all cursor-pointer mt-2"
              >
                Confirm Appointment Request
              </button>

              <p className="text-[10px] text-center text-stone-500">
                A Bodycraft representative will confirm slot availability within 15 minutes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
