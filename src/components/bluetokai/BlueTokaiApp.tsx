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
  ShieldCheck,
  Award,
  Filter
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  BLUE_TOKAI_PRODUCTS,
  BLUE_TOKAI_CAFES,
  BlueTokaiProduct
} from '../../data/blueTokaiData';

export type BlueTokaiTab = 'home' | 'shop' | 'subscriptions' | 'cafes' | 'brew-guide';

interface CartItem {
  id: string;
  name: string;
  grind: string;
  priceInr: number;
  quantity: number;
  imageUrl: string;
}

export const BlueTokaiApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<BlueTokaiTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRoast, setSelectedRoast] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Product Quick View modal
  const [selectedProduct, setSelectedProduct] = useState<BlueTokaiProduct | null>(null);
  const [selectedGrind, setSelectedGrind] = useState<string>('Whole Beans');

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'bt-attikan-estate',
      name: 'Attikan Estate (Medium-Dark)',
      grind: 'Whole Beans',
      priceInr: 580,
      quantity: 1,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/1-Kolli-Berri-_Front_1.jpg?v=1714986770'
    }
  ]);

  const roasts = ['All', 'Light', 'Medium', 'Medium-Dark', 'Dark'];
  const grinds = [
    'Whole Beans',
    'Channi / Fine Drip',
    'Aeropress',
    'Pour Over (V60)',
    'French Press',
    'South Indian Filter',
    'Moka Pot',
    'Espresso'
  ];

  const filteredProducts = useMemo(() => {
    return BLUE_TOKAI_PRODUCTS.filter(p => {
      const matchRoast = selectedRoast === 'All' || p.roastLevel === selectedRoast;
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      return matchRoast && matchCat;
    });
  }, [selectedRoast, selectedCategory]);

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.priceInr * i.quantity, 0);
  }, [cart]);

  const addToCart = (product: BlueTokaiProduct, grind = 'Whole Beans') => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === product.id && i.grind === grind);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: `${product.name} (${product.roastLevel})`,
          grind,
          priceInr: product.priceInr,
          quantity: 1,
          imageUrl: product.imageUrl
        }
      ];
    });
    setCartDrawerOpen(true);
    setSelectedProduct(null);
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
    const lines = cart.map(i => `• ${i.name} [${i.grind}] x${i.quantity} = ₹${i.priceInr * i.quantity}`).join('\n');
    const msg = `*BREW & BLOOM — Blue Tokai Roastery Order*\n\n${lines}\n\n*Total:* ₹${cartTotal}\n\nPlease dispatch fresh roasted bag to my address.`;
    window.open(`https://wa.me/919821126015?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1c1c] font-['Inter',sans-serif] selection:bg-[#002B49] selection:text-white">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="blue-tokai" />

      {/* Top Notification Bar */}
      <div className="bg-[#002B49] text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span>Freshly Roasted Twice Every Week · 100% Arabica Indian Specialty Coffee</span>
        <span className="text-[#C86D3B]">✦</span>
        <span>Free Shipping on Orders Above ₹500</span>
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
              <div className="w-10 h-10 rounded-full bg-[#002B49] text-white flex items-center justify-center font-bold text-lg">
                BT
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#002B49] block">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] tracking-widest uppercase text-stone-500 font-semibold block">
                  Blue Tokai Coffee Roasters
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-700">
            <button
              onClick={() => setCurrentTab('home')}
              className={`hover:text-[#002B49] transition-colors cursor-pointer ${
                currentTab === 'home' ? 'text-[#002B49] font-bold border-b-2 border-[#002B49] pb-1' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('shop')}
              className={`hover:text-[#002B49] transition-colors cursor-pointer ${
                currentTab === 'shop' ? 'text-[#002B49] font-bold border-b-2 border-[#002B49] pb-1' : ''
              }`}
            >
              Single Estates
            </button>
            <button
              onClick={() => setCurrentTab('subscriptions')}
              className={`hover:text-[#002B49] transition-colors cursor-pointer ${
                currentTab === 'subscriptions' ? 'text-[#002B49] font-bold border-b-2 border-[#002B49] pb-1' : ''
              }`}
            >
              Subscriptions
            </button>
            <button
              onClick={() => setCurrentTab('cafes')}
              className={`hover:text-[#002B49] transition-colors cursor-pointer ${
                currentTab === 'cafes' ? 'text-[#002B49] font-bold border-b-2 border-[#002B49] pb-1' : ''
              }`}
            >
              Cafes & Roasteries
            </button>
            <button
              onClick={() => setCurrentTab('brew-guide')}
              className={`hover:text-[#002B49] transition-colors cursor-pointer ${
                currentTab === 'brew-guide' ? 'text-[#002B49] font-bold border-b-2 border-[#002B49] pb-1' : ''
              }`}
            >
              Brew Guides
            </button>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer relative"
            >
              <ShoppingBag className="w-5 h-5 text-[#002B49]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C86D3B] text-white text-[11px] font-bold flex items-center justify-center">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 p-4 space-y-2">
            {(['home', 'shop', 'subscriptions', 'cafes', 'brew-guide'] as BlueTokaiTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setCurrentTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  currentTab === tab ? 'bg-[#002B49] text-white' : 'hover:bg-stone-100'
                }`}
              >
                {tab === 'home'
                  ? 'Home'
                  : tab === 'shop'
                  ? 'Single Estates'
                  : tab === 'subscriptions'
                  ? 'Subscriptions'
                  : tab === 'cafes'
                  ? 'Our Cafes'
                  : 'Brew Guides'}
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
            <section className="relative bg-[#002B49] text-white py-16 sm:py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-stone-200">
                    <span className="w-2 h-2 rounded-full bg-[#C86D3B]" />
                    <span>Single Estate 100% Arabica Indian Coffee</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                    Great Coffee Starts at the <span className="text-[#C86D3B]">Estate</span>
                  </h1>

                  <p className="text-stone-300 text-base sm:text-lg max-w-xl leading-relaxed">
                    We source directly from India’s premier shade-grown coffee farms in Karnataka and Tamil Nadu, roasting every batch to order so you experience the true terroir of Indian specialty coffee.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      onClick={() => setCurrentTab('shop')}
                      className="px-6 py-3.5 bg-[#C86D3B] hover:bg-[#b05c2d] text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>Shop Roasted Beans</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentTab('subscriptions')}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Start a Subscription (15% Off)
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0738/1409/files/1-Kolli-Berri-_Front_1.jpg?v=1714986770"
                      alt="Blue Tokai Specialty Coffee Pouch"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#C86D3B]">
                        Micro-Lot Harvest
                      </span>
                      <h3 className="font-bold text-lg">Attikan Estate Karnataka</h3>
                      <p className="text-xs text-stone-300">Biligiriranga Hills · 1,750m Altitude</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Beans */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-500 block mb-1">
                    Direct From Farms
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#002B49]">Best Selling Single Estates</h2>
                </div>
                <button
                  onClick={() => setCurrentTab('shop')}
                  className="text-xs font-bold uppercase tracking-wider text-[#C86D3B] hover:text-[#002B49] flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Beans ({BLUE_TOKAI_PRODUCTS.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {BLUE_TOKAI_PRODUCTS.slice(0, 3).map(prod => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-stone-100">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#002B49] text-white">
                          {prod.roastLevel} Roast
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block mb-1">
                        {prod.estate}
                      </span>
                      <h3 className="font-bold text-base text-[#002B49]">{prod.name}</h3>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {prod.tastingNotes.map((note, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-base font-extrabold font-mono text-stone-900">
                        ₹{prod.priceInr}
                      </span>
                      <button
                        onClick={() => setSelectedProduct(prod)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#002B49] text-white text-xs font-semibold hover:bg-[#C86D3B] transition-colors cursor-pointer"
                      >
                        Select Grind
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: SHOP */}
        {currentTab === 'shop' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#C86D3B] block mb-1">
                Roasted to Order
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#002B49] mb-3">
                Single Estate Coffee Collection
              </h1>
              <p className="text-stone-600 text-sm">
                Custom grind options for every manual brewing method or whole beans for your home grinder.
              </p>
            </div>

            {/* Roast filter pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              <span className="text-xs font-semibold text-stone-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Roast:
              </span>
              {roasts.map(r => (
                <button
                  key={r}
                  onClick={() => setSelectedRoast(r)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedRoast === r
                      ? 'bg-[#002B49] text-white shadow-xs'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(prod => (
                <div
                  key={prod.id}
                  className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-stone-100">
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#002B49] text-white">
                        {prod.roastLevel} Roast
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block mb-1">
                      {prod.estate}
                    </span>
                    <h3 className="font-bold text-base text-[#002B49]">{prod.name}</h3>
                    <p className="text-xs text-stone-500 mt-1">Altitude: {prod.altitude} · {prod.process}</p>
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {prod.tastingNotes.map((note, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-base font-extrabold font-mono text-stone-900">
                      ₹{prod.priceInr}
                    </span>
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#002B49] text-white text-xs font-semibold hover:bg-[#C86D3B] transition-colors cursor-pointer"
                    >
                      Choose Grind
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: SUBSCRIPTIONS */}
        {currentTab === 'subscriptions' && (
          <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 bg-[#002B49] text-white rounded-2xl shadow-xl mb-12">
              <span className="text-xs uppercase font-bold tracking-wider text-[#C86D3B] block mb-2">
                Roastery Club
              </span>
              <h1 className="text-3xl sm:text-4xl font-black mb-3">
                Never Run Out of Fresh Coffee
              </h1>
              <p className="text-stone-300 text-sm leading-relaxed max-w-xl">
                Set up recurring bi-weekly or monthly deliveries of freshly roasted single estates directly to your doorstep. Save 15% on every bag with free nationwide shipping.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Single Bag Plan',
                  bags: '1 Bag (250g)',
                  freq: 'Every 2 Weeks',
                  price: '₹490 / shipment',
                  desc: 'Perfect for 1 daily coffee drinker.'
                },
                {
                  title: 'Duo Bag Plan',
                  bags: '2 Bags (500g)',
                  freq: 'Every 2 Weeks',
                  price: '₹950 / shipment',
                  desc: 'Our most popular plan for coffee enthusiasts.',
                  popular: true
                },
                {
                  title: 'Roastery Bulk',
                  bags: '4 Bags (1kg)',
                  freq: 'Monthly',
                  price: '₹1,850 / shipment',
                  desc: 'Ideal for offices, families, or heavy brewers.'
                }
              ].map((sub, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                    sub.popular
                      ? 'border-[#002B49] shadow-lg ring-2 ring-[#002B49]/20'
                      : 'border-stone-200 shadow-xs'
                  }`}
                >
                  <div>
                    {sub.popular && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#C86D3B] text-white uppercase tracking-wider mb-2">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-bold text-lg text-[#002B49]">{sub.title}</h3>
                    <p className="text-xs text-stone-500 mt-1">{sub.desc}</p>
                    <div className="my-4 p-3 bg-stone-50 rounded-xl space-y-1 text-xs">
                      <div className="flex justify-between font-semibold">
                        <span>Quantity:</span>
                        <span>{sub.bags}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-stone-600">
                        <span>Frequency:</span>
                        <span>{sub.freq}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-bold font-mono text-stone-900 block mb-3">
                      {sub.price}
                    </span>
                    <button
                      onClick={() => addToCart(BLUE_TOKAI_PRODUCTS[0], 'Whole Beans')}
                      className="w-full py-2.5 rounded-lg bg-[#002B49] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C86D3B] transition-colors cursor-pointer"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 4: CAFES */}
        {currentTab === 'cafes' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#C86D3B] block mb-1">
                Store Locator
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#002B49] mb-3">
                Cafes & Roasteries Across India
              </h1>
              <p className="text-stone-600 text-sm">
                Experience manual brew bars, artisan sourdough sandwiches, and fresh bean retail in 90+ cafes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLUE_TOKAI_CAFES.map((city, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-[#002B49]">{city.city}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 text-xs font-bold font-mono">
                      {city.count} Outlets
                    </span>
                  </div>
                  <ul className="text-xs space-y-2 text-stone-600">
                    {city.keyLocations.map((loc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C86D3B] shrink-0" />
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 5: BREW GUIDE */}
        {currentTab === 'brew-guide' && (
          <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#C86D3B] block mb-1">
                Coffee Science
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#002B49] mb-3">
                Manual Brewing Guides
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  method: 'Pour Over (Hario V60)',
                  grind: 'Medium-Fine (Sea Salt)',
                  ratio: '1:15 (15g coffee / 225g water)',
                  temp: '92°C - 94°C',
                  time: '2 mins 45 secs',
                  steps: '1. 45g bloom for 40s. 2. Gentle spiral pours up to 225g.'
                },
                {
                  method: 'Aeropress',
                  grind: 'Fine-Medium',
                  ratio: '1:13 (15g coffee / 200g water)',
                  temp: '88°C - 90°C',
                  time: '1 min 30 secs',
                  steps: 'Inverted method, stir 5 times, steep 1 min, gentle 30s press.'
                },
                {
                  method: 'French Press',
                  grind: 'Coarse (Kosher Salt)',
                  ratio: '1:14 (25g coffee / 350g water)',
                  temp: '95°C',
                  time: '4 mins',
                  steps: 'Pour all water vigorously, break crust at 4m, plunge gently.'
                },
                {
                  method: 'South Indian Filter',
                  grind: 'Fine with 15% Chicory or 100% Arabica',
                  ratio: '1:5 decoction',
                  temp: '98°C Boiling',
                  time: '12 mins drip',
                  steps: 'Add decoction to hot frothed cow milk with raw jaggery or sugar.'
                }
              ].map((guide, i) => (
                <div key={i} className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
                  <h3 className="font-bold text-base text-[#002B49] mb-2">{guide.method}</h3>
                  <div className="space-y-1.5 text-xs text-stone-600 mb-4 font-mono">
                    <p><strong>Grind:</strong> {guide.grind}</p>
                    <p><strong>Ratio:</strong> {guide.ratio}</p>
                    <p><strong>Water Temp:</strong> {guide.temp}</p>
                    <p><strong>Brew Time:</strong> {guide.time}</p>
                  </div>
                  <p className="text-xs text-stone-700 bg-stone-50 p-3 rounded-lg border border-stone-100">
                    {guide.steps}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Grind Selection Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <h3 className="font-bold text-base text-[#002B49]">{selectedProduct.name}</h3>
                <span className="text-xs text-stone-500">{selectedProduct.roastLevel} Roast · ₹{selectedProduct.priceInr}</span>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                Select Your Grind Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {grinds.map(g => (
                  <button
                    key={g}
                    onClick={() => setSelectedGrind(g)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium text-left border transition-all ${
                      selectedGrind === g
                        ? 'border-[#002B49] bg-[#002B49]/5 text-[#002B49] font-bold'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => addToCart(selectedProduct, selectedGrind)}
              className="w-full py-3 bg-[#002B49] hover:bg-[#C86D3B] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Add to Order · ₹{selectedProduct.priceInr}
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#002B49]" />
                  <h3 className="font-bold text-lg text-[#002B49]">Your Roastery Order</h3>
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
                          <h4 className="font-bold text-xs text-[#002B49] line-clamp-1">{item.name}</h4>
                          <span className="text-[11px] text-stone-500 block">{item.grind}</span>
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
                className="w-full py-3 bg-[#002B49] hover:bg-[#C86D3B] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                Checkout with WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#002B49] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">BREW & BLOOM</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Blue Tokai Coffee Roasters faithful recreation. Freshly roasted single estate 100% Arabica Indian coffee with doorstep delivery.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C86D3B] mb-3">Single Estates</h4>
            <ul className="text-xs space-y-2 text-stone-300">
              <li>Attikan Estate</li>
              <li>Dhak Blend</li>
              <li>Silver Oak Blend</li>
              <li>Baarbara Whiskey Aged</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C86D3B] mb-3">Roasteries</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Said-ul-Ajaib, Saket, New Delhi<br />
              Bandra West, Mumbai<br />
              Koramangala, Bengaluru
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C86D3B] mb-3">Contact</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              WhatsApp: +91 98211 26015<br />
              getcoffee@brewbloom.in
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-[11px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 BREW & BLOOM — Blue Tokai Recreated Reference.</span>
          <span>Single estate specialty coffee.</span>
        </div>
      </footer>
    </div>
  );
};
