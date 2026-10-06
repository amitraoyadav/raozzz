import React, { useState } from 'react';
import { Calendar, Film, Clock, Sparkles, ArrowRight, CheckCircle2, MapPin, Eye } from 'lucide-react';
import { UPCOMING_EVENTS, ClubEvent } from '../../data/site80Data';
import { site80Config } from '../../config/site80Config';

interface Site80EventsSectionProps {
  onOpenBooking: (eventTitle?: string) => void;
}

export const Site80EventsSection: React.FC<Site80EventsSectionProps> = ({
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'events' | 'virtual'>('events');

  return (
    <section className="relative py-16 sm:py-24 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Reference-style Nested Tabs Navigation */}
        <div className="flex items-center justify-center border-b border-white/15 mb-12 sm:mb-16">
          <div className="flex items-center gap-6 sm:gap-12 flex-wrap justify-center font-['Alegreya_Sans',sans-serif]">
            {/* Tab 1: UPCOMING EVENTS */}
            <button
              onClick={() => setActiveTab('events')}
              role="tab"
              aria-selected={activeTab === 'events'}
              className={`flex items-center gap-2.5 pb-4 px-2 text-sm sm:text-base tracking-[0.15em] uppercase font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'events'
                  ? 'text-[#FFD700] border-b-2 border-white'
                  : 'text-white/60 hover:text-white border-b-2 border-transparent'
              }`}
            >
              <Calendar className="w-4 h-4 text-[#FFD700]" />
              <span>UPCOMING EVENTS</span>
            </button>

            {/* Tab 2: VIRTUAL WALK-THROUGH */}
            <button
              onClick={() => setActiveTab('virtual')}
              role="tab"
              aria-selected={activeTab === 'virtual'}
              className={`flex items-center gap-2.5 pb-4 px-2 text-sm sm:text-base tracking-[0.15em] uppercase font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'virtual'
                  ? 'text-[#FFD700] border-b-2 border-white'
                  : 'text-white/60 hover:text-white border-b-2 border-transparent'
              }`}
            >
              <Film className="w-4 h-4 text-[#FFD700]" />
              <span>CLUB NOIR VIRTUAL WALK-THROUGH</span>
            </button>
          </div>
        </div>

        {/* TAB 1 CONTENT: UPCOMING EVENTS WITH ROTATED "THIS WEEK" SIDEBAR */}
        {activeTab === 'events' && (
          <div className="flex flex-col md:flex-row items-stretch gap-6 sm:gap-10">
            {/* Left Rotated "This Week" Column (Reference Elementor style) */}
            <div className="hidden md:flex flex-col items-center justify-center bg-[#0d0d0d] border border-white/10 rounded-3xl w-24 py-12 px-2 shadow-2xl shrink-0 select-none">
              <span className="transform -rotate-90 whitespace-nowrap text-3xl font-black font-['Cinzel',serif] uppercase tracking-[0.3em] text-[#FFD700]">
                THIS WEEK
              </span>
            </div>

            {/* Mobile Header for "This Week" */}
            <div className="md:hidden text-center mb-2">
              <span className="text-2xl font-black font-['Cinzel',serif] uppercase tracking-widest text-[#FFD700]">
                THIS WEEK
              </span>
            </div>

            {/* Event List Cards Grid (Reference Loop Grid) */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              {UPCOMING_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="group relative rounded-2xl bg-[#0c0c0c] border border-white/10 hover:border-[#FFD700]/70 p-5 sm:p-6 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 hover:translate-x-1"
                >
                  {/* Left: Date Lockup (Reference layout) */}
                  <div className="flex items-center sm:items-start gap-4 sm:gap-6 shrink-0">
                    <div className="flex flex-col items-center justify-center w-24 sm:w-28 text-center py-2 px-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <span className="text-3xl sm:text-4xl font-light text-white font-['Alegreya_Sans',sans-serif] leading-none">
                        {event.dayShort}
                      </span>
                      <span className="w-full h-0.5 bg-[#FFD700] my-1" />
                      <span className="text-sm sm:text-base font-normal text-white/80 font-['Alegreya_Sans',sans-serif]">
                        {event.dateStr}
                      </span>
                    </div>

                    {/* Middle: Title & Genre */}
                    <div className="space-y-1">
                      <h3
                        onClick={() => onOpenBooking(event.title)}
                        className="text-xl sm:text-2xl md:text-3xl font-normal font-['Alegreya_Sans',sans-serif] text-white group-hover:text-[#FFD700] transition-colors leading-tight cursor-pointer"
                      >
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 italic font-light font-['Alegreya_Sans',sans-serif]">
                        {event.genre}
                      </p>
                      <div className="flex items-center gap-3 pt-1 text-[11px] text-gray-500 font-['Inter']">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#FFD700]" />
                          <span>{event.time}</span>
                        </span>
                        <span>•</span>
                        <span>{event.entryRule}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: RSVP & Book Action */}
                  <div className="w-full sm:w-auto flex items-center gap-3 shrink-0 pt-2 sm:pt-0">
                    <button
                      onClick={() => onOpenBooking(event.title)}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#FFD700] text-white hover:text-black border border-white/20 hover:border-[#FFD700] font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md text-center"
                    >
                      Book Table
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2 CONTENT: VIRTUAL WALK-THROUGH (Reference iframe embed) */}
        {activeTab === 'virtual' && (
          <div className="rounded-3xl bg-[#0d0d0d] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFD700] block mb-1">
                  360° Panoramic Exploration
                </span>
                <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-white">
                  Step Inside Club Noir Blanc
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light mt-1 font-['Inter']">
                  Explore our main dance arena, kinetic laser chandelier ceiling, obsidian bar, and VIP mezzanine suites at The Suryaa Hotel.
                </p>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 rounded-full bg-[#FFD700] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg self-start sm:self-auto"
              >
                Reserve Your Spot
              </button>
            </div>

            {/* Embedded 360 Map View (exact reference map source) */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl">
              <iframe
                title="Club BW Virtual Walk-Through"
                src={site80Config.VIRTUAL_TOUR_URL}
                className="w-full h-full border-0 filter contrast-110"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
