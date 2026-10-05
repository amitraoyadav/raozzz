import React, { useState, useMemo } from 'react';
import { RAOZY_LOOKBOOK_ITEMS, LookbookItem } from '../../data/raozyWeddingData';

interface RaozyPortfolioSectionProps {
  onSelectItem: (item: LookbookItem) => void;
  onBookLook: (item: LookbookItem) => void;
}

export const RaozyPortfolioSection: React.FC<RaozyPortfolioSectionProps> = ({
  onSelectItem,
  onBookLook
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Curated Looks' },
    { id: 'mandap', label: 'Sacred Mandaps' },
    { id: 'sangeet', label: 'Sangeet & Cocktail' },
    { id: 'haldi', label: 'Joyful Haldi' },
    { id: 'mehendi', label: 'Mehendi Carnival' },
    { id: 'reception', label: 'Black-Tie Reception' },
    { id: 'destination', label: 'Wilderness & Coast' }
  ];

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'all') return RAOZY_LOOKBOOK_ITEMS;
    return RAOZY_LOOKBOOK_ITEMS.filter((item) => item.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
            In-House Atelier Lookbook
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-4">
            The 60-Weddings Design Portfolio
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            Every concept pictured below was fabricated, engineered, and executed by Raozy’s in-house Gurugram production squad. 
            No catalog mockups; 100% real celebrations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#DFC082] text-[#171410] font-semibold shadow-md'
                    : 'bg-stone-900/80 text-stone-400 hover:text-stone-200 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#171410] rounded-2xl border border-stone-800/90 overflow-hidden hover:border-[#DFC082]/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div
                  className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer"
                  onClick={() => onSelectItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171410] via-black/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-serif text-[#DFC082] border border-[#DFC082]/30 uppercase tracking-widest">
                      {item.categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-stone-900/80 backdrop-blur-md text-[10px] font-sans text-stone-300 border border-stone-700">
                      {item.estProductionTime}
                    </span>
                  </div>

                  {/* Hover Quick Zoom Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-[#DFC082] text-[#171410] font-sans font-semibold text-xs tracking-wider uppercase shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      <span>View Blueprints &amp; Specs</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Destination & Venue */}
                  <div className="flex items-center gap-1.5 text-xs text-[#DFC082] font-medium mb-1.5">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">{item.destination} · {item.venueName}</span>
                  </div>

                  <h3
                    className="text-xl font-serif font-semibold text-white group-hover:text-[#DFC082] transition-colors mb-2 cursor-pointer"
                    onClick={() => onSelectItem(item)}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-400 leading-relaxed line-clamp-3 mb-4 font-sans">
                    {item.description}
                  </p>

                  {/* Color Palette Dots */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider">Palette:</span>
                    <div className="flex items-center gap-1.5">
                      {item.palette.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-stone-700 shadow-sm"
                          style={{ backgroundColor: color }}
                          title={`Color swatch ${color}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Production Key Elements */}
                  <div className="space-y-1 pt-3 border-t border-stone-800/80">
                    {item.elements.slice(0, 2).map((el, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-stone-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DFC082]" />
                        <span className="truncate">{el}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="p-6 pt-0 flex gap-2">
                <button
                  type="button"
                  onClick={() => onSelectItem(item)}
                  className="flex-1 py-2 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white text-xs font-sans tracking-wide transition border border-stone-800"
                >
                  Specs &amp; Photos
                </button>
                <button
                  type="button"
                  onClick={() => onBookLook(item)}
                  className="flex-1 py-2 rounded bg-[#DFC082]/15 hover:bg-[#DFC082] text-[#DFC082] hover:text-[#171410] border border-[#DFC082]/40 text-xs font-serif font-semibold tracking-wider transition"
                >
                  Book This Look
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
