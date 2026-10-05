import React, { useState } from 'react';
import { RAOZY_SERVICES, RaozyService } from '../../data/raozyWeddingData';
import { raozyConfig } from '../../config/raozyWeddingConfig';

interface RaozyServicesSectionProps {
  onSelectService: (service: RaozyService) => void;
  onOpenConsultationModal: () => void;
}

export const RaozyServicesSection: React.FC<RaozyServicesSectionProps> = ({
  onSelectService,
  onOpenConsultationModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0F0D0C] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
              Full-Spectrum Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
              Bespoke Services &amp; In-House Production
            </h2>
          </div>
          <p className="text-stone-400 font-sans text-sm max-w-md leading-relaxed">
            Every celebration is orchestrated under a single accountable banner. 
            From initial 3D visualization to late-night stage coordination, no detail is left to chance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RAOZY_SERVICES.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-[#161310] rounded-xl border border-stone-800 overflow-hidden flex flex-col justify-between hover:border-[#DFC082]/60 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Service Image with Dark Overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-[#161310]/50 to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-serif text-[#DFC082] border border-[#DFC082]/30 uppercase tracking-widest">
                    Service 0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-white group-hover:text-[#DFC082] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed line-clamp-3 mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Pill */}
                  <div className="pt-3 border-t border-stone-800/80">
                    <span className="text-[11px] text-[#DFC082] font-medium block mb-1">
                      The In-House Advantage:
                    </span>
                    <p className="text-[11px] text-stone-400 leading-tight">
                      {service.inHouseDifference}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 rounded bg-stone-900 group-hover:bg-[#DFC082] text-stone-300 group-hover:text-[#171410] font-sans font-medium text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>Explore Deliverables</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#221B14] via-[#191512] to-[#221B14] border border-[#DFC082]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[11px] font-serif text-[#DFC082] uppercase tracking-widest block mb-1">
              Custom Celebration Scope
            </span>
            <h3 className="text-2xl font-serif font-semibold text-white">
              Planning a Destination Wedding or Rapid 15-Day Takeover?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
              Speak directly with a Founding Director to evaluate your venue shortlist, guest logistics, and in-house decor line-item feasibility.
            </p>
          </div>

          <button
            onClick={onOpenConsultationModal}
            className="shrink-0 px-6 py-3.5 rounded bg-gradient-to-r from-[#C5A059] to-[#DFC082] text-[#171410] font-serif font-semibold text-xs tracking-wider uppercase shadow hover:brightness-110 active:scale-95 transition"
          >
            {raozyConfig.CTA.primary}
          </button>
        </div>
      </div>
    </section>
  );
};
