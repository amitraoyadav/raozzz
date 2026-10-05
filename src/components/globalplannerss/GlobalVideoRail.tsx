import React from 'react';
import { FEATURED_SHORTS, VideoShort } from '../../data/globalPlannerssData';

interface GlobalVideoRailProps {
  onPlayVideo: (video: VideoShort) => void;
}

export const GlobalVideoRail: React.FC<GlobalVideoRailProps> = ({ onPlayVideo }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
            From our celebrations
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-3">
            Watch a few of our weddings
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm">
            Sixty-second films from real celebrations we planned and produced. Tap to play.
          </p>
        </div>

        {/* Video Shorts Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {FEATURED_SHORTS.map((item) => (
            <div
              key={item.id}
              onClick={() => onPlayVideo(item)}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer border border-stone-800 hover:border-[#C19A4B]/60 transition-all shadow-md hover:shadow-2xl flex flex-col justify-between p-4"
            >
              {/* Thumbnail */}
              <img
                src={item.thumb}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              {/* Play Button Icon */}
              <div className="relative z-10 self-end">
                <span className="px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-stone-300 border border-white/10">
                  {item.duration}
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="w-12 h-12 rounded-full bg-[#C19A4B]/90 backdrop-blur-md text-[#171410] flex items-center justify-center text-lg pl-0.5 shadow-xl group-hover:scale-110 transition-transform">
                  ▶
                </div>
              </div>

              {/* Title Overlay */}
              <div className="relative z-10">
                <span className="text-[10px] text-[#C19A4B] uppercase tracking-wider font-semibold block mb-0.5">
                  Wedding Highlight
                </span>
                <h4 className="text-xs sm:text-sm font-serif font-semibold text-white line-clamp-2 leading-snug group-hover:text-[#E5D7B7] transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded border border-[#C19A4B]/40 text-stone-300 hover:text-white text-xs font-sans uppercase tracking-wider hover:bg-white/5 transition"
          >
            More on YouTube →
          </a>
        </div>
      </div>
    </section>
  );
};
