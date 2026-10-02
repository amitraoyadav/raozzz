import React from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { RathorePortfolioItem } from './rathoreData';

interface GalleryLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: RathorePortfolioItem[];
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
  if (!isOpen || !items[currentIndex]) return null;
  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-stone-800 shadow-2xl">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[75vh] max-w-full object-contain"
          />

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FFD481] text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FFD481] text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-1.5 text-[#FFD481] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Rathore Weddings · Portfolio ({currentIndex + 1} / {items.length})</span>
          </div>
          <h4 className="text-xl font-bold text-white">{currentItem.title}</h4>
          <p className="text-xs text-stone-400 mt-1 max-w-lg">{currentItem.caption}</p>
        </div>
      </div>
    </div>
  );
};
