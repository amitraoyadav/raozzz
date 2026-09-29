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
  UtensilsCrossed,
  Heart
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  MEAN_MUG_ITEMS,
  MEAN_MUG_LOCATIONS,
  MeanMugItem
} from '../../data/meanMugCoffeeData';

export type MeanMugTab = 'home' | 'coffee' | 'bakery' | 'kitchen' | 'locations';

interface CartItem {
  id: string;
  name: string;
  category: string;
  priceUsd: number;
  priceInr: number;
  quantity: number;
  imageUrl: string;
}

export const MeanMugApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<MeanMugTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'mm-scratch-cinnamon-roll',
      name: 'Giant Scratch Cinnamon Roll',
      category: 'Scratch Bakery',
      priceUsd: 5.50,
      priceInr: 550,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'mm-honey-cinnamon-latte',
      name: 'Tennessee Honey Cinnamon Latte',
      category: 'Espresso & Specialties',
      priceUsd: 5.75,
      priceInr: 575,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const cartTotalUsd = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.priceUsd * i.quantity, 0);
  }, [cart]);

  const cartTotalInr = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.priceInr * i.quantity, 0);
  }, [cart]);

  const addToCart = (item: MeanMugItem) => {
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
          priceUsd: item.priceUsd,
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
    const lines = cart.map(i => `• ${i.name} x${i.quantity} = $${(i.priceUsd * i.quantity).toFixed(2)} (₹${i.priceInr * i.quantity})`).join('\n');
    const msg = `*BREW & BLOOM — Mean Mug Order*\n\n${lines}\n\n*Total:* $${cartTotalUsd.toFixed(2)} (approx ₹${cartTotalInr})\n\nPlease prepare for priority mobile pickup!`;
    window.open(`https://wa.me/14238254206?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c221c] font-['Inter',sans-serif] selection:bg-[#4a3525] selection:text-white">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="mean-mug" />

      {/* Top Banner */}
      <div className="bg-[#4a3525] text-[#fefae0] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span>In-House Coffee Roasters & Fresh Scratch Bakery</span>
        <span className="text-[#d4a373]">✦</span>
        <span>Chattanooga & Fort Oglethorpe · Open Daily from 7:00 AM</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-10 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
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
              <div className="w-10 h-10 rounded-xl bg-[#4a3525] text-white flex items-center justify-center font-bold text-lg">
                MM
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#4a3525] block">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] tracking-widest uppercase text-stone-500 font-semibold block">
                  Mean Mug Coffeehouse
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button
              onClick={() => setCurrentTab('home')}
              className={`hover:text-[#4a3525] transition-colors cursor-pointer ${
                currentTab === 'home' ? 'text-[#4a3525] border-b-2 border-[#4a3525] pb-1' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('coffee')}
              className={`hover:text-[#4a3525] transition-colors cursor-pointer ${
                currentTab === 'coffee' ? 'text-[#4a3525] border-b-2 border-[#4a3525] pb-1' : ''
              }`}
            >
              Our Roastery
            </button>
            <button
              onClick={() => setCurrentTab('bakery')}
              className={`hover:text-[#4a3525] transition-colors cursor-pointer ${
                currentTab === 'bakery' ? 'text-[#4a3525] border-b-2 border-[#4a3525] pb-1' : ''
              }`}
            >
              Scratch Bakery
            </button>
            <button
              onClick={() => setCurrentTab('kitchen')}
              className={`hover:text-[#4a3525] transition-colors cursor-pointer ${
                currentTab === 'kitchen' ? 'text-[#4a3525] border-b-2 border-[#4a3525] pb-1' : ''
              }`}
            >
              Breakfast & Lunch
            </button>
            <button
              onClick={() => setCurrentTab('locations')}
              className={`hover:text-[#4a3525] transition-colors cursor-pointer ${
                currentTab === 'locations' ? 'text-[#4a3525] border-b-2 border-[#4a3525] pb-1' : ''
              }`}
            >
              Locations
            </button>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer relative"
            >
              <ShoppingBag className="w-5 h-5 text-[#4a3525]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#d4a373] text-white text-[11px] font-bold flex items-center justify-center">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 p-4 space-y-2">
            {(['home', 'coffee', 'bakery', 'kitchen', 'locations'] as MeanMugTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setCurrentTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  currentTab === tab ? 'bg-[#4a3525] text-white' : 'hover:bg-stone-100'
                }`}
              >
                {tab === 'home'
                  ? 'Home'
                  : tab === 'coffee'
                  ? 'Our Roastery'
                  : tab === 'bakery'
                  ? 'Scratch Bakery'
                  : tab === 'kitchen'
                  ? 'Breakfast & Lunch'
                  : 'Locations'}
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
            <section className="relative bg-[#4a3525] text-white py-16 sm:py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-stone-200">
                    <span className="w-2 h-2 rounded-full bg-[#d4a373]" />
                    <span>Chattanooga, Tennessee Craft Coffeehouse</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                    Warm Coffee. <br />Scratch Bakes. <span className="text-[#d4a373]">Good Neighbors.</span>
                  </h1>

                  <p className="text-stone-300 text-base sm:text-lg max-w-xl leading-relaxed">
                    We believe in honest, small-batch roasting and rolling out dough from scratch every morning. No shortcuts, just delicious breakfast burritos, cinnamon rolls, and smooth espresso.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      onClick={() => setCurrentTab('bakery')}
                      className="px-6 py-3.5 bg-[#d4a373] hover:bg-[#c08d5c] text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>Morning Bakery Menu</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentTab('coffee')}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Our Roasted Beans
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
                      alt="Mean Mug Scratch Cinnamon Roll"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#d4a373]">
                        Daily Morning Icon
                      </span>
                      <h3 className="font-bold text-lg">Giant Scratch Cinnamon Roll</h3>
                      <p className="text-xs text-stone-300">Hand-Rolled Brioche · Cream Cheese Frosting</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Items */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-500 block mb-1">
                    Morning Routine
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#4a3525]">Chattanooga Favorites</h2>
                </div>
                <button
                  onClick={() => setCurrentTab('kitchen')}
                  className="text-xs font-bold uppercase tracking-wider text-[#d4a373] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Items ({MEAN_MUG_ITEMS.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {MEAN_MUG_ITEMS.slice(0, 3).map(item => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-stone-100">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#4a3525] text-white">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-[#4a3525]">{item.name}</h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-base font-black font-mono text-stone-900">
                        ${item.priceUsd.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#4a3525] text-white text-xs font-bold hover:bg-[#d4a373] transition-colors cursor-pointer"
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

        {/* TAB 2: COFFEE */}
        {currentTab === 'coffee' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#d4a373] block mb-1">
                Roasted in Chattanooga
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#4a3525] mb-3">
                In-House Roasted Coffee & Espresso
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MEAN_MUG_ITEMS.filter(i => i.category === 'House Roasted Coffee' || i.category === 'Espresso & Specialties').map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <img src={item.imageUrl} alt={item.name} className="w-full aspect-[4/3] rounded-lg object-cover mb-4" />
                    <span className="text-[10px] uppercase font-bold text-[#d4a373] tracking-wider block mb-1">{item.category}</span>
                    <h3 className="font-bold text-base text-[#4a3525]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-base font-black font-mono">${item.priceUsd.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#4a3525] text-white text-xs font-bold hover:bg-[#d4a373] transition-colors cursor-pointer"
                    >
                      + Order Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: BAKERY */}
        {currentTab === 'bakery' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#d4a373] block mb-1">
                Fresh From the Oven
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#4a3525] mb-3">
                Scratch Baked Daily
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MEAN_MUG_ITEMS.filter(i => i.category === 'Scratch Bakery').map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover shrink-0" />
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#d4a373] tracking-wider block">{item.category}</span>
                    <h3 className="font-bold text-base text-[#4a3525]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">{item.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-base font-black font-mono">${item.priceUsd.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 rounded-lg bg-[#4a3525] text-white text-xs font-bold hover:bg-[#d4a373] transition-colors cursor-pointer"
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

        {/* TAB 4: KITCHEN */}
        {currentTab === 'kitchen' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#d4a373] block mb-1">
                All Day Fuel
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#4a3525] mb-3">
                Breakfast & Lunch Fare
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MEAN_MUG_ITEMS.filter(i => i.category === 'Breakfast & Lunch Kitchen').map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover shrink-0" />
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#d4a373] tracking-wider block">{item.category}</span>
                    <h3 className="font-bold text-base text-[#4a3525]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">{item.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-base font-black font-mono">${item.priceUsd.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 rounded-lg bg-[#4a3525] text-white text-xs font-bold hover:bg-[#d4a373] transition-colors cursor-pointer"
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

        {/* TAB 5: LOCATIONS */}
        {currentTab === 'locations' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#d4a373] block mb-1">
                Come Sit A Spell
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#4a3525] mb-3">
                Our Tennessee & Georgia Coffeehouses
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MEAN_MUG_LOCATIONS.map((loc, i) => (
                <div key={i} className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-3">
                  <h3 className="font-bold text-lg text-[#4a3525]">{loc.name}</h3>
                  <p className="text-xs text-stone-600 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#d4a373] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </p>
                  <p className="text-xs text-stone-600 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#4a3525] shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                  <p className="text-xs text-stone-600 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#4a3525] shrink-0" />
                    <span>{loc.phone}</span>
                  </p>
                </div>
              ))}
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
                  <ShoppingBag className="w-5 h-5 text-[#4a3525]" />
                  <h3 className="font-bold text-lg text-[#4a3525]">Your Mean Mug Order</h3>
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
                          <h4 className="font-bold text-xs text-[#4a3525] line-clamp-1">{item.name}</h4>
                          <span className="text-[11px] font-mono text-stone-700">${item.priceUsd.toFixed(2)}</span>
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
                <span className="font-mono text-stone-900">${cartTotalUsd.toFixed(2)} (approx ₹{cartTotalInr})</span>
              </div>
              <button
                disabled={cart.length === 0}
                onClick={handleCheckout}
                className="w-full py-3 bg-[#4a3525] hover:bg-[#d4a373] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                Checkout with WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#4a3525] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">BREW & BLOOM</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Mean Mug Coffeehouse faithful recreation. In-house roasted coffees and scratch baked pastries in Chattanooga TN.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a373] mb-3">Favorites</h4>
            <ul className="text-xs space-y-2 text-stone-300">
              <li>House Roasted Blend</li>
              <li>Giant Scratch Cinnamon Roll</li>
              <li>Southside Breakfast Burrito</li>
              <li>Tennessee Honey Latte</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a373] mb-3">Southside</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              114 W Main St<br />
              Chattanooga, TN 37408
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a373] mb-3">Contact</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Phone: (423) 825-4206<br />
              hello@brewbloom.in
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-[11px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 BREW & BLOOM — Mean Mug Coffeehouse Recreated Reference.</span>
          <span>Scratch bakery and roastery.</span>
        </div>
      </footer>
    </div>
  );
};
