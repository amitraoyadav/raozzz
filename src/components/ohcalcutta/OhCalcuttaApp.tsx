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
  ShoppingBag,
  Flame
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { OH_CALCUTTA_ITEMS, BengaliItem } from '../../data/ohCalcuttaData';

export type CalcuttaTab = 'home' | 'starters' | 'seafood' | 'kosha' | 'reserve';

export const OhCalcuttaApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<CalcuttaTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(4);
  const [bookingDate, setBookingDate] = useState('2026-10-02');
  const [session, setSession] = useState<'Lunch' | 'Dinner'>('Dinner');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*CALCUTTA HERITAGE BENGALI GASTRONOMY — Table Reservation*\n\n*Name:* ${customerName}\n*Phone:* ${customerPhone}\n*Guests:* ${guestCount} Guests\n*Session:* ${session}\n*Date:* ${bookingDate}\n\nPlease confirm our Bengali heritage dining table.`;
    window.open(`https://wa.me/913322837171?text=${encodeURIComponent(msg)}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#100814] text-[#f5effa] font-['Space_Grotesk',sans-serif] selection:bg-[#581c87] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="oh-calcutta" />

      {/* Top Banner */}
      <div className="bg-[#581c87] text-white text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>300 YEARS OF CALCUTTA NAWABI, ZAMINDARI & COLONIAL GASTRONOMY</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">SPECIALITY RESTAURANTS HERITAGE</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#170a20]/95 backdrop-blur-md border-b border-purple-950/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-purple-200 hover:bg-purple-950 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#d97706] group-hover:text-amber-400 transition-colors uppercase block">
                OH! CALCUTTA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-purple-300 uppercase font-mono block -mt-1">
                Bengali Colonial & Nawabi Cuisine
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-purple-200">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('starters')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'starters' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Fries & Chops</button>
            <button onClick={() => setCurrentTab('seafood')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'seafood' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Mustard Fish & Prawns</button>
            <button onClick={() => setCurrentTab('kosha')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'kosha' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Kosha Mangsho & Biryani</button>
            <button onClick={() => setCurrentTab('reserve')} className={`hover:text-[#d97706] cursor-pointer py-1 ${currentTab === 'reserve' ? 'text-[#d97706] border-b-2 border-[#d97706]' : ''}`}>Reserve Table</button>
          </nav>

          <button
            onClick={() => setCurrentTab('reserve')}
            className="px-5 py-2.5 rounded-xl bg-[#581c87] hover:bg-purple-900 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#170a20] border-b border-purple-950 px-4 py-4 space-y-2 text-sm font-semibold text-purple-200">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-purple-950">Home</button>
            <button onClick={() => { setCurrentTab('starters'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-purple-950">Fries & Chops</button>
            <button onClick={() => { setCurrentTab('seafood'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-purple-950">Mustard Fish & Prawns</button>
            <button onClick={() => { setCurrentTab('kosha'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-purple-950">Kosha Mangsho & Biryani</button>
            <button onClick={() => { setCurrentTab('reserve'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-amber-400 font-bold">Reserve Table</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[520px] flex items-center bg-[#13061c] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
                alt="Oh Calcutta Bengali Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700/50 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  The Royal Kitchens of Bengal
                </span>
                <h1 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  A Taste of Calcutta’s Living History.
                </h1>
                <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-light">
                  From fragrant steamed Bhapa Ilish and tender Daab Chingri to slow-braised velvety Kosha Mangsho and authentic clay-pot Mishti Doi, experience the finest Bengali culinary legacy.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Reserve Dining Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('seafood')}
                    className="px-6 py-3.5 rounded-xl border border-purple-700/80 hover:bg-purple-900/60 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Explore Specialities
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights Grid */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
                Authentic Bengali Heritage
              </span>
              <h2 className="font-['Fraunces',serif] text-3xl font-black text-white">
                Chef’s Masterpieces
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {OH_CALCUTTA_ITEMS.slice(0, 3).map(item => (
                <div key={item.id} className="bg-[#1c0c28] border border-purple-950 rounded-2xl overflow-hidden shadow-lg group hover:border-amber-500/50 transition-all">
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-amber-500 text-black text-[10px] font-black uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-['Fraunces',serif] text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-amber-400 font-mono font-bold text-sm">
                        ₹{item.priceInr}
                      </span>
                    </div>
                    <p className="text-xs text-purple-200/70 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setCurrentTab('reserve')}
                      className="w-full mt-4 py-2.5 rounded-lg bg-purple-950 hover:bg-purple-900 text-purple-200 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Book Table for this Feast
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW: SEAFOOD / DISHES */}
      {(currentTab === 'starters' || currentTab === 'seafood' || currentTab === 'kosha') && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
              Bengal Gastronomy
            </span>
            <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white capitalize">
              {currentTab === 'starters' && 'Calcutta Starters & Crispy Chops'}
              {currentTab === 'seafood' && 'Steamed Mustard Fish & Bay Prawns'}
              {currentTab === 'kosha' && 'Velvety Kosha Mangsho & Biryani'}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OH_CALCUTTA_ITEMS.filter(item => {
              if (currentTab === 'starters') return item.category.includes('Starters');
              if (currentTab === 'seafood') return item.category.includes('Steamed') || item.category.includes('Fish');
              return item.category.includes('Curries') || item.category.includes('Biryani');
            }).map(item => (
              <div key={item.id} className="bg-[#1b0a26] border border-purple-950 p-5 rounded-2xl flex gap-4 items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-white text-sm">{item.name}</h3>
                    <span className="text-amber-400 font-mono font-bold text-sm">₹{item.priceInr}</span>
                  </div>
                  <p className="text-xs text-purple-200/70 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${item.isVeg ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-red-950 text-red-400 border border-red-800'}`}>
                      {item.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-purple-900/80 text-purple-200 font-mono">
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
          <div className="bg-[#1b0b27] border border-purple-900/80 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                Kolkata Fine Dining Reservation
              </span>
              <h1 className="font-['Fraunces',serif] text-3xl font-black text-white">
                Reserve Your Feast Table
              </h1>
              <p className="text-xs text-purple-200/70 mt-2">
                Forum Mall Elgin Road, Kolkata · Speciality Restaurants Concierge
              </p>
            </div>

            {bookingConfirmed ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="font-['Fraunces',serif] text-2xl font-bold text-white">
                  Reservation Request Dispatched!
                </h3>
                <p className="text-xs text-purple-200 max-w-md mx-auto">
                  We have forwarded your table reservation request for {guestCount} guests ({session}, {bookingDate}) via WhatsApp. Our maitre d' will confirm shortly.
                </p>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-purple-900 text-white font-bold text-xs uppercase"
                >
                  Reserve Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-purple-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      placeholder="e.g. Anirban Mukherjee"
                      className="w-full bg-[#12051c] border border-purple-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-purple-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-purple-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      placeholder="e.g. +91 98300 12345"
                      className="w-full bg-[#12051c] border border-purple-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-purple-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-purple-300 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={e => setGuestCount(Number(e.target.value))}
                      className="w-full bg-[#12051c] border border-purple-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      {[2, 3, 4, 5, 6, 8, 10, 12, 16].map(n => (
                        <option key={n} value={n}>{n} Guests</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-purple-300 mb-1.5">
                      Dining Session
                    </label>
                    <select
                      value={session}
                      onChange={e => setSession(e.target.value as any)}
                      className="w-full bg-[#12051c] border border-purple-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Lunch">Lunch (12:30 PM - 3:30 PM)</option>
                      <option value="Dinner">Dinner (7:00 PM - 11:30 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-purple-300 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={e => setBookingDate(e.target.value)}
                      className="w-full bg-[#12051c] border border-purple-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                >
                  Send Table Reservation Request
                </button>
              </form>
            )}
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-purple-950 bg-[#0e0414] py-10 text-center text-xs text-purple-400/80 space-y-2">
        <p className="font-['Fraunces',serif] text-base text-white font-bold">OH! CALCUTTA · SPECIALITY RESTAURANTS</p>
        <p>Forum Mall, 10/3 Elgin Road, Kolkata, West Bengal 700020 · Tel: +91 33 2283 7171</p>
        <p className="text-[10px] text-purple-500">Recreation of Oh! Calcutta reference website for RaoSitez portfolio.</p>
      </footer>
    </div>
  );
};
