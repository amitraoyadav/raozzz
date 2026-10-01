import React, { useState, useMemo, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Video,
  Heart,
  ShoppingBag,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowRight,
  Search,
  Filter,
  Eye,
  TrendingUp,
  Share2
} from 'lucide-react';
import { KrishnaHeader } from './KrishnaHeader';
import { KrishnaFooter } from './KrishnaFooter';
import {
  ProductDetailModal,
  VideoCallModal,
  GoldRateModal,
  SearchModal,
  CartDrawer,
  WishlistDrawer,
  ArticleModal,
  LoginModal
} from './KrishnaModals';
import {
  KRISHNA_PRODUCTS,
  KRISHNA_CATEGORIES_GOLD,
  KRISHNA_CATEGORIES_DIAMOND,
  KRISHNA_CATEGORIES_KUNDAN,
  KRISHNA_CATEGORIES_POLKI,
  KRISHNA_CATEGORIES_SILVER,
  KRISHNA_SHOP_EVENTS,
  KRISHNA_JOURNAL_ARTICLES,
  KRISHNA_SHOWROOM_STORES,
  KrishnaProduct,
  KrishnaBlogArticle,
  GOLD_RATE_TODAY
} from '../../data/krishnaJewellersData';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { useApp } from '../../context/AppContext';

