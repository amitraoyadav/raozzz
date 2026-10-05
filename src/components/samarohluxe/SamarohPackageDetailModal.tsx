import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Calendar, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  Eye
} from 'lucide-react';
import { DecorThemePackage } from '../../data/samarohLuxeData';

interface SamarohPackageDetailModalProps {
  packageItem: DecorThemePackage | null;
  onClose: () => void;
  onOpenConsultation: (packageName: string) => void;
}

export const SamarohPackageDetailModal: React.FC<SamarohPackageDetailModalProps> = ({
  packageItem,
  onClose,
  onOpenConsultation
}) => {
  if (!packageItem) return null;

  const [activeImage, setActiveImage] = useState<string>(packageItem.primaryImage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#1C1917] text-white border border-stone-700 w-full max-w-4xl rounded-3xl shadow-2xl z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Header */}
        <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-900/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#E06D53]/20 text-[#E06D53] border border-[#E06D53]/30">
              {packageItem.categoryLabel}
            </span>
            <h3 className="font-['Fraunces',serif] text-lg sm:text-xl font-bold text-white truncate max-w-md">
              {packageItem.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-8 space-y-8 overflow-y-auto">
          {/* Main Visual & Gallery */}
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden h-72 sm:h-96 relative border border-stone-800 shadow-xl">
              <img
                src={activeImage}
                alt={packageItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
                <span>3D Renders Ready</span>
              </div>
            </div>

            {/* Thumbnail Row */}
            {packageItem.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {packageItem.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImage === img ? 'border-[#E06D53] scale-105' : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing & Ideal For Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-stone-900 p-5 rounded-2xl border border-stone-800">
            <div>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Starting Base Price</span>
              <span className="font-['Fraunces',serif] text-2xl font-bold text-[#E06D53]">
                {packageItem.priceFormatted}
              </span>
              <span className="text-[10px] text-stone-500 block">Excl. applicable taxes &amp; DG sets</span>
            </div>

            <div>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Ideal Event Scale</span>
              <span className="text-xs font-semibold text-stone-200 mt-1 block">
                {packageItem.idealFor}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block">3D Render Delivery</span>
              <span className="text-xs font-semibold text-stone-200 mt-1 block flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Within {packageItem.renderTimeDays} business days</span>
              </span>
            </div>
          </div>

          {/* Tagline & Vibe */}
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white font-['Fraunces']">
              Design Aesthetic &amp; Mood
            </h4>
            <p className="text-stone-300 text-sm font-light leading-relaxed">
              {packageItem.tagline}. Vibe profile: <strong className="text-white font-medium">{packageItem.vibe}</strong>.
            </p>
          </div>

          {/* Key Design Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-wider font-bold text-[#E06D53]">
              Key Package Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {packageItem.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-stone-300 bg-stone-900/60 p-3 rounded-xl border border-stone-850">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Area by Area Inclusions */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-wider font-bold text-[#E06D53]">
              Itemized Area Deliverables
            </h4>
            <div className="space-y-2.5">
              {packageItem.inclusions.map((inc, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-stone-850 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-stone-100 min-w-44">{inc.area}</span>
                  <span className="text-stone-400 font-light flex-1">{inc.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customization Options */}
          <div className="p-4 rounded-xl bg-[#241E1C] border border-stone-750 text-xs space-y-2">
            <span className="font-bold text-[#E06D53] uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Available Custom Upgrades</span>
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-stone-300">
              {packageItem.customizationOptions.map((opt, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="text-[#E06D53] font-bold">•</span>
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-4 sm:p-6 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          <div>
            <span className="text-xs text-stone-400 block">Want this theme tailored to your venue?</span>
            <span className="text-sm font-bold text-white">We create 3D renders matching your specific hall or lawn.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-full border border-stone-700 text-stone-300 hover:text-white text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(packageItem.title);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E06D53] to-[#C8523B] text-white text-xs font-bold hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book This Theme</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
