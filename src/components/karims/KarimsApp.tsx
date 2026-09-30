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
import { KARIMS_ITEMS, MughlaiItem } from '../../data/karimsData';

export type KarimTab = 'home' | 'kebabs' | 'korma' | 'biryani' | 'reserve';

export const KarimsApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<KarimTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(4);
  const [bookingDate, setBookingDate] = useState('2026-10-02');
  const [session, setSession] = useState<'Lunch' | 'Dinner'>('Dinner');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*KARIM'S JAMA MASJID 1913 — Table Reservation*\n\n*Name:* ${customerName}\n*Phone:* ${customerPhone}\n*Guests:* ${guestCount} Guests\n*Session:* ${session}\n*Date:* ${bookingDate}\n\nPlease confirm our royal Mughlai dastarkhwan table reservation.`;
    window.open(`https://wa.me/911123269880?text=${encodeURIComponent(msg)}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#07130f] text-[#f2faf7] font-['Space_Grotesk',sans-serif] selection:bg-[#064e3b] selection:text-white">
      {/* Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="karims" />

      {/* Top Banner */}
      <div className="bg-[#064e3b] text-amber-200 text-xs font-bold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span>ROYAL MUGHLAI DYNASTY CULINARY INSTITUTION SINCE 1913</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">GALI KABABIAN, JAMA MASJID OLD DELHI</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0c1f19]/95 backdrop-blur-md border-b border-emerald-900/60 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-emerald-200 hover:bg-emerald-950 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentTab('home')} className="text-left cursor-pointer group">
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-black tracking-tight text-[#f59e0b] group-hover:text-amber-300 transition-colors uppercase block">
                KARIM'S
              </span>
              <span className="text-[10px] tracking-[0.25em] text-emerald-300/80 uppercase font-mono block -mt-1">
                Historic Old Delhi 1913
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-emerald-200">
            <button onClick={() => setCurrentTab('home')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'home' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Home</button>
            <button onClick={() => setCurrentTab('kebabs')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'kebabs' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Burra & Seekh Kebabs</button>
            <button onClick={() => setCurrentTab('korma')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'korma' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Degi Shahi Korma</button>
            <button onClick={() => setCurrentTab('biryani')} className={`hover:text-[#f59e0b] cursor-pointer py-1 ${currentTab === 'biryani' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b]' : ''}`}>Dum Biryani & Khamiri</button>
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
          <div className="lg:hidden bg-[#0c1f19] border-b border-emerald-900 px-4 py-4 space-y-2 text-sm font-semibold text-emerald-200">
            <button onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-900">Home</button>
            <button onClick={() => { setCurrentTab('kebabs'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-900">Burra & Seekh Kebabs</button>
            <button onClick={() => { setCurrentTab('korma'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-900">Degi Shahi Korma</button>
            <button onClick={() => { setCurrentTab('biryani'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-emerald-900">Dum Biryani & Khamiri</button>
            <button onClick={() => { setCurrentTab('reserve'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-amber-400 font-bold">Reserve Table</button>
          </div>
        )}
      </header>

      {/* VIEW: HOME */}
      {currentTab === 'home' && (
        <main>
          {/* Hero */}
          <section className="relative min-h-[520px] flex items-center bg-[#05110d] text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
                alt="Karims Jama Masjid Kebabs"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-2xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  Royal Mughal Kitchens Since 1913
                </span>
                <h1 className="font-['Fraunces',serif] text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  The Imperial Dastarkhwan of Old Delhi.
                </h1>
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-light">
                  Direct descendants of Haji Karimuddin, royal cook to the Mughal emperor, preparing world-renowned Mutton Burra Kebabs, Badam Pasanda, Shahi Korma, and pillow-soft hot Khamiri rotis.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setCurrentTab('reserve')}
                    className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Reserve Dastarkhwan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentTab('kebabs')}
                    className="px-6 py-3.5 rounded-xl border border-emerald-600/80 hover:bg-emerald-900/60 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Explore Kebabs
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
                Imperial Heritage Dishes
              </span>
              <h2 className="font-['Fraunces',serif] text-3xl font-black text-white">
                World-Famous Specialties
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {KARIMS_ITEMS.slice(0, 3).map(item => (
                <div key={item.id} className="bg-[#0f241d] border border-emerald-900/60 rounded-2xl overflow-hidden shadow-lg group hover:border-amber-500/50 transition-all">
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
                    <p className="text-xs text-emerald-200/70 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setCurrentTab('reserve')}
                      className="w-full mt-4 py-2.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-200 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Book Table for this Specialty
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW: DISHES */}
      {(currentTab === 'kebabs' || currentTab === 'korma' || currentTab === 'biryani') && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
              Karim's 1913 Menu
            </span>
            <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-black text-white capitalize">
              {currentTab === 'kebabs' && 'Royal Burra & Seekh Kebabs'}
              {currentTab === 'korma' && 'Slow Copper Deg Mughlai Korma'}
              {currentTab === 'biryani' && 'Woodfire Dum Biryani & Khamiri Breads'}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {KARIMS_ITEMS.filter(item => {
              if (currentTab === 'kebabs') return item.category.includes('Kebabs');
              if (currentTab === 'korma') return item.category.includes('Curries') || item.category.includes('Korma');
              return item.category.includes('Biryani') || item.category.includes('Breads') || item.category.includes('Desserts');
            }).map(item => (
              <div key={item.id} className="bg-[#0e211a] border border-emerald-900/60 p-5 rounded-2xl flex gap-4 items-center">
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
                  <p className="text-xs text-emerald-200/70 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${item.isVeg ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-red-950 text-red-400 border border-red-800'}`}>
                      {item.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-200 font-mono">
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
          <div className="bg-[#0e221b] border border-emerald-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                Historic Jama Masjid Dining
              </span>
              <h1 className="font-['Fraunces',serif] text-3xl font-black text-white">
                Reserve Dastarkhwan Table
              </h1>
              <p className="text-xs text-emerald-200/70 mt-2">
                16, Gali Kababian, Jama Masjid, Old Delhi · Tel: +91 11 2326 9880
              </p>
            </div>

            {bookingConfirmed ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="font-['Fraunces',serif] text-2xl font-bold text-white">
                  Dastarkhwan Reservation Dispatched!
                </h3>
                <p className="text-xs text-emerald-200 max-w-md mx-auto">
                  Your table reservation for {guestCount} guests ({session}, {bookingDate}) has been sent via WhatsApp to Karim's hospitality team.
                </p>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-900 text-white font-bold text-xs uppercase"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      placeholder="e.g. Tariq Khan"
                      className="w-full bg-[#081510] border border-emerald-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      placeholder="e.g. +91 98111 88990"
                      className="w-full bg-[#081510] border border-emerald-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-300 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={e => setGuestCount(Number(e.target.value))}
                      className="w-full bg-[#081510] border border-emerald-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      {[2, 3, 4, 5, 6, 8, 10, 12, 16].map(n => (
                        <option key={n} value={n}>{n} Guests</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-300 mb-1.5">
                      Dining Session
                    </label>
                    <select
                      value={session}
                      onChange={e => setSession(e.target.value as any)}
                      className="w-full bg-[#081510] border border-emerald-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Lunch">Lunch (12:00 PM - 3:30 PM)</option>
                      <option value="Dinner">Dinner (7:00 PM - 11:30 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-emerald-300 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={e => setBookingDate(e.target.value)}
                      className="w-full bg-[#081510] border border-emerald-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                >
                  Confirm Dastarkhwan Reservation
                </button>
              </form>
            )}
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-emerald-950 bg-[#050f0c] py-10 text-center text-xs text-emerald-400/80 space-y-2">
        <p className="font-['Fraunces',serif] text-base text-white font-bold">KARIM'S JAMA MASJID 1913</p>
        <p>16 Gali Kababian, Jama Masjid, Old Delhi 110006 · Tel: +91 11 2326 9880</p>
        <p className="text-[10px] text-emerald-600">Recreation of Karim's reference website for RaoSitez portfolio.</p>
      </footer>
    </div>
  );
};
