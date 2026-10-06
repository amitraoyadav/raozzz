import React, { useState } from 'react';
import { Sparkles, Eye, X, Play, Camera, Film, ArrowRight } from 'lucide-react';
import { PHOTO_GALLERY, WEEKEND_MOMENTS, GalleryPhoto } from '../../data/site79Data';

interface Site79GalleryShowcaseProps {
  onNavigateGallery?: () => void;
}

export const Site79GalleryShowcase: React.FC<Site79GalleryShowcaseProps> = ({
  onNavigateGallery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'ambience', label: 'Ambience & Lasers' },
    { id: 'vip-lounge', label: 'VIP Lounge' },
    { id: 'djs', label: 'DJ Arena' },
    { id: 'cocktails', label: 'Mixology' },
    { id: 'crowd', label: 'Crowd Energy' }
  ];

  const filteredPhotos =
    selectedCategory === 'all'
      ? PHOTO_GALLERY
      : PHOTO_GALLERY.filter(p => p.category === selectedCategory);

  return (
    <section className="relative py-20 sm:py-28 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
              <Camera className="w-3.5 h-3.5 text-[#DFB759]" />
              <span>Visual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">The Energy</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black shadow-md'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setActiveLightboxImage(photo)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 border border-white/10 hover:border-[#DFB759]/60 shadow-xl transition-all duration-500 ${
                idx === 0 || idx === 3 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square'
              }`}
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between z-10">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#DFB759] tracking-widest block mb-1">
                    {photo.category.replace('-', ' ')}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white font-['Cinzel',serif] leading-tight drop-shadow-md">
                    {photo.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center group-hover:bg-[#DFB759] group-hover:text-black transition-colors shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thrilling Weekend Video Moments Row */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-[#DFB759]" />
              <h3 className="text-lg sm:text-xl font-bold font-['Cinzel',serif] text-white">
                Thrilling Weekend Reels
              </h3>
            </div>
            {onNavigateGallery && (
              <button
                onClick={onNavigateGallery}
                className="text-xs uppercase tracking-widest text-[#DFB759] hover:underline flex items-center gap-1.5 font-bold cursor-pointer"
              >
                <span>View Full Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {WEEKEND_MOMENTS.map((m) => (
              <div
                key={m.id}
                className="group relative rounded-2xl overflow-hidden aspect-[9/14] bg-zinc-950 border border-white/10 hover:border-[#DFB759]/50 transition-all duration-300"
              >
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Floating Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/60 border border-white/40 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#DFB759] group-hover:text-black transition-all shadow-xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute inset-x-3 bottom-3 text-left">
                  <span className="text-[9px] uppercase font-bold text-[#DFB759] tracking-wider block">
                    {m.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-['Cinzel',serif] leading-tight">
                    {m.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setActiveLightboxImage(null)}
        >
          <button
            onClick={() => setActiveLightboxImage(null)}
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
              src={activeLightboxImage.imageUrl}
              alt={activeLightboxImage.title}
              className="w-full h-auto max-h-[75vh] object-contain"
            />
            <div className="p-5 bg-[#0e0c08] border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#DFB759] tracking-widest block">
                  {activeLightboxImage.category}
                </span>
                <h4 className="text-lg font-bold text-white font-['Cinzel',serif]">
                  {activeLightboxImage.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 hover:text-white text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
