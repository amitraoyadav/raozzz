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
  Droplets,
  Heart,
  Globe
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  SWEETWATERS_ITEMS,
  SWEETWATERS_LOCATIONS,
  SweetwatersItem,
  SweetwatersLocation
} from '../../data/sweetwatersData';

export type SweetwatersTab = 'home' | 'teas' | 'coffee' | 'icedragons' | 'locations' | 'heritage';

interface CartItem {
  item: SweetwatersItem;
  quantity: number;
}

export const SweetwatersApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<SweetwatersTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { item: SWEETWATERS_ITEMS[0], quantity: 1 },
    { item: SWEETWATERS_ITEMS[1], quantity: 1 }
  ]);

  const cartSubtotalUsd = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceUsd * c.quantity, 0);
  }, [cart]);

  const cartSubtotalInr = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceInr * c.quantity, 0);
  }, [cart]);

  const addToCart = (item: SweetwatersItem) => {
    setCart(prev => {
      const idx = prev.findIndex(c => c.item.id === item.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { item, quantity: 1 }];
    });
    setCartDrawerOpen(true);
  };

  const updateQuantity = (idx: number, delta: number) => {
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

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const lines = cart
      .map(c => `• ${c.item.name} x${c.quantity} ($${(c.item.priceUsd * c.quantity).toFixed(2)})`)
      .join('\n');
    const msg = `*CLEARWATERS GLOBAL TEA & COFFEE — Order Ahead*\n\n${lines}\n\n*Total:* $${cartSubtotalUsd.toFixed(2)} (approx ₹${cartSubtotalInr})\n\nPlease prepare for pickup at Ann Arbor Flagship.`;
    window.open(`https://wa.me/17347692331?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-[#0f172a] font-['Inter',system-ui,sans-serif] selection:bg-[#0369a1] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="sweetwaters" />

      {/* Top Banner */}
      <div className="bg-[#0369a1] text-white text-[11px] font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>GLOBALLY INSPIRED TEAS & DRAGON EYE COFFEES</span>
        <span>•</span>
        <span>FOUNDED IN ANN ARBOR IN 1993</span>
        <span>•</span>
        <span>REAL FRESH-GINGER INFUSIONS</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#0369a1] group-hover:text-sky-700 transition-colors uppercase block">
                CLEARWATERS
              </span>
              <span className="text-[10px] tracking-[0.25em] text-amber-600 uppercase font-mono block -mt-1">
                Global Tea & Coffee · Est. 1993
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-700">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#0369a1] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#0369a1] border-b-2 border-[#0369a1]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('teas')} className={`hover:text-[#0369a1] cursor-pointer py-1 ${currentTab === 'teas' ? 'text-[#0369a1] border-b-2 border-[#0369a1]' : ''}`}>Real Teas & Elixirs</button>
            <button onClick={() => setCurrentTab('coffee')} className={`hover:text-[#0369a1] cursor-pointer py-1 ${currentTab === 'coffee' ? 'text-[#0369a1] border-b-2 border-[#0369a1]' : ''}`}>Dragon Eye & Coffees</button>
            <button onClick={() => setCurrentTab('icedragons')} className={`hover:text-[#0369a1] cursor-pointer py-1 ${currentTab === 'icedragons' ? 'text-[#0369a1] border-b-2 border-[#0369a1]' : ''}`}>Ice Dragons & Pastries</button>
            <button onClick={() => setCurrentTab('locations')} className={`hover:text-[#0369a1] cursor-pointer py-1 ${currentTab === 'locations' ? 'text-[#0369a1] border-b-2 border-[#0369a1]' : ''}`}>Locations</button>
            <button onClick={() => setCurrentTab('heritage')} className={`hover:text-[#0369a1] cursor-pointer py-1 ${currentTab === 'heritage' ? 'text-[#0369a1] border-b-2 border-[#0369a1]' : ''}`}>Heritage 1993</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 rounded-full bg-[#0369a1] text-white hover:bg-sky-800 transition-all cursor-pointer shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-bold flex items-center justify-center">
                  {cart.reduce((s, c) => s + c.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 text-sm font-semibold text-slate-800">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-slate-100">Home</button>
            <button onClick={() => { setCurrentTab('teas'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-slate-100">Real Teas & Elixirs</button>
            <button onClick={() => { setCurrentTab('coffee'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-slate-100">Dragon Eye & Coffees</button>
            <button onClick={() => { setCurrentTab('icedragons'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-slate-100">Ice Dragons & Pastries</button>
            <button onClick={() => { setCurrentTab('locations'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-slate-100">Locations</button>
            <button onClick={() => { setCurrentTab('heritage'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Heritage 1993</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[500px] flex items-center bg-[#072d42] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80"
                alt="Sweetwaters Cafe Ann Arbor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#031d2c] via-[#031d2c]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-400/30">
                  Global Flavors · Local Community Hearth
                </span>
                <h1 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Where Global Tea Meets American Roastery.
                </h1>
                <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed font-light">
                  From our original Ann Arbor Michigan cafe in 1993 to neighborhood gathering places nationwide, enjoy fresh-brewed Ginger Lemon Tea, the legendary Dragon Eye, and blended Ice Dragons.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentTab('teas')}
                    className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>View Teas & Coffees</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('locations')}
                    className="px-6 py-3 rounded-xl border border-sky-300/40 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Find Nearest Cafe
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Value Pillars */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0369a1] text-amber-300 flex items-center justify-center font-bold text-xl">
                  🍋
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-slate-900">Real Fresh Ginger Lemon Tea</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Minced ginger root and fresh lemons brewed in copper kettles. Pure immune-boosting warmth with wildflower honey.
                </p>
                <button onClick={() => setCurrentTab('teas')} className="text-xs font-bold text-[#0369a1] hover:underline pt-2 block cursor-pointer">
                  Explore Tea Menu →
                </button>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0369a1] text-amber-300 flex items-center justify-center font-bold text-xl">
                  ☕
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-slate-900">The Iconic Dragon Eye</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dark-roast French drip coffee layered with sweetened condensed milk and crowned with an espresso shot.
                </p>
                <button onClick={() => setCurrentTab('coffee')} className="text-xs font-bold text-[#0369a1] hover:underline pt-2 block cursor-pointer">
                  See Coffee Menu →
                </button>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0369a1] text-amber-300 flex items-center justify-center font-bold text-xl">
                  🐲
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-slate-900">Blended Ice Dragons</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our famous frosted frappes: Strawberry Bliss, Caramel Macchiato, and Matcha Green Tea Ice Dragons.
                </p>
                <button onClick={() => setCurrentTab('icedragons')} className="text-xs font-bold text-[#0369a1] hover:underline pt-2 block cursor-pointer">
                  View Ice Dragons →
                </button>
              </div>
            </div>
          </section>

          {/* Featured Menu Grid */}
          <section className="py-12 bg-sky-50/50 border-t border-sky-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Handcrafted Beverages</span>
                  <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-slate-900">Signature Selections</h2>
                </div>
                <button onClick={() => setCurrentTab('teas')} className="text-xs font-bold text-[#0369a1] hover:underline cursor-pointer">
                  View All Drinks →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SWEETWATERS_ITEMS.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="h-44 bg-slate-100 overflow-hidden relative">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      {item.badge && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#0369a1] text-amber-200 text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-xs text-slate-900 font-['Fraunces',serif]">{item.name}</h4>
                          <span className="text-xs font-bold text-[#0369a1]">${item.priceUsd.toFixed(2)}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full py-2 rounded-xl bg-[#0369a1] hover:bg-sky-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-amber-300" />
                        <span>Order · ₹{item.priceInr}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* VIEW: TEAS */}
      {currentTab === 'teas' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Slow-Brewed Botanicals</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-slate-900 mt-1">Real Ginger Lemon Teas & Matchas</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Made with fresh ginger root, whole lemons, and first-harvest Japanese ceremonial Uji matcha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SWEETWATERS_ITEMS.filter(i => i.category === 'Signature Teas & Elixirs').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="h-52 bg-slate-100 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">{item.category}</span>
                    <h3 className="font-bold text-base text-slate-900 font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
                    <span className="text-sm font-extrabold text-[#0369a1] block mt-2">${item.priceUsd.toFixed(2)} (₹{item.priceInr})</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#0369a1] hover:bg-sky-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-300" />
                    <span>Order Tea</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: COFFEE & DRAGON EYE */}
      {currentTab === 'coffee' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">The 1993 Specialty</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-slate-900 mt-1">Dragon Eye & Global Brews</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our hallmark creation: strong dark roast, sweetened condensed milk, and an espresso kicker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SWEETWATERS_ITEMS.filter(i => i.category === 'Global Espresso & Brews').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-slate-100 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">{item.category}</span>
                    <h3 className="font-bold text-base text-slate-900 font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-[#0369a1] block mt-3">${item.priceUsd.toFixed(2)} (₹{item.priceInr})</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#0369a1] hover:bg-sky-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-300" />
                    <span>Order Coffee</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: ICE DRAGONS */}
      {currentTab === 'icedragons' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Frosted Blended Refreshers</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-slate-900 mt-1">Ice Dragons & Fresh Bakes</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Sweet blended ice frappes and almond frangipane croissants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SWEETWATERS_ITEMS.filter(i => i.category === 'Ice Dragon Frappes' || i.category === 'Fresh Pastries & Savory Bites').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="h-48 bg-slate-100 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 font-['Fraunces',serif]">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
                    <span className="text-sm font-extrabold text-[#0369a1] block mt-2">${item.priceUsd.toFixed(2)} (₹{item.priceInr})</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#0369a1] hover:bg-sky-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-300" />
                    <span>Add to Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: LOCATIONS */}
      {currentTab === 'locations' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Ann Arbor & Beyond</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-slate-900 mt-1">Our Community Cafes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SWEETWATERS_LOCATIONS.map(loc => (
              <div key={loc.name} className="bg-white p-7 rounded-3xl border border-sky-100 shadow-xs space-y-3">
                <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-wider">
                  {loc.city}, {loc.state}
                </span>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-slate-900">{loc.name}</h3>
                <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0369a1] shrink-0" />
                    <span>{loc.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#0369a1] shrink-0" />
                    <span>{loc.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0369a1] shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.name + ' ' + loc.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0369a1] border border-sky-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Google Maps Directions</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: HERITAGE */}
      {currentTab === 'heritage' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Since 1993</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-5xl font-black text-slate-900">
              Thirty Years of Global Tea & Coffee Warmth
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-sky-100 leading-relaxed text-sm text-slate-700 space-y-6">
            <p>
              In 1993, founders Wei and Lisa Bee opened the doors to the first <strong>Clearwaters Cafe</strong> in downtown Ann Arbor, Michigan. Inspired by their world travels and multicultural background, they sought to build a cafe celebrating tea as deeply as coffee.
            </p>
            <p>
              Rather than generic concentrates, they created recipes like real-steeped <em>Ginger Lemon Tea</em> and the famous <em>Dragon Eye</em> coffee with condensed milk. Today, each cafe serves as a warm, welcoming community hearth for neighbors, students, and travelers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100 text-center">
              <div>
                <span className="text-2xl font-black text-[#0369a1] font-['Fraunces',serif]">1993</span>
                <span className="block text-xs text-slate-500 mt-1">Founded in Ann Arbor</span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#0369a1] font-['Fraunces',serif]">100%</span>
                <span className="block text-xs text-slate-500 mt-1">Real Steeped Ginger Root</span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#0369a1] font-['Fraunces',serif]">30+ Yrs</span>
                <span className="block text-xs text-slate-500 mt-1">Neighborhood Community</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
            <div className="p-5 border-b border-sky-100 flex items-center justify-between bg-sky-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#0369a1]" />
                <h3 className="font-bold text-base text-slate-900 font-['Fraunces',serif]">Clearwaters Drink Bag</h3>
              </div>
              <button onClick={() => setCartDrawerOpen(false)} className="p-2 text-slate-500 hover:text-black rounded-lg cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.map((c, idx) => (
                <div key={c.item.id} className="flex items-center justify-between pb-4 border-b border-slate-100 gap-3">
                  <img src={c.item.imageUrl} alt={c.item.name} className="w-14 h-14 object-cover rounded-xl shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-slate-900 truncate">{c.item.name}</h4>
                    <span className="text-xs text-slate-500">${c.item.priceUsd.toFixed(2)} (₹{c.item.priceInr})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(idx, -1)} className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-100 cursor-pointer">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{c.quantity}</span>
                    <button onClick={() => updateQuantity(idx, 1)} className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-100 cursor-pointer">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-sky-100 bg-sky-50 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600">Subtotal:</span>
                <span className="font-extrabold text-[#0369a1] text-base">${cartSubtotalUsd.toFixed(2)} (₹{cartSubtotalInr})</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-3.5 rounded-xl bg-[#0369a1] hover:bg-sky-800 text-white text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-md"
              >
                Send Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#072435] text-slate-300 py-10 border-t border-sky-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-white text-sm">CLEARWATERS GLOBAL TEA & COFFEE</h4>
            <p className="text-slate-400 mt-1">Recreation of Sweetwaters Cafe (Ann Arbor, MI & Nationwide)</p>
          </div>
          <p className="text-slate-400 text-center sm:text-right">
            123 W Washington St · Ann Arbor, MI · (734) 769-2331
          </p>
        </div>
      </footer>
    </div>
  );
};
