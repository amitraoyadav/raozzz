import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Sparkles, 
  Calendar, 
  Users, 
  Wallet, 
  ArrowRight, 
  Building2, 
  ChevronRight,
  Plane
} from 'lucide-react';
import { PSR_DESTINATIONS, DestinationItem } from '../../data/psrWeddingsData';

interface PsrDestinationsSectionProps {
  onSelectDestination: (slug: string) => void;
  onOpenConsultation: (initialDestination?: string) => void;
}

export const PsrDestinationsSection: React.FC<PsrDestinationsSectionProps> = ({
  onSelectDestination,
  onOpenConsultation
}) => {
  const [filterVibe, setFilterVibe] = useState<'All' | 'Palatial & Royal' | 'Beachfront & Coastal' | 'Backwaters & Nature' | 'Jungle & Mountain' | 'Heritage & Modern'>('All');

  const filteredDestinations = useMemo(() => {
    if (filterVibe === 'All') return PSR_DESTINATIONS;
    return PSR_DESTINATIONS.filter(d => d.vibe === filterVibe);
  }, [filterVibe]);

  return (
    <section id="destinations-section" className="py-20 lg:py-28 bg-[#180408] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <Sparkles className="w-3 h-3 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              Iconic Wedding Landscapes
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Curated Indian Wedding Destinations
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Every love story is unique, and so is the setting it deserves. Explore India’s most coveted wedding regions—from centuries-old royal Mewari palaces to serene Arabian Sea shores.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {(['All', 'Palatial & Royal', 'Beachfront & Coastal', 'Backwaters & Nature', 'Jungle & Mountain', 'Heritage & Modern'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilterVibe(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                filterVibe === tab
                  ? 'bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] shadow-md font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
              }`}
            >
              {tab === 'All' ? 'All Destinations' : tab}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map(dest => (
            <div
              key={dest.id}
              className="bg-[#20070B] rounded-2xl border border-[#C5A059]/25 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#DFBE78]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Container with Badges */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.coverImage}
                  alt={`${dest.name} Destination Wedding`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20070B] via-transparent to-black/30" />

                {/* Vibe Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A0509]/80 backdrop-blur-md border border-[#DFBE78]/40 text-[#DFBE78] text-[10px] font-bold uppercase tracking-wider">
                  {dest.vibe}
                </div>

                {/* Venues Count Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-[#DFBE78]" />
                  <span>{dest.venuesCount} Curated Venues</span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFBE78] font-bold block">
                    {dest.stateOrRegion}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-tight">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs text-[#DFBE78] italic font-serif">
                    "{dest.tagline}"
                  </p>
                  <p className="text-xs text-stone-300 leading-relaxed font-light line-clamp-2">
                    {dest.shortDesc}
                  </p>
                </div>

                {/* Quick Key Specs */}
                <div className="pt-2 border-t border-stone-800 grid grid-cols-2 gap-2 text-[11px] text-stone-300">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#DFBE78] shrink-0" />
                    <span className="truncate">{dest.avgGuestCount}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#DFBE78] shrink-0" />
                    <span className="truncate">{dest.bestSeason.split('(')[0]}</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-1.5 text-[#DFBE78] font-medium">
                    <Wallet className="w-3.5 h-3.5 text-[#DFBE78] shrink-0" />
                    <span>Est. Budget: {dest.estBudgetRange}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-800 flex items-center gap-2">
                  <button
                    onClick={() => onSelectDestination(dest.slug)}
                    className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(dest.name)}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBE78] hover:from-[#DFBE78] hover:to-[#C5A059] text-[#1A0509] font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Plan Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
