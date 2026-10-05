import React from 'react';
import { RaozyService } from '../../data/raozyWeddingData';

interface RaozyServiceDetailModalProps {
  service: RaozyService | null;
  onClose: () => void;
  onBookService: (service: RaozyService) => void;
}

export const RaozyServiceDetailModal: React.FC<RaozyServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#161310] border border-[#DFC082]/40 rounded-2xl p-6 sm:p-8 text-stone-200 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 text-xl focus:outline-none"
          aria-label="Close Service Modal"
        >
          ✕
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="border-b border-stone-800 pb-4">
            <span className="text-[10px] font-serif text-[#DFC082] uppercase tracking-widest block mb-1">
              Pillar Deliverables · 100% In-House Stewardship
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {service.title}
            </h3>
            <p className="text-xs text-[#DFC082] mt-1 font-sans">
              {service.keyStats}
            </p>
          </div>

          {/* Full Narrative */}
          <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
            {service.longDesc}
          </p>

          {/* Detailed Deliverables List */}
          <div>
            <h4 className="text-xs font-serif uppercase tracking-wider text-white mb-3">
              Included Deliverables &amp; Protocols:
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300">
                  <span className="w-5 h-5 rounded-full bg-[#DFC082]/20 text-[#DFC082] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* In-House Difference Box */}
          <div className="p-4 rounded-xl bg-[#221B14] border border-[#DFC082]/30 text-xs">
            <span className="text-[10px] font-serif uppercase tracking-widest text-[#DFC082] font-semibold block mb-1">
              The Raozy Distinction vs Outsourced Planners:
            </span>
            <p className="text-stone-300 leading-relaxed">
              {service.inHouseDifference}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookService(service);
              }}
              className="flex-1 py-3 px-4 rounded bg-gradient-to-r from-[#C5A059] to-[#DFC082] text-[#171410] font-serif font-bold text-xs tracking-wider uppercase shadow hover:brightness-110 active:scale-95 transition"
            >
              Inquire For This Service
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-6 rounded bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white text-xs font-sans border border-stone-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
