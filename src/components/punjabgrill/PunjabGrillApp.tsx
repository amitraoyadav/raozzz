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
  Flame,
  Award
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { PUNJAB_GRILL_ITEMS, PunjabiItem } from '../../data/punjabGrillData';

export type PunjabTab = 'home' | 'kebabs' | 'curries' | 'tandoor' | 'reserve';

export const PunjabGrillApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<PunjabTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(4);
  const [bookingDate, setBookingDate] = useState('2026-10-02');
  const [session, setSession] = useState<'Lunch' | 'Dinner'>('Dinner');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*ROYAL PUNJAB GRILL — Table Reservation*\n\n*Name:* ${customerName}\n*Phone:* ${customerPhone}\n*Guests:* ${guestCount} Guests\n*Session:* ${session}\n*Date:* ${bookingDate}\n\nPlease confirm our royal frontier dining table reservation.`;
    window.open(`https://wa.me/911141515151?text=${encodeURIComponent(msg)}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-[#fbf6f0] font-['Space_Grotesk',sans-serif] selection:bg-[#78350f] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="punjab-grill" />

      {/* Top Banner */}
      <div className="bg-[#78350f] text-amber-100 text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>GOURMET FRONTIER, ROYAL TANDOOR & PUNJABI HAUTE CUISINE</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">LITE BITE FOODS ROYALTY</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#16120e]/95 backdrop-blur-md border-b border-amber-950/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-amber-200 hover:bg-amber-950 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#f59e0b] group-hover:text-amber-300 transition-colors uppercase block">
                PUNJAB GRILL
              </span>
              <span className="text-[10px] tracking-[0.25em] text-amber-300/80 uppercase font-mono block -mt-1">
                Gourmet Frontier Haute Cuisine
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-amber-200">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('kebabs')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'kebabs' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Frontier Kebabs</button>
            <button onClick={() => setCurrentTab('curries')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'curries' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Shahi Curries</button>
            <button onClick={() => setCurrentTab('tandoor')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'tandoor' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Tandoori Breads & Dal</button>
            <button onClick={() => setCurrentTab('reserve')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'reserve' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Reserve Table</button>
          </nav>

          <button
            onClick={() => setCurrentTab('reserve')}
            className="px-5 py-2.5 rounded-xl bg-[#b45309] hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#16120e] border-b border-amber-950 px-4 py-4 space-y-2 text-sm font-semibold text-amber-200">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-amber-950">Home</button>
            <button onClick={() => { setCurrentTab('kebabs'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-amber-950">Frontier Kebabs</button>
            <button onClick={() => { setCurrentTab('curries'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-amber-950">Shahi Curries</button>
            <button onClick={() => { setCurrentTab('tandoor'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-amber-950">Tandoori Breads & Dal</button>
            <button onClick={() => { setCurrentTab('reserve'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-amber-400 font-bold">Reserve Table</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[520px] flex items-center bg-[#130d09] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
                alt="Punjab Grill Royal Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  Undivided Punjab Gastronomy
                </span>
                <h1 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Aristocratic Flavors of the Frontier.
                </h1>
                <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-light">
                  From melt-in-mouth Norwegian Salmon Tikka and succulent Raunaqeen Seekhan to 24-hour slow-cooked Dal Punjab Grill and fragrant Murgh Makhani 1947, savor Indian royalty on a plate.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Reserve Royal Table</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('kebabs')}
                    className="px-6 py-3.5 rounded-xl border border-amber-700/80 hover:bg-amber-900/60 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Explore Menu
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
                Charcoal Clay Oven Masterpieces
              </span>
              <h2 className="font-['Fraunces',serif] text-3xl font-black text-white">
                Chef’s Royal Signatures
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PUNJAB_GRILL_ITEMS.slice(0, 3).map(item => (
                <div key={item.id} className="bg-[#1c1510] border border-amber-950 rounded-2xl overflow-hidden shadow-lg group hover:border-amber-500/50 transition-all">
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
                    <p className="text-xs text-amber-200/70 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setCurrentTab('reserve')}
                      className="w-full mt-4 py-2.5 rounded-lg bg-amber-950 hover:bg-amber-900 text-amber-200 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Book Table for this Dish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW: DISHES */}
      {(currentTab === 'kebabs' || currentTab === 'curries' || currentTab === 'tandoor') && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
              Aristocratic Frontier Menu
            </span>
            <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white capitalize">
              {currentTab === 'kebabs' && 'Frontier Kebabs & Charcoal Tikka'}
              {currentTab === 'curries' && 'Royal Shahi Curries & Handi'}
              {currentTab === 'tandoor' && 'Tandoori Breads & Slow Dal'}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PUNJAB_GRILL_ITEMS.filter(item => {
              if (currentTab === 'kebabs') return item.category.includes('Kebabs') || item.category.includes('Tandoor');
              if (currentTab === 'curries') return item.category.includes('Curries');
              return item.category.includes('Dal') || item.category.includes('Breads') || item.category.includes('Desserts');
            }).map(item => (
              <div key={item.id} className="bg-[#1b140f] border border-amber-950 p-5 rounded-2xl flex gap-4 items-center">
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
                  <p className="text-xs text-amber-200/70 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${item.isVeg ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-red-950 text-red-400 border border-red-800'}`}>
                      {item.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-900/80 text-amber-200 font-mono">
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
          <div className="bg-[#1b140e] border border-amber-900/80 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                Royal Fine Dining Reservation
              </span>
              <h1 className="font-['Fraunces',serif] text-3xl font-black text-white">
                Reserve Royal Dining Table
              </h1>
              <p className="text-xs text-amber-200/70 mt-2">
                Ambience Mall, Vasant Kunj, New Delhi · Concierge: +91 11 4151 5151
              </p>
            </div>

            {bookingConfirmed ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="font-['Fraunces',serif] text-2xl font-bold text-white">
                  Reservation Dispatched to Maitre d'
                </h3>
                <p className="text-xs text-amber-200 max-w-md mx-auto">
                  Your table reservation for {guestCount} guests ({session}, {bookingDate}) has been sent via WhatsApp to our dining team.
                </p>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-amber-900 text-white font-bold text-xs uppercase"
                >
                  Reserve Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-amber-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      placeholder="e.g. Jaswinder Singh"
                      className="w-full bg-[#120c08] border border-amber-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-amber-700 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-amber-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      placeholder="e.g. +91 98111 22334"
                      className="w-full bg-[#120c08] border border-amber-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-amber-700 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-amber-300 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={e => setGuestCount(Number(e.target.value))}
                      className="w-full bg-[#120c08] border border-amber-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      {[2, 3, 4, 5, 6, 8, 10, 12, 16].map(n => (
                        <option key={n} value={n}>{n} Guests</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-amber-300 mb-1.5">
                      Dining Session
                    </label>
                    <select
                      value={session}
                      onChange={e => setSession(e.target.value as any)}
                      className="w-full bg-[#120c08] border border-amber-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Lunch">Lunch (12:00 PM - 3:30 PM)</option>
                      <option value="Dinner">Dinner (7:00 PM - 11:30 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-amber-300 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={e => setBookingDate(e.target.value)}
                      className="w-full bg-[#120c08] border border-amber-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                >
                  Confirm Table Reservation Request
                </button>
              </form>
            )}
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-amber-950 bg-[#0a0806] py-10 text-center text-xs text-amber-400/80 space-y-2">
        <p className="font-['Fraunces',serif] text-base text-white font-bold">PUNJAB GRILL · GOURMET FRONTIER HAUTE CUISINE</p>
        <p>Ambience Mall, Vasant Kunj, New Delhi 110070 · Tel: +91 11 4151 5151</p>
        <p className="text-[10px] text-amber-600">Recreation of Punjab Grill reference website for RaoSitez portfolio.</p>
      </footer>
    </div>
  );
};
