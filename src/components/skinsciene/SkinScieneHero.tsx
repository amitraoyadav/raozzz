import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Award,
  ChevronRight,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Star,
  Users,
} from 'lucide-react';
import { SKINSCIENE_CONFIG, TREATMENTS_DATA } from '../../data/skinScieneData';

interface SkinScieneHeroProps {
  onOpenBooking: (treatmentSlug?: string) => void;
  selectedCity: string;
  onSelectTreatment: (slug: string) => void;
}

export const SkinScieneHero: React.FC<SkinScieneHeroProps> = ({
  onOpenBooking,
  selectedCity,
  onSelectTreatment,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Quick hero consultation form state
  const [concern, setConcern] = useState('laser-hair-removal');
  const [patientCity, setPatientCity] = useState(selectedCity);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setPatientCity(selectedCity);
  }, [selectedCity]);

  const HERO_SLIDES = [
    {
      badge: 'Gold Standard US-FDA Laser',
      title: 'Painless Laser Hair Removal for Indian Skin',
      highlight: 'Up to 90% Permanent Reduction',
      subtitle:
        'Triple-wavelength Soprano Titanium with continuous ICE cooling. Clinically proven safe for all Indian skin types by our MD Dermatologists.',
      bgImage:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Explore Laser Hair Removal',
      slug: 'laser-hair-removal',
      stats: '3,800+ 5-Star Reviews',
    },
    {
      badge: 'Multidisciplinary Scar Reversal',
      title: 'Say Goodbye to Stubborn Acne & Pitted Scars',
      highlight: 'Subcision + Fractional Laser Protocol',
      subtitle:
        'Customized combination therapy targeting rolling, boxcar, and ice-pick scars. Restores smooth skin texture with lasting neo-collagenesis.',
      bgImage:
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'View Acne Scar Treatment',
      slug: 'acne-scar-treatment',
      stats: '85% Visible Smoothing',
    },
    {
      badge: 'Next-Gen Regenerative Trichology',
      title: 'Acellular GFC & PRP Natural Hair Regrowth',
      highlight: 'Revive Dormant Hair Roots',
      subtitle:
        'Stop hair thinning and stimulate natural follicle density with autologous growth factor concentrate. 100% biocompatible, zero scalp soreness.',
      bgImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Discover GFC Hair Therapy',
      slug: 'gfc-hair-treatment',
      stats: '3x Active Growth Yield',
    },
    {
      badge: 'Bridal & Red-Carpet Radiance',
      title: 'HydraGeneo 3-in-1 Oxygenating Medi-Facial',
      highlight: 'Instant Glass Skin & Plumping',
      subtitle:
        'Exfoliation, cellular oxygenation via natural Bohr Effect, and deep ultrasound peptide infusion. Immediate radiant glow with zero downtime.',
      bgImage:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Book Medi-Facial Glow',
      slug: 'hydrageneo-medifacial',
      stats: '100% Needle-Free Glow',
    },
  ];

  // Auto advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [HERO_SLIDES.length]);

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      onOpenBooking(concern);
      setFormSubmitted(false);
    }, 1200);
  };

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.slug}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
            } transform transition-transform duration-7000`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 25%',
            }}
          />
        ))}
        {/* Aesthetic Gradient Shading */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Hero Slider Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentSlide.badge}</span>
            </div>

            {/* Slide Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif font-extrabold tracking-tight leading-tight text-white">
                {currentSlide.title}
              </h1>
              <div className="text-xl sm:text-2xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                {currentSlide.highlight}
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {currentSlide.subtitle}
            </p>

            {/* Action buttons & Slide Navigation */}
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <button
                onClick={() => onSelectTreatment(currentSlide.slug)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{currentSlide.ctaText}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenBooking(currentSlide.slug)}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Book Free Assessment</span>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2 pt-4">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeSlide === i
                      ? 'w-8 bg-emerald-400'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
              <span className="text-xs text-slate-400 ml-3">
                0{activeSlide + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">US-FDA</div>
                  <div className="text-[11px] text-slate-400">Approved Lasers</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">120+ MD</div>
                  <div className="text-[11px] text-slate-400">Dermatologists</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="w-5 h-5 text-amber-400 shrink-0 fill-amber-400" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">95.8%</div>
                  <div className="text-[11px] text-slate-400">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Quick Consultation Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-emerald-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Card Header */}
              <div className="mb-6 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Doctor Consultation
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-semibold border border-emerald-800">
                    Complimentary Screening
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Schedule Free Skin & Hair Assessment
                </h3>
                <p className="text-xs text-slate-400">
                  Meet an MD Dermatologist at your nearest clinic in {patientCity}
                </p>
              </div>

              {/* Booking Form */}
              {formSubmitted ? (
                <div className="py-10 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Connecting With Doctor Desk...</h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    Thank you {fullName}! Opening appointment confirmation slot for {patientCity}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                  {/* Treatment Concern */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Select Your Clinical Concern
                    </label>
                    <select
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                    >
                      {TREATMENTS_DATA.map((t) => (
                        <option key={t.slug} value={t.slug}>
                          {t.category.toUpperCase()}: {t.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City Selection */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Choose Your Preferred City
                    </label>
                    <select
                      value={patientCity}
                      onChange={(e) => setPatientCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                    >
                      {SKINSCIENE_CONFIG.cities.map((city) => (
                        <option key={city} value={city}>
                          {city} ({city === 'Hyderabad' ? '9 Clinics' : city === 'Bengaluru' ? '8 Clinics' : 'Clinics Available'})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anjali Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Mobile Number (For WhatsApp / SMS Confirmation)
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-700 bg-slate-800 text-slate-300 text-xs font-semibold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        className="w-full px-3.5 py-2.5 rounded-r-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Book Instant Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    🔒 100% Confidential · No Spam Guarantee · Free Doctor Screening
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
