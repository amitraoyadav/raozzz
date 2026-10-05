import React, { useState, useMemo } from 'react';
import { RAOZY_DECOR_LIBRARY, DecorLibraryItem } from '../../data/raozyWeddingData';

interface RaozyDecorLibraryProps {
  onSelectDecor: (item: DecorLibraryItem) => void;
  onBookDecor: (item: DecorLibraryItem) => void;
}

export const RaozyDecorLibrary: React.FC<RaozyDecorLibraryProps> = ({
  onSelectDecor,
  onBookDecor
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Decor Library (8)' },
    { id: 'ceiling', label: 'Ceilings & Floral Drops' },
    { id: 'mandap', label: 'Sacred Mandaps' },
    { id: 'sangeet', label: 'Sangeet & Stages' },
    { id: 'haldi', label: 'Haldi & Swings' },
    { id: 'mehendi', label: 'Mehendi Carnivals' },
    { id: 'reception', label: 'Grand Receptions' },
    { id: 'entry', label: 'Entrance Tunnels' },
    { id: 'tablescape', label: 'Banqueting Tables' }
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return RAOZY_DECOR_LIBRARY;
    return RAOZY_DECOR_LIBRARY.filter(i => i.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="decor-library" className="py-16 sm:py-24 bg-stone-50 text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#800020]/10 text-[#800020] text-xs font-bold uppercase tracking-wider mb-3">
            In-House Scenography Studio
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            The Decor Library
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Browse our curated signature scenography archives. Every structural set, floral ceiling, 
            and sacred mandap is pre-modeled in 3D CAD before custom fabrication in our workshops.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#800020] text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Decor Library Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Cover */}
                <div
                  className="relative h-60 overflow-hidden cursor-pointer"
                  onClick={() => onSelectDecor(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {item.categoryLabel}
                  </div>

                  {/* Palette Dots Overlay */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full">
                    {item.palette.map((color, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-white/60 shadow-xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-3 right-3 text-[10px] text-amber-200 bg-[#800020]/90 px-2 py-0.5 rounded font-mono font-medium">
                    3D Verified
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="text-[11px] font-semibold text-[#800020] uppercase tracking-wider">
                    {item.coupleTag} · {item.venueTag}
                  </div>

                  <h3
                    onClick={() => onSelectDecor(item)}
                    className="font-serif text-base font-bold text-stone-900 group-hover:text-[#800020] transition-colors cursor-pointer leading-snug"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Elements Tags */}
                  <div className="pt-2 flex flex-wrap gap-1">
                    {item.keyElements.slice(0, 2).map((el, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                        {el}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectDecor(item)}
                  className="px-3 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => onBookDecor(item)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#800020] hover:bg-[#66001A] rounded-lg shadow-xs transition-colors"
                >
                  Book Look
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
