import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { site78Config } from '../../config/site78Config';

interface Site78FooterProps {
  onNavigate: (view: string, guideCategorySlug?: string, roomSlug?: string) => void;
  onOpenBooking: () => void;
}

export const Site78Footer: React.FC<Site78FooterProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <footer className="bg-[#1C1C1C] text-stone-300 font-['Jost',sans-serif] relative overflow-hidden border-t border-white/10">
      {/* Top Footer Newsletter & Quick Booking Banner */}
      <div className="border-b border-white/10 py-10 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] text-[#B99D75] uppercase tracking-widest font-bold block">
              Bespoke Beachfront Hospitality
            </span>
            <div className="font-['Cormorant',serif] font-bold text-2xl sm:text-3xl text-white">
              Ready to Escape to Morjim Sands?
            </div>
            <p className="text-xs text-stone-400 font-light">
              Book directly with our concierge desk to enjoy guaranteed private plunge pool rooms and complimentary daily breakfast.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md cursor-pointer"
            >
              Book Room Online
            </button>
            <a
              href={`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(site78Config.WHATSAPP_DEFAULT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#B99D75] border border-[#B99D75]/40 text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer (Matches Anemos Reference Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#747157] text-white flex items-center justify-center font-['Cormorant',serif] font-bold text-2xl border border-[#B99D75]">
                A
              </div>
              <div>
                <span className="font-['Cormorant',serif] text-2xl font-bold tracking-[0.2em] text-white uppercase block leading-none">
                  {site78Config.WORDMARK}
                </span>
                <span className="text-[9px] tracking-[0.28em] uppercase text-[#B99D75] block mt-1">
                  {site78Config.SUB_WORDMARK}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              Experience boutique luxury in Goa with private pool rooms, serene surroundings, and warm hospitality at Aurelia.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={site78Config.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#747157] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={site78Config.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#747157] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={site78Config.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#747157] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-['Cormorant',serif] font-bold text-lg text-white tracking-wider uppercase border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#B99D75] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('room-deluxe', undefined, 'deluxe-double-room-with-private-pool')} className="hover:text-[#B99D75] transition-colors cursor-pointer">
                  Deluxe Double Room
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('room-suite', undefined, 'two-bedroom-premium-suite')} className="hover:text-[#B99D75] transition-colors cursor-pointer">
                  Premium Suite
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('events')} className="hover:text-[#B99D75] transition-colors cursor-pointer">
                  Events And Celebration
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-[#B99D75] transition-colors cursor-pointer">
                  Blog & Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#B99D75] transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Locate Us & Dropping A Mail */}
          <div className="space-y-4">
            <h4 className="font-['Cormorant',serif] font-bold text-lg text-white tracking-wider uppercase border-b border-white/10 pb-2">
              Locate Us
            </h4>
            <div className="space-y-3 text-xs text-stone-400 font-light">
              <div>
                <span className="font-semibold text-stone-200 block text-[11px] uppercase tracking-wider mb-0.5">
                  Our Location:
                </span>
                <p>{site78Config.FULL_ADDRESS}</p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <span className="font-semibold text-stone-200 block text-[11px] uppercase tracking-wider mb-0.5">
                  Drop A Mail:
                </span>
                <div>Room Bookings: <a href={`mailto:${site78Config.EMAIL_RESERVATIONS}`} className="hover:text-white underline">{site78Config.EMAIL_RESERVATIONS}</a></div>
                <div>General Enquiry: <a href={`mailto:${site78Config.EMAIL_GENERAL}`} className="hover:text-white underline">{site78Config.EMAIL_GENERAL}</a></div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us & Timings */}
          <div className="space-y-4">
            <h4 className="font-['Cormorant',serif] font-bold text-lg text-white tracking-wider uppercase border-b border-white/10 pb-2">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-stone-400 font-light">
              <div>
                <span className="font-semibold text-stone-200 block text-[11px] uppercase tracking-wider mb-0.5">
                  Room Bookings:
                </span>
                <a href={`tel:${site78Config.PHONE_ROOMS_RAW}`} className="hover:text-white font-medium text-stone-300">
                  {site78Config.PHONE_ROOMS}
                </a>
              </div>

              <div>
                <span className="font-semibold text-stone-200 block text-[11px] uppercase tracking-wider mb-0.5">
                  Restaurant Reservations:
                </span>
                <a href={`tel:${site78Config.PHONE_RESTAURANT_RAW}`} className="hover:text-white font-medium text-stone-300">
                  {site78Config.PHONE_RESTAURANT}
                </a>
              </div>

              <div className="pt-2 border-t border-white/5">
                <span className="font-semibold text-stone-200 block text-[11px] uppercase tracking-wider mb-0.5">
                  Check-in / Check-out:
                </span>
                <div>Check-In: {site78Config.CHECK_IN_TIME}</div>
                <div>Check-Out: {site78Config.CHECK_OUT_TIME}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip (Matching reference exact wording) */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-stone-500 font-light">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            Aurelia © 2026. All Rights Reserved. Designed and Developed by Invoidea Technologies
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <button onClick={() => onNavigate('contact')} className="hover:underline">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:underline">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:underline">Cancellation Policy</button>
          </div>
        </div>
      </div>

      {/* Floating Bottom WhatsApp Concierge Button */}
      <a
        href={`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(site78Config.WHATSAPP_DEFAULT_MSG)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp us</span>
      </a>
    </footer>
  );
};
