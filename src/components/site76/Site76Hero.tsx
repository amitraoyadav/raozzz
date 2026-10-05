import React from 'react';
import { ArrowRight, ShieldCheck, Leaf, Sparkles, Feather } from 'lucide-react';
import { site76Config } from '../../config/site76Config';

interface Site76HeroProps {
  onExploreShop: (gender?: 'women' | 'men') => void;
  onExploreMaterials: () => void;
}

export const Site76Hero: React.FC<Site76HeroProps> = ({
  onExploreShop,
  onExploreMaterials
}) => {
  return (
    <section className="relative bg-[#FDFBF7] overflow-hidden border-b border-[#E8E1D5]">
      {/* Decorative Subtle Background Texture Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E1F21_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Manifesto */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Clean unboxed kicker with dot separator (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C4C36]">
              <span>Small-Batch Atelier</span>
              <span aria-hidden="true">·</span>
              <span>100% Plant & Earth Fibers</span>
              <span aria-hidden="true">·</span>
              <span>New Delhi</span>
            </div>

            <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1E1F21] leading-[1.08] text-balance">
              Clothing that returns <br />
              <span className="italic font-normal text-[#C16A52]">gently</span> to the earth.
            </h1>

            <p className="text-base sm:text-lg text-[#544133] leading-relaxed max-w-2xl font-light">
              Crafted from indigenous rainfed Desi cotton, Normandy flax linen, and wild Himalayan hemp. Woven on village pit-looms and steeped in botanical plant dyes. No polyester, no toxic effluent, no fleeting trends.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onExploreShop('women')}
                className="px-6 py-3.5 rounded-full bg-[#263422] text-[#FDFBF7] hover:bg-[#354830] font-medium text-xs tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 cursor-pointer group"
              >
                <span>Shop Women</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onExploreShop('men')}
                className="px-6 py-3.5 rounded-full bg-[#F5EFEB] text-[#1E1F21] hover:bg-[#EAE2D7] border border-[#D5C7B5] font-medium text-xs tracking-wider uppercase transition-all cursor-pointer"
              >
                Shop Men
              </button>

              <button
                type="button"
                onClick={onExploreMaterials}
                className="px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#9C4C36] hover:text-[#C16A52] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Explore the 6 Fibers</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Clean Micro-Proof Strip */}
            <div className="pt-6 border-t border-[#E8E1D5] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
              {site76Config.STATS.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#1E1F21] block tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-[#6F736D] leading-tight block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-[#EAE2D7] border border-[#D5C7B5]">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
                  alt="Aranya Earth Unbleached Khadi Linen Dress in Natural Sunlight"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Resilient fallback container if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1F21]/60 via-transparent to-transparent" />
                
                {/* Image Overlay Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="text-[11px] uppercase tracking-widest text-[#D5C7B5] font-mono">
                    The Solstice Linen Edit
                  </p>
                  <p className="font-['Cormorant_Garamond',serif] text-xl font-medium text-white">
                    Unbleached Normandy Flax & Pit-Loom Weaves
                  </p>
                </div>
              </div>

              {/* Floating Floating Craft Tag */}
              <div className="absolute -bottom-6 -left-6 bg-[#FDFBF7] border border-[#E8E1D5] rounded-xl p-4 shadow-xl hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#C16A52] shrink-0">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1E1F21]">Zero-Grid Spinning</p>
                  <p className="text-[11px] text-[#6F736D] leading-tight">Amber Charkha hand-spun by village women</p>
                </div>
              </div>

              {/* Secondary Botanical Dye Pill */}
              <div className="absolute -top-4 -right-4 bg-[#263422] text-[#FDFBF7] rounded-full px-4 py-2 text-xs font-medium tracking-wide shadow-lg hidden sm:flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#98A391]" />
                <span>Fermented Indigo & Madder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
