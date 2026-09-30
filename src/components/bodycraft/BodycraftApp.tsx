import React, { useState, useMemo } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Award,
  Sparkles,
  Scissors,
  Droplets,
  Heart,
  Search,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Send,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  Check,
  Share2,
  Tag,
  Stethoscope,
  Smile,
  Compass,
  Copy
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  BODYCRAFT_SERVICES,
  BODYCRAFT_DOCTORS,
  BODYCRAFT_OUTLETS,
  BODYCRAFT_OFFERS,
  BODYCRAFT_REVIEWS,
  BODYCRAFT_TRUST_PILLARS,
  BodycraftService,
  BodycraftDoctor,
  BodycraftOutlet
} from '../../data/bodycraftData';
import { BodycraftMegaMenu } from './BodycraftMegaMenu';
import { BodycraftHeroSlider } from './BodycraftHeroSlider';
import {
  BodycraftSalonView,
  BodycraftClinicView,
  BodycraftSpaView,
  BodycraftAboutView,
  BodycraftContactView
} from './BodycraftDedicatedViews';

export type BodycraftTab =
  | 'home'
  | 'salon'
  | 'clinic'
  | 'spa'
  | 'bridal'
  | 'doctors'
  | 'offers'
  | 'outlets'
  | 'about'
  | 'faq'
  | 'contact';

