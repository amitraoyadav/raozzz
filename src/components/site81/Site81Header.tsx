import React, { useState } from 'react';
import {
  Search,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  Globe,
  SlidersHorizontal,
  ArrowRight,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { site81Config } from '../../config/site81Config';

interface Site81HeaderProps {
  currentView: string;
  onNavigate: (view: string, propertySlugOrId?: string) => void;
  currency: string;
  onSelectCurrency: (currency: string) => void;
  unit: 'sqft' | 'sqm';
  onToggleUnit: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenSellModal: () => void;
  onOpenAccountModal: (tab?: 'login' | 'saved' | 'inquiries') => void;
  onOpenSearchModal: () => void;
}

export const Site81Header: React.FC<Site81HeaderProps> = ({
  currentView,
  onNavigate,
  currency,
  onSelectCurrency,
  unit,
  onToggleUnit,
  favoritesCount,
  onOpenFavorites,
  onOpenSellModal,
  onOpenAccountModal,
  onOpenSearchModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [categoryModalCategory, setCategoryModalCategory] = useState<string | null>(null);

  const mainCategories = [
    { id: 'real-estate', name: 'Real Estate', isPrimary: true },
    { id: 'cars', name: 'Cars', count: '8,200+' },
    { id: 'watches', name: 'Watches', count: '14,000+' },
    { id: 'yachts', name: 'Yachts', count: '3,400+' },
    { id: 'jets', name: 'Jets', count: '1,150+' },
    { id: 'motorcycles', name: 'Motorcycles', count: '940+' },
    { id: 'helicopters', name: 'Helicopters', count: '320+' },
    { id: 'jewelry', name: 'Jewelry', count: '6,800+' },
    { id: 'collectibles', name: 'Collectibles', count: '4,500+' },
    { id: 'rentals', name: 'Rentals', count: '2,900+' },
    { id: 'journal', name: 'Journal', isEditorial: true },
    { id: 'app', name: 'App', isSpecial: true }
  ];

  const handleCategoryClick = (catId: string) => {
    setMobileMenuOpen(false);
    if (catId === 'real-estate') {
      onNavigate('marketplace');
    } else if (catId === 'journal') {
      onNavigate('journal');
    } else if (catId === 'app') {
      alert('Valtierra iOS & Android Mobile Concierge App is available on the Apple App Store & Google Play.');
    } else {
      onNavigate('categories');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200 transition-all shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      {/* 1. Global Announcement Ticker */}
      <div className="bg-neutral-900 text-neutral-300 text-[11px] py-1.5 px-4 tracking-widest uppercase flex items-center justify-between font-mono">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>Global Curation · Super-Prime Real Estate &amp; Luxury Assets in 120+ Countries</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <button
            onClick={onOpenSellModal}
            className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Sell or Syndicate with Valtierra</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <a
            href={`tel:${site81Config.PHONE}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>{site81Config.PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-18 flex items-center justify-between gap-4">
          {/* Left Controls: Currency & Measurement Unit */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-medium text-neutral-600">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 py-1 px-2.5 rounded border border-neutral-200 hover:border-neutral-400 transition-colors cursor-pointer text-neutral-800"
                aria-label="Select currency"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <span className="font-semibold">{currency}</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute left-0 mt-1.5 w-40 bg-white border border-neutral-200 rounded shadow-lg py-1 z-50">
                  {site81Config.CURRENCIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        onSelectCurrency(c.code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-neutral-50 cursor-pointer ${
                        currency === c.code ? 'font-bold text-neutral-900 bg-neutral-100' : 'text-neutral-600'
                      }`}
                    >
                      <span>{c.label}</span>
                      <span className="text-neutral-400 font-mono">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Units Toggle */}
            <button
              onClick={onToggleUnit}
              className="py-1 px-2 rounded border border-neutral-200 hover:border-neutral-400 transition-colors cursor-pointer text-neutral-700 text-[11px] font-mono"
              title="Toggle Square Feet / Square Meters"
            >
              {unit === 'sqft' ? 'SQ FT' : 'SQ M'}
            </button>
          </div>

          {/* Center Brand Identity */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <button
              onClick={() => onNavigate('home')}
              className="group cursor-pointer flex flex-col items-center"
            >
              <span className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-neutral-950 uppercase font-light transition-opacity group-hover:opacity-85">
                {site81Config.BRAND_NAME}
              </span>
              <span className="text-[9px] tracking-[0.35em] text-neutral-500 uppercase -mt-0.5">
                Global Luxury Marketplace
              </span>
            </button>
          </div>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearchModal}
              className="p-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Search properties"
            >
              <Search className="w-5 h-5" />
              <span className="hidden xl:inline text-xs text-neutral-500 font-medium">Search</span>
            </button>

            {/* Favorites / Saved Homes */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
              aria-label="Saved properties"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Account / Login */}
            <button
              onClick={() => onOpenAccountModal('login')}
              className="p-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="User account"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline text-xs font-medium">Sign In</span>
            </button>

            {/* List Property CTA */}
            <button
              onClick={onOpenSellModal}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase border border-neutral-900 bg-neutral-900 text-white hover:bg-amber-600 hover:border-amber-600 transition-colors cursor-pointer"
            >
              List Property
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-800 hover:bg-neutral-100 rounded cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Secondary Category Bar (JamesEdition Style Subnav) */}
      <nav className="border-t border-neutral-150 bg-neutral-50/60 overflow-x-auto scrollbar-none hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-1 text-[13px] tracking-wide text-neutral-700 font-normal py-2.5">
            {mainCategories.map((cat) => {
              const isActive =
                (cat.id === 'real-estate' && (currentView === 'home' || currentView === 'marketplace' || currentView === 'detail')) ||
                (cat.id === 'journal' && currentView === 'journal') ||
                (cat.id === 'cars' && currentView === 'categories');

              return (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`px-3 py-1 rounded transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'font-semibold text-neutral-950 border-b-2 border-neutral-950 pb-0.5'
                        : 'hover:text-black hover:bg-neutral-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* 4. Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 shadow-xl py-4 px-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500">Currency:</span>
              <select
                value={currency}
                onChange={(e) => onSelectCurrency(e.target.value)}
                className="text-xs font-bold border border-neutral-200 rounded px-2 py-1 bg-white"
              >
                {site81Config.CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={onToggleUnit}
              className="text-xs font-mono font-bold px-2 py-1 border border-neutral-200 rounded"
            >
              Unit: {unit.toUpperCase()}
            </button>
          </div>

          <div className="py-3 grid grid-cols-2 gap-2 text-sm">
            {mainCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="text-left py-2 px-3 rounded hover:bg-neutral-50 text-neutral-800 font-medium transition-colors"
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSellModal();
              }}
              className="w-full py-2.5 bg-neutral-900 text-white text-xs font-semibold tracking-wider uppercase text-center"
            >
              List Property
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccountModal('login');
              }}
              className="w-full py-2.5 border border-neutral-300 text-neutral-800 text-xs font-semibold tracking-wider uppercase text-center"
            >
              Account / Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
