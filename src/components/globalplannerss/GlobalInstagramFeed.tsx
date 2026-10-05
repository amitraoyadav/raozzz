import React from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';

export const GlobalInstagramFeed: React.FC = () => {
  const posts = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80',
      caption: 'The golden hour vows in Udaipur.',
      isVideo: false
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&q=80',
      caption: 'Sangeet stage under Moorish arches.',
      isVideo: true
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=500&q=80',
      caption: 'Haldi sunshine and organic marigolds.',
      isVideo: false
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=500&q=80',
      caption: 'Boho chic Mehendi lounge setup.',
      isVideo: false
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=500&q=80',
      caption: 'Black-tie reception chandelier canopy.',
      isVideo: false
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=500&q=80',
      caption: 'Beachfront sunset walk at South Goa.',
      isVideo: true
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0D0B0A] text-stone-200 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
            @globalplannerss
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-3">
            Moments, as they happen
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm">
            Follow the live celebrations on Instagram
          </p>
        </div>

        {/* 6 Square Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-xl overflow-hidden border border-stone-800 hover:border-[#C19A4B]/60 transition-all cursor-pointer"
            >
              <img
                src={post.src}
                alt="Instagram Moment by Global Plannerss"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <span className="text-[11px] font-sans text-white line-clamp-2">
                  {post.caption}
                </span>
                {post.isVideo && (
                  <span className="absolute top-2 right-2 text-xs text-[#C19A4B]">▶</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={globalPlannerssConfig.INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded border border-[#C19A4B]/40 text-stone-300 hover:text-white text-xs font-sans uppercase tracking-wider hover:bg-white/5 transition inline-block"
          >
            Follow on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};
