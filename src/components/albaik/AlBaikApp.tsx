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
  Flame,
  Droplet
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { AL_BAIK_ITEMS, AlBaikItem } from '../../data/alBaikData';

export type AlBaikTab = 'home' | 'chicken' | 'seafood' | 'sandwiches' | 'sauces';

interface CartItem {
  item: AlBaikItem;
  quantity: number;
}

export const AlBaikApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<AlBaikTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { item: AL_BAIK_ITEMS[0], quantity: 2 }, // 4pc spicy broasted
    { item: AL_BAIK_ITEMS[5], quantity: 3 }  // Garlic sauce trio
  ]);
  const [orderSent, setOrderSent] = useState(false);

  const cartTotalInr = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceInr * c.quantity, 0);
  }, [cart]);

  const addToCart = (item: AlBaikItem) => {
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
    const msg = `*ALBAIK BROASTED CHICKEN & GARLIC SAUCE ORDER*\n\n${lines}\n\n*Total Amount:* ₹${cartTotalInr}\n\nPlease dispatch hot & fresh with extra garlic sauce!`;
    window.open(`https://wa.me/9668002442245?text=${encodeURIComponent(msg)}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1c1917] font-['Space_Grotesk',sans-serif] selection:bg-[#dc2626] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="al-baik" />

      {/* Top Banner */}
      <div className="bg-[#dc2626] text-white text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>WORLD FAMOUS CRISPY BROASTED CHICKEN & LEGENDARY GARLIC SAUCE SINCE 1974</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">ALBAIK JEDDAH ORIGINAL</span>
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
              <span className="font-black text-2xl sm:text-3xl tracking-tighter text-[#dc2626] uppercase block">
                ALBAIK
              </span>
              <span className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-mono block -mt-1 font-bold">
                Crispy Broasted Chicken
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-stone-800">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('chicken')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'chicken' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>Broasted Chicken</button>
            <button onClick={() => setCurrentTab('seafood')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'seafood' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>Jumbo Shrimp</button>
            <button onClick={() => setCurrentTab('sandwiches')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'sandwiches' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>Fillets & Burgers</button>
            <button onClick={() => setCurrentTab('sauces')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'sauces' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>Garlic Sauce & Sides</button>
          </nav>

          <button
            onClick={() => setCartDrawerOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag ({cart.reduce((s, c) => s + c.quantity, 0)})</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-2 text-sm font-semibold text-stone-800">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Home</button>
            <button onClick={() => { setCurrentTab('chicken'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Broasted Chicken</button>
            <button onClick={() => { setCurrentTab('seafood'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Jumbo Shrimp</button>
            <button onClick={() => { setCurrentTab('sandwiches'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Fillets & Burgers</button>
            <button onClick={() => { setCurrentTab('sauces'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-100">Garlic Sauce & Sides</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[500px] flex items-center bg-[#1c0707] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-45">
              <img
                src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1600&q=80"
                alt="Albaik Broasted Crispy Chicken"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-red-950/80 border border-red-600/50 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  The Gold Standard Since 1974
                </span>
                <h1 className="font-black text-4xl sm:text-6xl tracking-tight text-white leading-none uppercase">
                  Crispy Broasted Perfection.
                </h1>
                <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-light">
                  18 secret herbs, high-pressure frying to seal inside all juices while ensuring an ultra-crunchy crust, served with the world-famous iconic whipped garlic dipping sauce.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setCurrentTab('chicken')}
                    className="px-6 py-3.5 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Order Broasted Chicken</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('sauces')}
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Legendary Garlic Sauce
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-[#dc2626] block mb-1 font-bold">
                Fanatical Global Following
              </span>
              <h2 className="text-3xl font-black text-stone-900 uppercase">
                Most Wanted Broasted Meals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {AL_BAIK_ITEMS.slice(0, 3).map(item => (
                <div key={item.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-stone-900 text-base">
                        {item.name}
                      </h3>
                      <span className="text-[#dc2626] font-mono font-bold text-base">
                        ₹{item.priceInr}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full mt-4 py-2.5 rounded-xl bg-stone-900 hover:bg-[#dc2626] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
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
      {(currentTab === 'chicken' || currentTab === 'seafood' || currentTab === 'sandwiches' || currentTab === 'sauces') && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#dc2626] block mb-1 font-bold">
              ALBAIK Menu
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-stone-900 uppercase">
              {currentTab === 'chicken' && 'Crispy Broasted Chicken Meals'}
              {currentTab === 'seafood' && 'Jumbo Broasted Ocean Shrimp'}
              {currentTab === 'sandwiches' && 'Chicken Fillets, Sandwiches & Falafel'}
              {currentTab === 'sauces' && 'Secret Garlic Sauce, Fries & Sweets'}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AL_BAIK_ITEMS.filter(item => {
              if (currentTab === 'chicken') return item.category.includes('Broasted Chicken');
              if (currentTab === 'seafood') return item.category.includes('Seafood');
              if (currentTab === 'sandwiches') return item.category.includes('Sandwiches');
              return item.category.includes('Sauce') || item.category.includes('Desserts');
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
                    <span className="text-[#dc2626] font-mono font-bold text-sm">₹{item.priceInr}</span>
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-2">{item.description}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-2 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-[#dc2626] hover:text-white text-stone-800 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 cursor-pointer"
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
                <ShoppingBag className="w-5 h-5 text-[#dc2626]" />
                <h3 className="font-bold text-stone-900 text-base uppercase">Your Albaik Meal Bag</h3>
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
                  <p className="text-sm">Your meal bag is empty.</p>
                </div>
              ) : (
                cart.map(c => (
                  <div key={c.item.id} className="flex items-center justify-between pb-4 border-b border-stone-100 gap-3">
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">{c.item.name}</h4>
                      <p className="text-xs text-[#dc2626] font-mono font-bold">₹{c.item.priceInr * c.quantity}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-100 px-2 py-1 rounded-lg">
                      <button onClick={() => updateQuantity(c.item.id, -1)} className="p-1 hover:text-[#dc2626]"><Minus className="w-3 h-3" /></button>
                      <span className="text-xs font-bold">{c.quantity}</span>
                      <button onClick={() => updateQuantity(c.item.id, 1)} className="p-1 hover:text-[#dc2626]"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-stone-200 bg-stone-50 space-y-4">
                <div className="flex items-center justify-between font-bold text-base">
                  <span>Total Amount</span>
                  <span className="font-mono text-[#dc2626] text-lg">₹{cartTotalInr}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
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
      <footer className="border-t border-stone-200 bg-stone-100 py-10 text-center text-xs text-stone-500 space-y-2">
        <p className="text-base text-stone-900 font-black uppercase">ALBAIK FOOD SYSTEMS</p>
        <p>Old Airport Road, Al Sharafeyah, Jeddah 23218, Saudi Arabia · Tel: +966 800 244 2245</p>
        <p className="text-[10px] text-stone-400">Recreation of Al Baik reference website for RaoSitez portfolio.</p>
      </footer>
    </div>
  );
};
