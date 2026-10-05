import React from 'react';
import { raozyConfig } from '../../config/raozyWeddingConfig';

interface RaozyHeroProps {
  onOpenConsultationModal: () => void;
  onExplorePortfolio: () => void;
  onOpenCalculator: () => void;
  onOpenAtelier: () => void;
}

export const RaozyHero: React.FC<RaozyHeroProps> = ({
  onOpenConsultationModal,
  onExplorePortfolio,
  onOpenCalculator,
  onOpenAtelier
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#0D0B0A] text-white overflow-hidden">
      {/* Background Cinematic Imagery with Dark Romantic Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Raozy Wedding Planner Luxury Mandap and Destination Setup"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/75 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0B0A]/50 to-[#0D0B0A]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Scarcity Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#DFC082]/10 border border-[#DFC082]/30 backdrop-blur-md text-[#DFC082] text-xs font-serif tracking-widest uppercase mb-6 sm:mb-8 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#DFC082] animate-ping" />
          <span>The 60-Weddings-A-Year Commitment · Absolute Dedication</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-stone-100 tracking-tight leading-[1.15] max-w-5xl mb-6">
          Rare Celebrations,{' '}
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#F4E1B9] to-[#C5A059]">
            Flawlessly Orchestrated.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 font-sans font-light max-w-3xl leading-relaxed mb-10 text-balance">
          India’s premier wedding planning studio intentionally capped at <strong className="text-white font-medium">60 weddings annually</strong>. 
          Single accountable crew, our own <strong className="text-[#DFC082] font-medium">25,000 sq.ft. in-house fabrication atelier</strong>, 
          photorealistic 3D CAD blueprints, and 100% open-book transparent fees.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-14">
          <button
            onClick={onOpenConsultationModal}
            className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-[#C5A059] via-[#DFC082] to-[#B38F46] text-[#171410] font-serif font-semibold text-sm tracking-widest uppercase shadow-2xl hover:brightness-110 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>{raozyConfig.CTA.primary}</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button
            onClick={onExplorePortfolio}
            className="w-full sm:w-auto px-7 py-4 rounded bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-[#DFC082]/30 backdrop-blur-sm text-sm font-sans tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explore 60-Weddings Lookbook</span>
          </button>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto px-6 py-4 rounded bg-transparent hover:bg-white/5 text-[#DFC082] border border-[#DFC082]/20 text-sm font-sans tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <svg className="w-4 h-4 text-[#DFC082]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Calculate Budget</span>
          </button>
        </div>

        {/* 4 Core Quantitative Benchmarks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl border-t border-stone-800/80 pt-8 sm:pt-10">
          <div className="flex flex-col items-center p-3 rounded-lg bg-stone-900/40 border border-stone-800/50 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#DFC082]">Max 60</span>
            <span className="text-xs font-sans tracking-wider text-stone-400 uppercase mt-1">Weddings / Year Cap</span>
            <span className="text-[10px] text-stone-500 mt-0.5">Zero assembly-line stress</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-stone-900/40 border border-stone-800/50 backdrop-blur-sm cursor-pointer hover:border-[#DFC082]/40 transition" onClick={onOpenAtelier}>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#DFC082]">25,000 Sq.Ft.</span>
            <span className="text-xs font-sans tracking-wider text-stone-400 uppercase mt-1">In-House Atelier</span>
            <span className="text-[10px] text-stone-500 mt-0.5">Gurugram fabrication &amp; florals</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-stone-900/40 border border-stone-800/50 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#DFC082]">₹28.5 Cr</span>
            <span className="text-xs font-sans tracking-wider text-stone-400 uppercase mt-1">Largest Managed</span>
            <span className="text-[10px] text-stone-500 mt-0.5">Grand scale to intimate luxury</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-stone-900/40 border border-stone-800/50 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#DFC082]">15 Days</span>
            <span className="text-xs font-sans tracking-wider text-stone-400 uppercase mt-1">Emergency Takeover</span>
            <span className="text-[10px] text-stone-500 mt-0.5">Rapid rescue firepower</span>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#12100E] to-transparent pointer-events-none" />
    </section>
  );
};
