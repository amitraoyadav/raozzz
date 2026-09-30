import React, { useState } from 'react';
import { Heart, Users, Star, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SPECIALITY_TOUR_TYPES, VEENA_PACKAGES, VeenaPackage } from '../../../data/veenaWorldData';

interface VeenaSpecialityPageProps {
  onOpenDetail: (pkg: VeenaPackage) => void;
  onOpenBooking: (pkg: VeenaPackage) => void;
}

export const VeenaSpecialityPage: React.FC<VeenaSpecialityPageProps> = ({ onOpenDetail, onOpenBooking }) => {
  const [activeSpec, setActiveSpec] = useState<string>('women');

  const selectedSpecInfo = SPECIALITY_TOUR_TYPES.find(s => s.id === activeSpec) || SPECIALITY_TOUR_TYPES[0];

  const matchedPackages = VEENA_PACKAGES.filter(p => p.specialityType === activeSpec);

  return (
    <div className="py-8 bg-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#D32F2F]">
            Travel with Your Tribe
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#0F2C59] mt-1">
            Veena World Speciality Tours
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Every traveler is unique. Discover tours designed specifically for women explorers, senior citizens, romantic newlyweds, and family reunions.
          </p>
        </div>

        {/* Speciality Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {SPECIALITY_TOUR_TYPES.map(spec => (
            <button
              key={spec.id}
              onClick={() => setActiveSpec(spec.id)}
              className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                activeSpec === spec.id
                  ? 'border-[#0F2C59] ring-2 ring-[#FDB813] bg-white shadow-md'
                  : 'border-slate-200 bg-white/70 hover:bg-white text-slate-600'
              }`}
            >
              <span className="text-2xl">{spec.icon}</span>
              <span className="font-bold text-xs text-[#0F2C59]">{spec.title}</span>
            </button>
          ))}
        </div>

        {/* Active Speciality Hero Spotlight */}
        <div
          className="rounded-3xl p-6 sm:p-10 border shadow-sm mb-12"
          style={{ backgroundColor: selectedSpecInfo.bgColor, borderColor: `${selectedSpecInfo.color}33` }}
        >
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{selectedSpecInfo.icon}</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F2C59]">
                {selectedSpecInfo.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {selectedSpecInfo.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {selectedSpecInfo.sampleTours.map((st, i) => (
                <span key={i} className="px-3 py-1 bg-white/80 rounded-lg text-xs font-semibold text-slate-800 shadow-2xs">
                  ✦ {st}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Matched Packages Showcase */}
        <div>
          <h3 className="text-xl font-black text-[#0F2C59] mb-6">
            Available {selectedSpecInfo.title} Packages ({matchedPackages.length})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedPackages.map(pkg => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-52 bg-slate-200 overflow-hidden">
                  <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#D32F2F] text-white text-[10px] font-black uppercase">
                    {selectedSpecInfo.title}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white text-[#0F2C59] font-black text-xs">
                    {pkg.durationDays}D / {pkg.durationNights}N
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4
                      onClick={() => onOpenDetail(pkg)}
                      className="font-black text-base text-[#0F2C59] hover:text-[#D32F2F] cursor-pointer"
                    >
                      {pkg.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">{pkg.destinationSummary}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">All-Inclusive</span>
                      <span className="text-lg font-black text-[#0F2C59]">
                        ₹{pkg.priceInr.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onOpenDetail(pkg)}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-bold hover:bg-slate-200"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onOpenBooking(pkg)}
                        className="px-4 py-1.5 rounded-lg bg-[#FDB813] text-[#0F2C59] font-black text-xs uppercase"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
