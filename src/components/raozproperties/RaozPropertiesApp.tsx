import React, { useState, useMemo } from 'react';
import {
  RAOZ_CONTACT,
  RAOZ_KEY_PILLARS,
  RAOZ_STATS,
  RAOZ_PROPERTIES,
  RAOZ_PROJECTS,
  RAOZ_TESTIMONIALS,
  RAOZ_FAQS,
  RAOZ_BLOGS,
  RaozProperty,
  RaozBlog,
  RaozProject
} from '../../data/raozPropertiesData';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Shield,
  Search,
  ChevronRight,
  Star,
  Download,
  Building,
  Home,
  Trees,
  Layers,
  Sparkles,
  Percent,
  Check,
  Menu,
  X,
  ArrowRight,
  Clock,
  Car,
  Calculator,
  Compass,
  FileCheck,
  Eye,
  Award,
  Users
} from 'lucide-react';

export const RaozPropertiesApp: React.FC = () => {
  // Navigation & Category filters
  const [activeTab, setActiveTab] = useState<'all' | 'Residential' | 'Commercial' | 'Plots' | 'Farmhouse'>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals
  const [selectedProperty, setSelectedProperty] = useState<RaozProperty | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<RaozBlog | null>(null);
  const [selectedProject, setSelectedProject] = useState<RaozProject | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryPropertyTitle, setEnquiryPropertyTitle] = useState('General Consultation');
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyInterest: 'Residential Plots in Sikri / Faridabad',
    preferredDate: '',
    pickupRequired: 'Yes (Free Car Pickup)',
    message: ''
  });

  // Zero-Interest EMI Calculator State
  const [plotSizeYards, setPlotSizeYards] = useState<number>(100);
  const [ratePerYard, setRatePerYard] = useState<number>(16000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [emiTenureMonths, setEmiTenureMonths] = useState<number>(18);

  const totalPlotCost = plotSizeYards * ratePerYard;
  const downPaymentAmount = totalPlotCost * (downPaymentPercent / 100);
  const loanBalance = totalPlotCost - downPaymentAmount;
  const zeroInterestMonthlyEmi = Math.round(loanBalance / emiTenureMonths);

  // Filtered Properties
  const filteredProperties = useMemo(() => {
    return RAOZ_PROPERTIES.filter((prop) => {
      const matchCat = activeTab === 'all' || prop.category === activeTab;
      const matchCity = selectedCity === 'all' || prop.city.toLowerCase() === selectedCity.toLowerCase();
      const matchSearch =
        !searchQuery ||
        prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.propertyType.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchCity && matchSearch;
    });
  }, [activeTab, selectedCity, searchQuery]);

  const handleOpenEnquiry = (title: string = 'General Consultation') => {
    setEnquiryPropertyTitle(title);
    setEnquiryForm(prev => ({ ...prev, propertyInterest: title }));
    setEnquirySubmitted(false);
    setEnquiryModalOpen(true);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitted(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1e3a8a] selection:text-white">
      {/* Site Switcher Header for Site #52 */}
      <ReferenceSiteSwitcher currentSiteId="raoz-properties" />

      {/* Top Banner Bar */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-2.5 py-0.5 rounded border border-[#f59e0b]/20">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Real Estate Deals
            </span>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <a
              href={`tel:${RAOZ_CONTACT.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#f59e0b] transition font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#f59e0b]" />
              {RAOZ_CONTACT.phone}
            </a>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <a
              href={`mailto:${RAOZ_CONTACT.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#f59e0b] transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#f59e0b]" />
              {RAOZ_CONTACT.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-slate-400">
              Free Site Visits 7 Days a Week with Car Escort
            </span>
            <div className="flex items-center gap-2">
              <a
                href={RAOZ_CONTACT.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-slate-800 hover:bg-[#f59e0b] hover:text-slate-900 transition flex items-center justify-center text-xs"
                title="Instagram"
              >
                in
              </a>
              <a
                href={RAOZ_CONTACT.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-slate-800 hover:bg-[#f59e0b] hover:text-slate-900 transition flex items-center justify-center text-xs"
                title="YouTube"
              >
                yt
              </a>
              <a
                href={RAOZ_CONTACT.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-slate-800 hover:bg-[#f59e0b] hover:text-slate-900 transition flex items-center justify-center text-xs"
                title="Facebook"
              >
                f
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-left group"
          >
            <img
              src="/assets/raozproperties/logo.png"
              alt="RAOZ PROPERTIES Logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <span className="block text-xl font-black tracking-tight text-[#1e3a8a] leading-tight">
                RAOZ <span className="text-[#f59e0b]">PROPERTIES</span>
              </span>
              <span className="block text-[10px] tracking-wider uppercase font-bold text-slate-500">
                Plots / Property in Delhi NCR
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#1e3a8a] transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#1e3a8a] transition"
            >
              About
            </button>
            <button
              onClick={() => {
                setActiveTab('all');
                scrollToSection('listings');
              }}
              className="hover:text-[#1e3a8a] transition"
            >
              All Properties
            </button>
            <button
              onClick={() => {
                setActiveTab('Residential');
                scrollToSection('listings');
              }}
              className="hover:text-[#1e3a8a] transition"
            >
              Flats & Floors
            </button>
            <button
              onClick={() => {
                setActiveTab('Plots');
                scrollToSection('listings');
              }}
              className="hover:text-[#1e3a8a] transition"
            >
              Plots
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-[#1e3a8a] transition"
            >
              Townships
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="hover:text-[#1e3a8a] transition text-[#1e3a8a] font-bold"
            >
              0% EMI Calculator
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-[#1e3a8a] transition"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="hover:text-[#1e3a8a] transition"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#1e3a8a] transition"
            >
              Contact
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${RAOZ_CONTACT.phoneRaw}?text=Hi%20RAOZ%20PROPERTIES%2C%20I%20am%20interested%20in%20verified%20properties%20in%20Delhi%20NCR.`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp
            </a>

            <button
              onClick={() => handleOpenEnquiry('Header - Schedule Free Site Visit')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white hover:from-[#f59e0b] hover:to-[#d97706] transition-all shadow-md shadow-blue-900/15"
            >
              <Car className="w-3.5 h-3.5" />
              <span>Book Site Visit</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50"
            >
              About RAOZ PROPERTIES
            </button>
            <button
              onClick={() => {
                setActiveTab('all');
                scrollToSection('listings');
              }}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50"
            >
              All Properties
            </button>
            <button
              onClick={() => {
                setActiveTab('Residential');
                scrollToSection('listings');
              }}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50"
            >
              Flats & Builder Floors
            </button>
            <button
              onClick={() => {
                setActiveTab('Plots');
                scrollToSection('listings');
              }}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50"
            >
              Green Valley Sikri & Kosi Plots
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50"
            >
              Townships & Plotted Projects
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-[#1e3a8a] bg-blue-50"
            >
              Interest-Free EMI Calculator
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50"
            >
              Customer Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50"
            >
              Contact Offices
            </button>
          </div>
        )}
      </header>

      {/* Hero Section with Search Box */}
      <section id="hero" className="relative min-h-[580px] lg:min-h-[640px] bg-[#0f172a] text-white flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/raozproperties/hero-banner.jpg"
            alt="RAOZ PROPERTIES Hero Banner"
            className="w-full h-full object-cover object-center filter brightness-[0.4] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#fcd34d] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Plots / Property in Delhi NCR | Verified Real Estate by RAOZ PROPERTIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Find Your Dream Property in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcd34d] via-[#f59e0b] to-[#fbbf24]">
                Delhi NCR & Faridabad
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 mb-8 font-normal leading-relaxed max-w-2xl">
              Property in Delhi NCR: Verified Deals by RAOZ PROPERTIES is your trusted partner for the
              sale, purchase, and rent of residential plots, luxury farmhouses, modern builder floors,
              and commercial spaces across Faridabad and Delhi NCR, ensuring complete trust and transparency.
            </p>

            {/* Quick Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection('listings')}
                className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-900 hover:from-[#fbbf24] hover:to-[#f59e0b] transition shadow-lg shadow-amber-500/25 flex items-center gap-2"
              >
                <span>Explore Verified Listings</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleOpenEnquiry('Hero - Free Car Site Visit')}
                className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition backdrop-blur-sm flex items-center gap-2"
              >
                <Car className="w-4 h-4 text-[#f59e0b]" />
                <span>Book Free Car Visit</span>
              </button>

              <a
                href={`tel:${RAOZ_CONTACT.phoneRaw}`}
                className="px-5 py-3.5 rounded-xl font-bold text-xs bg-slate-900/80 text-slate-200 hover:text-white border border-slate-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#f59e0b]" />
                <span>{RAOZ_CONTACT.phone}</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2 border-t border-slate-700/60">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#f59e0b]" />
                100% Legal Title Search
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#f59e0b]" />
                Interest-Free EMI Options
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#f59e0b]" />
                Zero Brokerage on Primary Deals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Property Search Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-slate-100 scrollbar-none text-xs font-bold uppercase tracking-wider">
            {[
              { id: 'all', label: 'All Deals' },
              { id: 'Residential', label: 'Residential Flats & Floors' },
              { id: 'Plots', label: 'Residential Plots (Sikri & Kosi)' },
              { id: 'Commercial', label: 'Commercial & SCO' },
              { id: 'Farmhouse', label: 'Farmhouses' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  scrollToSection('listings');
                }}
                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#1e3a8a] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by area, floor or plot..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1e3a8a]"
              />
            </div>

            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1e3a8a] bg-white text-slate-700"
              >
                <option value="all">All Locations (Faridabad / NCR)</option>
                <option value="Faridabad">Greater Faridabad & Neharpar</option>
                <option value="Ballabhgarh">Ballabhgarh & Sikri</option>
                <option value="Kosi Kalan">Kosi Kalan / NH-19</option>
                <option value="Delhi NCR">Delhi NCR Regional</option>
              </select>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-800 block">Verified Inventory</span>
                <span className="text-slate-500">{filteredProperties.length} active listings available</span>
              </div>
              <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
            </div>

            <div>
              <button
                onClick={() => scrollToSection('listings')}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white hover:from-[#f59e0b] hover:to-[#d97706] transition flex items-center justify-center gap-2 shadow-md"
              >
                <span>Filter Results</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us / 4 Key Pillars */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
              Why Homebuyers Trust RAOZ PROPERTIES
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              When you choose RAOZ PROPERTIES, you get complete peace of mind with verified assets,
              hassle-free documentation, and interest-free EMI options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RAOZ_KEY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#1e3a8a]/40 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a8a]/10 text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                    {pillar.icon === 'shield-check' && <Shield className="w-6 h-6" />}
                    {pillar.icon === 'award' && <Award className="w-6 h-6" />}
                    {pillar.icon === 'users' && <Users className="w-6 h-6" />}
                    {pillar.icon === 'percent' && <Percent className="w-6 h-6" />}
                  </div>

                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-3 group-hover:text-[#f59e0b] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-xs font-bold text-[#1e3a8a]">
                  <span>RAOZ Verified Guarantee</span>
                  <Check className="w-3.5 h-3.5 ml-1 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Company Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
                About Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight mb-6">
                Trusted Property Consultant in Faridabad, Noida & Delhi/NCR
              </h2>

              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  RAOZ PROPERTIES began with a simple goal: to bring honesty, transparency and
                  excellence for every property project. Over the years, we have created a strong
                  reputation by fulfilling promises, distributing projects on time, and exceeding
                  customer expectations.
                </p>
                <p>
                  Whether it is a comfortable apartment, a luxurious builder floor, a freehold
                  residential plot in Sikri, or a strategically located commercial SCO shop, our
                  properties are thoughtfully chosen keeping in mind accuracy, care, and long-term
                  development.
                </p>
                <p>
                  As a trusted consultant across NCR, we also offer premium residential options.
                  Explore our verified Flats and Builder Floors in Faridabad for the best investment deals.
                  We provide legally verified assets, hassle-free documentation, interest-free EMI options,
                  and free site visits.
                </p>
              </div>

              {/* 4 Feature Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1e3a8a]">Zero Extra Cost EMIs</h4>
                    <p className="text-xs text-slate-500">Pay for plots in 12-24 interest-free installments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1e3a8a]">Free Chauffeur Site Visits</h4>
                    <p className="text-xs text-slate-500">Pick-and-drop service for families 7 days a week.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1e3a8a]">Immediate Registry & Dakhil</h4>
                    <p className="text-xs text-slate-500">Guaranteed mutation with local tehsildar records.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1e3a8a]">Bank Loan Assistance</h4>
                    <p className="text-xs text-slate-500">Pre-approved by SBI, HDFC, ICICI, and PNB.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenEnquiry('About Us Consultation')}
                  className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#1e3a8a] text-white hover:bg-[#f59e0b] hover:text-slate-900 transition shadow-md"
                >
                  Schedule Personal Meeting
                </button>
                <a
                  href={`tel:${RAOZ_CONTACT.phoneRaw}`}
                  className="px-6 py-3 rounded-xl font-semibold text-xs border border-slate-300 text-slate-700 hover:border-[#1e3a8a] transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#f59e0b]" />
                  Call: {RAOZ_CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#f59e0b]/20 to-[#1e3a8a]/20 rounded-3xl transform -rotate-1" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <img
                    src="/assets/raozproperties/hero-banner.jpg"
                    alt="RAOZ PROPERTIES Office & Modern Developments"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-amber-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-800 block">
                        700+ Satisfied Families Across NCR
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Faridabad, Sikri, Kosi Kalan & Delhi
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      100%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Listings Section */}
      <section id="listings" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
                Curated Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
                Our Latest Listings
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Explore our legally verified residential builder floors, ready-to-move flats,
                freehold plots, and commercial properties across Faridabad and Delhi NCR.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: 'all', label: 'All Listings' },
                { id: 'Residential', label: 'Flats & Floors' },
                { id: 'Plots', label: 'Plots (Sikri & Kosi)' },
                { id: 'Commercial', label: 'Commercial' },
                { id: 'Farmhouse', label: 'Farmhouses' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#1e3a8a] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-60 overflow-hidden bg-slate-900">
                    <img
                      src={prop.featuredImage}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1e3a8a]/90 text-white backdrop-blur-sm">
                      {prop.propertyType}
                    </span>

                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#f59e0b] text-slate-900 backdrop-blur-sm">
                      {prop.status}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[10px] font-semibold text-slate-300 block uppercase">
                          Price Starts From
                        </span>
                        <span className="text-2xl font-black text-[#fcd34d]">
                          {prop.price}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-slate-300 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                        {prop.city}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1e3a8a] group-hover:text-[#f59e0b] transition-colors mb-2 leading-snug">
                      {prop.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                      <span className="line-clamp-1">{prop.location}</span>
                    </div>

                    {/* Specs Box */}
                    <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold uppercase">Area</span>
                        <span className="font-bold text-slate-800">{prop.area}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold uppercase">Category</span>
                        <span className="font-bold text-slate-800">{prop.category}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                      {prop.description}
                    </p>

                    {prop.emiAvailable && (
                      <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-2.5 mb-4 text-[11px] text-amber-900 font-semibold flex items-center gap-1.5">
                        <Percent className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>0% Interest EMI Available</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProperty(prop)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleOpenEnquiry(prop.title)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1e3a8a] hover:bg-[#f59e0b] text-white hover:text-slate-900 transition text-center shadow-sm"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plotted Projects Hub (Green Valley Sikri & SSDR Kosi Kalan) */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
              Plotted Communities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
              Featured Townships & Sites
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Explore our master-planned plotted projects on Mathura Road and Delhi-Agra Highway offering immediate registry and zero-interest EMIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RAOZ_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 bg-slate-900 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold">
                      {proj.startingPrice}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#f59e0b] block mb-1">
                      {proj.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{proj.name}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                      {proj.location}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {proj.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center gap-2 mt-4">
                  <button
                    onClick={() => handleOpenEnquiry(`Project: ${proj.name}`)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#1e3a8a] hover:bg-[#f59e0b] text-white hover:text-slate-900 transition text-center"
                  >
                    Book Site Walkthrough
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest-Free EMI Calculator */}
      <section id="calculator" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
              Zero Interest Plan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Interest-Free Plot EMI Calculator
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Calculate your exact monthly installments for Green Valley Sikri-1 and SSDR Kosi-Kalan with 0% extra cost.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sliders */}
            <div className="lg:col-span-7 bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
              {/* Plot Size */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold text-slate-300">Plot Size:</span>
                  <span className="text-lg font-black text-[#f59e0b]">{plotSizeYards} sq.yards</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="500"
                  step="10"
                  value={plotSizeYards}
                  onChange={(e) => setPlotSizeYards(Number(e.target.value))}
                  className="w-full accent-[#f59e0b] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>60 sq.yds</span>
                  <span>150 sq.yds</span>
                  <span>500 sq.yds</span>
                </div>
              </div>

              {/* Rate per sq.yard */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold text-slate-300">Rate per Sq.Yard:</span>
                  <span className="text-lg font-black text-[#f59e0b]">
                    ₹ {ratePerYard.toLocaleString('en-IN')} / sq.yd
                  </span>
                </div>
                <input
                  type="range"
                  min="12000"
                  max="25000"
                  step="1000"
                  value={ratePerYard}
                  onChange={(e) => setRatePerYard(Number(e.target.value))}
                  className="w-full accent-[#f59e0b] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹ 12,000 (Kosi Kalan)</span>
                  <span>₹ 16,000 (Sikri)</span>
                  <span>₹ 25,000 (Prime Highway)</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold text-slate-300">
                    Booking Down Payment ({downPaymentPercent}%):
                  </span>
                  <span className="text-lg font-black text-white">
                    ₹ {Math.round(downPaymentAmount).toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#f59e0b] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>20% (Low Entry)</span>
                  <span>30% (Standard)</span>
                  <span>50% (Fast Possession)</span>
                </div>
              </div>

              {/* Installment Tenure */}
              <div>
                <span className="block text-sm font-semibold text-slate-300 mb-2">
                  Interest-Free EMI Tenure:
                </span>
                <div className="grid grid-cols-4 gap-3">
                  {[6, 12, 18, 24].map((tenure) => (
                    <button
                      key={tenure}
                      onClick={() => setEmiTenureMonths(tenure)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition border ${
                        emiTenureMonths === tenure
                          ? 'bg-[#f59e0b] text-slate-900 border-[#f59e0b]'
                          : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700'
                      }`}
                    >
                      {tenure} Months
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Computation Result */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f59e0b] mb-4">
                  <Calculator className="w-4 h-4" />
                  <span>Zero-Cost Financing Breakdown</span>
                </div>

                {/* Big Monthly EMI Box */}
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10 mb-6 text-center">
                  <span className="text-xs uppercase tracking-wider text-slate-300 block mb-1">
                    Monthly Zero-Interest Installment
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#fcd34d]">
                    ₹ {zeroInterestMonthlyEmi.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-slate-300"> / month</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 block mt-2 font-semibold">
                    ✓ Total Bank/Financing Interest Charged: ₹ 0 (Zero Extra Cost)
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-300">Total Plot Consideration:</span>
                    <span className="font-bold text-white">
                      ₹ {totalPlotCost.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-300">Booking Amount ({downPaymentPercent}%):</span>
                    <span className="font-bold text-white">
                      ₹ {Math.round(downPaymentAmount).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-300">Balance Payable in EMIs:</span>
                    <span className="font-bold text-white">
                      ₹ {Math.round(loanBalance).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 text-[#f59e0b] font-bold">
                    <span>Tenure & Frequency:</span>
                    <span>{emiTenureMonths} Monthly Installments</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-700">
                <button
                  onClick={() => handleOpenEnquiry(`0% EMI Booking for ${plotSizeYards} sq.yd Plot`)}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-900 hover:from-[#fbbf24] hover:to-[#f59e0b] transition shadow-lg text-center"
                >
                  Lock This 0% EMI Offer Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Simple Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
              Transparent Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
              Our Simple 3-Step Process
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Choose your ideal plot, complete hassle-free legal documentation, and secure your investment with transparent registry and immediate possession.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center relative group hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-2xl bg-[#1e3a8a] text-white flex items-center justify-center mx-auto mb-6 text-xl font-black shadow-md">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Schedule A Site Visit
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Book your free guided site visit with our property experts to check locations, accessibility, and neighborhood data first hand in our chauffeured car.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center relative group hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-2xl bg-[#f59e0b] text-slate-900 flex items-center justify-center mx-auto mb-6 text-xl font-black shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Explore Premium Choices
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We don't just show properties; we analyze your budget and present the absolute best alternative options in Faridabad & Delhi NCR.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center relative group hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-6 text-xl font-black shadow-md">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                Secure Ownership
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Walk away with complete peace of mind through crystal-clear documentation, legally verified registry, transparent dakhil, and immediate physical possession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* See Our Happy Families / Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
              See Our Happy Families
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
              Hear From Our Satisfied Clients
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Discover why every homebuyer trusts RAOZ PROPERTIES as the leading real estate service provider in Faridabad and Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RAOZ_TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#f59e0b]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#1e3a8a]">{test.name}</h4>
                    <span className="text-[11px] text-slate-500 block">{test.role}</span>
                    <span className="text-[10px] text-[#f59e0b] font-semibold block">{test.propertyPurchased}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Numbers / Stat Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-200">
            {RAOZ_STATS.map((s, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-[#1e3a8a] mb-1">
                  {s.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-1">{s.label}</div>
                <p className="text-[11px] text-slate-500">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Find quick answers to common questions about buying, selling, and renting with RAOZ PROPERTIES.
            </p>
          </div>

          <div className="space-y-4">
            {RAOZ_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-2xl p-5 open:bg-slate-50 open:border-[#1e3a8a]/40 transition-all duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-[#1e3a8a] list-none select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1e3a8a] text-white text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#f59e0b] group-open:text-slate-900 flex items-center justify-center text-xs transition-colors shrink-0 ml-2">
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

      {/* Latest Real Estate Blogs */}
      <section id="blogs" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
                Knowledge & Market Guidance
              </span>
              <h2 className="text-3xl font-black text-[#1e3a8a] tracking-tight">
                Our Latest News & Articles
              </h2>
            </div>
            <button
              onClick={() => handleOpenEnquiry('Blog Newsletter')}
              className="text-xs font-bold text-[#1e3a8a] hover:text-[#f59e0b] flex items-center gap-1.5"
            >
              <span>Subscribe for Property Alerts</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RAOZ_BLOGS.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-900">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <span className="text-[#f59e0b]">{blog.readTime}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#1e3a8a] hover:text-[#f59e0b] transition-colors mb-2 leading-snug line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="text-xs font-bold text-[#1e3a8a] hover:text-[#f59e0b] flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-slate-400">{blog.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us & Site Visit Booking Desk */}
      <section id="contact" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0f172a] text-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Form Side */}
              <div className="lg:col-span-7 p-8 sm:p-12">
                <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
                  Get in Touch
                </span>
                <h2 className="text-3xl font-black text-white tracking-tight mb-4">
                  Schedule Free Site Visit with Car Pickup
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Have questions about buying or selling property? Contact RAOZ PROPERTIES – your trusted property dealers partner in Faridabad and NCR.
                </p>

                {enquirySubmitted ? (
                  <div className="bg-emerald-900/40 border border-emerald-500 rounded-2xl p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white">Site Visit Confirmed!</h3>
                    <p className="text-xs text-slate-300 mt-2">
                      Our senior property executive will contact you shortly to coordinate free vehicle pickup and walkthrough timings.
                    </p>
                    <button
                      onClick={() => setEnquirySubmitted(false)}
                      className="mt-4 px-5 py-2 rounded-xl text-xs font-bold bg-[#f59e0b] text-slate-900"
                    >
                      Book Another Visit
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={enquiryForm.name}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={enquiryForm.phone}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                          placeholder="+91 96509 27984"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={enquiryForm.email}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Pickup Requirement
                        </label>
                        <select
                          value={enquiryForm.pickupRequired}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, pickupRequired: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                        >
                          <option>Yes (Free Car Pickup from NCR)</option>
                          <option>No (I will drive directly to site)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Property of Interest
                      </label>
                      <input
                        type="text"
                        value={enquiryForm.propertyInterest}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, propertyInterest: e.target.value })}
                        placeholder="e.g. Green Valley Sikri-1 Plot, Neharpar Builder Floor"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Message / Preferred Timing
                      </label>
                      <textarea
                        rows={3}
                        value={enquiryForm.message}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                        placeholder="Please tell us your preferred visit time..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-900 hover:from-[#fbbf24] hover:to-[#f59e0b] transition shadow-lg"
                      >
                        Book Free Accompanied Visit Now &rarr;
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Office Details Side */}
              <div className="lg:col-span-5 bg-[#1e293b] p-8 sm:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-700">
                <div>
                  <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-2">
                    RAOZ PROPERTIES Network
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-6">Our Office Locations</h3>

                  <div className="space-y-6 text-xs text-slate-300">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white mb-0.5">Headquarters</strong>
                        <p>{RAOZ_CONTACT.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white mb-0.5">Helplines (7 Days)</strong>
                        <a href={`tel:${RAOZ_CONTACT.phoneRaw}`} className="text-[#f59e0b] font-bold block text-sm">
                          {RAOZ_CONTACT.phone}
                        </a>
                        <span className="text-slate-400">Alt: {RAOZ_CONTACT.phoneAlt}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white mb-0.5">Official Email</strong>
                        <p>{RAOZ_CONTACT.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white mb-0.5">Operating Hours</strong>
                        <p>{RAOZ_CONTACT.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <a
                    href={`https://wa.me/${RAOZ_CONTACT.phoneRaw}?text=Hi%20RAOZ%20PROPERTIES%2C%20I%20want%20to%20visit%20Green%20Valley%20Sikri%20plots.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="bg-[#0b1329] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/raozproperties/logo.png"
                  alt="RAOZ PROPERTIES"
                  className="h-12 w-auto object-contain brightness-125"
                />
                <div>
                  <span className="block text-lg font-black tracking-tight text-white leading-tight">
                    RAOZ <span className="text-[#f59e0b]">PROPERTIES</span>
                  </span>
                  <span className="block text-[10px] tracking-wider uppercase font-bold text-slate-400">
                    Verified Real Estate Deals
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                RAOZ PROPERTIES is your trusted partner for the sale, purchase, and rent of
                residential plots, modern flats, luxury farmhouses, and builder floors across
                Faridabad and Delhi NCR, ensuring complete trust, transparency, and timely service.
              </p>

              <div className="text-xs text-slate-400 space-y-1 pt-2">
                <p>Call: {RAOZ_CONTACT.phone}</p>
                <p>Email: {RAOZ_CONTACT.email}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition">About Us</button></li>
                <li><button onClick={() => { setActiveTab('all'); scrollToSection('listings'); }} className="hover:text-white transition">All Listings</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-white transition">Featured Plotted Projects</button></li>
                <li><button onClick={() => scrollToSection('calculator')} className="hover:text-white transition">Zero Interest EMI Calculator</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition">Client Testimonials</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition">Frequently Asked Questions</button></li>
                <li><button onClick={() => scrollToSection('blogs')} className="hover:text-white transition">Blogs & News</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact Us</button></li>
              </ul>
            </div>

            {/* Our Sites / Featured Locations */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Our Sites & Locations
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => { setActiveTab('Plots'); scrollToSection('listings'); }} className="hover:text-white transition">Green Valley Sikri-1 (Ballabhgarh)</button></li>
                <li><button onClick={() => { setActiveTab('Plots'); scrollToSection('listings'); }} className="hover:text-white transition">SSDR Kosi-Kalan Highway Plots</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('listings'); }} className="hover:text-white transition">Neharpar Greater Faridabad Floors</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('listings'); }} className="hover:text-white transition">Sector 7 Luxury Builder Floors</button></li>
                <li><button onClick={() => { setActiveTab('Residential'); scrollToSection('listings'); }} className="hover:text-white transition">Ready to Move 3/4 BHK Flats</button></li>
                <li><button onClick={() => { setActiveTab('Commercial'); scrollToSection('listings'); }} className="hover:text-white transition">Faridabad SCO Retail Shops</button></li>
                <li><button onClick={() => { setActiveTab('Farmhouse'); scrollToSection('listings'); }} className="hover:text-white transition">Aravalli Foothills Farmhouse Land</button></li>
              </ul>
            </div>

            {/* Branch Offices */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Offices & Branches
              </h4>
              <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
                {RAOZ_CONTACT.branchOffices.map((b, i) => (
                  <p key={i}>• {b}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 RAOZ PROPERTIES. All Rights Reserved. Plots / Property in Delhi NCR.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-400 cursor-pointer">Verified Freehold Title Guarantee</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
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
                  <span className="text-xs uppercase font-bold text-[#f59e0b] block mb-1">
                    {selectedProperty.propertyType} · {selectedProperty.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black">{selectedProperty.title}</h3>
                  <span className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                    {selectedProperty.location}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-300 block">Starting From</span>
                  <span className="text-2xl font-black text-[#fcd34d]">{selectedProperty.price}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Area</span>
                  <span className="font-bold text-slate-800">{selectedProperty.area}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Bedrooms</span>
                  <span className="font-bold text-slate-800">{selectedProperty.bedrooms || 'Commercial / Plotted'}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Status</span>
                  <span className="font-bold text-slate-800">{selectedProperty.status}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">City / Belt</span>
                  <span className="font-bold text-slate-800">{selectedProperty.city}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider mb-2">
                  Property Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedProperty.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider mb-3">
                  Highlights & Features
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  {selectedProperty.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProperty.emiDetails && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900">
                  <strong className="block font-bold mb-1 text-sm text-amber-950">
                    Payment & Zero-Interest EMI Scheme:
                  </strong>
                  <p>{selectedProperty.emiDetails}</p>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <a
                href={`tel:${RAOZ_CONTACT.phoneRaw}`}
                className="py-3 px-5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs flex items-center gap-2 hover:bg-white transition"
              >
                <Phone className="w-4 h-4 text-[#f59e0b]" />
                <span>Call: {RAOZ_CONTACT.phone}</span>
              </a>

              <button
                onClick={() => {
                  setSelectedProperty(null);
                  handleOpenEnquiry(selectedProperty.title);
                }}
                className="py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white hover:from-[#f59e0b] hover:to-[#d97706] transition shadow-md flex items-center gap-2"
              >
                <Car className="w-4 h-4" />
                <span>Schedule Free Car Visit</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Details Modal */}
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
                <span className="text-[#f59e0b]">{blogReadTime(selectedBlog.readTime)}</span>
                <span>•</span>
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span>By {selectedBlog.author}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#1e3a8a] leading-snug">
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
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#1e3a8a] text-white"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Free Site Visit Booking Modal */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl my-8 relative p-6 sm:p-8">
            <button
              onClick={() => setEnquiryModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest block mb-1">
              RAOZ PROPERTIES Desk
            </span>
            <h3 className="text-2xl font-black text-[#1e3a8a] mb-2">
              Book Free Site Visit
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Regarding: <strong className="text-slate-800">{enquiryPropertyTitle}</strong>
            </p>

            {enquirySubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-base font-bold text-emerald-900">Visit Scheduled!</h4>
                <p className="text-xs text-emerald-700 mt-2">
                  Our executive will call you within 15 minutes to confirm chauffeured pickup location and time.
                </p>
                <button
                  onClick={() => setEnquiryModalOpen(false)}
                  className="mt-4 px-6 py-2 rounded-xl text-xs font-bold bg-[#1e3a8a] text-white"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    placeholder="e.g. Amit Yadav"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1e3a8a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    placeholder="+91 96509 27984"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1e3a8a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Free Pickup Needed?</label>
                  <select
                    value={enquiryForm.pickupRequired}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, pickupRequired: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1e3a8a] bg-white text-slate-700"
                  >
                    <option>Yes (Free Car Pickup from NCR)</option>
                    <option>No (I will come by own vehicle)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Day / Date</label>
                  <input
                    type="text"
                    value={enquiryForm.preferredDate}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, preferredDate: e.target.value })}
                    placeholder="e.g. This Sunday 11 AM"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1e3a8a]"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white hover:from-[#f59e0b] hover:to-[#d97706] transition shadow-md"
                  >
                    Confirm Free Site Visit Booking
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

function blogReadTime(time: string) {
  return time;
}
