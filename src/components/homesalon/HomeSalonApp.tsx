import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Search,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Shield,
  Star,
  ShoppingBag,
  ArrowRight,
  Phone,
  MessageSquare,
  Gift,
  ChevronDown,
  ChevronRight,
  X,
  Plus,
  Minus,
  Check,
  Percent,
  Heart,
  HelpCircle,
  Share2,
  Copy,
  ThumbsUp,
  Tag,
  AlertCircle
} from 'lucide-react';
import {
  HOME_SALON_CATEGORIES,
  HOME_SALON_SERVICES,
  HOME_SALON_PROMOS,
  HOME_SALON_SAFETY_POINTS,
  HOME_SALON_REVIEWS,
  HOME_SALON_FAQS,
  MUMBAI_LOCALITIES,
  AVAILABLE_CITIES,
  HomeSalonService
} from '../../data/homeSalonData';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { useApp } from '../../context/AppContext';

export const HomeSalonApp: React.FC = () => {
  const { setActiveView } = useApp();

  // State Management
  const [selectedCity, setSelectedCity] = useState<string>('Mumbai');
  const [selectedLocality, setSelectedLocality] = useState<string>('Bandra West & East');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Cart state: Record<serviceId, quantity>
  const [cart, setCart] = useState<Record<string, number>>({
    'pkg-head-to-toe': 1
  });
  
  // Modals
  const [isCityModalOpen, setIsCityModalOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [isReferModalOpen, setIsReferModalOpen] = useState<boolean>(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<HomeSalonService | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<string>('MUMBAI50');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Booking Form State
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, Oct 1st');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM - 12:00 PM');
  const [bookingName, setBookingName] = useState<string>('Priya Sharma');
  const [bookingPhone, setBookingPhone] = useState<string>('9820123456');
  const [bookingAddress, setBookingAddress] = useState<string>('Flat 402, Sea Green Apts, Hill Road');
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [bookingSuccessId, setBookingSuccessId] = useState<string | null>(null);

  // Trigger brief toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add / remove cart
  const addToCart = (serviceId: string) => {
    setCart(prev => ({
      ...prev,
      [serviceId]: (prev[serviceId] || 0) + 1
    }));
    const s = HOME_SALON_SERVICES.find(srv => srv.id === serviceId);
    showToast(`Added ${s?.name || 'Service'} to Cart`);
  };

  const removeFromCart = (serviceId: string) => {
    setCart(prev => {
      const next = { ...prev };
      if (next[serviceId] > 1) {
        next[serviceId] -= 1;
      } else {
        delete next[serviceId];
      }
      return next;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  // Cart summary calculations
  const cartItems = useMemo(() => {
    return Object.entries(cart).map(([id, qty]) => {
      const service = HOME_SALON_SERVICES.find(s => s.id === id);
      return { service, qty };
    }).filter(item => Boolean(item.service)) as Array<{ service: HomeSalonService; qty: number }>;
  }, [cart]);

  const cartTotalOriginal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.service.originalPrice * item.qty), 0);
  }, [cartItems]);

  const cartTotalDiscounted = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.service.discountedPrice * item.qty), 0);
  }, [cartItems]);

  const couponDiscountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon === 'MUMBAI50') {
      return Math.round(cartTotalDiscounted * 0.5);
    }
    if (appliedCoupon === 'GLOW200') {
      return Math.min(200, cartTotalDiscounted);
    }
    if (appliedCoupon === 'BRIDE1000') {
      return Math.min(1000, cartTotalDiscounted);
    }
    return 0;
  }, [appliedCoupon, cartTotalDiscounted]);

  const finalPayable = Math.max(0, cartTotalDiscounted - couponDiscountAmount);

  // Filtered Services List
  const filteredServices = useMemo(() => {
    return HOME_SALON_SERVICES.filter(service => {
      // Category match
      if (selectedCategory !== 'all' && service.category !== selectedCategory) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = service.name.toLowerCase().includes(q);
        const matchDesc = service.shortDescription.toLowerCase().includes(q);
        const matchCat = service.category.toLowerCase().includes(q);
        const matchDetails = service.details.some(d => d.toLowerCase().includes(q));
        return matchName || matchDesc || matchCat || matchDetails;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Handle final checkout confirmation
  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'HS-MUM-' + Math.floor(10000 + Math.random() * 90000);
    setBookingSuccessId(randomId);
    setBookingStep(3); // confirmation step
  };

  return (
    <div className="min-h-screen bg-[#FFFDFE] text-[#1E1E24] font-['Inter'] selection:bg-pink-100 selection:text-pink-900 pb-20 sm:pb-12">
      {/* 1. Global AI Studio Demo Switcher */}
      <ReferenceSiteSwitcher currentSiteId="home-salon" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-pink-500/30 text-sm animate-bounce">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. Top Promotional Announcement Bar */}
      <div className="bg-gradient-to-r from-[#E91E63] via-[#D81B60] to-[#AD1457] text-white text-xs py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase">
              Mumbai Special
            </span>
            <span className="hidden sm:inline">
              ✨ <strong>Flat 50% OFF</strong> Your First Doorstep Salon Booking! Use Code: <strong>MUMBAI50</strong>
            </span>
            <span className="sm:hidden">
              Flat 50% OFF with Code: <strong>MUMBAI50</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium">
            <a
              href="tel:+919136036036"
              className="flex items-center gap-1 text-pink-100 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">+91 91360 36036</span>
            </a>
            <button
              onClick={() => setIsReferModalOpen(true)}
              className="hidden lg:flex items-center gap-1 text-amber-200 hover:text-white font-bold cursor-pointer"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Refer & Earn ₹200</span>
            </button>
            <button
              onClick={() => setActiveView('home')}
              className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-0.5 rounded-lg transition-colors cursor-pointer text-[10px] font-semibold"
            >
              ← Back to RaoSitez Demos
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Header & Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            
            {/* Left: Brand Logo & Location Dropdown */}
            <div className="flex items-center gap-3 sm:gap-6">
              <a href="#/site/home-salon" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#E91E63] to-[#FF4081] text-white flex items-center justify-center font-bold text-xl shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
                  H
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#1A1A24]">
                      Home<span className="text-[#E91E63]">Salon</span>
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#E91E63] bg-pink-50 px-1.5 py-0.5 rounded-md border border-pink-100">
                      .in
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-400 font-medium hidden sm:block">
                    Salon & Spa at Home · Mumbai
                  </p>
                </div>
              </a>

              {/* City & Locality Selector */}
              <button
                onClick={() => setIsCityModalOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-stone-200 hover:border-pink-300 hover:bg-pink-50/50 transition-all text-xs font-semibold text-stone-700 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#E91E63]" />
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-[#1A1A24] font-bold">{selectedCity}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                  <span className="text-[10px] text-stone-500 block truncate max-w-[120px]">
                    {selectedLocality}
                  </span>
                </div>
              </button>
            </div>

            {/* Middle: Live Search Bar */}
            <div className="flex-1 max-w-md mx-2 hidden sm:block">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Facial, Waxing, Hair Spa, Pedicure..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#E91E63]/30 focus:border-[#E91E63] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsCityModalOpen(true)}
                className="md:hidden p-2 text-stone-600 hover:text-[#E91E63] hover:bg-pink-50 rounded-xl"
                title="Select City"
              >
                <MapPin className="w-5 h-5 text-[#E91E63]" />
              </button>

              <button
                onClick={() => setIsReferModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#E91E63] hover:bg-pink-50 transition-colors cursor-pointer border border-pink-200"
              >
                <Gift className="w-4 h-4 text-[#E91E63]" />
                <span>Refer & Earn</span>
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#E91E63] text-white font-bold text-xs sm:text-sm hover:bg-[#D81B60] transition-all shadow-md shadow-pink-500/20 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
                {cartItems.length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-white text-[#E91E63] text-xs font-black flex items-center justify-center">
                    {cartItems.reduce((acc, i) => acc + i.qty, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="pb-3 sm:hidden">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Facial, Waxing, Hair Spa..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:outline-hidden focus:border-[#E91E63]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 4. Hero Section with Mumbai Context */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FFFDFE] to-white border-b border-pink-100 py-8 sm:py-14">
        {/* Soft background glow circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[#C2185B] text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E91E63]" />
                <span>India's Most Trusted Doorstep Salon in Mumbai</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#1A1A24] tracking-tight leading-[1.15]">
                Salon & Spa at Home <br />
                <span className="text-[#E91E63]">Exclusively for Women</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                Skip the Mumbai traffic and salon waiting times. Certified, background-verified female beauticians deliver factory-sealed mono-dose facials, painless Rica waxing, L'Oréal hair spa, and crystal pedicures right at your home.
              </p>

              {/* Trust Metrics Pill Row */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-700 pt-2">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-xs">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>4.9★ (150K+ Mumbai Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-xs">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>100% Sealed Mono-Dose Kits</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E63]" />
                  <span>Zero Travel Charges</span>
                </div>
              </div>

              {/* Quick Action Button & Current Mumbai Locality Banner */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('services-catalog');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold text-sm shadow-lg shadow-pink-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore 50+ Doorstep Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-pink-50 border border-pink-200 text-xs text-stone-700">
                  <MapPin className="w-4 h-4 text-[#E91E63] shrink-0" />
                  <span>Serving across <strong>45+ Mumbai Localities</strong> today</span>
                </div>
              </div>
            </div>

            {/* Right Visual / Featured Deal Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-pink-100 relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  ⚡ Deal of the Day
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-2xl">
                    💆‍♀️
                  </div>
                  <div>
                    <h3 className="font-black text-base text-[#1A1A24]">
                      Head to Toe Radiance Combo
                    </h3>
                    <p className="text-xs text-stone-500">
                      O3+ Facial + Rica Waxing + Pedicure + Mani + Threading
                    </p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden mb-4 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"
                    alt="Head to Toe Radiance Combo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Duration: 120 Mins</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-[#1A1A24]">₹1,699</span>
                      <span className="text-sm text-stone-400 line-through">₹3,499</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        51% OFF
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      ✓ Includes all mono-dose products & disposable sheets
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      addToCart('pkg-head-to-toe');
                      setIsCartOpen(true);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Promotional Coupon Banners Bar */}
      <section className="bg-stone-50 border-b border-stone-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {HOME_SALON_PROMOS.map((promo, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-center justify-between gap-3 hover:border-pink-300 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-[#E91E63] bg-pink-50 px-2 py-0.5 rounded-md border border-pink-200">
                      {promo.code}
                    </span>
                    <span className="text-xs font-bold text-stone-800">{promo.title}</span>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">{promo.description}</p>
                </div>
                <button
                  onClick={() => {
                    setAppliedCoupon(promo.code);
                    showToast(`Coupon ${promo.code} applied!`);
                  }}
                  className="shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold text-[#E91E63] hover:bg-pink-50 border border-pink-200 cursor-pointer"
                >
                  {appliedCoupon === promo.code ? 'Applied ✓' : 'Apply'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Category Navigation Tabs */}
      <section id="services-catalog" className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {HOME_SALON_CATEGORIES.map(cat => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.slug);
                    setSearchQuery('');
                  }}
                  className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#E91E63] text-white shadow-sm ring-1 ring-[#E91E63]'
                      : 'bg-stone-50 hover:bg-pink-50 text-stone-700 hover:text-[#E91E63] border border-stone-200/80'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  {cat.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-pink-100 text-[#E91E63]'
                    }`}>
                      {cat.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Services Catalog Grid */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1A1A24] flex items-center gap-2">
              <span>
                {selectedCategory === 'all'
                  ? 'All Doorstep Salon Services'
                  : HOME_SALON_CATEGORIES.find(c => c.slug === selectedCategory)?.name || 'Services'}
              </span>
              <span className="text-xs font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                {filteredServices.length} options
              </span>
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Every appointment includes disposable single-use sheets, certified technicians, and sealed product kits.
            </p>
          </div>

          {/* Quick Filter Status / Clear search */}
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#E91E63] hover:underline self-start sm:self-auto cursor-pointer"
            >
              Reset Filters & Show All
            </button>
          )}
        </div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="py-16 text-center bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-pink-50 text-[#E91E63] flex items-center justify-center mx-auto mb-3 text-2xl">
              🔍
            </div>
            <h3 className="font-bold text-base text-[#1A1A24]">No services found</h3>
            <p className="text-xs text-stone-500 mt-1">
              We couldn't find any service matching "{searchQuery}". Try searching for Facial, Waxing, Hair Spa, or Pedicure.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#E91E63] text-white text-xs font-bold"
            >
              Browse All Services
            </button>
          </div>
        )}

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map(service => {
            const qtyInCart = cart[service.id] || 0;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-stone-200/90 hover:border-pink-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative h-44 w-full overflow-hidden bg-stone-100">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                      {service.isBestseller && (
                        <span className="bg-[#E91E63] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs">
                          ★ Bestseller
                        </span>
                      )}
                      {service.discountPercent > 0 && (
                        <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs">
                          {service.discountPercent}% OFF
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{service.durationMinutes} mins</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1 text-[11px] text-amber-600 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{service.rating}</span>
                        <span className="text-stone-400 font-normal">({service.reviewsCount})</span>
                      </div>
                      <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider bg-stone-100 px-2 py-0.5 rounded">
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-[#1A1A24] leading-snug mb-1.5">
                      {service.name}
                    </h3>

                    <p className="text-xs text-stone-500 leading-relaxed line-clamp-2 mb-3">
                      {service.shortDescription}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1 mb-3">
                      {service.details.slice(0, 2).map((detail, dIdx) => (
                        <li key={dIdx} className="text-[11px] text-stone-600 flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedServiceDetail(service)}
                      className="text-[11px] font-bold text-[#E91E63] hover:underline cursor-pointer"
                    >
                      View Details & Steps →
                    </button>
                  </div>
                </div>

                {/* Card Footer: Price & Add to Cart */}
                <div className="p-4 pt-3 border-t border-stone-100 bg-stone-50/50 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-[#1A1A24]">
                        ₹{service.discountedPrice}
                      </span>
                      {service.originalPrice > service.discountedPrice && (
                        <span className="text-xs text-stone-400 line-through">
                          ₹{service.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-emerald-700 font-semibold block">
                      Save ₹{service.originalPrice - service.discountedPrice}
                    </span>
                  </div>

                  {qtyInCart > 0 ? (
                    <div className="flex items-center gap-2 bg-[#E91E63] text-white rounded-xl p-1 shadow-xs">
                      <button
                        onClick={() => removeFromCart(service.id)}
                        className="w-7 h-7 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center font-bold text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-black px-1.5">{qtyInCart}</span>
                      <button
                        onClick={() => addToCart(service.id)}
                        className="w-7 h-7 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center font-bold text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(service.id)}
                      className="px-4 py-2 rounded-xl bg-white border border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white font-bold text-xs transition-colors cursor-pointer shadow-2xs flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Safety & Hygiene Pledge (The Home Salon Guarantee) */}
      <section className="py-12 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#E91E63] uppercase tracking-wider bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
              Your Peace of Mind
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A24] mt-2">
              The Home Salon 4-Point Safety Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              We maintain stricter hygiene standards than brick-and-mortar salons right inside your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOME_SALON_SAFETY_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-50 rounded-2xl p-5 border border-stone-200/90 hover:border-pink-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-100 text-[#E91E63] flex items-center justify-center text-2xl mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm text-[#1A1A24] mb-1.5">{item.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Verified Mumbai Customer Reviews */}
      <section className="py-12 bg-[#FFFDFE] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-bold text-[#E91E63] uppercase tracking-wider bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                Real Stories
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A24] mt-1.5">
                Loved by 150,000+ Women in Mumbai
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-stone-700 bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>4.9 Out of 5 Stars Overall Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOME_SALON_REVIEWS.map(rev => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-5 border border-stone-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="border-t border-stone-100 pt-3">
                  <h4 className="font-bold text-xs text-[#1A1A24]">{rev.author}</h4>
                  <div className="flex items-center justify-between text-[10px] text-stone-400 mt-0.5">
                    <span>{rev.locality}</span>
                    <span>{rev.date}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#E91E63] mt-1 block">
                    Booked: {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Mumbai Coverage Localities Directory */}
      <section className="py-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-[#1A1A24]">
              Doorstep Salon Coverage Across Mumbai & MMR
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Our mobile beauticians carry portable equipment kits and arrive directly at your apartment or home.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {MUMBAI_LOCALITIES.map((loc, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedLocality(loc);
                  showToast(`Selected location: ${loc}`);
                }}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                  selectedLocality === loc
                    ? 'bg-pink-50 border-[#E91E63] text-[#E91E63] shadow-xs'
                    : 'bg-white border-stone-200 hover:border-pink-200 text-stone-700'
                }`}
              >
                <span className="truncate">{loc}</span>
                {selectedLocality === loc && <Check className="w-3.5 h-3.5 text-[#E91E63] shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Collapsible FAQ Section */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#E91E63] uppercase tracking-wider bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A24] mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {HOME_SALON_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-sm text-[#1A1A24] flex items-center justify-between cursor-pointer hover:bg-stone-50"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180 text-[#E91E63]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-[#141419] text-stone-300 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E91E63] to-[#FF4081] text-white flex items-center justify-center font-bold text-base">
                  H
                </div>
                <span className="font-black text-lg text-white">
                  Home<span className="text-[#E91E63]">Salon</span>.in
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                India's premier on-demand doorstep beauty and wellness provider for women in Mumbai. Professional salon care delivered right to your home.
              </p>
              <div className="text-xs text-stone-400 space-y-1">
                <p>📍 Operations: Link Road, Andheri West, Mumbai</p>
                <p>📞 Helpline: +91 91360 36036</p>
                <p>✉️ Email: care@homesalon.in</p>
              </div>
            </div>

            {/* Col 2: Popular Categories */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Top Services
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                {HOME_SALON_CATEGORIES.slice(1, 7).map(c => (
                  <li key={c.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(c.slug);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className="hover:text-pink-400 transition-colors cursor-pointer"
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: More Treatments */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                More Treatments
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                {HOME_SALON_CATEGORIES.slice(7).map(c => (
                  <li key={c.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(c.slug);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className="hover:text-pink-400 transition-colors cursor-pointer"
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Reference Info & Trust */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Demo Reference
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mb-3">
                Recreated based on homesalon.in/Mumbai for the RaoSitez Demo Sites Catalog.
              </p>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Site #38 in Demo Collection</span>
                </div>
                <div className="text-stone-400">Category: Salon (with Bodycraft)</div>
                <div className="text-stone-400">Slug: #/site/home-salon</div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>© 2026 Home Salon Services Pvt. Ltd. · Recreated Demo Site.</p>
            <div className="flex items-center gap-4">
              <button onClick={() => setActiveView('home')} className="hover:text-white cursor-pointer">
                Back to Demos Showcase
              </button>
              <span>·</span>
              <a href="https://www.homesalon.in/Mumbai" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                Official Reference (homesalon.in)
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 13. Sticky Mobile Bottom Cart Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 p-3 shadow-2xl sm:hidden flex items-center justify-between">
          <div>
            <div className="text-xs text-stone-500">
              {cartItems.reduce((acc, i) => acc + i.qty, 0)} Services in Cart
            </div>
            <div className="text-base font-black text-[#1A1A24]">
              ₹{cartTotalDiscounted}
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="px-6 py-2.5 rounded-xl bg-[#E91E63] text-white font-bold text-xs shadow-md shadow-pink-500/25 flex items-center gap-1.5"
          >
            <span>View Cart</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 14. Slide-Out Cart & Checkout Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
            
            {/* Header */}
            <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#E91E63]" />
                <h3 className="font-bold text-base text-[#1A1A24]">Your Salon Cart</h3>
                <span className="text-xs bg-pink-100 text-[#E91E63] font-bold px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cartItems.length === 0 ? (
                <div className="py-20 text-center text-stone-400">
                  <div className="text-4xl mb-2">🛍️</div>
                  <p className="font-bold text-sm text-stone-600">Your cart is empty</p>
                  <p className="text-xs text-stone-400 mt-1">Add some beauty services to get started</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-4 py-2 bg-[#E91E63] text-white rounded-xl text-xs font-bold"
                  >
                    Browse Services
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <span className="text-xs text-stone-500 font-medium">Selected Services</span>
                    <button
                      onClick={clearCart}
                      className="text-[11px] text-rose-500 hover:underline font-bold"
                    >
                      Clear All
                    </button>
                  </div>

                  {cartItems.map(({ service, qty }) => (
                    <div
                      key={service.id}
                      className="p-3 rounded-2xl bg-stone-50 border border-stone-200/90 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={service.imageUrl}
                          alt={service.name}
                          className="w-12 h-12 rounded-xl object-cover shrink-0"
                        />
                        <div>
                          <h4 className="font-bold text-xs text-[#1A1A24] line-clamp-1">
                            {service.name}
                          </h4>
                          <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mt-0.5">
                            <span>₹{service.discountedPrice}</span>
                            <span className="text-stone-300">·</span>
                            <span>{service.durationMinutes}m</span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity control */}
                      <div className="flex items-center gap-2 bg-white rounded-xl border border-stone-200 p-1 shadow-2xs">
                        <button
                          onClick={() => removeFromCart(service.id)}
                          className="w-6 h-6 rounded-lg hover:bg-stone-100 flex items-center justify-center text-stone-600 text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-stone-800 px-1">{qty}</span>
                        <button
                          onClick={() => addToCart(service.id)}
                          className="w-6 h-6 rounded-lg hover:bg-stone-100 flex items-center justify-center text-stone-600 text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Coupon Input Box */}
                  <div className="pt-3 border-t border-stone-200">
                    <div className="text-xs font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#E91E63]" />
                      <span>Apply Mumbai Promo Code</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={appliedCoupon}
                        onChange={e => setAppliedCoupon(e.target.value.toUpperCase())}
                        className="flex-1 px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs uppercase font-mono font-bold focus:outline-hidden focus:border-[#E91E63]"
                      />
                      <button
                        onClick={() => {
                          if (appliedCoupon) {
                            showToast(`Coupon ${appliedCoupon} checked!`);
                          }
                        }}
                        className="px-4 py-2 bg-stone-800 hover:bg-black text-white rounded-xl text-xs font-bold"
                      >
                        Apply
                      </button>
                    </div>

                    {/* Quick suggestion tags */}
                    <div className="flex gap-1.5 mt-2">
                      {['MUMBAI50', 'GLOW200', 'BRIDE1000'].map(code => (
                        <button
                          key={code}
                          onClick={() => setAppliedCoupon(code)}
                          className={`text-[10px] px-2 py-0.5 rounded-md font-bold font-mono transition-colors ${
                            appliedCoupon === code
                              ? 'bg-pink-100 text-[#E91E63] border border-pink-300'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          }`}
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="pt-3 border-t border-stone-200 space-y-1.5 text-xs text-stone-600">
                    <div className="flex justify-between">
                      <span>Item Total (Original)</span>
                      <span className="line-through text-stone-400">₹{cartTotalOriginal}</span>
                    </div>
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Catalog Discount</span>
                      <span>-₹{cartTotalOriginal - cartTotalDiscounted}</span>
                    </div>
                    {couponDiscountAmount > 0 && (
                      <div className="flex justify-between text-[#E91E63] font-bold">
                        <span>Coupon ({appliedCoupon})</span>
                        <span>-₹{couponDiscountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Travel & Setup Charges</span>
                      <span className="uppercase text-[10px] font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-emerald-700">
                        FREE
                      </span>
                    </div>
                    <div className="border-t border-stone-200 pt-2 flex justify-between text-sm font-black text-[#1A1A24]">
                      <span>Final To Pay</span>
                      <span>₹{finalPayable}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Checkout CTA */}
            {cartItems.length > 0 && (
              <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsBookingModalOpen(true);
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold text-sm shadow-lg shadow-pink-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Slot & Address</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-stone-400">
                  🔒 Safe & Contactless Booking · Verified Female Beauticians Only
                </p>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 15. Booking Flow Modal (Date, Time, Address & Confirmation) */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-pink-100 p-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#E91E63]">
                  Step {bookingStep} of 3
                </span>
                <h3 className="font-black text-lg text-[#1A1A24]">
                  {bookingStep === 1 && 'Select Date & Time Slot'}
                  {bookingStep === 2 && 'Mumbai Doorstep Address'}
                  {bookingStep === 3 && 'Booking Confirmed!'}
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsBookingModalOpen(false);
                  setBookingStep(1);
                  setBookingSuccessId(null);
                }}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Step 1: Slot Selection */}
            {bookingStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">
                    1. Select Preferred Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Today (Evening)', 'Tomorrow, Oct 1st', 'Wednesday, Oct 2nd'].map(d => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDate(d)}
                        className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${
                          selectedDate === d
                            ? 'bg-pink-50 border-[#E91E63] text-[#E91E63]'
                            : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">
                    2. Select Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      '08:00 AM - 10:00 AM',
                      '10:00 AM - 12:00 PM',
                      '12:00 PM - 02:00 PM',
                      '02:00 PM - 04:00 PM',
                      '04:00 PM - 06:00 PM',
                      '06:00 PM - 08:00 PM'
                    ].map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                          selectedTimeSlot === slot
                            ? 'bg-pink-50 border-[#E91E63] text-[#E91E63]'
                            : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span>{slot}</span>
                        {selectedTimeSlot === slot && <Check className="w-3.5 h-3.5 text-[#E91E63]" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-pink-50 rounded-2xl border border-pink-200 text-xs text-stone-700 flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#E91E63] shrink-0 mt-0.5" />
                  <span>
                    Our female professional arrives 10 minutes prior with sanitized sealed kit and disposable bed covers.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setBookingStep(2)}
                  className="w-full py-3 rounded-xl bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Continue to Address</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Address & Contact */}
            {bookingStep === 2 && (
              <form onSubmit={handleConfirmBooking} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingName}
                    onChange={e => setBookingName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#E91E63]"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    WhatsApp / Mobile Number (for beautician arrival OTP)
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingPhone}
                    onChange={e => setBookingPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#E91E63]"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Mumbai Locality
                  </label>
                  <select
                    value={selectedLocality}
                    onChange={e => setSelectedLocality(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#E91E63]"
                  >
                    {MUMBAI_LOCALITIES.map((loc, i) => (
                      <option key={i} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    House / Flat No., Building & Street
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={bookingAddress}
                    onChange={e => setBookingAddress(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#E91E63]"
                    placeholder="Flat 402, Sea Green Apartments, Hill Road"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Special Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    value={bookingNotes}
                    onChange={e => setBookingNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#E91E63]"
                    placeholder="e.g. Ring bell twice, sensitive skin for wax"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-stone-700 border-t border-stone-100">
                  <span>Payable at Home (Cash / UPI / Card):</span>
                  <span className="text-base font-black text-[#E91E63]">₹{finalPayable}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setBookingStep(1)}
                    className="w-1/3 py-2.5 rounded-xl border border-stone-200 text-stone-700 font-bold text-xs"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold text-xs shadow-md"
                  >
                    Confirm Home Appointment
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Success Confirmation */}
            {bookingStep === 3 && (
              <div className="text-center py-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl shadow-inner">
                  ✓
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#1A1A24]">
                    Booking Successfully Scheduled!
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Your certified Home Salon beautician has been assigned.
                  </p>
                </div>

                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Booking Reference:</span>
                    <span className="font-mono font-bold text-[#E91E63]">{bookingSuccessId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Date & Slot:</span>
                    <span className="font-bold text-stone-800">{selectedDate} ({selectedTimeSlot})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Location:</span>
                    <span className="font-bold text-stone-800">{selectedLocality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Total Payable at Doorstep:</span>
                    <span className="font-black text-emerald-600 text-sm">₹{finalPayable}</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-left text-[11px] text-emerald-800 space-y-1">
                  <p className="font-bold">📱 WhatsApp Confirmation Sent:</p>
                  <p>A message with beautician's name, photo ID, and arrival OTP has been dispatched to {bookingPhone}.</p>
                </div>

                <button
                  onClick={() => {
                    setIsBookingModalOpen(false);
                    setBookingStep(1);
                    setCart({});
                  }}
                  className="w-full py-3 rounded-xl bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold text-xs shadow-md"
                >
                  Done & Return to Catalog
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 16. City Selector Modal */}
      {isCityModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl p-6 border border-pink-100">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#E91E63]" />
                <h3 className="font-bold text-base text-[#1A1A24]">Select Your City</h3>
              </div>
              <button
                onClick={() => setIsCityModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-500 mb-4">
              Home Salon operates across top metropolitan hubs in India with dedicated female beauty teams.
            </p>

            <div className="space-y-2">
              {AVAILABLE_CITIES.map((c, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedCity(c.name);
                    setIsCityModalOpen(false);
                    showToast(`City switched to ${c.name}`);
                  }}
                  className={`w-full p-3 rounded-xl text-left text-xs font-bold border transition-all flex items-center justify-between cursor-pointer ${
                    selectedCity === c.name
                      ? 'bg-pink-50 border-[#E91E63] text-[#E91E63]'
                      : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div>
                    <span>{c.name}</span>
                    <span className="text-[10px] text-stone-400 block font-normal">
                      {c.areasCount}+ Localities Covered
                    </span>
                  </div>
                  {selectedCity === c.name && <Check className="w-4 h-4 text-[#E91E63]" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 17. Refer & Earn Modal */}
      {isReferModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl p-6 border border-pink-100 text-center">
            <div className="w-14 h-14 rounded-full bg-pink-100 text-[#E91E63] flex items-center justify-center mx-auto text-2xl mb-3">
              🎁
            </div>
            <h3 className="font-black text-lg text-[#1A1A24]">
              Refer a Friend, Get ₹200 Salon Credit
            </h3>
            <p className="text-xs text-stone-500 mt-1 mb-4 leading-relaxed">
              Share your unique referral link with friends in Mumbai. When they book their first home salon session, both of you get ₹200 wallet credits!
            </p>

            <div className="p-3 bg-stone-50 rounded-2xl border border-dashed border-stone-300 flex items-center justify-between mb-4">
              <span className="font-mono font-bold text-sm text-[#E91E63]">HOMESALON-MUM200</span>
              <button
                onClick={() => showToast('Referral code copied!')}
                className="px-3 py-1.5 bg-[#E91E63] text-white rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </button>
            </div>

            <button
              onClick={() => setIsReferModalOpen(false)}
              className="w-full py-2.5 rounded-xl border border-stone-200 text-stone-700 font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 18. Service Detail Dialog */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 border border-pink-100">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                  {selectedServiceDetail.category.replace('-', ' ')}
                </span>
                <h3 className="font-black text-lg text-[#1A1A24] mt-1">
                  {selectedServiceDetail.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="h-48 rounded-2xl overflow-hidden mb-4">
              <img
                src={selectedServiceDetail.imageUrl}
                alt={selectedServiceDetail.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {selectedServiceDetail.shortDescription}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                What's Included in this Doorstep Service:
              </h4>
              <ul className="space-y-2">
                {selectedServiceDetail.details.map((d, i) => (
                  <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-[#1A1A24]">
                    ₹{selectedServiceDetail.discountedPrice}
                  </span>
                  <span className="text-xs text-stone-400 line-through">
                    ₹{selectedServiceDetail.originalPrice}
                  </span>
                </div>
                <span className="text-[10px] text-stone-500">
                  Duration: {selectedServiceDetail.durationMinutes} minutes
                </span>
              </div>

              <button
                onClick={() => {
                  addToCart(selectedServiceDetail.id);
                  setSelectedServiceDetail(null);
                  setIsCartOpen(true);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold text-xs shadow-md shadow-pink-500/25 flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
