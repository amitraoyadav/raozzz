import React from 'react';
import { Check, Ticket, BadgePercent, Moon, ArrowRight } from 'lucide-react';
import { SPECIAL_OFFERS, SpecialOffer } from '../../data/site79Data';

interface Site79SpecialOffersProps {
  onOpenGuestlist: () => void;
  onOpenTableBooking: () => void;
  onOpenOfferClaim: (offerTitle: string) => void;
}

export const Site79SpecialOffers: React.FC<Site79SpecialOffersProps> = ({
  onOpenGuestlist,
  onOpenTableBooking,
  onOpenOfferClaim
}) => {
  return (
    <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-24 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      {/* Header matching Priveé */}
      <div className="mx-auto w-full text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Cinzel',serif] flex items-center justify-center gap-3 flex-wrap">
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Special
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#e8c676]">
            Offers
          </span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto">
          Exclusive online privileges, priority queue skip, and bottle service specials valid for website guests.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* CARD 1: Elysium Guest List (Gold Signature Card) */}
          <div className="group relative h-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#ebc671] text-black shadow-[0_0_40px_rgba(223,183,89,0.35)] transition-all duration-500 hover:shadow-[0_0_55px_rgba(223,183,89,0.5)] lg:-translate-y-4 flex flex-col justify-between p-6 sm:p-7">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-black/70 bg-black/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                Signature Privilege
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-black leading-tight">
                Elysium Guest List
              </h4>

              <p className="capitalize mt-4 mb-3 text-xs sm:text-sm text-black font-bold uppercase tracking-wider">
                What you get :
              </p>

              <ul className="space-y-3 font-['Inter']">
                {[
                  'Complimentary entry for Couples & Females',
                  'All-night entry — arrive anytime before 2 AM',
                  'Complimentary drinks & shots till late',
                  'Dedicated fast-track priority lane',
                  'Preferred and Priority Access',
                  'Get priority updates & secret codes'
                ].map((perk, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-black/15 border border-black/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold leading-snug">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenGuestlist}
              className="w-full py-3 mt-6 rounded-full border border-black/20 bg-black text-[#DFB759] hover:bg-[#1a1711] hover:scale-105 transition-all font-bold uppercase tracking-widest text-xs cursor-pointer text-center shadow-lg"
            >
              Join Guestlist
            </button>
          </div>

          {/* CARD 2: VIP Table Booking (20% OFF) */}
          <div className="group relative h-full rounded-3xl overflow-hidden p-6 sm:p-7 bg-[#0f0d09] border border-white/10 text-white hover:border-[#DFB759]/60 hover:shadow-[0_0_35px_rgba(223,183,89,0.2)] transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full border border-[#DFB759]/40 flex items-center justify-center mb-5 text-[#DFB759] bg-[#DFB759]/10 group-hover:scale-110 transition-transform">
                <BadgePercent className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#DFB759] font-['Cinzel',serif]">
                VIP Table Booking
              </h3>

              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-black text-[#DFB759] leading-none drop-shadow-[0_0_15px_rgba(223,183,89,0.6)]">
                  20%
                </span>
                <span className="text-lg font-bold text-[#DFB759] mb-1">
                  OFF
                </span>
              </div>

              <p className="text-[11px] text-white/60 mb-5 uppercase tracking-wider font-semibold">
                On all table bookings • All operating days
              </p>

              <div className="space-y-2.5 text-xs text-gray-300 font-['Inter']">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#DFB759]" />
                  <span>
                    Exclusive for <span className="text-[#DFB759] font-bold">website guests</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#DFB759]" />
                  <span>100% redeemable credit against F&B</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#DFB759]" />
                  <span>Book before the club opens</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenTableBooking}
              className="w-full py-3 mt-6 rounded-full border border-white/10 hover:border-[#DFB759] hover:scale-105 cursor-pointer bg-[#DFB759] text-black transition-all font-bold uppercase tracking-wider text-xs text-center shadow-lg"
            >
              Book Now
            </button>
          </div>

          {/* CARD 3: MVP Weekly Pass */}
          <div className="group relative h-full rounded-3xl overflow-hidden bg-[#0f0d09] border border-white/10 text-white hover:border-[#DFB759]/60 hover:shadow-[0_0_35px_rgba(223,183,89,0.2)] p-6 sm:p-7 transition-all duration-500 flex flex-col justify-between lg:-translate-y-4">
            <div>
              <div className="w-12 h-12 rounded-full border border-[#DFB759]/40 text-[#DFB759] bg-[#DFB759]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Ticket className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-1 text-[#DFB759] font-['Cinzel',serif]">
                MVP Weekly Pass
              </h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Double the value, double the nightlife experience.
              </p>

              <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-4 py-3 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    You Pay
                  </p>
                  <p className="text-xl font-extrabold text-[#DFB759]">
                    ₹2,000
                  </p>
                </div>
                <div className="text-lg font-bold text-white/40">
                  →
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    You Get
                  </p>
                  <p className="text-2xl font-black drop-shadow-[0_0_10px_rgba(223,183,89,0.6)] text-[#DFB759]">
                    ₹4,000
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DFB759]" />
                  <span>VIP2 Lounge Access*</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DFB759]" />
                  <span>Personalised Butler Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DFB759]" />
                  <span>Redeemable across all bars</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenOfferClaim('MVP Weekly Pass')}
              className="w-full py-3 mt-6 rounded-full border border-white/10 hover:border-[#DFB759] hover:scale-105 cursor-pointer bg-[#DFB759] text-black transition-all font-bold uppercase tracking-wider text-xs text-center shadow-lg"
            >
              Claim Pass
            </button>
          </div>

          {/* CARD 4: Midnight Check-In */}
          <div className="group relative h-full rounded-3xl overflow-hidden p-6 sm:p-7 bg-[#0f0d09] border border-white/10 text-white hover:border-[#DFB759]/60 hover:shadow-[0_0_35px_rgba(223,183,89,0.2)] transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center mb-5 text-black bg-[#DFB759] group-hover:scale-110 transition-transform">
                <Moon className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#DFB759] font-['Cinzel',serif]">
                Midnight Check-In
              </h3>

              <p className="font-semibold text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                Walk-In as group of{' '}
                <span className="px-2 py-0.5 bg-[#DFB759] text-black rounded-md font-bold text-xs">
                  6 People
                </span>{' '}
                — And unlock Premium Entry.
              </p>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="p-3 bg-[#DFB759]/10 border border-[#DFB759]/30 rounded-xl">
                  <span className="text-xs font-semibold text-gray-300">
                    Includes:{' '}
                    <span className="text-[#DFB759] font-bold">
                      Herbal Sheesha (Worth ₹5,000)
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1 text-[11px] text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DFB759]" />
                  <span>Group registrations get priority fast-track check-in</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenOfferClaim('Midnight Check-In')}
              className="w-full py-3 mt-6 rounded-full border border-white/10 hover:border-[#DFB759] hover:scale-105 cursor-pointer bg-[#DFB759] text-black transition-all font-bold uppercase tracking-wider text-xs text-center shadow-lg"
            >
              Get It Just For ₹2K
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
