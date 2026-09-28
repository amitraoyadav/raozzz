import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  name: string;
  businessName: string;
  category: string;
  city: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  highlightStat: string;
  statLabel: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Suresh Agarwal',
    businessName: 'Shree Ganesh Sweets & Namkeen',
    category: 'Mithai & Bakery',
    city: 'Jaipur, Rajasthan',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'During Diwali, we used to lose countless bulk sweet orders because clients asked for a catalog on WhatsApp. With RaoSitez, we put our menu link in our bio and received 140+ pre-paid box orders in 3 days!',
    rating: 5,
    highlightStat: '140+ Orders',
    statLabel: 'Festival Pre-Orders'
  },
  {
    id: 't-2',
    name: 'Dr. Meenakshi Sundaram',
    businessName: 'Sundaram Dental Care & Implant Center',
    category: 'Doctor & Dental Clinic',
    city: 'Bangalore, Karnataka',
    avatarUrl: 'https://images.unsplash.com/photo-1594824813511-2090886c8f94?auto=format&fit=crop&w=200&q=80',
    quote: 'Patients search Google Maps before walking in. RaoSitez gave our clinic a professional site with our OPD timings, treatment charges in ₹, and direct WhatsApp appointment slots. It paid for itself on day one.',
    rating: 5,
    highlightStat: '65+ Slots',
    statLabel: 'Monthly Digital OPD'
  },
  {
    id: 't-3',
    name: 'Pooja Verma',
    businessName: 'Glamour Touch Salon & Bridal Studio',
    category: 'Salon & Beauty Lounge',
    city: 'Pune, Maharashtra',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Earlier, customers would call repeatedly asking for haircut and facial prices. Now they check our live rates on phone, pick a timing, and message us. Our weekend slots are booked 3 days in advance.',
    rating: 5,
    highlightStat: '100% Full',
    statLabel: 'Weekend Bookings'
  },
  {
    id: 't-4',
    name: 'Vikramjit Singh',
    businessName: 'Punjab Highway Dhaba & Family Dine',
    category: 'Restaurant & Dhaba',
    city: 'Amritsar / GT Road',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Highway travelers search for family dhabas with clean washrooms and authentic food. Having our Google Maps pinned site with our tandoor menu and photos brought in tour buses and traveling families consistently.',
    rating: 5,
    highlightStat: '3x Footfall',
    statLabel: 'Highway Tourist Visits'
  },
  {
    id: 't-5',
    name: 'Harish Chandra',
    businessName: 'QuickFix Electronics & Appliance Care',
    category: 'AC & Mobile Repair',
    city: 'Delhi NCR',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    quote: 'We stopped paying lead generation apps ₹500 per fake lead. Having our own site where clients schedule doorstep AC repair pickup directly transformed our local reputation in Dwarka.',
    rating: 5,
    highlightStat: 'Zero Fee',
    statLabel: 'Commission Saved'
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Auto-scrolling timer (advances every 4.5 seconds when not paused)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const activeItem = TESTIMONIALS[currentIndex];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-16 sm:py-24 bg-[#FAFAF8] border-b border-[#E8E7F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Indian Small Businesses
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14162B] font-['Fraunces'] tracking-tight">
            Trusted by Shop Owners Across India
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#474B64]">
            Real feedback from local business owners who went from offline-only to digital leaders in their locality.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="max-w-4xl mx-auto relative bg-white rounded-3xl p-6 sm:p-12 border border-[#E8E7F0] shadow-sm transition-all"
        >
          <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 text-[#E8E7F0] pointer-events-none stroke-1" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar & Highlight Stat */}
            <div className="text-center md:text-left shrink-0">
              <img
                src={activeItem.avatarUrl}
                alt={activeItem.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover mx-auto md:mx-0 shadow-md border-2 border-white ring-1 ring-[#E8E7F0]"
              />
              <div className="mt-4 p-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E7F0] text-center">
                <span className="text-base sm:text-lg font-black text-[#4338CA] font-mono-price block">
                  {activeItem.highlightStat}
                </span>
                <span className="text-[10px] text-[#636882] font-semibold uppercase tracking-wider block">
                  {activeItem.statLabel}
                </span>
              </div>
            </div>

            {/* Testimonial Quote & Info */}
            <div className="flex-1 text-center md:text-left space-y-4">
              {/* Star Rating */}
              <div className="flex items-center justify-center md:justify-start gap-1">
                {Array.from({ length: activeItem.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text in Fraunces */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-[#14162B] font-['Fraunces'] leading-snug font-medium">
                "{activeItem.quote}"
              </blockquote>

              {/* Author & Business */}
              <div className="pt-2">
                <h4 className="text-sm sm:text-base font-black text-[#14162B] font-['Inter']">
                  {activeItem.name}
                </h4>
                <p className="text-xs text-[#4338CA] font-semibold">
                  {activeItem.businessName} · <span className="text-[#636882] font-normal">{activeItem.category}</span>
                </p>
                <p className="text-[11px] text-[#8E92A8] mt-0.5">
                  📍 {activeItem.city}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#E8E7F0]">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#4338CA]' : 'w-2 bg-[#D5D4E3] hover:bg-[#8E92A8]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl border border-[#E8E7F0] hover:bg-[#FAFAF8] text-[#14162B] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl border border-[#E8E7F0] hover:bg-[#FAFAF8] text-[#14162B] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
