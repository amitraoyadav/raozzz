import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, Globe, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { raozWeddingHubConfig } from '../../config/raozWeddingHubConfig';

interface RaozHeroProps {
  onSeeExperience: () => void;
  onStartPlanning: () => void;
  onExploreDemo: () => void;
}

export const RaozHero: React.FC<RaozHeroProps> = ({
  onSeeExperience,
  onStartPlanning,
  onExploreDemo
}) => {
  const [langIndex, setLangIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const rotatingLanguages = raozWeddingHubConfig.LANGUAGES;

  useEffect(() => {
    const timer = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % rotatingLanguages.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [rotatingLanguages.length]);

  const currentLang = rotatingLanguages[langIndex];

  return (
    <section className="relative bg-[#FAF8F5] pt-14 md:pt-24 pb-16 md:pb-20 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-14">
          {/* Left Text Column */}
          <div className="space-y-6">
            <span className="inline-block font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
              A destination wedding platform
            </span>

            <h1 className="font-serif font-medium text-[42px] sm:text-[54px] lg:text-[62px] leading-[1.04] tracking-tight text-[#1F1B16] text-balance">
              <span className="block">Destination wedding planning,</span>
              <span className="block italic text-[#A85C3D]">in one calm place.</span>
            </h1>

            <p className="text-base sm:text-lg leading-[1.6] text-[#6B6155] max-w-[500px]">
              For couples planning a 3–5 day chapter from far away, the planners who hold it together, and the guests who travel in to be part of it.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onSeeExperience}
                className="inline-flex items-center gap-2 rounded-full border border-[#D5C9B8] hover:border-[#1F1B16] bg-transparent px-5 py-2.5 text-sm font-medium text-[#1F1B16] transition-all hover:bg-white active:scale-98 shadow-2xs"
              >
                <span>See the experience</span>
                <ArrowRight className="w-4 h-4 text-[#A85C3D]" />
              </button>

              <button
                onClick={onStartPlanning}
                className="inline-flex items-center gap-2 rounded-full bg-[#4A5847] hover:bg-[#3A4537] text-[#FAF8F5] px-5 py-2.5 text-sm font-medium transition-all shadow-xs hover:shadow-sm active:scale-98"
              >
                <span>Start planning</span>
                <span className="font-mono text-[10px] text-white/70 bg-black/20 px-1.5 py-0.5 rounded">Free trial</span>
              </button>

              <button
                onClick={onExploreDemo}
                className="inline-flex items-center gap-1.5 text-xs text-[#7A6E62] hover:text-[#1F1B16] font-medium py-2 px-1 underline underline-offset-4 decoration-[#D5C9B8] hover:decoration-[#1F1B16] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A85C3D]" />
                <span>Explore live dashboard demo</span>
              </button>
            </div>

            {/* Language Rotator Badge */}
            <div className="pt-4 flex items-center gap-2.5 min-h-[36px]">
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#8A7B6E] shrink-0">
                Your Guest Hub in
              </span>

              <div className="flex items-center gap-2 bg-white/90 border border-[#E8DFD3] rounded-full px-3 py-1 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-[#A85C3D]" />
                <span className="font-serif italic text-sm text-[#1F1B16] font-medium transition-all duration-300">
                  {currentLang.name} · <span className="font-sans not-italic text-xs text-[#6B6155]">"{currentLang.greeting}"</span>
                </span>
                <span className="font-mono text-[9px] tracking-wider uppercase font-bold text-[#A85C3D] bg-[#FAF2ED] px-1.5 py-0.5 rounded">
                  {currentLang.code}
                </span>
              </div>
            </div>
          </div>

          {/* Right Video / Imagery Frame */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[24px] shadow-[0_24px_50px_-20px_rgba(31,27,22,0.25)] border border-[#E8DFD3] bg-[#EFE8DE] group">
              {/* Cinematic Ambient Atmosphere */}
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                alt="Couple celebrating their destination wedding at sunset"
                className={`w-full h-full object-cover transition-transform duration-1000 ${isVideoPlaying ? 'scale-105' : 'scale-100'}`}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Reassurance Tags */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 font-mono text-[10px] tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Interactive Multi-Day Hub</span>
                </div>
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition-colors"
                  title={isVideoPlaying ? 'Pause ambient view' : 'Play ambient view'}
                >
                  {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>
              </div>

              {/* Bottom Quote Card Overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E8DFD3] shadow-lg">
                <div className="flex items-center justify-between text-[11px] text-[#7A6E62] border-b border-[#F0EAE1] pb-2 mb-2 font-mono">
                  <span>CAVALIERI ESTATE · TUSCANY</span>
                  <span className="text-[#A85C3D] font-bold">4-DAY CHAPTER</span>
                </div>
                <p className="font-serif italic text-sm text-[#1F1B16] leading-snug">
                  "Our guests arrived from four continents. For the first time in three years, we actually had time to talk, laugh, and be together."
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#8A7B6E]">
                  <span>Maya &amp; David · Married June 2026</span>
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> All 74 Guests Coordinated
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative subtle border motif */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[24px] border border-[#A85C3D]/20 -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaozHero;
