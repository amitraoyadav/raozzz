import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Phone,
  Search,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  ShieldCheck,
  Award,
  Video
} from 'lucide-react';
import { HazoorilalHeader } from './HazoorilalHeader';
import { HazoorilalFooter } from './HazoorilalFooter';
import {
  AppointmentModal,
  ProductDetailModal,
  SearchModal,
  CartDrawer
} from './HazoorilalModals';
import {
  HAZOORILAL_PRODUCTS,
  HAZOORILAL_ICONS,
  HAZOORILAL_BRIDES,
  HAZOORILAL_STORES,
  HAZOORILAL_FAQS,
  HazoorilalProduct
} from '../../data/hazoorilalData';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { useApp } from '../../context/AppContext';

export const HazoorilalApp: React.FC = () => {
  const { setActiveView } = useApp();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<'home' | 'high_jewellery' | 'shop' | 'house' | 'stores' | 'guide'>('home');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [activeSubCatFilter, setActiveSubCatFilter] = useState<string | null>(null);

  // Cart state
  const [cartItems, setCartItems] = useState<{ product: HazoorilalProduct; quantity: number }[]>([
    { product: HAZOORILAL_PRODUCTS[4], quantity: 1 } // Pre-loaded with eternity ring for demo realism
  ]);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<HazoorilalProduct | null>(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedStoreForAppointment, setSelectedStoreForAppointment] = useState<string | undefined>(undefined);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Cart actions
  const handleAddToCart = (product: HazoorilalProduct) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(i => {
          if (i.product.id === productId) {
            const next = i.quantity + delta;
            return next > 0 ? { ...i, quantity: next } : null;
          }
          return i;
        })
        .filter(Boolean) as { product: HazoorilalProduct; quantity: number }[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems(prev => prev.filter(i => i.product.id !== productId));
  };

  // Nav handler
  const handleSelectNav = (tab: string, subCategory?: string) => {
    if (tab === 'home') {
      setActiveTab('home');
      setActiveCategoryFilter('all');
      setActiveSubCatFilter(null);
    } else if (tab === 'high_jewellery') {
      setActiveTab('high_jewellery');
      setActiveCategoryFilter('high_jewellery');
      setActiveSubCatFilter(subCategory || null);
    } else if (tab === 'house') {
      setActiveTab('house');
    } else if (tab === 'stores') {
      setActiveTab('stores');
    } else if (tab === 'guide') {
      setActiveTab('guide');
    } else {
      setActiveTab('shop');
      setActiveCategoryFilter(tab);
      setActiveSubCatFilter(subCategory || null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered catalogue products
  const displayedProducts = useMemo(() => {
    return HAZOORILAL_PRODUCTS.filter(p => {
      if (activeCategoryFilter !== 'all' && activeCategoryFilter !== 'fine') {
        if (p.category !== activeCategoryFilter) return false;
      }
      if (activeSubCatFilter && p.subCategory !== activeSubCatFilter) {
        return false;
      }
      return true;
    });
  }, [activeCategoryFilter, activeSubCatFilter]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-['Open_Sans',sans-serif] selection:bg-stone-200">
      {/* 1. HEADER */}
      <HazoorilalHeader
        cartCount={totalCartCount}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenAppointment={() => {
          setSelectedStoreForAppointment(undefined);
          setAppointmentModalOpen(true);
        }}
        onSelectNav={handleSelectNav}
        activeNavTab={activeCategoryFilter}
      />

      {/* 2. BODY CONTENT (Routed by activeTab) */}
      <main className="flex-1">
        {/* HOMEPAGE VIEW (Faithful recreation from uploaded reference HTML) */}
        {activeTab === 'home' && (
          <div>
            {/* HERO BANNER SECTION (WHERE BRILLIANCE IS BESPOKE) */}
            <section className="relative overflow-hidden bg-[#031A2A] text-white">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.6/1] w-full min-h-[420px] sm:min-h-[560px]">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2560&q=90"
                  alt="Where Brilliance is Bespoke"
                  className="w-full h-full object-cover object-center brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                  <div className="max-w-[1536px] mx-auto px-6 sm:px-16 w-full">
                    <div className="max-w-2xl space-y-4">
                      <span className="font-['Chronicle_Display_Roman'] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#FBBC93]">
                        SINCE 1952 · BY SANDEEP NARANG
                      </span>
                      <h1 className="font-['Chronicle_Display_Roman'] text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide leading-tight text-white uppercase">
                        WHERE BRILLIANCE<br />IS BESPOKE
                      </h1>
                      <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed max-w-lg">
                        Generations of master jewellery design sculpted in diamonds, polki, and 22K gold.
                      </p>
                      <div className="pt-2 flex items-center gap-4">
                        <button
                          onClick={() => handleSelectNav('high_jewellery')}
                          className="bg-black hover:bg-stone-900 border border-white/40 text-white px-8 py-3.5 text-xs font-['Open_Sans'] uppercase tracking-widest font-semibold transition-all cursor-pointer shadow-lg"
                        >
                          Discover High Jewellery
                        </button>
                        <button
                          onClick={() => setAppointmentModalOpen(true)}
                          className="bg-white/10 hover:bg-white hover:text-black border border-white/60 text-white px-6 py-3.5 text-xs font-['Open_Sans'] uppercase tracking-widest font-semibold transition-all cursor-pointer"
                        >
                          Private Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BRAND INTRO SECTION (Jewellery Shaped By Tradition, Elevated By Design) */}
            <section className="py-14 sm:py-20 bg-white text-center px-6">
              <div className="max-w-3xl mx-auto space-y-4">
                <h2 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-4xl font-normal text-[#5B5B5B] uppercase tracking-wide leading-snug">
                  Jewellery Shaped By Tradition,<br />Elevated By Design
                </h2>
                <div className="w-12 h-[1px] bg-stone-300 mx-auto my-3" />
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-xl mx-auto">
                  Since 1952, Hazoorilal by Sandeep Narang has been at the heart of India's finest jewellery design. With a lineage steeped in excellence, each creation is an evolution of artistry, designed for those who inherit taste, not trends.
                </p>
              </div>
            </section>

            {/* EDEN-ROC COLLECTION SECTION (Video / Campaign Visual) */}
            <section className="relative overflow-hidden bg-black text-white aspect-[16/9] md:aspect-[2.4/1] min-h-[380px] sm:min-h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=85"
                alt="Eden-Roc Collection"
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6">
                <div className="space-y-4 max-w-lg">
                  <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.3em] text-[#FBBC93]">
                    HAUTE JOAILLERIE
                  </span>
                  <h2 className="font-['Chronicle_Display_Roman'] text-3xl sm:text-5xl font-normal tracking-wider text-white uppercase">
                    EDEN-ROC<br />COLLECTION
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                    Sculptural pear and marquise diamond compositions radiating pure light.
                  </p>
                  <div>
                    <button
                      onClick={() => handleSelectNav('high_jewellery', 'Necklaces')}
                      className="bg-black/75 hover:bg-black border border-white/60 text-white px-8 py-3 text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
                    >
                      DISCOVER
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* HIGH JEWELLERY FOR THE HAUTE MONDE SECTION (3 Columns: Necklaces, Earrings, Rings) */}
            <section className="py-16 sm:py-24 bg-white text-center">
              <div className="max-w-[1536px] mx-auto px-6 sm:px-12">
                <div className="max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
                  <h2 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-4xl font-normal text-[#5B5B5B] uppercase tracking-wide">
                    HIGH JEWELLERY<br />FOR THE HAUTE MONDE
                  </h2>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500">
                    EXCLUSIVITY, SCULPTED IN STONE
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  {/* 1. NECKLACES */}
                  <div
                    onClick={() => handleSelectNav('high_jewellery', 'Necklaces')}
                    className="group cursor-pointer text-left space-y-4"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                      <img
                        src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
                        alt="High Jewellery Necklaces"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="pt-2">
                      <h3 className="font-['Chronicle_Display_Roman'] text-xl sm:text-2xl font-normal text-[#5B5B5B] uppercase group-hover:text-black transition-colors">
                        NECKLACES
                      </h3>
                      <p className="text-xs text-stone-500 font-light mt-1">
                        The centrepiece of every occasion
                      </p>
                    </div>
                  </div>

                  {/* 2. EARRINGS */}
                  <div
                    onClick={() => handleSelectNav('high_jewellery', 'Earrings')}
                    className="group cursor-pointer text-left space-y-4"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                      <img
                        src="https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85"
                        alt="High Jewellery Earrings"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="pt-2">
                      <h3 className="font-['Chronicle_Display_Roman'] text-xl sm:text-2xl font-normal text-[#5B5B5B] uppercase group-hover:text-black transition-colors">
                        EARRINGS
                      </h3>
                      <p className="text-xs text-stone-500 font-light mt-1">
                        For days when elegance begins with one perfect jewel
                      </p>
                    </div>
                  </div>

                  {/* 3. RINGS */}
                  <div
                    onClick={() => handleSelectNav('high_jewellery', 'Rings')}
                    className="group cursor-pointer text-left space-y-4"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                      <img
                        src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85"
                        alt="High Jewellery Rings"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="pt-2">
                      <h3 className="font-['Chronicle_Display_Roman'] text-xl sm:text-2xl font-normal text-[#5B5B5B] uppercase group-hover:text-black transition-colors">
                        RINGS
                      </h3>
                      <p className="text-xs text-stone-500 font-light mt-1">
                        Crafted to be touched. Designed to be remembered.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 sm:mt-16">
                  <button
                    onClick={() => handleSelectNav('high_jewellery')}
                    className="border border-[#5B5B5B] hover:bg-black hover:text-white hover:border-black text-[#5B5B5B] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                  >
                    EXPLORE HIGH JEWELLERY
                  </button>
                </div>
              </div>
            </section>

            {/* YOUR PRIVATE PREVIEW AWAITS SECTION */}
            <section className="relative overflow-hidden bg-stone-100 py-20 sm:py-28 px-6 text-center border-t border-b border-stone-200">
              <div className="max-w-3xl mx-auto space-y-5">
                <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.28em] text-[#5B5B5B]">
                  CONCIERGE & APPOINTMENTS
                </span>
                <h2 className="font-['Chronicle_Display_Roman'] text-3xl sm:text-4xl md:text-5xl font-normal text-[#5B5B5B] uppercase leading-tight">
                  YOUR PRIVATE<br />PREVIEW AWAITS
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 uppercase tracking-widest leading-relaxed font-light max-w-xl mx-auto">
                  STEP INTO AN INTIMATE SETTING CURATED EXCLUSIVELY FOR YOU. FROM WEDDING SELECTIONS TO ONE-OF-A-KIND CREATIONS, OUR APPOINTMENTS ARE DESIGNED TO OFFER ABSOLUTE ATTENTION AND ABSOLUTE DISTINCTION.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setAppointmentModalOpen(true)}
                    className="bg-black hover:bg-stone-800 text-white px-9 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer shadow-md"
                  >
                    BOOK AN APPOINTMENT
                  </button>
                </div>
              </div>
            </section>

            {/* NEW ARRIVALS PRODUCT SHOWCASE */}
            <section className="py-16 sm:py-24 bg-white text-center border-b border-stone-200">
              <div className="max-w-[1536px] mx-auto px-6 sm:px-12">
                <div className="max-w-2xl mx-auto mb-12 space-y-2">
                  <h2 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-4xl font-normal text-[#5B5B5B] uppercase tracking-wide">
                    NEW ARRIVALS
                  </h2>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500">
                    AN ENSEMBLE CURATED FOR A NEW MOMENT OF GRANDEUR
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                  {HAZOORILAL_PRODUCTS.slice(0, 4).map(prod => (
                    <div
                      key={prod.id}
                      className="group border border-stone-200 bg-white p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-square overflow-hidden bg-stone-50 mb-3">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {prod.badge && (
                          <span className="absolute top-2 left-2 bg-black text-white text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold">
                            {prod.badge}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <span className="text-[10px] text-stone-400 font-mono block">
                          SKU: {prod.sku}
                        </span>
                        <h4
                          onClick={() => setSelectedProduct(prod)}
                          className="font-['Chronicle_Display_Roman'] text-sm text-black font-normal line-clamp-2 hover:text-stone-600 cursor-pointer"
                        >
                          {prod.name}
                        </h4>
                        <div className="text-xs font-semibold text-stone-800 pt-1">
                          {prod.price ? `₹${prod.price.toLocaleString()}` : 'Price On Request'}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 mt-3">
                        <button
                          onClick={() => setSelectedProduct(prod)}
                          className="text-[11px] text-stone-500 hover:text-black uppercase tracking-wider underline cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => handleAddToCart(prod)}
                          className="bg-black hover:bg-stone-800 text-white text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 transition-colors cursor-pointer"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <button
                    onClick={() => handleSelectNav('shop')}
                    className="border border-[#5B5B5B] hover:bg-black hover:text-white hover:border-black text-[#5B5B5B] px-8 py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                  >
                    View All Catalogue
                  </button>
                </div>
              </div>
            </section>

            {/* HAZOORILAL BRIDES SECTION */}
            <section className="py-16 sm:py-24 bg-[#FAFAF8] text-center border-b border-stone-200">
              <div className="max-w-[1536px] mx-auto px-6 sm:px-12">
                <div className="max-w-2xl mx-auto mb-12 space-y-2">
                  <h2 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-4xl font-normal text-[#5B5B5B] uppercase tracking-wide">
                    HAZOORILAL BRIDES
                  </h2>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500">
                    UNFORGETTABLE JEWELS FOR THE MOST MEMORABLE MOMENT
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  {HAZOORILAL_BRIDES.map(bride => (
                    <div
                      key={bride.id}
                      className="group bg-white border border-stone-200 overflow-hidden shadow-xs"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                        <img
                          src={bride.imageUrl}
                          alt={bride.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <span className="text-[10px] font-semibold tracking-widest text-[#5B5B5B] uppercase">
                          {bride.subtitle}
                        </span>
                        <h4 className="font-['Chronicle_Display_Roman'] text-lg font-normal text-black">
                          {bride.title}
                        </h4>
                        <p className="text-xs text-stone-600 font-light leading-relaxed">
                          {bride.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ADORNED BY ICONS SECTION (Aishwarya Rai, Kriti Sanon, Nora Fatehi, Tripti Dimri, etc.) */}
            <section className="py-16 sm:py-24 bg-[#ECEDEC] text-center border-b border-stone-200">
              <div className="max-w-[1536px] mx-auto px-6 sm:px-12">
                <div className="max-w-2xl mx-auto mb-12 space-y-2">
                  <h2 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-4xl font-normal text-[#5B5B5B] uppercase tracking-wide">
                    ADORNED BY ICONS
                  </h2>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500">
                    JEWELLERY WITH ITS OWN FANBASE
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                  {HAZOORILAL_ICONS.map(icon => (
                    <div
                      key={icon.id}
                      className="bg-white p-6 shadow-xs border border-stone-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                          <img
                            src={icon.imageUrl}
                            alt={icon.name}
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="font-['Chronicle_Display_Roman'] text-lg sm:text-xl font-normal text-[#5B5B5B] uppercase tracking-wider mb-1">
                          {icon.name}
                        </h3>
                        <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-3">
                          {icon.title}
                        </p>
                        <p className="text-xs text-stone-600 font-light leading-relaxed">
                          {icon.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-stone-100 mt-4 text-[11px] text-stone-500 italic">
                        Wearing: <strong className="text-black not-italic">{icon.featuredJewel}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* A NAME. A HERITAGE. AN HEIRLOOM. (Showroom Experience & Details) */}
            <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
              <div className="max-w-[1536px] mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 border border-stone-200 overflow-hidden bg-[#ECEDEC]">
                  <div className="lg:col-span-6 aspect-[16/10] lg:aspect-auto">
                    <img
                      src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80"
                      alt="Visit Our Store"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-6 p-8 sm:p-14 flex flex-col justify-center text-center items-center font-['Open_Sans']">
                    <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.28em] text-[#5B5B5B] mb-2">
                      FLAGSHIP ATELIER
                    </span>
                    <h2 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-4xl font-normal text-[#5B5B5B] uppercase mb-4 leading-tight">
                      A NAME. A HERITAGE<br />AN HEIRLOOM.
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-6 max-w-md">
                      A tailored experience for the truly discerning. Visit our flagship showroom at Greater Kailash I, or our luxury salons across Gurugram, DLF Emporio, and ITC Maurya.
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleSelectNav('stores')}
                        className="border border-[#5B5B5B] hover:bg-black hover:text-white hover:border-black text-[#5B5B5B] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                      >
                        GET DETAILS
                      </button>
                      <button
                        onClick={() => setAppointmentModalOpen(true)}
                        className="bg-black hover:bg-stone-800 text-white px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                      >
                        BOOK VISIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* HIGH JEWELLERY DEDICATED SHOWCASE */}
        {activeTab === 'high_jewellery' && (
          <div className="max-w-[1536px] mx-auto px-6 sm:px-12 py-12 sm:py-20 font-['Open_Sans']">
            <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
              <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.3em] text-[#5B5B5B]">
                HAUTE JOAILLERIE · SANDEEP NARANG
              </span>
              <h1 className="font-['Chronicle_Display_Roman'] text-3xl sm:text-5xl font-normal text-black uppercase tracking-wide">
                High Jewellery
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-xl mx-auto">
                Rare natural diamonds, vivid Zambian and Colombian emeralds, and unrepeatable artisanal stone settings crafted in limited editions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HAZOORILAL_PRODUCTS.filter(p => p.isHighJewellery || p.category === 'high_jewellery').map(prod => (
                <div
                  key={prod.id}
                  className="group bg-white border border-stone-200 p-5 flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div className="aspect-square bg-stone-50 overflow-hidden mb-4">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-2 flex-1">
                    <span className="text-[10px] text-stone-400 font-mono">
                      {prod.sku} · {prod.metal}
                    </span>
                    <h3
                      onClick={() => setSelectedProduct(prod)}
                      className="font-['Chronicle_Display_Roman'] text-base text-black font-normal line-clamp-2 hover:text-stone-600 cursor-pointer"
                    >
                      {prod.name}
                    </h3>
                    <p className="text-xs text-stone-600 font-light line-clamp-2">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3 mt-4">
                    <span className="font-['Chronicle_Display_Roman'] text-sm font-normal text-black">
                      Price On Request
                    </span>
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="bg-black text-white hover:bg-stone-800 text-[11px] uppercase tracking-wider font-semibold px-4 py-2 cursor-pointer"
                    >
                      Private View
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bespoke Atelier Banner */}
            <div className="mt-16 bg-[#031A2A] text-white p-8 sm:p-14 text-center rounded-none space-y-4">
              <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.3em] text-[#FBBC93]">
                BESPOKE COMMISSIONS
              </span>
              <h2 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-4xl font-normal uppercase">
                Create a One-of-a-Kind Heirloom
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
                Consult personally with Sandeep Narang to design a family heirloom or curate rare investment-grade diamonds.
              </p>
              <button
                onClick={() => setAppointmentModalOpen(true)}
                className="bg-[#FBBC93] hover:bg-white text-[#031A2A] font-semibold text-xs uppercase tracking-widest px-8 py-3.5 transition-colors cursor-pointer"
              >
                Schedule Bespoke Consultation
              </button>
            </div>
          </div>
        )}

        {/* SHOP CATALOGUE / COLLECTION VIEW */}
        {activeTab === 'shop' && (
          <div className="max-w-[1536px] mx-auto px-6 sm:px-12 py-10 sm:py-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
              <div>
                <button
                  onClick={() => setActiveTab('home')}
                  className="text-xs text-stone-500 hover:text-black flex items-center gap-1 mb-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Return to Home</span>
                </button>
                <h1 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-3xl font-normal text-black uppercase tracking-wide">
                  {activeCategoryFilter === 'all'
                    ? 'All Fine Jewellery'
                    : `${activeCategoryFilter.replace('_', ' ')} Collection`}
                  {activeSubCatFilter ? ` · ${activeSubCatFilter}` : ''}
                </h1>
                <p className="text-xs text-stone-500 mt-0.5">
                  Showing {displayedProducts.length} certified masterpieces
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { key: 'all', label: 'All' },
                  { key: 'high_jewellery', label: 'High Jewellery' },
                  { key: 'diamond', label: 'Diamond' },
                  { key: 'gold', label: 'Gold' },
                  { key: 'polki', label: 'Polki' },
                  { key: 'mens', label: "Men's" },
                  { key: 'engagement', label: 'Engagement' }
                ].map(c => (
                  <button
                    key={c.key}
                    onClick={() => {
                      setActiveCategoryFilter(c.key);
                      setActiveSubCatFilter(null);
                    }}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeCategoryFilter === c.key
                        ? 'bg-black text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedProducts.map(prod => (
                <div
                  key={prod.id}
                  className="group bg-white border border-stone-200 p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden bg-stone-50 mb-3">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {prod.badge && (
                      <span className="absolute top-2 left-2 bg-black text-white text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold">
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] text-stone-400 font-mono">
                      SKU: {prod.sku}
                    </span>
                    <h4
                      onClick={() => setSelectedProduct(prod)}
                      className="font-['Chronicle_Display_Roman'] text-sm text-black font-normal line-clamp-2 hover:text-stone-600 cursor-pointer"
                    >
                      {prod.name}
                    </h4>
                    <div className="text-xs font-semibold text-black pt-1">
                      {prod.price ? `₹${prod.price.toLocaleString()}` : 'Price On Request'}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 mt-3">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="text-[11px] text-stone-500 hover:text-black uppercase tracking-wider underline cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleAddToCart(prod)}
                      className="bg-black hover:bg-stone-800 text-white text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 transition-colors cursor-pointer"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HOUSE OF HAZOORILAL HERITAGE VIEW */}
        {activeTab === 'house' && (
          <div className="max-w-[1536px] mx-auto px-6 sm:px-12 py-14 sm:py-20 font-['Open_Sans']">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
              <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.3em] text-[#5B5B5B]">
                FOUNDED IN 1952
              </span>
              <h1 className="font-['Chronicle_Display_Roman'] text-3xl sm:text-5xl font-normal text-black uppercase">
                House of Hazoorilal
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Seven decades of setting benchmarks in Indian fine jewellery, couture diamond craftsmanship, and timeless family trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
              <div className="aspect-[4/3] bg-stone-100 overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80"
                  alt="Sandeep Narang Atelier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.24em] text-stone-400">
                  OUR PHILOSOPHY
                </span>
                <h2 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-3xl font-normal text-black uppercase">
                  By Sandeep Narang
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  Steering the vision of Hazoorilal Jewellers, Sandeep Narang has infused classical Indian heritage with international high jewellery aesthetics. Every gemstone is selected for its soul, fire, and pedigree.
                </p>
                <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-stone-50 border border-stone-200">
                    <strong className="block text-black font-semibold mb-1">70+ Years</strong>
                    <span className="text-stone-500">Uncompromised excellence in Indian jewellery</span>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-200">
                    <strong className="block text-black font-semibold mb-1">4 Luxury Salons</strong>
                    <span className="text-stone-500">New Delhi & Gurugram destinations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="max-w-3xl mx-auto pt-8 border-t border-stone-200">
              <h3 className="font-['Chronicle_Display_Roman'] text-2xl font-normal text-black text-center mb-8 uppercase">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {HAZOORILAL_FAQS.map((faq, i) => (
                  <details key={i} className="group p-4 bg-stone-50 border border-stone-200 cursor-pointer">
                    <summary className="font-semibold text-xs sm:text-sm text-stone-900 flex items-center justify-between list-none">
                      <span>{faq.q}</span>
                      <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-xs text-stone-600 font-light leading-relaxed mt-3 pt-3 border-t border-stone-200">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* OUR STORES VIEW */}
        {activeTab === 'stores' && (
          <div className="max-w-[1536px] mx-auto px-6 sm:px-12 py-14 sm:py-20 font-['Open_Sans']">
            <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
              <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.3em] text-[#5B5B5B]">
                EXPERIENCE SUITES
              </span>
              <h1 className="font-['Chronicle_Display_Roman'] text-3xl sm:text-5xl font-normal text-black uppercase">
                Our Showrooms & Salons
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Step inside our flagship locations in New Delhi and Gurugram to experience our high jewellery collections in an intimate setting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HAZOORILAL_STORES.map(store => (
                <div key={store.id} className="border border-stone-200 bg-white p-5 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="aspect-[4/3] bg-stone-100 overflow-hidden mb-4">
                      <img src={store.imageUrl} alt={store.name} className="w-full h-full object-cover" />
                    </div>
                    {store.badge && (
                      <span className="bg-black text-white text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold inline-block mb-2">
                        {store.badge}
                      </span>
                    )}
                    <h3 className="font-['Chronicle_Display_Roman'] text-base font-normal text-black mb-2">
                      {store.name}
                    </h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                      {store.address}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
                    <div className="text-stone-500">
                      <strong>Hours:</strong> {store.timings}
                    </div>
                    <div className="text-stone-500">
                      <strong>Phone:</strong> {store.phone}
                    </div>
                    <button
                      onClick={() => {
                        setSelectedStoreForAppointment(store.id);
                        setAppointmentModalOpen(true);
                      }}
                      className="w-full bg-black hover:bg-stone-800 text-white py-2.5 text-xs uppercase tracking-widest font-semibold transition-colors mt-2 cursor-pointer"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ENGAGEMENT & DIAMOND GUIDES VIEW */}
        {activeTab === 'guide' && (
          <div className="max-w-[1536px] mx-auto px-6 sm:px-12 py-14 sm:py-20 font-['Open_Sans']">
            <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
              <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.3em] text-[#5B5B5B]">
                KNOW YOUR DIAMOND
              </span>
              <h1 className="font-['Chronicle_Display_Roman'] text-3xl sm:text-5xl font-normal text-black uppercase">
                The Guide to Diamonds & Engagement
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                An authoritative handbook on the 4Cs, solitaire proportions, and selecting the perfect ring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-xs leading-relaxed text-stone-700">
              <div className="p-6 bg-stone-50 border border-stone-200 space-y-3">
                <h3 className="font-['Chronicle_Display_Roman'] text-lg font-normal text-black uppercase">
                  1. The 4Cs of Diamond Selection
                </h3>
                <p>
                  <strong>Cut:</strong> The single most important factor determining brilliance. At Hazoorilal, only diamonds with 'Triple Excellent' cut grades are selected.
                </p>
                <p>
                  <strong>Color:</strong> From completely colorless D-grade stones through pristine F-grade diamonds with maximum fire.
                </p>
                <p>
                  <strong>Clarity:</strong> Selected between FL (Flawless), VVS1, and VVS2, ensuring no eye-visible inclusions.
                </p>
                <p>
                  <strong>Carat:</strong> Precise carat calibration to optimize finger coverage and structural security.
                </p>
              </div>

              <div className="p-6 bg-stone-50 border border-stone-200 space-y-3">
                <h3 className="font-['Chronicle_Display_Roman'] text-lg font-normal text-black uppercase">
                  2. Choosing Your Solitaire Shape
                </h3>
                <p>
                  <strong>Round Brilliant:</strong> Maximizes light reflection through 57 ideal facets.
                </p>
                <p>
                  <strong>Oval & Pear:</strong> Elongates the finger gracefully, creating dramatic high-glamour impact.
                </p>
                <p>
                  <strong>Emerald & Radiant:</strong> Architectural step-cut facets exuding vintage deco royalty.
                </p>
                <button
                  onClick={() => setAppointmentModalOpen(true)}
                  className="mt-3 inline-block bg-black text-white px-5 py-2 uppercase tracking-widest text-[11px] font-semibold"
                >
                  Consult Solitaire Specialist →
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 3. FOOTER */}
      <HazoorilalFooter
        onNavigate={handleSelectNav}
        onOpenAppointment={() => setAppointmentModalOpen(true)}
      />

      {/* 4. MODALS */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        selectedStoreId={selectedStoreForAppointment}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenAppointment={() => setAppointmentModalOpen(true)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={HAZOORILAL_PRODUCTS}
        onSelectProduct={p => setSelectedProduct(p)}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenAppointment={() => {
          setCartDrawerOpen(false);
          setAppointmentModalOpen(true);
        }}
      />

      {/* Floating WhatsApp and Appointment Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <button
          onClick={() => setAppointmentModalOpen(true)}
          className="w-12 h-12 rounded-full bg-black hover:bg-stone-800 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105 cursor-pointer"
          title="Book Private Viewing"
        >
          <Calendar className="w-5 h-5 text-[#FBBC93]" />
        </button>
        <a
          href="https://api.whatsapp.com/send?phone=919811223344&text=Hello"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105"
          title="WhatsApp Concierge"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* REFERENCE SITE SWITCHER (Allows user to preview all 46 demo sites) */}
      <ReferenceSiteSwitcher currentSiteId="hazoorilal-jewellers" />
    </div>
  );
};
