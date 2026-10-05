import React, { useState } from 'react';
import {
  Volume2,
  Zap,
  Radio,
  Wine,
  Crown,
  Waves,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Disc,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';
import { CLUB_PILLARS, ClubPillar } from '../../data/site77Data';

interface Site77AboutExperienceProps {
  onOpenBooking: () => void;
  onExploreGallery: () => void;
}

export const Site77AboutExperience: React.FC<Site77AboutExperienceProps> = ({
  onOpenBooking,
  onExploreGallery
}) => {
  const [activePillarId, setActivePillarId] = useState<string>(CLUB_PILLARS[0].id);
  const activePillar = CLUB_PILLARS.find(p => p.id === activePillarId) || CLUB_PILLARS[0];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Volume2':
        return <Volume2 className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Radio':
        return <Radio className="w-5 h-5" />;
      case 'Wine':
        return <Wine className="w-5 h-5" />;
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      case 'Waves':
        return <Waves className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-[#07080A] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro & Identity Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16140D] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F3E5AB] uppercase">
              THE NOCTURNA IDENTITY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            ARCHITECTS OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
              THE GOAN NIGHT
            </span>
          </h2>

          <div className="flex items-center justify-center space-x-4 max-w-xs mx-auto my-5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            <Disc className="w-3.5 h-3.5 text-[#D4AF37]" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Founded in 2021 on the scenic waterfront edge of Baga Creek, {site77Config.BRAND_NAME} was
            conceived with a single obsession: to eliminate the compromises of traditional nightlife. 
            Here, acoustic purity meets 3D kinetic lighting, international mixology blends with Michelin-influenced 
            tapas, and elite hospitality creates a sanctuary where every night is legendary.
          </p>
        </div>

        {/* The 6 Core Experience Pillars Interactive Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              Explore The Experience Pillars
            </h3>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {CLUB_PILLARS.map(pillar => {
              const isActive = activePillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-b from-[#1C180E] to-[#121318] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                      : 'bg-[#0E1015]/60 border-white/10 hover:border-white/20 hover:bg-[#14161F]'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                      isActive ? 'bg-[#D4AF37] text-black' : 'bg-white/5 text-[#D4AF37]'
                    }`}
                  >
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div>
                    <h4
                      className={`text-xs font-serif font-bold uppercase tracking-wider ${
                        isActive ? 'text-[#F3E5AB]' : 'text-gray-300'
                      }`}
                    >
                      {pillar.title.split(' ')[0]}
                    </h4>
                    <p className="text-[10px] font-mono text-gray-500 mt-0.5">
                      {pillar.metric}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Deep Dive Detail Feature Card */}
          <div className="bg-gradient-to-r from-[#101217] via-[#141720] to-[#101217] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
                  <span>SIGNATURE HIGHLIGHT</span>
                  <span>·</span>
                  <span>{activePillar.metric}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-3">
                  {activePillar.title}
                </h3>
                <h4 className="text-sm font-serif italic text-[#F3E5AB] mb-4">
                  {activePillar.subtitle}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                  {activePillar.description}
                </p>

                <div className="space-y-3 mb-8">
                  {activePillar.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      <span className="text-xs text-gray-200 tracking-wide">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.18em] shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center space-x-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Reserve VIP Booth</span>
                  </button>
                  <button
                    onClick={onExploreGallery}
                    className="px-6 py-3 rounded border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#F3E5AB] text-xs font-mono uppercase tracking-wider transition-all flex items-center space-x-2"
                  >
                    <span>View Club Photos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Pillar Image Preview */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 group shadow-2xl aspect-[4/3]">
                <img
                  src={activePillar.image}
                  alt={activePillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                  <span className="bg-black/70 px-3 py-1 rounded backdrop-blur border border-white/10">
                    {activePillar.title}
                  </span>
                  <span className="text-[#D4AF37] font-bold">
                    {activePillar.metric}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Private Celebrations & Milestone Events Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-gradient-to-r from-[#17140B] via-[#0D0E13] to-[#17140B] p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <Crown className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mb-2">
              HOST YOUR MILESTONE AT NOCTURNA
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light mb-6">
              Milestone 30th & 40th Birthdays · Epic Bachelor & Bachelorette Bashes · Corporate VIP Galas. 
              Enjoy custom LED welcome graphics, personalized champagne sparkler parades, private security, and bespoke chef menus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-bold text-xs uppercase tracking-widest transition-all"
              >
                Plan Private Celebration
              </button>
              <a
                href={`https://wa.me/${site77Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(
                  'Hello, I would like to inquire about hosting a private milestone celebration at Nocturna.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded border border-white/20 hover:border-[#D4AF37] text-white text-xs font-mono uppercase tracking-wider transition-all"
              >
                Talk to Event Concierge
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
