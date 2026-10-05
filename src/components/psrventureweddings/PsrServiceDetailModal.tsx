import React from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Workflow
} from 'lucide-react';
import { WeddingServiceItem } from '../../data/psrWeddingsData';
import { siteConfig } from '../../config/siteConfig';

interface PsrServiceDetailModalProps {
  service: WeddingServiceItem | null;
  onClose: () => void;
  onOpenConsultation: (serviceTitle: string) => void;
}

export const PsrServiceDetailModal: React.FC<PsrServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultation
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-6">
        <div className="relative bg-[#1A0509] text-white rounded-3xl max-w-3xl w-full border border-[#C5A059]/40 shadow-2xl overflow-hidden my-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner */}
          <div className="relative h-60 sm:h-72">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0509] via-[#1A0509]/60 to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFBE78] block">
                PSR Specialized Capability
              </span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Detailed Description */}
            <div className="space-y-2">
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#DFBE78]" />
                <span>Service Philosophy & Approach</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Scope of Deliverables */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#DFBE78]" />
                <span>Comprehensive Deliverables Included</span>
              </h4>
              <div className="space-y-2">
                {service.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-stone-200 bg-[#24080D] p-3 rounded-xl border border-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#DFBE78] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Process */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#DFBE78]" />
                <span>Our 4-Stage Methodology</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.processSteps.map((step, idx) => (
                  <div key={idx} className="bg-[#24080D] p-3 rounded-xl border border-stone-800 text-xs space-y-1">
                    <span className="text-[10px] font-mono text-[#DFBE78] font-bold block">
                      STAGE 0{idx + 1}
                    </span>
                    <p className="text-stone-300 font-light leading-tight">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Brand Advantage */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#2B090F] to-[#1F070B] border border-[#C5A059]/30 text-xs space-y-1">
              <span className="text-[#DFBE78] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#DFBE78]" />
                <span>The {siteConfig.SITE_NAME} Advantage</span>
              </span>
              <p className="text-stone-300 font-light">
                {service.whyUs}
              </p>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-400 block">Require this service for your celebration?</span>
                <span className="text-sm font-bold text-white">We provide bespoke standalone or bundled planning proposals.</span>
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
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire For Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
