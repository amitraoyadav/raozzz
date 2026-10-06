import React, { useState } from 'react';
import {
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Clock,
  Radio,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { WEEKLY_LINEUP_EVENTS, ElysiumEvent } from '../../data/site79Data';

interface Site79WeeklyLineupProps {
  onOpenTableBooking: (eventName?: string) => void;
  onOpenGuestlist: (eventName?: string) => void;
}

export const Site79WeeklyLineup: React.FC<Site79WeeklyLineupProps> = ({
  onOpenTableBooking,
  onOpenGuestlist
}) => {
  const [activeDayFilter, setActiveDayFilter] = useState<string>('ALL');
  const [selectedEvent, setSelectedEvent] = useState<ElysiumEvent>(
    WEEKLY_LINEUP_EVENTS[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredEvents =
    activeDayFilter === 'ALL'
      ? WEEKLY_LINEUP_EVENTS
      : WEEKLY_LINEUP_EVENTS.filter(e => e.day === activeDayFilter);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredEvents.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredEvents.length) % filteredEvents.length);
  };

  return (
    <section id="weekly_lineup" className="relative w-full py-16 sm:py-24 bg-[#050505] text-white overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DFB759]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Glowing Radar Indicator */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            {/* Pulsing Radar Ring matching reference */}
            <div className="relative flex items-center justify-center w-8 h-8">
              <span className="absolute w-8 h-8 rounded-full bg-[#DFB759]/20 animate-ping" />
              <span className="relative w-3.5 h-3.5 rounded-full bg-[#DFB759] shadow-[0_0_15px_#DFB759]" />
            </div>
            <span className="text-[#DFB759] text-xs sm:text-sm uppercase tracking-[0.35em] font-semibold font-['Inter']">
              Live Nightclub Schedule
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider font-['Cinzel',serif] flex items-center justify-center gap-3 flex-wrap">
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">
              Weekly
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#e8c676] drop-shadow-[0_0_30px_rgba(223,183,89,0.5)]">
              Lineup
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
            Five nights of pure sonic mastery. Experience curated theme nights with international headliners, Void Acoustics precision, and high-energy crowd euphoria.
          </p>
        </div>

        {/* Day Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {['ALL', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'].map(day => (
            <button
              key={day}
              onClick={() => {
                setActiveDayFilter(day);
                setCurrentIndex(0);
              }}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeDayFilter === day
                  ? 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black shadow-[0_0_20px_rgba(223,183,89,0.5)] scale-105'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#DFB759]/40'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Interactive Event Showcase Carousel / Cards */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Desktop & Tablet Multi-card Display / Mobile Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((evt) => {
              const isSelected = selectedEvent.id === evt.id;

              return (
                <div
                  key={evt.id}
                  onClick={() => setSelectedEvent(evt)}
                  className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 bg-[#0d0b07] flex flex-col justify-between shadow-2xl cursor-pointer ${
                    isSelected
                      ? 'border-[#DFB759] shadow-[0_0_40px_rgba(223,183,89,0.3)] ring-1 ring-[#DFB759]/50'
                      : 'border-white/10 hover:border-[#DFB759]/50 hover:shadow-[0_0_30px_rgba(223,183,89,0.2)]'
                  }`}
                >
                  {/* Poster Image with Shimmer & Dark Gradients */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
                    <img
                      src={evt.image}
                      alt={evt.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 contrast-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b07] via-[#0d0b07]/60 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-black/60 border border-[#DFB759]/40 text-[#DFB759] backdrop-blur-md">
                        {evt.day}
                      </span>
                      {evt.tag && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white/80 bg-white/10 border border-white/20 backdrop-blur-md">
                          {evt.tag}
                        </span>
                      )}
                    </div>

                    {/* Center / Lower Card Information */}
                    <div className="absolute inset-x-5 bottom-4">
                      <div className="flex items-center gap-1.5 text-xs text-[#DFB759] font-semibold mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{evt.time}</span>
                      </div>

                      <h3 className="font-['Cinzel',serif] text-2xl font-black text-white tracking-wide uppercase group-hover:text-[#DFB759] transition-colors leading-tight">
                        {evt.name}
                      </h3>

                      <p className="text-xs text-gray-300 font-light mt-1.5 line-clamp-2 leading-relaxed">
                        {evt.subheading}
                      </p>
                    </div>
                  </div>

                  {/* Card Lower Detail Section */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 border-t border-white/5 bg-[#0a0805]">
                    <div>
                      <div className="text-[11px] font-bold text-[#DFB759] uppercase tracking-wider mb-2">
                        {evt.perksHeading}:
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-300">
                        {evt.perks.map((p, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB759] shrink-0 mt-0.5" />
                            <span className="leading-snug">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 grid grid-cols-2 gap-2.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenTableBooking(evt.name);
                        }}
                        className="py-2.5 px-3 rounded-full bg-gradient-to-r from-[#DFB759] to-[#e8c676] text-black font-extrabold text-[11px] tracking-wider uppercase text-center hover:brightness-110 transition-all cursor-pointer shadow-md"
                      >
                        Reserve Table
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenGuestlist(evt.name);
                        }}
                        className="py-2.5 px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-[11px] tracking-wider uppercase text-center transition-all cursor-pointer"
                      >
                        Join Guestlist
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Booking Guarantee Note */}
        <div className="mt-12 text-center text-xs text-white/50 flex items-center justify-center gap-2 flex-wrap">
          <Sparkles className="w-3.5 h-3.5 text-[#DFB759]" />
          <span>Table bookings include 100% redeemable credit against imported spirits, champagnes & gourmet dining.</span>
        </div>
      </div>
    </section>
  );
};
