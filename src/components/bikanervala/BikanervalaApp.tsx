import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  Plus,
  Minus,
  X,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle2,
  Menu as MenuIcon,
  Sparkles,
  Share2,
  Gift
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { BIKANERVALA_ITEMS, BikanervalaItem } from '../../data/bikanervalaData';

export type BikanervalaTab = 'home' | 'chaat' | 'sweets' | 'thalis' | 'cart';

interface CartItem {
  item: BikanervalaItem;
  quantity: number;
}

export const BikanervalaApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<BikanervalaTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { item: BIKANERVALA_ITEMS[0], quantity: 2 }, // Raj Kachori
    { item: BIKANERVALA_ITEMS[2], quantity: 1 }  // Kaju Katli
  ]);
  const [orderSent, setOrderSent] = useState(false);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceInr * c.quantity, 0);
  }, [cart]);

  const addToCart = (item: BikanervalaItem) => {
    setCart(prev => {
      const idx = prev.findIndex(c => c.item.id === item.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx].quantity += 1;
        return next;
      }
      return [...prev, { item, quantity: 1 }];
    });
    setCartDrawerOpen(true);
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(c => {
          if (c.item.id === itemId) {
            const nextQty = c.quantity + delta;
            return nextQty > 0 ? { ...c, quantity: nextQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleCheckout = () => {
    const lines = cart.map(c => `• ${c.item.name} x${c.quantity} — ₹${c.item.priceInr * c.quantity}`).join('\n');
    const msg = `*BIKANERVALA SWEETS & CHAAT ORDER*\n\n${lines}\n\n*Total Amount:* ₹${cartTotal}\n\nPlease confirm availability and deliver to my address!`;
    window.open(`https://wa.me/911147000000?text=${encodeURIComponent(msg)}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#292524] font-['Inter',sans-serif] selection:bg-[#b91c1c] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="bikanervala" />

      {/* Top Banner */}
      <div className="bg-[#b91c1c] text-white text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>TRADITIONAL BIKANERI SWEETS, DELHI STREET CHAAT & THALIS SINCE 1905</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">100% PURE DESI GHEE</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#b91c1c] uppercase block">
                BIKANERVALA
              </span>
              <span className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-mono block -mt-1 font-semibold">
                Sweets · Chaat · Thalis
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#b91c1c] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#b91c1c] border-b-2 border-[#b91c1c]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('chaat')} className={`hover:text-[#b91c1c] cursor-pointer py-1 ${currentTab === 'chaat' ? 'text-[#b91c1c] border-b-2 border-[#b91c1c]' : ''}`}>Delhi Chaat</button>
            <button onClick={() => setCurrentTab('sweets')} className={`hover:text-[#b91c1c] cursor-pointer py-1 ${currentTab === 'sweets' ? 'text-[#b91c1c] border-b-2 border-[#b91c1c]' : ''}`}>Pure Ghee Sweets</button>
            <button onClick={() => setCurrentTab('thalis')} className={`hover:text-[#b91c1c] cursor-pointer py-1 ${currentTab === 'thalis' ? 'text-[#b91c1c] border-b-2 border-[#b91c1c]' : ''}`}>Royal Thalis</button>
          </nav>

          <button
            onClick={() => setCartDrawerOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-[#b91c1c] hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag ({cart.reduce((s, c) => s + c.quantity, 0)})</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-2 text-sm font-semibold text-stone-800">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Home</button>
            <button onClick={() => { setCurrentTab('chaat'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Delhi Chaat</button>
            <button onClick={() => { setCurrentTab('sweets'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Pure Ghee Sweets</button>
            <button onClick={() => { setCurrentTab('thalis'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Royal Thalis</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[500px] flex items-center bg-[#291b15] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
                alt="Bikanervala Sweets and Food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-red-950/80 border border-red-700/50 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  Heritage Since 1905
                </span>
                <h1 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Over a Century of Sweet Traditions.
                </h1>
                <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-light">
                  From crunchy sweet-tangy Raj Kachoris and fluffy Chhole Bhature to diamond-cut Kaju Katli and rich Bikaneri Bhujia, celebrate India’s most beloved flavors.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setCurrentTab('sweets')}
                    className="px-6 py-3.5 rounded-xl bg-[#b91c1c] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Order Pure Ghee Sweets</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('chaat')}
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Explore Chaat Menu
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Cards */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-[#b91c1c] block mb-1 font-bold">
                Centenary Indian Classics
              </span>
              <h2 className="font-['Fraunces',serif] text-3xl font-black text-stone-900">
                Customer Favorites
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BIKANERVALA_ITEMS.slice(0, 3).map(item => (
                <div key={item.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#b91c1c] text-white text-[10px] font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-stone-900 text-base">
                        {item.name}
                      </h3>
                      <span className="text-[#b91c1c] font-mono font-bold text-base">
                        ₹{item.priceInr}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full mt-4 py-2.5 rounded-xl bg-stone-900 hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW: CATEGORIES */}
      {(currentTab === 'chaat' || currentTab === 'sweets' || currentTab === 'thalis') && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#b91c1c] block mb-1 font-bold">
              Bikanervala Menu
            </span>
            <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-stone-900 capitalize">
              {currentTab === 'chaat' && 'Delhi Street Chaat & Crispy Bites'}
              {currentTab === 'sweets' && 'Royal Pure Desi Ghee Sweets'}
              {currentTab === 'thalis' && 'Wholesome Vegetarian Thalis & Meals'}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BIKANERVALA_ITEMS.filter(item => {
              if (currentTab === 'chaat') return item.category.includes('Chaat') || item.category.includes('Snacks');
              if (currentTab === 'sweets') return item.category.includes('Sweets') || item.category.includes('Kulfi');
              return item.category.includes('Thalis');
            }).map(item => (
              <div key={item.id} className="bg-white border border-stone-200 p-5 rounded-2xl flex gap-4 items-center shadow-xs">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-stone-900 text-sm">{item.name}</h3>
                    <span className="text-[#b91c1c] font-mono font-bold text-sm">₹{item.priceInr}</span>
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-2">{item.description}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-2 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-[#b91c1c] hover:text-white text-stone-800 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
            <div className="p-6 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#b91c1c]" />
                <h3 className="font-bold text-stone-900 text-base">Your Sweet & Chaat Bag</h3>
              </div>
              <button
                onClick={() => setCartDrawerOpen(false)}
                className="p-1 rounded-lg hover:bg-stone-100 text-stone-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-stone-500 space-y-3">
                  <ShoppingBag className="w-12 h-12 mx-auto text-stone-300" />
                  <p className="text-sm">Your bag is currently empty.</p>
                </div>
              ) : (
                cart.map(c => (
                  <div key={c.item.id} className="flex items-center justify-between pb-4 border-b border-stone-100 gap-3">
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">{c.item.name}</h4>
                      <p className="text-xs text-[#b91c1c] font-mono font-bold">₹{c.item.priceInr * c.quantity}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-100 px-2 py-1 rounded-lg">
                      <button onClick={() => updateQuantity(c.item.id, -1)} className="p-1 hover:text-[#b91c1c]"><Minus className="w-3 h-3" /></button>
                      <span className="text-xs font-bold">{c.quantity}</span>
                      <button onClick={() => updateQuantity(c.item.id, 1)} className="p-1 hover:text-[#b91c1c]"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-stone-200 bg-stone-50 space-y-4">
                <div className="flex items-center justify-between font-bold text-base">
                  <span>Total Amount</span>
                  <span className="font-mono text-[#b91c1c] text-lg">₹{cartTotal}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 rounded-xl bg-[#b91c1c] hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>Order via WhatsApp Direct</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-100 py-10 text-center text-xs text-stone-500 space-y-2">
        <p className="font-['Fraunces',serif] text-base text-stone-900 font-bold">BIKANERVALA SWEETS, CHAAT & THALIS</p>
        <p>Connaught Place, Radial Road 2, New Delhi 110001 · Tel: +91 11 4700 0000</p>
        <p className="text-[10px] text-stone-400">Recreation of Bikanervala reference website for RaoSitez portfolio.</p>
      </footer>
    </div>
  );
};
