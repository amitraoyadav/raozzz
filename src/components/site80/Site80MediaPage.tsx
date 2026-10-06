import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles, Filter, Download } from 'lucide-react';
import { MEDIA_GALLERY, MediaPhoto } from '../../data/site80Data';
import { site80Config } from '../../config/site80Config';

interface Site80MediaPageProps {
  onOpenBooking: () => void;
}

export const Site80MediaPage: React.FC<Site80MediaPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<MediaPhoto | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'parties', label: 'Party Nights' },
    { key: 'ambience', label: 'Club Ambience' },
    { key: 'vip', label: 'VIP Lounge' },
    { key: 'mixology', label: 'Craft Mixology' },
    { key: 'djs', label: 'Artists & DJs' }
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? MEDIA_GALLERY
      : MEDIA_GALLERY.filter((p) => p.category === activeCategory);

  const currentIndex = selectedPhoto
    ? filteredPhotos.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const nextPhoto = () => {
    if (currentIndex >= 0) {
      const nextIdx = (currentIndex + 1) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[nextIdx]);
    }
  };

  const prevPhoto = () => {
    if (currentIndex >= 0) {
      const prevIdx = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[prevIdx]);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-black text-white min-h-screen font-['Inter']">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Anthology</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal font-['Alegreya_Sans',sans-serif] uppercase tracking-wide leading-tight">
          Media <span className="text-[#FFD700]">Gallery</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-400 font-light font-['Alegreya_Sans',sans-serif] leading-relaxed">
          High-fashion crowds, kinetic light installations, VIP bottle parades, and international artist spectacles at {site80Config.BRAND_NAME}.
        </p>

        {/* Filter Categories Bar */}
        <div className="mt-8 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#FFD700] text-black shadow-[0_0_20px_rgba(255,215,0,0.4)]'
                  : 'bg-[#111111] text-gray-300 hover:text-white hover:bg-[#1a1a1a] border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Media Photos Masonry / Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0c0c0c] border border-white/10 hover:border-[#FFD700]/70 cursor-pointer transition-all duration-500 shadow-xl"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-90 group-hover:brightness-100"
                loading="lazy"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon & Category Badge */}
              <div className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white/80 group-hover:text-[#FFD700] group-hover:border-[#FFD700] transition-colors shadow-lg">
                <Eye className="w-4 h-4" />
              </div>

              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-black/80 border border-[#FFD700]/40 text-[#FFD700]">
                  {photo.category}
                </span>
              </div>

              {/* Title & Date */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-base sm:text-lg font-bold font-['Alegreya_Sans',sans-serif] text-white group-hover:text-[#FFD700] transition-colors leading-snug">
                  {photo.title}
                </h3>
                <span className="text-[11px] text-gray-400 font-mono block mt-0.5">
                  {photo.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-b from-[#111111] to-black border border-white/10">
          <h3 className="text-2xl sm:text-3xl font-bold font-['Alegreya_Sans',sans-serif] text-white">
            Be Part of the Next Frame
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mt-2 font-light">
            Reserve your VIP mezzanine table or get on the weekend guestlist to experience the capital’s most electric nightlife.
          </p>
          <div className="mt-5">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#FFD700] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-[0_0_25px_rgba(255,215,0,0.5)]"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-50 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav arrows */}
          {filteredPhotos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700] transition-colors cursor-pointer z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700] transition-colors cursor-pointer z-50"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>

            <div className="p-5 bg-[#0d0d0d] border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-widest block">
                  {selectedPhoto.category} • {selectedPhoto.date}
                </span>
                <h4 className="text-xl font-bold font-['Alegreya_Sans',sans-serif] text-white">
                  {selectedPhoto.title}
                </h4>
              </div>

              <div className="text-xs text-gray-400 font-mono">
                {currentIndex + 1} / {filteredPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
