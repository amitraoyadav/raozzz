import React from 'react';
import {
  CreditCard,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_DISPLAY,
  BRAND_TAGLINE,
  LONKARO_NAME,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS,
  MANDATORY_LEGAL_DISCLAIMER,
  SABKA_FINANCE_PRODUCTS
} from '../../data/sabkaFinanceData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer' | 'cookie' | 'data-deletion' | 'grievance') => void;
  onOpenApplyModal: () => void;
}

export const SabkaFinanceFooter: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenApplyModal
}) => {
  return (
    <footer className="bg-[#021d1c] text-slate-300 border-t border-teal-900/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-teal-900/60 text-xs">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                <CreditCard className="w-4 h-4 text-slate-950" />
              </div>
              <div>
                <strong className="font-black text-sm text-white uppercase tracking-tight block">
                  {BRAND_NAME}
                </strong>
                <span className="text-[10px] text-teal-300 font-semibold block">
                  Operating display: {LONKARO_NAME}
                </span>
              </div>
            </div>

            <p className="text-teal-100/70 text-xs leading-relaxed max-w-sm">
              "{BRAND_TAGLINE}". Sabka Finance is a customer-focused financial assistance platform helping eligible borrowers understand loan eligibility and navigate digital applications with partner lending institutions.
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
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white cursor-pointer">
                  About Sabka Finance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('eligibility')} className="hover:text-white cursor-pointer">
                  Check Eligibility
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-white cursor-pointer">
                  3-Step Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('repayment')} className="hover:text-white cursor-pointer">
                  Loan Repayment Help
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white cursor-pointer">
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Loan Products */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Loan Options
            </h4>
            <ul className="space-y-2 text-slate-400">
              {SABKA_FINANCE_PRODUCTS.slice(0, 6).map((prod) => (
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
              Legal &amp; Trust
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
                  Regulatory Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('cookie')} className="hover:text-white cursor-pointer">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('data-deletion')} className="hover:text-white cursor-pointer">
                  Data Deletion Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('grievance')} className="hover:text-white cursor-pointer">
                  Grievance Redressal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer Notice Box */}
        <div className="my-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-[11px] leading-relaxed text-slate-400">
          <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="uppercase tracking-wider">Mandatory Financial Facilitation Notice</span>
          </div>
          <p>{MANDATORY_LEGAL_DISCLAIMER}</p>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-4">
          <p>© 2026 {BRAND_NAME} ({LONKARO_NAME}). All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white">Privacy</button>
            <span>•</span>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white">Terms</button>
            <span>•</span>
            <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-white">Disclaimer</button>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Website #50 · Sabka Finance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
