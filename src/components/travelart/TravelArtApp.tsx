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
  Bus,
  ChevronRight,
  Menu,
  X,
  Search,
  MessageSquare,
  Sparkles,
  Calculator
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  TRAVEL_ART_FLEET,
  TRAVEL_ART_ROUTES,
  TravelArtBus,
  TravelArtTourRoute,
  TRAVEL_ART_WEBSITE
} from '../../data/travelArtData';

type TravelArtView = 'home' | 'fleet' | 'routes' | 'calculator' | 'about' | 'contact';

export const TravelArtApp: React.FC = () => {
  const { setActiveView, submitLead } = useApp();
  const [currentView, setCurrentView] = useState<TravelArtView>('home');
  const [selectedSeater, setSelectedSeater] = useState<string>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Quote / Dispatch Modal State
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [selectedBus, setSelectedBus] = useState<TravelArtBus | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<TravelArtTourRoute | null>(null);
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [pickupCity, setPickupCity] = useState<string>('Delhi NCR (Connaught Place / Gurugram / Noida)');
  const [destinationCity, setDestinationCity] = useState<string>('Agra Taj Mahal');
  const [travelDate, setTravelDate] = useState<string>('2026-10-20');
  const [tripOccasion, setTripOccasion] = useState<string>('Wedding Transport');
  const [quoteNotes, setQuoteNotes] = useState<string>('');
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);

  // Interactive Fare Estimator State
  const [calcBusId, setCalcBusId] = useState<string>('bus-27s');
  const [calcTripType, setCalcTripType] = useState<'outstation' | 'local'>('outstation');
  const [calcDays, setCalcDays] = useState<number>(2);
  const [calcEstKm, setCalcEstKm] = useState<number>(500);

  const selectedBusObj = TRAVEL_ART_FLEET.find(b => b.id === calcBusId) || TRAVEL_ART_FLEET[0];

  const calculatedTotal =
    calcTripType === 'local'
      ? selectedBusObj.local8hr80km * calcDays
      : Math.max(calcEstKm, selectedBusObj.outstationMinKm * calcDays) * selectedBusObj.ratePerKm +
        selectedBusObj.driverAllowancePerDay * calcDays;

  const handleOpenBusQuote = (bus: TravelArtBus) => {
    setSelectedBus(bus);
    setSelectedRoute(null);
    setQuoteSubmitted(false);
    setQuoteModalOpen(true);
  };

  const handleOpenRouteQuote = (route: TravelArtTourRoute) => {
    setSelectedRoute(route);
    setSelectedBus(null);
    setDestinationCity(route.destination);
    setQuoteSubmitted(false);
    setQuoteModalOpen(true);
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;

    const requestedService = selectedBus
      ? `Bus Rental: ${selectedBus.name} (${selectedBus.seatingCapacity} Seater, Occasion: ${tripOccasion}, From: ${pickupCity} To: ${destinationCity}, Date: ${travelDate})`
      : selectedRoute
      ? `Tour Route: ${selectedRoute.title} (Est: ₹${selectedRoute.estimatedPrice}, Date: ${travelDate}, Occasion: ${tripOccasion})`
      : `General Bus Quote: From ${pickupCity} to ${destinationCity} (${tripOccasion}, Date: ${travelDate})`;

    submitLead({
      websiteSlug: 'travel-art',
      businessName: 'Travel Art Company (Sagar Tours & Travels)',
      customerName: contactName,
      customerPhone: contactPhone,
      customerEmail: contactEmail,
      serviceRequested: requestedService,
      message: quoteNotes || 'Requested via Travel Art Company Online Dispatch Portal',
      status: 'new'
    });

    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteModalOpen(false);
      setQuoteSubmitted(false);
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setQuoteNotes('');
    }, 2500);
  };

  const filteredFleet = TRAVEL_ART_FLEET.filter(bus => {
    if (selectedSeater === 'mini') return bus.seatingCapacity <= 20;
    if (selectedSeater === 'mid') return bus.seatingCapacity > 20 && bus.seatingCapacity <= 35;
    if (selectedSeater === 'volvo') return bus.seatingCapacity > 35;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-['Inter'] flex flex-col selection:bg-[#DC2626]/20 selection:text-[#DC2626]">
      {/* Top Header Information & Multi-Site Switcher Bar */}
      <div className="bg-[#111827] text-slate-200 text-xs py-2 px-4 border-b border-red-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-red-400 font-semibold">
              <Bus className="w-3.5 h-3.5" />
              <span>Travel Art Company — Initiative by Sagar Tours and Travels</span>
            </span>
            <span className="hidden md:inline text-slate-500" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>24/7 Dispatch Hotline: +91 98711 22944</span>
            </span>
            <span className="hidden md:inline text-slate-500" aria-hidden="true">·</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hubs: Sector 29 Gurugram & Connaught Place Central Hub</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ReferenceSiteSwitcher currentSiteId="travel-art" />
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#991B1B] flex items-center justify-center text-white font-black text-lg shadow-xs">
              TAC
            </div>
            <div>
              <div className="text-xl font-black text-[#111827] tracking-tight">TRAVEL ART COMPANY</div>
              <div className="text-[10px] font-bold text-[#DC2626] tracking-wider uppercase">
                Luxury Bus & Coach Rentals
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
              className={`hover:text-[#DC2626] transition-colors cursor-pointer ${
                currentView === 'home' ? 'text-[#DC2626] border-b-2 border-[#DC2626] pb-0.5' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentView('fleet');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#DC2626] transition-colors cursor-pointer ${
                currentView === 'fleet' ? 'text-[#DC2626] border-b-2 border-[#DC2626] pb-0.5' : ''
              }`}
            >
              Bus Fleet (12-50 Seater)
            </button>
            <button
              onClick={() => {
                setCurrentView('routes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#DC2626] transition-colors cursor-pointer ${
                currentView === 'routes' ? 'text-[#DC2626] border-b-2 border-[#DC2626] pb-0.5' : ''
              }`}
            >
              Tour Routes
            </button>
            <button
              onClick={() => {
                setCurrentView('calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#DC2626] transition-colors cursor-pointer ${
                currentView === 'calculator' ? 'text-[#DC2626] border-b-2 border-[#DC2626] pb-0.5' : ''
              }`}
            >
              Fare Calculator
            </button>
            <button
              onClick={() => {
                setCurrentView('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#DC2626] transition-colors cursor-pointer ${
                currentView === 'about' ? 'text-[#DC2626] border-b-2 border-[#DC2626] pb-0.5' : ''
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#DC2626] transition-colors cursor-pointer ${
                currentView === 'contact' ? 'text-[#DC2626] border-b-2 border-[#DC2626] pb-0.5' : ''
              }`}
            >
              Contact Desk
            </button>
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedBus(TRAVEL_ART_FLEET[0]);
                setQuoteModalOpen(true);
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Get Instant Bus Quote</span>
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
                  setCurrentView('fleet');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Bus Fleet ({TRAVEL_ART_FLEET.length} Categories)
              </button>
              <button
                onClick={() => {
                  setCurrentView('routes');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Popular Tour Routes
              </button>
              <button
                onClick={() => {
                  setCurrentView('calculator');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Instant Fare Calculator
              </button>
              <button
                onClick={() => {
                  setCurrentView('about');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                About Sagar Tours & Travels
              </button>
              <button
                onClick={() => {
                  setCurrentView('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Contact & 24/7 Dispatch
              </button>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>24/7 Dispatch: +91 98711 22944</span>
              <a
                href="https://travelartcompany.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DC2626] font-semibold underline"
              >
                Visit travelartcompany.com →
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
            <section className="relative bg-[#111827] text-white py-16 lg:py-24 overflow-hidden">
              <div
                className="absolute inset-0 opacity-25 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80")'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/90 to-transparent" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Premier Bus & Coach Hire in Delhi NCR</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    Luxury AC Buses & Volvo Coaches for Group Travel Across India
                  </h1>
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    Initiative by Sagar Tours and Travels, led by Chairman Yashveer Singh and Sunny Tomar. Providing sanitized, air-conditioned 12, 16, 20, 27, 35, 45, and 50-seater buses for royal destination weddings, corporate shuttles, school excursions, and tourist circuits.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        setCurrentView('fleet');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Bus Fleet (12–50 Seater)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setCurrentView('calculator');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all cursor-pointer"
                    >
                      Instant Bus Fare Calculator
                    </button>
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Sanitized Fleet & GPS Live Tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>24/7 Dedicated Dispatch Desk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-red-400 fill-red-400" />
                      <span>500+ Luxury Wedding & Corporate Convoys</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Specialized Services */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="text-xs font-bold text-[#DC2626] uppercase tracking-widest">
                  Tailored Charter Solutions
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                  Bus Rental Services for Every Occasion
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center font-bold text-lg mb-4">
                    💒
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Destination Weddings</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    Coordinated baraat buses and guest convoys with ribbon decor, luggage handling, and multiple pickup points across Delhi NCR.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
                    🏢
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Corporate & Offsites</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    Employee daily shuttle services and executive AC coaches for company annual meetings and team retreats to Jim Corbett, Jaipur, or Agra.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg mb-4">
                    🎓
                  </div>
                  <h3 className="text-base font-bold text-slate-900">School & College Tours</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    Strict speed governors, verified senior drivers, emergency doors, and first-aid equipped buses for student educational outings.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">
                    🛕
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Pilgrimage Convoys</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    Comfortable group tours to Ayodhya Ram Mandir, Varanasi, Haridwar, Rishikesh, Mathura Vrindavan, and Khatu Shyam Ji.
                  </p>
                </div>
              </div>
            </section>

            {/* Fleet Showcase Grid */}
            <section className="bg-slate-100 py-16 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
                  <div>
                    <div className="text-xs font-bold text-[#DC2626] uppercase tracking-widest">
                      Fleet Inventory
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                      Explore Our 12 to 50-Seater Luxury Buses
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentView('fleet');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#DC2626] hover:text-[#991B1B] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All Fleet Models</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TRAVEL_ART_FLEET.slice(0, 3).map(bus => (
                    <div
                      key={bus.id}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                          <img
                            src={bus.imageUrl}
                            alt={bus.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-3 left-3 bg-[#DC2626] text-white text-[11px] font-bold px-2.5 py-0.5 rounded">
                            {bus.seatingCapacity} Adult Seats
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="text-[10px] font-bold text-[#DC2626] uppercase">{bus.categoryLabel}</div>
                          <h3 className="text-base font-bold text-slate-900 mt-1">{bus.name}</h3>
                          <div className="text-xs text-slate-500 mt-1">{bus.seatingLayout}</div>
                          <p className="mt-2 text-xs text-slate-600 line-clamp-2">{bus.idealFor}</p>

                          <div className="mt-4 space-y-1">
                            {bus.features.slice(0, 3).map((feat, i) => (
                              <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-slate-400">Rate Per Km</div>
                            <div className="text-base font-black text-[#DC2626]">₹{bus.ratePerKm}/km</div>
                          </div>
                          <button
                            onClick={() => handleOpenBusQuote(bus)}
                            className="px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: FLEET DIRECTORY */}
        {currentView === 'fleet' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Luxury Bus & Coach Fleet</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Choose from 12-seater mini coaches to 50-seater multi-axle luxury Volvos.
                </p>
              </div>

              {/* Filter tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button
                  onClick={() => setSelectedSeater('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedSeater === 'all' ? 'bg-[#DC2626] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({TRAVEL_ART_FLEET.length})
                </button>
                <button
                  onClick={() => setSelectedSeater('mini')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedSeater === 'mini' ? 'bg-[#DC2626] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  12-20 Seater Mini
                </button>
                <button
                  onClick={() => setSelectedSeater('mid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedSeater === 'mid' ? 'bg-[#DC2626] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  27-35 Seater Mid
                </button>
                <button
                  onClick={() => setSelectedSeater('volvo')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedSeater === 'volvo' ? 'bg-[#DC2626] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  41-50 Seater Volvo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFleet.map(bus => (
                <div
                  key={bus.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={bus.imageUrl}
                        alt={bus.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#DC2626] text-white text-[11px] font-bold px-2.5 py-0.5 rounded">
                        {bus.seatingCapacity} Adult Seats
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-[10px] font-bold text-[#DC2626] uppercase">{bus.categoryLabel}</div>
                      <h2 className="text-base font-bold text-slate-900 mt-1">{bus.name}</h2>
                      <div className="text-xs text-slate-500 mt-1">{bus.seatingLayout}</div>
                      <p className="mt-2 text-xs text-slate-600">{bus.idealFor}</p>

                      <div className="mt-4 space-y-1">
                        {bus.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400">Rate / Km</div>
                        <div className="text-base font-black text-[#DC2626]">₹{bus.ratePerKm}/km</div>
                        <div className="text-[10px] text-slate-400">Local: ₹{bus.local8hr80km} (8hr/80km)</div>
                      </div>
                      <button
                        onClick={() => handleOpenBusQuote(bus)}
                        className="px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        Book Bus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: POPULAR TOUR ROUTES */}
        {currentView === 'routes' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Popular Delhi NCR Tour Routes</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-8">
              Curated group highway itineraries with guaranteed tourist parking and highway permits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TRAVEL_ART_ROUTES.map(route => (
                <div
                  key={route.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider">
                        {route.destination}
                      </span>
                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                        {route.duration} · {route.distanceKm} Km
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900">{route.title}</h2>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{route.overview}</p>

                    <div className="mt-4 space-y-1.5">
                      {route.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400">Estimated Bus Tariff</div>
                      <div className="text-lg font-black text-[#DC2626]">₹{route.estimatedPrice.toLocaleString('en-IN')}</div>
                    </div>
                    <button
                      onClick={() => handleOpenRouteQuote(route)}
                      className="px-4 py-2 bg-[#DC2626] text-white text-xs font-bold rounded-lg hover:bg-[#B91C1C]"
                    >
                      Book Group Coach
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: FARE CALCULATOR */}
        {currentView === 'calculator' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="text-xs font-bold text-[#DC2626] uppercase tracking-widest">Pricing Transparency</div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
                Instant Bus & Coach Fare Calculator
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Estimate complete bus hire charges including interstate highway permits, driver bhatta, and fuel.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Coach Model</label>
                  <select
                    value={calcBusId}
                    onChange={e => setCalcBusId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                  >
                    {TRAVEL_ART_FLEET.map(b => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.seatingCapacity} Seats · ₹{b.ratePerKm}/km)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Usage Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCalcTripType('outstation')}
                      className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        calcTripType === 'outstation'
                          ? 'bg-[#DC2626] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Outstation Tour
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcTripType('local')}
                      className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        calcTripType === 'local'
                          ? 'bg-[#DC2626] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Local Delhi NCR (8hr/80km)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Days of Travel</label>
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
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Est. Total Km</label>
                      <input
                        type="number"
                        min={100}
                        max={10000}
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
              <div className="bg-[#111827] text-white rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-red-400 uppercase tracking-wider">Estimated Total Tariff</div>
                  <div className="text-3xl sm:text-4xl font-black mt-2 text-white">
                    ₹{calculatedTotal.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Based on {selectedBusObj.name} for {calcDays} {calcDays === 1 ? 'day' : 'days'}.
                  </div>

                  <div className="mt-5 space-y-2 text-xs text-slate-300 pt-4 border-t border-white/10">
                    <div className="flex justify-between">
                      <span>Rate Per Km:</span>
                      <strong className="text-white">₹{selectedBusObj.ratePerKm}/km</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Min Daily Km:</span>
                      <strong className="text-white">{selectedBusObj.outstationMinKm} km/day</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Driver Allowance:</span>
                      <strong className="text-white">₹{selectedBusObj.driverAllowancePerDay}/day</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenBusQuote(selectedBusObj)}
                  className="mt-6 w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Reserve {selectedBusObj.name}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: ABOUT US */}
        {currentView === 'about' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">About Travel Art Company</h1>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Travel Art Company is an initiative by Sagar Tours and Travels, established under the esteemed leadership of Chairman Mr. Yashveer Singh and steered by Mr. Sunny Tomar. We operate one of Delhi NCR’s premier luxury coach rental operations, emphasizing passenger comfort, sanitized interiors, and on-time reliability.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="text-3xl font-black text-[#DC2626]">12–50</div>
                <div className="text-xs text-slate-500 mt-1">Seater Fleet Range</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="text-3xl font-black text-[#DC2626]">100%</div>
                <div className="text-xs text-slate-500 mt-1">Sanitized Coaches</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="text-3xl font-black text-[#DC2626]">24x7</div>
                <div className="text-xs text-slate-500 mt-1">Active Dispatch</div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 6: CONTACT & 24/7 DISPATCH (Faithfully matching travelartcompany.com/contact) */}
        {currentView === 'contact' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-xs font-bold text-[#DC2626] uppercase tracking-widest mb-1">
              24/7 Operations Hub
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Contact Travel Art Company</h1>
            <p className="mt-2 text-sm text-slate-600 mb-8">
              Initiative by Sagar Tours and Travels. Connect with our dispatch captains for immediate bus quotes, wedding booking schedules, and corporate agreements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 text-xs text-slate-700">
                <h3 className="text-base font-bold text-slate-900">Fleet Operations Desk</h3>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                  <span>Travel Art Hub, Sector 29, Gurugram & Connaught Place Central Terminal, Delhi NCR</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>24/7 Dispatch Hotline: +91 98711 22944</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>Email: info@travelartcompany.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>Emergency Dispatch: Open 24 Hours / 365 Days</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#111827] text-white">
                <h3 className="text-base font-bold text-red-400">Request Instant Bus Dispatch Quote</h3>
                <p className="text-xs text-slate-300 mt-1">Our dispatch team responds within 15 minutes.</p>

                {quoteSubmitted ? (
                  <div className="mt-4 p-4 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-semibold text-center">
                    Thank you! Your quote request has been routed to our active dispatch captain.
                  </div>
                ) : (
                  <form onSubmit={handleSubmitQuote} className="mt-4 space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={contactName}
                      onChange={e => setContactName(e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-xs text-white"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Phone (+91 98711 22944)"
                      value={contactPhone}
                      onChange={e => setContactPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Required Bus Size (e.g. 27 Seater / 45 Seater Volvo)"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-xs text-white"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#DC2626] text-white text-xs font-bold rounded-lg hover:bg-[#B91C1C]"
                    >
                      Send Dispatch Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Quote Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#111827] text-white p-5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
                  Travel Art Company
                </div>
                <h3 className="text-base font-bold text-white">
                  {selectedBus ? `Reserve ${selectedBus.name}` : selectedRoute ? selectedRoute.title : 'Bus Rental Request'}
                </h3>
              </div>
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {quoteSubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-slate-900">Quotation Request Logged!</h4>
                  <p className="mt-1 text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Our fleet coordinator will call you on <strong>{contactPhone}</strong> with the exact vehicle confirmation and best discount tariff.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitQuote} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikas Solanki"
                        value={contactName}
                        onChange={e => setContactName(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98711 22944"
                        value={contactPhone}
                        onChange={e => setContactPhone(e.target.value)}
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
                        value={travelDate}
                        onChange={e => setTravelDate(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Occasion / Purpose</label>
                      <select
                        value={tripOccasion}
                        onChange={e => setTripOccasion(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      >
                        <option value="Wedding Transport">Wedding Transport & Baraat</option>
                        <option value="Corporate Offsite">Corporate Offsite / Commute</option>
                        <option value="School / College Tour">School / College Tour</option>
                        <option value="Tourist Sightseeing">Tourist Sightseeing</option>
                        <option value="Pilgrimage Yatra">Pilgrimage Yatra</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">Pickup & Destination Details</label>
                    <input
                      type="text"
                      placeholder="e.g. Pickup: Gurugram Sector 43 → Drop: Jaipur Amber Fort"
                      value={destinationCity}
                      onChange={e => setDestinationCity(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setQuoteModalOpen(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Get Confirmed Bus Quote
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Production Footer */}
      <footer className="bg-[#111827] text-slate-300 py-12 border-t border-red-900/40 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="text-lg font-black text-white">TRAVEL ART COMPANY</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Initiative by Sagar Tours and Travels. Delivering premium AC bus and luxury coach rentals across Delhi NCR and India with 24/7 dedicated dispatch.
              </p>
              <div className="text-[11px] text-red-400 font-semibold">
                Chairman: Mr. Yashveer Singh · Mr. Sunny Tomar
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Bus Fleet</div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>12-20 Seater Mini Coaches</li>
                <li>27-35 Seater Mid-Size Luxury Buses</li>
                <li>41-45 Seater Volvo B11R Coaches</li>
                <li>50-Seater Super-Deluxe AC Buses</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">24/7 Dispatch Hub</div>
              <div className="space-y-2 text-xs text-slate-400">
                <div>Travel Art Hub, Sector 29</div>
                <div>Gurugram & CP Central Hub, Delhi NCR</div>
                <div>Hotline: +91 98711 22944</div>
                <div>Email: info@travelartcompany.com</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Original Reference</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                This demo faithfully reproduces Travel Art Company bus rental and contact operations.
              </p>
              <a
                href="https://travelartcompany.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-red-400 hover:text-red-300 font-semibold underline"
              >
                Visit travelartcompany.com/contact →
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
            <div>© {new Date().getFullYear()} Travel Art Company (Sagar Tours and Travels)</div>
            <div>Luxury Bus Rentals · Delhi NCR</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
