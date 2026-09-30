import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock, ArrowRight } from 'lucide-react';
import { BrioTourPackage } from '../data/types';

interface BrioPackagesCarouselProps {
  title: string;
  subtitle: string;
  packages: BrioTourPackage[];
  onSelectPackage: (pkg: BrioTourPackage) => void;
  onViewAll: () => void;
  viewAllLabel?: string;
  badgeLabel?: string;
  themeColor?: 'teal' | 'indigo';
}

export const BrioPackagesCarousel: React.FC<BrioPackagesCarouselProps> = ({
  title,
  subtitle,
  packages,
  onSelectPackage,
  onViewAll,
  viewAllLabel = 'View All Packages',
  badgeLabel = 'Curated Circuits',
  themeColor = 'teal'
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                themeColor === 'teal'
                  ? 'bg-teal-50 text-teal-800 border border-teal-200'
                  : 'bg-indigo-50 text-indigo-800 border border-indigo-200'
              }`}
            >
              {badgeLabel}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
              {title}
            </h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm font-['Inter']">
              {subtitle}
            </p>
          </div>

          {/* Right Action: View All + Carousel Buttons */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={onViewAll}
              className="text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 hover:underline flex items-center gap-1 cursor-pointer mr-2"
            >
              <span>{viewAllLabel} ({packages.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Scroll Carousel Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Scroll Carousel Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-5 overflow-x-auto no-scrollbar pb-4 pt-1 scroll-smooth"
        >
          {packages.map(pkg => (
            <div
              key={pkg.id}
              onClick={() => onSelectPackage(pkg)}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer shrink-0"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={pkg.coverImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[11px] font-bold bg-white/95 text-slate-900 flex items-center gap-1 shadow-xs">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>{pkg.rating.toFixed(1)}</span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2.5 left-3 text-white text-xs font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-300" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-teal-600 transition-colors font-['Poppins'] line-clamp-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">
                    Starts At
                  </div>
                  <div className="text-sm font-black text-teal-700 font-mono">
                    ₹{pkg.startingPrice.toLocaleString('en-IN')}
                  </div>
                </div>

                <button
                  className="px-3 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-bold group-hover:bg-teal-700 transition-colors flex items-center gap-1 shadow-2xs"
                >
                  <span>View</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
