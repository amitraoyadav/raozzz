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
  Heart,
  Briefcase,
  Users
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  CITY_BREW_MENU,
  CITY_BREW_LOCATIONS,
  CITY_BREW_SHOP_PRODUCTS,
  CityBrewMenuItem,
  CityBrewLocation,
  CityBrewShopItem
} from '../../data/cityBrewData';

export type CBTab =
  | 'home'
  | 'menu'
  | 'locations'
  | 'shop'
  | 'perks'
  | 'about'
  | 'jobs'
  | 'donations'
  | 'contact';

interface CBCartItem {
  id: string;
  name: string;
  category: string;
  priceUsd: number;
  priceInr: number;
  quantity: number;
  options?: string;
  imageUrl: string;
}

export const CityBrewApp: React.FC = () => {
  const { setActiveView } = useApp();
  const [currentTab, setCurrentTab] = useState<CBTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart Drawer
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CBCartItem[]>([
    {
      id: 'cb-montana-morning',
      name: 'Montana Morning Latte',
      category: 'Featured',
      priceUsd: 5.75,
      priceInr: 575,
      quantity: 1,
      options: '16oz · Hot · Whole Milk',
      imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp'
    }
  ]);
  const [orderStore, setOrderStore] = useState('Grand Avenue, Billings');

  // Menu Category Filter
  const [activeMenuCategory, setActiveMenuCategory] = useState<string>('All');
  const [selectedMenuItem, setSelectedMenuItem] = useState<CityBrewMenuItem | null>(null);
  const [itemTemp, setItemTemp] = useState<string>('Hot');
  const [itemSize, setItemSize] = useState<string>('16oz Medium');
  const [itemMilk, setItemMilk] = useState<string>('Whole Milk');
  const [itemQty, setItemQty] = useState(1);

  // Locations Filter
  const [selectedCityFilter, setSelectedCityFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Shop Active Category
  const [shopCategory, setShopCategory] = useState<'All' | 'Coffee Beans' | 'Merch & Tumblers' | 'Gift Cards'>('All');

  // Careers / Job Application
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [jobAppliedRole, setJobAppliedRole] = useState('Barista (All Locations)');
  const [jobSubmitted, setJobSubmitted] = useState(false);

  // Contact Form
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const cartTotalCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);
  const cartSubtotalUsd = useMemo(() => cart.reduce((sum, i) => sum + i.priceUsd * i.quantity, 0), [cart]);
  const cartSubtotalInr = useMemo(() => cart.reduce((sum, i) => sum + i.priceInr * i.quantity, 0), [cart]);

  const filteredMenuItems = useMemo(() => {
    if (activeMenuCategory === 'All') return CITY_BREW_MENU;
    return CITY_BREW_MENU.filter(i => i.category === activeMenuCategory);
  }, [activeMenuCategory]);

  const filteredLocations = useMemo(() => {
    return CITY_BREW_LOCATIONS.filter(loc => {
      const matchCity = selectedCityFilter === 'All' || loc.city === selectedCityFilter;
      const matchSearch =
        loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.address.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCity && matchSearch;
    });
  }, [selectedCityFilter, searchTerm]);

  const filteredShopItems = useMemo(() => {
    if (shopCategory === 'All') return CITY_BREW_SHOP_PRODUCTS;
    return CITY_BREW_SHOP_PRODUCTS.filter(i => i.category === shopCategory);
  }, [shopCategory]);

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
    const msg = `*BREW & BLOOM — City Brew Coffee Order Ahead*\n\n*Pickup Store:* ${orderStore}\n\n${lines}\n\n*Total:* $${cartSubtotalUsd.toFixed(2)} (approx ₹${cartSubtotalInr})\n\nPlease prepare for immediate drive-thru pickup.`;
    window.open(`https://wa.me/14062599944?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2b2b2b] font-['Inter',sans-serif] selection:bg-[#1b4332] selection:text-white">
      {/* 15 Reference Sites Switcher */}
      <ReferenceSiteSwitcher currentSiteId="city-brew" />

      {/* Top Banner Announcement */}
      <div className="bg-[#1b4332] text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span>Proudly Serving the Mountain West Since 1998</span>
        <span className="text-emerald-300">|</span>
        <span>Order Ahead on the App & Earn Double Perks Points</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1b4332] flex items-center justify-center text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1b4332] uppercase block">
                  BREW & BLOOM
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#c28b38] block font-mono -mt-1">
                  City Brew Coffee · Montana
                </span>
              </div>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-stone-700">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#1b4332] cursor-pointer ${currentTab === 'home' ? 'text-[#1b4332] font-black' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('menu')} className={`hover:text-[#1b4332] cursor-pointer ${currentTab === 'menu' ? 'text-[#1b4332] font-black' : ''}`}>Menu</button>
            <button onClick={() => setCurrentTab('locations')} className={`hover:text-[#1b4332] cursor-pointer ${currentTab === 'locations' ? 'text-[#1b4332] font-black' : ''}`}>Locations</button>
            <button onClick={() => setCurrentTab('shop')} className={`hover:text-[#1b4332] cursor-pointer ${currentTab === 'shop' ? 'text-[#1b4332] font-black' : ''}`}>Shop Online</button>
            <button onClick={() => setCurrentTab('perks')} className={`hover:text-[#1b4332] cursor-pointer ${currentTab === 'perks' ? 'text-[#1b4332] font-black' : ''}`}>Perks Rewards</button>
            <button onClick={() => setCurrentTab('about')} className={`hover:text-[#1b4332] cursor-pointer ${currentTab === 'about' ? 'text-[#1b4332] font-black' : ''}`}>Our Story</button>
            <button onClick={() => setCurrentTab('jobs')} className={`hover:text-[#1b4332] cursor-pointer ${currentTab === 'jobs' ? 'text-[#1b4332] font-black' : ''}`}>Jobs</button>
            <button onClick={() => setCurrentTab('contact')} className={`hover:text-[#1b4332] cursor-pointer ${currentTab === 'contact' ? 'text-[#1b4332] font-black' : ''}`}>Contact</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentTab('locations')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1b4332] text-[#1b4332] hover:bg-[#1b4332] hover:text-white transition-colors text-xs font-bold cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Find Coffee</span>
            </button>
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b4332] text-white hover:bg-[#143826] transition-colors text-xs font-bold cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-300" />
              <span>Order ({cartTotalCount})</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-3 text-xs uppercase tracking-wider font-bold text-stone-700">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#1b4332]">Home</button>
            <button onClick={() => { setCurrentTab('menu'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#1b4332]">Discover Menu</button>
            <button onClick={() => { setCurrentTab('locations'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#1b4332]">Find Drive-Thrus</button>
            <button onClick={() => { setCurrentTab('shop'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#1b4332]">Shop Packaged Coffee</button>
            <button onClick={() => { setCurrentTab('perks'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#1b4332]">City Brew Perks</button>
            <button onClick={() => { setCurrentTab('about'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#1b4332]">About Montana Roasting</button>
            <button onClick={() => { setCurrentTab('jobs'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#1b4332]">Careers & Jobs</button>
            <button onClick={() => { setCurrentTab('donations'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#1b4332]">Community & Donations</button>
            <button onClick={() => { setCurrentTab('contact'); setMobileMenuOpen(false); }} className="block py-1 hover:text-[#1b4332]">Contact Us</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <div className="space-y-16 pb-20">
          {/* Hero Banner */}
          <section className="bg-gradient-to-r from-[#1b4332] via-[#24523e] to-[#143826] text-white py-20 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-mono font-bold tracking-widest uppercase">
                  Born & Roasted in Montana
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                  Sip, Savor, and Smile.
                </h1>
                <p className="text-emerald-100 font-light text-base sm:text-lg leading-relaxed max-w-lg">
                  BREW & BLOOM’s faithful City Brew recreation. Sourcing only the top 2% of Arabica beans globally, master-roasted in Billings, and served warm across Montana, Wyoming, and the Dakotas.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setCurrentTab('menu')}
                    className="px-6 py-3.5 rounded-full bg-[#c28b38] hover:bg-[#a9752b] text-white font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer shadow-md"
                  >
                    Discover Our Menu
                  </button>
                  <button
                    onClick={() => setCurrentTab('locations')}
                    className="px-6 py-3.5 rounded-full bg-white text-[#1b4332] hover:bg-stone-100 font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer shadow-md"
                  >
                    Find Drive-Thru Near You
                  </button>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xs flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                  <Coffee className="w-10 h-10 text-emerald-300" />
                </div>
                <h3 className="text-2xl font-bold">Montana Morning Latte</h3>
                <p className="text-xs text-emerald-100 font-light max-w-sm">
                  White chocolate, toasted caramel pecan, double shot of Cool River espresso, and creamy steamed milk. The pride of Big Sky country.
                </p>
                <button
                  onClick={() => {
                    const item = CITY_BREW_MENU[0];
                    setSelectedMenuItem(item);
                  }}
                  className="px-5 py-2.5 rounded-full bg-white text-[#1b4332] font-bold text-xs uppercase tracking-wider hover:bg-emerald-50 transition-colors cursor-pointer"
                >
                  Order Ahead ($5.75)
                </button>
              </div>
            </div>
          </section>

          {/* Signature Drinks Showcase */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-[#c28b38] tracking-widest">Mountain Favorites</span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1b4332]">Signature Handcrafted Beverages</h2>
              </div>
              <button
                onClick={() => setCurrentTab('menu')}
                className="text-xs font-bold text-[#1b4332] hover:text-[#c28b38] flex items-center gap-1 cursor-pointer mt-2 sm:mt-0"
              >
                <span>Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CITY_BREW_MENU.slice(0, 4).map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-stone-200 hover:border-[#1b4332] hover:shadow-lg transition-all p-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="aspect-[4/3] bg-stone-100 rounded-lg flex items-center justify-center p-4">
                      <div className="w-16 h-16 rounded-full bg-[#1b4332]/10 flex items-center justify-center text-[#1b4332]">
                        <Coffee className="w-8 h-8" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#c28b38]">{item.category}</span>
                    <h3 className="text-lg font-bold text-[#1b4332]">{item.name}</h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-base font-bold text-stone-900">${item.priceUsd.toFixed(2)}</span>
                      <span className="text-[10px] text-stone-400 block font-mono">approx ₹{item.priceInr}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedMenuItem(item);
                        setItemQty(1);
                      }}
                      className="px-3 py-1.5 rounded-full bg-[#1b4332] hover:bg-[#143826] text-white text-xs font-bold cursor-pointer"
                    >
                      Customize
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile App & Order Ahead Banner */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-[#1b4332] text-white rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-xl">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase font-bold text-emerald-300 tracking-widest">Skip The Line</span>
                <h2 className="text-3xl sm:text-4xl font-black">Order Ahead with our Mobile App</h2>
                <p className="text-emerald-100 text-sm font-light leading-relaxed">
                  Download the City Brew mobile app to customize your favorite lattes, choose your pick-up drive-thru, and earn 2 Perks points for every $1 spent.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 border border-white/20">
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase font-mono">Download on the</div>
                      <div className="text-xs font-bold">App Store</div>
                    </div>
                  </div>
                  <div className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 border border-white/20">
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase font-mono">Get it on</div>
                      <div className="text-xs font-bold">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-2xl border border-white/15 space-y-3">
                <h3 className="font-bold text-lg text-emerald-200">City Brew Perks Membership</h3>
                <ul className="text-xs space-y-2 text-emerald-100">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Free beverage on your birthday</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Double Points Tuesdays</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Save your favorite drink recipes for 1-click reorder</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> In-app contactless payment</li>
                </ul>
                <button
                  onClick={() => setCurrentTab('perks')}
                  className="w-full py-2.5 rounded-xl bg-[#c28b38] hover:bg-[#a9752b] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer mt-2"
                >
                  Join Perks Rewards Free
                </button>
              </div>
            </div>
          </section>

          {/* Sourcing & Roasting Teaser */}
          <section className="bg-white border-t border-b border-stone-200 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900 text-base">Top 2% Arabica Beans</h4>
                <p className="text-xs text-stone-600">We reject 98% of green coffee offered to our cuppers, sourcing only high-altitude shade-grown Arabica.</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mx-auto mb-3">
                  <Coffee className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900 text-base">Billings Master Roastery</h4>
                <p className="text-xs text-stone-600">Precision convection air roasters ensure clean caramel sweetness without bitter scorch marks.</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900 text-base">Mountain West Pride</h4>
                <p className="text-xs text-stone-600">Deeply invested in Montana, Wyoming, and Dakota communities through sports and local causes.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW: MENU */}
      {currentTab === 'menu' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#c28b38] tracking-widest">Handcrafted Drinks & Bakery</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1b4332]">Discover Our Delicious Menu</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Choose from signature Montana lattes, thick granitas, fruit smoothies, breakfast sandwiches, and jumbo bakery items.
            </p>
          </div>

          {/* Menu Category Bar */}
          <div className="flex flex-wrap justify-center gap-2 pb-4">
            {['All', 'Featured', 'Coffee & Espresso', 'Blended', 'Tea & Refreshers', 'Baked Goods', 'Savory', 'Catering'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveMenuCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeMenuCategory === cat
                    ? 'bg-[#1b4332] text-white shadow-md'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenuItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#c28b38]">{item.category}</span>
                      <h3 className="text-lg font-bold text-stone-900">{item.name}</h3>
                    </div>
                    {item.calories && (
                      <span className="text-[10px] font-mono text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                        {item.calories}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">{item.description}</p>
                  {item.tempOptions && (
                    <div className="flex gap-1.5 pt-1">
                      {item.tempOptions.map(t => (
                        <span key={t} className="text-[10px] font-medium bg-emerald-50 text-[#1b4332] px-2 py-0.5 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-stone-900">${item.priceUsd.toFixed(2)}</span>
                    <span className="text-[10px] text-stone-400 block font-mono">approx ₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedMenuItem(item);
                      setItemQty(1);
                    }}
                    className="px-4 py-2 rounded-full bg-[#1b4332] hover:bg-[#143826] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Select & Order
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
            <span className="text-xs font-mono uppercase font-bold text-[#c28b38] tracking-widest">Find Coffee Near You</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1b4332]">Drive-Thru & Store Locations</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Convenient drive-thru windows and cozy indoor seating across Montana, Wyoming, and the Mountain West.
            </p>
          </div>

          {/* Search & City Filter */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-stone-200">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
              <input
                type="text"
                placeholder="Search street, city, or zip..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-stone-200 rounded-xl outline-none focus:border-[#1b4332]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {['All', 'Billings', 'Bozeman', 'Missoula', 'Helena', 'Great Falls', 'Kalispell', 'Cody'].map(city => (
                <button
                  key={city}
                  onClick={() => setSelectedCityFilter(city)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedCityFilter === city
                      ? 'bg-[#1b4332] text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLocations.map(loc => (
              <div key={loc.id} className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#c28b38]">{loc.city}, {loc.state}</span>
                    <h3 className="text-lg font-bold text-stone-900">{loc.name}</h3>
                  </div>
                  <div className="flex gap-1.5">
                    {loc.hasDriveThru && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                        Drive-Thru
                      </span>
                    )}
                    {loc.hasIndoorSeating && (
                      <span className="text-[10px] bg-stone-100 text-stone-700 font-medium px-2 py-0.5 rounded-full">
                        Lobby
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-stone-600 font-light">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#1b4332] shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1b4332] shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#1b4332] shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#1b4332] hover:underline flex items-center gap-1"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => {
                      setOrderStore(`${loc.name}, ${loc.city}`);
                      setCurrentTab('menu');
                    }}
                    className="px-4 py-1.5 rounded-full bg-[#1b4332] hover:bg-[#143826] text-white text-xs font-bold transition-colors cursor-pointer"
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-4 gap-4">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-[#c28b38] tracking-widest">Ship to Your Door</span>
              <h2 className="text-3xl font-black text-[#1b4332]">Packaged Coffee & Drinkware</h2>
            </div>
            <div className="flex gap-2">
              {(['All', 'Coffee Beans', 'Merch & Tumblers', 'Gift Cards'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setShopCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    shopCategory === cat
                      ? 'bg-[#1b4332] text-white'
                      : 'bg-white border border-stone-200 text-stone-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShopItems.map(prod => (
              <div key={prod.id} className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all">
                <div className="space-y-4">
                  <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden flex items-center justify-center p-8">
                    <img src={prod.imageUrl} alt={prod.name} className="max-h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#c28b38]">{prod.category} {prod.roast && `· ${prod.roast} Roast`}</span>
                    <h3 className="text-lg font-bold text-stone-900">{prod.name}</h3>
                    <p className="text-xs text-stone-600 mt-1 font-light leading-relaxed">{prod.description}</p>
                    {prod.weightOrSize && (
                      <span className="text-[11px] font-mono text-stone-400 mt-2 block">{prod.weightOrSize}</span>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-stone-900">${prod.priceUsd.toFixed(2)}</span>
                    <span className="text-[10px] text-stone-400 block font-mono">approx ₹{prod.priceInr}</span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(
                        {
                          id: prod.id,
                          name: prod.name,
                          category: prod.category,
                          priceUsd: prod.priceUsd,
                          priceInr: prod.priceInr,
                          imageUrl: prod.imageUrl
                        },
                        prod.weightOrSize || 'Standard'
                      );
                    }}
                    className="px-4 py-2 rounded-full bg-[#1b4332] hover:bg-[#143826] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: PERKS REWARDS */}
      {currentTab === 'perks' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#c28b38] tracking-widest">Loyalty Rewards</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1b4332]">City Brew Perks</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Every sip earns points toward free drinks, bakery goods, and exclusive discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-2">
              <span className="text-3xl font-black text-[#c28b38]">2 Pts</span>
              <h4 className="font-bold text-stone-900 text-sm">Per $1 Spent</h4>
              <p className="text-xs text-stone-500 font-light">Earn points automatically when scanning in store or ordering ahead via the app.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-2">
              <span className="text-3xl font-black text-[#1b4332]">Free</span>
              <h4 className="font-bold text-stone-900 text-sm">Birthday Beverage</h4>
              <p className="text-xs text-stone-500 font-light">Celebrate your birthday with any size handcrafted latte, granita, or tea on us.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-2">
              <span className="text-3xl font-black text-[#c28b38]">2x</span>
              <h4 className="font-bold text-stone-900 text-sm">Double Tuesdays</h4>
              <p className="text-xs text-stone-500 font-light">Earn 4 points for every dollar spent on Tuesdays when you order with the app.</p>
            </div>
          </div>

          {/* Reward Tiers Table */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
            <h3 className="font-bold text-lg text-stone-900">What Your Points Get You</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-stone-50 rounded-xl">
                <div>
                  <h5 className="font-bold text-xs text-stone-900">Free Espresso Shot or Flavor Syrup Upgrade</h5>
                  <p className="text-[10px] text-stone-500">Add white chocolate, caramel pecan, or extra shots</p>
                </div>
                <span className="text-xs font-mono font-bold text-[#1b4332] bg-emerald-100 px-3 py-1 rounded-full">25 Points</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-stone-50 rounded-xl">
                <div>
                  <h5 className="font-bold text-xs text-stone-900">Fresh Bakery Muffin, Scone, or Giant Cookie</h5>
                  <p className="text-[10px] text-stone-500">Choice of blueberry monkey muffin, pumpkin, or cinnamon scone</p>
                </div>
                <span className="text-xs font-mono font-bold text-[#1b4332] bg-emerald-100 px-3 py-1 rounded-full">60 Points</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-stone-50 rounded-xl">
                <div>
                  <h5 className="font-bold text-xs text-stone-900">Any Handcrafted Drink (Any Size)</h5>
                  <p className="text-[10px] text-stone-500">Montana Morning, Grizzly Granita, 406 Latte, or Hot Chocolate</p>
                </div>
                <span className="text-xs font-mono font-bold text-[#1b4332] bg-emerald-100 px-3 py-1 rounded-full">120 Points</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-stone-50 rounded-xl">
                <div>
                  <h5 className="font-bold text-xs text-stone-900">12 oz Bag of Whole Bean Coffee</h5>
                  <p className="text-[10px] text-stone-500">Montana Morning, Cool River Espresso, or Yellowstone French Roast</p>
                </div>
                <span className="text-xs font-mono font-bold text-[#1b4332] bg-emerald-100 px-3 py-1 rounded-full">250 Points</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: ABOUT US */}
      {currentTab === 'about' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#c28b38] tracking-widest">Our Heritage</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1b4332]">Born and Roasted in Montana</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              From our first café in Billings in 1998 to becoming the Mountain West's premier specialty drive-thru roaster.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 space-y-6 text-stone-700 text-sm leading-relaxed font-light">
            <p>
              City Brew Coffee began its journey in 1998 with its first location in Billings, Montana. Initially sourcing beans through outside distributors, our founders quickly recognized that true greatness required taking complete control over every stage of the roasting process.
            </p>
            <p>
              We invested in our own state-of-the-art roasting facility in Billings, MT and hired certified master roasters. Today, we rigorously cup and sample harvests to select only the top 2% of Arabica beans available anywhere in the world.
            </p>
            <p>
              Over the last 28 years, City Brew has expanded across Montana, Wyoming, North Dakota, and South Dakota, earning the loyalty of morning commuters, families, and outdoor enthusiasts who refuse to compromise on coffee quality.
            </p>
          </div>
        </div>
      )}

      {/* VIEW: JOBS */}
      {currentTab === 'jobs' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#c28b38] tracking-widest">Join the Brew Crew</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1b4332]">Careers at City Brew</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              We offer competitive wages, flexible schedules, free coffee on shift, 401(k) matching, and fast-track leadership opportunities.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Drive-Thru Barista', loc: 'Billings, Bozeman & Missoula', type: 'Full-Time & Part-Time' },
              { title: 'Shift Supervisor', loc: 'Helena & Great Falls', type: 'Full-Time' },
              { title: 'Store General Manager', loc: 'Kalispell & Cody WY', type: 'Full-Time Salary' },
              { title: 'Roastery Technician & Quality Assistant', loc: 'Billings Headquarters', type: 'Full-Time' }
            ].map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-base text-stone-900">{job.title}</h4>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">{job.loc} · {job.type}</p>
                </div>
                <button
                  onClick={() => {
                    setJobAppliedRole(`${job.title} (${job.loc})`);
                    setJobModalOpen(true);
                  }}
                  className="px-5 py-2 rounded-full bg-[#1b4332] hover:bg-[#143826] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Apply Online
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
            <span className="text-xs font-mono uppercase font-bold text-[#c28b38] tracking-widest">Customer Support</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1b4332]">Contact City Brew Care</h2>
            <p className="text-stone-600 text-sm">
              Questions about an order, our Billings roastery, or your local drive-thru experience?
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-stone-200 p-8">
            {contactSubmitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-stone-900">Message Received</h4>
                <p className="text-xs text-stone-600">Our Billings customer care team will respond within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Your Name</label>
                    <input required type="text" className="w-full border border-stone-200 rounded-xl p-3 text-xs outline-none focus:border-[#1b4332]" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Email Address</label>
                    <input required type="email" className="w-full border border-stone-200 rounded-xl p-3 text-xs outline-none focus:border-[#1b4332]" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Location Visited</label>
                  <input type="text" placeholder="e.g. Grand Ave Billings, MT" className="w-full border border-stone-200 rounded-xl p-3 text-xs outline-none focus:border-[#1b4332]" />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Message</label>
                  <textarea required rows={4} className="w-full border border-stone-200 rounded-xl p-3 text-xs outline-none focus:border-[#1b4332]"></textarea>
                </div>
                <button type="submit" className="w-full py-3.5 rounded-full bg-[#1b4332] hover:bg-[#143826] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer">
                  Send Customer Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Item Customizer Modal */}
      {selectedMenuItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedMenuItem(null)}
              className="absolute top-4 right-4 p-1 text-stone-400 hover:text-stone-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#c28b38]">{selectedMenuItem.category}</span>
              <h3 className="text-2xl font-black text-[#1b4332]">{selectedMenuItem.name}</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">{selectedMenuItem.description}</p>
            </div>

            {/* Modifiers */}
            <div className="space-y-4 pt-2">
              {selectedMenuItem.tempOptions && selectedMenuItem.tempOptions.length > 1 && (
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Temperature</label>
                  <div className="flex gap-2">
                    {selectedMenuItem.tempOptions.map(t => (
                      <button
                        key={t}
                        onClick={() => setItemTemp(t)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                          itemTemp === t
                            ? 'bg-[#1b4332] text-white'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Cup Size</label>
                <select
                  value={itemSize}
                  onChange={e => setItemSize(e.target.value)}
                  className="w-full border border-stone-200 rounded-xl p-2.5 text-xs text-stone-800 outline-none focus:border-[#1b4332]"
                >
                  <option>12oz Small</option>
                  <option>16oz Medium</option>
                  <option>20oz Large</option>
                  <option>24oz Extra Large (Iced/Blended)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Milk / Alternative</label>
                <select
                  value={itemMilk}
                  onChange={e => setItemMilk(e.target.value)}
                  className="w-full border border-stone-200 rounded-xl p-2.5 text-xs text-stone-800 outline-none focus:border-[#1b4332]"
                >
                  <option>Whole Milk (Standard)</option>
                  <option>Skim Milk</option>
                  <option>Oat Milk (+ $0.75)</option>
                  <option>Almond Milk (+ $0.75)</option>
                  <option>Half & Half Breve (+ $0.60)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-xl font-black text-stone-900">${selectedMenuItem.priceUsd.toFixed(2)}</span>
                <span className="text-[10px] text-stone-400 block font-mono">approx ₹{selectedMenuItem.priceInr}</span>
              </div>
              <button
                onClick={() => {
                  addToCart(
                    selectedMenuItem,
                    `${itemSize} · ${itemTemp} · ${itemMilk}`,
                    itemQty
                  );
                  setSelectedMenuItem(null);
                }}
                className="px-6 py-3 rounded-full bg-[#1b4332] hover:bg-[#143826] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Add to Order Ahead
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
                <h3 className="text-lg font-black text-[#1b4332]">Order Ahead ({cartTotalCount})</h3>
                <p className="text-[10px] text-stone-500 font-mono mt-0.5">Pickup: {orderStore}</p>
              </div>
              <button onClick={() => setCartDrawerOpen(false)} className="p-1 hover:text-[#1b4332] text-stone-400 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-center text-xs text-stone-500 py-12">Your order is empty.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 flex gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#1b4332] shrink-0">
                      <Coffee className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-stone-900 line-clamp-1">{item.name}</h4>
                      {item.options && <p className="text-[10px] text-[#c28b38] font-mono">{item.options}</p>}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200 rounded-lg px-2 py-0.5 text-xs bg-white">
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
              <div className="border-t border-stone-200 pt-4 space-y-3">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal:</span>
                    <b className="text-stone-900">${cartSubtotalUsd.toFixed(2)} / ₹{cartSubtotalInr}</b>
                  </div>
                  <div className="flex justify-between text-[11px] text-stone-500">
                    <span>Drive-Thru Pickup:</span>
                    <span className="text-emerald-700 font-bold">Ready in ~7 mins</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 rounded-full bg-[#1b4332] hover:bg-[#143826] text-white text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer shadow-lg"
                >
                  Confirm & Send Order Ahead (WhatsApp)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#143826] text-white py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-black text-sm tracking-wider uppercase mb-3">BREW & BLOOM</h4>
            <p className="text-emerald-100 font-light leading-relaxed">
              Faithful City Brew recreation. Proudly roasting and serving the Mountain West since 1998.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-emerald-300 mb-3">Explore</h5>
            <ul className="space-y-2 text-emerald-100 font-medium">
              <li><button onClick={() => setCurrentTab('menu')} className="hover:underline">Drink & Bakery Menu</button></li>
              <li><button onClick={() => setCurrentTab('locations')} className="hover:underline">Drive-Thru Locations</button></li>
              <li><button onClick={() => setCurrentTab('shop')} className="hover:underline">Packaged Coffee Beans</button></li>
              <li><button onClick={() => setCurrentTab('perks')} className="hover:underline">City Brew Perks App</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-emerald-300 mb-3">Billings HQ</h5>
            <p className="text-emerald-100 leading-relaxed font-mono text-[11px]">
              1640 Grand Avenue<br />
              Billings, MT 59102<br />
              (406) 259-9944
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-emerald-300 mb-3">Top 2% Arabica</h5>
            <p className="text-emerald-100 font-light leading-relaxed">
              We roast only the top 2% of beans globally in our state-of-the-art Billings convection roasting facility.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-emerald-800 flex flex-wrap justify-between gap-4 text-emerald-300/70 font-mono text-[10px]">
          <span>© 2026 BREW & BLOOM / City Brew Recreation</span>
          <span>Born & Roasted in Montana</span>
        </div>
      </footer>
    </div>
  );
};
