import React, { useState } from 'react';
import {
  Eye,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Disc,
  Sparkles,
  Camera
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../../data/site77Data';

interface Site77GalleryProps {
  onOpenBooking: () => void;
}

export const Site77Gallery: React.FC<Site77GalleryProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'dance-floor', label: 'Dance Arena' },
    { id: 'vip-lounge', label: 'VIP Mezzanine' },
    { id: 'djs-artists', label: 'DJs & Artists' },
    { id: 'mixology', label: 'Molecular Bar' },
    { id: 'lasers', label: '3D Laser Rig' }
  ];

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const activeLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section className="py-24 bg-[#07080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16140D] mb-4">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F3E5AB] uppercase">
              VISUAL MOSAIC
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            THE NIGHTCLUB <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
              INSPIRATION GALLERY
            </span>
          </h2>

          <div className="flex items-center justify-center space-x-4 max-w-xs mx-auto my-5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            <Disc className="w-3.5 h-3.5 text-[#D4AF37]" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          </div>

          <p className="text-gray-300 text-sm sm:text-base font-light">
            A glimpse into the euphoric energy, kinetic lighting spectacles, and VIP luxury that define
            every evening at Nocturna Goa.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#12141A] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37] bg-black/50 aspect-[4/3] shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Overlay Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">
                    {item.category.replace('-', ' ')}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#F3E5AB] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-300 font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:text-[#D4AF37] hover:bg-white/20 transition-all z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div
            onClick={e => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#0D0F14] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl animate-scaleUp"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-0.5">
                  {activeLightboxItem.category.replace('-', ' ')} · IMAGE {lightboxIndex + 1} OF {filteredItems.length}
                </span>
                <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wide">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs text-gray-400 font-light mt-1">
                  {activeLightboxItem.caption}
                </p>
              </div>

              <button
                onClick={() => {
                  setLightboxIndex(null);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs font-mono uppercase tracking-wider shadow hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] flex-shrink-0"
              >
                Book VIP Table
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
