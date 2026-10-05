import React from 'react';
import { ArrowRight, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { CLUB_EVENTS } from '../../data/site78ClubData';

interface Site78ClubEventsAndLawnsProps {
  onExploreEvents: () => void;
  onFacilityClick: (slug: string) => void;
}

export const Site78ClubEventsAndLawns: React.FC<Site78ClubEventsAndLawnsProps> = ({
  onExploreEvents,
  onFacilityClick
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#0F2537] text-white font-['Jost',sans-serif] relative overflow-hidden">
      {/* Background subtle noise/gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1926] via-[#0F2537] to-[#0A1926] opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Showcase (Matching Panchshila's Events & Lawns section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
              <img
                src="/assets/site78club/hero_banquet_lawn.jpg"
                alt="The Kensington Club Lawns and Celebrations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A869] block mb-1">
                  Social Calendar & Banquets
                </span>
                <div className="font-['Cormorant',serif] font-bold text-2xl text-white">
                  Winter Lawns & Annual Festival Soirees
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative (Matching reference copy structure) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#C5A869] text-xs font-bold uppercase tracking-[0.25em]">
              <span className="w-8 h-[1px] bg-[#C5A869]" />
              <span>Traditions & Camaraderie</span>
            </div>

            <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl text-white leading-tight">
              A Vibrant Calendar of <br />
              <span className="italic font-normal text-[#C5A869]">Celebrations & Fellowship</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-200 font-light leading-relaxed">
              <p>
                The Club hosts a number of regular events such as Tombola, Musical Programs, and seasonal Food Festivals. The Grand Diwali Mela, Christmas Carnival, and Gala New Year’s Eve Ball are deeply cherished traditions, while the spring Holi Milan with its riot of colors and bonhomie is a landmark celebration on the Delhi social calendar.
              </p>
              <p>
                In Winter, the manicured Central Lawns become the most popular destination in the Club, with leisurely buffet lunches being served daily under the warm afternoon sunlight. The adjoining Children’s Play Park keeps the younger lot happily engaged, while adults enjoy an unhurried afternoon of conversation and companionship.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreEvents}
                className="px-7 py-3 rounded-md bg-[#C5A869] hover:bg-[#d4bc82] text-[#0F2537] text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Featured Events Cards */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A869] block mb-1">
                Mark Your Calendar
              </span>
              <h3 className="font-['Cormorant',serif] font-bold text-2xl sm:text-4xl text-white">
                Upcoming Club Gatherings
              </h3>
            </div>
            <button
              onClick={onExploreEvents}
              className="text-xs font-semibold uppercase tracking-wider text-[#C5A869] hover:text-white transition-colors flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              <span>View All Events</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLUB_EVENTS.map(event => (
              <div
                key={event.id}
                className="bg-[#18344D]/70 rounded-xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-[#C5A869]/50 transition-all duration-300 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase text-[#C5A869]">
                    {event.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#C5A869]">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{event.date}</span>
                    </div>

                    <h4 className="font-['Cormorant',serif] font-bold text-lg text-white leading-snug group-hover:text-[#C5A869] transition-colors">
                      {event.title}
                    </h4>

                    <p className="text-xs text-stone-300 font-light line-clamp-2">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] text-stone-400 font-light flex items-center justify-between">
                    <span className="truncate max-w-[200px]">{event.venue}</span>
                    <span className="text-[#C5A869] font-medium">Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
