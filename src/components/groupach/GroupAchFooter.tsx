import React from 'react';
import { BRAND_CONFIG, buildWhatsAppLink } from '../../data/groupAchData';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  ShieldAlert,
} from 'lucide-react';
import { AchIconMark } from './GroupAchLogo';

interface GroupAchFooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onNavigate: (path: string) => void;
}

export const GroupAchFooter: React.FC<GroupAchFooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onNavigate,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Mandatory Regulatory & Legal Notice Banner */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] block">
              Mandatory Legal Disclosure &amp; Institutional Channel Disclaimer
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              {BRAND_CONFIG.legalDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-13 rounded-xl bg-slate-900 flex items-center justify-center p-1 border border-slate-700 shadow-sm shrink-0">
                <AchIconMark className="w-8 h-11" color="#E2E8F0" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight text-white block leading-none">
                  Group <span className="text-emerald-400">ACH</span>
                </span>
                <span className="text-xs font-mono text-emerald-400 block mt-1">
                  {BRAND_CONFIG.domain}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Connecting home buyers and commercial property owners with 70+ top Indian banks and NBFCs for lowest interest rates, maximum loan eligibility, and door-step document assistance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppLink("Hello Group ACH, I would like to discuss a Home Loan / Loan Against Property.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors text-xs font-semibold cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Start Secure Chat: {BRAND_CONFIG.whatsappNumber}</span>
              </a>
              <a
                href={`tel:${BRAND_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition-colors text-xs font-semibold cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call: {BRAND_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Core Loan Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Loan Portfolios
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/home-loan')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Home Loans (New Purchase)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/home-loan-delhi')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Home Loan in Delhi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/home-loan-balance-transfer')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Home Loan Balance Transfer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/loan-against-property')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Loan Against Property (LAP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/loan-against-property-delhi')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Loan Against Property in Delhi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/home-loan-for-self-employed')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Self-Employed Loan Schemes
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Tools & Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Tools &amp; Advisory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/home-loan-eligibility')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Loan Eligibility Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/home-loan-documents')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Documents Required Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Mortgage Knowledge &amp; Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/faq')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About Group ACH
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact &amp; Direct Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Contact &amp; Coverage
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={buildWhatsAppLink("Hello Group ACH, I would like to discuss a Home Loan / Loan Against Property.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Start Secure Chat: {BRAND_CONFIG.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Pan-India Online &amp; Doorstep Presence</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal policy links */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div className="flex items-center gap-2">
            <AchIconMark className="w-3.5 h-4.5 shrink-0" color="#94A3B8" />
            <span>© {currentYear} <strong className="text-slate-200">{BRAND_CONFIG.name}</strong> ({BRAND_CONFIG.domain}). All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-100 transition-colors underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-100 transition-colors underline cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <span className="font-mono text-slate-400">Authorized Loan Connector</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
