import React from 'react';
import { BadgePercent, Ticket, Moon, Users, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { SPECIAL_OFFERS, WHAT_WE_OFFER_SLIDES } from '../../data/site79Data';
import { site79Config } from '../../config/site79Config';

interface Site79OffersPageProps {
  onOpenTableBooking: () => void;
  onOpenGuestlist: () => void;
  onOpenWalkIn: () => void;
  onOpenOfferClaim: (offerTitle: string) => void;
}

export const Site79OffersPage: React.FC<Site79OffersPageProps> = ({
  onOpenTableBooking,
  onOpenGuestlist,
  onOpenWalkIn,
  onOpenOfferClaim
}) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#050505] text-white min-h-screen font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          <BadgePercent className="w-3.5 h-3.5" />
          <span>Exclusive Website Privileges</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
          Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Offers & Passes</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed">
          Book online before arriving at the venue to unlock exclusive savings, double redeemable bar value, and fast-track VIP entrance privileges.
        </p>
      </div>

      {/* 4 Main Offers Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SPECIAL_OFFERS.map((offer) => {
            const isGold = offer.id === 'offer-guestlist';

            return (
              <div
                key={offer.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-500 shadow-xl ${
                  isGold
                    ? 'bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#ebc671] text-black shadow-[0_0_40px_rgba(223,183,89,0.35)]'
                    : 'bg-[#0e0c08] border border-white/10 hover:border-[#DFB759]/60 text-white hover:shadow-[0_0_35px_rgba(223,183,89,0.2)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                        isGold ? 'bg-black/15 text-black' : 'bg-[#DFB759]/20 text-[#DFB759]'
                      }`}
                    >
                      {offer.badge || 'Privilege'}
                    </span>
                    {offer.discountHighlight && (
                      <span className="text-xl font-black font-['Cinzel',serif] text-[#DFB759]">
                        {offer.discountHighlight} OFF
                      </span>
                    )}
                  </div>

                  <h2
                    className={`text-2xl font-bold font-['Cinzel',serif] mb-2 leading-tight ${
                      isGold ? 'text-black' : 'text-white'
                    }`}
                  >
                    {offer.title}
                  </h2>

                  <p
                    className={`text-xs mb-5 uppercase tracking-wider font-semibold ${
                      isGold ? 'text-black/80' : 'text-gray-400'
                    }`}
                  >
                    {offer.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {offer.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 stroke-[3] ${
                            isGold ? 'text-black' : 'text-[#DFB759]'
                          }`}
                        />
                        <span className={`leading-snug ${isGold ? 'text-black font-semibold' : 'text-gray-300'}`}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    if (offer.ctaAction === 'guestlist') onOpenGuestlist();
                    else if (offer.ctaAction === 'table') onOpenTableBooking();
                    else onOpenOfferClaim(offer.title);
                  }}
                  className={`w-full py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg text-center ${
                    isGold
                      ? 'bg-black text-[#DFB759] hover:bg-neutral-900'
                      : 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black hover:brightness-110'
                  }`}
                >
                  {offer.ctaText}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* What We Offer Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-black font-['Cinzel',serif] uppercase">
            Signature Nightlife <span className="text-[#DFB759]">Hallmarks</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Every element at Elysium is calibrated to deliver an unmatched standard of luxury hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_OFFER_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="rounded-3xl bg-[#0c0a07] border border-white/10 overflow-hidden group hover:border-[#DFB759]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a07] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Cinzel',serif] text-lg font-bold text-white mb-1.5">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
