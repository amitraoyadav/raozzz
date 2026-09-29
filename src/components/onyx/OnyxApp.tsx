import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Layers,
  Activity,
  ChevronRight,
  ExternalLink,
  Compass,
  CheckCircle2,
  Menu as MenuIcon,
  HelpCircle,
  Briefcase,
  Sliders,
  DollarSign
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  ONYX_PRODUCTS,
  ONYX_BREW_METHODS,
  ONYX_FAQS,
  ONYX_STORY_CHAPTERS,
  ONYX_EDUCATION_TOPICS,
  OnyxProduct,
  OnyxBrewMethod
} from '../../data/onyxCoffeeData';

export type OnyxTab =
  | 'home'
  | 'shop'
  | 'subscriptions'
  | 'transparency'
  | 'brew-science'
  | 'story'
  | 'wholesale'
  | 'faq'
  | 'contact';

interface OnyxCartItem {
  product: OnyxProduct;
  quantity: number;
  grind: string;
}

export const OnyxApp: React.FC = () => {
  const { setActiveView } = useApp();
  const [currentTab, setCurrentTab] = useState<OnyxTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<OnyxCartItem[]>([
    {
      product: ONYX_PRODUCTS[0],
      quantity: 1,
      grind: 'Whole Bean'
    }
  ]);
  const [orderSent, setOrderSent] = useState(false);

  // Shop filter
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<OnyxProduct | null>(null);
  const [modalGrind, setModalGrind] = useState('Whole Bean');
  const [modalQty, setModalQty] = useState(1);

  // Brew guide active
  const [selectedBrew, setSelectedBrew] = useState<OnyxBrewMethod>(ONYX_BREW_METHODS[0]);

  // Quiz state
  const [quizStep, setQuizStep] = useState(1);
  const [quizPreference, setQuizPreference] = useState({
    roast: '',
    brewType: '',
    flavor: ''
  });
  const [quizResult, setQuizResult] = useState<OnyxProduct | null>(null);

  // Wholesale form
  const [wholesaleName, setWholesaleName] = useState('');
  const [wholesaleBusiness, setWholesaleBusiness] = useState('');
  const [wholesaleCity, setWholesaleCity] = useState('');
  const [wholesaleSubmitted, setWholesaleSubmitted] = useState(false);

  const cartTotalCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);
  const cartSubtotalEur = useMemo(() => cart.reduce((sum, i) => sum + i.product.priceEur * i.quantity, 0), [cart]);
  const cartSubtotalInr = useMemo(() => cart.reduce((sum, i) => sum + i.product.priceInr * i.quantity, 0), [cart]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return ONYX_PRODUCTS;
    return ONYX_PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: OnyxProduct, grind = 'Whole Bean', qty = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(item => item.product.id === product.id && item.grind === grind);
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

  const handleQuizAnswer = (key: 'roast' | 'brewType' | 'flavor', val: string) => {
    const updated = { ...quizPreference, [key]: val };
    setQuizPreference(updated);

    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      // Find match
      if (val === 'chocolate') {
        setQuizResult(ONYX_PRODUCTS.find(p => p.id === 'onyx-monarch') || ONYX_PRODUCTS[0]);
      } else if (val === 'fruit') {
        setQuizResult(ONYX_PRODUCTS.find(p => p.id === 'onyx-tropical-weather') || ONYX_PRODUCTS[2]);
      } else {
        setQuizResult(ONYX_PRODUCTS[0]);
      }
    }
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setQuizPreference({ roast: '', brewType: '', flavor: '' });
    setQuizResult(null);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const lines = cart
      .map(i => `• ${i.product.name} (${i.grind}) x${i.quantity} = €${(i.product.priceEur * i.quantity).toFixed(2)} (₹${i.product.priceInr * i.quantity})`)
      .join('\n');
    const msg = `*BREW & BLOOM — Onyx Coffee Lab EU Order*\n\n${lines}\n\n*Total:* €${cartSubtotalEur.toFixed(2)} (approx ₹${cartSubtotalInr})\n\nDispatch Destination: European Union / International\nPlease send payment link and customs tracking.`;
    window.open(`https://wa.me/31208943400?text=${encodeURIComponent(msg)}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-['Space_Grotesk',sans-serif] selection:bg-[#c5a059] selection:text-black">
      {/* Website Switcher Bar */}
      <div className="bg-[#141414] text-[#d4af37] text-xs py-2 px-4 border-b border-[#222222] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
          <span className="font-bold tracking-wide text-white">WEBSITE 2: ONYX COFFEE LAB EU (Recreated as BREW & BLOOM)</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-stone-400">Switch Website:</span>
          <button onClick={() => setActiveView('site', 'brew-bloom-tim-wendelboe')} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-stone-300 cursor-pointer">1. Tim Wendelboe</button>
          <button onClick={() => setActiveView('site', 'brew-bloom-onyx')} className="px-2 py-0.5 rounded bg-[#c5a059] text-black font-bold cursor-pointer">2. Onyx Coffee Lab</button>
          <button onClick={() => setActiveView('site', 'brew-bloom-city-brew')} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-stone-300 cursor-pointer">3. City Brew</button>
          <button onClick={() => setActiveView('site', 'brew-bloom-gregorys')} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-stone-300 cursor-pointer">4. Gregorys</button>
          <button onClick={() => setActiveView('dashboard')} className="px-2 py-0.5 rounded bg-stone-700 text-white font-bold ml-2 cursor-pointer">Dashboard</button>
        </div>
      </div>

      {/* Top Banner */}
      <div className="bg-[#111111] border-b border-stone-800 text-[11px] tracking-widest uppercase text-stone-400 py-2 px-4 text-center flex items-center justify-center gap-4">
        <span>Amsterdam European Roastery Fulfillment</span>
        <span className="text-[#c5a059]">✦</span>
        <span>Free EU Shipping on Orders Over €45</span>
        <span className="text-[#c5a059]">✦</span>
        <span>100% Price Transparency Published</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-2xl font-black tracking-[0.2em] uppercase text-white group-hover:text-[#c5a059] transition-colors">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] px-1.5 py-0.5 bg-[#c5a059]/20 text-[#c5a059] font-mono border border-[#c5a059]/40 tracking-wider">
                  ONYX EU
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-mono">
                Never Settle For Good Enough
              </p>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-stone-300">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#c5a059] transition-colors cursor-pointer ${currentTab === 'home' ? 'text-[#c5a059]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('shop')} className={`hover:text-[#c5a059] transition-colors cursor-pointer ${currentTab === 'shop' ? 'text-[#c5a059]' : ''}`}>Collections</button>
            <button onClick={() => setCurrentTab('subscriptions')} className={`hover:text-[#c5a059] transition-colors cursor-pointer ${currentTab === 'subscriptions' ? 'text-[#c5a059]' : ''}`}>Subscriptions</button>
            <button onClick={() => setCurrentTab('transparency')} className={`hover:text-[#c5a059] transition-colors cursor-pointer ${currentTab === 'transparency' ? 'text-[#c5a059]' : ''}`}>Transparency</button>
            <button onClick={() => setCurrentTab('brew-science')} className={`hover:text-[#c5a059] transition-colors cursor-pointer ${currentTab === 'brew-science' ? 'text-[#c5a059]' : ''}`}>Brew Science</button>
            <button onClick={() => setCurrentTab('story')} className={`hover:text-[#c5a059] transition-colors cursor-pointer ${currentTab === 'story' ? 'text-[#c5a059]' : ''}`}>Manifesto</button>
            <button onClick={() => setCurrentTab('wholesale')} className={`hover:text-[#c5a059] transition-colors cursor-pointer ${currentTab === 'wholesale' ? 'text-[#c5a059]' : ''}`}>Wholesale</button>
            <button onClick={() => setCurrentTab('faq')} className={`hover:text-[#c5a059] transition-colors cursor-pointer ${currentTab === 'faq' ? 'text-[#c5a059]' : ''}`}>FAQ</button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 border border-stone-700 bg-stone-900/60 hover:border-[#c5a059] transition-colors text-xs font-mono font-medium cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#c5a059]" />
              <span className="text-white">Bag ({cartTotalCount})</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111111] border-b border-stone-800 px-6 py-4 space-y-3 text-xs uppercase tracking-widest font-semibold text-stone-300">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c5a059]">Home</button>
            <button onClick={() => { setCurrentTab('shop'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c5a059]">Collections</button>
            <button onClick={() => { setCurrentTab('subscriptions'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c5a059]">Subscriptions</button>
            <button onClick={() => { setCurrentTab('transparency'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c5a059]">Radical Transparency</button>
            <button onClick={() => { setCurrentTab('brew-science'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c5a059]">Brew Science & Recipes</button>
            <button onClick={() => { setCurrentTab('story'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c5a059]">The Onyx Manifesto</button>
            <button onClick={() => { setCurrentTab('wholesale'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c5a059]">Wholesale Partnership</button>
            <button onClick={() => { setCurrentTab('faq'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c5a059]">FAQ & Logistics</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <div className="space-y-24 pb-24">
          {/* Hero Section */}
          <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden border-b border-stone-800 bg-gradient-to-b from-[#141414] via-[#0a0a0a] to-[#0a0a0a] px-4">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c5a059]/40 bg-[#c5a059]/10 text-[#c5a059] text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialty Coffee Lab & European Roastery</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
                Never Settle <br />
                <span className="text-[#c5a059]">For Good Enough</span>
              </h1>
              <p className="text-stone-400 font-light max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                BREW & BLOOM’s faithful Onyx Coffee Lab European experience. Sourcing 87+ SCA microlots, paying 200–400% above market price, and roasting with relentless scientific precision in Amsterdam.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setCurrentTab('shop')}
                  className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#d8b56d] text-black font-bold uppercase tracking-widest text-xs transition-colors cursor-pointer"
                >
                  Shop Specialty Coffees
                </button>
                <button
                  onClick={() => setCurrentTab('transparency')}
                  className="px-8 py-3.5 border border-stone-700 hover:border-stone-400 text-stone-200 uppercase tracking-widest text-xs transition-colors cursor-pointer"
                >
                  Explore Pricing Transparency
                </button>
              </div>
            </div>
          </section>

          {/* Featured Highlights Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between border-b border-stone-800 pb-4 mb-8">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#c5a059] tracking-widest">Seasonal Offerings</span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">Championship Microlots</h2>
              </div>
              <button
                onClick={() => setCurrentTab('shop')}
                className="text-xs uppercase tracking-widest font-mono text-[#c5a059] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All ({ONYX_PRODUCTS.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ONYX_PRODUCTS.slice(0, 4).map(product => (
                <div
                  key={product.id}
                  className="bg-[#121212] border border-stone-800 hover:border-[#c5a059] transition-all flex flex-col justify-between group p-4"
                >
                  <div>
                    <div className="relative aspect-square overflow-hidden bg-stone-900 mb-4">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-[#c5a059] border border-[#c5a059]/40">
                        SCA {product.scaScore}
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-xs p-2 text-[10px] font-mono text-stone-300">
                        <span className="text-[#c5a059]">FOB Paid:</span> {product.fobPricePaid}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wider">{product.origin}</span>
                      <h3 className="text-base font-bold text-white group-hover:text-[#c5a059] transition-colors">{product.name}</h3>
                      <p className="text-xs text-stone-400 font-light line-clamp-2">{product.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {product.tastingNotes.map((note, idx) => (
                        <span key={idx} className="text-[9px] px-1.5 py-0.5 bg-stone-800 text-stone-300 font-mono">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-800 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-mono font-bold text-white">€{product.priceEur.toFixed(2)}</span>
                      <span className="text-[10px] text-stone-400 block font-mono">approx ₹{product.priceInr}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setModalGrind('Whole Bean');
                        setModalQty(1);
                      }}
                      className="px-3 py-1.5 bg-[#c5a059] hover:bg-[#d8b56d] text-black text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
                    >
                      Inspect & Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Palate Quiz Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-[#141414] border border-[#c5a059]/40 p-8 sm:p-12 relative overflow-hidden">
              <div className="text-center space-y-3 mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059]">Interactive Sommelier</span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">Find Your Roast Profile</h2>
                <p className="text-stone-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
                  Answer 3 quick sensory questions to calibrate your palate with our current European seasonal lineup.
                </p>
              </div>

              {!quizResult ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-2 mb-4 font-mono text-xs text-stone-400">
                    <span className={quizStep >= 1 ? 'text-[#c5a059] font-bold' : ''}>1. Roast</span>
                    <span>→</span>
                    <span className={quizStep >= 2 ? 'text-[#c5a059] font-bold' : ''}>2. Method</span>
                    <span>→</span>
                    <span className={quizStep >= 3 ? 'text-[#c5a059] font-bold' : ''}>3. Flavor Note</span>
                  </div>

                  {quizStep === 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <button
                        onClick={() => handleQuizAnswer('roast', 'light')}
                        className="p-5 border border-stone-700 bg-stone-900/60 hover:border-[#c5a059] text-left space-y-2 cursor-pointer transition-colors"
                      >
                        <h4 className="text-sm font-bold text-white">Light Roast</h4>
                        <p className="text-xs text-stone-400 font-light">Sparkling citrus, florals, jasmine, and juicy tea-like finish.</p>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer('roast', 'medium')}
                        className="p-5 border border-stone-700 bg-stone-900/60 hover:border-[#c5a059] text-left space-y-2 cursor-pointer transition-colors"
                      >
                        <h4 className="text-sm font-bold text-white">Medium-Light</h4>
                        <p className="text-xs text-stone-400 font-light">Balanced brown sugar sweetness, stone fruit, and round silky body.</p>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer('roast', 'espresso')}
                        className="p-5 border border-stone-700 bg-stone-900/60 hover:border-[#c5a059] text-left space-y-2 cursor-pointer transition-colors"
                      >
                        <h4 className="text-sm font-bold text-white">Modern Espresso</h4>
                        <p className="text-xs text-stone-400 font-light">Thick crema, dark chocolate fudge, molasses, and candied nuts.</p>
                      </button>
                    </div>
                  )}

                  {quizStep === 2 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <button
                        onClick={() => handleQuizAnswer('brewType', 'pourover')}
                        className="p-5 border border-stone-700 bg-stone-900/60 hover:border-[#c5a059] text-left space-y-2 cursor-pointer transition-colors"
                      >
                        <h4 className="text-sm font-bold text-white">Pour-Over (V60/Kalita)</h4>
                        <p className="text-xs text-stone-400 font-light">Clean paper filtration prioritizing high clarity and aromatics.</p>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer('brewType', 'milk')}
                        className="p-5 border border-stone-700 bg-stone-900/60 hover:border-[#c5a059] text-left space-y-2 cursor-pointer transition-colors"
                      >
                        <h4 className="text-sm font-bold text-white">Espresso & Milk</h4>
                        <p className="text-xs text-stone-400 font-light">Need a coffee that effortlessly punches through oat or dairy milk.</p>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer('brewType', 'batch')}
                        className="p-5 border border-stone-700 bg-stone-900/60 hover:border-[#c5a059] text-left space-y-2 cursor-pointer transition-colors"
                      >
                        <h4 className="text-sm font-bold text-white">Batch / French Press</h4>
                        <p className="text-xs text-stone-400 font-light">Rich immersion extraction with heavy tactile mouthfeel.</p>
                      </button>
                    </div>
                  )}

                  {quizStep === 3 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        onClick={() => handleQuizAnswer('flavor', 'fruit')}
                        className="p-5 border border-stone-700 bg-stone-900/60 hover:border-[#c5a059] text-left space-y-2 cursor-pointer transition-colors"
                      >
                        <h4 className="text-sm font-bold text-white">Tropical Fruit & Florals</h4>
                        <p className="text-xs text-stone-400 font-light">Mango, peach tea, bergamot, honeysuckle, and vibrant fruit acid.</p>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer('flavor', 'chocolate')}
                        className="p-5 border border-stone-700 bg-stone-900/60 hover:border-[#c5a059] text-left space-y-2 cursor-pointer transition-colors"
                      >
                        <h4 className="text-sm font-bold text-white">Dark Chocolate & Candied Pecan</h4>
                        <p className="text-xs text-stone-400 font-light">Caramelized sugars, cocoa nibs, molasses, and warm dessert notes.</p>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-[#0e0e0e] border border-stone-700 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
                  <img src={quizResult.imageUrl} alt={quizResult.name} className="w-32 h-32 object-cover border border-stone-700" />
                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <span className="text-[10px] font-mono uppercase text-[#c5a059] tracking-widest">Recommended Roaster Match</span>
                    <h3 className="text-2xl font-black text-white">{quizResult.name}</h3>
                    <p className="text-xs text-stone-400 font-light">{quizResult.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] text-stone-300">
                      <span>Score: SCA {quizResult.scaScore}</span>
                      <span>·</span>
                      <span>Origin: {quizResult.origin}</span>
                      <span>·</span>
                      <span className="text-[#c5a059]">FOB: {quizResult.fobPricePaid}</span>
                    </div>
                    <div className="flex items-center gap-4 pt-3">
                      <button
                        onClick={() => addToCart(quizResult, 'Whole Bean', 1)}
                        className="px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b56d] text-black font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                      >
                        Add to Bag (€{quizResult.priceEur.toFixed(2)})
                      </button>
                      <button
                        onClick={resetQuiz}
                        className="text-xs font-mono text-stone-400 hover:text-white underline cursor-pointer"
                      >
                        Retake Quiz
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Radical Transparency Manifesto Teaser */}
          <section className="border-t border-b border-stone-800 bg-[#0f0f0f] py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <span className="text-3xl sm:text-4xl font-black text-[#c5a059] font-mono">250%+</span>
                <h4 className="text-sm uppercase font-bold tracking-wider text-white">Above Commodity C-Price</h4>
                <p className="text-xs text-stone-400 font-light">We publish every FOB contract price paid to guarantee farm workers dignified compensation.</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl sm:text-4xl font-black text-[#c5a059] font-mono">88.5</span>
                <h4 className="text-sm uppercase font-bold tracking-wider text-white">Average SCA Cup Score</h4>
                <p className="text-xs text-stone-400 font-light">Only selecting coffees from the top 1% tier of global specialty production.</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl sm:text-4xl font-black text-[#c5a059] font-mono">Amsterdam</span>
                <h4 className="text-sm uppercase font-bold tracking-wider text-white">European Roastery Hub</h4>
                <p className="text-xs text-stone-400 font-light">Fresh weekly batch roasting in the Netherlands with rapid duty-free dispatch across Europe.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW: SHOP */}
      {currentTab === 'shop' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">Specialty Collection</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">Current Roastery Catalog</h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Signature Blends', 'Single Origins', 'Echelon Reserve', 'Subscriptions'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer border ${
                    activeCategory === cat
                      ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold'
                      : 'border-stone-800 bg-stone-900/60 text-stone-300 hover:border-stone-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-[#121212] border border-stone-800 hover:border-[#c5a059] transition-all flex flex-col justify-between group p-5"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-stone-900 mb-5">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-[#c5a059] border border-[#c5a059]/40">
                      SCA {product.scaScore}
                    </div>
                    <div className="absolute top-3 right-3 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-stone-300">
                      {product.roastLevel} Roast
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-xs p-2 text-[10px] font-mono text-stone-300 border border-stone-800">
                      <div className="flex justify-between">
                        <span className="text-[#c5a059]">FOB Transparency:</span>
                        <span>{product.fobPricePaid}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wider">
                      {product.origin} · {product.elevation}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-light line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800 font-mono text-[11px] text-stone-400 space-y-1">
                    <p>Producer: <span className="text-stone-200">{product.producer}</span></p>
                    <p>Process: <span className="text-stone-200">{product.process}</span></p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {product.tastingNotes.map((note, idx) => (
                      <span key={idx} className="text-[9px] px-2 py-0.5 bg-stone-800 text-[#c5a059] font-mono border border-stone-700">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-mono font-bold text-white">€{product.priceEur.toFixed(2)}</span>
                    <span className="text-[10px] text-stone-400 block font-mono">approx ₹{product.priceInr}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setModalGrind('Whole Bean');
                      setModalQty(1);
                    }}
                    className="px-4 py-2 bg-[#c5a059] hover:bg-[#d8b56d] text-black text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: SUBSCRIPTIONS */}
      {currentTab === 'subscriptions' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059]">Fresh Roasts on Auto-Pilot</span>
            <h2 className="text-4xl font-black uppercase text-white">The Onyx EU Coffee Club</h2>
            <p className="text-stone-400 font-light max-w-xl mx-auto text-sm">
              Roasted in Amsterdam and delivered to your doorstep across Europe. Free shipping, flexible frequencies, and access to exclusive competition micro-lots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121212] border border-stone-800 p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-stone-400 tracking-widest block">Entry Explorer</span>
                <h3 className="text-2xl font-bold text-white">Signature Blend Club</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Rotating selections of Southern Weather, Monarch, and Geometry. Ideal for daily espresso and filter lovers seeking dependable chocolate and fruit balance.
                </p>
                <div className="text-2xl font-mono font-bold text-[#c5a059]">€15.50 <span className="text-xs text-stone-400 font-normal">/ bag</span></div>
                <ul className="text-xs space-y-2 text-stone-300 font-mono">
                  <li>✓ 100% Price transparency</li>
                  <li>✓ Choice of Whole Bean or Grind</li>
                  <li>✓ Pause, skip, or cancel anytime</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  addToCart(ONYX_PRODUCTS[0], 'Whole Bean', 1);
                }}
                className="w-full py-3 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
              >
                Subscribe Blend Club
              </button>
            </div>

            <div className="bg-[#141414] border-2 border-[#c5a059] p-8 space-y-6 flex flex-col justify-between relative shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c5a059] text-black text-[10px] font-mono uppercase px-3 py-0.5 font-bold tracking-widest">
                Most Popular
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-[#c5a059] tracking-widest block">Roaster’s Choice</span>
                <h3 className="text-2xl font-bold text-white">Single Origin Roaster Series</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Our head roaster curates two distinct single origin micro-lots every month, showcasing terroir from Huila, Yirgacheffe, Tarrazu, and Nyeri.
                </p>
                <div className="text-2xl font-mono font-bold text-[#c5a059]">€34.00 <span className="text-xs text-stone-400 font-normal">/ 2 bags monthly</span></div>
                <ul className="text-xs space-y-2 text-stone-300 font-mono">
                  <li>✓ Free EU courier delivery</li>
                  <li>✓ 88+ SCA rated microlots</li>
                  <li>✓ Detailed producer stories & brew recipes</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  addToCart(ONYX_PRODUCTS[4] || ONYX_PRODUCTS[1], 'Whole Bean', 1);
                }}
                className="w-full py-3 bg-[#c5a059] hover:bg-[#d8b56d] text-black font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
              >
                Join Roaster’s Choice
              </button>
            </div>

            <div className="bg-[#121212] border border-stone-800 p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-stone-400 tracking-widest block">Rare & Exotic</span>
                <h3 className="text-2xl font-bold text-white">Echelon Reserve</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Extremely limited Geisha, Sudan Rume, and Eugenioides lots. Packaged in custom embossed presentation cases for serious connoisseurs.
                </p>
                <div className="text-2xl font-mono font-bold text-[#c5a059]">€48.00 <span className="text-xs text-stone-400 font-normal">/ bag</span></div>
                <ul className="text-xs space-y-2 text-stone-300 font-mono">
                  <li>✓ World competition grade</li>
                  <li>✓ Numbered collector tubes</li>
                  <li>✓ 90+ SCA certified scores</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  addToCart(ONYX_PRODUCTS[3] || ONYX_PRODUCTS[0], 'Whole Bean', 1);
                }}
                className="w-full py-3 border border-stone-700 text-stone-300 hover:border-stone-400 hover:text-white font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
              >
                Subscribe Echelon
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: TRANSPARENCY */}
      {currentTab === 'transparency' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059]">Radical Accountability</span>
            <h2 className="text-4xl font-black uppercase text-white">100% Price Transparency</h2>
            <p className="text-stone-400 font-light max-w-2xl mx-auto text-sm">
              We publish exact FOB prices paid to producers on every coffee we sell. True sustainability begins with financial honesty.
            </p>
          </div>

          <div className="bg-[#121212] border border-stone-800 p-6 sm:p-10 space-y-8">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Comparison: Market vs Fair Trade vs Onyx Paid</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-2">
                  <span>Commodity C-Market Price (Base)</span>
                  <span>$1.85 / lb</span>
                </div>
                <div className="w-full bg-stone-800 h-3 overflow-hidden">
                  <div className="bg-red-500/80 h-full w-[25%]"></div>
                </div>
                <p className="text-[10px] text-stone-500 mt-1 font-mono">Often below the actual cost of agricultural production.</p>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-2">
                  <span>Fair Trade Certified Minimum</span>
                  <span>$2.40 / lb</span>
                </div>
                <div className="w-full bg-stone-800 h-3 overflow-hidden">
                  <div className="bg-yellow-500/80 h-full w-[35%]"></div>
                </div>
                <p className="text-[10px] text-stone-500 mt-1 font-mono">Guarantees baseline survival, but insufficient for quality reinvestment.</p>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-[#c5a059] font-bold mb-2">
                  <span>Onyx Average FOB Paid (BREW & BLOOM)</span>
                  <span>$5.45 / lb (294% above C-Market)</span>
                </div>
                <div className="w-full bg-stone-800 h-4 overflow-hidden border border-[#c5a059]">
                  <div className="bg-[#c5a059] h-full w-[85%]"></div>
                </div>
                <p className="text-[10px] text-stone-300 mt-1 font-mono">Directly funds farm worker pensions, schools, and experimental wet mills.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ONYX_PRODUCTS.map(p => (
              <div key={p.id} className="bg-[#121212] border border-stone-800 p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-base">{p.name}</h4>
                    <p className="text-[10px] font-mono text-stone-400 uppercase">{p.origin} · {p.producer}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#c5a059] px-2 py-0.5 bg-[#c5a059]/10 border border-[#c5a059]/30">
                    SCA {p.scaScore}
                  </span>
                </div>
                <div className="bg-stone-900/80 p-3 font-mono text-xs space-y-1 text-stone-300 border border-stone-800">
                  <p><span className="text-[#c5a059]">FOB Price Paid:</span> {p.fobPricePaid}</p>
                  <p><span className="text-stone-400">Process & Elev:</span> {p.process} / {p.elevation}</p>
                  <p><span className="text-stone-400">EU Price:</span> €{p.priceEur.toFixed(2)} (₹{p.priceInr})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: BREW SCIENCE */}
      {currentTab === 'brew-science' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059]">Extraction Physics</span>
            <h2 className="text-4xl font-black uppercase text-white">Championship Brew Guides</h2>
            <p className="text-stone-400 font-light max-w-xl mx-auto text-sm">
              Extraction protocols calibrated by our World Barista Champions on refractometers and TDS meters.
            </p>
          </div>

          {/* Brew Method Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {ONYX_BREW_METHODS.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedBrew(method)}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer border ${
                  selectedBrew.id === method.id
                    ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold'
                    : 'border-stone-800 bg-[#121212] text-stone-300 hover:border-stone-600'
                }`}
              >
                {method.name}
              </button>
            ))}
          </div>

          {/* Active Brew Card */}
          <div className="bg-[#121212] border border-[#c5a059]/40 p-8 sm:p-12 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-800 pb-6 gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#c5a059] tracking-widest">Active Recipe</span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">{selectedBrew.name}</h3>
              </div>
              <div className="font-mono text-sm bg-stone-900 px-4 py-2 border border-stone-800 text-[#c5a059]">
                Target Ratio: <b>{selectedBrew.ratio}</b>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-stone-900/60 p-4 border border-stone-800">
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Dose</span>
                <span className="text-base font-mono font-bold text-white">{selectedBrew.dose}</span>
              </div>
              <div className="bg-stone-900/60 p-4 border border-stone-800">
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Water Yield</span>
                <span className="text-base font-mono font-bold text-white">{selectedBrew.water}</span>
              </div>
              <div className="bg-stone-900/60 p-4 border border-stone-800">
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Water Temp</span>
                <span className="text-base font-mono font-bold text-white">{selectedBrew.temp}</span>
              </div>
              <div className="bg-stone-900/60 p-4 border border-stone-800">
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Target Brew Time</span>
                <span className="text-base font-mono font-bold text-white">{selectedBrew.time}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm uppercase font-bold text-[#c5a059] tracking-wider font-mono">Extraction Notes & Grind Calibration</h4>
              <p className="text-stone-300 text-sm font-light leading-relaxed bg-[#0a0a0a] p-4 border border-stone-800">
                {selectedBrew.notes}
              </p>
              <p className="text-xs text-stone-400 font-mono">
                Grind Setting: <b className="text-stone-200">{selectedBrew.grind}</b>
              </p>
            </div>
          </div>

          {/* Educational Science Modules */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white">Sensory & Processing Deep Dives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ONYX_EDUCATION_TOPICS.map((topic, i) => (
                <div key={i} className="bg-[#121212] border border-stone-800 p-6 space-y-4">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30">
                    {topic.badge}
                  </span>
                  <h4 className="text-base font-bold text-white">{topic.title}</h4>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">{topic.description}</p>
                  <ul className="text-[11px] font-mono text-stone-300 space-y-1 pt-2 border-t border-stone-800">
                    {topic.takeaways.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#c5a059]">›</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW: MANIFESTO / STORY */}
      {currentTab === 'story' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059]">Philosophy & History</span>
            <h2 className="text-4xl font-black uppercase text-white">The Onyx Manifesto</h2>
            <p className="text-stone-400 font-light max-w-xl mx-auto text-sm">
              How a refusal to compromise transformed specialty roasting into a global movement.
            </p>
          </div>

          <div className="space-y-12">
            {ONYX_STORY_CHAPTERS.map((ch, idx) => (
              <div key={ch.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-stone-800 pb-12">
                <div className="md:col-span-8 space-y-3">
                  <span className="text-xs font-mono text-[#c5a059] tracking-widest uppercase">Chapter 0{idx + 1} — {ch.subtitle}</span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">{ch.title}</h3>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">{ch.text}</p>
                </div>
                <div className="md:col-span-4 bg-[#141414] border border-[#c5a059]/40 p-6 text-center space-y-1">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-[#c5a059]">{ch.statValue}</span>
                  <span className="text-xs font-mono uppercase text-stone-400 block">{ch.statLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#121212] border border-stone-800 p-8 sm:p-12 text-center space-y-4">
            <h3 className="text-2xl font-bold uppercase text-white">Visit our Amsterdam European Roastery</h3>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
              Keizersgracht 482, 1016 GD Amsterdam, Netherlands. Cuppings held every Friday afternoon for coffee professionals and home baristas.
            </p>
            <button
              onClick={() => {
                const msg = encodeURIComponent("Hello Onyx EU / BREW & BLOOM team! I would like to schedule a cupping session at the Amsterdam roastery.");
                window.open(`https://wa.me/31208943400?text=${msg}`, '_blank');
              }}
              className="inline-block px-8 py-3 bg-[#c5a059] hover:bg-[#d8b56d] text-black font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
            >
              Book Tasting Session
            </button>
          </div>
        </div>
      )}

      {/* VIEW: WHOLESALE */}
      {currentTab === 'wholesale' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059]">European Cafe & Hospitality Partnerships</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">Serve Onyx In Your Cafe</h2>
            <p className="text-stone-400 font-light max-w-xl mx-auto text-sm">
              We partner with forward-thinking espresso bars, Michelin restaurants, boutique hotels, and specialty offices across the European continent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-[#121212] border border-stone-800 p-6 space-y-2">
              <h4 className="font-bold text-white text-sm uppercase">Batch Roasting</h4>
              <p className="text-xs text-stone-400 font-light">Custom 5kg and 10kg roaster-fresh wholesale nitrogen-flushed valve bags dispatched weekly.</p>
            </div>
            <div className="bg-[#121212] border border-stone-800 p-6 space-y-2">
              <h4 className="font-bold text-white text-sm uppercase">Equipment & Servicing</h4>
              <p className="text-xs text-stone-400 font-light">Direct pricing on Synesso MVP, La Marzocco, Mahlkönig E80 grinders, and reverse osmosis water systems.</p>
            </div>
            <div className="bg-[#121212] border border-stone-800 p-6 space-y-2">
              <h4 className="font-bold text-white text-sm uppercase">Barista Education</h4>
              <p className="text-xs text-stone-400 font-light">Free ongoing training from our European competition team on sensory tasting and extraction physics.</p>
            </div>
          </div>

          <div className="bg-[#141414] border border-stone-800 p-8 space-y-6">
            <h3 className="text-xl font-bold uppercase text-white">Apply for a Wholesale Account</h3>
            {wholesaleSubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-600 p-6 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Wholesale Application Received</h4>
                <p className="text-xs text-stone-300 font-light">
                  Our Amsterdam wholesale director will review your venue details and dispatch a complimentary 3-blend sample pack within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setWholesaleSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-stone-400 block mb-1">Contact Name</label>
                    <input
                      type="text"
                      required
                      value={wholesaleName}
                      onChange={e => setWholesaleName(e.target.value)}
                      placeholder="e.g. Liam Jansen"
                      className="w-full bg-[#0a0a0a] border border-stone-800 p-3 text-xs text-white focus:border-[#c5a059] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-stone-400 block mb-1">Cafe / Business Name</label>
                    <input
                      type="text"
                      required
                      value={wholesaleBusiness}
                      onChange={e => setWholesaleBusiness(e.target.value)}
                      placeholder="e.g. Nordic Modernist Espresso Bar"
                      className="w-full bg-[#0a0a0a] border border-stone-800 p-3 text-xs text-white focus:border-[#c5a059] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-stone-400 block mb-1">City & Country</label>
                    <input
                      type="text"
                      required
                      value={wholesaleCity}
                      onChange={e => setWholesaleCity(e.target.value)}
                      placeholder="e.g. Berlin, Germany"
                      className="w-full bg-[#0a0a0a] border border-stone-800 p-3 text-xs text-white focus:border-[#c5a059] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-stone-400 block mb-1">Estimated Weekly Volume</label>
                    <select className="w-full bg-[#0a0a0a] border border-stone-800 p-3 text-xs text-white focus:border-[#c5a059] outline-none">
                      <option>5 – 15 kg / week</option>
                      <option>15 – 35 kg / week</option>
                      <option>35 – 70 kg / week</option>
                      <option>70+ kg / week (Multi-location)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d8b56d] text-black font-bold uppercase tracking-widest text-xs transition-colors cursor-pointer"
                >
                  Submit Wholesale Application & Request Samples
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* VIEW: FAQ */}
      {currentTab === 'faq' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059]">Support & Documentation</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">Frequently Asked Questions</h2>
            <p className="text-stone-400 font-light max-w-xl mx-auto text-sm">
              Detailed answers on our Amsterdam fulfillment, zero customs duties in the EU, FOB transparency metrics, and roasting schedule.
            </p>
          </div>

          <div className="space-y-4">
            {ONYX_FAQS.map((faq, i) => (
              <details key={i} className="group bg-[#121212] border border-stone-800 p-6 transition-colors hover:border-stone-600">
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-white text-base">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#c5a059] tracking-widest block">{faq.category}</span>
                    <span>{faq.question}</span>
                  </div>
                  <span className="text-stone-500 group-open:rotate-180 transition-transform text-lg ml-4">↓</span>
                </summary>
                <div className="mt-4 pt-4 border-t border-stone-800 text-stone-300 text-sm font-light leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="bg-[#141414] border border-stone-800 p-8 text-center space-y-4">
            <h3 className="text-xl font-bold uppercase text-white">Need help from our European customer team?</h3>
            <p className="text-stone-400 text-xs font-light max-w-md mx-auto">
              Our coffee specialists in Amsterdam are available Monday to Friday from 08:00 to 18:00 CET.
            </p>
            <button
              onClick={() => {
                const msg = encodeURIComponent("Hello Onyx EU / BREW & BLOOM team! I have a question about my coffee order.");
                window.open(`https://wa.me/31208943400?text=${msg}`, '_blank');
              }}
              className="inline-block px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b56d] text-black font-bold uppercase tracking-wider text-xs font-mono transition-colors cursor-pointer"
            >
              Contact Support Via WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#121212] max-w-2xl w-full p-6 sm:p-8 border border-stone-700 relative shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1 text-stone-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="aspect-square bg-stone-900 border border-stone-800 overflow-hidden">
                <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase text-[#c5a059]">{selectedProduct.origin}</span>
                  <span className="text-stone-500">·</span>
                  <span className="text-[10px] font-mono text-stone-300">SCA {selectedProduct.scaScore}</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white">{selectedProduct.name}</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">{selectedProduct.description}</p>
                <div className="bg-stone-900/80 p-2.5 border border-stone-800 text-[11px] font-mono text-stone-300 space-y-1">
                  <p><span className="text-[#c5a059]">FOB Transparency:</span> {selectedProduct.fobPricePaid}</p>
                  <p><span className="text-stone-500">Elevation:</span> {selectedProduct.elevation}</p>
                  <p><span className="text-stone-500">Process:</span> {selectedProduct.process}</p>
                  <p><span className="text-stone-500">Roast Profile:</span> {selectedProduct.roastLevel}</p>
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase text-stone-400 block mb-1">Grind Selection</label>
                  <select
                    value={modalGrind}
                    onChange={e => setModalGrind(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-stone-800 p-2 text-xs font-mono text-white outline-none focus:border-[#c5a059]"
                  >
                    <option value="Whole Bean">Whole Bean (Optimal Freshness)</option>
                    <option value="Filter / V60">Filter / V60 / Kalita</option>
                    <option value="AeroPress">AeroPress</option>
                    <option value="Espresso">Fine Espresso</option>
                    <option value="French Press">French Press / Cold Brew</option>
                  </select>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-stone-800">
                  <div>
                    <span className="text-base font-mono font-bold text-white">€{selectedProduct.priceEur.toFixed(2)}</span>
                    <span className="text-[10px] text-stone-400 block font-mono">approx ₹{selectedProduct.priceInr}</span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct, modalGrind, 1);
                      setSelectedProduct(null);
                    }}
                    className="px-5 py-2.5 bg-[#c5a059] hover:bg-[#d8b56d] text-black text-xs uppercase font-mono font-bold tracking-wider cursor-pointer"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-[#121212] border-l border-stone-800 h-full shadow-2xl flex flex-col justify-between p-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">Shopping Bag ({cartTotalCount})</h3>
              <button onClick={() => setCartDrawerOpen(false)} className="p-1 hover:text-[#c5a059] text-stone-400 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-center text-xs text-stone-500 py-12">Your shopping bag is empty.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="bg-[#181818] p-3 border border-stone-800 flex gap-3">
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-14 h-14 object-cover border border-stone-700" />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-white line-clamp-1">{item.product.name}</h4>
                      <p className="text-[10px] text-[#c5a059] font-mono mt-0.5">{item.grind}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-700 px-2 py-0.5 text-xs font-mono bg-stone-900">
                          <button onClick={() => updateCartQty(idx, -1)} className="cursor-pointer text-stone-400 hover:text-white">-</button>
                          <span className="px-2 text-white">{item.quantity}</span>
                          <button onClick={() => updateCartQty(idx, 1)} className="cursor-pointer text-stone-400 hover:text-white">+</button>
                        </div>
                        <span className="text-xs font-mono font-bold text-white">
                          €{(item.product.priceEur * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-stone-800 pt-4 space-y-3">
                <div className="space-y-1 text-xs font-mono">
                  <div className="flex justify-between text-stone-400">
                    <span>Subtotal:</span>
                    <b className="text-white">€{cartSubtotalEur.toFixed(2)} / ₹{cartSubtotalInr}</b>
                  </div>
                  <div className="flex justify-between text-[11px] text-stone-500">
                    <span>EU Dispatch:</span>
                    <span className="text-emerald-400">Free courier over €45</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d8b56d] text-black text-xs uppercase tracking-widest font-bold font-mono transition-colors cursor-pointer"
                >
                  Proceed to Checkout (WhatsApp Direct)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0e0e0e] border-t border-stone-800 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-white mb-3">BREW & BLOOM</h4>
            <p className="text-stone-400 font-light leading-relaxed">
              Onyx Coffee Lab EU European Recreation. Radical transparency, competition-grade single origins, and extraction science.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#c5a059] mb-3">Explore</h5>
            <ul className="space-y-2 text-stone-300 font-mono">
              <li><button onClick={() => setCurrentTab('shop')} className="hover:text-white cursor-pointer">Catalog & Blends</button></li>
              <li><button onClick={() => setCurrentTab('subscriptions')} className="hover:text-white cursor-pointer">Coffee Subscriptions</button></li>
              <li><button onClick={() => setCurrentTab('transparency')} className="hover:text-white cursor-pointer">FOB Pricing Ledger</button></li>
              <li><button onClick={() => setCurrentTab('brew-science')} className="hover:text-white cursor-pointer">Brew Science & V60</button></li>
              <li><button onClick={() => setCurrentTab('faq')} className="hover:text-white cursor-pointer">EU Shipping & FAQ</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#c5a059] mb-3">European Lab</h5>
            <p className="text-stone-400 leading-relaxed font-mono text-[11px]">
              Keizersgracht 482<br />
              1016 GD Amsterdam<br />
              Netherlands<br />
              +31 20 894 3400
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#c5a059] mb-3">Manifesto</h5>
            <p className="text-stone-400 font-light leading-relaxed">
              "Never Settle For Good Enough" is not a slogan—it is the agricultural, scientific, and sensory benchmark for every gram roasted.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-stone-800 flex flex-wrap justify-between gap-4 text-stone-500 font-mono text-[10px]">
          <span>© 2026 BREW & BLOOM / Onyx Coffee Lab EU Recreation</span>
          <span>Never Settle For Good Enough</span>
        </div>
      </footer>
    </div>
  );
};
