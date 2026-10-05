import React, { useState } from 'react';
import { MapPin, Calendar, Users, Plane, ArrowRight, Sparkles } from 'lucide-react';
import { DESTINATIONS_DATA, DestinationItem } from '../../data/site75Data';

interface Site75DestinationsProps {
  onSelectDestination: (destination: DestinationItem) => void;
  onExploreAll?: () => void;
}

export const Site75Destinations: React.FC<Site75DestinationsProps> = ({
  onSelectDestination,
  onExploreAll
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'India' | 'International'>('all');

  const filteredDestinations = activeFilter === 'all'
    ? DESTINATIONS_DATA
    : DESTINATIONS_DATA.filter(d => d.region === activeFilter);

  return (
    <section id="destinations-section" className="py-24 sm:py-32 bg-[#080B12] text-white border-t border-[#20293D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            Curated Sanctuaries
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Where Everlasting Vows <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#D4AF37]">
              Find Their Stage
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            From floating palaces on Lake Pichola to neoclassical villas on Lake Como and cliffside ocean pavilions in Bali, we hold keys to the world’s most coveted wedding sanctuaries.
          </p>
        </div>

        {/* Region Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Global Sanctuaries' },
            { id: 'India', label: 'Royal India & Coastlines' },
            { id: 'International', label: 'International Luxe' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#D4AF37] text-[#080B12] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#131A29] text-slate-300 hover:text-white border border-[#20293D]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.slice(0, 6).map(dest => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-[#0E131F] rounded-3xl overflow-hidden border border-[#20293D] hover:border-[#D4AF37]/60 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5 shadow-2xl cursor-pointer"
            >
              <div>
                {/* Visual Imagery Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/30 to-transparent" />
                  
                  {/* Region Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#080B12]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
                    {dest.region}
                  </span>

                  {/* Venues Count Pill */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#080B12]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                    {dest.featuredVenues.length} Premier Estates
                  </span>

                  {/* Destination Headline on Image */}
                  <div className="absolute bottom-4 left-5 right-5 text-left">
                    <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#D4AF37] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-[11px] text-[#D4AF37] font-mono tracking-wider uppercase">
                      {dest.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Meta Details */}
                <div className="p-6 text-left space-y-4">
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-3">
                    {dest.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="text-[11px] text-stone-400">Best Season:</span>
                      <span className="text-[11px] font-medium text-slate-200">{dest.bestSeason}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="text-[11px] text-stone-400">Ideal Size:</span>
                      <span className="text-[11px] font-medium text-slate-200">{dest.averageGuestRange}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Plane className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="text-[11px] text-stone-400">Hub:</span>
                      <span className="text-[11px] font-medium text-slate-200 truncate">{dest.airportHub}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-[#D4AF37] group-hover:underline">
                  View Venue Portfolios &amp; Pricing →
                </span>
                <span className="w-7 h-7 rounded-full bg-[#131A29] border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-[#D4AF37] group-hover:text-[#080B12] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All CTAs */}
        {onExploreAll && (
          <div className="mt-14 text-center">
            <button
              onClick={onExploreAll}
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] hover:text-white border border-[#D4AF37]/50 hover:border-[#D4AF37] bg-transparent hover:bg-[#D4AF37]/10 transition-all cursor-pointer"
            >
              Explore All 12+ Worldwide Destination Guides →
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Site75Destinations;
