import React from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { LuxeSpaceGalleryItem } from './luxeSpaceData';

interface GalleryLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LuxeSpaceGalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate
}) => {
  if (!isOpen || items.length === 0) return null;
  const currentItem = items[currentIndex] || items[0];

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-stone-800 transition-colors cursor-pointer z-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-stone-800 transition-colors cursor-pointer z-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative w-full h-[65vh] flex items-center justify-center">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-stone-800"
          />
        </div>
        <div className="mt-4 text-center">
          <div className="text-[#c5a059] font-mono text-xs uppercase tracking-widest">
            {currentIndex + 1} / {items.length} &bull; {currentItem.category}
          </div>
          <h4 className="text-xl font-serif text-white mt-1">{currentItem.title}</h4>
          <p className="text-xs text-[#a09a8f] mt-0.5 max-w-xl mx-auto">{currentItem.caption}</p>
        </div>
      </div>
    </div>
  );
};
