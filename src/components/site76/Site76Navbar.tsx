import React, { useState } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu as MenuIcon,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Phone,
  ShieldCheck,
  Leaf
} from 'lucide-react';
import { site76Config } from '../../config/site76Config';
import { CategoryItem } from '../../data/site76Data';

interface Site76NavbarProps {
  currentView: string;
  onNavigate: (view: string, payload?: any) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAccount: () => void;
  onOpenSearch: () => void;
  categories: CategoryItem[];
}

export const Site76Navbar: React.FC<Site76NavbarProps> = ({
  currentView,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAccount,
  onOpenSearch,
  categories
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [materialsDropdownOpen, setMaterialsDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <aside aria-label="Announcement" className="bg-[#263422] text-[#FDFBF7] text-xs py-2 px-4 border-b border-[#354830]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C16A52]" />
            <span className="font-medium tracking-wide">
              Handcrafted in Small Batches · Free Pan-India Shipping Above ₹{site76Config.FREE_SHIPPING_THRESHOLD.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#D5C7B5]">
            <span className="flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#98A391]" />
              Zero Synthetic Polyester
            </span>
            <span className="text-[#354830]">|</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#98A391]" />
              GOTS Organic Certified
            </span>
            <span className="text-[#354830]">|</span>
            <a
              href={`https://wa.me/${site76Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(site76Config.WHATSAPP_DEFAULT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Concierge: {site76Config.PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </aside>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E1D5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left: Mobile Toggle & Desktop Nav */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#1E1F21] hover:bg-[#F5EFEB] rounded-md transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <MenuIcon className="w-5 h-5" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wider uppercase text-[#1E1F21]" aria-label="Main Navigation">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className={`py-1 relative transition-colors hover:text-[#C16A52] ${
                  currentView === 'home' ? 'text-[#C16A52] font-semibold' : ''
                }`}
              >
                Home
                {currentView === 'home' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C16A52]" />
                )}
              </button>

              {/* Shop Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => onNavigate('shop')}
                  className={`py-1 flex items-center gap-1 transition-colors hover:text-[#C16A52] ${
                    currentView === 'shop' ? 'text-[#C16A52] font-semibold' : ''
                  }`}
                >
                  Shop
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${shopDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {shopDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-[#FDFBF7] border border-[#E8E1D5] shadow-xl p-6 rounded-b-lg space-y-4 animate-fadeIn">
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest text-[#9C4C36] uppercase mb-2">Women</p>
                      <ul className="space-y-1.5 text-xs text-[#544133] normal-case">
                        <li>
                          <button
                            type="button"
                            onClick={() => { onNavigate('shop', { gender: 'women', category: 'Dresses' }); setShopDropdownOpen(false); }}
                            className="hover:text-[#C16A52] transition-colors"
                          >
                            Dresses & Wraps
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => { onNavigate('shop', { gender: 'women', category: 'Kurtas' }); setShopDropdownOpen(false); }}
                            className="hover:text-[#C16A52] transition-colors"
                          >
                            Jamdani & Khadi Kurtas
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => { onNavigate('shop', { gender: 'women', category: 'Co-ords' }); setShopDropdownOpen(false); }}
                            className="hover:text-[#C16A52] transition-colors"
                          >
                            Waffle Cotton Co-ords
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => { onNavigate('shop', { gender: 'women', category: 'Trousers' }); setShopDropdownOpen(false); }}
                            className="hover:text-[#C16A52] transition-colors"
                          >
                            Linen Wide-Leg Trousers
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="border-t border-[#E8E1D5] pt-3">
                      <p className="text-[11px] font-semibold tracking-widest text-[#9C4C36] uppercase mb-2">Men</p>
                      <ul className="space-y-1.5 text-xs text-[#544133] normal-case">
                        <li>
                          <button
                            type="button"
                            onClick={() => { onNavigate('shop', { gender: 'men', category: 'Shirts' }); setShopDropdownOpen(false); }}
                            className="hover:text-[#C16A52] transition-colors"
                          >
                            Artisanal Khadi Shirts
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => { onNavigate('shop', { gender: 'men', category: 'Kurtas' }); setShopDropdownOpen(false); }}
                            className="hover:text-[#C16A52] transition-colors"
                          >
                            Pure French Linen Kurtas
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => { onNavigate('shop', { gender: 'men', category: 'Overshirts' }); setShopDropdownOpen(false); }}
                            className="hover:text-[#C16A52] transition-colors"
                          >
                            Wild Hemp Field Overshirts
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="border-t border-[#E8E1D5] pt-3">
                      <button
                        type="button"
                        onClick={() => { onNavigate('shop'); setShopDropdownOpen(false); }}
                        className="text-xs font-semibold text-[#263422] hover:text-[#C16A52] flex items-center justify-between w-full"
                      >
                        <span>View All Natural Garments</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Materials Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMaterialsDropdownOpen(true)}
                onMouseLeave={() => setMaterialsDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => onNavigate('materials')}
                  className={`py-1 flex items-center gap-1 transition-colors hover:text-[#C16A52] ${
                    currentView === 'materials' || currentView === 'material-detail' ? 'text-[#C16A52] font-semibold' : ''
                  }`}
                >
                  Materials
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${materialsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {materialsDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-[#FDFBF7] border border-[#E8E1D5] shadow-xl p-5 rounded-b-lg space-y-2 animate-fadeIn">
                    <p className="text-[11px] font-semibold tracking-widest text-[#9C4C36] uppercase mb-1">Ancient Natural Fibers</p>
                    <ul className="space-y-2 text-xs text-[#544133] normal-case">
                      <li>
                        <button
                          type="button"
                          onClick={() => { onNavigate('material-detail', 'organic-cotton'); setMaterialsDropdownOpen(false); }}
                          className="hover:text-[#C16A52] block text-left"
                        >
                          <span className="font-semibold block">Organic Desi Cotton</span>
                          <span className="text-[11px] text-[#6F736D]">Rainfed & non-GMO seeds</span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => { onNavigate('material-detail', 'linen'); setMaterialsDropdownOpen(false); }}
                          className="hover:text-[#C16A52] block text-left"
                        >
                          <span className="font-semibold block">Pure French Linen</span>
                          <span className="text-[11px] text-[#6F736D]">Normandy flax & pit-loom finishing</span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => { onNavigate('material-detail', 'hemp'); setMaterialsDropdownOpen(false); }}
                          className="hover:text-[#C16A52] block text-left"
                        >
                          <span className="font-semibold block">Wild Himalayan Hemp</span>
                          <span className="text-[11px] text-[#6F736D]">Carbon-negative mountain harvest</span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => { onNavigate('material-detail', 'khadi'); setMaterialsDropdownOpen(false); }}
                          className="hover:text-[#C16A52] block text-left"
                        >
                          <span className="font-semibold block">Handspun Khadi</span>
                          <span className="text-[11px] text-[#6F736D]">Charkha-spun zero-electricity craft</span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => { onNavigate('material-detail', 'natural-dyes'); setMaterialsDropdownOpen(false); }}
                          className="hover:text-[#C16A52] block text-left"
                        >
                          <span className="font-semibold block">Botanical Plant Dyes</span>
                          <span className="text-[11px] text-[#6F736D]">Indigo, madder, and pomegranate</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => onNavigate('collections')}
                className={`py-1 transition-colors hover:text-[#C16A52] ${
                  currentView === 'collections' || currentView === 'collection-detail' ? 'text-[#C16A52] font-semibold' : ''
                }`}
              >
                Collections
              </button>

              <button
                type="button"
                onClick={() => onNavigate('craft')}
                className={`py-1 transition-colors hover:text-[#C16A52] ${
                  currentView === 'craft' ? 'text-[#C16A52] font-semibold' : ''
                }`}
              >
                Craft & Artisans
              </button>

              <button
                type="button"
                onClick={() => onNavigate('journal')}
                className={`py-1 transition-colors hover:text-[#C16A52] ${
                  currentView === 'journal' || currentView === 'journal-article' ? 'text-[#C16A52] font-semibold' : ''
                }`}
              >
                Journal
              </button>

              <button
                type="button"
                onClick={() => onNavigate('about')}
                className={`py-1 transition-colors hover:text-[#C16A52] ${
                  currentView === 'about' ? 'text-[#C16A52] font-semibold' : ''
                }`}
              >
                About
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className={`py-1 transition-colors hover:text-[#C16A52] ${
                  currentView === 'contact' ? 'text-[#C16A52] font-semibold' : ''
                }`}
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Center: Brand Wordmark (Strict single-element representation) */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-left group inline-block"
            >
              <span className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#1E1F21] group-hover:text-[#C16A52] transition-colors block text-center">
                {site76Config.WORDMARK}
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#6F736D] uppercase font-mono block -mt-1 text-center font-medium">
                NATURAL ATELIER
              </span>
            </button>
          </div>

          {/* Right: Actions (Search, Wishlist, Account, Cart) */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2.5 text-[#1E1F21] hover:text-[#C16A52] hover:bg-[#F5EFEB] rounded-full transition-colors"
              aria-label="Search clothing and materials"
              title="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={onOpenWishlist}
              className="p-2.5 text-[#1E1F21] hover:text-[#C16A52] hover:bg-[#F5EFEB] rounded-full transition-colors relative"
              aria-label={`Wishlist with ${wishlistCount} items`}
              title="Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C16A52] text-white text-[10px] font-bold rounded-full flex items-center justify-center font-mono">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenAccount}
              className="p-2.5 text-[#1E1F21] hover:text-[#C16A52] hover:bg-[#F5EFEB] rounded-full transition-colors hidden sm:block"
              aria-label="Customer account and orders"
              title="Account & Orders"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={onOpenCart}
              className="ml-1 px-3.5 py-2 rounded-full bg-[#263422] text-[#FDFBF7] hover:bg-[#354830] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              aria-label={`Bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#D5C7B5]" />
              <span className="text-xs font-semibold tracking-wider font-mono">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FDFBF7] shadow-2xl flex flex-col z-50">
            <div className="p-5 border-b border-[#E8E1D5] flex items-center justify-between">
              <div>
                <span className="font-['Cormorant_Garamond',serif] text-xl font-bold tracking-widest text-[#1E1F21]">
                  {site76Config.WORDMARK}
                </span>
                <span className="text-[9px] tracking-widest text-[#6F736D] uppercase block">
                  Conscious Natural Clothing
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#1E1F21] hover:bg-[#F5EFEB] rounded-md"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm font-medium text-[#1E1F21]">
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1.5 hover:text-[#C16A52]"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('shop'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1.5 hover:text-[#C16A52] font-semibold text-[#C16A52]"
                >
                  Shop All Collections
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('shop', { gender: 'women' }); setMobileMenuOpen(false); }}
                  className="block w-full text-left pl-3 py-1 text-xs text-[#544133] hover:text-[#C16A52]"
                >
                  → Women's Natural Wear
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('shop', { gender: 'men' }); setMobileMenuOpen(false); }}
                  className="block w-full text-left pl-3 py-1 text-xs text-[#544133] hover:text-[#C16A52]"
                >
                  → Men's Khadi & Linen
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('shop', { gender: 'lifestyle' }); setMobileMenuOpen(false); }}
                  className="block w-full text-left pl-3 py-1 text-xs text-[#544133] hover:text-[#C16A52]"
                >
                  → Bags, Scarves & Home
                </button>
              </div>

              <div className="border-t border-[#E8E1D5] pt-4 space-y-3">
                <p className="text-[11px] font-semibold tracking-widest text-[#9C4C36] uppercase">Natural Materials</p>
                <button
                  type="button"
                  onClick={() => { onNavigate('materials'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1 hover:text-[#C16A52]"
                >
                  All 6 Natural Fibers
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('material-detail', 'organic-cotton'); setMobileMenuOpen(false); }}
                  className="block w-full text-left pl-3 py-0.5 text-xs text-[#544133] hover:text-[#C16A52]"
                >
                  • GOTS Organic Cotton
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('material-detail', 'linen'); setMobileMenuOpen(false); }}
                  className="block w-full text-left pl-3 py-0.5 text-xs text-[#544133] hover:text-[#C16A52]"
                >
                  • Pure French Linen
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('material-detail', 'hemp'); setMobileMenuOpen(false); }}
                  className="block w-full text-left pl-3 py-0.5 text-xs text-[#544133] hover:text-[#C16A52]"
                >
                  • Wild Himalayan Hemp
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('material-detail', 'khadi'); setMobileMenuOpen(false); }}
                  className="block w-full text-left pl-3 py-0.5 text-xs text-[#544133] hover:text-[#C16A52]"
                >
                  • Handspun Charkha Khadi
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('material-detail', 'natural-dyes'); setMobileMenuOpen(false); }}
                  className="block w-full text-left pl-3 py-0.5 text-xs text-[#544133] hover:text-[#C16A52]"
                >
                  • Botanical Plant Dyes
                </button>
              </div>

              <div className="border-t border-[#E8E1D5] pt-4 space-y-3">
                <button
                  type="button"
                  onClick={() => { onNavigate('collections'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1 hover:text-[#C16A52]"
                >
                  Collections
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('craft'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1 hover:text-[#C16A52]"
                >
                  Craft & Master Weavers
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('sustainability'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1 hover:text-[#C16A52]"
                >
                  Zero Polyester Manifesto
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('journal'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1 hover:text-[#C16A52]"
                >
                  Slow Living Journal
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1 hover:text-[#C16A52]"
                >
                  About the Founders
                </button>
                <button
                  type="button"
                  onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1 hover:text-[#C16A52]"
                >
                  Contact & Atelier
                </button>
                <button
                  type="button"
                  onClick={() => { onOpenAccount(); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-1 hover:text-[#C16A52]"
                >
                  My Account & Orders
                </button>
              </div>
            </div>

            {/* Bottom info */}
            <div className="p-5 border-t border-[#E8E1D5] bg-[#F5EFEB] space-y-2">
              <a
                href={`https://wa.me/${site76Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(site76Config.WHATSAPP_DEFAULT_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-md bg-[#263422] text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <span>WhatsApp Concierge</span>
              </a>
              <p className="text-[11px] text-[#6F736D] text-center">
                Studio: {site76Config.ADDRESS.split(',')[0]}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
