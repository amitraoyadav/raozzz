import React, { useState, useMemo } from 'react';
import {
  Flame,
  ShoppingBag,
  X,
  Plus,
  Minus,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle2,
  Menu as MenuIcon,
  Sparkles,
  Share2
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { NANDOS_ITEMS, NandosItem } from '../../data/nandosData';

export type NandosTab = 'home' | 'chicken' | 'espetadas' | 'burgers' | 'heatscale';

interface CartItem {
  item: NandosItem;
  quantity: number;
  heat: string;
}

export const NandosApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<NandosTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedHeat, setSelectedHeat] = useState<string>('Hot');
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { item: NANDOS_ITEMS[0], quantity: 1, heat: 'Hot' },
    { item: NANDOS_ITEMS[3], quantity: 1, heat: 'PERi Salt' }
  ]);

  const cartTotalInr = useMemo(() => {
    return cart.reduce((sum, c) => sum + c.item.priceInr * c.quantity, 0);
  }, [cart]);

  const addToCart = (item: NandosItem) => {
    setCart(prev => {
      const idx = prev.findIndex(c => c.item.id === item.id && c.heat === selectedHeat);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { item, quantity: 1, heat: selectedHeat }];
    });
    setCartDrawerOpen(true);
  };

  const updateQuantity = (idx: number, delta: number) => {
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
    const lines = cart
      .map(c => `• ${c.item.name} [Heat: ${c.heat}] x${c.quantity} = ₹${c.item.priceInr * c.quantity}`)
      .join('\n');
    const msg = `*FUEGO FLAME-GRILLED PERI-PERI — Order Ahead*\n\n${lines}\n\n*Total Bill:* ₹${cartTotalInr}\n\nPlease prepare for pickup at Cyber Hub Gurugram.`;
    window.open(`https://wa.me/911141055000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const heatLevels = [
    { name: 'Plainish', desc: 'No chilli heat, just lemon herb taste', color: 'bg-emerald-500' },
    { name: 'Lemon & Herb', desc: 'Tangy citrus with mild herbal warmth', color: 'bg-lime-500' },
    { name: 'Medium', desc: 'Hit of heat with authentic chilli punch', color: 'bg-amber-500' },
    { name: 'Hot', desc: 'Highly addictive fiery African Bird’s Eye kick', color: 'bg-orange-600' },
    { name: 'Extra Hot', desc: 'Fiery explosion for true chilli daredevils', color: 'bg-red-700' }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5] font-['Space_Grotesk',sans-serif] selection:bg-[#dc2626] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="nandos" />

      {/* Top Banner */}
      <div className="bg-[#dc2626] text-white text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>AFRO-PORTUGUESE FLAME-GRILLED PERI-PERI CHICKEN</span>
        <span>•</span>
        <span>CYBER HUB GURUGRAM & NATIONWIDE</span>
        <span>•</span>
        <span>BOTTOMLESS SODA REFILLS</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-red-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-200 hover:bg-stone-800 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-black text-2xl tracking-tighter text-[#dc2626] group-hover:text-red-400 transition-colors uppercase block">
                FUEGO PERI-PERI
              </span>
              <span className="text-[10px] tracking-[0.25em] text-amber-500 uppercase font-mono block -mt-1">
                Afro-Portuguese Flame Grill
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-stone-300">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('chicken')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'chicken' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>Flame-Grilled Chicken</button>
            <button onClick={() => setCurrentTab('espetadas')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'espetadas' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>Espetadas & Platters</button>
            <button onClick={() => setCurrentTab('burgers')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'burgers' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>Burgers & Pitas</button>
            <button onClick={() => setCurrentTab('heatscale')} className={`hover:text-[#dc2626] cursor-pointer py-1 ${currentTab === 'heatscale' ? 'text-[#dc2626] border-b-2 border-[#dc2626]' : ''}`}>PERi-ometer Heat</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 rounded-full bg-[#dc2626] text-white hover:bg-red-700 transition-all cursor-pointer shadow-md"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-black text-[10px] font-bold flex items-center justify-center">
                  {cart.reduce((s, c) => s + c.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-b border-red-950 px-4 py-4 space-y-2 text-sm font-semibold text-stone-300">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-800">Home</button>
            <button onClick={() => { setCurrentTab('chicken'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-800">Flame-Grilled Chicken</button>
            <button onClick={() => { setCurrentTab('espetadas'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-800">Espetadas & Platters</button>
            <button onClick={() => { setCurrentTab('burgers'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-800">Burgers & Pitas</button>
            <button onClick={() => { setCurrentTab('heatscale'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">PERi-ometer Heat Scale</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[520px] flex items-center bg-[#1a0505] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1600&q=80"
                alt="Nandos Flame-Grilled Chicken"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  24-Hour African Bird’s Eye Chilli Marinade
                </span>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Basted in Heat. Flame-Grilled to Perfection.
                </h1>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                  Fresh whole chickens marinated for 24 hours in authentic African Bird’s Eye Chilli, then flame-grilled to order with your chosen basting glaze on the PERi-ometer.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentTab('chicken')}
                    className="px-6 py-3.5 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Order Flame Chicken</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('heatscale')}
                    className="px-6 py-3.5 rounded-xl border border-stone-600 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Explore Heat Scale
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Heat Basting Selector */}
          <section className="py-12 bg-[#181818] border-y border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Customize Your Flavor</span>
                <h3 className="text-2xl font-bold text-white mt-1">Choose Your PERi-ometer Heat</h3>
                <p className="text-xs text-stone-400 mt-1">Select your preferred basting level before adding items to order</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto">
                {heatLevels.map(h => (
                  <button
                    key={h.name}
                    onClick={() => setSelectedHeat(h.name)}
                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                      selectedHeat === h.name
                        ? 'bg-red-950/40 border-red-500 shadow-md ring-2 ring-red-500/50'
                        : 'bg-[#222222] border-stone-800 hover:border-stone-700 text-stone-400'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded-full ${h.color} mb-2 shadow-sm`} />
                    <span className="font-bold text-xs text-white block">{h.name}</span>
                    <span className="text-[10px] text-stone-400 mt-1 line-clamp-2 leading-tight">{h.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Menu Items Grid */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">The Flame Menu</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Popular PERi-PERi Picks</h2>
              </div>
              <button onClick={() => setCurrentTab('chicken')} className="text-xs font-bold text-amber-400 hover:underline cursor-pointer">
                View Full Menu →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {NANDOS_ITEMS.map(item => (
                <div key={item.id} className="bg-[#1c1c1c] rounded-2xl border border-stone-800 overflow-hidden shadow-xs hover:border-red-900 transition-all flex flex-col justify-between">
                  <div className="h-52 bg-stone-900 overflow-hidden relative">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    {item.badge && (
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#dc2626] text-white text-[10px] font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-base text-white">{item.name}</h4>
                        <span className="text-sm font-extrabold text-amber-400">₹{item.priceInr}</span>
                      </div>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full py-2.5 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 text-amber-300" />
                      <span>Order [{selectedHeat}] · ₹{item.priceInr}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW: CHICKEN */}
      {currentTab === 'chicken' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">The Legendary Cut</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">Flame-Grilled Chicken</h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Quarter, Half, and Full chickens flame-grilled over open coals with chosen PERi-PERi basting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NANDOS_ITEMS.filter(i => i.category === 'Flame-Grilled PERi-PERi Chicken').map(item => (
              <div key={item.id} className="bg-[#1c1c1c] rounded-2xl border border-stone-800 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-stone-900 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">{item.category}</span>
                    <h3 className="font-bold text-lg text-white mt-1">{item.name}</h3>
                    <p className="text-xs text-stone-400 mt-2 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-amber-400 block mt-3">₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-300" />
                    <span>Order [{selectedHeat}]</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: ESPETADAS */}
      {currentTab === 'espetadas' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Hanging Skewer Extravaganza</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">Espetada Carnival & Platters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NANDOS_ITEMS.filter(i => i.category === 'Espetadas & Sharing Platters' || i.category === 'Sides & Bottomless Drinks').map(item => (
              <div key={item.id} className="bg-[#1c1c1c] rounded-2xl border border-stone-800 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="h-52 bg-stone-900 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-white">{item.name}</h3>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-amber-400 block mt-2">₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
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

      {/* VIEW: BURGERS */}
      {currentTab === 'burgers' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Toasted Buns & Pitas</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">PERi Burgers, Pitas & Wraps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NANDOS_ITEMS.filter(i => i.category === 'PERi Burgers, Pitas & Wraps').map(item => (
              <div key={item.id} className="bg-[#1c1c1c] rounded-2xl border border-stone-800 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-stone-900 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">{item.category}</span>
                    <h3 className="font-bold text-base text-white mt-1">{item.name}</h3>
                    <p className="text-xs text-stone-400 mt-2 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-amber-400 block mt-3">₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-300" />
                    <span>Order [{selectedHeat}]</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: HEAT SCALE */}
      {currentTab === 'heatscale' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">The African Bird’s Eye Chilli</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              The Legend of the PERi-ometer
            </h2>
          </div>

          <div className="bg-[#1a1a1a] p-8 sm:p-10 rounded-3xl border border-stone-800 leading-relaxed text-sm text-stone-300 space-y-6">
            <p>
              Centuries ago in Mozambique and South Africa, Portuguese settlers were introduced to the fiery <em>African Bird’s Eye Chilli</em>. Combined with garlic, fresh lemon juice, herbs, and oil, this gave birth to authentic PERi-PERi basting marinade.
            </p>
            <div className="space-y-4 pt-4 border-t border-stone-800">
              {heatLevels.map(h => (
                <div key={h.name} className="flex items-start gap-4 p-4 rounded-xl bg-[#242424]">
                  <div className={`w-4 h-4 rounded-full ${h.color} shrink-0 mt-0.5`} />
                  <div>
                    <h4 className="font-bold text-sm text-white">{h.name}</h4>
                    <p className="text-xs text-stone-400 mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-end">
          <div className="bg-[#1c1c1c] w-full max-w-md h-full flex flex-col shadow-2xl border-l border-stone-800">
            <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-black">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-red-500" />
                <h3 className="font-bold text-base text-white">Your PERi-PERi Order</h3>
              </div>
              <button onClick={() => setCartDrawerOpen(false)} className="p-2 text-stone-400 hover:text-white rounded-lg cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.map((c, idx) => (
                <div key={`${c.item.id}-${c.heat}`} className="flex items-center justify-between pb-4 border-b border-stone-800 gap-3">
                  <img src={c.item.imageUrl} alt={c.item.name} className="w-14 h-14 object-cover rounded-xl shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-white truncate">{c.item.name}</h4>
                    <span className="text-[11px] text-red-400 font-bold block">{c.heat}</span>
                    <span className="text-xs text-stone-400">₹{c.item.priceInr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(idx, -1)} className="w-7 h-7 rounded-lg border border-stone-700 flex items-center justify-center text-xs hover:bg-stone-800 cursor-pointer">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center text-white">{c.quantity}</span>
                    <button onClick={() => updateQuantity(idx, 1)} className="w-7 h-7 rounded-lg border border-stone-700 flex items-center justify-center text-xs hover:bg-stone-800 cursor-pointer">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-stone-800 bg-black space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-400">Total Bill:</span>
                <span className="font-extrabold text-amber-400 text-lg">₹{cartTotalInr}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-md"
              >
                Send Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-stone-400 py-10 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-white text-sm">FUEGO FLAME-GRILLED PERI-PERI</h4>
            <p className="text-stone-500 mt-1">Recreation of Nando’s India (Cyber Hub Gurugram & India)</p>
          </div>
          <p className="text-stone-500 text-center sm:text-right">
            Cyber Hub, DLF Phase 2, Gurugram · +91 11 4105 5000
          </p>
        </div>
      </footer>
    </div>
  );
};
