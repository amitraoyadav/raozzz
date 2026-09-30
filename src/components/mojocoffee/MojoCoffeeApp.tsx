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
  Flame,
  Music,
  Heart
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  MOJO_ITEMS,
  MOJO_LOCATIONS,
  MojoItem,
  MojoLocation
} from '../../data/mojoCoffeeData';

export type MojoTab = 'home' | 'coffee' | 'beignets' | 'locations' | 'roastery';

interface CartItem {
  item: MojoItem;
  quantity: number;
}

export const MojoCoffeeApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<MojoTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { item: MOJO_ITEMS[0], quantity: 1 },
    { item: MOJO_ITEMS[4], quantity: 1 }
  ]);

  const cartSubtotalUsd = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceUsd * c.quantity, 0);
  }, [cart]);

  const cartSubtotalInr = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceInr * c.quantity, 0);
  }, [cart]);

  const addToCart = (item: MojoItem) => {
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
    const msg = `*MYSTIC MOJO COFFEEHOUSE — Pickup Order*\n\n${lines}\n\n*Total:* $${cartSubtotalUsd.toFixed(2)} (approx ₹${cartSubtotalInr})\n\nPlease prepare for pickup at Magazine St.`;
    window.open(`https://wa.me/15045252244?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fffdf9] text-[#1c1917] font-['Space_Grotesk',sans-serif] selection:bg-[#78350f] selection:text-white">
      {/* 15 Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="mojo-coffee" />

      {/* Top Banner */}
      <div className="bg-[#78350f] text-[#fef3c7] text-xs font-bold tracking-widest uppercase py-2 px-4 text-center border-b border-[#92400e] flex items-center justify-center gap-3">
        <span>NEW ORLEANS COLD DRIP & CHICORY AU LAIT</span>
        <span>•</span>
        <span>MAGAZINE ST & FRERET ST</span>
        <span>•</span>
        <span>FRESH POWDERED SUGAR BEIGNETS</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-800 hover:bg-stone-100 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#78350f] group-hover:text-amber-600 transition-colors uppercase block">
                MYSTIC MOJO
              </span>
              <span className="text-[10px] tracking-[0.25em] text-amber-700 uppercase font-mono block -mt-1">
                Coffeehouse & Roastery · NOLA
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#78350f] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#78350f] border-b-2 border-[#78350f]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('coffee')} className={`hover:text-[#78350f] cursor-pointer py-1 ${currentTab === 'coffee' ? 'text-[#78350f] border-b-2 border-[#78350f]' : ''}`}>Kyoto Cold Drip & Coffee</button>
            <button onClick={() => setCurrentTab('beignets')} className={`hover:text-[#78350f] cursor-pointer py-1 ${currentTab === 'beignets' ? 'text-[#78350f] border-b-2 border-[#78350f]' : ''}`}>Beignets & Bakes</button>
            <button onClick={() => setCurrentTab('locations')} className={`hover:text-[#78350f] cursor-pointer py-1 ${currentTab === 'locations' ? 'text-[#78350f] border-b-2 border-[#78350f]' : ''}`}>NOLA Locations</button>
            <button onClick={() => setCurrentTab('roastery')} className={`hover:text-[#78350f] cursor-pointer py-1 ${currentTab === 'roastery' ? 'text-[#78350f] border-b-2 border-[#78350f]' : ''}`}>Roastery Story</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 rounded-full bg-[#78350f] text-white hover:bg-[#92400e] transition-all cursor-pointer shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-stone-900 text-[10px] font-bold flex items-center justify-center">
                  {cart.reduce((s, c) => s + c.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-2 text-sm font-semibold text-stone-800">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Home</button>
            <button onClick={() => { setCurrentTab('coffee'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Kyoto Cold Drip & Coffee</button>
            <button onClick={() => { setCurrentTab('beignets'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Beignets & Breakfast</button>
            <button onClick={() => { setCurrentTab('locations'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">NOLA Locations</button>
            <button onClick={() => { setCurrentTab('roastery'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Roastery Story</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[500px] flex items-center bg-[#29170f] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80"
                alt="Mojo Coffeehouse New Orleans"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c0f0a] via-[#1c0f0a]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/40">
                  New Orleans Specialty Coffee Culture
                </span>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Slow-Dripped in the Big Easy.
                </h1>
                <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-light">
                  Home of the famous 12-hour Kyoto slow-drip towers, chicory-infused cafe au lait, and scratch buttermilk biscuits on Magazine and Freret Streets.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentTab('coffee')}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Explore Drinks</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('locations')}
                    className="px-6 py-3 rounded-xl border border-amber-400/50 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Find a Cafe
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-amber-50/60 p-8 rounded-3xl border border-amber-200/80 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#78350f] text-amber-300 flex items-center justify-center font-bold text-xl">
                  💧
                </div>
                <h3 className="text-xl font-bold text-stone-900">12-Hour Kyoto Towers</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Extracted one drop per second over iced mineral water. Ultra smooth, chocolatey, and naturally sweet without sugar.
                </p>
                <button onClick={() => setCurrentTab('coffee')} className="text-xs font-bold text-[#78350f] hover:underline pt-2 block cursor-pointer">
                  View Cold Brew Menu →
                </button>
              </div>

              <div className="bg-amber-50/60 p-8 rounded-3xl border border-amber-200/80 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#78350f] text-amber-300 flex items-center justify-center font-bold text-xl">
                  ✨
                </div>
                <h3 className="text-xl font-bold text-stone-900">Hot Powdered Beignets</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Fried golden to order and buried in powdered cane sugar. The quintessential New Orleans morning ritual.
                </p>
                <button onClick={() => setCurrentTab('beignets')} className="text-xs font-bold text-[#78350f] hover:underline pt-2 block cursor-pointer">
                  See Fresh Pastries →
                </button>
              </div>

              <div className="bg-amber-50/60 p-8 rounded-3xl border border-amber-200/80 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#78350f] text-amber-300 flex items-center justify-center font-bold text-xl">
                  🎺
                </div>
                <h3 className="text-xl font-bold text-stone-900">Neighborhood Sanctuary</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Porch swings, local jazz beats, brass accents, and friendly neighborhood baristas who know your daily pour.
                </p>
                <button onClick={() => setCurrentTab('locations')} className="text-xs font-bold text-[#78350f] hover:underline pt-2 block cursor-pointer">
                  Magazine & Freret Locations →
                </button>
              </div>
            </div>
          </section>

          {/* Menu Items Grid */}
          <section className="py-12 bg-stone-100/70 border-t border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Handcrafted Menu</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">Signature Offerings</h2>
                </div>
                <button onClick={() => setCurrentTab('coffee')} className="text-xs font-bold text-[#78350f] hover:underline cursor-pointer">
                  View All Drinks →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MOJO_ITEMS.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="h-44 bg-stone-200 overflow-hidden relative">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      {item.badge && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#78350f] text-amber-200 text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-xs text-stone-900">{item.name}</h4>
                          <span className="text-xs font-bold text-[#78350f]">${item.priceUsd.toFixed(2)}</span>
                        </div>
                        <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full py-2 rounded-xl bg-[#78350f] hover:bg-[#92400e] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
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

      {/* VIEW: COFFEE & DRIPS */}
      {currentTab === 'coffee' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Slow Extraction Bar</span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-1">Kyoto Cold Drips & Chicory Coffees</h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Extracted slowly drop by drop over 12 hours for velvety clarity, or brewed rich with roasted French chicory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOJO_ITEMS.filter(i => i.category.includes('Cold') || i.category.includes('Espresso') || i.category.includes('Heritage') || i.category.includes('Whole Bean')).map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="h-48 bg-stone-200 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">{item.category}</span>
                    <h3 className="font-bold text-sm text-stone-900 mt-1">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">{item.description}</p>
                    <span className="text-sm font-extrabold text-[#78350f] block mt-2">${item.priceUsd.toFixed(2)} (₹{item.priceInr})</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#78350f] hover:bg-[#92400e] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
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

      {/* VIEW: BEIGNETS & BAKES */}
      {currentTab === 'beignets' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Scratch Baking Daily</span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-1">Beignets, Biscuits & Breakfast</h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Hot fried beignets tossed in powdered cane sugar and buttermilk breakfast biscuits with andouille sausage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOJO_ITEMS.filter(i => i.category === 'Fresh Bakes & Breakfast').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-stone-200 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">{item.category}</span>
                    <h3 className="font-bold text-base text-stone-900 mt-1">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-[#78350f] block mt-3">${item.priceUsd.toFixed(2)} (₹{item.priceInr})</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#78350f] hover:bg-[#92400e] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-300" />
                    <span>Order Warm Bakes</span>
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
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Lower Garden District & Uptown</span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-1">Our New Orleans Cafes</h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Two iconic NOLA neighborhood coffeehouses with porch seating, local vibes, and artisan espresso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOJO_LOCATIONS.map(loc => (
              <div key={loc.name} className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-xs space-y-4">
                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                  {loc.neighborhood}
                </span>
                <h3 className="text-2xl font-bold text-stone-900">{loc.name}</h3>
                <p className="text-xs text-stone-600 italic leading-relaxed">{loc.vibe}</p>
                <div className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#78350f] shrink-0" />
                    <span>{loc.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#78350f] shrink-0" />
                    <span>{loc.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#78350f] shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                </div>
                <div className="pt-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.name + ' ' + loc.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#78350f] border border-amber-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: ROASTERY STORY */}
      {currentTab === 'roastery' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">New Orleans Coffee Pioneers</span>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-900">
              Roasted Right Here in the Crescent City
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 leading-relaxed text-sm text-stone-700 space-y-6">
            <p>
              Born on Magazine Street in New Orleans, <strong>Mystic Mojo Coffeehouse & Roastery</strong> was created to honor the soul, grit, and warmth of local neighborhood cafes.
            </p>
            <p>
              Rather than rushing coffee, we embrace the slow rhythm of the French Quarter and Garden District. Our 12-hour Kyoto cold drip towers brew patiently drop by drop, producing a glass with zero bitterness and deep chocolate complexity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-100 text-center">
              <div>
                <span className="text-2xl font-black text-[#78350f]">12 Hours</span>
                <span className="block text-xs text-stone-500 mt-1">Kyoto Cold Extraction</span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#78350f]">2</span>
                <span className="block text-xs text-stone-500 mt-1">Historic NOLA Locations</span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#78350f]">100%</span>
                <span className="block text-xs text-stone-500 mt-1">Small Batch Roasted</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-amber-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#78350f]" />
                <h3 className="font-bold text-base text-stone-900">Mojo Order Ahead</h3>
              </div>
              <button onClick={() => setCartDrawerOpen(false)} className="p-2 text-stone-500 hover:text-black rounded-lg cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.map((c, idx) => (
                <div key={c.item.id} className="flex items-center justify-between pb-4 border-b border-stone-100 gap-3">
                  <img src={c.item.imageUrl} alt={c.item.name} className="w-14 h-14 object-cover rounded-xl shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-stone-900 truncate">{c.item.name}</h4>
                    <span className="text-xs text-stone-500">${c.item.priceUsd.toFixed(2)} (₹{c.item.priceInr})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(idx, -1)} className="w-7 h-7 rounded-lg border border-stone-200 flex items-center justify-center text-xs hover:bg-stone-100 cursor-pointer">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{c.quantity}</span>
                    <button onClick={() => updateQuantity(idx, 1)} className="w-7 h-7 rounded-lg border border-stone-200 flex items-center justify-center text-xs hover:bg-stone-100 cursor-pointer">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-600">Subtotal:</span>
                <span className="font-extrabold text-[#78350f] text-base">${cartSubtotalUsd.toFixed(2)} (₹{cartSubtotalInr})</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-3.5 rounded-xl bg-[#78350f] hover:bg-[#92400e] text-white text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-md"
              >
                Send Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1c1917] text-stone-300 py-10 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-white text-sm">MYSTIC MOJO COFFEEHOUSE & ROASTERY</h4>
            <p className="text-stone-400 mt-1">Recreation of Mojo Coffee House (Magazine & Freret NOLA)</p>
          </div>
          <p className="text-stone-400 text-center sm:text-right">
            1500 Magazine St · New Orleans, LA · (504) 525-2244
          </p>
        </div>
      </footer>
    </div>
  );
};
