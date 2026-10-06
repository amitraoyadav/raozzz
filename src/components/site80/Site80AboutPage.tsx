import React from 'react';
import { Sparkles, Layers, Volume2, ShieldCheck, Disc, Trophy, Users, Clock, MapPin, ArrowRight } from 'lucide-react';
import { ABOUT_PILLARS } from '../../data/site80Data';
import { site80Config } from '../../config/site80Config';

interface Site80AboutPageProps {
  onOpenBooking: () => void;
}

export const Site80AboutPage: React.FC<Site80AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#050505] text-white min-h-screen font-['Inter']">
      {/* Hero Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Monochrome Legacy</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-['Alegreya_Sans',sans-serif] uppercase tracking-wide leading-tight">
          About <span className="text-[#FFD700]">Club Noir Blanc</span>
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed font-['Alegreya_Sans',sans-serif]">
          Located at the prestigious five-star address of The Suryaa Hotel in New Friends Colony, Club Noir Blanc stands as the capital’s defining sanctuary for high-fashion nightlife, world-class sound, and uninhibited midnight celebration.
        </p>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Imagery */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80"
              alt="Club Noir Blanc Interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 border border-white/20 backdrop-blur-md">
              <span className="text-[10px] uppercase font-bold text-[#FFD700] tracking-widest block">
                The Suryaa New Delhi
              </span>
              <p className="text-sm font-semibold text-white">
                New Friends Colony, New Delhi — Established Nightlife Excellence
              </p>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-extrabold text-[#FFD700] tracking-[0.3em] block">
              Architectural Concept
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal font-['Alegreya_Sans',sans-serif] uppercase text-white leading-tight">
              Where Stark Black Meets Pure Radiant Light
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed font-['Alegreya_Sans',sans-serif]">
              Club Noir Blanc was conceived on a singular artistic premise: that high-voltage nightlife reaches its purest intensity when framed within a disciplined monochromatic aesthetic. Our black obsidian surfaces, deep quilted leather banquettes, and geometric gold chandeliers create a hypnotic canvas where kinetic light and crystalline sound take center stage.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Every evening is curated like a high-fashion runway event. Whether you are arriving for our storied Wednesday fashion rituals, Friday big-room EDM blowouts, or Saturday celebrity bashes, Club Noir Blanc guarantees an atmosphere of sophistication and raw euphoria.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full bg-[#FFD700] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
              >
                Experience Tonight
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 pt-12 border-t border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal font-['Alegreya_Sans',sans-serif] uppercase text-white">
            The Club <span className="text-[#FFD700]">Pillars</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Built on four uncompromised benchmarks of world-class nightlife.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#0d0d0d] border border-white/10 hover:border-[#FFD700]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-5">
                  {idx === 0 && <Layers className="w-6 h-6" />}
                  {idx === 1 && <Volume2 className="w-6 h-6" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 3 && <Disc className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold font-['Alegreya_Sans',sans-serif] text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[10px] uppercase font-bold text-[#FFD700] tracking-widest">
                Pillar 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Numerical Benchmarks Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#111111] via-[#0d0d0d] to-[#111111] border border-white/15 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="space-y-1">
              <span className="text-4xl sm:text-5xl font-black font-['Alegreya_Sans',sans-serif] text-[#FFD700]">
                10+
              </span>
              <p className="text-xs uppercase font-bold tracking-widest text-white">Years of Legacy</p>
              <p className="text-[11px] text-gray-400">At The Suryaa New Delhi</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-4xl sm:text-5xl font-black font-['Alegreya_Sans',sans-serif] text-white">
                1,200+
              </span>
              <p className="text-xs uppercase font-bold tracking-widest text-white">Artist Showcases</p>
              <p className="text-[11px] text-gray-400">DJs, Producers & Vocalists</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-4xl sm:text-5xl font-black font-['Alegreya_Sans',sans-serif] text-[#FFD700]">
                500K+
              </span>
              <p className="text-xs uppercase font-bold tracking-widest text-white">Guests Hosted</p>
              <p className="text-[11px] text-gray-400">Cosmopolitan Jet-Setters</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-4xl sm:text-5xl font-black font-['Alegreya_Sans',sans-serif] text-white">
                5 Nights
              </span>
              <p className="text-xs uppercase font-bold tracking-widest text-white">Every Week</p>
              <p className="text-[11px] text-gray-400">Doors open 9 PM onwards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
