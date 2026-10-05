import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CLUB_FACILITIES, ClubFacility } from '../../data/site78ClubData';

interface Site78ClubFacilitiesGridProps {
  onFacilityClick: (facilitySlug: string) => void;
  onViewAllFacilities: () => void;
}

export const Site78ClubFacilitiesGrid: React.FC<Site78ClubFacilitiesGridProps> = ({
  onFacilityClick,
  onViewAllFacilities
}) => {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-[#F9F8F5] text-[#1C242C] font-['Jost',sans-serif] border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Panchshila layout) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#183D2F] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#C5A869]" />
            <span>Exclusive Offerings</span>
            <span className="w-8 h-[1px] bg-[#C5A869]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0F2537] leading-tight">
            Facilities
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#E8E5DF]" />
            <span className="text-[#C5A869] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E8E5DF]" />
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            All Facilities of The Kensington Club are reserved for the usage of its Members, their families and authorized Guests as well as Members of Affiliated Clubs.
          </p>
        </div>

        {/* 8 Facility Cards Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {CLUB_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              onClick={() => onFacilityClick(facility.slug)}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-[#E8E5DF] transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-['Cormorant',serif] font-bold text-xl sm:text-2xl text-[#0F2537] group-hover:text-[#183D2F] transition-colors leading-snug">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-light line-clamp-2 mt-1.5 leading-relaxed">
                    {facility.shortTagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F3EFE6] flex items-center justify-between text-xs font-semibold text-[#183D2F]">
                  <span className="group-hover:text-[#C5A869] transition-colors">Learn More</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#C5A869]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (Matching Panchshila's 'View More') */}
        <div className="text-center">
          <button
            onClick={onViewAllFacilities}
            className="px-8 py-3.5 rounded-md bg-[#C5A869] hover:bg-[#d4bc82] text-[#0F2537] text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
          >
            <span>View All Facilities & Guidelines</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
