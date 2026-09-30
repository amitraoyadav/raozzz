import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/brioTravelsData';

export const BrioTestimonialsSlider: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIdx(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIdx];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
            Real Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Client Testimonials
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-['Inter']">
            Hear from our satisfied travellers who explored the world with Brio Travels.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-100 max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-teal-100 absolute top-6 right-6 -z-0" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-teal-50 shadow-md shrink-0"
              />
              <span className="absolute -bottom-2 -right-2 p-1 rounded-full bg-teal-600 text-white shadow-xs">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-3">
              {/* Star Rating */}
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed font-['Inter']">
                "{item.comment}"
              </p>

              {/* Author & Tour */}
              <div className="pt-2 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 font-['Poppins'] text-base">
                  {item.name}
                </h4>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-slate-500 mt-0.5">
                  <span className="font-medium text-teal-700">{item.tour}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-3 mt-8 pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5 px-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === currentIdx ? 'w-6 bg-teal-600' : 'w-2 bg-slate-200 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
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
