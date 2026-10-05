import React from 'react';
import { Sparkles, ArrowRight, Waves } from 'lucide-react';
import { WELLNESS_ITEMS } from '../../data/site78Data';

interface Site78WellnessSectionProps {
  onExploreGuide: () => void;
}

export const Site78WellnessSection: React.FC<Site78WellnessSectionProps> = ({
  onExploreGuide
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F3EEE7]/50 text-[#222222] relative font-['Jost',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>Nourish Mind & Body</span>
            <span className="w-8 h-[1px] bg-[#B99D75]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1C] leading-[1.12]">
            Wellness & Recreation at Luxury Beach Resort
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
            <span className="text-[#B99D75] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Immerse yourself in authentic Goan natural splendor. From morning tide walks along turtle nesting sands to restorative herbal poultice massage treatments and sunrise surf coaching.
          </p>
        </div>

        {/* 3 Large Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WELLNESS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E5DFD7] hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B99D75] block mb-0.5">
                    {item.subtitle}
                  </span>
                  <h3 className="font-['Cormorant',serif] text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-[#F3EEE7]">
                  <button
                    onClick={onExploreGuide}
                    className="text-xs font-semibold text-[#747157] hover:text-[#222222] tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                  >
                    <span>Discover Experiences</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B99D75] group-hover/btn:translate-x-1 transition-transform" />
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
