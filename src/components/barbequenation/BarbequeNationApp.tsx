import React, { useState } from 'react';
import {
  Flame,
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
import { BBQ_ITEMS, BBQItem } from '../../data/barbequeNationData';

export type BBQTab = 'home' | 'skewers' | 'buffet' | 'kulfi' | 'reserve';

export const BarbequeNationApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<BBQTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(4);
  const [mealType, setMealType] = useState<'Lunch' | 'Dinner'>('Dinner');
  const [bookingDate, setBookingDate] = useState('2026-10-02');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*GRILL NATION — Buffet Table Reservation*\n\n*Name:* ${customerName}\n*Phone:* ${customerPhone}\n*Guests:* ${guestCount} People\n*Meal:* ${mealType}\n*Date:* ${bookingDate}\n\nPlease confirm our live grill table booking!`;
    window.open(`https://wa.me/918069028722?text=${encodeURIComponent(msg)}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#120a07] text-[#f5ede8] font-['Inter',sans-serif] selection:bg-[#b91c1c] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="barbeque-nation" />

      {/* Top Banner */}
      <div className="bg-[#b91c1c] text-white text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>UNLIMITED LIVE CHARCOAL TABLE SKEWERS & DESSERT BUFFET</span>
        <span>•</span>
        <span>CELEBRATE BIRTHDAYS & ANNIVERSARIES WITH COMPLIMENTARY CAKE</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#1c100c]/95 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-200 hover:bg-stone-800 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#f59e0b] group-hover:text-amber-400 transition-colors uppercase block">
                GRILL NATION
              </span>
              <span className="text-[10px] tracking-[0.25em] text-red-400 uppercase font-mono block -mt-1">
                Live Skewers & Unlimited Buffet
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-stone-300">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('skewers')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'skewers' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Live Skewers</button>
            <button onClick={() => setCurrentTab('buffet')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'buffet' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Buffet & Mains</button>
            <button onClick={() => setCurrentTab('kulfi')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'kulfi' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Kulfi Nation</button>
            <button onClick={() => setCurrentTab('reserve')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'reserve' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Book a Table</button>
          </nav>

          <button
            onClick={() => setCurrentTab('reserve')}
            className="px-5 py-2.5 rounded-xl bg-[#b91c1c] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Table</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1c100c] border-b border-stone-800 px-4 py-4 space-y-2 text-sm font-semibold text-stone-300">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-800">Home</button>
            <button onClick={() => { setCurrentTab('skewers'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-800">Live Skewers</button>
            <button onClick={() => { setCurrentTab('buffet'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-800">Buffet & Mains</button>
            <button onClick={() => { setCurrentTab('kulfi'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-stone-800">Kulfi Nation Bar</button>
            <button onClick={() => { setCurrentTab('reserve'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-amber-400 font-bold">Book a Table</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[550px] flex items-center bg-[#1c0b05] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
                alt="Barbeque Nation Live Grill"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0502] via-[#0d0502]/85 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  India’s Favorite Live Table-Grill Feast
                </span>
                <h1 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Where Grills Sizzle & Feasts Never End.
                </h1>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                  Enjoy unlimited live charcoal skewers embedded directly into your dining table, crisp Cajun potatoes, rich Awadhi curries, and over 10 varieties of dip-and-twist artisan kulfis.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="px-6 py-3.5 rounded-xl bg-[#b91c1c] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Book Buffet Table</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('skewers')}
                    className="px-6 py-3.5 rounded-xl border border-stone-600 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Explore Skewers
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Pillars */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1f120c] p-8 rounded-3xl border border-amber-900/30 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-900/50 text-amber-400 flex items-center justify-center font-bold text-xl">
                  🔥
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-amber-400">Live Table Charcoal Grill</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Embedded right into your tabletop. Baste chicken tikkas, tiger prawns, and spiced paneer with custom sauces at your own pace.
                </p>
              </div>

              <div className="bg-[#1f120c] p-8 rounded-3xl border border-amber-900/30 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-900/50 text-amber-400 flex items-center justify-center font-bold text-xl">
                  🍛
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-amber-400">Grand Main Course Buffet</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  From slow-cooked Dum Mutton Biryani and 24-hour Dal Makhani to Oriental noodles and fresh Mediterranean mezze.
                </p>
              </div>

              <div className="bg-[#1f120c] p-8 rounded-3xl border border-amber-900/30 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-900/50 text-amber-400 flex items-center justify-center font-bold text-xl">
                  🍨
                </div>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-amber-400">Live Kulfi Nation Station</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Over 10 flavors of hand-crafted kulfis with 20+ decadent toppings: falooda, rooh afza, crushed pistachios, and warm chocolate sauce.
                </p>
              </div>
            </div>
          </section>

          {/* Popular Menu Preview */}
          <section className="py-12 bg-[#180d09] border-t border-amber-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Feast Highlights</span>
                  <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-white">Live Starters & Buffet</h2>
                </div>
                <button onClick={() => setCurrentTab('skewers')} className="text-xs font-bold text-amber-400 hover:underline cursor-pointer">
                  See Full Buffet Menu →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {BBQ_ITEMS.map(item => (
                  <div key={item.id} className="bg-[#24150e] rounded-2xl border border-amber-900/30 overflow-hidden shadow-xs flex flex-col justify-between">
                    <div className="h-48 bg-stone-900 overflow-hidden relative">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      <span className={`absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.isVeg ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
                        {item.isVeg ? 'PURE VEG' : 'NON-VEG'}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="font-bold text-sm text-white font-['Fraunces',serif]">{item.name}</h4>
                        <p className="text-xs text-stone-400 mt-1 line-clamp-3 leading-relaxed">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                        <span className="text-xs font-bold text-amber-400">Included in Buffet</span>
                        <button
                          onClick={() => setCurrentTab('reserve')}
                          className="px-3 py-1.5 rounded-lg bg-[#b91c1c] hover:bg-red-700 text-white text-xs font-bold cursor-pointer"
                        >
                          Book Feast
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* VIEW: SKEWERS */}
      {currentTab === 'skewers' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Unlimited Charcoal Skewers</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white mt-1">Live Table Skewers & Starters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BBQ_ITEMS.filter(i => i.category === 'Live Table Skewers' || i.category === 'Starters & Crispies').map(item => (
              <div key={item.id} className="bg-[#24150e] rounded-2xl border border-amber-900/30 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="h-52 bg-stone-900 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">{item.category}</span>
                    <h3 className="font-bold text-base text-white font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="w-full py-2.5 rounded-xl bg-[#b91c1c] hover:bg-red-700 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Reserve Table for Live Skewers
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: BUFFET */}
      {currentTab === 'buffet' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">The Grand Spread</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white mt-1">Main Course Buffet</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BBQ_ITEMS.filter(i => i.category === 'Main Course Buffet').map(item => (
              <div key={item.id} className="bg-[#24150e] rounded-2xl border border-amber-900/30 overflow-hidden shadow-xs flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-56 sm:h-auto bg-stone-900 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">{item.category}</span>
                    <h3 className="font-bold text-base text-white font-['Fraunces',serif] mt-1">{item.name}</h3>
                    <p className="text-xs text-stone-400 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="w-full py-2.5 rounded-xl bg-[#b91c1c] hover:bg-red-700 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Book Buffet Pass
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: KULFI */}
      {currentTab === 'kulfi' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Sweet Ending</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white mt-1">Kulfi Nation Bar</h2>
          </div>

          <div className="max-w-2xl mx-auto bg-[#24150e] p-8 rounded-3xl border border-amber-900/30 space-y-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80"
              alt="Kulfi Nation"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <h3 className="font-['Fraunces',serif] text-2xl font-bold text-amber-400">Dip, Twist & Sprinkles</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Choose from classic Malai, Kesar Pista, Paan, Mango, and Belgian Chocolate kulfis. Dip them in condensed milk, falooda vermicelli, rooh afza, and toasted crushed dry fruits.
            </p>
            <button
              onClick={() => setCurrentTab('reserve')}
              className="px-6 py-3 rounded-xl bg-[#b91c1c] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Reserve Table for Unlimited Kulfi
            </button>
          </div>
        </div>
      )}

      {/* VIEW: RESERVE TABLE */}
      {currentTab === 'reserve' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Instant Confirmation</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white mt-1">Reserve Your Buffet Table</h2>
          </div>

          {bookingConfirmed ? (
            <div className="bg-[#1f120c] p-8 rounded-3xl border border-emerald-500/40 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Table Request Sent!</h3>
              <p className="text-xs text-stone-300">
                Your reservation details have been sent via WhatsApp to our host desk. We will confirm your table shortly.
              </p>
              <button
                onClick={() => setBookingConfirmed(false)}
                className="px-6 py-2.5 rounded-xl bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="bg-[#1f120c] p-8 rounded-3xl border border-amber-900/30 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#120a07] border border-stone-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">WhatsApp Phone</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={e => setCustomerPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#120a07] border border-stone-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">Number of Guests</label>
                  <select
                    value={guestCount}
                    onChange={e => setGuestCount(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-[#120a07] border border-stone-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map(n => (
                      <option key={n} value={n}>{n} Guests</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">Meal Session</label>
                  <select
                    value={mealType}
                    onChange={e => setMealType(e.target.value as 'Lunch' | 'Dinner')}
                    className="w-full px-4 py-3 rounded-xl bg-[#120a07] border border-stone-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Lunch">Lunch (12:00 PM – 3:30 PM)</option>
                    <option value="Dinner">Dinner (7:00 PM – 11:30 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">Date</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={e => setBookingDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#120a07] border border-stone-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#b91c1c] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg mt-4"
              >
                Confirm Live Table Booking via WhatsApp
              </button>
            </form>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0a0503] text-stone-400 py-10 border-t border-amber-950 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-white text-sm">GRILL NATION & LIVE SKEWERS</h4>
            <p className="text-stone-500 mt-1">Recreation of Barbeque Nation (Bengaluru & Nationwide)</p>
          </div>
          <p className="text-stone-500 text-center sm:text-right">
            Indiranagar 100ft Road · Bengaluru, Karnataka · +91 80 6902 8722
          </p>
        </div>
      </footer>
    </div>
  );
};
