import React, { useState, useEffect } from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';

interface GlobalNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenEnquiry: () => void;
  onBackToHub?: () => void;
}

export const GlobalNavbar: React.FC<GlobalNavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenEnquiry,
  onBackToHub
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'weddings', label: 'Weddings' },
    { id: 'story', label: 'Our Story' },
    { id: 'services', label: 'What We Do' },
    { id: 'resources', label: 'Planning' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'journal', label: 'Journal' }
  ];

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setPricingDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Scarcity Bar */}
      <div className="bg-[#171412] text-[#E5D7B7] text-[11px] sm:text-xs py-2 px-4 border-b border-[#C19A4B]/20 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C19A4B] animate-pulse" />
            <span>
              We take on <strong>{globalPlannerssConfig.ANNUAL_CAP} weddings a year</strong> —{' '}
              <button
                onClick={onOpenEnquiry}
                className="text-[#E5D7B7] font-semibold underline underline-offset-2 hover:text-[#C19A4B] transition"
              >
                {globalPlannerssConfig.REMAINING_DATES_COUNT} dates remaining in {globalPlannerssConfig.SEASON_YEARS}
              </button>
              .
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-stone-400">
            <a href={`tel:${globalPlannerssConfig.PHONE.replace(/\s+/g, '')}`} className="hover:text-white transition">
              {globalPlannerssConfig.PHONE_DISPLAY}
            </a>
            <span className="opacity-40">·</span>
            <span>Delhi NCR · Goa · Udaipur · Dubai</span>
            {onBackToHub && (
              <>
                <span className="opacity-40 hidden md:inline">·</span>
                <button
                  onClick={onBackToHub}
                  className="bg-stone-800 text-stone-300 hover:text-white px-2 py-0.5 rounded text-[10px] border border-stone-700 transition"
                >
                  ← All RaozSites
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#12100E]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C19A4B]/20'
            : 'bg-[#151210] py-4 border-b border-stone-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Crest */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-[#C19A4B]/60 flex items-center justify-center bg-gradient-to-br from-[#2D241A] to-[#171410] text-[#E5D7B7] font-serif font-bold text-sm tracking-wider shadow-inner group-hover:border-[#C19A4B] transition-colors">
              GP
            </div>
            <div>
              <div className="text-lg sm:text-xl font-serif tracking-[0.18em] font-semibold text-white group-hover:text-[#C19A4B] transition-colors leading-none">
                {globalPlannerssConfig.SITE_NAME}
              </div>
              <div className="text-[9px] tracking-[0.28em] font-sans uppercase text-[#C19A4B] font-medium mt-1">
                Luxury Wedding Planners
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-1.5 rounded text-xs font-sans tracking-wider uppercase transition-colors ${
                activeTab === 'home'
                  ? 'text-[#C19A4B] font-semibold bg-[#C19A4B]/10'
                  : 'text-stone-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>

            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3 py-1.5 rounded text-xs font-sans tracking-wider uppercase transition-colors ${
                  activeTab === item.id
                    ? 'text-[#C19A4B] font-semibold bg-[#C19A4B]/10'
                    : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Pricing Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setPricingDropdownOpen(!pricingDropdownOpen)}
                className="px-3 py-1.5 rounded text-xs font-sans tracking-wider uppercase text-stone-300 hover:text-white hover:bg-white/5 flex items-center gap-1 transition-colors"
                aria-expanded={pricingDropdownOpen}
              >
                <span>Pricing</span>
                <svg className={`w-3 h-3 transition-transform ${pricingDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {pricingDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#181512] border border-stone-800 rounded-xl shadow-2xl py-2 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleLinkClick('pricing-planning')}
                    className="w-full text-left px-4 py-2 text-xs text-stone-300 hover:text-[#C19A4B] hover:bg-white/5 transition"
                  >
                    <div className="font-semibold text-white">Full Wedding Planning</div>
                    <div className="text-[10px] text-stone-500 mt-0.5">Published collections from ₹2.5L</div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('pricing-coordination')}
                    className="w-full text-left px-4 py-2 text-xs text-stone-300 hover:text-[#C19A4B] hover:bg-white/5 transition"
                  >
                    <div className="font-semibold text-white">Wedding-Day Coordination</div>
                    <div className="text-[10px] text-stone-500 mt-0.5">Single accountable on-ground crew</div>
                  </button>
                  <div className="border-t border-stone-800 my-1" />
                  <button
                    onClick={() => handleLinkClick('calculator')}
                    className="w-full text-left px-4 py-2 text-xs text-[#C19A4B] hover:bg-white/5 transition font-medium"
                  >
                    Interactive Budget Calculator →
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`px-3 py-1.5 rounded text-xs font-sans tracking-wider uppercase transition-colors ${
                activeTab === 'contact'
                  ? 'text-[#C19A4B] font-semibold bg-[#C19A4B]/10'
                  : 'text-stone-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-300 hover:text-white hover:bg-white/5 rounded-full transition focus:outline-none"
              aria-label="Search the site"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>

            {/* Start a conversation CTA */}
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded bg-gradient-to-r from-[#B08D57] via-[#C19A4B] to-[#9C7B4E] text-[#171410] font-serif font-bold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              {globalPlannerssConfig.CTAS.primary}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Open menu"
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

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#181512] border-t border-stone-800 px-4 pt-3 pb-6 mt-2 space-y-1 animate-fadeIn">
            <button
              onClick={() => handleLinkClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded text-sm font-sans tracking-wide transition ${
                activeTab === 'home' ? 'text-[#C19A4B] font-bold bg-[#C19A4B]/10' : 'text-stone-300'
              }`}
            >
              Home
            </button>
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded text-sm font-sans tracking-wide transition ${
                  activeTab === item.id ? 'text-[#C19A4B] font-bold bg-[#C19A4B]/10' : 'text-stone-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('calculator')}
              className="w-full text-left px-3 py-2.5 rounded text-sm font-sans text-[#C19A4B] font-medium"
            >
              Interactive Budget Calculator
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full text-left px-3 py-2.5 rounded text-sm font-sans text-stone-300"
            >
              Contact
            </button>

            <div className="pt-4 border-t border-stone-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 rounded bg-[#C19A4B] text-[#171410] font-serif font-bold text-xs uppercase tracking-wider text-center"
              >
                {globalPlannerssConfig.CTAS.primary}
              </button>
              <a
                href={`https://wa.me/${globalPlannerssConfig.WHATSAPP}?text=Hello%20Global%20Plannerss,%20we%20would%20like%20to%20inquire%20about%20our%20wedding.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40 text-xs flex items-center justify-center gap-1.5"
              >
                WhatsApp Direct: {globalPlannerssConfig.WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
