import React from 'react';
import { GLOBAL_WEDDINGS, WeddingStory } from '../../data/globalPlannerssData';

interface GlobalPortfolioGridProps {
  onSelectWedding: (wedding: WeddingStory) => void;
  onViewAll?: () => void;
}

export const GlobalPortfolioGrid: React.FC<GlobalPortfolioGridProps> = ({
  onSelectWedding,
  onViewAll
}) => {
  return (
    <section id="weddings" className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
              Selected celebrations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
              Weddings we’ve carried
            </h2>
          </div>
          {onViewAll && (
            <button
              onClick={onViewAll}
              className="self-start sm:self-auto px-4 py-2 rounded border border-[#C19A4B]/40 text-stone-300 hover:text-white hover:bg-white/5 text-xs font-sans uppercase tracking-wider transition"
            >
              See all
            </button>
          )}
        </div>

        {/* 3-Column Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GLOBAL_WEDDINGS.map((wedding) => (
            <div
              key={wedding.id}
              onClick={() => onSelectWedding(wedding)}
              className="group bg-[#171410] rounded-2xl overflow-hidden border border-stone-800 hover:border-[#C19A4B]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-md hover:shadow-2xl"
            >
              <div>
                {/* 4/5 Aspect Ratio Photo Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-900">
                  <img
                    src={wedding.coverImage}
                    alt={wedding.couple}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171410] via-black/20 to-transparent" />

                  {/* Monogram Badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-[#C19A4B]/40 flex items-center justify-center text-[11px] font-serif font-bold text-[#E5D7B7]">
                    {wedding.monogram}
                  </div>

                  {/* Hover prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-[#C19A4B] text-[#171410] font-sans font-bold text-xs uppercase tracking-wider shadow-lg">
                      View Wedding Story →
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="text-[11px] font-serif uppercase tracking-widest text-[#C19A4B] mb-1">
                    Wedding
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-[#E5D7B7] transition-colors">
                    {wedding.couple}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    {wedding.venue || wedding.destination}
                  </p>
                  <p className="text-xs text-stone-300 font-sans mt-3 line-clamp-2 leading-relaxed">
                    {wedding.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Palette Dots */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-stone-800/60 mt-4">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-sans">
                  {wedding.guestCount} Guests · {wedding.duration}
                </span>
                <div className="flex items-center gap-1.5">
                  {wedding.palette.map((c, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full border border-stone-700"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
