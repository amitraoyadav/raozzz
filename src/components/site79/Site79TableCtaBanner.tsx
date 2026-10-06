import React from 'react';
import { Calendar, Sparkles, MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { site79Config } from '../../config/site79Config';

interface Site79TableCtaBannerProps {
  onOpenTableBooking: () => void;
  onOpenGuestlist: () => void;
}

export const Site79TableCtaBanner: React.FC<Site79TableCtaBannerProps> = ({
  onOpenTableBooking,
  onOpenGuestlist
}) => {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0a0805] via-[#120f09] to-[#070604] text-white overflow-hidden border-y border-[#DFB759]/30">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#DFB759]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#17130b] via-[#0f0d08] to-[#17130b] border border-[#DFB759]/40 p-8 sm:p-12 lg:p-16 shadow-[0_0_60px_rgba(223,183,89,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/20 border border-[#DFB759]/40 text-[#DFB759] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Limited Online Privilege</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
                Walk In.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">
                  Own The Night.
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl font-['Inter']">
                Book your VIP Table online before arriving at the venue and unlock an exclusive{' '}
                <span className="text-[#DFB759] font-bold">20% Discount</span> with 100% redeemable credit against food, cocktails, and champagne. Skip the queue with dedicated red carpet check-in.
              </p>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFB759]" />
                  <span>100% Spendable F&B Cover</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFB759]" />
                  <span>Dedicated Butler Steward</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFB759]" />
                  <span>Instant Digital Pass</span>
                </div>
              </div>
            </div>

            {/* Right Buttons Stack */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenTableBooking}
                className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#e8c676] text-black font-black text-sm uppercase tracking-wider hover:brightness-110 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(223,183,89,0.7)] cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Reserve Table • 20% Off</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenGuestlist}
                className="w-full py-3.5 px-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Join Guestlist
              </button>

              <a
                href={`https://wa.me/${site79Config.WHATSAPP}?text=Hi%20Elysium!%20I%20would%20like%20to%20reserve%20a%20VIP%20table%20for%20tonight.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full border border-[#DFB759]/40 hover:border-[#DFB759] text-[#DFB759] hover:bg-[#DFB759]/10 font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp VIP Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
