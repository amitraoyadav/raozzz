import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Menu,
  X,
  Building2,
  Home,
  Percent,
  PlusCircle,
  Calculator,
  Compass,
  FileCheck2,
  ChevronRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, OFFICE_ADDRESS, GOVT_REG_ID } from '../../data/choudharyRealestateData';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenPostProperty: () => void;
  onOpenLoanModal: () => void;
  onOpenValuationModal: () => void;
}

export const ChoudharyRealestateHeader: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenPostProperty,
  onOpenLoanModal,
  onOpenValuationModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0F1E36] text-white shadow-md border-b border-amber-500/20 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Top Utility / Government & Brokerage Bar */}
      <div className="bg-[#091322] border-b border-white/10 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Govt. MSME Reg: {GOVT_REG_ID}</span>
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400/80" />
              <span>Dwarka Sector 8 Office, New Delhi</span>
            </span>
            <span className="hidden lg:inline text-white/20">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
              <Percent className="w-3 h-3" />
              <span>Strict 1% Transparent Brokerage — Zero Hidden Markups</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Choudhary Realestate, I am looking for properties in Dwarka.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#C5A25D] to-[#E5C378] text-[#0F1E36] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Building2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-['Poppins',sans-serif]">
                  CHOUDHARY
                </span>
                <span className="text-xl sm:text-2xl font-light tracking-wider text-[#C5A25D] uppercase font-['Poppins',sans-serif]">
                  REALESTATE
                </span>
              </div>
              <p className="text-[10px] tracking-[0.2em] text-slate-400 font-semibold uppercase -mt-1 font-mono">
                Dwarka · Property Advisory &amp; Freehold Floors
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] font-bold text-slate-200">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#C5A25D] transition-colors py-1 cursor-pointer ${
                activeTab === 'home' ? 'text-[#C5A25D] border-b-2 border-[#C5A25D]' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('builder-floors')}
              className={`hover:text-[#C5A25D] transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                activeTab === 'builder-floors' ? 'text-[#C5A25D] border-b-2 border-[#C5A25D]' : ''
              }`}
            >
              <span>Builder Floors</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-400 font-black">DDA</span>
            </button>
            <button
              onClick={() => handleNavClick('society-flats')}
              className={`hover:text-[#C5A25D] transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                activeTab === 'society-flats' ? 'text-[#C5A25D] border-b-2 border-[#C5A25D]' : ''
              }`}
            >
              <span>Society Flats</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-sky-500/20 text-sky-400 font-black">CGHS</span>
            </button>
            <button
              onClick={() => handleNavClick('commercial')}
              className={`hover:text-[#C5A25D] transition-colors py-1 cursor-pointer ${
                activeTab === 'commercial' ? 'text-[#C5A25D] border-b-2 border-[#C5A25D]' : ''
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => handleNavClick('rent')}
              className={`hover:text-[#C5A25D] transition-colors py-1 cursor-pointer ${
                activeTab === 'rent' ? 'text-[#C5A25D] border-b-2 border-[#C5A25D]' : ''
              }`}
            >
              For Rent
            </button>
            <button
              onClick={() => handleNavClick('sectors')}
              className={`hover:text-[#C5A25D] transition-colors py-1 cursor-pointer ${
                activeTab === 'sectors' ? 'text-[#C5A25D] border-b-2 border-[#C5A25D]' : ''
              }`}
            >
              Sectors Guide
            </button>
            <button
              onClick={() => handleNavClick('loan-calc')}
              className={`hover:text-[#C5A25D] transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                activeTab === 'loan-calc' ? 'text-[#C5A25D] border-b-2 border-[#C5A25D]' : ''
              }`}
            >
              <span>Home Loan</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#C5A25D] transition-colors py-1 cursor-pointer ${
                activeTab === 'about' ? 'text-[#C5A25D] border-b-2 border-[#C5A25D]' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#C5A25D] transition-colors py-1 cursor-pointer ${
                activeTab === 'contact' ? 'text-[#C5A25D] border-b-2 border-[#C5A25D]' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPostProperty}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A25D] to-[#E5C378] text-[#0F1E36] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ List Property</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A1526] border-b border-amber-500/30 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-white hover:bg-white/10"
            >
              <Home className="w-4 h-4 text-amber-400" />
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNavClick('builder-floors')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-white hover:bg-white/10"
            >
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Builder Floors</span>
            </button>
            <button
              onClick={() => handleNavClick('society-flats')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-white hover:bg-white/10"
            >
              <Building2 className="w-4 h-4 text-sky-400" />
              <span>Society Flats</span>
            </button>
            <button
              onClick={() => handleNavClick('commercial')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-white hover:bg-white/10"
            >
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span>Commercial</span>
            </button>
            <button
              onClick={() => handleNavClick('rent')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-white hover:bg-white/10"
            >
              <Home className="w-4 h-4 text-amber-400" />
              <span>For Rent</span>
            </button>
            <button
              onClick={() => handleNavClick('sectors')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-white hover:bg-white/10"
            >
              <Compass className="w-4 h-4 text-rose-400" />
              <span>Sectors Guide</span>
            </button>
            <button
              onClick={() => handleNavClick('loan-calc')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-white hover:bg-white/10"
            >
              <Calculator className="w-4 h-4 text-teal-400" />
              <span>Home Loan</span>
            </button>
            <button
              onClick={() => { onOpenValuationModal(); setMobileMenuOpen(false); }}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-white hover:bg-white/10"
            >
              <FileCheck2 className="w-4 h-4 text-yellow-400" />
              <span>Valuation</span>
            </button>
          </div>

          <div className="pt-2 border-t border-white/10 space-y-2 text-sm font-semibold">
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left py-2 px-3 text-slate-300 hover:text-white"
            >
              About Choudhary Realestate
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left py-2 px-3 text-slate-300 hover:text-white"
            >
              Contact Office (Sector 8 Dwarka)
            </button>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="flex-1 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 hover:bg-white/15"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Desk</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Choudhary Realestate, I am looking for properties in Dwarka.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 hover:bg-emerald-500"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
