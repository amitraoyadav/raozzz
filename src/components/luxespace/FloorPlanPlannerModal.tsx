import React, { useState } from 'react';
import { X, Sparkles, LayoutGrid, Users, Check, ArrowRight, Layers, Maximize2 } from 'lucide-react';

interface FloorPlanPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookTour?: () => void;
}

export const FloorPlanPlannerModal: React.FC<FloorPlanPlannerModalProps> = ({
  isOpen,
  onClose,
  onOpenBookTour
}) => {
  const [layoutMode, setLayoutMode] = useState<'banquet' | 'cocktail' | 'ceremony' | 'intimate'>('banquet');

  if (!isOpen) return null;

  const layoutDetails = {
    banquet: {
      title: 'Seated Banquet & Dance Floor',
      capacity: '150 Seated Guests',
      description: 'Our most popular layout for luxury wedding receptions. Features fifteen 60-inch round tables (10 guests per table), a grand head table against the marble feature wall, 20x20 ft dance floor, DJ booth, and dual bar stations.',
      specs: [
        { label: 'Guest Seating', val: '150 Guests (15 Round Tables)' },
        { label: 'Dance Floor', val: '20ft × 20ft Central Oak/Noir Floor' },
        { label: 'Head Table', val: 'Kings Table for 12 along Marble Wall' },
        { label: 'Bar Service', val: 'Double Custom Mobile Bar Stations' }
      ]
    },
    cocktail: {
      title: 'High-Energy Cocktail Soirée',
      capacity: '200 Standing / Mixed Lounge',
      description: 'Ideal for milestone birthdays, corporate galas, and lively evening receptions. Maximizes circulation with 12 high-top cocktail tables, perimeter velvet lounge vignette sofas, 360-degree bar access, and an expansive dance floor.',
      specs: [
        { label: 'Guest Capacity', val: '200 Guests Fluid Movement' },
        { label: 'Cocktail Tables', val: '12 Black Marble High-Tops' },
        { label: 'Lounge Vignettes', val: '4 Velvet Sectional Seating Areas' },
        { label: 'Stage / DJ Area', val: 'Dedicated Performance Zone' }
      ]
    },
    ceremony: {
      title: 'Architectural Wedding Ceremony',
      capacity: '150 Theater Seated',
      description: 'An ethereal ceremony aisle positioned directly leading to the floor-to-ceiling bookmatched marble wall. Soft daylight from frosted windows during daytime, or moody candlelit glow under ring chandeliers.',
      specs: [
        { label: 'Aisle Width', val: '6-ft Wide Grand Walkway' },
        { label: 'Ceremony Seating', val: '150 Modern Black Chairs (2 Banks)' },
        { label: 'Altar Focal', val: 'Marble Accent Wall with Floral Arch' },
        { label: 'Bridal Entrance', val: 'Direct Access from Private Bridal Suite' }
      ]
    },
    intimate: {
      title: 'Intimate Feast & Micro-Wedding',
      capacity: '60 - 80 Seated Guests',
      description: 'Designed for baby showers, bridal luncheons, and intimate private family dinners. Features continuous long banquet wooden feasting tables, personalized place settings, and expansive lounge conversation areas.',
      specs: [
        { label: 'Guest Seating', val: '60 - 80 Guests' },
        { label: 'Table Setup', val: 'Long King Banquet Feasting Rows' },
        { label: 'Gift / Dessert Area', val: 'Dedicated Marble Display Island' },
        { label: 'Atmosphere', val: 'Warm Ambient Amber Perimeter Wash' }
      ]
    }
  };

  const current = layoutDetails[layoutMode];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#12110e] text-[#f4efe6] border border-[#2d2922] rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200 font-sans">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1c1a15] to-[#141310] border-b border-[#2d2922] p-5 sm:p-6 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#c5a059] text-[11px] font-mono uppercase tracking-widest mb-1">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Interactive Space Visualizer</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#f4efe6]">
              LuxeSpace HTX Floor Plan &amp; Capacity
            </h3>
            <p className="text-xs text-[#a09a8f] mt-0.5">
              Explore how our modern architectural venue adapts seamlessly to your guest count.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#1e1c18] hover:bg-[#2c2923] text-[#a09a8f] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Mode Switcher */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => setLayoutMode('banquet')}
              className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                layoutMode === 'banquet'
                  ? 'bg-[#1e1c17] border-[#c5a059] text-white shadow-md'
                  : 'bg-[#151411] border-[#2d2922] text-[#8e877c] hover:border-[#423d33]'
              }`}
            >
              <div className="text-[10px] font-mono text-[#c5a059]">01</div>
              <div className="font-bold text-xs mt-0.5">Banquet &amp; Dance</div>
              <div className="text-[10px] text-[#7d776d] mt-1">150 Seated</div>
            </button>

            <button
              onClick={() => setLayoutMode('cocktail')}
              className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                layoutMode === 'cocktail'
                  ? 'bg-[#1e1c17] border-[#c5a059] text-white shadow-md'
                  : 'bg-[#151411] border-[#2d2922] text-[#8e877c] hover:border-[#423d33]'
              }`}
            >
              <div className="text-[10px] font-mono text-[#c5a059]">02</div>
              <div className="font-bold text-xs mt-0.5">Cocktail Soirée</div>
              <div className="text-[10px] text-[#7d776d] mt-1">200 Reception</div>
            </button>

            <button
              onClick={() => setLayoutMode('ceremony')}
              className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                layoutMode === 'ceremony'
                  ? 'bg-[#1e1c17] border-[#c5a059] text-white shadow-md'
                  : 'bg-[#151411] border-[#2d2922] text-[#8e877c] hover:border-[#423d33]'
              }`}
            >
              <div className="text-[10px] font-mono text-[#c5a059]">03</div>
              <div className="font-bold text-xs mt-0.5">Ceremony Aisle</div>
              <div className="text-[10px] text-[#7d776d] mt-1">150 Theater</div>
            </button>

            <button
              onClick={() => setLayoutMode('intimate')}
              className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                layoutMode === 'intimate'
                  ? 'bg-[#1e1c17] border-[#c5a059] text-white shadow-md'
                  : 'bg-[#151411] border-[#2d2922] text-[#8e877c] hover:border-[#423d33]'
              }`}
            >
              <div className="text-[10px] font-mono text-[#c5a059]">04</div>
              <div className="font-bold text-xs mt-0.5">Intimate Feast</div>
              <div className="text-[10px] text-[#7d776d] mt-1">60-80 Guests</div>
            </button>
          </div>

          {/* Schematic Diagram Preview */}
          <div className="bg-[#0e0d0b] border border-[#2d2922] rounded-xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-[#8e877c] font-mono border-b border-[#22201b] pb-2 mb-4">
              <span>ARCHITECTURAL FLOOR SCHEMATIC</span>
              <span className="text-[#c5a059] font-bold">{current.capacity}</span>
            </div>

            {/* Simulated Venue Layout View */}
            <div className="h-64 sm:h-72 w-full bg-[#141310] rounded-lg border border-[#26231c] relative flex flex-col justify-between p-4">
              {/* Marble wall top indicator */}
              <div className="w-full py-1.5 bg-gradient-to-r from-[#22201a] via-[#3a3529] to-[#22201a] border border-[#484132] text-center rounded text-[10px] font-mono text-[#c5a059] tracking-widest flex items-center justify-center gap-2">
                <span>[NORTH FEATURE WALL] BOOKMATCHED MARBLE &amp; LIGHTING</span>
              </div>

              {/* Dynamic layout elements representation */}
              {layoutMode === 'banquet' && (
                <div className="flex-1 my-3 flex flex-col justify-between">
                  <div className="flex justify-center gap-2">
                    <span className="px-3 py-1 bg-[#201d16] border border-[#c5a059]/40 rounded text-[10px] text-white font-mono">
                      Head Table (12 VIPS)
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => (
                      <div key={t} className="p-2 bg-[#1b1a15] border border-[#302c23] rounded-full text-[9px] text-[#a09a8f] flex items-center justify-center flex-col">
                        <span>T-{t}</span>
                        <span className="text-[8px] text-[#c5a059]">10p</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center px-4">
                    <span className="px-2.5 py-1 bg-[#1c1a15] border border-[#332f25] rounded text-[9px] text-stone-400">Bar 1</span>
                    <span className="px-4 py-1.5 bg-[#252219] border border-[#c5a059] rounded text-[10px] text-[#c5a059] font-mono">20x20 DANCE FLOOR</span>
                    <span className="px-2.5 py-1 bg-[#1c1a15] border border-[#332f25] rounded text-[9px] text-stone-400">DJ Booth</span>
                  </div>
                </div>
              )}

              {layoutMode === 'cocktail' && (
                <div className="flex-1 my-3 flex flex-col justify-between">
                  <div className="flex justify-around items-center">
                    <span className="px-3 py-1 bg-[#232018] border border-[#c5a059]/50 rounded text-[9px] text-[#c5a059]">Lounge Vignette A</span>
                    <span className="px-3 py-1 bg-[#232018] border border-[#c5a059]/50 rounded text-[9px] text-[#c5a059]">Lounge Vignette B</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2 text-center py-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c) => (
                      <div key={c} className="p-1.5 bg-[#1f1d17] border border-[#3d372c] rounded-full text-[8px] text-[#a09a8f]">
                        HT-{c}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center px-4">
                    <span className="px-3 py-1.5 bg-[#262319] border border-[#c5a059] rounded text-[10px] text-white">Central Champagne Bar</span>
                    <span className="px-3 py-1 bg-[#1f1d17] border border-[#332e24] rounded text-[9px] text-stone-400">Live Sax / DJ Stage</span>
                  </div>
                </div>
              )}

              {layoutMode === 'ceremony' && (
                <div className="flex-1 my-3 flex flex-col justify-between items-center">
                  <div className="px-4 py-1 bg-[#262217] border border-[#c5a059] rounded text-[10px] text-[#c5a059] font-mono">
                    CEREMONY ALTAR / FLORAL ARCH
                  </div>
                  <div className="flex items-center justify-between w-full px-6 py-2">
                    <div className="space-y-1 text-center">
                      <div className="px-4 py-1.5 bg-[#1b1a15] border border-[#332f26] rounded text-[9px] text-stone-300">Bank Left (75 Guests)</div>
                      <div className="text-[8px] text-stone-500">10 Rows of Modern Chairs</div>
                    </div>
                    <div className="h-24 w-8 border-x-2 border-dashed border-[#c5a059]/50 flex items-center justify-center">
                      <span className="text-[8px] text-[#c5a059] rotate-90 font-mono tracking-widest">AISLE</span>
                    </div>
                    <div className="space-y-1 text-center">
                      <div className="px-4 py-1.5 bg-[#1b1a15] border border-[#332f26] rounded text-[9px] text-stone-300">Bank Right (75 Guests)</div>
                      <div className="text-[8px] text-stone-500">10 Rows of Modern Chairs</div>
                    </div>
                  </div>
                  <div className="text-[9px] text-stone-400 font-mono">
                    [SOUTH MAIN ENTRANCE &amp; BRIDAL SUITE ENTRY]
                  </div>
                </div>
              )}

              {layoutMode === 'intimate' && (
                <div className="flex-1 my-3 flex flex-col justify-between">
                  <div className="flex justify-center items-center">
                    <span className="px-3 py-1 bg-[#221f17] border border-[#c5a059]/50 rounded text-[9px] text-[#c5a059]">
                      Welcome Drink &amp; Photo Installation
                    </span>
                  </div>
                  <div className="flex justify-around items-center py-2">
                    <div className="p-3 bg-[#1e1b15] border border-[#3b3529] rounded-lg text-center">
                      <div className="font-mono text-xs text-white">Banquet Table 01</div>
                      <div className="text-[9px] text-[#c5a059] mt-0.5">35 Guests Seated</div>
                    </div>
                    <div className="p-3 bg-[#1e1b15] border border-[#3b3529] rounded-lg text-center">
                      <div className="font-mono text-xs text-white">Banquet Table 02</div>
                      <div className="text-[9px] text-[#c5a059] mt-0.5">35 Guests Seated</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-4">
                    <span className="px-3 py-1 bg-[#1a1813] border border-[#302b21] rounded text-[9px] text-stone-400">Dessert Island</span>
                    <span className="px-3 py-1 bg-[#1a1813] border border-[#302b21] rounded text-[9px] text-stone-400">Gift Vignette</span>
                  </div>
                </div>
              )}

              {/* South entrance indicator */}
              <div className="w-full py-1 bg-[#181612] border-t border-[#26221a] text-center text-[9px] font-mono text-[#7d776d]">
                [SOUTH WALL] FROSTED ARCHITECTURAL WINDOWS &bull; POLISHED CONCRETE FLOORING
              </div>
            </div>
          </div>

          {/* Details & Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-serif text-lg text-white mb-1.5">{current.title}</h4>
              <p className="text-xs text-[#a09a8f] leading-relaxed mb-3">
                {current.description}
              </p>
              <div className="p-2.5 bg-[#171511] border border-[#2d2922] rounded-lg text-[11px] text-[#c5a059] flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0 text-[#c5a059]" />
                <span>Our venue crew handles 100% of the table and chair physical setup.</span>
              </div>
            </div>

            <div className="space-y-2 bg-[#171612] p-3.5 rounded-xl border border-[#2a2720]">
              <div className="text-[10px] font-mono uppercase text-[#c5a059] tracking-wider mb-1">
                Layout Specifications
              </div>
              {current.specs.map((s, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-[#23201a] last:border-0">
                  <span className="text-[#8e877c]">{s.label}:</span>
                  <span className="font-semibold text-white">{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#24211b]">
            <div className="text-xs text-[#8e877c]">
              Need a bespoke seating diagram? We craft personalized floor plans in our client portal.
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenBookTour) onOpenBookTour();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-[#c5a059] hover:bg-[#d4b06a] text-black font-bold uppercase tracking-widest text-xs cursor-pointer transition-colors"
              >
                Schedule Private Walkthrough
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
