import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, ChevronRight, X } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../../data/site75Data';

interface Site75ServicesProps {
  onOpenPlanning: () => void;
  selectedServiceSlug?: string;
}

export const Site75Services: React.FC<Site75ServicesProps> = ({
  onOpenPlanning,
  selectedServiceSlug
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(() => {
    if (selectedServiceSlug) {
      return SERVICES_DATA.find(s => s.slug === selectedServiceSlug) || null;
    }
    return null;
  });

  return (
    <section className="py-24 sm:py-32 bg-[#0E131F] text-white border-t border-[#20293D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            Signature Capabilities
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            The Eight Pillars of <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#D4AF37]">
              Haute Celebration
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Every celebration requires a harmonious convergence of scenography, logistical mastery, musical curation, and genuine heartfelt hospitality.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#131A29] rounded-3xl overflow-hidden border border-[#20293D] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl cursor-pointer"
              onClick={() => setActiveModalService(service)}
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131A29] via-[#131A29]/30 to-transparent" />
                  
                  {/* Number Badge */}
                  <span className="absolute top-4 left-4 w-7 h-7 rounded-full bg-[#080B12]/80 backdrop-blur-md border border-white/10 flex items-center justify-center font-mono text-[11px] text-[#D4AF37]">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 text-left">
                  <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-mono tracking-wider uppercase font-light">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-slate-300">
                <span className="text-[11px] text-stone-400 group-hover:text-white transition-colors">
                  Explore Deliverables
                </span>
                <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#080B12] transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#131A29] via-[#182235] to-[#131A29] border border-[#D4AF37]/30 text-center space-y-4 max-w-4xl mx-auto shadow-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Tailored Scope of Work
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
            Need a Bespoke Combination of Services?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl mx-auto">
            Whether you require end-to-end turnkey direction across three continents or dedicated spatial scenography for a heritage palace, our atelier tailors every contract to your exact vision.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenPlanning}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              Consult with Our Creative Directors
            </button>
          </div>
        </div>

      </div>

      {/* Detailed Service Inspection Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0E131F] border border-[#20293D] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#080B12]/80 border border-white/10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Banner */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={activeModalService.heroImage}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Signature Pillar
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {activeModalService.title}
                </h3>
                <p className="text-xs text-slate-300 font-light font-sans">
                  {activeModalService.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Quote Block */}
              <blockquote className="p-4 rounded-2xl bg-[#131A29] border-l-2 border-[#D4AF37] italic text-xs sm:text-sm text-slate-200 font-serif">
                "{activeModalService.highlightQuote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {activeModalService.description}
              </p>

              {/* Key Features & Deliverables 2-Col Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                    Core Capabilities
                  </h4>
                  <div className="space-y-2">
                    {activeModalService.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                    Atelier Deliverables
                  </h4>
                  <div className="space-y-2">
                    {activeModalService.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-light">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-6 border-t border-[#20293D] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-stone-400 font-light">
                  Tailored scope available for India and international destinations.
                </span>
                <button
                  onClick={() => {
                    setActiveModalService(null);
                    onOpenPlanning();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] transition-all cursor-pointer shadow-lg"
                >
                  Inquire For This Pillar
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Site75Services;
