import React, { useState } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  Calendar,
  Building,
  Heart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { TESTIMONIALS_DATA, TestimonialItem } from '../../data/devdasWeddingData';

interface DevdasTestimonialsSectionProps {
  onOpenInquiry: () => void;
}

export const DevdasTestimonialsSection: React.FC<DevdasTestimonialsSectionProps> = ({
  onOpenInquiry,
}) => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeReviewIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#7A1C30] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>Couple Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            WHAT OUR COUPLES SAY
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real stories and unvarnished feedback from couples and families who entrusted us with their once-in-a-lifetime celebrations.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-[#FCFBF7] rounded-3xl border border-amber-900/10 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <Quote className="w-24 h-24 text-amber-200/40 absolute -top-4 -right-4 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-amber-400 shadow-md mb-3">
                <img
                  src={current.avatar}
                  alt={current.couple}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif font-bold text-lg text-slate-900">
                {current.couple}
              </h4>
              <p className="text-xs text-slate-500">{current.cityOrCountry}</p>
              <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-rose-50 text-[#7A1C30] text-[11px] font-bold">
                {current.weddingLocation}
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="font-serif italic text-base sm:text-lg text-slate-800 leading-relaxed">
                "{current.review}"
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-amber-900/10 text-xs text-slate-500">
                <span>Celebration Date: {current.date}</span>
                <span className="font-bold text-[#7A1C30]">Verified Wedding Experience</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-amber-900/10">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeReviewIndex === idx ? 'w-8 bg-[#7A1C30]' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="w-9 h-9 rounded-full border border-slate-300 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="w-9 h-9 rounded-full border border-slate-300 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Small stats / trust row */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="font-serif font-black text-2xl text-[#7A1C30]">4.98 / 5.0</div>
            <div className="text-xs text-slate-600 mt-1">Average Couple Rating</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="font-serif font-black text-2xl text-[#7A1C30]">280+</div>
            <div className="text-xs text-slate-600 mt-1">Celebrations Curated</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="font-serif font-black text-2xl text-[#7A1C30]">100%</div>
            <div className="text-xs text-slate-600 mt-1">Direct Hotel Net Rates</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="font-serif font-black text-2xl text-[#7A1C30]">24</div>
            <div className="text-xs text-slate-600 mt-1">Hub Destinations</div>
          </div>
        </div>
      </div>
    </section>
  );
};
