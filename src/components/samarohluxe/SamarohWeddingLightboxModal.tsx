import React, { useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Sparkles 
} from 'lucide-react';

interface SamarohWeddingLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (newIndex: number) => void;
  title: string;
  subtitle?: string;
}

export const SamarohWeddingLightboxModal: React.FC<SamarohWeddingLightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  title,
  subtitle
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onIndexChange((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onIndexChange((currentIndex + 1) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl">
      {/* Top Header Bar */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          <span className="text-xs text-[#E06D53] font-bold uppercase tracking-widest block">
            Real Celebration Lookbook
          </span>
          <h4 className="font-['Fraunces',serif] text-base sm:text-xl font-bold text-white">
            {title}
          </h4>
          {subtitle && (
            <span className="text-xs text-stone-400 block mt-0.5">{subtitle}</span>
          )}
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer border border-stone-700"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Display */}
      <div className="relative max-w-5xl max-h-[80vh] w-full p-4 flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl border border-stone-800"
        />

        {/* Prev / Next Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => onIndexChange((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white transition-colors cursor-pointer border border-stone-700 shadow-xl"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => onIndexChange((currentIndex + 1) % images.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white transition-colors cursor-pointer border border-stone-700 shadow-xl"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Counter */}
      <div className="absolute bottom-6 inset-x-0 text-center text-xs text-stone-400 font-mono">
        <span>{currentIndex + 1} / {images.length}</span>
      </div>
    </div>
  );
};
