import React, { useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Sparkles,
  Layers
} from 'lucide-react';
import { GalleryPhotoItem } from '../../data/psrWeddingsData';

interface PsrGalleryLightboxModalProps {
  photos: GalleryPhotoItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const PsrGalleryLightboxModal: React.FC<PsrGalleryLightboxModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl">
      {/* Top Header with title and close button */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#DFBE78] text-[#1A0509] font-bold text-[10px] uppercase tracking-wider">
              {currentPhoto.category}
            </span>
            <span className="text-xs text-stone-400 font-mono">
              {currentIndex + 1} of {photos.length}
            </span>
          </div>
          <h3 className="font-['Playfair_Display',serif] text-base sm:text-xl font-bold text-white">
            {currentPhoto.title}
          </h3>
          <span className="text-xs text-[#DFBE78] flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {currentPhoto.location}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Display */}
      <div className="relative max-w-5xl max-h-[80vh] px-4 sm:px-12 flex items-center justify-center select-none">
        <img
          src={currentPhoto.imageUrl}
          alt={currentPhoto.title}
          className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
        />
      </div>

      {/* Navigation Controls */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom instructions */}
      <div className="absolute bottom-4 inset-x-0 text-center text-[11px] text-stone-400 hidden sm:block">
        Use Arrow Keys or buttons to navigate • Press ESC to close
      </div>
    </div>
  );
};
