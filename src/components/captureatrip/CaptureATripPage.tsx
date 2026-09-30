import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Compass,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  Camera,
  Heart,
  ChevronRight,
  Menu,
  X,
  Search,
  MessageSquare,
  Globe,
  Award,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  CAPTURE_TRIPS,
  CAPTURE_REVIEWS,
  CaptureTrip,
  CAPTURE_A_TRIP_WEBSITE
} from '../../data/captureATripData';

export const CaptureATripPage: React.FC = () => {
  const { setActiveView, submitLead } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchDestination, setSearchDestination] = useState<string>('');
  const [searchMonth, setSearchMonth] = useState<string>('all');
  const [activeSearchTab, setActiveSearchTab] = useState<'group' | 'custom' | 'international'>('group');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Selected Trip for Itinerary Modal
  const [activeModalTrip, setActiveModalTrip] = useState<CaptureTrip | null>(null);

  // Booking / Enquiry Form Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingTrip, setBookingTrip] = useState<CaptureTrip | null>(null);
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingPhone, setBookingPhone] = useState<string>('');
  const [bookingEmail, setBookingEmail] = useState<string>('');
  const [bookingTravelers, setBookingTravelers] = useState<number>(1);
  const [bookingDate, setBookingDate] = useState<string>('15 Oct - 22 Oct');
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

  // Custom Trip Banner Form
  const [customName, setCustomName] = useState<string>('');
  const [customPhone, setCustomPhone] = useState<string>('');
  const [customDestination, setCustomDestination] = useState<string>('Spiti Valley');
  const [customMonth, setCustomMonth] = useState<string>('October 2026');
  const [customSubmitted, setCustomSubmitted] = useState<boolean>(false);

  const handleOpenDetail = (trip: CaptureTrip) => {
    setActiveModalTrip(trip);
  };

  const handleOpenBooking = (trip: CaptureTrip) => {
    setBookingTrip(trip);
    if (trip.upcomingDates && trip.upcomingDates.length > 0) {
      setBookingDate(trip.upcomingDates[0]);
    }
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingTrip) return;

    submitLead({
      websiteSlug: 'capture-a-trip',
      businessName: 'Capture A Trip (Community Travel)',
      customerName: bookingName,
      customerPhone: bookingPhone,
      customerEmail: bookingEmail,
      serviceRequested: `Trip Booking: ${bookingTrip.title} (${bookingTravelers} Traveler${
        bookingTravelers > 1 ? 's' : ''
      }, Batch: ${bookingDate})`,
      message: bookingNotes || 'Booked directly via Capture A Trip Official Portal',
      status: 'new'
    });

    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingModalOpen(false);
      setBookingSubmitted(false);
      setBookingName('');
      setBookingPhone('');
      setBookingEmail('');
      setBookingNotes('');
    }, 2500);
  };

  const handleSubmitCustomTrip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName || !customPhone) return;

    submitLead({
      websiteSlug: 'capture-a-trip',
      businessName: 'Capture A Trip (Community Travel)',
      customerName: customName,
      customerPhone: customPhone,
      serviceRequested: `Custom Trip Plan: ${customDestination} (${customMonth})`,
      message: 'Customer requested personalized itinerary from Capture A Trip travel specialist',
      status: 'new'
    });

    setCustomSubmitted(true);
    setTimeout(() => {
      setCustomSubmitted(false);
      setCustomName('');
      setCustomPhone('');
    }, 3000);
  };

  const filteredTrips = CAPTURE_TRIPS.filter(trip => {
    const matchesCategory = selectedCategory === 'all' || trip.category === selectedCategory;
    const matchesDestination =
      searchDestination === '' ||
      trip.title.toLowerCase().includes(searchDestination.toLowerCase()) ||
      trip.categoryLabel.toLowerCase().includes(searchDestination.toLowerCase());
    return matchesCategory && matchesDestination;
  });

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#121212] font-['Inter'] flex flex-col selection:bg-[#FFAE00]/30 selection:text-black">
      {/* 1. TOP FLASH SALE ANNOUNCEMENT STRIP */}
      <aside aria-label="Announcement Bar" className="bg-[#121212] text-white text-[11px] sm:text-xs py-2 px-4 border-b border-neutral-800 text-center font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-[#FFAE00] text-black font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
            ⚡ Flash Offer
          </span>
          <span>
            Planning a long weekend getaway? Use Code <strong className="text-[#FFAE00] font-mono">EXPLORE2000</strong> for Flat ₹2,000 OFF on all upcoming group trips!
          </span>
          <span className="text-neutral-500 hidden sm:inline" aria-hidden="true">·</span>
          <span className="hidden sm:inline text-neutral-300">Limited Group Seats Remaining</span>
        </div>
      </aside>

      {/* 2. TOP INFORMATION, CONTACT & MULTI-SITE SWITCHER BAR */}
      <div className="bg-[#1A1A1A] text-neutral-300 text-xs py-2 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9★ on Google (8,500+ Verified Community Reviews)</span>
            </span>
            <span className="hidden md:inline text-neutral-600" aria-hidden="true">·</span>
            <a href="tel:+919711611211" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Travel Helpline: +91 97116 11211</span>
            </a>
            <span className="hidden md:inline text-neutral-600" aria-hidden="true">·</span>
            <a
              href="https://wa.me/917678410001"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors text-emerald-400"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us: +91 76784 10001</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <ReferenceSiteSwitcher currentSiteId="capture-a-trip" />
            <button
              onClick={() => setActiveView('home')}
              className="text-xs bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded-md transition-colors"
            >
              Exit to Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN TOP NAVIGATION (Capture A Trip Exact Brand Header) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Wordmark & Shutter Icon */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFAE00] flex items-center justify-center text-black shadow-xs group-hover:scale-105 transition-transform">
              <Camera className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-black tracking-tight flex items-center gap-1 font-['Inter']">
                <span>CAPTURE</span>
                <span className="text-[#FFAE00]">A</span>
                <span>TRIP</span>
              </div>
              <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest -mt-0.5">
                Community Travel
              </div>
            </div>
          </button>

          {/* Navigation Items */}
          <nav className="hidden xl:flex items-center gap-7 text-xs font-bold text-neutral-700 uppercase tracking-wider">
            <a href="#trips" className="hover:text-black hover:text-[#FFAE00] transition-colors">
              Group Trips
            </a>
            <a href="#trips" onClick={() => setSelectedCategory('spiti')} className="hover:text-black hover:text-[#FFAE00] transition-colors">
              Backpacking
            </a>
            <a href="#trips" onClick={() => setSelectedCategory('international')} className="hover:text-black hover:text-[#FFAE00] transition-colors">
              International
            </a>
            <a href="#custom-plan" className="hover:text-black hover:text-[#FFAE00] transition-colors">
              Customised Trips
            </a>
            <a href="#middle-age" className="hover:text-black hover:text-[#FFAE00] transition-colors flex items-center gap-1">
              <span>Middle Age (35-50)</span>
              <span className="bg-red-500 text-white text-[9px] px-1 py-0.2 rounded font-black">HOT</span>
            </a>
            <a href="#reviews" className="hover:text-black hover:text-[#FFAE00] transition-colors">
              Community Reviews
            </a>
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919711611211"
              className="hidden md:flex items-center gap-2 text-xs font-bold text-neutral-800 px-3 py-2 rounded-xl hover:bg-neutral-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FFAE00]" />
              <span>+91 97116 11211</span>
            </a>

            <button
              onClick={() => {
                const el = document.getElementById('custom-plan');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 sm:px-5 py-2.5 bg-[#FFAE00] hover:bg-[#E59D00] text-black text-xs font-black rounded-full shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5 uppercase tracking-wide"
            >
              <span>Request Callback</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-neutral-800 hover:text-black rounded-lg hover:bg-neutral-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-neutral-200 px-4 py-4 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2.5 text-xs font-bold text-neutral-800 uppercase tracking-wider">
              <a
                href="#trips"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 hover:bg-neutral-50 rounded"
              >
                Group Trips
              </a>
              <a
                href="#trips"
                onClick={() => {
                  setSelectedCategory('spiti');
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 px-2 hover:bg-neutral-50 rounded"
              >
                Spiti Valley Trips
              </a>
              <a
                href="#trips"
                onClick={() => {
                  setSelectedCategory('meghalaya');
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 px-2 hover:bg-neutral-50 rounded"
              >
                Meghalaya Backpacking
              </a>
              <a
                href="#trips"
                onClick={() => {
                  setSelectedCategory('international');
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 px-2 hover:bg-neutral-50 rounded"
              >
                International Trips (Vietnam & Bali)
              </a>
              <a
                href="#middle-age"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 hover:bg-neutral-50 rounded text-orange-600"
              >
                Middle Age Trips (35-50 Years)
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 hover:bg-neutral-50 rounded"
              >
                Wall of Love (Reviews)
              </a>
              <a
                href="#custom-plan"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 hover:bg-neutral-50 rounded text-[#FFAE00]"
              >
                Plan a Custom Trip
              </a>
            </div>
            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span>Helpline: +91 97116 11211</span>
              <a
                href="https://www.captureatrip.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFAE00] font-black underline"
              >
                Visit captureatrip.com →
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 4. HERO SECTION WITH BACKGROUND & FLOATING SEARCH WIDGET */}
      <section className="relative bg-[#111111] text-white pt-16 pb-24 sm:py-28 overflow-hidden">
        {/* Background Image Scrim */}
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFAE00]/20 border border-[#FFAE00]/40 text-[#FFAE00] text-xs font-black uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>India’s Fastest Growing Community Travel Company</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Travel with Like-Minded People. Create Memories for a Lifetime.
          </h1>

          <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Curated group trips, backpacking road trips, and social getaways for young professionals and solo travelers. 100% verified trip captains, zero awkwardness, and boutique handpicked stays.
          </p>

          {/* FLOATING TRIP SEARCH WIDGET */}
          <div className="mt-10 max-w-4xl mx-auto bg-white rounded-3xl p-3 sm:p-5 shadow-2xl text-left text-neutral-900 border border-neutral-100">
            {/* Search Tabs */}
            <div className="flex items-center gap-2 mb-4 border-b border-neutral-100 pb-3">
              <button
                onClick={() => setActiveSearchTab('group')}
                className={`px-4 py-2 rounded-full text-xs font-black transition-colors cursor-pointer ${
                  activeSearchTab === 'group'
                    ? 'bg-[#121212] text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                Group Trips (18–35)
              </button>
              <button
                onClick={() => setActiveSearchTab('international')}
                className={`px-4 py-2 rounded-full text-xs font-black transition-colors cursor-pointer ${
                  activeSearchTab === 'international'
                    ? 'bg-[#121212] text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                International Trips
              </button>
              <button
                onClick={() => setActiveSearchTab('custom')}
                className={`px-4 py-2 rounded-full text-xs font-black transition-colors cursor-pointer ${
                  activeSearchTab === 'custom'
                    ? 'bg-[#121212] text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                Middle Age (35–50)
              </button>
            </div>

            {/* Inputs Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Where to?
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Spiti, Meghalaya, Kashmir, Bali..."
                    value={searchDestination}
                    onChange={e => setSearchDestination(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FFAE00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Departure Month
                </label>
                <select
                  value={searchMonth}
                  onChange={e => setSearchMonth(e.target.value)}
                  className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FFAE00]"
                >
                  <option value="all">All Upcoming Months</option>
                  <option value="oct">October 2026 (Autumn Special)</option>
                  <option value="nov">November 2026 (Winter Snow)</option>
                  <option value="dec">December 2026 (New Year Trips)</option>
                  <option value="jan">January 2027 (Spiti Whiteout)</option>
                </select>
              </div>

              <div className="sm:self-end pt-2 sm:pt-0">
                <a
                  href="#trips"
                  className="w-full py-3 bg-[#FFAE00] hover:bg-[#E59D00] text-black text-xs font-black rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <span>Find My Group Trip</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST SIGNALS & QUANTITATIVE METRICS STRIP */}
      <section className="bg-white border-b border-neutral-200 py-6 sm:py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-black font-mono">50,000+</div>
              <div className="text-xs text-neutral-500 mt-1 font-semibold">Happy Community Travelers</div>
            </div>
            <div className="p-3 border-l border-neutral-100">
              <div className="text-2xl sm:text-3xl font-black text-[#FFAE00] font-mono flex items-center justify-center gap-1">
                <span>4.9</span>
                <Star className="w-5 h-5 fill-[#FFAE00] text-[#FFAE00]" />
              </div>
              <div className="text-xs text-neutral-500 mt-1 font-semibold">8,500+ Google Reviews</div>
            </div>
            <div className="p-3 border-l-0 lg:border-l border-neutral-100">
              <div className="text-2xl sm:text-3xl font-black text-black font-mono">1,200+</div>
              <div className="text-xs text-neutral-500 mt-1 font-semibold">Successful Group Departures</div>
            </div>
            <div className="p-3 border-l border-neutral-100">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">60%+</div>
              <div className="text-xs text-neutral-500 mt-1 font-semibold">Solo Explorers (Women-Safe)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPLORE BY TRAVEL CATEGORY */}
      <section className="py-12 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-black text-black tracking-tight">Explore by Travel Category</h2>
            <p className="text-xs text-neutral-500 mt-1">
              Select your travel mood to discover tailor-made itineraries.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            {[
              { id: 'all', label: 'All Trips' },
              { id: 'spiti', label: '🏔️ Spiti Valley Whiteout' },
              { id: 'meghalaya', label: '🌿 Meghalaya Roots & Waterfalls' },
              { id: 'kashmir', label: '🍁 Kashmir Autumn Paradise' },
              { id: 'ladakh', label: '🏍️ Ladakh & Pangong Tso' },
              { id: 'international', label: '✈️ Vietnam & Bali' },
              { id: 'weekend', label: '☕ Middle Age (35–50 Yrs)' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-black text-[#FFAE00] shadow-sm ring-2 ring-black'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UPCOMING GROUP TRIPS GRID */}
      <section id="trips" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold text-[#FFAE00] uppercase tracking-widest">
              Upcoming Fixed Group Departures
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-1">
              Trending Social Adventures
            </h2>
          </div>
          <div className="text-xs text-neutral-500 font-medium">
            Showing <strong className="text-black">{filteredTrips.length}</strong> curated itineraries
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTrips.map(trip => (
            <div
              key={trip.id}
              className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={trip.imageUrl}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFAE00] text-black text-[11px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {trip.badge}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#FFAE00] fill-[#FFAE00]" />
                    <span>{trip.rating}</span>
                    <span className="text-neutral-400">({trip.reviewsCount})</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] font-medium px-2.5 py-1 rounded-lg">
                    {trip.duration} · {trip.pickupDrop}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    {trip.categoryLabel}
                  </div>
                  <h3 className="text-lg font-black text-black leading-snug group-hover:text-[#FFAE00] transition-colors">
                    {trip.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {trip.subtitle}
                  </p>

                  {/* Highlights Bullet Row */}
                  <div className="mt-4 space-y-1.5">
                    {trip.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Next Batches */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] text-neutral-600">
                    <span className="font-bold text-neutral-900">Upcoming Batches: </span>
                    <span>{trip.upcomingDates.slice(0, 2).join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Price & Booking Footer */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-neutral-400 font-medium">Starting from</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-black">
                        ₹{trip.startingPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 line-through">
                        ₹{trip.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenDetail(trip)}
                      className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Itinerary
                    </button>
                    <button
                      onClick={() => handleOpenBooking(trip)}
                      className="px-4 py-2 bg-[#FFAE00] hover:bg-[#E59D00] text-black text-xs font-black rounded-xl transition-all shadow-xs cursor-pointer uppercase tracking-wider"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. WHY CAPTURE A TRIP — COMMUNITY FIRST VALUE PROPOSITION */}
      <section className="bg-[#121212] text-white py-16 sm:py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold text-[#FFAE00] uppercase tracking-widest mb-2">
              The Capture A Trip Difference
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Why 50,000+ Travelers Choose Us
            </h2>
            <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed">
              We aren't a traditional tour operator. We are a social travel community bringing strangers together to experience the raw magic of India and the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFAE00]/10 border border-[#FFAE00]/30 text-[#FFAE00] flex items-center justify-center font-bold text-xl">
                👥
              </div>
              <h3 className="text-lg font-bold text-white">Curated Like-Minded Cohorts</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Connect with young professionals, entrepreneurs, photographers, and solo explorers in your age group. Zero boring aunties or awkward dynamics.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFAE00]/10 border border-[#FFAE00]/30 text-[#FFAE00] flex items-center justify-center font-bold text-xl">
                🎖️
              </div>
              <h3 className="text-lg font-bold text-white">Certified Trip Captains</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Our high-energy trip captains break the ice, lead stargazing and bonfire jams, and handle every logistics headache so you just chill and soak in the views.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFAE00]/10 border border-[#FFAE00]/30 text-[#FFAE00] flex items-center justify-center font-bold text-xl">
                🛡️
              </div>
              <h3 className="text-lg font-bold text-white">100% Solo & Women Friendly</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Over 60% of our travelers join solo, with thousands of solo female explorers every year. Safe verified boutique homestays and zero single supplement fees.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFAE00]/10 border border-[#FFAE00]/30 text-[#FFAE00] flex items-center justify-center font-bold text-xl">
                🏡
              </div>
              <h3 className="text-lg font-bold text-white">Handcrafted Boutique Stays</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Say goodbye to sterile commercial hotels. Stay in traditional mud-brick homestays with heating in Spiti, riverside camps in Dawki, and private villas in Bali.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFAE00]/10 border border-[#FFAE00]/30 text-[#FFAE00] flex items-center justify-center font-bold text-xl">
                🎸
              </div>
              <h3 className="text-lg font-bold text-white">Unfiltered High-Energy Vibes</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Campfire acoustic jams, mafia and dumb charades games, sunset viewpoints, and lifelong friendships forged under shooting stars.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFAE00]/10 border border-[#FFAE00]/30 text-[#FFAE00] flex items-center justify-center font-bold text-xl">
                ✨
              </div>
              <h3 className="text-lg font-bold text-white">Hassle-Free End-to-End</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Verified sanitized 4x4 mountain vehicles, interstate permits, breakfasts, dinners, and emergency medical kits all pre-arranged seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MIDDLE AGE TRIPS (35–50 YEARS) SPECIAL SECTION */}
      <section id="middle-age" className="py-16 sm:py-20 bg-gradient-to-r from-amber-50 via-white to-amber-50/50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                <span>Dedicated Community Series</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
                Middle Age Trips (35–50 Years): Because Travel Has No Expiry Date!
              </h2>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Love exploring with a group but crave relaxed mornings, premium boutique heritage stays, mature conversations, and zero rushed itineraries? Our Middle Age Trips are specifically curated for travelers aged 35 to 50 traveling solo or with friends.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict age bracket: Travel exclusively with peers aged 35–50</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Upgraded 4-star boutique havelis, luxury Swiss desert tents & private villas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No-rush schedules with curated sunset sundowners and authentic dining</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    const middleAgeTrip = CAPTURE_TRIPS.find(t => t.id === 'middle-age-rajasthan');
                    if (middleAgeTrip) handleOpenBooking(middleAgeTrip);
                  }}
                  className="px-6 py-3 bg-black hover:bg-neutral-800 text-[#FFAE00] text-xs font-black rounded-full transition-colors cursor-pointer shadow-md uppercase tracking-wider"
                >
                  Explore Middle Age Departures →
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
                alt="Middle age group travelers in Rajasthan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-sm font-bold">Royal Rajasthan & Kerala Backwaters Series</div>
                  <div className="text-xs text-neutral-300">Paced for comfort, connection, and memories.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WALL OF LOVE — REAL COMMUNITY REVIEWS */}
      <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#FFAE00] uppercase tracking-widest">
            Wall of Love
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-1">
            Real Stories from Real Travelers
          </h2>
          <p className="mt-2 text-xs text-neutral-500">
            Over 8,500+ unedited reviews on Google. See why our travelers return for 3rd and 4th trips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPTURE_REVIEWS.map(rev => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl border border-neutral-200 p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFAE00] text-[#FFAE00]" />
                  ))}
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-bold text-black">{rev.name}</div>
                  <div className="text-[10px] text-neutral-400">
                    {rev.city} · <span className="text-[#FFAE00] font-semibold">{rev.trip}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FEATURED ON MEDIA ROW */}
      <section className="bg-neutral-100 py-10 border-t border-b border-neutral-200 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-6">
            Recognized & Featured In
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-neutral-600 font-black text-sm sm:text-base tracking-wider opacity-75">
            <span>YOURSTORY</span>
            <span>THE ECONOMIC TIMES</span>
            <span>TRIPOTO</span>
            <span>JOSH TALKS</span>
            <span>HINDUSTAN TIMES</span>
          </div>
        </div>
      </section>

      {/* 12. CUSTOM TRIP PLANNER LEAD CAPTURE SECTION */}
      <section id="custom-plan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#121212] text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-bold text-[#FFAE00] uppercase tracking-widest mb-2">
              Tailored For Your Friends & Family
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Looking for a Private Customised Trip?
            </h2>
            <p className="mt-3 text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Want a private departure with your own group of friends, family, or corporate team? Let our destination experts design your dream itinerary with customized stays, tempo travellers, and exclusive experiences.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Planning Hassle</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Flexible Dates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Best Group Pricing</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-neutral-900 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-black">Get Free Custom Trip Itinerary</h3>
            <p className="text-xs text-neutral-500 mt-0.5">We respond with itinerary & quotation within 2 hours.</p>

            {customSubmitted ? (
              <div className="mt-6 p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-sm font-bold">Custom Trip Request Received!</div>
                <div className="text-xs text-neutral-600 mt-1">
                  Our travel specialist will connect with you on WhatsApp shortly.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitCustomTrip} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siddharth Verma"
                    value={customName}
                    onChange={e => setCustomName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FFAE00]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 mb-1">Phone Number (WhatsApp Enabled)</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 97116 11211"
                    value={customPhone}
                    onChange={e => setCustomPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FFAE00]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 mb-1">Destination</label>
                    <select
                      value={customDestination}
                      onChange={e => setCustomDestination(e.target.value)}
                      className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FFAE00]"
                    >
                      <option value="Spiti Valley">Spiti Valley</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Kashmir">Kashmir</option>
                      <option value="Leh Ladakh">Leh Ladakh</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Bali">Bali</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Rajasthan">Rajasthan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 mb-1">Travel Month</label>
                    <input
                      type="text"
                      placeholder="e.g. October 2026"
                      value={customMonth}
                      onChange={e => setCustomMonth(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FFAE00]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#FFAE00] hover:bg-[#E59D00] text-black text-xs font-black rounded-xl transition-all shadow-sm cursor-pointer uppercase tracking-wider mt-2"
                >
                  Send Me Custom Itinerary & Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 13. FULL CAPTURE A TRIP FOOTER */}
      <footer className="bg-[#0D0D0D] text-neutral-300 py-16 border-t border-neutral-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFAE00] flex items-center justify-center text-black font-black text-sm">
                  CAT
                </div>
                <span className="text-xl font-black text-white tracking-tight">CAPTURE A TRIP</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                India’s fastest-growing community travel company. Curated group tours, solo-traveler friendly adventures, and life-changing friendships across India and the world.
              </p>
              <div className="text-xs text-neutral-400 space-y-1">
                <div><strong>Corporate Office:</strong> D-132, Sector 63, Noida, UP - 201301</div>
                <div><strong>Helpline:</strong> +91 97116 11211 / +91 76784 10001</div>
                <div><strong>Email:</strong> info@captureatrip.com</div>
              </div>
            </div>

            {/* Col 2: Domestic Trips */}
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Domestic Trips</div>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>Spiti Valley Winter Trips</li>
                <li>Meghalaya Backpacking</li>
                <li>Leh Ladakh Road Trip</li>
                <li>Kashmir Autumn & Houseboat</li>
                <li>Kedarnath Dham Trek</li>
                <li>Himachal Tirthan & Kasol</li>
                <li>Rajasthan Desert Glamping</li>
              </ul>
            </div>

            {/* Col 3: International Trips */}
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">International</div>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>Vietnam Explorer Tour</li>
                <li>Bali Island & Nusa Penida</li>
                <li>Thailand Backpacking</li>
                <li>Dubai Desert & Skyline</li>
                <li>Kazakhstan & Almaty</li>
                <li>Europe Discovery</li>
              </ul>
            </div>

            {/* Col 4: Quick Links */}
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Community & Legal</div>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>Middle Age (35-50 Yrs)</li>
                <li>Why Capture A Trip</li>
                <li>Traveler Stories & Reviews</li>
                <li>Cancellation Policy</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>
                  <a
                    href="https://www.captureatrip.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFAE00] font-bold underline"
                  >
                    Official captureatrip.com →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs text-neutral-500 gap-4">
            <div>© {new Date().getFullYear()} Capture A Trip Private Limited. All Rights Reserved.</div>
            <div className="flex items-center gap-4">
              <span>Made with ❤️ for Explorers</span>
              <span>ISO 9001 Certified Travel Operator</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 14. INTERACTIVE TRIP ITINERARY DETAIL MODAL */}
      {activeModalTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Header image banner */}
            <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
              <img
                src={activeModalTrip.imageUrl}
                alt={activeModalTrip.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                onClick={() => setActiveModalTrip(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#FFAE00] text-black text-[10px] font-black px-2 py-0.5 rounded uppercase">
                  {activeModalTrip.badge}
                </span>
                <h3 className="text-xl font-black mt-1">{activeModalTrip.title}</h3>
                <div className="text-xs text-neutral-300 mt-0.5">
                  {activeModalTrip.duration} · {activeModalTrip.pickupDrop}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Price Bar */}
              <div className="p-4 bg-neutral-50 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-neutral-400 font-semibold">Community Package Price</div>
                  <div className="text-2xl font-black text-black">
                    ₹{activeModalTrip.startingPrice.toLocaleString('en-IN')}{' '}
                    <span className="text-xs text-neutral-400 line-through">
                      ₹{activeModalTrip.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActiveModalTrip(null);
                    handleOpenBooking(activeModalTrip);
                  }}
                  className="px-6 py-2.5 bg-[#FFAE00] hover:bg-[#E59D00] text-black text-xs font-black rounded-full shadow-sm uppercase tracking-wider"
                >
                  Book This Batch
                </button>
              </div>

              <div>
                <h4 className="text-sm font-black text-black mb-1.5">Overview</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{activeModalTrip.overview}</p>
              </div>

              <div>
                <h4 className="text-sm font-black text-black mb-2">Key Highlights</h4>
                <div className="space-y-1.5">
                  {activeModalTrip.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black text-black mb-3">Day-by-Day Itinerary</h4>
                <div className="space-y-3">
                  {activeModalTrip.itinerary.map(day => (
                    <div key={day.day} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-6 h-6 rounded-md bg-black text-[#FFAE00] font-black text-xs flex items-center justify-center">
                          D{day.day}
                        </span>
                        <span className="font-bold text-xs text-black">{day.title}</span>
                      </div>
                      <p className="text-xs text-neutral-600 pl-8 leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 15. BOOKING RESERVATION MODAL */}
      {bookingModalOpen && bookingTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-neutral-200 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-black text-white p-5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-[#FFAE00] uppercase tracking-wider">
                  Reserve Your Group Spot
                </div>
                <h3 className="text-base font-black text-white">{bookingTrip.title}</h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {bookingSubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-lg font-black text-black">Booking Requisition Received!</h4>
                  <p className="mt-1 text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    Our trip coordinator will phone or WhatsApp you on <strong>{bookingPhone}</strong> with the batch slot confirmation and group onboarding details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="p-3 bg-neutral-50 rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <div className="text-neutral-400 text-[10px]">Batch Price</div>
                      <div className="font-black text-black text-base">
                        ₹{bookingTrip.startingPrice.toLocaleString('en-IN')}{' '}
                        <span className="text-[10px] font-normal text-neutral-500">/person</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-neutral-400 text-[10px]">Duration</div>
                      <div className="font-bold text-neutral-800">{bookingTrip.duration}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Ria Kapoor"
                        value={bookingName}
                        onChange={e => setBookingName(e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 mb-1">Phone Number (WhatsApp)</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 97116 11211"
                        value={bookingPhone}
                        onChange={e => setBookingPhone(e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 mb-1">Select Batch</label>
                      <select
                        value={bookingDate}
                        onChange={e => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-black"
                      >
                        {bookingTrip.upcomingDates.map((date, i) => (
                          <option key={i} value={date}>
                            {date}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 mb-1">Number of Travelers</label>
                      <select
                        value={bookingTravelers}
                        onChange={e => setBookingTravelers(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-black"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'Solo Explorer' : 'Travelers'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="ria@gmail.com"
                      value={bookingEmail}
                      onChange={e => setBookingEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 mb-1">Any Questions / Requests?</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Solo female traveler, vegetarian meals, pickup queries"
                      value={bookingNotes}
                      onChange={e => setBookingNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-black"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setBookingModalOpen(false)}
                      className="px-4 py-2 text-xs font-bold text-neutral-500 hover:text-black"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#FFAE00] hover:bg-[#E59D00] text-black text-xs font-black rounded-full transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      Confirm Spot Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
