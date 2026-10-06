import React, { useState } from 'react';
import { Disc, Radio, Flame, Sparkles, Calendar, Clock, Music2, ArrowRight } from 'lucide-react';
import { WEEKLY_LINEUP_EVENTS } from '../../data/site79Data';

interface Site79DJsThemeNightsProps {
  onOpenTableBooking: (nightName?: string) => void;
  onOpenGuestlist: (nightName?: string) => void;
}

export const Site79DJsThemeNights: React.FC<Site79DJsThemeNightsProps> = ({
  onOpenTableBooking,
  onOpenGuestlist
}) => {
  const [activeTab, setActiveTab] = useState<'themes' | 'djs'>('themes');

  const djRoster = [
    {
      name: 'Resident Sonic Syndicate',
      role: 'Signature Melodic & Peak Techno',
      nights: 'Wednesdays & Fridays',
      credits: 'Tomorrowland Core, Sunburn Arena, Ministry of Sound',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80',
      bpm: '126 – 134 BPM'
    },
    {
      name: 'DJ Anika & Percussion Duo',
      role: 'Commercial Anthems & Afrobeats',
      nights: 'Thursdays (Empress Royale)',
      credits: 'Femina Nightlife Icon 2024, High-Energy Glamour Tour',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      bpm: '118 – 128 BPM'
    },
    {
      name: 'International Guest Headliners',
      role: 'Big-Room EDM & Festival Sets',
      nights: 'Saturdays (Starlight Ecstasy)',
      credits: 'Armada Music, Spinnin’ Records, Top 100 DJ Mag Alumni',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      bpm: '128 – 138 BPM'
    },
    {
      name: 'Delhi Desi Bass Masters & Dhol',
      role: 'Bollywood Dance Music & Live Percussion',
      nights: 'Sundays (Desi Supperclub)',
      credits: 'India’s #1 Club Mashup Producers & Acoustic Dhol Ensemble',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      bpm: '105 – 135 BPM'
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
              <Disc className="w-3.5 h-3.5 animate-spin text-[#DFB759]" style={{ animationDuration: '4s' }} />
              <span>Sonic Pioneers & Curated Nights</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
              World-Class DJs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Theme Nights</span>
            </h2>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('themes')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'themes'
                  ? 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              5 Theme Nights
            </button>
            <button
              onClick={() => setActiveTab('djs')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'djs'
                  ? 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Headliner DJs
            </button>
          </div>
        </div>

        {/* Tab 1: Theme Nights Grid */}
        {activeTab === 'themes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WEEKLY_LINEUP_EVENTS.map((event) => (
              <div
                key={event.id}
                className="group rounded-3xl bg-[#0c0a07] border border-white/10 p-6 flex flex-col justify-between hover:border-[#DFB759]/60 hover:shadow-[0_0_35px_rgba(223,183,89,0.2)] transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#DFB759] font-bold tracking-widest uppercase mb-3">
                    <span>{event.day}</span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                      {event.genre}
                    </span>
                  </div>

                  <h3 className="font-['Cinzel',serif] text-2xl font-bold text-white group-hover:text-[#DFB759] transition-colors mb-2">
                    {event.name}
                  </h3>

                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6 font-['Inter']">
                    {event.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 space-y-2">
                    <div className="text-[11px] font-bold text-[#DFB759] uppercase tracking-wider">
                      Exclusive Perks:
                    </div>
                    {event.perks.map((p, i) => (
                      <div key={i} className="text-xs text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DFB759] shrink-0" />
                        <span className="leading-snug">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onOpenTableBooking(event.name)}
                    className="flex-1 py-2.5 rounded-full bg-[#DFB759] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center cursor-pointer shadow-md"
                  >
                    VIP Table
                  </button>
                  <button
                    onClick={() => onOpenGuestlist(event.name)}
                    className="flex-1 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-all text-center cursor-pointer"
                  >
                    Guestlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: DJ Roster */}
        {activeTab === 'djs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {djRoster.map((dj, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden bg-[#0c0a07] border border-white/10 hover:border-[#DFB759]/60 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-900">
                  <img
                    src={dj.image}
                    alt={dj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a07] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/70 border border-[#DFB759]/30 text-[#DFB759] text-[10px] font-mono font-bold tracking-wider">
                    {dj.bpm}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#DFB759] tracking-widest block mb-1">
                      {dj.nights}
                    </span>
                    <h3 className="text-lg font-bold text-white font-['Cinzel',serif] group-hover:text-[#DFB759] transition-colors leading-tight mb-2">
                      {dj.name}
                    </h3>
                    <p className="text-xs text-gray-300 font-semibold mb-2">
                      {dj.role}
                    </p>
                    <p className="text-[11px] text-gray-400 font-light leading-snug">
                      {dj.credits}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenGuestlist(dj.name)}
                    className="mt-5 w-full py-2.5 rounded-full border border-[#DFB759]/40 text-[#DFB759] hover:bg-[#DFB759] hover:text-black transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    RSVP For Set
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
