import React, { useState, useMemo } from 'react';
import {
  Coffee,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ChevronRight,
  ExternalLink,
  Search,
  X,
  Check,
  Calendar,
  Users,
  MessageSquare,
  Sparkles,
  ShoppingBag,
  Star,
  ArrowRight,
  Menu as MenuIcon,
  Plus,
  Minus,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { SWEET_COFFEE_WEBSITE, SWEET_COFFEE_CATEGORIES, SweetCoffeeCategory } from '../../data/sweetCoffeeData';
import { useApp } from '../../context/AppContext';

export const SweetCoffeeApp: React.FC = () => {
  const { setActiveView } = useApp();

  // Navigation sub-views: 'home' | 'menu' | 'story' | 'experience' | 'celebrations' | 'visit' | 'karaoke'
  const [currentTab, setCurrentTab] = useState<'home' | 'menu' | 'story' | 'experience' | 'celebrations' | 'visit' | 'karaoke'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  // Booking Modal
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'Table' | 'Celebration' | 'Group'>('Table');
  const [bookDate, setBookDate] = useState('2026-10-01');
  const [bookTime, setBookTime] = useState('18:30');
  const [bookGuests, setBookGuests] = useState(2);
  const [bookName, setBookName] = useState('');
  const [bookPhone, setBookPhone] = useState('');
  const [bookNotes, setBookNotes] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Menu Search & Filter
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<string>('all');
  const [menuSearch, setMenuSearch] = useState('');

  // Cart / Direct WhatsApp Order
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [customerAddress, setCustomerAddress] = useState('');

  // Smart Coffee Concierge
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [conciergeInput, setConciergeInput] = useState('');
  const [conciergeResponse, setConciergeResponse] = useState<string>('Try a quick prompt or describe what you feel like having.');

  // Newsletter subscribe
  const [subName, setSubName] = useState('');
  const [subPhone, setSubPhone] = useState('');
  const [subDone, setSubDone] = useState(false);

  // Add / Remove from Cart
  const addToCart = (itemName: string) => {
    setCart(prev => ({ ...prev, [itemName]: (prev[itemName] || 0) + 1 }));
  };

  const removeFromCart = (itemName: string) => {
    setCart(prev => {
      const next = { ...prev };
      if (next[itemName] > 1) {
        next[itemName] -= 1;
      } else {
        delete next[itemName];
      }
      return next;
    });
  };

  const cartTotalCount = useMemo(() => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }, [cart]);

  const allItemsList = useMemo(() => {
    return SWEET_COFFEE_CATEGORIES.flatMap(cat => cat.items.map(item => ({ ...item, categoryId: cat.id, categoryTitle: cat.title })));
  }, []);

  const cartTotalPrice = useMemo(() => {
    let sum = 0;
    Object.entries(cart).forEach(([itemName, qty]) => {
      const found = allItemsList.find(i => i.name === itemName);
      if (found) {
        sum += found.price * qty;
      }
    });
    return sum;
  }, [cart, allItemsList]);

  // Send WhatsApp Order
  const handleSendWhatsAppOrder = () => {
    if (cartTotalCount === 0) return;
    const itemsLines = Object.entries(cart).map(([name, qty]) => {
      const found = allItemsList.find(i => i.name === name);
      return `• ${name} x${qty} - ₹${(found ? found.price : 0) * qty}`;
    }).join('\n');

    const msg = `*New Order - Sweet Coffee (Sidhi)*\n\n${itemsLines}\n\n*Total Amount:* ₹${cartTotalPrice}\n*Delivery / Pickup Note:* ${customerAddress || 'Dine-in / Pickup'}\n\nPlease confirm my order. Thank you!`;
    const url = `https://wa.me/917415596400?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  // Submit Table Booking
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookPhone) return;
    setBookingSuccess(true);
    const msg = `*Table Reservation Request - Sweet Coffee (Sidhi)*\n\n*Type:* ${bookingType}\n*Date:* ${bookDate}\n*Time:* ${bookTime}\n*Guests:* ${bookGuests}\n*Name:* ${bookName}\n*Phone:* ${bookPhone}\n*Notes:* ${bookNotes || 'None'}\n\nPlease confirm availability. Thank you!`;
    setTimeout(() => {
      window.open(`https://wa.me/917415596400?text=${encodeURIComponent(msg)}`, '_blank');
    }, 600);
  };

  // Concierge recommendations
  const handleConciergeAsk = (query: string) => {
    setConciergeInput(query);
    const q = query.toLowerCase();
    if (q.includes('cheesy') || q.includes('spicy')) {
      setConciergeResponse('We recommend the White Sauce Pasta (₹149) or Veggie Grilled Sandwich (₹119) paired with Cheese Maggi (₹79)!');
    } else if (q.includes('coffee') || q.includes('snack')) {
      setConciergeResponse('Try our signature Dalgona Coffee (₹129) alongside Garlic Bread (₹89) or Classic Cold Coffee (₹99)!');
    } else if (q.includes('150') || q.includes('budget') || q.includes('cheap')) {
      setConciergeResponse('Under ₹150: Dalgona Coffee (₹129), White Sauce Pasta (₹149), or Masala Tea (₹30) + Veg Sandwich (₹79)!');
    } else {
      setConciergeResponse(`Great pick! From our 108 menu items, try our fresh Dalgona Coffee (₹129) and White Sauce Pasta (₹149).`);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf3] text-[#1a1613] font-['Manrope',system-ui,sans-serif] selection:bg-[#bf8547] selection:text-white">
      {/* Top Bar for AI Studio Navigation / Dashboard Backlink */}
      <div className="bg-[#21140f] text-[#f4e8d5] text-xs py-2 px-4 border-b border-[#302018] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold tracking-wide">Sweet Coffee · Official Website</span>
          <span className="text-[#bf8547] hidden sm:inline">|</span>
          <span className="text-slate-300 hidden sm:inline text-[11px]">Stadium Road, Sidhi, MP</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveView('dashboard')}
            className="text-[11px] font-bold px-2.5 py-1 bg-[#bf8547] hover:bg-[#d9aa72] text-[#21140f] rounded-lg transition-colors cursor-pointer"
          >
            ← Back to Dashboard
          </button>
          <button
            onClick={() => setActiveView('home')}
            className="text-[11px] text-slate-300 hover:text-white underline cursor-pointer"
          >
            RaoSitez Home
          </button>
        </div>
      </div>

      {/* Top Brand Offer Ticker */}
      <div className="bg-[#bf8547] text-[#21140f] text-[11px] font-extrabold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>MORE THAN COFFEE</span>
        <span>·</span>
        <span>100% PURE VEG CAFÉ</span>
        <span>·</span>
        <span>SIDHI, MADHYA PRADESH</span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#fffaf3]/95 backdrop-blur-md border-b border-[#21140f]/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <button
            onClick={() => setCurrentTab('home')}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <img
              src="/assets/sweet-coffee/logo.webp"
              alt="Sweet Coffee logo"
              className="w-12 h-12 rounded-full object-cover bg-[#21140f] shadow-sm border border-[#302018]"
            />
            <div>
              <b className="font-['Poiret_One'] text-2xl sm:text-3xl font-black tracking-wider text-[#21140f] leading-none block">
                SWEET COFFEE
              </b>
              <small className="text-[9px] font-extrabold tracking-[0.25em] text-[#bf8547] block mt-1">
                MORE THAN COFFEE.
              </small>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-[#1a1613]">
            <button
              onClick={() => setCurrentTab('home')}
              className={`hover:text-[#bf8547] transition-colors py-1 cursor-pointer ${currentTab === 'home' ? 'text-[#bf8547] border-b-2 border-[#bf8547]' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('menu')}
              className={`hover:text-[#bf8547] transition-colors py-1 cursor-pointer ${currentTab === 'menu' ? 'text-[#bf8547] border-b-2 border-[#bf8547]' : ''}`}
            >
              Menu (108 Items)
            </button>
            <button
              onClick={() => setCurrentTab('experience')}
              className={`hover:text-[#bf8547] transition-colors py-1 cursor-pointer ${currentTab === 'experience' ? 'text-[#bf8547] border-b-2 border-[#bf8547]' : ''}`}
            >
              Experience
            </button>
            <button
              onClick={() => setCurrentTab('karaoke')}
              className="hover:text-[#bf8547] transition-colors py-1 cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>Karaoke Nights</span>
            </button>
            <button
              onClick={() => setCurrentTab('celebrations')}
              className={`hover:text-[#bf8547] transition-colors py-1 cursor-pointer ${currentTab === 'celebrations' ? 'text-[#bf8547] border-b-2 border-[#bf8547]' : ''}`}
            >
              Celebrations
            </button>
            <button
              onClick={() => setCurrentTab('story')}
              className={`hover:text-[#bf8547] transition-colors py-1 cursor-pointer ${currentTab === 'story' ? 'text-[#bf8547] border-b-2 border-[#bf8547]' : ''}`}
            >
              Our Story
            </button>
            <button
              onClick={() => setCurrentTab('visit')}
              className={`hover:text-[#bf8547] transition-colors py-1 cursor-pointer ${currentTab === 'visit' ? 'text-[#bf8547] border-b-2 border-[#bf8547]' : ''}`}
            >
              Visit
            </button>
          </nav>

          {/* Action CTAs: Book Table & Cart */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#21140f]/20 hover:border-[#21140f] text-xs font-bold transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#bf8547]" />
              <span>Book a Table</span>
            </button>

            <button
              onClick={() => setCartDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#21140f] hover:bg-[#302018] text-[#f4e8d5] text-xs font-bold shadow-md transition-all cursor-pointer relative"
            >
              <ShoppingBag className="w-4 h-4 text-[#bf8547]" />
              <span className="hidden xs:inline">Order</span>
              {cartTotalCount > 0 && (
                <span className="bg-[#bf8547] text-[#21140f] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {cartTotalCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#21140f] hover:bg-slate-100 rounded-xl cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#21140f] text-[#f4e8d5] px-6 py-6 border-b border-[#302018] space-y-4 animate-fadeIn">
            <div className="grid grid-cols-2 gap-3 text-sm font-['Poiret_One'] font-black">
              <button
                onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }}
                className="text-left py-2 border-b border-white/10 hover:text-[#bf8547]"
              >
                01. Home
              </button>
              <button
                onClick={() => { setCurrentTab('menu'); setMobileMenuOpen(false); }}
                className="text-left py-2 border-b border-white/10 hover:text-[#bf8547]"
              >
                02. Full Menu (108)
              </button>
              <button
                onClick={() => { setCurrentTab('experience'); setMobileMenuOpen(false); }}
                className="text-left py-2 border-b border-white/10 hover:text-[#bf8547]"
              >
                03. Experience
              </button>
              <button
                onClick={() => { setCurrentTab('celebrations'); setMobileMenuOpen(false); }}
                className="text-left py-2 border-b border-white/10 hover:text-[#bf8547]"
              >
                04. Celebrations
              </button>
              <button
                onClick={() => { setCurrentTab('story'); setMobileMenuOpen(false); }}
                className="text-left py-2 border-b border-white/10 hover:text-[#bf8547]"
              >
                05. Our Story
              </button>
              <button
                onClick={() => { setCurrentTab('visit'); setMobileMenuOpen(false); }}
                className="text-left py-2 border-b border-white/10 hover:text-[#bf8547]"
              >
                06. Visit & Timings
              </button>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { setBookingModalOpen(true); setMobileMenuOpen(false); }}
                className="w-full py-3 bg-[#bf8547] text-[#21140f] font-bold text-xs rounded-xl"
              >
                Book a Table Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ===================== VIEW 1: HOME PAGE ===================== */}
      {currentTab === 'home' && (
        <main>
          {/* Cinematic Hero Section */}
          <section className="relative min-h-[620px] sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-[#21140f] text-white">
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/sweet-coffee/hero.webp"
                alt="Sweet Coffee café atmosphere"
                className="w-full h-full object-cover opacity-45 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21140f] via-[#21140f]/60 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#bf8547] uppercase mb-4">
                SIDHI · MADHYA PRADESH
              </p>
              <h1 className="font-['Poiret_One'] text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-[#fffaf3]">
                SWEET COFFEE
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#d9aa72] mt-2 font-medium">
                More Than Coffee.
              </p>
              <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                A café built around good food, warm corners, conversations and everyday moments worth repeating. Located on Stadium Road, Sidhi.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setCurrentTab('menu')}
                  className="px-8 py-3.5 bg-[#bf8547] hover:bg-[#d9aa72] text-[#21140f] text-xs font-black uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
                >
                  Explore Full Menu →
                </button>
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="px-7 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs font-bold rounded-full transition-all cursor-pointer"
                >
                  Book a Table
                </button>
                <button
                  onClick={() => setCartDrawerOpen(true)}
                  className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-[#d9aa72] border border-[#d9aa72]/30 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Order Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Hero Proof Badge */}
              <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center text-xs">
                <div>
                  <strong className="block text-2xl sm:text-3xl font-black text-[#d9aa72]">108</strong>
                  <span className="text-slate-400 text-[11px]">Menu listings</span>
                </div>
                <div>
                  <strong className="block text-2xl sm:text-3xl font-black text-emerald-400">100% Veg</strong>
                  <span className="text-slate-400 text-[11px]">Café menu</span>
                </div>
                <div>
                  <strong className="block text-2xl sm:text-3xl font-black text-[#fffaf3]">20 Mar 2026</strong>
                  <span className="text-slate-400 text-[11px]">Opened in Sidhi</span>
                </div>
              </div>
            </div>
          </section>

          {/* Rotating Brand Ribbon */}
          <section className="bg-[#302018] text-[#d9aa72] py-3 overflow-hidden border-y border-[#573727]">
            <div className="flex items-center gap-8 whitespace-nowrap animate-marquee text-xs font-bold tracking-widest uppercase">
              <span>#SweetCoffee</span>
              <span>·</span>
              <span>#MoreThanCoffee</span>
              <span>·</span>
              <span>#SidhiCafe</span>
              <span>·</span>
              <span>#100PercentVeg</span>
              <span>·</span>
              <span>#SweetCoffee</span>
              <span>·</span>
              <span>#MoreThanCoffee</span>
              <span>·</span>
              <span>#DalgonaCoffee</span>
              <span>·</span>
              <span>#SweetCoffee</span>
            </div>
          </section>

          {/* Section: What Brings You Here? (3 Moment Cards) */}
          <section className="py-20 bg-[#f7f0e6] border-b border-[#21140f]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <p className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
                  WHAT BRINGS YOU HERE?
                </p>
                <h2 className="font-['Poiret_One'] text-3xl sm:text-5xl font-black text-[#21140f] mt-1">
                  Different moods. One Sweet Coffee.
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-[#72675f] leading-relaxed">
                  Choose the path that matches what you need right now — a quick craving, time at the café, or a celebration worth planning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Moment 1 */}
                <div
                  onClick={() => setCurrentTab('menu')}
                  className="bg-white rounded-3xl p-8 border border-[#21140f]/10 hover:border-[#bf8547] hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#bf8547]">01</span>
                    <small className="block text-[10px] font-extrabold uppercase tracking-widest text-[#72675f] mt-2">
                      I'M HUNGRY NOW
                    </small>
                    <h3 className="font-['Poiret_One'] text-2xl font-bold text-[#21140f] mt-2 group-hover:text-[#bf8547] transition-colors">
                      Quick craving.
                    </h3>
                    <p className="mt-2 text-xs text-[#72675f] leading-relaxed">
                      Jump straight to direct ordering for takeout or delivery in Sidhi.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#bf8547]">
                    <span>Order now</span>
                    <span>↗</span>
                  </div>
                </div>

                {/* Moment 2 */}
                <div
                  onClick={() => setCurrentTab('visit')}
                  className="bg-white rounded-3xl p-8 border border-[#21140f]/10 hover:border-[#bf8547] hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#bf8547]">02</span>
                    <small className="block text-[10px] font-extrabold uppercase tracking-widest text-[#72675f] mt-2">
                      I WANT TO STAY
                    </small>
                    <h3 className="font-['Poiret_One'] text-2xl font-bold text-[#21140f] mt-2 group-hover:text-[#bf8547] transition-colors">
                      Find your corner.
                    </h3>
                    <p className="mt-2 text-xs text-[#72675f] leading-relaxed">
                      Plan a café visit, meet-up, or casual work session in our peaceful Sidhi space.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#bf8547]">
                    <span>Visit Sweet Coffee</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Moment 3 */}
                <div
                  onClick={() => setCurrentTab('celebrations')}
                  className="bg-white rounded-3xl p-8 border border-[#21140f]/10 hover:border-[#bf8547] hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#bf8547]">03</span>
                    <small className="block text-[10px] font-extrabold uppercase tracking-widest text-[#72675f] mt-2">
                      I'M PLANNING SOMETHING
                    </small>
                    <h3 className="font-['Poiret_One'] text-2xl font-bold text-[#21140f] mt-2 group-hover:text-[#bf8547] transition-colors">
                      Make it a moment.
                    </h3>
                    <p className="mt-2 text-xs text-[#72675f] leading-relaxed">
                      Birthdays, reunions, gatherings and reserved celebration tables.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#bf8547]">
                    <span>Plan a celebration</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Founder & Story Split */}
          <section className="py-20 bg-[#fffaf3] border-b border-[#21140f]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#21140f]">
                  <img
                    src="/assets/sweet-coffee/founder.webp"
                    alt="Shlok Chauhan, founder of Sweet Coffee"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#21140f]/90 backdrop-blur-md text-[#f4e8d5] p-3.5 rounded-2xl flex items-center justify-between text-xs border border-white/10">
                    <div>
                      <b className="block text-sm font-bold text-white">Shlok Chauhan</b>
                      <span className="text-[11px] text-[#d9aa72]">Founder · Sweet Coffee</span>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded bg-[#bf8547] text-[#21140f] font-black uppercase">
                      Sidhi, MP
                    </span>
                  </div>
                </div>

                {/* Text Copy */}
                <div className="space-y-6">
                  <p className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
                    OUR STORY
                  </p>
                  <h2 className="font-['Poiret_One'] text-3xl sm:text-5xl font-black text-[#21140f] leading-tight">
                    A two-year vision.<br />
                    <em className="font-serif italic font-normal text-[#bf8547]">Finally brought to life.</em>
                  </h2>
                  <p className="text-sm text-[#72675f] leading-relaxed">
                    Sweet Coffee was founded by Shlok Chauhan after carrying the idea for nearly two years — researching the market, studying customer behaviour, refining the menu, thinking through pricing, space, branding and the kind of café experience Sidhi could genuinely connect with.
                  </p>
                  <blockquote className="p-4 bg-[#f7f0e6] border-l-4 border-[#bf8547] text-sm italic font-serif text-[#21140f] leading-relaxed rounded-r-2xl">
                    “The goal was never to open just another café. It was to build a place people would remember after they left.”
                  </blockquote>
                  <p className="text-sm text-[#72675f] leading-relaxed">
                    After repeated research, planning, testing and refinement, Sweet Coffee finally became operational on 20 March 2026. What started as an idea became a growing café brand built around food, comfort, digital convenience and a very clear identity: More Than Coffee.
                  </p>
                  <button
                    onClick={() => setCurrentTab('story')}
                    className="inline-flex items-center gap-2 text-xs font-black text-[#bf8547] hover:text-[#21140f] transition-colors cursor-pointer"
                  >
                    <span>Read the complete story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Signatures in Focus (3 Large Cards) */}
          <section className="py-20 bg-[#f7f0e6] border-b border-[#21140f]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <p className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
                  SIGNATURES IN FOCUS
                </p>
                <h2 className="font-['Poiret_One'] text-3xl sm:text-5xl font-black text-[#21140f] mt-1">
                  A few favourites deserve the camera.
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-[#72675f]">
                  The full menu stays fast and text-first. Selected favourites get large imagery on the homepage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Signature 1 */}
                <div className="bg-white rounded-3xl overflow-hidden border border-[#21140f]/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
                  <div className="relative h-64 overflow-hidden bg-[#21140f]">
                    <img
                      src="/assets/sweet-coffee/dalgona-coffee.webp"
                      alt="Dalgona Coffee"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#21140f]/90 text-[#d9aa72] text-[10px] font-black uppercase tracking-wider">
                      Cold Coffee · BESTSELLER
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-['Poiret_One'] text-2xl font-black text-[#21140f]">
                        Dalgona Coffee
                      </h3>
                      <p className="text-xs text-[#72675f] mt-2 leading-relaxed">
                        Chilled coffee crowned with a velvety whipped coffee layer for a rich café-style sip.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <strong className="text-xl font-black text-[#21140f]">₹129</strong>
                      <button
                        onClick={() => addToCart('Dalgona Coffee')}
                        className="px-4 py-2 bg-[#21140f] hover:bg-[#bf8547] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Signature 2 */}
                <div className="bg-white rounded-3xl overflow-hidden border border-[#21140f]/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
                  <div className="relative h-64 overflow-hidden bg-[#21140f]">
                    <img
                      src="/assets/sweet-coffee/veggie-sandwich.webp"
                      alt="Veggie Grilled Sandwich"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#21140f]/90 text-[#d9aa72] text-[10px] font-black uppercase tracking-wider">
                      Sandwich · BESTSELLER
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-['Poiret_One'] text-2xl font-black text-[#21140f]">
                        Veggie Grilled Sandwich
                      </h3>
                      <p className="text-xs text-[#72675f] mt-2 leading-relaxed">
                        Freshly prepared with soft bread, flavourful filling and balanced seasoning.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <strong className="text-xl font-black text-[#21140f]">₹119</strong>
                      <button
                        onClick={() => addToCart('Veggie Grilled Sandwich')}
                        className="px-4 py-2 bg-[#21140f] hover:bg-[#bf8547] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Signature 3 */}
                <div className="bg-white rounded-3xl overflow-hidden border border-[#21140f]/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
                  <div className="relative h-64 overflow-hidden bg-[#21140f]">
                    <img
                      src="/assets/sweet-coffee/white-sauce-pasta.webp"
                      alt="White Sauce Pasta"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#21140f]/90 text-[#d9aa72] text-[10px] font-black uppercase tracking-wider">
                      Pasta · BESTSELLER
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-['Poiret_One'] text-2xl font-black text-[#21140f]">
                        White Sauce Pasta
                      </h3>
                      <p className="text-xs text-[#72675f] mt-2 leading-relaxed">
                        Pasta coated in a smooth, creamy white sauce with balanced herbs and seasoning.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <strong className="text-xl font-black text-[#21140f]">₹149</strong>
                      <button
                        onClick={() => addToCart('White Sauce Pasta')}
                        className="px-4 py-2 bg-[#21140f] hover:bg-[#bf8547] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => setCurrentTab('menu')}
                  className="px-8 py-3.5 bg-[#21140f] hover:bg-[#bf8547] text-[#fffaf3] text-xs font-black uppercase tracking-wider rounded-full shadow-md transition-colors cursor-pointer"
                >
                  View the complete 108-item menu →
                </button>
              </div>
            </div>
          </section>

          {/* Section: The Craving Index (15 Categories) */}
          <section className="py-20 bg-[#fffaf3] border-b border-[#21140f]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <p className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
                  THE CRAVING INDEX
                </p>
                <h2 className="font-['Poiret_One'] text-3xl sm:text-5xl font-black text-[#21140f] mt-1">
                  Pick a mood. Find the menu.
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-[#72675f]">
                  Every category is one click away — a visual navigation layer built with typography instead of more images.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                {SWEET_COFFEE_CATEGORIES.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedMenuCategory(cat.id);
                      setCurrentTab('menu');
                    }}
                    className="p-4 rounded-2xl bg-white border border-[#21140f]/10 hover:border-[#bf8547] hover:bg-[#f7f0e6] transition-all text-left group cursor-pointer"
                  >
                    <span className="text-[10px] font-mono text-[#bf8547] font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <strong className="block text-sm font-bold text-[#21140f] mt-1 group-hover:text-[#bf8547] transition-colors truncate">
                      {cat.title}
                    </strong>
                    <div className="flex items-center justify-between text-[11px] text-[#72675f] mt-1">
                      <span>{cat.itemsCount} items</span>
                      <span className="text-[#bf8547] font-bold">↗</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Experience Stage */}
          <section className="relative py-28 bg-[#21140f] text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/sweet-coffee/experience.webp"
                alt="Sweet Coffee experience"
                className="w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#21140f] via-[#21140f]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
              <p className="text-xs font-bold text-[#d9aa72] uppercase tracking-widest">
                THE SWEET COFFEE EXPERIENCE
              </p>
              <h2 className="font-['Poiret_One'] text-4xl sm:text-6xl font-black text-[#fffaf3]">
                Come for the food. Stay for the feeling.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
                Comfort food, calm corners, conversations, celebrations and an experience designed to feel like more than a quick stop.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={() => setCurrentTab('experience')}
                  className="px-8 py-3 bg-[#fffaf3] text-[#21140f] hover:bg-[#d9aa72] text-xs font-black uppercase tracking-wider rounded-full shadow-lg transition-colors cursor-pointer"
                >
                  Explore the experience →
                </button>
              </div>
            </div>
          </section>

          {/* Section: Google Review Rating Feature */}
          <section className="py-16 bg-[#f7f0e6] border-b border-[#21140f]/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#21140f]/10 shadow-sm flex flex-col sm:flex-row items-center gap-8">
                {/* Rating Orb */}
                <div className="w-32 h-32 rounded-3xl bg-[#21140f] text-[#d9aa72] flex flex-col items-center justify-center shrink-0 shadow-lg text-center">
                  <strong className="text-4xl font-black font-['Poiret_One']">5.0</strong>
                  <span className="text-amber-400 text-sm tracking-wider">★★★★★</span>
                  <small className="text-[10px] text-slate-300 uppercase tracking-widest mt-1">Google Rating</small>
                </div>

                <div className="space-y-3 text-center sm:text-left flex-1">
                  <p className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
                    YOUR REVIEW MATTERS
                  </p>
                  <h2 className="font-['Poiret_One'] text-2xl sm:text-4xl font-black text-[#21140f]">
                    Help more people discover Sweet Coffee.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#72675f] leading-relaxed">
                    If you enjoyed your visit, a short Google review helps Sweet Coffee reach more people in Sidhi.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                    <a
                      href="https://www.google.com/search?q=Sweet+Coffee+Sidhi+reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#bf8547] hover:bg-[#d9aa72] text-[#21140f] text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Write a Google Review</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setCurrentTab('story')}
                      className="px-5 py-2.5 bg-white border border-[#21140f]/20 hover:bg-slate-50 text-[#21140f] text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Read Our Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Social Editorial & Instagram Reels */}
          <section className="py-20 bg-[#fffaf3] border-b border-[#21140f]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Intro column */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
                    FOLLOW THE HUT
                  </p>
                  <h2 className="font-['Poiret_One'] text-3xl font-black text-[#21140f]">
                    Food. Space. Moments.
                  </h2>
                  <p className="text-xs text-[#72675f] leading-relaxed">
                    Latest campaigns, food close-ups, café life and celebrations across Sweet Coffee social channels.
                  </p>
                  <div className="p-3 bg-white rounded-2xl border border-slate-200 text-xs">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">INSTAGRAM</span>
                    <strong className="text-sm font-bold text-[#bf8547]">@sweetcoffee</strong>
                  </div>
                  <a
                    href="https://instagram.com/sweetcoffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#21140f] hover:bg-[#302018] text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    <span>Visit @sweetcoffee</span>
                    <span>↗</span>
                  </a>
                </div>

                {/* 3 Reel Cards */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-4/5 bg-slate-900 group">
                    <img
                      src="/assets/sweet-coffee/social-1.jpg"
                      alt="Freedom to indulge"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-white/80 text-black flex items-center justify-center text-lg shadow-lg">
                        ▶
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden aspect-4/5 bg-slate-900 group">
                    <img
                      src="/assets/sweet-coffee/social-2.jpg"
                      alt="Food moments"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-white/80 text-black flex items-center justify-center text-lg shadow-lg">
                        ▶
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden aspect-4/5 bg-slate-900 group">
                    <img
                      src="/assets/sweet-coffee/social-3.jpg"
                      alt="Celebrations"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-white/80 text-black flex items-center justify-center text-lg shadow-lg">
                        ▶
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ===================== VIEW 2: COMPLETE 108-ITEM MENU ===================== */}
      {currentTab === 'menu' && (
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
              OFFICIAL CAFÉ MENU
            </span>
            <h1 className="font-['Poiret_One'] text-4xl sm:text-6xl font-black text-[#21140f] mt-1">
              Complete Menu
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#72675f]">
              108 100% vegetarian listings prepared fresh at Sweet Coffee, Stadium Road, Sidhi.
            </p>

            {/* Menu Search Box */}
            <div className="mt-6 relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search across 108 items (e.g. Dalgona, Maggi, Pasta)..."
                value={menuSearch}
                onChange={e => setMenuSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#21140f]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bf8547]"
              />
            </div>
          </div>

          {/* Horizontally scrollable Category Filter Chips */}
          <div className="sticky top-20 z-20 bg-[#fffaf3]/95 backdrop-blur-md py-3 mb-8 border-y border-[#21140f]/10 overflow-x-auto no-scrollbar flex items-center gap-2">
            <button
              onClick={() => setSelectedMenuCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                selectedMenuCategory === 'all'
                  ? 'bg-[#21140f] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Categories (108)
            </button>
            {SWEET_COFFEE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedMenuCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer whitespace-nowrap ${
                  selectedMenuCategory === cat.id
                    ? 'bg-[#bf8547] text-[#21140f] shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.title} ({cat.itemsCount})
              </button>
            ))}
          </div>

          {/* Categories & Items Grid */}
          <div className="space-y-12">
            {SWEET_COFFEE_CATEGORIES.filter(cat => selectedMenuCategory === 'all' || selectedMenuCategory === cat.id).map(cat => {
              const matchedItems = cat.items.filter(item => {
                if (!menuSearch.trim()) return true;
                const q = menuSearch.toLowerCase().trim();
                return item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
              });

              if (matchedItems.length === 0) return null;

              return (
                <div key={cat.id} id={cat.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#21140f]/10 shadow-sm">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#21140f]/10">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#bf8547]">100% PURE VEG</span>
                      <h2 className="font-['Poiret_One'] text-2xl sm:text-3xl font-bold text-[#21140f]">
                        {cat.title}
                      </h2>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#f7f0e6] text-[#72675f] text-xs font-bold">
                      {matchedItems.length} items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {matchedItems.map(item => {
                      const countInCart = cart[item.name] || 0;
                      return (
                        <div
                          key={item.name}
                          className="p-4 rounded-2xl border border-slate-100 hover:border-[#bf8547]/50 bg-[#fffaf3]/40 flex items-start justify-between gap-4 transition-all"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="w-3.5 h-3.5 rounded border border-emerald-600 flex items-center justify-center p-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                              </span>
                              <h3 className="font-bold text-sm text-[#21140f]">
                                {item.name}
                              </h3>
                              {item.badge && (
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#72675f] mt-1.5 leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                            <strong className="block text-base font-black text-[#21140f] mt-2">
                              ₹{item.price}
                            </strong>
                          </div>

                          {/* Add to Cart Actions */}
                          <div className="shrink-0 flex items-center">
                            {countInCart > 0 ? (
                              <div className="flex items-center gap-2 bg-[#21140f] text-white px-2 py-1 rounded-xl">
                                <button
                                  onClick={() => removeFromCart(item.name)}
                                  className="w-6 h-6 flex items-center justify-center hover:text-[#d9aa72]"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="text-xs font-bold w-4 text-center">{countInCart}</span>
                                <button
                                  onClick={() => addToCart(item.name)}
                                  className="w-6 h-6 flex items-center justify-center hover:text-[#d9aa72]"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => addToCart(item.name)}
                                className="px-3.5 py-1.5 rounded-xl bg-white border border-[#21140f]/20 hover:border-[#bf8547] hover:bg-[#bf8547] hover:text-[#21140f] text-xs font-bold text-[#21140f] transition-all cursor-pointer flex items-center gap-1 shadow-xs"
                              >
                                <Plus className="w-3 h-3" />
                                <span>Add</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ===================== VIEW 3: OUR STORY ===================== */}
      {currentTab === 'story' && (
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
              THE BEGINNING & PHILOSOPHY
            </span>
            <h1 className="font-['Poiret_One'] text-4xl sm:text-6xl font-black text-[#21140f] mt-1">
              Our Story
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#72675f]">
              How a two-year vision became Sidhi's favorite destination for food and moments.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#21140f]/10 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-8 pb-8 border-b border-slate-100">
              <img
                src="/assets/sweet-coffee/founder.webp"
                alt="Shlok Chauhan"
                className="w-36 h-36 rounded-3xl object-cover bg-[#21140f] shadow-md shrink-0"
              />
              <div>
                <b className="text-xl font-bold text-[#21140f]">Shlok Chauhan</b>
                <p className="text-xs text-[#bf8547] font-bold">Founder · Sweet Coffee</p>
                <p className="text-xs text-[#72675f] mt-2 leading-relaxed">
                  "Sweet Coffee was founded after carrying the idea for nearly two years — researching the market, studying customer behaviour, refining the menu, thinking through pricing, space, branding and the kind of café experience Sidhi could genuinely connect with."
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="font-['Poiret_One'] text-2xl font-bold text-[#21140f] mb-6">
                Built Through Iterations
              </h3>
              <div className="space-y-6 border-l-2 border-[#bf8547]/40 pl-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#bf8547]">~2024</span>
                  <h4 className="font-bold text-sm text-[#21140f] mt-0.5">The vision starts taking shape</h4>
                  <p className="text-xs text-[#72675f] mt-1">
                    The idea is carried forward through research, menu thinking, customer behaviour, pricing, identity and space planning.
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#bf8547]">20.03.2026</span>
                  <h4 className="font-bold text-sm text-[#21140f] mt-0.5">Sweet Coffee becomes operational</h4>
                  <p className="text-xs text-[#72675f] mt-1">
                    The café opens in Sidhi after the concept moves from planning into a real customer-facing business.
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#bf8547]">NOW</span>
                  <h4 className="font-bold text-sm text-[#21140f] mt-0.5">The system keeps evolving</h4>
                  <p className="text-xs text-[#72675f] mt-1">
                    Menu, ordering, marketing, design, customer experience and internal systems continue to improve from real feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== VIEW 4: EXPERIENCE ===================== */}
      {currentTab === 'experience' && (
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
              ATMOSPHERE & VIBE
            </span>
            <h1 className="font-['Poiret_One'] text-4xl sm:text-6xl font-black text-[#21140f] mt-1">
              The Experience
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#72675f]">
              Come for the food. Stay for the feeling.
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-900">
              <img
                src="/assets/sweet-coffee/experience.webp"
                alt="Café experience"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="bg-white rounded-3xl p-8 border border-[#21140f]/10 shadow-sm space-y-4">
              <h3 className="font-['Poiret_One'] text-2xl font-bold text-[#21140f]">
                Designed as Sidhi's Calm Corner
              </h3>
              <p className="text-xs sm:text-sm text-[#72675f] leading-relaxed">
                Whether you need a quiet table for creative work, a cozy booth for long conversations with friends, or an intimate place for family birthdays, Sweet Coffee is laid out with warm ambient lighting, comfortable seating, and uplifting music.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-center">
                <div className="p-4 bg-[#f7f0e6] rounded-2xl">
                  <span className="text-xl">☕</span>
                  <strong className="block text-sm font-bold text-[#21140f] mt-1">Calm Ambience</strong>
                  <p className="text-[11px] text-[#72675f] mt-0.5">Uncluttered, warm aesthetic</p>
                </div>
                <div className="p-4 bg-[#f7f0e6] rounded-2xl">
                  <span className="text-xl">🎶</span>
                  <strong className="block text-sm font-bold text-[#21140f] mt-1">Curated Acoustics</strong>
                  <p className="text-[11px] text-[#72675f] mt-0.5">Karaoke & indie playlists</p>
                </div>
                <div className="p-4 bg-[#f7f0e6] rounded-2xl">
                  <span className="text-xl">⚡</span>
                  <strong className="block text-sm font-bold text-[#21140f] mt-1">Fast Service</strong>
                  <p className="text-[11px] text-[#72675f] mt-0.5">Freshly prepared to order</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== VIEW 5: VISIT & TIMINGS ===================== */}
      {currentTab === 'visit' && (
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
              FIND US IN SIDHI
            </span>
            <h1 className="font-['Poiret_One'] text-4xl sm:text-6xl font-black text-[#21140f] mt-1">
              Visit Sweet Coffee
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#72675f]">
              Stadium Road, Sidhi, Madhya Pradesh · Open 7 Days a Week
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#21140f]/10 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#bf8547]">LOCATION</span>
                <h3 className="font-bold text-lg text-[#21140f] mt-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#bf8547]" />
                  <span>Stadium Road, Sidhi, MP</span>
                </h3>
                <p className="text-xs text-[#72675f] mt-1">
                  Centrally located and accessible with convenient parking for bikes and cars.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#bf8547]">HOURS</span>
                <h3 className="font-bold text-lg text-[#21140f] mt-1 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span>10:00 AM – 11:00 PM</span>
                </h3>
                <p className="text-xs text-[#72675f] mt-1">
                  Operating everyday including weekends and public holidays.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#bf8547]">DIRECT CONTACT</span>
                <div className="mt-2 space-y-2 text-xs">
                  <p className="flex items-center gap-2 text-[#21140f] font-bold">
                    <Phone className="w-4 h-4 text-[#bf8547]" />
                    <a href="tel:+917415596400" className="hover:underline">+91 74155 96400</a>
                  </p>
                  <p className="flex items-center gap-2 text-[#21140f]">
                    <Mail className="w-4 h-4 text-[#bf8547]" />
                    <a href="mailto:support@sweetcoffee.in" className="hover:underline">support@sweetcoffee.in</a>
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Stadium+Road+Sidhi+Madhya+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#bf8547] hover:bg-[#d9aa72] text-[#21140f] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-[#21140f] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold text-[#d9aa72]">READY FOR DINE-IN?</span>
                <h3 className="font-['Poiret_One'] text-3xl font-black mt-2">
                  Reserve Ahead for Peak Hours
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Evenings and weekends fill up quickly! Reserve your table ahead of time to ensure prompt seating.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full py-3.5 bg-white text-[#21140f] hover:bg-[#d9aa72] text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Reserve Your Table Now
                </button>
                <a
                  href="https://wa.me/917415596400?text=Hi%20Sweet%20Coffee,%20I%20am%20heading%20to%20the%20café%20and%20want%20to%20check%20table%20availability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== VIEW 6: CELEBRATIONS & KARAOKE ===================== */}
      {(currentTab === 'celebrations' || currentTab === 'karaoke') && (
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#bf8547] uppercase tracking-widest">
              GATHERINGS & PARTIES
            </span>
            <h1 className="font-['Poiret_One'] text-4xl sm:text-6xl font-black text-[#21140f] mt-1">
              Celebrations at Sweet Coffee
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#72675f]">
              Birthdays, anniversaries, team parties, and live karaoke events in Sidhi.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#21140f]/10 shadow-sm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#f7f0e6] space-y-2">
                <span className="text-xs font-mono font-bold text-[#bf8547]">01. BIRTHDAY CELEBRATION</span>
                <h4 className="font-bold text-base text-[#21140f]">Cake Cutting & Table Décor</h4>
                <p className="text-xs text-[#72675f] leading-relaxed">
                  Reserve a dedicated group seating area with customized table arrangement, background music, and party food combos.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f7f0e6] space-y-2">
                <span className="text-xs font-mono font-bold text-[#bf8547]">02. OPEN FOR KARAOKE</span>
                <h4 className="font-bold text-base text-[#21140f]">Sing, Jam & Perform</h4>
                <p className="text-xs text-[#72675f] leading-relaxed">
                  Call for local artists and music lovers! Come grab the mic, sing your favorite tracks, and enjoy our cold brews.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 text-center">
              <button
                onClick={() => {
                  setBookingType('Celebration');
                  setBookingModalOpen(true);
                }}
                className="px-8 py-3.5 bg-[#bf8547] hover:bg-[#d9aa72] text-[#21140f] text-xs font-black uppercase tracking-wider rounded-full shadow-md transition-colors cursor-pointer"
              >
                Plan a Celebration With Us →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Multi-Platform Order Dock */}
      <section className="bg-[#21140f] text-[#f4e8d5] py-10 border-t border-[#302018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-extrabold tracking-widest text-[#d9aa72] uppercase block">
                YOUR CRAVING. YOUR WAY.
              </span>
              <strong className="text-xl sm:text-2xl font-['Poiret_One'] font-bold text-white block mt-1">
                Choose where you want to order.
              </strong>
              <small className="text-xs text-slate-400">
                Direct WhatsApp, Zomato, or Swiggy — one clear choice, no hunting.
              </small>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setCartDrawerOpen(true)}
                className="px-5 py-3 rounded-2xl bg-[#bf8547] hover:bg-[#d9aa72] text-[#21140f] text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Direct (WhatsApp) ↗</span>
              </button>
              <a
                href="https://link.zomato.com/xqzv/rshare?id=13404930430563e8c"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-[#e23744] hover:bg-[#c92f3b] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md"
              >
                <span>Zomato Delivery ↗</span>
              </a>
              <a
                href="https://www.swiggy.com/direct/brand/799596?source=swiggy-direct"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-[#fc8019] hover:bg-[#e06f14] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md"
              >
                <span>Swiggy Delivery ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Sweet Coffee List (Newsletter) */}
      <section className="bg-[#1a100c] text-white py-12 border-t border-[#302018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#21140f] rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-[#d9aa72] uppercase tracking-wider">
                THE SWEET COFFEE LIST
              </p>
              <h3 className="font-['Poiret_One'] text-2xl font-bold text-white mt-1">
                Offers worth opening. No noise.
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Opt in for occasional Sweet Coffee updates, special discounts & menu drops in Sidhi.
              </p>
            </div>

            {subDone ? (
              <div className="text-emerald-400 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>You're subscribed! Thanks for joining.</span>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); if (subPhone) setSubDone(true); }}
                className="flex items-center gap-2 w-full md:w-auto"
              >
                <input
                  type="tel"
                  placeholder="WhatsApp number"
                  value={subPhone}
                  onChange={e => setSubPhone(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#bf8547] w-48"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#bf8547] hover:bg-[#d9aa72] text-[#21140f] text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Join List →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Complete Footer */}
      <footer className="bg-[#140b08] text-[#f4e8d5] pt-16 pb-12 border-t border-[#302018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Brand column */}
            <div className="space-y-3">
              <p className="text-[10px] font-extrabold text-[#d9aa72] uppercase tracking-widest">
                SIDHI · MADHYA PRADESH
              </p>
              <h2 className="font-['Poiret_One'] text-3xl font-black text-white leading-tight">
                SWEET<br />COFFEE
              </h2>
              <span className="text-xs text-[#d9aa72] block italic font-serif">
                More Than Coffee.
              </span>
              <small className="text-[11px] text-slate-400 block pt-1">
                Food · Space · Moments
              </small>
            </div>

            {/* Col 2: Explore */}
            <div className="space-y-2 text-xs">
              <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Explore</h3>
              <p><button onClick={() => setCurrentTab('menu')} className="text-slate-400 hover:text-white">Full Menu (108 Items)</button></p>
              <p><button onClick={() => setCurrentTab('experience')} className="text-slate-400 hover:text-white">Experience</button></p>
              <p><button onClick={() => setCurrentTab('story')} className="text-slate-400 hover:text-white">Our Story</button></p>
              <p><a href="https://www.google.com/search?q=Sweet+Coffee+Sidhi+reviews" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">Google Reviews (5.0 ★)</a></p>
            </div>

            {/* Col 3: Plan */}
            <div className="space-y-2 text-xs">
              <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Plan</h3>
              <p><button onClick={() => setCurrentTab('karaoke')} className="text-slate-400 hover:text-white">Karaoke Nights</button></p>
              <p><button onClick={() => setBookingModalOpen(true)} className="text-slate-400 hover:text-white">Book a Table</button></p>
              <p><button onClick={() => setCurrentTab('celebrations')} className="text-slate-400 hover:text-white">Celebrations & Birthdays</button></p>
              <p><button onClick={() => setCurrentTab('visit')} className="text-slate-400 hover:text-white">Hours & Location</button></p>
            </div>

            {/* Col 4: Visit & Contact */}
            <div className="space-y-2 text-xs">
              <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Visit & Contact</h3>
              <p className="text-slate-300">Stadium Road, Sidhi, MP</p>
              <span className="text-[10px] text-[#d9aa72] font-mono block pt-1">CALL US</span>
              <a href="tel:+917415596400" className="text-white font-bold block">+91 74155 96400</a>
              <span className="text-[10px] text-[#d9aa72] font-mono block pt-1">EMAIL</span>
              <a href="mailto:support@sweetcoffee.in" className="text-slate-300 hover:underline block">support@sweetcoffee.in</a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>© 2026 Sweet Coffee. All rights reserved.</span>
            <span>Stadium Road, Sidhi, Madhya Pradesh</span>
            <div className="flex gap-4">
              <span>Pure Vegetarian</span>
              <span>·</span>
              <span>Direct WhatsApp Orders</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Smart Concierge Widget Button */}
      <button
        onClick={() => setConciergeOpen(!conciergeOpen)}
        className="fixed bottom-6 right-6 z-40 bg-[#21140f] text-[#f4e8d5] border border-[#bf8547] rounded-full p-3.5 shadow-2xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer group"
      >
        <span className="w-8 h-8 rounded-full bg-[#bf8547] text-[#21140f] font-black text-xs flex items-center justify-center font-serif">
          SC
        </span>
        <span className="text-left hidden sm:block pr-2">
          <small className="block text-[9px] font-bold text-[#d9aa72] uppercase tracking-wider">COFFEE CONCIERGE</small>
          <strong className="block text-xs font-bold text-white">What are you craving?</strong>
        </span>
      </button>

      {/* Smart Concierge Popup */}
      {conciergeOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 space-y-3 animate-fadeIn text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <span className="text-[9px] font-extrabold text-[#bf8547] uppercase tracking-widest block">SMART MENU GUIDE</span>
              <h4 className="font-bold text-sm text-[#21140f]">Sweet Coffee Concierge</h4>
            </div>
            <button
              onClick={() => setConciergeOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-slate-500 leading-relaxed text-[11px]">
            Tell me your mood, budget or craving. I'll recommend from Sweet Coffee's 108 menu items.
          </p>

          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => handleConciergeAsk('Cheesy and spicy under ₹200')}
              className="px-2.5 py-1 bg-slate-100 hover:bg-[#f7f0e6] rounded-lg text-[10px] font-bold text-slate-700"
            >
              Cheesy + spicy
            </button>
            <button
              onClick={() => handleConciergeAsk('Coffee with a light snack')}
              className="px-2.5 py-1 bg-slate-100 hover:bg-[#f7f0e6] rounded-lg text-[10px] font-bold text-slate-700"
            >
              Coffee + snack
            </button>
            <button
              onClick={() => handleConciergeAsk('Bestseller under ₹150')}
              className="px-2.5 py-1 bg-slate-100 hover:bg-[#f7f0e6] rounded-lg text-[10px] font-bold text-slate-700"
            >
              Under ₹150
            </button>
          </div>

          <div className="p-3 bg-[#f7f0e6] rounded-xl text-slate-800 leading-relaxed text-[11px] border border-[#21140f]/10">
            {conciergeResponse}
          </div>

          <form
            onSubmit={e => { e.preventDefault(); handleConciergeAsk(conciergeInput); }}
            className="flex gap-2"
          >
            <input
              type="text"
              placeholder="e.g. cold coffee + something cheesy"
              value={conciergeInput}
              onChange={e => setConciergeInput(e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-[#bf8547]"
            />
            <button
              type="submit"
              className="px-3.5 py-2 bg-[#21140f] text-white rounded-xl font-bold text-xs"
            >
              Ask
            </button>
          </form>
        </div>
      )}

      {/* Cart Drawer for Direct WhatsApp Ordering */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
          <div className="w-full max-w-md bg-white h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#bf8547]" />
                  <h3 className="font-bold text-base text-[#21140f]">Your Order Cart</h3>
                </div>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cartTotalCount === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <Coffee className="w-10 h-10 text-slate-300 mx-auto" />
                  <p className="text-xs text-slate-500">Your cart is currently empty.</p>
                  <button
                    onClick={() => { setCartDrawerOpen(false); setCurrentTab('menu'); }}
                    className="px-4 py-2 bg-[#21140f] text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Browse 108 Items
                  </button>
                </div>
              ) : (
                <div className="py-4 space-y-3">
                  {Object.entries(cart).map(([name, qty]) => {
                    const item = allItemsList.find(i => i.name === name);
                    const itemPrice = item ? item.price : 0;
                    return (
                      <div key={name} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-xs">
                        <div className="flex-1 pr-2">
                          <span className="font-bold text-[#21140f] block truncate">{name}</span>
                          <span className="text-[11px] text-slate-500">₹{itemPrice} each</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(name)}
                            className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center font-bold"
                          >
                            -
                          </button>
                          <span className="font-bold w-4 text-center">{qty}</span>
                          <button
                            onClick={() => addToCart(name)}
                            className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center font-bold"
                          >
                            +
                          </button>
                          <span className="font-bold text-[#21140f] ml-2 w-12 text-right">
                            ₹{itemPrice * qty}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  <div className="pt-4">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Delivery Address / Table Number / Notes:
                    </label>
                    <textarea
                      placeholder="e.g. Stadium Road shop #4, or Table reservation note..."
                      value={customerAddress}
                      onChange={e => setCustomerAddress(e.target.value)}
                      rows={2}
                      className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-[#bf8547]"
                    />
                  </div>
                </div>
              )}
            </div>

            {cartTotalCount > 0 && (
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Subtotal ({cartTotalCount} items):</span>
                  <strong className="text-xl font-black text-[#21140f]">₹{cartTotalPrice}</strong>
                </div>
                <button
                  onClick={handleSendWhatsAppOrder}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Order to Sweet Coffee WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Table Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold text-[#bf8547] uppercase tracking-wider block">RESERVATION</span>
                <h3 className="font-['Poiret_One'] text-2xl font-bold text-[#21140f]">Book a Table at Sweet Coffee</h3>
              </div>
              <button
                onClick={() => { setBookingModalOpen(false); setBookingSuccess(false); }}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-base text-[#21140f]">Booking Request Submitted!</h4>
                <p className="text-xs text-slate-600">
                  Your reservation request has been dispatched. Our team at Sweet Coffee Stadium Road will confirm your table shortly.
                </p>
                <button
                  onClick={() => { setBookingModalOpen(false); setBookingSuccess(false); }}
                  className="px-6 py-2.5 bg-[#21140f] text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                {/* Type Selection */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Booking Type:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Table', 'Celebration', 'Group'] as const).map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setBookingType(type)}
                        className={`py-2 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                          bookingType === type
                            ? 'bg-[#bf8547] text-[#21140f] border-[#bf8547]'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Date:</label>
                    <input
                      type="date"
                      value={bookDate}
                      onChange={e => setBookDate(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Time:</label>
                    <input
                      type="time"
                      value={bookTime}
                      onChange={e => setBookTime(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Number of Guests (1–50):</label>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={bookGuests}
                    onChange={e => setBookGuests(parseInt(e.target.value) || 1)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name:</label>
                    <input
                      type="text"
                      placeholder="e.g. Amit Rao"
                      value={bookName}
                      onChange={e => setBookName(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">WhatsApp / Phone:</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={bookPhone}
                      onChange={e => setBookPhone(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Setup / Occasion / Cake Notes (Optional):</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Birthday cake cutting, quiet corner table, sofa seating..."
                    value={bookNotes}
                    onChange={e => setBookNotes(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#bf8547] hover:bg-[#d9aa72] text-[#21140f] font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Send Reservation Request →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
