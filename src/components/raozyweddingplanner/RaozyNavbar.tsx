import React, { useState, useEffect } from 'react';
import { raozyConfig } from '../../config/raozyWeddingConfig';

interface RaozyNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultationModal: () => void;
  onBackToHub?: () => void;
}

export const RaozyNavbar: React.FC<RaozyNavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultationModal,
  onBackToHub
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: '60-Weddings Lookbook' },
    { id: 'services', label: 'Services' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'atelier', label: 'In-House Atelier' },
    { id: 'calculator', label: 'Cost Estimator' },
    { id: 'real-weddings', label: 'Real Stories' },
    { id: 'about', label: 'About Atelier' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Scarcity & Availability Banner */}
      <div className="bg-gradient-to-r from-[#171410] via-[#2D241E] to-[#171410] text-[#E8D8BA] text-xs py-2 px-4 border-b border-[#DFC082]/20 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#DFC082]/20 text-[#DFC082] border border-[#DFC082]/30 uppercase tracking-widest">
              Exclusive Season Cap
            </span>
            <span>
              Strictly limited to <strong>60 Bespoke Weddings / Year</strong>. Winter 2025–26 dates now booking.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${raozyConfig.PHONE.replace(/\s+/g, '')}`}
              className="text-[#DFC082] hover:underline flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{raozyConfig.PHONE_DISPLAY}</span>
            </a>
            <span className="text-stone-600 hidden md:inline">|</span>
            <span className="text-stone-400 hidden md:inline">Gurugram Atelier &amp; 14 Destination Hubs</span>
            {onBackToHub && (
              <button
                onClick={onBackToHub}
                className="bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white px-2 py-0.5 rounded text-[10px] border border-stone-700 transition"
              >
                ← RaozSite Hub
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#12100E]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#DFC082]/15'
            : 'bg-[#14110E] py-4 border-b border-stone-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-full border border-[#DFC082]/60 flex items-center justify-center bg-gradient-to-br from-[#2A231C] to-[#171410] text-[#DFC082] font-serif font-bold text-sm tracking-wider shadow-inner group-hover:border-[#DFC082] transition-colors">
              {raozyConfig.LOGO.monogram}
            </div>
            <div>
              <div className="text-lg sm:text-xl font-serif tracking-[0.2em] font-semibold text-white group-hover:text-[#DFC082] transition-colors">
                {raozyConfig.LOGO.text}
              </div>
              <div className="text-[9px] tracking-[0.3em] font-sans uppercase text-[#DFC082]/80 font-medium">
                {raozyConfig.LOGO.subtext}
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded text-xs font-sans tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-[#DFC082] font-semibold bg-[#DFC082]/10 border-b-2 border-[#DFC082]'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${raozyConfig.WHATSAPP_NUMBER}?text=Hello%20Raozy%20Wedding%20Planner,%20I%20would%20like%20to%20check%20availability%20for%20our%20wedding%20date.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-full transition"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z" />
              </svg>
              <span>WhatsApp Concierge</span>
            </a>

            <button
              onClick={onOpenConsultationModal}
              className="bg-gradient-to-r from-[#C5A059] via-[#DFC082] to-[#B38F46] text-[#171410] font-serif font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded shadow-md hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              {raozyConfig.CTA.primary}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultationModal}
              className="sm:hidden bg-[#DFC082] text-[#171410] text-[10px] font-bold uppercase px-2.5 py-1.5 rounded"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#181512] border-t border-stone-800 px-4 pt-3 pb-6 mt-2 space-y-1 animate-fadeIn">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded text-sm font-sans tracking-wide transition-colors ${
                  activeTab === item.id
                    ? 'text-[#DFC082] font-semibold bg-[#DFC082]/10 border-l-4 border-[#DFC082]'
                    : 'text-stone-300 hover:bg-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-stone-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full bg-[#DFC082] text-[#171410] font-serif font-bold text-center py-2.5 rounded uppercase tracking-wider text-xs shadow"
              >
                {raozyConfig.CTA.primary}
              </button>
              <a
                href={`https://wa.me/${raozyConfig.WHATSAPP_NUMBER}?text=Hello%20Raozy%20Wedding%20Planner,%20I%20would%20like%20to%20inquire.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-950 text-emerald-300 border border-emerald-800/40 text-center py-2 rounded text-xs flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp Direct: {raozyConfig.WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
