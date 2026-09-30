import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  Compass,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Calculator,
  ChevronRight,
  Menu,
  X,
  Search,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  SRM_PACKAGES,
  SRM_FLEET,
  SrmTourPackage,
  SrmFleetItem,
  SRM_HOLIDAYS_WEBSITE
} from '../../data/srmHolidaysData';

type SrmView = 'home' | 'packages' | 'package-detail' | 'fleet' | 'calculator' | 'about' | 'contact';

export const SrmHolidaysApp: React.FC = () => {
  const { setActiveView, submitLead } = useApp();
  const [currentView, setCurrentView] = useState<SrmView>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<SrmTourPackage | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingPackage, setBookingPackage] = useState<SrmTourPackage | null>(null);
  const [bookingFleet, setBookingFleet] = useState<SrmFleetItem | null>(null);
  const [packageOption, setPackageOption] = useState<'cab-only' | 'cab-hotel'>('cab-only');
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingPhone, setBookingPhone] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('2026-10-10');
  const [bookingPickup, setBookingPickup] = useState<string>('New Delhi Hotel / Airport');
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

  // Interactive Fare Calculator State
  const [calcVehicleId, setCalcVehicleId] = useState<string>('fleet-dzire');
  const [calcTripType, setCalcTripType] = useState<'outstation' | 'local'>('outstation');
  const [calcDays, setCalcDays] = useState<number>(3);
  const [calcEstKm, setCalcEstKm] = useState<number>(750);

  const selectedVehicleObj = SRM_FLEET.find(f => f.id === calcVehicleId) || SRM_FLEET[0];

  const calculatedTotal =
    calcTripType === 'local'
      ? selectedVehicleObj.local8hr80km * calcDays
      : Math.max(calcEstKm, selectedVehicleObj.outstationMinKm * calcDays) * selectedVehicleObj.perKmRate +
        selectedVehicleObj.driverAllowancePerDay * calcDays;

  const handleOpenDetail = (pkg: SrmTourPackage) => {
    setSelectedPackage(pkg);
    setCurrentView('package-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (pkg: SrmTourPackage) => {
    setBookingPackage(pkg);
    setBookingFleet(null);
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  const handleOpenFleetBooking = (fleet: SrmFleetItem) => {
    setBookingFleet(fleet);
    setBookingPackage(null);
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) return;

    const requestedItem = bookingPackage
      ? `Package: ${bookingPackage.title} (${packageOption === 'cab-only' ? 'Cab Only' : 'Cab + Hotel'}, Date: ${bookingDate})`
      : bookingFleet
      ? `Vehicle Rental: ${bookingFleet.name} (${bookingFleet.categoryLabel}, Pickup: ${bookingPickup}, Date: ${bookingDate})`
      : 'General Travel Request';

    submitLead({
      websiteSlug: 'srm-holidays',
      businessName: 'SRM Holidays (Delhi Tours & Car Rental)',
      customerName: bookingName,
      customerPhone: bookingPhone,
      serviceRequested: requestedItem,
      message: `Pickup: ${bookingPickup}. Customer booked via SRM Holidays Online Portal.`,
      status: 'new'
    });

    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingModalOpen(false);
      setBookingSubmitted(false);
      setBookingName('');
      setBookingPhone('');
    }, 2500);
  };

  const filteredPackages = SRM_PACKAGES.filter(pkg => {
    const matchesCat = selectedCategory === 'all' || pkg.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destinationsCovered.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-['Inter'] flex flex-col selection:bg-[#FF6B00]/20 selection:text-[#1E3A8A]">
      {/* Top Header Information & Multi-Site Switcher Bar */}
      <div className="bg-[#1E3A8A] text-slate-200 text-xs py-2 px-4 border-b border-[#2563EB]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Delhi NCR's Top Rated Tour & Tempo Traveller Agency (Since 2016)</span>
            </span>
            <span className="hidden md:inline text-slate-400" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>24x7 Cab Desk: +91 98101 44789</span>
            </span>
            <span className="hidden md:inline text-slate-400" aria-hidden="true">·</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Offices: Karol Bagh & IGI Airport Hub, New Delhi</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ReferenceSiteSwitcher currentSiteId="srm-holidays" />
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
            <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] flex items-center justify-center text-white font-black text-lg shadow-xs">
              SRM
            </div>
            <div>
              <div className="text-xl font-black text-[#1E3A8A] tracking-tight">SRM HOLIDAYS</div>
              <div className="text-[11px] font-medium text-[#FF6B00] tracking-wider uppercase">
                Tours & Cab Rentals
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
              className={`hover:text-[#1E3A8A] transition-colors cursor-pointer ${
                currentView === 'home' ? 'text-[#1E3A8A] border-b-2 border-[#FF6B00] pb-0.5' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentView('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#1E3A8A] transition-colors cursor-pointer ${
                currentView === 'packages' ? 'text-[#1E3A8A] border-b-2 border-[#FF6B00] pb-0.5' : ''
              }`}
            >
              Tour Packages
            </button>
            <button
              onClick={() => {
                setCurrentView('fleet');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#1E3A8A] transition-colors cursor-pointer ${
                currentView === 'fleet' ? 'text-[#1E3A8A] border-b-2 border-[#FF6B00] pb-0.5' : ''
              }`}
            >
              Fleet & Tempo Travellers
            </button>
            <button
              onClick={() => {
                setCurrentView('calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#1E3A8A] transition-colors cursor-pointer ${
                currentView === 'calculator' ? 'text-[#1E3A8A] border-b-2 border-[#FF6B00] pb-0.5' : ''
              }`}
            >
              Fare Calculator
            </button>
            <button
              onClick={() => {
                setCurrentView('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#1E3A8A] transition-colors cursor-pointer ${
                currentView === 'about' ? 'text-[#1E3A8A] border-b-2 border-[#FF6B00] pb-0.5' : ''
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#1E3A8A] transition-colors cursor-pointer ${
                currentView === 'contact' ? 'text-[#1E3A8A] border-b-2 border-[#FF6B00] pb-0.5' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setCurrentView('calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Fare Quote</span>
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
                Tour Packages ({SRM_PACKAGES.length})
              </button>
              <button
                onClick={() => {
                  setCurrentView('fleet');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Car & Tempo Rental Fleet ({SRM_FLEET.length})
              </button>
              <button
                onClick={() => {
                  setCurrentView('calculator');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Interactive Fare Calculator
              </button>
              <button
                onClick={() => {
                  setCurrentView('about');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                About SRM Holidays
              </button>
              <button
                onClick={() => {
                  setCurrentView('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Contact & Booking Desk
              </button>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Helpline: +91 98101 44789</span>
              <a
                href="https://srmholidays.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3A8A] font-semibold underline"
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
            {/* Hero Section */}
            <section className="relative bg-[#1E3A8A] text-white py-16 lg:py-20 overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80")'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/90 to-transparent" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>Delhi’s #1 Chauffeur & Tour Specialist Since 2016</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    Explore India with Verified Cabs & Customized Tour Packages
                  </h1>
                  <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                    Same Day Agra Tours from Delhi, 4-Day Golden Triangle circuits, Rajasthan desert odysseys, and luxury 9 to 26-seater Tempo Travellers with sanitized AC cabs and commercial certified chauffeurs.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        setCurrentView('packages');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Tour Packages</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setCurrentView('fleet');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all cursor-pointer"
                    >
                      View Car & Tempo Fleet
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Transparent Per-Km & Fixed Rates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>4.9 Star Rating (3,500+ Trips)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-cyan-400" />
                      <span>Clean Sanitized AC Vehicles</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Hero Banner Tour Packages */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                    Most Booked Trips
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] tracking-tight mt-1">
                    Featured Delhi Departure Packages
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setCurrentView('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#1E3A8A] hover:text-[#FF6B00] flex items-center gap-1 cursor-pointer"
                >
                  <span>See All Packages</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SRM_PACKAGES.map(pkg => (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                        <img
                          src={pkg.imageUrl}
                          alt={pkg.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-[#1E3A8A]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                          {pkg.duration}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="text-[10px] font-bold text-orange-600 uppercase">{pkg.categoryLabel}</div>
                        <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug">{pkg.title}</h3>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{pkg.subtitle}</p>

                        <div className="mt-3 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg">
                          Vehicle: <strong>{pkg.carIncluded}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-slate-400">Cab Only</div>
                          <div className="text-sm font-black text-[#1E3A8A]">
                            ₹{pkg.startingPriceCabOnly.toLocaleString('en-IN')}
                          </div>
                        </div>
                        <button
                          onClick={() => handleOpenBooking(pkg)}
                          className="px-3.5 py-1.5 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tempo Traveller Fleet Highlight */}
            <section className="bg-slate-100 py-16 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                    Group Travel Specialists
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] tracking-tight mt-1">
                    Luxury Tempo Traveller Fleet in Delhi
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    From 9-seater Maharaja 1x1 recliners to 26-seater executive coaches, our tempo fleet offers pushback seats, individual AC vents, and experienced highway chauffeurs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {SRM_FLEET.filter(f => f.category === 'tempo' || f.category === 'luxury').slice(0, 3).map(fleet => (
                    <div key={fleet.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-5">
                      <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src={fleet.imageUrl}
                          alt={fleet.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-[#1E3A8A] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {fleet.seating}
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-slate-900">{fleet.name}</h3>
                      <div className="text-xs text-orange-600 font-semibold mt-0.5">{fleet.categoryLabel}</div>
                      <p className="text-xs text-slate-500 mt-2">{fleet.popularFor}</p>

                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-black text-[#1E3A8A]">₹{fleet.perKmRate}/km</div>
                          <div className="text-[10px] text-slate-400">Local: ₹{fleet.local8hr80km} (8hr/80km)</div>
                        </div>
                        <button
                          onClick={() => handleOpenFleetBooking(fleet)}
                          className="px-3.5 py-1.5 bg-[#1E3A8A] hover:bg-[#2563EB] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                        >
                          Rent Vehicle
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => {
                      setCurrentView('fleet');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-2.5 bg-white border border-slate-300 text-slate-800 text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    View All {SRM_FLEET.length} Cabs & Tempo Travellers →
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: ALL PACKAGES PAGE */}
        {currentView === 'packages' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-[#1E3A8A] tracking-tight">SRM Holidays Tour Packages</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-8">
              North India tour itineraries with verified chauffeurs, fuel, tolls, and optional 3/4-star hotel stays.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SRM_PACKAGES.map(pkg => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={pkg.imageUrl}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#1E3A8A] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                        {pkg.duration}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-[11px] font-bold text-orange-600 uppercase">{pkg.categoryLabel}</div>
                      <h2 className="text-base font-bold text-slate-900 mt-1 leading-snug">{pkg.title}</h2>
                      <p className="text-xs text-slate-500 mt-1">{pkg.subtitle}</p>

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
                    <div className="p-3 bg-slate-50 rounded-xl mb-4 flex items-center justify-between text-xs">
                      <div>
                        <div className="text-slate-400 text-[10px]">Cab Only</div>
                        <div className="font-bold text-[#1E3A8A]">₹{pkg.startingPriceCabOnly.toLocaleString('en-IN')}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-400 text-[10px]">Cab + 3★ Hotel</div>
                        <div className="font-bold text-emerald-700">₹{pkg.startingPriceCabHotel.toLocaleString('en-IN')}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenDetail(pkg)}
                        className="flex-1 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                      >
                        View Itinerary
                      </button>
                      <button
                        onClick={() => handleOpenBooking(pkg)}
                        className="flex-1 py-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        Book Tour
                      </button>
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
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#1E3A8A] mb-6 cursor-pointer"
            >
              <span>← Back to All SRM Packages</span>
            </button>

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
                  <div className="inline-block bg-[#FF6B00] text-white text-xs font-bold px-3 py-1 rounded-md mb-2">
                    {selectedPackage.duration} · {selectedPackage.categoryLabel}
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-black tracking-tight">{selectedPackage.title}</h1>
                  <p className="text-sm text-slate-200 mt-1">{selectedPackage.subtitle}</p>
                </div>
              </div>

              {/* Price Selector */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setPackageOption('cab-only')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      packageOption === 'cab-only'
                        ? 'bg-white border-[#1E3A8A] ring-2 ring-[#1E3A8A]/20 shadow-xs'
                        : 'bg-transparent border-slate-200 opacity-70'
                    }`}
                  >
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Option A: Cab Only</div>
                    <div className="text-xl font-black text-[#1E3A8A]">
                      ₹{selectedPackage.startingPriceCabOnly.toLocaleString('en-IN')}
                    </div>
                  </button>

                  <button
                    onClick={() => setPackageOption('cab-hotel')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      packageOption === 'cab-hotel'
                        ? 'bg-white border-[#FF6B00] ring-2 ring-[#FF6B00]/20 shadow-xs'
                        : 'bg-transparent border-slate-200 opacity-70'
                    }`}
                  >
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Option B: Cab + Hotels</div>
                    <div className="text-xl font-black text-[#FF6B00]">
                      ₹{selectedPackage.startingPriceCabHotel.toLocaleString('en-IN')}
                    </div>
                  </button>
                </div>

                <button
                  onClick={() => handleOpenBooking(selectedPackage)}
                  className="px-6 py-2.5 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer"
                >
                  Book with Selected Option
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#1E3A8A]">Tour Overview</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{selectedPackage.overview}</p>
                </div>

                {/* Day-by-Day Itinerary */}
                <div>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-4">Complete Day-by-Day Itinerary</h3>
                  <div className="space-y-4">
                    {selectedPackage.itinerary.map(day => (
                      <div key={day.day} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-7 h-7 rounded-lg bg-[#1E3A8A] text-white font-black text-xs flex items-center justify-center">
                            D{day.day}
                          </span>
                          <span className="font-bold text-sm text-slate-900">{day.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-9">{day.description}</p>
                        <div className="mt-2 text-[11px] text-slate-500 pl-9">
                          Overnight Stay: <strong>{day.stayCity}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Package Inclusions</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedPackage.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: FLEET & TEMPO TRAVELLERS */}
        {currentView === 'fleet' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-[#1E3A8A] tracking-tight">Car & Tempo Rental Fleet</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-8">
              Reliable chauffeur-driven vehicles available for local Delhi 8hr/80km hire or outstation trips.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SRM_FLEET.map(fleet => (
                <div
                  key={fleet.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <img
                        src={fleet.imageUrl}
                        alt={fleet.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#1E3A8A] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {fleet.seating}
                      </div>
                    </div>

                    <h2 className="text-base font-bold text-slate-900">{fleet.name}</h2>
                    <div className="text-xs text-orange-600 font-semibold">{fleet.categoryLabel}</div>
                    <div className="text-xs text-slate-500 mt-1">Luggage: {fleet.luggage}</div>

                    <div className="mt-3 space-y-1">
                      {fleet.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <span className="text-emerald-500">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-base font-black text-[#1E3A8A]">₹{fleet.perKmRate}/km</div>
                      <div className="text-[10px] text-slate-400">Local 8hr/80km: ₹{fleet.local8hr80km}</div>
                    </div>
                    <button
                      onClick={() => handleOpenFleetBooking(fleet)}
                      className="px-4 py-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      Book Cab
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 5: FARE CALCULATOR */}
        {currentView === 'calculator' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">Transparent Rates</div>
              <h1 className="text-3xl font-black text-[#1E3A8A] tracking-tight mt-1">
                Instant Cab & Tempo Fare Calculator
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Estimate exact highway or local Delhi fares including driver allowance and fuel with no hidden fees.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Vehicle</label>
                  <select
                    value={calcVehicleId}
                    onChange={e => setCalcVehicleId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                  >
                    {SRM_FLEET.map(f => (
                      <option key={f.id} value={f.id}>
                        {f.name} ({f.seating} · ₹{f.perKmRate}/km)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Trip Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCalcTripType('outstation')}
                      className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        calcTripType === 'outstation'
                          ? 'bg-[#1E3A8A] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Outstation Highway
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcTripType('local')}
                      className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        calcTripType === 'local'
                          ? 'bg-[#1E3A8A] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Local Delhi 8hr/80km
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Number of Days</label>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={calcDays}
                      onChange={e => setCalcDays(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                    />
                  </div>

                  {calcTripType === 'outstation' && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Estimated Km</label>
                      <input
                        type="number"
                        min={100}
                        max={5000}
                        step={50}
                        value={calcEstKm}
                        onChange={e => setCalcEstKm(Math.max(100, Number(e.target.value)))}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Calculated Result Card */}
              <div className="bg-[#1E3A8A] text-white rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">Estimated Fare</div>
                  <div className="text-3xl sm:text-4xl font-black mt-2">
                    ₹{calculatedTotal.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Based on {selectedVehicleObj.name} for {calcDays} {calcDays === 1 ? 'day' : 'days'}.
                  </div>

                  <div className="mt-5 space-y-2 text-xs text-slate-300 pt-4 border-t border-white/10">
                    <div className="flex justify-between">
                      <span>Rate Per Km:</span>
                      <strong className="text-white">₹{selectedVehicleObj.perKmRate}/km</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Min Daily Km:</span>
                      <strong className="text-white">{selectedVehicleObj.outstationMinKm} km/day</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Driver Allowance:</span>
                      <strong className="text-white">₹{selectedVehicleObj.driverAllowancePerDay}/day</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenFleetBooking(selectedVehicleObj)}
                  className="mt-6 w-full py-3 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Book {selectedVehicleObj.name} Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 6: ABOUT US PAGE */}
        {currentView === 'about' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-[#1E3A8A] tracking-tight">About SRM Holidays Private Limited</h1>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Founded in 2016 in New Delhi, SRM Holidays has grown into one of Delhi NCR’s most trusted cab rental and tour package companies. We manage an active fleet of over 75 commercial vehicles spanning sedans, SUVs, and luxury Tempo Travellers.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="text-3xl font-black text-[#1E3A8A]">75+</div>
                <div className="text-xs text-slate-500 mt-1">Commercial AC Vehicles</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="text-3xl font-black text-[#1E3A8A]">2016</div>
                <div className="text-xs text-slate-500 mt-1">Established Year</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="text-3xl font-black text-[#1E3A8A]">24/7</div>
                <div className="text-xs text-slate-500 mt-1">Helpline Support</div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 7: CONTACT PAGE */}
        {currentView === 'contact' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-[#1E3A8A] tracking-tight">Contact SRM Holidays</h1>
            <p className="mt-2 text-sm text-slate-600 mb-8">
              Reach our 24x7 booking desk in Karol Bagh & Mahipalpur near IGI Airport for instant bookings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 text-xs text-slate-700">
                <h3 className="text-base font-bold text-[#1E3A8A]">Booking Desk Details</h3>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>Shop No. 12, Commercial Complex, Saraswati Marg, Karol Bagh & Mahipalpur, New Delhi</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>24x7 Phone: +91 98101 44789</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Email: info@srmholidays.in</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#1E3A8A] text-white">
                <h3 className="text-base font-bold">Quick Callback Request</h3>
                <p className="text-xs text-slate-300 mt-1">Need an emergency cab or tempo for tomorrow? Drop your number.</p>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    if (!bookingPhone) return;
                    submitLead({
                      websiteSlug: 'srm-holidays',
                      businessName: 'SRM Holidays',
                      customerName: bookingName || 'Customer',
                      customerPhone: bookingPhone,
                      serviceRequested: 'Contact Page Callback',
                      message: 'Customer requested immediate callback',
                      status: 'new'
                    });
                    setBookingSubmitted(true);
                  }}
                  className="mt-4 space-y-3"
                >
                  <input
                    type="tel"
                    required
                    placeholder="+91 98101 44789"
                    value={bookingPhone}
                    onChange={e => setBookingPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-xs text-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-[#FF6B00] text-white text-xs font-bold rounded-lg hover:bg-[#E05E00]"
                  >
                    Request Immediate Callback
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#1E3A8A] text-white p-5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                  Book with SRM Holidays
                </div>
                <h3 className="text-base font-bold text-white">
                  {bookingPackage ? bookingPackage.title : bookingFleet?.name}
                </h3>
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
                  <h4 className="text-lg font-bold text-slate-900">Booking Request Received!</h4>
                  <p className="mt-1 text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Our Delhi dispatch coordinator is assigning your vehicle and will call you on{' '}
                    <strong>{bookingPhone}</strong> within 10 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ankit Gupta"
                        value={bookingName}
                        onChange={e => setBookingName(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98101 44789"
                        value={bookingPhone}
                        onChange={e => setBookingPhone(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Pickup Date</label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={e => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Pickup Location</label>
                      <input
                        type="text"
                        required
                        placeholder="IGI Airport T3 or Hotel Name"
                        value={bookingPickup}
                        onChange={e => setBookingPickup(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setBookingModalOpen(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Confirm Cab Booking
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Production Footer */}
      <footer className="bg-[#1E3A8A] text-slate-300 py-12 border-t border-[#2563EB]/40 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="text-lg font-black text-white">SRM HOLIDAYS</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Delhi’s leading tour operator and tempo traveller hire specialist since 2016. Delivering reliable outstation trips across North India.
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Popular Tours</div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Same Day Agra Tour by Private Car</li>
                <li>4-Day Golden Triangle Delhi-Agra-Jaipur</li>
                <li>7-Day Royal Rajasthan Desert Tour</li>
                <li>5-Day Shimla & Manali Mountain Escape</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Fleet On Hire</div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Swift Dzire & Toyota Etios</li>
                <li>Toyota Innova Crysta & Ertiga</li>
                <li>9, 12, 16 Seater Tempo Travellers</li>
                <li>Maharaja 1x1 Luxury Recliners</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Original Reference</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                This demo reproduces SRM Holidays Delhi tour and cab rental ecosystem.
              </p>
              <a
                href="https://srmholidays.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-orange-400 hover:text-orange-300 font-semibold underline"
              >
                Visit Official srmholidays.in →
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
            <div>© {new Date().getFullYear()} SRM Holidays Pvt Ltd · All Rights Reserved</div>
            <div>Karol Bagh & Mahipalpur, New Delhi</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
