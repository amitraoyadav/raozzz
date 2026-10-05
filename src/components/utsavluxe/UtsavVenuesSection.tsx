import React, { useState, useMemo } from 'react';
import { UTSAV_CURATED_VENUES, UtsavVenueItem } from '../../data/utsavLuxeData';

interface UtsavVenuesSectionProps {
  onInquireVenue: (venue: UtsavVenueItem) => void;
  selectedCity: string;
}

export const UtsavVenuesSection: React.FC<UtsavVenuesSectionProps> = ({
  onInquireVenue,
  selectedCity
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredVenues = useMemo(() => {
    if (activeFilter === 'all') return UTSAV_CURATED_VENUES;
    return UTSAV_CURATED_VENUES.filter(v => v.citySlug === activeFilter);
  }, [activeFilter]);

  const filterButtons = [
    { id: 'all', label: 'All Destination Hubs' },
    { id: 'bengaluru', label: 'Bengaluru' },
    { id: 'jaipur', label: 'Jaipur & Rajasthan' },
    { id: 'goa', label: 'Goa Coastal' },
    { id: 'hyderabad', label: 'Hyderabad' },
    { id: 'delhi-ncr', label: 'Delhi NCR' },
    { id: 'mumbai', label: 'Mumbai' }
  ];

  return (
    <section id="venues" className="py-16 sm:py-24 bg-stone-50 text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            Pre-Negotiated Club Rates
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Curated Luxury Venues & Stays
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Gain exclusive wholesale room block rates, waived corkage, and direct banquet contracts 
            at India’s most coveted 5-star palatial hotels and beachfront resorts.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none gap-2 mb-10">
          {filterButtons.map(btn => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                activeFilter === btn.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Venue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVenues.map(venue => (
            <div
              key={venue.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-stone-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white">
                    {venue.city}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#E05A47] text-white">
                    {venue.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                    <span>Capacity: {venue.capacity}</span>
                    <span>{venue.roomsCount} Rooms</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {venue.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {venue.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 space-y-1">
                    {venue.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-stone-600 flex items-center gap-1.5">
                        <span className="text-[#E05A47] font-bold">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Banqueting</span>
                  <span className="text-xs font-bold text-stone-900">{venue.startingPlatePrice}</span>
                </div>

                <button
                  onClick={() => onInquireVenue(venue)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#E05A47] hover:bg-[#C94330] rounded-lg shadow-xs transition-colors"
                >
                  Check Dates & Recce
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Venue Recce Guarantee Box */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 text-xl font-serif">
              ✦
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Complimentary 1-Day Chauffeur Venue Recce Tour
              </h4>
              <p className="text-xs text-stone-600 mt-1 max-w-xl">
                Shortlist up to 3 premium properties with our Venue Director. We arrange private tasting menus, 
                ballroom measurement reviews, and direct management negotiation meetings.
              </p>
            </div>
          </div>

          <button
            onClick={() => onInquireVenue(filteredVenues[0])}
            className="shrink-0 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-stone-900 hover:bg-stone-950 text-white shadow-xs transition-colors"
          >
            Schedule Venue Recce Tour
          </button>
        </div>

      </div>
    </section>
  );
};
