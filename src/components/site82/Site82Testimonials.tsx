import React from 'react';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { CLIENT_REVIEWS } from '../../data/site82Data';

export const Site82Testimonials: React.FC = () => {
  return (
    <section className="pt-12 pb-16 lg:pt-24 lg:pb-28 bg-white border-t border-neutral-100">
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-sans font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#1F2430] tracking-tight">
            What Our <span className="text-[#FF4D14]">Clients</span> Say
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
            Trusted by investors &amp; homebuyers across India. Real stories, real experiences &amp; verified satisfaction with Wealth Nexus.
          </p>
        </div>

        {/* 4 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1520px] mx-auto">
          {CLIENT_REVIEWS.map((review) => (
            <article
              key={review.id}
              className="relative rounded-2xl p-6 sm:p-7 border border-[#C9D7FF]/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-[radial-gradient(120%_90%_at_0%_0%,#FFE7D6_0%,rgba(255,231,214,0)_45%),radial-gradient(120%_100%_at_100%_100%,#DCE7FF_0%,rgba(220,231,255,0)_10%),#ffffff]"
            >
              <div>
                {/* Header with Avatar, Name, Relative Date and Google badge */}
                <div className="flex items-center gap-3.5 pb-3 border-b border-neutral-100/70">
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-tight truncate">
                      {review.name}
                    </h3>
                    <span className="text-xs text-neutral-400 font-medium">
                      {review.relativeDate}
                    </span>
                  </div>
                  {/* Google G icon */}
                  <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-xs text-blue-600 border border-neutral-100">
                    G
                  </div>
                </div>

                {/* 5 Filled Stars */}
                <div className="flex items-center gap-1 my-3 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-neutral-700 ml-1">5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed line-clamp-5 font-normal">
                  “{review.comment}”
                </p>
              </div>

              {/* Bottom Google Verification Ribbon */}
              <div className="mt-5 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="font-semibold text-neutral-700">Verified Client Review</span>
                <span className="text-[#F54900] font-mono flex items-center gap-1 hover:underline">
                  <span>Google Review</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
