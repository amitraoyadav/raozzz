import React, { useState } from 'react';
import { RAOZY_WEDDING_FILMS, WeddingFilmItem } from '../../data/raozyWeddingData';

interface RaozyVideoShowcaseProps {
  onPlayFilm: (film: WeddingFilmItem) => void;
  onOpenConsultationModal: () => void;
}

export const RaozyVideoShowcase: React.FC<RaozyVideoShowcaseProps> = ({
  onPlayFilm,
  onOpenConsultationModal
}) => {
  const [filterDestination, setFilterDestination] = useState<string>('all');

  const destinations = [
    { id: 'all', label: 'All Destinations' },
    { id: 'corbett', label: 'Jim Corbett & Hills' },
    { id: 'jaipur', label: 'Jaipur' },
    { id: 'udaipur', label: 'Udaipur' },
    { id: 'goa', label: 'Goa Coastal' },
    { id: 'delhi', label: 'Delhi NCR' }
  ];

  const filteredFilms = RAOZY_WEDDING_FILMS.filter(film => {
    if (filterDestination === 'all') return true;
    if (filterDestination === 'corbett') return film.destination.toLowerCase().includes('corbett') || film.destination.toLowerCase().includes('mussoorie');
    if (filterDestination === 'jaipur') return film.destination.toLowerCase().includes('jaipur');
    if (filterDestination === 'udaipur') return film.destination.toLowerCase().includes('udaipur');
    if (filterDestination === 'goa') return film.destination.toLowerCase().includes('goa');
    if (filterDestination === 'delhi') return film.destination.toLowerCase().includes('delhi');
    return true;
  });

  return (
    <section id="films" className="py-16 sm:py-24 bg-stone-950 text-white scroll-mt-20 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/20">
            Cinematic Visual Storytelling
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured Wedding Films
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed font-light">
            Every celebration has a unique cadence. Watch our cinematic wedding highlights capturing 
            unrehearsed emotions, monumental royal entries, and unforgettable midnight parties.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none gap-2 mb-10">
          {destinations.map(d => (
            <button
              key={d.id}
              onClick={() => setFilterDestination(d.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                filterDestination === d.id
                  ? 'bg-amber-300 text-stone-950 shadow-md font-bold'
                  : 'bg-white/10 text-stone-300 hover:bg-white/15 hover:text-white'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFilms.map(film => (
            <div
              key={film.id}
              onClick={() => onPlayFilm(film)}
              className="group bg-stone-900/80 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-400/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={film.thumbnail}
                    alt={film.coupleNames}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#800020]/90 backdrop-blur-md text-amber-300 border border-amber-300/40 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#800020] transition-transform">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4l12 6-12 6V4z" />
                      </svg>
                    </div>
                  </div>

                  {/* Top Destination Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-stone-200 border border-white/10">
                    {film.destination}
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-white font-medium">
                    {film.duration}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="text-[11px] text-amber-300 font-medium">
                    {film.venueName}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {film.coupleNames}
                  </h3>

                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                    {film.description}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="px-4 py-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                <span className="font-medium text-stone-300">{film.theme}</span>
                <span className="text-amber-300 font-semibold group-hover:translate-x-1 transition-transform">
                  Watch Film →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#20050A] via-[#140508] to-[#20050A] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Want Your Wedding Story Filmed to Editorial Standards?
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
              Our cinema teams shoot on Sony FX6 line cameras, licensed 4K aerial drones, and deliver same-day social media reels within 12 hours.
            </p>
          </div>

          <button
            onClick={onOpenConsultationModal}
            className="shrink-0 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-stone-950 bg-amber-300 hover:bg-amber-200 shadow-md transition-all hover:scale-105"
          >
            Inquire for Cinema &amp; Planning
          </button>
        </div>

      </div>
    </section>
  );
};
