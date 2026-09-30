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
  Coffee,
  Heart
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { MR_IDLI_ITEMS, MrIdliItem } from '../../data/mrIdliData';

export type MrIdliTab = 'home' | 'idlis' | 'dosas' | 'fusion' | 'cart';

interface CartItem {
  item: MrIdliItem;
  quantity: number;
}

export const MrIdliApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<MrIdliTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { item: MR_IDLI_ITEMS[0], quantity: 2 }, // Button sambar idli
    { item: MR_IDLI_ITEMS[1], quantity: 1 }  // Guntur podi idli
  ]);
  const [orderSent, setOrderSent] = useState(false);

  const cartTotalInr = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceInr * c.quantity, 0);
  }, [cart]);

  const addToCart = (item: MrIdliItem) => {
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
    const msg = `*MR. IDLI HEALTHY ORDER*\n\n${lines}\n\n*Total Amount:* ₹${cartTotalInr}\n\nPlease dispatch fresh steamed hot!`;
    window.open(`https://wa.me/918041239999?text=${encodeURIComponent(msg)}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="min-h-screen bg-[#f7faf8] text-[#14261c] font-['Space_Grotesk',sans-serif] selection:bg-[#15803d] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="mr-idli" />

      {/* Top Banner */}
      <div className="bg-[#15803d] text-emerald-100 text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>100+ INNOVATIVE STEAMED HEALTHY IDLI CREATIONS & CRISPY DOSAS</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">ZERO-OIL STEAMED NUTRITION</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-emerald-900 hover:bg-emerald-50 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-black text-2xl sm:text-3xl tracking-tight text-[#15803d] uppercase block">
                MR. IDLI
              </span>
              <span className="text-[10px] tracking-[0.2em] text-orange-600 uppercase font-mono block -mt-1 font-bold">
                Steamed & Healthy South Indian
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-emerald-950">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#15803d] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#15803d] border-b-2 border-[#15803d]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('idlis')} className={`hover:text-[#15803d] cursor-pointer py-1 ${currentTab === 'idlis' ? 'text-[#15803d] border-b-2 border-[#15803d]' : ''}`}>Steamed Idlis</button>
            <button onClick={() => setCurrentTab('dosas')} className={`hover:text-[#15803d] cursor-pointer py-1 ${currentTab === 'dosas' ? 'text-[#15803d] border-b-2 border-[#15803d]' : ''}`}>Golden Dosas</button>
            <button onClick={() => setCurrentTab('fusion')} className={`hover:text-[#15803d] cursor-pointer py-1 ${currentTab === 'fusion' ? 'text-[#15803d] border-b-2 border-[#15803d]' : ''}`}>Fusion & Kaapi</button>
          </nav>

          <button
            onClick={() => setCartDrawerOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-[#ea580c] hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag ({cart.reduce((s, c) => s + c.quantity, 0)})</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-emerald-100 px-4 py-4 space-y-2 text-sm font-semibold text-emerald-950">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-50">Home</button>
            <button onClick={() => { setCurrentTab('idlis'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-50">Steamed Idlis</button>
            <button onClick={() => { setCurrentTab('dosas'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-50">Golden Dosas</button>
            <button onClick={() => { setCurrentTab('fusion'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-50">Fusion & Kaapi</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[500px] flex items-center bg-[#0d2616] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1600&q=80"
                alt="Mr Idli Steamed Delicacies"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  The Idli Revolution
                </span>
                <h1 className="font-black text-4xl sm:text-6xl tracking-tight text-white leading-tight uppercase">
                  Reinventing South Indian Healthy Dining.
                </h1>
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-light">
                  From 14-button ghee sambar mini idlis and fiery Guntur podi tossed idlis to wok Schezwan idlis, crispy Mysore dosas, and degree filter coffee.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setCurrentTab('idlis')}
                    className="px-6 py-3.5 rounded-xl bg-[#ea580c] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Order Steamed Idlis</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('dosas')}
                    className="px-6 py-3.5 rounded-xl border border-emerald-500 hover:bg-emerald-900/60 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Crispy Dosas
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-[#15803d] block mb-1 font-bold">
                100% Steamed Goodness
              </span>
              <h2 className="text-3xl font-black text-emerald-950 uppercase">
                Popular Steamed Creations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {MR_IDLI_ITEMS.slice(0, 3).map(item => (
                <div key={item.id} className="bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#15803d] text-white text-[10px] font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-emerald-950 text-base">
                        {item.name}
                      </h3>
                      <span className="text-[#ea580c] font-mono font-bold text-base">
                        ₹{item.priceInr}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full mt-4 py-2.5 rounded-xl bg-emerald-950 hover:bg-[#ea580c] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
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
      {(currentTab === 'idlis' || currentTab === 'dosas' || currentTab === 'fusion') && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#15803d] block mb-1 font-bold">
              Mr. Idli Menu
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-emerald-950 uppercase">
              {currentTab === 'idlis' && 'Healthy Steamed Idli Creations'}
              {currentTab === 'dosas' && 'Crispy Ghee Tiffin Dosas'}
              {currentTab === 'fusion' && 'Fusion Idli Burgers, Kaapi & Sweets'}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MR_IDLI_ITEMS.filter(item => {
              if (currentTab === 'idlis') return item.category.includes('Idlis');
              if (currentTab === 'dosas') return item.category.includes('Dosas');
              return item.category.includes('Fusion') || item.category.includes('Filter') || item.category.includes('Sweets');
            }).map(item => (
              <div key={item.id} className="bg-white border border-emerald-100 p-5 rounded-2xl flex gap-4 items-center shadow-xs">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-emerald-950 text-sm">{item.name}</h3>
                    <span className="text-[#ea580c] font-mono font-bold text-sm">₹{item.priceInr}</span>
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-2">{item.description}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-2 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-[#ea580c] hover:text-white text-emerald-900 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 cursor-pointer"
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
            <div className="p-6 border-b border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#15803d]" />
                <h3 className="font-bold text-emerald-950 text-base uppercase">Your Steamed Idli Bag</h3>
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
                  <p className="text-sm">Your order bag is empty.</p>
                </div>
              ) : (
                cart.map(c => (
                  <div key={c.item.id} className="flex items-center justify-between pb-4 border-b border-stone-100 gap-3">
                    <div>
                      <h4 className="font-bold text-emerald-950 text-sm">{c.item.name}</h4>
                      <p className="text-xs text-[#ea580c] font-mono font-bold">₹{c.item.priceInr * c.quantity}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-100 px-2 py-1 rounded-lg">
                      <button onClick={() => updateQuantity(c.item.id, -1)} className="p-1 hover:text-[#15803d]"><Minus className="w-3 h-3" /></button>
                      <span className="text-xs font-bold">{c.quantity}</span>
                      <button onClick={() => updateQuantity(c.item.id, 1)} className="p-1 hover:text-[#15803d]"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-emerald-100 bg-stone-50 space-y-4">
                <div className="flex items-center justify-between font-bold text-base">
                  <span>Total Amount</span>
                  <span className="font-mono text-[#ea580c] text-lg">₹{cartTotalInr}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 rounded-xl bg-[#15803d] hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>Order via WhatsApp Express</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-emerald-950 text-white py-10 text-center text-xs text-emerald-300/80 space-y-2">
        <p className="text-base text-white font-black uppercase">MR. IDLI HEALTHY STEAMED SOUTH INDIAN</p>
        <p>Indiranagar 12th Main Road, Bengaluru, Karnataka 560038 · Tel: +91 80 4123 9999</p>
        <p className="text-[10px] text-emerald-400/60">Recreation of Mr. Idli reference website for RaoSitez portfolio.</p>
      </footer>
    </div>
  );
};
