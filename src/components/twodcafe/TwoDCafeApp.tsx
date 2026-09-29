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
  HelpCircle,
  Building2,
  Calendar,
  Layers
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  TWOD_MENU,
  TWOD_FAQS,
  TwoDMenuItem
} from '../../data/twoDCafeData';

export type TwoDTab = 'home' | 'menu' | 'franchise' | 'faq' | 'contact';

interface CartItem {
  id: string;
  name: string;
  category: string;
  priceInr: number;
  quantity: number;
  imageUrl: string;
}

export const TwoDCafeApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TwoDTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Cart state
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'twod-comic-cheesecake',
      name: '2D Comic Outline Cheesecake',
      category: 'Comic Cakes & Bakes',
      priceInr: 340,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'twod-charcoal-latte',
      name: 'Signature Charcoal Monochrome Latte',
      category: 'Handcrafted Coffees',
      priceInr: 290,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  // Franchise Form state
  const [franchiseSent, setFranchiseSent] = useState(false);
  const [franchiseForm, setFranchiseForm] = useState({
    name: '',
    city: '',
    phone: '',
    investment: '₹25L - ₹40L',
    experience: ''
  });

  // Table reservation form state
  const [bookingSent, setBookingSent] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '2026-10-01',
    time: '04:00 PM'
  });

  const categories = useMemo(() => {
    const list = Array.from(new Set(TWOD_MENU.map(i => i.category)));
    return ['All', ...list];
  }, []);

  const filteredMenu = useMemo(() => {
    if (selectedCategory === 'All') return TWOD_MENU;
    return TWOD_MENU.filter(i => i.category === selectedCategory);
  }, [selectedCategory]);

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.priceInr * item.quantity, 0);
  }, [cart]);

  const addToCart = (item: TwoDMenuItem) => {
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
    const lines = cart.map(i => `• ${i.name} x${i.quantity} = ₹${i.priceInr * i.quantity}`).join('\n');
    const msg = `*BREW & BLOOM — 2D Cafe Order*\n\n${lines}\n\n*Total Bill:* ₹${cartTotal}\n\nPlease confirm table delivery / takeaway packing!`;
    window.open(`https://wa.me/919811200022?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#0c0c0c] font-['DM_Sans',sans-serif] selection:bg-[#0c0c0c] selection:text-[#ffffff]">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="2d-cafe" />

      {/* Comic Sketchbook Announcement Ticker */}
      <div className="bg-[#0c0c0c] text-[#f7f4ee] text-xs py-2 px-4 text-center font-bold tracking-widest uppercase flex items-center justify-center gap-3">
        <span>Step Inside India’s First 2D Comic Illusion Cafe</span>
        <span className="text-[#b8965a]">✦</span>
        <span>Connaught Place, New Delhi</span>
        <span className="text-[#b8965a]">✦</span>
        <span>Open Daily 11:00 AM – 11:00 PM</span>
      </div>

      {/* Comic Header with 2D Border styling */}
      <header className="sticky top-10 z-40 bg-[#f7f4ee]/95 backdrop-blur-md border-b-2 border-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 border-2 border-black shadow-[2px_2px_0px_#000]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <button
              onClick={() => setCurrentTab('home')}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-11 h-11 bg-black text-white flex items-center justify-center font-['Playfair_Display'] font-extrabold text-xl border-2 border-black shadow-[3px_3px_0px_#000000]">
                2D
              </div>
              <div>
                <span className="text-xl font-black font-['Playfair_Display'] tracking-wider block uppercase">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] tracking-widest uppercase text-stone-600 font-semibold block">
                  The Sketchbook of Flavours
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-bold">
            <button
              onClick={() => setCurrentTab('home')}
              className={`hover:text-[#b8965a] transition-colors cursor-pointer ${
                currentTab === 'home' ? 'text-[#b8965a] underline underline-offset-8 decoration-2' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('menu')}
              className={`hover:text-[#b8965a] transition-colors cursor-pointer ${
                currentTab === 'menu' ? 'text-[#b8965a] underline underline-offset-8 decoration-2' : ''
              }`}
            >
              Comic Menu
            </button>
            <button
              onClick={() => setCurrentTab('franchise')}
              className={`hover:text-[#b8965a] transition-colors cursor-pointer ${
                currentTab === 'franchise' ? 'text-[#b8965a] underline underline-offset-8 decoration-2' : ''
              }`}
            >
              Own a 2D Cafe
            </button>
            <button
              onClick={() => setCurrentTab('faq')}
              className={`hover:text-[#b8965a] transition-colors cursor-pointer ${
                currentTab === 'faq' ? 'text-[#b8965a] underline underline-offset-8 decoration-2' : ''
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setCurrentTab('contact')}
              className={`hover:text-[#b8965a] transition-colors cursor-pointer ${
                currentTab === 'contact' ? 'text-[#b8965a] underline underline-offset-8 decoration-2' : ''
              }`}
            >
              Visit & Reserve
            </button>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#000] transition-all cursor-pointer flex items-center gap-2 text-xs font-bold"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span className="hidden sm:inline">Order</span>
              <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] flex items-center justify-center font-bold">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f7f4ee] border-b-2 border-black p-4 space-y-3">
            {(['home', 'menu', 'franchise', 'faq', 'contact'] as TwoDTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setCurrentTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2.5 px-3 border-2 border-black font-bold uppercase text-xs tracking-wider ${
                  currentTab === tab ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                {tab === 'home'
                  ? 'Home'
                  : tab === 'menu'
                  ? 'Comic Menu'
                  : tab === 'franchise'
                  ? 'Own a 2D Cafe'
                  : tab === 'faq'
                  ? 'FAQ'
                  : 'Visit & Reserve'}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main>
        {/* TAB 1: HOME */}
        {currentTab === 'home' && (
          <div>
            {/* Hero Section with Sketchbook Frame */}
            <section className="relative py-16 sm:py-24 border-b-2 border-black overflow-hidden bg-[#f7f4ee]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block px-3 py-1 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-bold tracking-widest uppercase">
                    ✦ India’s First Hand-Drawn Monochromatic Cafe ✦
                  </div>

                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Playfair_Display'] tracking-tight leading-[1.08] text-black">
                    Step Inside the <span className="underline decoration-4 decoration-[#b8965a]">Sketchbook</span>
                  </h1>

                  <p className="text-stone-700 text-base sm:text-lg max-w-xl leading-relaxed">
                    Where real artisan coffees, cartoon cheesecakes, and comic outlines blur the boundaries between reality and illustration. Every single surface is hand-drawn to look like a living graphic novel.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      onClick={() => setCurrentTab('menu')}
                      className="px-6 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-bold border-2 border-black shadow-[4px_4px_0px_#b8965a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Explore Comic Menu</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentTab('contact')}
                      className="px-6 py-3.5 bg-white text-black text-xs uppercase tracking-widest font-bold border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                    >
                      Reserve a Table
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="p-3 bg-white border-4 border-black shadow-[8px_8px_0px_#000] rotate-1 hover:rotate-0 transition-transform">
                    <img
                      src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
                      alt="2D Comic Cake in hand drawn cafe"
                      className="w-full aspect-[4/3] object-cover border-2 border-black filter contrast-125"
                    />
                    <div className="mt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                      <span>Figure 01: Monochrome Cheesecake</span>
                      <span className="text-[#b8965a]">₹340</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Menu Teaser */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-black">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-stone-500 block mb-1">
                    Handcrafted Specialties
                  </span>
                  <h2 className="text-3xl font-black font-['Playfair_Display']">Signature Comic Creations</h2>
                </div>
                <button
                  onClick={() => setCurrentTab('menu')}
                  className="text-xs font-bold uppercase tracking-wider text-black hover:text-[#b8965a] flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Items ({TWOD_MENU.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TWOD_MENU.slice(0, 3).map(item => (
                  <div
                    key={item.id}
                    className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] overflow-hidden border-2 border-black mb-3 bg-stone-100">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover filter contrast-110"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider border border-white">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-base font-['Playfair_Display'] leading-snug">{item.name}</h3>
                      <p className="text-xs text-stone-600 mt-1.5 leading-relaxed line-clamp-2">{item.description}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between">
                      <span className="text-base font-extrabold font-mono">₹{item.priceInr}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider border border-black hover:bg-[#b8965a] hover:text-black transition-colors cursor-pointer"
                      >
                        + Add to Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: COMIC MENU */}
        {currentTab === 'menu' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8965a] block mb-2">
                All Day Delights
              </span>
              <h1 className="text-4xl font-black font-['Playfair_Display'] text-black mb-3">
                The Sketchbook Menu
              </h1>
              <p className="text-stone-600 text-sm">
                Each beverage and baked good is handcrafted in-house to match the whimsy and detail of our 2D comic interiors.
              </p>
            </div>

            {/* Category Filter Pills in 2D comic box style */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 border-2 border-black text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-black text-white shadow-[3px_3px_0px_#b8965a]'
                      : 'bg-white text-black hover:bg-stone-100 shadow-[2px_2px_0px_#000]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenu.map(item => (
                <div
                  key={item.id}
                  className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_#000] flex flex-col justify-between hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden border-2 border-black mb-3">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover filter contrast-110"
                      />
                      {item.popular && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 bg-[#b8965a] text-black text-[10px] font-black uppercase tracking-wider border border-black">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-base font-['Playfair_Display']">{item.name}</h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between">
                    <span className="text-base font-black font-mono">₹{item.priceInr}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3.5 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider border border-black hover:bg-[#b8965a] hover:text-black transition-colors cursor-pointer"
                    >
                      + Add Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: OWN A 2D CAFE (FRANCHISE) */}
        {currentTab === 'franchise' && (
          <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 bg-black text-white border-4 border-black shadow-[8px_8px_0px_#b8965a] mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8965a] block mb-2">
                Franchise Opportunities
              </span>
              <h1 className="text-3xl sm:text-5xl font-black font-['Playfair_Display'] mb-4">
                Bring 2D Cafe to Your City
              </h1>
              <p className="text-stone-300 text-sm leading-relaxed max-w-2xl">
                Partner with the viral cafe sensation that captures millions of social impressions daily. We provide turnkey architectural hand-drawn artwork, barista and bakery SOPs, equipment sourcing, and operational support.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000]">
              <h2 className="text-2xl font-bold font-['Playfair_Display'] mb-6">
                Franchise Partner Inquiry
              </h2>

              {franchiseSent ? (
                <div className="p-6 bg-emerald-50 border-2 border-black text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-bold text-lg">Thank You for Your Interest!</h3>
                  <p className="text-xs text-stone-600 max-w-md mx-auto">
                    Our expansion lead will review your application and send the 2D Cafe Franchise Prospectus via WhatsApp/Email within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    setFranchiseSent(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={franchiseForm.name}
                        onChange={e => setFranchiseForm({ ...franchiseForm, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b8965a]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Proposed City & Location
                      </label>
                      <input
                        type="text"
                        required
                        value={franchiseForm.city}
                        onChange={e => setFranchiseForm({ ...franchiseForm, city: e.target.value })}
                        placeholder="e.g. Indiranagar, Bengaluru"
                        className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b8965a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={franchiseForm.phone}
                        onChange={e => setFranchiseForm({ ...franchiseForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b8965a]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Investment Capacity
                      </label>
                      <select
                        value={franchiseForm.investment}
                        onChange={e => setFranchiseForm({ ...franchiseForm, investment: e.target.value })}
                        className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b8965a]"
                      >
                        <option>₹25L - ₹40L (Kiosk / Express)</option>
                        <option>₹40L - ₹65L (Full Cafe Dine-in)</option>
                        <option>₹65L+ (Flagship Experience Center)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                      Business or F&B Experience
                    </label>
                    <textarea
                      rows={3}
                      value={franchiseForm.experience}
                      onChange={e => setFranchiseForm({ ...franchiseForm, experience: e.target.value })}
                      placeholder="Tell us about your background or commercial properties owned..."
                      className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b8965a]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-black text-white text-xs uppercase tracking-widest font-bold border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-[#b8965a] hover:text-black transition-colors cursor-pointer"
                  >
                    Submit Franchise Application
                  </button>
                </form>
              )}
            </div>
          </section>
        )}

        {/* TAB 4: FAQ */}
        {currentTab === 'faq' && (
          <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8965a] block mb-2">
                Knowledge Base
              </span>
              <h1 className="text-4xl font-black font-['Playfair_Display']">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="space-y-4">
              {TWOD_FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_#000]"
                >
                  <h3 className="font-bold text-base font-['Playfair_Display'] text-black mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-mono">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs text-stone-700 pl-8 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 5: CONTACT & TABLE RESERVATION */}
        {currentTab === 'contact' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Store Details */}
              <div className="lg:col-span-5 bg-black text-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#b8965a] space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#b8965a] font-bold block mb-1">
                    Flagship Studio
                  </span>
                  <h2 className="text-3xl font-black font-['Playfair_Display']">2D Cafe Connaught Place</h2>
                </div>

                <div className="space-y-4 text-xs text-stone-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#b8965a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Address</strong>
                      <span>Block M, Outer Circle, Connaught Place, New Delhi, Delhi 110001</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#b8965a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Operating Hours</strong>
                      <span>Monday – Sunday: 11:00 AM – 11:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#b8965a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Direct Desk</strong>
                      <span>+91 98112 00022 / +91 11 4522 9900</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800">
                  <a
                    href="https://maps.google.com/?q=2D+Cafe+Connaught+Place+Delhi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider border border-white hover:bg-[#b8965a] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Table Booking Form */}
              <div className="lg:col-span-7 bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000]">
                <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-4">
                  Reserve a Comic Sketch Table
                </h3>
                <p className="text-xs text-stone-600 mb-6">
                  Skip the weekend queues! Book your preferred sketch table slot for photography, coffee, and dessert experiences.
                </p>

                {bookingSent ? (
                  <div className="p-6 bg-emerald-50 border-2 border-black text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-base">Table Reservation Confirmed!</h4>
                    <p className="text-xs text-stone-600">
                      We have reserved your table for {bookingForm.guests} on {bookingForm.date} at {bookingForm.time}. A confirmation SMS has been dispatched.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      setBookingSent(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          Guest Name
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingForm.name}
                          onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookingForm.phone}
                          onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          Party Size
                        </label>
                        <select
                          value={bookingForm.guests}
                          onChange={e => setBookingForm({ ...bookingForm, guests: e.target.value })}
                          className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none"
                        >
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>4 Guests</option>
                          <option>6+ Guests</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          required
                          value={bookingForm.date}
                          onChange={e => setBookingForm({ ...bookingForm, date: e.target.value })}
                          className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          Time Slot
                        </label>
                        <select
                          value={bookingForm.time}
                          onChange={e => setBookingForm({ ...bookingForm, time: e.target.value })}
                          className="w-full px-3 py-2 border-2 border-black text-xs font-medium focus:outline-none"
                        >
                          <option>12:00 PM</option>
                          <option>02:00 PM</option>
                          <option>04:00 PM</option>
                          <option>06:00 PM</option>
                          <option>08:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-black text-white text-xs uppercase tracking-widest font-bold border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-[#b8965a] hover:text-black transition-colors cursor-pointer"
                    >
                      Confirm Table Booking
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-[#f7f4ee] w-full max-w-md h-full flex flex-col justify-between border-l-4 border-black p-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  <h3 className="font-bold text-lg font-['Playfair_Display']">Your 2D Order</h3>
                </div>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-1 border-2 border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
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
                      className="p-3 bg-white border-2 border-black flex items-center justify-between gap-3 shadow-[2px_2px_0px_#000]"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-12 h-12 object-cover border border-black"
                        />
                        <div>
                          <h4 className="font-bold text-xs line-clamp-1">{item.name}</h4>
                          <span className="text-[11px] font-mono text-stone-600">
                            ₹{item.priceInr} each
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateCartQty(idx, -1)}
                          className="w-6 h-6 border border-black flex items-center justify-center hover:bg-stone-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold font-mono">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQty(idx, 1)}
                          className="w-6 h-6 border border-black flex items-center justify-center hover:bg-stone-100"
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
            <div className="pt-4 border-t-2 border-black space-y-3">
              <div className="flex items-center justify-between font-bold text-base">
                <span>Subtotal</span>
                <span className="font-mono">₹{cartTotal}</span>
              </div>
              <button
                disabled={cart.length === 0}
                onClick={handleCheckout}
                className="w-full py-3 bg-black text-white text-xs uppercase tracking-widest font-bold border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-[#b8965a] hover:text-black transition-colors cursor-pointer disabled:opacity-50"
              >
                Checkout with WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comic Footer */}
      <footer className="bg-black text-[#f7f4ee] border-t-4 border-black py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-white text-black font-extrabold flex items-center justify-center font-['Playfair_Display']">
                2D
              </div>
              <span className="font-bold text-lg font-['Playfair_Display'] tracking-wider">BREW & BLOOM</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Step into the sketchbook. India’s first illusion cafe serving freshly brewed coffees, bubble teas, and comic outline cakes.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#b8965a] mb-3">Explore</h4>
            <ul className="text-xs space-y-2 text-stone-400">
              <li><button onClick={() => setCurrentTab('menu')} className="hover:text-white">Comic Menu</button></li>
              <li><button onClick={() => setCurrentTab('franchise')} className="hover:text-white">Franchise Inquiry</button></li>
              <li><button onClick={() => setCurrentTab('faq')} className="hover:text-white">FAQ</button></li>
              <li><button onClick={() => setCurrentTab('contact')} className="hover:text-white">Table Booking</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#b8965a] mb-3">Visit</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Block M, Outer Circle<br />
              Connaught Place, New Delhi<br />
              Open Daily 11:00 AM – 11:00 PM
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#b8965a] mb-3">Contact</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              WhatsApp: +91 98112 00022<br />
              Desk: +91 11 4522 9900<br />
              hello@brewbloom.in
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-stone-800 text-[11px] text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 BREW & BLOOM — 2D Cafe Recreated Reference. All Rights Reserved.</span>
          <span>Designed with high-contrast comic sketchbook aesthetics.</span>
        </div>
      </footer>
    </div>
  );
};
