import React, { useState } from 'react';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  MapPin,
  Calendar,
  Phone,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  wishlistCount: number;
  onOpenAppointment: () => void;
  onOpenStoreLocator: () => void;
  onOpenGoldRate: () => void;
}

export const TanishqHeader: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  cartCount,
  onOpenCart,
  wishlistCount,
  onOpenAppointment,
  onOpenStoreLocator,
  onOpenGoldRate
}) => {
  const { setActiveView } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'all-jewellery', label: 'All Jewellery' },
    { id: 'gold', label: 'Gold' },
    { id: 'diamond', label: 'Diamond' },
    { id: 'collections', label: 'Collections' },
    { id: 'wedding', label: 'Rivaah Wedding' },
    { id: 'regional', label: 'Regional Brides' },
    { id: 'gifting', label: 'Gifting' },
    { id: 'under-50k', label: 'Under ₹50K' },
    { id: 'services', label: 'Services & Guides' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200 shadow-xs font-['Inter']">
      {/* 1. Global RaoSitez Demo Navigation Bar */}
      <div className="bg-[#111111] text-white text-[11px] py-1.5 px-4 flex flex-wrap items-center justify-between gap-2 border-b border-stone-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('demo-websites', 'jewellery')}
            className="hover:underline flex items-center gap-1 text-amber-400 font-semibold cursor-pointer"
          >
            ← Back to RaoSitez Demo Directory
          </button>
          <span className="text-stone-500">|</span>
          <span className="text-stone-300 font-mono">Demo Site #40 · Jewellery</span>
        </div>
        <div className="flex items-center gap-3 text-stone-300">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded text-[10px] font-bold">
            A TATA Enterprise
          </span>
          <button
            onClick={() => setActiveView('home')}
            className="hover:underline text-stone-400 hover:text-white cursor-pointer"
          >
            RaoSitez Home
          </button>
        </div>
      </div>

      {/* 2. Top Luxury Announcement & Quick Utilities Bar */}
      <div className="bg-[#832729] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] tracking-wide">
            <span className="font-semibold flex items-center gap-1 text-amber-200">
              <Sparkles className="w-3 h-3" /> Akshaya Tritiya: Up to 25% Off Making Charges
            </span>
            <span className="hidden md:inline text-rose-200">|</span>
            <button
              onClick={onOpenGoldRate}
              className="hidden md:flex items-center gap-1 hover:text-amber-200 cursor-pointer transition-colors"
            >
              <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
              <span>Today's Gold Rate: <strong>22K ₹6,780/g</strong></span>
            </button>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenStoreLocator}
              className="flex items-center gap-1 hover:text-amber-200 cursor-pointer"
            >
              <MapPin className="w-3 h-3 text-amber-300" />
              <span>450+ Stores</span>
            </button>
            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-1 hover:text-amber-200 cursor-pointer font-medium"
            >
              <Calendar className="w-3 h-3 text-amber-300" />
              <span>Book Appointment</span>
            </button>
            <a
              href="tel:18002660123"
              className="hidden lg:flex items-center gap-1 hover:text-amber-200"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>1800-266-0123</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Main Brand & Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-stone-700 hover:text-[#832729]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Tanishq Crest & Logo */}
        <div
          onClick={() => setActiveTab('home')}
          className="cursor-pointer flex items-center gap-2 group select-none shrink-0"
        >
          <div className="w-9 h-9 rounded-full bg-[#832729] text-amber-300 flex items-center justify-center font-['Playfair_Display'] font-black text-xl shadow-xs group-hover:bg-[#6b1e20] transition-colors">
            T
          </div>
          <div>
            <div className="font-['Playfair_Display'] text-2xl font-black tracking-widest text-[#832729] leading-none">
              TANISHQ
            </div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-semibold mt-0.5">
              A TATA PRODUCT
            </div>
          </div>
        </div>

        {/* Smart Search Input */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search for Gold Jewellery, Diamond Solitaires, Rivaah, Mia..."
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#832729]/30 focus:border-[#832729] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* User Utilities: Wishlist, Account, Cart */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            onClick={() => setActiveTab('all-jewellery')}
            className="hidden sm:flex flex-col items-center text-stone-600 hover:text-[#832729] transition-colors cursor-pointer text-[10px]"
          >
            <div className="relative">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#832729] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="mt-0.5">Wishlist</span>
          </button>

          <button
            onClick={onOpenAppointment}
            className="hidden md:flex flex-col items-center text-stone-600 hover:text-[#832729] transition-colors cursor-pointer text-[10px]"
          >
            <User className="w-5 h-5" />
            <span className="mt-0.5">Consultant</span>
          </button>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#832729] hover:bg-[#6e1e20] text-white px-3.5 py-2 rounded-full text-xs font-semibold shadow-xs cursor-pointer transition-all"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-stone-950 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Bag</span>
          </button>
        </div>
      </div>

      {/* Mobile Search input bar */}
      <div className="p-2 border-t border-stone-100 md:hidden bg-stone-50">
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search gold, diamonds, collections..."
            className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs"
          />
        </div>
      </div>

      {/* 4. Desktop Navigation Categories Bar */}
      <nav className="hidden lg:block border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold">
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (item.id === 'all-jewellery') setSearchQuery('');
                }}
                className={`py-3 px-2 border-b-2 tracking-wide uppercase text-[11px] transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#832729] text-[#832729] font-bold'
                    : 'border-transparent text-stone-700 hover:text-[#832729] hover:border-stone-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 5. Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col p-4 overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="font-['Playfair_Display'] text-xl font-black text-[#832729]">
                TANISHQ
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-stone-500 hover:text-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-3 flex flex-col gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded-lg text-xs font-semibold ${
                    activeTab === item.id
                      ? 'bg-[#832729] text-white'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-stone-200 space-y-2 text-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGoldRate();
                }}
                className="w-full text-left py-2 px-3 bg-amber-50 text-amber-900 rounded-lg font-medium flex items-center justify-between"
              >
                <span>Live Gold Rate</span>
                <span className="font-bold">₹6,780/g</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full text-left py-2 px-3 bg-[#832729] text-white rounded-lg font-medium"
              >
                Book In-Store Appointment
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
