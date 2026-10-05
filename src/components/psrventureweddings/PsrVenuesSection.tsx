import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Users, 
  Bed, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Search,
  Filter
} from 'lucide-react';
import { PSR_VENUES, VenueItem } from '../../data/psrWeddingsData';
import { siteConfig } from '../../config/siteConfig';

interface PsrVenuesSectionProps {
  onSelectVenue: (venue: VenueItem) => void;
  onOpenConsultation: (initialVenue?: string) => void;
}

export const PsrVenuesSection: React.FC<PsrVenuesSectionProps> = ({
  onSelectVenue,
  onOpenConsultation
}) => {
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const destinationsList = [
    { label: 'All Destinations', value: 'all' },
    { label: 'Udaipur', value: 'udaipur' },
    { label: 'Jaipur', value: 'jaipur' },
    { label: 'Goa', value: 'goa' },
    { label: 'Jodhpur', value: 'jodhpur' },
    { label: 'Kerala', value: 'kerala' },
    { label: 'Delhi NCR', value: 'delhi-ncr' },
    { label: 'Jim Corbett', value: 'jim-corbett' }
  ];

  const typesList = [
    { label: 'All Types', value: 'all' },
    { label: 'Palace Hotel', value: 'Palace Hotel' },
    { label: 'Fort Resort', value: 'Fort Resort' },
    { label: 'Beach Resort', value: 'Beach Resort' },
    { label: 'Heritage Haveli', value: 'Heritage Haveli' },
    { label: 'Luxury Estate', value: 'Luxury Estate' },
    { label: 'Backwater Retreat', value: 'Backwater Retreat' }
  ];

  const filteredVenues = useMemo(() => {
    return PSR_VENUES.filter(v => {
      const matchDest = selectedDestination === 'all' || v.destinationSlug === selectedDestination;
      const matchType = selectedType === 'all' || v.propertyType === selectedType;
      const matchQuery = 
        !searchQuery || 
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchDest && matchType && matchQuery;
    });
  }, [selectedDestination, selectedType, searchQuery]);

  return (
    <section id="venues-section" className="py-20 lg:py-28 bg-[#120306] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <Building2 className="w-3 h-3 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              Hand-Curated Royal Portfolios
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured Destination Wedding Venues
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Discover verified palace hotels, cliffside beach resorts, and secluded heritage havelis. {siteConfig.SITE_NAME} holds preferred GM-tier partnership agreements across each property to secure privileged buyouts.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#1D060B] border border-[#C5A059]/30 rounded-2xl p-4 mb-10 shadow-lg space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search palace, resort, or keyword..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#120306] border border-stone-700 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
              />
              <Search className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
            </div>

            {/* Destination Dropdown */}
            <div>
              <select
                value={selectedDestination}
                onChange={e => setSelectedDestination(e.target.value)}
                className="w-full py-2.5 px-3 bg-[#120306] border border-stone-700 rounded-xl text-xs text-white focus:outline-hidden focus:border-[#DFBE78]"
              >
                {destinationsList.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>

            {/* Type Dropdown */}
            <div>
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                className="w-full py-2.5 px-3 bg-[#120306] border border-stone-700 rounded-xl text-xs text-white focus:outline-hidden focus:border-[#DFBE78]"
              >
                {typesList.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVenues.map(venue => (
            <div
              key={venue.id}
              className="bg-[#1C060A] rounded-2xl border border-[#C5A059]/20 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#DFBE78]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C060A] via-transparent to-black/30" />

                {/* Property Type Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#120306]/85 backdrop-blur-md border border-[#DFBE78]/40 text-[#DFBE78] text-[10px] font-bold uppercase tracking-wider">
                  {venue.propertyType}
                </div>

                {/* Price Tier Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#DFBE78] text-[10px] font-bold">
                  {venue.priceTier}
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] text-[#DFBE78] uppercase tracking-wider font-bold block flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#DFBE78]" />
                    {venue.destination}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white leading-tight">
                    {venue.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-3">
                  {venue.description}
                </p>

                {/* Highlights tags */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] uppercase font-bold text-[#DFBE78] tracking-wider block">
                    Venue Highlights:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {venue.highlights.slice(0, 3).map((h, hi) => (
                      <span
                        key={hi}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-stone-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick specs */}
                <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2 text-[11px] text-stone-300">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#DFBE78] shrink-0" />
                    <span>{venue.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-[#DFBE78] shrink-0" />
                    <span>{venue.guestRooms} Guest Rooms</span>
                  </div>
                </div>

                {/* Price Note */}
                <div className="p-2.5 rounded-lg bg-black/40 border border-[#C5A059]/20 text-[11px] text-stone-400">
                  <span className="text-[#DFBE78] font-bold block mb-0.5">Indicative Investment:</span>
                  <span className="line-clamp-2">{venue.startingPriceNote}</span>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-stone-800 flex items-center gap-2">
                  <button
                    onClick={() => onSelectVenue(venue)}
                    className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>View Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(venue.name)}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBE78] hover:from-[#DFBE78] hover:to-[#C5A059] text-[#1A0509] font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Check Dates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVenues.length === 0 && (
          <div className="text-center py-16 bg-[#1A0509] rounded-2xl border border-stone-800 p-8 space-y-4">
            <Building2 className="w-12 h-12 text-[#DFBE78] mx-auto opacity-50" />
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
              No matching venues found
            </h3>
            <p className="text-xs text-stone-400 max-w-md mx-auto">
              We have over 140+ unlisted private estates, palace forts, and beachfront resorts across India. Contact our venue acquisition desk for tailored private options.
            </p>
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-2.5 rounded-full bg-[#C5A059] text-[#1A0509] font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Request Custom Venue Scouting
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
