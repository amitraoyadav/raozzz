import React, { useState, useEffect } from 'react';
import {
  Menu as MenuIcon,
  X,
  Search,
  User,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Package,
  RotateCcw,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { RUBANS_CATEGORIES, RUBANS_HANDPICKED } from '../../data/rubansData';

interface RubansHeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigate: (view: string, subCategory?: string) => void;
  activeNavTab: string;
}

export const RubansHeader: React.FC<RubansHeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onNavigate,
  activeNavTab
}) => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState<'demi-fine' | 'ethnic'>('demi-fine');
  
  // Countdown timer calculation (dynamic local demo countdown)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 2, hours: 18, minutes: 45, seconds: 30 }; // Loop demo
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  const handleLinkClick = (view: string, subCategory?: string) => {
    setNavDrawerOpen(false);
    onNavigate(view, subCategory);
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR (Exact Rubans colors & layout) */}
      <div className="bg-[#47080C] text-white py-1.5 px-3 text-center text-xs tracking-wider font-['Lato',sans-serif] flex items-center justify-between z-30 relative select-none">
        <button
          type="button"
          aria-label="Previous announcement"
          className="text-stone-300 hover:text-white p-1 cursor-pointer transition-colors"
          onClick={() => {}}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex-1 flex items-center justify-center gap-2 cursor-pointer font-medium text-[11px] sm:text-xs tracking-wide">
          <span className="uppercase tracking-widest font-semibold">Buy 1 Get 1 Free | Site Wide</span>
          <span className="hidden sm:inline-block text-[#FBBC93] font-bold">· Use Code: B1G1FREE</span>
        </div>

        <button
          type="button"
          aria-label="Next announcement"
          className="text-stone-300 hover:text-white p-1 cursor-pointer transition-colors"
          onClick={() => {}}
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. B1G1 SALE COUNTDOWN BAR (#4e1013 from uploaded HTML) */}
      <div className="bg-[#4e1013] text-white py-2 px-3 sm:px-6 border-b border-[#3b0b0e] select-none font-['Lato',sans-serif]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span
              className="w-3.5 h-3.5 rounded-full inline-block shrink-0 shadow-xs"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #f6e27a 0%, #c9a24a 55%, #8f6f24 100%)'
              }}
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[#c9a24a] font-bold text-xs sm:text-sm tracking-wide">B1G1</span>
              <span className="text-[10px] sm:text-xs text-white/85">Applied on Cart</span>
            </div>
          </div>

          {/* Clock Units */}
          <div className="flex items-center gap-2 sm:gap-4 font-mono">
            <div className="flex flex-col items-center min-w-[28px] sm:min-w-[36px]">
              <span className="text-base sm:text-xl font-bold leading-none">{pad(timeLeft.days)}</span>
              <span className="text-[9px] sm:text-[10px] text-white/60 tracking-wider uppercase font-sans mt-0.5">Days</span>
            </div>
            <span className="text-white/30 text-xs">|</span>
            <div className="flex flex-col items-center min-w-[28px] sm:min-w-[36px]">
              <span className="text-base sm:text-xl font-bold leading-none">{pad(timeLeft.hours)}</span>
              <span className="text-[9px] sm:text-[10px] text-white/60 tracking-wider uppercase font-sans mt-0.5">Hrs</span>
            </div>
            <span className="text-white/30 text-xs">|</span>
            <div className="flex flex-col items-center min-w-[28px] sm:min-w-[36px]">
              <span className="text-base sm:text-xl font-bold leading-none">{pad(timeLeft.minutes)}</span>
              <span className="text-[9px] sm:text-[10px] text-white/60 tracking-wider uppercase font-sans mt-0.5">Min</span>
            </div>
            <span className="text-white/30 text-xs">|</span>
            <div className="flex flex-col items-center min-w-[28px] sm:min-w-[36px]">
              <span className="text-base sm:text-xl font-bold leading-none text-[#FBBC93]">{pad(timeLeft.seconds)}</span>
              <span className="text-[9px] sm:text-[10px] text-white/60 tracking-wider uppercase font-sans mt-0.5">Sec</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DESKTOP TOOLBAR (from uploaded HTML) */}
      <div className="hidden lg:block bg-[#FAF9F6] border-b border-stone-200/80 py-1.5 px-6 text-[12px] font-['Lato',sans-serif] text-stone-600">
        <div className="max-w-[1400px] mx-auto flex items-center justify-end gap-6 font-medium">
          <button
            onClick={() => onNavigate('stores')}
            className="hover:text-black transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Store Locator</span>
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={() => onNavigate('track')}
            className="hover:text-black transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Track Package</span>
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={() => onNavigate('returns')}
            className="hover:text-black transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Return & Exchange</span>
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-black transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Contact Us</span>
          </button>
        </div>
      </div>

      {/* 4. MAIN BRANDING HEADER (Sticky) */}
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200/70 shadow-xs">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          {/* Left: Hamburger trigger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setNavDrawerOpen(true)}
              className="p-1.5 text-stone-900 hover:text-[#47080C] transition-colors cursor-pointer group flex items-center gap-2"
              aria-label="Toggle navigation drawer"
            >
              <MenuIcon className="w-6 h-6 stroke-[1.8] group-hover:scale-105 transition-transform" />
              <span className="hidden md:inline text-xs font-semibold tracking-wider uppercase text-stone-700">
                Menu
              </span>
            </button>
          </div>

          {/* Center: Brand Logo */}
          <div className="text-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex flex-col items-center">
              <span className="font-['Lato',sans-serif] tracking-[0.25em] text-2xl sm:text-3xl font-extrabold text-[#111111] uppercase select-none">
                RUBANS
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-stone-500 font-semibold mt-[-2px]">
                Fashion & Imitation Jewellery
              </span>
            </div>
          </div>

          {/* Right: Actions (Account, Search, Cart) */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => onNavigate('account')}
              className="hidden sm:flex items-center gap-1 p-1 text-stone-800 hover:text-black transition-colors cursor-pointer"
              title="Account"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </button>

            <button
              onClick={onOpenSearch}
              className="p-1 text-stone-800 hover:text-black transition-colors cursor-pointer"
              title="Search Products"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-1 text-stone-800 hover:text-black transition-colors cursor-pointer"
              title="Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-[#47080C] text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 5. SLIDE-OUT MOBILE/DESKTOP NAV DRAWER (Exact Rubans Navigation System) */}
      {navDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setNavDrawerOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
            <div className="p-4 border-b border-stone-100 flex items-center justify-between">
              <span className="font-extrabold tracking-[0.2em] text-xl text-stone-900">RUBANS</span>
              <button
                onClick={() => setNavDrawerOpen(false)}
                className="p-1.5 text-stone-500 hover:text-black transition-colors rounded-full hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-4 py-3">
              {/* Category Tabs: Demi Fine | Ethnic */}
              <div className="flex items-center justify-center gap-4 border-b border-stone-200 pb-2 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveMenuTab('demi-fine')}
                  className={`text-sm font-semibold tracking-wide cursor-pointer transition-colors pb-1 border-b-2 ${
                    activeMenuTab === 'demi-fine'
                      ? 'border-[#8b6d3f] text-[#1e1e1e] font-bold'
                      : 'border-transparent text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Demi Fine
                </button>
                <span className="text-stone-300 font-bold">|</span>
                <button
                  type="button"
                  onClick={() => setActiveMenuTab('ethnic')}
                  className={`text-sm font-semibold tracking-wide cursor-pointer transition-colors pb-1 border-b-2 ${
                    activeMenuTab === 'ethnic'
                      ? 'border-[#8b6d3f] text-[#1e1e1e] font-bold'
                      : 'border-transparent text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Ethnic
                </button>
              </div>

              {/* Tab Categories List */}
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2">
                  Shop By Category
                </h3>
                <div className="divide-y divide-stone-100">
                  {RUBANS_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleLinkClick('collection', cat.slug)}
                      className="w-full flex items-center gap-3 py-2.5 hover:bg-stone-50 transition-colors text-left group cursor-pointer"
                    >
                      <img
                        src={cat.imageUrl}
                        alt={cat.name}
                        className="w-12 h-12 object-cover rounded-md border border-stone-100 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-stone-900 group-hover:text-[#47080C] transition-colors truncate">
                          {cat.name}
                        </div>
                        <div className="text-[11px] text-stone-400">{cat.itemCount}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-600 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Discover Section */}
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3">
                  Discover
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: 'American Diamond', craft: 'American Diamond', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=300&q=80' },
                    { name: 'Temple', craft: 'Temple', img: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=300&q=80' },
                    { name: 'Oxidised', craft: 'Oxidised', img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=300&q=80' },
                    { name: 'Western', craft: 'Western', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80' }
                  ].map(disc => (
                    <button
                      key={disc.name}
                      onClick={() => handleLinkClick('collection', disc.craft.toLowerCase().replace(/\s+/g, '-'))}
                      className="flex flex-col items-center text-center group cursor-pointer"
                    >
                      <div className="w-full aspect-square rounded-md overflow-hidden bg-stone-100 border border-stone-100 mb-1 group-hover:scale-105 transition-transform">
                        <img src={disc.img} alt={disc.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] font-semibold text-stone-700 leading-tight group-hover:text-black">
                        {disc.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Secondary Navigation Links */}
              <div className="border-t border-stone-200 pt-3 space-y-1 mb-4 text-xs font-medium text-stone-700">
                <button
                  onClick={() => handleLinkClick('stores')}
                  className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition-colors text-left cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-stone-500" />
                  <span>Store Locator</span>
                </button>
                <button
                  onClick={() => handleLinkClick('track')}
                  className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition-colors text-left cursor-pointer"
                >
                  <Package className="w-4 h-4 text-stone-500" />
                  <span>Track Package</span>
                </button>
                <button
                  onClick={() => handleLinkClick('returns')}
                  className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition-colors text-left cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-stone-500" />
                  <span>Return & Exchange</span>
                </button>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition-colors text-left cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-stone-500" />
                  <span>Contact Us</span>
                </button>
                <button
                  onClick={() => handleLinkClick('account')}
                  className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition-colors text-left cursor-pointer"
                >
                  <User className="w-4 h-4 text-stone-500" />
                  <span>My Account / Sign In</span>
                </button>
              </div>

              {/* Social and Support */}
              <div className="border-t border-stone-100 pt-3 pb-6 flex items-center justify-between text-xs text-stone-500">
                <div className="flex items-center gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-stone-700 hover:text-black">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-stone-700 hover:text-black">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-stone-700 hover:text-black">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-stone-700 hover:text-black">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <a href="mailto:help@rubans.com" className="flex items-center gap-1 text-stone-700 hover:text-black">
                  <Mail className="w-3.5 h-3.5" />
                  <span className="text-[11px]">help@rubans.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
