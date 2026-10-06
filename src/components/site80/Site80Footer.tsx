import React, { useState } from 'react';
import {
  ArrowUp,
  ChevronDown,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Sparkles,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { site80Config } from '../../config/site80Config';

interface Site80FooterProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export const Site80Footer: React.FC<Site80FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [hoursExpanded, setHoursExpanded] = useState<boolean>(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white border-t border-white/10 pt-0 pb-12 font-['Inter']">
      {/* 1. Expandable Reference Opening Hours Banner */}
      <div className="border-b border-white/10 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setHoursExpanded(!hoursExpanded)}
            className="w-full py-4 flex items-center justify-between text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-expanded={hoursExpanded}
          >
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold">Hours</span>
              <span className="text-gray-400 font-light">
                (Doors open 9pm onwards till close)
              </span>
            </div>

            <ChevronDown
              className={`w-4 h-4 text-[#FFD700] transition-transform duration-300 ${
                hoursExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Expanded Schedule Grid */}
          {hoursExpanded && (
            <div className="pb-6 pt-2 border-t border-white/5 animate-fadeIn">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Tuesday
                  </span>
                  <span className="text-xs font-semibold text-white mt-1 block">9:00 PM – 4:30 AM</span>
                  <span className="text-[9px] text-[#FFD700] block mt-0.5">Tuesday Vibes</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FFD700]/5 border border-[#FFD700]/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD700] block">
                    Wednesday
                  </span>
                  <span className="text-xs font-semibold text-white mt-1 block">9:00 PM – 4:30 AM</span>
                  <span className="text-[9px] text-white/80 block mt-0.5">En Vogue Ladies Night</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Thursday
                  </span>
                  <span className="text-xs font-semibold text-white mt-1 block">9:00 PM – 4:30 AM</span>
                  <span className="text-[9px] text-[#FFD700] block mt-0.5">Global Village</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Friday
                  </span>
                  <span className="text-xs font-semibold text-white mt-1 block">9:00 PM – 4:30 AM</span>
                  <span className="text-[9px] text-[#FFD700] block mt-0.5">Friday Night Fever</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FFD700]/5 border border-[#FFD700]/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD700] block">
                    Saturday
                  </span>
                  <span className="text-xs font-semibold text-white mt-1 block">9:00 PM – 4:30 AM</span>
                  <span className="text-[9px] text-white/80 block mt-0.5">Glam 'n' Gala Night</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Sunday
                  </span>
                  <span className="text-xs font-semibold text-white mt-1 block">9:00 PM – 4:30 AM</span>
                  <span className="text-[9px] text-[#FFD700] block mt-0.5">Bollywood Supperclub</span>
                </div>

                <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                    Monday
                  </span>
                  <span className="text-xs font-semibold text-gray-400 mt-1 block">Closed</span>
                  <span className="text-[9px] text-gray-500 block mt-0.5">Private Buyouts Only</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Address Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-['Cinzel',serif] text-2xl sm:text-3xl font-black tracking-[0.2em] uppercase text-white">
                CLUB NOIR
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#FFD700] font-semibold block">
              BLANC • THE SURYAA HOTEL NEW DELHI
            </span>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm pt-2">
              The capital's monochromatic nightlife sanctuary. Curating international electronic showcases, VIP bottle spectacles, and high-fashion midnight celebrations.
            </p>

            <div className="space-y-2 pt-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                <span>{site80Config.LOCATION}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD700] shrink-0" />
                <a href={`tel:${site80Config.PHONE}`} className="hover:text-[#FFD700] transition-colors">
                  {site80Config.PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD700] shrink-0" />
                <a href={`mailto:${site80Config.EMAIL}`} className="hover:text-[#FFD700] transition-colors">
                  {site80Config.EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-['Alegreya_Sans',sans-serif]">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFD700]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  What's New
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  About the Club
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('media')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  Media Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('post-event')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  Post Event Albums
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('videos')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  Videos & Aftermovies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  Contact & Location Map
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Admissions Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFD700]">
              Connect & Experience
            </h4>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href={site80Config.SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all cursor-pointer"
                aria-label="Club Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href={site80Config.SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all cursor-pointer"
                aria-label="Club Twitter"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a
                href={site80Config.SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all cursor-pointer"
                aria-label="Club YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={site80Config.SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all cursor-pointer"
                aria-label="Club Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Admissions Rules Box */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 text-[11px] text-gray-400">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
                <span>Admission Protocol</span>
              </div>
              <p>• Strictly Age 21+ with physical Govt. Photo ID.</p>
              <p>• Dress code: Glamorous chic. No flip-flops, slippers, or athletic shorts.</p>
              <p>• Club management reserves the absolute right of admission.</p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-full bg-[#FFD700] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-md"
            >
              Book Table Online
            </button>
          </div>
        </div>

        {/* 3. Bottom Row: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} {site80Config.BRAND_NAME}. All rights reserved. At The Suryaa New Delhi.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-gray-300 hover:text-[#FFD700] hover:border-[#FFD700] transition-colors cursor-pointer text-xs"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
