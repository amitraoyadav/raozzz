import React, { useState, useMemo, useEffect } from 'react';
import {
  RAOZ_BAZAAR_CONTACT,
  STORE_CATEGORIES,
  GROCERY_PRODUCTS,
  STORE_REVIEWS,
  RECENT_BUYERS,
  ASK_AI_QUESTIONS,
  GroceryProduct,
  StoreCategory
} from '../../data/raozBazaarData';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  Search,
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Percent,
  Check,
  CheckCircle2,
  X,
  ChevronRight,
  ChevronLeft,
  Star,
  ArrowRight,
  RefreshCw,
  Truck,
  ShieldCheck,
  CreditCard,
  QrCode,
  Tag,
  Menu,
  Eye,
  Heart,
  Plus,
  Minus,
  Trash2,
  HelpCircle,
  FileText
} from 'lucide-react';

interface CartItem {
  product: GroceryProduct;
  quantity: number;
}

export const RaozBazaarApp: React.FC = () => {
  // Navigation View State
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'refund-replace' | 'track-refund' | 'help-desk' | 'my-account' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Delivery Location State
  const [deliveryCity, setDeliveryCity] = useState('Delhi NCR');
  const [deliveryPin, setDeliveryPin] = useState('110001');
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  // Search & Filtering State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'popularity' | 'latest' | 'price-low' | 'price-high'>('default');

  // Product Details Modal
  const [selectedProduct, setSelectedProduct] = useState<GroceryProduct | null>(null);

  // Ask AI Modal
  const [askAIOpen, setAskAIOpen] = useState(false);
  const [aiSelectedAnswer, setAiSelectedAnswer] = useState<string | null>(null);
  const [aiLanguage, setAiLanguage] = useState<'en' | 'hi'>('en');

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([
    { product: GROCERY_PRODUCTS[0], quantity: 1 } // Pre-loaded with popular B1G1 Gemini Oil for instant interaction
  ]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  // Checkout State
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');
  const [checkoutForm, setCheckoutForm] = useState({
    name: 'Rajesh Kumar',
    phone: '9876543210',
    email: 'rajesh@example.com',
    address: 'Flat 402, Sunshine Heights, Main Road',
    city: 'Delhi NCR',
    pincode: '110001',
    deliveryDate: 'Tomorrow (Express Delivery)'
  });

  // Track Refund State
  const [trackQuery, setTrackQuery] = useState('');
  const [trackResult, setTrackResult] = useState<string | null>(null);

  // Help Desk Form State
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Order Delay Inquiry',
    orderNumber: '',
    message: ''
  });

  // Live Sale Countdown Timer (24h cyclic)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 23, minutes: 48, seconds: 15 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { days: 0, hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Set Document Title & SEO on mount
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'RAOZ BAZAAR | Har Ghar Ka Smart Bazaar · 100% Pure Ghee, 15L Oil B1G1 Free Deals';
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', 'RAOZ BAZAAR is your trusted online grocery store for 100% pure ghee, 15L cooking oil buy 1 get 1 free deals, daily staples, dry fruits, household essentials, and pan corner delivered across India.');
    }
    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  // Customer Reviews Slider State (auto-advancing)
  const [reviewIndex, setReviewIndex] = useState(0);
  useEffect(() => {
    const revTimer = setInterval(() => {
      setReviewIndex(prev => (prev + 1) % STORE_REVIEWS.length);
    }, 3500);
    return () => clearInterval(revTimer);
  }, []);

  // Live Buyer Notification (bottom-left popup)
  const [buyerIndex, setBuyerIndex] = useState(0);
  const [buyerVisible, setBuyerVisible] = useState(true);
  useEffect(() => {
    const buyerTimer = setInterval(() => {
      setBuyerVisible(false);
      setTimeout(() => {
        setBuyerIndex(prev => (prev + 1) % RECENT_BUYERS.length);
        setBuyerVisible(true);
      }, 500);
    }, 5500);
    return () => clearInterval(buyerTimer);
  }, []);

  // Cart Calculations
  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cart]);

  const totalCartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const deliveryCharge = cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 50;
  const grandTotal = Math.max(0, cartSubtotal - discountAmount + deliveryCharge);

  // Cart Actions
  const addToCart = (product: GroceryProduct, qty: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setCartDrawerOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'SUNDAY') {
      if (cartSubtotal >= 500) {
        const disc = Math.round(cartSubtotal * 0.1);
        setDiscountAmount(disc);
        setAppliedCoupon('SUNDAY (10% OFF)');
      } else {
        alert('Coupon SUNDAY requires a minimum cart value of ₹500.');
      }
    } else if (clean === 'B1G1' || clean === 'B1G1FREE') {
      const disc = 200;
      setDiscountAmount(disc);
      setAppliedCoupon('B1G1 (₹200 Instant Off)');
    } else {
      alert('Invalid coupon code. Try code "SUNDAY" for 10% off on orders above ₹500.');
    }
  };

  const handleInstantBuyNow = (product: GroceryProduct) => {
    setCart([{ product, quantity: 1 }]);
    setCheckoutModalOpen(true);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = 'RB-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setOrderConfirmed(true);
    setCart([]);
  };

  // Filtered Products for Catalog
  const filteredProducts = useMemo(() => {
    let prods = GROCERY_PRODUCTS.filter(p => {
      const matchCat =
        selectedCategorySlug === 'all' ||
        p.category.toLowerCase().replace(/[\s&/]+/g, '-').includes(selectedCategorySlug) ||
        STORE_CATEGORIES.find(c => c.slug === selectedCategorySlug)?.name.toLowerCase() === p.category.toLowerCase();
      const matchSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === 'price-low') {
      prods = [...prods].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      prods = [...prods].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popularity') {
      prods = [...prods].sort((a, b) => b.reviewsCount - a.reviewsCount);
    }
    return prods;
  }, [selectedCategorySlug, searchQuery, sortBy]);

  // B1G1 / Best Price Today products
  const dealsProducts = useMemo(() => {
    return GROCERY_PRODUCTS.filter(p => p.isB1G1);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff7ed] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#2d5a27] selection:text-white relative">
      {/* Site Switcher Header for Site #54 */}
      <ReferenceSiteSwitcher currentSiteId="raoz-bazaar" />

      {/* Sleek Animated Festive Border Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-500 animate-pulse" />

      {/* Top Location Bar */}
      <div className="bg-[#2d5a27] text-white text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Location Detector button */}
          <button
            onClick={() => setLocationModalOpen(true)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/20 transition cursor-pointer font-medium"
          >
            <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Deliver to <strong className="text-white">{deliveryCity} - {deliveryPin}</strong></span>
            <span className="text-[10px] text-white/70">▼</span>
          </button>

          {/* Quick Offer / Helplines */}
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden sm:inline text-amber-200">
              ⚡ Flash Deal: 15L Oil Buy 1 Get 1 Free Live!
            </span>
            <span className="text-white/40 hidden md:inline">•</span>
            <a
              href={`tel:${RAOZ_BAZAAR_CONTACT.supportPhone}`}
              className="flex items-center gap-1.5 hover:text-amber-200 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Support: {RAOZ_BAZAAR_CONTACT.supportPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            onClick={() => {
              setCurrentView('home');
              setSelectedCategorySlug('all');
            }}
            className="flex items-center gap-3 text-left group shrink-0"
          >
            <img
              src="/assets/raozbazaar/logo.png"
              alt="RAOZ BAZAAR Logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <span className="block text-xl font-black tracking-tight text-[#1b5e20] leading-tight">
                RAOZ <span className="text-[#f59e0b]">BAZAAR</span>
              </span>
              <span className="block text-[10px] tracking-wider uppercase font-bold text-slate-500">
                Har Ghar Ka Smart Bazaar
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-bold text-slate-700">
            <button
              onClick={() => { setCurrentView('home'); setSelectedCategorySlug('all'); }}
              className={`hover:text-[#2d5a27] transition ${currentView === 'home' ? 'text-[#2d5a27]' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => { setCurrentView('shop'); setSelectedCategorySlug('all'); }}
              className={`hover:text-[#2d5a27] transition ${currentView === 'shop' ? 'text-[#2d5a27]' : ''}`}
            >
              Shop
            </button>
            <button
              onClick={() => {
                setCurrentView('shop');
                setSelectedCategorySlug('15-litre-oil-buy-1-get-1-free');
              }}
              className="hover:text-[#2d5a27] text-rose-600 font-extrabold flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              15L Oil B1G1 Free
            </button>
            <button
              onClick={() => setCurrentView('refund-replace')}
              className={`hover:text-[#2d5a27] transition ${currentView === 'refund-replace' ? 'text-[#2d5a27]' : ''}`}
            >
              Refund & Replace
            </button>
            <button
              onClick={() => setCurrentView('track-refund')}
              className={`hover:text-[#2d5a27] transition ${currentView === 'track-refund' ? 'text-[#2d5a27]' : ''}`}
            >
              Track Refund
            </button>
            <button
              onClick={() => setCurrentView('help-desk')}
              className={`hover:text-[#2d5a27] transition ${currentView === 'help-desk' ? 'text-[#2d5a27]' : ''}`}
            >
              Help Desk
            </button>
            <button
              onClick={() => setCurrentView('my-account')}
              className={`hover:text-[#2d5a27] transition ${currentView === 'my-account' ? 'text-[#2d5a27]' : ''}`}
            >
              My Account
            </button>
            <button
              onClick={() => setCurrentView('contact')}
              className={`hover:text-[#2d5a27] transition ${currentView === 'contact' ? 'text-[#2d5a27]' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Cart & Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Cart Trigger */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#2d5a27] hover:bg-[#1e3d1a] text-white transition flex items-center gap-2 shadow-sm font-bold text-xs"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">₹ {grandTotal.toLocaleString('en-IN')}</span>
              <span className="w-5 h-5 rounded-full bg-[#f59e0b] text-slate-900 font-black text-[11px] flex items-center justify-center">
                {totalCartCount}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200 text-sm font-bold text-slate-700">
            <button
              onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => { setCurrentView('shop'); setSelectedCategorySlug('all'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              Shop All Groceries
            </button>
            <button
              onClick={() => { setCurrentView('shop'); setSelectedCategorySlug('15-litre-oil-buy-1-get-1-free'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-rose-600 font-extrabold"
            >
              🔥 15 Litre Oil Buy 1 Get 1 Free
            </button>
            <button
              onClick={() => { setCurrentView('refund-replace'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              Refund & Replace Policy
            </button>
            <button
              onClick={() => { setCurrentView('track-refund'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              Track Refund & Order
            </button>
            <button
              onClick={() => { setCurrentView('help-desk'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              Help Desk / Create Ticket
            </button>
            <button
              onClick={() => { setCurrentView('my-account'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              My Account
            </button>
            <button
              onClick={() => { setCurrentView('contact'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* Main Container Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* HOMEPAGE VIEW */}
        {currentView === 'home' && (
          <div className="space-y-8">
            {/* Search Bar + Built-in Ask AI Button */}
            <div className="relative max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 15L oil, ghee, aata, rice, dry fruits..."
                  className="w-full h-14 pl-5 pr-32 rounded-full border-2 border-slate-200 bg-white text-base shadow-sm focus:outline-none focus:border-[#7027d9] transition"
                />
                <button
                  type="button"
                  onClick={() => setAskAIOpen(true)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-11 px-4 rounded-full font-extrabold text-xs text-white bg-gradient-to-r from-[#6824d8] to-[#ff0b91] hover:opacity-90 shadow-md flex items-center gap-1.5 transition"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI</span>
                </button>
              </div>
            </div>

            {/* Compact 24H Sale Countdown Timer Box */}
            <div className="rounded-3xl p-5 sm:p-6 text-white text-center shadow-lg bg-gradient-to-br from-[#35106d] via-[#641b91] to-[#30105d] relative overflow-hidden">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ff9f18] to-[#ffe64b] text-slate-900 font-black text-[11px] uppercase tracking-wider mb-2">
                ⚡ HURRY UP! DEALS ENDING
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-1">
                LAST DAY SALE ENDS IN
              </h2>
              <p className="text-xs text-[#ffe34e] font-bold mb-4">
                ✨ Special Discounts - Don't Miss Out! Buy 1 Get 1 Free Oils & Pure Ghee ✨
              </p>

              {/* Timer Counters */}
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-14 sm:w-16 py-2 bg-white rounded-xl shadow-md text-slate-900">
                  <span className="block text-xl sm:text-2xl font-black text-[#54208d]">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="block text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase">Days</span>
                </div>
                <div className="w-14 sm:w-16 py-2 bg-white rounded-xl shadow-md text-slate-900">
                  <span className="block text-xl sm:text-2xl font-black text-[#54208d]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="block text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase">Hours</span>
                </div>
                <div className="w-14 sm:w-16 py-2 bg-white rounded-xl shadow-md text-slate-900">
                  <span className="block text-xl sm:text-2xl font-black text-[#54208d]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="block text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase">Minutes</span>
                </div>
                <div className="w-14 sm:w-16 py-2 bg-white rounded-xl shadow-md text-slate-900">
                  <span className="block text-xl sm:text-2xl font-black text-[#54208d]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="block text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase">Seconds</span>
                </div>
              </div>
            </div>

            {/* Promo Banner Graphic */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img
                src="/assets/raozbazaar/hero-banner.png"
                alt="RAOZ BAZAAR Mega Countdown Sale"
                className="w-full max-h-96 object-cover object-center cursor-pointer hover:scale-[1.01] transition-transform duration-500"
                onClick={() => {
                  setCurrentView('shop');
                  setSelectedCategorySlug('15-litre-oil-buy-1-get-1-free');
                }}
              />
            </div>

            {/* Marquee Ticker */}
            <div className="w-full overflow-hidden bg-gradient-to-r from-[#003087] via-[#0079C1] to-[#00457C] py-3 rounded-2xl shadow-md text-white font-black text-xs sm:text-sm tracking-wider uppercase flex items-center">
              <div className="animate-marquee whitespace-nowrap flex gap-12">
                <span>🔥 BIG SALE LIVE • LAST DAY • LIMITED TIME DEAL • BOOK NOW 🔥</span>
                <span>🔥 15 LITRE OIL BUY 1 GET 1 FREE • TOTAL 30 LITRE DISPATCHED 🔥</span>
                <span>🔥 100% PURE COW GHEE STARTING @ ₹435 • FREE DELIVERY ABOVE ₹499 🔥</span>
                <span>🔥 BIG SALE LIVE • LAST DAY • LIMITED TIME DEAL • BOOK NOW 🔥</span>
              </div>
            </div>

            {/* BEST PRICE TODAY - Horizontal Deals Slider (Buy 1 Get 1 Free) */}
            <section className="bg-gradient-to-br from-[#fff3e0] via-[#ffeb3b]/40 to-[#2d5a27]/20 p-6 sm:p-8 rounded-3xl shadow-md border border-amber-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[#1a3c15] font-black text-xs uppercase tracking-widest block mb-1">
                    Flash B1G1 Bumper Deals
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#1a3c15] uppercase tracking-tight border-b-4 border-[#1a3c15] inline-block pb-1">
                    BEST PRICE TODAY
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    setSelectedCategorySlug('15-litre-oil-buy-1-get-1-free');
                  }}
                  className="text-xs font-bold text-[#1a3c15] hover:underline flex items-center gap-1"
                >
                  <span>View All B1G1 Offers</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Horizontal Scrollable Slider */}
              <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-none scroll-smooth">
                {dealsProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="flex-shrink-0 w-44 sm:w-48 bg-white rounded-2xl p-3 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Product Thumbnail with Badges */}
                      <div className="relative h-32 w-full bg-slate-50 rounded-xl overflow-hidden mb-2">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain p-2 hover:scale-105 transition-transform"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white">
                          B1G1 Free
                        </span>
                      </div>

                      {/* Fake live views and rating */}
                      <div className="text-[10px] text-amber-500 font-bold flex items-center gap-1 mb-1">
                        <span>★★★★★</span>
                        <span className="text-slate-800">{prod.rating}</span>
                        <span className="text-slate-400">({prod.reviewsCount})</span>
                      </div>

                      <div className="text-[10px] font-bold text-emerald-700 flex items-center gap-1 mb-2">
                        <Eye className="w-3 h-3" />
                        <span>{prod.liveViewers} viewing now</span>
                      </div>

                      <h3
                        onClick={() => setSelectedProduct(prod)}
                        className="text-xs font-bold text-slate-800 hover:text-[#2d5a27] cursor-pointer line-clamp-2 h-8 leading-tight mb-2"
                      >
                        {prod.name}
                      </h3>
                    </div>

                    <div>
                      {/* Price Row */}
                      <div className="mb-2">
                        <div className="text-slate-400 line-through text-[11px]">
                          ₹ {prod.originalPrice.toLocaleString('en-IN')}
                        </div>
                        <div className="text-base font-black text-[#2d5a27]">
                          ₹ {prod.price.toLocaleString('en-IN')}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => addToCart(prod, 1)}
                          className="py-1.5 px-2 rounded-lg bg-emerald-50 text-[#2d5a27] hover:bg-emerald-100 text-[10px] font-bold transition text-center border border-emerald-200"
                        >
                          Add
                        </button>
                        <button
                          onClick={() => handleInstantBuyNow(prod)}
                          className="py-1.5 px-2 rounded-lg bg-[#2d5a27] text-white hover:bg-[#1e3d1a] text-[10px] font-black uppercase transition text-center shadow-sm"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* App-Style Circular / Glassmorphic Categories Slider */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-black text-[#2d5a27] uppercase tracking-wider mb-5 flex items-center gap-2">
                <span>Categories</span>
                <span className="text-xs font-normal text-slate-500 lowercase">(tap to filter)</span>
              </h2>

              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
                {STORE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategorySlug(cat.slug);
                      const el = document.getElementById('main-catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex-shrink-0 w-24 text-center p-3 rounded-2xl transition-all duration-300 border ${
                      selectedCategorySlug === cat.slug
                        ? 'bg-emerald-50 border-[#2d5a27] shadow-md -translate-y-1'
                        : 'bg-gradient-to-b from-white to-emerald-50/30 border-slate-200 hover:border-[#2d5a27]/50 hover:shadow-md'
                    }`}
                  >
                    <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-[#2d5a27] p-1 bg-white mb-2 shadow-sm">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <span className="block text-[11px] font-bold text-slate-800 line-clamp-2 leading-tight">
                      {cat.name}
                    </span>
                    <span className="block text-[9px] text-[#2d5a27] font-semibold mt-0.5">
                      {cat.itemCount} Items
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Main Product Catalog Grid ("Our Products") */}
            <section id="main-catalog" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#2d5a27] tracking-tight">
                    Our Products
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Showing {filteredProducts.length} verified products with express home delivery
                  </p>
                </div>

                {/* Filters & Sorting */}
                <div className="flex items-center gap-3 flex-wrap">
                  {selectedCategorySlug !== 'all' && (
                    <button
                      onClick={() => setSelectedCategorySlug('all')}
                      className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 flex items-center gap-1"
                    >
                      <span>Clear Category Filter</span>
                      <X className="w-3 h-3" />
                    </button>
                  )}

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50 focus:outline-none"
                  >
                    <option value="default">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="price-low">Price: low to high</option>
                    <option value="price-high">Price: high to low</option>
                  </select>
                </div>
              </div>

              {/* Product Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Box */}
                      <div
                        onClick={() => setSelectedProduct(prod)}
                        className="relative h-40 sm:h-48 w-full bg-slate-50 rounded-xl overflow-hidden mb-3 cursor-pointer"
                      >
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-[#2d5a27] text-white">
                          {prod.isB1G1 ? 'B1G1 Free' : 'Sale!'}
                        </span>
                        {prod.discountPercent > 0 && (
                          <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-[#f59e0b] text-slate-900">
                            {prod.discountPercent}% OFF
                          </span>
                        )}
                      </div>

                      {/* Ratings and views */}
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <div className="text-amber-500 font-bold flex items-center gap-1">
                          <span>★★★★★</span>
                          <span className="text-slate-700">{prod.rating}</span>
                        </div>
                        <span className="text-slate-400 text-[10px]">({prod.reviewsCount})</span>
                      </div>

                      <div className="text-[10px] font-semibold text-emerald-700 mb-2 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{prod.liveViewers} people viewing this</span>
                      </div>

                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        {prod.category}
                      </span>

                      <h3
                        onClick={() => setSelectedProduct(prod)}
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#2d5a27] cursor-pointer line-clamp-2 h-9 leading-snug mb-3"
                      >
                        {prod.name}
                      </h3>
                    </div>

                    <div>
                      {/* Price Section */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-base sm:text-lg font-black text-[#2d5a27]">
                          ₹ {prod.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹ {prod.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => addToCart(prod, 1)}
                          className="py-2 px-2.5 rounded-xl border border-[#2d5a27] text-[#2d5a27] hover:bg-emerald-50 text-xs font-bold transition text-center"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => handleInstantBuyNow(prod)}
                          className="py-2 px-2.5 rounded-xl bg-[#2d5a27] text-white hover:bg-[#1e3d1a] text-xs font-black uppercase transition text-center shadow-sm"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Social / Offer Follow Card */}
            <div className="bg-gradient-to-r from-[#0b2c6d] to-[#1d4ed8] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black mb-1">🎁 Follow for New Offers</h3>
                <p className="text-xs sm:text-sm text-slate-200">
                  Get Daily Deals, Flash Sales & Exclusive Discounts Delivered to Your Inbox
                </p>
              </div>
              <button
                onClick={() => alert('Subscribed! You will now receive daily grocery coupon codes.')}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition"
              >
                Join Daily Offer Alerts
              </button>
            </div>

            {/* Automatic Customer Reviews Slider */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 text-center max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
                Customer Reviews
              </h2>

              <div className="min-h-32 flex flex-col justify-center transition-all duration-500">
                <div className="text-amber-400 text-lg mb-2">
                  {'★'.repeat(STORE_REVIEWS[reviewIndex].rating)}
                  {'☆'.repeat(5 - STORE_REVIEWS[reviewIndex].rating)}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic mb-3 max-w-lg mx-auto">
                  "{STORE_REVIEWS[reviewIndex].comment}"
                </p>
                <h4 className="text-xs font-bold text-slate-900 uppercase">
                  — {STORE_REVIEWS[reviewIndex].author}
                </h4>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-1.5 mt-4">
                {STORE_REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setReviewIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === reviewIndex ? 'w-6 bg-amber-400' : 'w-2 bg-slate-200'
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {/* SHOP / CATALOG VIEW */}
        {currentView === 'shop' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black text-[#2d5a27]">Store Grocery Catalog</h1>
                <p className="text-xs text-slate-500">Explore all cooking oils, pure ghee, dry fruits, and household staples</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter items..."
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* Categories filter row */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedCategorySlug('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedCategorySlug === 'all'
                    ? 'bg-[#2d5a27] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                All ({GROCERY_PRODUCTS.length})
              </button>
              {STORE_CATEGORIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategorySlug(c.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    selectedCategorySlug === c.slug
                      ? 'bg-[#2d5a27] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map(prod => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
                >
                  <div>
                    <div
                      onClick={() => setSelectedProduct(prod)}
                      className="relative h-44 w-full bg-slate-50 rounded-xl overflow-hidden mb-3 cursor-pointer"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain p-2"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-[#2d5a27] text-white">
                        {prod.isB1G1 ? 'B1G1' : 'Sale'}
                      </span>
                    </div>

                    <h3
                      onClick={() => setSelectedProduct(prod)}
                      className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#2d5a27] cursor-pointer line-clamp-2 h-9 mb-2"
                    >
                      {prod.name}
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-base font-black text-[#2d5a27]">
                        ₹ {prod.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ₹ {prod.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => addToCart(prod, 1)}
                        className="py-1.5 px-2 rounded-lg border border-[#2d5a27] text-[#2d5a27] text-xs font-bold hover:bg-emerald-50"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => handleInstantBuyNow(prod)}
                        className="py-1.5 px-2 rounded-lg bg-[#2d5a27] text-white text-xs font-bold uppercase hover:bg-[#1e3d1a]"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REFUND & REPLACE POLICY VIEW */}
        {currentView === 'refund-replace' && (
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 space-y-6">
            <span className="text-xs font-bold text-[#2d5a27] uppercase tracking-wider block">
              Customer Protection Guarantee
            </span>
            <h1 className="text-3xl font-black text-slate-900">Refund & Replace Policy</h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              At RAOZ BAZAAR, customer satisfaction is our top priority. We understand that items can
              occasionally suffer damage in transit or need replacement. Here is our transparent 7-day policy:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <RefreshCw className="w-8 h-8 text-[#2d5a27] mb-3" />
                <h3 className="text-base font-bold text-emerald-950 mb-1">7 Days Easy Return</h3>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Request a replacement or full refund within 7 days of package delivery with zero hassle.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
                <Truck className="w-8 h-8 text-amber-700 mb-3" />
                <h3 className="text-base font-bold text-amber-950 mb-1">Free Reverse Pickup</h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Our courier partners will arrange doorstep pickup for damaged or incorrect items at no extra cost.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
                <CreditCard className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="text-base font-bold text-blue-950 mb-1">24-48h Refund Credit</h3>
                <p className="text-xs text-blue-800 leading-relaxed">
                  UPI & Bank refunds are credited directly to your original payment method within 24 to 48 business hours.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <h4 className="font-bold text-slate-900">How to raise a replace request:</h4>
              <p>1. Open our "Help Desk / Create Ticket" page or email support@raozbazaar.com with your Order ID.</p>
              <p>2. Attach a quick photo of the delivered package and damaged item.</p>
              <p>3. Our team confirms verification and issues an instant replacement dispatch within 24 hours.</p>
            </div>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => setCurrentView('track-refund')}
                className="px-6 py-3 rounded-xl bg-[#2d5a27] text-white font-bold text-xs uppercase"
              >
                Track Refund Status &rarr;
              </button>
            </div>
          </div>
        )}

        {/* TRACK REFUND & REPLACE VIEW */}
        {currentView === 'track-refund' && (
          <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#2d5a27] flex items-center justify-center mx-auto">
              <Truck className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Track Refund & Replace</h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Enter your Order Number or Registered Mobile Number to check real-time reverse shipment or refund credit status.
            </p>

            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="text"
                value={trackQuery}
                onChange={(e) => setTrackQuery(e.target.value)}
                placeholder="e.g. RB-781920 or 9876543210"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2d5a27]"
              />
              <button
                onClick={() => {
                  if (trackQuery.trim()) {
                    setTrackResult(`Order ${trackQuery.trim().toUpperCase()}: Replacement processed & out for delivery via Bluedart. Expected delivery: Tomorrow by 4 PM.`);
                  } else {
                    alert('Please enter an Order ID or Mobile Number.');
                  }
                }}
                className="px-6 py-3 rounded-xl bg-[#2d5a27] text-white font-bold text-xs uppercase hover:bg-[#1e3d1a]"
              >
                Track
              </button>
            </div>

            {trackResult && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-semibold text-left">
                {trackResult}
              </div>
            )}
          </div>
        )}

        {/* HELP DESK / CREATE TICKET VIEW */}
        {currentView === 'help-desk' && (
          <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 space-y-6">
            <span className="text-xs font-bold text-[#2d5a27] uppercase tracking-wider block">
              Support Candy Help Desk
            </span>
            <h1 className="text-3xl font-black text-slate-900">Open a Support Ticket</h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Need assistance with an existing order, payment confirmation, or product query? Submit your ticket below.
            </p>

            {ticketSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-[#2d5a27] mx-auto" />
                <h3 className="text-lg font-bold text-emerald-950">Support Ticket Created (#TKT-4921)</h3>
                <p className="text-xs text-emerald-800">
                  Our customer service team has received your query and will reply via email within 4 working hours.
                </p>
                <button
                  onClick={() => setTicketSubmitted(false)}
                  className="mt-3 px-5 py-2 rounded-xl text-xs font-bold bg-[#2d5a27] text-white"
                >
                  Create Another Ticket
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setTicketSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={ticketForm.name}
                      onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#2d5a27]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={ticketForm.email}
                      onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                      placeholder="ramesh@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#2d5a27]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Order Number (if any)</label>
                    <input
                      type="text"
                      value={ticketForm.orderNumber}
                      onChange={(e) => setTicketForm({ ...ticketForm, orderNumber: e.target.value })}
                      placeholder="e.g. RB-58921"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#2d5a27]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject *</label>
                    <select
                      value={ticketForm.subject}
                      onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none bg-white text-slate-700"
                    >
                      <option>Delivery Tracking Status</option>
                      <option>Damaged Item Replacement</option>
                      <option>Refund Status Check</option>
                      <option>Bulk Order Inquiry</option>
                      <option>Other Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message Description *</label>
                  <textarea
                    rows={4}
                    required
                    value={ticketForm.message}
                    onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                    placeholder="Describe your issue with order date or payment details..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#2d5a27]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#2d5a27] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1e3d1a]"
                >
                  Submit Support Ticket
                </button>
              </form>
            )}
          </div>
        )}

        {/* MY ACCOUNT / ORDERS VIEW */}
        {currentView === 'my-account' && (
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h1 className="text-2xl font-black text-slate-900">My Account</h1>
                <p className="text-xs text-slate-500">Welcome, Rajesh Kumar (rajesh@example.com)</p>
              </div>
              <button
                onClick={() => alert('Logged out successfully.')}
                className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200"
              >
                Sign Out
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase">Recent Orders</h3>
              <div className="border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-[#2d5a27] block text-sm">Order #RB-892147</span>
                  <span className="text-slate-500">Placed on Today • Gemini 15L Oil B1G1 (Total 30L)</span>
                </div>
                <div className="text-right">
                  <span className="font-black text-slate-900 block text-sm">₹ 1,999.00</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    Dispatched / In Transit
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT US VIEW */}
        {currentView === 'contact' && (
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 space-y-6">
            <span className="text-xs font-bold text-[#2d5a27] uppercase tracking-wider block">
              Contact RAOZ BAZAAR
            </span>
            <h1 className="text-3xl font-black text-slate-900">We are Here to Help</h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Have questions regarding wholesale bulk purchases, delivery areas, or order updates?
              Our customer happiness team is available Monday through Saturday.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Phone className="w-5 h-5 text-[#2d5a27] mb-2" />
                <strong className="block text-slate-800 mb-0.5">Calling Support (10 AM - 6 PM)</strong>
                <p className="text-slate-500">{RAOZ_BAZAAR_CONTACT.supportPhone} / {RAOZ_BAZAAR_CONTACT.phone}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Mail className="w-5 h-5 text-[#2d5a27] mb-2" />
                <strong className="block text-slate-800 mb-0.5">Email Support</strong>
                <p className="text-slate-500">{RAOZ_BAZAAR_CONTACT.email}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Floating Modern Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setCartDrawerOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
              {/* Drawer Header */}
              <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div>
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-[#2d5a27]" />
                    <span>Your Shopping Cart ({totalCartCount})</span>
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    {cartSubtotal >= 499 ? '🎉 Free Delivery Unlocked!' : `Add ₹${499 - cartSubtotal} more for Free Delivery`}
                  </span>
                </div>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="p-5 overflow-y-auto flex-1 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <ShoppingCart className="w-12 h-12 text-slate-300 mx-auto" />
                    <h4 className="text-base font-bold text-slate-700">Your Cart is Empty</h4>
                    <p className="text-xs text-slate-400">Add 15L B1G1 oil tins, pure ghee, or aata to see them here.</p>
                    <button
                      onClick={() => {
                        setCartDrawerOpen(false);
                        setCurrentView('shop');
                      }}
                      className="mt-3 px-5 py-2.5 rounded-xl bg-[#2d5a27] text-white text-xs font-bold uppercase"
                    >
                      Shop Now
                    </button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200 bg-slate-50/50"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-contain rounded-xl bg-white p-1 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 truncate">
                          {item.product.name}
                        </h4>
                        <div className="text-xs font-black text-[#2d5a27] mt-0.5">
                          ₹ {item.product.price.toLocaleString('en-IN')}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="w-6 h-6 rounded bg-slate-200 text-slate-800 flex items-center justify-center text-xs font-bold"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-slate-800 px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="w-6 h-6 rounded bg-slate-200 text-slate-800 flex items-center justify-center text-xs font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-auto text-rose-500 hover:text-rose-700 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
                  {/* Coupon Code Input */}
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Coupon Code (e.g. SUNDAY)"
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs uppercase"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs"
                    >
                      Apply
                    </button>
                  </form>

                  {appliedCoupon && (
                    <div className="text-[11px] text-emerald-700 font-bold bg-emerald-100/60 p-2 rounded-lg flex items-center justify-between">
                      <span>Applied: {appliedCoupon}</span>
                      <span>- ₹{discountAmount}</span>
                    </div>
                  )}

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-bold text-slate-900">₹ {cartSubtotal.toLocaleString('en-IN')}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-700">
                        <span>Discount:</span>
                        <span>- ₹ {discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span className="font-bold text-slate-900">
                        {deliveryCharge === 0 ? <span className="text-emerald-700">FREE</span> : `₹ ${deliveryCharge}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-slate-900 pt-1 border-t border-slate-200">
                      <span>Total Amount:</span>
                      <span className="text-[#2d5a27]">₹ {grandTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setCartDrawerOpen(false);
                      setCheckoutModalOpen(true);
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#2d5a27] hover:bg-[#1e3d1a] text-white font-black text-xs uppercase tracking-wider shadow-lg transition"
                  >
                    Proceed to Checkout ({totalCartCount} items) &rarr;
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8 p-6 sm:p-8">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center h-64">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-56 max-w-full object-contain"
                />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2d5a27] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {selectedProduct.category}
                </span>

                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {selectedProduct.name}
                </h3>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-amber-500 font-bold">★★★★★ {selectedProduct.rating}</span>
                  <span className="text-slate-400">({selectedProduct.reviewsCount} verified reviews)</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#2d5a27]">
                    ₹ {selectedProduct.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    ₹ {selectedProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="space-y-1 text-xs text-slate-700 pt-2">
                  {selectedProduct.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct, 1);
                      setSelectedProduct(null);
                    }}
                    className="py-2.5 px-4 rounded-xl border border-[#2d5a27] text-[#2d5a27] font-bold text-xs hover:bg-emerald-50"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      handleInstantBuyNow(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="py-2.5 px-4 rounded-xl bg-[#2d5a27] text-white font-black text-xs uppercase hover:bg-[#1e3d1a]"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ask AI Assistant Modal */}
      {askAIOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative max-h-[85vh] flex flex-col">
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#111827] to-[#24113b] text-white flex items-center justify-between">
              <div>
                <h3 className="text-base font-black flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#ff0b91]" />
                  <span>Ask AI Smart</span>
                </h3>
                <span className="text-[10px] text-slate-300">RAOZ BAZAAR Customer Assistant</span>
              </div>
              <button
                onClick={() => { setAskAIOpen(false); setAiSelectedAnswer(null); }}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-lg"
              >
                ×
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-bold">Select Language:</span>
                <select
                  value={aiLanguage}
                  onChange={(e) => setAiLanguage(e.target.value as any)}
                  className="px-3 py-1 rounded-lg border border-slate-200 text-xs bg-slate-50 font-bold"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी (Hindi)</option>
                </select>
              </div>

              {aiSelectedAnswer ? (
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-3">
                  <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {aiSelectedAnswer}
                  </div>
                  <button
                    onClick={() => setAiSelectedAnswer(null)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7024d9] to-[#f20b91] text-white text-xs font-bold"
                  >
                    ← Back to Questions
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs text-slate-500">Tap any question for instant automated answer:</p>
                  {ASK_AI_QUESTIONS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAiSelectedAnswer(item.a)}
                      className="w-full text-left p-3.5 rounded-2xl bg-gradient-to-r from-[#7024d9] to-[#f20b91] text-white text-xs font-bold hover:opacity-95 transition shadow-sm block"
                    >
                      {item.q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modern Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative my-8 p-6 sm:p-8">
            <button
              onClick={() => { setCheckoutModalOpen(false); setOrderConfirmed(false); }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            {orderConfirmed ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2d5a27] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Order Placed Successfully!</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold">
                  Order ID: {orderId}
                </span>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{checkoutForm.name}</strong>! Your order will be dispatched from our
                  Delhi NCR hub and delivered to <strong>{checkoutForm.address}, {checkoutForm.city}</strong>.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 text-xs text-slate-600 text-left space-y-1">
                  <p>• Tracking link sent to WhatsApp: {checkoutForm.phone}</p>
                  <p>• Payment Method: <strong className="uppercase">{paymentMethod}</strong></p>
                  <p>• Total Amount: <strong>₹ {grandTotal.toLocaleString('en-IN')}</strong></p>
                </div>
                <button
                  onClick={() => { setCheckoutModalOpen(false); setOrderConfirmed(false); }}
                  className="px-6 py-3 rounded-xl bg-[#2d5a27] text-white font-bold text-xs uppercase"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-[#2d5a27] uppercase tracking-wider block">
                    Express Checkout
                  </span>
                  <h3 className="text-xl font-black text-slate-900">Billing & Delivery Details</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.name}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2d5a27]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={checkoutForm.phone}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2d5a27]"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold text-slate-700 mb-1">Complete Address *</label>
                  <input
                    type="text"
                    required
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2d5a27]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">City / District *</label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.city}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2d5a27]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">PIN Code *</label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.pincode}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2d5a27]"
                    />
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="pt-2 text-xs">
                  <label className="block font-bold text-slate-700 mb-2">Select Payment Method:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-2.5 rounded-xl border text-center transition font-bold ${
                        paymentMethod === 'upi' ? 'bg-[#2d5a27] text-white border-[#2d5a27]' : 'bg-slate-50 text-slate-700'
                      }`}
                    >
                      <QrCode className="w-4 h-4 mx-auto mb-1" />
                      <span>Scan UPI QR</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-2.5 rounded-xl border text-center transition font-bold ${
                        paymentMethod === 'cod' ? 'bg-[#2d5a27] text-white border-[#2d5a27]' : 'bg-slate-50 text-slate-700'
                      }`}
                    >
                      <Truck className="w-4 h-4 mx-auto mb-1" />
                      <span>Cash on Delivery</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl border text-center transition font-bold ${
                        paymentMethod === 'card' ? 'bg-[#2d5a27] text-white border-[#2d5a27]' : 'bg-slate-50 text-slate-700'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 mx-auto mb-1" />
                      <span>Card / NetBanking</span>
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Payable Amount:</span>
                  <span className="text-[#2d5a27] text-base">₹ {grandTotal.toLocaleString('en-IN')}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#2d5a27] hover:bg-[#1e3d1a] text-white font-black text-xs uppercase tracking-wider shadow-lg"
                >
                  Place Order Now &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Location Modal */}
      {locationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#2d5a27]" />
              <span>Select Delivery Location</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-500 font-bold mb-1">City / Region:</label>
                <input
                  type="text"
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200"
                />
              </div>
              <div>
                <label className="block text-slate-500 font-bold mb-1">Pincode:</label>
                <input
                  type="text"
                  value={deliveryPin}
                  onChange={(e) => setDeliveryPin(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setLocationModalOpen(false)}
                className="w-full py-2.5 rounded-xl bg-[#2d5a27] text-white text-xs font-bold"
              >
                Confirm Location
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom-Left Recent Buyer Social Proof Notification */}
      {buyerVisible && (
        <div className="fixed bottom-4 left-4 z-40 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-3 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 text-[11px] max-w-xs animate-in slide-in-from-bottom duration-300">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-600 flex items-center justify-center shrink-0 shadow-md">
            <ShoppingCart className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 truncate">
            <span className="font-bold text-white block">
              {RECENT_BUYERS[buyerIndex].name} ({RECENT_BUYERS[buyerIndex].city})
            </span>
            <span className="text-slate-400">
              Bought for <strong className="text-emerald-400">{RECENT_BUYERS[buyerIndex].amount}</strong> • {RECENT_BUYERS[buyerIndex].time}
            </span>
          </div>
        </div>
      )}

      {/* Comprehensive Store Footer */}
      <footer className="bg-[#0b1329] text-slate-300 pt-16 pb-12 mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-xs">
            {/* Column 1: Brand Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img src="/assets/raozbazaar/logo.png" alt="RAOZ BAZAAR" className="h-10 w-auto brightness-125" />
                <span className="text-lg font-black text-white">RAOZ <span className="text-[#f59e0b]">BAZAAR</span></span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                RAOZ BAZAAR – Har Ghar Ka Smart Bazaar. Direct wholesale grocery discounts on
                cooking oils, pure desi ghee, pulses, dry fruits, and everyday household necessities.
              </p>
              <p className="text-slate-300">Calling Support: <strong>{RAOZ_BAZAAR_CONTACT.supportPhone}</strong> (10 AM - 6 PM)</p>
              <p className="text-slate-300">Email: <strong>{RAOZ_BAZAAR_CONTACT.email}</strong></p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => setCurrentView('home')} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => setCurrentView('shop')} className="hover:text-white transition">Shop All Products</button></li>
                <li><button onClick={() => setCurrentView('refund-replace')} className="hover:text-white transition">Refund & Replace Policy</button></li>
                <li><button onClick={() => setCurrentView('track-refund')} className="hover:text-white transition">Track Refund & Replace</button></li>
                <li><button onClick={() => setCurrentView('help-desk')} className="hover:text-white transition">Help Desk / Support Ticket</button></li>
                <li><button onClick={() => setCurrentView('my-account')} className="hover:text-white transition">My Account / Order History</button></li>
                <li><button onClick={() => setCurrentView('contact')} className="hover:text-white transition">Contact Us</button></li>
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Featured Categories
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => { setCurrentView('shop'); setSelectedCategorySlug('15-litre-oil-buy-1-get-1-free'); }} className="hover:text-white transition">15 Litre Oil Buy 1 Get 1 Free</button></li>
                <li><button onClick={() => { setCurrentView('shop'); setSelectedCategorySlug('100-pure-ghee'); }} className="hover:text-white transition">100% Pure Cow & Desi Ghee</button></li>
                <li><button onClick={() => { setCurrentView('shop'); setSelectedCategorySlug('cooking-oil'); }} className="hover:text-white transition">Cooking Oil (1L, 5L, 15L)</button></li>
                <li><button onClick={() => { setCurrentView('shop'); setSelectedCategorySlug('dry-fruit-deal'); }} className="hover:text-white transition">California Almonds & Dry Fruits</button></li>
                <li><button onClick={() => { setCurrentView('shop'); setSelectedCategorySlug('rice-pulses-wheat'); }} className="hover:text-white transition">Aashirwaad Aata & Fine Rice</button></li>
                <li><button onClick={() => { setCurrentView('shop'); setSelectedCategorySlug('pan-corner'); }} className="hover:text-white transition">Pan Corner & Mouthfreshners</button></li>
              </ul>
            </div>

            {/* Column 4: Quality & Policies */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Customer Guarantees
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>✓ 100% Original Sealed Products</li>
                <li>✓ 7 Days Free Replacement Window</li>
                <li>✓ Express 3-7 Working Days Delivery</li>
                <li>✓ QR Code Scan & Cash On Delivery</li>
                <li>✓ Privacy Policy & GDPR Compliant</li>
                <li>✓ Terms & Conditions</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 RAOZ BAZAAR. All Rights Reserved. Har Ghar Ka Smart Bazaar.</p>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-400 cursor-pointer">Refund Policy</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
