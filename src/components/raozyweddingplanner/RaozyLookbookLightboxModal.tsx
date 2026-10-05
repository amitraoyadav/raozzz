import React, { useState } from 'react';
import { LookbookItem } from '../../data/raozyWeddingData';

interface RaozyLookbookLightboxModalProps {
  item: LookbookItem | null;
  onClose: () => void;
  onBookLook: (item: LookbookItem) => void;
}

export const RaozyLookbookLightboxModal: React.FC<RaozyLookbookLightboxModalProps> = ({
  item,
  onClose,
  onBookLook
}) => {
  if (!item) return null;

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const images = item.galleryImages && item.galleryImages.length > 0 ? item.galleryImages : [item.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#151210] border border-[#DFC082]/40 rounded-2xl overflow-hidden text-stone-200 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 text-stone-300 hover:text-white flex items-center justify-center text-lg border border-white/20 transition"
          aria-label="Close Lightbox"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Visual Display */}
          <div className="lg:col-span-7 bg-black flex flex-col justify-between">
            <div className="relative h-80 sm:h-96 lg:h-[480px] w-full overflow-hidden">
              <img
                src={images[activeImageIndex] || item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[11px] font-serif text-[#DFC082] border border-[#DFC082]/30 uppercase tracking-widest">
                {item.categoryLabel}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="p-3 bg-[#0F0D0C] border-t border-stone-800 flex items-center gap-2 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-12 rounded overflow-hidden shrink-0 border-2 transition ${
                      activeImageIndex === idx ? 'border-[#DFC082]' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Blueprint & Specification Sidebar */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#DFC082] font-serif uppercase tracking-widest mb-1.5">
                <span>{item.destination}</span>
                <span>•</span>
                <span>{item.venueName}</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                {item.title}
              </h3>

              <div className="inline-block px-2.5 py-0.5 rounded bg-stone-900 border border-stone-800 text-[11px] text-stone-300 font-sans mb-4">
                Theme: <strong className="text-white">{item.theme}</strong>
              </div>

              <p className="text-xs text-stone-300 font-sans leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Color Palette */}
              <div className="mb-6">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-2">
                  Curated Color Palette Swatches:
                </span>
                <div className="flex items-center gap-2">
                  {item.palette.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span
                        className="w-5 h-5 rounded-full border border-stone-700 shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[10px] text-stone-400 font-mono">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Elements */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] text-stone-500 uppercase tracking-widest block">
                  Key Production Elements:
                </span>
                {item.elements.map((el, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFC082]" />
                    <span>{el}</span>
                  </div>
                ))}
              </div>

              {/* In-House Production Advantage */}
              <div className="p-3.5 rounded-lg bg-[#201A15] border border-[#DFC082]/30 text-xs">
                <span className="text-[10px] font-serif uppercase tracking-wider text-[#DFC082] font-semibold block mb-1">
                  In-House Atelier Execution Note:
                </span>
                <ul className="space-y-1 text-stone-300 text-[11px]">
                  {item.inHouseHighlights.map((hl, idx) => (
                    <li key={idx}>• {hl}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-800 space-y-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookLook(item);
                }}
                className="w-full py-3 rounded bg-gradient-to-r from-[#C5A059] to-[#DFC082] text-[#171410] font-serif font-bold text-xs tracking-wider uppercase shadow hover:brightness-110 active:scale-95 transition"
              >
                Inquire &amp; Book This Look
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-center text-xs text-stone-400 hover:text-white"
              >
                Back to Lookbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
