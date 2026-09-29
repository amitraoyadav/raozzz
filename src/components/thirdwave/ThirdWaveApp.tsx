import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Coffee,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Menu as MenuIcon,
  Smartphone,
  Star,
  Gift
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  THIRD_WAVE_PRODUCTS,
  ThirdWaveProduct
} from '../../data/thirdWaveCoffeeData';

export type ThirdWaveTab = 'home' | 'shop' | 'beverages' | 'locations' | 'rewards';

interface CartItem {
  id: string;
  name: string;
  category: string;
  priceInr: number;
  quantity: number;
  imageUrl: string;
}

export const ThirdWaveApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<ThirdWaveTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState<string>('All');

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'twc-monsoon-malabar',
      name: 'Monsoon Malabar AA (Whole Beans)',
      category: 'Whole Beans',
      priceInr: 580,
      quantity: 1,
      imageUrl: 'https://cdn.shopify.com/s/files/1/1834/9395/files/WEBSITE_ECB_MM_IMAGES_2026_2048x2048-07.jpg?v=1771479865'
    }
  ]);

  const categories = ['All', 'Whole Beans', 'Easy Coffee Bags', 'Signature Drinks', 'Artisan Bakery'];

  const filteredProducts = useMemo(() => {
    if (selectedCat === 'All') return THIRD_WAVE_PRODUCTS;
    return THIRD_WAVE_PRODUCTS.filter(p => p.category === selectedCat);
  }, [selectedCat]);

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.priceInr * i.quantity, 0);
  }, [cart]);

  const addToCart = (product: ThirdWaveProduct) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === product.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          priceInr: product.priceInr,
          quantity: 1,
          imageUrl: product.imageUrl
        }
      ];
    });
    setCartDrawerOpen(true);
  };

  const updateCartQty = (idx: number, delta: number) => {
    setCart(prev => {
      const next = [...prev];
      const newQty = next[idx].quantity + delta;
      if (newQty <= 0) next.splice(idx, 1);
      else next[idx] = { ...next[idx], quantity: newQty };
      return next;
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const lines = cart.map(i => `• ${i.name} x${i.quantity} = ₹${i.priceInr * i.quantity}`).join('\n');
    const msg = `*BREW & BLOOM — Third Wave Coffee Order*\n\n${lines}\n\n*Total:* ₹${cartTotal}\n\nPlease confirm dispatch / cafe pickup.`;
    window.open(`https://wa.me/918047108822?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-['Inter',sans-serif] selection:bg-[#c86d3b] selection:text-white">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="third-wave" />

      {/* Top Banner */}
      <div className="bg-[#1c1917] text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span>100% Arabica Specialty Coffee · Roasted Fresh Daily</span>
        <span className="text-[#c86d3b]">✦</span>
        <span>Download the Third Wave App for Instant Free Drink</span>
      </div>

      {/* Header */}
      <header className="sticky top-10 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setCurrentTab('home')}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#c86d3b] text-white flex items-center justify-center font-black text-xl shadow-xs">
                3W
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-[#1c1917] block">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] tracking-widest uppercase text-stone-500 font-bold block">
                  Third Wave Coffee Roasters
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button
              onClick={() => setCurrentTab('home')}
              className={`hover:text-[#c86d3b] transition-colors cursor-pointer ${
                currentTab === 'home' ? 'text-[#c86d3b] border-b-2 border-[#c86d3b] pb-1' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('shop')}
              className={`hover:text-[#c86d3b] transition-colors cursor-pointer ${
                currentTab === 'shop' ? 'text-[#c86d3b] border-b-2 border-[#c86d3b] pb-1' : ''
              }`}
            >
              Packaged Coffee
            </button>
            <button
              onClick={() => setCurrentTab('beverages')}
              className={`hover:text-[#c86d3b] transition-colors cursor-pointer ${
                currentTab === 'beverages' ? 'text-[#c86d3b] border-b-2 border-[#c86d3b] pb-1' : ''
              }`}
            >
              Cafe Menu
            </button>
            <button
              onClick={() => setCurrentTab('locations')}
              className={`hover:text-[#c86d3b] transition-colors cursor-pointer ${
                currentTab === 'locations' ? 'text-[#c86d3b] border-b-2 border-[#c86d3b] pb-1' : ''
              }`}
            >
              100+ Cafes
            </button>
            <button
              onClick={() => setCurrentTab('rewards')}
              className={`hover:text-[#c86d3b] transition-colors cursor-pointer ${
                currentTab === 'rewards' ? 'text-[#c86d3b] border-b-2 border-[#c86d3b] pb-1' : ''
              }`}
            >
              Rewards
            </button>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer relative"
            >
              <ShoppingBag className="w-5 h-5 text-[#1c1917]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#c86d3b] text-white text-[11px] font-bold flex items-center justify-center">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 p-4 space-y-2">
            {(['home', 'shop', 'beverages', 'locations', 'rewards'] as ThirdWaveTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setCurrentTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  currentTab === tab ? 'bg-[#1c1917] text-white' : 'hover:bg-stone-100'
                }`}
              >
                {tab === 'home'
                  ? 'Home'
                  : tab === 'shop'
                  ? 'Packaged Coffee'
                  : tab === 'beverages'
                  ? 'Cafe Menu'
                  : tab === 'locations'
                  ? 'Our Cafes'
                  : 'App Rewards'}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Views */}
      <main>
        {/* TAB 1: HOME */}
        {currentTab === 'home' && (
          <div>
            {/* Hero */}
            <section className="relative bg-[#1c1917] text-white py-16 sm:py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-stone-200">
                    <span className="w-2 h-2 rounded-full bg-[#c86d3b]" />
                    <span>Specialty Coffee Movement in India</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                    Brewed for the <span className="text-[#c86d3b]">Discerning</span> Coffee Lover
                  </h1>

                  <p className="text-stone-300 text-base sm:text-lg max-w-xl leading-relaxed">
                    From single origin micro-lots to our signature Sea Salt Mocha and warm pastries, experience the high craft of 100% Arabica in every cup.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      onClick={() => setCurrentTab('shop')}
                      className="px-6 py-3.5 bg-[#c86d3b] hover:bg-[#b55e2e] text-white text-xs uppercase tracking-wider font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>Explore Roasts & Bags</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentTab('beverages')}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      View Cafe Menu
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img
                      src="https://cdn.shopify.com/s/files/1/1834/9395/files/WEBSITE_ECB_MM_IMAGES_2026_2048x2048-07.jpg?v=1771479865"
                      alt="Third Wave Easy Coffee Bags Box"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#c86d3b]">
                        Instant Gourmet Brew
                      </span>
                      <h3 className="font-bold text-lg">Monsoon Malabar Easy Coffee Bags</h3>
                      <p className="text-xs text-stone-300">Just Add Hot Water · 100% Arabica</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-500 block mb-1">
                    Signature Roasts
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#1c1917]">Popular Whole Beans & Bags</h2>
                </div>
                <button
                  onClick={() => setCurrentTab('shop')}
                  className="text-xs font-bold uppercase tracking-wider text-[#c86d3b] hover:text-[#1c1917] flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Items ({THIRD_WAVE_PRODUCTS.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {THIRD_WAVE_PRODUCTS.slice(0, 3).map(prod => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-100">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1c1917] text-white">
                          {prod.category}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block mb-1">
                        {prod.roast} Roast
                      </span>
                      <h3 className="font-bold text-base text-[#1c1917]">{prod.name}</h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{prod.tastingNotes}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-base font-black font-mono text-stone-900">
                        ₹{prod.priceInr}
                      </span>
                      <button
                        onClick={() => addToCart(prod)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#1c1917] text-white text-xs font-bold hover:bg-[#c86d3b] transition-colors cursor-pointer"
                      >
                        + Add to Bag
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: PACKAGED COFFEE */}
        {currentTab === 'shop' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#c86d3b] block mb-1">
                Roasted to Perfection
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#1c1917] mb-3">
                100% Arabica Packaged Coffee
              </h1>
              <p className="text-stone-600 text-sm">
                Single origins, signature roasts, and nitro-sealed pour-over bags.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    selectedCat === cat
                      ? 'bg-[#1c1917] text-white shadow-xs'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(prod => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-100">
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1c1917] text-white">
                        {prod.category}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block mb-1">
                      {prod.roast} Roast
                    </span>
                    <h3 className="font-bold text-base text-[#1c1917]">{prod.name}</h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{prod.tastingNotes}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-base font-black font-mono text-stone-900">
                      ₹{prod.priceInr}
                    </span>
                    <button
                      onClick={() => addToCart(prod)}
                      className="px-3.5 py-1.5 rounded-xl bg-[#1c1917] text-white text-xs font-bold hover:bg-[#c86d3b] transition-colors cursor-pointer"
                    >
                      + Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: BEVERAGES & CAFE */}
        {currentTab === 'beverages' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#c86d3b] block mb-1">
                Handcrafted at Bar
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#1c1917] mb-3">
                Cafe Drinks & Fresh Bakes
              </h1>
              <p className="text-stone-600 text-sm">
                Available for dine-in and pickup across all Third Wave Coffee cafes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {THIRD_WAVE_PRODUCTS.filter(p => p.category === 'Signature Drinks' || p.category === 'Artisan Bakery').map(item => (
                <div key={item.id} className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-xl object-cover shrink-0" />
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#c86d3b] tracking-wider block">{item.category}</span>
                    <h3 className="font-bold text-base text-[#1c1917]">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">{item.tastingNotes}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-base font-black font-mono">₹{item.priceInr}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 rounded-lg bg-[#1c1917] text-white text-xs font-bold hover:bg-[#c86d3b] transition-colors cursor-pointer"
                      >
                        + Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 4: LOCATIONS */}
        {currentTab === 'locations' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#c86d3b] block mb-1">
                Neighborhood Roasteries
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#1c1917] mb-3">
                100+ Cafes in 8 Major Cities
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { city: 'Bengaluru (HQ)', count: '45+ Cafes', spots: 'Koramangala, Indiranagar, HSR Layout, Church Street, Whitefield' },
                { city: 'Mumbai', count: '25+ Cafes', spots: 'Bandra, Juhu, Lokhandwala, Fort, Powai' },
                { city: 'Delhi-NCR', count: '30+ Cafes', spots: 'Cyber Hub Gurgaon, GK-2 M Block, Connaught Place, Noida Sector 18' },
                { city: 'Hyderabad', count: '12+ Cafes', spots: 'Jubilee Hills, Madhapur, Banjara Hills' },
                { city: 'Pune', count: '8+ Cafes', spots: 'Koregaon Park, Kalyani Nagar, FC Road' },
                { city: 'Chennai', count: '6+ Cafes', spots: 'Nungambakkam, Anna Nagar, Besant Nagar' }
              ].map((loc, i) => (
                <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-[#1c1917]">{loc.city}</h3>
                    <span className="text-xs font-bold text-[#c86d3b] bg-amber-50 px-2 py-0.5 rounded-full">{loc.count}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#c86d3b] shrink-0 mt-0.5" />
                    <span>{loc.spots}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 5: REWARDS */}
        {currentTab === 'rewards' && (
          <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 bg-gradient-to-br from-[#1c1917] to-[#362b24] text-white rounded-3xl shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c86d3b] text-white text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Wave Rewards Program</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black">Sip More. Earn Waves. Enjoy Free Coffee.</h2>
              <p className="text-stone-300 text-sm max-w-xl leading-relaxed">
                Join over 1 million coffee enthusiasts. Earn 1 Wave coin for every ₹10 spent at cafes and online. Redeem for complimentary cold brews, artisan croissants, and limited-edition merchandise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Gift className="w-6 h-6 text-[#c86d3b] mb-2" />
                  <h4 className="font-bold text-sm">Welcome Drink</h4>
                  <p className="text-xs text-stone-300 mt-1">Free handcrafted beverage upon your first mobile download.</p>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Star className="w-6 h-6 text-[#c86d3b] mb-2" />
                  <h4 className="font-bold text-sm">Tier Upgrades</h4>
                  <p className="text-xs text-stone-300 mt-1">Unlock priority barista service and complimentary syrup customizations.</p>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Smartphone className="w-6 h-6 text-[#c86d3b] mb-2" />
                  <h4 className="font-bold text-sm">Order Ahead</h4>
                  <p className="text-xs text-stone-300 mt-1">Skip the cafe billing line with express mobile pick-up.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#c86d3b]" />
                  <h3 className="font-bold text-lg text-[#1c1917]">Your Cart</h3>
                </div>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 overflow-y-auto max-h-[60vh]">
                {cart.length === 0 ? (
                  <p className="text-xs text-stone-500 text-center py-10">Your cart is empty.</p>
                ) : (
                  cart.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-bold text-xs text-[#1c1917] line-clamp-1">{item.name}</h4>
                          <span className="text-[11px] font-mono text-stone-700">₹{item.priceInr}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateCartQty(idx, -1)}
                          className="w-6 h-6 rounded bg-white border border-stone-300 flex items-center justify-center hover:bg-stone-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold font-mono">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQty(idx, 1)}
                          className="w-6 h-6 rounded bg-white border border-stone-300 flex items-center justify-center hover:bg-stone-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Cart Footer */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between font-bold text-base">
                <span>Subtotal</span>
                <span className="font-mono text-stone-900">₹{cartTotal}</span>
              </div>
              <button
                disabled={cart.length === 0}
                onClick={handleCheckout}
                className="w-full py-3 bg-[#c86d3b] hover:bg-[#b55e2e] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer disabled:opacity-50"
              >
                Checkout with WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1c1917] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-black text-xl mb-3">BREW & BLOOM</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Third Wave Coffee Roasters faithful recreation. Sourcing 100% Arabica coffees from Chikmagalur to Nilgiris.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#c86d3b] mb-3">Coffee</h4>
            <ul className="text-xs space-y-2 text-stone-300">
              <li>El Diablo Blend</li>
              <li>Monsoon Malabar AA</li>
              <li>Vienna Roast Easy Bags</li>
              <li>Sea Salt Mocha</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#c86d3b] mb-3">Headquarters</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              80 Feet Rd, Koramangala 4th Block<br />
              Bengaluru, Karnataka 560034
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#c86d3b] mb-3">Connect</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              WhatsApp: +91 80 4710 8822<br />
              feedback@brewbloom.in
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-[11px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 BREW & BLOOM — Third Wave Coffee Recreated Reference.</span>
          <span>100% Arabica Indian specialty coffee.</span>
        </div>
      </footer>
    </div>
  );
};
