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
  Heart,
  Briefcase,
  Store
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  CCD_MENU,
  CCDMenuItem
} from '../../data/cafeCoffeeDayData';

export type CCDTab = 'home' | 'menu' | 'locations' | 'plantations' | 'vending';

interface CartItem {
  id: string;
  name: string;
  category: string;
  priceInr: number;
  quantity: number;
  imageUrl: string;
}

export const CafeCoffeeDayApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<CCDTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchCity, setSearchCity] = useState<string>('');

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'ccd-devils-own',
      name: "The Devil's Own Frappe",
      category: 'Cold Frappes & Chillers',
      priceInr: 275,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ccd-sizzling-brownie',
      name: 'Sizzling Chocolate Brownie',
      category: 'Desserts & Sizzlers',
      priceInr: 265,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const categories = ['All', 'Hot Coffees', 'Cold Frappes & Chillers', 'Sandwiches & Savories', 'Desserts & Sizzlers', 'Coffee Powders'];

  const filteredMenu = useMemo(() => {
    if (selectedCat === 'All') return CCD_MENU;
    return CCD_MENU.filter(i => i.category === selectedCat);
  }, [selectedCat]);

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.priceInr * i.quantity, 0);
  }, [cart]);

  const addToCart = (item: CCDMenuItem) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          category: item.category,
          priceInr: item.priceInr,
          quantity: 1,
          imageUrl: item.imageUrl
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
    const msg = `*BREW & BLOOM — Cafe Coffee Day Order*\n\n${lines}\n\n*Total Bill:* ₹${cartTotal}\n\nPlease confirm table service / takeaway!`;
    window.open(`https://wa.me/918040015000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const cities = [
    { city: 'Bengaluru', outlets: '160+ Cafes', landmark: 'Brigade Road, Indiranagar, MG Road, Koramangala, CCD Square' },
    { city: 'Mumbai', outlets: '120+ Cafes', landmark: 'Marine Drive, Bandra Carter Road, Juhu Beach, Powai' },
    { city: 'New Delhi & NCR', outlets: '140+ Cafes', landmark: 'Connaught Place, Khan Market, Hauz Khas, Cyber Hub Gurgaon' },
    { city: 'Pune', outlets: '55+ Cafes', landmark: 'FC Road, Koregaon Park, Viman Nagar, Senapati Bapat Road' },
    { city: 'Kolkata', outlets: '40+ Cafes', landmark: 'Park Street, Salt Lake, South City Mall, Ballygunge' },
    { city: 'Hyderabad', outlets: '50+ Cafes', landmark: 'Banjara Hills Road 1, Jubilee Hills, Hitec City' }
  ];

  const filteredCities = useMemo(() => {
    if (!searchCity.trim()) return cities;
    return cities.filter(c => c.city.toLowerCase().includes(searchCity.toLowerCase()) || c.landmark.toLowerCase().includes(searchCity.toLowerCase()));
  }, [searchCity, cities]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#222222] font-['Inter',sans-serif] selection:bg-[#960E18] selection:text-white">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="cafe-coffee-day" />

      {/* Top Heritage Banner */}
      <div className="bg-[#960E18] text-white text-xs py-2 px-4 text-center font-semibold tracking-wide flex items-center justify-center gap-3">
        <span>A Lot Can Happen Over Coffee · India’s Favorite Cafe Hangout Since 1996</span>
        <span>✦</span>
        <span>Over 900+ Outlets & Express Highway Lounges</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-10 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>

            {/* Red Square Logo Mark */}
            <button
              onClick={() => setCurrentTab('home')}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-10 h-10 bg-[#960E18] text-white font-black text-xl flex items-center justify-center rounded-md shadow-sm">
                CCD
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-[#960E18] block">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] tracking-widest uppercase text-stone-500 font-bold block">
                  Cafe Coffee Day
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button
              onClick={() => setCurrentTab('home')}
              className={`hover:text-[#960E18] transition-colors cursor-pointer ${
                currentTab === 'home' ? 'text-[#960E18] border-b-2 border-[#960E18] pb-1' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('menu')}
              className={`hover:text-[#960E18] transition-colors cursor-pointer ${
                currentTab === 'menu' ? 'text-[#960E18] border-b-2 border-[#960E18] pb-1' : ''
              }`}
            >
              Menu & Frappes
            </button>
            <button
              onClick={() => setCurrentTab('locations')}
              className={`hover:text-[#960E18] transition-colors cursor-pointer ${
                currentTab === 'locations' ? 'text-[#960E18] border-b-2 border-[#960E18] pb-1' : ''
              }`}
            >
              Cafe Finder
            </button>
            <button
              onClick={() => setCurrentTab('plantations')}
              className={`hover:text-[#960E18] transition-colors cursor-pointer ${
                currentTab === 'plantations' ? 'text-[#960E18] border-b-2 border-[#960E18] pb-1' : ''
              }`}
            >
              Plantation Story
            </button>
            <button
              onClick={() => setCurrentTab('vending')}
              className={`hover:text-[#960E18] transition-colors cursor-pointer ${
                currentTab === 'vending' ? 'text-[#960E18] border-b-2 border-[#960E18] pb-1' : ''
              }`}
            >
              Corporate Vending
            </button>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer relative"
            >
              <ShoppingBag className="w-5 h-5 text-[#960E18]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#960E18] text-white text-[11px] font-bold flex items-center justify-center">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 p-4 space-y-2">
            {(['home', 'menu', 'locations', 'plantations', 'vending'] as CCDTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setCurrentTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  currentTab === tab ? 'bg-[#960E18] text-white' : 'hover:bg-stone-100'
                }`}
              >
                {tab === 'home'
                  ? 'Home'
                  : tab === 'menu'
                  ? 'Menu & Frappes'
                  : tab === 'locations'
                  ? 'Cafe Finder'
                  : tab === 'plantations'
                  ? 'Plantation Story'
                  : 'Corporate Vending'}
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
            <section className="relative bg-gradient-to-r from-[#960E18] via-[#7e0c14] to-[#45060b] text-white py-16 sm:py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold tracking-wider uppercase text-amber-200">
                    <Heart className="w-3.5 h-3.5 fill-amber-200" />
                    <span>The Unofficial Youth Hangout of India</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                    A Lot Can Happen <br />Over <span className="text-amber-300">Coffee</span>
                  </h1>

                  <p className="text-stone-200 text-base sm:text-lg max-w-xl leading-relaxed">
                    From college romance to late-night startup brainstorms, CCD has been India’s warm corner for over two decades. Savor our legendary Devil’s Own, sizzling brownies, and handcrafted espresso.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      onClick={() => setCurrentTab('menu')}
                      className="px-6 py-3.5 bg-white text-[#960E18] text-xs uppercase tracking-wider font-extrabold rounded-xl hover:bg-stone-100 transition-colors cursor-pointer flex items-center gap-2 shadow-lg"
                    >
                      <span>Explore CCD Menu</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentTab('locations')}
                      className="px-6 py-3.5 bg-black/30 hover:bg-black/40 text-white text-xs uppercase tracking-wider font-bold rounded-xl transition-colors cursor-pointer border border-white/20"
                    >
                      Find Cafe Near Me
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/15">
                    <img
                      src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
                      alt="Devil's Own Frappe with chocolate drizzle"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="p-4 bg-[#7e0c14] text-white flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                          Signature Chiller
                        </span>
                        <h3 className="font-bold text-base">The Devil’s Own</h3>
                      </div>
                      <span className="text-lg font-black font-mono">₹275</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Popular Items Teaser */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-500 block mb-1">
                    Cafe Classics
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#960E18]">Most Loved at CCD</h2>
                </div>
                <button
                  onClick={() => setCurrentTab('menu')}
                  className="text-xs font-bold uppercase tracking-wider text-[#960E18] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Full Food & Beverage Menu ({CCD_MENU.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CCD_MENU.slice(0, 3).map(item => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-100">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#960E18] text-white">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-stone-900">{item.name}</h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-base font-black font-mono text-stone-900">
                        ₹{item.priceInr}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#960E18] text-white text-xs font-bold hover:bg-[#7e0c14] transition-colors cursor-pointer"
                      >
                        + Add to Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: MENU & FRAPPES */}
        {currentTab === 'menu' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#960E18] block mb-1">
                Freshly Prepared
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-stone-900 mb-3">
                Beverages & Food Menu
              </h1>
              <p className="text-stone-600 text-sm">
                From sizzling brownies to tandoori paneer sandwiches and chilled Kaapi Nirvana.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    selectedCat === cat
                      ? 'bg-[#960E18] text-white shadow-xs'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenu.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-100">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#960E18] text-white">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-stone-900">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-base font-black font-mono text-stone-900">
                      ₹{item.priceInr}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3.5 py-1.5 rounded-xl bg-[#960E18] text-white text-xs font-bold hover:bg-[#7e0c14] transition-colors cursor-pointer"
                    >
                      + Order Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: LOCATIONS / CAFE FINDER */}
        {currentTab === 'locations' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#960E18] block mb-1">
                Every Street, Every Highway
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-stone-900 mb-3">
                Cafe Finder (900+ Outlets)
              </h1>
              <div className="mt-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search city, e.g. Bengaluru, Mumbai, Delhi..."
                  value={searchCity}
                  onChange={e => setSearchCity(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#960E18]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.map((city, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-[#960E18]">{city.city}</h3>
                    <span className="text-xs font-bold text-white bg-[#960E18] px-2.5 py-0.5 rounded-full">
                      {city.outlets}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#960E18] shrink-0 mt-0.5" />
                    <span>{city.landmark}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 4: PLANTATIONS */}
        {currentTab === 'plantations' && (
          <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 bg-[#301934] text-white rounded-3xl shadow-xl space-y-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Estate Heritage
              </span>
              <h2 className="text-3xl sm:text-5xl font-black">20,000 Acres of Shade-Grown Coffee</h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                Nestled in the lush Western Ghats of Chikmagalur, Karnataka, our coffee bushes grow under the canopy of native silver oaks, pepper vines, and cardamom plants. We cultivate, harvest, roast, and serve directly from bean to cup.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
                <Coffee className="w-8 h-8 text-[#960E18] mb-3" />
                <h3 className="font-bold text-base mb-2">Arabica & Robusta Varieties</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Carefully blended to produce the signature dense crema and smooth chocolaty finish that defined modern Indian cafe culture.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
                <Store className="w-8 h-8 text-[#960E18] mb-3" />
                <h3 className="font-bold text-base mb-2">Packaged Powder for Home</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Bring the authentic CCD taste home with our freshly sealed roasted beans and South Indian filter decoction blends.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* TAB 5: VENDING & PARTNERSHIPS */}
        {currentTab === 'vending' && (
          <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 bg-white rounded-3xl border border-stone-200 shadow-lg space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-[#960E18] text-xs font-bold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Corporate Coffee Solutions</span>
              </div>
              <h2 className="text-3xl font-black text-stone-900">
                Coffee Day Vending Machines for Workplaces
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                Power your office with automated bean-to-cup fresh milk espresso and cappuccino vending units. Over 50,000 corporate machines installed across India.
              </p>

              <div className="p-4 bg-stone-50 rounded-2xl space-y-2 text-xs text-stone-700">
                <p><strong>Hotline:</strong> 1800 102 5090</p>
                <p><strong>Email:</strong> vending@brewbloom.in</p>
                <p><strong>Installation:</strong> Free maintenance and weekly bean refilling.</p>
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
                  <ShoppingBag className="w-5 h-5 text-[#960E18]" />
                  <h3 className="font-bold text-lg text-[#960E18]">Your CCD Order</h3>
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
                          <h4 className="font-bold text-xs text-stone-900 line-clamp-1">{item.name}</h4>
                          <span className="text-[11px] font-mono text-stone-600">₹{item.priceInr}</span>
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
                className="w-full py-3 bg-[#960E18] hover:bg-[#7e0c14] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer disabled:opacity-50"
              >
                Checkout with WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1c0406] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-black text-xl mb-3 text-[#960E18]">BREW & BLOOM</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Cafe Coffee Day faithful recreation. A lot can happen over coffee. Since 1996.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">Classics</h4>
            <ul className="text-xs space-y-2 text-stone-300">
              <li>The Devil’s Own</li>
              <li>Kaapi Nirvana</li>
              <li>Sizzling Brownie</li>
              <li>Tandoori Paneer Panini</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">Head Office</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Coffee Day Square, Vittal Mallya Road<br />
              Bengaluru, Karnataka 560001
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">Toll-Free</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              WhatsApp: +91 80 4001 5000<br />
              customercare@brewbloom.in
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-[11px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 BREW & BLOOM — Cafe Coffee Day Recreated Reference.</span>
          <span>India’s original coffee hangout.</span>
        </div>
      </footer>
    </div>
  );
};
