import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_DATA, GalleryPhoto } from '../../data/site75Data';

export const Site75Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['all', 'Mandap', 'Decor', 'Ceremony', 'Reception', 'Portraits', 'Sangeet', 'Haldi'];

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(p => p.category === activeCategory);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <section id="gallery-section" className="py-24 sm:py-32 bg-[#0E131F] text-white border-t border-[#20293D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            Visual Poetry
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Inspiration <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#D4AF37]">
              Gallery &amp; Mandaps
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            A curated visual compendium of bespoke mandaps, crystal canopies, candid emotion, and architectural wedding installations.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-[#080B12] font-bold shadow-md'
                  : 'bg-[#131A29] text-slate-300 hover:text-white border border-[#20293D]'
              }`}
            >
              {cat === 'all' ? 'All Gallery' : cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#20293D] hover:border-[#D4AF37]/60 shadow-xl cursor-pointer"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill Top Left */}
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#080B12]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
                {photo.category}
              </span>

              {/* Enlarge Icon Top Right */}
              <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#080B12]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              </span>

              {/* Caption Bottom */}
              <div className="absolute bottom-5 left-5 right-5 text-left space-y-1">
                <span className="text-[11px] font-mono text-[#D4AF37] uppercase flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {photo.destination}
                </span>
                <h4 className="font-serif text-lg text-white font-medium group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {photo.title}
                </h4>
                <p className="text-xs text-stone-300 font-light line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-200">
          
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#080B12] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length)}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#080B12] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#080B12] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Photo & Caption */}
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={filteredPhotos[lightboxIndex].imageUrl}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center space-y-1 max-w-2xl px-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37]">
                {filteredPhotos[lightboxIndex].category} · {filteredPhotos[lightboxIndex].destination} ({lightboxIndex + 1} of {filteredPhotos.length})
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs text-stone-300 font-light">
                {filteredPhotos[lightboxIndex].caption}
              </p>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};

export default Site75Gallery;
