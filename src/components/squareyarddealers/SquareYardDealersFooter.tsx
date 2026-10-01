import React from 'react';
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_DISPLAY,
  BRAND_TAGLINE,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS,
  MANDATORY_LEGAL_DISCLAIMER
} from '../../data/squareYardDealersData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer' | 'cookie') => void;
  onOpenPostProperty: () => void;
}

export const SquareYardDealersFooter: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenPostProperty
}) => {
  return (
    <footer className="bg-[#0b1329] text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6-Column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800 text-xs">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                <Building2 className="w-5 h-5 text-slate-950" />
              </div>
              <strong className="font-black text-sm text-white uppercase tracking-tight">
                {BRAND_NAME}
              </strong>
            </div>

            <p className="text-slate-400 leading-relaxed text-[11px]">
              "Property discovery and real-estate assistance made simpler."
            </p>

            <div className="space-y-1.5 pt-2 text-[11px]">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{EMAIL_ADDRESS}</span>
              </a>
              <div className="flex items-start gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{OFFICE_ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Column 2: BUY */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              BUY
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('buy')} className="hover:text-white cursor-pointer">
                  Residential
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('buy')} className="hover:text-white cursor-pointer">
                  Commercial
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white cursor-pointer">
                  New Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('buy')} className="hover:text-white cursor-pointer">
                  Resale
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('buy')} className="hover:text-white cursor-pointer">
                  Plots
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: RENT */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              RENT
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('rent')} className="hover:text-white cursor-pointer">
                  Flats
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rent')} className="hover:text-white cursor-pointer">
                  Homes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rent')} className="hover:text-white cursor-pointer">
                  PG
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rent')} className="hover:text-white cursor-pointer">
                  Commercial
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rent')} className="hover:text-white cursor-pointer">
                  Office
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: SERVICES */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              SERVICES
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenPostProperty} className="hover:text-white cursor-pointer">
                  Sell Property
                </button>
              </li>
              <li>
                <button onClick={onOpenPostProperty} className="hover:text-white cursor-pointer">
                  Rent Property
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('property-valuation')} className="hover:text-white cursor-pointer">
                  Property Valuation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-white cursor-pointer">
                  Home Loan Assistance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white cursor-pointer">
                  Property Management
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: COMPANY */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              COMPANY
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('agents')} className="hover:text-white cursor-pointer">
                  Agents
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white cursor-pointer">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white cursor-pointer">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 6: LEGAL */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              LEGAL
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-white cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-white cursor-pointer">
                  Terms
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-white cursor-pointer">
                  Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('cookie')} className="hover:text-white cursor-pointer">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer Box */}
        <div className="my-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-[11px] leading-relaxed text-slate-400">
          <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="uppercase tracking-wider">Mandatory Real Estate Advisory Notice</span>
          </div>
          <p>{MANDATORY_LEGAL_DISCLAIMER}</p>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-4">
          <p>© 2026 {BRAND_NAME}. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white">Privacy</button>
            <span>•</span>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white">Terms</button>
            <span>•</span>
            <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-white">Disclaimer</button>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Square Yard Dealers Marketplace</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
