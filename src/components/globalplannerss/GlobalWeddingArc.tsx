import React from 'react';
import { WEDDING_ARC_FUNCTIONS, ArcFunction } from '../../data/globalPlannerssData';

interface GlobalWeddingArcProps {
  onSelectArc: (fn: ArcFunction) => void;
}

export const GlobalWeddingArc: React.FC<GlobalWeddingArcProps> = ({ onSelectArc }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-3">
            How an Indian wedding unfolds
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Three days. Five experiences. One arc.
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm leading-relaxed">
            We design each function as its own world — same family, new atmosphere. 
            Every card opens the real thing: our archive of that function, from celebrations we produced.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {WEDDING_ARC_FUNCTIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectArc(item)}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer border border-stone-800 hover:border-[#C19A4B]/60 transition-all duration-300 flex flex-col justify-end p-5 shadow-lg hover:shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={`${item.name} Decor by Global Plannerss`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Text Card Body */}
              <div className="relative z-10 space-y-2">
                <span className="font-serif text-2xl font-bold text-white group-hover:text-[#E5D7B7] transition-colors block">
                  {item.name}
                </span>
                <p className="text-xs text-stone-300 font-sans leading-relaxed line-clamp-3">
                  {item.tagline}
                </p>
                <div className="pt-2 text-[11px] font-sans font-semibold text-[#C19A4B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{item.photoCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