export const KrishnaJewellersApp: React.FC = () => {
  const { setActiveView } = useApp();

  // Navigation and view state
  const [activeTab, setActiveTab] = useState<'home' | 'collection' | 'house' | 'journal'>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedSubCategoryFilter, setSelectedSubCategoryFilter] = useState<string | null>(null);

  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState<{ product: KrishnaProduct; quantity: number }[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['kj-prod-02', 'kj-prod-08']);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<KrishnaProduct | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<KrishnaBlogArticle | null>(null);
  const [videoCallModalOpen, setVideoCallModalOpen] = useState(false);
  const [goldRateModalOpen, setGoldRateModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Hero slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Krishna Leela '26",
      subtitle: "Uncut Polki, Emerald & Diamond Bridal Heirlooms",
      desc: "Handcrafted in 22K gold by hereditary Deccan artisans for the modern South Indian bride.",
      cta: "Explore Collection",
      cat: "polki",
      bgImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85"
    },
    {
      id: 2,
      title: "Auspicious Silver & Pooja Collection",
      subtitle: "Pure 92.5 Sterling Silver Idols, Varalakshmi Faces & Gifting",
      desc: "Devotional sacred artistry designed for generations of festive poojas and prosperity.",
      cta: "Shop Silver Articles",
      cat: "silver",
      bgImage: "https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=1920&q=85"
    }
  ];

  // Auto rotate hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Cart operations
  const handleAddToCart = (product: KrishnaProduct) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: KrishnaProduct; quantity: number }[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  // Wishlist operations
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  // Navigation handler
  const handleSelectNavCategory = (cat: string, subCat?: string) => {
    if (cat === 'all') {
      setActiveTab('home');
      setSelectedCategoryFilter('all');
      setSelectedSubCategoryFilter(null);
    } else if (cat === 'house') {
      setActiveTab('house');
    } else if (cat === 'journal') {
      setActiveTab('journal');
    } else {
      setActiveTab('collection');
      setSelectedCategoryFilter(cat);
      setSelectedSubCategoryFilter(subCat || null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered products for collection page
  const displayedCollectionProducts = useMemo(() => {
    return KRISHNA_PRODUCTS.filter(p => {
      if (selectedCategoryFilter !== 'all' && p.category !== selectedCategoryFilter) {
        return false;
      }
      if (selectedSubCategoryFilter && p.subCategory !== selectedSubCategoryFilter) {
        return false;
      }
      return true;
    });
  }, [selectedCategoryFilter, selectedSubCategoryFilter]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-['Open_Sans',sans-serif] selection:bg-[#543E3A]/20 selection:text-[#543E3A]">
      {/* 1. STICKY HEADER */}
      <KrishnaHeader
        wishlistCount={wishlistIds.length}
        cartCount={totalCartCount}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenRates={() => setGoldRateModalOpen(true)}
        onOpenVideoCall={() => setVideoCallModalOpen(true)}
        onSelectCategory={handleSelectNavCategory}
        activeNavTab={selectedCategoryFilter}
      />

      {/* 2. BODY CONTENT ROUTED BY activeTab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* HERO SLIDESHOW WITH DIAMOND DOTS */}
            <section className="relative overflow-hidden bg-black text-white">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.7/1] w-full min-h-[380px] sm:min-h-[460px]">
                {heroSlides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.bgImage}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent flex items-center">
                      <div className="max-w-[1840px] mx-auto px-6 sm:px-12 w-full">
                        <div className="max-w-xl space-y-3 sm:space-y-4">
                          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-300/30 text-[10px] sm:text-xs font-['Cinzel'] font-bold tracking-[0.2em] uppercase rounded-full">
                            {slide.subtitle}
                          </span>
                          <h1 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider leading-tight text-white">
                            {slide.title}
                          </h1>
                          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
                            {slide.desc}
                          </p>
                          <div className="pt-2 flex items-center gap-4">
                            <button
                              onClick={() => handleSelectNavCategory(slide.cat)}
                              className="bg-[#543E3A] hover:bg-[#3D2C29] text-white px-6 sm:px-8 py-3 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer"
                            >
                              {slide.cta}
                            </button>
                            <button
                              onClick={() => setVideoCallModalOpen(true)}
                              className="border border-white/60 hover:bg-white hover:text-black text-white px-5 sm:px-6 py-3 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
                            >
                              <Video className="w-4 h-4" />
                              <span>Video Call</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Diamond-shaped dot indicators (45deg rotated squares as in reference CSS) */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center gap-3">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 transform rotate-45 transition-all duration-300 cursor-pointer ${
                      currentSlide === idx
                        ? 'bg-[#C99A5C] scale-125 ring-2 ring-white/50'
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={() => setCurrentSlide(prev => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </section>

            {/* CATEGORY SECTION 1: GOLD JEWELLERY */}
            <section className="py-12 sm:py-16 bg-white border-b border-stone-100">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                  <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] tracking-wider uppercase mb-2">
                    Gold Jewellery
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 font-['Open_Sans']">
                    Temple, antique and everyday designs in BIS hallmarked 22K gold
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-6">
                  {KRISHNA_CATEGORIES_GOLD.map(cat => (
                    <div
                      key={cat.id}
                      onClick={() => handleSelectNavCategory('gold', cat.name)}
                      className="group cursor-pointer flex flex-col items-center text-center"
                    >
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-stone-200 group-hover:border-[#543E3A] transition-all p-1 bg-stone-50 group-hover:shadow-md mb-2.5">
                        <img
                          src={cat.imageUrl}
                          alt={cat.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-['Cinzel'] font-bold text-[11px] sm:text-xs text-[#543E3A] group-hover:text-[#C99A5C] transition-colors uppercase tracking-wider">
                        {cat.name}
                      </h3>
                      <span className="text-[10px] text-stone-500 font-mono mt-0.5">
                        {cat.count} Designs
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CATEGORY SECTION 2: DIAMOND JEWELLERY */}
            <section className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-stone-100">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                  <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] tracking-wider uppercase mb-2">
                    Diamond Jewellery
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 font-['Open_Sans']">
                    Diamond necklaces, earrings and rings for every celebration
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                  {KRISHNA_CATEGORIES_DIAMOND.map(cat => (
                    <div
                      key={cat.id}
                      onClick={() => handleSelectNavCategory('diamond', cat.name)}
                      className="group cursor-pointer flex flex-col items-center text-center bg-white p-3.5 rounded-2xl border border-stone-200/70 hover:border-[#543E3A]/40 transition-all hover:shadow-sm"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-stone-200 group-hover:border-[#543E3A] transition-all p-1 bg-stone-50 mb-2">
                        <img
                          src={cat.imageUrl}
                          alt={cat.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="font-['Cinzel'] font-bold text-[11px] text-[#543E3A] group-hover:text-[#C99A5C] transition-colors uppercase tracking-wider">
                        {cat.name}
                      </h3>
                      <span className="text-[10px] text-stone-500 font-mono mt-0.5">
                        {cat.count} Items
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* BRIDAL JEWELLERY EDITORIAL SECTION */}
            <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-lg border border-stone-200">
                  <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto">
                    <img
                      src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1400&q=85"
                      alt="Bridal Jewellery Collection"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-['Cinzel'] font-bold tracking-widest text-[#543E3A] uppercase">
                      Bridal Heirlooms '26
                    </div>
                  </div>

                  <div className="lg:col-span-4 p-8 sm:p-12 bg-[#F5F5F5] flex flex-col justify-center text-center items-center font-['Open_Sans']">
                    <span className="font-['Cinzel'] text-xs font-bold tracking-[0.24em] text-[#876D68] uppercase mb-2">
                      Royal South Indian Wedding
                    </span>
                    <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] mb-4">
                      BRIDAL JEWELLERY
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                      Handcrafted heirlooms to make your wedding day unforgettable. Explore bridal sets, haaram, guttapusalu, and temple jewellery designed for the modern bride.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                      <button
                        onClick={() => handleSelectNavCategory('bridal')}
                        className="flex-1 bg-[#543E3A] hover:bg-[#3D2C29] text-white py-3 px-6 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Explore Now
                      </button>
                      <button
                        onClick={() => setVideoCallModalOpen(true)}
                        className="flex-1 border border-[#543E3A] text-[#543E3A] hover:bg-[#543E3A] hover:text-white py-3 px-4 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Book Video Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CATEGORY SECTION 3: KUNDAN & POLKI JEWELLERY TABS */}
            <section className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-stone-100">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                {/* Kundan Header */}
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] tracking-wider uppercase mb-2">
                    Kundan Jewellery
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Regal kundan sets for weddings and festive occasions
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-14">
                  {KRISHNA_CATEGORIES_KUNDAN.map(cat => (
                    <div
                      key={cat.id}
                      onClick={() => handleSelectNavCategory('kundan', cat.name)}
                      className="group cursor-pointer flex flex-col items-center text-center bg-white p-3 rounded-2xl border border-stone-200/70 hover:border-[#543E3A] transition-all hover:shadow-sm"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden border border-stone-200 group-hover:border-[#543E3A] transition-all p-1 bg-stone-50 mb-2">
                        <img
                          src={cat.imageUrl}
                          alt={cat.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="font-['Cinzel'] font-bold text-[11px] text-[#543E3A] group-hover:text-[#C99A5C] uppercase tracking-wider">
                        {cat.name}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Polki Header */}
                <div className="text-center max-w-2xl mx-auto mb-8 pt-4 border-t border-stone-200/60">
                  <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] tracking-wider uppercase mb-2">
                    Polki Jewellery
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Uncut diamond heirlooms, handcrafted for brides
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
                  {KRISHNA_CATEGORIES_POLKI.map(cat => (
                    <div
                      key={cat.id}
                      onClick={() => handleSelectNavCategory('polki', cat.name)}
                      className="group cursor-pointer flex flex-col items-center text-center bg-white p-3 rounded-2xl border border-stone-200/70 hover:border-[#543E3A] transition-all hover:shadow-sm"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden border border-stone-200 group-hover:border-[#543E3A] transition-all p-1 bg-stone-50 mb-2">
                        <img
                          src={cat.imageUrl}
                          alt={cat.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="font-['Cinzel'] font-bold text-[11px] text-[#543E3A] group-hover:text-[#C99A5C] uppercase tracking-wider">
                        {cat.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CATEGORY SECTION 4: SILVER ARTICLES */}
            <section className="py-12 sm:py-16 bg-white border-b border-stone-100">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                  <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] tracking-wider uppercase mb-2">
                    Silver Articles
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Silver idols, pooja items and gifts for every occasion
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                  {KRISHNA_CATEGORIES_SILVER.map(cat => (
                    <div
                      key={cat.id}
                      onClick={() => handleSelectNavCategory('silver', cat.name)}
                      className="group cursor-pointer flex flex-col items-center text-center p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-[#543E3A] hover:bg-white transition-all hover:shadow-md"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden border border-stone-200 group-hover:border-[#543E3A] p-1 bg-white mb-3">
                        <img
                          src={cat.imageUrl}
                          alt={cat.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="font-['Cinzel'] font-bold text-xs text-[#543E3A] group-hover:text-[#C99A5C] uppercase tracking-wider">
                        {cat.name}
                      </h3>
                      <span className="text-[10px] text-stone-500 font-mono mt-1">
                        {cat.count} Designs
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SHOP BY EVENTS SECTION */}
            <section className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-stone-100">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                  <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] tracking-wider uppercase mb-2">
                    SHOP BY EVENTS
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Handpicked fine jewellery tailored for life's unforgettable milestones
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {KRISHNA_SHOP_EVENTS.map(ev => (
                    <div
                      key={ev.id}
                      onClick={() => handleSelectNavCategory('all')}
                      className="group relative rounded-2xl overflow-hidden shadow-md aspect-[3/4] cursor-pointer"
                    >
                      <img
                        src={ev.imageUrl}
                        alt={ev.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white text-center">
                        <span className="text-[10px] font-['Cinzel'] font-bold uppercase tracking-widest text-amber-300 mb-1">
                          {ev.tag}
                        </span>
                        <h3 className="font-['Cinzel'] text-xl font-bold tracking-wider mb-1">
                          {ev.title}
                        </h3>
                        <p className="text-xs text-stone-300 font-light line-clamp-2">
                          {ev.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* VIDEO CALL BANNER SECTION */}
            <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-stone-50">
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center text-center lg:text-left items-center lg:items-start font-['Open_Sans']">
                    <span className="font-['Cinzel'] text-xs font-bold tracking-[0.24em] text-[#876D68] uppercase mb-2">
                      Live Concierge Shopping
                    </span>
                    <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] mb-4">
                      VIDEO CALL SHOPPING
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                      See the pieces up close before you decide. Our consultants will show you the collection live, answer your questions, and hold what you like.
                    </p>
                    <button
                      onClick={() => setVideoCallModalOpen(true)}
                      className="bg-[#543E3A] hover:bg-[#3D2C29] text-white py-3.5 px-8 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md flex items-center gap-2"
                    >
                      <Video className="w-4 h-4" />
                      <span>Book a Video Call</span>
                    </button>
                  </div>

                  <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto">
                    <img
                      src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
                      alt="Video Call Shopping"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* THE HOUSE OF KRISHNA JEWELLERS SECTION */}
            <section className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-stone-200">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white">
                  <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto">
                    <img
                      src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80"
                      alt="The House of Krishna Jewellers"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center text-center lg:text-left items-center lg:items-start font-['Open_Sans']">
                    <span className="font-['Cinzel'] text-xs font-bold tracking-[0.24em] text-[#876D68] uppercase mb-2">
                      Hyderabad Legacy · Estd 1983
                    </span>
                    <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] mb-4">
                      The House of Krishna Jewellers
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                      A gateway to everything we offer — our showrooms, our services, and the people who have been making jewellery here since 1983.
                    </p>
                    <button
                      onClick={() => setActiveTab('house')}
                      className="bg-[#543E3A] hover:bg-[#3D2C29] text-white py-3.5 px-8 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                    >
                      Explore the House
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* NEW ARRIVALS PRODUCT GRID */}
            <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                  <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] tracking-wider uppercase mb-2">
                    New Arrivals
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Every weekday brings something new to the collection. Come see what's just in.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {KRISHNA_PRODUCTS.slice(0, 8).map(prod => (
                    <div
                      key={prod.id}
                      className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="relative aspect-square overflow-hidden bg-stone-50">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {prod.badge && (
                          <span className="absolute top-3 left-3 bg-[#543E3A] text-white text-[10px] font-['Cinzel'] font-bold px-2.5 py-0.5 rounded-full uppercase">
                            {prod.badge}
                          </span>
                        )}

                        <button
                          onClick={() => handleToggleWishlist(prod.id)}
                          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer ${
                            wishlistIds.includes(prod.id)
                              ? 'bg-rose-50 text-rose-600'
                              : 'bg-white/80 text-stone-600 hover:bg-white'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${wishlistIds.includes(prod.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      <div className="p-4 flex flex-col flex-1 justify-between font-['Open_Sans']">
                        <div>
                          <div className="text-[10px] font-['Cinzel'] font-semibold tracking-wider text-[#876D68] uppercase mb-1">
                            {prod.metal} · {prod.subCategory}
                          </div>
                          <h3
                            onClick={() => setSelectedProduct(prod)}
                            className="font-['Cinzel'] font-bold text-xs sm:text-sm text-[#543E3A] hover:text-[#C99A5C] cursor-pointer line-clamp-2 leading-snug mb-2"
                          >
                            {prod.name}
                          </h3>
                        </div>

                        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                          <div>
                            {prod.price ? (
                              <span className="font-['Cinzel'] font-bold text-sm text-[#543E3A]">
                                ₹{prod.price.toLocaleString()}
                              </span>
                            ) : (
                              <span className="text-[11px] font-semibold text-[#876D68]">
                                Price on Request
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => setSelectedProduct(prod)}
                              className="p-2 text-stone-500 hover:text-[#543E3A] hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                              title="Quick View"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleAddToCart(prod)}
                              className="px-3 py-1.5 bg-[#543E3A] hover:bg-[#3D2C29] text-white text-[11px] font-['Cinzel'] font-bold uppercase rounded-lg transition-colors cursor-pointer"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <button
                    onClick={() => handleSelectNavCategory('all')}
                    className="border-2 border-[#543E3A] text-[#543E3A] hover:bg-[#543E3A] hover:text-white px-8 py-3 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    View All New Arrivals ({KRISHNA_PRODUCTS.length} Designs)
                  </button>
                </div>
              </div>
            </section>

            {/* THE KRISHNA JOURNAL (BLOG) SECTION */}
            <section className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-stone-200">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                  <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] tracking-wider uppercase mb-2">
                    The Krishna Journal
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Jewellery, heritage and the meaning behind what you wear.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {KRISHNA_JOURNAL_ARTICLES.map(art => (
                    <div
                      key={art.id}
                      onClick={() => setSelectedArticle(art)}
                      className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                        <img
                          src={art.imageUrl}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1 justify-between font-['Open_Sans']">
                        <div>
                          <span className="text-[10px] font-['Cinzel'] font-bold uppercase tracking-wider text-amber-800">
                            {art.category}
                          </span>
                          <h3 className="font-['Cinzel'] font-bold text-sm text-[#543E3A] group-hover:text-[#C99A5C] transition-colors mt-1 mb-2 line-clamp-2">
                            {art.title}
                          </h3>
                          <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                            {art.excerpt}
                          </p>
                        </div>
                        <div className="text-[11px] text-[#543E3A] font-semibold flex items-center gap-1 group-hover:underline">
                          <span>Read Full Story</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4 TRUST BADGES IN #ece5e3 BOXES */}
            <section className="py-10 bg-white border-b border-stone-100">
              <div className="max-w-[1840px] mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                  <div className="bg-[#ECE5E3] p-4 sm:p-6 rounded-2xl border border-[#543E3A]/20 text-center flex flex-col items-center justify-center">
                    <Award className="w-8 h-8 text-[#543E3A] mb-2" />
                    <h3 className="font-['Cinzel'] font-bold text-xs sm:text-sm text-[#543E3A] uppercase tracking-wider">
                      42+ Years of Trust
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1">Estd 1983 in Hyderabad</p>
                  </div>

                  <div className="bg-[#ECE5E3] p-4 sm:p-6 rounded-2xl border border-[#543E3A]/20 text-center flex flex-col items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[#543E3A] mb-2" />
                    <h3 className="font-['Cinzel'] font-bold text-xs sm:text-sm text-[#543E3A] uppercase tracking-wider">
                      Lifetime Exchange
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1">Guaranteed buyback liquidity</p>
                  </div>

                  <div className="bg-[#ECE5E3] p-4 sm:p-6 rounded-2xl border border-[#543E3A]/20 text-center flex flex-col items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-[#543E3A] mb-2" />
                    <h3 className="font-['Cinzel'] font-bold text-xs sm:text-sm text-[#543E3A] uppercase tracking-wider">
                      Free Insured Shipping
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1">Direct to your doorstep</p>
                  </div>

                  <div className="bg-[#ECE5E3] p-4 sm:p-6 rounded-2xl border border-[#543E3A]/20 text-center flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#543E3A] mb-2" />
                    <h3 className="font-['Cinzel'] font-bold text-xs sm:text-sm text-[#543E3A] uppercase tracking-wider">
                      7 Day Refund Policy
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1">Hassle-free return policy</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* COLLECTION / CATEGORY BROWSE PAGE */}
        {activeTab === 'collection' && (
          <div className="max-w-[1840px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
            {/* Header & Filter Breadcrumb */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
              <div>
                <button
                  onClick={() => setActiveTab('home')}
                  className="text-xs text-stone-500 hover:text-[#543E3A] flex items-center gap-1 mb-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] uppercase tracking-wide">
                  {selectedCategoryFilter.toUpperCase()} JEWELLERY
                  {selectedSubCategoryFilter ? ` · ${selectedSubCategoryFilter}` : ''}
                </h1>
                <p className="text-xs text-stone-500 font-['Open_Sans'] mt-0.5">
                  Showing {displayedCollectionProducts.length} verified handcrafted designs
                </p>
              </div>

              {/* Category selector pills */}
              <div className="flex flex-wrap items-center gap-2">
                {['all', 'gold', 'diamond', 'kundan', 'polki', 'silver', 'coins'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategoryFilter(cat);
                      setSelectedSubCategoryFilter(null);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-['Cinzel'] font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                      selectedCategoryFilter === cat
                        ? 'bg-[#543E3A] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            {displayedCollectionProducts.length === 0 ? (
              <div className="text-center py-20 bg-stone-50 rounded-2xl">
                <p className="font-['Cinzel'] text-base font-bold text-[#543E3A]">
                  No pieces currently matching this specific filter
                </p>
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('all');
                    setSelectedSubCategoryFilter(null);
                  }}
                  className="mt-3 px-6 py-2 bg-[#543E3A] text-white text-xs font-bold rounded-xl"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedCollectionProducts.map(prod => (
                  <div
                    key={prod.id}
                    className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="relative aspect-square overflow-hidden bg-stone-50">
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {prod.badge && (
                        <span className="absolute top-3 left-3 bg-[#543E3A] text-white text-[10px] font-['Cinzel'] font-bold px-2.5 py-0.5 rounded-full uppercase">
                          {prod.badge}
                        </span>
                      )}

                      <button
                        onClick={() => handleToggleWishlist(prod.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer ${
                          wishlistIds.includes(prod.id)
                            ? 'bg-rose-50 text-rose-600'
                            : 'bg-white/80 text-stone-600 hover:bg-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${wishlistIds.includes(prod.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <div className="p-4 flex flex-col flex-1 justify-between font-['Open_Sans']">
                      <div>
                        <div className="text-[10px] font-['Cinzel'] font-semibold tracking-wider text-[#876D68] uppercase mb-1">
                          {prod.metal} · {prod.subCategory}
                        </div>
                        <h3
                          onClick={() => setSelectedProduct(prod)}
                          className="font-['Cinzel'] font-bold text-xs sm:text-sm text-[#543E3A] hover:text-[#C99A5C] cursor-pointer line-clamp-2 leading-snug mb-2"
                        >
                          {prod.name}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                        <div>
                          {prod.price ? (
                            <span className="font-['Cinzel'] font-bold text-sm text-[#543E3A]">
                              ₹{prod.price.toLocaleString()}
                            </span>
                          ) : (
                            <span className="text-[11px] font-semibold text-[#876D68]">
                              Price on Request
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setSelectedProduct(prod)}
                            className="p-2 text-stone-500 hover:text-[#543E3A] hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                            title="Quick View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleAddToCart(prod)}
                            className="px-3 py-1.5 bg-[#543E3A] hover:bg-[#3D2C29] text-white text-[11px] font-['Cinzel'] font-bold uppercase rounded-lg transition-colors cursor-pointer"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* THE HOUSE OF KRISHNA JEWELLERS DEDICATED VIEW */}
        {activeTab === 'house' && (
          <div className="max-w-[1840px] mx-auto px-4 sm:px-8 py-12 sm:py-16 font-['Open_Sans']">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="font-['Cinzel'] text-xs font-bold uppercase tracking-[0.24em] text-[#876D68]">
                Since 1983 · 42+ Years of Royal Heritage
              </span>
              <h1 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold text-[#543E3A] mt-2 mb-4">
                The House of Krishna Jewellers
              </h1>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                Founded in Hyderabad with a commitment to pure gold, master temple craftsmanship, and authentic Deccan artistry. Over four decades, we have adorned royal weddings, cultural ceremonies, and families worldwide.
              </p>
            </div>

            {/* Showroom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {KRISHNA_SHOWROOM_STORES.map(store => (
                <div
                  key={store.id}
                  className="p-6 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col justify-between"
                >
                  <div>
                    {store.isFlagship && (
                      <span className="inline-block px-2.5 py-0.5 bg-[#543E3A] text-white text-[10px] font-['Cinzel'] font-bold uppercase rounded-full mb-3">
                        Flagship Showroom
                      </span>
                    )}
                    <h3 className="font-['Cinzel'] text-lg font-bold text-[#543E3A] mb-2">
                      {store.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {store.address}, {store.city}, {store.state} - {store.pincode}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-1.5">
                    <div><strong>Timings:</strong> {store.timings}</div>
                    <div><strong>Phone:</strong> {store.phone}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#ECE5E3]/60 p-8 sm:p-12 rounded-3xl border border-[#543E3A]/20 text-center">
              <div>
                <Award className="w-10 h-10 text-[#543E3A] mx-auto mb-3" />
                <h3 className="font-['Cinzel'] font-bold text-lg text-[#543E3A] mb-2">
                  100% BIS Hallmarked
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Every 22K, 18K and 14K piece is stamped with the Bureau of Indian Standards hallmark and unique laser HUID code.
                </p>
              </div>

              <div>
                <Sparkles className="w-10 h-10 text-[#543E3A] mx-auto mb-3" />
                <h3 className="font-['Cinzel'] font-bold text-lg text-[#543E3A] mb-2">
                  Deccan Craft Legacy
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Preserving centuries-old Nakshi repoussé and Jadau polki techniques handed down through generations of goldsmiths.
                </p>
              </div>

              <div>
                <Video className="w-10 h-10 text-[#543E3A] mx-auto mb-3" />
                <h3 className="font-['Cinzel'] font-bold text-lg text-[#543E3A] mb-2">
                  Worldwide Concierge
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Dedicated video consultations and fully insured international shipping for clients in USA, Canada, UK, and UAE.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* JOURNAL / BLOG DEDICATED VIEW */}
        {activeTab === 'journal' && (
          <div className="max-w-[1840px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="font-['Cinzel'] text-xs font-bold uppercase tracking-[0.24em] text-[#876D68]">
                Essays & Heritage Guides
              </span>
              <h1 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold text-[#543E3A] mt-2 mb-4">
                The Krishna Journal
              </h1>
              <p className="text-sm text-stone-600 font-['Open_Sans']">
                Explore the craft, history, and styling secrets behind iconic South Indian jewellery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {KRISHNA_JOURNAL_ARTICLES.map(art => (
                <div
                  key={art.id}
                  onClick={() => setSelectedArticle(art)}
                  className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between font-['Open_Sans']">
                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                        <span className="font-['Cinzel'] font-bold text-amber-800 uppercase">
                          {art.category}
                        </span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="font-['Cinzel'] font-bold text-lg text-[#543E3A] group-hover:text-[#C99A5C] transition-colors mb-2 leading-snug">
                        {art.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-4">
                        {art.excerpt}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-[#543E3A] flex items-center gap-1 group-hover:underline">
                      <span>Read Story</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 3. FOOTER */}
      <KrishnaFooter
        onNavigate={handleSelectNavCategory}
        onOpenVideoCall={() => setVideoCallModalOpen(true)}
        onOpenRates={() => setGoldRateModalOpen(true)}
      />

      {/* 4. MODALS & DRAWERS */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onOpenVideoCall={() => setVideoCallModalOpen(true)}
      />

      <VideoCallModal
        isOpen={videoCallModalOpen}
        onClose={() => setVideoCallModalOpen(false)}
      />

      <GoldRateModal
        isOpen={goldRateModalOpen}
        onClose={() => setGoldRateModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={KRISHNA_PRODUCTS}
        onSelectProduct={prod => setSelectedProduct(prod)}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
      />

      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        wishlistIds={wishlistIds}
        products={KRISHNA_PRODUCTS}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      {/* Floating Call & Video Call Quick Actions */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <button
          onClick={() => setVideoCallModalOpen(true)}
          className="w-12 h-12 rounded-full bg-[#543E3A] hover:bg-[#3D2C29] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
          title="Schedule Video Call Shopping"
        >
          <Video className="w-5 h-5 text-amber-300" />
        </button>
        <a
          href="tel:8499011111"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          title="Call Showroom"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* REFERENCE SITE SWITCHER (Allows jumping between all 45 demo sites) */}
      <ReferenceSiteSwitcher currentSiteId="krishna-jewellers" />
    </div>
  );
};
