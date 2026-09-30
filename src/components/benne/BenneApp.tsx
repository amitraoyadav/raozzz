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
  Heart,
  Award
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  BENNE_ITEMS,
  BenneItem
} from '../../data/benneData';

export type BenneTab = 'home' | 'dosas' | 'tiffins' | 'kaapi' | 'location' | 'story';

interface CartItem {
  item: BenneItem;
  quantity: number;
}

export const BenneApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<BenneTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { item: BENNE_ITEMS[0], quantity: 1 },
    { item: BENNE_ITEMS[6], quantity: 2 }
  ]);

  const cartTotalInr = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceInr * c.quantity, 0);
  }, [cart]);

  const addToCart = (item: BenneItem) => {
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
      .map(c => `• ${c.item.name} x${c.quantity} = ₹${c.item.priceInr * c.quantity}`)
      .join('\n');
    const msg = `*MAKKHAN HERITAGE BENNE KAAPI & DOSA — Bandra Order*\n\n${lines}\n\n*Total Bill:* ₹${cartTotalInr}\n\nPlease prepare fresh for immediate pickup / delivery at Bandra West.`;
    window.open(`https://wa.me/919820511044?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fffdf5] text-[#292524] font-['Space_Grotesk',sans-serif] selection:bg-[#854d0e] selection:text-white">
      {/* 15 Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="benne" />

      {/* Top Banner */}
      <div className="bg-[#854d0e] text-[#fef9c3] text-xs font-bold tracking-widest uppercase py-2 px-4 text-center border-b border-[#a16207] flex items-center justify-center gap-3">
        <span>DAVANGERE BENNE DOSAS & BRASS TUMBLER FILTER KAAPI</span>
        <span>•</span>
        <span>BANDRA WEST, MUMBAI</span>
        <span>•</span>
        <span>100% PURE VEG</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/60 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-800 hover:bg-amber-50 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#854d0e] group-hover:text-amber-800 transition-colors uppercase block">
                MAKKHAN BENNE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#ca8a04] uppercase font-mono block -mt-1">
                Heritage Kaapi & Dosa · Bandra
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#854d0e] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#854d0e] border-b-2 border-[#854d0e]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('dosas')} className={`hover:text-[#854d0e] cursor-pointer py-1 ${currentTab === 'dosas' ? 'text-[#854d0e] border-b-2 border-[#854d0e]' : ''}`}>Benne Dosas</button>
            <button onClick={() => setCurrentTab('tiffins')} className={`hover:text-[#854d0e] cursor-pointer py-1 ${currentTab === 'tiffins' ? 'text-[#854d0e] border-b-2 border-[#854d0e]' : ''}`}>Thatte Idli & Buns</button>
            <button onClick={() => setCurrentTab('kaapi')} className={`hover:text-[#854d0e] cursor-pointer py-1 ${currentTab === 'kaapi' ? 'text-[#854d0e] border-b-2 border-[#854d0e]' : ''}`}>Filter Kaapi</button>
            <button onClick={() => setCurrentTab('location')} className={`hover:text-[#854d0e] cursor-pointer py-1 ${currentTab === 'location' ? 'text-[#854d0e] border-b-2 border-[#854d0e]' : ''}`}>Bandra Outlet</button>
            <button onClick={() => setCurrentTab('story')} className={`hover:text-[#854d0e] cursor-pointer py-1 ${currentTab === 'story' ? 'text-[#854d0e] border-b-2 border-[#854d0e]' : ''}`}>White Butter Story</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 rounded-full bg-[#854d0e] text-white hover:bg-[#713f12] transition-all cursor-pointer shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-amber-200" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-stone-950 text-[10px] font-bold flex items-center justify-center">
                  {cart.reduce((s, c) => s + c.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-amber-200 px-4 py-4 space-y-2 text-sm font-semibold text-stone-800">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Home</button>
            <button onClick={() => { setCurrentTab('dosas'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Davangere Benne Dosas</button>
            <button onClick={() => { setCurrentTab('tiffins'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Thatte Idli & Mangalore Buns</button>
            <button onClick={() => { setCurrentTab('kaapi'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Brass Tumbler Filter Kaapi</button>
            <button onClick={() => { setCurrentTab('location'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Bandra West Outlet</button>
            <button onClick={() => { setCurrentTab('story'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">The White Butter Story</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[500px] flex items-center bg-[#24170a] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-45">
              <img
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1600&q=80"
                alt="Benne Dosa Bandra Mumbai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#170e06] via-[#170e06]/85 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/40">
                  Karnataka’s Butter Capital · Now in Bandra
                </span>
                <h1 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Hot Crisp Dosa. Melting White Butter.
                </h1>
                <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-light">
                  Bandra’s homage to Davangere culinary heritage: thick fermented rice-lentil batter roasted on seasoned cast-iron with fresh churned white butter, fluffy Thatte idlis, and piping brass tumbler filter kaapi.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentTab('dosas')}
                    className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Order Hot Dosa</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('location')}
                    className="px-6 py-3 rounded-xl border border-amber-300/40 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Visit Pali Village, Bandra
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Pillars */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-amber-50/70 p-8 rounded-3xl border border-amber-200/80 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#854d0e] text-amber-200 flex items-center justify-center font-bold text-xl">
                  🥞
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-stone-900">Cast-Iron Tava Roasted</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Slowly crisping on thick cast-iron with generous scoops of unpasteurized white butter for that irresistible contrast of golden crunch and cloud softness.
                </p>
                <button onClick={() => setCurrentTab('dosas')} className="text-xs font-bold text-[#854d0e] hover:underline pt-2 block cursor-pointer">
                  Explore Dosa Varieties →
                </button>
              </div>

              <div className="bg-amber-50/70 p-8 rounded-3xl border border-amber-200/80 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#854d0e] text-amber-200 flex items-center justify-center font-bold text-xl">
                  ☕
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-stone-900">Brass Tumbler Filter Kaapi</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Freshly ground Chikmagalur estate beans dripped in traditional metal filters and pulled high from dabara to tumbler for signature creamy velvet froth.
                </p>
                <button onClick={() => setCurrentTab('kaapi')} className="text-xs font-bold text-[#854d0e] hover:underline pt-2 block cursor-pointer">
                  See Filter Coffee Menu →
                </button>
              </div>

              <div className="bg-amber-50/70 p-8 rounded-3xl border border-amber-200/80 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#854d0e] text-amber-200 flex items-center justify-center font-bold text-xl">
                  🍌
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-stone-900">Coastal Mangalore Buns</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Sweet, pillowy puffed banana bread fried to perfection. A beloved coastal Karnataka tiffin eaten with spicy coconut chutney.
                </p>
                <button onClick={() => setCurrentTab('tiffins')} className="text-xs font-bold text-[#854d0e] hover:underline pt-2 block cursor-pointer">
                  View Tiffin Selection →
                </button>
              </div>
            </div>
          </section>

          {/* Menu Items Grid */}
          <section className="py-12 bg-amber-100/40 border-t border-amber-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Traditional Tiffin</span>
                  <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-stone-900">Our Bestsellers</h2>
                </div>
                <button onClick={() => setCurrentTab('dosas')} className="text-xs font-bold text-[#854d0e] hover:underline cursor-pointer">
                  Full Menu ({BENNE_ITEMS.length} Items) →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {BENNE_ITEMS.slice(0, 6).map(item => (
                  <div key={item.id} className="bg-white rounded-2xl border border-amber-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="h-48 bg-stone-100 overflow-hidden relative">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      {item.badge && (
                        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#854d0e] text-amber-100 text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-stone-900 font-['Fraunces',serif]">{item.name}</h4>
                          <span className="text-xs font-bold text-[#854d0e]">₹{item.priceInr}</span>
                        </div>
                        <p className="text-xs text-stone-500 mt-1 line-clamp-3 leading-relaxed">{item.description}</p>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full py-2.5 rounded-xl bg-[#854d0e] hover:bg-[#713f12] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-amber-300" />
                        <span>Add to Order · ₹{item.priceInr}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* VIEW: DOSAS */}
      {currentTab === 'dosas' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Davangere Style</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-stone-900 mt-1">Authentic Benne Dosas</h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Served piping hot with spicy potato palya and freshly ground coconut chutney.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENNE_ITEMS.filter(i => i.category === 'Authentic Benne Dosas').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="h-52 bg-stone-100 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#854d0e]">{item.category}</span>
                    <h3 className="font-bold text-base text-stone-900 font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">{item.description}</p>
                    <span className="text-sm font-extrabold text-[#854d0e] block mt-2">₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#854d0e] hover:bg-[#713f12] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-300" />
                    <span>Order Hot Dosa</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: TIFFINS */}
      {currentTab === 'tiffins' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Coastal & Karnataka Specials</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-stone-900 mt-1">Thatte Idlis, Buns & Vadas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENNE_ITEMS.filter(i => i.category === 'Traditional Tiffin & Snacks').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="h-52 bg-stone-100 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-base text-stone-900 font-['Fraunces',serif]">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">{item.description}</p>
                    <span className="text-sm font-extrabold text-[#854d0e] block mt-2">₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#854d0e] hover:bg-[#713f12] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-300" />
                    <span>Order Tiffin</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: FILTER KAAPI */}
      {currentTab === 'kaapi' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Brass Dabara Tumbler</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-stone-900 mt-1">Chikmagalur Filter Kaapi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BENNE_ITEMS.filter(i => i.category === 'South Indian Filter Kaapi').map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-stone-100 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">{item.category}</span>
                    <h3 className="font-bold text-base text-stone-900 font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-2 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-[#854d0e] block mt-3">₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#854d0e] hover:bg-[#713f12] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-300" />
                    <span>Order Filter Kaapi</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: LOCATION */}
      {currentTab === 'location' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Pali Village, Bandra West</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-stone-900 mt-1">Visit Our Bandra Cafe</h2>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-amber-200 shadow-xs space-y-4">
            <h3 className="font-['Fraunces',serif] text-2xl font-bold text-stone-900">Makkhan Heritage Benne Kaapi & Dosa</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Step inside our nostalgic Karnataka tiffin room near Pali Village, Bandra West. Watch dosas crisping on the open tava while the aroma of freshly roasted filter coffee fills the air.
            </p>
            <div className="space-y-2 text-xs text-stone-600 pt-3 border-t border-stone-100">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#854d0e] shrink-0" />
                <span>Shop No. 1, 16th Road, Near Pali Village, Bandra West, Mumbai 400050</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#854d0e] shrink-0" />
                <span>+91 98205 11044</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#854d0e] shrink-0" />
                <span>Tue - Sun: 7:00 AM – 11:00 PM (Closed Mondays)</span>
              </p>
            </div>
            <div className="pt-3">
              <a
                href="https://maps.google.com/?q=Benne+Dosa+Bandra+West+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#854d0e] border border-amber-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: STORY */}
      {currentTab === 'story' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">The Davangere Tradition</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-5xl font-black text-stone-900">
              Why Davangere White Butter is Unmatched
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-amber-200 leading-relaxed text-sm text-stone-700 space-y-6">
            <p>
              In Karnataka, Davangere is famed as the <strong>Butter City</strong>. Unlike yellow processed butter, authentic Davangere <em>benne</em> is fresh white butter hand-churned from cultured cream, giving it a delicate lactic acidity and low salt profile.
            </p>
            <p>
              When dropped onto a superheated cast-iron tava, the butter sizzles into golden crispy lace edges, while preserving an unbelievably tender, airy interior. Paired with aromatic Chikmagalur filter coffee, it is pure breakfast perfection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-100 text-center">
              <div>
                <span className="text-2xl font-black text-[#854d0e] font-['Fraunces',serif]">100%</span>
                <span className="block text-xs text-stone-500 mt-1">Pure White Butter</span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#854d0e] font-['Fraunces',serif]">Cast Iron</span>
                <span className="block text-xs text-stone-500 mt-1">Heavy Tava Roasting</span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#854d0e] font-['Fraunces',serif]">Bandra</span>
                <span className="block text-xs text-stone-500 mt-1">Mumbai Neighborhood</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
            <div className="p-5 border-b border-amber-200 flex items-center justify-between bg-amber-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#854d0e]" />
                <h3 className="font-bold text-base text-stone-900 font-['Fraunces',serif]">Your Dosa Order</h3>
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
                    <span className="text-xs text-stone-500">₹{c.item.priceInr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(idx, -1)} className="w-7 h-7 rounded-lg border border-stone-200 flex items-center justify-center text-xs hover:bg-stone-100 cursor-pointer">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{c.quantity}</span>
                    <button onClick={() => updateQuantity(idx, 1)} className="w-7 h-7 rounded-lg border border-stone-200 flex items-center justify-center text-xs hover:bg-stone-100 cursor-pointer">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-amber-200 bg-amber-50 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-600">Total:</span>
                <span className="font-extrabold text-[#854d0e] text-base">₹{cartTotalInr}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-3.5 rounded-xl bg-[#854d0e] hover:bg-[#713f12] text-white text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-md"
              >
                Send Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1f1408] text-amber-100 py-10 border-t border-amber-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-white text-sm">MAKKHAN HERITAGE BENNE KAAPI & DOSA</h4>
            <p className="text-amber-300/80 mt-1">Recreation of Benne (Bandra West, Mumbai)</p>
          </div>
          <p className="text-amber-300/80 text-center sm:text-right">
            Shop 1, 16th Rd, Pali Village, Bandra West, Mumbai · +91 98205 11044
          </p>
        </div>
      </footer>
    </div>
  );
};
