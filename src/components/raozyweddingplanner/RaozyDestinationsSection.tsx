import React, { useState } from 'react';
import { RAOZY_DESTINATIONS, DestinationHub } from '../../data/raozyWeddingData';

interface RaozyDestinationsSectionProps {
  onSelectDestination: (dest: DestinationHub) => void;
  onOpenConsultationModal: () => void;
}

export const RaozyDestinationsSection: React.FC<RaozyDestinationsSectionProps> = ({
  onSelectDestination,
  onOpenConsultationModal
}) => {
  const [activeDestination, setActiveDestination] = useState<DestinationHub>(RAOZY_DESTINATIONS[0]);

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
            Hand-Curated Destination Hubs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Palaces, Coasts &amp; Wilderness
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            Raozy holds GM-level relationships and direct vendor hubs across India’s most coveted wedding destinations. 
            We negotiate wholesale buyout tariffs and protect your celebration from logistical pitfalls.
          </p>
        </div>

        {/* Grid of Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {RAOZY_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-[#171410] rounded-2xl border border-stone-800 overflow-hidden hover:border-[#DFC082]/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171410] via-black/30 to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-serif text-[#DFC082] border border-[#DFC082]/30 uppercase tracking-widest">
                    {dest.vettedVenuesCount} Vetted Venues
                  </span>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-sans text-stone-400 block">{dest.state}</span>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#DFC082] transition-colors">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-stone-300 font-sans leading-relaxed">
                    {dest.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-stone-800/80">
                    <div>
                      <span className="text-stone-500 block uppercase tracking-wider text-[10px]">
                        Budget Range:
                      </span>
                      <span className="text-[#DFC082] font-semibold">{dest.avgBudget}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block uppercase tracking-wider text-[10px]">
                        Best Weather:
                      </span>
                      <span className="text-stone-300">{dest.bestMonths}</span>
                    </div>
                  </div>

                  {/* Highlight Venues */}
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest block mb-1">
                      Premier Properties:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.highlightVenues.map((v, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-stone-900 text-stone-300 text-[10px] border border-stone-800"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 rounded bg-stone-900 group-hover:bg-[#DFC082] text-stone-300 group-hover:text-[#171410] font-sans font-medium text-xs tracking-wider uppercase transition flex items-center justify-center gap-1"
                >
                  <span>Explore Venues &amp; Logistics</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-2xl bg-[#191512] border border-[#DFC082]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white">
              Have a Specific Heritage Palace or Private Estate in Mind?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
              We conduct on-site architectural audits, verify drone permits, evaluate noise curfews, and run financial buyout scenarios for you.
            </p>
          </div>
          <button
            onClick={onOpenConsultationModal}
            className="px-6 py-3.5 rounded bg-gradient-to-r from-[#C5A059] to-[#DFC082] text-[#171410] font-serif font-semibold text-xs tracking-wider uppercase shadow hover:brightness-110 active:scale-95 transition shrink-0"
          >
            Request Venue Shortlist
          </button>
        </div>
      </div>
    </section>
  );
};
