import React, { useState } from 'react';
import { POST_EVENT_ALBUMS, PostEventAlbum } from '../../data/site80Data';
import { Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const Site80PostEventGrid: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<PostEventAlbum | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const openAlbum = (album: PostEventAlbum) => {
    setSelectedAlbum(album);
    setActivePhotoIdx(0);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedAlbum) return;
    setActivePhotoIdx((prev) => (prev + 1) % selectedAlbum.photos.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedAlbum) return;
    setActivePhotoIdx((prev) => (prev - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-black text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFD700] block mb-2 font-['Inter']">
            Memories of the Night
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal font-['Alegreya_Sans',sans-serif] uppercase tracking-wide text-white">
            Post Event <span className="text-[#FFD700]">Albums</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl mx-auto font-light font-['Inter']">
            Browse through photographs from previous unforgettable evenings, high-energy headline DJ showcases, and celebrity visits.
          </p>
        </div>

        {/* 4-Column Loop Grid with Custom Reference Hover Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POST_EVENT_ALBUMS.map((album) => (
            <div
              key={album.id}
              onClick={() => openAlbum(album)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-[#111111] border border-white/10 hover:border-white/40 transition-all duration-500 shadow-xl flex flex-col justify-end p-6 select-none"
            >
              {/* Background Image */}
              <img
                src={album.imageUrl}
                alt={album.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 brightness-80 contrast-105"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-40" />

              {/* Reference-style White Slide-Up Hover Effect Sheet */}
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[55%] bg-white transition-all duration-500 ease-out z-10" />

              {/* Top Notch Circular Date Badge (Reference Elementor style) */}
              <div className="absolute top-4 left-4 z-20">
                <div className="flex items-center justify-center px-3.5 py-1 rounded-full bg-black/75 border border-[#FFD700]/60 text-[#FFD700] text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-lg">
                  {album.dateShort}
                </div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 space-y-1.5 transition-colors duration-300">
                <h3 className="text-xl sm:text-2xl font-normal font-['Alegreya_Sans',sans-serif] leading-tight text-white group-hover:text-black transition-colors duration-300">
                  {album.title}
                </h3>

                {/* Photo Count (Slides up on hover) */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 group-hover:text-neutral-800 transition-all duration-300 transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <Camera className="w-4 h-4 text-[#DFB759] group-hover:text-black" />
                  <span className="font-semibold font-['Roboto',sans-serif]">
                    {album.photoCount} Photos
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Album Photo Lightbox Modal */}
      {selectedAlbum && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedAlbum(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedAlbum(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-50 transition-colors"
            aria-label="Close Album Modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Frame */}
            <div className="relative w-full h-[60vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedAlbum.photos[activePhotoIdx]}
                alt={`${selectedAlbum.title} photo`}
                className="max-w-full max-h-full object-contain"
              />

              {/* Prev / Next Arrows */}
              {selectedAlbum.photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700] transition-colors cursor-pointer"
                    aria-label="Previous Photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700] transition-colors cursor-pointer"
                    aria-label="Next Photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Bar Info */}
            <div className="p-5 bg-[#0e0e0e] border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-widest block">
                  {selectedAlbum.dateShort} • Album Archive
                </span>
                <h4 className="text-xl font-bold font-['Alegreya_Sans',sans-serif] text-white">
                  {selectedAlbum.title}
                </h4>
              </div>

              <div className="text-xs text-gray-400 font-mono">
                {activePhotoIdx + 1} / {selectedAlbum.photos.length} Photos
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
