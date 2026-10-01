import React from 'react';
import {
  Landmark,
  Phone,
  Mail,
  MapPin,
  Clock,
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
  MANDATORY_LEGAL_DISCLAIMER,
  BRIGHT_LOAN_PRODUCTS
} from '../../data/sabkaLoansData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer' | 'fair-practice') => void;
  onOpenApplyModal?: () => void;
  onOpenApply?: (productName?: string, amount?: number) => void;
}

export const SabkaLoansFooter: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenApplyModal,
  onOpenApply
}) => {
  const triggerApply = () => {
    if (onOpenApply) onOpenApply();
    else if (onOpenApplyModal) onOpenApplyModal();
  };
  return (
    <footer className="bg-[#071324] text-slate-300 border-t border-blue-900/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-blue-900/60 text-xs">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                <Landmark className="w-4 h-4 text-white" />
              </div>
              <div>
                <strong className="font-black text-sm text-white uppercase tracking-tight block">
                  {BRAND_NAME}
                </strong>
                <span className="text-[10px] text-blue-300 font-semibold block">
                  BrightLoans Digital Architecture
                </span>
              </div>
            </div>

            <p className="text-blue-100/70 text-xs leading-relaxed max-w-sm">
              "{BRAND_TAGLINE}". Sabka Loans is an intelligent digital credit discovery portal connecting qualified personal and business borrowers with certified Indian lending partners.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white font-semibold">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white font-semibold">
                  {EMAIL_ADDRESS}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-400">{OFFICE_ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-white cursor-pointer">
                  EMI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('eligibility')} className="hover:text-white cursor-pointer">
                  Loan Eligibility
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-white cursor-pointer">
                  Application Flow
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white cursor-pointer">
                  Customer Support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white cursor-pointer">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Loan Products */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Loan Offerings
            </h4>
            <ul className="space-y-2 text-slate-400">
              {BRIGHT_LOAN_PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => onNavigate(`product-${prod.slug}`)}
                    className="hover:text-white cursor-pointer text-left truncate max-w-full block"
                  >
                    {prod.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Legal Policies
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-white cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-white cursor-pointer">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-white cursor-pointer">
                  Facilitator Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('fair-practice')} className="hover:text-white cursor-pointer">
                  Fair Practice Code
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer Notice Box */}
        <div className="my-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-[11px] leading-relaxed text-slate-400">
          <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="uppercase tracking-wider">Mandatory Loan Facilitation Notice</span>
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
            <span className="text-amber-400 font-semibold">Website #49 · Sabka Loans</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
