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
  Zap,
  Star,
  ChevronDown,
  X,
  Phone,
  HelpCircle,
  Clock,
  Layers,
  Search,
  Scale
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { JewelboxHeader } from './JewelboxHeader';
import { JewelboxFooter } from './JewelboxFooter';
import {
  JewelboxProductDetailModal,
  JewelboxCartDrawer,
  JewelboxCheckoutModal,
  JewelboxRingSizeGuideModal,
  JewelboxEducationModal,
  JewelboxStoreLocatorModal,
  CartItem
} from './JewelboxModals';
import {
  JEWELBOX_PRODUCTS,
  JEWELBOX_COLLECTIONS,
  JEWELBOX_REVIEWS,
  JEWELBOX_FAQS,
  JewelboxProduct,
  JewelboxCollection
} from '../../data/jewelboxData';

export const JewelboxApp: React.FC = () => {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'home' | 'shop' | 'collections'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');

  // Filter States
  const [selectedShape, setSelectedShape] = useState<string>('all');
  const [selectedPurity, setSelectedPurity] = useState<string>('all');
  const [selectedMetalColor, setSelectedMetalColor] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [readyToShipOnly, setReadyToShipOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Cart & Wishlist State
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'init-1',
      product: JEWELBOX_PRODUCTS[0], // 1.00 Ct Solitaire Ring
      metal: 'rose_gold',
      size: 12,
      quantity: 1
    }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(['jb-rng-01', 'jb-brc-01']);

  // Promo code & discount
  const [couponCode, setCouponCode] = useState<string>('SHARK10');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(4890); // 10% of default item

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<JewelboxProduct | null>(null);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState<boolean>(false);
  const [educationOpen, setEducationOpen] = useState<boolean>(false);
  const [storeLocatorOpen, setStoreLocatorOpen] = useState<boolean>(false);

  // Cart Handlers
  const handleAddToCart = (product: JewelboxProduct, metal: string, size?: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.metal === metal && item.size === size);
      if (existing) {
        return prev.map(item => item === existing ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random()}`,
          product,
          metal,
          size,
          quantity: 1
        }
      ];
    });
    setCartOpen(true);
  };

  const handleBuyNow = (product: JewelboxProduct, metal: string, size?: number) => {
    handleAddToCart(product, metal, size);
    setSelectedProduct(null);
    setCheckoutOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleToggleWishlist = (product: JewelboxProduct) => {
    setWishlist(prev =>
      prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]
    );
  };

  const handleApplyCoupon = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    if (trimmed === 'SHARK10') {
      const disc = Math.round(subtotal * 0.10);
      setAppliedDiscount(disc);
      alert(`Coupon SHARK10 applied successfully! You saved ₹${disc.toLocaleString('en-IN')}`);
    } else if (trimmed === 'JEWEL2000') {
      const disc = subtotal >= 30000 ? 2000 : 0;
      if (disc > 0) {
        setAppliedDiscount(disc);
        alert('Coupon JEWEL2000 applied! ₹2,000 discount added.');
      } else {
        alert('JEWEL2000 requires minimum order value of ₹30,000.');
      }
    } else {
      alert('Invalid coupon code. Try SHARK10 or JEWEL2000');
    }
  };

  // Filtered Products Logic
  const filteredProducts = useMemo(() => {
    return JEWELBOX_PRODUCTS.filter(p => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Collection filter
      if (selectedCollection !== 'all' && p.collection !== selectedCollection) {
        return false;
      }

      // Diamond Shape
      if (selectedShape !== 'all' && p.diamondShape !== selectedShape) {
        return false;
      }

      // Purity
      if (selectedPurity !== 'all' && p.metalPurity !== selectedPurity) {
        return false;
      }

      // Metal Color
      if (selectedMetalColor !== 'all' && !p.availableMetals.includes(selectedMetalColor as any)) {
        return false;
      }

      // Gender
      if (selectedGender !== 'all' && p.gender !== selectedGender && p.gender !== 'unisex') {
        return false;
      }

      // Occasion
      if (selectedOccasion !== 'all' && p.occasion !== selectedOccasion) {
        return false;
      }

      // Ready to Ship
      if (readyToShipOnly && !p.isReadyToShip) {
        return false;
      }

      // Price Range
      if (selectedPriceRange === 'under25k' && p.price > 25000) return false;
      if (selectedPriceRange === '25k_50k' && (p.price <= 25000 || p.price > 50000)) return false;
      if (selectedPriceRange === '50k_1lakh' && (p.price <= 50000 || p.price > 100000)) return false;
      if (selectedPriceRange === 'above1lakh' && p.price <= 100000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'savings') {
        const savingsA = a.minedPriceEquivalent - a.price;
        const savingsB = b.minedPriceEquivalent - b.price;
        return savingsB - savingsA;
      }
      return 0; // featured default
    });
  }, [
    selectedCategory,
    selectedCollection,
    selectedShape,
    selectedPurity,
    selectedMetalColor,
    selectedPriceRange,
    selectedGender,
    selectedOccasion,
    readyToShipOnly,
    sortBy
  ]);

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedCollection('all');
    setSelectedShape('all');
    setSelectedPurity('all');
    setSelectedMetalColor('all');
    setSelectedPriceRange('all');
    setSelectedGender('all');
    setSelectedOccasion('all');
    setReadyToShipOnly(false);
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-[#FCFCF9] text-stone-900 font-['Inter'] flex flex-col selection:bg-[#0F2C24] selection:text-white">
      {/* 1. Global Floating Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="jewelbox" />

      {/* 2. Main Header */}
      <JewelboxHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveTab('shop');
        }}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => {
          setActiveTab('shop');
          setSelectedCategory('all');
        }}
        onOpenStoreLocator={() => setStoreLocatorOpen(true)}
        onOpenEducation={() => setEducationOpen(true)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        products={JEWELBOX_PRODUCTS}
      />

      {/* 3. Main Views Routing */}
      <main className="flex-1">
        {/* ============================================================== */}
        {/* VIEW 1: HOME PAGE                                              */}
        {/* ============================================================== */}
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative bg-[#0F2C24] text-white overflow-hidden py-16 sm:py-24">
              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1800&q=80"
                  alt="Diamond Sparkle"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163e33] border border-[#255e4e] text-white text-xs font-semibold mb-4">
                    <span className="bg-[#D4AF37] text-[#0F2C24] text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-current" /> Shark Tank S3
                    </span>
                    <span>India's Leading Conscious Luxury Diamond Brand</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Playfair_Display'] leading-[1.15]">
                    100% Real Diamonds.<br />
                    <span className="text-[#D4AF37] italic font-normal">70% Smarter Price.</span>
                  </h1>

                  <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
                    Discover IGI-certified lab-grown diamond jewellery crafted in solid 14K & 18K BIS hallmarked gold. Chemically, physically and optically identical to mined diamonds with zero open-pit mining devastation.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        setActiveTab('shop');
                        setSelectedCategory('rings');
                      }}
                      className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0F2C24] text-xs font-bold rounded-xl cursor-pointer shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Explore Solitaire Rings</span>
                    </button>

                    <button
                      onClick={() => setEducationOpen(true)}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 backdrop-blur-xs cursor-pointer transition-colors flex items-center gap-2"
                    >
                      <span>Why Lab-Grown Diamonds?</span>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="mt-12 pt-6 border-t border-[#1a4a3d] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Offers from All 5 Sharks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>IGI & SGL Laser-Inscribed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>BIS Hallmarked 14K & 18K Gold</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Lifetime Exchange (80%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Shop By Category Cards */}
            <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-[11px] font-bold text-[#B48425] uppercase tracking-widest">
                  Fine Diamond Essentials
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-['Playfair_Display'] text-stone-900 mt-1">
                  Shop By Category
                </h2>
                <p className="text-xs text-stone-500 mt-2">
                  Handcrafted lab-grown diamond designs in yellow, rose, and white gold.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {[
                  { name: 'Solitaire Rings', slug: 'rings', count: '18 Designs', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80' },
                  { name: 'Tennis Bracelets', slug: 'bracelets', count: '12 Designs', img: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=500&q=80' },
                  { name: 'Diamond Earrings', slug: 'earrings', count: '24 Designs', img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=500&q=80' },
                  { name: 'Solitaire Pendants', slug: 'pendants', count: '16 Designs', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80' },
                  { name: 'Mangalsutras', slug: 'mangalsutra', count: '10 Designs', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=500&q=80' },
                  { name: "Men's Diamonds", slug: 'mens', count: '8 Designs', img: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=500&q=80' }
                ].map(cat => (
                  <div
                    key={cat.slug}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setActiveTab('shop');
                    }}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 text-white">
                      <h3 className="font-bold text-xs sm:text-sm font-['Playfair_Display']">
                        {cat.name}
                      </h3>
                      <span className="text-[10px] text-stone-300 mt-0.5">
                        {cat.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Trending Bestsellers Carousel / Grid */}
            <section className="py-12 bg-stone-100/60 border-y border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <span className="text-[11px] font-bold text-[#B48425] uppercase tracking-widest">
                      Most Loved by Customers
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-stone-900 mt-1">
                      Trending Bestsellers
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('shop');
                      setSelectedCategory('all');
                    }}
                    className="text-xs font-bold text-[#0F2C24] hover:text-[#1a4a3d] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All Catalogue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {JEWELBOX_PRODUCTS.slice(0, 4).map(product => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="relative aspect-square overflow-hidden bg-stone-50 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.badge && (
                          <span className="absolute top-2 left-2 bg-[#D4AF37] text-[#0F2C24] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1 shadow-xs">
                            <Zap className="w-2.5 h-2.5 fill-current" /> {product.badge}
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleWishlist(product);
                          }}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-stone-600 hover:text-rose-600 cursor-pointer shadow-xs"
                          title="Wishlist"
                        >
                          <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-rose-600 text-rose-600' : ''}`} />
                        </button>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[10px] text-stone-400 uppercase font-semibold">
                            {product.categoryLabel} · {product.diamondCarat} ct {product.diamondShape}
                          </div>
                          <h3
                            onClick={() => setSelectedProduct(product)}
                            className="font-bold text-xs sm:text-sm text-stone-900 mt-1 line-clamp-1 hover:text-[#0F2C24] cursor-pointer"
                          >
                            {product.name}
                          </h3>
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-sm sm:text-base font-extrabold text-[#0F2C24]">
                              ₹{product.price.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs line-through text-stone-400">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <div className="mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">
                            Save ₹{(product.minedPriceEquivalent - product.price).toLocaleString('en-IN')} vs Mined
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2">
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="flex-1 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg cursor-pointer transition-colors text-center"
                          >
                            View Product
                          </button>
                          <button
                            onClick={() => handleAddToCart(product, product.defaultMetal, product.sizes ? product.sizes[0] : undefined)}
                            className="p-2 bg-[#0F2C24] hover:bg-[#163e33] text-white rounded-lg cursor-pointer transition-colors"
                            title="Add to cart"
                          >
                            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Side-by-Side Lab Diamond Featurette */}
            <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#0F2C24] rounded-3xl p-6 sm:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> The Conscious Luxury Choice
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-['Playfair_Display'] mt-2 leading-tight">
                      Identical Brilliance.<br />
                      Zero Earth Excavation.
                    </h2>
                    <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
                      For centuries, diamonds were only attainable through costly underground mining. Today, with cutting-edge plasma reactor technology, we craft 100% real Type IIa diamonds with highest optical sparkle, zero carbon displacement, and 70% lower prices.
                    </p>

                    <div className="mt-6 space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>Identical chemical composition (pure crystallized carbon)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>Identical 10 Mohs hardness (tested with thermal diamond pens)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>Independently certified by IGI (International Gemological Institute)</span>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <button
                        onClick={() => setEducationOpen(true)}
                        className="px-5 py-3 bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0F2C24] text-xs font-bold rounded-xl cursor-pointer transition-colors"
                      >
                        Read Full Diamond Science Matrix
                      </button>
                      <button
                        onClick={() => setStoreLocatorOpen(true)}
                        className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 cursor-pointer"
                      >
                        Test In-Store with Diamond Pen
                      </button>
                    </div>
                  </div>

                  {/* Visual Comparison Card */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
                      1.00 Carat Diamond Comparison
                    </h3>

                    <div className="p-4 bg-emerald-950/60 rounded-xl border border-emerald-500/30">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-emerald-300">Jewelbox Lab Diamond</span>
                        <span className="text-xs bg-emerald-400 text-emerald-950 px-2 py-0.5 rounded font-bold">100% REAL</span>
                      </div>
                      <div className="text-2xl font-black text-white">₹48,900</div>
                      <p className="text-[11px] text-stone-300 mt-1">
                        18K Gold · IGI Certified · Conflict Free · Laser Inscribed
                      </p>
                    </div>

                    <div className="p-4 bg-stone-900/60 rounded-xl border border-stone-700">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-stone-400">Traditional Mined Diamond</span>
                        <span className="text-xs bg-stone-700 text-stone-300 px-2 py-0.5 rounded">EARTH MINED</span>
                      </div>
                      <div className="text-2xl font-black text-stone-400 line-through">₹1,75,000</div>
                      <p className="text-[11px] text-stone-500 mt-1">
                        Identical sparkle, but ₹1.26 Lakh more expensive for mining markup
                      </p>
                    </div>

                    <div className="text-center pt-2">
                      <span className="text-xs font-bold text-amber-400">
                        ⚡ You save ~₹1,26,100 on every 1.00 Carat Solitaire with Jewelbox!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="py-12 bg-stone-50 border-t border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-xl mx-auto mb-8">
                  <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
                    {'★'.repeat(5)}
                  </div>
                  <h2 className="text-2xl font-bold font-['Playfair_Display'] text-stone-900">
                    Trusted by 50,000+ Conscious Customers
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Verified purchase reviews from Mumbai, Bangalore, Delhi & across India.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {JEWELBOX_REVIEWS.map(rev => (
                    <div
                      key={rev.id}
                      className="p-5 bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-amber-500 text-xs mb-2">
                          <span>{'★'.repeat(rev.rating)}</span>
                          <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                            Verified Buyer
                          </span>
                        </div>
                        <p className="text-xs text-stone-700 italic leading-relaxed line-clamp-4">
                          "{rev.comment}"
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-stone-100 text-xs">
                        <div className="font-bold text-stone-900">{rev.author}</div>
                        <div className="text-[11px] text-stone-500">{rev.city} · {rev.productName}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: PRODUCT CATALOGUE / SHOP                               */}
        {/* ============================================================== */}
        {activeTab === 'shop' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb & Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <div className="text-xs text-stone-500 flex items-center gap-1.5 mb-1">
                  <button onClick={() => setActiveTab('home')} className="hover:underline cursor-pointer">Home</button>
                  <span>/</span>
                  <span className="text-stone-900 font-bold capitalize">
                    {selectedCategory === 'all' ? 'All Fine Jewellery' : selectedCategory}
                  </span>
                  <span>({filteredProducts.length} designs)</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-stone-900">
                  {selectedCategory === 'all'
                    ? 'Lab-Grown Diamond Jewellery Collection'
                    : `${selectedCategory.toUpperCase()} Collection`}
                </h1>
              </div>

              {/* Sort & Mobile Filter Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden px-3.5 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Filter className="w-3.5 h-3.5" />
                  <span>Filters</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-stone-600">
                  <span className="hidden sm:inline">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-white border border-stone-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0F2C24]"
                  >
                    <option value="featured">Featured / Best Match</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="savings">Highest Savings vs Mined</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Layout: Sidebar Filters + Products Grid */}
            <div className="mt-8 flex gap-8 items-start">
              {/* DESKTOP FILTER SIDEBAR */}
              <aside className="hidden lg:block w-64 shrink-0 bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#0F2C24]" />
                    Filter Catalogue
                  </span>
                  <button
                    onClick={resetAllFilters}
                    className="text-[11px] text-[#B48425] hover:underline font-semibold cursor-pointer"
                  >
                    Reset All
                  </button>
                </div>

                {/* Categories Filter */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase mb-2">
                    Jewellery Category
                  </label>
                  <div className="space-y-1 text-xs">
                    {[
                      { id: 'all', label: 'All Categories' },
                      { id: 'rings', label: 'Rings & Solitaires' },
                      { id: 'bracelets', label: 'Tennis Bracelets' },
                      { id: 'earrings', label: 'Earrings & Studs' },
                      { id: 'pendants', label: 'Pendants & Chains' },
                      { id: 'solitaires', label: 'Solitaire Luxe (1ct+)' },
                      { id: 'mangalsutra', label: 'Modern Mangalsutras' },
                      { id: 'mens', label: "Men's Collection" },
                      { id: 'necklaces', label: 'Diamond Necklaces' },
                      { id: 'nosepins', label: 'Nosepins' }
                    ].map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left py-1 px-2 rounded-lg cursor-pointer transition-colors ${
                          selectedCategory === cat.id
                            ? 'bg-[#0F2C24] text-white font-bold'
                            : 'text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Diamond Shape Filter */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase mb-2">
                    Diamond Shape
                  </label>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    {['all', 'Round', 'Oval', 'Emerald', 'Princess', 'Pear'].map(sh => (
                      <button
                        key={sh}
                        onClick={() => setSelectedShape(sh)}
                        className={`py-1.5 px-2 rounded-lg border text-center cursor-pointer transition-colors ${
                          selectedShape === sh
                            ? 'border-[#0F2C24] bg-stone-100 text-[#0F2C24] font-bold'
                            : 'border-stone-200 hover:bg-stone-50 text-stone-600'
                        }`}
                      >
                        {sh === 'all' ? 'All Shapes' : sh}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase mb-2">
                    Price Range (₹)
                  </label>
                  <div className="space-y-1 text-xs">
                    {[
                      { id: 'all', label: 'All Prices' },
                      { id: 'under25k', label: 'Under ₹25,000' },
                      { id: '25k_50k', label: '₹25,000 – ₹50,000' },
                      { id: '50k_1lakh', label: '₹50,000 – ₹1,00,000' },
                      { id: 'above1lakh', label: '₹1,00,000 and Above' }
                    ].map(pr => (
                      <button
                        key={pr.id}
                        onClick={() => setSelectedPriceRange(pr.id)}
                        className={`w-full text-left py-1 px-2 rounded-lg cursor-pointer transition-colors ${
                          selectedPriceRange === pr.id
                            ? 'bg-[#0F2C24] text-white font-bold'
                            : 'text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        {pr.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ready to Ship Toggle */}
                <div className="pt-2 border-t border-stone-200">
                  <label className="flex items-center gap-2 text-xs font-bold text-stone-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={readyToShipOnly}
                      onChange={(e) => setReadyToShipOnly(e.target.checked)}
                      className="w-4 h-4 rounded text-[#0F2C24] accent-[#0F2C24] cursor-pointer"
                    />
                    <span>Ready to Ship Only (24-48 hrs)</span>
                  </label>
                </div>
              </aside>

              {/* PRODUCTS GRID */}
              <div className="flex-1 min-w-0">
                {filteredProducts.length === 0 ? (
                  <div className="p-12 text-center bg-white rounded-2xl border border-stone-200">
                    <Sparkles className="w-10 h-10 text-stone-300 mx-auto mb-2" />
                    <h3 className="text-base font-bold text-stone-900 font-['Playfair_Display']">
                      No matching jewellery designs found
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                      Try resetting your price or shape filter to view our complete collection.
                    </p>
                    <button
                      onClick={resetAllFilters}
                      className="mt-4 px-4 py-2 bg-[#0F2C24] text-white text-xs font-bold rounded-lg cursor-pointer"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredProducts.map(product => {
                      const savings = product.minedPriceEquivalent - product.price;
                      return (
                        <div
                          key={product.id}
                          className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                        >
                          {/* Image Box */}
                          <div
                            className="relative aspect-square overflow-hidden bg-stone-50 cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                          >
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {product.badge && (
                              <span className="absolute top-2 left-2 bg-[#D4AF37] text-[#0F2C24] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1 shadow-xs">
                                <Zap className="w-2.5 h-2.5 fill-current" /> {product.badge}
                              </span>
                            )}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleWishlist(product);
                              }}
                              className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-stone-600 hover:text-rose-600 cursor-pointer shadow-xs transition-colors"
                              title="Wishlist"
                            >
                              <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-rose-600 text-rose-600' : ''}`} />
                            </button>
                          </div>

                          {/* Details */}
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between text-[10px] text-stone-400 font-semibold uppercase">
                                <span>{product.diamondCarat} ct {product.diamondShape}</span>
                                <span>{product.metalPurity} Gold</span>
                              </div>

                              <h3
                                onClick={() => setSelectedProduct(product)}
                                className="font-bold text-xs sm:text-sm text-stone-900 mt-1 line-clamp-1 hover:text-[#0F2C24] cursor-pointer"
                              >
                                {product.name}
                              </h3>

                              <div className="mt-1.5 flex items-baseline gap-2">
                                <span className="text-base font-extrabold text-[#0F2C24]">
                                  ₹{product.price.toLocaleString('en-IN')}
                                </span>
                                <span className="text-xs line-through text-stone-400">
                                  ₹{product.originalPrice.toLocaleString('en-IN')}
                                </span>
                              </div>

                              <div className="mt-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded inline-block">
                                Save ₹{savings.toLocaleString('en-IN')} vs Mined
                              </div>
                            </div>

                            {/* Card Actions */}
                            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2">
                              <button
                                onClick={() => setSelectedProduct(product)}
                                className="flex-1 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg cursor-pointer transition-colors text-center"
                              >
                                View Details
                              </button>
                              <button
                                onClick={() => handleAddToCart(product, product.defaultMetal, product.sizes ? product.sizes[0] : undefined)}
                                className="px-3 py-2 bg-[#0F2C24] hover:bg-[#163e33] text-white rounded-lg cursor-pointer transition-colors flex items-center gap-1.5 text-xs font-semibold"
                                title="Add to cart"
                              >
                                <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                                <span>Add</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: COLLECTIONS                                            */}
        {/* ============================================================== */}
        {activeTab === 'collections' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[11px] font-bold text-[#B48425] uppercase tracking-widest">
                Curated High-Jewellery Edits
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] text-stone-900 mt-1">
                Jewelbox Signature Collections
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 mt-2">
                From the Shark Tank India favorite designs to 2.00+ Carat Solitaire Luxe masterpieces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {JEWELBOX_COLLECTIONS.map(col => (
                <div
                  key={col.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={col.imageUrl}
                      alt={col.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F2C24]/85 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {col.itemCount} Designs
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 font-['Playfair_Display']">
                        {col.name}
                      </h3>
                      <p className="text-xs text-[#B48425] font-semibold mt-0.5">
                        {col.tagline}
                      </p>
                      <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                        {col.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-stone-100">
                      <button
                        onClick={() => {
                          if (col.filterCategory) {
                            setSelectedCategory(col.filterCategory);
                          } else {
                            setSelectedCategory('all');
                          }
                          if (col.filterCollection) {
                            setSelectedCollection(col.filterCollection);
                          }
                          setActiveTab('shop');
                        }}
                        className="w-full py-2.5 bg-[#0F2C24] hover:bg-[#163e33] text-white text-xs font-bold rounded-xl cursor-pointer transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Explore Collection</span>
                        <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 4. Footer */}
      <JewelboxFooter
        onOpenStoreLocator={() => setStoreLocatorOpen(true)}
        onOpenEducation={() => setEducationOpen(true)}
        onNavigateCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveTab('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 5. Modals */}
      {/* Product Detail Modal */}
      <JewelboxProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        onOpenEducation={() => setEducationOpen(true)}
      />

      {/* Cart Drawer */}
      <JewelboxCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        appliedDiscount={appliedDiscount}
        onApplyCoupon={handleApplyCoupon}
      />

      {/* Checkout Modal */}
      <JewelboxCheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
        appliedDiscount={appliedDiscount}
        onOrderSuccess={() => {
          setCart([]);
          setAppliedDiscount(0);
        }}
      />

      {/* Ring Size Guide Modal */}
      <JewelboxRingSizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      {/* Why Lab-Grown Education Modal */}
      <JewelboxEducationModal
        isOpen={educationOpen}
        onClose={() => setEducationOpen(false)}
      />

      {/* Store Locator & Appointment Modal */}
      <JewelboxStoreLocatorModal
        isOpen={storeLocatorOpen}
        onClose={() => setStoreLocatorOpen(false)}
      />
    </div>
  );
};
