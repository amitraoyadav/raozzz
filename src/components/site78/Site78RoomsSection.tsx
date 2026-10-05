import React from 'react';
import {
  Users,
  Maximize2,
  BedDouble,
  Waves,
  Sun,
  Coffee,
  Tv,
  Wifi,
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';
import { ROOMS_DATA, RoomItem } from '../../data/site78Data';

interface Site78RoomsSectionProps {
  onViewRoomDetail: (roomSlug: string) => void;
  onBookRoom: (roomSlug: string) => void;
}

export const Site78RoomsSection: React.FC<Site78RoomsSectionProps> = ({
  onViewRoomDetail,
  onBookRoom
}) => {
  return (
    <section id="rooms" className="py-20 sm:py-28 bg-[#F3EEE7]/40 text-[#222222] relative font-['Jost',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>Accommodation Sanctuary</span>
            <span className="w-8 h-[1px] bg-[#B99D75]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1C] leading-[1.12]">
            Rooms and Suites
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
            <span className="text-[#B99D75] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Indulge in secluded coastal opulence. Every accommodation at Aurelia is uniquely fitted with an individual freshwater plunge pool, Balinese open-air rainforest shower, and bespoke teakwood furnishings.
          </p>
        </div>

        {/* Room Cards Stack */}
        <div className="space-y-16 lg:space-y-20">
          {ROOMS_DATA.map((room, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD7] grid grid-cols-1 lg:grid-cols-12 transition-all duration-500 hover:shadow-2xl group"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] lg:min-h-full overflow-hidden ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={room.bannerImage}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

                  {/* Private Pool Signature Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#747157] text-white text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-md">
                    <Waves className="w-3.5 h-3.5 text-[#B99D75]" />
                    <span>Private Plunge Pool Included</span>
                  </div>

                  {/* Floating Price Badge */}
                  <div className="absolute bottom-4 right-4 z-10 px-4 py-2 rounded-2xl bg-black/75 backdrop-blur-md text-white text-right border border-white/10 shadow-lg">
                    <div className="text-[10px] text-stone-300 uppercase tracking-wider font-light">From</div>
                    <div className="font-['Cormorant',serif] font-bold text-xl sm:text-2xl text-[#B99D75] leading-none">
                      ₹{room.pricePerNightInr.toLocaleString('en-IN')}
                      <span className="text-xs text-stone-300 font-sans font-normal ml-1">/ night</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Size & Occupancy Badges */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#747157] font-semibold tracking-wider uppercase">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F3EEE7]">
                        <Maximize2 className="w-3 h-3 text-[#B99D75]" />
                        <span>{room.areaSqFt} SQ.FT</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F3EEE7]">
                        <Users className="w-3 h-3 text-[#B99D75]" />
                        <span>{room.maxGuests} Guests ({room.extraGuestsAllowed} Extra Allowed)</span>
                      </span>
                    </div>

                    {/* Room Name */}
                    <h3 className="font-['Cormorant',serif] font-bold text-2xl sm:text-4xl text-[#1C1C1C] leading-[1.18]">
                      {room.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {room.description}
                    </p>

                    {/* Key Highlights Checklist */}
                    <div className="space-y-2 pt-2 border-t border-[#E5DFD7]">
                      <div className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-4 h-4 text-[#747157] shrink-0" />
                        <span>{room.keyHighlights.pool}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-4 h-4 text-[#747157] shrink-0" />
                        <span>{room.keyHighlights.shower}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-4 h-4 text-[#747157] shrink-0" />
                        <span>{room.bedType}</span>
                      </div>
                    </div>

                    {/* Amenities Mini-Row */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-[11px] font-medium text-stone-500 bg-[#F3EEE7] px-2.5 py-1 rounded-md">Espresso Machine</span>
                      <span className="text-[11px] font-medium text-stone-500 bg-[#F3EEE7] px-2.5 py-1 rounded-md">Smart 55" TV</span>
                      <span className="text-[11px] font-medium text-stone-500 bg-[#F3EEE7] px-2.5 py-1 rounded-md">High-Speed Wi-Fi</span>
                      <span className="text-[11px] font-medium text-stone-500 bg-[#F3EEE7] px-2.5 py-1 rounded-md">Organic Toiletries</span>
                    </div>
                  </div>

                  {/* Actions: View Details & Book Now */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-[#E5DFD7]">
                    <button
                      onClick={() => onBookRoom(room.slug)}
                      className="flex-1 py-3 px-6 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Book Room</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B99D75]" />
                    </button>

                    <button
                      onClick={() => onViewRoomDetail(room.slug)}
                      className="py-3 px-6 rounded-full bg-white hover:bg-[#F3EEE7] text-[#222222] border border-[#E5DFD7] hover:border-[#747157] text-xs font-semibold tracking-[0.16em] uppercase transition-all cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
