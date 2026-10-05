import React from 'react';
import { Sparkles, Calendar, MapPin, ArrowRight, Check } from 'lucide-react';
import { OFFERS_DATA, OfferItem } from '../../data/site74Data';

interface Site74OffersProps {
  onSelectOffer: (offer: OfferItem) => void;
}

export const Site74Offers: React.FC<Site74OffersProps> = ({ onSelectOffer }) => {
  return (
    <section id="offers-section" className="py-20 lg:py-28 px-5 sm:px-6 bg-[#FAF8F5] border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37]">
            Exclusive Privileges
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-5xl text-[#141210]">
            Curated Wedding Offers &amp; Packages
          </h2>
          <p className="text-sm sm:text-base text-[#6B6155] leading-relaxed">
            Reserve your wedding dates with Grandeur to unlock bespoke complimentary inclusions — from presidential suite upgrades and cocktail bars to honeymoon stay credits.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFERS_DATA.map(offer => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-stone-900">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-amber-400 text-[#141210] font-bold px-2.5 py-0.5 rounded shadow-xs">
                      {offer.badge}
                    </span>
                    <span className="font-mono text-[10px] uppercase text-white bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/20">
                      {offer.destination}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="font-serif font-medium text-2xl text-white">
                      {offer.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#52483E] leading-relaxed">
                    {offer.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#F5EFE5]">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#141210] block">
                      Curated Package Inclusions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#6B6155]">
                      {offer.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-[11px] text-[#8A7B6E] font-mono">
                    <span className="font-bold text-[#141210]">Validity:</span> {offer.validTill}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectOffer(offer)}
                  className="w-full py-3 bg-[#141210] hover:bg-[#8C6D37] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Inquire for This Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site74Offers;
