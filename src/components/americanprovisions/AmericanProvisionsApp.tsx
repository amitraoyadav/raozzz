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
  Wine,
  UtensilsCrossed,
  Heart,
  Share2
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  PROVISION_ITEMS,
  PROVISIONS_LOCATIONS,
  ProvisionItem,
  ProvisionLocation
} from '../../data/americanProvisionsData';

export type ProvisionTab = 'home' | 'sandwiches' | 'cheese' | 'wine' | 'locations' | 'story';

interface CartItem {
  item: ProvisionItem;
  quantity: number;
}

export const AmericanProvisionsApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<ProvisionTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('South Boston');
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { item: PROVISION_ITEMS[0], quantity: 1 },
    { item: PROVISION_ITEMS[5], quantity: 1 }
  ]);
  const [orderSent, setOrderSent] = useState(false);

  const cartSubtotalUsd = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceUsd * c.quantity, 0);
  }, [cart]);

  const cartSubtotalInr = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceInr * c.quantity, 0);
  }, [cart]);

  const addToCart = (item: ProvisionItem) => {
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
    const msg = `*FEDERAL PROVISIONS & PANTRY — Sandwich & Market Order*\n\n*Pickup Store:* ${selectedLocation}\n\n${lines}\n\n*Total:* $${cartSubtotalUsd.toFixed(2)} (approx ₹${cartSubtotalInr})\n\nPlease confirm pickup time.`;
    window.open(`https://wa.me/16172696100?text=${encodeURIComponent(msg)}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#242825] font-['Inter',system-ui,sans-serif] selection:bg-[#2b3a2f] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="american-provisions" />

      {/* Top Banner Announcement */}
      <div className="bg-[#242825] text-[#e8ded1] text-[11px] font-bold tracking-widest uppercase py-2.5 px-4 text-center border-b border-[#353b37] flex items-center justify-center gap-3">
        <span>South Boston & Dorchester Specialty Market</span>
        <span className="text-[#c79c5e]">✦</span>
        <span>Cut-to-Order Farmstead Cheese</span>
        <span className="text-[#c79c5e]">✦</span>
        <span>Natural Wine & Specialty Coffee</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#242825]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#242825] hover:bg-stone-200/60 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#242825] group-hover:text-[#c79c5e] transition-colors uppercase block">
                FEDERAL PROVISIONS
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#69726b] uppercase font-mono block -mt-0.5">
                Market · Deli · Wine · Coffee
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#3c423d]">
            <button
              onClick={() => setCurrentTab('home')}
              className={`hover:text-[#c79c5e] transition-colors py-1 cursor-pointer ${currentTab === 'home' ? 'text-[#c79c5e] border-b-2 border-[#c79c5e]' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('sandwiches')}
              className={`hover:text-[#c79c5e] transition-colors py-1 cursor-pointer ${currentTab === 'sandwiches' ? 'text-[#c79c5e] border-b-2 border-[#c79c5e]' : ''}`}
            >
              Sandwiches
            </button>
            <button
              onClick={() => setCurrentTab('cheese')}
              className={`hover:text-[#c79c5e] transition-colors py-1 cursor-pointer ${currentTab === 'cheese' ? 'text-[#c79c5e] border-b-2 border-[#c79c5e]' : ''}`}
            >
              Cheese & Salumi
            </button>
            <button
              onClick={() => setCurrentTab('wine')}
              className={`hover:text-[#c79c5e] transition-colors py-1 cursor-pointer ${currentTab === 'wine' ? 'text-[#c79c5e] border-b-2 border-[#c79c5e]' : ''}`}
            >
              Wine & Coffee
            </button>
            <button
              onClick={() => setCurrentTab('locations')}
              className={`hover:text-[#c79c5e] transition-colors py-1 cursor-pointer ${currentTab === 'locations' ? 'text-[#c79c5e] border-b-2 border-[#c79c5e]' : ''}`}
            >
              Locations
            </button>
            <button
              onClick={() => setCurrentTab('story')}
              className={`hover:text-[#c79c5e] transition-colors py-1 cursor-pointer ${currentTab === 'story' ? 'text-[#c79c5e] border-b-2 border-[#c79c5e]' : ''}`}
            >
              About
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 rounded-full bg-[#242825] text-white hover:bg-[#383e39] transition-all cursor-pointer shadow-sm"
              title="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#c79c5e]" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#c79c5e] text-black text-[10px] font-bold flex items-center justify-center">
                  {cart.reduce((s, c) => s + c.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#faf7f2] border-b border-stone-200 px-4 py-4 space-y-2 text-sm font-semibold text-[#242825]">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-200">Home</button>
            <button onClick={() => { setCurrentTab('sandwiches'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-200">Sandwiches & Deli</button>
            <button onClick={() => { setCurrentTab('cheese'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-200">Cheese & Charcuterie</button>
            <button onClick={() => { setCurrentTab('wine'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-200">Natural Wine & Coffee</button>
            <button onClick={() => { setCurrentTab('locations'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-200">Locations (South Boston & Dorchester)</button>
            <button onClick={() => { setCurrentTab('story'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Our Producers</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[520px] lg:min-h-[600px] flex items-center bg-[#242825] text-[#f4efe6] overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
                alt="Federal Provisions Market"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#171a18] via-[#171a18]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
              <div className="max-w-2xl space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#c79c5e]/20 border border-[#c79c5e]/50 text-[#e4b97d] text-xs font-bold uppercase tracking-wider">
                  South Boston & Dorchester Neighborhood Market
                </span>
                <h2 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Real Food from Real People.
                </h2>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                  Specialty market and sandwich shop dedicated to small-batch cheese-makers, pasture-raised meats, low-intervention natural wines, and single-origin coffee roasters.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentTab('sandwiches')}
                    className="px-6 py-3.5 rounded-xl bg-[#c79c5e] hover:bg-[#b58a4e] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Order Sandwiches</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('locations')}
                    className="px-6 py-3.5 rounded-xl border border-stone-400 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Visit Stores
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Highlights 3-Col */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#242825] text-[#c79c5e] flex items-center justify-center font-bold">
                  🥪
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-[#242825]">
                  Handcrafted Sandwiches
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Crafted daily on seeded braided rolls, fresh focaccia, and sourdough using heirloom meats and artisan cheeses.
                </p>
                <button
                  onClick={() => setCurrentTab('sandwiches')}
                  className="text-xs font-bold text-[#c79c5e] hover:underline flex items-center gap-1 cursor-pointer pt-2"
                >
                  View Sandwich Menu →
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#242825] text-[#c79c5e] flex items-center justify-center font-bold">
                  🧀
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-[#242825]">
                  Farmstead Cheese Counter
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Cut-to-order wheels sourced directly from New England dairies, Jasper Hill Cellars, and traditional European caves.
                </p>
                <button
                  onClick={() => setCurrentTab('cheese')}
                  className="text-xs font-bold text-[#c79c5e] hover:underline flex items-center gap-1 cursor-pointer pt-2"
                >
                  Explore Cheese Slate →
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#242825] text-[#c79c5e] flex items-center justify-center font-bold">
                  🍷
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-[#242825]">
                  Natural Wine & Cider
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Low-intervention, biodynamic wines made without synthetic additives, paired alongside locally roasted espresso.
                </p>
                <button
                  onClick={() => setCurrentTab('wine')}
                  className="text-xs font-bold text-[#c79c5e] hover:underline flex items-center gap-1 cursor-pointer pt-2"
                >
                  Browse Cellar →
                </button>
              </div>
            </div>
          </section>

          {/* Popular Menu Preview */}
          <section className="py-12 bg-stone-100/70 border-y border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs font-bold text-[#c79c5e] uppercase tracking-wider">Kitchen Classics</span>
                  <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-[#242825]">
                    Neighborhood Favorites
                  </h3>
                </div>
                <button
                  onClick={() => setCurrentTab('sandwiches')}
                  className="px-4 py-2 rounded-xl bg-[#242825] text-white text-xs font-bold hover:bg-[#383e39] transition-colors cursor-pointer"
                >
                  Explore Full Menu ({PROVISION_ITEMS.length} Items)
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROVISION_ITEMS.slice(0, 6).map(item => (
                  <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div className="relative h-48 bg-stone-200 overflow-hidden">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      {item.badge && (
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#242825] text-white text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-bold text-sm text-[#242825] font-['Fraunces',serif]">{item.name}</h4>
                          <span className="text-xs font-bold text-[#242825] whitespace-nowrap">${item.priceUsd.toFixed(2)} (₹{item.priceInr})</span>
                        </div>
                        <p className="text-xs text-stone-600 mt-1 line-clamp-3 leading-relaxed">{item.description}</p>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full py-2.5 rounded-xl bg-[#242825] hover:bg-[#c79c5e] hover:text-black text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* VIEW: SANDWICHES / DELI */}
      {currentTab === 'sandwiches' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#c79c5e] uppercase tracking-wider">Fresh Daily from 8 AM</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-[#242825] mt-1">
              Deli Sandwiches & Toasts
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Served on locally baked braided sesame rolls and natural sourdough with house-pickled vegetables and farm spreads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROVISION_ITEMS.filter(i => i.category === 'Specialty Sandwiches').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="h-52 bg-stone-200 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-base text-[#242825] font-['Fraunces',serif]">{item.name}</h3>
                      <span className="text-sm font-extrabold text-[#242825]">${item.priceUsd.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#242825] text-white hover:bg-[#c79c5e] hover:text-black text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Order Sandwich · ₹{item.priceInr}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: CHEESE & SALUMI */}
      {currentTab === 'cheese' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#c79c5e] uppercase tracking-wider">Cut-to-Order Counter</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-[#242825] mt-1">
              Farmstead Cheeses & Cured Salumi
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Cut fresh to order from our climate-controlled cheese case and artisanal charcuterie boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROVISION_ITEMS.filter(i => i.category === 'Artisan Cheese & Charcuterie').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-stone-200 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c79c5e]">{item.category}</span>
                    <h3 className="font-bold text-lg text-[#242825] font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-[#242825] block mt-3">${item.priceUsd.toFixed(2)} (₹{item.priceInr})</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#242825] text-white hover:bg-[#c79c5e] hover:text-black text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Board to Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: WINE & COFFEE */}
      {currentTab === 'wine' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#c79c5e] uppercase tracking-wider">Cellar & Roastery Bar</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-[#242825] mt-1">
              Natural Wines & Specialty Coffee
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Biodynamic natural wines fermented with native yeasts, paired with rotating single-origin Kalita pour-overs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROVISION_ITEMS.filter(i => i.category === 'Natural Wine & Cider' || i.category === 'Specialty Coffee & Beverages').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="h-44 bg-stone-200 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-sm text-[#242825] font-['Fraunces',serif]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed line-clamp-3">{item.description}</p>
                    <span className="text-xs font-extrabold text-[#242825] block mt-2">${item.priceUsd.toFixed(2)} (₹{item.priceInr})</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2 rounded-xl bg-[#242825] text-white hover:bg-[#c79c5e] hover:text-black text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
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
            <span className="text-xs font-bold text-[#c79c5e] uppercase tracking-wider">Neighborhood Hubs</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-[#242825] mt-1">
              Visit Our Boston Locations
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Stop by our South Boston flagship on East 8th Street or our Dorchester market on Dot Ave.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROVISIONS_LOCATIONS.map(loc => (
              <div key={loc.name} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs space-y-4">
                <span className="px-2.5 py-1 rounded-full bg-[#c79c5e]/20 text-[#855e24] text-[11px] font-bold uppercase tracking-wider">
                  {loc.neighborhood}
                </span>
                <h3 className="font-['Fraunces',serif] text-2xl font-bold text-[#242825]">{loc.name}</h3>
                <div className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c79c5e] shrink-0" />
                    <span>{loc.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#c79c5e] shrink-0" />
                    <span>{loc.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#c79c5e] shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                </div>

                <div className="pt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">Features:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.features.map(f => (
                      <span key={f} className="text-[11px] px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSelectedLocation(loc.neighborhood);
                      setCurrentTab('sandwiches');
                    }}
                    className="w-full py-3 rounded-xl bg-[#242825] hover:bg-[#383e39] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Select {loc.neighborhood} for Pickup
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: OUR STORY */}
      {currentTab === 'story' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#c79c5e] uppercase tracking-wider">Our Philosophy</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-5xl font-black text-[#242825]">
              Connecting City Neighbors with Independent Farms
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 leading-relaxed text-sm text-stone-700 space-y-6">
            <p>
              Founded with the conviction that good food comes from real stewardship, <strong>Federal Provisions & Pantry</strong> began as a neighborhood corner shop committed to championing ethical American and international producers.
            </p>
            <p>
              Every cheese on our counter is cut by hand from small farmstead wheels. Our charcuterie comes from pasture-raised heritage hogs cured without chemical accelerators. Our wine shelves showcase true low-intervention vigneron bottles farmed organically.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-100 text-center">
              <div>
                <span className="text-2xl font-black text-[#242825] font-['Fraunces',serif]">50+</span>
                <span className="block text-xs text-stone-500 mt-1">Farmstead Dairies</span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#242825] font-['Fraunces',serif]">100%</span>
                <span className="block text-xs text-stone-500 mt-1">Hand-Cut to Order</span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#242825] font-['Fraunces',serif]">2</span>
                <span className="block text-xs text-stone-500 mt-1">Boston Locations</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide-over Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#c79c5e]" />
                <h3 className="font-bold text-base text-[#242825] font-['Fraunces',serif]">Your Provisions Bag</h3>
              </div>
              <button
                onClick={() => setCartDrawerOpen(false)}
                className="p-2 text-stone-500 hover:text-black rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-stone-500 text-xs">Your bag is empty.</div>
              ) : (
                cart.map((c, idx) => (
                  <div key={c.item.id} className="flex items-center justify-between pb-4 border-b border-stone-100 gap-3">
                    <img src={c.item.imageUrl} alt={c.item.name} className="w-14 h-14 object-cover rounded-xl shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-[#242825] truncate">{c.item.name}</h4>
                      <span className="text-xs text-stone-500">${c.item.priceUsd.toFixed(2)} (₹{c.item.priceInr})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(idx, -1)}
                        className="w-7 h-7 rounded-lg border border-stone-200 flex items-center justify-center text-xs hover:bg-stone-100 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{c.quantity}</span>
                      <button
                        onClick={() => updateQuantity(idx, 1)}
                        className="w-7 h-7 rounded-lg border border-stone-200 flex items-center justify-center text-xs hover:bg-stone-100 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-600">Subtotal:</span>
                <span className="font-extrabold text-[#242825] text-base">${cartSubtotalUsd.toFixed(2)} (₹{cartSubtotalInr})</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-3.5 rounded-xl bg-[#242825] hover:bg-[#383e39] text-white text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-md"
              >
                Send Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1c201d] text-[#e8ded1] py-12 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-['Fraunces',serif] text-base font-bold text-white">FEDERAL PROVISIONS & PANTRY</h4>
            <p className="text-stone-400 mt-1">Recreation of American Provisions (South Boston & Dorchester, MA)</p>
          </div>
          <div className="text-stone-400 text-center sm:text-right">
            <p>South Boston: 613 E 8th St · (617) 269-6100</p>
            <p className="mt-0.5">Dorchester: 1528 Dorchester Ave · (617) 514-4599</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
