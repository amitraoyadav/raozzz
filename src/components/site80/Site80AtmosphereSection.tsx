import React from 'react';
import { Sparkles, Wine, Volume2, ShieldCheck, Flame, ArrowRight } from 'lucide-react';
import { site80Config } from '../../config/site80Config';

interface Site80AtmosphereSectionProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const Site80AtmosphereSection: React.FC<Site80AtmosphereSectionProps> = ({
  onOpenBooking,
  onNavigate
}) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#030303] text-white border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Zone */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFD700] text-xs font-bold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Club BW Standard</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-['Alegreya_Sans',sans-serif] uppercase tracking-wide leading-tight">
              An Architectural <span className="text-[#FFD700]">Masterpiece</span> of Sound & Light
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 font-light font-['Alegreya_Sans',sans-serif] leading-relaxed">
              Step across the velvet threshold of The Suryaa Hotel into Delhi’s monochrome nightlife sanctum. Designed with stark contrasts of black obsidian, polished gold metallic ribbons, and immersive Void Acoustics, every angle of {site80Config.BRAND_NAME} is sculpted for raw sensory euphoria.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/10 flex items-start gap-3">
                <Volume2 className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Void Acoustics Sound</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Studio-grade, high-definition sound clarity without ear fatigue.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/10 flex items-start gap-3">
                <Wine className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Prestige Bottle Fanfare</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Celebratory sparkler processions, Dom Pérignon & Ace of Spades.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Discreet VIP Security</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Private entrance, valet hospitality, and personal booth cordons.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/10 flex items-start gap-3">
                <Flame className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Runway Cult Nights</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Wednesday En-Vogue, Friday fever, and Saturday big-room bashes.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full bg-[#FFD700] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 hover:scale-105 transition-all cursor-pointer shadow-[0_0_25px_rgba(255,215,0,0.5)]"
              >
                Reserve a Table
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Read Club Story</span>
                <ArrowRight className="w-4 h-4 text-[#FFD700]" />
              </button>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
                alt="Club Noir Blanc Nightlife"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 border border-white/20 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD700] block">
                    The Suryaa Hotel • New Friends Colony
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Where New Delhi celebrates after midnight
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#FFD700] text-black text-[10px] font-extrabold uppercase tracking-wider">
                  Est. 2014
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
