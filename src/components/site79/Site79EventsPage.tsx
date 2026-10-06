import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, Filter, CheckCircle2, ArrowRight, Disc, Music, Shield } from 'lucide-react';
import { WEEKLY_LINEUP_EVENTS, ElysiumEvent } from '../../data/site79Data';
import { site79Config } from '../../config/site79Config';

interface Site79EventsPageProps {
  onOpenTableBooking: (eventName?: string) => void;
  onOpenGuestlist: (eventName?: string) => void;
}

export const Site79EventsPage: React.FC<Site79EventsPageProps> = ({
  onOpenTableBooking,
  onOpenGuestlist
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('ALL');
  const [selectedGenre, setSelectedGenre] = useState<string>('ALL');

  const days = ['ALL', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  const genres = ['ALL', 'Techno', 'Commercial', 'EDM', 'Bollywood'];

  const filteredEvents = WEEKLY_LINEUP_EVENTS.filter((evt) => {
    const matchesDay = selectedDay === 'ALL' || evt.day === selectedDay;
    const matchesGenre =
      selectedGenre === 'ALL' ||
      evt.genre.toLowerCase().includes(selectedGenre.toLowerCase());
    return matchesDay && matchesGenre;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#050505] text-white min-h-screen font-['Inter']">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>Curated Weekly Nights</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
          Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Weekly Lineup</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed">
          From hypnotic underground Melodic Techno to high-voltage EDM festival drops and royal Bollywood mashups, experience Delhi's most iconic superclub residency.
        </p>

        {/* Filter Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
          {/* Day Filters */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 flex-wrap justify-center">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDay(d)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedDay === d
                    ? 'bg-[#DFB759] text-black shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {filteredEvents.map((evt, idx) => (
          <div
            key={evt.id}
            className="group rounded-3xl bg-[#0c0a07] border border-white/10 hover:border-[#DFB759]/60 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual Col */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden bg-zinc-950">
              <img
                src={evt.image}
                alt={evt.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1 rounded-full bg-black/70 border border-[#DFB759]/40 text-[#DFB759] text-xs font-black uppercase tracking-widest backdrop-blur-md">
                  {evt.day}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#DFB759]" />
                  <span>{evt.time}</span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold uppercase">
                  {evt.genre}
                </span>
              </div>
            </div>

            {/* Info Col */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase font-extrabold text-[#DFB759] tracking-widest block mb-1">
                  {evt.tag}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black font-['Cinzel',serif] text-white group-hover:text-[#DFB759] transition-colors leading-tight">
                  {evt.name}
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                  {evt.subheading}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-light mt-3 leading-relaxed">
                  {evt.description}
                </p>
              </div>

              {/* Perks List */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-xs font-bold text-[#DFB759] uppercase tracking-wider">
                  {evt.perksHeading}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  {evt.perks.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB759] shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenTableBooking(evt.name)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg text-center"
                >
                  Reserve VIP Table (20% Off)
                </button>

                <button
                  onClick={() => onOpenGuestlist(evt.name)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
                >
                  Join Guestlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
