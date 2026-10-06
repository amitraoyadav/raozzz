import React, { useState } from 'react';
import { Camera, Eye, X, Play, Film, Sparkles, Filter } from 'lucide-react';
import { PHOTO_GALLERY, WEEKEND_MOMENTS, GalleryPhoto } from '../../data/site79Data';

export const Site79GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'ambience', label: 'Ambience & Lasers' },
    { id: 'vip-lounge', label: 'VIP Lounge & Tables' },
    { id: 'djs', label: 'DJs & Artists' },
    { id: 'cocktails', label: 'Mixology & Champagne' },
    { id: 'crowd', label: 'Party Moments' }
  ];

  const filtered =
    activeCategory === 'all'
      ? PHOTO_GALLERY
      : PHOTO_GALLERY.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#050505] text-white min-h-screen font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          <Camera className="w-3.5 h-3.5" />
          <span>Visual Archive</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
          Nightlife <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Gallery</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed">
          Glimpse the midnight world of Elysium: laser-streaked arenas, champagne sparkler parades, world-renowned guest DJs, and Delhi’s most glamorous crowd.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black shadow-md'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-zinc-950 border border-white/10 hover:border-[#DFB759]/60 shadow-xl transition-all duration-500 aspect-[4/3]"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between z-10">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#DFB759] tracking-widest block mb-1">
                    {photo.category.replace('-', ' ')}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-['Cinzel',serif] leading-tight">
                    {photo.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center group-hover:bg-[#DFB759] group-hover:text-black transition-colors shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekend Video Moments Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <Film className="w-5 h-5 text-[#DFB759]" />
          <h2 className="text-2xl sm:text-3xl font-black font-['Cinzel',serif] text-white">
            Weekend Video Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEEKEND_MOMENTS.map((moment) => (
            <div
              key={moment.id}
              className="group relative rounded-3xl overflow-hidden aspect-[9/14] bg-zinc-950 border border-white/10 hover:border-[#DFB759]/60 transition-all duration-300 shadow-xl"
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/70 border border-white/40 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#DFB759] group-hover:text-black transition-all shadow-2xl">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              <div className="absolute inset-x-4 bottom-4 text-left">
                <span className="text-[10px] uppercase font-bold text-[#DFB759] tracking-wider block mb-1">
                  {moment.tag}
                </span>
                <h3 className="text-base font-bold text-white font-['Cinzel',serif] leading-tight">
                  {moment.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-[#DFB759]/40 bg-zinc-950 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              className="w-full h-auto max-h-[75vh] object-contain"
            />
            <div className="p-5 bg-[#0e0c08] border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#DFB759] tracking-widest block">
                  {selectedPhoto.category.replace('-', ' ')}
                </span>
                <h4 className="text-lg font-bold text-white font-['Cinzel',serif]">
                  {selectedPhoto.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 hover:text-white text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
