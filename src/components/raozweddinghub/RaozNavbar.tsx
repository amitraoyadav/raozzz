import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe, Sparkles, User, Heart, Calendar } from 'lucide-react';
import { raozWeddingHubConfig } from '../../config/raozWeddingHubConfig';

interface RaozNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  onOpenLogin: () => void;
  onOpenStartPlanning: () => void;
}

export const RaozNavbar: React.FC<RaozNavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedCurrency,
  setSelectedCurrency,
  onOpenLogin,
  onOpenStartPlanning
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [couplesDropdownOpen, setCouplesDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setCouplesDropdownOpen(false);
    setPricingDropdownOpen(false);
    setCurrencyDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD3]' : 'bg-[#FAF8F5] border-b border-[#EFE8DE]'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3.5 md:py-4 flex items-center justify-between gap-4">
        {/* Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#A85C3D] flex items-center justify-center text-white shadow-xs group-hover:bg-[#8F4C30] transition-colors">
            <span className="font-serif font-bold text-xs tracking-wider">RH</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-medium text-lg md:text-xl tracking-tight text-[#1F1B16] leading-none">
              Raoz Wedding Hub
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#8A7B6E] mt-0.5">
              One Calm Place
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-7">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-[13px] whitespace-nowrap transition-colors duration-200 font-medium ${activeTab === 'home' ? 'text-[#1F1B16] border-b border-[#A85C3D] pb-0.5' : 'text-[#6B6155] hover:text-[#1F1B16]'}`}
          >
            Home
          </button>

          {/* Couples Dropdown */}
          <div className="relative" onMouseLeave={() => setCouplesDropdownOpen(false)}>
            <button
              onClick={() => setCouplesDropdownOpen(!couplesDropdownOpen)}
              onMouseEnter={() => setCouplesDropdownOpen(true)}
              className={`inline-flex items-center gap-1 text-[13px] leading-none whitespace-nowrap transition-colors duration-200 font-medium ${activeTab.startsWith('couples') ? 'text-[#1F1B16] border-b border-[#A85C3D] pb-0.5' : 'text-[#6B6155] hover:text-[#1F1B16]'}`}
            >
              Couples
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${couplesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {couplesDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#E8DFD3] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseEnter={() => setCouplesDropdownOpen(true)}
              >
                <button
                  onClick={() => handleNavClick('couples-destination')}
                  className="w-full text-left p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FAF2ED] text-[#A85C3D] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#A85C3D] group-hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-xs text-[#1F1B16]">Raoz Afar · Destination</span>
                    <span className="block text-[11px] text-[#7A6E62] mt-0.5 leading-snug">Multi-day chapters, flight logistics, villa buyouts</span>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('couples-local')}
                  className="w-full text-left p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors flex items-start gap-3 group mt-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F0F4EF] text-[#4A5847] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#4A5847] group-hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-xs text-[#1F1B16]">Raoz Here · Close to Home</span>
                    <span className="block text-[11px] text-[#7A6E62] mt-0.5 leading-snug">One day, one place, calm run sheets & guests</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('for-guests')}
            className={`text-[13px] whitespace-nowrap transition-colors duration-200 font-medium ${activeTab === 'for-guests' ? 'text-[#1F1B16] border-b border-[#A85C3D] pb-0.5' : 'text-[#6B6155] hover:text-[#1F1B16]'}`}
          >
            Guests
          </button>

          <button
            onClick={() => handleNavClick('for-planners')}
            className={`text-[13px] whitespace-nowrap transition-colors duration-200 font-medium ${activeTab === 'for-planners' ? 'text-[#1F1B16] border-b border-[#A85C3D] pb-0.5' : 'text-[#6B6155] hover:text-[#1F1B16]'}`}
          >
            Planners
          </button>

          <button
            onClick={() => handleNavClick('guides')}
            className={`text-[13px] whitespace-nowrap transition-colors duration-200 font-medium ${activeTab === 'guides' ? 'text-[#1F1B16] border-b border-[#A85C3D] pb-0.5' : 'text-[#6B6155] hover:text-[#1F1B16]'}`}
          >
            Guides
          </button>

          {/* Pricing Dropdown */}
          <div className="relative" onMouseLeave={() => setPricingDropdownOpen(false)}>
            <button
              onClick={() => setPricingDropdownOpen(!pricingDropdownOpen)}
              onMouseEnter={() => setPricingDropdownOpen(true)}
              className={`inline-flex items-center gap-1 text-[13px] leading-none whitespace-nowrap transition-colors duration-200 font-medium ${activeTab.startsWith('pricing') ? 'text-[#1F1B16] border-b border-[#A85C3D] pb-0.5' : 'text-[#6B6155] hover:text-[#1F1B16]'}`}
            >
              Pricing
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${pricingDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {pricingDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#E8DFD3] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseEnter={() => setPricingDropdownOpen(true)}
              >
                <button
                  onClick={() => handleNavClick('pricing')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="block font-medium text-xs text-[#1F1B16]">Couples Pricing</span>
                  <span className="block text-[11px] text-[#7A6E62] mt-0.5">One-time transparent fee, no subscriptions</span>
                </button>
                <button
                  onClick={() => handleNavClick('pricing-planners')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors mt-0.5"
                >
                  <span className="block font-medium text-xs text-[#1F1B16]">Planners & Agencies</span>
                  <span className="block text-[11px] text-[#7A6E62] mt-0.5">Multi-wedding hubs & white label</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('faq')}
            className={`text-[13px] whitespace-nowrap transition-colors duration-200 font-medium ${activeTab === 'faq' ? 'text-[#1F1B16] border-b border-[#A85C3D] pb-0.5' : 'text-[#6B6155] hover:text-[#1F1B16]'}`}
          >
            FAQ
          </button>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Currency Toggle */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold tracking-wider text-[#6B6155] hover:text-[#1F1B16] bg-[#EFE8DE] px-2.5 py-1.5 rounded-lg transition-colors"
              title="Change Currency"
            >
              <span>{selectedCurrency}</span>
              <ChevronDown className="w-3 h-3 text-[#8A7B6E]" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-32 bg-white rounded-xl shadow-lg border border-[#E8DFD3] p-1.5 z-50">
                {raozWeddingHubConfig.CURRENCIES.map(curr => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      setSelectedCurrency(curr.code);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center justify-between ${selectedCurrency === curr.code ? 'bg-[#FAF2ED] text-[#A85C3D] font-bold' : 'text-[#4A4036] hover:bg-slate-50'}`}
                  >
                    <span>{curr.code}</span>
                    <span className="text-[#8A7B6E] text-[10px]">{curr.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Log In (Mock Portal Switcher) */}
          <button
            onClick={onOpenLogin}
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6B6155] hover:text-[#1F1B16] px-2.5 py-1.5 rounded-lg hover:bg-black/5 transition-colors"
          >
            <User className="w-3.5 h-3.5 text-[#8A7B6E]" />
            <span>Portal Log in</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenStartPlanning}
            className="inline-flex items-center rounded-full bg-[#4A5847] hover:bg-[#394437] active:bg-[#2D362B] px-4 py-2 text-[13px] font-medium text-[#FAF8F5] transition-all shadow-xs hover:shadow-sm"
          >
            Start planning
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1F1B16] hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8DFD3] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left py-2 text-sm font-medium text-[#1F1B16]"
            >
              Home
            </button>
            <div className="pt-2 pb-1 border-t border-[#E8DFD3]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A7B6E] block mb-2">Couples</span>
              <button
                onClick={() => handleNavClick('couples-destination')}
                className="w-full text-left py-1.5 text-xs text-[#4A4036] flex items-center justify-between"
              >
                <span>Raoz Afar (Destination Multi-Day)</span>
                <span className="text-[#A85C3D] font-mono text-[10px]">3–5 Days</span>
              </button>
              <button
                onClick={() => handleNavClick('couples-local')}
                className="w-full text-left py-1.5 text-xs text-[#4A4036] flex items-center justify-between"
              >
                <span>Raoz Here (Close to Home)</span>
                <span className="text-[#4A5847] font-mono text-[10px]">Single-Day</span>
              </button>
            </div>
            <button
              onClick={() => handleNavClick('for-guests')}
              className="w-full text-left py-2 text-sm font-medium text-[#1F1B16]"
            >
              For Guests (Live Hub)
            </button>
            <button
              onClick={() => handleNavClick('for-planners')}
              className="w-full text-left py-2 text-sm font-medium text-[#1F1B16]"
            >
              For Planners & Agencies
            </button>
            <button
              onClick={() => handleNavClick('guides')}
              className="w-full text-left py-2 text-sm font-medium text-[#1F1B16]"
            >
              Destination Guides
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="w-full text-left py-2 text-sm font-medium text-[#1F1B16]"
            >
              Pricing & Plans
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="w-full text-left py-2 text-sm font-medium text-[#1F1B16]"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left py-2 text-sm font-medium text-[#1F1B16]"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-4 border-t border-[#E8DFD3] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-[#1F1B16] border border-[#D5C9B8] rounded-xl hover:bg-white"
            >
              Portal Log in (Couples, Guests & Planners)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStartPlanning();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-[#4A5847] rounded-xl hover:bg-[#394437]"
            >
              Start planning now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default RaozNavbar;
