import React, { useState } from 'react';
import { UTSAV_SERVICE_CATEGORIES, UtsavServiceCategory } from '../../data/utsavLuxeData';

interface UtsavServiceCatalogProps {
  onBookService: (service: UtsavServiceCategory) => void;
  onOpenCalculator: () => void;
}

export const UtsavServiceCatalog: React.FC<UtsavServiceCatalogProps> = ({
  onBookService,
  onOpenCalculator
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(UTSAV_SERVICE_CATEGORIES[0].id);

  const activeService = UTSAV_SERVICE_CATEGORIES.find(s => s.id === selectedServiceId) || UTSAV_SERVICE_CATEGORIES[0];

  return (
    <section id="services" className="py-16 sm:py-24 bg-stone-50 text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            Full-Stack Wedding Ecosystem
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Integrated Wedding Services
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Choose standalone services or bundle our complete turnkey ecosystem. 
            Every element is handled by specialized in-house leads with 100% itemized pricing.
          </p>
        </div>

        {/* Tab Navigation for Services */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 scrollbar-none gap-2 mb-10 border-b border-stone-200">
          {UTSAV_SERVICE_CATEGORIES.map(service => {
            const isActive = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold rounded-t-xl whitespace-nowrap transition-all border-b-2 ${
                  isActive
                    ? 'border-[#E05A47] text-[#E05A47] bg-white shadow-xs'
                    : 'border-transparent text-stone-600 hover:text-stone-950 hover:bg-white/60'
                }`}
              >
                {service.name}
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
          
          {/* Top Banner with Image & Key Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px]">
              <img
                src={activeService.heroImage}
                alt={activeService.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#E05A47] text-white">
                  {activeService.startingPrice}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {activeService.name}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  {activeService.priceNote}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E05A47]">
                  Service Overview
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                  {activeService.tagline}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {activeService.description}
                </p>

                {/* Features Bullet List */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-stone-900 block mb-2">
                    Key Deliverables & Standards:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {activeService.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onBookService(activeService)}
                  className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#E05A47] hover:bg-[#C94330] shadow-md shadow-[#E05A47]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Inquire For {activeService.name}
                </button>
                <button
                  onClick={onOpenCalculator}
                  className="px-5 py-3 rounded-xl font-medium text-sm text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  Estimate in Calculator →
                </button>
              </div>

            </div>

          </div>

          {/* Sub-Services Deep-Dive Section */}
          <div className="p-6 sm:p-8 lg:p-10 border-t border-stone-200 bg-stone-50/50">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Detailed Capabilities
                </span>
                <h4 className="font-serif text-xl font-bold text-stone-900">
                  What We Specialize In
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {activeService.subServices.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={sub.image}
                      alt={sub.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <span className="text-[10px] font-bold text-[#E05A47] uppercase tracking-wider block">
                        {sub.turnaround}
                      </span>
                      <h5 className="font-serif font-bold text-stone-900 text-sm mt-0.5">
                        {sub.title}
                      </h5>
                      <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Standard Inclusions Checklist */}
            <div className="mt-8 pt-6 border-t border-stone-200 bg-white p-5 rounded-xl border">
              <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-3">
                Always Included With {activeService.name}:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-stone-600">
                {activeService.whatsIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#E05A47] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
