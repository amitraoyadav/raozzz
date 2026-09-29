import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  ArrowRight,
  BookOpen,
  MapPin,
  Clock,
  Mail,
  Phone,
  Check,
  Search,
  ChevronRight,
  ShieldCheck,
  Filter,
  Sliders,
  ExternalLink,
  Menu as MenuIcon
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  TIM_WENDELBOE_PRODUCTS,
  TIM_WENDELBOE_BREW_GUIDES,
  TIM_WENDELBOE_FARMS,
  TIM_WENDELBOE_FAQS,
  TimWendelboeProduct,
  TimWendelboeBrewGuide
} from '../../data/timWendelboeData';

export type TWTab = 'home' | 'shop' | 'subscriptions' | 'brew-guides' | 'about' | 'transparency' | 'espresso-bar' | 'faq' | 'contact';

interface TWCartItem {
  product: TimWendelboeProduct;
  quantity: number;
  grind: string;
}

export const TimWendelboeApp: React.FC = () => {
  const { setActiveView } = useApp();
  const [currentTab, setCurrentTab] = useState<TWTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart State
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<TWCartItem[]>([]);
  const [orderSent, setOrderSent] = useState(false);

  // Selected Product Detail Modal
  const [selectedProduct, setSelectedProduct] = useState<TimWendelboeProduct | null>(null);
  const [selectedGrind, setSelectedGrind] = useState('Whole Beans');
  const [productQty, setProductQty] = useState(1);

  // Active Brew Guide
  const [activeGuide, setActiveGuide] = useState<TimWendelboeBrewGuide>(TIM_WENDELBOE_BREW_GUIDES[0]);

  // Shop Category Filter
  const [shopFilter, setShopFilter] = useState<'All' | 'Filter Coffee' | 'Espresso Coffee' | 'Subscriptions' | 'Equipment'>('All');

  // Contact State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactDone, setContactDone] = useState(false);

  const cartTotalItems = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const cartSubtotalNok = useMemo(() => cart.reduce((sum, item) => sum + item.product.priceNok * item.quantity, 0), [cart]);
  const cartSubtotalInr = useMemo(() => cart.reduce((sum, item) => sum + item.product.priceInr * item.quantity, 0), [cart]);

  const addToCart = (product: TimWendelboeProduct, grind = 'Whole Beans', qty = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.product.id === product.id && i.grind === grind);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
        return next;
      }
      return [...prev, { product, quantity: qty, grind }];
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

  const filteredProducts = useMemo(() => {
    if (shopFilter === 'All') return TIM_WENDELBOE_PRODUCTS;
    return TIM_WENDELBOE_PRODUCTS.filter(p => p.category === shopFilter);
  }, [shopFilter]);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const lines = cart.map(i => `• ${i.product.name} (${i.grind}) x${i.quantity} = NOK ${i.product.priceNok * i.quantity} / ₹${i.product.priceInr * i.quantity}`).join('\n');
    const msg = `*BREW & BLOOM — Tim Wendelboe Nordic Roastery Order*\n\n${lines}\n\n*Total:* NOK ${cartSubtotalNok} (approx ₹${cartSubtotalInr})\n\nPlease confirm international dispatch and invoice.`;
    window.open(`https://wa.me/4740004062?text=${encodeURIComponent(msg)}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#111111] font-['Inter',system-ui,sans-serif] selection:bg-[#b91c1c] selection:text-white">

      {/* Website Switcher Bar */}
      <div className="bg-[#111111] text-[#f4e8d5] text-xs py-2 px-4 border-b border-[#222222] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-bold tracking-wide">WEBSITE 1: TIM WENDELBOE (Recreated as BREW & BLOOM)</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-stone-400">Switch Website:</span>
          <button onClick={() => setActiveView('site', 'brew-bloom-tim-wendelboe')} className="px-2 py-0.5 rounded bg-white/20 font-bold text-white cursor-pointer">1. Tim Wendelboe</button>
          <button onClick={() => setActiveView('site', 'brew-bloom-onyx')} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-stone-300 cursor-pointer">2. Onyx Coffee</button>
          <button onClick={() => setActiveView('site', 'brew-bloom-city-brew')} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-stone-300 cursor-pointer">3. City Brew</button>
          <button onClick={() => setActiveView('site', 'brew-bloom-gregorys')} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-stone-300 cursor-pointer">4. Gregorys</button>
          <button onClick={() => setActiveView('dashboard')} className="px-2 py-0.5 rounded bg-[#c49a6c] text-[#111] font-bold ml-2 cursor-pointer">Dashboard</button>
        </div>
      </div>

      {/* Announcement Ticker */}
      <div className="bg-[#111111] text-[#fcfbf9] text-xs py-2 px-4 text-center tracking-wider font-light border-b border-stone-800">
        <span>WE SHIP ROASTED COFFEE GLOBALLY EVERY TUESDAY & THURSDAY</span>
        <span className="mx-2 text-stone-500">|</span>
        <span>VISIT OUR ESPRESSO BAR IN GRÜNERLØKKA, OSLO</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#fcfbf9]/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setCurrentTab('home')}
              className="text-left cursor-pointer group"
            >
              <h1 className="text-xl sm:text-2xl font-serif tracking-widest uppercase font-bold text-stone-900 group-hover:text-[#b91c1c] transition-colors">
                BREW & BLOOM
              </h1>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-mono">
                Oslo · Coffee Roastery & Espresso Bar
              </p>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-stone-700">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#b91c1c] cursor-pointer ${currentTab === 'home' ? 'text-[#b91c1c] font-bold' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('shop')} className={`hover:text-[#b91c1c] cursor-pointer ${currentTab === 'shop' ? 'text-[#b91c1c] font-bold' : ''}`}>Coffee & Shop</button>
            <button onClick={() => setCurrentTab('subscriptions')} className={`hover:text-[#b91c1c] cursor-pointer ${currentTab === 'subscriptions' ? 'text-[#b91c1c] font-bold' : ''}`}>Subscriptions</button>
            <button onClick={() => setCurrentTab('brew-guides')} className={`hover:text-[#b91c1c] cursor-pointer ${currentTab === 'brew-guides' ? 'text-[#b91c1c] font-bold' : ''}`}>Brew Guides</button>
            <button onClick={() => setCurrentTab('transparency')} className={`hover:text-[#b91c1c] cursor-pointer ${currentTab === 'transparency' ? 'text-[#b91c1c] font-bold' : ''}`}>Farms & Soil</button>
            <button onClick={() => setCurrentTab('about')} className={`hover:text-[#b91c1c] cursor-pointer ${currentTab === 'about' ? 'text-[#b91c1c] font-bold' : ''}`}>Philosophy</button>
            <button onClick={() => setCurrentTab('faq')} className={`hover:text-[#b91c1c] cursor-pointer ${currentTab === 'faq' ? 'text-[#b91c1c] font-bold' : ''}`}>FAQ</button>
            <button onClick={() => setCurrentTab('espresso-bar')} className={`hover:text-[#b91c1c] cursor-pointer ${currentTab === 'espresso-bar' ? 'text-[#b91c1c] font-bold' : ''}`}>Espresso Bar</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-2 p-2 rounded-full hover:bg-stone-100 transition-colors text-xs font-mono font-medium cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-stone-900" />
              <span>Cart ({cartTotalItems})</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-3 text-xs uppercase tracking-wider font-medium">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block py-1">Home</button>
            <button onClick={() => { setCurrentTab('shop'); setMobileMenuOpen(false); }} className="block py-1">Coffee & Shop</button>
            <button onClick={() => { setCurrentTab('subscriptions'); setMobileMenuOpen(false); }} className="block py-1">Subscriptions</button>
            <button onClick={() => { setCurrentTab('brew-guides'); setMobileMenuOpen(false); }} className="block py-1">Brew Guides</button>
            <button onClick={() => { setCurrentTab('transparency'); setMobileMenuOpen(false); }} className="block py-1">Farms & Soil Transparency</button>
            <button onClick={() => { setCurrentTab('about'); setMobileMenuOpen(false); }} className="block py-1">Philosophy</button>
            <button onClick={() => { setCurrentTab('faq'); setMobileMenuOpen(false); }} className="block py-1">FAQ</button>
            <button onClick={() => { setCurrentTab('espresso-bar'); setMobileMenuOpen(false); }} className="block py-1">Grünerløkka Espresso Bar</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <div>
          {/* Nordic Hero */}
          <section className="border-b border-stone-200 py-16 sm:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[11px] font-mono tracking-widest text-[#b91c1c] uppercase">
                  World Barista Champion & Coffee Roaster
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-stone-900 leading-[1.15]">
                  We roast and source the finest coffees to taste like their place of origin.
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                  Our goal is to be among the best coffee roasters and espresso bars in the world. By working directly with farmers year after year, paying premiums for quality, and practicing light Nordic roasting, we bring forth the true sweetness and aromatic terroir of every harvest.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setCurrentTab('shop')}
                    className="px-6 py-3 bg-[#111111] text-[#fcfbf9] hover:bg-[#b91c1c] transition-colors text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    View Fresh Roasts
                  </button>
                  <button
                    onClick={() => setCurrentTab('subscriptions')}
                    className="px-6 py-3 border border-stone-400 hover:border-black text-stone-900 transition-colors text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Monthly Subscription
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] bg-stone-100 overflow-hidden border border-stone-200">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0738/6113/6597/files/hjemme-tim-w-14_1_36371c63-bf93-4d8f-84e8-ef4e52a914bf.jpg?v=1763640526"
                    alt="Tim Wendelboe Coffee Roastery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Seasonal Microlots */}
          <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between border-b border-stone-200 pb-4 mb-8">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">Fresh In Season</span>
                <h3 className="text-2xl font-serif text-stone-900 mt-1">Current Filter & Espresso Offerings</h3>
              </div>
              <button onClick={() => setCurrentTab('shop')} className="text-xs uppercase tracking-wider text-[#b91c1c] hover:underline font-semibold">
                Shop all coffees →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TIM_WENDELBOE_PRODUCTS.slice(0, 4).map(product => (
                <div key={product.id} className="bg-white border border-stone-200 p-5 flex flex-col justify-between hover:border-[#b91c1c] transition-all group">
                  <div onClick={() => setSelectedProduct(product)} className="aspect-square bg-stone-50 overflow-hidden cursor-pointer mb-4">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-400 block">{product.origin}</span>
                    <h4 onClick={() => setSelectedProduct(product)} className="text-sm font-bold text-stone-900 hover:text-[#b91c1c] cursor-pointer mt-0.5 line-clamp-1">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-mono mt-1">{product.varietal} · {product.process}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {product.tastingNotes.slice(0, 3).map((note, idx) => (
                        <span key={idx} className="text-[10px] bg-stone-100 text-stone-700 px-1.5 py-0.5">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-stone-900">NOK {product.priceNok} / ₹{product.priceInr}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-3 py-1.5 bg-[#111111] hover:bg-[#b91c1c] text-[#fcfbf9] text-[10px] uppercase tracking-wider font-bold cursor-pointer transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Subscriptions Teaser */}
          <section className="bg-[#111111] text-[#fcfbf9] py-16 border-t border-stone-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono tracking-widest text-[#b91c1c] uppercase">Monthly Roastery Dispatch</span>
                <h3 className="text-3xl font-serif font-normal">Never run out of extraordinary coffee.</h3>
                <p className="text-sm text-stone-300 max-w-xl font-light leading-relaxed">
                  Join our global subscription club. Every month we select, roast, and ship 1, 2, or 3 bags of our freshest seasonal microlots directly from Grünerløkka to your doorstep.
                </p>
              </div>
              <div className="lg:col-span-4 text-left lg:text-right">
                <button
                  onClick={() => setCurrentTab('subscriptions')}
                  className="px-8 py-3.5 bg-[#fcfbf9] text-[#111111] hover:bg-[#b91c1c] hover:text-white transition-colors text-xs uppercase tracking-wider font-bold cursor-pointer"
                >
                  Configure Subscription
                </button>
              </div>
            </div>
          </section>

          {/* Brew Guides Highlight */}
          <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="border border-stone-200 bg-white p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">Extraction Masterclass</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900">How to brew light Nordic roasts at home</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  Light roasts require high water temperatures, soft water, and precise grind size to unlock sweetness without bitterness. Explore our tested recipes for AeroPress, Hario V60, and French Press.
                </p>
                <button
                  onClick={() => setCurrentTab('brew-guides')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#b91c1c] hover:underline"
                >
                  View Step-by-Step Brew Guides <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="md:col-span-5 bg-stone-50 p-6 border border-stone-100 font-mono text-xs space-y-2">
                <div className="flex justify-between border-b border-stone-200 pb-1">
                  <span className="text-stone-500">AeroPress Dose</span>
                  <span className="font-bold">14g coffee / 200g water</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1">
                  <span className="text-stone-500">Water Temperature</span>
                  <span className="font-bold">96°C / 205°F</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Brew Time</span>
                  <span className="font-bold">1 min 45 sec</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW: SHOP */}
      {currentTab === 'shop' && (
        <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-b border-stone-200 pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">Oslo Roastery Webshop</span>
              <h2 className="text-3xl font-serif text-stone-900 mt-1">Coffee & Brewing Gear</h2>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {(['All', 'Filter Coffee', 'Espresso Coffee', 'Subscriptions', 'Equipment'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setShopFilter(cat)}
                  className={`px-3 py-1 border transition-colors cursor-pointer ${shopFilter === cat ? 'bg-[#111111] text-white border-black' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white border border-stone-200 p-6 flex flex-col justify-between hover:border-[#b91c1c] transition-all">
                <div onClick={() => setSelectedProduct(product)} className="aspect-square bg-stone-50 overflow-hidden cursor-pointer mb-4">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-400 block">{product.origin}</span>
                  <h3 onClick={() => setSelectedProduct(product)} className="text-base font-bold text-stone-900 hover:text-[#b91c1c] cursor-pointer mt-0.5">
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 font-light line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {product.tastingNotes.map((note, idx) => (
                      <span key={idx} className="text-[10px] bg-stone-100 text-stone-700 px-1.5 py-0.5 font-mono">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-stone-900">
                    NOK {product.priceNok} / ₹{product.priceInr}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-[#111111] hover:bg-[#b91c1c] text-[#fcfbf9] text-xs uppercase tracking-wider font-bold cursor-pointer transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: BREW GUIDES */}
      {currentTab === 'brew-guides' && (
        <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-b border-stone-200 pb-6 mb-8">
            <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">Methodology & Brewing</span>
            <h2 className="text-3xl font-serif text-stone-900 mt-1">Official Brew Guides</h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light mt-2 max-w-2xl leading-relaxed">
              Precision extraction guides co-developed by Tim Wendelboe to help you experience the full expression of Nordic light roasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Guide Selector */}
            <div className="md:col-span-4 space-y-2">
              {TIM_WENDELBOE_BREW_GUIDES.map(guide => (
                <button
                  key={guide.id}
                  onClick={() => setActiveGuide(guide)}
                  className={`w-full text-left p-4 border transition-colors cursor-pointer ${activeGuide.id === guide.id ? 'bg-[#111111] text-white border-black' : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'}`}
                >
                  <span className="text-[10px] font-mono uppercase text-stone-400 block">{guide.device}</span>
                  <h4 className="text-sm font-bold mt-1">{guide.title}</h4>
                </button>
              ))}
            </div>

            {/* Guide Steps */}
            <div className="md:col-span-8 bg-white border border-stone-200 p-8 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#b91c1c] font-bold">{activeGuide.device}</span>
                <h3 className="text-2xl font-serif text-stone-900 mt-1">{activeGuide.title}</h3>
              </div>

              {/* Recipe Spec Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 border border-stone-100 font-mono text-xs">
                <div>
                  <span className="text-stone-400 text-[10px] block">DOSE</span>
                  <b>{activeGuide.coffeeGrams}g</b>
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] block">WATER</span>
                  <b>{activeGuide.waterGrams}g</b>
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] block">RATIO</span>
                  <b>{activeGuide.ratio}</b>
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] block">WATER TEMP</span>
                  <b>{activeGuide.waterTemp}</b>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">Step-by-step Execution:</h4>
                <ol className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {activeGuide.steps.map((st, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center font-mono text-xs flex-shrink-0 font-bold">
                        {idx + 1}
                      </span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-4 bg-stone-100 text-xs font-mono text-stone-800 border-l-2 border-[#b91c1c]">
                <b>Pro Tip:</b> {activeGuide.tips}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: SUBSCRIPTIONS */}
      {currentTab === 'subscriptions' && (
        <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="border-b border-stone-200 pb-6 mb-8 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">Never Run Out</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mt-1">Nordic Coffee Subscriptions</h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light mt-3 leading-relaxed">
              Curated selections of current seasonal harvests. Roasting twice weekly in Oslo and shipped directly to your door with informative origin cards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-stone-200 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-stone-500">1 BAG / MONTH</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">The Solo Cupper</h3>
                <p className="text-xs text-stone-600 mt-2 font-light">1x 250g bag of our head roaster's current favorite single origin.</p>
                <div className="mt-6 text-2xl font-mono font-bold text-stone-900">
                  NOK 225 <span className="text-xs text-stone-400 font-normal">/ month</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const p = TIM_WENDELBOE_PRODUCTS.find(x => x.id === 'tw-sub-2bags');
                  if (p) addToCart(p);
                }}
                className="w-full mt-6 py-2.5 bg-[#111111] text-white text-xs uppercase font-bold tracking-wider hover:bg-[#b91c1c] transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </div>

            <div className="bg-white border-2 border-[#b91c1c] p-8 flex flex-col justify-between relative shadow-sm">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#b91c1c] text-white px-3 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-mono text-[#b91c1c]">2 BAGS / MONTH</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">The Companion Pair</h3>
                <p className="text-xs text-stone-600 mt-2 font-light">2x 250g distinct single origin coffees to compare terroirs side-by-side.</p>
                <div className="mt-6 text-2xl font-mono font-bold text-stone-900">
                  NOK 410 <span className="text-xs text-stone-400 font-normal">/ month</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const p = TIM_WENDELBOE_PRODUCTS.find(x => x.id === 'tw-sub-2bags');
                  if (p) addToCart(p);
                }}
                className="w-full mt-6 py-2.5 bg-[#b91c1c] text-white text-xs uppercase font-bold tracking-wider hover:bg-black transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </div>

            <div className="bg-white border border-stone-200 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-stone-500">4 BAGS / MONTH</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">The Nordic Enthusiast</h3>
                <p className="text-xs text-stone-600 mt-2 font-light">4x 250g bags across our filter and espresso roast range for daily connoisseurs.</p>
                <div className="mt-6 text-2xl font-mono font-bold text-stone-900">
                  NOK 780 <span className="text-xs text-stone-400 font-normal">/ month</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const p = TIM_WENDELBOE_PRODUCTS.find(x => x.id === 'tw-sub-2bags');
                  if (p) addToCart(p);
                }}
                className="w-full mt-6 py-2.5 bg-[#111111] text-white text-xs uppercase font-bold tracking-wider hover:bg-[#b91c1c] transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: FARMS & TRANSPARENCY */}
      {currentTab === 'transparency' && (
        <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-b border-stone-200 pb-6 mb-8">
            <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">Traceability & Soil Health</span>
            <h2 className="text-3xl font-serif text-stone-900 mt-1">Farm Partnerships</h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light mt-2 max-w-2xl leading-relaxed">
              We do not buy from brokers or open spot markets. We work with the same producers year after year, collaborating on agronomy, soil biological health, and processing improvements.
            </p>
          </div>

          <div className="space-y-12">
            {TIM_WENDELBOE_FARMS.map(farm => (
              <div key={farm.id} className="bg-white border border-stone-200 p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img src={farm.imageUrl} alt={farm.farmName} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                    <span className="text-[#b91c1c] font-bold uppercase">{farm.country}</span>
                    <span>·</span>
                    <span>{farm.region}</span>
                    <span>·</span>
                    <span>Partner since {farm.partnerSince}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900">{farm.farmName}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {farm.story}
                  </p>
                  <div className="pt-2 text-xs font-mono text-stone-500">
                    <span>Producer: <b>{farm.producer}</b></span>
                    <span className="mx-2">·</span>
                    <span>Elevation: <b>{farm.altitude}</b></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: PHILOSOPHY */}
      {currentTab === 'about' && (
        <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">Since 2004</span>
            <h2 className="text-4xl font-serif text-stone-900 mt-1">Our Philosophy</h2>
          </div>
          <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-4">
            <p>
              BREW & BLOOM (in the spirit of Tim Wendelboe’s Oslo roastery) is built on an uncompromising devotion to transparency, light roasting, and terroir expression.
            </p>
            <p>
              When green coffee is roasted too dark, the sugars caramelize into smoke, ash, and bitterness, obliterating the delicate floral aromatics and fruit acids that the farmer spent nine months cultivating on the tree. By roasting lighter and cleaner on custom-modified Loring and Probat machines, we allow you to taste the soil, rain, and varietal of each specific hillside.
            </p>
            <p>
              We believe quality is created on the farm, not in the roaster. Our role as roasters is simply not to ruin what nature and the producer have created.
            </p>
          </div>
        </div>
      )}

      {/* VIEW: ESPRESSO BAR */}
      {currentTab === 'espresso-bar' && (
        <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-stone-200 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#b91c1c] font-bold">Grünerløkka, Oslo</span>
              <h2 className="text-3xl font-serif text-stone-900">The Espresso Bar</h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Located at Grüners gate 1 in Oslo. We serve seasonal filter coffees brewed on custom AeroPress and batch brewers, alongside calibrated espresso flights and iced shaken coffees.
              </p>
              <div className="pt-4 border-t border-stone-100 text-xs font-mono space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-stone-500" />
                  <span>Mon – Fri: 08:30 – 18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-stone-500" />
                  <span>Sat – Sun: 09:00 – 17:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-stone-500" />
                  <span>Grüners gate 1, 0552 Oslo, Norway</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 aspect-[4/3] bg-stone-100 overflow-hidden">
              <img src="https://cdn.shopify.com/s/files/1/0738/6113/6597/files/lab-1.jpg?v=1776171521" alt="Espresso Bar Oslo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )}

      {/* VIEW: FAQ */}
      {currentTab === 'faq' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b91c1c]">Customer Support & Knowledge Base</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">Frequently Asked Questions</h2>
            <p className="text-stone-600 font-light max-w-xl mx-auto text-sm">
              Answers regarding our Nordic roasting philosophy, resting periods, water chemistry, subscription dispatches, and espresso bar visits.
            </p>
          </div>

          <div className="space-y-4">
            {TIM_WENDELBOE_FAQS.map((faq, i) => (
              <details key={i} className="group bg-white border border-stone-200 p-6 rounded-none transition-colors hover:border-stone-400">
                <summary className="flex items-center justify-between cursor-pointer list-none font-serif text-base font-bold text-stone-900">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#b91c1c] tracking-widest block">{faq.category}</span>
                    <span>{faq.question}</span>
                  </div>
                  <span className="text-stone-400 group-open:rotate-180 transition-transform text-lg ml-4">↓</span>
                </summary>
                <div className="mt-4 pt-4 border-t border-stone-100 text-stone-700 text-sm font-light leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="bg-[#111111] text-[#fcfbf9] p-8 text-center space-y-4">
            <h3 className="text-xl font-serif font-bold">Have another question for Tim & the roastery team?</h3>
            <p className="text-stone-400 text-xs font-light max-w-md mx-auto">
              Our sensory specialists and green coffee sourcers in Oslo are happy to assist with recipe development or wholesale questions.
            </p>
            <button
              onClick={() => {
                const msg = encodeURIComponent("Hello Tim Wendelboe / BREW & BLOOM team! I have a question regarding coffee brewing and subscriptions.");
                window.open(`https://wa.me/4740004062?text=${msg}`, '_blank');
              }}
              className="inline-block px-6 py-2.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs uppercase font-mono tracking-widest font-bold transition-colors cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      )}

      {/* Slide-over Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-[#fcfbf9] h-full shadow-2xl flex flex-col justify-between p-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <h3 className="font-serif text-xl font-bold">Cart ({cartTotalItems})</h3>
              <button onClick={() => setCartDrawerOpen(false)} className="p-1 hover:text-[#b91c1c] cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-center text-xs text-stone-500 py-12">Your cart is currently empty.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 border border-stone-200 flex gap-3">
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-14 h-14 object-cover" />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold line-clamp-1">{item.product.name}</h4>
                      <p className="text-[10px] text-stone-500 font-mono mt-0.5">{item.grind}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200 px-2 py-0.5 text-xs font-mono">
                          <button onClick={() => updateCartQty(idx, -1)} className="cursor-pointer">-</button>
                          <span className="px-2">{item.quantity}</span>
                          <button onClick={() => updateCartQty(idx, 1)} className="cursor-pointer">+</button>
                        </div>
                        <span className="text-xs font-mono font-bold">NOK {item.product.priceNok * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-stone-200 pt-4 space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span>Subtotal:</span>
                  <b>NOK {cartSubtotalNok} / ₹{cartSubtotalInr}</b>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-[#111111] hover:bg-[#b91c1c] text-[#fcfbf9] text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
                >
                  Checkout (WhatsApp Dispatch)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fcfbf9] max-w-2xl w-full p-6 sm:p-8 border border-stone-300 relative shadow-2xl">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 p-1 hover:text-[#b91c1c] cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="aspect-square bg-stone-100 overflow-hidden">
                <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-stone-500">{selectedProduct.origin}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900">{selectedProduct.name}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{selectedProduct.description}</p>
                <div className="text-xs font-mono text-stone-700">
                  <p>Producer: <b>{selectedProduct.producer}</b></p>
                  <p>Varietal: <b>{selectedProduct.varietal}</b></p>
                  <p>Process: <b>{selectedProduct.process}</b></p>
                </div>
                <div className="pt-2">
                  <label className="text-[10px] font-mono uppercase text-stone-500 block mb-1">Grind Size</label>
                  <select
                    value={selectedGrind}
                    onChange={e => setSelectedGrind(e.target.value)}
                    className="w-full bg-white border border-stone-300 p-2 text-xs font-mono"
                  >
                    <option value="Whole Beans">Whole Beans (Recommended)</option>
                    <option value="AeroPress">AeroPress</option>
                    <option value="Filter / V60">Filter / V60</option>
                    <option value="French Press">French Press / Cupping</option>
                    <option value="Espresso">Espresso</option>
                  </select>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <span className="text-base font-mono font-bold">NOK {selectedProduct.priceNok} / ₹{selectedProduct.priceInr}</span>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct, selectedGrind, 1);
                      setSelectedProduct(null);
                    }}
                    className="px-4 py-2 bg-[#111111] hover:bg-[#b91c1c] text-[#fcfbf9] text-xs uppercase tracking-wider font-bold cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nordic Footer */}
      <footer className="bg-[#111111] text-[#fcfbf9] py-12 border-t border-stone-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase mb-3">BREW & BLOOM</h4>
            <p className="text-stone-400 font-light leading-relaxed">
              Tim Wendelboe Nordic coffee roastery inspiration. We source and roast with care to honor origin terroir.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-stone-400 mb-3">Explore</h5>
            <ul className="space-y-1.5 text-stone-300">
              <li><button onClick={() => setCurrentTab('shop')} className="hover:underline">Filter Coffees</button></li>
              <li><button onClick={() => setCurrentTab('subscriptions')} className="hover:underline">Subscriptions</button></li>
              <li><button onClick={() => setCurrentTab('brew-guides')} className="hover:underline">AeroPress Recipes</button></li>
              <li><button onClick={() => setCurrentTab('transparency')} className="hover:underline">Farm Reports</button></li>
              <li><button onClick={() => setCurrentTab('faq')} className="hover:underline">FAQ & Roasting Guide</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-stone-400 mb-3">Espresso Bar</h5>
            <p className="text-stone-400">Grüners gate 1<br />0552 Oslo, Norway<br />post@timwendelboe.no</p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-stone-400 mb-3">Dispatch</h5>
            <p className="text-stone-400">Roasted fresh and shipped globally with tracking on Tuesday and Thursday.</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-stone-800 flex justify-between text-stone-500 font-mono text-[10px]">
          <span>© 2026 BREW & BLOOM / Tim Wendelboe Recreation</span>
          <span>Nordic Light Roast Philosophy</span>
        </div>
      </footer>

    </div>
  );
};
