import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight, Sparkles, Building, Waves, Mountain, Crown, Globe } from 'lucide-react';
import { DESTINATIONS_DATA, DESTINATION_CATEGORIES, DestinationItem } from '../../data/site74Data';

interface Site74DestinationDiscoveryProps {
  onSelectDestination: (dest: DestinationItem) => void;
  onExploreAll: () => void;
}

export const Site74DestinationDiscovery: React.FC<Site74DestinationDiscoveryProps> = ({
  onSelectDestination,
  onExploreAll
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredDestinations = DESTINATIONS_DATA.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="destinations-discovery" className="py-20 lg:py-28 px-5 sm:px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37] block">
              Curated Geographies
            </span>
            <h2 className="font-serif font-medium text-3xl sm:text-5xl text-[#141210] leading-tight">
              Discover Iconic Wedding Destinations
            </h2>
            <p className="text-sm sm:text-base text-[#6B6155] leading-relaxed">
              Explore 18 handpicked destination hubs offering private island barges in Udaipur, coastal shores in Goa, fortress ramparts in Jaipur, and high-altitude Himalayan ridges.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#8C6D37] hover:text-[#141210] border-b border-[#C5A059] pb-1 transition-colors self-start cursor-pointer"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E8E1D5]">
          {DESTINATION_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#141210] text-[#E8DFD3] font-bold shadow-md'
                  : 'bg-white text-[#6B6155] border border-[#E8E1D5] hover:border-[#141210]'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                activeCategory === cat.id ? 'bg-[#C5A059] text-[#141210] font-bold' : 'bg-stone-100 text-stone-600'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map(dest => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Visual Imagery */}
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-wider uppercase bg-[#141210]/80 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-full border border-white/20">
                      {dest.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider uppercase bg-white/90 text-[#141210] font-bold px-2 py-0.5 rounded shadow-xs">
                      {dest.venueCount} Properties
                    </span>
                  </div>

                  {/* Bottom Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-stone-300">
                      {dest.stateCountry}
                    </span>
                    <h3 className="font-serif font-medium text-2xl text-white">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#52483E] leading-relaxed line-clamp-2">
                    {dest.description}
                  </p>

                  <div className="pt-3 border-t border-[#F5EFE5] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[#6B6155]">
                      <span className="flex items-center gap-1.5 font-mono text-[11px]">
                        <Calendar className="w-3.5 h-3.5 text-[#8C6D37]" /> Best Weather:
                      </span>
                      <span className="text-[#141210] font-medium text-[11px] text-right">
                        {dest.bestSeason.split('(')[0]}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[#6B6155]">
                      <span className="flex items-center gap-1.5 font-mono text-[11px]">
                        <Users className="w-3.5 h-3.5 text-[#8C6D37]" /> Capacity:
                      </span>
                      <span className="text-[#141210] font-medium text-[11px]">
                        {dest.capacityRange}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom footer button */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-[#F5EFE5] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#8A7B6E] block">Est. Packages</span>
                    <span className="font-serif font-bold text-xs text-[#8C6D37]">{dest.startingPrice.split('(')[0]}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold tracking-wider uppercase text-[#141210] group-hover:text-[#8C6D37] transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site74DestinationDiscovery;
