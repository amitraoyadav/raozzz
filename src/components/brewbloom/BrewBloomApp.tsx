import React, { useState, useMemo, useEffect } from 'react';
import {
  Coffee,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  Mail,
  Search,
  ShoppingBag,
  X,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Calendar,
  Users,
  Share2,
  ExternalLink,
  Menu as MenuIcon,
  Plus,
  Minus,
  Award,
  BookOpen,
  Compass,
  Star,
  Tag
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  BREW_BLOOM_PRODUCTS,
  BREW_BLOOM_LOCATIONS,
  BREW_BLOOM_BLOOMSCHOOL_COURSES,
  BREW_BLOOM_PHILOSOPHY,
  GRIND_OPTIONS,
  BrewBloomProduct,
  BrewBloomLocation,
  BloomSchoolCourse
} from '../../data/brewBloomData';

export type BrewBloomTab =
  | 'home'
  | 'coffee'
  | 'cacao'
  | 'bakehouse'
  | 'bloomschool'
  | 'locations'
  | 'shop'
  | 'taufah'
  | 'story'
  | 'contact';

interface CartItem {
  product: BrewBloomProduct;
  quantity: number;
  grind: string;
}

export const BrewBloomApp: React.FC = () => {
  const { setActiveView } = useApp();

  // Active navigation tab
  const [currentTab, setCurrentTab] = useState<BrewBloomTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search Modal
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Selected Product for Detail View / Modal
  const [selectedProduct, setSelectedProduct] = useState<BrewBloomProduct | null>(null);
  const [selectedGrind, setSelectedGrind] = useState<string>(GRIND_OPTIONS[0]);
  const [productQty, setProductQty] = useState(1);
  const [productActiveImg, setProductActiveImg] = useState<string>('');

  // Cart Drawer
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutPhone, setCheckoutPhone] = useState('');
  const [checkoutAddress, setCheckoutAddress] = useState('');

  // Workshop / Bloom School Booking Modal
  const [selectedCourse, setSelectedCourse] = useState<BloomSchoolCourse | null>(null);
  const [workshopName, setWorkshopName] = useState('');
  const [workshopPhone, setWorkshopPhone] = useState('');
  const [workshopDate, setWorkshopDate] = useState('2026-10-10');
  const [workshopSeats, setWorkshopSeats] = useState(1);
  const [workshopSuccess, setWorkshopSuccess] = useState(false);

  // Shop filter
  const [shopCategory, setShopCategory] = useState<string>('All');
  const [shopSort, setShopSort] = useState<'featured' | 'low-high' | 'high-low'>('featured');

  // Location filter
  const [locationCity, setLocationCity] = useState<string>('All');

  // Contact form
  const [contactSubject, setContactSubject] = useState('General Enquiry');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactDone, setContactDone] = useState(false);

  // Set active image when product opens
  useEffect(() => {
    if (selectedProduct) {
      setProductActiveImg(selectedProduct.primaryImage);
      setProductQty(1);
      setSelectedGrind(GRIND_OPTIONS[0]);
    }
  }, [selectedProduct]);

  // Cart calculations
  const cartTotalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cart]);

  const discountAmount = promoApplied ? Math.min(250, cartSubtotal * 0.1) : 0;
  const shippingFee = cartSubtotal >= 1500 || cartSubtotal === 0 ? 0 : 120;
  const cartGrandTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  const addToCart = (product: BrewBloomProduct, grind?: string, qty = 1) => {
    const chosenGrind = grind || (product.category === 'Specialty Coffee' ? GRIND_OPTIONS[0] : 'Standard');
    setCart(prev => {
      const idx = prev.findIndex(item => item.product.id === product.id && item.grind === chosenGrind);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
        return next;
      }
      return [...prev, { product, quantity: qty, grind: chosenGrind }];
    });
    setCartDrawerOpen(true);
  };

  const updateCartQty = (idx: number, delta: number) => {
    setCart(prev => {
      const next = [...prev];
      const newQty = next[idx].quantity + delta;
      if (newQty <= 0) {
        next.splice(idx, 1);
      } else {
        next[idx] = { ...next[idx], quantity: newQty };
      }
      return next;
    });
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'BLOOMORIGIN' || promoCode.trim().toUpperCase() === 'BREW10') {
      setPromoApplied(true);
    }
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemLines = cart.map(item =>
      `• ${item.product.title} (Grind: ${item.grind}) x${item.quantity} = ₹${item.product.price * item.quantity}`
    ).join('\n');

    const msg = `*New Order from BREW & BLOOM Online Store*\n\n` +
      `${itemLines}\n\n` +
      `*Subtotal:* ₹${cartSubtotal}\n` +
      (discountAmount > 0 ? `*Discount:* -₹${Math.round(discountAmount)}\n` : '') +
      `*Shipping:* ${shippingFee === 0 ? 'FREE (Orders above ₹1500)' : `₹${shippingFee}`}\n` +
      `*Total Amount:* ₹${Math.round(cartGrandTotal)}\n\n` +
      `*Customer Details:*\n` +
      `Name: ${checkoutName || 'Guest'}\n` +
      `Phone: ${checkoutPhone || 'Direct WhatsApp'}\n` +
      `Delivery Address: ${checkoutAddress || 'Pan-India Dispatch'}\n\n` +
      `Please confirm dispatch details and invoice. Thank you!`;

    const url = `https://wa.me/919167702121?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setOrderConfirmed(true);
  };

  const handleWorkshopSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workshopName || !workshopPhone || !selectedCourse) return;
    setWorkshopSuccess(true);

    const msg = `*Workshop Registration — Bloom School*\n\n` +
      `*Course:* ${selectedCourse.title}\n` +
      `*Schedule:* ${workshopDate} (${selectedCourse.duration})\n` +
      `*Participants:* ${workshopSeats} person(s)\n` +
      `*Total Fee:* ₹${selectedCourse.price * workshopSeats}\n\n` +
      `*Student Details:*\n` +
      `Name: ${workshopName}\n` +
      `Phone: ${workshopPhone}\n\n` +
      `Please confirm my slot reservation. Thank you!`;

    setTimeout(() => {
      window.open(`https://wa.me/919167702121?text=${encodeURIComponent(msg)}`, '_blank');
    }, 600);
  };

  // Filtered products for Search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return BREW_BLOOM_PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filtered products for Shop All
  const filteredShopProducts = useMemo(() => {
    let prods = [...BREW_BLOOM_PRODUCTS];
    if (shopCategory !== 'All') {
      prods = prods.filter(p => p.category === shopCategory);
    }
    if (shopSort === 'low-high') {
      prods.sort((a, b) => a.price - b.price);
    } else if (shopSort === 'high-low') {
      prods.sort((a, b) => b.price - a.price);
    }
    return prods;
  }, [shopCategory, shopSort]);

  // Specialty Coffee Microlots
  const coffeeMicrolots = useMemo(() => {
    return BREW_BLOOM_PRODUCTS.filter(p => p.category === 'Specialty Coffee');
  }, []);

  // Fine Cacao Range
  const cacaoProducts = useMemo(() => {
    return BREW_BLOOM_PRODUCTS.filter(p => p.category === 'Fine Cacao');
  }, []);

  // Craft Bakehouse Range
  const bakehouseProducts = useMemo(() => {
    return BREW_BLOOM_PRODUCTS.filter(p => p.category === 'Craft Bakehouse');
  }, []);

  // Filtered locations
  const filteredLocations = useMemo(() => {
    if (locationCity === 'All') return BREW_BLOOM_LOCATIONS;
    return BREW_BLOOM_LOCATIONS.filter(l => l.city === locationCity);
  }, [locationCity]);

  const navigateTab = (tab: BrewBloomTab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] text-[#1a1a1a] font-['IBM_Plex_Sans',system-ui,sans-serif] selection:bg-[#c49a6c] selection:text-white">

      {/* AI Studio Platform Bar */}
      <div className="bg-[#111111] text-[#f4e8d5] text-xs py-2 px-4 border-b border-[#222222] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold tracking-wide">BREW & BLOOM · Official Specialty Roasters</span>
          <span className="text-[#c49a6c] hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline text-[11px]">Subcontinental Origin · Pan-India Dispatch</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveView('dashboard')}
            className="text-[11px] font-bold px-2.5 py-1 bg-[#c49a6c] hover:bg-[#d9aa72] text-[#111111] rounded-lg transition-colors cursor-pointer"
          >
            ← Back to Dashboard
          </button>
          <button
            onClick={() => setActiveView('home')}
            className="text-[11px] text-slate-300 hover:text-white underline cursor-pointer"
          >
            RaoSitez Home
          </button>
        </div>
      </div>

      {/* Top Announcement Bar */}
      <div className="bg-[#1a1a1a] text-[#fff8f2] py-2 px-4 text-xs font-medium border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center">
          <div className="flex items-center gap-2 tracking-wider text-[11px] uppercase">
            <span className="text-[#c49a6c]">●</span>
            <span>Free Pan-India Delivery on orders above ₹1,500</span>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden md:inline text-stone-300">Freshly Roasted Every Monday & Thursday</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-stone-300">
            <button onClick={() => navigateTab('locations')} className="hover:text-[#c49a6c] transition-colors cursor-pointer">
              Our 7 Roastery Cafes
            </button>
            <span>·</span>
            <button onClick={() => navigateTab('bloomschool')} className="hover:text-[#c49a6c] transition-colors cursor-pointer">
              Bloom School Workshops
            </button>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#fff8f2]/95 backdrop-blur-md border-b border-stone-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Left: Mobile Menu Toggle & Brand Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-900 hover:text-[#c49a6c] transition-colors"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

            <button
              onClick={() => navigateTab('home')}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-[#fff8f2] flex items-center justify-center font-['Alegreya_Sans'] font-extrabold text-xl tracking-tighter border border-stone-700 group-hover:bg-[#c49a6c] transition-colors">
                B&B
              </div>
              <div>
                <h1 className="font-['Alegreya_Sans'] text-2xl sm:text-3xl font-black tracking-wider text-[#1a1a1a] leading-none">
                  BREW & BLOOM
                </h1>
                <p className="text-[9px] font-bold tracking-[0.25em] text-[#8c5835] uppercase mt-0.5">
                  Coffee · Bakehouse · Fine Cacao
                </p>
              </div>
            </button>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 font-['Alegreya_Sans'] text-[15px] font-semibold tracking-wide text-stone-800">
            <button
              onClick={() => navigateTab('coffee')}
              className={`py-1 hover:text-[#a84b29] transition-colors cursor-pointer ${currentTab === 'coffee' ? 'text-[#a84b29] border-b-2 border-[#a84b29]' : ''}`}
            >
              Specialty Coffee
            </button>
            <button
              onClick={() => navigateTab('cacao')}
              className={`py-1 hover:text-[#a84b29] transition-colors cursor-pointer ${currentTab === 'cacao' ? 'text-[#a84b29] border-b-2 border-[#a84b29]' : ''}`}
            >
              Fine Cacao
            </button>
            <button
              onClick={() => navigateTab('bakehouse')}
              className={`py-1 hover:text-[#a84b29] transition-colors cursor-pointer ${currentTab === 'bakehouse' ? 'text-[#a84b29] border-b-2 border-[#a84b29]' : ''}`}
            >
              Craft Bakehouse
            </button>
            <button
              onClick={() => navigateTab('bloomschool')}
              className={`py-1 hover:text-[#a84b29] transition-colors cursor-pointer ${currentTab === 'bloomschool' ? 'text-[#a84b29] border-b-2 border-[#a84b29]' : ''}`}
            >
              Bloom School
            </button>
            <button
              onClick={() => navigateTab('locations')}
              className={`py-1 hover:text-[#a84b29] transition-colors cursor-pointer ${currentTab === 'locations' ? 'text-[#a84b29] border-b-2 border-[#a84b29]' : ''}`}
            >
              Locations
            </button>
            <button
              onClick={() => navigateTab('shop')}
              className={`py-1 hover:text-[#a84b29] transition-colors cursor-pointer ${currentTab === 'shop' ? 'text-[#a84b29] border-b-2 border-[#a84b29]' : ''}`}
            >
              Shop All
            </button>
            <button
              onClick={() => navigateTab('taufah')}
              className={`py-1 hover:text-[#a84b29] transition-colors cursor-pointer ${currentTab === 'taufah' ? 'text-[#a84b29] border-b-2 border-[#a84b29]' : ''}`}
            >
              Taufah (Gifting)
            </button>
            <button
              onClick={() => navigateTab('story')}
              className={`py-1 hover:text-[#a84b29] transition-colors cursor-pointer ${currentTab === 'story' ? 'text-[#a84b29] border-b-2 border-[#a84b29]' : ''}`}
            >
              Our Origin
            </button>
          </nav>

          {/* Right: Search, Contact & Cart */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
              title="Search Coffees, Bakes, Chocolates"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigateTab('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-300 text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Contact
            </button>

            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative flex items-center gap-2 p-2 px-3 rounded-full bg-[#1a1a1a] text-[#fff8f2] hover:bg-[#a84b29] transition-colors cursor-pointer shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-[#c49a6c]" />
              <span className="text-xs font-bold font-mono">₹{cartSubtotal}</span>
              {cartTotalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#c49a6c] text-[#1a1a1a] text-[10px] font-black flex items-center justify-center -ml-1">
                  {cartTotalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fff8f2] border-t border-stone-200 px-6 py-6 space-y-4 shadow-xl">
            <div className="grid grid-cols-2 gap-3 text-sm font-['Alegreya_Sans'] font-bold">
              <button
                onClick={() => navigateTab('home')}
                className={`text-left p-3 rounded-xl ${currentTab === 'home' ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-stone-100 text-stone-800'}`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTab('coffee')}
                className={`text-left p-3 rounded-xl ${currentTab === 'coffee' ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-stone-100 text-stone-800'}`}
              >
                Specialty Coffee
              </button>
              <button
                onClick={() => navigateTab('cacao')}
                className={`text-left p-3 rounded-xl ${currentTab === 'cacao' ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-stone-100 text-stone-800'}`}
              >
                Fine Cacao
              </button>
              <button
                onClick={() => navigateTab('bakehouse')}
                className={`text-left p-3 rounded-xl ${currentTab === 'bakehouse' ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-stone-100 text-stone-800'}`}
              >
                Craft Bakehouse
              </button>
              <button
                onClick={() => navigateTab('bloomschool')}
                className={`text-left p-3 rounded-xl ${currentTab === 'bloomschool' ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-stone-100 text-stone-800'}`}
              >
                Bloom School
              </button>
              <button
                onClick={() => navigateTab('locations')}
                className={`text-left p-3 rounded-xl ${currentTab === 'locations' ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-stone-100 text-stone-800'}`}
              >
                Cafes & Locations
              </button>
              <button
                onClick={() => navigateTab('shop')}
                className={`text-left p-3 rounded-xl ${currentTab === 'shop' ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-stone-100 text-stone-800'}`}
              >
                Shop All (65 Items)
              </button>
              <button
                onClick={() => navigateTab('taufah')}
                className={`text-left p-3 rounded-xl ${currentTab === 'taufah' ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-stone-100 text-stone-800'}`}
              >
                Taufah (Gifting)
              </button>
            </div>
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
              <button onClick={() => navigateTab('story')} className="underline">Our Origin Philosophy</button>
              <button onClick={() => navigateTab('contact')} className="underline">Contact & Careers</button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* VIEW: HOME PAGE                                                           */}
      {/* ========================================================================= */}
      {currentTab === 'home' && (
        <div>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-[#1a1a1a] text-[#fff8f2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-[#c49a6c] text-xs font-mono tracking-widest uppercase">
                  <span>Subcontinental Specialty Movement</span>
                </div>
                <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                  Reimagining and reinventing an unlikely origin.
                </h1>
                <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
                  BREW & BLOOM Specialty Coffee Roasters, Craft Bakehouse, and Fine Cacao is committed to an ideal: to position the Indian subcontinent as a legitimate, world-class contributor to the global specialty coffee, craft baking, and bean-to-bar cacao movements.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => navigateTab('coffee')}
                    className="min-h-[48px] px-7 py-3 rounded-full bg-[#c49a6c] hover:bg-[#d9aa72] text-[#1a1a1a] font-['Alegreya_Sans'] font-bold text-base transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    Explore Microlots
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateTab('cacao')}
                    className="min-h-[48px] px-7 py-3 rounded-full border border-stone-600 hover:border-stone-400 text-[#fff8f2] font-['Alegreya_Sans'] font-bold text-base transition-colors cursor-pointer"
                  >
                    The Cacao Mill
                  </button>
                  <button
                    onClick={() => navigateTab('bakehouse')}
                    className="min-h-[48px] px-7 py-3 rounded-full border border-stone-600 hover:border-stone-400 text-[#fff8f2] font-['Alegreya_Sans'] font-bold text-base transition-colors cursor-pointer"
                  >
                    Craft Bakehouse
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-stone-700 shadow-2xl aspect-[4/5] bg-stone-900">
                  <img
                    src="/assets/brew-bloom/hero-coffee.jpg"
                    alt="BREW & BLOOM specialty roastery and origin beans"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#c49a6c]">
                      Direct Trade · Lot #GS Traditional Naturals
                    </span>
                    <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-white mt-1">
                      Project Sankalp: Garo Hills, Meghalaya (SCA 87)
                    </h3>
                    <p className="text-xs text-stone-300 mt-2 line-clamp-2">
                      Grown by smallholders in the misty Garo Hills. High-altitude natural processing yielding stone fruit sweetness and sparkling wild honey finish.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-bold text-white font-mono">₹1,095 / 250g</span>
                      <button
                        onClick={() => {
                          const p = BREW_BLOOM_PRODUCTS.find(x => x.id.includes('Garo') || x.handle.includes('garo'));
                          if (p) addToCart(p);
                        }}
                        className="text-xs font-bold px-4 py-2 rounded-full bg-[#c49a6c] text-[#1a1a1a] hover:bg-white transition-colors cursor-pointer"
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4 Core Pillars */}
          <section className="py-16 sm:py-20 bg-[#fff8f2] border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
                  Our Ecosystem
                </span>
                <h2 className="font-['Alegreya_Sans'] text-3xl sm:text-5xl font-black text-stone-900 mt-2">
                  Four Craft Disciplines Under One Roof
                </h2>
                <p className="text-stone-600 text-sm sm:text-base mt-3">
                  Each division represents deep field research, direct agricultural partnerships, and rigorous artisanal execution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Pillar 1 */}
                <div
                  onClick={() => navigateTab('coffee')}
                  className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-[#a84b29] transition-all cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#fff8f2] border border-stone-300 flex items-center justify-center text-[#a84b29] mb-4 group-hover:bg-[#a84b29] group-hover:text-white transition-colors">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8c5835]">
                    Pillar 01
                  </span>
                  <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900 mt-1 group-hover:text-[#a84b29] transition-colors">
                    Specialty Coffee
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Single estate microlots sourced from Karnataka, Meghalaya, Kerala, and Nepal. Omni and filter roasts calibrated on a Loring S35 smart roaster.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#a84b29] mt-4">
                    Explore Single Origins <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Pillar 2 */}
                <div
                  onClick={() => navigateTab('cacao')}
                  className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-[#a84b29] transition-all cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#fff8f2] border border-stone-300 flex items-center justify-center text-[#a84b29] mb-4 group-hover:bg-[#a84b29] group-hover:text-white transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8c5835]">
                    Pillar 02
                  </span>
                  <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900 mt-1 group-hover:text-[#a84b29] transition-colors">
                    Fine Cacao
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Pod-to-bar chocolate mill crafting 70% single origin terroir bars from Pollachi, West Godavari, and Idukki with zero industrial emulsifiers.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#a84b29] mt-4">
                    Visit The Cacao Mill <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Pillar 3 */}
                <div
                  onClick={() => navigateTab('bakehouse')}
                  className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-[#a84b29] transition-all cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#fff8f2] border border-stone-300 flex items-center justify-center text-[#a84b29] mb-4 group-hover:bg-[#a84b29] group-hover:text-white transition-colors">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8c5835]">
                    Pillar 03
                  </span>
                  <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900 mt-1 group-hover:text-[#a84b29] transition-colors">
                    Craft Bakehouse
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    A micro-batch rustic bakery commencing at 5 AM daily. 36-hour sourdoughs, laminated cruffins, experimental fruit tarts, and cultured butter.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#a84b29] mt-4">
                    Daily 5 AM Bakes <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Pillar 4 */}
                <div
                  onClick={() => navigateTab('bloomschool')}
                  className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-[#a84b29] transition-all cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#fff8f2] border border-stone-300 flex items-center justify-center text-[#a84b29] mb-4 group-hover:bg-[#a84b29] group-hover:text-white transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8c5835]">
                    Pillar 04
                  </span>
                  <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900 mt-1 group-hover:text-[#a84b29] transition-colors">
                    Bloom School
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Sensory coffee education, SCA cupping protocols, home espresso calibration, and bean-to-bar tempering masterclasses led by Q-graders.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#a84b29] mt-4">
                    View Workshops <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Specialty Coffees Carousel/Grid */}
          <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
                    Harvest In Season
                  </span>
                  <h2 className="font-['Alegreya_Sans'] text-3xl sm:text-5xl font-black text-stone-900 mt-1">
                    Specialty Microlots Sourced Direct
                  </h2>
                </div>
                <button
                  onClick={() => navigateTab('coffee')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#a84b29] hover:underline"
                >
                  View all single origins ({coffeeMicrolots.length}) <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {coffeeMicrolots.slice(0, 4).map(product => (
                  <div
                    key={product.id}
                    className="bg-[#fff8f2] rounded-2xl border border-stone-200 overflow-hidden flex flex-col hover:border-[#a84b29] transition-all group"
                  >
                    <div
                      onClick={() => setSelectedProduct(product)}
                      className="aspect-square bg-stone-100 overflow-hidden relative cursor-pointer"
                    >
                      <img
                        src={product.primaryImage}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.scaScore && (
                        <div className="absolute top-3 left-3 bg-[#1a1a1a] text-[#c49a6c] px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider">
                          SCA {product.scaScore}
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-stone-800 px-2 py-0.5 rounded text-[10px] font-mono">
                        {product.origin}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#8c5835]">
                          {product.roastLevel}
                        </span>
                        <h3
                          onClick={() => setSelectedProduct(product)}
                          className="font-['Alegreya_Sans'] text-lg font-bold text-stone-900 mt-1 line-clamp-2 hover:text-[#a84b29] cursor-pointer"
                        >
                          {product.title}
                        </h3>

                        <div className="flex flex-wrap gap-1 mt-2.5">
                          {product.tastingNotes.slice(0, 3).map((note, idx) => (
                            <span key={idx} className="text-[10px] bg-stone-200/70 text-stone-700 px-1.5 py-0.5 rounded">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-stone-200 flex items-center justify-between">
                        <span className="text-base font-extrabold font-mono text-stone-900">
                          ₹{product.price}
                        </span>
                        <button
                          onClick={() => addToCart(product)}
                          className="px-4 py-2 rounded-full bg-[#1a1a1a] text-[#fff8f2] text-xs font-bold hover:bg-[#a84b29] transition-colors cursor-pointer"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Fine Cacao Spotlight */}
          <section className="py-16 sm:py-24 bg-[#1a1a1a] text-[#fff8f2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#c49a6c]">
                  Bean to Bar · Indian Origin Cacao
                </span>
                <h2 className="font-['Alegreya_Sans'] text-3xl sm:text-5xl font-black text-white leading-tight">
                  The Cacao Mill: Honoring Subcontinental Soils
                </h2>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Indian cacao has long been treated as filler. At our dedicated 4,000 sq ft Cacao Mill in Byculla, Mumbai, we ferment, dry, roast, winnow, and stone-conch Indian cacao pods into single-origin 70% dark chocolate terroir bars that rival the finest origins in South America and Madagascar.
                </p>
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-stone-800">
                  <div>
                    <span className="text-xs font-mono text-[#c49a6c] block">POLLACHI, TAMIL NADU</span>
                    <p className="text-xs text-stone-300 mt-1">Intercropped with coconut groves; deep tropical berry sweetness.</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#c49a6c] block">WEST GODAVARI, ANDHRA</span>
                    <p className="text-xs text-stone-300 mt-1">Rich delta alluvial soils; hazelnut, malt, and dark cacao notes.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => navigateTab('cacao')}
                    className="min-h-[46px] px-6 py-2.5 rounded-full bg-[#c49a6c] text-[#1a1a1a] font-['Alegreya_Sans'] font-bold text-sm hover:bg-white transition-colors cursor-pointer"
                  >
                    Explore Terroir Chocolate
                  </button>
                  <button
                    onClick={() => {
                      const course = BREW_BLOOM_BLOOMSCHOOL_COURSES.find(c => c.id.includes('cacao'));
                      if (course) setSelectedCourse(course);
                    }}
                    className="min-h-[46px] px-6 py-2.5 rounded-full border border-stone-600 text-white font-['Alegreya_Sans'] font-bold text-sm hover:border-stone-400 transition-colors cursor-pointer"
                  >
                    Book Pod Experience
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-stone-700 bg-stone-900 aspect-[4/3] relative">
                  <img
                    src="/assets/brew-bloom/cacao-mill.png"
                    alt="The Cacao Mill stone melangers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1.5 rounded-md text-[11px] font-mono text-[#c49a6c] border border-stone-700">
                    Stone Melanger · 72-Hour Conching
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Craft Bakehouse Spotlight */}
          <section className="py-16 sm:py-24 bg-[#fff8f2] border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-stone-300 aspect-[4/3] bg-stone-100">
                  <img
                    src="/assets/brew-bloom/locations-hero.webp"
                    alt="Craft Bakehouse daily viennoiserie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
                  Micro-Batch Rustic Baking
                </span>
                <h2 className="font-['Alegreya_Sans'] text-3xl sm:text-5xl font-black text-stone-900 leading-tight">
                  Craft Bakes: An Ode to Daily Bread Culture
                </h2>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  The BREW & BLOOM Specialty Bakehouse is a harmonious blend of heritage bread culture and daring culinary experimentation. Our bakers arrive at 5 AM each morning to laminate French cultured butter, shape 36-hour cold-fermented wild sourdough loaves, and craft our signature Cruffins and Savoury Danish bakes.
                </p>
                <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 border-b border-stone-100 pb-2">
                    <span>5:00 AM — First Hearth Pull</span>
                    <span className="text-[#a84b29] font-bold">100% Sourdough Loaves</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 border-b border-stone-100 pb-2">
                    <span>8:00 AM — Morning Lamination</span>
                    <span className="text-[#a84b29] font-bold">Pain au Chocolat & Cruffins</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>1:00 PM — Afternoon Fresh Batch</span>
                    <span className="text-[#a84b29] font-bold">DIY Cookie Croissant (DYOC)</span>
                  </div>
                </div>
                <button
                  onClick={() => navigateTab('bakehouse')}
                  className="min-h-[46px] px-7 py-2.5 rounded-full bg-[#1a1a1a] text-[#fff8f2] font-['Alegreya_Sans'] font-bold text-sm hover:bg-[#a84b29] transition-colors cursor-pointer"
                >
                  Explore Bakehouse Menu
                </button>
              </div>
            </div>
          </section>

          {/* Locations Snapshot */}
          <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
                    Architecture & Ambiance
                  </span>
                  <h2 className="font-['Alegreya_Sans'] text-3xl sm:text-5xl font-black text-stone-900 mt-1">
                    Visit Our Spaces Across India
                  </h2>
                </div>
                <button
                  onClick={() => navigateTab('locations')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#a84b29] hover:underline"
                >
                  View all 7 locations & timings <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BREW_BLOOM_LOCATIONS.slice(0, 3).map(loc => (
                  <div
                    key={loc.id}
                    onClick={() => navigateTab('locations')}
                    className="bg-[#fff8f2] rounded-2xl border border-stone-200 overflow-hidden cursor-pointer hover:border-[#a84b29] transition-all group"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-stone-200 relative">
                      <img
                        src={loc.image}
                        alt={loc.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#1a1a1a] text-[#c49a6c] px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase">
                        {loc.city}
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-mono text-[#8c5835]">{loc.subtitle}</span>
                      <h3 className="font-['Alegreya_Sans'] text-xl font-bold text-stone-900 mt-1 group-hover:text-[#a84b29] transition-colors">
                        {loc.name}
                      </h3>
                      <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                        {loc.description}
                      </p>
                      <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                        <span>{loc.hours}</span>
                        <span className="font-bold text-[#a84b29]">View Details →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: SPECIALTY COFFEE PAGE                                               */}
      {/* ========================================================================= */}
      {currentTab === 'coffee' && (
        <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-300 pb-10 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
              Single Origin Specialty Coffee Projects
            </span>
            <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-6xl font-black text-stone-900 mt-2">
              Meticulously Sourced From The Subcontinent
            </h1>
            <p className="text-stone-700 max-w-3xl mt-4 text-base leading-relaxed">
              We work directly with visionary Indian coffee estates across Karnataka, Meghalaya, and Nepal. Every microlot is traceable to the block, processed with experimental methods (Thermal Shock, Anaerobic Honey, Washed, Carbonic Maceration), and roasted in small 12kg to 35kg weekly batches.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-stone-200 font-mono text-xs">
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <span className="text-stone-400 block text-[10px]">AVG CUPPING SCORE</span>
                <b className="text-lg text-stone-900">SCA 86+</b>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <span className="text-stone-400 block text-[10px]">FARM-GATE VALUE</span>
                <b className="text-lg text-stone-900">Up to 3x Commodity</b>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <span className="text-stone-400 block text-[10px]">ROAST PROFILES</span>
                <b className="text-lg text-stone-900">Light / Omni / Dark</b>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <span className="text-stone-400 block text-[10px]">DISPATCH CYCLE</span>
                <b className="text-lg text-stone-900">Roasted Fresh Weekly</b>
              </div>
            </div>
          </div>

          {/* Coffee Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeMicrolots.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col hover:border-[#a84b29] transition-all group shadow-xs"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="aspect-square bg-stone-100 overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.scaScore && (
                    <div className="absolute top-3 left-3 bg-[#1a1a1a] text-[#c49a6c] px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider">
                      SCA {product.scaScore}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-stone-800 px-2 py-0.5 rounded text-[10px] font-mono">
                    {product.origin}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8c5835]">
                      {product.roastLevel}
                    </span>
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-['Alegreya_Sans'] text-xl font-bold text-stone-900 mt-1 line-clamp-2 hover:text-[#a84b29] cursor-pointer"
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-3">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {product.tastingNotes.map((note, idx) => (
                        <span key={idx} className="text-[10px] bg-[#fff8f2] text-[#8c5835] border border-stone-200 px-2 py-0.5 rounded font-mono">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block font-mono">250g Whole Bean</span>
                      <span className="text-lg font-bold font-mono text-stone-900">
                        ₹{product.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="px-3 py-2 rounded-full border border-stone-300 text-stone-800 text-xs font-semibold hover:bg-stone-100 transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-4 py-2 rounded-full bg-[#1a1a1a] text-[#fff8f2] text-xs font-bold hover:bg-[#a84b29] transition-colors cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: FINE CACAO PAGE                                                     */}
      {/* ========================================================================= */}
      {currentTab === 'cacao' && (
        <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-300 pb-10 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
              Bean To Bar Movement
            </span>
            <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-6xl font-black text-stone-900 mt-2">
              Bringing Fine Indian Cacao to the Forefront
            </h1>
            <p className="text-stone-700 max-w-3xl mt-4 text-base leading-relaxed">
              India produces some of the most vibrant, fruit-forward cacao pods in the world, yet commercial mass chocolate masks these flavors under palm oil and industrial sugar. In our Cacao Mill, we preserve the nuanced terroir of South Indian farms through careful fermentation, gentle roasting, and 72-hour granite stone grinding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cacaoProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col hover:border-[#a84b29] transition-all group shadow-xs"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="aspect-square bg-stone-100 overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1a1a1a] text-[#c49a6c] px-2.5 py-1 rounded text-[10px] font-mono font-bold">
                    Single Estate Cacao
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8c5835]">
                      {product.origin}
                    </span>
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-['Alegreya_Sans'] text-xl font-bold text-stone-900 mt-1 line-clamp-2 hover:text-[#a84b29] cursor-pointer"
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-lg font-bold font-mono text-stone-900">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 rounded-full bg-[#1a1a1a] text-[#fff8f2] text-xs font-bold hover:bg-[#a84b29] transition-colors cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: CRAFT BAKEHOUSE PAGE                                                */}
      {/* ========================================================================= */}
      {currentTab === 'bakehouse' && (
        <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-300 pb-10 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
              Daily Bread Culture & Viennoiserie
            </span>
            <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-6xl font-black text-stone-900 mt-2">
              Craft Bakes: Experimental. Fresh. Subcontinental.
            </h1>
            <p className="text-stone-700 max-w-3xl mt-4 text-base leading-relaxed">
              Every day at 5 AM, our bakehouse team commences wild sourdough fermentation and 27-layer butter lamination. We marry traditional European viennoiserie methods with subcontinental spices, pod chocolate, and local fruits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bakehouseProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col hover:border-[#a84b29] transition-all group shadow-xs"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="aspect-square bg-stone-100 overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#c49a6c] text-[#1a1a1a] px-2.5 py-1 rounded text-[10px] font-mono font-bold">
                    Daily 5 AM Hearth
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-['Alegreya_Sans'] text-xl font-bold text-stone-900 mt-1 line-clamp-2 hover:text-[#a84b29] cursor-pointer"
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-lg font-bold font-mono text-stone-900">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 rounded-full bg-[#1a1a1a] text-[#fff8f2] text-xs font-bold hover:bg-[#a84b29] transition-colors cursor-pointer"
                    >
                      Order / Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: BLOOM SCHOOL PAGE                                                   */}
      {/* ========================================================================= */}
      {currentTab === 'bloomschool' && (
        <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-300 pb-10 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
              Education & Sensory Lab
            </span>
            <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-6xl font-black text-stone-900 mt-2">
              Bloom School: Master the Science of Extraction
            </h1>
            <p className="text-stone-700 max-w-3xl mt-4 text-base leading-relaxed">
              Designed for passionate home brewers, aspiring baristas, and curious coffee lovers. Bloom School hosts hands-on masterclasses across Mumbai, Bangalore, and Delhi covering water chemistry, roast profiling, sensory triangulation cuppings, and chocolate tempering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BREW_BLOOM_BLOOMSCHOOL_COURSES.map(course => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col shadow-xs"
              >
                <div className="aspect-[16/9] overflow-hidden bg-stone-100 relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#1a1a1a] text-[#c49a6c] px-3 py-1 rounded text-xs font-mono font-bold">
                    {course.level} Level
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded text-xs font-mono text-stone-900 font-bold">
                    {course.duration}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#8c5835] block">{course.schedule}</span>
                    <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900 mt-1">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-stone-100">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 block mb-2">
                        What's Included:
                      </span>
                      <ul className="space-y-1 text-xs text-stone-700">
                        {course.takeaways.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-stone-400 block">Workshop Fee</span>
                      <span className="text-xl font-bold font-mono text-stone-900">₹{course.price}</span>
                    </div>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="px-6 py-2.5 rounded-full bg-[#1a1a1a] text-[#fff8f2] text-xs font-bold hover:bg-[#a84b29] transition-colors cursor-pointer"
                    >
                      Reserve Slot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: LOCATIONS PAGE                                                      */}
      {/* ========================================================================= */}
      {currentTab === 'locations' && (
        <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-300 pb-10 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
              Spaces & Roasteries
            </span>
            <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-6xl font-black text-stone-900 mt-2">
              Our 7 Flagship Roastery Cafes
            </h1>
            <p className="text-stone-700 max-w-3xl mt-4 text-base leading-relaxed">
              Every BREW & BLOOM space is designed to reflect its architectural heritage while featuring our signature pour-over brew bars, live bakeries, and single-origin chocolate cellars.
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-8">
              {['All', 'Mumbai', 'Bengaluru', 'New Delhi', 'Hyderabad'].map(city => (
                <button
                  key={city}
                  onClick={() => setLocationCity(city)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${locationCity === city ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'}`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {filteredLocations.map(loc => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs"
              >
                <div className="lg:col-span-5 bg-stone-100 aspect-[16/10] lg:aspect-auto">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#a84b29] font-bold uppercase">{loc.city}</span>
                      <span className="text-stone-300">·</span>
                      <span className="text-xs font-mono text-stone-500">{loc.subtitle}</span>
                    </div>

                    <h2 className="font-['Alegreya_Sans'] text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                      {loc.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                      {loc.description}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <span className="font-mono text-stone-400 text-[10px] block">ADDRESS</span>
                        <p className="text-stone-800 font-medium">{loc.address}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-stone-400 text-[10px] block">OPERATING HOURS</span>
                        <p className="text-stone-800 font-medium">{loc.hours}</p>
                        <p className="text-stone-500 font-mono">{loc.phone}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {loc.features.map((feat, idx) => (
                        <span key={idx} className="text-[10px] font-mono bg-[#fff8f2] text-stone-700 px-2 py-0.5 rounded border border-stone-200">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a84b29] hover:underline"
                    >
                      <MapPin className="w-4 h-4" />
                      Get Directions on Google Maps ↗
                    </a>
                    <button
                      onClick={() => navigateTab('shop')}
                      className="px-4 py-2 rounded-full bg-[#1a1a1a] text-[#fff8f2] text-xs font-bold hover:bg-[#a84b29] transition-colors cursor-pointer"
                    >
                      Order for Pickup / Dine-in
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: SHOP ALL PRODUCTS CATALOG                                           */}
      {/* ========================================================================= */}
      {currentTab === 'shop' && (
        <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-300 pb-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
                Complete Specialty Store
              </span>
              <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-5xl font-black text-stone-900 mt-1">
                Shop Specialty Goods ({filteredShopProducts.length})
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-stone-500">Sort by:</span>
              <select
                value={shopSort}
                onChange={e => setShopSort(e.target.value as any)}
                className="bg-white border border-stone-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-stone-800"
              >
                <option value="featured">Featured / Newest</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
            {['All', 'Specialty Coffee', 'Fine Cacao', 'Craft Bakehouse', 'Ready To Drink', 'Brewing Gear', 'Experiences', 'Gifting & Merch'].map(cat => (
              <button
                key={cat}
                onClick={() => setShopCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${shopCategory === cat ? 'bg-[#1a1a1a] text-[#fff8f2]' : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredShopProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col hover:border-[#a84b29] transition-all group shadow-xs"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="aspect-square bg-stone-100 overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.scaScore && (
                    <div className="absolute top-3 left-3 bg-[#1a1a1a] text-[#c49a6c] px-2.5 py-1 rounded text-[10px] font-mono font-bold">
                      SCA {product.scaScore}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-stone-800 px-2 py-0.5 rounded text-[10px] font-mono">
                    {product.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8c5835]">
                      {product.origin}
                    </span>
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-['Alegreya_Sans'] text-lg font-bold text-stone-900 mt-1 line-clamp-2 hover:text-[#a84b29] cursor-pointer"
                    >
                      {product.title}
                    </h3>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-base font-bold font-mono text-stone-900">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-1.5 rounded-full bg-[#1a1a1a] text-[#fff8f2] text-xs font-bold hover:bg-[#a84b29] transition-colors cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: TAUFAH (GIFTING) PAGE                                               */}
      {/* ========================================================================= */}
      {currentTab === 'taufah' && (
        <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-300 pb-10 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
              Curated Hampers & Corporate Gifting
            </span>
            <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-6xl font-black text-stone-900 mt-2">
              Taufah: Thoughtful Specialty Gifting
            </h1>
            <p className="text-stone-700 max-w-3xl mt-4 text-base leading-relaxed">
              Pairing our single-origin coffees with craft terroir chocolates, pour-over drippers, and seasonal baked goods. Wrapped in our signature illustrated botanical sleeves inspired by Indian coffee estates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BREW_BLOOM_PRODUCTS.filter(p => p.category === 'Gifting & Merch' || p.category === 'Experiences').map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col hover:border-[#a84b29] transition-all group shadow-xs"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="aspect-square bg-stone-100 overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#c49a6c] text-[#1a1a1a] px-2.5 py-1 rounded text-[10px] font-mono font-bold">
                    Signature Hamper
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-['Alegreya_Sans'] text-xl font-bold text-stone-900 mt-1 line-clamp-2 hover:text-[#a84b29] cursor-pointer"
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-lg font-bold font-mono text-stone-900">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 rounded-full bg-[#1a1a1a] text-[#fff8f2] text-xs font-bold hover:bg-[#a84b29] transition-colors cursor-pointer"
                    >
                      Select Box
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: OUR ORIGIN & PHILOSOPHY                                             */}
      {/* ========================================================================= */}
      {currentTab === 'story' && (
        <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-300 pb-10 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
              Subcontinental Heritage & Vision
            </span>
            <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-6xl font-black text-stone-900 mt-2">
              Our Origin: Reimagining Indian Specialty Craft
            </h1>
          </div>

          <div className="space-y-8 text-stone-800 leading-relaxed text-base sm:text-lg">
            <p>
              For centuries, the Indian subcontinent has been one of the world’s largest producers of coffee and cacao. Yet, almost all of the harvest was treated as bulk commercial raw commodities exported overseas, with very little value or pride left behind.
            </p>
            <p>
              <b>BREW & BLOOM</b> was founded on a singular obsession: to reclaim and celebrate the terroir of the subcontinent. We work with progressive growers across the shade-grown coffee canopies of Chikmagalur, the misty elevations of Meghalaya’s Garo Hills, the wild alluvial rivers of Pollachi and Idukki for cacao, and the high-altitude terraced hills of Nepal.
            </p>

            <div className="my-12 p-8 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900">
                Our Four Core Commitments:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BREW_BLOOM_PHILOSOPHY.pillars.map((pil, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-xs font-mono text-[#a84b29] font-bold">0{idx + 1} // {pil.title}</span>
                    <p className="text-xs text-stone-600">{pil.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Every bag of coffee you brew and every bar of cacao you unwrap carries a barcode of traceability back to the estate, altitude, processing tank, and harvest lot. Thank you for joining us on this journey.
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: CONTACT & CAREERS                                                   */}
      {/* ========================================================================= */}
      {currentTab === 'contact' && (
        <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8c5835]">
                Get in Touch
              </span>
              <h1 className="font-['Alegreya_Sans'] text-4xl sm:text-5xl font-black text-stone-900">
                Connect With BREW & BLOOM
              </h1>
              <p className="text-stone-600 text-sm leading-relaxed">
                Whether you are exploring wholesale supply for your cafe or hotel, seeking corporate gifting, press features, or joining our roastery and pastry teams.
              </p>

              <div className="space-y-4 pt-4 text-xs font-mono text-stone-700">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#a84b29]" />
                  <span>concierge@brewandbloom.coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#a84b29]" />
                  <span>+91 91677 02121 / +91 91677 02122</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#a84b29]" />
                  <span>Mary Lodge, 21A Chapel Rd, Ranwar, Bandra West, Mumbai</span>
                </div>
              </div>

              <div className="p-6 bg-[#1a1a1a] text-[#fff8f2] rounded-2xl space-y-3 mt-8">
                <span className="text-xs font-mono text-[#c49a6c] uppercase">Careers at BREW & BLOOM</span>
                <p className="text-xs text-stone-300">
                  We are hiring Head Roasters, Pastry Sous Chefs, and Specialty Baristas across Mumbai, Bangalore, and Delhi.
                </p>
                <a
                  href="mailto:careers@brewandbloom.coffee"
                  className="inline-block text-xs font-bold text-[#c49a6c] hover:underline"
                >
                  Send your portfolio to careers@brewandbloom.coffee →
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm">
              {contactDone ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900">
                    Message Received
                  </h3>
                  <p className="text-xs text-stone-600 max-w-md mx-auto">
                    Thank you, {contactName}. Our concierge team will review your message and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setContactDone(false);
                      setContactMsg('');
                    }}
                    className="px-6 py-2 rounded-full bg-stone-100 text-xs font-bold text-stone-800 hover:bg-stone-200"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    if (!contactName || !contactEmail) return;
                    setContactDone(true);
                  }}
                  className="space-y-4"
                >
                  <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900 mb-2">
                    Send a Message
                  </h3>

                  <div>
                    <label className="text-[11px] font-mono text-stone-500 uppercase block mb-1">Subject</label>
                    <select
                      value={contactSubject}
                      onChange={e => setContactSubject(e.target.value)}
                      className="w-full bg-[#fff8f2] border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-none focus:border-[#a84b29]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Wholesale Coffee Supply">Wholesale Coffee Supply (Cafes / Hotels)</option>
                      <option value="Corporate Gifting (Taufah)">Corporate Gifting (Taufah)</option>
                      <option value="Event Space Booking">Event Space & Workshop Booking</option>
                      <option value="Press / Media">Press / Media Partnership</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-stone-500 uppercase block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={e => setContactName(e.target.value)}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full bg-[#fff8f2] border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-none focus:border-[#a84b29]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-stone-500 uppercase block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={e => setContactEmail(e.target.value)}
                        placeholder="ananya@example.com"
                        className="w-full bg-[#fff8f2] border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-none focus:border-[#a84b29]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-stone-500 uppercase block mb-1">Message Details</label>
                    <textarea
                      rows={4}
                      required
                      value={contactMsg}
                      onChange={e => setContactMsg(e.target.value)}
                      placeholder="Tell us what you have in mind..."
                      className="w-full bg-[#fff8f2] border border-stone-200 rounded-xl p-4 text-xs text-stone-800 focus:outline-none focus:border-[#a84b29]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#1a1a1a] text-[#fff8f2] font-['Alegreya_Sans'] font-bold text-sm hover:bg-[#a84b29] transition-colors cursor-pointer"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* GLOBAL FOOTER                                                             */}
      {/* ========================================================================= */}
      <footer className="bg-[#111111] text-[#fff8f2] pt-16 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">

            {/* Col 1: Brand Manifesto */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c49a6c] text-[#111111] flex items-center justify-center font-['Alegreya_Sans'] font-black text-lg">
                  B&B
                </div>
                <h3 className="font-['Alegreya_Sans'] text-2xl font-black tracking-wider text-white">
                  BREW & BLOOM
                </h3>
              </div>
              <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
                Specialty Coffee Roasters, Craft Bakehouse, and Fine Cacao. Reimagining the Indian subcontinent as an origin of uncompromising excellence.
              </p>
              <div className="pt-2 text-xs font-mono text-[#c49a6c]">
                Mary Lodge, Bandra · The Cacao Mill, Byculla · Fort · Indiranagar · Mehrauli
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="font-['Alegreya_Sans'] text-base font-bold text-white mb-4">
                Explore Crafts
              </h4>
              <ul className="space-y-2 text-xs text-stone-400 font-medium">
                <li><button onClick={() => navigateTab('coffee')} className="hover:text-white transition-colors cursor-pointer">Specialty Coffee</button></li>
                <li><button onClick={() => navigateTab('cacao')} className="hover:text-white transition-colors cursor-pointer">Fine Cacao Mill</button></li>
                <li><button onClick={() => navigateTab('bakehouse')} className="hover:text-white transition-colors cursor-pointer">Craft Bakehouse</button></li>
                <li><button onClick={() => navigateTab('bloomschool')} className="hover:text-white transition-colors cursor-pointer">Bloom School</button></li>
                <li><button onClick={() => navigateTab('locations')} className="hover:text-white transition-colors cursor-pointer">Spaces & Cafes</button></li>
                <li><button onClick={() => navigateTab('taufah')} className="hover:text-white transition-colors cursor-pointer">Taufah Gifting</button></li>
              </ul>
            </div>

            {/* Col 3: Customer Care & Policies */}
            <div>
              <h4 className="font-['Alegreya_Sans'] text-base font-bold text-white mb-4">
                Policies & Care
              </h4>
              <ul className="space-y-2 text-xs text-stone-400 font-medium">
                <li><button onClick={() => navigateTab('contact')} className="hover:text-white transition-colors cursor-pointer">Shipping & Dispatch (Pan-India)</button></li>
                <li><button onClick={() => navigateTab('contact')} className="hover:text-white transition-colors cursor-pointer">Refund & Replacement Policy</button></li>
                <li><button onClick={() => navigateTab('contact')} className="hover:text-white transition-colors cursor-pointer">Privacy & Terms of Service</button></li>
                <li><button onClick={() => navigateTab('contact')} className="hover:text-white transition-colors cursor-pointer">Wholesale Enquiries</button></li>
                <li><button onClick={() => navigateTab('contact')} className="hover:text-white transition-colors cursor-pointer">Careers at BREW & BLOOM</button></li>
              </ul>
            </div>

            {/* Col 4: Newsletter */}
            <div>
              <h4 className="font-['Alegreya_Sans'] text-base font-bold text-white mb-4">
                Origin Chronicles
              </h4>
              <p className="text-xs text-stone-400 mb-3 leading-relaxed">
                Receive weekly cupping notes, fresh harvest drops, and Bloom School event passes.
              </p>
              <form onSubmit={e => { e.preventDefault(); alert('Subscribed to BREW & BLOOM Origin Chronicles.'); }} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#c49a6c]"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-[#c49a6c] text-[#111111] text-xs font-bold rounded-lg hover:bg-white transition-colors cursor-pointer"
                >
                  Join Chronicles
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>© 2026 BREW & BLOOM Specialty Coffee Roasters (India). All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>FSSAI Certified</span>
              <span>·</span>
              <span>100% Traceable Indian Specialty Coffee</span>
              <span>·</span>
              <span>Pan-India Courier</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL: PRODUCT DETAIL MODAL                                               */}
      {/* ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#fff8f2] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-300 relative my-8">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Product Imagery */}
              <div className="md:col-span-6 bg-stone-100 p-6 flex flex-col justify-between">
                <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-xs">
                  <img
                    src={productActiveImg || selectedProduct.primaryImage}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {selectedProduct.images.length > 1 && (
                  <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2">
                    {selectedProduct.images.slice(0, 5).map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setProductActiveImg(img)}
                        className={`w-14 h-14 rounded-lg overflow-hidden border-2 flex-shrink-0 cursor-pointer ${productActiveImg === img ? 'border-[#a84b29]' : 'border-stone-300 opacity-60'}`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Specifications & Order Actions */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#8c5835] font-bold uppercase">{selectedProduct.category}</span>
                    <span className="text-stone-300">·</span>
                    <span className="text-[11px] font-mono text-stone-500">{selectedProduct.origin}</span>
                  </div>

                  <h2 className="font-['Alegreya_Sans'] text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    {selectedProduct.title}
                  </h2>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-2xl font-bold font-mono text-stone-900">₹{selectedProduct.price}</span>
                    {selectedProduct.scaScore && (
                      <span className="bg-[#1a1a1a] text-[#c49a6c] px-2.5 py-0.5 rounded text-xs font-mono font-bold">
                        SCA {selectedProduct.scaScore}
                      </span>
                    )}
                    <span className="text-xs font-mono text-stone-500">({selectedProduct.roastLevel})</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 mt-4 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Tasting Notes */}
                  {selectedProduct.tastingNotes.length > 0 && (
                    <div className="mt-4">
                      <span className="text-[10px] font-mono uppercase text-stone-400 block mb-1">Tasting Notes</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProduct.tastingNotes.map((note, idx) => (
                          <span key={idx} className="text-xs bg-white text-stone-800 border border-stone-200 px-2.5 py-1 rounded-md font-medium">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Grind Selector for Coffee */}
                  {selectedProduct.category === 'Specialty Coffee' && (
                    <div className="mt-5">
                      <label className="text-[11px] font-mono uppercase text-stone-500 block mb-1">
                        Select Grind Type
                      </label>
                      <select
                        value={selectedGrind}
                        onChange={e => setSelectedGrind(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-medium text-stone-800 focus:outline-none focus:border-[#a84b29]"
                      >
                        {GRIND_OPTIONS.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Quantity & Add to Cart */}
                <div className="pt-4 border-t border-stone-200 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-stone-300 rounded-full bg-white px-3 py-1">
                      <button
                        onClick={() => setProductQty(Math.max(1, productQty - 1))}
                        className="p-1 text-stone-600 hover:text-black cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-mono font-bold text-stone-900">{productQty}</span>
                      <button
                        onClick={() => setProductQty(productQty + 1)}
                        className="p-1 text-stone-600 hover:text-black cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(selectedProduct, selectedGrind, productQty);
                        setSelectedProduct(null);
                      }}
                      className="flex-1 min-h-[46px] rounded-full bg-[#1a1a1a] hover:bg-[#a84b29] text-[#fff8f2] font-['Alegreya_Sans'] font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart · ₹{selectedProduct.price * productQty}
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-stone-500 text-center">
                    Ships Pan-India in vacuum-sealed valve bags with roast date stamp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DRAWER: SLIDE-OVER CART                                                   */}
      {/* ========================================================================= */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-[#fff8f2] h-full shadow-2xl flex flex-col justify-between">
            {/* Cart Header */}
            <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#c49a6c]" />
                <h3 className="font-['Alegreya_Sans'] text-2xl font-black text-stone-900">
                  Your Cart ({cartTotalItems})
                </h3>
              </div>
              <button
                onClick={() => setCartDrawerOpen(false)}
                className="p-2 text-stone-500 hover:text-stone-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="px-6 py-3 bg-[#1a1a1a] text-xs text-[#fff8f2]">
              {cartSubtotal >= 1500 ? (
                <div className="flex items-center gap-2 text-emerald-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>You have unlocked FREE Pan-India Shipping!</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span>Add ₹{1500 - cartSubtotal} more for Free Shipping</span>
                    <span>₹{cartSubtotal} / ₹1500</span>
                  </div>
                  <div className="w-full bg-stone-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#c49a6c] h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (cartSubtotal / 1500) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Itemized Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <Coffee className="w-12 h-12 text-stone-300 mx-auto" />
                  <p className="font-['Alegreya_Sans'] text-xl font-bold text-stone-700">
                    Your cart is currently empty.
                  </p>
                  <p className="text-xs text-stone-500">
                    Explore our fresh harvest single-origin coffees or fine cacao bars.
                  </p>
                  <button
                    onClick={() => {
                      setCartDrawerOpen(false);
                      navigateTab('shop');
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#1a1a1a] text-white text-xs font-bold hover:bg-[#a84b29] transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.grind}`}
                    className="p-4 bg-white rounded-xl border border-stone-200 flex gap-4"
                  >
                    <img
                      src={item.product.primaryImage}
                      alt={item.product.title}
                      className="w-16 h-16 rounded-lg object-cover bg-stone-100 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                        {item.product.title}
                      </h4>
                      <p className="text-[10px] font-mono text-stone-500 mt-0.5">
                        Grind: {item.grind}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-stone-200 rounded-full px-2 py-0.5 bg-[#fff8f2]">
                          <button
                            onClick={() => updateCartQty(idx, -1)}
                            className="p-0.5 text-stone-600 hover:text-black cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold text-stone-900">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQty(idx, 1)}
                            className="p-0.5 text-stone-600 hover:text-black cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs font-bold font-mono text-stone-900">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer & Checkout Action */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-stone-200 space-y-4">
                {/* Promo Code Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={e => setPromoCode(e.target.value)}
                    placeholder="Coupon code (e.g. BLOOMORIGIN)"
                    className="flex-1 bg-[#fff8f2] border border-stone-200 rounded-lg px-3 py-1.5 text-xs text-stone-900 uppercase font-mono"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-1.5 rounded-lg bg-stone-800 text-white text-xs font-bold hover:bg-black cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-[11px] font-mono text-emerald-600">✓ 10% Welcome Discount applied!</p>
                )}

                {/* Quick Customer Delivery Details */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <input
                    type="text"
                    value={checkoutName}
                    onChange={e => setCheckoutName(e.target.value)}
                    placeholder="Recipient Name (for delivery)"
                    className="w-full bg-[#fff8f2] border border-stone-200 rounded-lg px-3 py-1.5 text-xs text-stone-900"
                  />
                  <input
                    type="tel"
                    value={checkoutPhone}
                    onChange={e => setCheckoutPhone(e.target.value)}
                    placeholder="Phone Number (for shipping updates)"
                    className="w-full bg-[#fff8f2] border border-stone-200 rounded-lg px-3 py-1.5 text-xs text-stone-900"
                  />
                  <input
                    type="text"
                    value={checkoutAddress}
                    onChange={e => setCheckoutAddress(e.target.value)}
                    placeholder="Delivery City & Address"
                    className="w-full bg-[#fff8f2] border border-stone-200 rounded-lg px-3 py-1.5 text-xs text-stone-900"
                  />
                </div>

                <div className="space-y-1.5 pt-2 border-t border-stone-100 text-xs font-mono">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal:</span>
                    <span>₹{cartSubtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Discount:</span>
                      <span>-₹{Math.round(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone-600">
                    <span>Shipping:</span>
                    <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
                    <span>Total:</span>
                    <span>₹{Math.round(cartGrandTotal)}</span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 rounded-full bg-[#1a1a1a] hover:bg-[#a84b29] text-[#fff8f2] font-['Alegreya_Sans'] font-bold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Proceed to Dispatch (WhatsApp)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: SEARCH OVERLAY                                                     */}
      {/* ========================================================================= */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-stone-200 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search single origins, chocolates, bakes, or regions..."
                  className="w-full text-base font-medium text-stone-900 focus:outline-none placeholder-stone-400"
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Keyword Suggestions */}
            <div className="flex items-center gap-2 text-xs text-stone-500 overflow-x-auto pb-1">
              <span>Try:</span>
              {['Ratnagiri', 'Garo Hills', 'Thermal Shock', 'Cacao', 'Sourdough', 'Kalita', 'Cascara'].map(k => (
                <button
                  key={k}
                  onClick={() => setSearchQuery(k)}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-800 px-2 py-0.5 rounded cursor-pointer"
                >
                  {k}
                </button>
              ))}
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto space-y-3">
              {searchQuery && searchResults.length === 0 ? (
                <p className="text-center py-8 text-xs text-stone-500">
                  No matching items found for "{searchQuery}".
                </p>
              ) : (
                searchResults.map(product => (
                  <div
                    key={product.id}
                    onClick={() => {
                      setSelectedProduct(product);
                      setSearchOpen(false);
                    }}
                    className="p-3 bg-[#fff8f2] hover:bg-stone-100 rounded-xl flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.primaryImage}
                        alt={product.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-stone-900">{product.title}</h4>
                        <span className="text-[10px] font-mono text-stone-500">{product.category} · {product.origin}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold font-mono text-stone-900">₹{product.price}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: BLOOM SCHOOL WORKSHOP BOOKING                                      */}
      {/* ========================================================================= */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-stone-200 relative">
            <button
              onClick={() => {
                setSelectedCourse(null);
                setWorkshopSuccess(false);
              }}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>

            {workshopSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900">
                  Seat Reservation Requested
                </h3>
                <p className="text-xs text-stone-600">
                  We have generated your workshop confirmation. Our education coordinator will confirm your seat availability on WhatsApp.
                </p>
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    setWorkshopSuccess(false);
                  }}
                  className="px-6 py-2 rounded-full bg-stone-900 text-white text-xs font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleWorkshopSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#a84b29] font-bold">
                    Bloom School Workshop
                  </span>
                  <h3 className="font-['Alegreya_Sans'] text-2xl font-bold text-stone-900 mt-1">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-xs font-mono text-stone-500 mt-1">
                    {selectedCourse.schedule} · Fee: ₹{selectedCourse.price} / person
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[11px] font-mono text-stone-500 uppercase block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={workshopName}
                      onChange={e => setWorkshopName(e.target.value)}
                      placeholder="e.g. Vikramaditya Rao"
                      className="w-full bg-[#fff8f2] border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-stone-500 uppercase block mb-1">WhatsApp Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={workshopPhone}
                      onChange={e => setWorkshopPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#fff8f2] border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-mono text-stone-500 uppercase block mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={workshopDate}
                        onChange={e => setWorkshopDate(e.target.value)}
                        className="w-full bg-[#fff8f2] border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-stone-500 uppercase block mb-1">Number of Seats</label>
                      <input
                        type="number"
                        min={1}
                        max={6}
                        value={workshopSeats}
                        onChange={e => setWorkshopSeats(Number(e.target.value))}
                        className="w-full bg-[#fff8f2] border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-stone-400 block">Total Tuition</span>
                    <span className="text-xl font-bold font-mono text-stone-900">
                      ₹{selectedCourse.price * workshopSeats}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#1a1a1a] text-[#fff8f2] font-['Alegreya_Sans'] font-bold text-sm hover:bg-[#a84b29] transition-colors cursor-pointer"
                  >
                    Confirm & Reserve Slot
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
