import React, { useState } from 'react';
import { LookbookItem } from '../../data/utsavLuxeData';

interface LookbookModalProps {
  item: LookbookItem | null;
  onClose: () => void;
  onBookLook: (item: LookbookItem) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  item,
  onClose,
  onBookLook
}) => {
  const [activeImg, setActiveImg] = useState<number>(0);

  if (!item) return null;

  const images = item.gallery.length > 0 ? item.gallery : [item.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-scale-up max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E05A47] text-white">
                {item.categoryLabel}
              </span>
              <span className="text-xs text-stone-400 font-medium">
                {item.vibeLabel} · {item.locationTag}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white">
              {item.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-lg hover:bg-white/10 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Main Photo Viewer */}
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-stone-950">
            <img
              src={images[activeImg]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            
            {/* Color Palette Overlay */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
              <span className="text-xs text-white/90 font-medium mr-1">Color Palette:</span>
              {item.colorPalette.map((color, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-xs"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>

            <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
              3D CAD Verified
            </div>
          </div>

          {/* Thumbnails if multiple images */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImg === idx
                      ? 'border-[#E05A47] scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Description & Technical Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-stone-900 text-lg">
                Concept & Scenography Description
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block mb-2">
                  Architectural Highlights:
                </span>
                <ul className="space-y-1 text-xs text-stone-600">
                  {item.highlights.map((hl, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#E05A47] font-bold">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing & Logistics Box */}
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                  Budget Classification
                </span>
                <span className="text-sm font-bold text-[#E05A47]">
                  {item.priceTier}
                </span>
                <div className="font-serif text-2xl font-bold text-stone-950 mt-1">
                  {item.estimatedCost}
                </div>
              </div>

              <div className="space-y-2 text-xs border-y border-stone-200 py-3 text-stone-600">
                <div className="flex justify-between">
                  <span>Guest Scale:</span>
                  <span className="font-bold text-stone-900">{item.guestCapacity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Time:</span>
                  <span className="font-bold text-stone-900">8 Hours Prior to Event</span>
                </div>
                <div className="flex justify-between">
                  <span>3D CAD Model:</span>
                  <span className="font-bold text-emerald-600">Ready for Customization</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBookLook(item);
                }}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] shadow-md shadow-[#E05A47]/30 transition-all hover:scale-[1.01]"
              >
                Inquire & Customize This Look
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
