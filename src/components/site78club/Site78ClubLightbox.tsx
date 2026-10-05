import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface Site78ClubLightboxProps {
  isOpen: boolean;
  imageSrc: string | null;
  caption: string;
  onClose: () => void;
}

export const Site78ClubLightbox: React.FC<Site78ClubLightboxProps> = ({
  isOpen,
  imageSrc,
  caption,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image Container */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
        <img
          src={imageSrc}
          alt={caption}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />

        {/* Caption */}
        {caption && (
          <div className="mt-4 text-center text-sm font-light text-stone-300 font-['Jost',sans-serif] tracking-wider">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};
