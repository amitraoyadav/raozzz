import React from 'react';
import {
  X,
  Sparkles,
  Building2,
  Car,
  Music,
  Camera,
  Utensils,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES_DATA, WeddingService, DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasServiceModalProps {
  slug: string | null;
  onClose: () => void;
  onOpenInquiry: (serviceTitle?: string) => void;
}

export const DevdasServiceModal: React.FC<DevdasServiceModalProps> = ({
  slug,
  onClose,
  onOpenInquiry,
}) => {
  if (!slug) return null;

  const service: WeddingService | undefined = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-amber-900/10 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Cover image header */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden shrink-0 bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider inline-block">
              Turnkey Wedding Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 line-clamp-1">
              {service.shortDesc}
            </p>
          </div>
        </div>

        {/* Modal content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">Service Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="p-5 rounded-2xl bg-[#FCFBF7] border border-amber-900/10 space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#7A1C30]" />
              <span>What is Included in Our Scope</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1C30] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Sequence */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-900">
              Execution Roadmap
            </h4>
            <div className="space-y-2">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-[#7A1C30] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-xs text-slate-700 leading-normal mt-0.5">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0 flex-wrap gap-3">
          <div className="text-xs text-slate-500">
            Available across all 24 Devdas wedding destinations.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(service.title);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-red-950/20 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Inquire for {service.title}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
