import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Heart,
  Eye,
  MapPin,
  Calendar,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Award,
  RefreshCw,
  Truck,
  ArrowRight,
  Filter,
  SlidersHorizontal,
  ChevronRight,
  Star,
  Search
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { TanishqHeader } from './TanishqHeader';
import { TanishqFooter } from './TanishqFooter';
import {
  ProductDetailModal,
  CartDrawer,
  CheckoutModal,
  AppointmentModal,
  StoreLocatorModal,
  GoldRateModal,
  GuideModal,
  CartItem
} from './TanishqModals';
import {
  TANISHQ_PRODUCTS,
  TANISHQ_COLLECTIONS,
  REGIONAL_BRIDES,
  TanishqProduct
} from '../../data/tanishqData';

export const TanishqApp: React.FC = () => {
  // Navigation & View state
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<TanishqProduct | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [storeLocatorOpen, setStoreLocatorOpen] = useState(false);
  const [goldRateOpen, setGoldRateOpen] = useState(false);
  const [guideModalType, setGuideModalType] = useState<'size' | 'care' | null>(null);

  // Cart & Wishlist state
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: TANISHQ_PRODUCTS[1], // Solitaire Petal Studs
      quantity: 1,
      selectedSize: 14
    }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(['tan-err-01', 'tan-rng-01']);

  // Filters for the Jewellery Shopping view
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [metalFilter, setMetalFilter] = useState<string>('all');
  const [karatageFilter, setKaratageFilter] = useState<string>('all');
  const [occasionFilter, setOccasionFilter] = useState<string>('all');
  const [virtualTryOnOnly, setVirtualTryOnOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Filter products based on search, tab, and filters
  const filteredProducts = useMemo(() => {
    return TANISHQ_PRODUCTS.filter(p => {
      // Search matching
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Tab specific base filters
      if (activeTab === 'gold') {
        if (!p.metal.includes('gold')) return false;
      } else if (activeTab === 'diamond') {
        if (!p.diamondWeightCarat) return false;
      } else if (activeTab === 'under-50k') {
        if (p.price > 50000) return false;
      } else if (activeTab === 'wedding') {
        if (p.occasion !== 'wedding' && p.collection !== 'Rivaah') return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Price filter
      if (priceRange === 'under-25k' && p.price >= 25000) return false;
      if (priceRange === '25k-50k' && (p.price < 25000 || p.price > 50000)) return false;
      if (priceRange === '50k-1l' && (p.price < 50000 || p.price > 100000)) return false;
      if (priceRange === 'above-1l' && p.price <= 100000) return false;

      // Metal filter
      if (metalFilter !== 'all' && !p.metal.includes(metalFilter)) return false;

      // Karatage filter
      if (karatageFilter !== 'all' && p.karatage !== karatageFilter) return false;

      // Occasion filter
      if (occasionFilter !== 'all' && p.occasion !== occasionFilter) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [
    activeTab,
    searchQuery,
    selectedCategory,
    priceRange,
    metalFilter,
    karatageFilter,
    occasionFilter,
    sortBy
  ]);

  // Cart operations
  const handleAddToCart = (product: TanishqProduct, size?: number) => {
    setCart(prev => {
      const idx = prev.findIndex(item => item.product.id === product.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx].quantity += 1;
        return next;
      }
      return [...prev, { product, quantity: 1, selectedSize: size }];
    });
    setCartOpen(true);
  };

  const handleBuyNow = (product: TanishqProduct, size?: number) => {
    handleAddToCart(product, size);
    setSelectedProduct(null);
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleUpdateQty = (productId: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((i): i is CartItem => i !== null)
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prev => prev.filter(i => i.product.id !== productId));
  };

  const toggleWishlist = (product: TanishqProduct) => {
    setWishlist(prev =>
      prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 flex flex-col font-['Inter'] selection:bg-[#832729]/20 selection:text-[#832729]">
      {/* 39+1 Reference Sites Global Switcher Bar */}
      <ReferenceSiteSwitcher currentSiteId="tanishq" />

      {/* Tanishq Navigation Header */}
      <TanishqHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenAppointment={() => setAppointmentOpen(true)}
        onOpenStoreLocator={() => setStoreLocatorOpen(true)}
        onOpenGoldRate={() => setGoldRateOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {/* VIEW 1: HOMEPAGE */}
        {activeTab === 'home' && (
          <div className="space-y-12 pb-16">
            {/* Grand Hero Banner */}
            <section className="relative bg-gradient-to-r from-[#591416] via-[#832729] to-[#400e10] text-white py-16 sm:py-24 overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs font-bold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Akshaya Tritiya Grand Showcase 2026</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Playfair_Display'] leading-tight">
                    Pure Gold. <br />
                    <span className="text-amber-300">Priceless Moments.</span>
                  </h1>
                  <p className="text-xs sm:text-sm text-stone-200 max-w-lg leading-relaxed">
                    Discover 100% BIS Hallmarked 22K gold, solitaire diamond brilliance, and the grand Rivaah bridal trousseau. Crafted with the timeless integrity of the TATA legacy.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
                    <button
                      onClick={() => setActiveTab('all-jewellery')}
                      className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-black rounded-full uppercase tracking-wider shadow-md cursor-pointer transition-transform active:scale-95"
                    >
                      Explore All Jewellery
                    </button>
                    <button
                      onClick={() => setActiveTab('wedding')}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-xs cursor-pointer"
                    >
                      Rivaah Bridal Trousseau
                    </button>
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <div className="w-full max-w-md aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/30 relative">
                    <img
                      src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
                      alt="Tanishq Bridal Gold Suite"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                          Rivaah Signature
                        </span>
                        <h4 className="text-lg font-bold font-['Playfair_Display']">
                          The Grand Temple Choker Set
                        </h4>
                        <p className="text-xs text-stone-300">22 Karat Hallmarked Yellow Gold with Rubies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Shop by Category Pills Grid */}
            <section className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold text-[#832729] uppercase tracking-widest">
                  Curated Categories
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-stone-900 mt-1">
                  Shop by Jewellery Type
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
                {[
                  { id: 'earrings', label: 'Earrings', icon: '✨', count: '1,240+' },
                  { id: 'rings', label: 'Finger Rings', icon: '💍', count: '980+' },
                  { id: 'pendants', label: 'Pendants', icon: '⚜️', count: '650+' },
                  { id: 'mangalsutra', label: 'Mangalsutra', icon: '🖤', count: '410+' },
                  { id: 'necklaces', label: 'Necklaces', icon: '👑', count: '520+' },
                  { id: 'bangles', label: 'Bangles', icon: '💫', count: '730+' },
                  { id: 'bracelets', label: 'Bracelets', icon: '💎', count: '390+' },
                  { id: 'coins', label: 'Gold Coins', icon: '🪙', count: '24K Pure' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setActiveTab('all-jewellery');
                    }}
                    className="p-3 bg-white rounded-2xl border border-stone-200 hover:border-[#832729] hover:shadow-md transition-all cursor-pointer group flex flex-col items-center"
                  >
                    <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </span>
                    <span className="text-xs font-bold text-stone-800 group-hover:text-[#832729]">
                      {cat.label}
                    </span>
                    <span className="text-[10px] text-stone-400 mt-0.5">{cat.count}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Trending Now Showcase */}
            <section className="max-w-7xl mx-auto px-4">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-[#832729] uppercase tracking-widest">
                    Customer Favorites
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-stone-900 mt-1">
                    Trending This Season
                  </h2>
                </div>
                <button
                  onClick={() => setActiveTab('all-jewellery')}
                  className="text-xs font-bold text-[#832729] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All 15 Curated Jewels</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {TANISHQ_PRODUCTS.slice(0, 4).map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div
                      onClick={() => setSelectedProduct(product)}
                      className="relative aspect-square overflow-hidden bg-stone-100 cursor-pointer"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <span className="absolute top-2.5 left-2.5 bg-[#832729] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          toggleWishlist(product);
                        }}
                        className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 hover:bg-white text-stone-600 shadow-xs cursor-pointer"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            wishlist.includes(product.id) ? 'fill-rose-600 text-rose-600' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="text-[10px] uppercase font-semibold text-stone-400">
                        {product.karatage} Gold · {product.categoryLabel}
                      </div>
                      <h3
                        onClick={() => setSelectedProduct(product)}
                        className="font-bold text-xs text-stone-900 line-clamp-1 hover:text-[#832729] cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <div className="flex items-baseline justify-between pt-1">
                        <span className="text-sm font-bold text-[#832729]">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-stone-500 font-mono">
                          {product.grossWeightGrams}g
                        </span>
                      </div>

                      <div className="pt-2 border-t border-stone-100 flex gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 py-2 bg-stone-900 hover:bg-[#832729] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                        >
                          Add to Bag
                        </button>
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="p-2 border border-stone-200 hover:bg-stone-50 text-stone-700 rounded-lg cursor-pointer"
                          title="Quick View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Rivaah Bridal Showcase Banner */}
            <section className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-r from-[#2B1B1C] to-[#421D20] text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-amber-500/20">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>Rivaah by Tanishq</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black font-['Playfair_Display']">
                    A Jewel for Every Indian Bride
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-lg">
                    Every community has its customs, its sacred motifs, and its unique bridal glory. Rivaah weaves royal Polki, temple nakashi, and heirloom gold into trousseaus for 10 regional brides across India.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => setActiveTab('regional')}
                      className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-full cursor-pointer uppercase tracking-wider"
                    >
                      Browse Regional Brides
                    </button>
                    <button
                      onClick={() => setAppointmentOpen(true)}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs rounded-full cursor-pointer uppercase tracking-wider"
                    >
                      Book Bridal Lounge Appointment
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {REGIONAL_BRIDES.slice(0, 2).map(bride => (
                    <div key={bride.region} className="rounded-2xl overflow-hidden relative aspect-3/4 border border-white/20 shadow-md">
                      <img src={bride.imageUrl} alt={bride.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                        <span className="text-xs font-bold font-['Playfair_Display'] text-amber-200">
                          {bride.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Zero Melt-Loss Gold Exchange Section */}
            <section className="max-w-7xl mx-auto px-4">
              <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider">
                    <RefreshCw className="w-4 h-4" />
                    <span>The Tanishq Exchange Promise</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display'] text-stone-900">
                    Get 100% Value on Old Gold Exchange
                  </h3>
                  <p className="text-xs text-stone-600 max-w-xl">
                    Bring gold from any jeweller across India. Test its exact purity within 3 minutes on our computerized, non-destructive Karatmeter with zero melt deduction.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <button
                    onClick={() => setAppointmentOpen(true)}
                    className="px-5 py-2.5 bg-[#832729] hover:bg-[#6b1e20] text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                  >
                    Book Karatmeter Test
                  </button>
                  <button
                    onClick={() => setGoldRateOpen(true)}
                    className="px-5 py-2.5 bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Check Today's Gold Rate
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: SHOPPING CATALOGUE (All Jewellery / Gold / Diamond / Under 50K) */}
        {(activeTab === 'all-jewellery' ||
          activeTab === 'gold' ||
          activeTab === 'diamond' ||
          activeTab === 'under-50k' ||
          activeTab === 'gifting') && (
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
            {/* Header Title & Breadcrumb */}
            <div className="border-b border-stone-200 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#832729] tracking-widest">
                  Official Online Catalogue
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-stone-900 mt-1 capitalize">
                  {activeTab === 'all-jewellery' && 'All Jewellery Collection'}
                  {activeTab === 'gold' && '22K & 18K Pure Gold Jewellery'}
                  {activeTab === 'diamond' && 'Certified Diamond Solitaires & Fine Jewels'}
                  {activeTab === 'under-50k' && 'Precious Jewels Under ₹50,000'}
                  {activeTab === 'gifting' && 'Precious Gifting & Auspicious Gold Coins'}
                </h1>
                <p className="text-xs text-stone-500 mt-1">
                  Showing {filteredProducts.length} verified designs · 100% BIS Hallmarked with complimentary insured delivery
                </p>
              </div>

              {/* Sorting and View Options */}
              <div className="flex items-center gap-3 self-start md:self-auto text-xs">
                <span className="text-stone-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs font-medium cursor-pointer"
                >
                  <option value="featured">Featured / Bestsellers</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Filter Pills Bar */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs space-y-3 text-xs">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <span className="font-semibold text-stone-700 shrink-0">Type:</span>
                {['all', 'earrings', 'rings', 'pendants', 'mangalsutra', 'necklaces', 'bangles', 'bracelets', 'chains', 'coins'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full capitalize whitespace-nowrap cursor-pointer transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#832729] text-white font-bold'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat === 'all' ? 'All Types' : cat}
                  </button>
                ))}
              </div>

              {/* Price and Metal Filters */}
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-stone-500 font-medium">Price:</span>
                  <select
                    value={priceRange}
                    onChange={e => setPriceRange(e.target.value)}
                    className="px-2.5 py-1 bg-stone-50 border border-stone-200 rounded-md text-xs cursor-pointer"
                  >
                    <option value="all">All Budgets</option>
                    <option value="under-25k">Under ₹25,000</option>
                    <option value="25k-50k">₹25,000 – ₹50,000</option>
                    <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                    <option value="above-1l">Above ₹1,00,000</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-stone-500 font-medium">Metal:</span>
                  <select
                    value={metalFilter}
                    onChange={e => setMetalFilter(e.target.value)}
                    className="px-2.5 py-1 bg-stone-50 border border-stone-200 rounded-md text-xs cursor-pointer"
                  >
                    <option value="all">All Metals</option>
                    <option value="yellow_gold">Yellow Gold</option>
                    <option value="rose_gold">Rose Gold</option>
                    <option value="white_gold">White Gold</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-stone-500 font-medium">Karatage:</span>
                  <select
                    value={karatageFilter}
                    onChange={e => setKaratageFilter(e.target.value)}
                    className="px-2.5 py-1 bg-stone-50 border border-stone-200 rounded-md text-xs cursor-pointer"
                  >
                    <option value="all">All Purity</option>
                    <option value="22K">22 Karat (916)</option>
                    <option value="18K">18 Karat (750)</option>
                    <option value="24K">24 Karat (999.9)</option>
                  </select>
                </div>

                {(selectedCategory !== 'all' || priceRange !== 'all' || metalFilter !== 'all' || karatageFilter !== 'all') && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange('all');
                      setMetalFilter('all');
                      setKaratageFilter('all');
                    }}
                    className="text-[#832729] font-bold hover:underline cursor-pointer ml-auto"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-stone-200 space-y-3">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto" />
                <h3 className="font-bold text-base text-stone-800">No jewellery matches your exact filters</h3>
                <p className="text-xs text-stone-500">Try adjusting price range or clearing category filters to view more designs.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                    setMetalFilter('all');
                    setKaratageFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-[#832729] text-white text-xs font-bold rounded-lg"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div
                      onClick={() => setSelectedProduct(product)}
                      className="relative aspect-square overflow-hidden bg-stone-100 cursor-pointer"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-[#832729] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          toggleWishlist(product);
                        }}
                        className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 hover:bg-white text-stone-600 shadow-xs cursor-pointer"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            wishlist.includes(product.id) ? 'fill-rose-600 text-rose-600' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between text-[10px] uppercase font-semibold text-stone-400">
                        <span>{product.karatage} Gold · {product.categoryLabel}</span>
                        <span>{product.grossWeightGrams}g</span>
                      </div>

                      <h3
                        onClick={() => setSelectedProduct(product)}
                        className="font-bold text-sm text-stone-900 line-clamp-1 hover:text-[#832729] cursor-pointer font-['Playfair_Display']"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="pt-2 flex items-baseline justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-base font-bold text-[#832729]">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-stone-400 line-through">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        {product.diamondWeightCarat && (
                          <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200 px-1.5 py-0.5 rounded">
                            {product.diamondWeightCarat}ct {product.diamondClarity}
                          </span>
                        )}
                      </div>

                      <div className="pt-3 border-t border-stone-100 flex gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 py-2.5 bg-[#832729] hover:bg-[#6b1e20] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                        >
                          Add to Bag
                        </button>
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="px-3 py-2.5 border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-bold rounded-xl cursor-pointer"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: COLLECTIONS */}
        {activeTab === 'collections' && (
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-[#832729] uppercase tracking-widest">
                Artisanal Stories
              </span>
              <h1 className="text-3xl font-bold font-['Playfair_Display'] text-stone-900 mt-1">
                Tanishq Master Collections
              </h1>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Explore signature design chapters, from royal Rajputana heritage to featherlight diamond workwear.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TANISHQ_COLLECTIONS.map(col => (
                <div
                  key={col.id}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="aspect-16/10 relative overflow-hidden">
                    <img src={col.imageUrl} alt={col.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white">
                        <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                          {col.itemCount} Designs
                        </span>
                        <h3 className="text-xl font-bold font-['Playfair_Display']">{col.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#832729]">{col.tagline}</p>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">{col.description}</p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('all-jewellery');
                        setSearchQuery(col.name);
                      }}
                      className="w-full py-2.5 bg-stone-900 hover:bg-[#832729] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Collection</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: REGIONAL BRIDES */}
        {activeTab === 'regional' && (
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-[#832729] uppercase tracking-widest">
                Rivaah By Tanishq
              </span>
              <h1 className="text-3xl font-bold font-['Playfair_Display'] text-stone-900 mt-1">
                Regional Indian Bridal Trousseaus
              </h1>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Every Indian bride carries the sacred blessings of her ancestral traditions. Explore authentic bridal sets crafted for 10 regional wedding customs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REGIONAL_BRIDES.map(bride => (
                <div
                  key={bride.region}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="aspect-4/3 relative overflow-hidden bg-stone-100">
                    <img src={bride.imageUrl} alt={bride.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-[#832729] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {bride.region} Bride
                    </span>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold font-['Playfair_Display'] text-stone-900">
                        {bride.title}
                      </h3>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {bride.description}
                      </p>

                      <div className="mt-3 pt-3 border-t border-stone-100">
                        <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1.5">
                          Signature Ornaments:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {bride.signatureJewellery.map(orn => (
                            <span
                              key={orn}
                              className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 text-[10px] font-medium border border-amber-200/60"
                            >
                              {orn}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setAppointmentOpen(true)}
                      className="w-full py-2.5 bg-[#832729] hover:bg-[#6b1e20] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Book {bride.region} Bridal Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 5: SERVICES & GUIDES */}
        {activeTab === 'services' && (
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-[#832729] uppercase tracking-widest">
                Customer Services
              </span>
              <h1 className="text-3xl font-bold font-['Playfair_Display'] text-stone-900 mt-1">
                Tanishq Knowledge, Care & Trust
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Care Guide Card */}
              <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-3">
                    ✨
                  </div>
                  <h3 className="font-bold text-lg font-['Playfair_Display'] text-stone-900">
                    Jewellery Care & Cleaning
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Learn proper storage rituals, chemical protection from cosmetics, and how to enjoy complimentary ultrasonic cleaning at any Tanishq store.
                  </p>
                </div>
                <button
                  onClick={() => setGuideModalType('care')}
                  className="w-full py-2.5 bg-stone-900 hover:bg-[#832729] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  View Care Instructions
                </button>
              </div>

              {/* Ring Size Guide Card */}
              <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-3">
                    📏
                  </div>
                  <h3 className="font-bold text-lg font-['Playfair_Display'] text-stone-900">
                    Ring & Bangle Size Guide
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Calculate your exact finger size using inner diameter millimeter tables aligned with Indian BIS sizing standards.
                  </p>
                </div>
                <button
                  onClick={() => setGuideModalType('size')}
                  className="w-full py-2.5 bg-stone-900 hover:bg-[#832729] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Open Size Matrix
                </button>
              </div>

              {/* Live Gold Rates Card */}
              <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-3">
                    📈
                  </div>
                  <h3 className="font-bold text-lg font-['Playfair_Display'] text-stone-900">
                    Today's Live Gold Rates
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    View verified city-wise rates for 22 Karat and 24 Karat gold across Mumbai, Delhi, Bangalore, Kolkata, and Chennai.
                  </p>
                </div>
                <button
                  onClick={() => setGoldRateOpen(true)}
                  className="w-full py-2.5 bg-[#832729] hover:bg-[#6b1e20] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Check Gold Rate Ticker
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <TanishqFooter
        onOpenStoreLocator={() => setStoreLocatorOpen(true)}
        onOpenAppointment={() => setAppointmentOpen(true)}
        onOpenCareGuide={() => setGuideModalType('care')}
        onOpenSizeGuide={() => setGuideModalType('size')}
        onOpenGoldRate={() => setGoldRateOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        onOpenStoreLocator={() => {
          setSelectedProduct(null);
          setStoreLocatorOpen(true);
        }}
        onToggleWishlist={toggleWishlist}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveFromCart}
        onProceedCheckout={() => setCheckoutOpen(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cart}
        onOrderPlaced={() => {
          setCart([]);
          setCheckoutOpen(false);
        }}
      />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />

      {/* Store Locator Modal */}
      <StoreLocatorModal
        isOpen={storeLocatorOpen}
        onClose={() => setStoreLocatorOpen(false)}
        onBookAtStore={() => setAppointmentOpen(true)}
      />

      {/* Live Gold Rate Modal */}
      <GoldRateModal
        isOpen={goldRateOpen}
        onClose={() => setGoldRateOpen(false)}
      />

      {/* Size / Care Guide Modal */}
      <GuideModal
        type={guideModalType}
        onClose={() => setGuideModalType(null)}
      />
    </div>
  );
};
