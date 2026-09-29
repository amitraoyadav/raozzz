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
  Calendar,
  UtensilsCrossed,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Menu as MenuIcon,
  Heart,
  Users,
  CheckCircle2
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  RUBYS_MENU,
  RUBYS_LOCATIONS,
  RubysMenuItem,
  RubysLocation
} from '../../data/rubysCafeData';

export type RubyTab =
  | 'home'
  | 'menu'
  | 'locations'
  | 'reservations'
  | 'story'
  | 'catering'
  | 'gallery'
  | 'careers'
  | 'contact';

interface RubyCartItem {
  id: string;
  name: string;
  category: string;
  priceUsd: number;
  priceInr: number;
  quantity: number;
  instructions?: string;
  imageUrl: string;
}

export const RubysApp: React.FC = () => {
  const { setActiveView } = useApp();
  const [currentTab, setCurrentTab] = useState<RubyTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<RubyCartItem[]>([
    {
      id: 'ruby-bronte-burger',
      name: 'The Famous Bronte Burger',
      category: 'Burgers & Sandwiches',
      priceUsd: 19.50,
      priceInr: 1950,
      quantity: 1,
      instructions: 'Served with Fries and Sweet Chili Mayo',
      imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png'
    }
  ]);
  const [selectedPickupLoc, setSelectedPickupLoc] = useState('Little Ruby’s Mulberry (SoHo)');

  // Menu Category Filter
  const [activeMenuCat, setActiveMenuCat] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<RubysMenuItem | null>(null);

  // Reservation Form State
  const [resGuests, setResGuests] = useState('2 Guests');
  const [resDate, setResDate] = useState('Tonight, 7:30 PM');
  const [resLocation, setResLocation] = useState('Little Ruby’s Mulberry (SoHo)');
  const [resConfirmed, setResConfirmed] = useState(false);

  // Catering & Contact
  const [formSubmitted, setFormSubmitted] = useState(false);

  const cartTotalCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);
  const cartSubtotalUsd = useMemo(() => cart.reduce((sum, i) => sum + i.priceUsd * i.quantity, 0), [cart]);
  const cartSubtotalInr = useMemo(() => cart.reduce((sum, i) => sum + i.priceInr * i.quantity, 0), [cart]);

  const filteredMenuItems = useMemo(() => {
    if (activeMenuCat === 'All') return RUBYS_MENU;
    return RUBYS_MENU.filter(i => i.category === activeMenuCat);
  }, [activeMenuCat]);

  const addToCart = (item: RubysMenuItem, instructions = '', qty = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === item.id && i.instructions === instructions);
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
          instructions,
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
      .map(i => `• ${i.name} x${i.quantity} = $${(i.priceUsd * i.quantity).toFixed(2)} (₹${i.priceInr * i.quantity})`)
      .join('\n');
    const msg = `*BREW & BLOOM — Ruby’s Cafe Order*\n\n*Location:* ${selectedPickupLoc}\n\n${lines}\n\n*Total:* $${cartSubtotalUsd.toFixed(2)} (approx ₹${cartSubtotalInr})\n\nPlease prepare for table/pickup service.`;
    window.open(`https://wa.me/12129255755?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#2c2825] font-['Inter',sans-serif] selection:bg-[#a0322b] selection:text-white">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="rubys-cafe" />

      {/* Top Banner */}
      <div className="bg-[#a0322b] text-white text-xs py-2 px-4 text-center font-serif tracking-wider flex items-center justify-center gap-3">
        <span>AUSTRALIAN ALL-DAY CAFE & DINING · SOHO, EAST VILLAGE, WEST VILLAGE & DALLAS</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#f4f1eb]/95 backdrop-blur-md border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#a0322b] uppercase block">
                BREW & BLOOM
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-stone-600 font-mono -mt-1 block">
                Little Ruby’s Cafe
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold text-stone-800">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#a0322b] transition-colors cursor-pointer ${currentTab === 'home' ? 'text-[#a0322b] font-black' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('menu')} className={`hover:text-[#a0322b] transition-colors cursor-pointer ${currentTab === 'menu' ? 'text-[#a0322b] font-black' : ''}`}>Menus</button>
            <button onClick={() => setCurrentTab('locations')} className={`hover:text-[#a0322b] transition-colors cursor-pointer ${currentTab === 'locations' ? 'text-[#a0322b] font-black' : ''}`}>Locations</button>
            <button onClick={() => setCurrentTab('reservations')} className={`hover:text-[#a0322b] transition-colors cursor-pointer ${currentTab === 'reservations' ? 'text-[#a0322b] font-black' : ''}`}>Reservations</button>
            <button onClick={() => setCurrentTab('story')} className={`hover:text-[#a0322b] transition-colors cursor-pointer ${currentTab === 'story' ? 'text-[#a0322b] font-black' : ''}`}>Our Story</button>
            <button onClick={() => setCurrentTab('catering')} className={`hover:text-[#a0322b] transition-colors cursor-pointer ${currentTab === 'catering' ? 'text-[#a0322b] font-black' : ''}`}>Catering & Events</button>
            <button onClick={() => setCurrentTab('gallery')} className={`hover:text-[#a0322b] transition-colors cursor-pointer ${currentTab === 'gallery' ? 'text-[#a0322b] font-black' : ''}`}>Gallery</button>
            <button onClick={() => setCurrentTab('contact')} className={`hover:text-[#a0322b] transition-colors cursor-pointer ${currentTab === 'contact' ? 'text-[#a0322b] font-black' : ''}`}>Contact</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentTab('reservations')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-[#a0322b] text-[#a0322b] hover:bg-[#a0322b] hover:text-white transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Resy Table</span>
            </button>
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 bg-[#a0322b] text-white hover:bg-[#852720] transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order ({cartTotalCount})</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f4f1eb] border-b border-stone-300 px-6 py-4 space-y-3 text-xs uppercase tracking-widest font-bold text-stone-800">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#a0322b]">Home</button>
            <button onClick={() => { setCurrentTab('menu'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#a0322b]">Menus (Bronte & Hotcakes)</button>
            <button onClick={() => { setCurrentTab('locations'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#a0322b]">Neighborhood Locations</button>
            <button onClick={() => { setCurrentTab('reservations'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#a0322b]">Resy Reservations</button>
            <button onClick={() => { setCurrentTab('story'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#a0322b]">Our Story & Bondi Heritage</button>
            <button onClick={() => { setCurrentTab('catering'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#a0322b]">Catering & Events</button>
            <button onClick={() => { setCurrentTab('gallery'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#a0322b]">Atmosphere Gallery</button>
            <button onClick={() => { setCurrentTab('careers'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#a0322b]">Careers</button>
            <button onClick={() => { setCurrentTab('contact'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#a0322b]">Contact Us</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <div className="space-y-20 pb-24">
          {/* Hero Banner */}
          <section className="py-20 sm:py-28 px-4 sm:px-6 text-center bg-[#eae4d9] border-b border-stone-300">
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#a0322b] font-bold block">
                Since 2003 · Mulberry Street, SoHo
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-tight">
                Little Ruby’s Cafe
              </h1>
              <p className="text-stone-700 text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
                BREW & BLOOM’s faithful Ruby’s Cafe recreation. Savor our famous Bronte Burger, fluffy Ricotta Hotcakes, and flat whites in a warm, relaxed neighborhood atmosphere.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setCurrentTab('menu')}
                  className="px-8 py-3.5 bg-[#a0322b] hover:bg-[#852720] text-white font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                >
                  Explore All Menus
                </button>
                <button
                  onClick={() => setCurrentTab('reservations')}
                  className="px-8 py-3.5 border border-stone-800 text-stone-900 hover:bg-white font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                >
                  Book on Resy
                </button>
              </div>
            </div>
          </section>

          {/* Iconic Signatures Spotlight */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-2 mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#a0322b]">Signature Icons</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">What Little Ruby’s is Famous For</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-stone-200 space-y-4 hover:border-[#a0322b] transition-all">
                <div className="aspect-[4/3] bg-stone-100 flex items-center justify-center text-[#a0322b]">
                  <UtensilsCrossed className="w-12 h-12" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#a0322b] font-bold">Iconic Burger</span>
                <h3 className="font-serif text-2xl font-bold">The Bronte Burger</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Premium seasoned beef, tomato, lettuce, sweet chili sauce, house mayo, and melted Swiss on toasted ciabatta.
                </p>
                <div className="pt-2 flex justify-between items-center border-t border-stone-100">
                  <span className="font-mono font-bold">$19.50</span>
                  <button
                    onClick={() => addToCart(RUBYS_MENU[4])}
                    className="text-xs font-bold text-[#a0322b] uppercase tracking-wider hover:underline cursor-pointer"
                  >
                    Add to Order →
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 border border-stone-200 space-y-4 hover:border-[#a0322b] transition-all">
                <div className="aspect-[4/3] bg-stone-100 flex items-center justify-center text-[#a0322b]">
                  <Sparkles className="w-12 h-12" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#a0322b] font-bold">Breakfast Icon</span>
                <h3 className="font-serif text-2xl font-bold">Ricotta Hotcakes</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Light and fluffy hotcakes with honeycomb butter, warm Nutella, fresh sliced banana, and pure maple syrup.
                </p>
                <div className="pt-2 flex justify-between items-center border-t border-stone-100">
                  <span className="font-mono font-bold">$18.00</span>
                  <button
                    onClick={() => addToCart(RUBYS_MENU[0])}
                    className="text-xs font-bold text-[#a0322b] uppercase tracking-wider hover:underline cursor-pointer"
                  >
                    Add to Order →
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 border border-stone-200 space-y-4 hover:border-[#a0322b] transition-all">
                <div className="aspect-[4/3] bg-stone-100 flex items-center justify-center text-[#a0322b]">
                  <Coffee className="w-12 h-12" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#a0322b] font-bold">Aussie Coffee Craft</span>
                <h3 className="font-serif text-2xl font-bold">Australian Flat White</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Authentic double ristretto shots topped with micro-foamed milk with silky texture and velvety crema.
                </p>
                <div className="pt-2 flex justify-between items-center border-t border-stone-100">
                  <span className="font-mono font-bold">$5.50</span>
                  <button
                    onClick={() => addToCart(RUBYS_MENU[10])}
                    className="text-xs font-bold text-[#a0322b] uppercase tracking-wider hover:underline cursor-pointer"
                  >
                    Add to Order →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Locations Quick Strip */}
          <section className="bg-white py-16 border-t border-b border-stone-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-serif text-3xl font-bold">Our Neighborhoods</h3>
                  <p className="text-xs text-stone-600">Six locations across Manhattan, Brooklyn, and Uptown Dallas.</p>
                </div>
                <button
                  onClick={() => setCurrentTab('locations')}
                  className="text-xs font-bold text-[#a0322b] uppercase tracking-wider hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Locations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                {RUBYS_LOCATIONS.map(loc => (
                  <div
                    key={loc.id}
                    onClick={() => {
                      setSelectedPickupLoc(loc.name);
                      setCurrentTab('locations');
                    }}
                    className="p-4 bg-stone-50 border border-stone-200 hover:border-[#a0322b] cursor-pointer transition-colors"
                  >
                    <h4 className="font-serif font-bold text-sm">{loc.neighborhood}</h4>
                    <p className="text-[10px] text-stone-500 font-mono mt-1">{loc.city}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW: MENUS */}
      {currentTab === 'menu' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a0322b]">Little Ruby’s Kitchen</span>
            <h2 className="font-serif text-4xl font-bold">All Day Menus</h2>
            <p className="text-stone-600 text-sm max-w-lg mx-auto">
              Fresh, locally sourced ingredients prepared in the sunny Australian cafe tradition.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-stone-300 pb-4">
            {['All', 'Breakfast & Bowls', 'Burgers & Sandwiches', 'Pasta & Mains', 'Salads & Sides', 'Coffee & Beverages', 'Cocktails & Wine'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveMenuCat(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeMenuCat === cat
                    ? 'bg-[#a0322b] text-white'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMenuItems.map(item => (
              <div
                key={item.id}
                className="bg-white p-6 border border-stone-200 hover:border-stone-400 flex flex-col justify-between transition-all"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-xl font-bold text-stone-900">{item.name}</h3>
                    <span className="font-mono text-base font-bold text-stone-900">${item.priceUsd.toFixed(2)}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#a0322b] block">{item.category}</span>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-mono">approx ₹{item.priceInr}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 bg-[#a0322b] hover:bg-[#852720] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: LOCATIONS */}
      {currentTab === 'locations' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a0322b]">Visit Us</span>
            <h2 className="font-serif text-4xl font-bold">Locations in NYC & Dallas</h2>
            <p className="text-stone-600 text-sm max-w-lg mx-auto">
              Find hours, directions, and reservation links for each Little Ruby’s location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RUBYS_LOCATIONS.map(loc => (
              <div key={loc.id} className="bg-white p-6 border border-stone-200 space-y-4 hover:border-[#a0322b] transition-all">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-[#a0322b]">{loc.neighborhood} · {loc.city}</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">{loc.name}</h3>
                </div>

                <div className="space-y-2 text-xs text-stone-600 font-light">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#a0322b] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#a0322b] shrink-0 mt-0.5" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#a0322b] shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setResLocation(loc.name);
                      setCurrentTab('reservations');
                    }}
                    className="px-4 py-2 bg-[#a0322b] hover:bg-[#852720] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Resy Table
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPickupLoc(loc.name);
                      setCurrentTab('menu');
                    }}
                    className="text-xs font-bold text-stone-800 hover:text-[#a0322b] uppercase tracking-wider cursor-pointer"
                  >
                    Order Ahead →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: RESERVATIONS */}
      {currentTab === 'reservations' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a0322b]">Book a Table</span>
            <h2 className="font-serif text-4xl font-bold">Resy Reservations</h2>
            <p className="text-stone-600 text-sm">
              We reserve a portion of tables for walk-ins at every location, but reservations are recommended for peak dining hours.
            </p>
          </div>

          <div className="bg-white p-8 border border-stone-200 space-y-6">
            {resConfirmed ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#a0322b] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-stone-900">Table Reservation Confirmed</h3>
                <p className="text-xs text-stone-600 font-mono">
                  {resGuests} at {resLocation} on {resDate}
                </p>
                <button
                  onClick={() => setResConfirmed(false)}
                  className="mt-4 px-6 py-2 bg-[#a0322b] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setResConfirmed(true); }} className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Select Location</label>
                  <select
                    value={resLocation}
                    onChange={e => setResLocation(e.target.value)}
                    className="w-full border border-stone-300 p-3 text-xs outline-none bg-stone-50"
                  >
                    {RUBYS_LOCATIONS.map(l => (
                      <option key={l.id} value={l.name}>{l.name} — {l.address}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Party Size</label>
                    <select
                      value={resGuests}
                      onChange={e => setResGuests(e.target.value)}
                      className="w-full border border-stone-300 p-3 text-xs outline-none bg-stone-50"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests (Large Party)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Time & Seating</label>
                    <select
                      value={resDate}
                      onChange={e => setResDate(e.target.value)}
                      className="w-full border border-stone-300 p-3 text-xs outline-none bg-stone-50"
                    >
                      <option>Tonight, 6:00 PM</option>
                      <option>Tonight, 7:30 PM</option>
                      <option>Tonight, 8:45 PM</option>
                      <option>Tomorrow, 11:30 AM (Brunch)</option>
                      <option>Tomorrow, 1:00 PM (Brunch)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Guest Name</label>
                    <input required type="text" placeholder="e.g. Sarah Jenkins" className="w-full border border-stone-300 p-3 text-xs outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Phone Number</label>
                    <input required type="tel" placeholder="(212) 555-0199" className="w-full border border-stone-300 p-3 text-xs outline-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#a0322b] hover:bg-[#852720] text-white font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                >
                  Confirm Reservation via Resy
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* VIEW: STORY */}
      {currentTab === 'story' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a0322b]">Our Roots</span>
            <h2 className="font-serif text-4xl font-bold">Little Ruby’s Journey</h2>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              Bringing the warmth of Australia’s beachside cafes to New York City and Dallas.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 border border-stone-200 space-y-6 text-stone-700 leading-relaxed font-light text-sm">
            <p>
              Little Ruby’s first opened its doors in 2003 as a tiny 25-seat cafe tucked onto Mulberry Street in Nolita/SoHo. Founded by Australian expats craving the relaxed coastal atmosphere of Bondi Beach, the cafe quickly became a neighborhood institution for local artists, creatives, and discerning food lovers.
            </p>
            <p>
              From our famous Bronte Burger on toasted ciabatta to our ricotta hotcakes drenched in honeycomb butter, we believe dining should feel like visiting old friends in their sun-drenched beach apartment.
            </p>
            <p>
              Two decades later, Little Ruby’s has expanded to five iconic New York neighborhoods and Uptown Dallas—each unique, but all rooted in the same Australian hospitality and unwavering commitment to fresh, comforting food.
            </p>
          </div>
        </div>
      )}

      {/* VIEW: CATERING & EVENTS */}
      {currentTab === 'catering' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a0322b]">Private Gatherings</span>
            <h2 className="font-serif text-4xl font-bold">Catering & Private Events</h2>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              Celebrate your birthday, brand launch, or rehearsal dinner with Ruby’s signature cocktail and dinner menus.
            </p>
          </div>

          <div className="bg-white p-8 border border-stone-200">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#a0322b] mx-auto" />
                <h3 className="font-serif text-2xl font-bold">Inquiry Received</h3>
                <p className="text-xs text-stone-600">Our events director will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Contact Name</label>
                    <input required type="text" className="w-full border border-stone-300 p-3 text-xs outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Email</label>
                    <input required type="email" className="w-full border border-stone-300 p-3 text-xs outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Event Date</label>
                    <input required type="date" className="w-full border border-stone-300 p-3 text-xs outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Estimated Guests</label>
                    <input required type="number" placeholder="20" className="w-full border border-stone-300 p-3 text-xs outline-none" />
                  </div>
                </div>
                <button type="submit" className="w-full py-4 bg-[#a0322b] hover:bg-[#852720] text-white font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer">
                  Submit Event Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* VIEW: GALLERY */}
      {currentTab === 'gallery' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a0322b]">Atmosphere</span>
            <h2 className="font-serif text-4xl font-bold">Moments at Ruby’s</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'SoHo Mulberry Dining Room',
              'Fluffy Ricotta Hotcakes & Honeycomb',
              'The Bronte Burger on Ciabatta',
              'Rigatoni Alla Vodka with Hand-Dipped Ricotta',
              'Australian Flat White & Croissants',
              'Espresso Martini & Aperol Cocktails'
            ].map((caption, idx) => (
              <div key={idx} className="bg-white border border-stone-200 p-4 space-y-2">
                <div className="aspect-square bg-stone-100 flex items-center justify-center text-stone-400">
                  <UtensilsCrossed className="w-10 h-10 text-[#a0322b]/40" />
                </div>
                <p className="text-xs font-serif font-bold text-center text-stone-800">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: CONTACT & CAREERS */}
      {(currentTab === 'contact' || currentTab === 'careers') && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a0322b]">Get In Touch</span>
            <h2 className="font-serif text-4xl font-bold">Little Ruby’s Care & Careers</h2>
            <p className="text-stone-600 text-sm">
              We are always on the lookout for friendly front-of-house staff, baristas, and talented line cooks.
            </p>
          </div>

          <div className="bg-white p-8 border border-stone-200">
            <form onSubmit={e => { e.preventDefault(); alert("Message sent to Ruby's team!"); }} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Your Name</label>
                <input required type="text" className="w-full border border-stone-300 p-3 text-xs outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Email</label>
                <input required type="email" className="w-full border border-stone-300 p-3 text-xs outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-stone-700 block mb-1">Message / Role Applied For</label>
                <textarea required rows={4} className="w-full border border-stone-300 p-3 text-xs outline-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-[#a0322b] hover:bg-[#852720] text-white font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-[#f4f1eb] h-full shadow-2xl flex flex-col justify-between p-6">
            <div className="flex items-center justify-between border-b border-stone-300 pb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Your Order ({cartTotalCount})</h3>
                <p className="text-[10px] text-stone-500 font-mono mt-0.5">{selectedPickupLoc}</p>
              </div>
              <button onClick={() => setCartDrawerOpen(false)} className="p-1 hover:text-[#a0322b] text-stone-400 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-center text-xs text-stone-500 py-12">Your order is empty.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="bg-white p-3.5 border border-stone-200 flex gap-3">
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-stone-900 line-clamp-1">{item.name}</h4>
                      {item.instructions && <p className="text-[10px] text-stone-500 font-mono">{item.instructions}</p>}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200 px-2 py-0.5 text-xs font-mono">
                          <button onClick={() => updateCartQty(idx, -1)} className="cursor-pointer text-stone-500 hover:text-black">-</button>
                          <span className="px-2 font-bold">{item.quantity}</span>
                          <button onClick={() => updateCartQty(idx, 1)} className="cursor-pointer text-stone-500 hover:text-black">+</button>
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
              <div className="border-t border-stone-300 pt-4 space-y-3">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal:</span>
                    <b className="text-stone-900">${cartSubtotalUsd.toFixed(2)} / ₹{cartSubtotalInr}</b>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-[#a0322b] hover:bg-[#852720] text-white text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer shadow-lg"
                >
                  Send Order to Ruby’s (WhatsApp Direct)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#241c19] text-[#f4f1eb] py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase mb-3">BREW & BLOOM</h4>
            <p className="text-stone-400 font-light leading-relaxed">
              Little Ruby’s Cafe faithful recreation. Australian neighborhood dining since 2003.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-stone-400 mb-3">Locations</h5>
            <ul className="space-y-1.5 text-stone-300">
              <li>SoHo (219 Mulberry St)</li>
              <li>East Village (435 E 9th St)</li>
              <li>West Village (225 W 4th St)</li>
              <li>Murray Hill (442 3rd Ave)</li>
              <li>Williamsburg (107 N 3rd St)</li>
              <li>Dallas Uptown (2305 Cedar Springs)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-stone-400 mb-3">Explore</h5>
            <ul className="space-y-1.5 text-stone-300">
              <li><button onClick={() => setCurrentTab('menu')} className="hover:underline">Menus</button></li>
              <li><button onClick={() => setCurrentTab('reservations')} className="hover:underline">Resy Reservations</button></li>
              <li><button onClick={() => setCurrentTab('catering')} className="hover:underline">Private Events</button></li>
              <li><button onClick={() => setCurrentTab('story')} className="hover:underline">Our Story</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-stone-400 mb-3">SoHo Flagship</h5>
            <p className="text-stone-400 leading-relaxed font-mono text-[11px]">
              219 Mulberry Street<br />
              New York, NY 10012<br />
              (212) 925-5755
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-stone-800 flex justify-between text-stone-500 font-mono text-[10px]">
          <span>© 2026 BREW & BLOOM / Little Ruby’s Cafe Recreation</span>
          <span>Australian All-Day Cafe</span>
        </div>
      </footer>
    </div>
  );
};
