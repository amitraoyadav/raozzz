import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  Heart,
  ShieldCheck,
  ChevronRight,
  ArrowUp,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';
import { DevdasLogo } from './DevdasLogo';
import { DEVDAS_CONFIG, DESTINATIONS_DATA } from '../../data/devdasWeddingData';

interface DevdasFooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenInquiry: () => void;
  onOpenDestination: (slug: string) => void;
  onOpenCalculator: () => void;
  onOpenSubPage: (pageType: string) => void;
}

export const DevdasFooter: React.FC<DevdasFooterProps> = ({
  onNavigateToSection,
  onOpenInquiry,
  onOpenDestination,
  onOpenCalculator,
  onOpenSubPage,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C0E12] text-slate-300 border-t border-amber-900/30">
      {/* Top Banner Bar */}
      <div className="border-b border-amber-900/20 bg-[#251318] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Begin Your Nuptial Journey
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Ready to Plan Your Dream Destination Wedding?
            </h3>
            <p className="text-xs sm:text-sm text-rose-150 text-slate-300">
              Schedule a personalized consultation with our resident nuptial artistes in Gurgaon.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-amber-400/30 cursor-pointer"
            >
              Calculate Budget
            </button>
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 rounded-xl bg-[#7A1C30] hover:bg-[#92223a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-red-950/40 border border-amber-400/40 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Request VIP Recce</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info & Vision */}
          <div className="lg:col-span-4 space-y-4">
            <DevdasLogo theme="light" size="lg" showSubline={true} />

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Devdas Wedding is a premier luxury destination wedding planning consultancy founded on complete fee transparency, architectural decor styling, and meticulous hospitality logistics.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={`tel:${DEVDAS_CONFIG.phonePrimary.replace(/\s+/g, '')}`} className="hover:underline">
                  {DEVDAS_CONFIG.phonePrimary} (Delhi / NCR)
                </a>
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href={`mailto:${DEVDAS_CONFIG.email}`} className="hover:underline">
                  {DEVDAS_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={DEVDAS_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7A1C30] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={DEVDAS_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7A1C30] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={DEVDAS_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7A1C30] flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Destination Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              {DESTINATIONS_DATA.map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => onOpenDestination(dest.slug)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-[#7A1C30]" />
                    <span>{dest.name} Weddings</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateToSection('intro')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300"
                >
                  About Devdas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('services')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300"
                >
                  Turnkey Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('calculator')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300"
                >
                  Cost Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('packages')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300"
                >
                  Planning Fees
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('gallery')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300"
                >
                  Real Weddings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('blog')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300"
                >
                  Wedding Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('faq')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300"
                >
                  FAQ Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Offices */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              Regional Studios
            </h4>
            <div className="space-y-3 text-xs">
              {DEVDAS_CONFIG.offices.map((office, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{office.city} ({office.type})</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-tight">{office.address}</p>
                  <p className="text-amber-300 text-[11px] font-semibold">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {DEVDAS_CONFIG.legalName}</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-amber-400/80">Project #68 · Luxury Destination Wedding Planners</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7A1C30] flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
