import React from 'react';
import { Clock, Star, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { POPULAR_TOURS } from '../data/brioTravelsData';
import { BrioTourPackage } from '../data/types';

interface BrioPopularToursProps {
  onSelectPackage: (pkg: BrioTourPackage) => void;
  onOpenBookingModal: (tourTitle: string) => void;
}

export const BrioPopularTours: React.FC<BrioPopularToursProps> = ({
  onSelectPackage,
  onOpenBookingModal
}) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
            Top Recommended Vacations
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Most Popular Tours
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm font-['Inter'] leading-relaxed">
            Hand-selected, best-reviewed travel packages departing regularly from Delhi NCR with verified hotels, experienced drivers, and guaranteed lowest prices.
          </p>
        </div>

        {/* 8 Distinct Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_TOURS.map(pkg => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              <div>
                {/* Image Cover */}
                <div
                  onClick={() => onSelectPackage(pkg)}
                  className="relative h-48 overflow-hidden cursor-pointer"
                >
                  <img
                    src={pkg.coverImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold text-white uppercase tracking-wider ${
                      pkg.category === 'domestic' ? 'bg-teal-700/90' : 'bg-indigo-700/90'
                    }`}>
                      {pkg.category === 'domestic' ? 'Domestic' : 'International'}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-white/95 text-slate-900 flex items-center gap-1 shadow-xs">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>{pkg.rating.toFixed(1)}</span>
                    </span>
                  </div>

                  {/* Duration Badge Bottom Left */}
                  <div className="absolute bottom-2.5 left-3 text-white text-xs font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-300" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-2">
                  <h3
                    onClick={() => onSelectPackage(pkg)}
                    className="font-bold text-sm text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-1 cursor-pointer font-['Poppins']"
                    title={pkg.title}
                  >
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  {/* Highlights Mini List */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    {pkg.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & Actions */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    Starting From
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-black text-teal-700 font-mono">
                      ₹{pkg.startingPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-mono">
                      ₹{pkg.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                    title="View Full Itinerary & Inclusions"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onOpenBookingModal(pkg.title)}
                    className="px-2.5 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-500 hover:text-white text-orange-700 border border-orange-200 text-xs font-bold transition-colors cursor-pointer"
                    title="Quick Price Enquiry"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
