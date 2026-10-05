import React, { useState } from 'react';
import {
  Waves,
  Droplets,
  Sun,
  BedDouble,
  Coffee,
  Wine,
  CupSoda,
  Sparkles,
  Tv,
  Wifi,
  ShieldCheck,
  Wind,
  Shirt,
  Maximize2,
  Bath,
  Thermometer,
  Layers,
  ChevronRight
} from 'lucide-react';
import { AMENITIES_DATA, AmenityItem } from '../../data/site78Data';

const ICON_MAP: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-6 h-6 text-[#747157]" />,
  Droplets: <Droplets className="w-6 h-6 text-[#747157]" />,
  Sun: <Sun className="w-6 h-6 text-[#747157]" />,
  BedDouble: <BedDouble className="w-6 h-6 text-[#747157]" />,
  Coffee: <Coffee className="w-6 h-6 text-[#747157]" />,
  Wine: <Wine className="w-6 h-6 text-[#747157]" />,
  CupSoda: <CupSoda className="w-6 h-6 text-[#747157]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#747157]" />,
  Tv: <Tv className="w-6 h-6 text-[#747157]" />,
  Wifi: <Wifi className="w-6 h-6 text-[#747157]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#747157]" />,
  Wind: <Wind className="w-6 h-6 text-[#747157]" />,
  Shirt: <Shirt className="w-6 h-6 text-[#747157]" />,
  Maximize2: <Maximize2 className="w-6 h-6 text-[#747157]" />,
  Bath: <Bath className="w-6 h-6 text-[#747157]" />,
  Thermometer: <Thermometer className="w-6 h-6 text-[#747157]" />
};

export const Site78AmenitiesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pool_outdoor' | 'bedding' | 'beverage_dining' | 'bathroom' | 'technology'>('all');

  const filteredAmenities = filter === 'all'
    ? AMENITIES_DATA
    : AMENITIES_DATA.filter(a => a.category === filter);

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#222222] relative font-['Jost',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>Curated Comforts</span>
            <span className="w-8 h-[1px] bg-[#B99D75]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1C] leading-[1.12]">
            Exclusive Amenities at Aurelia
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
            <span className="text-[#B99D75] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            From temperature-moderated private plunge pools to Italian espresso machines, organic botanical formulations, and Egyptian cotton bedding—every detail has been meticulously selected for effortless luxury.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Amenities' },
            { id: 'pool_outdoor', label: 'Pool & Outdoor' },
            { id: 'bedding', label: 'Linen & Bedding' },
            { id: 'beverage_dining', label: 'Espresso & Minibar' },
            { id: 'bathroom', label: 'Bath & Spa' },
            { id: 'technology', label: 'Tech & Wi-Fi' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#747157] text-white shadow-sm'
                  : 'bg-[#F3EEE7] text-stone-700 hover:bg-[#e7dfd4]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAmenities.map(item => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5DFD7] hover:border-[#B99D75] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F3EEE7] group-hover:bg-[#747157]/15 flex items-center justify-center transition-colors">
                    {ICON_MAP[item.icon] || <Sparkles className="w-6 h-6 text-[#747157]" />}
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-[#747157]/10 text-[#747157] px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-['Cormorant',serif] font-bold text-xl text-[#1C1C1C] group-hover:text-[#747157] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F3EEE7] flex items-center justify-between text-[11px] font-semibold text-[#747157] tracking-wider uppercase">
                <span>Standard in all rooms</span>
                <span className="text-[#B99D75]">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
