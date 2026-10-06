import React, { useState } from 'react';
import { Volume2, Sparkles, Layers, Zap, Shield, Flame, CheckCircle2 } from 'lucide-react';
import { site79Config } from '../../config/site79Config';

interface Site79AmbienceShowcaseProps {
  onOpenTableBooking: () => void;
}

export const Site79AmbienceShowcase: React.FC<Site79AmbienceShowcaseProps> = ({
  onOpenTableBooking
}) => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const pillars = [
    {
      title: 'Void Acoustics Sound',
      subtitle: '360° Custom Acoustic Engineering',
      description:
        'Engineered specifically for Elysium by world-renowned British audio artisans Void Acoustics. Sub-bass arrays tuned to deliver bone-rattling physical warmth without auditory fatigue, ensuring crystalline clarity from the front rail to the private mezzanine.',
      metric: '30,000 Watts',
      metricLabel: 'Pure Sound System',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Custom Incubus Subwoofers', 'Zero Harmonic Distortion', 'Acoustically Treated Chambers']
    },
    {
      title: 'Kinetic Laser Matrix',
      subtitle: '120 Synchronized RGB Beams',
      description:
        'A kinetic ceiling chandelier matrix that shifts and morphs in real-time with the music. From laser-straight amber horizons to pulsating 3D volumetric tunnels, the visual production rivaling international electronic festivals.',
      metric: '120 Beams',
      metricLabel: 'Kinetic Laser Array',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Liquid Cryo CO2 Cannons', 'Sync with CDJ Fader Traps', 'Volumetric Fog Micro-Dispersal']
    },
    {
      title: 'Mezzanine VIP Suites',
      subtitle: 'Private Elevated Luxury Viewpoints',
      description:
        'Elevated above the main arena with private security and dedicated stewards. Bespoke black leather banquettes, obsidian champagne ice wells, and direct sightlines to the headliner DJ booth.',
      metric: '100% Credit',
      metricLabel: 'Redeemable on F&B',
      image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Dedicated Butler Steward', 'Sparkler Bottle Fanfare', 'Fast-Track Private Elevator']
    },
    {
      title: 'Molecular Barcraft',
      subtitle: 'Liquid Alchemy & 24K Gold Mixology',
      description:
        'Our master mixologists blend rare botanical spirits, small-batch barrel bourbons, and liquid nitrogen infusions. Served in custom crystal glassware with artisanal ice blocks stamped with the Elysium seal.',
      metric: '42+ Labels',
      metricLabel: 'Single Malts & Champagnes',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
      highlights: ['24K Gold Flake Garnishes', 'Applewood Smoke Infusions', 'Dom Pérignon Sparkler Trains']
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#070604] text-white overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#DFB759]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#DFB759]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture & Ambience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Cinzel',serif] tracking-wide uppercase leading-tight">
            Crafted for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Pure Ecstasy</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-gray-400 font-light leading-relaxed font-['Inter']">
            Spread across 18,000 square feet inside Shangri-La’s Eros Hotel, Elysium redefines what a world-class nightclub feels like — where sound, light, and sensory luxury converge.
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {pillars.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFeature(idx)}
              className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                activeFeature === idx
                  ? 'bg-gradient-to-b from-[#1c180e] to-[#0e0c07] border-[#DFB759] shadow-[0_0_25px_rgba(223,183,89,0.25)]'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/30 text-white/70'
              }`}
            >
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#DFB759] mb-1">
                Pillar 0{idx + 1}
              </div>
              <div className="text-sm sm:text-base font-bold text-white font-['Cinzel',serif] leading-snug">
                {p.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Feature Spotlight Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#0d0b07] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Left Visual Column */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] rounded-2xl overflow-hidden group">
            <img
              src={pillars[activeFeature].image}
              alt={pillars[activeFeature].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
              onError={(e) => {
                // Fallback styled visual container
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Stat Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-black/80 border border-[#DFB759]/50 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-2xl sm:text-3xl font-black text-[#DFB759] font-['Cinzel',serif]">
                {pillars[activeFeature].metric}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 font-semibold font-['Inter']">
                {pillars[activeFeature].metricLabel}
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#DFB759]">
                {pillars[activeFeature].subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Cinzel',serif] mt-2 mb-4 leading-tight">
                {pillars[activeFeature].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light font-['Inter']">
                {pillars[activeFeature].description}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              {pillars[activeFeature].highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#DFB759] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4">
              <button
                onClick={onOpenTableBooking}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_25px_rgba(223,183,89,0.5)] transition-all cursor-pointer shadow-lg text-center"
              >
                Experience This in VIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
