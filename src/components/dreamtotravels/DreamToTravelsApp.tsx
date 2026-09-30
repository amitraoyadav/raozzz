import React, { useState, useMemo } from 'react';
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
  Shield,
  Car,
  Compass,
  Star,
  Award,
  ChevronRight,
  Check,
  Send,
  Navigation,
  Info,
  DollarSign,
  Heart,
  Luggage,
  Fuel,
  Maximize2
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  TOUR_PACKAGES,
  RENTAL_VEHICLES,
  POPULAR_DESTINATIONS,
  TRAVEL_TESTIMONIALS,
  TourPackage,
  RentalVehicle
} from '../../data/dreamToTravelsData';

export const DreamToTravelsApp: React.FC = () => {
  // Navigation & view states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'packages' | 'rentals' | 'destinations' | 'about' | 'contact'>('packages');
  
  // Package filtering
  const [selectedTourCategory, setSelectedTourCategory] = useState<string>('all');
  
  // Vehicle filtering
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('all');

  // Modals
  const [activeItineraryPackage, setActiveItineraryPackage] = useState<TourPackage | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingItem, setBookingItem] = useState<{
    type: 'tour' | 'rental';
    title: string;
    price: number;
    details: string;
  } | null>(null);

  // Quick hero search state
  const [searchTab, setSearchTab] = useState<'tour' | 'car'>('tour');
  const [heroDestination, setHeroDestination] = useState('Golden Triangle');
  const [heroDate, setHeroDate] = useState('2025-04-10');
  const [heroTravelers, setHeroTravelers] = useState('2');
  const [heroVehicle, setHeroVehicle] = useState('Innova Crysta');

  // Interactive booking form state
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [travelDate, setTravelDate] = useState('2025-04-15');
  const [travelersCount, setTravelersCount] = useState('2');
  const [pickupCity, setPickupCity] = useState('Delhi NCR');
  const [specialNote, setSpecialNote] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filtered packages
  const filteredPackages = useMemo(() => {
    if (selectedTourCategory === 'all') return TOUR_PACKAGES;
    return TOUR_PACKAGES.filter(p => p.category === selectedTourCategory);
  }, [selectedTourCategory]);

  // Filtered vehicles
  const filteredVehicles = useMemo(() => {
    if (selectedVehicleType === 'all') return RENTAL_VEHICLES;
    return RENTAL_VEHICLES.filter(v => v.type === selectedVehicleType);
  }, [selectedVehicleType]);

  const handleOpenBooking = (item: {
    type: 'tour' | 'rental';
    title: string;
    price: number;
    details: string;
  }) => {
    setBookingItem(item);
    setFormSubmitted(false);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-500 selection:text-white">
      {/* Reference Switcher Bar (Site 30/30) */}
      <ReferenceSiteSwitcher currentSiteId="dream-travels" />

      {/* Top 24/7 Hotline Bar */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 Travel Desk: +91 98110 54321</span>
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Scindia House, Connaught Place & IGI Airport T3, New Delhi</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[11px] font-bold">
              <Shield className="w-3 h-3" />
              <span>Govt Approved Operator</span>
            </span>
            <a
              href="https://wa.me/919811054321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0F2C59] to-[#0284C7] text-white flex items-center justify-center shadow-md">
                <Compass className="w-6 h-6 text-amber-400 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-[#0F2C59] tracking-tight">
                    DreamScape
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-amber-600">
                    Travels
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                  Tours, Luxury Cabs & Holiday Packages
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-700">
              <button
                onClick={() => scrollToSection('packages')}
                className="hover:text-[#0F2C59] transition-colors cursor-pointer"
              >
                Tour Packages
              </button>
              <button
                onClick={() => scrollToSection('rentals')}
                className="hover:text-[#0F2C59] transition-colors cursor-pointer"
              >
                Car Rentals & Fleet
              </button>
              <button
                onClick={() => scrollToSection('destinations')}
                className="hover:text-[#0F2C59] transition-colors cursor-pointer"
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-[#0F2C59] transition-colors cursor-pointer"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-[#0F2C59] transition-colors cursor-pointer"
              >
                Contact & Desks
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => handleOpenBooking({
                  type: 'tour',
                  title: 'Custom Travel Itinerary Request',
                  price: 0,
                  details: 'Tailor-made customized tour quote with dedicated cab'
                })}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-xs tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Instant Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-3 shadow-xl">
            <button
              onClick={() => scrollToSection('packages')}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Tour Packages</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('rentals')}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Car Rentals & Fleet</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('destinations')}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Destinations</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Contact & Locations</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenBooking({
                  type: 'tour',
                  title: 'Custom Travel Itinerary Request',
                  price: 0,
                  details: 'Tailor-made customized tour quote with dedicated cab'
                });
              }}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-center text-xs tracking-wider"
            >
              Get Instant Quote
            </button>
          </div>
        )}
      </header>

      {/* Hero Banner with Search Box */}
      <section id="hero" className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Dark Contrast Gradients */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/95 via-[#0F2C59]/80 to-[#0A192F]/85" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 w-full">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-extrabold uppercase tracking-widest mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Celebrating 20+ Years of Unforgettable Journeys</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Explore Incredible India With Tailor-Made Tours & Verified Cabs
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Specialized itineraries for Golden Triangle, Himachal, Kashmir, Rajasthan & Uttarakhand. Travel with sanitized AC Innova Crystas, Swift Dzires & Tempo Travellers.
            </p>
          </div>

          {/* Quick Search & Quote Box */}
          <div className="mt-10 max-w-4xl bg-white text-slate-900 rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-100">
            {/* Tab switch */}
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <button
                onClick={() => setSearchTab('tour')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  searchTab === 'tour'
                    ? 'bg-[#0F2C59] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Search Tour Packages</span>
              </button>
              <button
                onClick={() => setSearchTab('car')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  searchTab === 'car'
                    ? 'bg-[#0F2C59] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Car className="w-4 h-4 text-amber-400" />
                <span>Car Rentals & Outstation</span>
              </button>
            </div>

            {/* Form Fields */}
            {searchTab === 'tour' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Destination / Circuit
                  </label>
                  <select
                    value={heroDestination}
                    onChange={e => setHeroDestination(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden cursor-pointer"
                  >
                    <option value="Golden Triangle">Golden Triangle (Delhi-Agra-Jaipur)</option>
                    <option value="Himachal Paradise">Himachal (Shimla & Manali)</option>
                    <option value="Royal Rajasthan">Royal Rajasthan (Jaipur-Jodhpur-Udaipur)</option>
                    <option value="Devbhoomi Uttarakhand">Devbhoomi (Rishikesh & Mussoorie)</option>
                    <option value="Mystical Ladakh">Leh Ladakh & Pangong Tso</option>
                    <option value="Magical Kashmir">Kashmir & Dal Lake Houseboat</option>
                    <option value="Honeymoon Special">Honeymoon Special (Shimla-Manali)</option>
                    <option value="Same-Day Agra">Same-Day Agra Taj Mahal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    value={heroDate}
                    onChange={e => setHeroDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    No. of Travelers
                  </label>
                  <select
                    value={heroTravelers}
                    onChange={e => setHeroTravelers(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden cursor-pointer"
                  >
                    <option value="2">2 Adults (Couple)</option>
                    <option value="3-4">3 to 4 (Family)</option>
                    <option value="5-7">5 to 7 (Innova Group)</option>
                    <option value="8+">8+ (Tempo Traveller)</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => {
                      scrollToSection('packages');
                    }}
                    className="w-full py-2.5 px-4 bg-[#0F2C59] hover:bg-[#1E3A8A] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                  >
                    <span>View Matching Tours</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Select Fleet Vehicle
                  </label>
                  <select
                    value={heroVehicle}
                    onChange={e => setHeroVehicle(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden cursor-pointer"
                  >
                    <option value="Innova Crysta">Toyota Innova Crysta (6+1 / 7+1)</option>
                    <option value="Swift Dzire">Maruti Swift Dzire (4+1 Sedan)</option>
                    <option value="Tempo 12">Force Tempo Traveller 12-Seater</option>
                    <option value="Tempo 17">Force Tempo Traveller 17-Seater</option>
                    <option value="Toyota Fortuner">Toyota Fortuner 4x4 VIP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    defaultValue="Delhi Airport / NCR"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Trip Type
                  </label>
                  <select
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden cursor-pointer"
                  >
                    <option>Round Trip Outstation</option>
                    <option>One-Way Outstation Drop</option>
                    <option>Local 8hr / 80km Sightseeing</option>
                    <option>IGI Airport T3 Transfer</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => scrollToSection('rentals')}
                    className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                  >
                    <span>Check Cab Rates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust & Guarantees Strip */}
      <section className="bg-white border-y border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0F2C59] flex items-center justify-center shrink-0">
                <Car className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">100% Sanitized Fleet</h4>
                <p className="text-[11px] text-slate-500">Commercial AC licensed cabs</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0F2C59] flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Verified Chauffeurs</h4>
                <p className="text-[11px] text-slate-500">Background verified & polite</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0F2C59] flex items-center justify-center shrink-0">
                <DollarSign className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">No Hidden Costs</h4>
                <p className="text-[11px] text-slate-500">Tolls, parking & permits clear</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0F2C59] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">24/7 Roadside Support</h4>
                <p className="text-[11px] text-slate-500">Round-the-clock trip assist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: India Tour Packages */}
      <section id="packages" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
              Curated Holiday Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
              Handcrafted India Tour Itineraries
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600">
              Each package includes private sanitized AC transportation, deluxe hotels, morning breakfast, and certified sightseeing guides.
            </p>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'all', label: 'All Packages (8)' },
                { id: 'golden-triangle', label: 'Golden Triangle' },
                { id: 'himachal', label: 'Himachal & Shimla' },
                { id: 'rajasthan', label: 'Royal Rajasthan' },
                { id: 'uttarakhand', label: 'Devbhoomi Uttarakhand' },
                { id: 'kashmir-ladakh', label: 'Kashmir & Ladakh' },
                { id: 'honeymoon', label: 'Honeymoon Special' },
                { id: 'day-tours', label: 'Same-Day Agra' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedTourCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedTourCategory === cat.id
                      ? 'bg-[#0F2C59] text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tour Packages Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map(pkg => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image & Discount Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                      {pkg.discountBadge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                      {pkg.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-extrabold flex items-center gap-1 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating & Reviews */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-slate-800">{pkg.rating}</span>
                        <span>({pkg.reviewsCount} reviews)</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Pickup: {pkg.pickupDrop}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#0F2C59] group-hover:text-amber-600 transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {pkg.subtitle}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                      {pkg.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Starting From
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-[#0F2C59]">
                          ₹{pkg.startingPrice.toLocaleString()}
                        </span>
                        <span className="text-xs line-through text-slate-400">
                          ₹{pkg.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500">per person / all incl.</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveItineraryPackage(pkg)}
                        className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
                        title="View Day-by-Day Plan"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Itinerary</span>
                      </button>

                      <button
                        onClick={() => handleOpenBooking({
                          type: 'tour',
                          title: pkg.title,
                          price: pkg.startingPrice,
                          details: `${pkg.duration} • ${pkg.categoryLabel}`
                        })}
                        className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs transition-colors cursor-pointer shadow-xs"
                      >
                        Book Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Car Rentals & Fleet */}
      <section id="rentals" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
              Executive Fleet & Commercial Cabs
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
              Sanitized Car Rentals with Verified Chauffeurs
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600">
              Transparent per-kilometer rates, zero toll surprises, and commercially registered vehicles. Available for outstation trips, Delhi NCR local tours, and IGI Airport transfers.
            </p>

            {/* Vehicle Type Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'all', label: 'All Fleet (5)' },
                { id: 'suv', label: 'Premium MPV / SUV' },
                { id: 'sedan', label: 'Compact Sedans' },
                { id: 'tempo', label: 'Tempo Travellers' },
                { id: 'luxury', label: 'Luxury 4x4' }
              ].map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedVehicleType(type.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedVehicleType === type.id
                      ? 'bg-[#0F2C59] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map(veh => (
              <div
                key={veh.id}
                className="bg-[#F8FAFC] rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo & Badges */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-200 mb-5">
                    <img
                      src={veh.imageUrl}
                      alt={veh.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F2C59] text-white text-[11px] font-bold">
                      {veh.typeLabel}
                    </div>
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                      AC Equipped
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#0F2C59]">
                    {veh.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {veh.idealFor}
                  </p>

                  {/* Specs Pill List */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-200 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-700 bg-white p-2 rounded-xl border border-slate-100">
                      <Users className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="font-semibold">{veh.seatingCapacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 bg-white p-2 rounded-xl border border-slate-100">
                      <Luggage className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="font-semibold">{veh.luggageCapacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 bg-white p-2 rounded-xl border border-slate-100">
                      <Fuel className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="font-semibold">{veh.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 bg-white p-2 rounded-xl border border-slate-100">
                      <Navigation className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="font-semibold">GPS Tracked</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-4 space-y-1.5">
                    {veh.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rate Card & Book CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Outstation Rate</span>
                      <span className="text-xl font-black text-[#0F2C59]">₹{veh.ratePerKm}</span>
                      <span className="text-xs text-slate-500"> / km</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Local 8h/80km</span>
                      <span className="text-base font-extrabold text-slate-800">₹{veh.local8hr80kmRate.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenBooking({
                      type: 'rental',
                      title: veh.name,
                      price: veh.ratePerKm,
                      details: `Outstation rate: ₹${veh.ratePerKm}/km • Local package: ₹${veh.local8hr80kmRate}`
                    })}
                    className="w-full py-3 bg-[#0F2C59] hover:bg-[#1E3A8A] text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Car className="w-4 h-4 text-amber-400" />
                    <span>Book {veh.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Top Destinations */}
      <section id="destinations" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
              India Iconic Circuits
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
              Top Travel Destinations
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600">
              Explore India's most celebrated heritage capitals, mountain getaways, and spiritual riverfronts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_DESTINATIONS.map(dest => (
              <div
                key={dest.id}
                className="relative rounded-3xl overflow-hidden h-72 group shadow-sm hover:shadow-xl transition-all cursor-pointer"
                onClick={() => scrollToSection('packages')}
              >
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30">
                  {dest.tourCount} Tour Packages
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                    {dest.state}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-1">
                    {dest.tagline}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {dest.topAttractions.slice(0, 3).map((att, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-xs text-white">
                        {att}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: About Us / Legacy */}
      <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
                Our Journey Since 2004
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight mt-1">
                Your Trusted Travel Companion Across Incredible India
              </h2>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Founded with a mission to deliver safe, transparent, and unforgettable journeys across India, DreamScape Travels has grown from a boutique Delhi travel desk into a premier tour operator serving guests from across India and over 40 countries worldwide.
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We believe that every holiday is personal. Whether it’s an early sunrise at the Taj Mahal, a scenic family road trip to the snow-covered Solang Valley in an Innova Crysta, or a romantic houseboat stay on Dal Lake, our dedicated tour managers craft each detail with care.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#0F2C59]">20+</span>
                  <span className="text-xs text-slate-500 font-bold block mt-1">Years Experience</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-amber-600">45,000+</span>
                  <span className="text-xs text-slate-500 font-bold block mt-1">Happy Guests</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600">100%</span>
                  <span className="text-xs text-slate-500 font-bold block mt-1">Sanitized Fleet</span>
                </div>
              </div>
            </div>

            {/* Testimonials Card Display */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                What Our Travelers Say
              </span>
              {TRAVEL_TESTIMONIALS.map(t => (
                <div key={t.id} className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{t.author}</h4>
                        <span className="text-[10px] text-slate-500">{t.city} • {t.tourTaken}</span>
                      </div>
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 italic">"{t.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Contact & Locations */}
      <section id="contact" className="py-16 sm:py-24 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                24x7 India Travel Desk & Cab Dispatch
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with our senior travel planners. We provide instant customized itinerary quotes, vehicle allocations, and hotel bookings with guaranteed best rates.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Central Delhi Head Office</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Shop 14, Ground Floor, Scindia House, Outer Circle, Connaught Place, New Delhi - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Airport Service Desk & Fleet Hub</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Near IGI Airport Terminal 3 & Mahipalpur Commercial Complex, New Delhi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Phone & WhatsApp Hotline</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      +91 98110 54321 / +91 98765 43210 (24 Hours Open)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-black text-[#0F2C59] mb-1">
                Request a Custom Quote
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Receive our comprehensive itinerary proposal and vehicle fare within 30 minutes.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl p-6 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-extrabold">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Thank you, <strong>{guestName}</strong>. Our senior trip planner will call you at <strong>{guestPhone}</strong> with a detailed itinerary and exact quote.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={guestName}
                        onChange={e => setGuestName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={guestPhone}
                        onChange={e => setGuestPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={e => setTravelDate(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        No. of Travelers
                      </label>
                      <select
                        value={travelersCount}
                        onChange={e => setTravelersCount(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                      >
                        <option value="2">2 Adults (Couple)</option>
                        <option value="3-4">3 to 4 (Family)</option>
                        <option value="5-7">5 to 7 (Innova)</option>
                        <option value="8-12">8 to 12 (Tempo Traveller)</option>
                        <option value="12+">12+ (Group Coach)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                      Destinations or Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={specialNote}
                      onChange={e => setSpecialNote(e.target.value)}
                      placeholder="e.g. Interested in Golden Triangle with 4-star hotels and private Innova Crysta pickup from Delhi Airport..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0F2C59] hover:bg-[#1E3A8A] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Send Inquiry to Travel Desk</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050D1A] text-slate-400 text-xs py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <span className="font-extrabold text-white text-sm">
                DreamScape Tours & Travels
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Govt Approved Tour & Car Rental Operator</span>
            </div>
            <div className="text-center md:text-right text-[11px] text-slate-500">
              © {new Date().getFullYear()} DreamScape Tours & Travels. All Rights Reserved. Modelled faithfully after dreamtotravels.com.
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: Day-by-Day Itinerary Modal */}
      {activeItineraryPackage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 bg-[#0F2C59] text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Day-by-Day Itinerary Plan
                </span>
                <h3 className="text-lg sm:text-xl font-black mt-0.5">
                  {activeItineraryPackage.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {activeItineraryPackage.duration} • Starting from ₹{activeItineraryPackage.startingPrice.toLocaleString()} / person
                </p>
              </div>
              <button
                onClick={() => setActiveItineraryPackage(null)}
                className="p-2 rounded-xl text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="space-y-4">
                {activeItineraryPackage.itinerary.map(item => (
                  <div key={item.day} className="flex gap-4 border-l-2 border-amber-500 pl-4 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 border-2 border-white" />
                    <div>
                      <span className="text-xs font-extrabold uppercase text-amber-600 block">
                        Day {item.day} • {item.stayCity}
                      </span>
                      <h4 className="text-sm font-extrabold text-slate-900 mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                      <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        Meals: {item.meals}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inclusions */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Package Inclusions
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                  {activeItineraryPackage.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setActiveItineraryPackage(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
              >
                Close Plan
              </button>
              <button
                onClick={() => {
                  const pkg = activeItineraryPackage;
                  setActiveItineraryPackage(null);
                  handleOpenBooking({
                    type: 'tour',
                    title: pkg.title,
                    price: pkg.startingPrice,
                    details: `${pkg.duration} • ${pkg.categoryLabel}`
                  });
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-md cursor-pointer"
              >
                Book This Package
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Interactive Booking Modal */}
      {bookingModalOpen && bookingItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-fadeIn">
            <div className="p-5 bg-[#0F2C59] text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Instant Booking & Quote Request
                </span>
                <h3 className="text-base sm:text-lg font-black mt-0.5">
                  {bookingItem.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {bookingItem.details}
                </p>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="p-2 rounded-xl text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {formSubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-extrabold text-slate-900">Booking Request Received!</h4>
                  <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto">
                    We have dispatched your inquiry for <strong>{bookingItem.title}</strong> to our 24/7 travel desk. You will receive booking confirmation & driver details shortly at <strong>{guestPhone}</strong>.
                  </p>
                  <button
                    onClick={() => setBookingModalOpen(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-[#0F2C59] text-white font-bold text-xs"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      placeholder="e.g. Amit Sharma"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={guestPhone}
                        onChange={e => setGuestPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={e => setTravelDate(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        Guests
                      </label>
                      <select
                        value={travelersCount}
                        onChange={e => setTravelersCount(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                      >
                        <option value="2">2 Adults</option>
                        <option value="3-4">3 to 4</option>
                        <option value="5-7">5 to 7</option>
                        <option value="8+">8+ (Tempo)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                        Pickup City
                      </label>
                      <input
                        type="text"
                        value={pickupCity}
                        onChange={e => setPickupCity(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                      Notes / Hotel Preference
                    </label>
                    <textarea
                      rows={2}
                      value={specialNote}
                      onChange={e => setSpecialNote(e.target.value)}
                      placeholder="Add any specific requirements..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#0F2C59] outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0F2C59] hover:bg-[#1E3A8A] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Confirm Booking Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
