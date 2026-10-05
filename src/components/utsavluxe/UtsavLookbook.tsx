import React, { useState, useMemo } from 'react';
import { UTSAV_LOOKBOOK_ITEMS, LookbookItem } from '../../data/utsavLuxeData';

interface UtsavLookbookProps {
  onSelectItem: (item: LookbookItem) => void;
  onBookLook: (item: LookbookItem) => void;
}

export const UtsavLookbook: React.FC<UtsavLookbookProps> = ({
  onSelectItem,
  onBookLook
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeVibe, setActiveVibe] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Designs (8)' },
    { id: 'mandap', label: 'Sacred Mandaps' },
    { id: 'sangeet', label: 'Sangeet Stages' },
    { id: 'haldi', label: 'Haldi & Chooda' },
    { id: 'mehendi', label: 'Mehendi Canopies' },
    { id: 'reception', label: 'Grand Receptions' },
    { id: 'entry', label: 'Grand Entrances' },
    { id: 'dining', label: 'Banqueting Tables' }
  ];

  const vibes = [
    { id: 'all', label: 'All Styles' },
    { id: 'royal_heritage', label: 'Royal Heritage' },
    { id: 'pastel_bloom', label: 'Pastel Bloom' },
    { id: 'celestial_glamour', label: 'Celestial Glamour' },
    { id: 'modern_bohemian', label: 'Modern Bohemian' },
    { id: 'minimalist_luxury', label: 'Minimalist Luxury' },
    { id: 'tropical_coastal', label: 'Tropical Coastal' }
  ];

  const filteredItems = useMemo(() => {
    return UTSAV_LOOKBOOK_ITEMS.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchVibe = activeVibe === 'all' || item.vibe === activeVibe;
      return matchCat && matchVibe;
    });
  }, [activeCategory, activeVibe]);

  return (
    <section id="lookbook" className="py-16 sm:py-24 bg-white text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            In-House 3D Architectural Curation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            The 3D Wedding Lookbook
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Explore our curated signature scenography themes. Every look is digitally modeled in 3D CAD 
            before fabrication, allowing full customization of color palettes, flower density, and scale.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2 mb-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-stone-950 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vibe / Style Sub-Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none gap-2 mb-10">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mr-1 hidden sm:inline">
            Vibe:
          </span>
          {vibes.map(vibe => (
            <button
              key={vibe.id}
              onClick={() => setActiveVibe(vibe.id)}
              className={`px-3 py-1 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                activeVibe === vibe.id
                  ? 'bg-[#E05A47] text-white font-semibold'
                  : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200/60'
              }`}
            >
              {vibe.label}
            </button>
          ))}
        </div>

        {/* Lookbook Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-200/80 hover:border-stone-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Preview Container */}
              <div
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer"
                onClick={() => onSelectItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Badges on Top */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-stone-900 shadow-xs">
                    {item.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#E05A47] text-white shadow-xs">
                    {item.vibeLabel}
                  </span>
                </div>

                {/* Color Palette Dots */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
                  <span className="text-[10px] text-white/80 font-medium mr-1">Palette:</span>
                  {item.colorPalette.map((color, idx) => (
                    <span
                      key={idx}
                      className="w-3 h-3 rounded-full border border-white/60 shadow-xs"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>

                {/* Quick 3D Tag */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-900 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  <span>3D CAD Verified</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="font-medium">{item.locationTag}</span>
                    <span className="font-semibold text-stone-700">{item.guestCapacity}</span>
                  </div>

                  <h3
                    onClick={() => onSelectItem(item)}
                    className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#E05A47] transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlights Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-white text-stone-600 border border-stone-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Bottom Pricing & Actions */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-stone-500 block">Estimated Range</span>
                    <span className="text-xs sm:text-sm font-bold text-stone-950">
                      {item.estimatedCost}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="px-3 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onBookLook(item)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#E05A47] hover:bg-[#C94330] rounded-lg shadow-xs transition-colors"
                    >
                      Book Look
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom 3D Design Request CTA Bar */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#180A0A] to-[#2E1414] text-white p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-stone-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF8D7B]">
              Bespoke Scenography Studio
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Have a Specific Pinterest Board or Moodboard in Mind?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
              Share your reference photos or dream aesthetic with our in-house architect team. 
              We will generate a customized 3D CAD render tailored to your exact venue within 48 hours.
            </p>
          </div>

          <button
            onClick={() => onBookLook({
              id: 'custom-look',
              title: 'Custom Bespoke Moodboard 3D Render',
              category: 'mandap',
              categoryLabel: 'Custom 3D',
              vibe: 'royal_heritage',
              vibeLabel: 'Bespoke',
              image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
              gallery: [],
              locationTag: 'Your Selected Venue',
              colorPalette: ['#C5A059', '#E05A47'],
              priceTier: '₹₹₹ (Premium Luxe)',
              estimatedCost: 'Custom Quote',
              guestCapacity: 'All Capacities',
              highlights: ['Laser venue measurement', '3D Walkthrough', 'Material physical kit'],
              description: 'Custom architectural build designed exclusively for your love story.'
            })}
            className="shrink-0 px-6 py-3.5 rounded-xl font-semibold text-sm text-stone-950 bg-white hover:bg-stone-100 shadow-md transition-all hover:scale-105"
          >
            Submit My Moodboard for 3D Render
          </button>
        </div>

      </div>
    </section>
  );
};
