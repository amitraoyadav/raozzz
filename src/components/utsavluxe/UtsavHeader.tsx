import React, { useState } from 'react';
import { UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

interface UtsavHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCity: string;
  onOpenCityModal: () => void;
  onOpenConsultationModal: () => void;
  onOpenCalculator: () => void;
}

export const UtsavHeader: React.FC<UtsavHeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedCity,
  onOpenCityModal,
  onOpenConsultationModal,
  onOpenCalculator
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'lookbook', label: '3D Lookbook' },
    { id: 'calculator', label: 'Cost Estimator' },
    { id: 'real-weddings', label: 'Real Weddings' },
    { id: 'venues', label: 'Venues' },
    { id: 'packages', label: 'Packages' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCityObj = UTSAV_BUSINESS_CONFIG.cities.find(c => c.id === selectedCity) || UTSAV_BUSINESS_CONFIG.cities[0];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#180A0A] text-white/90 text-xs py-2 px-4 border-b border-[#2D1515]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#E05A47] text-white uppercase tracking-wider">
              2026-27 Bookings Open
            </span>
            <span className="hidden sm:inline text-white/80">
              Complimentary 3D Mandap & Stage Visualization with every consultation this week.
            </span>
            <span className="sm:hidden text-white/80">
              Free 3D Mandap Design with consultation.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${UTSAV_BUSINESS_CONFIG.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#E05A47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{UTSAV_BUSINESS_CONFIG.phone}</span>
            </a>
            <a
              href={UTSAV_BUSINESS_CONFIG.whatsappLink}
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

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & City Selector */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E05A47] to-[#B83827] flex items-center justify-center text-white font-serif font-bold text-xl shadow-md shadow-[#E05A47]/20 group-hover:scale-105 transition-transform">
                U
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-[#E05A47] transition-colors">
                  UTSAV<span className="font-sans font-light tracking-widest text-[#E05A47] text-lg ml-1">LUXE</span>
                </span>
                <span className="block text-[10px] font-sans tracking-widest uppercase text-stone-500 font-medium">
                  3D Decor & Turnkey Weddings
                </span>
              </div>
            </button>

            {/* City Selector Pill */}
            <button
              onClick={onOpenCityModal}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-700 text-xs font-medium border border-stone-200 transition-colors"
              title="Change wedding city or studio"
            >
              <svg className="w-3.5 h-3.5 text-[#E05A47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{activeCityObj.name}</span>
              <svg className="w-3 h-3 text-stone-400 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

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
                      ? 'text-[#E05A47] font-semibold'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E05A47] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenCalculator}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg transition-colors shadow-xs"
            >
              <svg className="w-3.5 h-3.5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Instant Cost Calculator</span>
            </button>

            <button
              onClick={onOpenConsultationModal}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] rounded-lg shadow-sm shadow-[#E05A47]/30 transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Free 3D Recce
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-stone-950 rounded-lg hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
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

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-stone-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
            {/* Mobile City Selector */}
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#E05A47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <div>
                  <span className="text-xs text-stone-500 font-medium">Selected Studio / City</span>
                  <div className="text-sm font-semibold text-stone-900">{activeCityObj.name}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCityModal();
                }}
                className="text-xs font-semibold text-[#E05A47] hover:underline"
              >
                Change City →
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="grid grid-cols-2 gap-1.5 pt-2">
              {navLinks.map(link => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#E05A47]/10 text-[#E05A47] font-semibold'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile CTAs */}
            <div className="pt-3 border-t border-stone-200 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Instant Wedding Cost Calculator
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-3 px-4 text-center text-sm font-semibold rounded-lg bg-[#E05A47] text-white shadow-md shadow-[#E05A47]/20"
              >
                Book Free Consultation & 3D Recce
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
