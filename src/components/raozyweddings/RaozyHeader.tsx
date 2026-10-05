import React, { useState } from 'react';
import { RAOZY_BUSINESS_CONFIG } from '../../data/raozyWeddingData';

interface RaozyHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultationModal: () => void;
  onOpenCostEstimator: () => void;
}

export const RaozyHeader: React.FC<RaozyHeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultationModal,
  onOpenCostEstimator
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'films', label: 'Wedding Films' },
    { id: 'decor-library', label: 'Decor Library' },
    { id: 'real-weddings', label: 'Real Weddings' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'services', label: 'Services' },
    { id: 'estimator', label: 'Cost Estimator' },
    { id: 'packages', label: 'Packages' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Luxe Strip */}
      <div className="bg-[#140508] text-white/80 text-[11px] py-2 px-4 border-b border-[#2C0B12]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#800020] text-amber-200 border border-[#D4AF37]/30">
              2026/27 Destination Dates Open
            </span>
            <span className="hidden sm:inline text-white/70">
              Complimentary 1-Day Chauffeur Venue Recce with every consultation.
            </span>
            <span className="sm:hidden text-white/70">
              Free 1-Day Venue Recce with consultation.
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a
              href={`tel:${RAOZY_BUSINESS_CONFIG.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{RAOZY_BUSINESS_CONFIG.phone}</span>
            </a>
            <a
              href={RAOZY_BUSINESS_CONFIG.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#800020] via-[#5C0017] to-[#3B000F] border border-[#D4AF37]/50 flex items-center justify-center text-amber-300 font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              R
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-[#800020] transition-colors">
                RAOZY
              </span>
              <span className="block text-[9px] font-sans tracking-[0.25em] uppercase text-[#800020] font-semibold">
                Wedding Planner
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-[#800020] font-bold'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#800020] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenCostEstimator}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Cost Estimator</span>
            </button>

            <button
              onClick={onOpenConsultationModal}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#800020] to-[#5C0017] hover:from-[#5C0017] hover:to-[#3B000F] border border-[#D4AF37]/40 rounded-lg shadow-sm shadow-[#800020]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Plan Your Wedding
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-stone-950 rounded-lg hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-stone-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map(link => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#800020]/10 text-[#800020] font-bold'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-200 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCostEstimator();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Destination Cost Estimator
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-3 px-4 text-center text-sm font-semibold rounded-lg bg-[#800020] text-white shadow-md"
              >
                Book Free Venue Recce & Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
