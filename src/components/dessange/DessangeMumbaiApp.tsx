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
  Compass,
  Copy,
  Layers,
  Palette
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  DESSANGE_SERVICES,
  DESSANGE_STYLISTS,
  DESSANGE_LOCATIONS,
  DESSANGE_REVIEWS,
  DessangeService,
  DessangeStylist,
  DessangeLocation
} from '../../data/dessangeData';

export type DessangeTab =
  | 'home'
  | 'services'
  | 'balayage'
  | 'about'
  | 'team'
  | 'locations'
  | 'contact';

export const DessangeMumbaiApp: React.FC = () => {
  const { submitLead, setActiveView } = useApp();

  // Navigation tab
  const [activeTab, setActiveTab] = useState<DessangeTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Service filter states
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'haircut' | 'balayage' | 'treatments' | 'skincare' | 'makeup' | 'manipedi'
  >('all');
  const [serviceSearchQuery, setServiceSearchQuery] = useState('');

  // Selected Location for details
  const [activeLocationId, setActiveLocationId] = useState<string>('loc-bandra');

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingLocation, setBookingLocation] = useState<string>('Bandra West Flagship (Turner Road)');
  const [bookingService, setBookingService] = useState<string>('The Inimitable Dessange Californian Balayage');
  const [bookingDate, setBookingDate] = useState<string>('Tomorrow, 11:30 AM');
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestNotes, setGuestNotes] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingConfirmationId, setBookingConfirmationId] = useState<string>('');

  // Service Detail Modal
  const [detailService, setDetailService] = useState<DessangeService | null>(null);

  // Filtered Services
  const filteredServices = useMemo(() => {
    return DESSANGE_SERVICES.filter(service => {
      if (selectedCategory !== 'all' && service.category !== selectedCategory) {
        return false;
      }
      if (serviceSearchQuery.trim()) {
        const q = serviceSearchQuery.toLowerCase();
        const matchName = service.name.toLowerCase().includes(q);
        const matchCat = service.categoryLabel.toLowerCase().includes(q);
        const matchDesc = service.description.toLowerCase().includes(q);
        if (!matchName && !matchCat && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, serviceSearchQuery]);

  const activeLocation = useMemo(() => {
    return DESSANGE_LOCATIONS.find(l => l.id === activeLocationId) || DESSANGE_LOCATIONS[0];
  }, [activeLocationId]);

  // Open booking modal with pre-selected service
  const handleOpenBookingWithService = (serviceName: string) => {
    setBookingService(serviceName);
    setBookingSuccess(false);
    setBookingModalOpen(true);
  };

  // Open booking modal with pre-selected location
  const handleOpenBookingWithLocation = (locName: string) => {
    setBookingLocation(locName);
    setBookingSuccess(false);
    setBookingModalOpen(true);
  };

  // Handle appointment submission
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;

    const confId = `DES-MUM-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingConfirmationId(confId);

    // Save lead through AppContext
    submitLead({
      websiteSlug: 'dessange-mumbai',
      businessName: 'DESSANGE Mumbai (Parisian Luxury Salon)',
      customerName: guestName,
      customerPhone: guestPhone,
      customerEmail: guestEmail,
      serviceRequested: `${bookingService} at ${bookingLocation} (${bookingDate})`,
      message: guestNotes || 'Requested via DESSANGE Mumbai Online Concierge',
      status: 'new'
    });

    setBookingSuccess(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `*DESSANGE MUMBAI — APPOINTMENT RESERVATION*\n\n` +
      `*Name:* ${guestName || 'Valued Guest'}\n` +
      `*Phone:* ${guestPhone || 'Mobile'}\n` +
      `*Salon Location:* ${bookingLocation}\n` +
      `*Service Requested:* ${bookingService}\n` +
      `*Preferred Slot:* ${bookingDate}\n` +
      (guestNotes ? `*Special Notes:* ${guestNotes}\n\n` : `\n`) +
      `Please confirm my luxury appointment at DESSANGE Paris.`
    );
    window.open(`https://wa.me/917304308957?text=${text}`, '_blank');
  };

  const scrollToSection = (tab: DessangeTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#F3EFEA] font-['Inter',sans-serif] selection:bg-[#C5A880] selection:text-black">
      {/* 1. Global Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="dessange-mumbai" />

      {/* 2. Global Back to RaoSitez Home Bar */}
      <div className="bg-[#141414] text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('home')}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#C5A880] font-semibold transition-colors cursor-pointer"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              <span>Back to RaoSitez Home</span>
            </button>
            <span className="text-stone-700">|</span>
            <span className="hidden sm:inline text-stone-400">
              Verified Luxury Salon & Spa Flagship
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-stone-400 hidden md:inline">
              Official Reference:
            </span>
            <a
              href="https://www.dessangemumbai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#C5A880] hover:underline font-bold text-xs"
            >
              <span>dessangemumbai.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Top Heritage & Cannes Partner Banner */}
      <div className="bg-gradient-to-r from-[#171410] via-[#241E17] to-[#171410] text-[#D8C7B0] text-[11px] font-bold tracking-widest uppercase py-2.5 px-4 text-center border-b border-[#C5A880]/30 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span className="text-[#C5A880]">✦</span>
        <span>HAUTE COIFFURE FRANÇAISE</span>
        <span className="text-[#C5A880] hidden sm:inline">•</span>
        <span className="hidden sm:inline">OFFICIAL BEAUTY PARTNER OF THE CANNES FILM FESTIVAL SINCE 1958</span>
        <span className="text-[#C5A880]">✦</span>
        <span>MUMBAI: BANDRA · KEMP'S CORNER · LOWER PAREL</span>
      </div>

      {/* 4. Luxury Parisian Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-stone-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-white rounded-lg cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => scrollToSection('home')}
              className="text-left cursor-pointer group flex flex-col"
            >
              <div className="flex items-center gap-2">
                <span className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-black tracking-[0.18em] text-white group-hover:text-[#C5A880] transition-colors uppercase">
                  DESSANGE
                </span>
                <span className="text-[10px] tracking-[0.3em] font-light text-[#C5A880] uppercase border-l border-stone-700 pl-2">
                  PARIS
                </span>
              </div>
              <span className="text-[9px] tracking-[0.25em] text-stone-400 uppercase font-mono block -mt-0.5">
                MUMBAI · BANDRA · KEMP'S CORNER · LOWER PAREL
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-widest text-stone-300">
            <button
              onClick={() => scrollToSection('home')}
              className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                activeTab === 'home' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                activeTab === 'services' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('balayage')}
              className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                activeTab === 'balayage' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              Californian Balayage
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                activeTab === 'about' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              The House
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                activeTab === 'team' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              Master Team
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className={`hover:text-[#C5A880] transition-colors py-1 cursor-pointer ${
                activeTab === 'locations' ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : ''
              }`}
            >
              Salons
            </button>
          </nav>

          {/* Primary Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+917304308957"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-stone-300 hover:text-white border border-stone-800 hover:border-stone-600 rounded-xl text-xs font-semibold tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Concierge</span>
            </a>

            <button
              onClick={() => {
                setBookingSuccess(false);
                setBookingModalOpen(true);
              }}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A880] to-[#E2CFB4] hover:from-[#B49468] hover:to-[#D4AF37] text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121212] border-b border-stone-800 px-6 py-5 space-y-3 text-sm font-semibold tracking-wider uppercase text-stone-300">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 border-b border-stone-800 hover:text-[#C5A880]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 border-b border-stone-800 hover:text-[#C5A880]"
            >
              Haute Coiffure & Spa Services
            </button>
            <button
              onClick={() => scrollToSection('balayage')}
              className="block w-full text-left py-2 border-b border-stone-800 hover:text-[#C5A880]"
            >
              The Inimitable Californian Balayage
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 border-b border-stone-800 hover:text-[#C5A880]"
            >
              About The House & Cannes Legacy
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left py-2 border-b border-stone-800 hover:text-[#C5A880]"
            >
              Paris-Trained Master Stylists
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className="block w-full text-left py-2 border-b border-stone-800 hover:text-[#C5A880]"
            >
              Mumbai Salons (Bandra, Kemp's Corner, Lower Parel)
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full py-3 bg-[#C5A880] text-black font-bold rounded-xl text-center uppercase tracking-wider"
              >
                Reserve Your Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* VIEW 1: HOME */}
      {activeTab === 'home' && (
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center bg-[#0B0B0B] text-white overflow-hidden">
            {/* Background Hero Image with Cinema Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1800&q=85"
                alt="DESSANGE Paris Mumbai Luxury Salon"
                className="w-full h-full object-cover opacity-35 scale-105 transform animate-pulse duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-black/60" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
              <div className="max-w-2xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1712] border border-[#C5A880]/50 text-[#E8D7C0] text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>French Savoir-Faire Since 1954</span>
                </div>

                <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                  Haute Coiffure. <br />
                  <span className="text-[#C5A880] italic font-normal">Parisian Luxury.</span>
                </h1>

                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light max-w-xl">
                  Step into the refined world of DESSANGE Paris across Bandra, Kemp's Corner, and Lower Parel. Official Beauty Partner of the Cannes Film Festival, pioneering the world-renowned Californian Balayage, precision French haircuts, and bespoke restorative rituals.
                </p>

                {/* Primary Hero CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      setBookingSuccess(false);
                      setBookingModalOpen(true);
                    }}
                    className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#C5A880] to-[#E2CFB4] hover:from-[#B49468] hover:to-[#D4AF37] text-stone-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center gap-2 cursor-pointer"
                  >
                    <span>Reserve An Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => scrollToSection('services')}
                    className="px-6 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Explore Signature Menu
                  </button>
                </div>

                {/* Cannes Ribbon Citation */}
                <div className="pt-6 border-t border-stone-800/80 flex items-center gap-6 text-stone-400 text-xs">
                  <div>
                    <span className="text-white font-bold block text-lg font-['Playfair_Display',serif]">65+ Years</span>
                    <span className="text-[11px] text-stone-400 uppercase tracking-wider">Cannes Official Partner</span>
                  </div>
                  <div className="w-px h-8 bg-stone-800" />
                  <div>
                    <span className="text-white font-bold block text-lg font-['Playfair_Display',serif]">3 Flagships</span>
                    <span className="text-[11px] text-stone-400 uppercase tracking-wider">Bandra · Kemp's · Parel</span>
                  </div>
                  <div className="w-px h-8 bg-stone-800" />
                  <div>
                    <span className="text-white font-bold block text-lg font-['Playfair_Display',serif]">100%</span>
                    <span className="text-[11px] text-stone-400 uppercase tracking-wider">Paris-Certified Masters</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Highlight: The Inimitable Californian Balayage */}
          <section className="py-20 bg-[#141414] border-t border-b border-stone-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase block">
                    Pioneered By Jacques Dessange
                  </span>
                  <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                    The Inimitable <br />
                    <span className="italic font-normal text-[#C5A880]">Californian Balayage</span>
                  </h2>
                  <p className="text-sm text-stone-300 leading-relaxed font-light">
                    Unlike standard foil highlights that create harsh artificial stripes, the Dessange Balayage is painted free-hand using pure cotton pads. This legendary technique produces soft, graduated roots with luminous sun-kissed reflection that grows out seamlessly for months.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs text-stone-300">
                        <strong className="text-white font-semibold">Cotton-Pad Hand Painting:</strong> Eliminates heat trapped by foil, preserving cuticular hydration and fiber elasticity.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs text-stone-300">
                        <strong className="text-white font-semibold">Effortless Regrowth:</strong> Natural graduation means no harsh root demarcation lines even after 12-16 weeks.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs text-stone-300">
                        <strong className="text-white font-semibold">Bespoke French Gloss Glaze:</strong> Custom-toned in cool blonde, honey champagne, or mocha hazelnut for high-definition shine.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => handleOpenBookingWithService('The Inimitable Dessange Californian Balayage')}
                      className="px-6 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#B49468] text-stone-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                    >
                      Book Balayage Consultation
                    </button>
                    <button
                      onClick={() => scrollToSection('balayage')}
                      className="text-xs font-semibold text-stone-300 hover:text-[#C5A880] underline cursor-pointer"
                    >
                      Learn Technique Details →
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
                    <img
                      src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80"
                      alt="Californian Balayage by DESSANGE"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Luxe Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-[#1A1A1A] border border-[#C5A880]/40 p-5 rounded-2xl shadow-xl max-w-xs space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase font-bold">
                      Paris Secret
                    </span>
                    <h4 className="text-sm font-bold text-white font-['Playfair_Display',serif]">
                      Zero Foil Demarcation
                    </h4>
                    <p className="text-[11px] text-stone-400">
                      Signature cotton pads applied by French certified color directors in Bandra, Kemp's Corner & Lower Parel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Pillars of Parisian Luxury */}
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase">
                The House of Beauty
              </span>
              <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-white">
                Three Pillars of French Excellence
              </h2>
              <p className="text-xs text-stone-400">
                A sanctuary dedicated entirely to the enhancement of women's natural elegance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-[#141414] p-8 rounded-3xl border border-stone-800/80 space-y-4 hover:border-[#C5A880]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1712] border border-[#C5A880]/30 text-[#C5A880] flex items-center justify-center">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
                  Haute Coiffure & Cuts
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Sculpted dry contour haircutting that respects your natural hair texture and face shape, paired with customized Kérastase caviar ceremonies.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('haircut');
                    scrollToSection('services');
                  }}
                  className="text-xs font-semibold text-[#C5A880] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Haircuts</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Pillar 2 */}
              <div className="bg-[#141414] p-8 rounded-3xl border border-stone-800/80 space-y-4 hover:border-[#C5A880]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1712] border border-[#C5A880]/30 text-[#C5A880] flex items-center justify-center">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
                  Californian Balayage
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Pioneered in Paris by Jacques Dessange. Master hand-painted highlights, ammonia-free French gloss toners, and customized dimensional illumination.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('balayage');
                    scrollToSection('services');
                  }}
                  className="text-xs font-semibold text-[#C5A880] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Balayage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Pillar 3 */}
              <div className="bg-[#141414] p-8 rounded-3xl border border-stone-800/80 space-y-4 hover:border-[#C5A880]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1712] border border-[#C5A880]/30 text-[#C5A880] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
                  Prestigious Skincare
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Huiles & Terres Précieuses ancestral clay rituals, revitalizing marine facials, red-carpet Cannes makeup, and warm volcanic stone pedicures.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('skincare');
                    scrollToSection('services');
                  }}
                  className="text-xs font-semibold text-[#C5A880] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Skincare</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* Quick Menu Showcase */}
          <section className="py-20 bg-[#121212] border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
                <div>
                  <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase">
                    Haute Coiffure & Spa Menu
                  </span>
                  <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-white">
                    Signature Experiences
                  </h2>
                </div>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-xs font-bold uppercase tracking-wider text-[#C5A880] hover:underline cursor-pointer"
                >
                  View All 18 Services →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {DESSANGE_SERVICES.slice(0, 3).map(service => (
                  <div
                    key={service.id}
                    className="bg-[#1A1A1A] rounded-3xl border border-stone-800 overflow-hidden shadow-lg flex flex-col justify-between group hover:border-[#C5A880]/50 transition-all"
                  >
                    <div>
                      <div className="h-56 relative overflow-hidden">
                        <img
                          src={service.imageUrl}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {service.badge && (
                          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1A1A1A]/90 backdrop-blur-md text-[#C5A880] text-[10px] font-bold uppercase tracking-wider border border-[#C5A880]/30">
                            {service.badge}
                          </span>
                        )}
                        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-white text-[10px] font-mono">
                          {service.duration}
                        </span>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="text-xs text-[#C5A880] uppercase font-mono tracking-wider">
                          {service.categoryLabel}
                        </div>
                        <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white group-hover:text-[#C5A880] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-stone-800/80 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase text-stone-500 font-mono block">From</span>
                        <span className="text-base font-bold text-white font-mono">
                          ₹{service.startingPrice}
                        </span>
                      </div>

                      <button
                        onClick={() => handleOpenBookingWithService(service.name)}
                        className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-[#C5A880] hover:text-black text-stone-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Book Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3 Mumbai Locations Strip */}
          <section className="py-20 bg-[#0E0E0E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase">
                  Flagship Sanctuaries
                </span>
                <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-white">
                  Three Prestigious Mumbai Addresses
                </h2>
                <p className="text-xs text-stone-400">
                  Designed with Parisian marble, warm champagne accents, and private treatment suites.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {DESSANGE_LOCATIONS.map(loc => (
                  <div
                    key={loc.id}
                    className="bg-[#141414] rounded-3xl border border-stone-800 overflow-hidden shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={loc.imageUrl}
                          alt={loc.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <span className="absolute bottom-3 left-3 text-sm font-bold text-white font-['Playfair_Display',serif]">
                          {loc.neighborhood}
                        </span>
                      </div>

                      <div className="p-6 space-y-4">
                        <h3 className="text-base font-bold text-white">{loc.name}</h3>
                        <p className="text-xs text-stone-400 leading-relaxed flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{loc.address}</span>
                        </p>
                        <p className="text-xs text-stone-400 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                          <span>{loc.hours}</span>
                        </p>
                        <p className="text-xs text-stone-400 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                          <span>{loc.phoneNumbers.join(' · ')}</span>
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 space-y-2">
                      <div className="flex items-center gap-3">
                        <a
                          href={loc.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 rounded-xl border border-stone-700 hover:border-[#C5A880] text-center text-xs font-semibold text-stone-200 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                          <span>Get Directions</span>
                        </a>

                        <button
                          onClick={() => handleOpenBookingWithLocation(loc.name)}
                          className="flex-1 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#B49468] text-stone-950 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Book Here
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Quote Banner */}
          <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0E0E0E] border-t border-stone-800 text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="flex justify-center text-[#C5A880] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="font-['Playfair_Display',serif] text-xl sm:text-3xl text-white italic leading-relaxed">
                "The only salon in Mumbai that gets French balayage exactly right! Subtlety, grace, and hair health. Truly feels like being on Avenue Montaigne in Paris."
              </blockquote>
              <div className="text-xs uppercase tracking-widest text-[#C5A880] font-mono">
                — Natasha Poonawalla · Kemp's Corner Flagship
              </div>
            </div>
          </section>
        </main>
      )}

      {/* VIEW 2: ALL SERVICES CATALOG */}
      {activeTab === 'services' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              Full Treatment Menu
            </span>
            <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl font-bold text-white">
              Haute Coiffure, Beauty & Spa
            </h1>
            <p className="text-xs text-stone-400">
              Select your category below or search for specific hair, skin, and nail therapies.
            </p>
          </div>

          {/* Category Filter Pills & Search */}
          <div className="mb-10 space-y-5">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={serviceSearchQuery}
                onChange={e => setServiceSearchQuery(e.target.value)}
                placeholder="Search services (e.g. Balayage, Caviar, Facial, Haircut)..."
                className="w-full bg-[#181818] border border-stone-800 rounded-2xl pl-11 pr-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
              />
              {serviceSearchQuery && (
                <button
                  onClick={() => setServiceSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'haircut', label: 'Hair Cut & Blowout' },
                { id: 'balayage', label: 'Californian Balayage & Color' },
                { id: 'treatments', label: 'Kérastase & Hair Spa' },
                { id: 'skincare', label: 'Skin Care & Facials' },
                { id: 'makeup', label: 'Make Up & Bridal' },
                { id: 'manipedi', label: 'Mani-Pedi Rituals' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#C5A880] text-black font-bold shadow-md'
                      : 'bg-[#181818] text-stone-300 hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="bg-[#141414] rounded-3xl border border-stone-800 overflow-hidden shadow-lg flex flex-col justify-between hover:border-[#C5A880]/50 transition-all group"
              >
                <div>
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {service.badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#C5A880] text-[10px] font-bold uppercase tracking-wider border border-[#C5A880]/30">
                        {service.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/85 text-stone-200 text-[10px] font-mono">
                      {service.duration}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-[11px] text-[#C5A880] uppercase font-mono tracking-widest">
                      {service.categoryLabel}
                    </div>
                    <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white group-hover:text-[#C5A880] transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div className="pt-2 space-y-1">
                      {service.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-stone-300">
                          <Check className="w-3 h-3 text-[#C5A880] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-800/80 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-stone-500 font-mono block">From</span>
                    <span className="text-lg font-bold text-white font-mono">
                      ₹{service.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenBookingWithService(service.name)}
                    className="px-5 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#B49468] text-stone-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 space-y-3">
              <p className="text-stone-400 text-sm">No treatments found matching "{serviceSearchQuery}".</p>
              <button
                onClick={() => {
                  setServiceSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 rounded-xl bg-stone-800 text-white text-xs font-bold"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </main>
      )}

      {/* VIEW 3: BALAYAGE DEEP DIVE */}
      {activeTab === 'balayage' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              The Parisian Secret
            </span>
            <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-6xl font-bold text-white">
              The Californian Balayage
            </h1>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Invented by Jacques Dessange in Paris, this master color technique has illuminated the crowns of royalty, supermodels, and Cannes red-carpet icons for over 60 years.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80"
                alt="Balayage application"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white">
                How It Works: Cotton Over Foil
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Traditional foil heats up rapidly, cooking the hair fiber and creating harsh zebra-like striping at the root. The Dessange technique uses custom-cut surgical cotton pads that gently separate sections while color develops at ambient temperature.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#141414] border border-stone-800">
                  <h4 className="text-sm font-bold text-[#C5A880] mb-1">1. Bespoke Section Mapping</h4>
                  <p className="text-xs text-stone-400">
                    Your colorist analyzes where natural sunlight hits your face and hair movement to position light graduation precisely.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#141414] border border-stone-800">
                  <h4 className="text-sm font-bold text-[#C5A880] mb-1">2. Freehand Cotton Painting</h4>
                  <p className="text-xs text-stone-400">
                    Gentle lightener is painted on the surface with feather-light brush strokes, diffusing softly toward root bases.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#141414] border border-stone-800">
                  <h4 className="text-sm font-bold text-[#C5A880] mb-1">3. French Acidic Gloss Glaze</h4>
                  <p className="text-xs text-stone-400">
                    Seals the cuticle with a mirror-shine acidic gloss toner to neutralize unwanted yellow or brassy tones without damage.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenBookingWithService('The Inimitable Dessange Californian Balayage')}
                  className="px-6 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#B49468] text-stone-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Book Your Balayage Appointment
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* VIEW 4: THE HOUSE / ABOUT */}
      {activeTab === 'about' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              French Haute Coiffure
            </span>
            <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-6xl font-bold text-white">
              The House of Dessange
            </h1>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Founded in 1954 on the prestigious Avenue Franklin Roosevelt in Paris by Jacques Dessange, creating a global benchmark of feminine charm and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white">
                Official Beauty Partner to Cannes
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                For over 6 decades, DESSANGE has presided backstage at the Cannes Film Festival, styling the world's most celebrated directors, jury members, and actresses for the red carpet staircase.
              </p>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                In Mumbai, this same pedigree lives across our sanctuaries in Bandra West, Kemp's Corner, and Lower Parel. Every stylist undergoes rigorous certification at the Paris Academy, bringing authentic Parisian chic to Indian hair textures and styles.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => scrollToSection('locations')}
                  className="px-6 py-3 rounded-xl bg-[#C5A880] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#B49468]"
                >
                  Visit Our Mumbai Salons
                </button>
              </div>
            </div>

            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
                alt="House of Dessange Paris"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </main>
      )}

      {/* VIEW 5: MASTER TEAM */}
      {activeTab === 'team' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              Paris-Certified Artists
            </span>
            <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl font-bold text-white">
              Our Master Creative Team
            </h1>
            <p className="text-xs text-stone-400">
              Trained in the timeless techniques of Jacques Dessange Avenue Montaigne, Paris.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DESSANGE_STYLISTS.map(stylist => (
              <div
                key={stylist.id}
                className="bg-[#141414] rounded-3xl border border-stone-800 overflow-hidden shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={stylist.imageUrl}
                      alt={stylist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[11px] font-mono text-[#C5A880]">
                      {stylist.location}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white">
                      {stylist.name}
                    </h3>
                    <p className="text-xs text-[#C5A880] font-semibold">{stylist.title}</p>
                    <p className="text-[11px] text-stone-400 font-mono">{stylist.experience}</p>
                    <p className="text-xs text-stone-300 font-light leading-relaxed pt-2">
                      {stylist.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      setBookingService(`Consultation with ${stylist.name}`);
                      setBookingLocation(stylist.location);
                      setBookingModalOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl border border-stone-700 hover:border-[#C5A880] text-stone-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Request Stylist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* VIEW 6: LOCATIONS */}
      {activeTab === 'locations' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              Mumbai Salons & Spas
            </span>
            <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl font-bold text-white">
              Bandra · Kemp's Corner · Lower Parel
            </h1>
            <p className="text-xs text-stone-400">
              Each sanctuary features private consultation areas, Kérastase wash lounges, and complimentary valet service.
            </p>
          </div>

          <div className="space-y-10">
            {DESSANGE_LOCATIONS.map((loc, idx) => (
              <div
                key={loc.id}
                className="bg-[#141414] rounded-3xl border border-stone-800 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden">
                  <img
                    src={loc.imageUrl}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[#C5A880] text-xs font-mono font-bold uppercase">
                    Location 0{idx + 1}
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#C5A880] tracking-widest uppercase block mb-1">
                      {loc.neighborhood}
                    </span>
                    <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white">
                      {loc.name}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <span className="text-stone-500 font-mono uppercase tracking-wider block">Address</span>
                      <p className="text-stone-300 leading-relaxed">{loc.address}</p>
                      <p className="text-stone-400 italic">Landmark: {loc.landmark}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-stone-500 font-mono uppercase tracking-wider block">Operating Hours</span>
                      <p className="text-stone-300 font-semibold">{loc.hours}</p>
                      <span className="text-stone-500 font-mono uppercase tracking-wider block pt-2">Direct Phones</span>
                      <p className="text-stone-300">{loc.phoneNumbers.join(', ')}</p>
                      <p className="text-stone-400">{loc.email}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={loc.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl border border-stone-700 hover:border-[#C5A880] text-stone-200 text-xs font-semibold tracking-wider transition-colors flex items-center gap-2"
                    >
                      <Compass className="w-4 h-4 text-[#C5A880]" />
                      <span>Get Directions on Google Maps</span>
                    </a>

                    <button
                      onClick={() => handleOpenBookingWithLocation(loc.name)}
                      className="px-6 py-3 rounded-xl bg-[#C5A880] hover:bg-[#B49468] text-stone-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                    >
                      Reserve at this Salon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* 5. Luxury Parisian Footer */}
      <footer className="bg-[#0A0A0A] border-t border-stone-800 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand Story */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2">
                <span className="font-['Playfair_Display',serif] text-2xl font-black tracking-widest text-white uppercase">
                  DESSANGE
                </span>
                <span className="text-[10px] tracking-widest text-[#C5A880] uppercase">
                  PARIS
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Haute Coiffure Française and luxury aesthetics. Official Beauty Partner of the Cannes Film Festival since 1958.
              </p>
              <div className="text-[11px] text-[#C5A880] font-mono">
                Bandra · Kemp's Corner · Lower Parel
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs font-mono">
                Explore
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-[#C5A880] cursor-pointer">
                    Full Service Menu
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('balayage')} className="hover:text-[#C5A880] cursor-pointer">
                    The Californian Balayage
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-[#C5A880] cursor-pointer">
                    The House of Dessange
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('team')} className="hover:text-[#C5A880] cursor-pointer">
                    Master Stylists & Directors
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('locations')} className="hover:text-[#C5A880] cursor-pointer">
                    Salon Locations & Hours
                  </button>
                </li>
              </ul>
            </div>

            {/* Mumbai Outlets */}
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs font-mono">
                Mumbai Salons
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <strong className="text-stone-200 block">Bandra West Flagship</strong>
                  <span>Turner Road, near Rolex Showroom</span>
                  <br />
                  <a href="tel:+917304308957" className="text-[#C5A880] hover:underline">+91 73043 08957</a>
                </li>
                <li>
                  <strong className="text-stone-200 block">Kemp's Corner Flagship</strong>
                  <span>Chinoy Mansion, Warden Road</span>
                  <br />
                  <a href="tel:+917304338957" className="text-[#C5A880] hover:underline">+91 73043 38957</a>
                </li>
                <li>
                  <strong className="text-stone-200 block">Lower Parel Palladium</strong>
                  <span>2nd Floor, Palladium Mall</span>
                  <br />
                  <a href="tel:+919004330073" className="text-[#C5A880] hover:underline">+91 90043 30073</a>
                </li>
              </ul>
            </div>

            {/* Concierge & Hours */}
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs font-mono">
                Concierge Desk
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Open Daily: 10:00 AM – 9:00 PM IST
              </p>
              <div className="space-y-1 text-xs">
                <div className="text-stone-300 font-semibold">General Inquiries</div>
                <div className="text-stone-400">admin@dessangemumbai.com</div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    setBookingModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#B49468] text-stone-950 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Book Online
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
            <div>© {new Date().getFullYear()} DESSANGE Paris (Mumbai). All rights reserved.</div>
            <div className="flex items-center gap-4">
              <span>Haute Coiffure Française</span>
              <span>•</span>
              <span>Cannes Film Festival Official Partner</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 6. Sticky Mobile Booking Action Strip */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#121212]/95 backdrop-blur-md border-t border-stone-800 p-3 px-4 flex items-center justify-between gap-3">
        <a
          href="tel:+917304308957"
          className="flex-1 py-2.5 rounded-xl border border-stone-700 text-center text-xs font-bold text-stone-200 flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Call Salon</span>
        </a>
        <button
          onClick={() => {
            setBookingSuccess(false);
            setBookingModalOpen(true);
          }}
          className="flex-1 py-2.5 rounded-xl bg-[#C5A880] text-stone-950 text-center text-xs font-bold uppercase tracking-wider shadow-md"
        >
          Book Appointment
        </button>
      </div>

      {/* 7. Interactive Appointment Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#141414] border border-stone-800 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                  Haute Coiffure Concierge
                </span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
                  Reserve Your Appointment
                </h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">
                  Reservation Confirmed
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Thank you, <strong className="text-white">{guestName}</strong>. Your appointment request for <strong className="text-[#C5A880]">{bookingService}</strong> at <strong className="text-white">{bookingLocation}</strong> on <strong className="text-white">{bookingDate}</strong> has been logged.
                </p>
                <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-xs font-mono text-stone-400">
                  Confirmation Code: <strong className="text-[#C5A880]">{bookingConfirmationId}</strong>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp to Concierge</span>
                  </button>

                  <button
                    onClick={() => setBookingModalOpen(false)}
                    className="w-full py-2.5 rounded-xl border border-stone-700 text-stone-300 text-xs font-semibold"
                  >
                    Close & Return to Website
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Salon Location */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Select Mumbai Salon
                  </label>
                  <select
                    value={bookingLocation}
                    onChange={e => setBookingLocation(e.target.value)}
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Bandra West Flagship (Turner Road)">Bandra West Flagship (Turner Road)</option>
                    <option value="Kemp's Corner Flagship (Warden Road)">Kemp's Corner Flagship (Warden Road)</option>
                    <option value="Lower Parel Palladium (High Street Phoenix)">Lower Parel Palladium (High Street Phoenix)</option>
                  </select>
                </div>

                {/* Treatment / Service */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Service Requested
                  </label>
                  <select
                    value={bookingService}
                    onChange={e => setBookingService(e.target.value)}
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    {DESSANGE_SERVICES.map(s => (
                      <option key={s.id} value={s.name}>
                        {s.name} (from ₹{s.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="text"
                      value={bookingDate}
                      onChange={e => setBookingDate(e.target.value)}
                      placeholder="e.g. Tomorrow, 11:30 AM"
                      className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={e => setGuestPhone(e.target.value)}
                      placeholder="+91 98200 XXXXX"
                      className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                {/* Guest Name & Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                      Guest Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      placeholder="e.g. Priya Singhania"
                      className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={guestEmail}
                      onChange={e => setGuestEmail(e.target.value)}
                      placeholder="priya@example.com"
                      className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Stylist Preference or Hair History
                  </label>
                  <textarea
                    rows={2}
                    value={guestNotes}
                    onChange={e => setGuestNotes(e.target.value)}
                    placeholder="Tell us about your hair goals, previous chemical treatments, or specific stylist request..."
                    className="w-full bg-[#1C1C1C] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A880] to-[#E2CFB4] hover:from-[#B49468] hover:to-[#D4AF37] text-stone-950 font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
                  >
                    Confirm Luxury Reservation
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
