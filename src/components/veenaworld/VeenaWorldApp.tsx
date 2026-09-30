import React, { useState, useMemo } from 'react';
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
  ChevronDown,
  Menu,
  X,
  Search,
  Sparkles,
  Heart,
  Plane,
  Building,
  Utensils,
  Share2,
  Check,
  Send,
  HelpCircle,
  FileText,
  BadgePercent,
  SlidersHorizontal,
  Info,
  Copy,
  Tag
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  VEENA_PACKAGES,
  TOP_DESTINATIONS,
  SPECIALITY_TOUR_TYPES,
  VEENA_REVIEWS,
  TRUST_PILLARS,
  DEPARTURE_CITIES,
  DEPARTURE_MONTHS,
  VEENA_BRANCHES,
  VEENA_FAQS,
  VEENA_OFFERS,
  VeenaPackage
} from '../../data/veenaWorldData';

export type VeenaPage =
  | 'home'
  | 'india-tours'
  | 'world-tours'
  | 'speciality-tours'
  | 'customized-holidays'
  | 'offers'
  | 'offices'
  | 'contact'
  | 'faq';

export const VeenaWorldApp: React.FC = () => {
  const { submitLead } = useApp();

  // Active Page Navigation
  const [currentPage, setCurrentPage] = useState<VeenaPage>('home');

  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);

  // Search filter states
  const [searchTab, setSearchTab] = useState<'group' | 'customized' | 'speciality' | 'month'>('group');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedMonth, setSelectedMonth] = useState('All Months');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<'all' | 'india' | 'world'>('all');
  const [selectedSpecialityFilter, setSelectedSpecialityFilter] = useState<string | null>(null);
  const [indiaRegionFilter, setIndiaRegionFilter] = useState('all');
  const [worldRegionFilter, setWorldRegionFilter] = useState('all');

  // Modals
  const [selectedPackageForDetail, setSelectedPackageForDetail] = useState<VeenaPackage | null>(null);
  const [activeItineraryTab, setActiveItineraryTab] = useState<'itinerary' | 'inclusions' | 'dates'>('itinerary');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState<VeenaPackage | null>(null);

  // Booking Form State
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingCity, setBookingCity] = useState('Mumbai');
  const [bookingDate, setBookingDate] = useState('');
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [mealPreference, setMealPreference] = useState('Vegetarian / Jain');
  const [specialRemarks, setSpecialRemarks] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Customized Holidays Planner Modal
  const [customPlannerOpen, setCustomPlannerOpen] = useState(false);
  const [customDest, setCustomDest] = useState('Switzerland & Paris');
  const [customDuration, setCustomDuration] = useState('7 - 9 Days');
  const [customBudget, setCustomBudget] = useState('₹1,50,000 - ₹2,50,000 per person');
  const [customHotelStandard, setCustomHotelStandard] = useState('4-Star Premium');
  const [customName, setCustomName] = useState('');
  const [customPhone, setCustomPhone] = useState('');
  const [customSuccess, setCustomSuccess] = useState(false);

  // Callback modal
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  // Offers state
  const [activeOfferTab, setActiveOfferTab] = useState<'all' | 'summer' | 'women' | 'senior' | 'international'>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Branch filter state
  const [selectedBranchCity, setSelectedBranchCity] = useState<string>('All');

  // FAQ state
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('All');

  // Contact section form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactInterest, setContactInterest] = useState('Group Tour Packages');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  // Filtered packages calculation
  const filteredPackages = useMemo(() => {
    return VEENA_PACKAGES.filter(pkg => {
      // Category filter
      if (selectedCategoryTab !== 'all' && pkg.category !== selectedCategoryTab) {
        return false;
      }

      // Speciality filter
      if (selectedSpecialityFilter && pkg.specialityType !== selectedSpecialityFilter) {
        return false;
      }

      // Region sub-filter
      if (pkg.category === 'india' && indiaRegionFilter !== 'all' && pkg.region !== indiaRegionFilter) {
        return false;
      }
      if (pkg.category === 'world' && worldRegionFilter !== 'all' && pkg.region !== worldRegionFilter) {
        return false;
      }

      // Search text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = pkg.title.toLowerCase().includes(q);
        const matchRoute = pkg.route.toLowerCase().includes(q);
        const matchSummary = pkg.destinationSummary.toLowerCase().includes(q);
        const matchCode = pkg.tourCode.toLowerCase().includes(q);
        if (!matchTitle && !matchRoute && !matchSummary && !matchCode) {
          return false;
        }
      }

      // City filter
      if (selectedCity !== 'All Cities' && !pkg.departureCities.includes(selectedCity)) {
        return false;
      }

      return true;
    });
  }, [
    selectedCategoryTab,
    selectedSpecialityFilter,
    indiaRegionFilter,
    worldRegionFilter,
    searchQuery,
    selectedCity
  ]);

  const handleOpenDetail = (pkg: VeenaPackage) => {
    setSelectedPackageForDetail(pkg);
    setActiveItineraryTab('itinerary');
  };

  const handleOpenBooking = (pkg: VeenaPackage) => {
    setBookingPackage(pkg);
    setBookingDate(pkg.departureDates[0] || '15 Apr 2026');
    setBookingSuccess(false);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingPackage) return;

    const totalPersons = adultsCount + childrenCount;
    const estimatedTotal = bookingPackage.priceInr * adultsCount + (bookingPackage.priceInr * 0.8) * childrenCount;

    submitLead({
      websiteSlug: 'veena-world',
      businessName: 'Veena World',
      customerName: bookingName,
      customerPhone: bookingPhone,
      customerEmail: bookingEmail,
      serviceRequested: `Tour Booking: ${bookingPackage.title} (${bookingPackage.tourCode}) — ${totalPersons} Travelers (Adults: ${adultsCount}, Kids: ${childrenCount}) for ${bookingDate} from ${bookingCity}. Meal: ${mealPreference}. Est. Total: ₹${estimatedTotal.toLocaleString('en-IN')}`,
      message: specialRemarks || 'Submitted via Veena World Online Portal',
      status: 'new'
    });

    setBookingSuccess(true);
    setTimeout(() => {
      setBookingModalOpen(false);
      setBookingSuccess(false);
      setBookingName('');
      setBookingPhone('');
      setBookingEmail('');
    }, 2800);
  };

  const handleCustomPlannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName || !customPhone) return;

    submitLead({
      websiteSlug: 'veena-world',
      businessName: 'Veena World Customized Holidays',
      customerName: customName,
      customerPhone: customPhone,
      serviceRequested: `Customized Holiday Request: ${customDest} · Duration: ${customDuration} · Budget: ${customBudget} · Hotel: ${customHotelStandard}`,
      message: 'Client requested customized holiday itinerary from Veena World Travel Specialist.',
      status: 'new'
    });

    setCustomSuccess(true);
    setTimeout(() => {
      setCustomPlannerOpen(false);
      setCustomSuccess(false);
    }, 2500);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone) return;

    submitLead({
      websiteSlug: 'veena-world',
      businessName: 'Veena World',
      customerName: callbackName,
      customerPhone: callbackPhone,
      serviceRequested: 'Immediate Callback Request from Veena World Travel Expert',
      message: 'Client requested immediate callback from Veena World holiday specialist.',
      status: 'new'
    });

    setCallbackSuccess(true);
    setTimeout(() => {
      setCallbackModalOpen(false);
      setCallbackSuccess(false);
      setCallbackName('');
      setCallbackPhone('');
    }, 2500);
  };

  const handleCopyCode = (code: string) => {
    try {
      navigator.clipboard?.writeText(code);
    } catch {
      // safe fallback
    }
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;

    submitLead({
      websiteSlug: 'veena-world',
      businessName: 'Veena World Guest Relations',
      customerName: contactName,
      customerPhone: contactPhone,
      customerEmail: contactEmail,
      serviceRequested: `Direct Contact Inquiry: ${contactInterest}`,
      message: contactMessage || 'Submitted via Veena World Contact Us Desk.',
      status: 'new'
    });

    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactMessage('');
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-['Inter',sans-serif] selection:bg-[#FDB813] selection:text-[#0F2C59]">
      {/* 1. Global Reference Site Switcher Bar */}
      <ReferenceSiteSwitcher currentSiteId="veena-world" />

      {/* 2. Veena World Top Utility Bar */}
      <div className="bg-[#0A1D37] text-slate-300 text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Toll Free Helpline & Hours */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="tel:1800227979"
              className="flex items-center gap-1.5 text-[#FDB813] font-bold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Toll Free: 1800 22 7979</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              Mon–Sun: 9:00 AM – 9:00 PM IST
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-300">
              Corporate Office: Vidyavihar, Mumbai
            </span>
          </div>

          {/* Quick Utility Links */}
          <div className="flex items-center gap-3 text-slate-300">
            <button
              onClick={() => setCustomPlannerOpen(true)}
              className="hover:text-[#FDB813] transition-colors cursor-pointer"
            >
              Custom Holidays
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => {
                setSelectedSpecialityFilter('women');
                scrollToSection('packages-section');
              }}
              className="hover:text-pink-400 transition-colors cursor-pointer text-pink-300 font-semibold"
            >
              Women Special
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => {
                setSelectedSpecialityFilter('senior');
                scrollToSection('packages-section');
              }}
              className="hover:text-teal-400 transition-colors cursor-pointer text-teal-300 font-semibold"
            >
              Senior Special
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => setCallbackModalOpen(true)}
              className="bg-[#FDB813] text-[#0A1D37] px-2 py-0.5 rounded font-bold hover:bg-yellow-400 transition-colors"
            >
              Request Callback
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Header Bar */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer shrink-0"
              onClick={() => {
                setSelectedCategoryTab('all');
                setSelectedSpecialityFilter(null);
                setSearchQuery('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {/* Distinctive Veena World Brand Symbol */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F2C59] via-[#0A1D37] to-[#D32F2F] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#0F2C59] rounded-[14px] flex flex-col items-center justify-center text-white">
                  <div className="flex items-center">
                    <span className="font-black text-lg text-[#FDB813]">V</span>
                    <span className="font-black text-lg text-white">W</span>
                  </div>
                  <div className="w-5 h-0.5 bg-[#D32F2F] rounded-full -mt-0.5" />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black tracking-tight text-[#0F2C59]">
                    VEENA
                  </span>
                  <span className="text-2xl font-black tracking-tight text-[#D32F2F]">
                    WORLD
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase -mt-1 font-mono">
                  Travel · Explore · Celebrate Life
                </p>
              </div>
            </div>

            {/* Global Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search tours, Kashmir, Europe, Bali, Senior Special, Dubai..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-20 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:bg-white transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-12 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => scrollToSection('packages-section')}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#0F2C59] text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[#0A1D37] transition-colors"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Action Buttons & Hotline */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/918879972222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-bold text-xs transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>WhatsApp Us</span>
              </a>
              <button
                onClick={() => setCustomPlannerOpen(true)}
                className="px-4 py-2 rounded-xl bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] font-black text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                Plan My Holiday
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Primary Category Nav Strip */}
          <nav className="hidden lg:flex items-center justify-between border-t border-slate-100 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700">
            <div className="flex items-center gap-7">
              <button
                onClick={() => {
                  setSelectedCategoryTab('all');
                  setSelectedSpecialityFilter(null);
                  scrollToSection('packages-section');
                }}
                className={`hover:text-[#D32F2F] transition-colors py-1 cursor-pointer ${
                  selectedCategoryTab === 'all' && !selectedSpecialityFilter
                    ? 'text-[#0F2C59] border-b-2 border-[#FDB813]'
                    : ''
                }`}
              >
                All Tours
              </button>
              <button
                onClick={() => {
                  setSelectedCategoryTab('india');
                  setSelectedSpecialityFilter(null);
                  scrollToSection('packages-section');
                }}
                className={`hover:text-[#D32F2F] transition-colors py-1 cursor-pointer ${
                  selectedCategoryTab === 'india'
                    ? 'text-[#0F2C59] border-b-2 border-[#FDB813]'
                    : ''
                }`}
              >
                India Holidays
              </button>
              <button
                onClick={() => {
                  setSelectedCategoryTab('world');
                  setSelectedSpecialityFilter(null);
                  scrollToSection('packages-section');
                }}
                className={`hover:text-[#D32F2F] transition-colors py-1 cursor-pointer ${
                  selectedCategoryTab === 'world'
                    ? 'text-[#0F2C59] border-b-2 border-[#FDB813]'
                    : ''
                }`}
              >
                World Holidays
              </button>
              <button
                onClick={() => {
                  setSelectedSpecialityFilter('women');
                  scrollToSection('packages-section');
                }}
                className={`hover:text-pink-600 transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                  selectedSpecialityFilter === 'women'
                    ? 'text-pink-600 border-b-2 border-pink-500'
                    : 'text-pink-600'
                }`}
              >
                <span>🌸</span>
                <span>Women's Special</span>
              </button>
              <button
                onClick={() => {
                  setSelectedSpecialityFilter('senior');
                  scrollToSection('packages-section');
                }}
                className={`hover:text-teal-700 transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                  selectedSpecialityFilter === 'senior'
                    ? 'text-teal-700 border-b-2 border-teal-500'
                    : 'text-teal-700'
                }`}
              >
                <span>👴</span>
                <span>Senior's Special</span>
              </button>
              <button
                onClick={() => {
                  setSelectedSpecialityFilter('honeymoon');
                  scrollToSection('packages-section');
                }}
                className={`hover:text-rose-600 transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                  selectedSpecialityFilter === 'honeymoon'
                    ? 'text-rose-600 border-b-2 border-rose-500'
                    : ''
                }`}
              >
                <span>💍</span>
                <span>Honeymoon Special</span>
              </button>
              <button
                onClick={() => setCustomPlannerOpen(true)}
                className="hover:text-[#D32F2F] transition-colors py-1 cursor-pointer flex items-center gap-1 text-[#0F2C59]"
              >
                <span>Tailor-Made</span>
              </button>
              <button
                onClick={() => scrollToSection('offers-section')}
                className="hover:text-[#D32F2F] transition-colors py-1 cursor-pointer flex items-center gap-1 text-amber-700"
              >
                <span>🔥</span>
                <span>Offers</span>
              </button>
              <button
                onClick={() => scrollToSection('offices-section')}
                className="hover:text-[#D32F2F] transition-colors py-1 cursor-pointer text-slate-700"
              >
                Offices
              </button>
              <button
                onClick={() => scrollToSection('faq-section')}
                className="hover:text-[#D32F2F] transition-colors py-1 cursor-pointer text-slate-700"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact-section')}
                className="hover:text-[#D32F2F] transition-colors py-1 cursor-pointer text-slate-700"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-4 text-slate-500">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Guaranteed Departures</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-amber-600 font-semibold">
                <Utensils className="w-3.5 h-3.5" />
                <span>All Meals by Indian Chef</span>
              </span>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 shadow-xl">
            {/* Mobile Search */}
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tours..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
              />
            </div>

            <button
              onClick={() => {
                setSelectedCategoryTab('all');
                setSelectedSpecialityFilter(null);
                scrollToSection('packages-section');
              }}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-slate-800"
            >
              All Tours & Packages
            </button>
            <button
              onClick={() => {
                setSelectedCategoryTab('india');
                setSelectedSpecialityFilter(null);
                scrollToSection('packages-section');
              }}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-slate-800"
            >
              Incredible India Holidays
            </button>
            <button
              onClick={() => {
                setSelectedCategoryTab('world');
                setSelectedSpecialityFilter(null);
                scrollToSection('packages-section');
              }}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-slate-800"
            >
              World Holidays (Europe, Asia, Dubai)
            </button>
            <button
              onClick={() => {
                setSelectedSpecialityFilter('women');
                scrollToSection('packages-section');
              }}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-pink-600"
            >
              🌸 Women's Special Escorted Tours
            </button>
            <button
              onClick={() => {
                setSelectedSpecialityFilter('senior');
                scrollToSection('packages-section');
              }}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-teal-700"
            >
              👴 Senior's Special Leisure Tours
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCustomPlannerOpen(true);
              }}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-[#0F2C59]"
            >
              Customized Holidays (Tailor-Made)
            </button>
            <button
              onClick={() => scrollToSection('offers-section')}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-amber-600"
            >
              🔥 Special Offers & Mega Deals
            </button>
            <button
              onClick={() => scrollToSection('offices-section')}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-slate-800"
            >
              🏢 Sales Offices & Branch Lounges
            </button>
            <button
              onClick={() => scrollToSection('faq-section')}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-slate-800"
            >
              ❓ Frequently Asked Questions (FAQ)
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="block w-full text-left py-2 border-b border-slate-100 font-bold text-slate-800"
            >
              📞 Contact Us & Support Desk
            </button>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:1800227979"
                className="w-full py-2.5 rounded-lg bg-[#0F2C59] text-white text-center font-bold text-xs"
              >
                Call Toll-Free: 1800 22 7979
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCallbackModalOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-[#FDB813] text-[#0F2C59] text-center font-bold text-xs"
              >
                Request Free Callback
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 4. Hero Section with Search Engine Widget */}
      <section className="relative min-h-[540px] flex items-center bg-[#07172F] text-white overflow-hidden">
        {/* Background Visual with Rich Scrim */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1800&q=85"
            alt="Veena World Scenic Travel"
            className="w-full h-full object-cover"
            onError={(e: any) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07172F] via-[#07172F]/90 to-[#07172F]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-3xl space-y-4">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FDB813] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India’s Most Loved Tour Company Since 2013</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Travel. Explore. <br />
              <span className="text-[#FDB813]">Celebrate Life.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
              All-inclusive escorted group tours and customized holidays across India and the World. Guaranteed departures, caring tour managers, and delicious hot Indian meals on every journey.
            </p>
          </div>

          {/* Interactive Holiday Search Engine Box */}
          <div className="mt-8 bg-white rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-800 border border-slate-100 max-w-5xl">
            {/* Search Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4 overflow-x-auto scrollbar-none">
              <button
                onClick={() => {
                  setSearchTab('group');
                  setSelectedCategoryTab('all');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  searchTab === 'group'
                    ? 'bg-[#0F2C59] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Group Tours
              </button>
              <button
                onClick={() => setCustomPlannerOpen(true)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  searchTab === 'customized'
                    ? 'bg-[#0F2C59] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Customized Holidays
              </button>
              <button
                onClick={() => {
                  setSearchTab('speciality');
                  setSelectedSpecialityFilter('women');
                  scrollToSection('packages-section');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  searchTab === 'speciality'
                    ? 'bg-[#0F2C59] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Speciality Tours (Women / Senior)
              </button>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Destination Search */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Where to?
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Kashmir, Swiss, Bali..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:bg-white"
                  />
                </div>
              </div>

              {/* Month Selector */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Month of Travel
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedMonth}
                    onChange={e => setSelectedMonth(e.target.value)}
                    className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FDB813] appearance-none cursor-pointer"
                  >
                    {DEPARTURE_MONTHS.map(m => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Departure City */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Departure City
                </label>
                <div className="relative">
                  <Plane className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FDB813] appearance-none cursor-pointer"
                  >
                    {DEPARTURE_CITIES.map(c => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Search CTA Button */}
              <div className="flex items-end">
                <button
                  onClick={() => scrollToSection('packages-section')}
                  className="w-full py-3 bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] font-black rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Explore Tours</span>
                </button>
              </div>
            </div>

            {/* Popular Search Quick Tags */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 flex-wrap text-xs text-slate-500">
              <span className="font-bold text-slate-700">Trending Now:</span>
              {['Kashmir', 'Switzerland', 'Himachal', 'Dubai', 'Kerala', 'Japan', 'Rajasthan'].map(dest => (
                <button
                  key={dest}
                  onClick={() => {
                    setSearchQuery(dest);
                    scrollToSection('packages-section');
                  }}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#FDB813]/20 hover:text-[#0F2C59] text-slate-600 transition-colors cursor-pointer"
                >
                  {dest}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Speciality Tours Strip (Women's Special, Senior's Special, etc.) */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D32F2F]">
              Signature Travel Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2C59] mt-1">
              Veena World Speciality Tours
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Thoughtfully curated for distinct traveler communities. Travel with like-minded companions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SPECIALITY_TOUR_TYPES.map(spec => {
              const isSelected = selectedSpecialityFilter === spec.id;
              return (
                <div
                  key={spec.id}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedSpecialityFilter(null);
                    } else {
                      setSelectedSpecialityFilter(spec.id);
                      scrollToSection('packages-section');
                    }
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#0F2C59] ring-2 ring-[#FDB813] bg-amber-50/50 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-md bg-white'
                  }`}
                >
                  <div>
                    <div className="text-3xl mb-3">{spec.icon}</div>
                    <h3 className="font-bold text-sm text-[#0F2C59] flex items-center justify-between">
                      <span>{spec.title}</span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-3 leading-relaxed">
                      {spec.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                    <span style={{ color: spec.color }}>
                      {isSelected ? 'Active Filter' : 'View Packages →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Destination Highlights Carousel */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider">
                Popular Getaways
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F2C59]">
                Featured Holiday Destinations
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedCategoryTab('india');
                  scrollToSection('packages-section');
                }}
                className="text-xs font-bold text-[#0F2C59] hover:underline"
              >
                All India Destinations →
              </button>
              <span className="text-slate-400">·</span>
              <button
                onClick={() => {
                  setSelectedCategoryTab('world');
                  scrollToSection('packages-section');
                }}
                className="text-xs font-bold text-[#0F2C59] hover:underline"
              >
                All World Destinations →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {TOP_DESTINATIONS.map(dest => (
              <button
                key={dest.id}
                onClick={() => {
                  setSearchQuery(dest.name);
                  scrollToSection('packages-section');
                }}
                className="group text-left bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="h-28 overflow-hidden relative bg-slate-200">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e: any) => {
                      e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-white font-black text-xs">
                    {dest.name}
                  </span>
                </div>
                <div className="p-2.5 text-center">
                  <span className="text-[10px] text-slate-500 font-semibold block">
                    Starts from
                  </span>
                  <span className="text-xs font-black text-[#0F2C59] block">
                    ₹{dest.startingPriceInr.toLocaleString('en-IN')}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Main Packages Explorer Section */}
      <section id="packages-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider">
                Explore Itineraries
              </span>
              {selectedSpecialityFilter && (
                <span className="px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold uppercase">
                  Filtered by Speciality
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2C59]">
              {selectedCategoryTab === 'all'
                ? 'All Veena World Holiday Packages'
                : selectedCategoryTab === 'india'
                ? 'Incredible India Group Tour Packages'
                : 'International World Tour Packages'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Showing {filteredPackages.length} tours with all-inclusive pricing, all meals & tour manager assurance.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => {
                setSelectedCategoryTab('all');
                setSelectedSpecialityFilter(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategoryTab === 'all' && !selectedSpecialityFilter
                  ? 'bg-[#0F2C59] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              All Packages ({VEENA_PACKAGES.length})
            </button>
            <button
              onClick={() => {
                setSelectedCategoryTab('india');
                setSelectedSpecialityFilter(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategoryTab === 'india'
                  ? 'bg-[#0F2C59] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              India Tours ({VEENA_PACKAGES.filter(p => p.category === 'india').length})
            </button>
            <button
              onClick={() => {
                setSelectedCategoryTab('world');
                setSelectedSpecialityFilter(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategoryTab === 'world'
                  ? 'bg-[#0F2C59] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              World Tours ({VEENA_PACKAGES.filter(p => p.category === 'world').length})
            </button>
            {(selectedSpecialityFilter || searchQuery || selectedCity !== 'All Cities') && (
              <button
                onClick={() => {
                  setSelectedCategoryTab('all');
                  setSelectedSpecialityFilter(null);
                  setSearchQuery('');
                  setSelectedCity('All Cities');
                }}
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Packages Cards Grid */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <Compass className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">No matching tours found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We couldn't find a tour matching your current search query "{searchQuery}". Try selecting "All Tours" or clear your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategoryTab('all');
                setSelectedSpecialityFilter(null);
                setSearchQuery('');
                setSelectedCity('All Cities');
              }}
              className="px-4 py-2 bg-[#0F2C59] text-white rounded-xl text-xs font-bold hover:bg-[#0A1D37]"
            >
              View All Tours
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map(pkg => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e: any) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                    {pkg.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-[#D32F2F] text-white font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
                        {pkg.badge}
                      </span>
                    )}
                    <span className="px-2 py-1 rounded-md bg-[#0F2C59]/90 backdrop-blur-xs text-white font-bold text-[10px] tracking-wide">
                      {pkg.tourCode}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[#0F2C59] font-black text-xs shadow-sm">
                    {pkg.durationDays}D / {pkg.durationNights}N
                  </div>

                  {/* Route Bar */}
                  <div className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold truncate flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FDB813] shrink-0" />
                    <span className="truncate">{pkg.route}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Rating & Review */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                      <span className="inline-flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>{pkg.rating}</span>
                        <span className="text-slate-400 font-normal">({pkg.reviewsCount} reviews)</span>
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700">
                        Guaranteed Departure
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => handleOpenDetail(pkg)}
                      className="font-black text-base text-[#0F2C59] hover:text-[#D32F2F] transition-colors cursor-pointer line-clamp-2"
                    >
                      {pkg.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {pkg.destinationSummary}
                    </p>

                    {/* Key What's Included Badges */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px] text-slate-600 font-medium">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        ✈️ Flights
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        🏨 4★ Hotels
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">
                        🍲 All Meals Included
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        🧭 Tour Manager
                      </span>
                    </div>

                    {/* Departure Dates Preview */}
                    <div className="mt-3 text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700">Upcoming Departures: </span>
                      <span>{pkg.departureDates.slice(0, 3).join(', ')}</span>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs text-slate-400">All-Inclusive</span>
                        <span className="text-xl font-black text-[#0F2C59]">
                          ₹{pkg.priceInr.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 block">
                        EMI from ₹{pkg.emiStartsFromInr.toLocaleString('en-IN')}/mo
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenDetail(pkg)}
                        className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Itinerary
                      </button>
                      <button
                        onClick={() => handleOpenBooking(pkg)}
                        className="px-4 py-2 rounded-xl bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] text-xs font-black uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 8. "Why Choose Veena World" Trust Pillars */}
      <section className="py-16 bg-[#0A1D37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FDB813]">
              The Veena World Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              Why 10 Lakh+ Travelers Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Founded on trust, transparent pricing, and unwavering guest satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_PILLARS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F2850]/80 border border-slate-700/60 hover:border-[#FDB813]/60 transition-all space-y-2.5"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#FDB813]">
                  {item.stat}
                </div>
                <h3 className="font-bold text-base text-white">{item.label}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Guest Reviews & Travel Stories */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D32F2F]">
              Travel Stories & Guest Love
            </span>
            <h2 className="text-3xl font-black text-[#0F2C59] mt-1">
              Smiles Across Continents
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Read verified reviews from families, solo women, and senior citizens who celebrated life with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VEENA_REVIEWS.map(rev => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.reviewText}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900">{rev.guestName}</h4>
                    <p className="text-[11px] text-slate-500">{rev.city} · {rev.tourTaken}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">Tour Manager</span>
                    <span className="text-[11px] font-bold text-[#0F2C59]">{rev.tourManagerName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Early Bird Promotion Banner */}
      <section className="py-12 bg-gradient-to-r from-[#0F2C59] via-[#0A1D37] to-[#D32F2F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FDB813] text-[#0A1D37] text-xs font-black uppercase tracking-wider">
              Summer 2026 Mega Sale
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Save up to ₹15,000 per family on Europe & Kashmir!
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Book your 2026 holiday before April 30 and enjoy zero cancellation fee guarantee, free travel insurance, and complimentary photo memory album.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollToSection('offers-section')}
              className="px-6 py-3.5 bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              Browse Offers
            </button>
            <button
              onClick={() => setCallbackModalOpen(true)}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors"
            >
              Talk to Specialist
            </button>
          </div>
        </div>
      </section>

      {/* 11. Exclusive Offers & Holiday Deals Section */}
      <section id="offers-section" className="py-16 bg-[#F1F5F9] border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                <BadgePercent className="w-3.5 h-3.5 text-amber-600" />
                <span>Special Promo Codes & Deals</span>
              </div>
              <h2 className="text-3xl font-black text-[#0F2C59]">
                Exclusive Holiday Offers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Unlock instant discounts, complimentary gala experiences, companion benefits, and flexi-cancellation privileges.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {(['all', 'summer', 'women', 'senior', 'international'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveOfferTab(tab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all capitalize cursor-pointer ${
                    activeOfferTab === tab
                      ? 'bg-[#0F2C59] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab === 'all' ? 'All Offers' : tab === 'women' ? "Women's Special" : tab === 'senior' ? "Senior's" : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEENA_OFFERS.filter(
              o => activeOfferTab === 'all' || o.category === activeOfferTab
            ).map(offer => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -z-0 opacity-60 pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#D32F2F] text-white font-extrabold text-[10px] uppercase tracking-wider">
                      {offer.badge}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Valid: {offer.validTill}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-black text-base text-[#0F2C59] leading-snug">
                      {offer.title}
                    </h3>
                    <div className="text-sm font-black text-[#D32F2F] mt-1">
                      {offer.discount}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2 relative z-10">
                  <div className="flex items-center justify-between bg-slate-50 border border-dashed border-slate-300 rounded-xl px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#0F2C59]" />
                      <span className="font-mono font-black text-xs text-[#0F2C59] tracking-wider">
                        {offer.code}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(offer.code)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D32F2F] hover:underline cursor-pointer"
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      if (offer.category === 'women') {
                        setSelectedSpecialityFilter('women');
                      } else if (offer.category === 'senior') {
                        setSelectedSpecialityFilter('senior');
                      } else {
                        setSelectedCategoryTab('all');
                      }
                      scrollToSection('packages-section');
                    }}
                    className="w-full py-2 bg-[#0F2C59] hover:bg-[#0A1D37] text-white font-bold rounded-xl text-xs text-center transition-colors cursor-pointer"
                  >
                    Apply on Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Sales Offices & Flagship Lounges Across India */}
      <section id="offices-section" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Building className="w-3.5 h-3.5 text-blue-600" />
                <span>100+ Outlets & Lounges Pan-India</span>
              </div>
              <h2 className="text-3xl font-black text-[#0F2C59]">
                Visit Our Sales Offices
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Walk in for personalized holiday consultations, visa guidance, and instant bookings over a warm cup of chai.
              </p>
            </div>

            {/* City Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {['All', 'Mumbai', 'Thane', 'Pune', 'Delhi NCR', 'Ahmedabad', 'Bengaluru'].map(city => (
                <button
                  key={city}
                  onClick={() => setSelectedBranchCity(city)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedBranchCity === city
                      ? 'bg-[#0F2C59] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEENA_BRANCHES.filter(
              b => selectedBranchCity === 'All' || b.city === selectedBranchCity
            ).map(branch => (
              <div
                key={branch.id}
                className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-5 transition-all shadow-xs hover:shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#D32F2F] uppercase tracking-wider">
                      {branch.city}
                    </span>
                    {branch.isHeadquarters && (
                      <span className="px-2 py-0.5 rounded bg-[#FDB813] text-[#0F2C59] font-black text-[10px] uppercase">
                        HQ
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {branch.name}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{branch.address}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{branch.timings}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`mailto:${branch.email}`} className="text-[#0F2C59] hover:underline">
                        {branch.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                  <a
                    href={`tel:${branch.phone.split('/')[0].trim()}`}
                    className="flex-1 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-[#0F2C59] font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Phone className="w-3 h-3 text-[#D32F2F]" />
                    <span>Call Office</span>
                  </a>
                  <button
                    onClick={() => setCallbackModalOpen(true)}
                    className="flex-1 py-2 rounded-xl bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] font-bold text-xs text-center transition-colors shadow-2xs cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Frequently Asked Questions (FAQ) Accordion */}
      <section id="faq-section" className="py-16 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D32F2F]">
              Have Questions?
            </span>
            <h2 className="text-3xl font-black text-[#0F2C59] mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Everything you need to know about our departures, Indian meals, tour managers, and easy booking.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {['All', 'Booking & Departure', 'Food & Meals', 'Tour Managers', 'Speciality Tours', 'Payments & EMI', 'Visas & Insurance'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedFaqCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFaqCategory === cat
                    ? 'bg-[#0F2C59] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {VEENA_FAQS.filter(
              f => selectedFaqCategory === 'All' || f.category === selectedFaqCategory
            ).map(faq => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-600">
                        {faq.category}
                      </span>
                      <h3 className="font-bold text-sm text-slate-900">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#0F2C59]' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-sm text-slate-800">
              Still have questions about your itinerary?
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Speak directly with our senior destination specialist 7 days a week.
            </p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <a
                href="tel:1800227979"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F2C59] text-white rounded-xl text-xs font-bold hover:bg-[#0A1D37]"
              >
                <Phone className="w-3.5 h-3.5 text-[#FDB813]" />
                <span>Call 1800 22 7979</span>
              </a>
              <button
                onClick={() => setCallbackModalOpen(true)}
                className="px-4 py-2 bg-[#FDB813] text-[#0F2C59] rounded-xl text-xs font-bold hover:bg-yellow-400 cursor-pointer"
              >
                Request Free Callback
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Contact Us & Support Desk */}
      <section id="contact-section" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Direct Helpline & Details */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#D32F2F]">
                  Get In Touch
                </span>
                <h2 className="text-3xl font-black text-[#0F2C59] mt-1">
                  We're Here to Help You Celebrate Life
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Whether you are planning an international family vacation, a solo women's getaway, or an easy-paced senior citizen tour, our travel advisors are ready to assist.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Toll-Free Helpline</h4>
                  <a href="tel:1800227979" className="text-base font-black text-[#0F2C59] hover:underline block">
                    1800 22 7979
                  </a>
                  <p className="text-[11px] text-slate-500">Mon–Sun 9:00 AM – 9:00 PM IST</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">WhatsApp Desk</h4>
                  <a
                    href="https://wa.me/918879972222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-black text-emerald-600 hover:underline block"
                  >
                    +91 88799 72222
                  </a>
                  <p className="text-[11px] text-slate-500">Instant itinerary PDFs on chat</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-900">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Veena World Corporate Headquarters</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Neelkanth Corporate Park, 4th Floor, Kirol Road, Vidyavihar (West), Mumbai 400086, Maharashtra, India.
                </p>
              </div>
            </div>

            {/* Right Column: Direct Enquiry Form */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
              <h3 className="text-xl font-black text-[#0F2C59] mb-1">
                Send Us an Enquiry
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Fill the details below and a destination manager will contact you within 15 minutes.
              </p>

              {contactSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Enquiry Submitted!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Thank you, <strong>{contactName}</strong>. Our travel specialist has received your request and will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Shrivastava"
                      value={contactName}
                      onChange={e => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 XXXXX"
                        value={contactPhone}
                        onChange={e => setContactPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={contactEmail}
                        onChange={e => setContactEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Holiday Interest
                    </label>
                    <select
                      value={contactInterest}
                      onChange={e => setContactInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                    >
                      <option value="Group Tour Packages">Escorted Group Tour Packages</option>
                      <option value="Customized Tailor-Made Holiday">Customized Tailor-Made Holiday</option>
                      <option value="Women's Special Escorted Tour">Women's Special Escorted Tour</option>
                      <option value="Senior's Special Leisure Tour">Senior's Special Leisure Tour</option>
                      <option value="Honeymoon Special Package">Honeymoon Special Package</option>
                      <option value="Visa & Passport Assistance">Visa & Passport Assistance</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Message / Destination Request
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Planning a 10-day trip to Europe for family of 4 in May..."
                      value={contactMessage}
                      onChange={e => setContactMessage(e.target.value)}
                      className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] font-black rounded-xl text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Comprehensive Veena World Footer */}
      <footer className="bg-[#071324] text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Row: Brand & Helpline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-[#FDB813]">VEENA</span>
                <span className="text-2xl font-black text-[#D32F2F]">WORLD</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Travel. Explore. Celebrate Life — India's Premier Tour Operator.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Toll-Free Customer Care
                </span>
                <a href="tel:1800227979" className="text-lg font-black text-white hover:text-[#FDB813]">
                  1800 22 7979 / 1800 22 7980
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  WhatsApp Travel Desk
                </span>
                <a
                  href="https://wa.me/918879972222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-black text-emerald-400 hover:underline"
                >
                  +91 88799 72222
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Email Enquiries
                </span>
                <a href="mailto:travel@veenaworld.com" className="text-sm font-bold text-white hover:text-[#FDB813]">
                  travel@veenaworld.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                India Tour Packages
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li><button onClick={() => { setSearchQuery('Kashmir'); scrollToSection('packages-section'); }} className="hover:text-white">Kashmir Holiday Packages</button></li>
                <li><button onClick={() => { setSearchQuery('Himachal'); scrollToSection('packages-section'); }} className="hover:text-white">Himachal Shimla Manali</button></li>
                <li><button onClick={() => { setSearchQuery('Kerala'); scrollToSection('packages-section'); }} className="hover:text-white">Kerala Backwaters & Munnar</button></li>
                <li><button onClick={() => { setSearchQuery('Rajasthan'); scrollToSection('packages-section'); }} className="hover:text-white">Rajasthan Royal Palaces</button></li>
                <li><button onClick={() => { setSearchQuery('Andaman'); scrollToSection('packages-section'); }} className="hover:text-white">Andaman Island Tours</button></li>
                <li><button onClick={() => { setSearchQuery('Ladakh'); scrollToSection('packages-section'); }} className="hover:text-white">Leh Ladakh High Passes</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                World Tour Packages
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li><button onClick={() => { setSearchQuery('Switzerland'); scrollToSection('packages-section'); }} className="hover:text-white">Switzerland & Paris Magic</button></li>
                <li><button onClick={() => { setSearchQuery('Europe'); scrollToSection('packages-section'); }} className="hover:text-white">Grand Europe 7 Countries</button></li>
                <li><button onClick={() => { setSearchQuery('Dubai'); scrollToSection('packages-section'); }} className="hover:text-white">Dubai & Abu Dhabi Extravaganza</button></li>
                <li><button onClick={() => { setSearchQuery('Singapore'); scrollToSection('packages-section'); }} className="hover:text-white">Singapore & Malaysia Special</button></li>
                <li><button onClick={() => { setSearchQuery('Japan'); scrollToSection('packages-section'); }} className="hover:text-white">Japan Cherry Blossom Tours</button></li>
                <li><button onClick={() => { setSearchQuery('Vietnam'); scrollToSection('packages-section'); }} className="hover:text-white">Vietnam & Cambodia Angkor Wat</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                Speciality Holidays
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li><button onClick={() => { setSelectedSpecialityFilter('women'); scrollToSection('packages-section'); }} className="text-pink-400 hover:text-pink-300">Women's Special Tours</button></li>
                <li><button onClick={() => { setSelectedSpecialityFilter('senior'); scrollToSection('packages-section'); }} className="text-teal-400 hover:text-teal-300">Senior's Special Tours</button></li>
                <li><button onClick={() => { setSelectedSpecialityFilter('honeymoon'); scrollToSection('packages-section'); }} className="hover:text-white">Honeymoon Romantic Escapes</button></li>
                <li><button onClick={() => setCustomPlannerOpen(true)} className="hover:text-white">Customized Tailor-Made Holidays</button></li>
                <li><button onClick={() => setCustomPlannerOpen(true)} className="hover:text-white">Corporate MICE & Conferences</button></li>
                <li><button onClick={() => setCustomPlannerOpen(true)} className="hover:text-white">Jubilee & Anniversary Tours</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                Corporate Address
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                <strong className="text-white">Veena World Corporate Office:</strong><br />
                Neelkanth Corporate Park, 4th Floor,<br />
                Kirol Road, Vidyavihar (West),<br />
                Mumbai, Maharashtra — 400086.
              </p>
              <div className="pt-2 text-[11px] text-slate-300 flex flex-wrap gap-x-3 gap-y-1">
                <button onClick={() => scrollToSection('offers-section')} className="hover:text-[#FDB813] underline text-amber-400">
                  Offers & Coupons
                </button>
                <button onClick={() => scrollToSection('offices-section')} className="hover:text-white underline">
                  Branch Lounges
                </button>
                <button onClick={() => scrollToSection('faq-section')} className="hover:text-white underline">
                  FAQs
                </button>
                <button onClick={() => scrollToSection('contact-section')} className="hover:text-white underline">
                  Contact Support
                </button>
              </div>
              <div className="pt-2 text-[10px] text-slate-400">
                <span>Accreditations: IATA · TAAI · IATO · Maharashtra Tourism</span>
              </div>
            </div>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
            <p>© {new Date().getFullYear()} Veena World. Recreated with highest fidelity inside RaoSitez.</p>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>·</span>
              <span>Terms & Conditions</span>
              <span>·</span>
              <span>Cancellation Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: Comprehensive Tour Details & Itinerary Modal */}
      {selectedPackageForDetail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-900 my-auto">
            {/* Modal Header */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900 shrink-0">
              <img
                src={selectedPackageForDetail.imageUrl}
                alt={selectedPackageForDetail.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

              <button
                onClick={() => setSelectedPackageForDetail(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded bg-[#D32F2F] text-white font-extrabold text-[10px] uppercase">
                    {selectedPackageForDetail.tourCode}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#FDB813] text-[#0A1D37] font-black text-[10px] uppercase">
                    {selectedPackageForDetail.durationDays} Days / {selectedPackageForDetail.durationNights} Nights
                  </span>
                  <span className="text-xs text-amber-300 font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{selectedPackageForDetail.rating} ({selectedPackageForDetail.reviewsCount} reviews)</span>
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedPackageForDetail.title}
                </h3>
                <p className="text-xs text-slate-200 mt-1 font-mono flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FDB813]" />
                  <span>{selectedPackageForDetail.route}</span>
                </p>
              </div>
            </div>

            {/* Navigation Tabs in Modal */}
            <div className="px-6 border-b border-slate-200 bg-slate-50 flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
              <button
                onClick={() => setActiveItineraryTab('itinerary')}
                className={`py-3.5 cursor-pointer border-b-2 transition-colors ${
                  activeItineraryTab === 'itinerary'
                    ? 'border-[#0F2C59] text-[#0F2C59]'
                    : 'border-transparent hover:text-slate-900'
                }`}
              >
                Day-by-Day Itinerary ({selectedPackageForDetail.itinerary.length} Days)
              </button>
              <button
                onClick={() => setActiveItineraryTab('inclusions')}
                className={`py-3.5 cursor-pointer border-b-2 transition-colors ${
                  activeItineraryTab === 'inclusions'
                    ? 'border-[#0F2C59] text-[#0F2C59]'
                    : 'border-transparent hover:text-slate-900'
                }`}
              >
                Inclusions & Exclusions
              </button>
              <button
                onClick={() => setActiveItineraryTab('dates')}
                className={`py-3.5 cursor-pointer border-b-2 transition-colors ${
                  activeItineraryTab === 'dates'
                    ? 'border-[#0F2C59] text-[#0F2C59]'
                    : 'border-transparent hover:text-slate-900'
                }`}
              >
                Departure Dates & Cities
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* TAB 1: ITINERARY */}
              {activeItineraryTab === 'itinerary' && (
                <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      <strong>Veena World Food Promise:</strong> Freshly prepared Indian breakfast, lunch, and dinner on every day of tour with Jain and pure vegetarian choices overseen by our dedicated Tour Manager.
                    </span>
                  </div>

                  <div className="space-y-4">
                    {selectedPackageForDetail.itinerary.map(item => (
                      <div key={item.day} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="w-12 h-12 rounded-xl bg-[#0F2C59] text-white flex flex-col items-center justify-center shrink-0 font-black">
                          <span className="text-[10px] uppercase font-normal">Day</span>
                          <span className="text-base leading-none">{item.day}</span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-[#0F2C59]">{item.title}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                          <div className="pt-1 flex items-center gap-1.5 text-[11px] text-amber-700 font-semibold">
                            <span>Meals:</span>
                            <span className="text-slate-700 font-normal">{item.meals}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: INCLUSIONS & EXCLUSIONS */}
              {activeItineraryTab === 'inclusions' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
                    <h4 className="font-black text-sm text-emerald-900 uppercase flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>What's Included in Package</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {selectedPackageForDetail.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-3">
                    <h4 className="font-black text-sm text-rose-900 uppercase flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-600" />
                      <span>What's Not Included</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {selectedPackageForDetail.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-500 font-bold shrink-0">✕</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 3: DATES & CITIES */}
              {activeItineraryTab === 'dates' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                      Guaranteed Departure Dates
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {selectedPackageForDetail.departureDates.map(date => (
                        <div key={date} className="p-2.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#0F2C59] flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{date}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                      Boarding / Departure Hubs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPackageForDetail.departureCities.map(city => (
                        <span key={city} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800">
                          📍 {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom CTA Footer */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 block">Total Package Cost per person</span>
                <span className="text-2xl font-black text-[#0F2C59]">
                  ₹{selectedPackageForDetail.priceInr.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-400 block">All taxes & meals included</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const pkg = selectedPackageForDetail;
                    setSelectedPackageForDetail(null);
                    handleOpenBooking(pkg);
                  }}
                  className="px-6 py-3 rounded-xl bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Proceed to Book
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Interactive Booking & Lead Capture Modal */}
      {bookingModalOpen && bookingPackage && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative my-auto">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Booking Request Received!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{bookingName}</strong>. Your reservation enquiry for <strong>{bookingPackage.title}</strong> has been assigned to our travel desk.
                </p>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                  A representative is also connecting with you on WhatsApp for seat and cabin allocation.
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D32F2F] font-bold">
                    Official Veena World Booking Desk
                  </span>
                  <h3 className="text-xl font-black text-[#0F2C59]">
                    Book: {bookingPackage.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tour Code: {bookingPackage.tourCode} · ₹{bookingPackage.priceInr.toLocaleString('en-IN')} / person
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kulkarni"
                      value={bookingName}
                      onChange={e => setBookingName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 XXXXX"
                        value={bookingPhone}
                        onChange={e => setBookingPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="guest@gmail.com"
                        value={bookingEmail}
                        onChange={e => setBookingEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Departure Date *
                      </label>
                      <select
                        value={bookingDate}
                        onChange={e => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                      >
                        {bookingPackage.departureDates.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Boarding Hub *
                      </label>
                      <select
                        value={bookingCity}
                        onChange={e => setBookingCity(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                      >
                        {bookingPackage.departureCities.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Adults (12+ yrs)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={adultsCount}
                        onChange={e => setAdultsCount(parseInt(e.target.value) || 1)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Children (under 12)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={childrenCount}
                        onChange={e => setChildrenCount(parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Meal Preference (Indian Kitchen on Tour)
                    </label>
                    <select
                      value={mealPreference}
                      onChange={e => setMealPreference(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                    >
                      <option value="Pure Vegetarian (Standard)">Pure Vegetarian (Standard)</option>
                      <option value="Jain Meal (No Onion, No Garlic, No Root Veg)">Jain Meal (Strict No Onion / Garlic)</option>
                      <option value="Vegetarian + Non-Veg where served">Vegetarian + Non-Veg (Where available)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Special Remarks / Senior / Wheelchair Request
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Need ground floor room / traveling for 25th anniversary"
                      value={specialRemarks}
                      onChange={e => setSpecialRemarks(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex justify-between items-center">
                  <span className="text-slate-600">Estimated Total Cost:</span>
                  <span className="text-base font-black text-[#0F2C59]">
                    ₹{(bookingPackage.priceInr * adultsCount + (bookingPackage.priceInr * 0.8) * childrenCount).toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] font-black rounded-xl text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Confirm & Send to Travel Desk
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 3: Customized Holidays Planner Modal */}
      {customPlannerOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative my-auto">
            <button
              onClick={() => setCustomPlannerOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {customSuccess ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-black text-slate-900">Customized Request Received!</h3>
                <p className="text-xs text-slate-600">
                  Our Senior Holiday Specialist will design a tailor-made day-wise plan for {customDest} and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCustomPlannerSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FDB813] font-black bg-[#0F2C59] px-2 py-0.5 rounded">
                    Veena World Customized Holidays
                  </span>
                  <h3 className="text-xl font-black text-[#0F2C59] mt-1.5">
                    Plan Your Tailor-Made Vacation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Travel on your own dates with private car, personalized sightseeing, and custom hotel choices.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Dream Destination *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Switzerland & Paris, Iceland Northern Lights, Bali, Kashmir"
                      value={customDest}
                      onChange={e => setCustomDest(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Trip Duration
                      </label>
                      <select
                        value={customDuration}
                        onChange={e => setCustomDuration(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                      >
                        <option value="4 - 6 Days">4 - 6 Days</option>
                        <option value="7 - 9 Days">7 - 9 Days</option>
                        <option value="10 - 14 Days">10 - 14 Days</option>
                        <option value="15+ Days">15+ Days</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Hotel Category
                      </label>
                      <select
                        value={customHotelStandard}
                        onChange={e => setCustomHotelStandard(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                      >
                        <option value="3-Star Comfort">3-Star Comfort</option>
                        <option value="4-Star Premium">4-Star Premium</option>
                        <option value="5-Star Luxury">5-Star Luxury</option>
                        <option value="Heritage Palaces / Boutique">Heritage Palaces / Boutique</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={customName}
                        onChange={e => setCustomName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 XXXXX"
                        value={customPhone}
                        onChange={e => setCustomPhone(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0F2C59] hover:bg-[#0A1D37] text-white font-black rounded-xl text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Request Customized Itinerary & Quote
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 4: Instant Callback Request */}
      {callbackModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl relative">
            <button
              onClick={() => setCallbackModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {callbackSuccess ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base text-slate-900">Callback Scheduled</h4>
                <p className="text-xs text-slate-500">
                  Our holiday executive will call you within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-3.5">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-[#0F2C59] flex items-center justify-center mx-auto mb-2">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-lg text-[#0F2C59]">Request Free Callback</h4>
                  <p className="text-xs text-slate-500">Speak directly with a holiday consultant</p>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={callbackName}
                    onChange={e => setCallbackName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 XXXXX"
                    value={callbackPhone}
                    onChange={e => setCallbackPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] font-black rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  Call Me Back
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
