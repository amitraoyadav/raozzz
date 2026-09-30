import React, { useState } from 'react';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  MapPin,
  Sparkles,
  Phone,
  Menu,
  X,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { JewelboxProduct } from '../../data/jewelboxData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: 'home' | 'shop' | 'collections') => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenStoreLocator: () => void;
  onOpenEducation: () => void;
  onSelectProduct: (product: JewelboxProduct) => void;
  products: JewelboxProduct[];
}

export const JewelboxHeader: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenStoreLocator,
  onOpenEducation,
  onSelectProduct,
  products
}) => {
  const { setActiveView } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  const searchResults = searchQuery.trim().length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.diamondShape.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.collection.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleNavClick = (tab: 'home' | 'shop' | 'collections', category: string = 'all') => {
    setActiveTab(tab);
    setSelectedCategory(category);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200 font-['Inter'] shadow-xs">
      {/* 1. Announcement Bar */}
      <div className="bg-[#0F2C24] text-white text-[11px] sm:text-xs py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1 bg-[#D4AF37] text-[#0F2C24] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
              <Zap className="w-3 h-3 fill-current" /> Shark Tank S3
            </span>
            <span className="truncate">
              India's 1st Lab-Grown Diamond Brand with offers from all 5 Sharks! Code: <strong>SHARK10</strong>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-stone-300 text-xs shrink-0">
            <button
              onClick={onOpenEducation}
              className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Why Lab-Grown Diamonds?</span>
            </button>
            <span>|</span>
            <button
              onClick={onOpenStoreLocator}
              className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Store Locator</span>
            </button>
            <span>|</span>
            <a
              href="tel:+919820045678"
              className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>1800-JEWELBOX</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Brand & Actions Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Brand Logo */}
        <div className="flex flex-col items-center sm:items-start cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="flex items-center gap-1.5">
            <span className="font-['Playfair_Display'] text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-[#0F2C24]">
              JEWELBOX
            </span>
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          </div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#B48425] font-semibold">
            Fine Lab-Grown Diamonds
          </span>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:block flex-1 max-w-md mx-6 relative">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              placeholder="Search solitaire rings, tennis bracelets, mangalsutras..."
              className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#0F2C24]/30 focus:border-[#0F2C24] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs cursor-pointer"
              >
                ×
              </button>
            )}
          </div>

          {/* Search Dropdown */}
          {searchOpen && searchQuery.trim().length > 1 && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setSearchOpen(false)}
              />
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-stone-200 z-40 overflow-hidden max-h-80 overflow-y-auto">
                <div className="p-2 border-b border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span>Results for "{searchQuery}"</span>
                  <span>{searchResults.length} items</span>
                </div>
                {searchResults.length > 0 ? (
                  searchResults.map(p => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onSelectProduct(p);
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="p-2.5 hover:bg-stone-50 flex items-center gap-3 cursor-pointer border-b border-stone-50 last:border-0 transition-colors"
                    >
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="w-10 h-10 object-cover rounded-lg border border-stone-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-stone-900 truncate">
                          {p.name}
                        </div>
                        <div className="text-[10px] text-stone-500 flex items-center gap-2">
                          <span>{p.diamondCarat} ct {p.diamondShape}</span>
                          <span>•</span>
                          <span className="text-emerald-700 font-bold">₹{p.price.toLocaleString('en-IN')}</span>
                          <span className="line-through text-stone-400 text-[9px]">₹{p.minedPriceEquivalent.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-xs text-stone-500">
                    No products found matching "{searchQuery}"
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Info Badge */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>IGI Certified · 100% Real</span>
          </div>

          {/* User / Account Button */}
          <button
            onClick={() => setAccountModalOpen(true)}
            className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-full cursor-pointer transition-colors relative"
            title="My Account"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="p-2 text-stone-700 hover:text-rose-600 hover:bg-rose-50 rounded-full cursor-pointer transition-colors relative"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-3 py-2 bg-[#0F2C24] hover:bg-[#163e33] text-white rounded-full cursor-pointer transition-colors shadow-xs"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold">{cartCount}</span>
          </button>
        </div>
      </div>

      {/* 3. Main Navigation Bar (Desktop) */}
      <nav className="hidden lg:block border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-1 sm:space-x-2 text-xs font-semibold uppercase tracking-wider text-stone-700">
          <button
            onClick={() => handleNavClick('home')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'home' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('shop', 'all')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'shop' && selectedCategory === 'all' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            All Jewellery
          </button>

          <button
            onClick={() => handleNavClick('shop', 'rings')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'shop' && selectedCategory === 'rings' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            Rings
          </button>

          <button
            onClick={() => handleNavClick('shop', 'bracelets')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'shop' && selectedCategory === 'bracelets' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            Bracelets
          </button>

          <button
            onClick={() => handleNavClick('shop', 'earrings')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'shop' && selectedCategory === 'earrings' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            Earrings
          </button>

          <button
            onClick={() => handleNavClick('shop', 'pendants')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'shop' && selectedCategory === 'pendants' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            Pendants
          </button>

          <button
            onClick={() => handleNavClick('shop', 'solitaires')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'shop' && selectedCategory === 'solitaires' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            <span className="flex items-center gap-1 text-[#B48425]">
              <Sparkles className="w-3 h-3" />
              Solitaires
            </span>
          </button>

          <button
            onClick={() => handleNavClick('shop', 'mangalsutra')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'shop' && selectedCategory === 'mangalsutra' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            Mangalsutra
          </button>

          <button
            onClick={() => handleNavClick('shop', 'mens')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'shop' && selectedCategory === 'mens' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            Men's
          </button>

          <button
            onClick={() => handleNavClick('collections')}
            className={`py-3 px-3 hover:text-[#0F2C24] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'collections' ? 'border-[#0F2C24] text-[#0F2C24] font-bold' : 'border-transparent'
            }`}
          >
            Collections
          </button>

          <button
            onClick={onOpenEducation}
            className="py-3 px-3 text-emerald-800 hover:text-emerald-950 font-bold transition-colors cursor-pointer border-b-2 border-transparent flex items-center gap-1"
          >
            <span>Lab-Grown Science</span>
          </button>

          <button
            onClick={onOpenStoreLocator}
            className="py-3 px-3 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer border-b-2 border-transparent flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            <span>Stores</span>
          </button>
        </div>
      </nav>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs lg:hidden">
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-2xl flex flex-col overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 bg-[#0F2C24] text-white flex items-center justify-between">
              <div>
                <span className="font-['Playfair_Display'] text-xl font-bold tracking-widest">
                  JEWELBOX
                </span>
                <p className="text-[10px] text-stone-300 tracking-wider">
                  CONSCIOUS LUXURY DIAMONDS
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-stone-300 hover:text-white cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-stone-200">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search lab-grown diamonds..."
                  className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                />
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex-1 p-4 space-y-1 text-sm font-medium text-stone-800">
              <button
                onClick={() => handleNavClick('home')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 cursor-pointer font-bold"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('shop', 'all')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 cursor-pointer"
              >
                All Jewellery
              </button>
              <button
                onClick={() => handleNavClick('shop', 'rings')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 cursor-pointer"
              >
                Rings & Solitaires
              </button>
              <button
                onClick={() => handleNavClick('shop', 'bracelets')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 cursor-pointer"
              >
                Tennis Bracelets & Bolos
              </button>
              <button
                onClick={() => handleNavClick('shop', 'earrings')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 cursor-pointer"
              >
                Earrings & Huggies
              </button>
              <button
                onClick={() => handleNavClick('shop', 'pendants')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 cursor-pointer"
              >
                Pendants & Chains
              </button>
              <button
                onClick={() => handleNavClick('shop', 'mangalsutra')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 cursor-pointer"
              >
                Modern Mangalsutra
              </button>
              <button
                onClick={() => handleNavClick('shop', 'mens')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 cursor-pointer"
              >
                Men's Diamond Collection
              </button>
              <button
                onClick={() => handleNavClick('collections')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 cursor-pointer font-bold text-amber-700"
              >
                Shark Tank Collections
              </button>

              <div className="pt-4 border-t border-stone-200 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEducation();
                  }}
                  className="w-full text-left py-2 px-3 rounded-lg bg-emerald-50 text-emerald-900 font-semibold flex items-center gap-2 cursor-pointer text-xs"
                >
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>Why Lab-Grown Diamonds?</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStoreLocator();
                  }}
                  className="w-full text-left py-2 px-3 rounded-lg bg-stone-50 text-stone-800 font-semibold flex items-center gap-2 cursor-pointer text-xs"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Stores in Mumbai, Bangalore, Delhi NCR</span>
                </button>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-semibold">
                <Phone className="w-3.5 h-3.5 text-[#0F2C24]" />
                <span>Customer Care: +91 98200 45678</span>
              </div>
              <p className="text-[11px] text-stone-500">
                100% BIS Hallmarked Gold · IGI Certified Diamonds
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Account / Login Modal */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setAccountModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-5">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#0F2C24] mx-auto flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-['Playfair_Display']">
                Jewelbox Privilege Club
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Enter your mobile number to view saved designs, track orders & access Shark Tank VIP pricing.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                  Mobile Number / Email
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-stone-300 bg-stone-100 text-stone-500 text-xs">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-r-lg border border-stone-300 text-xs focus:ring-[#0F2C24] focus:border-[#0F2C24]"
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  alert('Demo Login: Signed in as Jewelbox Privilege Member!');
                  setAccountModalOpen(false);
                }}
                className="w-full py-2.5 bg-[#0F2C24] hover:bg-[#163e33] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
              >
                Send OTP / Continue
              </button>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-center text-[11px] text-stone-500">
              New to Jewelbox? You will automatically receive a 10% welcome coupon on login!
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
