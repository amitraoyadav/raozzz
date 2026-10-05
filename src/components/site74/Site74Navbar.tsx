import React, { useState, useEffect } from 'react';
import {
  Phone, Calendar, ChevronDown, Menu, X, Sparkles, MapPin, Heart,
  Shield, Clock, ArrowRight, UserCheck, Compass
} from 'lucide-react';
import { site74Config } from '../../config/site74Config';
import { DESTINATIONS_DATA } from '../../data/site74Data';

interface Site74NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCallback: () => void;
  onOpenPlanning: () => void;
  onSelectDestination?: (destSlug: string) => void;
}

export const Site74Navbar: React.FC<Site74NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCallback,
  onOpenPlanning,
  onSelectDestination
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setDestinationsDropdownOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDestClick = (slug: string) => {
    if (onSelectDestination) {
      onSelectDestination(slug);
    }
    setActiveTab('destinations');
    setDestinationsDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar (Desktop) */}
      <div className="hidden lg:block bg-[#11100F] text-[#E8DFD3] text-[11px] font-mono border-b border-stone-800/80 px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-amber-400 font-bold tracking-widest uppercase text-[10px]">
              {site74Config.PLACEHOLDER_BRAND} · {site74Config.BRAND_NAME}
            </span>
            <span className="text-stone-400">|</span>
            <span className="text-stone-300">
              India’s Premier Luxury Palaces, Beachfronts &amp; Resort Wedding Collection
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${site74Config.PHONE}`}
              className="flex items-center gap-1.5 text-stone-200 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Concierge: {site74Config.PHONE_DISPLAY}</span>
            </a>
            <span className="text-stone-600">·</span>
            <button
              onClick={onOpenCallback}
              className="text-amber-300 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Request a Callback
            </button>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#11100F]/95 backdrop-blur-md shadow-xl py-3 border-b border-stone-800'
            : 'bg-[#141210] py-4 border-b border-stone-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo & Brand Wordmark */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E2C78A] via-[#C5A059] to-[#8C6D37] p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#141210] flex items-center justify-center text-amber-300 font-serif font-bold text-xs tracking-wider">
                G
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold tracking-[0.2em] text-lg sm:text-xl text-white uppercase group-hover:text-amber-300 transition-colors leading-none">
                {site74Config.WORDMARK}
              </span>
              <span className="font-mono text-[9px] tracking-[0.22em] text-stone-400 uppercase mt-1">
                Weddings &amp; Resorts
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-xs tracking-wider uppercase font-medium">
            <button
              onClick={() => handleNav('home')}
              className={`transition-colors py-1 ${
                activeTab === 'home'
                  ? 'text-amber-400 font-bold border-b border-amber-400'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Home
            </button>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseLeave={() => setDestinationsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('destinations')}
                onMouseEnter={() => setDestinationsDropdownOpen(true)}
                className={`flex items-center gap-1 transition-colors py-1 ${
                  activeTab === 'destinations'
                    ? 'text-amber-400 font-bold border-b border-amber-400'
                    : 'text-stone-300 hover:text-amber-300'
                }`}
              >
                <span>Destinations</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${destinationsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {destinationsDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-[#1A1816] rounded-2xl shadow-2xl border border-stone-700/80 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setDestinationsDropdownOpen(true)}
                >
                  <div className="text-[10px] font-mono text-amber-400 tracking-widest px-3 py-1.5 uppercase font-bold border-b border-stone-800">
                    Iconic Wedding Locations
                  </div>
                  <div className="py-1">
                    {DESTINATIONS_DATA.map(dest => (
                      <button
                        key={dest.id}
                        onClick={() => handleDestClick(dest.slug)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-stone-800/60 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <span className="font-serif text-sm font-medium text-white group-hover:text-amber-300 block normal-case tracking-normal">
                            {dest.name}
                          </span>
                          <span className="text-[10px] text-stone-400 font-sans normal-case block">
                            {dest.tagline.slice(0, 36)}...
                          </span>
                        </div>
                        <span className="font-mono text-[9px] text-amber-400 bg-amber-950/60 border border-amber-800/40 px-1.5 py-0.5 rounded">
                          {dest.venueCount} Venues
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-stone-800 px-2 pb-1">
                    <button
                      onClick={() => handleNav('destinations')}
                      className="w-full text-center py-2 bg-stone-800 hover:bg-amber-950/80 text-amber-300 text-[11px] font-mono rounded-lg transition-colors"
                    >
                      View All 18 Destinations →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('services')}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1 transition-colors py-1 ${
                  activeTab === 'services'
                    ? 'text-amber-400 font-bold border-b border-amber-400'
                    : 'text-stone-300 hover:text-amber-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-[#1A1816] rounded-2xl shadow-2xl border border-stone-700/80 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                >
                  <div className="text-[10px] font-mono text-amber-400 tracking-widest px-3 py-1.5 uppercase font-bold border-b border-stone-800">
                    Bespoke Wedding Services
                  </div>
                  <div className="py-1">
                    {[
                      { name: 'Wedding Planning & Concierge', desc: 'Turnkey Master Coordination' },
                      { name: 'Cuisine & Royal Banqueting', desc: 'Separate Veg & Jain Kitchens' },
                      { name: 'Designer Décor & Lighting', desc: '3D CAD Architectural Stages' },
                      { name: 'Bridal Suite & Spa Wellness', desc: 'Ayurvedic Pre-Wedding Rituals' },
                      { name: 'Guest Transfers & Logistics', desc: 'Dedicated Airport Fleets' },
                      { name: 'Royal Baraat & Entertainment', desc: 'Celebrity Artists & Cavalry' }
                    ].map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNav('services')}
                        className="w-full text-left p-2 rounded-xl hover:bg-stone-800/60 transition-colors"
                      >
                        <span className="font-serif text-sm font-medium text-white block normal-case tracking-normal">
                          {s.name}
                        </span>
                        <span className="text-[10px] text-stone-400 font-sans normal-case block">
                          {s.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('gallery')}
              className={`transition-colors py-1 ${
                activeTab === 'gallery'
                  ? 'text-amber-400 font-bold border-b border-amber-400'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Gallery
            </button>

            <button
              onClick={() => handleNav('offers')}
              className={`transition-colors py-1 ${
                activeTab === 'offers'
                  ? 'text-amber-400 font-bold border-b border-amber-400'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Special Offers
            </button>

            <button
              onClick={() => handleNav('honeymoon')}
              className={`transition-colors py-1 ${
                activeTab === 'honeymoon'
                  ? 'text-amber-400 font-bold border-b border-amber-400'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Honeymoons
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`transition-colors py-1 ${
                activeTab === 'contact'
                  ? 'text-amber-400 font-bold border-b border-amber-400'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCallback}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 hover:text-white hover:border-amber-400 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Callback</span>
            </button>

            <button
              onClick={onOpenPlanning}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4B26F] via-[#C5A059] to-[#A37E36] hover:from-[#E2C78A] hover:to-[#B59148] text-[#141210] text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-950/40 transition-all hover:scale-102 active:scale-98 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Planning</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#141210] border-t border-stone-800 px-6 py-6 space-y-5 animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
            <div className="space-y-2 text-sm uppercase tracking-wider font-medium">
              <button
                onClick={() => handleNav('home')}
                className="w-full text-left py-2 text-white hover:text-amber-400 border-b border-stone-800"
              >
                Home
              </button>

              <div className="py-2 border-b border-stone-800 space-y-2">
                <div className="flex items-center justify-between text-amber-400 font-mono text-xs">
                  <span>DESTINATIONS</span>
                  <button onClick={() => handleNav('destinations')} className="underline">View All</button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 pt-1">
                  {DESTINATIONS_DATA.map(d => (
                    <button
                      key={d.id}
                      onClick={() => handleDestClick(d.slug)}
                      className="text-left p-1.5 rounded-lg bg-stone-900/60 hover:text-amber-300"
                    >
                      {d.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('services')}
                className="w-full text-left py-2 text-white hover:text-amber-400 border-b border-stone-800"
              >
                Services
              </button>

              <button
                onClick={() => handleNav('gallery')}
                className="w-full text-left py-2 text-white hover:text-amber-400 border-b border-stone-800"
              >
                Inspiration Gallery
              </button>

              <button
                onClick={() => handleNav('offers')}
                className="w-full text-left py-2 text-white hover:text-amber-400 border-b border-stone-800"
              >
                Special Wedding Offers
              </button>

              <button
                onClick={() => handleNav('honeymoon')}
                className="w-full text-left py-2 text-white hover:text-amber-400 border-b border-stone-800"
              >
                Honeymoons
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="w-full text-left py-2 text-white hover:text-amber-400 border-b border-stone-800"
              >
                Contact &amp; Concierge
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback();
                }}
                className="w-full py-3 rounded-xl bg-stone-900 border border-stone-700 text-amber-300 text-xs font-mono uppercase tracking-wider text-center"
              >
                Request a Callback
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanning();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#D4B26F] via-[#C5A059] to-[#A37E36] text-[#141210] font-bold text-xs uppercase tracking-wider text-center"
              >
                Start Planning Your Wedding
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Site74Navbar;
