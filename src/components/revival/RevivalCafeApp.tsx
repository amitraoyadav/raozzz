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
  Users
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  REVIVAL_MENU,
  REVIVAL_LOCATIONS,
  RevivalMenuItem
} from '../../data/revivalCafeData';

export type RevivalTab = 'home' | 'sandwiches' | 'bowls' | 'drinks' | 'catering' | 'locations';

interface CartItem {
  id: string;
  name: string;
  category: string;
  priceUsd: number;
  priceInr: number;
  quantity: number;
  imageUrl: string;
}

export const RevivalCafeApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<RevivalTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'rev-the-brekkie',
      name: 'The Brekkie on House English Muffin',
      category: 'Breakfast Sandwiches',
      priceUsd: 11.50,
      priceInr: 1150,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'rev-crema-toast',
      name: 'Famous Crema Toast',
      category: 'Toasts & Grain Bowls',
      priceUsd: 10.50,
      priceInr: 1050,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const cartTotalUsd = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.priceUsd * i.quantity, 0);
  }, [cart]);

  const cartTotalInr = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.priceInr * i.quantity, 0);
  }, [cart]);

  const addToCart = (item: RevivalMenuItem) => {
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
    const msg = `*BREW & BLOOM — Revival Cafe & Kitchen Order*\n\n${lines}\n\n*Total:* $${cartTotalUsd.toFixed(2)} (approx ₹${cartTotalInr})\n\nPlease prepare for Cambridge/Boston pickup!`;
    window.open(`https://wa.me/16176655899?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2c3e50] font-['Inter',sans-serif] selection:bg-[#2c3e50] selection:text-white">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="revival-cafe" />

      {/* Top Banner */}
      <div className="bg-[#2c3e50] text-[#f1f2f6] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span>Food & Coffee Made With Real Intention</span>
        <span className="text-[#f39c12]">✦</span>
        <span>Alewife Cambridge · Davis Square Somerville · Newbury St Boston</span>
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
              <div className="w-10 h-10 rounded-xl bg-[#2c3e50] text-white flex items-center justify-center font-bold text-lg">
                R+K
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#2c3e50] block">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] tracking-widest uppercase text-stone-500 font-semibold block">
                  Revival Cafe + Kitchen
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button
              onClick={() => setCurrentTab('home')}
              className={`hover:text-[#2c3e50] transition-colors cursor-pointer ${
                currentTab === 'home' ? 'text-[#2c3e50] border-b-2 border-[#2c3e50] pb-1' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('sandwiches')}
              className={`hover:text-[#2c3e50] transition-colors cursor-pointer ${
                currentTab === 'sandwiches' ? 'text-[#2c3e50] border-b-2 border-[#2c3e50] pb-1' : ''
              }`}
            >
              Sandwiches
            </button>
            <button
              onClick={() => setCurrentTab('bowls')}
              className={`hover:text-[#2c3e50] transition-colors cursor-pointer ${
                currentTab === 'bowls' ? 'text-[#2c3e50] border-b-2 border-[#2c3e50] pb-1' : ''
              }`}
            >
              Toasts & Bowls
            </button>
            <button
              onClick={() => setCurrentTab('drinks')}
              className={`hover:text-[#2c3e50] transition-colors cursor-pointer ${
                currentTab === 'drinks' ? 'text-[#2c3e50] border-b-2 border-[#2c3e50] pb-1' : ''
              }`}
            >
              Coffee & Matcha
            </button>
            <button
              onClick={() => setCurrentTab('catering')}
              className={`hover:text-[#2c3e50] transition-colors cursor-pointer ${
                currentTab === 'catering' ? 'text-[#2c3e50] border-b-2 border-[#2c3e50] pb-1' : ''
              }`}
            >
              Catering
            </button>
            <button
              onClick={() => setCurrentTab('locations')}
              className={`hover:text-[#2c3e50] transition-colors cursor-pointer ${
                currentTab === 'locations' ? 'text-[#2c3e50] border-b-2 border-[#2c3e50] pb-1' : ''
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
              <ShoppingBag className="w-5 h-5 text-[#2c3e50]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#f39c12] text-white text-[11px] font-bold flex items-center justify-center">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 p-4 space-y-2">
            {(['home', 'sandwiches', 'bowls', 'drinks', 'catering', 'locations'] as RevivalTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setCurrentTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  currentTab === tab ? 'bg-[#2c3e50] text-white' : 'hover:bg-stone-100'
                }`}
              >
                {tab === 'home'
                  ? 'Home'
                  : tab === 'sandwiches'
                  ? 'Sandwiches'
                  : tab === 'bowls'
                  ? 'Toasts & Bowls'
                  : tab === 'drinks'
                  ? 'Coffee & Matcha'
                  : tab === 'catering'
                  ? 'Catering'
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
            <section className="relative bg-[#2c3e50] text-white py-16 sm:py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-stone-200">
                    <span className="w-2 h-2 rounded-full bg-[#f39c12]" />
                    <span>Boston & Cambridge Culinary Cafe</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                    Everyday Food, <br /><span className="text-[#f39c12]">Elevated Craft.</span>
                  </h1>

                  <p className="text-stone-300 text-base sm:text-lg max-w-xl leading-relaxed">
                    Founded by Liza Shirazi and Steve DiFillippo. We griddle English muffins in-house, whip fresh ricotta toasts, and pull espresso with George Howell beans.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      onClick={() => setCurrentTab('sandwiches')}
                      className="px-6 py-3.5 bg-[#f39c12] hover:bg-[#d68910] text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>Explore Breakfast Menu</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentTab('catering')}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Office Catering Crates
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
                      alt="The Brekkie on Scratch English Muffin"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#f39c12]">
                        Boston Morning Staple
                      </span>
                      <h3 className="font-bold text-lg">The Brekkie Sandwich</h3>
                      <p className="text-xs text-stone-300">House English Muffin · Pasture Egg · Smoked Bacon</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Popular Items */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-500 block mb-1">
                    Morning Favorites
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#2c3e50]">Signature Revival Kitchen Items</h2>
                </div>
                <button
                  onClick={() => setCurrentTab('sandwiches')}
                  className="text-xs font-bold uppercase tracking-wider text-[#f39c12] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Menu ({REVIVAL_MENU.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {REVIVAL_MENU.slice(0, 3).map(item => (
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
                        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#2c3e50] text-white">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-[#2c3e50]">{item.name}</h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-base font-black font-mono text-stone-900">
                        ${item.priceUsd.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#2c3e50] text-white text-xs font-bold hover:bg-[#f39c12] transition-colors cursor-pointer"
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

        {/* TAB 2: SANDWICHES */}
        {currentTab === 'sandwiches' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#f39c12] block mb-1">
                Griddled Fresh
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#2c3e50] mb-3">
                Scratch English Muffin Sandwiches
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REVIVAL_MENU.filter(i => i.category === 'Breakfast Sandwiches').map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover shrink-0" />
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#f39c12] tracking-wider block">{item.category}</span>
                    <h3 className="font-bold text-base text-[#2c3e50]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">{item.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-base font-black font-mono">${item.priceUsd.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 rounded-lg bg-[#2c3e50] text-white text-xs font-bold hover:bg-[#f39c12] transition-colors cursor-pointer"
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

        {/* TAB 3: TOASTS & BOWLS */}
        {currentTab === 'bowls' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#f39c12] block mb-1">
                Wholesome & Seasonal
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#2c3e50] mb-3">
                Brioche Toasts & Grain Bowls
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REVIVAL_MENU.filter(i => i.category === 'Toasts & Grain Bowls').map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover shrink-0" />
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#f39c12] tracking-wider block">{item.category}</span>
                    <h3 className="font-bold text-base text-[#2c3e50]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">{item.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-base font-black font-mono">${item.priceUsd.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 rounded-lg bg-[#2c3e50] text-white text-xs font-bold hover:bg-[#f39c12] transition-colors cursor-pointer"
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

        {/* TAB 4: DRINKS */}
        {currentTab === 'drinks' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#f39c12] block mb-1">
                Artisan Bar
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#2c3e50] mb-3">
                George Howell Espresso & Uji Matcha
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REVIVAL_MENU.filter(i => i.category === 'Artisan Coffee & Matcha').map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover shrink-0" />
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#f39c12] tracking-wider block">{item.category}</span>
                    <h3 className="font-bold text-base text-[#2c3e50]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">{item.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-base font-black font-mono">${item.priceUsd.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 rounded-lg bg-[#2c3e50] text-white text-xs font-bold hover:bg-[#f39c12] transition-colors cursor-pointer"
                      >
                        + Order Drink
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 5: CATERING */}
        {currentTab === 'catering' && (
          <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 bg-[#2c3e50] text-white rounded-2xl shadow-xl space-y-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f39c12]">
                Events & Corporate Catering
              </span>
              <h2 className="text-3xl sm:text-4xl font-black">Feed Your Cambridge & Boston Team</h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                From morning breakfast pastry crates and sandwich platters to large-scale boxed lunches for biotech conferences in Kendall Square and Alewife.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {REVIVAL_MENU.filter(i => i.category === 'Catering Crates').map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#f39c12] tracking-wider block">{item.category}</span>
                      <h3 className="font-bold text-lg text-[#2c3e50]">{item.name}</h3>
                      <p className="text-xs text-stone-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-bold font-mono block mb-2">${item.priceUsd.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-4 py-2 bg-[#2c3e50] hover:bg-[#f39c12] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      + Add Crate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 6: LOCATIONS */}
        {currentTab === 'locations' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#f39c12] block mb-1">
                Neighborhood Kitchens
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#2c3e50] mb-3">
                Cambridge, Somerville & Boston
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIVAL_LOCATIONS.map((loc, i) => (
                <div key={i} className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-3">
                  <h3 className="font-bold text-lg text-[#2c3e50]">{loc.name}</h3>
                  <p className="text-xs text-stone-600 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#f39c12] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </p>
                  <p className="text-xs text-stone-600 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#2c3e50] shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                  <p className="text-xs text-stone-600 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#2c3e50] shrink-0" />
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
                  <ShoppingBag className="w-5 h-5 text-[#2c3e50]" />
                  <h3 className="font-bold text-lg text-[#2c3e50]">Your Revival Order</h3>
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
                          <h4 className="font-bold text-xs text-[#2c3e50] line-clamp-1">{item.name}</h4>
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
                className="w-full py-3 bg-[#2c3e50] hover:bg-[#f39c12] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                Checkout with WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">BREW & BLOOM</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Revival Cafe + Kitchen faithful recreation. House griddled English muffins and George Howell specialty coffee in Boston & Cambridge.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f39c12] mb-3">Favorites</h4>
            <ul className="text-xs space-y-2 text-stone-300">
              <li>The Brekkie Sandwich</li>
              <li>Famous Crema Toast</li>
              <li>Seared Halloumi Sandwich</li>
              <li>Spiced Maple Latte</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f39c12] mb-3">Cambridge Flagship</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              125 Cambridgepark Dr<br />
              Cambridge, MA 02140
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f39c12] mb-3">Contact</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Phone: (617) 665-5899<br />
              hello@brewbloom.in
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-[11px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 BREW & BLOOM — Revival Cafe + Kitchen Recreated Reference.</span>
          <span>Community cafe and kitchen.</span>
        </div>
      </footer>
    </div>
  );
};
