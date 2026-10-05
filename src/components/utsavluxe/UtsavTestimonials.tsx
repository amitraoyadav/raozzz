import React from 'react';
import { UTSAV_REVIEWS, UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

export const UtsavTestimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            Couples & Families Love Us
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Loved by 3,200+ Couples
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Rated {UTSAV_BUSINESS_CONFIG.rating} out of 5 across Google, WedMeGood & WeddingWire. 
            Hear what our couples and parents have to say about our 3D precision and seamless execution.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UTSAV_REVIEWS.map(rev => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-medium">{rev.date}</span>
                </div>

                <h4 className="font-serif text-lg font-bold text-stone-900">
                  {rev.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Venue Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-stone-200"
                  />
                  <div>
                    <h5 className="font-serif font-bold text-stone-900 text-sm leading-tight">
                      {rev.author}
                    </h5>
                    <span className="text-[11px] text-stone-500 block">
                      {rev.relation} · {rev.city}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-medium text-[#E05A47] bg-[#E05A47]/5 px-2.5 py-1 rounded-md">
                  {rev.venueName}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
