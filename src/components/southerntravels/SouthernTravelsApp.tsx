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
  Award,
  Globe,
  ChevronRight,
  Menu,
  X,
  Search,
  MessageSquare,
  Building,
  Plane,
  Bus,
  Sparkles,
  Info
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { SOUTHERN_PACKAGES, SouthernTourPackage, SOUTHERN_TRAVELS_WEBSITE } from '../../data/southernTravelsData';

type SouthernView = 'home' | 'packages' | 'package-detail' | 'brandstore' | 'services' | 'about' | 'contact';

export const SouthernTravelsApp: React.FC = () => {
  const { setActiveView, submitLead } = useApp();
  const [currentView, setCurrentView] = useState<SouthernView>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<SouthernTourPackage | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingPackage, setBookingPackage] = useState<SouthernTourPackage | null>(null);
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingPhone, setBookingPhone] = useState<string>('');
  const [bookingEmail, setBookingEmail] = useState<string>('');
  const [bookingTravelers, setBookingTravelers] = useState<number>(2);
  const [bookingDate, setBookingDate] = useState<string>('2026-10-15');
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

  // Quick Enquiry Form in Brandstore / Contact
  const [enquiryName, setEnquiryName] = useState<string>('');
  const [enquiryPhone, setEnquiryPhone] = useState<string>('');
  const [enquiryDest, setEnquiryDest] = useState<string>('Golden Triangle');
  const [enquirySubmitted, setEnquirySubmitted] = useState<boolean>(false);

  const handleOpenDetail = (pkg: SouthernTourPackage) => {
    setSelectedPackage(pkg);
    setCurrentView('package-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (pkg: SouthernTourPackage) => {
    setBookingPackage(pkg);
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingPackage || !bookingName || !bookingPhone) return;

    submitLead({
      websiteSlug: 'southern-travels',
      businessName: 'Southern Travels (New Delhi Brandstore)',
      customerName: bookingName,
      customerPhone: bookingPhone,
      customerEmail: bookingEmail,
      serviceRequested: `Booking: ${bookingPackage.title} (${bookingPackage.duration}, ${bookingTravelers} Travelers, Date: ${bookingDate})`,
      message: bookingNotes || 'Booked via Southern Travels Online Portal',
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

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryName || !enquiryPhone) return;

    submitLead({
      websiteSlug: 'southern-travels',
      businessName: 'Southern Travels (New Delhi Brandstore)',
      customerName: enquiryName,
      customerPhone: enquiryPhone,
      serviceRequested: `Brandstore Enquiry: ${enquiryDest}`,
      message: 'Customer requested callback from Delhi Brandstore travel advisor',
      status: 'new'
    });

    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquirySubmitted(false);
      setEnquiryName('');
      setEnquiryPhone('');
    }, 3000);
  };

  const filteredPackages = SOUTHERN_PACKAGES.filter(pkg => {
    const matchesCat = selectedCategory === 'all' || pkg.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destinationsCovered.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-['Inter'] flex flex-col selection:bg-[#E67E22]/20 selection:text-[#0B2545]">
      {/* Top Header Information & Multi-Site Switcher Bar */}
      <div className="bg-[#0B2545] text-slate-200 text-xs py-2 px-4 border-b border-[#133E87]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>India's Most Trusted Travel Brand Since 1970</span>
            </span>
            <span className="hidden md:inline text-slate-400" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Delhi Brandstore: Scindia House, Janpath, CP</span>
            </span>
            <span className="hidden md:inline text-slate-400" aria-hidden="true">·</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>24x7 Helpline: 011-43532000</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ReferenceSiteSwitcher currentSiteId="southern-travels" />
            <button
              onClick={() => setActiveView('home')}
              className="text-xs bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded-md transition-colors"
            >
              Exit to Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Brand title, nav links, primary action */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B2545] to-[#133E87] flex items-center justify-center text-white font-black text-xl shadow-xs">
              ST
            </div>
            <div>
              <div className="text-xl font-black text-[#0B2545] tracking-tight">SOUTHERN TRAVELS</div>
              <div className="text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                New Delhi Brandstore
              </div>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <button
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0B2545] transition-colors cursor-pointer ${
                currentView === 'home' ? 'text-[#0B2545] border-b-2 border-[#E67E22] pb-0.5' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentView('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0B2545] transition-colors cursor-pointer ${
                currentView === 'packages' ? 'text-[#0B2545] border-b-2 border-[#E67E22] pb-0.5' : ''
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => {
                setCurrentView('brandstore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0B2545] transition-colors cursor-pointer ${
                currentView === 'brandstore' ? 'text-[#0B2545] border-b-2 border-[#E67E22] pb-0.5' : ''
              }`}
            >
              Delhi Brandstore
            </button>
            <button
              onClick={() => {
                setCurrentView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0B2545] transition-colors cursor-pointer ${
                currentView === 'services' ? 'text-[#0B2545] border-b-2 border-[#E67E22] pb-0.5' : ''
              }`}
            >
              Travel Services
            </button>
            <button
              onClick={() => {
                setCurrentView('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0B2545] transition-colors cursor-pointer ${
                currentView === 'about' ? 'text-[#0B2545] border-b-2 border-[#E67E22] pb-0.5' : ''
              }`}
            >
              Our 50-Year Legacy
            </button>
            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0B2545] transition-colors cursor-pointer ${
                currentView === 'contact' ? 'text-[#0B2545] border-b-2 border-[#E67E22] pb-0.5' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setCurrentView('brandstore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#E67E22] hover:bg-[#D35400] text-white text-xs font-bold rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Enquire at Brandstore</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
              <button
                onClick={() => {
                  setCurrentView('home');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentView('packages');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Tour Packages ({SOUTHERN_PACKAGES.length})
              </button>
              <button
                onClick={() => {
                  setCurrentView('brandstore');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                New Delhi Brandstore
              </button>
              <button
                onClick={() => {
                  setCurrentView('services');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Travel Services & Flights
              </button>
              <button
                onClick={() => {
                  setCurrentView('about');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                About Our 50-Year Legacy
              </button>
              <button
                onClick={() => {
                  setCurrentView('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Contact & Direction
              </button>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Helpline: 011-43532000</span>
              <a
                href="https://www.southerntravelsindia.com/brandstore.aspx-new-delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B2545] font-semibold underline"
              >
                Visit Original Site
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Router */}
      <main className="flex-1">
        {/* VIEW 1: HOME PAGE */}
        {currentView === 'home' && (
          <div>
            {/* Hero Section with Proposition and Visual Scrim */}
            <section className="relative bg-[#0B2545] text-white py-16 lg:py-24 overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80")'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/90 to-transparent" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>Official New Delhi Brandstore & Global Headquarters</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    Explore India and the World with Unrivalled Trust
                  </h1>
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    Over 50 years of excellence serving 5 million+ satisfied travelers. Visit our flagship New Delhi Brandstore at Connaught Place for daily Delhi city sightseeing, Golden Triangle tours, Kashmir escapes, and curated European discoveries.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        setCurrentView('packages');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#E67E22] hover:bg-[#D35400] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Tour Packages</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setCurrentView('brandstore');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all cursor-pointer"
                    >
                      Visit Delhi Brandstore
                    </button>
                  </div>

                  {/* Trust Signals */}
                  <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Govt. of India Recognized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>4.9/5 Rating (15,000+ Reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <span>1,500+ Global Destinations</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Filter Search Bar */}
            <section className="max-w-7xl mx-auto px-4 -mt-6 relative z-10">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-5 flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 w-full relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search tours (e.g. Delhi, Golden Triangle, Kashmir, Europe)..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-[#0B2545] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    All Tours
                  </button>
                  <button
                    onClick={() => setSelectedCategory('day-tour')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                      selectedCategory === 'day-tour'
                        ? 'bg-[#0B2545] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Delhi 1-Day Tours
                  </button>
                  <button
                    onClick={() => setSelectedCategory('domestic')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                      selectedCategory === 'domestic'
                        ? 'bg-[#0B2545] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    India Domestic
                  </button>
                  <button
                    onClick={() => setSelectedCategory('international')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                      selectedCategory === 'international'
                        ? 'bg-[#0B2545] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    International
                  </button>
                </div>
              </div>
            </section>

            {/* Featured Tour Packages Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                    Best-Selling Holiday Packages
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight mt-1">
                    Curated Itineraries with Guaranteed Departures
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setCurrentView('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#0B2545] hover:text-[#E67E22] flex items-center gap-1 cursor-pointer"
                >
                  <span>View All {SOUTHERN_PACKAGES.length} Tours</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map(pkg => (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={pkg.imageUrl}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B2545]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                        {pkg.duration}
                      </div>
                      <div className="absolute top-3 right-3 bg-white/95 text-slate-800 text-[11px] font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span>{pkg.rating}</span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] font-semibold text-orange-600 mb-1">
                          {pkg.categoryLabel}
                        </div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B2545] transition-colors leading-snug">
                          {pkg.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {pkg.overview}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1">
                          {pkg.destinationsCovered.slice(0, 3).map((dest, i) => (
                            <span key={i} className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                              {dest}
                            </span>
                          ))}
                          {pkg.destinationsCovered.length > 3 && (
                            <span className="text-[10px] text-slate-400 self-center">
                              +{pkg.destinationsCovered.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-slate-400 font-medium">Starting from</div>
                          <div className="text-base font-black text-[#0B2545]">
                            ₹{pkg.startingPrice.toLocaleString('en-IN')}
                            <span className="text-[10px] font-normal text-slate-500"> /person</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleOpenDetail(pkg)}
                            className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => handleOpenBooking(pkg)}
                            className="px-3.5 py-1.5 bg-[#0B2545] hover:bg-[#133E87] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                          >
                            Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Brandstore Spotlight Section */}
            <section className="bg-gradient-to-b from-slate-100 to-white py-16 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                      <Building className="w-3.5 h-3.5" />
                      <span>New Delhi Flagship Experience Center</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight">
                      Visit Our Scindia House Brandstore in Connaught Place
                    </h2>
                    <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Plan your family vacation or group holiday in person with senior travel counsellors. Experience our virtual itinerary walk-throughs, ticket collections, and instant bookings for domestic and international tours.
                    </p>

                    <div className="mt-6 space-y-3 text-xs text-slate-700">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>Southern Travels Brandstore, Scindia House, Janpath, Connaught Place, New Delhi - 110001</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>Open 7 Days a Week: 8:00 AM – 9:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>Direct Brandstore Desk: 011-43532000 / +91-98765-11001</span>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => {
                          setCurrentView('brandstore');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 bg-[#0B2545] text-white text-xs font-bold rounded-xl hover:bg-[#133E87] transition-colors shadow-xs"
                      >
                        Brandstore Details & Services
                      </button>
                      <a
                        href="https://maps.google.com/?q=Southern+Travels+Brandstore+Connaught+Place+New+Delhi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors"
                      >
                        Get Directions on Map
                      </a>
                    </div>
                  </div>

                  {/* Quick Callback Card */}
                  <div className="bg-[#0B2545] text-white rounded-2xl p-6 sm:p-8">
                    <h3 className="text-lg font-bold">Request Brandstore Consultation</h3>
                    <p className="mt-1 text-xs text-slate-300">
                      Our New Delhi destination specialist will call you back within 15 minutes.
                    </p>

                    {enquirySubmitted ? (
                      <div className="mt-6 p-4 bg-emerald-500/20 border border-emerald-400 rounded-xl text-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-white">Callback Request Confirmed!</div>
                        <div className="text-xs text-emerald-200 mt-1">
                          Our Connaught Place Brandstore desk will reach out shortly.
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitEnquiry} className="mt-6 space-y-4">
                        <div>
                          <label className="block text-[11px] font-medium text-slate-300 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rajesh Sharma"
                            value={enquiryName}
                            onChange={e => setEnquiryName(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-slate-300 mb-1">
                            Mobile Number (WhatsApp Enabled)
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={enquiryPhone}
                            onChange={e => setEnquiryPhone(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-slate-300 mb-1">
                            Interested Tour
                          </label>
                          <select
                            value={enquiryDest}
                            onChange={e => setEnquiryDest(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-[#133E87] border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                          >
                            <option value="Delhi City Tour 1-Day">Delhi City Sightseeing (1-Day)</option>
                            <option value="Golden Triangle Splendor">Golden Triangle (Delhi-Agra-Jaipur)</option>
                            <option value="Kashmir Paradise on Earth">Kashmir & Dal Lake Houseboat</option>
                            <option value="Kerala God's Own Country">Kerala Backwaters & Munnar</option>
                            <option value="Europe Discovery 11D">Europe Discovery (France/Swiss/Italy)</option>
                            <option value="Dubai & Abu Dhabi">Dubai & Desert Safari</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 bg-[#E67E22] hover:bg-[#D35400] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm"
                        >
                          Request Free Travel Callback
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: ALL PACKAGES PAGE */}
        {currentView === 'packages' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-black text-[#0B2545] tracking-tight">Holiday Packages Directory</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Discover {SOUTHERN_PACKAGES.length} fully guided domestic and international vacation itineraries.
                </p>
              </div>

              {/* Filter controls */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedCategory === 'all' ? 'bg-[#0B2545] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({SOUTHERN_PACKAGES.length})
                </button>
                <button
                  onClick={() => setSelectedCategory('day-tour')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedCategory === 'day-tour' ? 'bg-[#0B2545] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Delhi 1-Day
                </button>
                <button
                  onClick={() => setSelectedCategory('domestic')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedCategory === 'domestic' ? 'bg-[#0B2545] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Domestic
                </button>
                <button
                  onClick={() => setSelectedCategory('international')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedCategory === 'international' ? 'bg-[#0B2545] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  International
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map(pkg => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={pkg.imageUrl}
                        alt={pkg.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B2545]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                        {pkg.duration}
                      </div>
                      <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-xs">
                        Ex {pkg.departureCity}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-[11px] font-bold text-orange-600 uppercase tracking-wider mb-1">
                        {pkg.categoryLabel}
                      </div>
                      <h2 className="text-lg font-bold text-slate-900 leading-snug">{pkg.title}</h2>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">{pkg.subtitle}</div>

                      <div className="mt-4 space-y-1.5">
                        {pkg.highlights.slice(0, 3).map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400">Starting Price</div>
                        <div className="text-lg font-black text-[#0B2545]">
                          ₹{pkg.startingPrice.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenDetail(pkg)}
                          className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                        >
                          Itinerary
                        </button>
                        <button
                          onClick={() => handleOpenBooking(pkg)}
                          className="px-4 py-1.5 bg-[#0B2545] hover:bg-[#133E87] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: PACKAGE DETAIL PAGE */}
        {currentView === 'package-detail' && selectedPackage && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <button
              onClick={() => {
                setCurrentView('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0B2545] mb-6 cursor-pointer"
            >
              <span>← Back to All Packages</span>
            </button>

            {/* Header Hero */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="relative h-72 sm:h-96 w-full">
                <img
                  src={selectedPackage.imageUrl}
                  alt={selectedPackage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block bg-[#E67E22] text-white text-xs font-bold px-3 py-1 rounded-md mb-2">
                    {selectedPackage.duration} · {selectedPackage.categoryLabel}
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-black tracking-tight">{selectedPackage.title}</h1>
                  <p className="text-sm text-slate-200 mt-1">{selectedPackage.subtitle}</p>
                </div>
              </div>

              {/* Price & Booking Bar */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500">Fixed Tour Tariff (Per Person on Twin Sharing)</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#0B2545]">
                      ₹{selectedPackage.startingPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      ₹{selectedPackage.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
                      Special Online Rate
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleOpenBooking(selectedPackage)}
                    className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#133E87] text-white text-xs font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
                  >
                    Instant Booking
                  </button>
                  <button
                    onClick={() => {
                      setCurrentView('brandstore');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Enquire at Brandstore
                  </button>
                </div>
              </div>

              {/* Overview & Key Highlights */}
              <div className="p-6 sm:p-8 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545]">Tour Overview</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{selectedPackage.overview}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545]">Key Highlights</h3>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedPackage.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Day-by-Day Itinerary */}
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-4">Detailed Day-by-Day Itinerary</h3>
                  <div className="space-y-4">
                    {selectedPackage.itinerary.map(day => (
                      <div key={day.day} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-[#0B2545] text-white font-black text-xs flex items-center justify-center">
                              D{day.day}
                            </span>
                            <span className="font-bold text-sm text-slate-900">{day.title}</span>
                          </div>
                          <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                            Overnight: {day.stayCity}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-9">{day.description}</p>
                        {day.meals && (
                          <div className="mt-2 text-[11px] font-semibold text-orange-600 pl-9">
                            Meals: {day.meals}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <h4 className="text-sm font-bold text-emerald-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Package Inclusions</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-emerald-800">
                      {selectedPackage.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span>✓</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <h4 className="text-sm font-bold text-rose-900 mb-3 flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-600" />
                      <span>Package Exclusions</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-rose-800">
                      {selectedPackage.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span>✕</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: DELHI BRANDSTORE PAGE */}
        {currentView === 'brandstore' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mb-10">
              <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                Flagship Experience
              </div>
              <h1 className="text-3xl font-black text-[#0B2545] tracking-tight mt-1">
                Southern Travels New Delhi Brandstore
              </h1>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Located at historic Scindia House in Connaught Place, our Brandstore is the nerve center of all North India holiday operations, daily capital sightseeing coaches, and custom international tour consultations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Brandstore Highlights */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <h3 className="text-base font-bold text-[#0B2545] mb-4">Services Available at New Delhi Brandstore</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <Bus className="w-5 h-5 text-orange-500 mb-2" />
                      <div className="font-bold text-xs text-slate-900">Daily Delhi Tour Departure Hub</div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        AC Luxury coaches depart daily at 8:30 AM from the brandstore portico with live licensed guides.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <Compass className="w-5 h-5 text-blue-500 mb-2" />
                      <div className="font-bold text-xs text-slate-900">Customized Holiday Planning</div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Tailored bespoke vacations across Kashmir, Himachal, Golden Triangle, Kerala, and Europe.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <Plane className="w-5 h-5 text-indigo-500 mb-2" />
                      <div className="font-bold text-xs text-slate-900">IATA Flight & Visa Desk</div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Instant domestic & international air tickets with guaranteed group fares and biometric visa support.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <Users className="w-5 h-5 text-emerald-500 mb-2" />
                      <div className="font-bold text-xs text-slate-900">Corporate & MICE Bookings</div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Dedicated managers for corporate conferences, dealer meets, and educational institution tours.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <h3 className="text-base font-bold text-[#0B2545] mb-3">Address & Connectivity</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Conveniently positioned in the heart of Delhi, 2 minutes walking distance from Janpath and Rajiv Chowk Metro Stations.
                  </p>
                  <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-2">
                    <div><strong>Address:</strong> Scindia House, Janpath, Connaught Place, New Delhi - 110001</div>
                    <div><strong>Helpline:</strong> 011-43532000 (Multi-line exchange)</div>
                    <div><strong>Direct WhatsApp:</strong> +91-98765-11001</div>
                    <div><strong>Office Hours:</strong> Monday through Sunday: 8:00 AM to 9:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Callback Request */}
              <div className="bg-[#0B2545] text-white rounded-2xl p-6 self-start">
                <h3 className="text-base font-bold">Schedule an In-Store Appointment</h3>
                <p className="mt-1 text-xs text-slate-300">
                  Prefer discussing your itinerary with a senior holiday specialist in CP? Drop your details below.
                </p>

                {enquirySubmitted ? (
                  <div className="mt-6 p-4 bg-emerald-500/20 border border-emerald-400 rounded-xl text-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-sm font-bold text-white">Appointment Scheduled!</div>
                    <div className="text-xs text-emerald-200 mt-1">
                      Our brandstore advisor will phone you to confirm your preferred timing.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitEnquiry} className="mt-5 space-y-3.5">
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={enquiryName}
                        onChange={e => setEnquiryName(e.target.value)}
                        placeholder="Rajesh Kumar"
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={enquiryPhone}
                        onChange={e => setEnquiryPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">Destination Focus</label>
                      <select
                        value={enquiryDest}
                        onChange={e => setEnquiryDest(e.target.value)}
                        className="w-full px-3 py-2 bg-[#133E87] border border-white/20 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                      >
                        <option value="Delhi Sightseeing Tour">Daily Delhi Sightseeing Tour</option>
                        <option value="Golden Triangle">Golden Triangle (Agra & Jaipur)</option>
                        <option value="Kashmir / Ladakh">Kashmir Valley & Ladakh</option>
                        <option value="Europe Grand Tour">Europe Discovery Tour</option>
                        <option value="Custom Holiday">Other Custom Holiday</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#E67E22] hover:bg-[#D35400] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Book Brandstore Consultation
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: SERVICES PAGE */}
        {currentView === 'services' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mb-10">
              <h1 className="text-3xl font-black text-[#0B2545] tracking-tight">Comprehensive Travel Services</h1>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Southern Travels is a full-service travel ecosystem offering end-to-end solutions for families, corporate groups, and international visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                <Plane className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-base font-bold text-slate-900">Domestic & International Flight Ticketing</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  IATA accredited ticketing portal with contracted group fares on Air India, IndiGo, Emirates, Qatar Airways, and Lufthansa with zero convenience markups for tour guests.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                <Bus className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-base font-bold text-slate-900">Luxury Coach & Chauffeur Fleet</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Our private fleet of sanitized Mercedes, Volvo, and Force luxury coaches with vetted drivers trained in defensive highway driving and multilingual passenger care.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-base font-bold text-slate-900">Visa & Travel Insurance Assistance</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Dedicated visa filing documentation experts for Schengen, UK, USA, Dubai, Singapore, and Japan with 99.4% approval success records.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 6: ABOUT US PAGE */}
        {currentView === 'about' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
              Established 1970
            </div>
            <h1 className="text-3xl font-black text-[#0B2545] tracking-tight">50+ Years of Excellence in Indian Tourism</h1>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Founded over five decades ago, Southern Travels started with a singular mission: providing honest, culturally authentic, and thoroughly reliable travel experiences across the length and breadth of India.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-2xl font-black text-[#0B2545]">50+</div>
                <div className="text-xs text-slate-500 mt-1">Years of Trust</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-2xl font-black text-[#0B2545]">5M+</div>
                <div className="text-xs text-slate-500 mt-1">Happy Travelers</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-2xl font-black text-[#0B2545]">1,500+</div>
                <div className="text-xs text-slate-500 mt-1">Tour Packages</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-2xl font-black text-[#0B2545]">100%</div>
                <div className="text-xs text-slate-500 mt-1">Govt. Recognized</div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 7: CONTACT PAGE */}
        {currentView === 'contact' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-[#0B2545] tracking-tight">Contact Southern Travels</h1>
            <p className="mt-2 text-sm text-slate-600">
              Get in touch with our New Delhi Brandstore team for reservations, custom departures, and 24x7 travel assistance.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 text-xs text-slate-700">
                <h3 className="text-base font-bold text-[#0B2545]">New Delhi Brandstore Head Office</h3>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>Scindia House, Janpath, Connaught Place, New Delhi - 110001</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Phone: 011-43532000 / 011-23712345</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Email: delhi@southerntravelsindia.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>WhatsApp: +91 98765 11001</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="text-base font-bold text-[#0B2545] mb-2">Send an Instant Message</h3>
                {enquirySubmitted ? (
                  <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold">
                    Thank you! Your message has been routed to our Delhi desk.
                  </div>
                ) : (
                  <form onSubmit={handleSubmitEnquiry} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={enquiryName}
                      onChange={e => setEnquiryName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={enquiryPhone}
                      onChange={e => setEnquiryPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    />
                    <textarea
                      rows={3}
                      placeholder="Your query or requirements..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#0B2545] text-white text-xs font-bold rounded-lg hover:bg-[#133E87]"
                    >
                      Submit Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Booking Modal */}
      {bookingModalOpen && bookingPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                  Reserve Tour Package
                </div>
                <h3 className="text-base font-bold text-white">{bookingPackage.title}</h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {bookingSubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-slate-900">Reservation Request Received!</h4>
                  <p className="mt-1 text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Our Delhi Brandstore bookings coordinator has logged your request for <strong>{bookingPackage.title}</strong>. We will call you on <strong>{bookingPhone}</strong> to confirm your dates and payment mode.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-slate-500">Package Tariff</div>
                      <div className="font-black text-[#0B2545] text-base">
                        ₹{bookingPackage.startingPrice.toLocaleString('en-IN')}{' '}
                        <span className="text-[10px] font-normal text-slate-500">/person</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-500">Duration</div>
                      <div className="font-bold text-slate-800">{bookingPackage.duration}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Rajesh Verma"
                        value={bookingName}
                        onChange={e => setBookingName(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={bookingPhone}
                        onChange={e => setBookingPhone(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">
                        Preferred Departure Date
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={e => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Number of Travelers</label>
                      <select
                        value={bookingTravelers}
                        onChange={e => setBookingTravelers(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map(n => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'Traveler' : 'Travelers'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">
                      Email Address (Optional for Voucher)
                    </label>
                    <input
                      type="email"
                      placeholder="rajesh@example.com"
                      value={bookingEmail}
                      onChange={e => setBookingEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">
                      Special Requests / Hotel Tier Preference
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Vegetarian meals only, extra bed required, 4-star hotel upgrade"
                      value={bookingNotes}
                      onChange={e => setBookingNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setBookingModalOpen(false)}
                      className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#0B2545] hover:bg-[#133E87] text-white text-xs font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
                    >
                      Confirm Reservation Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Quiet Production Footer */}
      <footer className="bg-[#0B2545] text-slate-300 py-12 border-t border-[#133E87] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="text-lg font-black text-white">SOUTHERN TRAVELS</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                India’s leading tour brand since 1970. Delivering memorable holiday journeys with personal attention and verified hospitality standards.
              </p>
              <div className="text-[11px] text-amber-400 font-semibold">
                Ministry of Tourism Govt. Approved Operator
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Popular Circuits</div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Delhi 1-Day Capital Sightseeing</li>
                <li>Golden Triangle (Delhi-Agra-Jaipur)</li>
                <li>Kashmir & Dal Lake Houseboats</li>
                <li>Kerala Backwaters & Munnar</li>
                <li>Europe Discovery 11 Days</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">New Delhi Brandstore</div>
              <div className="space-y-2 text-xs text-slate-400">
                <div>Scindia House, Janpath</div>
                <div>Connaught Place, New Delhi - 110001</div>
                <div>Phone: 011-43532000</div>
                <div>Email: delhi@southerntravelsindia.com</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Original Reference</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                This demo faithfully reproduces the structure, packages, and branding of Southern Travels New Delhi Brandstore.
              </p>
              <a
                href="https://www.southerntravelsindia.com/brandstore.aspx-new-delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-orange-400 hover:text-orange-300 font-semibold underline"
              >
                Visit Official Website →
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
            <div>© {new Date().getFullYear()} Southern Travels India Pvt Ltd · All Rights Reserved</div>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
              <span>IATA Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
