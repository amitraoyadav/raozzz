import React from 'react';
import { ArrowUp, Sparkles, Phone, Mail, MapPin, MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { site79Config } from '../../config/site79Config';

interface Site79FooterProps {
  onNavigate: (view: string) => void;
  onOpenTableBooking: () => void;
  onOpenGuestlist: () => void;
  onOpenWalkIn: () => void;
}

export const Site79Footer: React.FC<Site79FooterProps> = ({
  onNavigate,
  onOpenTableBooking,
  onOpenGuestlist,
  onOpenWalkIn
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030303] text-white pt-16 sm:pt-20 pb-12 border-t border-[#DFB759]/20 overflow-hidden font-['Inter']">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#DFB759]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-['Cinzel',serif] text-2xl sm:text-3xl font-black tracking-[0.22em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759] drop-shadow-[0_2px_15px_rgba(223,183,89,0.4)]">
                ELYSIUM
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/60 font-semibold mt-0.5">
                THE ECSTASY • DELHI
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              Delhi’s crown jewel of luxury nightlife. Recreating the world’s most exhilarating superclub experience with 360° Void Acoustics sound, kinetic laser matrix, and white-glove VIP mezzanine service.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p>
                <strong className="text-white">Operating:</strong> Wednesday to Sunday
              </p>
              <p>
                <strong className="text-white">Hours:</strong> 10:30 PM to 5:00 AM IST
              </p>
              <p>
                <strong className="text-white">Age Requirement:</strong> 25+ Physical Govt ID
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-[#DFB759] tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Weekly Lineup
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('offers')}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Special Offers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Photo & Video Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Bar & Dining Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Location & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Booking & Privileges Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-[#DFB759] tracking-widest">
              VIP Privileges
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={onOpenTableBooking}
                  className="hover:text-[#DFB759] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>VIP Table Booking (20% Off)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGuestlist}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Join Guestlist (RSVP)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWalkIn}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Prepaid VIP Walk-ins
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('offers')}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  MVP Weekly Pass (₹2K → ₹4K)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('offers')}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Midnight Check-in for 6 (Sheesha)
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Concierge Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-[#DFB759] tracking-widest">
              Concierge Desk
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFB759] shrink-0 mt-0.5" />
                <span className="leading-snug">{site79Config.LOCATION}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFB759] shrink-0" />
                <a
                  href={`tel:${site79Config.PHONE}`}
                  className="hover:text-[#DFB759] transition-colors font-mono"
                >
                  {site79Config.PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFB759] shrink-0" />
                <a
                  href={`mailto:${site79Config.EMAIL}`}
                  className="hover:text-[#DFB759] transition-colors"
                >
                  {site79Config.EMAIL}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${site79Config.WHATSAPP}?text=Hi%20Elysium!%20I%20would%20like%20to%20reach%20the%20VIP%20desk.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DFB759] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} {site79Config.LEGAL_NAME}. All rights reserved. Entry strictly subject to venue management rights & age verification.</p>

          <div className="flex items-center gap-6">
            <span className="text-[#DFB759]/80 font-mono">Shangri-La's Eros Hotel • CP</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-[#DFB759] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
