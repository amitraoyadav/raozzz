import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ChevronUp,
  ExternalLink,
  Shield,
  FileText,
  User,
  Clock,
  ArrowRight
} from 'lucide-react';
import { site78ClubConfig } from '../../config/site78ClubConfig';

interface Site78ClubFooterProps {
  onNavigate: (view: string, facilitySlug?: string) => void;
  onOpenLogin: () => void;
}

export const Site78ClubFooter: React.FC<Site78ClubFooterProps> = ({
  onNavigate,
  onOpenLogin
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1926] text-stone-300 font-['Jost',sans-serif] relative border-t border-white/10">
      {/* Main 4-Column Footer (Matching Panchshila reference layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Office Address */}
          <div className="space-y-4">
            <h4 className="font-['Cormorant',serif] text-xl font-bold tracking-wider uppercase text-white border-b border-white/10 pb-2">
              Office Address
            </h4>

            <div className="space-y-3.5 text-xs text-stone-300 font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <span>{site78ClubConfig.FULL_ADDRESS}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A869] shrink-0" />
                <a href={`tel:${site78ClubConfig.PHONE_RECEPTION_RAW}`} className="hover:text-white transition-colors">
                  Phone: {site78ClubConfig.PHONE_RECEPTION}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A869] shrink-0" />
                <a href={`mailto:${site78ClubConfig.EMAIL_GENERAL}`} className="hover:text-white transition-colors">
                  Email: {site78ClubConfig.EMAIL_GENERAL}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A869] shrink-0" />
                <span>Hours: {site78ClubConfig.HOURS_CLUB}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[10px] text-[#C5A869] uppercase tracking-widest font-semibold">
                Est. {site78ClubConfig.ESTABLISHED_YEAR} · South Delhi
              </span>
            </div>
          </div>

          {/* Column 2: Important Links (Matching Panchshila) */}
          <div className="space-y-4">
            <h4 className="font-['Cormorant',serif] text-xl font-bold tracking-wider uppercase text-white border-b border-white/10 pb-2">
              Important Links
            </h4>

            <ul className="space-y-2.5 text-xs text-stone-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('rules')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Rules And Regulations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('disclaimer')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('refund')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Cancellation & Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tender')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Active Tenders & Notices
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links (Matching Panchshila) */}
          <div className="space-y-4">
            <h4 className="font-['Cormorant',serif] text-xl font-bold tracking-wider uppercase text-white border-b border-white/10 pb-2">
              Useful Links
            </h4>

            <ul className="space-y-2.5 text-xs text-stone-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('facilities')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenLogin}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <User className="w-3 h-3 text-[#C5A869]" />
                  <span>Member Login</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('affiliated-clubs')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Affiliated Clubs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('forms')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Download Forms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-[#C5A869] transition-colors cursor-pointer text-left"
                >
                  Careers at Club
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map Iframe (Matching Panchshila) */}
          <div className="space-y-4">
            <h4 className="font-['Cormorant',serif] text-xl font-bold tracking-wider uppercase text-white border-b border-white/10 pb-2">
              Club Location
            </h4>

            <div className="rounded-xl overflow-hidden border border-white/15 h-56 bg-stone-900 shadow-md">
              <iframe
                src={site78ClubConfig.MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Club Location Map"
              />
            </div>
            <p className="text-[11px] text-stone-400 font-light">
              Outer Ring Road, South Delhi · Ample member valet parking available.
            </p>
          </div>
        </div>
      </div>

      {/* Copyrights Bar */}
      <div className="border-t border-white/10 py-5 bg-[#07131D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © Copyright {site78ClubConfig.ESTABLISHED_YEAR}–2026 {site78ClubConfig.LEGAL_NAME}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-stone-400">
              New Delhi, India
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A869] hover:text-[#0F2537] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
