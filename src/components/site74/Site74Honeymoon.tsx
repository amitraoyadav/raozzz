import React from 'react';
import { Heart, Sparkles, Check, ArrowRight, MapPin } from 'lucide-react';
import { HONEYMOON_DATA, HoneymoonItem } from '../../data/site74Data';

interface Site74HoneymoonProps {
  onOpenPlanning: () => void;
}

export const Site74Honeymoon: React.FC<Site74HoneymoonProps> = ({ onOpenPlanning }) => {
  return (
    <section id="honeymoon-section" className="py-20 lg:py-28 px-5 sm:px-6 bg-[#FAF8F5] border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37]">
            Post-Wedding Escapes
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-5xl text-[#141210]">
            Curated Honeymoon Sanctuaries
          </h2>
          <p className="text-sm sm:text-base text-[#6B6155] leading-relaxed">
            Transition seamlessly from the vibrant euphoria of your celebrations into secluded romantic luxury. Private plunge pool villas, couples Ayurvedic wellness, and candlelit dinners under the stars.
          </p>
        </div>

        {/* Honeymoon Retreat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HONEYMOON_DATA.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] uppercase tracking-wider border border-white/20">
                    <MapPin className="w-3 h-3 text-amber-300 inline mr-1" />
                    {item.destination}
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="font-mono text-[10px] text-amber-300 uppercase tracking-widest font-bold block mb-1">
                      {item.packageNights}
                    </span>
                    <h3 className="font-serif font-medium text-2xl text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#52483E] leading-relaxed">
                    {item.tagline}
                  </p>

                  <ul className="space-y-2 text-xs text-[#6B6155] pt-2 border-t border-[#F5EFE5]">
                    {item.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenPlanning}
                  className="w-full py-3 bg-[#141210] hover:bg-[#8C6D37] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Inquire for Honeymoon Dates</span>
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

export default Site74Honeymoon;
