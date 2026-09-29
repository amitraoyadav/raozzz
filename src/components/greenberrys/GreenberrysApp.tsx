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
  Award,
  BookOpen
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  GREENBERRYS_ITEMS,
  GreenberrysItem
} from '../../data/greenberrysData';

export type GreenberrysTab = 'home' | 'coffee' | 'drinks' | 'food' | 'story' | 'locations';

interface CartItem {
  id: string;
  name: string;
  category: string;
  priceUsd: number;
  priceInr: number;
  quantity: number;
  imageUrl: string;
}

export const GreenberrysApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<GreenberrysTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'gb-monticello-blend',
      name: 'Monticello Blend (Medium Roast)',
      category: 'Craft Roasted Beans',
      priceUsd: 16.95,
      priceInr: 1695,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'gb-nitro-cold-brew',
      name: 'Signature Nitro Cold Brew',
      category: 'Nitro & Cold Brew',
      priceUsd: 5.75,
      priceInr: 575,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const cartTotalUsd = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.priceUsd * i.quantity, 0);
  }, [cart]);

  const cartTotalInr = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.priceInr * i.quantity, 0);
  }, [cart]);

  const addToCart = (item: GreenberrysItem) => {
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
    const msg = `*BREW & BLOOM — Greenberry's Order*\n\n${lines}\n\n*Total:* $${cartTotalUsd.toFixed(2)} (approx ₹${cartTotalInr})\n\nPlease prepare for pickup at Elliewood Ave Charlottesville!`;
    window.open(`https://wa.me/14349844808?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1d3557] font-['Inter',sans-serif] selection:bg-[#1d3557] selection:text-white">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="greenberrys" />

      {/* Top Heritage Ribbon */}
      <div className="bg-[#1d3557] text-[#f1faee] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span>Charlottesville’s Hometown Coffee Roaster Since 1992</span>
        <span className="text-[#e63946]">✦</span>
        <span>Craft Hand-Roasted Coffee & Nitro on Draft</span>
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
              <div className="w-10 h-10 rounded-full bg-[#1d3557] text-white flex items-center justify-center font-serif font-black text-xl">
                G
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#1d3557] block font-serif">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] tracking-widest uppercase text-stone-500 font-semibold block">
                  Greenberry’s Coffee Roasters
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button
              onClick={() => setCurrentTab('home')}
              className={`hover:text-[#1d3557] transition-colors cursor-pointer ${
                currentTab === 'home' ? 'text-[#1d3557] border-b-2 border-[#1d3557] pb-1' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('coffee')}
              className={`hover:text-[#1d3557] transition-colors cursor-pointer ${
                currentTab === 'coffee' ? 'text-[#1d3557] border-b-2 border-[#1d3557] pb-1' : ''
              }`}
            >
              Our Coffee
            </button>
            <button
              onClick={() => setCurrentTab('drinks')}
              className={`hover:text-[#1d3557] transition-colors cursor-pointer ${
                currentTab === 'drinks' ? 'text-[#1d3557] border-b-2 border-[#1d3557] pb-1' : ''
              }`}
            >
              Our Drinks
            </button>
            <button
              onClick={() => setCurrentTab('food')}
              className={`hover:text-[#1d3557] transition-colors cursor-pointer ${
                currentTab === 'food' ? 'text-[#1d3557] border-b-2 border-[#1d3557] pb-1' : ''
              }`}
            >
              Our Food
            </button>
            <button
              onClick={() => setCurrentTab('story')}
              className={`hover:text-[#1d3557] transition-colors cursor-pointer ${
                currentTab === 'story' ? 'text-[#1d3557] border-b-2 border-[#1d3557] pb-1' : ''
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => setCurrentTab('locations')}
              className={`hover:text-[#1d3557] transition-colors cursor-pointer ${
                currentTab === 'locations' ? 'text-[#1d3557] border-b-2 border-[#1d3557] pb-1' : ''
              }`}
            >
              Visit Us
            </button>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer relative"
            >
              <ShoppingBag className="w-5 h-5 text-[#1d3557]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#e63946] text-white text-[11px] font-bold flex items-center justify-center">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 p-4 space-y-2">
            {(['home', 'coffee', 'drinks', 'food', 'story', 'locations'] as GreenberrysTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setCurrentTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  currentTab === tab ? 'bg-[#1d3557] text-white' : 'hover:bg-stone-100'
                }`}
              >
                {tab === 'home'
                  ? 'Home'
                  : tab === 'coffee'
                  ? 'Our Coffee'
                  : tab === 'drinks'
                  ? 'Our Drinks'
                  : tab === 'food'
                  ? 'Our Food'
                  : tab === 'story'
                  ? 'Our Story'
                  : 'Visit Us'}
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
            <section className="relative bg-[#1d3557] text-white py-16 sm:py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-stone-200">
                    <span className="w-2 h-2 rounded-full bg-[#e63946]" />
                    <span>Charlottesville, Virginia Born & Roasted</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-black font-serif tracking-tight leading-tight">
                    Small Batch Coffee, <br />Big Heart.
                  </h1>

                  <p className="text-stone-300 text-base sm:text-lg max-w-xl leading-relaxed">
                    Craft roasted in Virginia since 1992. Experience handcrafted coffees, nitro cold brews, flaky pastries, and warm Southern hospitality.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      onClick={() => setCurrentTab('coffee')}
                      className="px-6 py-3.5 bg-[#e63946] hover:bg-[#c92a37] text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>Explore Our Coffee</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentTab('drinks')}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Draft Nitro & Drinks
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
                      alt="Greenberry's Fresh Roasted Coffee Bag"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#e63946]">
                        Virginia Flagship
                      </span>
                      <h3 className="font-bold text-lg font-serif">Monticello Blend</h3>
                      <p className="text-xs text-stone-300">Hand Roasted · Sweet Pecan & Milk Chocolate</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-500 block mb-1">
                    Roasted to Order
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1d3557]">Our Signature Roasts</h2>
                </div>
                <button
                  onClick={() => setCurrentTab('coffee')}
                  className="text-xs font-bold uppercase tracking-wider text-[#e63946] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Coffees</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {GREENBERRYS_ITEMS.filter(i => i.category === 'Craft Roasted Beans').map(item => (
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
                        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1d3557] text-white">
                          {item.roast} Roast
                        </span>
                      </div>
                      <h3 className="font-bold text-base font-serif text-[#1d3557]">{item.name}</h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-base font-black font-mono text-stone-900">
                        ${item.priceUsd.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#1d3557] text-white text-xs font-bold hover:bg-[#e63946] transition-colors cursor-pointer"
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

        {/* TAB 2: OUR COFFEE */}
        {currentTab === 'coffee' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#e63946] block mb-1">
                Small-Batch Craft
              </span>
              <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#1d3557] mb-3">
                Fresh Roasted Whole Beans
              </h1>
              <p className="text-stone-600 text-sm">
                Carefully selected Arabica beans from the world's most renowned growing regions, slow roasted in Charlottesville.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GREENBERRYS_ITEMS.filter(i => i.category === 'Craft Roasted Beans').map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <img src={item.imageUrl} alt={item.name} className="w-full aspect-[4/3] rounded-lg object-cover mb-4" />
                    <span className="text-[10px] uppercase font-bold text-[#e63946] tracking-wider block mb-1">{item.roast} Roast</span>
                    <h3 className="font-bold text-base font-serif text-[#1d3557]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-base font-black font-mono">${item.priceUsd.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#1d3557] text-white text-xs font-bold hover:bg-[#e63946] transition-colors cursor-pointer"
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: OUR DRINKS */}
        {currentTab === 'drinks' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#e63946] block mb-1">
                Cold on Tap & Steamed to Perfection
              </span>
              <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#1d3557] mb-3">
                Nitro Cold Brew & Signature Drinks
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GREENBERRYS_ITEMS.filter(i => i.category === 'Nitro & Cold Brew' || i.category === 'Signature Lattes & Teas').map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <img src={item.imageUrl} alt={item.name} className="w-full aspect-[4/3] rounded-lg object-cover mb-4" />
                    <span className="text-[10px] uppercase font-bold text-[#e63946] tracking-wider block mb-1">{item.category}</span>
                    <h3 className="font-bold text-base font-serif text-[#1d3557]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-base font-black font-mono">${item.priceUsd.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#1d3557] text-white text-xs font-bold hover:bg-[#e63946] transition-colors cursor-pointer"
                    >
                      + Order Drink
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 4: OUR FOOD */}
        {currentTab === 'food' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#e63946] block mb-1">
                Scratch Bakery & Breakfast
              </span>
              <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#1d3557] mb-3">
                Buttermilk Scones & Breakfast Sandwiches
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GREENBERRYS_ITEMS.filter(i => i.category === 'Bakery & Breakfast').map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover shrink-0" />
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#e63946] tracking-wider block">{item.category}</span>
                    <h3 className="font-bold text-base font-serif text-[#1d3557]">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">{item.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-base font-black font-mono">${item.priceUsd.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 rounded-lg bg-[#1d3557] text-white text-xs font-bold hover:bg-[#e63946] transition-colors cursor-pointer"
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

        {/* TAB 5: OUR STORY */}
        {currentTab === 'story' && (
          <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 bg-[#1d3557] text-white rounded-2xl shadow-xl space-y-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e63946]">
                Charlottesville Since 1992
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black">Born on Elliewood Avenue</h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                Founded by Sean and Roxanne Simmons in 1992 just steps from the University of Virginia grounds, Greenberry’s began with a simple commitment: roast coffee in small batches with personal care, and serve every neighbor like family.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
                <Award className="w-8 h-8 text-[#e63946] mb-3" />
                <h3 className="font-bold text-base font-serif text-[#1d3557] mb-2">Hand Roasting Philosophy</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We roast our beans by sight, smell, and sound, listening for the second crack to ensure optimal caramelized sugars and balanced acidity.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
                <BookOpen className="w-8 h-8 text-[#e63946] mb-3" />
                <h3 className="font-bold text-base font-serif text-[#1d3557] mb-2">Community Cornerstone</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  From study sessions to morning dog walks, our cafes remain gathering places for Charlottesville locals, students, and travelers.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* TAB 6: LOCATIONS */}
        {currentTab === 'locations' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#e63946] block mb-1">
                Store Directory
              </span>
              <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#1d3557] mb-3">
                Visit Our Virginia & Regional Cafes
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Elliewood Ave (Flagship)', addr: '107 Elliewood Ave, Charlottesville, VA 22903', hours: 'Mon - Sun: 6:30 AM – 7:00 PM', phone: '(434) 984-4808' },
                { name: 'Barracks Road', addr: '1049 Millmont St, Charlottesville, VA 22903', hours: 'Mon - Sun: 7:00 AM – 6:00 PM', phone: '(434) 984-4809' },
                { name: 'McLean / Tysons', addr: '6839 Old Dominion Dr, McLean, VA 22101', hours: 'Mon - Sat: 6:30 AM – 5:00 PM', phone: '(703) 448-8408' }
              ].map((loc, i) => (
                <div key={i} className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-3">
                  <h3 className="font-bold text-lg font-serif text-[#1d3557]">{loc.name}</h3>
                  <p className="text-xs text-stone-600 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#e63946] shrink-0 mt-0.5" />
                    <span>{loc.addr}</span>
                  </p>
                  <p className="text-xs text-stone-600 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1d3557] shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                  <p className="text-xs text-stone-600 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#1d3557] shrink-0" />
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
                  <ShoppingBag className="w-5 h-5 text-[#1d3557]" />
                  <h3 className="font-bold text-lg font-serif text-[#1d3557]">Your Greenberry's Order</h3>
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
                          <h4 className="font-bold text-xs text-[#1d3557] line-clamp-1">{item.name}</h4>
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
                className="w-full py-3 bg-[#1d3557] hover:bg-[#e63946] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                Checkout with WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1d3557] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg font-serif mb-3">BREW & BLOOM</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Greenberry’s Coffee Roasters faithful recreation. Hand roasted small-batch coffees in Charlottesville VA since 1992.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e63946] mb-3">Favorites</h4>
            <ul className="text-xs space-y-2 text-stone-300">
              <li>Monticello Blend</li>
              <li>Shenandoah Dark Roast</li>
              <li>Nitro Cold Brew</li>
              <li>Honey Lavender Macchiato</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e63946] mb-3">Virginia Roastery</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              107 Elliewood Ave<br />
              Charlottesville, VA 22903
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e63946] mb-3">Contact</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Phone: (434) 984-4808<br />
              coffee@brewbloom.in
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-[11px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 BREW & BLOOM — Greenberry’s Coffee Recreated Reference.</span>
          <span>Craft small-batch roastery.</span>
        </div>
      </footer>
    </div>
  );
};
