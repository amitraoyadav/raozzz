import React, { useState } from 'react';
import {
  Search,
  ShoppingBag,
  Menu as MenuIcon,
  X,
  ChevronDown,
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { HAZOORILAL_STORES } from '../../data/hazoorilalData';

interface HazoorilalHeaderProps {
  cartCount: number;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenAppointment: () => void;
  onSelectNav: (tab: string, subCategory?: string) => void;
  activeNavTab: string;
}

export const HazoorilalHeader: React.FC<HazoorilalHeaderProps> = ({
  cartCount,
  onOpenSearch,
  onOpenCart,
  onOpenAppointment,
  onSelectNav,
  activeNavTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [fineJewelleryActiveTab, setFineJewelleryActiveTab] = useState<'gold' | 'diamond' | 'polki' | 'mens'>('gold');
  const [engagementActiveTab, setEngagementActiveTab] = useState<'rings' | 'bands' | 'shapes' | 'guide'>('rings');

  const handleNavClick = (tab: string, subCategory?: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    onSelectNav(tab, subCategory);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#5B5B5B]/15 font-['Chronicle_Display_Roman',serif]">
      {/* Top Banner Information / Quick Concierge */}
      <div className="bg-[#031A2A] text-white py-1.5 px-4 text-[11px] font-['Open_Sans',sans-serif]">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="tracking-widest uppercase text-stone-300 font-semibold text-[10px]">
              HAZOORILAL BY SANDEEP NARANG · SINCE 1952
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenAppointment}
              className="text-[#FBBC93] hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <Calendar className="w-3 h-3 text-[#FBBC93]" />
              <span>Book an Appointment</span>
            </button>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href="tel:+919811223344"
              className="hidden sm:flex items-center gap-1 text-stone-300 hover:text-white"
            >
              <Phone className="w-3 h-3" />
              <span>+91 98112 23344</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Branding Bar (Logo Center / Left / Right) */}
      <div className="border-b border-stone-100">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
          {/* Left: Mobile Toggle & Search */}
          <div className="flex items-center gap-3 sm:gap-5 flex-1">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-stone-800 hover:text-black cursor-pointer"
              aria-label="Toggle Navigation"
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors p-1.5 cursor-pointer group"
              title="Search collection"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-['Open_Sans'] uppercase tracking-widest font-semibold text-stone-500 group-hover:text-stone-900">
                Search
              </span>
            </button>
          </div>

          {/* Center Brand Identity */}
          <div
            onClick={() => handleNavClick('home')}
            className="text-center cursor-pointer px-2"
          >
            <div className="flex flex-col items-center">
              <span className="font-['Chronicle_Display_Roman'] text-xl sm:text-2xl md:text-3xl font-normal tracking-[0.22em] text-[#000000] uppercase">
                Hazoorilal
              </span>
              <span className="font-['Open_Sans'] text-[9px] sm:text-[10px] font-semibold tracking-[0.32em] text-[#5B5B5B] uppercase -mt-0.5">
                Jewellers · By Sandeep Narang
              </span>
            </div>
          </div>

          {/* Right: Appointment & Cart */}
          <div className="flex items-center justify-end gap-3 sm:gap-6 flex-1">
            <button
              onClick={onOpenAppointment}
              className="hidden md:inline-flex items-center gap-1.5 border border-[#5B5B5B] hover:bg-black hover:text-white hover:border-black text-[#5B5B5B] px-4 py-2 rounded-sm text-xs font-['Open_Sans'] uppercase tracking-widest transition-colors cursor-pointer"
            >
              <span>Appointment</span>
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-1.5 text-stone-700 hover:text-black transition-colors cursor-pointer flex items-center gap-2"
              title="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-['Open_Sans'] font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden xl:inline text-xs font-['Open_Sans'] uppercase tracking-wider font-semibold">
                Cart
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Centered Desktop Navigation Bar with Rich Mega Menus */}
      <nav className="hidden lg:block bg-white text-[#5B5B5B]">
        <div className="max-w-[1536px] mx-auto px-6">
          <ul className="flex items-center justify-center gap-7 xl:gap-10 text-[13px] font-['Open_Sans'] font-semibold tracking-[0.14em] uppercase py-3">
            {/* 1. HIGH JEWELLERY */}
            <li>
              <button
                onClick={() => handleNavClick('high_jewellery')}
                className={`transition-colors hover:text-black cursor-pointer ${
                  activeNavTab === 'high_jewellery' ? 'text-black border-b-2 border-black pb-1' : ''
                }`}
              >
                High Jewellery
              </button>
            </li>

            {/* 2. FINE JEWELLERY (Mega Menu) */}
            <li
              className="relative group py-1"
              onMouseEnter={() => setActiveMegaMenu('fine')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => handleNavClick('fine')}
                className={`flex items-center gap-1 transition-colors hover:text-black cursor-pointer ${
                  activeNavTab === 'fine' ? 'text-black border-b-2 border-black pb-1' : ''
                }`}
              >
                <span>Fine Jewellery</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {activeMegaMenu === 'fine' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] bg-white border border-stone-200 shadow-2xl p-6 rounded-b-md z-50 animate-in fade-in duration-200">
                  {/* Tabs: Gold, Diamond, Polki, Men's */}
                  <div className="flex border-b border-stone-200 mb-6 text-xs font-bold font-['Open_Sans'] tracking-widest uppercase">
                    {[
                      { key: 'gold', label: 'Gold Jewellery' },
                      { key: 'diamond', label: 'Diamond Jewellery' },
                      { key: 'polki', label: 'Polki Jewellery' },
                      { key: "mens", label: "Men's Jewellery" }
                    ].map(tab => (
                      <button
                        key={tab.key}
                        onClick={() => setFineJewelleryActiveTab(tab.key as any)}
                        className={`px-5 py-2.5 transition-colors cursor-pointer border-b-2 -mb-[1px] ${
                          fineJewelleryActiveTab === tab.key
                            ? 'border-black text-black font-bold'
                            : 'border-transparent text-stone-500 hover:text-black'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Contents */}
                  {fineJewelleryActiveTab === 'gold' && (
                    <div className="grid grid-cols-3 gap-6 text-xs font-['Open_Sans'] normal-case">
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Categories
                        </span>
                        {['Necklace Sets', 'Earrings', 'Rings', 'Bangles', 'Bracelets', 'Pendants'].map(item => (
                          <button
                            key={item}
                            onClick={() => handleNavClick('gold', item)}
                            className="block text-left text-stone-600 hover:text-black hover:translate-x-1 transition-all"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Essentials
                        </span>
                        {['Mangalsutras', 'Pendant Sets', 'Chain', 'Accessories', 'View All Gold'].map(item => (
                          <button
                            key={item}
                            onClick={() => handleNavClick('gold', item === 'View All Gold' ? undefined : item)}
                            className="block text-left text-stone-600 hover:text-black hover:translate-x-1 transition-all"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-stone-100 shadow-sm">
                        <img
                          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80"
                          alt="Gold Jewellery"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 text-white font-['Chronicle_Display_Roman'] text-sm">
                          Gold Collection '26
                        </div>
                      </div>
                    </div>
                  )}

                  {fineJewelleryActiveTab === 'diamond' && (
                    <div className="grid grid-cols-3 gap-6 text-xs font-['Open_Sans'] normal-case">
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Signature Suites
                        </span>
                        {['Necklace Sets', 'Necklaces', 'Earrings', 'Rings', 'Bangles', 'Bracelets', 'Pendants'].map(item => (
                          <button
                            key={item}
                            onClick={() => handleNavClick('diamond', item)}
                            className="block text-left text-stone-600 hover:text-black hover:translate-x-1 transition-all"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Haute Collections
                        </span>
                        {['Mangalsutras', 'Eden-Roc Collection', 'Millefiori Suite', 'Eternity Rings', 'View All Diamonds'].map(item => (
                          <button
                            key={item}
                            onClick={() => handleNavClick('diamond', item.includes('Eden') ? 'Eden-Roc' : item)}
                            className="block text-left text-stone-600 hover:text-black hover:translate-x-1 transition-all"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-stone-100 shadow-sm">
                        <img
                          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
                          alt="Diamond Jewellery"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 text-white font-['Chronicle_Display_Roman'] text-sm">
                          Eden-Roc Diamond
                        </div>
                      </div>
                    </div>
                  )}

                  {fineJewelleryActiveTab === 'polki' && (
                    <div className="grid grid-cols-3 gap-6 text-xs font-['Open_Sans'] normal-case">
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Polki Designs
                        </span>
                        {['Necklace Sets', 'Earrings & Chandbalis', 'Rings', 'Bangles', 'Bracelets', 'Accessories'].map(item => (
                          <button
                            key={item}
                            onClick={() => handleNavClick('polki', item)}
                            className="block text-left text-stone-600 hover:text-black hover:translate-x-1 transition-all"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Heritage Curation
                        </span>
                        <p className="text-stone-500 text-[11px] leading-relaxed">
                          Syndicate polki diamonds meticulously unset in 22K gold with reverse meenakari and natural emerald drops.
                        </p>
                        <button
                          onClick={() => handleNavClick('polki')}
                          className="font-bold text-black underline pt-2 block"
                        >
                          View All Polki Heirlooms →
                        </button>
                      </div>
                      <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-stone-100 shadow-sm">
                        <img
                          src="https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=600&q=80"
                          alt="Polki Jewellery"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 text-white font-['Chronicle_Display_Roman'] text-sm">
                          Royal Polki
                        </div>
                      </div>
                    </div>
                  )}

                  {fineJewelleryActiveTab === 'mens' && (
                    <div className="grid grid-cols-3 gap-6 text-xs font-['Open_Sans'] normal-case">
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Gold Collection
                        </span>
                        {['Rings', 'Bracelets / Kada', 'Gold Chains'].map(item => (
                          <button
                            key={item}
                            onClick={() => handleNavClick('mens', item)}
                            className="block text-left text-stone-600 hover:text-black hover:translate-x-1 transition-all"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Diamond Collection
                        </span>
                        {['Diamond Rings', 'Bracelets / Kada', 'Bespoke Cufflinks'].map(item => (
                          <button
                            key={item}
                            onClick={() => handleNavClick('mens', item)}
                            className="block text-left text-stone-600 hover:text-black hover:translate-x-1 transition-all"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-stone-100 shadow-sm">
                        <img
                          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
                          alt="Men's Jewellery"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 text-white font-['Chronicle_Display_Roman'] text-sm">
                          Men of Hazoorilal
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>

            {/* 3. ENGAGEMENT RINGS (Mega Menu) */}
            <li
              className="relative group py-1"
              onMouseEnter={() => setActiveMegaMenu('engagement')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => handleNavClick('engagement')}
                className={`flex items-center gap-1 transition-colors hover:text-black cursor-pointer ${
                  activeNavTab === 'engagement' ? 'text-black border-b-2 border-black pb-1' : ''
                }`}
              >
                <span>Engagement Rings</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {activeMegaMenu === 'engagement' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] bg-white border border-stone-200 shadow-2xl p-6 rounded-b-md z-50 animate-in fade-in duration-200">
                  <div className="flex border-b border-stone-200 mb-6 text-xs font-bold font-['Open_Sans'] tracking-widest uppercase">
                    {[
                      { key: 'rings', label: 'Engagement Rings' },
                      { key: 'bands', label: 'Wedding Bands' },
                      { key: 'shapes', label: 'Diamond Shapes' },
                      { key: 'guide', label: 'Know Your Diamond' }
                    ].map(tab => (
                      <button
                        key={tab.key}
                        onClick={() => setEngagementActiveTab(tab.key as any)}
                        className={`px-5 py-2.5 transition-colors cursor-pointer border-b-2 -mb-[1px] ${
                          engagementActiveTab === tab.key
                            ? 'border-black text-black font-bold'
                            : 'border-transparent text-stone-500 hover:text-black'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Engagement Rings tab */}
                  {engagementActiveTab === 'rings' && (
                    <div className="grid grid-cols-3 gap-6 text-xs font-['Open_Sans'] normal-case">
                      <div
                        onClick={() => handleNavClick('engagement', "Women's Wedding Ring")}
                        className="group/item cursor-pointer text-center"
                      >
                        <div className="aspect-[4/3] rounded-md overflow-hidden bg-stone-100 mb-2">
                          <img
                            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
                            alt="Women's Wedding Ring"
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                          />
                        </div>
                        <span className="font-bold text-stone-900 block">Women's Wedding Ring</span>
                      </div>

                      <div
                        onClick={() => handleNavClick('engagement', "Men's Wedding Ring")}
                        className="group/item cursor-pointer text-center"
                      >
                        <div className="aspect-[4/3] rounded-md overflow-hidden bg-stone-100 mb-2">
                          <img
                            src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"
                            alt="Men's Wedding Ring"
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                          />
                        </div>
                        <span className="font-bold text-stone-900 block">Men's Wedding Ring</span>
                      </div>

                      <div
                        onClick={() => handleNavClick('engagement', 'Eternity Rings')}
                        className="group/item cursor-pointer text-center"
                      >
                        <div className="aspect-[4/3] rounded-md overflow-hidden bg-stone-100 mb-2">
                          <img
                            src="https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=600&q=80"
                            alt="Eternity Rings"
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                          />
                        </div>
                        <span className="font-bold text-stone-900 block">Eternity Rings</span>
                      </div>
                    </div>
                  )}

                  {/* Wedding Bands tab */}
                  {engagementActiveTab === 'bands' && (
                    <div className="grid grid-cols-3 gap-6 text-xs font-['Open_Sans'] normal-case">
                      <div
                        onClick={() => handleNavClick('engagement', "Women's Wedding Bands")}
                        className="group/item cursor-pointer text-center"
                      >
                        <div className="aspect-[4/3] rounded-md overflow-hidden bg-stone-100 mb-2">
                          <img
                            src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"
                            alt="Women's Wedding Band"
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                          />
                        </div>
                        <span className="font-bold text-stone-900 block">Women's Wedding Band</span>
                      </div>

                      <div
                        onClick={() => handleNavClick('engagement', "Men's Wedding Bands")}
                        className="group/item cursor-pointer text-center"
                      >
                        <div className="aspect-[4/3] rounded-md overflow-hidden bg-stone-100 mb-2">
                          <img
                            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
                            alt="Men's Wedding Band"
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                          />
                        </div>
                        <span className="font-bold text-stone-900 block">Men's Wedding Band</span>
                      </div>

                      <div
                        onClick={() => handleNavClick('engagement', "Couple's Wedding Bands")}
                        className="group/item cursor-pointer text-center"
                      >
                        <div className="aspect-[4/3] rounded-md overflow-hidden bg-stone-100 mb-2">
                          <img
                            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
                            alt="Couple's Wedding Band"
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                          />
                        </div>
                        <span className="font-bold text-stone-900 block">Couple's Wedding Band</span>
                      </div>
                    </div>
                  )}

                  {/* Diamond Shapes tab */}
                  {engagementActiveTab === 'shapes' && (
                    <div className="grid grid-cols-6 gap-3 text-center text-xs font-['Open_Sans']">
                      {['Round', 'Pear', 'Oval', 'Emerald', 'Cushion', 'Marquise'].map(shape => (
                        <div
                          key={shape}
                          onClick={() => handleNavClick('engagement', shape)}
                          className="p-3 border border-stone-200 rounded-md hover:border-black cursor-pointer transition-colors"
                        >
                          <div className="w-10 h-10 mx-auto rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-600 mb-2">
                            💎
                          </div>
                          <span className="font-bold text-stone-800 text-[11px] block">{shape}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Know Your Diamond tab */}
                  {engagementActiveTab === 'guide' && (
                    <div className="grid grid-cols-3 gap-6 text-xs font-['Open_Sans']">
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Engagement Guides
                        </span>
                        {['The Guide to Diamonds', 'How to choose Engagement Rings', 'Eternity Ring Guide', 'Bespoke Engagement Rings', 'Responsible Sourcing'].map(g => (
                          <button
                            key={g}
                            onClick={() => handleNavClick('guide', g)}
                            className="block text-left text-stone-600 hover:text-black hover:translate-x-1 transition-all"
                          >
                            {g}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 tracking-wider text-[11px] block uppercase mb-2">
                          Care & Consultation
                        </span>
                        {['How to choose a Wedding Band', 'A Lifetime of Care'].map(g => (
                          <button
                            key={g}
                            onClick={() => handleNavClick('guide', g)}
                            className="block text-left text-stone-600 hover:text-black hover:translate-x-1 transition-all"
                          >
                            {g}
                          </button>
                        ))}
                        <button
                          onClick={onOpenAppointment}
                          className="mt-3 block font-bold text-black underline cursor-pointer"
                        >
                          Book an Appointment →
                        </button>
                      </div>

                      <div className="bg-stone-50 p-4 rounded-md border border-stone-200 text-stone-600 leading-relaxed text-[11px]">
                        <span className="font-bold text-black block mb-1 text-xs">
                          GIA Certified Solitaires
                        </span>
                        Every solitaire diamond from 0.50 Carat to 20+ Carats is hand-selected by Sandeep Narang and verified with triple excellent cut credentials.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>

            {/* 4. HOUSE OF HAZOORILAL */}
            <li>
              <button
                onClick={() => handleNavClick('house')}
                className={`transition-colors hover:text-black cursor-pointer ${
                  activeNavTab === 'house' ? 'text-black border-b-2 border-black pb-1' : ''
                }`}
              >
                House of Hazoorilal
              </button>
            </li>

            {/* 5. OUR STORES (Mega Menu) */}
            <li
              className="relative group py-1"
              onMouseEnter={() => setActiveMegaMenu('stores')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => handleNavClick('stores')}
                className={`flex items-center gap-1 transition-colors hover:text-black cursor-pointer ${
                  activeNavTab === 'stores' ? 'text-black border-b-2 border-black pb-1' : ''
                }`}
              >
                <span>Our Stores</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {activeMegaMenu === 'stores' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] bg-white border border-stone-200 shadow-2xl p-6 rounded-b-md z-50 animate-in fade-in duration-200">
                  <div className="grid grid-cols-4 gap-4 text-xs font-['Open_Sans'] normal-case">
                    {HAZOORILAL_STORES.map(store => (
                      <div
                        key={store.id}
                        onClick={() => handleNavClick('stores')}
                        className="group/store cursor-pointer text-center"
                      >
                        <div className="aspect-square rounded-md overflow-hidden bg-stone-100 mb-2">
                          <img
                            src={store.imageUrl}
                            alt={store.name}
                            className="w-full h-full object-cover group-hover/store:scale-105 transition-transform"
                          />
                        </div>
                        <h4 className="font-['Chronicle_Display_Roman'] font-bold text-stone-900 text-xs uppercase mb-1">
                          {store.badge || store.name.split('—')[0]}
                        </h4>
                        <span className="text-[11px] text-stone-500 block underline group-hover/store:text-black">
                          Get Directions
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* 6. SHOP */}
            <li>
              <button
                onClick={() => handleNavClick('shop')}
                className={`transition-colors hover:text-black cursor-pointer ${
                  activeNavTab === 'shop' ? 'text-black border-b-2 border-black pb-1' : ''
                }`}
              >
                Shop
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col overflow-y-auto font-['Open_Sans']">
            <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <span className="font-['Chronicle_Display_Roman'] font-bold text-stone-900 tracking-wider text-base uppercase">
                Hazoorilal Jewellers
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-stone-600 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-3 text-sm font-semibold uppercase tracking-wider text-stone-800">
              <button
                onClick={() => handleNavClick('home')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Home</span>
              </button>
              <button
                onClick={() => handleNavClick('high_jewellery')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>High Jewellery</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('gold')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Gold Jewellery</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('diamond')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Diamond Jewellery</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('polki')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Polki Jewellery</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('mens')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Men's Jewellery</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('engagement')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Engagement Rings</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('house')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>House of Hazoorilal</span>
              </button>
              <button
                onClick={() => handleNavClick('stores')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Our Stores</span>
              </button>
              <button
                onClick={() => handleNavClick('shop')}
                className="w-full text-left py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Shop Catalogue</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full text-left py-3 bg-[#031A2A] text-white rounded-sm px-4 text-center mt-4"
              >
                Book An Appointment
              </button>
            </div>

            <div className="mt-auto p-4 border-t border-stone-200 bg-stone-50 text-xs text-stone-600">
              <div className="font-bold text-black mb-1">Flagship Salon:</div>
              <div>M-44, Greater Kailash Part I, New Delhi</div>
              <div className="font-bold text-black mt-2">Concierge: +91 98112 23344</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
