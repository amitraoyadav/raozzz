import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  X,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Coffee,
  Wine,
  UtensilsCrossed,
  CheckCircle2,
  Menu as MenuIcon,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  BREWED_MENU,
  BREWED_LOCATIONS,
  BrewedMenuItem,
  BrewedLocation
} from '../../data/brewedCoffeeData';

export type BrewedTab =
  | 'home'
  | 'menu'
  | 'food-menu'
  | 'locations'
  | 'liquor'
  | 'catering'
  | 'contact';

interface BrewedCartItem {
  id: string;
  name: string;
  category: string;
  priceUsd: number;
  priceInr: number;
  quantity: number;
  options?: string;
  imageUrl: string;
}

export const BrewedApp: React.FC = () => {
  const { setActiveView } = useApp();
  const [currentTab, setCurrentTab] = useState<BrewedTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<BrewedCartItem[]>([
    {
      id: 'brw-frozen-awakening',
      name: 'The Frozen Awakening',
      category: 'Frozen Drinks & Smoothies',
      priceUsd: 6.25,
      priceInr: 625,
      quantity: 1,
      options: 'Medium · Mocha & Caramel Whipped',
      imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg'
    }
  ]);
  const [pickupStore, setPickupStore] = useState('Cranston Location (Pontiac Ave)');

  // Selected item modal
  const [selectedItem, setSelectedItem] = useState<BrewedMenuItem | null>(null);
  const [itemSize, setItemSize] = useState('Medium (16 oz)');

  // Catering form
  const [cateringSent, setCateringSent] = useState(false);

  const cartTotalCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);
  const cartSubtotalUsd = useMemo(() => cart.reduce((sum, i) => sum + i.priceUsd * i.quantity, 0), [cart]);
  const cartSubtotalInr = useMemo(() => cart.reduce((sum, i) => sum + i.priceInr * i.quantity, 0), [cart]);

  const addToCart = (item: BrewedMenuItem, options = '', qty = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === item.id && i.options === options);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
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
          quantity: qty,
          options,
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
    const lines = cart
      .map(i => `• ${i.name} [${i.options || 'Regular'}] x${i.quantity} = $${(i.priceUsd * i.quantity).toFixed(2)} (₹${i.priceInr * i.quantity})`)
      .join('\n');
    const msg = `*BREW & BLOOM — Brewed Awakenings Order*\n\n*Pickup Store:* ${pickupStore}\n\n${lines}\n\n*Total:* $${cartSubtotalUsd.toFixed(2)} (approx ₹${cartSubtotalInr})\n\nPlease prepare for drive-thru pickup.`;
    window.open(`https://wa.me/14012750200?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#3c2415] font-['Inter',sans-serif] selection:bg-[#3c2415] selection:text-white">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="brewed-coffee-shop" />

      {/* Announcement Strip */}
      <div className="bg-[#3c2415] text-[#f7e8db] text-xs py-2 px-4 text-center font-bold tracking-wider uppercase">
        Rhode Island’s Premier Coffee Experience · Cranston, Warwick & Johnston Drive-Thrus
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3c2415] flex items-center justify-center text-white">
                <Coffee className="w-6 h-6 text-[#c07d3b]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#3c2415] uppercase block">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#c07d3b] block font-mono -mt-1">
                  Brewed Awakenings RI
                </span>
              </div>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-stone-800">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#c07d3b] cursor-pointer ${currentTab === 'home' ? 'text-[#c07d3b]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('menu')} className={`hover:text-[#c07d3b] cursor-pointer ${currentTab === 'menu' ? 'text-[#c07d3b]' : ''}`}>Drink Menu</button>
            <button onClick={() => setCurrentTab('food-menu')} className={`hover:text-[#c07d3b] cursor-pointer ${currentTab === 'food-menu' ? 'text-[#c07d3b]' : ''}`}>Food & Paninis</button>
            <button onClick={() => setCurrentTab('liquor')} className={`hover:text-[#c07d3b] cursor-pointer ${currentTab === 'liquor' ? 'text-[#c07d3b]' : ''}`}>Cocktails & Liquor</button>
            <button onClick={() => setCurrentTab('locations')} className={`hover:text-[#c07d3b] cursor-pointer ${currentTab === 'locations' ? 'text-[#c07d3b]' : ''}`}>Locations</button>
            <button onClick={() => setCurrentTab('catering')} className={`hover:text-[#c07d3b] cursor-pointer ${currentTab === 'catering' ? 'text-[#c07d3b]' : ''}`}>Catering</button>
            <button onClick={() => setCurrentTab('contact')} className={`hover:text-[#c07d3b] cursor-pointer ${currentTab === 'contact' ? 'text-[#c07d3b]' : ''}`}>Contact Us</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentTab('locations')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#3c2415] text-[#3c2415] hover:bg-[#3c2415] hover:text-white transition-colors text-xs font-bold rounded-lg cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Drive-Thrus</span>
            </button>
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#3c2415] text-white hover:bg-[#2a170c] transition-colors text-xs font-bold rounded-lg cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#c07d3b]" />
              <span>Order ({cartTotalCount})</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-3 text-xs uppercase tracking-wider font-bold text-stone-800">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c07d3b]">Home</button>
            <button onClick={() => { setCurrentTab('menu'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c07d3b]">Drink & Coffee Menu</button>
            <button onClick={() => { setCurrentTab('food-menu'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c07d3b]">Food, Paninis & Pastries</button>
            <button onClick={() => { setCurrentTab('liquor'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c07d3b]">Cocktails & Spirits</button>
            <button onClick={() => { setCurrentTab('locations'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c07d3b]">Cranston, Warwick, Johnston</button>
            <button onClick={() => { setCurrentTab('catering'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c07d3b]">Catering Services</button>
            <button onClick={() => { setCurrentTab('contact'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#c07d3b]">Contact Us</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <div className="space-y-16 pb-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-[#3c2415] via-[#4d301d] to-[#2a170c] text-white py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-[#c07d3b] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-md">
                  Serving Rhode Island Since 1996
                </span>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                  Rhode Island’s Premier Coffee House.
                </h1>
                <p className="text-stone-300 text-base font-light leading-relaxed max-w-lg">
                  BREW & BLOOM’s faithful Brewed Awakenings recreation. Sip our legendary Frozen Awakenings frappes, handcrafted lattes, fresh-baked muffins, and crispy hot paninis.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setCurrentTab('menu')}
                    className="px-6 py-3.5 bg-[#c07d3b] hover:bg-[#a6682c] text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    View Drink Menu
                  </button>
                  <button
                    onClick={() => setCurrentTab('locations')}
                    className="px-6 py-3.5 bg-white text-[#3c2415] hover:bg-stone-100 font-bold uppercase tracking-wider text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Find Drive-Thru Near You
                  </button>
                </div>
              </div>

              <div className="bg-white/10 border border-white/15 p-8 rounded-3xl backdrop-blur-xs text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#c07d3b]/20 flex items-center justify-center mx-auto text-[#c07d3b]">
                  <Coffee className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black">The Frozen Awakening</h3>
                <p className="text-xs text-stone-300 font-light max-w-sm mx-auto">
                  Our signature blended espresso frappe swirled with dark mocha, caramel, and topped with rich whipped cream.
                </p>
                <button
                  onClick={() => addToCart(BREWED_MENU[0], 'Medium · Whipped Cream')}
                  className="px-6 py-2.5 bg-white text-[#3c2415] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-stone-100 cursor-pointer"
                >
                  Order Ahead ($6.25)
                </button>
              </div>
            </div>
          </section>

          {/* Highlights Grid */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-2 mb-10">
              <span className="text-xs font-mono uppercase font-bold text-[#c07d3b] tracking-widest">Our Menus</span>
              <h2 className="text-3xl font-black text-[#3c2415]">Freshly Prepared In Our Kitchens Daily</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div
                onClick={() => setCurrentTab('menu')}
                className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-[#c07d3b] hover:shadow-lg transition-all cursor-pointer space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3c2415]/10 text-[#3c2415] flex items-center justify-center">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3c2415]">Coffee & Espresso</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Hot and iced lattes, caramel cloud macchiatos, nitro cold brew, and frozen frappes.
                </p>
                <span className="text-xs font-bold text-[#c07d3b] flex items-center gap-1">Browse Drinks →</span>
              </div>

              <div
                onClick={() => setCurrentTab('food-menu')}
                className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-[#c07d3b] hover:shadow-lg transition-all cursor-pointer space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3c2415]/10 text-[#3c2415] flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3c2415]">Food & Warm Paninis</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Breakfast sandwiches on ciabatta, Tuscan chicken pesto panini, and fresh baked jumbo muffins.
                </p>
                <span className="text-xs font-bold text-[#c07d3b] flex items-center gap-1">Browse Food →</span>
              </div>

              <div
                onClick={() => setCurrentTab('liquor')}
                className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-[#c07d3b] hover:shadow-lg transition-all cursor-pointer space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3c2415]/10 text-[#3c2415] flex items-center justify-center">
                  <Wine className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3c2415]">Cocktails & Spirits</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Spiked Bailey’s lattes, handcrafted espresso martinis, mimosas, and craft beers.
                </p>
                <span className="text-xs font-bold text-[#c07d3b] flex items-center gap-1">Browse Cocktails →</span>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW: DRINK MENU */}
      {currentTab === 'menu' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-[#c07d3b] tracking-widest">Handcrafted Drinks</span>
            <h2 className="text-3xl font-black text-[#3c2415]">Coffee, Espresso & Blended</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BREWED_MENU.filter(i => i.category.includes('Coffee') || i.category.includes('Frozen')).map(item => (
              <div key={item.id} className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-[#3c2415]">{item.name}</h3>
                    <span className="font-bold text-stone-900">${item.priceUsd.toFixed(2)}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#c07d3b] block">{item.category}</span>
                  <p className="text-xs text-stone-600 font-light">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-mono">approx ₹{item.priceInr}</span>
                  <button
                    onClick={() => addToCart(item, 'Medium')}
                    className="px-4 py-1.5 rounded-lg bg-[#3c2415] hover:bg-[#2a170c] text-white text-xs font-bold cursor-pointer"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: FOOD MENU */}
      {currentTab === 'food-menu' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-[#c07d3b] tracking-widest">Breakfast & Lunch</span>
            <h2 className="text-3xl font-black text-[#3c2415]">Hot Paninis, Bakery & Wraps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BREWED_MENU.filter(i => i.category.includes('Breakfast') || i.category.includes('Lunch')).map(item => (
              <div key={item.id} className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-[#3c2415]">{item.name}</h3>
                    <span className="font-bold text-stone-900">${item.priceUsd.toFixed(2)}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#c07d3b] block">{item.category}</span>
                  <p className="text-xs text-stone-600 font-light">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-mono">approx ₹{item.priceInr}</span>
                  <button
                    onClick={() => addToCart(item, 'Pressed Hot')}
                    className="px-4 py-1.5 rounded-lg bg-[#3c2415] hover:bg-[#2a170c] text-white text-xs font-bold cursor-pointer"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: COCKTAILS */}
      {currentTab === 'liquor' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-[#c07d3b] tracking-widest">21+ Bar</span>
            <h2 className="text-3xl font-black text-[#3c2415]">Spiked Coffee & Cocktails</h2>
            <p className="text-xs text-stone-500">Available for dine-in at our Cranston and Warwick locations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BREWED_MENU.filter(i => i.category.includes('Cocktails')).map(item => (
              <div key={item.id} className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-[#3c2415]">{item.name}</h3>
                    <span className="font-bold text-stone-900">${item.priceUsd.toFixed(2)}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#c07d3b] block">Handcrafted Cocktail</span>
                  <p className="text-xs text-stone-600 font-light">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-mono">approx ₹{item.priceInr}</span>
                  <button
                    onClick={() => addToCart(item, 'Dine-In Glass')}
                    className="px-4 py-1.5 rounded-lg bg-[#3c2415] hover:bg-[#2a170c] text-white text-xs font-bold cursor-pointer"
                  >
                    Order at Bar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: LOCATIONS */}
      {currentTab === 'locations' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-[#c07d3b] tracking-widest">Visit Rhode Island</span>
            <h2 className="text-3xl font-black text-[#3c2415]">Drive-Thru & Cafe Locations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BREWED_LOCATIONS.map(loc => (
              <div key={loc.id} className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-[#c07d3b]">{loc.town}</span>
                  <h3 className="text-xl font-bold text-stone-900">{loc.name}</h3>
                </div>

                <div className="space-y-1.5 text-xs text-stone-600 font-light">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#3c2415] shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#3c2415] shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#3c2415] shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setPickupStore(loc.name);
                      setCurrentTab('menu');
                    }}
                    className="px-4 py-1.5 rounded-lg bg-[#3c2415] hover:bg-[#2a170c] text-white text-xs font-bold cursor-pointer"
                  >
                    Select Store
                  </button>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#c07d3b] hover:underline"
                  >
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: CATERING */}
      {currentTab === 'catering' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-[#c07d3b] tracking-widest">Office & Event Catering</span>
            <h2 className="text-3xl font-black text-[#3c2415]">Brewed Awakenings Catering</h2>
            <p className="text-xs text-stone-600">Coffee boxes to-go, breakfast sandwich platters, and bakery platters for Rhode Island businesses.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200">
            {cateringSent ? (
              <div className="text-center py-10 space-y-2">
                <CheckCircle2 className="w-12 h-12 text-[#c07d3b] mx-auto" />
                <h4 className="text-xl font-bold">Catering Request Received</h4>
                <p className="text-xs text-stone-500">We will confirm your order within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setCateringSent(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Company / Name</label>
                    <input required type="text" className="w-full border border-stone-300 p-2.5 text-xs rounded-lg outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Email</label>
                    <input required type="email" className="w-full border border-stone-300 p-2.5 text-xs rounded-lg outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Delivery / Pickup Date</label>
                    <input required type="date" className="w-full border border-stone-300 p-2.5 text-xs rounded-lg outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Estimated Guests</label>
                    <input required type="number" placeholder="25" className="w-full border border-stone-300 p-2.5 text-xs rounded-lg outline-none" />
                  </div>
                </div>
                <button type="submit" className="w-full py-3 bg-[#3c2415] hover:bg-[#2a170c] text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer">
                  Submit Catering Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* VIEW: CONTACT */}
      {currentTab === 'contact' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-[#c07d3b] tracking-widest">Connect</span>
            <h2 className="text-3xl font-black text-[#3c2415]">Contact Brewed Care</h2>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200">
            <form onSubmit={e => { e.preventDefault(); alert("Feedback sent!"); }} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Name</label>
                <input required type="text" className="w-full border border-stone-300 p-2.5 text-xs rounded-lg outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Email</label>
                <input required type="email" className="w-full border border-stone-300 p-2.5 text-xs rounded-lg outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Message</label>
                <textarea required rows={4} className="w-full border border-stone-300 p-2.5 text-xs rounded-lg outline-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-[#3c2415] hover:bg-[#2a170c] text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div>
                <h3 className="font-bold text-lg text-[#3c2415]">Drive-Thru Order ({cartTotalCount})</h3>
                <p className="text-[10px] text-stone-500 font-mono">{pickupStore}</p>
              </div>
              <button onClick={() => setCartDrawerOpen(false)} className="p-1 hover:text-[#3c2415] text-stone-400 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-center text-xs text-stone-500 py-12">Your order is empty.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 p-3 rounded-xl border border-stone-200 flex gap-3">
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-stone-900">{item.name}</h4>
                      {item.options && <p className="text-[10px] text-[#c07d3b] font-mono">{item.options}</p>}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200 bg-white px-2 py-0.5 text-xs rounded-md">
                          <button onClick={() => updateCartQty(idx, -1)} className="cursor-pointer text-stone-400 hover:text-black">-</button>
                          <span className="px-2 font-bold">{item.quantity}</span>
                          <button onClick={() => updateCartQty(idx, 1)} className="cursor-pointer text-stone-400 hover:text-black">+</button>
                        </div>
                        <span className="text-xs font-bold text-stone-900">
                          ${(item.priceUsd * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-stone-200 pt-4 space-y-3">
                <div className="flex justify-between text-xs">
                  <span>Subtotal:</span>
                  <b className="text-stone-900">${cartSubtotalUsd.toFixed(2)} / ₹{cartSubtotalInr}</b>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-[#3c2415] hover:bg-[#2a170c] text-white text-xs uppercase tracking-wider font-bold rounded-xl cursor-pointer"
                >
                  Send Drive-Thru Order (WhatsApp)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2a170c] text-white py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-black text-sm tracking-wider uppercase mb-3">BREW & BLOOM</h4>
            <p className="text-stone-300 font-light leading-relaxed">
              Brewed Awakenings faithful Rhode Island recreation. Premier coffee house and drive-thru experience since 1996.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#c07d3b] mb-3">Locations</h5>
            <ul className="space-y-1.5 text-stone-300">
              <li>Cranston (1200 Pontiac Ave)</li>
              <li>Warwick (1316 Bald Hill Rd)</li>
              <li>Johnston (Cherry Hill Rd)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#c07d3b] mb-3">Explore</h5>
            <ul className="space-y-1.5 text-stone-300">
              <li><button onClick={() => setCurrentTab('menu')} className="hover:underline">Drink Menu</button></li>
              <li><button onClick={() => setCurrentTab('food-menu')} className="hover:underline">Paninis & Bakery</button></li>
              <li><button onClick={() => setCurrentTab('liquor')} className="hover:underline">Cocktails</button></li>
              <li><button onClick={() => setCurrentTab('catering')} className="hover:underline">Catering</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#c07d3b] mb-3">Cranston Flagship</h5>
            <p className="text-stone-300 leading-relaxed font-mono text-[11px]">
              1200 Pontiac Avenue<br />
              Cranston, RI 02920<br />
              (401) 275-0200
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-stone-800 flex justify-between text-stone-400 font-mono text-[10px]">
          <span>© 2026 BREW & BLOOM / Brewed Awakenings Recreation</span>
          <span>Rhode Island's Premier Coffee House</span>
        </div>
      </footer>
    </div>
  );
};
