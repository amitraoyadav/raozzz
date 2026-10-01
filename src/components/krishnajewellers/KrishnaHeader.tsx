import React, { useState } from 'react';
import {
  Search,
  Phone,
  MapPin,
  Video,
  Heart,
  ShoppingBag,
  User,
  Menu as MenuIcon,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GOLD_RATE_TODAY } from '../../data/krishnaJewellersData';

interface KrishnaHeaderProps {
  wishlistCount: number;
  cartCount: number;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
  onOpenLogin: () => void;
  onOpenRates: () => void;
  onOpenVideoCall: () => void;
  onSelectCategory: (cat: string, subCat?: string) => void;
  activeNavTab: string;
}

export const KrishnaHeader: React.FC<KrishnaHeaderProps> = ({
  wishlistCount,
  cartCount,
  onOpenSearch,
  onOpenWishlist,
  onOpenCart,
  onOpenLogin,
  onOpenRates,
  onOpenVideoCall,
  onSelectCategory,
  activeNavTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavClick = (cat: string, subCat?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onSelectCategory(cat, subCat);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs font-['Cinzel',serif]">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#543E3A] text-white py-2 px-4 text-xs font-['Open_Sans',sans-serif]">
        <div className="max-w-[1840px] mx-auto flex items-center justify-between">
          {/* Left phone & call */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="tel:8499011111"
              className="inline-flex items-center gap-1.5 hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-semibold tracking-wide">8499011111</span>
            </a>
            <button
              onClick={() => handleNavClick('house')}
              className="hidden sm:inline-flex items-center gap-1 hover:text-amber-200 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Showrooms</span>
            </button>
            <button
              onClick={onOpenVideoCall}
              className="hidden md:inline-flex items-center gap-1 hover:text-amber-200 transition-colors cursor-pointer"
            >
              <Video className="w-3.5 h-3.5 text-amber-300" />
              <span>Video Call Shopping</span>
            </button>
          </div>

          {/* Center Established */}
          <div className="hidden lg:block text-center font-['Cinzel'] tracking-[0.2em] text-[11px] text-amber-100 font-bold uppercase">
            ESTABLISHED 1983 · HYDERABAD
          </div>

          {/* Right Gold & Silver Rates */}
          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenRates}
              className="hover:text-amber-200 transition-colors cursor-pointer flex items-center gap-1 underline underline-offset-2"
            >
              <span>Gold Rate: ₹{GOLD_RATE_TODAY.gold22kPerGram.toLocaleString()}/g</span>
            </button>
            <span className="text-white/40">|</span>
            <button
              onClick={onOpenRates}
              className="hover:text-amber-200 transition-colors cursor-pointer flex items-center gap-1 underline underline-offset-2"
            >
              <span>Silver: ₹{GOLD_RATE_TODAY.silverPerGram}/g</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN BRAND HEADER */}
      <div className="border-b border-[#543E3A]/10 bg-white">
        <div className="max-w-[1840px] mx-auto px-4 sm:px-8 py-3.5 sm:py-5 flex items-center justify-between">
          {/* Left: Mobile Toggle & Desktop Search */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-[#543E3A] hover:bg-stone-100 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 text-[#543E3A] hover:text-[#C99A5C] transition-colors p-1.5 cursor-pointer group"
              title="Search jewellery"
            >
              <Search className="w-5 h-5 group-hover:scale-105 transition-transform" />
              <span className="hidden sm:inline-block text-xs font-['Open_Sans'] uppercase tracking-wider font-semibold">
                Search
              </span>
            </button>
          </div>

          {/* Center: Krishna Jewellers Royal Emblem & Logo */}
          <div className="text-center cursor-pointer" onClick={() => handleNavClick('all')}>
            <div className="flex flex-col items-center justify-center">
              <span className="font-['Cinzel'] text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.18em] text-[#543E3A] uppercase">
                Krishna Jewellers
              </span>
              <span className="font-['Cinzel'] text-[9px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#876D68] uppercase -mt-0.5">
                Pearls & Gems · Jubilee Hills
              </span>
            </div>
          </div>

          {/* Right Actions: Account, Wishlist, Cart */}
          <div className="flex items-center justify-end gap-2 sm:gap-5 flex-1">
            {/* Account / Login */}
            <button
              onClick={onOpenLogin}
              className="hidden sm:flex items-center gap-1.5 text-[#543E3A] hover:text-[#C99A5C] transition-colors p-1 cursor-pointer"
              title="Sign in / Register"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline text-xs font-['Open_Sans'] font-semibold">
                Login
              </span>
            </button>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="relative p-1.5 text-[#543E3A] hover:text-[#C99A5C] transition-colors cursor-pointer"
              title="My Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#543E3A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-['Open_Sans'] font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag / Cart */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 text-[#543E3A] hover:text-[#C99A5C] transition-colors cursor-pointer flex items-center gap-2"
              title="View Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#543E3A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-['Open_Sans'] font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden xl:inline text-xs font-['Open_Sans'] font-semibold">
                Bag
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. DESKTOP NAVIGATION BAR WITH MEGA MENUS */}
      <nav className="hidden lg:block bg-white border-b border-[#543E3A]/10 text-[#543E3A]">
        <div className="max-w-[1840px] mx-auto px-6">
          <ul className="flex items-center justify-center gap-6 xl:gap-9 text-[13px] font-bold tracking-[0.14em] uppercase py-2.5">
            {/* 1. GOLD */}
            <li
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('gold')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('gold')}
                className={`flex items-center gap-1 transition-colors hover:text-[#C99A5C] cursor-pointer ${
                  activeNavTab === 'gold' ? 'text-[#C99A5C] border-b-2 border-[#543E3A]' : ''
                }`}
              >
                <span>GOLD</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'gold' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white border border-[#ECE5E3] shadow-xl p-6 rounded-b-xl z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="text-[12px] font-bold text-[#876D68] tracking-widest uppercase mb-3 pb-1 border-b border-stone-100">
                    22K Hallmarked Gold Categories
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 text-xs font-['Open_Sans'] font-semibold normal-case text-stone-700">
                    {[
                      { name: 'All Gold Jewellery', slug: 'gold' },
                      { name: 'Short Necklaces', slug: 'gold', sub: 'Short Necklaces' },
                      { name: 'Long Necklaces & Haram', slug: 'gold', sub: 'Long Necklace' },
                      { name: 'Gold Necklace Set', slug: 'gold', sub: 'Gold Necklace Set' },
                      { name: 'Chokers & Kanti', slug: 'gold', sub: 'Choker' },
                      { name: 'Vaddanam & Waistbelts', slug: 'gold', sub: 'Vaddanam' },
                      { name: 'Jhumkas & Earrings', slug: 'gold', sub: 'Earrings' },
                      { name: 'Kada & Bangles', slug: 'gold', sub: 'Bangles' },
                      { name: 'Temple & Nakshi Rings', slug: 'gold', sub: 'Rings' },
                      { name: 'Daily Wear Chains', slug: 'gold', sub: 'Chains' },
                      { name: 'Gold Idols & Coins', slug: 'coins' },
                      { name: 'Mangalsutra Designs', slug: 'gold', sub: 'Mangalsutra' }
                    ].map(item => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.slug, item.sub)}
                        className="text-left px-2.5 py-1.5 rounded-md hover:bg-[#ECE5E3]/50 hover:text-[#543E3A] transition-colors cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* 2. DIAMOND */}
            <li
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('diamond')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('diamond')}
                className={`flex items-center gap-1 transition-colors hover:text-[#C99A5C] cursor-pointer ${
                  activeNavTab === 'diamond' ? 'text-[#C99A5C] border-b-2 border-[#543E3A]' : ''
                }`}
              >
                <span>DIAMOND</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'diamond' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white border border-[#ECE5E3] shadow-xl p-6 rounded-b-xl z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="text-[12px] font-bold text-[#876D68] tracking-widest uppercase mb-3 pb-1 border-b border-stone-100">
                    Certified Diamond Collections
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 text-xs font-['Open_Sans'] font-semibold normal-case text-stone-700">
                    {[
                      { name: 'All Diamond Jewellery', slug: 'diamond' },
                      { name: 'Diamond Short Necklaces', slug: 'diamond', sub: 'Short Necklaces' },
                      { name: 'Grand Diamond Harams', slug: 'diamond', sub: 'Long Necklace' },
                      { name: 'Bridal Diamond Chokers', slug: 'diamond', sub: 'Chokers' },
                      { name: 'Diamond Emerald Earrings', slug: 'diamond', sub: 'Earrings' },
                      { name: 'Solitaire & Cocktail Rings', slug: 'diamond', sub: 'Rings' },
                      { name: 'Diamond Bangles & Bracelets', slug: 'diamond', sub: 'Bangles' },
                      { name: 'Diamond Waistbelts (Vaddanam)', slug: 'diamond', sub: 'Vaddanam' },
                      { name: 'Diamond Mangalsutras', slug: 'diamond', sub: 'Mangalsutra' },
                      { name: 'Diamond Chains & Pendants', slug: 'diamond', sub: 'Pendants' },
                      { name: 'Diamond Bajubands', slug: 'diamond', sub: 'Bajuband' },
                      { name: 'Diamond Necklace Sets', slug: 'diamond', sub: 'Necklace Set' }
                    ].map(item => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.slug, item.sub)}
                        className="text-left px-2.5 py-1.5 rounded-md hover:bg-[#ECE5E3]/50 hover:text-[#543E3A] transition-colors cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* 3. POLKI */}
            <li
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('polki')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('polki')}
                className={`flex items-center gap-1 transition-colors hover:text-[#C99A5C] cursor-pointer ${
                  activeNavTab === 'polki' ? 'text-[#C99A5C] border-b-2 border-[#543E3A]' : ''
                }`}
              >
                <span>POLKI</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'polki' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-[#ECE5E3] shadow-xl p-6 rounded-b-xl z-50">
                  <div className="text-[12px] font-bold text-[#876D68] tracking-widest uppercase mb-3 pb-1 border-b border-stone-100">
                    Uncut Syndicate Polki Heirlooms
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 text-xs font-['Open_Sans'] font-semibold normal-case text-stone-700">
                    {[
                      { name: 'All Polki Jewellery', slug: 'polki' },
                      { name: 'Polki Short Necklaces', slug: 'polki', sub: 'Short Necklaces' },
                      { name: 'Polki Necklace Sets', slug: 'polki', sub: 'Polki Necklace Set' },
                      { name: 'Polki Chokers', slug: 'polki', sub: 'Choker' },
                      { name: 'Polki Earrings & Chandbalis', slug: 'polki', sub: 'Earrings' },
                      { name: 'Polki Long Harams', slug: 'polki', sub: 'Long Necklace' },
                      { name: 'Polki Bangles & Kadas', slug: 'polki', sub: 'Bangles' },
                      { name: 'Polki Rings & Pendants', slug: 'polki', sub: 'Rings' }
                    ].map(item => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.slug, item.sub)}
                        className="text-left px-2.5 py-1.5 rounded-md hover:bg-[#ECE5E3]/50 hover:text-[#543E3A] transition-colors cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* 4. KUNDAN */}
            <li
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('kundan')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('kundan')}
                className={`flex items-center gap-1 transition-colors hover:text-[#C99A5C] cursor-pointer ${
                  activeNavTab === 'kundan' ? 'text-[#C99A5C] border-b-2 border-[#543E3A]' : ''
                }`}
              >
                <span>KUNDAN</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'kundan' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-[#ECE5E3] shadow-xl p-6 rounded-b-xl z-50">
                  <div className="text-[12px] font-bold text-[#876D68] tracking-widest uppercase mb-3 pb-1 border-b border-stone-100">
                    Regal Royal Kundan Jewellery
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 text-xs font-['Open_Sans'] font-semibold normal-case text-stone-700">
                    {[
                      { name: 'All Kundan Jewellery', slug: 'kundan' },
                      { name: 'Kundan Short Necklaces', slug: 'kundan', sub: 'Short Necklace' },
                      { name: 'Kundan Chokers', slug: 'kundan', sub: 'Choker' },
                      { name: 'Kundan Long Haaram', slug: 'kundan', sub: 'Long Necklace' },
                      { name: 'Kundan Bridal Sets', slug: 'kundan', sub: 'Necklace Set' },
                      { name: 'Kundan Jhumkas & Chandbalis', slug: 'kundan', sub: 'Earrings' },
                      { name: 'Kundan Bangles & Kadas', slug: 'kundan', sub: 'Bangle' },
                      { name: 'Kundan Maang Tikka & Vaddanam', slug: 'kundan', sub: 'Vaddanam' }
                    ].map(item => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.slug, item.sub)}
                        className="text-left px-2.5 py-1.5 rounded-md hover:bg-[#ECE5E3]/50 hover:text-[#543E3A] transition-colors cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* 5. PEARLS */}
            <li>
              <button
                onClick={() => handleNavClick('gold', 'Pearls')}
                className="hover:text-[#C99A5C] transition-colors cursor-pointer"
              >
                PEARLS
              </button>
            </li>

            {/* 6. SILVER */}
            <li
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('silver')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('silver')}
                className={`flex items-center gap-1 transition-colors hover:text-[#C99A5C] cursor-pointer ${
                  activeNavTab === 'silver' ? 'text-[#C99A5C] border-b-2 border-[#543E3A]' : ''
                }`}
              >
                <span>SILVER</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {activeDropdown === 'silver' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white border border-[#ECE5E3] shadow-xl p-6 rounded-b-xl z-50">
                  <div className="text-[12px] font-bold text-[#876D68] tracking-widest uppercase mb-3 pb-1 border-b border-stone-100">
                    92.5 Sterling Silver & Articles
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 text-xs font-['Open_Sans'] font-semibold normal-case text-stone-700">
                    {[
                      { name: 'All Silver Articles', slug: 'silver' },
                      { name: 'Varalakshmi Faces', slug: 'silver', sub: 'Varalakshmi Face' },
                      { name: 'Silver Pooja Items', slug: 'silver', sub: 'Pooja Items' },
                      { name: 'God Idols (Ganesh, Lakshmi)', slug: 'silver', sub: 'God Idols' },
                      { name: 'Silver Luxury & Dinner Sets', slug: 'silver', sub: 'Dinner Sets' },
                      { name: 'Silver Coins 999 Purity', slug: 'coins' }
                    ].map(item => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.slug, item.sub)}
                        className="text-left px-2.5 py-1.5 rounded-md hover:bg-[#ECE5E3]/50 hover:text-[#543E3A] transition-colors cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* 7. MILLENNIAL */}
            <li>
              <button
                onClick={() => handleNavClick('diamond', 'Pendants')}
                className="hover:text-[#C99A5C] transition-colors cursor-pointer"
              >
                MILLENNIAL
              </button>
            </li>

            {/* 8. COINS */}
            <li>
              <button
                onClick={() => handleNavClick('coins')}
                className="hover:text-[#C99A5C] transition-colors cursor-pointer"
              >
                COINS
              </button>
            </li>

            {/* 9. THE HOUSE */}
            <li>
              <button
                onClick={() => handleNavClick('house')}
                className="hover:text-[#C99A5C] transition-colors cursor-pointer"
              >
                THE HOUSE
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* 4. MOBILE SLIDE-OUT DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col overflow-y-auto">
            <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-[#ECE5E3]">
              <div className="font-['Cinzel'] font-bold text-[#543E3A] text-lg">
                KRISHNA JEWELLERS
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-stone-700 hover:text-stone-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-3 font-['Cinzel'] text-sm font-bold text-[#543E3A]">
              <button
                onClick={() => handleNavClick('all')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>HOME</span>
              </button>
              <button
                onClick={() => handleNavClick('gold')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>GOLD JEWELLERY</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('diamond')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>DIAMOND JEWELLERY</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('polki')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>POLKI HEIRLOOMS</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('kundan')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>KUNDAN SETS</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('silver')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>SILVER ARTICLES</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('bridal')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between text-[#C99A5C]"
              >
                <span>BRIDAL COLLECTION</span>
                <Sparkles className="w-4 h-4 text-[#C99A5C]" />
              </button>
              <button
                onClick={() => handleNavClick('coins')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>GOLD & SILVER COINS</span>
              </button>
              <button
                onClick={() => handleNavClick('house')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>THE HOUSE OF KRISHNA</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVideoCall();
                }}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between text-emerald-800"
              >
                <span>BOOK VIDEO CALL</span>
                <Video className="w-4 h-4 text-emerald-700" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRates();
                }}
                className="w-full text-left py-2 flex items-center justify-between text-amber-900"
              >
                <span>TODAY'S GOLD & SILVER RATE</span>
              </button>
            </div>

            <div className="mt-auto p-4 border-t border-stone-200 bg-stone-50 font-['Open_Sans'] text-xs text-stone-600 space-y-2">
              <div className="font-bold text-[#543E3A]">Jubilee Hills Flagship:</div>
              <div>Road No 36, Jubilee Hills, Hyderabad</div>
              <a href="tel:8499011111" className="block text-[#543E3A] font-bold">
                Phone: +91 84990 11111
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
