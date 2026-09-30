import React from 'react';
import { Heart, Sparkles, Star, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { HONEYMOON_PACKAGES } from '../data/brioTravelsData';
import { BrioTourPackage } from '../data/types';

interface BrioHoneymoonPageProps {
  onSelectPackage: (pkg: BrioTourPackage) => void;
  onOpenBookingModal: (title: string) => void;
}

export const BrioHoneymoonPage: React.FC<BrioHoneymoonPageProps> = ({
  onSelectPackage,
  onOpenBookingModal
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-gradient-to-r from-rose-950 via-slate-950 to-rose-900 text-white rounded-3xl p-8 sm:p-14 mb-12 shadow-2xl border border-rose-800/40 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-3 border border-rose-400/30">
              <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
              <span>Romantic Escapes for Newlyweds</span>
            </span>
            <h1 className="text-2xl sm:text-5xl font-extrabold font-['Poppins'] tracking-tight mb-4 leading-tight">
              Curated Luxury Honeymoon Packages
            </h1>
            <p className="text-xs sm:text-base text-rose-100 font-['Inter'] leading-relaxed">
              Celebrate your love in breathtaking destinations. Enjoy private overwater villas, romantic beach candlelight dinners, floating breakfasts, flower bed decor, and couples spa retreats.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {HONEYMOON_PACKAGES.map(pkg => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border border-rose-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              <div>
                <div
                  onClick={() => onSelectPackage(pkg)}
                  className="relative h-56 overflow-hidden cursor-pointer"
                >
                  <img
                    src={pkg.coverImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-600/90 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-md">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Honeymoon Special</span>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-rose-300" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3
                    onClick={() => onSelectPackage(pkg)}
                    className="font-bold text-lg text-slate-900 group-hover:text-rose-600 transition-colors font-['Poppins'] line-clamp-1 cursor-pointer"
                  >
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-['Inter']">
                    {pkg.subtitle}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-bold text-rose-700 uppercase tracking-wider">
                      Romantic Inclusions:
                    </div>
                    {pkg.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-rose-50/40 border-t border-rose-100 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">
                    Couple Starting Price
                  </div>
                  <div className="text-xl font-black text-rose-800 font-mono">
                    ₹{pkg.startingPrice.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-rose-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                  >
                    <span>Itinerary</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onOpenBookingModal(`Honeymoon: ${pkg.title}`)}
                    className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
