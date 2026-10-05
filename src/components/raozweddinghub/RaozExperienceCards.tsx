import React from 'react';
import { ArrowRight, Users, Sparkles, HeartHandshake, Compass, CheckCircle } from 'lucide-react';
import { raozWeddingHubConfig } from '../../config/raozWeddingHubConfig';

interface RaozExperienceCardsProps {
  onSelectTab: (tab: string) => void;
  currency: string;
}

export const RaozExperienceCards: React.FC<RaozExperienceCardsProps> = ({
  onSelectTab,
  currency
}) => {
  const currentCurr = raozWeddingHubConfig.CURRENCIES.find(c => c.code === currency) || raozWeddingHubConfig.CURRENCIES[0];

  return (
    <section id="see-the-experience" className="px-5 sm:px-6 pt-10 md:pt-16 pb-12 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            Three distinct perspectives
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl text-[#1F1B16] mt-2">
            One platform. Designed for everyone involved.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6155] mt-2.5">
            Whether you're the couple dreaming it up, the planner orchestrating it, or the guest packing bags across the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: For Couples */}
          <div
            onClick={() => onSelectTab('couples-destination')}
            className="group flex flex-col rounded-[22px] border border-[#E8DFD3] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#D5C9B8] cursor-pointer relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF2ED] text-[#A85C3D] flex items-center justify-center mb-5 group-hover:bg-[#A85C3D] group-hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </div>

            <h3 className="font-serif font-medium text-[26px] leading-tight text-[#1F1B16]">
              For couples
            </h3>

            <p className="text-sm text-[#6B6155] mt-2.5 leading-[1.6] min-h-[56px]">
              One calm dashboard for the whole multi-day chapter — vendors, guests, finance, travel, and ceremony.
            </p>

            <div className="mt-4 mb-6 pt-4 border-t border-[#F5EFE5] flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold tracking-[0.08em] uppercase text-[#A85C3D]">
                {currentCurr.symbol}{currentCurr.couplePrice} · one-time
              </span>
              <span className="text-[11px] text-[#8A7B6E]">Lifetime access</span>
            </div>

            <ul className="space-y-2 text-xs text-[#52483E] mb-6 flex-1">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#A85C3D] shrink-0" />
                <span>Multi-day schedules with transport</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#A85C3D] shrink-0" />
                <span>Guest flight tracking &amp; room blocks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#A85C3D] shrink-0" />
                <span>Multi-currency budget &amp; deposits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#A85C3D] shrink-0" />
                <span>Drag-and-drop seating chart</span>
              </li>
            </ul>

            <span className="text-[13px] font-medium text-[#1F1B16] flex items-center gap-1.5 group-hover:text-[#A85C3D] transition-colors border-b border-[#D5C9B8] group-hover:border-[#A85C3D] pb-0.5 self-start">
              Explore couple experience <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>

          {/* Card 2: For Planners */}
          <div
            onClick={() => onSelectTab('for-planners')}
            className="group flex flex-col rounded-[22px] border border-[#E8DFD3] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#D5C9B8] cursor-pointer relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F0F4EF] text-[#4A5847] flex items-center justify-center mb-5 group-hover:bg-[#4A5847] group-hover:text-white transition-colors">
              <Compass className="w-5 h-5" />
            </div>

            <h3 className="font-serif font-medium text-[26px] leading-tight text-[#1F1B16]">
              For planners
            </h3>

            <p className="text-sm text-[#6B6155] mt-2.5 leading-[1.6] min-h-[56px]">
              Multi-wedding hub, white-label client portal, 10 planning phases, and ~280 curated destination tasks.
            </p>

            <div className="mt-4 mb-6 pt-4 border-t border-[#F5EFE5] flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold tracking-[0.08em] uppercase text-[#4A5847]">
                Agency &amp; Atelier Plans
              </span>
              <span className="text-[11px] text-[#8A7B6E]">From {currentCurr.symbol}{currentCurr.plannerStudio}</span>
            </div>

            <ul className="space-y-2 text-xs text-[#52483E] mb-6 flex-1">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#4A5847] shrink-0" />
                <span>Custom logo &amp; studio branding</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#4A5847] shrink-0" />
                <span>10-phase ~280 milestone checklists</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#4A5847] shrink-0" />
                <span>Master run sheets &amp; vendor riders</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#4A5847] shrink-0" />
                <span>Multi-wedding parallel overview</span>
              </li>
            </ul>

            <span className="text-[13px] font-medium text-[#1F1B16] flex items-center gap-1.5 group-hover:text-[#4A5847] transition-colors border-b border-[#D5C9B8] group-hover:border-[#4A5847] pb-0.5 self-start">
              Explore planner partner hub <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>

          {/* Card 3: For Guests */}
          <div
            onClick={() => onSelectTab('for-guests')}
            className="group flex flex-col rounded-[22px] border border-[#E8DFD3] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#D5C9B8] cursor-pointer relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FBF4E8] text-[#9E6D28] flex items-center justify-center mb-5 group-hover:bg-[#9E6D28] group-hover:text-white transition-colors">
              <HeartHandshake className="w-5 h-5" />
            </div>

            <h3 className="font-serif font-medium text-[26px] leading-tight text-[#1F1B16]">
              For guests
            </h3>

            <p className="text-sm text-[#6B6155] mt-2.5 leading-[1.6] min-h-[56px]">
              One private link, 8 native languages, zero apps to download, and effortless RSVP in under 60 seconds.
            </p>

            <div className="mt-4 mb-6 pt-4 border-t border-[#F5EFE5] flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold tracking-[0.08em] uppercase text-emerald-800">
                100% Free for guests
              </span>
              <span className="text-[11px] text-[#8A7B6E]">Zero login friction</span>
            </div>

            <ul className="space-y-2 text-xs text-[#52483E] mb-6 flex-1">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#9E6D28] shrink-0" />
                <span>Instant itinerary with Google Maps links</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#9E6D28] shrink-0" />
                <span>Shuttle schedules &amp; luggage concierge</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#9E6D28] shrink-0" />
                <span>Dietary preferences &amp; song requests</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#9E6D28] shrink-0" />
                <span>Live photo memory upload vault</span>
              </li>
            </ul>

            <span className="text-[13px] font-medium text-[#1F1B16] flex items-center gap-1.5 group-hover:text-[#9E6D28] transition-colors border-b border-[#D5C9B8] group-hover:border-[#9E6D28] pb-0.5 self-start">
              See the guest experience <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaozExperienceCards;
