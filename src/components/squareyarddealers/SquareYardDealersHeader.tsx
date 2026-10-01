import React, { useState } from 'react';
import {
  Building2,
  Menu as MenuIcon,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Heart,
  PlusCircle,
  MapPin,
  Search,
  User,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_DISPLAY,
  BRAND_TAGLINE,
  PHONE_NUMBER,
  POPULAR_CITIES,
  GLOBAL_SEVEN_CATEGORIES,
  CityInfo
} from '../../data/squareYardDealersData';
import { SquareYardDealersCategorySwitcher } from './SquareYardDealersCategorySwitcher';

interface HeaderProps {
  currentTab: string;
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onNavigate: (tab: string) => void;
  onOpenPostProperty: () => void;
  onOpenLogin: () => void;
  favoriteCount: number;
}

export const SquareYardDealersHeader: React.FC<HeaderProps> = ({
  currentTab,
  selectedCity,
  onSelectCity,
  onNavigate,
  onOpenPostProperty,
  onOpenLogin,
  favoriteCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    setCityDropdownOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Global Multi-Industry 7 Categories Top Bar */}
      <SquareYardDealersCategorySwitcher variant="topbar" />

      {/* 2. Main Sticky Proptech Header (Inspired by Reference Design) */}
      <header className="sticky top-0 z-40 bg-[#0f172a] text-white border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* LEFT: Brand Wordmark / Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left cursor-pointer group"
            >
              {/* Distinctive Logo Emblem */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-400/20 group-hover:scale-105 transition-transform border border-amber-300">
                <Building2 className="w-6 h-6 text-slate-950 stroke-[2.5]" />
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="font-black text-lg sm:text-xl tracking-tight text-white uppercase">
                    SQUARE YARD
                  </span>
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-amber-400 uppercase">
                    DEALERS
                  </span>
                </div>
                <span className="text-[9px] tracking-wider text-slate-400 font-medium uppercase block -mt-0.5">
                  Property Discovery & Advisory
                </span>
              </div>
            </button>

            {/* City Selector Pill */}
            <div className="relative hidden md:block ml-2">
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/90 hover:bg-slate-700/90 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{selectedCity}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {cityDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-[#0b1329] text-white rounded-2xl shadow-2xl border border-slate-700 py-3 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-4 py-1 border-b border-slate-800 text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center justify-between">
                    <span>Select Preferred City</span>
                    <span className="text-amber-400">Metro Hubs</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto pt-1">
                    {POPULAR_CITIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCity(c.name);
                          setCityDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer ${
                          selectedCity === c.name ? 'text-amber-400 font-bold bg-amber-400/10' : 'text-slate-300'
                        }`}
                      >
                        <span>{c.name}</span>
                        <span className="text-[10px] text-slate-500">{c.activePropertiesCount.toLocaleString()} listings</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CENTER: Primary Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
            <button
              onClick={() => handleNavClick('buy')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'buy' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Buy
            </button>

            <button
              onClick={() => handleNavClick('rent')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'rent' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Rent
            </button>

            <button
              onClick={() => handleNavClick('projects')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'projects' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => handleNavClick('sell-property')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'sell-property' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Sell / Rent Property
            </button>

            <button
              onClick={() => handleNavClick('agents')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'agents' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Property Dealers
            </button>

            <button
              onClick={() => handleNavClick('property-valuation')}
              className={`hover:text-amber-400 transition-colors py-2 cursor-pointer ${
                currentTab === 'property-valuation' ? 'text-amber-400 border-b-2 border-amber-400' : ''
              }`}
            >
              Property Valuation
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`hover:text-amber-400 transition-colors py-2 flex items-center gap-1 cursor-pointer ${
                  currentTab === 'services' || currentTab === 'tools' || currentTab === 'calculator' ? 'text-amber-400 border-b-2 border-amber-400' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-64 bg-[#0b1329] rounded-2xl shadow-2xl border border-slate-700 py-2 text-left z-50 animate-in fade-in slide-in-from-top-1"
                >
                  <div className="px-3.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    Proptech Solutions
                  </div>
                  <button
                    onClick={() => handleNavClick('tools')}
                    className="w-full px-3.5 py-2 text-xs text-left hover:bg-white/10 flex items-center justify-between text-slate-200 hover:text-white"
                  >
                    <span>Real Estate Tools</span>
                    <span className="text-[9px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">New</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('calculator')}
                    className="w-full px-3.5 py-2 text-xs text-left hover:bg-white/10 flex items-center justify-between text-slate-200 hover:text-white"
                  >
                    <span>Home Loan EMI Calculator</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('home-loans')}
                    className="w-full px-3.5 py-2 text-xs text-left hover:bg-white/10 flex items-center justify-between text-slate-200 hover:text-white"
                  >
                    <span>Home Loan Assistance</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('property-valuation')}
                    className="w-full px-3.5 py-2 text-xs text-left hover:bg-white/10 flex items-center justify-between text-slate-200 hover:text-white"
                  >
                    <span>Property Valuation</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full px-3.5 py-2 text-xs text-left hover:bg-white/10 flex items-center justify-between text-slate-200 hover:text-white"
                  >
                    <span>All Real Estate Services</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('blog')}
                    className="w-full px-3.5 py-2 text-xs text-left hover:bg-white/10 flex items-center justify-between text-slate-200 hover:text-white"
                  >
                    <span>Real Estate Insights &amp; Blog</span>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* RIGHT / ACTION CTAs */}
          <div className="flex items-center gap-3">
            {/* Shortlist / Favorites count */}
            <button
              onClick={() => handleNavClick('shortlist')}
              className="relative p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Saved Properties"
            >
              <Heart className={`w-4 h-4 ${favoriteCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {favoriteCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Login / Register */}
            <button
              onClick={onOpenLogin}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Login</span>
            </button>

            {/* Post Property secondary CTA button */}
            <button
              onClick={onOpenPostProperty}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-amber-400/80 text-amber-300 hover:bg-amber-400/10 text-xs font-bold transition-colors cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Post Property</span>
            </button>

            {/* Primary CTA: "List Your Property" */}
            <button
              onClick={onOpenPostProperty}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/25 transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <span>List Your Property</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0b1329] border-t border-slate-800 px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2">
            {/* City Selector in mobile */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
              <span className="text-slate-400">Selected City:</span>
              <select
                value={selectedCity}
                onChange={(e) => onSelectCity(e.target.value)}
                className="bg-transparent font-bold text-amber-400 focus:outline-hidden"
              >
                {POPULAR_CITIES.map((c) => (
                  <option key={c.id} value={c.name} className="bg-slate-900 text-white">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => handleNavClick('home')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('buy')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                Buy Properties
              </button>
              <button
                onClick={() => handleNavClick('rent')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                Rent Properties
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                New Projects
              </button>
              <button
                onClick={() => handleNavClick('sell-property')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                Sell Property
              </button>
              <button
                onClick={() => handleNavClick('agents')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                Property Dealers
              </button>
              <button
                onClick={() => handleNavClick('property-valuation')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                Valuation
              </button>
              <button
                onClick={() => handleNavClick('calculator')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                EMI Calculator
              </button>
              <button
                onClick={() => handleNavClick('tools')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                Real Estate Tools
              </button>
              <button
                onClick={() => handleNavClick('blog')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                Insights &amp; Blog
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="p-3 text-left rounded-xl bg-white/5 hover:bg-white/10 text-white"
              >
                Contact
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPostProperty();
                }}
                className="w-full py-3 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider text-center"
              >
                List Your Property Free
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