export const BodycraftApp: React.FC = () => {
  const { submitLead, setActiveView } = useApp();

  // Active Tab/View State
  const [activeTab, setActiveTab] = useState<BodycraftTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter States
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState<'all' | 'salon' | 'clinic' | 'spa' | 'bridal'>('all');
  const [serviceSearchQuery, setServiceSearchQuery] = useState('');
  const [selectedOutletCity, setSelectedOutletCity] = useState<'All' | 'Bengaluru' | 'Mumbai' | 'Gurugram' | 'Chennai'>('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  // Mega Menu & Clipboard State
  const [hoveredMegaMenu, setHoveredMegaMenu] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    try {
      navigator.clipboard?.writeText(code);
    } catch {
      // safe fallback
    }
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  // Booking Engine State
  const [bookingCategory, setBookingCategory] = useState<'salon' | 'clinic' | 'spa' | 'bridal'>('salon');
  const [bookingCity, setBookingCity] = useState<string>('Bengaluru');
  const [bookingOutlet, setBookingOutlet] = useState<string>('Indiranagar Flagship Salon, Spa & Clinic');
  const [bookingService, setBookingService] = useState<string>('Bespoke Precision Haircut & Styling');
  const [bookingDate, setBookingDate] = useState<string>('Tomorrow, 11:00 AM');
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestNotes, setGuestNotes] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);

  // Selected Service Detail Modal
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<BodycraftService | null>(null);

  // Doctor Consultation Modal
  const [selectedDoctorForConsult, setSelectedDoctorForConsult] = useState<BodycraftDoctor | null>(null);
  const [consultName, setConsultName] = useState<string>('');
  const [consultPhone, setConsultPhone] = useState<string>('');
  const [consultConcern, setConsultConcern] = useState<string>('Acne & Pigmentation');
  const [consultSuccess, setConsultSuccess] = useState<boolean>(false);

  // Skin Assessment Quiz State
  const [quizConcern, setQuizConcern] = useState<string>('Dull Skin & Tanning');
  const [quizAge, setQuizAge] = useState<string>('25–35 Years');
  const [quizRecommendation, setQuizRecommendation] = useState<string | null>(null);

  // Quick WhatsApp link generator
  const getWhatsAppLink = (customText?: string) => {
    const text = customText || 'Hello Bodycraft! I would like to enquire about booking an appointment at your salon/clinic.';
    return `https://wa.me/919513393636?text=${encodeURIComponent(text)}`;
  };

  // Filtered Services
  const filteredServices = useMemo(() => {
    return BODYCRAFT_SERVICES.filter(service => {
      if (serviceCategoryFilter !== 'all' && service.category !== serviceCategoryFilter) {
        return false;
      }
      if (serviceSearchQuery.trim()) {
        const q = serviceSearchQuery.toLowerCase();
        const matchName = service.name.toLowerCase().includes(q);
        const matchSub = service.subCategory.toLowerCase().includes(q);
        const matchDesc = service.description.toLowerCase().includes(q);
        if (!matchName && !matchSub && !matchDesc) return false;
      }
      return true;
    });
  }, [serviceCategoryFilter, serviceSearchQuery]);

  // Outlets filtered by city
  const filteredOutlets = useMemo(() => {
    if (selectedOutletCity === 'All') return BODYCRAFT_OUTLETS;
    return BODYCRAFT_OUTLETS.filter(o => o.city === selectedOutletCity);
  }, [selectedOutletCity]);

  // Handlers
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;

    submitLead({
      websiteSlug: 'bodycraft',
      businessName: 'Bodycraft Salon, Clinic & Spa',
      customerName: guestName,
      customerPhone: guestPhone,
      customerEmail: guestEmail,
      serviceRequested: `Bodycraft Appointment: ${bookingService} (${bookingCategory.toUpperCase()}) at ${bookingOutlet}, ${bookingCity} on ${bookingDate}`,
      message: guestNotes || 'Requested via Bodycraft Instant Booking Engine.',
      status: 'new'
    });

    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingModalOpen(false);
      setGuestName('');
      setGuestPhone('');
      setGuestEmail('');
      setGuestNotes('');
    }, 3200);
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultName || !consultPhone || !selectedDoctorForConsult) return;

    submitLead({
      websiteSlug: 'bodycraft',
      businessName: 'Bodycraft Dermatology Clinic',
      customerName: consultName,
      customerPhone: consultPhone,
      serviceRequested: `Doctor Consultation with ${selectedDoctorForConsult.name} (${selectedDoctorForConsult.specialization}) · Concern: ${consultConcern}`,
      message: 'Client requested clinical appointment with dermatologist.',
      status: 'new'
    });

    setConsultSuccess(true);
    setTimeout(() => {
      setConsultSuccess(false);
      setSelectedDoctorForConsult(null);
      setConsultName('');
      setConsultPhone('');
    }, 2800);
  };

  const handleContactInquiry = (data: { name: string; phone: string; email: string; message: string; outlet: string }) => {
    submitLead({
      websiteSlug: 'bodycraft',
      businessName: 'Bodycraft Salon, Clinic & Spa',
      customerName: data.name,
      customerPhone: data.phone,
      customerEmail: data.email,
      serviceRequested: `General Inquiry / Feedback for ${data.outlet}`,
      message: data.message || 'Submitted via Bodycraft Contact Desk.',
      status: 'new'
    });
  };

  const runSkinAssessment = () => {
    if (quizConcern.includes('Dull') || quizConcern.includes('Tanning')) {
      setQuizRecommendation('Recommended: HydraFacial MD Elite (US-FDA) + Ferulic Clinical Peel for instant hydration and luminosity.');
    } else if (quizConcern.includes('Frizz') || quizConcern.includes('Hair Thinning')) {
      setQuizRecommendation('Recommended: GFC Scalp Growth Therapy + Kérastase Fusio-Dose customized caviar ritual.');
    } else if (quizConcern.includes('Ageing') || quizConcern.includes('Lines')) {
      setQuizRecommendation('Recommended: Doctor Consultation for Allergan Botox & Juvederm Dermal Contouring + Radiofrequency tightening.');
    } else {
      setQuizRecommendation('Recommended: Triple-Wavelength Painless Laser Hair Reduction + Balinese Aromatherapy Spa Therapy.');
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#1E1E1E] font-['Inter',sans-serif] selection:bg-[#C5A880] selection:text-white">
      {/* 1. Global Reference Site Switcher Bar */}
      <ReferenceSiteSwitcher currentSiteId="bodycraft" />

      {/* 2. Bodycraft Top Utility Bar */}
      <div className="bg-[#121212] text-[#E8D5C4] text-[11px] sm:text-xs py-2 px-4 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Hotline & Operational Hours */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="tel:08046896000"
              className="flex items-center gap-1.5 text-[#C5A880] font-bold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Centennial Helpline: 080 4689 6000</span>
            </a>
            <span className="hidden sm:inline text-[#444]">|</span>
            <span className="hidden md:inline text-slate-300">
              Daily 9:00 AM – 9:00 PM IST
            </span>
            <span className="hidden lg:inline text-[#444]">|</span>
            <span className="hidden lg:inline text-[#C5A880]">
              30+ Luxury Outlets across Bengaluru, Mumbai, Gurugram & Chennai
            </span>
          </div>

          {/* Quick Shortcuts */}
          <div className="flex items-center gap-3 text-xs">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Booking</span>
            </a>
            <span className="text-[#444]">·</span>
            <button
              onClick={() => {
                setActiveTab('doctors');
                scrollToSection('doctors-section');
              }}
              className="text-[#E8D5C4] hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              Our Dermatologists
            </button>
            <span className="text-[#444]">·</span>
            <button
              onClick={() => {
                setBookingCategory('salon');
                setBookingModalOpen(true);
              }}
              className="px-2.5 py-0.5 rounded-full bg-[#C5A880] text-[#121212] font-black hover:bg-[#d8bb91] transition-colors cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Header Bar with Luxury Branding */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-stone-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer shrink-0"
              onClick={() => {
                setActiveTab('home');
                setServiceCategoryFilter('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-11 h-11 rounded-2xl bg-[#121212] text-[#C5A880] border border-[#C5A880]/30 p-0.5 shadow-md flex items-center justify-center">
                <span className="font-serif font-black text-2xl tracking-tighter">B</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black tracking-tight text-[#121212] font-serif">
                    bodycraft
                  </span>
                </div>
                <p className="text-[9px] text-[#8C7A65] font-extrabold tracking-widest uppercase -mt-1 font-mono">
                  Salon · Skin Clinic · Luxury Spa
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-stone-700">
              <button
                onClick={() => {
                  setActiveTab('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                  activeTab === 'home' ? 'text-[#121212] border-b-2 border-[#C5A880]' : ''
                }`}
              >
                Home
              </button>

              <button
                onMouseEnter={() => setHoveredMegaMenu('salon')}
                onClick={() => {
                  setActiveTab('salon');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                  activeTab === 'salon' ? 'text-[#121212] border-b-2 border-[#C5A880]' : ''
                }`}
              >
                <span>Salon Care</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              <button
                onMouseEnter={() => setHoveredMegaMenu('clinic')}
                onClick={() => {
                  setActiveTab('clinic');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                  activeTab === 'clinic' ? 'text-[#121212] border-b-2 border-[#C5A880]' : ''
                }`}
              >
                <span>Skin Clinic</span>
                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  Doctor-Led
                </span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              <button
                onMouseEnter={() => setHoveredMegaMenu('spa')}
                onClick={() => {
                  setActiveTab('spa');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                  activeTab === 'spa' ? 'text-[#121212] border-b-2 border-[#C5A880]' : ''
                }`}
              >
                <span>Spa & Wellness</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('doctors');
                  scrollToSection('doctors-section');
                }}
                className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                  activeTab === 'doctors' ? 'text-[#121212] border-b-2 border-[#C5A880]' : ''
                }`}
              >
                Doctors
              </button>

              <button
                onClick={() => {
                  setActiveTab('offers');
                  scrollToSection('offers-section');
                }}
                className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer text-amber-800 ${
                  activeTab === 'offers' ? 'border-b-2 border-[#C5A880]' : ''
                }`}
              >
                Offers
              </button>

              <button
                onMouseEnter={() => setHoveredMegaMenu('outlets')}
                onClick={() => {
                  setActiveTab('outlets');
                  scrollToSection('outlets-section');
                }}
                className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer flex items-center gap-1 ${
                  activeTab === 'outlets' ? 'text-[#121212] border-b-2 border-[#C5A880]' : ''
                }`}
              >
                <span>Locations</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                  activeTab === 'about' ? 'text-[#121212] border-b-2 border-[#C5A880]' : ''
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                  activeTab === 'contact' ? 'text-[#121212] border-b-2 border-[#C5A880]' : ''
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Right Action buttons */}
            <div className="flex items-center gap-3">
              <a
                href="tel:08046896000"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Call Desk</span>
              </a>

              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-[#121212] hover:bg-[#252525] text-[#C5A880] border border-[#C5A880]/40 font-extrabold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              >
                Schedule Visit
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-stone-800 hover:bg-stone-100 rounded-xl"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Hovered Mega Menu Dropdown */}
        <BodycraftMegaMenu
          activeMenu={hoveredMegaMenu}
          onClose={() => setHoveredMegaMenu(null)}
          onNavigate={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBooking={(cat, service) => {
            setBookingCategory(cat);
            if (service) setBookingService(service);
            setBookingModalOpen(true);
          }}
        />

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-stone-200 px-4 py-4 space-y-3 shadow-2xl animate-fadeIn">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left py-2 border-b border-stone-100 font-bold text-stone-900"
            >
              Home Overview
            </button>
            <button
              onClick={() => {
                setActiveTab('salon');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left py-2 border-b border-stone-100 font-bold text-stone-900"
            >
              Salon Services (Hair, Color, Nails)
            </button>
            <button
              onClick={() => {
                setActiveTab('clinic');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left py-2 border-b border-stone-100 font-bold text-amber-900 flex items-center justify-between"
            >
              <span>Skin Clinic (Doctor-Led)</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100">US-FDA Tech</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('spa');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left py-2 border-b border-stone-100 font-bold text-stone-900"
            >
              Spa & Wellness Massages
            </button>
            <button
              onClick={() => {
                setActiveTab('doctors');
                setMobileMenuOpen(false);
                scrollToSection('doctors-section');
              }}
              className="block w-full text-left py-2 border-b border-stone-100 font-bold text-stone-900"
            >
              Clinical Dermatologists
            </button>
            <button
              onClick={() => {
                setActiveTab('offers');
                setMobileMenuOpen(false);
                scrollToSection('offers-section');
              }}
              className="block w-full text-left py-2 border-b border-stone-100 font-bold text-amber-800"
            >
              Special Offers & Packages
            </button>
            <button
              onClick={() => {
                setActiveTab('outlets');
                setMobileMenuOpen(false);
                scrollToSection('outlets-section');
              }}
              className="block w-full text-left py-2 border-b border-stone-100 font-bold text-stone-900"
            >
              30+ Outlets (Bengaluru, Mumbai, Gurugram, Chennai)
            </button>
            <button
              onClick={() => {
                setActiveTab('about');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left py-2 border-b border-stone-100 font-bold text-stone-900"
            >
              About Bodycraft (Since 1997)
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left py-2 border-b border-stone-100 font-bold text-stone-900"
            >
              Contact Us & Inquiries
            </button>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-[#121212] text-[#C5A880] text-center font-bold text-xs uppercase tracking-wider"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {activeTab === 'salon' && (
          <BodycraftSalonView
            onSelectService={setSelectedServiceForModal}
            onBookService={(cat, svc) => {
              setBookingCategory(cat);
              setBookingService(svc);
              setBookingModalOpen(true);
            }}
          />
        )}

        {activeTab === 'clinic' && (
          <BodycraftClinicView
            onSelectDoctor={setSelectedDoctorForConsult}
            onBookService={(cat, svc) => {
              setBookingCategory(cat);
              setBookingService(svc);
              setBookingModalOpen(true);
            }}
          />
        )}

        {activeTab === 'spa' && (
          <BodycraftSpaView
            onBookService={(cat, svc) => {
              setBookingCategory(cat);
              setBookingService(svc);
              setBookingModalOpen(true);
            }}
          />
        )}

        {activeTab === 'about' && <BodycraftAboutView />}

        {activeTab === 'contact' && <BodycraftContactView onSubmitInquiry={handleContactInquiry} />}

        {/* Home & Overview Views */}
        {(activeTab === 'home' || activeTab === 'doctors' || activeTab === 'offers' || activeTab === 'outlets' || activeTab === 'bridal' || activeTab === 'faq') && (
          <>
            <BodycraftHeroSlider
              onOpenBookingModal={(cat) => {
                if (cat) setBookingCategory(cat);
                setBookingModalOpen(true);
              }}
              onScrollToQuiz={() => scrollToSection('quiz-section')}
              bookingCategory={bookingCategory}
              setBookingCategory={setBookingCategory}
              bookingCity={bookingCity}
              setBookingCity={setBookingCity}
              bookingOutlet={bookingOutlet}
              setBookingOutlet={setBookingOutlet}
              bookingService={bookingService}
              setBookingService={setBookingService}
              guestName={guestName}
              setGuestName={setGuestName}
              guestPhone={guestPhone}
              setGuestPhone={setGuestPhone}
              onBookingSubmit={handleBookingSubmit}
            />

        {/* 5. Trust Metrics Row */}
        <section className="bg-white border-b border-stone-200 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {BODYCRAFT_TRUST_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200/80 space-y-1.5"
                >
                  <div className="text-2xl sm:text-3xl font-black text-[#121212] font-serif">
                    {pillar.stat}
                  </div>
                  <div className="text-xs font-bold text-[#8C7A65] uppercase tracking-wider">
                    {pillar.title}
                  </div>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Signature Services Catalog Section */}
        <section id="services-section" className="py-16 sm:py-20 bg-stone-50/50 border-b border-stone-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <Scissors className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Clinical & Salon Menu</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-serif text-[#121212]">
                  Explore Our Specialized Services
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                  Filter across hair artistry, doctor-led clinical aesthetics, restorative spa massages, and curated bridal journeys.
                </p>
              </div>

              {/* Service Category Buttons */}
              <div className="flex items-center gap-1.5 bg-stone-200/70 p-1.5 rounded-2xl overflow-x-auto">
                {(['all', 'salon', 'clinic', 'spa', 'bridal'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setServiceCategoryFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold capitalize whitespace-nowrap transition-all cursor-pointer ${
                      serviceCategoryFilter === cat
                        ? 'bg-[#121212] text-[#C5A880] shadow-sm'
                        : 'text-stone-700 hover:text-stone-900'
                    }`}
                  >
                    {cat === 'all' ? 'All Services' : cat === 'clinic' ? 'Skin Clinic (Doctor)' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Image container */}
                  <div className="relative h-52 overflow-hidden bg-stone-200">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      {service.badge && (
                        <span className="px-2.5 py-1 rounded-md bg-[#121212]/90 backdrop-blur-xs text-[#C5A880] font-extrabold text-[10px] uppercase tracking-wider border border-[#C5A880]/30 shadow-sm">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/95 text-stone-800 font-bold text-xs shadow-sm">
                      {service.duration}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
                      <span>{service.subCategory}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3
                        onClick={() => setSelectedServiceForModal(service)}
                        className="text-lg font-black font-serif text-[#121212] group-hover:text-[#8C7A65] transition-colors cursor-pointer leading-snug"
                      >
                        {service.name}
                      </h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <div className="mt-3.5 space-y-1.5">
                        {service.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-stone-700">
                            <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase tracking-wider">
                          Starts From
                        </span>
                        <span className="text-lg font-black text-[#121212]">
                          ₹{service.startingPrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedServiceForModal(service)}
                          className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => {
                            setBookingCategory(service.category);
                            setBookingService(service.name);
                            setBookingModalOpen(true);
                          }}
                          className="px-4 py-2 rounded-xl bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Clinical Dermatologists & Aesthetic Doctors Section */}
        <section id="doctors-section" className="py-16 sm:py-20 bg-white border-b border-stone-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                  <Stethoscope className="w-3.5 h-3.5 text-[#8C7A65]" />
                  <span>Medical Faculty</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-serif text-[#121212]">
                  Consult Experienced Dermatologists
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                  Every clinic procedure is led by board-certified dermatologists and cosmetic doctors following rigorous clinical protocols.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedDoctorForConsult(BODYCRAFT_DOCTORS[0]);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#121212] text-[#C5A880] text-xs font-bold uppercase tracking-wider hover:bg-[#222] transition-colors cursor-pointer"
              >
                Request Doctor Consultation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BODYCRAFT_DOCTORS.map(doc => (
                <div
                  key={doc.id}
                  className="bg-stone-50 rounded-3xl border border-stone-200/90 p-6 flex flex-col justify-between space-y-4 hover:border-[#C5A880] transition-colors group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#121212] text-[#C5A880] flex items-center justify-center font-serif text-lg font-bold">
                      Dr
                    </div>

                    <div>
                      <h3 className="font-bold text-base font-serif text-[#121212] group-hover:text-[#8C7A65] transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-[#8C7A65] font-semibold mt-0.5">
                        {doc.qualification}
                      </p>
                      <p className="text-[11px] text-stone-500 font-medium">
                        {doc.designation} · {doc.experience}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-200/70 text-xs text-stone-600 space-y-1">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                        Specialization
                      </span>
                      <p className="text-xs font-medium text-stone-800">
                        {doc.specialization}
                      </p>
                      <p className="text-[11px] text-stone-500 mt-1">
                        📍 {doc.city}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200">
                    <button
                      onClick={() => setSelectedDoctorForConsult(doc)}
                      className="w-full py-2.5 rounded-xl bg-white hover:bg-[#121212] hover:text-[#C5A880] text-stone-900 border border-stone-300 text-xs font-bold transition-all cursor-pointer"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Interactive Skin & Hair Diagnostic Quiz */}
        <section id="quiz-section" className="py-16 bg-gradient-to-br from-[#1A1A1A] via-[#121212] to-[#251E19] text-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C5A880] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Diagnostic Tool</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-serif text-white">
              Not Sure What Your Skin Or Hair Needs?
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto">
              Answer 2 simple questions to find the ideal clinical treatment or salon ritual recommended by our medical team.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 text-left space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="text-stone-300 block mb-1 font-bold">
                    Primary Concern:
                  </label>
                  <select
                    value={quizConcern}
                    onChange={e => setQuizConcern(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-900 text-white border border-stone-700 rounded-xl"
                  >
                    <option value="Dull Skin & Tanning">Dull Skin, Sun Tan & Open Pores</option>
                    <option value="Frizz & Hair Thinning">Frizzy Hair, Hair Fall & Dry Scalp</option>
                    <option value="Ageing & Fine Lines">Anti-Ageing, Forehead Wrinkles & Sagging</option>
                    <option value="Body Contouring & Laser">Unwanted Hair & Stubborn Abdomen Fat</option>
                  </select>
                </div>

                <div>
                  <label className="text-stone-300 block mb-1 font-bold">
                    Age Group:
                  </label>
                  <select
                    value={quizAge}
                    onChange={e => setQuizAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-900 text-white border border-stone-700 rounded-xl"
                  >
                    <option value="Under 25">18 – 24 Years</option>
                    <option value="25–35 Years">25 – 35 Years</option>
                    <option value="36–50 Years">36 – 50 Years</option>
                    <option value="50+ Years">50+ Years</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={runSkinAssessment}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C5A880] hover:bg-[#d8bb91] text-[#121212] font-black text-xs uppercase tracking-wider cursor-pointer"
                >
                  Generate Doctor Recommendation
                </button>

                {quizRecommendation && (
                  <div className="p-3 bg-stone-900/90 border border-[#C5A880]/50 rounded-xl text-xs text-[#E8D5C4] font-medium flex-1">
                    {quizRecommendation}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Exclusive Seasonal Offers Section */}
        <section id="offers-section" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A65]">
                Special Privileges
              </span>
              <h2 className="text-3xl font-black font-serif text-[#121212] mt-1">
                Seasonal Packages & Offers
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-2">
                Enjoy member savings on clinical medifacials, laser sessions, and restorative spa escapes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BODYCRAFT_OFFERS.map(offer => (
                <div
                  key={offer.id}
                  className="bg-white rounded-3xl border border-stone-200 p-6 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-black uppercase tracking-wider">
                      {offer.discount}
                    </span>

                    <h3 className="font-serif font-black text-lg text-[#121212] leading-snug">
                      {offer.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <div className="flex items-center justify-between text-xs bg-stone-50 p-2 rounded-xl font-mono text-stone-700">
                      <button
                        type="button"
                        onClick={() => handleCopyCode(offer.code)}
                        className="flex items-center gap-1.5 hover:text-[#C5A880] cursor-pointer"
                        title="Click to copy promo code"
                      >
                        <Copy className="w-3.5 h-3.5 text-stone-400" />
                        <span>Promo: <strong>{offer.code}</strong></span>
                        {copiedCode === offer.code && (
                          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Copied!</span>
                        )}
                      </button>
                      <span className="text-[10px] text-stone-400">{offer.validity}</span>
                    </div>

                    <button
                      onClick={() => {
                        setBookingCategory(offer.category);
                        setBookingService(offer.title);
                        setGuestNotes(`Applied Promo Code: ${offer.code}`);
                        setBookingModalOpen(true);
                      }}
                      className="w-full py-2.5 rounded-xl bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Avail Offer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Outlets & Locations Section */}
        <section id="outlets-section" className="py-16 sm:py-20 bg-white border-b border-stone-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Find Your Nearest Center</span>
                </div>
                <h2 className="text-3xl font-black font-serif text-[#121212]">
                  30+ Outlets Across 4 Metros
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                  Step into our modern sanctuary lounges in Bengaluru, Mumbai, Gurugram, and Chennai.
                </p>
              </div>

              {/* City Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {(['All', 'Bengaluru', 'Mumbai', 'Gurugram', 'Chennai'] as const).map(city => (
                  <button
                    key={city}
                    onClick={() => setSelectedOutletCity(city)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedOutletCity === city
                        ? 'bg-[#121212] text-[#C5A880] shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOutlets.map(outlet => (
                <div
                  key={outlet.id}
                  className="bg-stone-50/70 hover:bg-white rounded-3xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#8C7A65] uppercase tracking-wider">
                        {outlet.city}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-stone-700 border border-stone-200">
                        {outlet.type}
                      </span>
                    </div>

                    <h3 className="text-base font-black font-serif text-[#121212] group-hover:text-[#8C7A65] transition-colors leading-snug">
                      {outlet.name}
                    </h3>

                    <div className="space-y-2 text-xs text-stone-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{outlet.address}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{outlet.hours}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                        <a href={`tel:${outlet.phone.split('/')[0].trim()}`} className="text-stone-900 font-bold hover:underline">
                          {outlet.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200 flex items-center gap-2">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(outlet.name + ' ' + outlet.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-bold text-center hover:bg-stone-100 transition-colors flex items-center justify-center gap-1"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Directions</span>
                    </a>
                    <button
                      onClick={() => {
                        setBookingCity(outlet.city);
                        setBookingOutlet(outlet.name);
                        setBookingModalOpen(true);
                      }}
                      className="flex-1 py-2 rounded-xl bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold text-center transition-colors cursor-pointer"
                    >
                      Book Branch
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Guest Reviews & Testimonials Section */}
        <section className="py-16 bg-stone-50 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A65]">
                Verified Guest Love
              </span>
              <h2 className="text-3xl font-black font-serif text-[#121212] mt-1">
                30,000+ 5-Star Experiences
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Rated 4.8★ across Google Reviews, Practo, and Justdial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BODYCRAFT_REVIEWS.map(rev => (
                <div
                  key={rev.id}
                  className="bg-white rounded-3xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 shadow-2xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                      "{rev.review}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-stone-900">{rev.guestName}</div>
                      <div className="text-[11px] text-stone-500">{rev.outlet} · {rev.city}</div>
                    </div>
                    <span className="text-[10px] text-stone-400">{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Frequently Asked Questions (FAQ) */}
        <section id="faq-section" className="py-16 bg-white border-b border-stone-200 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A65]">
                Have Questions?
              </span>
              <h2 className="text-3xl font-black font-serif text-[#121212] mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {[
                {
                  id: 'faq-1',
                  q: 'What is a "Hybrid Clinic-Salon" concept?',
                  a: 'Bodycraft combines traditional luxury salon pampering (haircuts, balayage color, bridal makeup, manicures) with advanced clinical dermatology (HydraFacial MD, US-FDA laser hair reduction, CoolSculpting fat loss, Botox, chemical peels) under one roof, guided by certified medical doctors.'
                },
                {
                  id: 'faq-2',
                  q: 'Are clinical skin procedures conducted by certified doctors?',
                  a: 'Yes. All injectable procedures (Botox, Fillers), medical-grade chemical peels, and laser assessments are conducted by our full-time board-certified dermatologists and cosmetic physicians.'
                },
                {
                  id: 'faq-3',
                  q: 'Is Laser Hair Reduction at Bodycraft safe for Indian skin tones?',
                  a: 'Absolutely. We use US-FDA approved triple-wavelength diode and Alexandrite lasers equipped with sub-zero ICE contact cooling tips specifically calibrated for Fitzpatrick skin types III to V, ensuring safe, painless, and effective permanent hair reduction.'
                },
                {
                  id: 'faq-4',
                  q: 'How do I schedule an appointment?',
                  a: 'You can book directly using our website appointment booking tool, call our central helpline at 080 4689 6000, or send an instant message on WhatsApp at +91 95133 93636.'
                }
              ].map(item => {
                const isOpen = expandedFaqId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaqId(isOpen ? null : item.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-stone-900 cursor-pointer hover:bg-stone-100 transition-colors"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-500 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#C5A880]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-stone-600 leading-relaxed border-t border-stone-200/60">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        </>
      )}
      </main>

      {/* 13. Comprehensive Bodycraft Footer */}
      <footer className="bg-[#121212] text-[#A89F91] text-xs pt-16 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Row: Brand & Helpline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white font-serif">bodycraft</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#C5A880] text-[#121212] font-black uppercase tracking-wider">
                  Est. 1997
                </span>
              </div>
              <p className="text-xs text-[#8C7A65] mt-1">
                India's First Hybrid Clinic-Salon · Salon Care Backed by Dermatology Expertise.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-500 block">
                  Central Helpline
                </span>
                <a href="tel:08046896000" className="text-base font-black text-white hover:text-[#C5A880]">
                  080 4689 6000
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-500 block">
                  WhatsApp Concierge
                </span>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-black text-emerald-400 hover:underline"
                >
                  +91 95133 93636
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-500 block">
                  Email Desk
                </span>
                <a href="mailto:customercare@bodycraft.co.in" className="text-xs font-bold text-stone-300 hover:text-white">
                  customercare@bodycraft.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-stone-800 pb-2">
                Salon Care
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li><button onClick={() => { setActiveTab('salon'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Bespoke Precision Haircut</button></li>
                <li><button onClick={() => { setActiveTab('salon'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Kérastase Caviar Hair Spa</button></li>
                <li><button onClick={() => { setActiveTab('salon'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">French Balayage & Glossing</button></li>
                <li><button onClick={() => { setActiveTab('salon'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Botox Hair Restructuring</button></li>
                <li><button onClick={() => { setActiveTab('salon'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Paraffin Luxury Mani-Pedi</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-stone-800 pb-2">
                Skin Clinic (Doctors)
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li><button onClick={() => { setActiveTab('clinic'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">HydraFacial MD Elite (US-FDA)</button></li>
                <li><button onClick={() => { setActiveTab('clinic'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Painless Laser Hair Reduction</button></li>
                <li><button onClick={() => { setActiveTab('clinic'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">CoolSculpting & Onda Contouring</button></li>
                <li><button onClick={() => { setActiveTab('clinic'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Botox & Dermal Volume Fillers</button></li>
                <li><button onClick={() => { setActiveTab('clinic'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Acne Scar & Melasma Peels</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-stone-800 pb-2">
                Luxury Spa & Bridal
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li><button onClick={() => { setActiveTab('spa'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Balinese Aromatherapy</button></li>
                <li><button onClick={() => { setActiveTab('spa'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Deep Tissue Muscle Recovery</button></li>
                <li><button onClick={() => { setActiveTab('spa'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Chocolate Body Polish</button></li>
                <li><button onClick={() => { setActiveTab('home'); scrollToSection('services-section'); }} className="hover:text-white cursor-pointer">Royal Bride 60-Day Regimen</button></li>
                <li><button onClick={() => { setActiveTab('home'); scrollToSection('services-section'); }} className="hover:text-white cursor-pointer">HD Airbrush Bridal Makeup</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-stone-800 pb-2">
                Brand & Centers
              </h4>
              <ul className="space-y-2 text-[11px] text-stone-300">
                <li><button onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">About Bodycraft (Since 1997)</button></li>
                <li><button onClick={() => { setActiveTab('outlets'); scrollToSection('outlets-section'); }} className="hover:text-white cursor-pointer">30+ Centers: Bengaluru · Mumbai · Gurugram · Chennai</button></li>
                <li><button onClick={() => { setActiveTab('offers'); scrollToSection('offers-section'); }} className="hover:text-white cursor-pointer">Seasonal Privileges & Promo Codes</button></li>
                <li><button onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Customer Concierge & Inquiries</button></li>
              </ul>
            </div>
          </div>

          {/* Copyright and RaoSitez Nav */}
          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
            <p>© {new Date().getFullYear()} Bodycraft. Natively recreated experience inside RaoSitez.</p>
            <div className="flex items-center gap-4">
              <a href="https://www.bodycraft.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">
                Official bodycraft.co.in
              </a>
              <span>·</span>
              <button onClick={() => setActiveView('home')} className="hover:text-[#C5A880] cursor-pointer">
                RaoSitez Home
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: Full Appointment Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative my-auto text-stone-900">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black font-serif text-stone-900">
                  Appointment Request Confirmed!
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{guestName}</strong>. Your session for <strong>{bookingService}</strong> at <strong>{bookingOutlet}</strong> has been allocated.
                </p>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                  Our front-desk concierge will call you on {guestPhone} to confirm your preferred timing.
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C7A65] font-bold">
                    Bodycraft Reservation Desk
                  </span>
                  <h3 className="text-xl font-black font-serif text-[#121212]">
                    Book: {bookingService}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shalini Roy"
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 XXXXX"
                        value={guestPhone}
                        onChange={e => setGuestPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">
                        City & Branch
                      </label>
                      <select
                        value={bookingOutlet}
                        onChange={e => setBookingOutlet(e.target.value)}
                        className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                      >
                        {BODYCRAFT_OUTLETS.map(o => (
                          <option key={o.id} value={o.name}>{o.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      Preferred Date & Slot
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Saturday, 3:30 PM"
                      value={bookingDate}
                      onChange={e => setBookingDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      Special Remarks / Skin & Hair History
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sensitive skin / allergic to ammonia"
                      value={guestNotes}
                      onChange={e => setGuestNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#121212] hover:bg-[#252525] text-[#C5A880] font-black rounded-xl uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Send Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: Service Detail Modal */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative my-auto text-stone-900">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs px-2.5 py-1 rounded-md bg-[#121212] text-[#C5A880] font-bold uppercase tracking-wider">
                {selectedServiceForModal.category.toUpperCase()} · {selectedServiceForModal.subCategory}
              </span>

              <h3 className="text-2xl font-black font-serif text-[#121212]">
                {selectedServiceForModal.name}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {selectedServiceForModal.description}
              </p>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs">
                <span className="font-bold text-stone-800 block">Procedure Highlights:</span>
                {selectedServiceForModal.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-stone-700">
                    <Check className="w-4 h-4 text-[#C5A880]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Price</span>
                  <span className="text-xl font-black text-[#121212]">
                    ₹{selectedServiceForModal.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={() => {
                    const svc = selectedServiceForModal;
                    setSelectedServiceForModal(null);
                    setBookingCategory(svc.category);
                    setBookingService(svc.name);
                    setBookingModalOpen(true);
                  }}
                  className="px-6 py-3 rounded-xl bg-[#121212] hover:bg-[#252525] text-[#C5A880] font-black text-xs uppercase tracking-wider cursor-pointer"
                >
                  Book This Treatment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Doctor Consultation Modal */}
      {selectedDoctorForConsult && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative my-auto text-stone-900">
            <button
              onClick={() => setSelectedDoctorForConsult(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {consultSuccess ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-black font-serif text-stone-900">Consultation Scheduled!</h3>
                <p className="text-xs text-stone-600">
                  Thank you, <strong>{consultName}</strong>. Our clinical coordinator will assign an OPD slot with {selectedDoctorForConsult.name}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C7A65] font-bold">
                    Clinical Dermatology Desk
                  </span>
                  <h3 className="text-xl font-black font-serif text-[#121212] mt-0.5">
                    Consult {selectedDoctorForConsult.name}
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    {selectedDoctorForConsult.qualification} · {selectedDoctorForConsult.specialization}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera Joshi"
                      value={consultName}
                      onChange={e => setConsultName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 XXXXX"
                      value={consultPhone}
                      onChange={e => setConsultPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      Primary Clinical Concern *
                    </label>
                    <select
                      value={consultConcern}
                      onChange={e => setConsultConcern(e.target.value)}
                      className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl font-semibold"
                    >
                      <option value="Acne & Pigmentation">Active Acne & Melasma Hyperpigmentation</option>
                      <option value="Laser Hair Reduction">Permanent Laser Hair Reduction</option>
                      <option value="CoolSculpting & Fat Loss">CoolSculpting & Non-Surgical Body Contouring</option>
                      <option value="Anti-Ageing & Fillers">Anti-Ageing Wrinkle Relaxers & Fillers</option>
                      <option value="Hair Fall & Thinning">Hair Thinning, Alopecia & Scalp Health</option>
                      <option value="General Dermatology Consultation">General Skin & Scalp Diagnostic</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#121212] hover:bg-[#252525] text-[#C5A880] font-black rounded-xl uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Book Doctor Consultation (@ ₹499)
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
