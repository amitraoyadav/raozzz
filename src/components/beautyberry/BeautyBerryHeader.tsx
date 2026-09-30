import React, { useState } from 'react';
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { BeautyBerryProduct } from '../../data/beautyBerryData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedSubCategory: string;
  setSelectedSubCategory: (sub: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onSelectProduct: (p: BeautyBerryProduct) => void;
}

export const BeautyBerryHeader: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onSelectProduct
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAnnouncementSlide, setActiveAnnouncementSlide] = useState(0);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const announcements = [
    { text: 'Free Delivery On All Orders Above Rs.499/-', link: true },
    { text: '10 % Instant Discount On All Prepaid Orders', link: false }
  ];

  const handleNavClick = (tab: string, category: string = 'all', subCategory: string = '') => {
    setActiveTab(tab);
    setSelectedCategory(category);
    setSelectedSubCategory(subCategory);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white font-['Montserrat',sans-serif] shadow-xs">
      {/* 1. Utility / Announcement Bar (Dark Red/Brown #B22222 background as in theme scheme-5) */}
      <div className="bg-[#B22222] text-white text-[11px] sm:text-xs py-1.5 px-4 font-bold tracking-wider">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between">
          {/* Social Icons on left */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://www.facebook.com/beautyberrycosmetic/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.instagram.com/beautyberry_official/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.youtube.com/channel/UC-3uSl4uaJw9k02uDdoeIuA" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Center Announcement Carousel */}
          <div className="flex-1 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveAnnouncementSlide((prev) => (prev === 0 ? 1 : 0))}
              className="p-1 hover:opacity-75 cursor-pointer"
              aria-label="Previous announcement"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div className="text-center font-bold tracking-wide flex items-center gap-1.5 cursor-pointer" onClick={() => handleNavClick('collection', 'all')}>
              <span>{announcements[activeAnnouncementSlide].text}</span>
              {announcements[activeAnnouncementSlide].link && (
                <ArrowRight className="w-3 h-3 inline-block" />
              )}
            </div>

            <button
              onClick={() => setActiveAnnouncementSlide((prev) => (prev === 1 ? 0 : 1))}
              className="p-1 hover:opacity-75 cursor-pointer"
              aria-label="Next announcement"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right placeholder */}
          <div className="hidden md:block w-16 text-right text-[10px] text-red-200">
            India (INR ₹)
          </div>
        </div>
      </div>

      {/* 2. Main Brand & Icons Bar (Teal #71DBD4 background matching reference) */}
      <div className="bg-[#71DBD4] py-2 sm:py-3 px-4 sm:px-6 lg:px-8 border-b border-[#5bc9c1]">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between">
          {/* Mobile hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-black hover:bg-black/10 rounded-lg cursor-pointer transition-colors"
              aria-label="Open navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Search Trigger (Mobile & Desktop) */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-black hover:bg-black/10 rounded-full cursor-pointer transition-colors flex items-center gap-2"
            title="Search products"
          >
            <Search className="w-5 h-5 text-black stroke-[2.5]" />
            <span className="hidden md:inline text-xs font-semibold text-black/70">Search...</span>
          </button>

          {/* Center Brand Logo (BEAUTY BERRY black lettering exactly matching reference gif) */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-center cursor-pointer select-none text-center"
          >
            <div className="flex items-center justify-center">
              <span className="font-['Montserrat'] font-black text-2xl sm:text-3xl lg:text-4xl tracking-[0.18em] text-black">
                BEAUTY BERRY
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.25em] text-black/80 uppercase">
              Buy Beauty & Cosmetics Online
            </span>
          </div>

          {/* Right Action Icons: Account & Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNavClick('account')}
              className="p-2 text-black hover:bg-black/10 rounded-full cursor-pointer transition-colors hidden sm:block"
              title="Account"
            >
              <User className="w-5 h-5 text-black stroke-[2.2]" />
            </button>

            <button
              onClick={onOpenCart}
              className="p-2 text-black hover:bg-black/10 rounded-full cursor-pointer transition-colors relative"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-6 h-6 text-black stroke-[2.2]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-black text-[#71DBD4] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Desktop Mega Menu Navigation Bar (Teal #71DBD4) */}
      <nav className="hidden lg:block bg-[#71DBD4] border-t border-black/10 text-black">
        <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-center space-x-1 xl:space-x-3 text-[13px] font-bold tracking-wider">
          {/* LIPS */}
          <div className="relative group py-2.5">
            <button
              onClick={() => handleNavClick('collection', 'lips')}
              className={`px-3 py-1 flex items-center gap-1 hover:text-black/75 cursor-pointer uppercase ${
                selectedCategory === 'lips' ? 'underline underline-offset-4 decoration-2' : ''
              }`}
            >
              <span>LIPS</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-[#F5EDED] text-black rounded-lg shadow-xl border border-stone-200 py-2 hidden group-hover:block z-50 animate-fadeIn">
              <button
                onClick={() => handleNavClick('collection', 'lips', 'lipstick')}
                className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold"
              >
                Lipstick
              </button>
              <button
                onClick={() => handleNavClick('collection', 'lips', 'lip-balm')}
                className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold"
              >
                Lip Balm
              </button>
              <button
                onClick={() => handleNavClick('collection', 'lips', 'lip-gloss')}
                className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold"
              >
                Lips Gloss
              </button>
              <button
                onClick={() => handleNavClick('collection', 'lips', '')}
                className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-bold text-[#B22222] border-t border-stone-200"
              >
                Explore All lips
              </button>
            </div>
          </div>

          {/* EYE */}
          <div className="relative group py-2.5">
            <button
              onClick={() => handleNavClick('collection', 'eye')}
              className={`px-3 py-1 flex items-center gap-1 hover:text-black/75 cursor-pointer uppercase ${
                selectedCategory === 'eye' ? 'underline underline-offset-4 decoration-2' : ''
              }`}
            >
              <span>EYE</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-[#F5EDED] text-black rounded-lg shadow-xl border border-stone-200 py-2 hidden group-hover:block z-50 animate-fadeIn">
              <button
                onClick={() => handleNavClick('collection', 'eye', 'eyeliner')}
                className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold"
              >
                Eyeliners
              </button>
              <button
                onClick={() => handleNavClick('collection', 'eye', 'eyeshadow')}
                className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold"
              >
                Eyeshadow
              </button>
              <button
                onClick={() => handleNavClick('collection', 'eye', 'kohl-kajal')}
                className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold"
              >
                Kohl & kajal
              </button>
              <button
                onClick={() => handleNavClick('collection', 'eye', 'mascara')}
                className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold"
              >
                Mascara
              </button>
              <button
                onClick={() => handleNavClick('collection', 'eye', '')}
                className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-bold text-[#B22222] border-t border-stone-200"
              >
                Explore All Eye
              </button>
            </div>
          </div>

          {/* FACE */}
          <div className="relative group py-2.5">
            <button
              onClick={() => handleNavClick('collection', 'face')}
              className={`px-3 py-1 flex items-center gap-1 hover:text-black/75 cursor-pointer uppercase ${
                selectedCategory === 'face' ? 'underline underline-offset-4 decoration-2' : ''
              }`}
            >
              <span>FACE</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-[#F5EDED] text-black rounded-lg shadow-xl border border-stone-200 py-2 hidden group-hover:block z-50 animate-fadeIn">
              <button onClick={() => handleNavClick('collection', 'face', 'blusher')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Blusher
              </button>
              <button onClick={() => handleNavClick('collection', 'face', 'compact')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Compact
              </button>
              <button onClick={() => handleNavClick('collection', 'face', 'concealer')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Concealer
              </button>
              <button onClick={() => handleNavClick('collection', 'face', 'foundation')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Foundation
              </button>
              <button onClick={() => handleNavClick('collection', 'face', 'highlighter')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Highlighter
              </button>
              <button onClick={() => handleNavClick('collection', 'face', 'primer')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Primer
              </button>
              <button onClick={() => handleNavClick('collection', 'face', 'makeup-fixer')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Makeup Fixer
              </button>
              <button onClick={() => handleNavClick('collection', 'face', '')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-bold text-[#B22222] border-t border-stone-200">
                Explore All Face
              </button>
            </div>
          </div>

          {/* HAIR */}
          <div className="relative group py-2.5">
            <button
              onClick={() => handleNavClick('collection', 'hair')}
              className={`px-3 py-1 flex items-center gap-1 hover:text-black/75 cursor-pointer uppercase ${
                selectedCategory === 'hair' ? 'underline underline-offset-4 decoration-2' : ''
              }`}
            >
              <span>HAIR</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-[#F5EDED] text-black rounded-lg shadow-xl border border-stone-200 py-2 hidden group-hover:block z-50 animate-fadeIn">
              <button onClick={() => handleNavClick('collection', 'hair', 'hair-dryer')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Hair Dryer
              </button>
              <button onClick={() => handleNavClick('collection', 'hair', '')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-bold text-[#B22222] border-t border-stone-200">
                Explore All Hair
              </button>
            </div>
          </div>

          {/* NAILS */}
          <button
            onClick={() => handleNavClick('collection', 'nails')}
            className={`px-3 py-1 hover:text-black/75 cursor-pointer uppercase ${
              selectedCategory === 'nails' ? 'underline underline-offset-4 decoration-2' : ''
            }`}
          >
            NAILS
          </button>

          {/* SKIN CARE */}
          <button
            onClick={() => handleNavClick('collection', 'skin-care')}
            className={`px-3 py-1 hover:text-black/75 cursor-pointer uppercase ${
              selectedCategory === 'skin-care' ? 'underline underline-offset-4 decoration-2' : ''
            }`}
          >
            SKIN CARE
          </button>

          {/* COMBO */}
          <div className="relative group py-2.5">
            <button
              onClick={() => handleNavClick('collection', 'combo')}
              className={`px-3 py-1 flex items-center gap-1 hover:text-black/75 cursor-pointer uppercase ${
                selectedCategory === 'combo' ? 'underline underline-offset-4 decoration-2' : ''
              }`}
            >
              <span>COMBO</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-[#F5EDED] text-black rounded-lg shadow-xl border border-stone-200 py-2 hidden group-hover:block z-50 animate-fadeIn">
              <button onClick={() => handleNavClick('collection', 'combo', 'makeup-kits')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Makeup Kits
              </button>
            </div>
          </div>

          {/* ACCESSORIES */}
          <div className="relative group py-2.5">
            <button
              onClick={() => handleNavClick('collection', 'accessories')}
              className={`px-3 py-1 flex items-center gap-1 hover:text-black/75 cursor-pointer uppercase ${
                selectedCategory === 'accessories' ? 'underline underline-offset-4 decoration-2' : ''
              }`}
            >
              <span>ACCESSORIES</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-[#F5EDED] text-black rounded-lg shadow-xl border border-stone-200 py-2 hidden group-hover:block z-50 animate-fadeIn">
              <button onClick={() => handleNavClick('collection', 'accessories', 'brushes')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Brushes
              </button>
              <button onClick={() => handleNavClick('collection', 'accessories', 'tools')} className="w-full text-left px-4 py-2 hover:bg-black/5 text-xs font-semibold">
                Tools
              </button>
            </div>
          </div>

          {/* BEST SELLERS */}
          <button
            onClick={() => handleNavClick('collection', 'bestseller')}
            className={`px-3 py-1 hover:text-black/75 cursor-pointer uppercase font-black ${
              selectedCategory === 'bestseller' ? 'underline underline-offset-4 decoration-2' : ''
            }`}
          >
            BEST SELLERS
          </button>

          {/* SALE */}
          <button
            onClick={() => handleNavClick('collection', 'sale')}
            className={`px-3 py-1 text-[#B22222] hover:text-red-900 cursor-pointer uppercase font-black ${
              selectedCategory === 'sale' ? 'underline underline-offset-4 decoration-2' : ''
            }`}
          >
            SALE
          </button>
        </div>
      </nav>

      {/* 4. Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs lg:hidden">
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#F5EDED] text-black shadow-2xl flex flex-col overflow-y-auto">
            <div className="p-4 bg-[#71DBD4] flex items-center justify-between border-b border-black/10">
              <span className="font-['Montserrat'] font-black text-xl tracking-wider text-black">
                BEAUTY BERRY
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-black hover:bg-black/10 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 flex-1 space-y-1 text-sm font-bold divide-y divide-stone-200">
              {/* LIPS */}
              <div className="pt-2">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === 'lips' ? null : 'lips')}
                  className="w-full py-2 flex items-center justify-between text-left"
                >
                  <span>LIPS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'lips' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'lips' && (
                  <div className="pl-4 pb-2 space-y-2 text-xs font-semibold text-stone-700">
                    <button onClick={() => handleNavClick('collection', 'lips', 'lipstick')} className="block w-full text-left py-1">Lipstick</button>
                    <button onClick={() => handleNavClick('collection', 'lips', 'lip-balm')} className="block w-full text-left py-1">Lip Balm</button>
                    <button onClick={() => handleNavClick('collection', 'lips', 'lip-gloss')} className="block w-full text-left py-1">Lips Gloss</button>
                    <button onClick={() => handleNavClick('collection', 'lips', '')} className="block w-full text-left py-1 font-bold text-red-700">Explore All Lips</button>
                  </div>
                )}
              </div>

              {/* EYE */}
              <div className="pt-2">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === 'eye' ? null : 'eye')}
                  className="w-full py-2 flex items-center justify-between text-left"
                >
                  <span>EYE</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'eye' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'eye' && (
                  <div className="pl-4 pb-2 space-y-2 text-xs font-semibold text-stone-700">
                    <button onClick={() => handleNavClick('collection', 'eye', 'eyeliner')} className="block w-full text-left py-1">Eyeliners</button>
                    <button onClick={() => handleNavClick('collection', 'eye', 'eyeshadow')} className="block w-full text-left py-1">Eyeshadow</button>
                    <button onClick={() => handleNavClick('collection', 'eye', 'kohl-kajal')} className="block w-full text-left py-1">Kohl & kajal</button>
                    <button onClick={() => handleNavClick('collection', 'eye', 'mascara')} className="block w-full text-left py-1">Mascara</button>
                    <button onClick={() => handleNavClick('collection', 'eye', '')} className="block w-full text-left py-1 font-bold text-red-700">Explore All Eye</button>
                  </div>
                )}
              </div>

              {/* FACE */}
              <div className="pt-2">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === 'face' ? null : 'face')}
                  className="w-full py-2 flex items-center justify-between text-left"
                >
                  <span>FACE</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'face' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'face' && (
                  <div className="pl-4 pb-2 space-y-2 text-xs font-semibold text-stone-700">
                    <button onClick={() => handleNavClick('collection', 'face', 'blusher')} className="block w-full text-left py-1">Blusher</button>
                    <button onClick={() => handleNavClick('collection', 'face', 'compact')} className="block w-full text-left py-1">Compact</button>
                    <button onClick={() => handleNavClick('collection', 'face', 'concealer')} className="block w-full text-left py-1">Concealer</button>
                    <button onClick={() => handleNavClick('collection', 'face', 'foundation')} className="block w-full text-left py-1">Foundation</button>
                    <button onClick={() => handleNavClick('collection', 'face', 'highlighter')} className="block w-full text-left py-1">Highlighter</button>
                    <button onClick={() => handleNavClick('collection', 'face', 'primer')} className="block w-full text-left py-1">Primer</button>
                    <button onClick={() => handleNavClick('collection', 'face', 'makeup-fixer')} className="block w-full text-left py-1">Makeup Fixer</button>
                    <button onClick={() => handleNavClick('collection', 'face', '')} className="block w-full text-left py-1 font-bold text-red-700">Explore All Face</button>
                  </div>
                )}
              </div>

              {/* HAIR */}
              <div className="pt-2">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === 'hair' ? null : 'hair')}
                  className="w-full py-2 flex items-center justify-between text-left"
                >
                  <span>HAIR</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'hair' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'hair' && (
                  <div className="pl-4 pb-2 space-y-2 text-xs font-semibold text-stone-700">
                    <button onClick={() => handleNavClick('collection', 'hair', 'hair-dryer')} className="block w-full text-left py-1">Hair Dryer</button>
                    <button onClick={() => handleNavClick('collection', 'hair', '')} className="block w-full text-left py-1 font-bold text-red-700">Explore All Hair</button>
                  </div>
                )}
              </div>

              {/* NAILS & SKIN CARE */}
              <div className="pt-2">
                <button onClick={() => handleNavClick('collection', 'nails')} className="w-full py-2 text-left">NAILS</button>
              </div>
              <div className="pt-2">
                <button onClick={() => handleNavClick('collection', 'skin-care')} className="w-full py-2 text-left">SKIN CARE</button>
              </div>
              <div className="pt-2">
                <button onClick={() => handleNavClick('collection', 'combo', 'makeup-kits')} className="w-full py-2 text-left">COMBO - Makeup Kits</button>
              </div>
              <div className="pt-2">
                <button onClick={() => handleNavClick('collection', 'accessories', 'brushes')} className="w-full py-2 text-left">ACCESSORIES - Brushes & Tools</button>
              </div>
              <div className="pt-2">
                <button onClick={() => handleNavClick('collection', 'bestseller')} className="w-full py-2 text-left font-black text-black">BEST SELLERS</button>
              </div>
              <div className="pt-2">
                <button onClick={() => handleNavClick('collection', 'sale')} className="w-full py-2 text-left font-black text-[#B22222]">SALE</button>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-4 bg-[#71DBD4] border-t border-black/10 text-xs">
              <div className="flex items-center gap-4 justify-center">
                <a href="https://www.facebook.com/beautyberrycosmetic/" target="_blank" rel="noreferrer"><Facebook className="w-4 h-4 text-black" /></a>
                <a href="https://www.instagram.com/beautyberry_official/" target="_blank" rel="noreferrer"><Instagram className="w-4 h-4 text-black" /></a>
                <a href="https://www.youtube.com/channel/UC-3uSl4uaJw9k02uDdoeIuA" target="_blank" rel="noreferrer"><Youtube className="w-4 h-4 text-black" /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
