import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Play,
  Calendar,
  Clock,
  MapPin,
  Volume2,
  ShieldCheck,
  Disc,
  Flame,
  ChevronDown
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';

interface Site77HeroProps {
  onOpenBooking: () => void;
  onExploreEvents: () => void;
  onExploreExperience: () => void;
}

export const Site77Hero: React.FC<Site77HeroProps> = ({
  onOpenBooking,
  onExploreEvents,
  onExploreExperience
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07080A]">
      {/* Background Cinematic Nightlife Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=85"
          alt="Nocturna Luxury Nightclub Arena"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15] scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Radial Darkening and Gold Neon Accents */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-transparent to-[#07080A]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Laser Lines Decoration */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent rotate-12 blur-[1px]" />
        <div className="absolute -top-24 right-1/4 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent -rotate-12 blur-[1px]" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Prestige Subtitle Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#16140D]/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#F3E5AB] uppercase">
            North Goa’s Premier Waterfront Nightclub
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.08em] text-white uppercase leading-[1.05] mb-6 drop-shadow-2xl">
          WHERE THE NIGHT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] italic font-serif">
            TRANSCENDS REALITY
          </span>
        </h1>

        {/* Gold Hairline Divider */}
        <div className="flex items-center justify-center space-x-4 max-w-md mx-auto my-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
          <Disc className="w-4 h-4 text-[#D4AF37] opacity-80" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
        </div>

        {/* Descriptive Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 font-light tracking-wide leading-relaxed mb-10">
          25,000 square feet of multi-level sensory euphoria. Powered by 360° Void Acoustics sound, 
          120-beam kinetic laser matrices, diamond mezzanine VIP suites, and global headline DJs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-16">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.22em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Book a Table</span>
          </button>

          <button
            onClick={onExploreEvents}
            className="w-full sm:w-auto px-8 py-4 rounded border border-white/20 hover:border-[#D4AF37] bg-white/5 hover:bg-[#D4AF37]/10 text-white hover:text-[#F3E5AB] text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md transition-all flex items-center justify-center space-x-2"
          >
            <span>Explore Events</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Live Tonight Spotlight Card */}
        <div className="max-w-xl mx-auto bg-gradient-to-r from-[#12141A]/90 via-[#181B22]/90 to-[#12141A]/90 border border-[#D4AF37]/30 rounded-xl p-4 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-center justify-between text-left gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-[#D4AF37]/40 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=300&q=80"
                alt="Tonight Headline Event"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1 left-1 px-1 py-0.5 rounded text-[8px] font-bold bg-red-600 text-white uppercase tracking-tighter">
                LIVE
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">
                  SATURDAY SPECIAL · OCT 10
                </span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-[10px] text-gray-400 font-mono">10 PM – 4:30 AM</span>
              </div>
              <h4 className="text-white font-serif font-bold text-sm tracking-wide">
                ASTRAL FREQUENCY: Nikhil Chinapa Live
              </h4>
              <p className="text-[11px] text-gray-400">
                Void Acoustics Arena · Mezzanine Tables from ₹25,000
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-4 py-2 rounded border border-[#D4AF37]/60 text-[#F3E5AB] hover:bg-[#D4AF37] hover:text-black text-[11px] font-mono uppercase tracking-wider transition-all flex-shrink-0"
          >
            Reserve Table
          </button>
        </div>
      </div>

      {/* Stats Ticker Strip at Hero Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#07080A]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {site77Config.STATS.map((stat, idx) => (
              <div key={idx} className="border-r border-white/5 last:border-none">
                <div className="font-serif text-lg sm:text-xl font-bold text-[#F3E5AB] tracking-wider">
                  {stat.value}
                </div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
