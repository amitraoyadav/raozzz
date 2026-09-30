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
  Coffee,
  Heart
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { SAGAR_RATNA_ITEMS, SagarRatnaItem } from '../../data/sagarRatnaData';

export type SagarTab = 'home' | 'dosas' | 'vadas' | 'thali' | 'reserve';

export const SagarRatnaApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<SagarTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(4);
  const [bookingDate, setBookingDate] = useState('2026-10-02');
  const [mealTime, setMealTime] = useState<'Breakfast' | 'Lunch' | 'Dinner'>('Dinner');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*SAGAR RATNA PURE VEG DINING — Table Reservation*\n\n*Name:* ${customerName}\n*Phone:* ${customerPhone}\n*Guests:* ${guestCount} Guests\n*Meal:* ${mealTime}\n*Date:* ${bookingDate}\n\nPlease confirm our pure vegetarian South Indian dining reservation.`;
    window.open(`https://wa.me/911124107444?text=${encodeURIComponent(msg)}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f9f7] text-[#1c2e24] font-['Inter',sans-serif] selection:bg-[#14532d] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="sagar-ratna" />

      {/* Top Banner */}
      <div className="bg-[#14532d] text-emerald-100 text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>AUTHENTIC SOUTH INDIAN PURE VEGETARIAN DINING SINCE 1991</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">100% PURE VEG GASTRO SANCTUARY</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-950/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-emerald-900 hover:bg-emerald-50 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#14532d] uppercase block">
                SAGAR RATNA
              </span>
              <span className="text-[10px] tracking-[0.2em] text-emerald-700 uppercase font-mono block -mt-1 font-semibold">
                Pure Vegetarian South Indian
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-emerald-900">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#14532d] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#14532d] border-b-2 border-[#14532d]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('dosas')} className={`hover:text-[#14532d] cursor-pointer py-1 ${currentTab === 'dosas' ? 'text-[#14532d] border-b-2 border-[#14532d]' : ''}`}>Crispy Dosas</button>
            <button onClick={() => setCurrentTab('vadas')} className={`hover:text-[#14532d] cursor-pointer py-1 ${currentTab === 'vadas' ? 'text-[#14532d] border-b-2 border-[#14532d]' : ''}`}>Idlis & Vadas</button>
            <button onClick={() => setCurrentTab('thali')} className={`hover:text-[#14532d] cursor-pointer py-1 ${currentTab === 'thali' ? 'text-[#14532d] border-b-2 border-[#14532d]' : ''}`}>South Indian Thali</button>
            <button onClick={() => setCurrentTab('reserve')} className={`hover:text-[#14532d] cursor-pointer py-1 ${currentTab === 'reserve' ? 'text-[#14532d] border-b-2 border-[#14532d]' : ''}`}>Reserve Table</button>
          </nav>

          <button
            onClick={() => setCurrentTab('reserve')}
            className="px-5 py-2.5 rounded-xl bg-[#14532d] hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-emerald-100 px-4 py-4 space-y-2 text-sm font-semibold text-emerald-900">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-50">Home</button>
            <button onClick={() => { setCurrentTab('dosas'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-50">Crispy Dosas</button>
            <button onClick={() => { setCurrentTab('vadas'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-50">Idlis & Vadas</button>
            <button onClick={() => { setCurrentTab('thali'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-50">South Indian Thali</button>
            <button onClick={() => { setCurrentTab('reserve'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-emerald-700 font-bold">Reserve Table</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[500px] flex items-center bg-[#0d2a17] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1600&q=80"
                alt="Sagar Ratna Dosa Feast"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  Pure Vegetarian Excellence
                </span>
                <h1 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Golden Dosas & Filter Kaapi Memories.
                </h1>
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-light">
                  From paper-crisp Mysore Masala Dosas and piping hot Medu Vadas to authentic 12-dish South Indian thalis and aromatic brass-tumbler degree filter kaapi.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Reserve Dining Table</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('dosas')}
                    className="px-6 py-3.5 rounded-xl border border-emerald-500 hover:bg-emerald-900/60 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Explore Dosas
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-[#14532d] block mb-1 font-bold">
                South Indian Vegetarian Classics
              </span>
              <h2 className="font-['Fraunces',serif] text-3xl font-black text-emerald-950">
                Signature Specialties
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SAGAR_RATNA_ITEMS.slice(0, 3).map(item => (
                <div key={item.id} className="bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#14532d] text-white text-[10px] font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-emerald-950 text-base">
                        {item.name}
                      </h3>
                      <span className="text-[#14532d] font-mono font-bold text-base">
                        ₹{item.priceInr}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setCurrentTab('reserve')}
                      className="w-full mt-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-[#14532d] hover:text-white text-emerald-950 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Book Table For This Dosa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW: DISHES */}
      {(currentTab === 'dosas' || currentTab === 'vadas' || currentTab === 'thali') && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#14532d] block mb-1 font-bold">
              Pure South Indian Menu
            </span>
            <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-emerald-950 capitalize">
              {currentTab === 'dosas' && 'Crispy Signature Tiffin Dosas'}
              {currentTab === 'vadas' && 'Steamed Soft Idlis & Crunchy Vadas'}
              {currentTab === 'thali' && 'Grand South Indian Banana Leaf Thalis'}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAGAR_RATNA_ITEMS.filter(item => {
              if (currentTab === 'dosas') return item.category.includes('Dosas') || item.category.includes('Uttapams');
              if (currentTab === 'vadas') return item.category.includes('Vadas') || item.category.includes('Idlis');
              return item.category.includes('Thalis') || item.category.includes('Kaapi');
            }).map(item => (
              <div key={item.id} className="bg-white border border-emerald-100 p-5 rounded-2xl flex gap-4 items-center shadow-xs">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-emerald-950 text-sm">{item.name}</h3>
                    <span className="text-[#14532d] font-mono font-bold text-sm">₹{item.priceInr}</span>
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-800">
                      100% PURE VEG
                    </span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* VIEW: RESERVE */}
      {currentTab === 'reserve' && (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white border border-emerald-100 rounded-3xl p-8 sm:p-10 shadow-lg">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#14532d] block mb-1 font-bold">
                South Indian Vegetarian Dining
              </span>
              <h1 className="font-['Fraunces',serif] text-3xl font-black text-emerald-950">
                Reserve Your Family Table
              </h1>
              <p className="text-xs text-stone-500 mt-2">
                Hotel Ashok Yatri Niwas, Ashoka Road, New Delhi · Tel: +91 11 2410 7444
              </p>
            </div>

            {bookingConfirmed ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="font-['Fraunces',serif] text-2xl font-bold text-emerald-950">
                  Reservation Dispatched!
                </h3>
                <p className="text-xs text-stone-600 max-w-md mx-auto">
                  Your table reservation for {guestCount} guests ({mealTime}, {bookingDate}) has been sent via WhatsApp to our restaurant staff.
                </p>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#14532d] text-white font-bold text-xs uppercase"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-900 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      placeholder="e.g. Ramesh Iyer"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-emerald-950 placeholder-stone-400 focus:outline-none focus:border-[#14532d]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-900 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      placeholder="e.g. +91 98450 12345"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-emerald-950 placeholder-stone-400 focus:outline-none focus:border-[#14532d]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-900 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={e => setGuestCount(Number(e.target.value))}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-emerald-950 focus:outline-none focus:border-[#14532d]"
                    >
                      {[2, 3, 4, 5, 6, 8, 10, 12].map(n => (
                        <option key={n} value={n}>{n} Guests</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-900 mb-1.5">
                      Meal Session
                    </label>
                    <select
                      value={mealTime}
                      onChange={e => setMealTime(e.target.value as any)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-emerald-950 focus:outline-none focus:border-[#14532d]"
                    >
                      <option value="Breakfast">Breakfast (8:00 AM - 11:30 AM)</option>
                      <option value="Lunch">Lunch (12:00 PM - 3:30 PM)</option>
                      <option value="Dinner">Dinner (7:00 PM - 11:00 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-900 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={e => setBookingDate(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-emerald-950 focus:outline-none focus:border-[#14532d]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 rounded-xl bg-[#14532d] hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Send Table Reservation Request
                </button>
              </form>
            )}
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white py-10 text-center text-xs text-stone-500 space-y-2">
        <p className="font-['Fraunces',serif] text-base text-emerald-950 font-bold">SAGAR RATNA PURE VEGETARIAN SOUTH INDIAN</p>
        <p>Ashoka Road, New Delhi 110001 · Tel: +91 11 2410 7444</p>
        <p className="text-[10px] text-stone-400">Recreation of Sagar Ratna reference website for RaoSitez portfolio.</p>
      </footer>
    </div>
  );
};
