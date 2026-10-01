import React, { useState } from 'react';
import {
  CreditCard,
  Menu as MenuIcon,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Calculator,
  HelpCircle,
  Info
} from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_DISPLAY,
  BRAND_TAGLINE,
  LONKARO_NAME,
  PHONE_NUMBER,
  SABKA_FINANCE_PRODUCTS
} from '../../data/sabkaFinanceData';
import { SabkaFinanceCategorySwitcher } from './SabkaFinanceCategorySwitcher';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenApplyModal: () => void;
}

export const SabkaFinanceHeader: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenApplyModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Global Multi-Industry 8 Categories Top Bar */}
      <SabkaFinanceCategorySwitcher variant="topbar" />

      {/* 2. Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#042f2e] text-white border-b border-teal-800/40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Brand Logo & Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-400/20 group-hover:scale-105 transition-transform border border-amber-300">
              <CreditCard className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white uppercase">
                  {BRAND_NAME}
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] bg-teal-500/20 text-teal-300 font-bold border border-teal-400/30">
                  {LONKARO_NAME}
                </span>
              </div>
              <span className="text-[9px] tracking-wider text-teal-200/80 font-medium uppercase block -mt-0.5">
                Financial Support Platform
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-200">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'home' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'about' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              About Us
            </button>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className={`hover:text-amber-400 transition-colors py-2 flex items-center gap-1 cursor-pointer ${
                  currentTab.startsWith('product-') ? 'text-amber-400 border-b-2 border-amber-400' : ''
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {productsDropdownOpen && (
                <div
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-72 bg-[#042f2e] rounded-2xl shadow-2xl border border-teal-700/50 py-2 text-left z-50 animate-in fade-in slide-in-from-top-1"
                >
                  <div className="px-3.5 py-1 text-[10px] font-bold text-teal-300 uppercase tracking-wider border-b border-teal-800">
                    8 Loan Solutions
                  </div>
                  <div className="max-h-80 overflow-y-auto py-1">
                    {SABKA_FINANCE_PRODUCTS.map((prod) => (
                      <button
                        key={prod.id}
                        onClick={() => handleNavClick(`product-${prod.slug}`)}
                        className="w-full px-3.5 py-2 text-xs text-left hover:bg-white/10 flex items-center justify-between text-slate-200 hover:text-white"
                      >
                        <span>{prod.name}</span>
                        <span className="text-[10px] text-teal-300 font-normal">
                          {prod.indicativeInterestRate}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('eligibility')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'eligibility' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Eligibility
            </button>

            <button
              onClick={() => handleNavClick('process')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'process' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Process
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'faq' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'contact' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-teal-800/60 hover:bg-teal-700/60 text-teal-100 text-xs font-semibold border border-teal-700/50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{PHONE_NUMBER}</span>
            </a>

            <button
              onClick={onOpenApplyModal}
              className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/25 transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-teal-800/80 text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#042f2e] border-t border-teal-800 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase">
              <button
                onClick={() => handleNavClick('home')}
                className="p-2.5 rounded-lg bg-white/5 text-left text-white"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="p-2.5 rounded-lg bg-white/5 text-left text-white"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('eligibility')}
                className="p-2.5 rounded-lg bg-white/5 text-left text-white"
              >
                Check Eligibility
              </button>
              <button
                onClick={() => handleNavClick('process')}
                className="p-2.5 rounded-lg bg-white/5 text-left text-white"
              >
                3-Step Process
              </button>
              <button
                onClick={() => handleNavClick('repayment')}
                className="p-2.5 rounded-lg bg-white/5 text-left text-white"
              >
                Repayment Help
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="p-2.5 rounded-lg bg-white/5 text-left text-white"
              >
                FAQ
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="p-2.5 rounded-lg bg-white/5 text-left text-white col-span-2"
              >
                Contact Support
              </button>
            </div>

            <div className="pt-2 border-t border-teal-800">
              <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block mb-2">
                All 8 Loan Products
              </span>
              <div className="grid grid-cols-2 gap-1 text-xs">
                {SABKA_FINANCE_PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => handleNavClick(`product-${prod.slug}`)}
                    className="p-2 rounded-lg bg-white/5 text-left text-teal-100 truncate"
                  >
                    {prod.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
