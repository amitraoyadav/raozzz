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
  Building,
  Plane,
  Bus,
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { ITDC_PACKAGES, ItdcPackage, ITDC_TRAVELS_WEBSITE } from '../../data/itdcTravelsData';

type ItdcView = 'home' | 'packages' | 'package-detail' | 'ticketing' | 'mice' | 'transport' | 'about' | 'contact';

export const ItdcTravelsApp: React.FC = () => {
  const { setActiveView, submitLead } = useApp();
  const [currentView, setCurrentView] = useState<ItdcView>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<ItdcPackage | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Booking / Delegation Enquiry Modal State
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [enquiryPackage, setEnquiryPackage] = useState<ItdcPackage | null>(null);
  const [orgType, setOrgType] = useState<string>('Public / Individual');
  const [officialName, setOfficialName] = useState<string>('');
  const [officialPhone, setOfficialPhone] = useState<string>('');
  const [officialEmail, setOfficialEmail] = useState<string>('');
  const [delegatesCount, setDelegatesCount] = useState<number>(2);
  const [travelDate, setTravelDate] = useState<string>('2026-11-01');
  const [enquiryNotes, setEnquiryNotes] = useState<string>('');
  const [enquirySubmitted, setEnquirySubmitted] = useState<boolean>(false);

  const handleOpenDetail = (pkg: ItdcPackage) => {
    setSelectedPackage(pkg);
    setCurrentView('package-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (pkg?: ItdcPackage) => {
    setEnquiryPackage(pkg || null);
    setEnquirySubmitted(false);
    setEnquiryModalOpen(true);
  };

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!officialName || !officialPhone) return;

    submitLead({
      websiteSlug: 'itdc-travels',
      businessName: 'Ashok Travels & Tours (ITDC Govt Enterprise)',
      customerName: officialName,
      customerPhone: officialPhone,
      customerEmail: officialEmail,
      serviceRequested: enquiryPackage
        ? `Official Booking: ${enquiryPackage.title} (${delegatesCount} Delegates, Date: ${travelDate}, Org: ${orgType})`
        : `Institutional Travel Request (${orgType}, Delegates: ${delegatesCount})`,
      message: enquiryNotes || 'Submitted via Ashok Travels & Tours (ITDC) Portal',
      status: 'new'
    });

    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquiryModalOpen(false);
      setEnquirySubmitted(false);
      setOfficialName('');
      setOfficialPhone('');
      setOfficialEmail('');
      setEnquiryNotes('');
    }, 2500);
  };

  const filteredPackages = ITDC_PACKAGES.filter(pkg => {
    const matchesCat = selectedCategory === 'all' || pkg.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destinationsCovered.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-['Inter'] flex flex-col selection:bg-[#C59B27]/20 selection:text-[#0F2850]">
      {/* Top Govt Bar & Reference Switcher */}
      <div className="bg-[#0F2850] text-slate-200 text-xs py-2 px-4 border-b border-[#C59B27]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>India Tourism Development Corporation (ITDC) · Ministry of Tourism, Govt. of India</span>
            </span>
            <span className="hidden md:inline text-slate-400" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-slate-300" />
              <span>HQ: Scope Complex, Lodhi Road, New Delhi</span>
            </span>
            <span className="hidden md:inline text-slate-400" aria-hidden="true">·</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tel: 011-24307535 / 24365766</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ReferenceSiteSwitcher currentSiteId="itdc-travels" />
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
            <div className="w-10 h-10 rounded-xl bg-[#0F2850] border-2 border-[#C59B27] flex items-center justify-center text-[#C59B27] font-black text-lg shadow-xs">
              ATT
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-[#0F2850] tracking-tight">ASHOK TRAVELS & TOURS</div>
              <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                Travel Division of ITDC (Govt. of India)
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
              className={`hover:text-[#0F2850] transition-colors cursor-pointer ${
                currentView === 'home' ? 'text-[#0F2850] border-b-2 border-[#C59B27] pb-0.5' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentView('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0F2850] transition-colors cursor-pointer ${
                currentView === 'packages' ? 'text-[#0F2850] border-b-2 border-[#C59B27] pb-0.5' : ''
              }`}
            >
              Heritage Tours
            </button>
            <button
              onClick={() => {
                setCurrentView('ticketing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0F2850] transition-colors cursor-pointer ${
                currentView === 'ticketing' ? 'text-[#0F2850] border-b-2 border-[#C59B27] pb-0.5' : ''
              }`}
            >
              Air Ticketing
            </button>
            <button
              onClick={() => {
                setCurrentView('mice');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0F2850] transition-colors cursor-pointer ${
                currentView === 'mice' ? 'text-[#0F2850] border-b-2 border-[#C59B27] pb-0.5' : ''
              }`}
            >
              MICE & Conferences
            </button>
            <button
              onClick={() => {
                setCurrentView('transport');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0F2850] transition-colors cursor-pointer ${
                currentView === 'transport' ? 'text-[#0F2850] border-b-2 border-[#C59B27] pb-0.5' : ''
              }`}
            >
              Ashok Transport Fleet
            </button>
            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#0F2850] transition-colors cursor-pointer ${
                currentView === 'contact' ? 'text-[#0F2850] border-b-2 border-[#C59B27] pb-0.5' : ''
              }`}
            >
              Official Desk
            </button>
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenEnquiry()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F2850] hover:bg-[#163B75] text-[#C59B27] border border-[#C59B27] text-xs font-bold rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Official Booking Enquiry</span>
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
                Curated Heritage Tours ({ITDC_PACKAGES.length})
              </button>
              <button
                onClick={() => {
                  setCurrentView('ticketing');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Centralized Air Ticketing (itdcbookings)
              </button>
              <button
                onClick={() => {
                  setCurrentView('mice');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                MICE & Delegations
              </button>
              <button
                onClick={() => {
                  setCurrentView('transport');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Ashok Transport Fleet
              </button>
              <button
                onClick={() => {
                  setCurrentView('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-50 rounded"
              >
                Official Contact & PSUs Desk
              </button>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Tel: 011-24307535</span>
              <a
                href="https://itdc.co.in/travels-tours/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F2850] font-semibold underline"
              >
                Visit itdc.co.in →
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
            <section className="relative bg-[#0F2850] text-white py-16 lg:py-24 overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80")'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F2850] via-[#0F2850]/90 to-transparent" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#C59B27] text-xs font-bold uppercase tracking-wider mb-4">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Official Travel Partner — Team India Paris Olympics 2024</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    The Nation’s Official Travel Partner for Over 40 Years
                  </h1>
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    Ashok Travels & Tours (ATT) is the travel division of India Tourism Development Corporation (ITDC), Ministry of Tourism. A trusted one-stop travel management ecosystem for Government Ministries, Public Sector Undertakings (PSUs), Defense forces, and discerning travelers nationwide.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        setCurrentView('packages');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#C59B27] hover:bg-[#B3891E] text-[#0F2850] text-xs font-black rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Curated Tours</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setCurrentView('ticketing');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all cursor-pointer"
                    >
                      Air Ticketing Portal
                    </button>
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-amber-400" />
                      <span>Govt. of India Enterprise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Plane className="w-4 h-4 text-cyan-400" />
                      <span>Official Air Partner: CISF, HAL, SSB</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>ISO 9001:2015 Accredited</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Official Mandate Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="text-xs font-bold text-[#C59B27] uppercase tracking-widest">
                  India Tourism Development Corporation
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F2850] tracking-tight mt-1">
                  Pillars of Ashok Travels & Tours
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <Plane className="w-8 h-8 text-[#0F2850] mb-4" />
                  <h3 className="text-base font-bold text-slate-900">Centralized Air Ticketing</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Official booking portal (itdcbookings.in) serving Union Ministries, Armed Forces, and PSUs with streamlined credit accounts, direct IATA ticketing, and 24x7 emergency protocols.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <Compass className="w-8 h-8 text-[#C59B27] mb-4" />
                  <h3 className="text-base font-bold text-slate-900">Incredible India Heritage Circuits</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Sacred Buddhist Circuits, Palace on Wheels luxury trains, Golden Triangle tours, and spiritual yatras curated under government standards of safety and cultural authenticity.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <Bus className="w-8 h-8 text-[#0F2850] mb-4" />
                  <h3 className="text-base font-bold text-slate-900">Ashok Transport Fleet & Protocol</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Deluxe Volvo touring coaches, executive VVIP sedans, and bulletproof protocol convoys for visiting state delegations, Olympic athletes, and international summit delegates.
                  </p>
                </div>
              </div>
            </section>

            {/* Featured Heritage Packages */}
            <section className="bg-slate-100 py-16 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
                  <div>
                    <div className="text-xs font-bold text-[#C59B27] uppercase tracking-widest">
                      Signature Expeditions
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0F2850] tracking-tight mt-1">
                      Curated Government Heritage Tours
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentView('packages');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#0F2850] hover:text-[#C59B27] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All Itineraries</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ITDC_PACKAGES.map(pkg => (
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
                          <div className="absolute top-3 left-3 bg-[#0F2850] text-[#C59B27] text-[10px] font-bold px-2 py-0.5 rounded">
                            {pkg.duration}
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="text-[10px] font-bold text-[#C59B27] uppercase tracking-wider">
                            {pkg.categoryLabel}
                          </div>
                          <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">{pkg.title}</h3>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{pkg.subtitle}</p>

                          <div className="mt-4 space-y-1.5">
                            {pkg.highlights.slice(0, 3).map((hl, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-slate-400">Official Tariff</div>
                            <div className="text-base font-black text-[#0F2850]">
                              ₹{pkg.startingPrice.toLocaleString('en-IN')}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpenDetail(pkg)}
                              className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 rounded-lg"
                            >
                              Itinerary
                            </button>
                            <button
                              onClick={() => handleOpenEnquiry(pkg)}
                              className="px-3.5 py-1.5 bg-[#0F2850] text-[#C59B27] text-xs font-bold rounded-lg hover:bg-[#163B75]"
                            >
                              Enquire
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: PACKAGES DIRECTORY */}
        {currentView === 'packages' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-[#0F2850] tracking-tight">Curated Heritage Tour Packages</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-8">
              Bespoke cultural circuits operated under the standards of India Tourism Development Corporation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ITDC_PACKAGES.map(pkg => (
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
                      <div className="absolute top-3 left-3 bg-[#0F2850] text-[#C59B27] text-[10px] font-bold px-2 py-0.5 rounded">
                        {pkg.duration}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-[10px] font-bold text-[#C59B27] uppercase">{pkg.categoryLabel}</div>
                      <h2 className="text-base font-bold text-slate-900 mt-1 leading-snug">{pkg.title}</h2>
                      <p className="text-xs text-slate-500 mt-1">{pkg.subtitle}</p>

                      <div className="mt-4 space-y-1.5">
                        {pkg.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400">Tariff</div>
                        <div className="text-base font-black text-[#0F2850]">
                          ₹{pkg.startingPrice.toLocaleString('en-IN')}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenDetail(pkg)}
                          className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 rounded-lg"
                        >
                          Itinerary
                        </button>
                        <button
                          onClick={() => handleOpenEnquiry(pkg)}
                          className="px-3.5 py-1.5 bg-[#0F2850] text-[#C59B27] text-xs font-bold rounded-lg hover:bg-[#163B75]"
                        >
                          Enquire
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
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0F2850] mb-6 cursor-pointer"
            >
              <span>← Back to All ITDC Packages</span>
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
                  <div className="inline-block bg-[#C59B27] text-[#0F2850] text-xs font-bold px-3 py-1 rounded-md mb-2">
                    {selectedPackage.duration} · {selectedPackage.categoryLabel}
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-black tracking-tight">{selectedPackage.title}</h1>
                  <p className="text-sm text-slate-200 mt-1">{selectedPackage.subtitle}</p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500">Official Government Tariff</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0F2850]">
                    ₹{selectedPackage.startingPrice.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-slate-500">/person</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenEnquiry(selectedPackage)}
                  className="px-6 py-2.5 bg-[#0F2850] text-[#C59B27] text-xs font-bold rounded-xl hover:bg-[#163B75] shadow-xs cursor-pointer"
                >
                  Submit Official Delegation Enquiry
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#0F2850]">Curated Overview</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{selectedPackage.overview}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0F2850] mb-4">Official Day-by-Day Itinerary</h3>
                  <div className="space-y-4">
                    {selectedPackage.itinerary.map(day => (
                      <div key={day.day} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-7 h-7 rounded-lg bg-[#0F2850] text-[#C59B27] font-black text-xs flex items-center justify-center">
                            D{day.day}
                          </span>
                          <span className="font-bold text-sm text-slate-900">{day.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-9">{day.description}</p>
                        <div className="mt-2 text-[11px] text-slate-500 pl-9">
                          Overnight Accommodation: <strong>{day.stayCity}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Government Authorized Inclusions</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedPackage.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: AIR TICKETING */}
        {currentView === 'ticketing' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-xs font-bold text-[#C59B27] uppercase tracking-widest mb-1">
              Government Central Air Desk
            </div>
            <h1 className="text-3xl font-black text-[#0F2850] tracking-tight">Centralized Air Ticketing Division</h1>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Ashok Travels & Tours manages the official digital travel platform (itdcbookings.in) facilitating authorized air ticketing for Central Ministries, Public Sector Undertakings (PSUs), CISF, SSB, HAL, and autonomous organizations.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                <h3 className="text-base font-bold text-[#0F2850]">Institutional Ticketing Benefits</h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C59B27] font-bold">✓</span>
                    <span>Direct access to Govt. approved airline travel concessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C59B27] font-bold">✓</span>
                    <span>Zero convenience fee on official travel vouchers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C59B27] font-bold">✓</span>
                    <span>24x7 Emergency ticket reissue and flight cancellation waiver desk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C59B27] font-bold">✓</span>
                    <span>Monthly consolidated invoicing and GST compliance reports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0F2850] text-white rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#C59B27]">Air Ticketing Query Desk</h3>
                <div className="mt-4 space-y-3 text-xs text-slate-300">
                  <div><strong>Domestic Queries:</strong> 011-24307535, 011-24365766</div>
                  <div><strong>International Queries:</strong> 011-24364913</div>
                  <div><strong>Official Email:</strong> attairtickets@itdc.co.in</div>
                  <div><strong>Central Office:</strong> Scope Complex, Core 8, Lodhi Road, New Delhi</div>
                </div>

                <button
                  onClick={() => handleOpenEnquiry()}
                  className="mt-6 w-full py-2.5 bg-[#C59B27] text-[#0F2850] text-xs font-bold rounded-xl hover:bg-[#B3891E]"
                >
                  Submit Official Flight Requisition
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: MICE & DELEGATIONS */}
        {currentView === 'mice' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-[#0F2850] tracking-tight">MICE & State Delegations Management</h1>
            <p className="mt-2 text-sm text-slate-600">
              Meetings, Incentives, Conferences, and Exhibitions (MICE) handled with national protocol precision.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <Users className="w-8 h-8 text-[#0F2850] mb-3" />
                <h3 className="text-sm font-bold text-slate-900">National Summits</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Complete logistical ground handling at Vigyan Bhawan, Bharat Mandapam, and Yashobhoomi.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <Award className="w-8 h-8 text-[#C59B27] mb-3" />
                <h3 className="text-sm font-bold text-slate-900">Olympic Delegations</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Proud travel manager for the Indian Contingent at the Paris 2024 Olympic Games.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <Building className="w-8 h-8 text-[#0F2850] mb-3" />
                <h3 className="text-sm font-bold text-slate-900">Ashok Hotel Banquets</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Priority convention facilities at iconic ITDC Ashok Hotel properties across India.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 6: ASHOK TRANSPORT FLEET */}
        {currentView === 'transport' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-[#0F2850] tracking-tight">Ashok Transport Fleet</h1>
            <p className="mt-2 text-sm text-slate-600 mb-8">
              Government-owned transport fleet delivering protocol transportation across New Delhi and major state capitals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <Bus className="w-8 h-8 text-[#0F2850] mb-3" />
                <h3 className="text-base font-bold text-slate-900">Volvo Luxury Tourist Coaches</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Air-conditioned 45-seater multi-axle Volvo coaches equipped with public address systems, pushback recliners, and panoramic tourist windows.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <Compass className="w-8 h-8 text-[#C59B27] mb-3" />
                <h3 className="text-base font-bold text-slate-900">BharatBenz 32-Seater Coaches</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Mid-size executive coaches ideal for diplomatic delegations, ministerial site inspections, and cultural groups.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900">VIP Protocol Sedans & SUVs</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Toyota Camry Hybrid, Fortuner, and Innova Crysta vehicles driven by police-verified protocol chauffeurs.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 7: CONTACT / OFFICIAL DESK */}
        {currentView === 'contact' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-black text-[#0F2850] tracking-tight">Official Desks & Liaison</h1>
            <p className="mt-2 text-sm text-slate-600 mb-8">
              Reach the Ashok Travels & Tours team at ITDC Headquarters in New Delhi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 text-xs text-slate-700">
                <h3 className="text-base font-bold text-[#0F2850]">Head Office Contact</h3>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>Scope Complex, Core 8, 6th Floor, 7 Lodhi Road, New Delhi - 110003</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>Domestic Travel: 011-24307535, 011-24365766</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>International Travel: 011-24364913</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>Email: attairtickets@itdc.co.in</span>
                </div>
              </div>

              <div className="bg-[#0F2850] text-white rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#C59B27]">Government & PSU Portal</h3>
                <p className="text-xs text-slate-300 mt-1">
                  To register your organization or request delegated travel support, reach our corporate account desk.
                </p>
                <button
                  onClick={() => handleOpenEnquiry()}
                  className="mt-6 w-full py-2.5 bg-[#C59B27] text-[#0F2850] text-xs font-bold rounded-xl hover:bg-[#B3891E]"
                >
                  Open Booking Enquiry Form
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Official Enquiry Modal */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#0F2850] text-white p-5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-[#C59B27] uppercase tracking-wider">
                  Ashok Travels & Tours (ITDC)
                </div>
                <h3 className="text-base font-bold text-white">
                  {enquiryPackage ? enquiryPackage.title : 'Official Travel Requisition'}
                </h3>
              </div>
              <button
                onClick={() => setEnquiryModalOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {enquirySubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-slate-900">Requisition Logged!</h4>
                  <p className="mt-1 text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Your request has been registered at the ITDC Scope Complex desk. An authorized travel officer will connect on <strong>{officialPhone}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitEnquiry} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">Organization / Entity Type</label>
                    <select
                      value={orgType}
                      onChange={e => setOrgType(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    >
                      <option value="Central Ministry">Central Ministry / Department</option>
                      <option value="State Govt / Agency">State Government / Autonomous Agency</option>
                      <option value="PSU Enterprise">Public Sector Undertaking (PSU)</option>
                      <option value="Armed Forces / Paramilitary">Armed Forces / Paramilitary (CISF / SSB)</option>
                      <option value="Corporate / Private">Corporate / Private Organization</option>
                      <option value="Public / Individual">Public / Individual Tourist</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Name / Officer In-Charge</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. S. K. Narayanan"
                        value={officialName}
                        onChange={e => setOfficialName(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Contact Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="011-24307535 / +91 98110 55220"
                        value={officialPhone}
                        onChange={e => setOfficialPhone(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Official Email</label>
                      <input
                        type="email"
                        placeholder="officer@nic.in / email@domain.com"
                        value={officialEmail}
                        onChange={e => setOfficialEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Number of Travelers</label>
                      <input
                        type="number"
                        min={1}
                        max={500}
                        value={delegatesCount}
                        onChange={e => setDelegatesCount(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">Requirements / Circuit Details</label>
                    <textarea
                      rows={2}
                      placeholder="Specify dates, protocol requirements, vehicle types, or conference venue details"
                      value={enquiryNotes}
                      onChange={e => setEnquiryNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setEnquiryModalOpen(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#0F2850] text-[#C59B27] text-xs font-bold rounded-xl hover:bg-[#163B75] shadow-xs cursor-pointer"
                    >
                      Submit Requisition
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Production Footer */}
      <footer className="bg-[#0F2850] text-slate-300 py-12 border-t border-[#C59B27]/40 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="text-lg font-black text-white">ASHOK TRAVELS & TOURS</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                The travel division of India Tourism Development Corporation (ITDC), Ministry of Tourism, Govt. of India. Serving the nation since 1983.
              </p>
              <div className="text-[11px] text-[#C59B27] font-semibold">
                Official Travel Partner — Team India Paris Olympics 2024
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Key Divisions</div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Central Air Ticketing (itdcbookings)</li>
                <li>Incredible India Heritage Circuits</li>
                <li>Palace on Wheels Luxury Trains</li>
                <li>MICE & Diplomatic Convoys</li>
                <li>Ashok Transport Executive Fleet</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">ITDC Headquarters</div>
              <div className="space-y-2 text-xs text-slate-400">
                <div>Scope Complex, Core 8, 6th Floor</div>
                <div>7 Lodhi Road, New Delhi - 110003</div>
                <div>Phone: 011-24307535, 011-24365766</div>
                <div>Email: attairtickets@itdc.co.in</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Original Reference</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                This demo reproduces ITDC Travels & Tours (Ashok Travels) official portal.
              </p>
              <a
                href="https://itdc.co.in/travels-tours/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C59B27] hover:underline font-semibold"
              >
                Visit Official itdc.co.in/travels-tours →
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
            <div>© {new Date().getFullYear()} India Tourism Development Corporation Ltd (ITDC)</div>
            <div>Ministry of Tourism · Government of India Enterprise</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
