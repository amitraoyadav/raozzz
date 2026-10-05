import React from 'react';
import { Sun, Leaf, Droplet, Trees, Sparkles, CheckCircle2 } from 'lucide-react';
import { SUSTAINABILITY_PILLARS } from '../../data/site78Data';

const ICONS = [
  <Sun className="w-6 h-6 text-[#747157]" />,
  <Leaf className="w-6 h-6 text-[#747157]" />,
  <Sparkles className="w-6 h-6 text-[#747157]" />,
  <Droplet className="w-6 h-6 text-[#747157]" />
];

export const Site78Sustainability: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#222222] relative font-['Jost',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>Conscious Hospitality</span>
            <span className="w-8 h-[1px] bg-[#B99D75]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1C] leading-[1.12]">
            Sustainably Made Luxury
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
            <span className="text-[#B99D75] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            We believe the most luxurious experiences are those that honor their natural surroundings. Our eco-sensitive initiatives preserve Morjim’s delicate coastal biosphere while delivering world-class hospitality.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#F3EEE7]/50 rounded-2xl p-7 border border-[#E5DFD7] hover:border-[#747157] hover:shadow-xl transition-all duration-300 space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs group-hover:bg-[#747157]/15 transition-colors">
                  {ICONS[idx]}
                </div>
                <h3 className="font-['Cormorant',serif] font-bold text-xl sm:text-2xl text-[#1C1C1C] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD7] text-[11px] font-semibold text-[#747157] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B99D75]" />
                <span>Active Resort Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
