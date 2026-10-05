import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../../data/site74Data';

export const Site74Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Ceremony', 'Mandap', 'Reception', 'Sangeet', 'Decor', 'Portraits'];

  const filteredPhotos = GALLERY_PHOTOS.filter(photo => {
    if (activeCategory === 'All') return true;
    return photo.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  };

  return (
    <section id="gallery-section" className="py-20 lg:py-28 px-5 sm:px-6 bg-[#141210] text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400">
            Real Moments · Real Grandeur
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-5xl text-white">
            Inspiration Gallery
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
            Explore authentic celebratory moments captured across our palatial courtyards, sunset shorelines, and opulent ballrooms.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4B26F] via-[#C5A059] to-[#A37E36] text-[#141210] font-bold shadow-lg'
                  : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-80 rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl cursor-pointer"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="font-mono text-[10px] text-amber-300 uppercase tracking-widest font-bold">
                  {photo.category} · {photo.destination}
                </span>
                <h4 className="font-serif font-medium text-lg text-white leading-snug">
                  {photo.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1 font-light pt-0.5">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-colors z-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={e => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={e => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption Display */}
            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center text-center space-y-4">
              <img
                src={filteredPhotos[lightboxIndex].imageUrl}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
              />

              <div className="space-y-1">
                <span className="font-mono text-xs text-amber-300 uppercase tracking-widest font-bold">
                  {filteredPhotos[lightboxIndex].category} · {filteredPhotos[lightboxIndex].destination}
                </span>
                <h3 className="font-serif text-2xl font-medium text-white">
                  {filteredPhotos[lightboxIndex].title}
                </h3>
                <p className="text-sm text-stone-300 max-w-xl mx-auto font-light">
                  {filteredPhotos[lightboxIndex].caption}
                </p>
                <span className="font-mono text-[11px] text-stone-500 block pt-1">
                  Photo {lightboxIndex + 1} of {filteredPhotos.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Site74Gallery;
