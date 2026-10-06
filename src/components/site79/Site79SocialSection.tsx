import React from 'react';
import { Instagram, Sparkles, Heart, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { site79Config } from '../../config/site79Config';

export const Site79SocialSection: React.FC = () => {
  const posts = [
    {
      id: 'ig-1',
      likes: '4,892',
      comments: '184',
      caption: 'When 120 kinetic laser beams ignite the midnight hour ✨ #ElysiumDelhi #OwnTheNight',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
      tag: 'Prime Saturday'
    },
    {
      id: 'ig-2',
      likes: '3,219',
      comments: '96',
      caption: 'Dom Pérignon sparkler trains moving through the Mezzanine suites 🍾 #LuxuryNightlife',
      image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=600&q=80',
      tag: 'VIP Mezzanine'
    },
    {
      id: 'ig-3',
      likes: '5,140',
      comments: '215',
      caption: 'Hypnotic melodic frequencies at WAV {{CTRL}} Wednesdays 🎧 #TechnoDelhi',
      image: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=600&q=80',
      tag: 'WAV {{CTRL}}'
    },
    {
      id: 'ig-4',
      likes: '6,402',
      comments: '342',
      caption: 'Empress Royale Thursdays — glamour, high fashion & free flow bubbles 🥂 #LadiesNight',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
      tag: 'Empress Royale'
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#DFB759]" />
              <span>Join The Inner Circle</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
              Follow Us on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Instagram</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-md self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-black" />
            <span>@ElysiumDelhi</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-950 border border-white/10 hover:border-[#DFB759]/60 shadow-xl transition-all duration-500"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-[#DFB759]/40 text-[#DFB759] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  {post.tag}
                </span>
              </div>

              {/* Hover Interactions & Caption */}
              <div className="absolute inset-x-5 bottom-5 z-10 space-y-2">
                <div className="flex items-center gap-4 text-xs font-semibold text-white/90">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-rose-500 fill-current" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-[#DFB759]" />
                    <span>{post.comments}</span>
                  </span>
                </div>

                <p className="text-xs text-gray-300 font-light leading-snug line-clamp-2 font-['Inter']">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
