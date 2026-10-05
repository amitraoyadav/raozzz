import React from 'react';
import { RAOZY_REVIEWS, RAOZY_CONFIG } from '../../data/raozyWeddingData';

export const RaozyReviewsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0D0B0A] text-stone-200 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
            Voices of Our Couples &amp; Families
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Enduring Trust Across 580 Celebrations
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-400">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-lg">{star}</span>
            ))}
            <span className="text-sm font-serif font-bold text-white ml-2">
              {RAOZY_CONFIG.rating} / 5.0
            </span>
            <span className="text-xs text-stone-400">
              ({RAOZY_CONFIG.reviewCount}+ Verified Reviews)
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RAOZY_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#14110E] p-8 rounded-2xl border border-stone-800/90 hover:border-[#DFC082]/40 transition-colors flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-amber-400 text-sm tracking-widest">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-[11px] font-sans text-stone-500">{rev.date}</span>
                </div>
                <blockquote className="text-stone-300 font-serif italic text-sm sm:text-base leading-relaxed mb-6">
                  "{rev.quote}"
                </blockquote>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-stone-800/80">
                <img
                  src={rev.avatar}
                  alt={rev.clientNames}
                  className="w-12 h-12 rounded-full object-cover border border-[#DFC082]/40"
                />
                <div>
                  <h4 className="text-sm font-serif font-semibold text-white">
                    {rev.clientNames}
                  </h4>
                  <div className="text-[11px] text-[#DFC082] font-medium">
                    {rev.relation}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {rev.venue} · {rev.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
