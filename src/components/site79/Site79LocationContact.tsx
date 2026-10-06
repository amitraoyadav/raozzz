import React from 'react';
import { MapPin, Clock, Phone, Mail, MessageCircle, ShieldAlert, Sparkles, Car } from 'lucide-react';
import { site79Config } from '../../config/site79Config';

interface Site79LocationContactProps {
  onOpenTableBooking?: () => void;
}

export const Site79LocationContact: React.FC<Site79LocationContactProps> = ({
  onOpenTableBooking
}) => {
  return (
    <section id="location" className="relative py-20 sm:py-28 bg-[#070604] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Prime Capital Location</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
            Location & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Concierge</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-gray-400 font-light leading-relaxed font-['Inter']">
            Nestled inside Shangri-La’s Eros Hotel on Ashoka Road in Connaught Place, Elysium offers Delhi’s most prestigious nightlife address with seamless valet access.
          </p>
        </div>

        {/* Location & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Details Bento */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {/* Address Card */}
            <div className="rounded-3xl bg-[#0d0b07] border border-white/10 p-6 sm:p-7 hover:border-[#DFB759]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DFB759]/10 border border-[#DFB759]/30 flex items-center justify-center text-[#DFB759] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#DFB759] tracking-widest block mb-1">
                    Venue Address
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-['Cinzel',serif] text-white">
                    Shangri-La's Eros Hotel
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 font-light leading-relaxed font-['Inter']">
                    19 Ashoka Road, Janpath, Connaught Place, New Delhi, Delhi 110001
                  </p>
                  <p className="text-[11px] text-gray-400 mt-2">
                    Nearest Metro: Patel Chowk (Yellow Line) / Janpath (Violet Line) — 2 mins away.
                  </p>
                </div>
              </div>
            </div>

            {/* Timings & Valet Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-[#0d0b07] border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-[#DFB759]" />
                  <span className="text-xs uppercase font-bold text-white tracking-wider">Operating Hours</span>
                </div>
                <p className="text-base sm:text-lg font-black text-[#DFB759] font-['Cinzel',serif]">
                  10:30 PM – 5:00 AM
                </p>
                <p className="text-xs text-gray-400 mt-1 font-light">
                  Wednesday through Sunday. Doors open at 11:30 PM.
                </p>
              </div>

              <div className="rounded-3xl bg-[#0d0b07] border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Car className="w-5 h-5 text-[#DFB759]" />
                  <span className="text-xs uppercase font-bold text-white tracking-wider">Red Carpet Valet</span>
                </div>
                <p className="text-base sm:text-lg font-black text-white font-['Cinzel',serif]">
                  Complimentary Valet
                </p>
                <p className="text-xs text-gray-400 mt-1 font-light">
                  Direct drop-off at Shangri-La hotel main porch.
                </p>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="rounded-3xl bg-gradient-to-r from-[#17130a] to-[#0e0c07] border border-[#DFB759]/30 p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[10px] uppercase font-bold text-[#DFB759] tracking-widest">
                  VIP Concierge Line
                </div>
                <a
                  href={`tel:${site79Config.PHONE}`}
                  className="text-lg sm:text-xl font-black text-white hover:text-[#DFB759] transition-colors font-mono tabular-nums block"
                >
                  {site79Config.PHONE_DISPLAY}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${site79Config.WHATSAPP}?text=Hi%20Elysium!%20I%20would%20like%20to%20inquire%20about%20tonight.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#DFB759] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${site79Config.EMAIL}`}
                  className="p-2.5 rounded-full border border-white/20 text-white hover:text-[#DFB759] hover:border-[#DFB759] transition-colors cursor-pointer"
                  title="Email VIP Desk"
                  aria-label="Email VIP Desk"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Map & Venue Guide */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-[#0d0b07] border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-bold text-[#DFB759] tracking-wider">
                  Interactive Venue Location
                </span>
                <a
                  href={site79Config.MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/70 hover:text-[#DFB759] underline tracking-wider uppercase font-semibold"
                >
                  Open in Google Maps
                </a>
              </div>

              {/* Stylized Dark Map Container */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 mb-6">
                <iframe
                  title="Elysium Club Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2612726553856!2d77.21448697621182!3d28.621908984570046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd34fc9b1d7d%3A0xe54d24a919cb5bf!2sShangri-La%20Eros%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert contrast-125 brightness-75 hover:filter-none transition-all duration-700"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Venue Entry Policy Advisory */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#DFB759] uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-[#DFB759]" />
                  <span>Door Admission Advisory</span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed font-['Inter']">
                  Admission strictly 25+. Physical government photo identification is mandatory at the security kiosk. Dress code is Glamorous Chic; athletic shorts, track pants, and open footwear are strictly prohibited.
                </p>
              </div>
            </div>

            {onOpenTableBooking && (
              <div className="pt-6">
                <button
                  onClick={onOpenTableBooking}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg text-center"
                >
                  Reserve Priority VIP Entry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
