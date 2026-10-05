import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Utensils, HeartHandshake, Compass, Music, Shield } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../../data/site74Data';

interface Site74ServicesProps {
  onOpenPlanning: () => void;
}

export const Site74Services: React.FC<Site74ServicesProps> = ({ onOpenPlanning }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="services-section" className="py-20 lg:py-28 px-5 sm:px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37]">
            Comprehensive Hospitality Ecosystem
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-5xl text-[#141210]">
            The Pillars of a Grandeur Wedding
          </h2>
          <p className="text-sm sm:text-base text-[#6B6155] leading-relaxed">
            Every critical element of your multi-day chapter is orchestrated directly by our in-house specialists, ensuring seamless luxury without fragmented third-party chaos.
          </p>
        </div>

        {/* Interactive Services Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E8E1D5]">
          {SERVICES_DATA.map(serv => (
            <button
              key={serv.id}
              onClick={() => setSelectedServiceId(serv.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                selectedServiceId === serv.id
                  ? 'bg-[#141210] text-[#E8DFD3] font-bold shadow-md'
                  : 'bg-white text-[#6B6155] border border-[#E8E1D5] hover:border-[#141210]'
              }`}
            >
              <span>{serv.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Showcase */}
        <div className="bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Content side */}
          <div className="p-8 sm:p-12 space-y-6">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#8C6D37] block mb-1">
                SIGNATURE SERVICE
              </span>
              <h3 className="font-serif font-medium text-2xl sm:text-4xl text-[#141210] leading-tight">
                {activeService.title}
              </h3>
              <p className="font-serif italic text-sm text-[#8C6D37] mt-1.5">
                {activeService.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#52483E] leading-relaxed">
              {activeService.description}
            </p>

            {/* Feature Points */}
            <div className="space-y-2.5 pt-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#141210] block">
                Standard Inclusions &amp; Safeguards
              </span>
              <ul className="space-y-2 text-xs text-[#6B6155]">
                {activeService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C6D37] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D5] space-y-1.5">
              <span className="font-mono text-[10px] uppercase font-bold text-[#8C6D37] tracking-wider block">
                Family &amp; Couple Deliverables
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-[#3D352E]">
                {activeService.deliverables.map((del, i) => (
                  <span key={i} className="bg-white border border-[#E8E1D5] px-2.5 py-1 rounded-lg">
                    {del}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="border-l-2 border-[#C5A059] pl-3 italic text-xs text-stone-600 font-serif">
              {activeService.quote}
            </blockquote>

            <div className="pt-2">
              <button
                onClick={onOpenPlanning}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141210] hover:bg-[#8C6D37] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                <span>Consult with {activeService.title.split('&')[0]} Specialist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="h-full min-h-[380px] lg:min-h-[560px] relative bg-stone-900">
            <img
              src={activeService.heroImage}
              alt={activeService.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
                GRANDEUR STANDARDS
              </span>
              <p className="font-serif italic text-base sm:text-lg">
                100% In-House Executive Execution across 18 Destinations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Site74Services;
