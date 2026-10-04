import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  Clock,
  Building,
  Users,
  Compass,
} from 'lucide-react';
import { DESTINATIONS_DATA, DestinationItem } from '../../data/devdasWeddingData';

interface DevdasDestinationsProps {
  onOpenDestination: (slug: string) => void;
  onOpenCalculator: () => void;
}

export const DevdasDestinations: React.FC<DevdasDestinationsProps> = ({
  onOpenDestination,
  onOpenCalculator,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rajasthan' | 'coastal' | 'nature' | 'international'>('all');

  const filteredDestinations = DESTINATIONS_DATA.filter((dest) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'rajasthan') return dest.stateOrCountry.toLowerCase().includes('rajasthan');
    if (activeFilter === 'coastal') return dest.slug.includes('goa') || dest.slug.includes('kerala');
    if (activeFilter === 'nature') return dest.slug.includes('corbett') || dest.slug.includes('kerala');
    if (activeFilter === 'international') return dest.stateOrCountry.toLowerCase().includes('international');
    return true;
  });

  return (
    <section id="destinations" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#7A1C30] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Wedding Locations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            TOP WEDDING DESTINATIONS
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From majestic royal Mewar palaces to barefoot sunset beaches and riverfront wilderness lodges, discover venues where we have on-ground operational teams.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {[
            { id: 'all', label: 'All Destinations' },
            { id: 'rajasthan', label: 'Rajasthan Palaces' },
            { id: 'coastal', label: 'Goa & Kerala Shores' },
            { id: 'nature', label: 'Corbett & Mountain Wilderness' },
            { id: 'international', label: 'Thailand & International' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#7A1C30] text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onOpenDestination(dest.slug)}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#7A1C30] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={dest.coverImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                  {/* Top Vibe Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#7A1C30] text-white text-[11px] font-bold shadow">
                      {dest.vibe}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-white/10 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      <span>{dest.bestSeason.split('(')[0].trim()}</span>
                    </span>
                  </div>

                  {/* Title & Tagline overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif font-extrabold text-2xl text-white group-hover:text-amber-300 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 font-medium">
                      {dest.tagline}
                    </p>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 space-y-4 text-xs">
                  <p className="text-slate-600 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-500" />
                        <span>Ideal Guest Count:</span>
                      </span>
                      <span className="font-bold text-slate-900">{dest.avgGuestCount}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-700">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Est. 2-Night Budget:</span>
                      </span>
                      <span className="font-bold text-[#7A1C30]">{dest.estBudgetRange.split('(')[0].trim()}</span>
                    </div>
                  </div>

                  {/* Featured Venues */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Selected Partner Venues:
                    </div>
                    <div className="space-y-1">
                      {dest.venues.slice(0, 2).map((venue, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between py-1 border-b border-slate-100 last:border-none text-slate-800 font-medium"
                        >
                          <span className="truncate pr-2">• {venue.name}</span>
                          <span className="text-[10px] text-slate-500 shrink-0">{venue.capacity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#7A1C30]">
                <span>View Full Venues &amp; Itinerary</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Calculator Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#7A1C30]/90 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-900/40 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Transparent Wedding Planning
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Not Sure Which Destination Fits Your Budget?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Use our interactive destination cost calculator to estimate room, banquet, decor, and flight expenses across all locations.
            </p>
          </div>

          <button
            onClick={onOpenCalculator}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer whitespace-nowrap"
          >
            Launch Cost Estimator
          </button>
        </div>
      </div>
    </section>
  );
};
