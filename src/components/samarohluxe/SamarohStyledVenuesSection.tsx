import React from 'react';
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { SAMAROH_STYLED_VENUES, StyledVenueItem } from '../../data/samarohLuxeData';

interface SamarohStyledVenuesSectionProps {
  onOpenConsultation: (venueName?: string) => void;
  selectedCity: string;
}

export const SamarohStyledVenuesSection: React.FC<SamarohStyledVenuesSectionProps> = ({
  onOpenConsultation,
  selectedCity
}) => {
  return (
    <section id="venues-section" className="py-20 lg:py-28 bg-[#181514] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
            <Building2 className="w-3.5 h-3.5 text-[#E06D53]" />
            <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
              Iconic Venue Transformations
            </span>
          </div>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Venues We Know &amp; Style Intimately
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Our production teams possess pre-measured 3D CAD blueprints, electrical load specs, and rigging points for India’s premier heritage estates and 5-star hotels.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMAROH_STYLED_VENUES.map(venue => (
            <div
              key={venue.id}
              className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-700 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={venue.coverImage}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  {/* City Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-stone-200 border border-white/10 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E06D53]" />
                      <span>{venue.city}</span>
                    </span>
                  </div>

                  {/* Weddings Count Bottom Right */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-bold text-white bg-[#E06D53] px-3 py-1 rounded-lg shadow-md">
                      {venue.weddingsStyledCount}+ Weddings Styled
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] text-[#E06D53] font-semibold block uppercase tracking-wider">
                      {venue.venueType}
                    </span>
                    <h3 className="font-['Fraunces',serif] text-xl font-bold text-white group-hover:text-[#E06D53] transition-colors">
                      {venue.name}
                    </h3>
                    <span className="text-xs text-stone-400 block font-light">
                      Area: {venue.area}
                    </span>
                  </div>

                  {/* Popular Spaces */}
                  <div className="space-y-1.5 border-t border-stone-800 pt-3">
                    <span className="text-[11px] font-bold text-stone-300 uppercase tracking-wider block">
                      Popular Ceremony Spaces:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {venue.popularSpaces.map((space, i) => (
                        <span key={i} className="text-[11px] bg-stone-850 text-stone-300 px-2 py-0.5 rounded border border-stone-750">
                          {space}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs & Recommendations */}
                  <div className="space-y-2 bg-stone-850 p-3.5 rounded-2xl border border-stone-800 text-xs">
                    <div className="text-stone-300">
                      <strong className="text-stone-400 font-normal">Curfew / Technical: </strong>
                      <span>{venue.curfewAndSpecs}</span>
                    </div>
                    <div className="text-[#E06D53] font-medium pt-1 border-t border-stone-800">
                      <span className="text-stone-400 font-normal">Recommended Theme: </span>
                      <span>{venue.recommendedTheme}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenConsultation(`Venue Styling Proposal for ${venue.name} in ${venue.city}`)}
                  className="w-full py-3 rounded-xl bg-stone-800 hover:bg-[#E06D53] text-stone-200 hover:text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Venue Styling Deck</span>
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
