import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/site75Data';

export const Site75Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#080B12] text-white border-t border-[#20293D]/60 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            Enduring Acclaim
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-5xl text-white tracking-tight">
            Words from Our Couples
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-400 font-light">
            Reflections from families who entrusted us with their once-in-a-lifetime celebrations.
          </p>
        </div>

        {/* Testimonial Editorial Slider Card */}
        <div className="bg-[#0E131F] border border-[#20293D] rounded-3xl p-8 sm:p-14 relative shadow-2xl">
          
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-full bg-[#131A29] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-8 mx-auto">
            <Quote className="w-5 h-5 fill-current" />
          </div>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1.5 mb-6 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="font-serif font-light text-lg sm:text-2xl md:text-3xl text-slate-100 leading-relaxed text-center max-w-3xl mx-auto mb-10">
            "{current.quote}"
          </blockquote>

          {/* Couple Info */}
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={current.image}
              alt={current.couple}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]/50 shadow-md"
            />
            <div className="text-center">
              <h4 className="font-serif text-lg text-white font-medium">
                {current.couple}
              </h4>
              <p className="text-xs text-[#D4AF37] font-mono tracking-wider uppercase">
                {current.event} · {current.location} ({current.year})
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/5">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-[#20293D] hover:border-[#D4AF37] flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-[#20293D]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-[#20293D] hover:border-[#D4AF37] flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Site75Testimonials;
