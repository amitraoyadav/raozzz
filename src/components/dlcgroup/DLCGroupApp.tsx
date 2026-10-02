import React, { useState, useMemo, useEffect } from 'react';
import {
  DLC_CONTACT,
  DLC_PROPERTIES,
  DLC_KEY_STATS,
  DLC_ADVANTAGES,
  DLC_SERVICES,
  DLC_TESTIMONIALS,
  DLC_LOCALITIES,
  DLC_FAQS,
  DLC_BLOGS,
  DLCProperty,
  DLCBlog
} from '../../data/dlcGroupData';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Shield,
  FileText,
  Search,
  ChevronRight,
  ChevronLeft,
  Star,
  ExternalLink,
  Download,
  Building,
  Home,
  Trees,
  Compass,
  ArrowRight,
  X,
  Share2,
  Calculator,
  UserCheck,
  Award,
  Layers,
  Sparkles,
  Percent,
  Check,
  Clock,
  Menu
} from 'lucide-react';

export const DLCGroupApp: React.FC = () => {
  // Navigation / active section state
  const [activeTab, setActiveTab] = useState<'all' | 'Residential' | 'Commercial' | 'Farm House' | 'Plots' | 'Luxury'>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero slider state
  const heroSlides = [
    {
      image: '/assets/dlcgroup/slide-1.webp',
      title: 'Real Estate Agents in Delhi',
      subtitle: 'Premier Property Dealers & Advisory in Delhi NCR',
      highlight: 'Residential · Commercial · Luxury · Farmland'
    },
    {
      image: '/assets/dlcgroup/slide-2.webp',
      title: 'Verified Luxury High-Rise Homes',
      subtitle: 'Centrally Located in South & West Delhi and Gurugram',
      highlight: '100% Legal Title Search & DTCP Approvals'
    },
    {
      image: '/assets/dlcgroup/slide-3.webp',
      title: 'Commercial Retail & Farmland Investments',
      subtitle: 'High ROI Assets on Dwarka Expressway & Jewar Corridor',
      highlight: 'RERA Registered Firm: DLRERA2025A0128'
    },
    {
      image: '/assets/dlcgroup/hero-banner.webp',
      title: 'Delivering Real Estate Excellence',
      subtitle: 'Over ₹ 5,000 Crores in Successful Property Deals',
      highlight: 'Tailored for HNIs, Corporates & Global NRIs'
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Selected property modal
  const [selectedProperty, setSelectedProperty] = useState<DLCProperty | null>(null);

  // Selected blog modal
  const [selectedBlog, setSelectedBlog] = useState<DLCBlog | null>(null);

  // Enquiry / Appointment Modal state
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryPropertyTitle, setEnquiryPropertyTitle] = useState('General Consultation');
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    propertyInterest: 'Residential Flats in Delhi NCR',
    budget: '₹ 1 Cr - ₹ 3 Cr',
    date: '',
    message: ''
  });

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return DLC_PROPERTIES.filter((prop) => {
      const matchCategory = activeTab === 'all' || prop.category === activeTab;
      const matchCity = selectedCity === 'all' || prop.city.toLowerCase() === selectedCity.toLowerCase();
      const matchSearch =
        !searchQuery ||
        prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.locality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.developer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchCity && matchSearch;
    });
  }, [activeTab, selectedCity, searchQuery]);

  // Stamp Duty & Loan Calculator State
  const [propertyPrice, setPropertyPrice] = useState<number>(15000000); // 1.5 Cr default
  const [buyerGender, setBuyerGender] = useState<'male' | 'female' | 'joint'>('female');
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);

  // Calculator computations
  const stampDutyRate = buyerGender === 'female' ? 0.03 : buyerGender === 'male' ? 0.05 : 0.04;
  const stampDutyAmount = propertyPrice * stampDutyRate;
  const registrationFee = propertyPrice * 0.01;
  const totalGovtCharges = stampDutyAmount + registrationFee;

  const loanAmount = propertyPrice * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = loanTenureYears * 12;
  const monthlyEmi = useMemo(() => {
    if (monthlyRate === 0) return loanAmount / totalMonths;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi);
  }, [loanAmount, monthlyRate, totalMonths]);

  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  // Open Enquiry with specific property
  const handleOpenEnquiry = (propertyTitle: string = 'General Consultation') => {
    setEnquiryPropertyTitle(propertyTitle);
    setEnquiryForm(prev => ({ ...prev, propertyInterest: propertyTitle }));
    setEnquirySubmitted(false);
    setEnquiryModalOpen(true);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitted(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#c5a25d] selection:text-white">
      {/* Site Switcher Header Bar for Site #51 */}
      <ReferenceSiteSwitcher currentSiteId="dlc-group" />

      {/* Top Bar with RERA and Contact Details */}
      <div className="bg-[#07111e] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-semibold text-[#c5a25d] bg-[#c5a25d]/10 px-2.5 py-0.5 rounded border border-[#c5a25d]/20">
              <Award className="w-3.5 h-3.5" />
              RERA Reg: {DLC_CONTACT.reraNumber}
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <a
              href={`tel:${DLC_CONTACT.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#c5a25d] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a25d]" />
              {DLC_CONTACT.phone}
            </a>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <a
              href={`mailto:${DLC_CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-[#c5a25d] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#c5a25d]" />
              {DLC_CONTACT.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden md:inline">
              Advisory Office: Horizon Center, Gurugram & Barakhamba Rd, Delhi
            </span>
            <div className="flex items-center gap-2">
              <a
                href={DLC_CONTACT.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-slate-800 hover:bg-[#c5a25d] hover:text-slate-900 transition flex items-center justify-center text-xs"
                title="Facebook"
              >
                f
              </a>
              <a
                href={DLC_CONTACT.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-slate-800 hover:bg-[#c5a25d] hover:text-slate-900 transition flex items-center justify-center text-xs"
                title="Instagram"
              >
                in
              </a>
              <a
                href={DLC_CONTACT.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-slate-800 hover:bg-[#c5a25d] hover:text-slate-900 transition flex items-center justify-center text-xs"
                title="LinkedIn"
              >
                li
              </a>
              <a
                href={DLC_CONTACT.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-slate-800 hover:bg-[#c5a25d] hover:text-slate-900 transition flex items-center justify-center text-xs"
                title="YouTube"
              >
                yt
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 text-left group"
            >
              <img
                src="/assets/dlcgroup/logo.png"
                alt="DLC Group Logo"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <span className="block text-xl font-bold tracking-tight text-[#0a192f] leading-tight">
                  DLC <span className="text-[#c5a25d]">GROUP</span>
                </span>
                <span className="block text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                  Real Estate Advisory Delhi NCR
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#c5a25d] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#c5a25d] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-[#c5a25d] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => {
                setActiveTab('all');
                scrollToSection('properties');
              }}
              className="hover:text-[#c5a25d] transition-colors"
            >
              All Properties
            </button>
            <button
              onClick={() => {
                setActiveTab('Residential');
                scrollToSection('properties');
              }}
              className="hover:text-[#c5a25d] transition-colors"
            >
              Residential
            </button>
            <button
              onClick={() => {
                setActiveTab('Commercial');
                scrollToSection('properties');
              }}
              className="hover:text-[#c5a25d] transition-colors"
            >
              Commercial
            </button>
            <button
              onClick={() => {
                setActiveTab('Farm House');
                scrollToSection('properties');
              }}
              className="hover:text-[#c5a25d] transition-colors"
            >
              Farmhouses
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="hover:text-[#c5a25d] transition-colors"
            >
              Calculator
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-[#c5a25d] transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#c5a25d] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${DLC_CONTACT.phoneRaw}?text=Hi%20DLC%20Group%2C%20I%20am%20interested%20in%20properties%20in%20Delhi%20NCR.`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp
            </a>

            <button
              onClick={() => handleOpenEnquiry('Header - Enquire Now')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-gradient-to-r from-[#0a192f] to-[#162e52] text-white hover:from-[#c5a25d] hover:to-[#b08b45] transition-all shadow-md shadow-[#0a192f]/10"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              About DLC Group
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              Advisory Services
            </button>
            <button
              onClick={() => {
                setActiveTab('all');
                scrollToSection('properties');
              }}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              All Projects & Listings
            </button>
            <button
              onClick={() => {
                setActiveTab('Residential');
                scrollToSection('properties');
              }}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              Residential Apartments & Floors
            </button>
            <button
              onClick={() => {
                setActiveTab('Commercial');
                scrollToSection('properties');
              }}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              Commercial Retail & SCO
            </button>
            <button
              onClick={() => {
                setActiveTab('Farm House');
                scrollToSection('properties');
              }}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              Farmhouses & Farmlands
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              Stamp Duty & EMI Calculator
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              Client Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              Delhi Real Estate FAQs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium hover:bg-slate-50"
            >
              Contact Offices
            </button>
          </div>
        )}
      </header>

      {/* Hero Carousel Section */}
      <section id="hero" className="relative min-h-[580px] lg:min-h-[680px] bg-[#0a192f] text-white overflow-hidden flex items-center">
        {/* Background Slide Image with Transitions */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-[0.45] scale-105 transition-transform duration-10000"
              />
            </div>
          ))}
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a25d]/20 border border-[#c5a25d]/40 text-[#f5d78e] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a25d]" />
              <span>Real Estate Agents in Delhi · Property Dealers in Delhi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Best Real Estate Agents in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5d78e] via-[#c5a25d] to-[#ecd399]">
                Delhi NCR
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 mb-8 font-light leading-relaxed max-w-2xl">
              We have the answer for you. Our team of 100+ real estate advisors has helped thousands
              find their dream residential flat, luxury high-rise, commercial space, or gated farmland
              with 100% legal verification and zero hidden risks.
            </p>

            {/* Quick Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollToSection('properties')}
                className="px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#c5a25d] to-[#e4bd68] text-[#0a192f] hover:from-[#d8b560] hover:to-[#f0c870] transition shadow-lg shadow-[#c5a25d]/25 flex items-center gap-2"
              >
                <span>Explore Verified Properties</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleOpenEnquiry('Hero - Free Consultation')}
                className="px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition backdrop-blur-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#c5a25d]" />
                <span>Book Site Visit</span>
              </button>

              <a
                href={`tel:${DLC_CONTACT.phoneRaw}`}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 text-slate-200 hover:text-white border border-slate-700/80 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#c5a25d]" />
                <span>+91 81004 81006</span>
              </a>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide ? 'w-8 bg-[#c5a25d]' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Slide navigation buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white transition backdrop-blur-sm hidden md:flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white transition backdrop-blur-sm hidden md:flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* Floating Property Search & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 sm:p-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-slate-100 scrollbar-none text-xs font-semibold uppercase tracking-wider">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'Residential', label: 'Residential Flats' },
              { id: 'Commercial', label: 'Commercial & Retail' },
              { id: 'Farm House', label: 'Farmhouses & Farmlands' },
              { id: 'Plots', label: 'Authority Plots' },
              { id: 'Luxury', label: 'Ultra Luxury' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  scrollToSection('properties');
                }}
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#0a192f] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Inputs Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project, sector or builder..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d] focus:ring-1 focus:ring-[#c5a25d]"
              />
            </div>

            {/* City Dropdown */}
            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d] text-slate-700 bg-white"
              >
                <option value="all">All Cities & Regions</option>
                <option value="Delhi">Delhi (South, West & Dwarka)</option>
                <option value="Gurugram">Gurugram & Dwarka Expressway</option>
                <option value="Jewar">Jewar & Yamuna Expressway</option>
                <option value="Sohna">Sohna & Surajkund Valley</option>
              </select>
            </div>

            {/* Price Sorting / Range Info */}
            <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-800 block">Verified Inventory</span>
                <span>{filteredProperties.length} active projects in Delhi NCR</span>
              </div>
              <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
            </div>

            {/* Search CTA */}
            <div>
              <button
                onClick={() => scrollToSection('properties')}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#0a192f] to-[#1a365d] text-white hover:from-[#c5a25d] hover:to-[#b58f4a] transition flex items-center justify-center gap-2 shadow-md"
              >
                <span>Filter Projects</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
              Delhi Real Estate Benchmarks
            </span>
            <h2 className="text-3xl font-extrabold text-[#0a192f] tracking-tight">
              Key Stats & Market Dominance
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Official figures demonstrating the scale, compliance, and growth of our trusted real estate network.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {DLC_KEY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 text-center hover:shadow-lg hover:border-[#c5a25d]/50 transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] group-hover:text-[#c5a25d] transition-colors mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mb-2 leading-tight">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Market Overview Section ("Best Real Estate Agents in Delhi") */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
                Why Delhi Trusts DLC Group
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight mb-6">
                Best Real Estate Agents in Delhi
              </h2>

              <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed space-y-4">
                <p>
                  We have the answer for you. Our team of experts has been helping clients find the
                  perfect property, be it a residential flat, luxury home, or a commercial space.
                  We delve deep into local market knowledge to provide our customers with expert
                  guidance to make informed decisions.
                </p>
                <p>
                  As a trusted real estate agent in Delhi, we offer you a wide range of possibilities—from
                  affordable homes to high-end investment options tailored to fit your budget and
                  exact requirement. Let us serve as your trustworthy guides while our real estate
                  advisors negotiate the Delhi real estate market.
                </p>
                <p>
                  Within Delhi’s vibrant real estate industry, real estate agents in Delhi are essential
                  players. They can offer expert guidance in navigating the rapidly evolving property
                  landscape whether for residential or commercial investments. They are aware of the trends
                  in the local market, prevailing legal regulations, and developments taking place, thus
                  providing clients with a customized solution.
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a25d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0a192f]">100% Legal Scrutiny</h4>
                    <p className="text-xs text-slate-500">Every title chain checked up to 30 years.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a25d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0a192f]">Zero Hidden Markups</h4>
                    <p className="text-xs text-slate-500">Transparent 1% to 2% standard advisory fee.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a25d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0a192f]">Off-Market Inventory</h4>
                    <p className="text-xs text-slate-500">Exclusive allotments with tier-1 developers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a25d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0a192f]">Sub-Registrar Escort</h4>
                    <p className="text-xs text-slate-500">Full physical presence during deed execution.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenEnquiry('About Us Consultation')}
                  className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#0a192f] text-white hover:bg-[#c5a25d] hover:text-[#0a192f] transition shadow-md"
                >
                  Schedule Expert Consultation
                </button>
                <a
                  href={`tel:${DLC_CONTACT.phoneRaw}`}
                  className="px-6 py-3 rounded-xl font-semibold text-xs border border-slate-300 text-slate-700 hover:border-[#0a192f] transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#c5a25d]" />
                  Call Advisor: {DLC_CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#c5a25d]/20 to-[#0a192f]/10 rounded-3xl transform -rotate-1" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <img
                    src="/assets/dlcgroup/hero-banner.webp"
                    alt="DLC Group Real Estate Agents in Delhi"
                    className="w-full h-[460px] object-cover"
                  />
                  {/* Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-800 block">
                        Rated 4.9/5 by 1,200+ Property Buyers
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Delhi, Gurugram, Dwarka Expressway & Noida
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#0a192f] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      RERA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center py-6 bg-slate-50">
        <img
          src="/assets/dlcgroup/divider.png"
          alt="Section Divider"
          className="h-6 w-auto opacity-70"
        />
      </div>

      {/* Advantages and Traits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
              Our Professional Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
              Advantages & Traits of DLC Group Advisors
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Property dealers in Delhi are masters at negotiations since they help the buyers deal at
              their best possible interest and ensure all deals are genuine and within the realms of law.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DLC_ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#c5a25d]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0a192f]/5 text-[#0a192f] group-hover:bg-[#c5a25d] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a192f] mb-3 group-hover:text-[#c5a25d] transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0a192f] group-hover:text-[#c5a25d]">
                  <span>DLC Verified Standard</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Key Statistics Connectivity Callout Box */}
          <div className="mt-16 bg-gradient-to-r from-[#0a192f] to-[#173259] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
                  Connectivity & Digital Adoption
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                  Over 40% Digital Real Estate Transactions & Rising
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Real estate agents in Delhi are over 40 percent who now use digital tools and platforms
                  to list properties, communicate with clients, or close deals. The profession-based market
                  attracts nearly 70% of the total clients served through agents’ desks in Delhi, which
                  includes IT professionals, corporate employees, and expatriates who are seeking investment
                  and residential properties for sale in Delhi.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <button
                  onClick={() => handleOpenEnquiry('Digital Consultation')}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#c5a25d] to-[#e4bd68] text-[#0a192f] hover:from-[#d8b560] hover:to-[#f0c870] transition shadow-lg text-center"
                >
                  Schedule Virtual Walkthrough
                </button>
                <a
                  href={`https://wa.me/${DLC_CONTACT.phoneRaw}?text=Hi%2C%20I%20want%20to%20receive%20digital%20brochures%20of%20verified%20Delhi%20properties.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs border border-white/20 hover:bg-white/10 text-white transition text-center flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#c5a25d]" />
                  Download Verified Catalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section ("All Projects") */}
      <section id="properties" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
                Curated High-Value Assets
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
                Homes & Relations, We Build Are Forever
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Explore our full portfolio of residential apartments, luxury floors, commercial retail
                centers, organic farmlands, and authority plots across Delhi, Gurugram, and Jewar.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'Residential', label: 'Residential' },
                { id: 'Commercial', label: 'Commercial' },
                { id: 'Farm House', label: 'Farmhouses' },
                { id: 'Plots', label: 'Authority Plots' },
                { id: 'Luxury', label: 'Luxury High-Rise' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#0a192f] text-white shadow-md'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image Container with Badges */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={prop.featuredImage}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0a192f]/90 text-white backdrop-blur-sm border border-white/20">
                    {prop.category}
                  </span>

                  {/* Status Badge */}
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm ${
                    prop.status === 'Ready to Move'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-600 text-white'
                  }`}>
                    {prop.status}
                  </span>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-300 block uppercase">
                        Starting Price
                      </span>
                      <span className="text-2xl font-black text-[#f5d78e] drop-shadow">
                        {prop.price}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-300 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      {prop.city}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-[#c5a25d] uppercase">{prop.developer}</span>
                      <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-mono">
                        {prop.reraId.split('-')[0]}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0a192f] group-hover:text-[#c5a25d] transition-colors mb-2">
                      {prop.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#c5a25d] shrink-0" />
                      <span className="line-clamp-1">{prop.location}</span>
                    </div>

                    {/* Specs / Area Badges */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold uppercase">Area</span>
                        <span className="font-bold text-slate-800">{prop.area}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold uppercase">Type / Size</span>
                        <span className="font-bold text-slate-800">{prop.size}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProperty(prop)}
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition text-center"
                    >
                      View Specs
                    </button>
                    <button
                      onClick={() => handleOpenEnquiry(prop.title)}
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0a192f] hover:bg-[#c5a25d] text-white hover:text-[#0a192f] transition text-center shadow-sm"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <Building className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No properties match your current filter</h3>
              <p className="text-xs text-slate-500 mt-1">Try resetting the city or category filter to view all listings.</p>
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSelectedCity('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2 rounded-xl text-xs font-bold bg-[#0a192f] text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Real Estate Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
              Comprehensive Real Estate Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
              End-to-End Real Estate Advisory
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Serving property buyers, sellers, institutional investors, and global NRIs with dedicated desks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DLC_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#c5a25d]/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0a192f] text-[#c5a25d] flex items-center justify-center">
                      {srv.icon === 'home' && <Home className="w-6 h-6" />}
                      {srv.icon === 'building' && <Building className="w-6 h-6" />}
                      {srv.icon === 'trees' && <Trees className="w-6 h-6" />}
                      {srv.icon === 'layout-grid' && <Layers className="w-6 h-6" />}
                      {srv.icon === 'layers' && <Compass className="w-6 h-6" />}
                      {srv.icon === 'scale' && <Shield className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c5a25d] bg-[#c5a25d]/10 px-2.5 py-1 rounded-full border border-[#c5a25d]/20">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#c5a25d] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenEnquiry(`Service: ${srv.title}`)}
                    className="text-xs font-bold text-[#0a192f] group-hover:text-[#c5a25d] flex items-center gap-1.5"
                  >
                    <span>Request Service Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delhi Property Stamp Duty & Home Loan EMI Calculator */}
      <section id="calculator" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
              Financial Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Delhi Stamp Duty & EMI Calculator
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Calculate government stamp duty, registration charges, and monthly home loan EMIs before making your real estate investment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls Box */}
            <div className="lg:col-span-7 bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
              {/* Property Value Slider */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold text-slate-300">Property Consideration Value:</span>
                  <span className="text-lg font-black text-[#c5a25d]">
                    ₹ {(propertyPrice / 100000).toLocaleString('en-IN')} Lakhs
                  </span>
                </div>
                <input
                  type="range"
                  min="2500000"
                  max="150000000"
                  step="500000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full accent-[#c5a25d] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹ 25 Lakhs</span>
                  <span>₹ 1.5 Cr</span>
                  <span>₹ 15 Cr+</span>
                </div>
              </div>

              {/* Buyer Category for Delhi Stamp Duty */}
              <div>
                <span className="block text-sm font-semibold text-slate-300 mb-2">
                  Delhi Buyer Registration Category:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setBuyerGender('female')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition border ${
                      buyerGender === 'female'
                        ? 'bg-[#c5a25d] text-[#0a192f] border-[#c5a25d]'
                        : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    Female Buyer (3%)
                  </button>
                  <button
                    onClick={() => setBuyerGender('male')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition border ${
                      buyerGender === 'male'
                        ? 'bg-[#c5a25d] text-[#0a192f] border-[#c5a25d]'
                        : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    Male Buyer (5%)
                  </button>
                  <button
                    onClick={() => setBuyerGender('joint')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition border ${
                      buyerGender === 'joint'
                        ? 'bg-[#c5a25d] text-[#0a192f] border-[#c5a25d]'
                        : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    Joint Ownership (4%)
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Delhi offers a 2% stamp duty rebate for female property buyers. Registration fee is 1% across all categories.
                </p>
              </div>

              {/* Down payment and Loan parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Down Payment ({downPaymentPercent}%):</span>
                    <span className="font-bold text-white">
                      ₹ {((propertyPrice * downPaymentPercent) / 10000000).toFixed(2)} Cr
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-[#c5a25d]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Loan Tenure ({loanTenureYears} Years):</span>
                    <span className="font-bold text-white">{loanTenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={loanTenureYears}
                    onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                    className="w-full accent-[#c5a25d]"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Home Loan Interest Rate ({interestRate}%):</span>
                  <span className="font-bold text-[#c5a25d]">{interestRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="7.5"
                  max="12.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#c5a25d]"
                />
              </div>
            </div>

            {/* Results Display Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#122543] to-[#0a192f] rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c5a25d] mb-4">
                  <Calculator className="w-4 h-4" />
                  <span>Statutory & EMI Breakdown</span>
                </div>

                {/* Monthly EMI Large Badge */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-6 text-center">
                  <span className="text-xs uppercase tracking-wider text-slate-300 block mb-1">
                    Estimated Monthly EMI
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#f5d78e]">
                    ₹ {monthlyEmi.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-slate-300"> / month</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Loan Amount: ₹ {(loanAmount / 10000000).toFixed(2)} Cr @ {interestRate}% for {loanTenureYears} yrs
                  </span>
                </div>

                {/* Table of Govt and Loan Costs */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-300">Delhi Stamp Duty ({(stampDutyRate * 100)}%):</span>
                    <span className="font-bold text-white">
                      ₹ {stampDutyAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-300">Sub-Registrar Fee (1%):</span>
                    <span className="font-bold text-white">
                      ₹ {registrationFee.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/60 text-[#c5a25d] font-bold">
                    <span>Total Delhi Govt Charges:</span>
                    <span>₹ {totalGovtCharges.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-300">Total Interest Payable:</span>
                    <span className="font-bold text-white">
                      ₹ {Math.round(totalInterest).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-300">Total Loan Outflow (P + I):</span>
                    <span className="font-bold text-white">
                      ₹ {Math.round(totalPayment).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-700">
                <button
                  onClick={() => handleOpenEnquiry(`Loan Eligibility Check for ₹ ${(propertyPrice / 100000).toFixed(0)} Lakhs`)}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#c5a25d] to-[#e4bd68] text-[#0a192f] hover:from-[#d8b560] hover:to-[#f0c870] transition shadow-lg text-center"
                >
                  Apply for Pre-Approved Home Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment & Site Visit Desk ("Opportunity Knocking") */}
      <section id="appointment" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Form Column */}
              <div className="lg:col-span-7 p-8 sm:p-12">
                <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
                  "Opportunity Knocking"
                </span>
                <h2 className="text-3xl font-extrabold text-[#0a192f] tracking-tight mb-4">
                  Make An Appointment
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  They are working with trusted real estate professionals like the DLC Group—its property
                  consultants in Delhi and property dealers in Delhi who offer many benefits to property
                  buyers. Seeking assistance from the best Property Agents in Delhi makes your real estate
                  experience smooth, secure, and worthwhile.
                </p>

                {enquirySubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-emerald-900">Appointment Request Received</h3>
                    <p className="text-xs text-emerald-700 mt-2">
                      Our senior Delhi property advisor will contact you within 30 minutes to confirm your
                      scheduled walkthrough and share verified developer brochures.
                    </p>
                    <button
                      onClick={() => setEnquirySubmitted(false)}
                      className="mt-4 px-5 py-2 rounded-xl text-xs font-bold bg-[#0a192f] text-white"
                    >
                      Book Another Visit
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={enquiryForm.name}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                          placeholder="e.g. Arvind Rao"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={enquiryForm.phone}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          value={enquiryForm.email}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Target Budget
                        </label>
                        <select
                          value={enquiryForm.budget}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, budget: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d] bg-white text-slate-700"
                        >
                          <option>Below ₹ 50 Lakhs (Affordable)</option>
                          <option>₹ 50 Lakhs - ₹ 1.5 Cr</option>
                          <option>₹ 1.5 Cr - ₹ 3 Cr</option>
                          <option>₹ 3 Cr - ₹ 7 Cr</option>
                          <option>₹ 7 Cr - ₹ 15 Cr+ (Ultra Luxury)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Project or Requirement
                      </label>
                      <input
                        type="text"
                        value={enquiryForm.propertyInterest}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, propertyInterest: e.target.value })}
                        placeholder="e.g. ROF Pravasa 88A, Tarc Kailasa, Omaxe Dwarka"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Message / Preferred Visit Date
                      </label>
                      <textarea
                        rows={3}
                        value={enquiryForm.message}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                        placeholder="Tell us what you are looking for, preferred viewing timing..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#0a192f] to-[#162e52] text-white hover:from-[#c5a25d] hover:to-[#b08b45] transition shadow-md"
                      >
                        Confirm Appointment & Download Brochure &rarr;
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Office & Contact Column */}
              <div className="lg:col-span-5 bg-[#0a192f] text-white p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
                    DLC Group Headquarters
                  </span>
                  <h3 className="text-2xl font-bold mb-6">Contact Our Advisors</h3>

                  <div className="space-y-6 text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#c5a25d] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white mb-0.5">Advisory Offices</strong>
                        <p className="text-xs leading-relaxed text-slate-300">
                          {DLC_CONTACT.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#c5a25d] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white mb-0.5">Direct Helplines</strong>
                        <a
                          href={`tel:${DLC_CONTACT.phoneRaw}`}
                          className="text-xs text-[#c5a25d] hover:underline block font-semibold"
                        >
                          {DLC_CONTACT.phone}
                        </a>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          Available Monday through Sunday: 9:30 AM to 7:30 PM
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#c5a25d] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white mb-0.5">Official Inquiries</strong>
                        <a
                          href={`mailto:${DLC_CONTACT.email}`}
                          className="text-xs text-slate-300 hover:text-white block"
                        >
                          {DLC_CONTACT.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#c5a25d] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white mb-0.5">RERA Certified Agency</strong>
                        <span className="text-xs text-slate-300 block font-mono">
                          Registration: {DLC_CONTACT.reraNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block mb-3">
                    Fastest Response via Instant WhatsApp Chat
                  </span>
                  <a
                    href={`https://wa.me/${DLC_CONTACT.phoneRaw}?text=Hi%20DLC%20Group%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delhi NCR Localities & Growth Corridors */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
              Delhi NCR Micro-Market Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
              Prime Property Localities in Delhi
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Comprehensive price brackets, rental yields, and annual appreciation metrics across key investment corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DLC_LOCALITIES.map((loc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:shadow-lg hover:border-[#c5a25d]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-[#c5a25d] uppercase">{loc.zone}</span>
                    <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px]">
                      {loc.annualGrowth}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a192f] mb-3">
                    {loc.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-xl border border-slate-100 mb-3">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase">Avg Rate</span>
                      <span className="font-bold text-slate-800 text-[11px]">{loc.avgPriceSqFt}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase">Rental Yield</span>
                      <span className="font-bold text-emerald-700 text-[11px]">{loc.rentalYield}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {loc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                    Featured Projects
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {loc.topProjects.map((p, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews & Testimonials Carousel */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
              Verified Client Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
              Words Can Only Do So Much. And Ours Always Do.
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Hear directly from homeowners, corporate leaders, and global NRIs who found their ideal properties with DLC Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DLC_TESTIMONIALS.map((rev) => (
              <div
                key={rev.id}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#c5a25d]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0a192f]">{rev.name}</h4>
                    <span className="text-[11px] text-slate-500 block">{rev.role}</span>
                    <span className="text-[10px] text-[#c5a25d] font-semibold block">{rev.propertyName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
              Delhi Real Estate Knowledge Base
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Essential answers on property registration, stamp duty slabs, home loan tax breaks, and real estate market trends in Delhi.
            </p>
          </div>

          <div className="space-y-4">
            {DLC_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-2xl p-5 open:bg-slate-50 open:border-[#c5a25d]/40 transition-all duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-[#0a192f] list-none select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0a192f] text-white text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#c5a25d] group-open:text-white flex items-center justify-center text-xs transition-colors shrink-0 ml-2">
                    +
                  </span>
                </summary>
                <div className="mt-4 pl-9 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Market Insights & Blog Articles */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-2">
                Market Analysis & Research
              </span>
              <h2 className="text-3xl font-extrabold text-[#0a192f] tracking-tight">
                Latest Real Estate Guides
              </h2>
            </div>
            <button
              onClick={() => handleOpenEnquiry('Blog Subscription')}
              className="text-xs font-bold text-[#0a192f] hover:text-[#c5a25d] flex items-center gap-1.5"
            >
              <span>Subscribe to Monthly Market Digest</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DLC_BLOGS.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <span className="text-[#c5a25d]">{blog.readTime}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#0a192f] hover:text-[#c5a25d] transition-colors mb-2 leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="text-xs font-bold text-[#0a192f] hover:text-[#c5a25d] flex items-center gap-1"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] text-slate-400">{blog.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive DLC Group Footer */}
      <footer id="contact" className="bg-[#07111e] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            {/* Column 1: Brand & RERA */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/dlcgroup/logo.png"
                  alt="DLC Group Logo"
                  className="h-12 w-auto object-contain brightness-125"
                />
                <div>
                  <span className="block text-xl font-bold tracking-tight text-white leading-tight">
                    DLC <span className="text-[#c5a25d]">GROUP</span>
                  </span>
                  <span className="block text-[10px] tracking-wider uppercase font-semibold text-slate-400">
                    Real Estate Advisory Company Delhi NCR
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                DLC Group is indisputably a fast-paced Real Estate Investment and Development Company
                that embraces a meritocratic culture and offers exponential growth opportunities. Since its
                inception, more than 100 highly skilled real estate professionals have contributed to handling
                niche portfolios.
              </p>

              <div className="pt-2 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#c5a25d]" />
                  <span className="font-semibold text-white">RERA Number:</span>
                  <span className="font-mono text-[#c5a25d]">{DLC_CONTACT.reraNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#c5a25d]" />
                  <span>EMAIL: Info@dlcgroup.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#c5a25d]" />
                  <span>Call: +91 81004 81006</span>
                </div>
              </div>
            </div>

            {/* Column 2: Residential Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Residential
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('properties'); }} className="hover:text-white transition">Affordable Flats in Gurugram</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('properties'); }} className="hover:text-white transition">Apartments for Sale in Noida</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('properties'); }} className="hover:text-white transition">Builder Floors in Gurugram</button></li>
                <li><button onClick={() => { setActiveTab('Luxury'); scrollToSection('properties'); }} className="hover:text-white transition">Elan the Presidential</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('properties'); }} className="hover:text-white transition">Flats for Sale in Delhi</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('properties'); }} className="hover:text-white transition">Godrej Meridien Sec-106</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('properties'); }} className="hover:text-white transition">ROF Pravasa Sec-88A</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('properties'); }} className="hover:text-white transition">Smartworld One DXP</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('properties'); }} className="hover:text-white transition">Sobha City, Sec-108</button></li>
                <li><button onClick={() => { setActiveTab('Luxury'); scrollToSection('properties'); }} className="hover:text-white transition">Tarc Kailasa, Kirti Nagar</button></li>
              </ul>
            </div>

            {/* Column 3: Commercial & Farmlands */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Commercial & Farm
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => { setActiveTab('Commercial'); scrollToSection('properties'); }} className="hover:text-white transition">Commercial Property in Delhi</button></li>
                <li><button onClick={() => { setActiveTab('Commercial'); scrollToSection('properties'); }} className="hover:text-white transition">Omaxe Dwarka Sec-19B</button></li>
                <li><button onClick={() => { setActiveTab('Commercial'); scrollToSection('properties'); }} className="hover:text-white transition">Shops for Sale in Gurugram</button></li>
                <li><button onClick={() => { setActiveTab('Commercial'); scrollToSection('properties'); }} className="hover:text-white transition">SCO Courtyard 37D</button></li>
                <li><button onClick={() => { setActiveTab('Commercial'); scrollToSection('properties'); }} className="hover:text-white transition">Office Space in Delhi</button></li>
                <li><button onClick={() => { setActiveTab('Farm House'); scrollToSection('properties'); }} className="hover:text-white transition">Farm House for Sale in Delhi</button></li>
                <li><button onClick={() => { setActiveTab('Farm House'); scrollToSection('properties'); }} className="hover:text-white transition">Farm House in Sohna</button></li>
                <li><button onClick={() => { setActiveTab('Farm House'); scrollToSection('properties'); }} className="hover:text-white transition">RPS Sargam Farmland</button></li>
                <li><button onClick={() => { setActiveTab('Farm House'); scrollToSection('properties'); }} className="hover:text-white transition">Da-Foreste Jewar</button></li>
              </ul>
            </div>

            {/* Column 4: Land Investments & Localities */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Land Investments
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition">Delhi Land Pooling Policy</button></li>
                <li><button onClick={() => { setActiveTab('Plots'); scrollToSection('properties'); }} className="hover:text-white transition">Plots for Sale in Jewar</button></li>
                <li><button onClick={() => { setActiveTab('Plots'); scrollToSection('properties'); }} className="hover:text-white transition">Plots on Yamuna Expressway</button></li>
                <li><button onClick={() => { setActiveTab('Plots'); scrollToSection('properties'); }} className="hover:text-white transition">Yamuna Authority Plots</button></li>
                <li><button onClick={() => { setActiveTab('Plots'); scrollToSection('properties'); }} className="hover:text-white transition">Residential Plots in Gurugram</button></li>
                <li><button onClick={() => { setActiveTab('Plots'); scrollToSection('properties'); }} className="hover:text-white transition">SCO Plots in Gurugram</button></li>
                <li><button onClick={() => scrollToSection('localities')} className="hover:text-white transition">Real Estate Agents in Delhi</button></li>
                <li><button onClick={() => scrollToSection('localities')} className="hover:text-white transition">Real Estate Agents in Gurugram</button></li>
                <li><button onClick={() => scrollToSection('localities')} className="hover:text-white transition">Real Estate Agents in Noida</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 DLC Group (Delhi Land & Constructions LLP). All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-400 cursor-pointer">Data Deletion Policy</span>
              <span className="text-[#c5a25d] font-semibold">DLRERA2025A0128</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="relative h-72 sm:h-80 bg-slate-900 shrink-0">
              <img
                src={selectedProperty.featuredImage}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-[#c5a25d] block mb-1">
                    {selectedProperty.category} · {selectedProperty.developer}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">{selectedProperty.title}</h3>
                  <span className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a25d]" />
                    {selectedProperty.location}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-300 block">Starting From</span>
                  <span className="text-2xl font-black text-[#f5d78e]">{selectedProperty.price}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Area</span>
                  <span className="font-bold text-slate-800">{selectedProperty.area}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Configuration</span>
                  <span className="font-bold text-slate-800">{selectedProperty.size}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Status</span>
                  <span className="font-bold text-slate-800">{selectedProperty.status}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">RERA ID</span>
                  <span className="font-bold text-slate-800 font-mono text-[11px]">{selectedProperty.reraId}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-bold text-[#0a192f] uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedProperty.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-sm font-bold text-[#0a192f] uppercase tracking-wider mb-3">
                  Key Highlights & Advantages
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedProperty.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities */}
              <div>
                <h4 className="text-sm font-bold text-[#0a192f] uppercase tracking-wider mb-3">
                  Amenities & Infrastructure
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProperty.amenities.map((a, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <a
                href={`tel:${DLC_CONTACT.phoneRaw}`}
                className="py-3 px-5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs flex items-center gap-2 hover:bg-white transition"
              >
                <Phone className="w-4 h-4 text-[#c5a25d]" />
                <span>Call Advisor</span>
              </a>

              <button
                onClick={() => {
                  setSelectedProperty(null);
                  handleOpenEnquiry(selectedProperty.title);
                }}
                className="py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#0a192f] to-[#162e52] text-white hover:from-[#c5a25d] hover:to-[#b08b45] transition shadow-md flex items-center gap-2"
              >
                <span>Schedule Private Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
            <div className="relative h-64 bg-slate-900 shrink-0">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase">
                <span className="text-[#c5a25d]">{selectedBlog.readTime}</span>
                <span>•</span>
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span>By {selectedBlog.author}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a192f] leading-snug">
                {selectedBlog.title}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedBlog.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#0a192f] text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry / Appointment Modal */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl my-8 relative p-6 sm:p-8">
            <button
              onClick={() => setEnquiryModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#c5a25d] font-bold text-xs uppercase tracking-widest block mb-1">
              DLC Group Site Visit Desk
            </span>
            <h3 className="text-2xl font-extrabold text-[#0a192f] mb-2">
              Book Property Walkthrough
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Regarding: <strong className="text-slate-800">{enquiryPropertyTitle}</strong>
            </p>

            {enquirySubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-base font-bold text-emerald-900">Appointment Confirmed!</h4>
                <p className="text-xs text-emerald-700 mt-2">
                  Our Delhi NCR property advisor will call you shortly to arrange your chauffeur-accompanied site visit.
                </p>
                <button
                  onClick={() => setEnquiryModalOpen(false)}
                  className="mt-4 px-6 py-2 rounded-xl text-xs font-bold bg-[#0a192f] text-white"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    placeholder="Arvind Rao"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time / Date</label>
                  <input
                    type="text"
                    value={enquiryForm.date}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, date: e.target.value })}
                    placeholder="e.g. This Saturday Morning"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c5a25d]"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#0a192f] to-[#162e52] text-white hover:from-[#c5a25d] hover:to-[#b08b45] transition shadow-md"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
