import React from 'react';
import { ArrowDown, Sparkles, Compass, ShieldCheck, Heart, Star, Play } from 'lucide-react';
import { site75Config } from '../../config/site75Config';

interface Site75HeroProps {
  onStartPlanning: () => void;
  onExplorePortfolio: () => void;
  onExploreDestinations: () => void;
}

export const Site75Hero: React.FC<Site75HeroProps> = ({
  onStartPlanning,
  onExplorePortfolio,
  onExploreDestinations
}) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#080B12] text-white pt-24 pb-16">
      
      {/* Background Imagery with Luxury Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Wedding Scenography & Mandap Design"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[12000ms]"
        />
        {/* Deep Multi-Layer Vignette and Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/60 to-[#080B12]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,11,18,0.7)_100%)]" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131A29]/80 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono tracking-widest uppercase shadow-lg backdrop-blur-md animate-in fade-in duration-700">
          <Sparkles className="w-3.5 h-3.5 animate-spin duration-3000" />
          <span>Haute Couture Wedding Atelier · Mumbai &amp; Worldwide</span>
        </div>

        {/* Grand Editorial Headline */}
        <div className="space-y-3">
          <h1 className="font-serif font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-white">
            Creating Celebrations That <br className="hidden sm:block" />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#D4AF37]">
              Become Memories
            </span>
          </h1>

          <p className="max-w-2xl mx-auto font-sans font-light text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            {site75Config.TAGLINE}. We translate royal traditions and architectural scenography into extraordinary multi-day sensory experiences across India and global sanctuaries.
          </p>
        </div>

        {/* Dual Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            onClick={onStartPlanning}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#080B12] bg-gradient-to-r from-[#D4AF37] via-[#E8CA65] to-[#D4AF37] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Begin Your Wedding Journey</span>
          </button>

          <button
            onClick={onExplorePortfolio}
            className="w-full sm:w-auto px-7 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-white hover:text-[#D4AF37] border border-[#20293D] hover:border-[#D4AF37]/60 bg-[#0E131F]/60 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
            <span>Explore Real Weddings</span>
          </button>
        </div>

        {/* Stat Highlights Bar */}
        <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-[#20293D]/80">
          {site75Config.STATS.map((stat, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-[#0E131F]/40 border border-white/5 backdrop-blur-xs">
              <span className="block font-serif text-2xl sm:text-3xl font-light text-[#D4AF37]">
                {stat.value}
              </span>
              <span className="block font-sans text-[10px] sm:text-[11px] tracking-wider uppercase text-slate-400 font-light mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Gentle Scroll Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-stone-500 hover:text-[#D4AF37] transition-colors cursor-pointer"
           onClick={onExploreDestinations}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>

    </section>
  );
};

export default Site75Hero;
