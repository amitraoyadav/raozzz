import React, { useState } from 'react';
import { Wine, Sparkles, Flame, Check, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../../data/site79Data';
import { site79Config } from '../../config/site79Config';

interface Site79MenuPageProps {
  onOpenTableBooking: () => void;
}

export const Site79MenuPage: React.FC<Site79MenuPageProps> = ({
  onOpenTableBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'cocktails' | 'champagne' | 'spirits' | 'tapas' | 'sheesha'
  >('all');

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'cocktails', label: 'Signature Cocktails' },
    { id: 'champagne', label: 'Champagne & Sparklers' },
    { id: 'spirits', label: 'Single Malts & Spirits' },
    { id: 'tapas', label: 'Artisanal Tapas' },
    { id: 'sheesha', label: 'Herbal Sheesha' }
  ];

  const filtered =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#050505] text-white min-h-screen font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          <Wine className="w-3.5 h-3.5" />
          <span>Liquid Alchemy & Fine Dining</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
          Bar & Tapas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Collection</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed">
          Crafted by international beverage alchemists and culinary masters. Enjoy bespoke gold-garnished mixology, vintage prestige cuvées, and refined midnight gastronomy.
        </p>

        {/* 100% Redeemable Note */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DFB759]/15 border border-[#DFB759]/40 text-[#DFB759] text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>All online table reservations include 100% redeemable credit across this entire menu.</span>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black shadow-md'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#0c0a07] border border-white/10 hover:border-[#DFB759]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-white group-hover:text-[#DFB759] transition-colors leading-tight">
                      {item.name}
                    </h2>
                    {item.isSignature && (
                      <span className="px-2 py-0.5 rounded-full bg-[#DFB759]/20 border border-[#DFB759]/40 text-[#DFB759] text-[9px] font-black uppercase tracking-widest">
                        Signature
                      </span>
                    )}
                  </div>

                  <span className="font-['Cinzel',serif] text-lg sm:text-xl font-black text-[#DFB759] shrink-0 tabular-nums">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 uppercase tracking-wider">
                <span>Category: {item.category}</span>
                <span className="text-[#DFB759]/80 font-semibold">100% Redeemable on VIP Table</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Bottle Service Bottom Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#17130a] via-[#0f0d07] to-[#17130a] border border-[#DFB759]/40 p-8 sm:p-12 text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black font-['Cinzel',serif] text-white uppercase">
            Planning VIP Bottle Service Tonight?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            Reserve your mezzanine or stage-side booth online to receive 20% off minimum spend requirements and enjoy dedicated butler service.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTableBooking}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
            >
              Reserve Table • 20% Discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
