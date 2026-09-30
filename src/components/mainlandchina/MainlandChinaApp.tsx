import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  X,
  Menu as MenuIcon,
  Sparkles,
  ArrowRight,
  Plus,
  ShoppingBag
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { MAINLAND_CHINA_ITEMS, ChineseItem } from '../../data/mainlandChinaData';

export type ChineseTab = 'home' | 'dimsum' | 'mains' | 'noodles' | 'reserve';

export const MainlandChinaApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<ChineseTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(4);
  const [bookingDate, setBookingDate] = useState('2026-10-02');
  const [session, setSession] = useState<'Lunch' | 'Dinner'>('Dinner');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*DYNASTY IMPERIAL CHINESE CUISINE — Table Reservation*\n\n*Name:* ${customerName}\n*Phone:* ${customerPhone}\n*Guests:* ${guestCount} Guests\n*Session:* ${session}\n*Date:* ${bookingDate}\n\nPlease confirm our dining reservation.`;
    window.open(`https://wa.me/913322837777?text=${encodeURIComponent(msg)}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#140509] text-[#fce7ed] font-['Space_Grotesk',sans-serif] selection:bg-[#881337] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="mainland-china" />

      {/* Top Banner */}
      <div className="bg-[#881337] text-white text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>IMPERIAL CANTONESE DIM SUM & MASTERFUL SICHUAN WOK GASTRONOMY</span>
        <span>•</span>
        <span>SPECIALITY RESTAURANTS FLAGSHIP</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#1c080d]/95 backdrop-blur-md border-b border-rose-950/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-rose-200 hover:bg-rose-950 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#d97706] group-hover:text-amber-400 transition-colors uppercase block">
                DYNASTY
              </span>
              <span className="text-[10px] tracking-[0.25em] text-rose-300 uppercase font-mono block -mt-1">
                Imperial Chinese Cuisine
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-rose-200">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('dimsum')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'dimsum' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Imperial Dim Sum</button>
            <button onClick={() => setCurrentTab('mains')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'mains' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Sichuan Wok Mains</button>
            <button onClick={() => setCurrentTab('noodles')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'noodles' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Noodles & Claypots</button>
            <button onClick={() => setCurrentTab('reserve')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'reserve' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Reserve Table</button>
          </nav>

          <button
            onClick={() => setCurrentTab('reserve')}
            className="px-5 py-2.5 rounded-xl bg-[#881337] hover:bg-rose-900 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Dining</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1c080d] border-b border-rose-950 px-4 py-4 space-y-2 text-sm font-semibold text-rose-200">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-rose-950">Home</button>
            <button onClick={() => { setCurrentTab('dimsum'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-rose-950">Imperial Dim Sum</button>
            <button onClick={() => { setCurrentTab('mains'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-rose-950">Sichuan Wok Mains</button>
            <button onClick={() => { setCurrentTab('noodles'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-rose-950">Noodles & Claypots</button>
            <button onClick={() => { setCurrentTab('reserve'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-amber-400 font-bold">Reserve Table</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[520px] flex items-center bg-[#170408] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
                alt="Mainland China Fine Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-rose-950/80 border border-rose-600/50 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  The Art of the Wok & Bamboo Steamer
                </span>
                <h1 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Timeless Flavors of Imperial China.
                </h1>
                <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed font-light">
                  From delicate hand-pleated Siu Mai and crystal truffle dumplings to fiery Sichuan peppercorn gravies and crackling claypot rice, prepared by master Chinese chefs.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="px-6 py-3.5 rounded-xl bg-[#881337] hover:bg-rose-900 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Reserve a Table</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('dimsum')}
                    className="px-6 py-3.5 rounded-xl border border-rose-800 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    View Dim Sum Trolley
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Pillars */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1f0a10] p-8 rounded-3xl border border-rose-950/80 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-rose-900/40 text-amber-400 flex items-center justify-center font-bold text-xl">
                  🥟
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-amber-400">Hand-Pleated Dim Sum</h3>
                <p className="text-xs text-rose-200/70 leading-relaxed">
                  Crafted daily in bamboo steamers: crystal prawn Har Gao, Siu Mai, and truffle edamame parcels served with house chili oil.
                </p>
              </div>

              <div className="bg-[#1f0a10] p-8 rounded-3xl border border-rose-950/80 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-rose-900/40 text-amber-400 flex items-center justify-center font-bold text-xl">
                  🌶️
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-amber-400">Authentic Sichuan Heat</h3>
                <p className="text-xs text-rose-200/70 leading-relaxed">
                  Real imported red Sichuan peppercorns, fermented broad bean paste, and cast-iron wok hei imparting authentic tongue-tingling aromatics.
                </p>
              </div>

              <div className="bg-[#1f0a10] p-8 rounded-3xl border border-rose-950/80 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-rose-900/40 text-amber-400 flex items-center justify-center font-bold text-xl">
                  🐉
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-amber-400">Imperial Dining Ambience</h3>
                <p className="text-xs text-rose-200/70 leading-relaxed">
                  Hand-carved rosewood panels, jade accents, and soothing Chinese acoustic melodies for memorable family feasts and celebratory dinners.
                </p>
              </div>
            </div>
          </section>

          {/* Signature Dishes Grid */}
          <section className="py-12 bg-[#170509] border-t border-rose-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Chef Specialties</span>
                  <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-white">Imperial Signatures</h2>
                </div>
                <button onClick={() => setCurrentTab('dimsum')} className="text-xs font-bold text-rose-400 hover:underline cursor-pointer">
                  Explore All Dishes →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {MAINLAND_CHINA_ITEMS.map(item => (
                  <div key={item.id} className="bg-[#240c13] rounded-2xl border border-rose-950 overflow-hidden shadow-xs flex flex-col justify-between">
                    <div className="h-52 bg-stone-900 overflow-hidden relative">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      <span className={`absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.isVeg ? 'bg-emerald-600 text-white' : 'bg-rose-700 text-white'}`}>
                        {item.isVeg ? 'PURE VEG' : 'NON-VEG'}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-white font-['Fraunces',serif]">{item.name}</h4>
                          <span className="text-xs font-bold text-amber-400">₹{item.priceInr}</span>
                        </div>
                        <p className="text-xs text-rose-200/70 mt-1 line-clamp-3 leading-relaxed">{item.description}</p>
                      </div>
                      <button
                        onClick={() => setCurrentTab('reserve')}
                        className="w-full py-2.5 rounded-xl bg-[#881337] hover:bg-rose-900 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        Reserve Table to Taste
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* VIEW: DIM SUM */}
      {currentTab === 'dimsum' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Steamed in Bamboo</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white mt-1">Imperial Dim Sum Baskets</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MAINLAND_CHINA_ITEMS.filter(i => i.category === 'Imperial Dim Sum').map(item => (
              <div key={item.id} className="bg-[#240c13] rounded-2xl border border-rose-950 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-stone-900 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">{item.category}</span>
                    <h3 className="font-bold text-base text-white font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-rose-200/70 mt-2 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-amber-400 block mt-3">₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="w-full py-2.5 rounded-xl bg-[#881337] hover:bg-rose-900 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Reserve Dim Sum Table
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: MAINS */}
      {currentTab === 'mains' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Wok Hei Magic</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white mt-1">Sichuan & Cantonese Mains</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MAINLAND_CHINA_ITEMS.filter(i => i.category.includes('Mains')).map(item => (
              <div key={item.id} className="bg-[#240c13] rounded-2xl border border-rose-950 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-stone-900 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">{item.category}</span>
                    <h3 className="font-bold text-base text-white font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-rose-200/70 mt-2 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-amber-400 block mt-3">₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="w-full py-2.5 rounded-xl bg-[#881337] hover:bg-rose-900 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Book Table
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: NOODLES & CLAYPOTS */}
      {currentTab === 'noodles' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Crispy & Tossed</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white mt-1">Noodles, Claypots & Desserts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MAINLAND_CHINA_ITEMS.filter(i => i.category.includes('Noodles') || i.category.includes('Desserts')).map(item => (
              <div key={item.id} className="bg-[#240c13] rounded-2xl border border-rose-950 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-stone-900 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">{item.category}</span>
                    <h3 className="font-bold text-base text-white font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-rose-200/70 mt-2 leading-relaxed">{item.description}</p>
                    <span className="text-base font-extrabold text-amber-400 block mt-3">₹{item.priceInr}</span>
                  </div>
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="w-full py-2.5 rounded-xl bg-[#881337] hover:bg-rose-900 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: TABLE RESERVATION */}
      {currentTab === 'reserve' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Fine Dining Table</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white mt-1">Reserve at Dynasty Imperial</h2>
          </div>

          {bookingConfirmed ? (
            <div className="bg-[#1f0a10] p-8 rounded-3xl border border-emerald-500/40 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Table Request Received!</h3>
              <p className="text-xs text-stone-300">
                Our Maitre D’ has received your reservation request via WhatsApp. We look forward to hosting you.
              </p>
              <button
                onClick={() => setBookingConfirmed(false)}
                className="px-6 py-2.5 rounded-xl bg-[#881337] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="bg-[#1f0a10] p-8 rounded-3xl border border-rose-950 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-rose-200 mb-2">Guest Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#140509] border border-rose-900 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-rose-200 mb-2">WhatsApp Contact</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={e => setCustomerPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#140509] border border-rose-900 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-rose-200 mb-2">Party Size</label>
                  <select
                    value={guestCount}
                    onChange={e => setGuestCount(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-[#140509] border border-rose-900 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    {[1, 2, 3, 4, 6, 8, 10, 12, 16].map(n => (
                      <option key={n} value={n}>{n} Guests</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-rose-200 mb-2">Dining Session</label>
                  <select
                    value={session}
                    onChange={e => setSession(e.target.value as 'Lunch' | 'Dinner')}
                    className="w-full px-4 py-3 rounded-xl bg-[#140509] border border-rose-900 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Lunch">Lunch (12:30 PM – 3:30 PM)</option>
                    <option value="Dinner">Dinner (7:00 PM – 11:30 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-rose-200 mb-2">Date</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={e => setBookingDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#140509] border border-rose-900 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#881337] hover:bg-rose-900 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg mt-4"
              >
                Send Table Request via WhatsApp
              </button>
            </form>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-rose-300/70 py-10 border-t border-rose-950 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-white text-sm">DYNASTY IMPERIAL CHINESE CUISINE</h4>
            <p className="text-stone-500 mt-1">Recreation of Mainland China (Speciality Restaurants Ltd.)</p>
          </div>
          <p className="text-stone-500 text-center sm:text-right">
            Park Street · Kolkata, West Bengal · +91 33 2283 7777
          </p>
        </div>
      </footer>
    </div>
  );
};
