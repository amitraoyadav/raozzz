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
  Gift,
  Smartphone,
  Star,
  Search,
  ExternalLink,
  ChevronRight,
  Menu as MenuIcon,
  Glasses,
  Zap,
  Tag,
  Briefcase
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  GREGORYS_MENU,
  GREGORYS_PRODUCTS,
  GREGORYS_LOCATIONS,
  GregorysMenuItem,
  GregorysProduct,
  GregorysLocation
} from '../../data/gregorysCoffeeData';

export type GregTab =
  | 'home'
  | 'menu'
  | 'locations'
  | 'shop'
  | 'app-rewards'
  | 'about'
  | 'careers'
  | 'contact';

interface GregCartItem {
  id: string;
  name: string;
  category: string;
  priceUsd: number;
  priceInr: number;
  quantity: number;
  options?: string;
  imageUrl: string;
}

export const GregorysApp: React.FC = () => {
  const { setActiveView } = useApp();
  const [currentTab, setCurrentTab] = useState<GregTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<GregCartItem[]>([
    {
      id: 'greg-hall-oats',
      name: 'Hall & Oats Cold Brew',
      category: 'Specialty Cold Brew',
      priceUsd: 6.25,
      priceInr: 625,
      quantity: 1,
      options: 'Regular · Oat Milk · Cinnamon Dusted',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png'
    }
  ]);
  const [pickupLocation, setPickupLocation] = useState('327 5th Ave (Empire State), Midtown Manhattan');

  // Menu Category Filter & Dietary
  const [menuCat, setMenuCat] = useState<string>('All');
  const [veganOnly, setVeganOnly] = useState(false);

  // Customizer Modal
  const [selectedMenuItem, setSelectedMenuItem] = useState<GregorysMenuItem | null>(null);
  const [itemSize, setItemSize] = useState('Regular (16 oz)');
  const [itemMilk, setItemMilk] = useState('Organic Oat Milk (Free)');
  const [itemSweet, setItemSweet] = useState('Standard Sweetness');
  const [itemIce, setItemIce] = useState('Regular Ice');

  // Locations Filter
  const [locStateFilter, setLocStateFilter] = useState<'All' | 'NY' | 'NJ' | 'DC'>('All');
  const [locSearch, setLocSearch] = useState('');

  // Shop Filter
  const [shopFilter, setShopFilter] = useState<'All' | 'Packaged Coffee' | 'Merch & Drinkware' | 'Gift Cards'>('All');

  // Careers / Job Application
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [appliedRole, setAppliedRole] = useState('Barista (Manhattan)');
  const [jobSubmitted, setJobSubmitted] = useState(false);

  // Contact Form
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const cartTotalCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);
  const cartSubtotalUsd = useMemo(() => cart.reduce((sum, i) => sum + i.priceUsd * i.quantity, 0), [cart]);
  const cartSubtotalInr = useMemo(() => cart.reduce((sum, i) => sum + i.priceInr * i.quantity, 0), [cart]);

  const filteredMenuItems = useMemo(() => {
    return GREGORYS_MENU.filter(item => {
      const matchCat = menuCat === 'All' || item.category === menuCat;
      const matchVegan = !veganOnly || item.isVegan;
      return matchCat && matchVegan;
    });
  }, [menuCat, veganOnly]);

  const filteredLocations = useMemo(() => {
    return GREGORYS_LOCATIONS.filter(loc => {
      const matchState = locStateFilter === 'All' || loc.state === locStateFilter;
      const matchSearch =
        loc.name.toLowerCase().includes(locSearch.toLowerCase()) ||
        loc.neighborhood.toLowerCase().includes(locSearch.toLowerCase()) ||
        loc.address.toLowerCase().includes(locSearch.toLowerCase());
      return matchState && matchSearch;
    });
  }, [locStateFilter, locSearch]);

  const filteredShopProducts = useMemo(() => {
    if (shopFilter === 'All') return GREGORYS_PRODUCTS;
    return GREGORYS_PRODUCTS.filter(p => p.category === shopFilter);
  }, [shopFilter]);

  const addToCart = (
    item: { id: string; name: string; category: string; priceUsd: number; priceInr: number; imageUrl: string },
    options = '',
    qty = 1
  ) => {
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
      .map(i => `• ${i.name} [${i.options || 'Standard'}] x${i.quantity} = $${(i.priceUsd * i.quantity).toFixed(2)} (₹${i.priceInr * i.quantity})`)
      .join('\n');
    const msg = `*BREW & BLOOM — Gregorys Coffee NYC Order Ahead*\n\n*Pickup Store:* ${pickupLocation}\n\n${lines}\n\n*Total:* $${cartSubtotalUsd.toFixed(2)} (approx ₹${cartSubtotalInr})\n\nPlease prepare for priority mobile pickup.`;
    window.open(`https://wa.me/19173830636?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] font-['Inter',sans-serif] selection:bg-[#e11d48] selection:text-white">
      {/* Website Switcher Bar */}
      <div className="bg-[#111111] text-white text-xs py-2 px-4 border-b border-stone-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#e11d48]"></span>
          <span className="font-bold tracking-wide">WEBSITE 4: GREGORYS COFFEE (Recreated as BREW & BLOOM)</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-stone-400">Switch Website:</span>
          <button onClick={() => setActiveView('site', 'brew-bloom-tim-wendelboe')} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-stone-300 cursor-pointer">1. Tim Wendelboe</button>
          <button onClick={() => setActiveView('site', 'brew-bloom-onyx')} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-stone-300 cursor-pointer">2. Onyx Coffee Lab</button>
          <button onClick={() => setActiveView('site', 'brew-bloom-city-brew')} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-stone-300 cursor-pointer">3. City Brew</button>
          <button onClick={() => setActiveView('site', 'brew-bloom-gregorys')} className="px-2 py-0.5 rounded bg-[#e11d48] text-white font-bold cursor-pointer">4. Gregorys</button>
          <button onClick={() => setActiveView('dashboard')} className="px-2 py-0.5 rounded bg-stone-700 text-white font-bold ml-2 cursor-pointer">Dashboard</button>
        </div>
      </div>

      {/* Top Ticker Announcement */}
      <div className="bg-[#e11d48] text-white text-[11px] font-bold py-2 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-3">
        <span>See Coffee Differently</span>
        <span>•</span>
        <span>Dairy-Free Milk Alternatives Always Free</span>
        <span>•</span>
        <span>$5 Off Your First Order in the G-Family App</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-[#e11d48] transition-colors">
                <Glasses className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-black block">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#e11d48] block font-mono -mt-1">
                  Gregorys Coffee NYC
                </span>
              </div>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-black text-stone-800">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#e11d48] transition-colors cursor-pointer ${currentTab === 'home' ? 'text-[#e11d48]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('menu')} className={`hover:text-[#e11d48] transition-colors cursor-pointer ${currentTab === 'menu' ? 'text-[#e11d48]' : ''}`}>Menu</button>
            <button onClick={() => setCurrentTab('locations')} className={`hover:text-[#e11d48] transition-colors cursor-pointer ${currentTab === 'locations' ? 'text-[#e11d48]' : ''}`}>Locations</button>
            <button onClick={() => setCurrentTab('shop')} className={`hover:text-[#e11d48] transition-colors cursor-pointer ${currentTab === 'shop' ? 'text-[#e11d48]' : ''}`}>Shop Merch</button>
            <button onClick={() => setCurrentTab('app-rewards')} className={`hover:text-[#e11d48] transition-colors cursor-pointer ${currentTab === 'app-rewards' ? 'text-[#e11d48]' : ''}`}>G-Family App</button>
            <button onClick={() => setCurrentTab('about')} className={`hover:text-[#e11d48] transition-colors cursor-pointer ${currentTab === 'about' ? 'text-[#e11d48]' : ''}`}>Our Story</button>
            <button onClick={() => setCurrentTab('careers')} className={`hover:text-[#e11d48] transition-colors cursor-pointer ${currentTab === 'careers' ? 'text-[#e11d48]' : ''}`}>Careers</button>
            <button onClick={() => setCurrentTab('contact')} className={`hover:text-[#e11d48] transition-colors cursor-pointer ${currentTab === 'contact' ? 'text-[#e11d48]' : ''}`}>Contact</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentTab('menu')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white hover:bg-[#e11d48] transition-colors text-xs font-black uppercase tracking-wider cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Order Ahead</span>
            </button>
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border-2 border-black hover:border-[#e11d48] hover:text-[#e11d48] transition-colors text-xs font-black cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>({cartTotalCount})</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-3 text-xs uppercase tracking-widest font-black text-stone-800">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#e11d48]">Home</button>
            <button onClick={() => { setCurrentTab('menu'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#e11d48]">Cold Brew & Food Menu</button>
            <button onClick={() => { setCurrentTab('locations'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#e11d48]">87+ Locations</button>
            <button onClick={() => { setCurrentTab('shop'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#e11d48]">Merchandise & Beans</button>
            <button onClick={() => { setCurrentTab('app-rewards'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#e11d48]">G-Family Rewards</button>
            <button onClick={() => { setCurrentTab('about'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#e11d48]">About Gregorys</button>
            <button onClick={() => { setCurrentTab('careers'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#e11d48]">Join the G-Team</button>
            <button onClick={() => { setCurrentTab('contact'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#e11d48]">Customer Care</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <div className="space-y-20 pb-24">
          {/* Hero Banner */}
          <section className="bg-black text-white py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e11d48] text-white font-mono text-xs font-bold uppercase tracking-widest">
                  <Glasses className="w-4 h-4" />
                  <span>NYC Born & Roasted Since 2006</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
                  See Coffee <br />
                  <span className="text-[#e11d48]">Differently.</span>
                </h1>
                <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-lg">
                  BREW & BLOOM’s faithful Gregorys Coffee NYC recreation. High-speed espresso bars, world-class cold brew, fresh scratch baking, and zero attitude.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => setCurrentTab('menu')}
                    className="px-8 py-4 rounded-full bg-[#e11d48] hover:bg-[#be123c] text-white font-black uppercase tracking-wider text-xs transition-colors cursor-pointer shadow-lg"
                  >
                    View Food & Cold Brew Menu
                  </button>
                  <button
                    onClick={() => setCurrentTab('locations')}
                    className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-black font-black uppercase tracking-wider text-xs transition-colors cursor-pointer"
                  >
                    Find NYC & Local Shops
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 bg-stone-900 border border-stone-800 p-8 rounded-3xl text-center space-y-5">
                <div className="w-24 h-24 rounded-full bg-black border-2 border-[#e11d48] mx-auto flex items-center justify-center text-white">
                  <Glasses className="w-12 h-12 text-[#e11d48]" />
                </div>
                <h3 className="text-2xl font-black uppercase">Hall & Oats Cold Brew</h3>
                <p className="text-xs text-stone-400 font-light">
                  Slow-steeped cold brew infused with organic oat milk, real vanilla bean, and dusted cinnamon. Our #1 fan favorite.
                </p>
                <button
                  onClick={() => {
                    const item = GREGORYS_MENU[0];
                    setSelectedMenuItem(item);
                  }}
                  className="w-full py-3 rounded-full bg-white text-black font-black uppercase text-xs tracking-wider hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  Order Ahead ($6.25)
                </button>
              </div>
            </div>
          </section>

          {/* Specialty Cold Brew Spotlight */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-black pb-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">Slow-Steeped Mastery</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Specialty Cold Brew Lineup</h2>
              </div>
              <button
                onClick={() => setCurrentTab('menu')}
                className="text-xs font-black uppercase tracking-wider text-[#e11d48] hover:underline flex items-center gap-1 cursor-pointer mt-2 sm:mt-0"
              >
                <span>Explore All Drinks</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GREGORYS_MENU.slice(0, 4).map(item => (
                <div
                  key={item.id}
                  className="bg-white border-2 border-stone-200 hover:border-black transition-all p-5 rounded-2xl flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden flex items-center justify-center p-4">
                      <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Coffee className="w-10 h-10 text-[#e11d48]" />
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.tags?.map((t, idx) => (
                        <span key={idx} className="text-[9px] font-mono font-bold uppercase bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-black text-black group-hover:text-[#e11d48] transition-colors">{item.name}</h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">{item.description}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-base font-black text-black">${item.priceUsd.toFixed(2)}</span>
                      <span className="text-[10px] text-stone-400 block font-mono">approx ₹{item.priceInr}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedMenuItem(item);
                      }}
                      className="px-4 py-2 rounded-full bg-black hover:bg-[#e11d48] text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Customize
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* G-Family App & Loyalty Rewards Banner */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-2xl">
              <div className="space-y-5">
                <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">
                  Order Ahead & Earn Free Coffee
                </span>
                <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
                  Download the <br />
                  <span className="text-[#e11d48]">G-Family App</span>
                </h2>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Get $5 off your very first order when you download the Gregorys app. Earn beans on every sip, skip the line in seconds, and unlock VIP access to secret menu drops.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="bg-white text-black px-4 py-2.5 rounded-2xl flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-[#e11d48]" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase font-mono">Download on</div>
                      <div className="text-xs font-black">Apple App Store</div>
                    </div>
                  </div>
                  <div className="bg-white text-black px-4 py-2.5 rounded-2xl flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-[#e11d48]" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase font-mono">Get it on</div>
                      <div className="text-xs font-black">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl space-y-4">
                <h3 className="text-xl font-black uppercase text-white">G-Family Perks:</h3>
                <ul className="text-xs space-y-2.5 text-stone-300">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#e11d48]" /> <b>$5 Instant Credit</b> on your first mobile order</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#e11d48]" /> <b>Earn 10 Beans</b> for every $1 spent</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#e11d48]" /> <b>Free Birthday Beverage</b> of any size</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#e11d48]" /> <b>Dairy-Free Milks Always Free</b> (Oat & Almond)</li>
                </ul>
                <button
                  onClick={() => setCurrentTab('app-rewards')}
                  className="w-full py-3 rounded-full bg-[#e11d48] hover:bg-[#be123c] text-white font-black uppercase text-xs tracking-wider transition-colors cursor-pointer mt-2"
                >
                  Learn More About Rewards
                </button>
              </div>
            </div>
          </section>

          {/* Real Shopify Merch & Packaged Coffee Teaser */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-black pb-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">Official Shop</span>
                <h2 className="text-3xl font-black uppercase tracking-tight">Featured Gear & Whole Bean Coffee</h2>
              </div>
              <button
                onClick={() => setCurrentTab('shop')}
                className="text-xs font-black uppercase tracking-wider text-[#e11d48] hover:underline flex items-center gap-1 cursor-pointer mt-2 sm:mt-0"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GREGORYS_PRODUCTS.slice(0, 4).map(prod => (
                <div
                  key={prod.id}
                  className="bg-white border-2 border-stone-200 hover:border-black transition-all p-5 rounded-2xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden p-6 flex items-center justify-center">
                      <img src={prod.imageUrl} alt={prod.title} className="max-h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold text-stone-400">{prod.category}</span>
                    <h3 className="text-base font-black text-black">{prod.title}</h3>
                    <p className="text-xs text-stone-600 font-light line-clamp-2">{prod.description}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-base font-black text-black">${prod.priceUsd.toFixed(2)}</span>
                      <span className="text-[10px] text-stone-400 block font-mono">approx ₹{prod.priceInr}</span>
                    </div>
                    <button
                      onClick={() => {
                        addToCart(
                          {
                            id: prod.id,
                            name: prod.title,
                            category: prod.category,
                            priceUsd: prod.priceUsd,
                            priceInr: prod.priceInr,
                            imageUrl: prod.imageUrl
                          },
                          'Standard'
                        );
                      }}
                      className="px-4 py-2 rounded-full bg-black hover:bg-[#e11d48] text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* VIEW: MENU */}
      {currentTab === 'menu' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">Handcrafted in NYC</span>
            <h2 className="text-4xl font-black uppercase tracking-tight">Full Cafe Menu</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Slow-steeped cold brews, signature espresso, ceremony-grade matcha, and scratch-baked bakery goods.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4">
            <div className="flex flex-wrap gap-2">
              {['All', 'Specialty Cold Brew', 'Espresso & Coffee', 'Matcha & Botanicals', 'Scratch Food & Bakery'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setMenuCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    menuCat === cat
                      ? 'bg-black text-white'
                      : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={() => setVeganOnly(!veganOnly)}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-colors cursor-pointer ${
                veganOnly
                  ? 'bg-[#e11d48] text-white border-[#e11d48]'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-black'
              }`}
            >
              🌱 Plant-Based Only
            </button>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenuItems.map(item => (
              <div
                key={item.id}
                className="bg-white border-2 border-stone-200 hover:border-black p-6 rounded-2xl flex flex-col justify-between transition-all"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#e11d48]">{item.category}</span>
                      <h3 className="text-xl font-black text-black">{item.name}</h3>
                    </div>
                    {item.calories && (
                      <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                        {item.calories}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">{item.description}</p>
                  <div className="flex gap-1.5 flex-wrap pt-1">
                    {item.isVegan && (
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                        Vegan
                      </span>
                    )}
                    {item.popular && (
                      <span className="text-[10px] font-bold bg-rose-100 text-[#e11d48] px-2 py-0.5 rounded-md">
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-black">${item.priceUsd.toFixed(2)}</span>
                    <span className="text-[10px] text-stone-400 block font-mono">approx ₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedMenuItem(item);
                    }}
                    className="px-4 py-2 rounded-full bg-black hover:bg-[#e11d48] text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Customize
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
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">Find Your G-Spot</span>
            <h2 className="text-4xl font-black uppercase tracking-tight">87+ Locations Nationwide</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Find Gregorys Coffee across Manhattan, Brooklyn, Long Island, New Jersey, DC, and Florida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-stone-100 p-4 rounded-2xl">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
              <input
                type="text"
                placeholder="Search street, neighborhood, or zip..."
                value={locSearch}
                onChange={e => setLocSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-300 rounded-xl outline-none focus:border-black"
              />
            </div>

            <div className="flex gap-2">
              {(['All', 'NY', 'NJ', 'DC'] as const).map(st => (
                <button
                  key={st}
                  onClick={() => setLocStateFilter(st)}
                  className={`px-4 py-1.5 rounded-full text-xs font-black uppercase transition-colors cursor-pointer ${
                    locStateFilter === st
                      ? 'bg-black text-white'
                      : 'bg-white text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {st === 'All' ? 'All States' : st}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLocations.map(loc => (
              <div key={loc.id} className="bg-white border-2 border-stone-200 hover:border-black p-6 rounded-2xl space-y-4 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#e11d48]">{loc.neighborhood} · {loc.city}, {loc.state}</span>
                    <h3 className="text-xl font-black text-black">{loc.name}</h3>
                  </div>
                  <span className="text-[10px] font-bold bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">
                    Open Now
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-stone-600 font-light">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#e11d48] shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#e11d48] shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#e11d48] shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black uppercase text-[#e11d48] hover:underline flex items-center gap-1"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => {
                      setPickupLocation(`${loc.name}, ${loc.neighborhood}`);
                      setCurrentTab('menu');
                    }}
                    className="px-4 py-2 rounded-full bg-black hover:bg-[#e11d48] text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Order Ahead Here
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: SHOP */}
      {currentTab === 'shop' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-black pb-4 gap-4">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">Delivered to Your Door</span>
              <h2 className="text-4xl font-black uppercase tracking-tight">Merch, Beans & Drinkware</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {(['All', 'Packaged Coffee', 'Merch & Drinkware', 'Gift Cards'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setShopFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-black uppercase transition-colors cursor-pointer ${
                    shopFilter === cat
                      ? 'bg-black text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShopProducts.map(prod => (
              <div key={prod.id} className="bg-white border-2 border-stone-200 hover:border-black p-6 rounded-2xl flex flex-col justify-between transition-all">
                <div className="space-y-4">
                  <div className="aspect-square bg-stone-50 rounded-xl overflow-hidden p-8 flex items-center justify-center">
                    <img src={prod.imageUrl} alt={prod.title} className="max-h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#e11d48]">{prod.category}</span>
                    <h3 className="text-lg font-black text-black">{prod.title}</h3>
                    <p className="text-xs text-stone-600 mt-1 font-light leading-relaxed">{prod.description}</p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-black">${prod.priceUsd.toFixed(2)}</span>
                    <span className="text-[10px] text-stone-400 block font-mono">approx ₹{prod.priceInr}</span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(
                        {
                          id: prod.id,
                          name: prod.title,
                          category: prod.category,
                          priceUsd: prod.priceUsd,
                          priceInr: prod.priceInr,
                          imageUrl: prod.imageUrl
                        },
                        'Standard'
                      );
                    }}
                    className="px-5 py-2.5 rounded-full bg-black hover:bg-[#e11d48] text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: APP REWARDS */}
      {currentTab === 'app-rewards' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">Earn Beans Every Visit</span>
            <h2 className="text-4xl font-black uppercase tracking-tight">The G-Family Rewards Club</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Download the Gregorys app and start racking up Beans. More beans mean free specialty coffee, breakfast sandwiches, and VIP drops.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-stone-50 p-6 rounded-2xl border-2 border-stone-200 space-y-2">
              <span className="text-3xl font-black text-[#e11d48]">$5 Off</span>
              <h4 className="font-black text-sm uppercase">First App Order</h4>
              <p className="text-xs text-stone-600 font-light">Instant $5 credit applied at checkout on your first drink or bakery order.</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl border-2 border-stone-200 space-y-2">
              <span className="text-3xl font-black text-black">10 Beans</span>
              <h4 className="font-black text-sm uppercase">Per $1 Spent</h4>
              <p className="text-xs text-stone-600 font-light">Beans add up fast with every mobile order or barcode scan at the register.</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl border-2 border-stone-200 space-y-2">
              <span className="text-3xl font-black text-[#e11d48]">Free</span>
              <h4 className="font-black text-sm uppercase">Milks Always</h4>
              <p className="text-xs text-stone-600 font-light">Never pay an upcharge for organic oat or almond milk—ever.</p>
            </div>
          </div>

          <div className="bg-black text-white p-8 sm:p-12 rounded-3xl text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black uppercase">Ready to Skip the Line?</h3>
            <p className="text-stone-300 text-xs sm:text-sm font-light max-w-md mx-auto">
              Available on iOS and Android. Reorder your favorite customized cold brew in just two taps.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setCurrentTab('menu')}
                className="px-8 py-3.5 rounded-full bg-[#e11d48] hover:bg-[#be123c] text-white font-black uppercase text-xs tracking-wider transition-colors cursor-pointer"
              >
                Start Mobile Order Ahead
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: ABOUT */}
      {currentTab === 'about' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">Our Story</span>
            <h2 className="text-4xl font-black uppercase tracking-tight">See Coffee Differently</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Founded in New York City in 2006 by Gregory Zamfotis.
            </p>
          </div>

          <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border-2 border-stone-200 space-y-6 text-stone-800 text-sm leading-relaxed font-light">
            <p>
              In 2006, Gregory Zamfotis left law school with a singular vision: to challenge the traditional coffee landscape in New York City. Specialty coffee back then was either slow, pretentious, and snobby—or commercial and generic.
            </p>
            <p>
              Gregorys Coffee proved that you don’t have to sacrifice speed or warmth to serve world-class single origin coffees and scratch-baked goods. Under the banner of <b>"See coffee differently,"</b> we brew fresh batch coffee every 30 minutes, develop our roast profiles in-house, and offer plant-based oat and almond milk without price penalties.
            </p>
            <p>
              Today, with over 87 locations across New York, New Jersey, DC, Connecticut, and Florida, the "G-Team" continues to bring joy, high energy, and uncompromising coffee craft to millions of daily Gregulars.
            </p>
          </div>
        </div>
      )}

      {/* VIEW: CAREERS */}
      {currentTab === 'careers' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">Join the G-Team</span>
            <h2 className="text-4xl font-black uppercase tracking-tight">Work With Us</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              We look for passionate, high-energy individuals who love hospitality and great coffee.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { role: 'Espresso Barista', loc: 'Midtown & Financial District, NYC', type: 'Full-Time / Part-Time' },
              { role: 'Shift Leader', loc: 'Brooklyn & Jersey City', type: 'Full-Time' },
              { role: 'General Store Manager', loc: 'Manhattan & Washington DC', type: 'Full-Time Salary' },
              { role: 'Scratch Bakery Commis', loc: 'Long Island City Commissary', type: 'Early Morning Shift' }
            ].map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-black text-base text-black">{job.role}</h4>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">{job.loc} · {job.type}</p>
                </div>
                <button
                  onClick={() => {
                    setAppliedRole(`${job.role} (${job.loc})`);
                    setJobModalOpen(true);
                  }}
                  className="px-5 py-2 rounded-full bg-black hover:bg-[#e11d48] text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: CONTACT */}
      {currentTab === 'contact' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#e11d48] tracking-widest">Get In Touch</span>
            <h2 className="text-4xl font-black uppercase tracking-tight">Customer Care</h2>
            <p className="text-stone-600 text-sm">
              Feedback on a store visit, catering inquiry, or wholesale coffee request?
            </p>
          </div>

          <div className="bg-stone-50 rounded-3xl border-2 border-stone-200 p-8">
            {contactSubmitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#e11d48] mx-auto" />
                <h4 className="text-xl font-black uppercase">Message Sent</h4>
                <p className="text-xs text-stone-600">The Gregorys team in NYC will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-black uppercase text-stone-700 block mb-1">Name</label>
                    <input required type="text" className="w-full bg-white border border-stone-300 rounded-xl p-3 text-xs outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-stone-700 block mb-1">Email</label>
                    <input required type="email" className="w-full bg-white border border-stone-300 rounded-xl p-3 text-xs outline-none focus:border-black" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-black uppercase text-stone-700 block mb-1">Store Visited</label>
                  <input type="text" placeholder="e.g. 100 Wall Street, NYC" className="w-full bg-white border border-stone-300 rounded-xl p-3 text-xs outline-none focus:border-black" />
                </div>
                <div>
                  <label className="text-xs font-black uppercase text-stone-700 block mb-1">Your Message</label>
                  <textarea required rows={4} className="w-full bg-white border border-stone-300 rounded-xl p-3 text-xs outline-none focus:border-black"></textarea>
                </div>
                <button type="submit" className="w-full py-3.5 rounded-full bg-black hover:bg-[#e11d48] text-white font-black text-xs uppercase tracking-wider transition-colors cursor-pointer">
                  Send to Customer Care
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Drink Customizer Modal */}
      {selectedMenuItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedMenuItem(null)}
              className="absolute top-4 right-4 p-1 text-stone-400 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#e11d48]">{selectedMenuItem.category}</span>
              <h3 className="text-2xl font-black text-black">{selectedMenuItem.name}</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">{selectedMenuItem.description}</p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label className="text-xs font-black uppercase text-stone-700 block mb-1">Size</label>
                <div className="flex gap-2">
                  {['Small (12 oz)', 'Regular (16 oz)', 'Large (20 oz)'].map(s => (
                    <button
                      key={s}
                      onClick={() => setItemSize(s)}
                      className={`flex-1 py-2 rounded-xl text-xs font-black uppercase transition-colors cursor-pointer ${
                        itemSize === s ? 'bg-black text-white' : 'bg-stone-100 text-stone-800'
                      }`}
                    >
                      {s.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase text-stone-700 block mb-1">
                  Milk Option <span className="text-[#e11d48] font-normal normal-case">(Dairy-free is always free!)</span>
                </label>
                <select
                  value={itemMilk}
                  onChange={e => setItemMilk(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-xs text-stone-800 outline-none focus:border-black font-medium"
                >
                  <option>Organic Oat Milk (Free)</option>
                  <option>Organic Almond Milk (Free)</option>
                  <option>Whole Milk</option>
                  <option>Skim Milk</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-black uppercase text-stone-700 block mb-1">Sweetness & Flavor</label>
                <select
                  value={itemSweet}
                  onChange={e => setItemSweet(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-xs text-stone-800 outline-none focus:border-black font-medium"
                >
                  <option>Standard Sweetness</option>
                  <option>Half Sweet (2 Pumps)</option>
                  <option>Unsweetened</option>
                  <option>Extra Sweet (4 Pumps)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-xl font-black text-black">${selectedMenuItem.priceUsd.toFixed(2)}</span>
                <span className="text-[10px] text-stone-400 block font-mono">approx ₹{selectedMenuItem.priceInr}</span>
              </div>
              <button
                onClick={() => {
                  addToCart(
                    selectedMenuItem,
                    `${itemSize} · ${itemMilk} · ${itemSweet}`,
                    1
                  );
                  setSelectedMenuItem(null);
                }}
                className="px-6 py-3 rounded-full bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-black uppercase tracking-wider cursor-pointer"
              >
                Add to Mobile Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div>
                <h3 className="text-lg font-black uppercase tracking-wider text-black">Order Ahead ({cartTotalCount})</h3>
                <p className="text-[10px] text-stone-500 font-mono mt-0.5">Pickup: {pickupLocation}</p>
              </div>
              <button onClick={() => setCartDrawerOpen(false)} className="p-1 hover:text-[#e11d48] text-stone-400 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-center text-xs text-stone-500 py-12">Your order bag is empty.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex gap-3">
                    <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white shrink-0">
                      <Glasses className="w-6 h-6 text-[#e11d48]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-black text-black line-clamp-1">{item.name}</h4>
                      {item.options && <p className="text-[10px] text-[#e11d48] font-mono">{item.options}</p>}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-300 rounded-lg px-2 py-0.5 text-xs bg-white">
                          <button onClick={() => updateCartQty(idx, -1)} className="cursor-pointer text-stone-500 hover:text-black">-</button>
                          <span className="px-2 font-bold">{item.quantity}</span>
                          <button onClick={() => updateCartQty(idx, 1)} className="cursor-pointer text-stone-500 hover:text-black">+</button>
                        </div>
                        <span className="text-xs font-black text-black">
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
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal:</span>
                    <b className="text-black">${cartSubtotalUsd.toFixed(2)} / ₹{cartSubtotalInr}</b>
                  </div>
                  <div className="flex justify-between text-[11px] text-stone-500">
                    <span>Store Pickup:</span>
                    <span className="text-emerald-700 font-bold">Ready in ~5 mins</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-full bg-[#e11d48] hover:bg-[#be123c] text-white text-xs uppercase tracking-wider font-black transition-colors cursor-pointer shadow-xl"
                >
                  Send Order Ahead (WhatsApp Direct)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Glasses className="w-5 h-5 text-[#e11d48]" />
              <h4 className="font-black text-sm tracking-wider uppercase">BREW & BLOOM</h4>
            </div>
            <p className="text-stone-400 font-light leading-relaxed">
              Faithful Gregorys Coffee NYC recreation. See coffee differently with high speed and zero attitude.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#e11d48] mb-3">Explore</h5>
            <ul className="space-y-2 text-stone-300 font-bold">
              <li><button onClick={() => setCurrentTab('menu')} className="hover:text-white cursor-pointer">Cold Brew & Food</button></li>
              <li><button onClick={() => setCurrentTab('locations')} className="hover:text-white cursor-pointer">Store Locations</button></li>
              <li><button onClick={() => setCurrentTab('shop')} className="hover:text-white cursor-pointer">Shop Fellow Mugs & Merch</button></li>
              <li><button onClick={() => setCurrentTab('app-rewards')} className="hover:text-white cursor-pointer">G-Family Rewards</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#e11d48] mb-3">NYC Headquarters</h5>
            <p className="text-stone-400 leading-relaxed font-mono text-[11px]">
              327 5th Avenue<br />
              New York, NY 10016<br />
              (917) 383-0636
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#e11d48] mb-3">No Extra Charge</h5>
            <p className="text-stone-400 font-light leading-relaxed">
              Dairy-free milk alternatives (Oat & Almond) are always free at every Gregorys espresso bar.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-stone-800 flex flex-wrap justify-between gap-4 text-stone-500 font-mono text-[10px]">
          <span>© 2026 BREW & BLOOM / Gregorys Coffee Recreation</span>
          <span>See Coffee Differently</span>
        </div>
      </footer>
    </div>
  );
};
