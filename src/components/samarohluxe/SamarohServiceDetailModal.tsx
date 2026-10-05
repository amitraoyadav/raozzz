import React from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Palette, 
  Compass, 
  Camera, 
  Music, 
  Utensils 
} from 'lucide-react';
import { ServiceOffering } from '../../data/samarohLuxeData';

interface SamarohServiceDetailModalProps {
  service: ServiceOffering | null;
  onClose: () => void;
  onOpenConsultation: (serviceName: string) => void;
}

export const SamarohServiceDetailModal: React.FC<SamarohServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultation
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#1C1917] text-white border border-stone-700 w-full max-w-3xl rounded-3xl shadow-2xl z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Header */}
        <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-900/90 backdrop-blur-md sticky top-0 z-20">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#E06D53]">
              Samaroh Luxe Service Suite
            </span>
            <h3 className="font-['Fraunces',serif] text-xl font-bold text-white">
              {service.title}
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
        <div className="p-4 sm:p-8 space-y-6 overflow-y-auto">
          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden h-64 sm:h-80 relative border border-stone-800 shadow-xl">
            <img
              src={service.coverImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {service.pricingRange}
              </span>
            </div>
          </div>

          {/* Tagline & Full Description */}
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white font-['Fraunces']">
              Service Scope &amp; Overview
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#E06D53]">
              Standard Inclusions &amp; Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-300 bg-stone-900 p-3 rounded-xl border border-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The In-House Advantage */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#291F1C] to-[#1F1916] border border-stone-750 text-xs space-y-1">
            <span className="font-bold text-[#E06D53] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E06D53]" />
              <span>The Samaroh Advantage</span>
            </span>
            <p className="text-stone-300 font-light leading-relaxed">
              {service.whyChooseUs}
            </p>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-4 sm:p-6 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          <div>
            <span className="text-xs text-stone-400 block">Require {service.title}?</span>
            <span className="text-sm font-bold text-white">Standalone service or bundled into our full wedding suite.</span>
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
                onOpenConsultation(service.title);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E06D53] to-[#C8523B] text-white text-xs font-bold hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inquire For Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
