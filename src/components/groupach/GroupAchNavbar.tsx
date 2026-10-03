import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/groupAchData';
import { AchIconMark } from './GroupAchLogo';

interface GroupAchNavbarProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property') => void;
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const GroupAchNavbar: React.FC<GroupAchNavbarProps> = ({
  onOpenApplyModal,
  onNavigate,
  currentPath
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Home Loans', path: '/home-loan' },
    { label: 'Loan Against Property', path: '/loan-against-property' },
    { label: 'Delhi NCR', path: '/home-loan-delhi' },
    { label: 'Eligibility', path: '/home-loan-eligibility' },
    { label: 'Guides', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE4DC]">
      {/* Top utility alert bar */}
      <div className="bg-[#1C1917] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#2D2721]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#8C6D46] animate-pulse" />
            <span className="font-medium text-[#FAF7F2]">Connecting you to 70+ Banks &amp; NBFCs</span>
            <span className="hidden sm:inline text-[#6B6560]">•</span>
            <span className="hidden sm:inline text-[#C5A880]">Direct Institutional Loan Advisory</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${BRAND_CONFIG.phoneClean}`}
              className="flex items-center gap-1.5 text-[#E6DDD0] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Strict 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element Brand wordmark with domain anchor */}
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-3.5 group py-1 text-left cursor-pointer"
          >
            <div className="w-10 h-13 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center p-1 shadow-xs group-hover:border-[#2F483E]/50 transition-colors shrink-0">
              <AchIconMark className="w-8 h-11 group-hover:scale-105 transition-transform" color="#2F483E" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight block leading-none">
                <span className="text-[#1C1917]">Group </span>
                <span className="text-[#2F483E]">ACH</span>
              </span>
              <span className="block text-[11px] font-mono text-[#8C7A6B] tracking-wider mt-1">
                {BRAND_CONFIG.domain}
              </span>
            </div>
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4E4843]">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => onNavigate(link.path)}
                  className={`hover:text-[#1C1917] transition-colors cursor-pointer py-1 ${
                    isActive ? 'text-[#1C1917] font-bold border-b-2 border-[#85673E]' : ''
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenApplyModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#85673E] hover:bg-[#735730] rounded-xl transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#F3EDE5]" />
              <span>Start Secure Chat</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6DDD0]" />
            </button>
          </div>

          {/* Mobile hamburger toggle on the right */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenApplyModal()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#85673E] rounded-lg"
            >
              Chat
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4E4843] hover:text-[#1C1917] rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE4DC] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex items-center gap-3 pb-3 border-b border-[#EAE4DC]">
            <div className="w-9 h-12 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center p-1 shadow-xs shrink-0">
              <AchIconMark className="w-7 h-10" color="#2F483E" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-slate-900 leading-tight">
                Group <span className="text-[#2F483E]">ACH</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">{BRAND_CONFIG.domain}</span>
            </div>
          </div>
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#2E2822]">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate(link.path);
                }}
                className={`text-left px-3 py-2 rounded-lg transition-colors ${
                  currentPath === link.path ? 'bg-[#F2EDE4] font-bold text-slate-900' : 'hover:bg-[#F2EDE4]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#EAE4DC] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-[#85673E] hover:bg-[#735730] rounded-xl shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#F3EDE5]" />
              <span>Start Secure Chat</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
