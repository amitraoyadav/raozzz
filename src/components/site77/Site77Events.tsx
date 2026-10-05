import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Filter,
  Flame,
  Check,
  X,
  Volume2,
  ShieldCheck,
  Disc,
  Info
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';
import { EVENTS_DATA, ClubEvent } from '../../data/site77Data';

interface Site77EventsProps {
  onOpenBooking: (eventTitle?: string) => void;
}

export const Site77Events: React.FC<Site77EventsProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalEvent, setActiveModalEvent] = useState<ClubEvent | null>(null);

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'this-weekend', label: 'This Weekend' },
    { id: 'international', label: 'International DJs' },
    { id: 'bollywood', label: 'Bollywood Nights' },
    { id: 'sundowner', label: 'Waterfront Sundowners' },
    { id: 'techno', label: 'Techno Sessions' }
  ];

  const filteredEvents = EVENTS_DATA.filter(event => {
    if (selectedCategory === 'all') return true;
    return event.category === selectedCategory;
  });

  return (
    <section className="py-24 bg-[#07080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16140D] mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F3E5AB] uppercase">
              NOCTURNA CALENDAR
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            HEADLINE EVENTS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
              GUEST ARTISTS
            </span>
          </h2>

          <div className="flex items-center justify-center space-x-4 max-w-xs mx-auto my-5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            <Disc className="w-3.5 h-3.5 text-[#D4AF37]" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          </div>

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Every weekend at Nocturna brings an international spectacle. Experience global festival headliners,
            legendary Bollywood producers, and deep acoustic underground sessions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#12141A] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="bg-gradient-to-b from-[#12141B] to-[#0A0B0E] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between group"
            >
              {/* Event Image Top Area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141B] via-transparent to-black/60" />

                {/* Date & Tag Badges */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded bg-[#07080A]/90 border border-[#D4AF37]/40 text-[#F3E5AB] text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                    {event.dayOfWeek}
                  </span>
                  {event.isFeatured && (
                    <span className="px-2 py-1 rounded bg-red-600/90 text-white text-[9px] font-bold uppercase tracking-wider flex items-center space-x-1">
                      <Flame className="w-3 h-3" />
                      <span>FEATURED</span>
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-gray-300 text-[10px] font-mono">
                    {event.genre}
                  </span>
                </div>

                {/* Event Time Strip */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-gray-300">
                  <div className="flex items-center space-x-1 bg-black/80 px-2.5 py-1 rounded backdrop-blur">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{event.time}</span>
                  </div>
                  <span className="text-[#D4AF37] font-semibold bg-black/80 px-2 py-1 rounded backdrop-blur">
                    VIP: From ₹{event.vipTableStartPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#D4AF37] tracking-wider uppercase mb-1">
                    {event.date}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#F3E5AB] transition-colors mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light line-clamp-2 mb-4">
                    {event.artistBio}
                  </p>

                  {/* Highlights Pill */}
                  <div className="space-y-1.5 border-t border-white/5 pt-3 mb-5">
                    {event.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 text-[11px] text-gray-300">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Reservation Buttons */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div>
                      <span className="text-[10px] text-gray-400 block font-mono">COUPLE PASS</span>
                      <span className="font-mono text-white font-bold">
                        ₹{event.entryPriceCouple.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 block font-mono">FEMALE PASS</span>
                      <span className="font-mono text-emerald-400 font-bold">
                        ₹{event.entryPriceFemale.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveModalEvent(event)}
                      className="py-2.5 rounded border border-white/20 hover:border-white/40 text-gray-300 hover:text-white text-[11px] font-mono uppercase tracking-wider transition-colors flex items-center justify-center space-x-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onOpenBooking(event.title)}
                      className="py-2.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black text-[11px] font-bold uppercase tracking-wider shadow hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center space-x-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Book VIP</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Lightbox Modal */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0D0F14] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={activeModalEvent.image}
                alt={activeModalEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-black/70" />
              <button
                onClick={() => setActiveModalEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#D4AF37] border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-mono text-[#D4AF37] font-semibold uppercase tracking-widest block mb-1">
                  {activeModalEvent.date} · {activeModalEvent.time}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase">
                  {activeModalEvent.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
                  ARTIST SPOTLIGHT
                </h4>
                <p className="text-sm font-semibold text-[#F3E5AB]">
                  {activeModalEvent.artistTitle}
                </p>
                <p className="text-xs text-gray-300 font-light mt-2 leading-relaxed">
                  {activeModalEvent.artistBio}
                </p>
              </div>

              {/* Event Description */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                  EVENT EXPERIENCE
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {activeModalEvent.description}
                </p>
              </div>

              {/* Technical Highlights */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                  PRODUCTION HIGHLIGHTS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalEvent.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-200">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Passes & Pricing Breakdown */}
              <div className="border-t border-white/10 pt-4 bg-[#141720] p-4 rounded-xl">
                <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-3">
                  PASSES & TABLE PACKAGES
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-[10px] text-gray-400 block font-mono">FEMALE</span>
                    <span className="font-mono text-white font-bold">
                      ₹{activeModalEvent.entryPriceFemale.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-[10px] text-gray-400 block font-mono">COUPLE</span>
                    <span className="font-mono text-white font-bold">
                      ₹{activeModalEvent.entryPriceCouple.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-[10px] text-gray-400 block font-mono">STAG (SCREENED)</span>
                    <span className="font-mono text-white font-bold">
                      ₹{activeModalEvent.entryPriceStag.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <div className="text-[11px] text-gray-400 font-mono text-center">
                  VIP Tables start at ₹{activeModalEvent.vipTableStartPrice.toLocaleString('en-IN')} (100% redeemable)
                </div>
              </div>

              {/* Dress Code Notice */}
              <div className="flex items-start space-x-3 text-xs text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Dress Code:</strong> {activeModalEvent.dressCode}. Age 21+ strictly enforced.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const evt = activeModalEvent;
                    setActiveModalEvent(null);
                    onOpenBooking(evt.title);
                  }}
                  className="flex-1 py-3.5 rounded bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Reserve Table for This Event</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
