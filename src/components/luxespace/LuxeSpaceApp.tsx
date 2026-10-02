import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Check,
  CheckCircle2,
  Building2,
  ArrowRight,
  Menu,
  X,
  Layers,
  LayoutGrid,
  ShieldCheck,
  Camera,
  Heart,
  Calculator,
  Compass,
  Maximize2
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  LUXESPACE_PACKAGES,
  LUXESPACE_CELEBRATIONS,
  LUXESPACE_EXPERIENCE_TIERS,
  LUXESPACE_FAQS,
  LUXESPACE_GALLERY,
  LuxeSpacePackage
} from './luxeSpaceData';
import { BookTourModal } from './BookTourModal';
import { FloorPlanPlannerModal } from './FloorPlanPlannerModal';
import { WeddingQuoteModal } from './WeddingQuoteModal';
import { GalleryLightboxModal } from './GalleryLightboxModal';

export const LuxeSpaceApp: React.FC = () => {
  // Page Title & Scroll
  useEffect(() => {
    document.title = 'LuxeSpace HTX | Designed for the Refined | Houston Wedding & Event Venue';
    window.scrollTo(0, 0);
  }, []);

  // Modals state
  const [bookTourOpen, setBookTourOpen] = useState(false);
  const [floorPlanOpen, setFloorPlanOpen] = useState(false);
  const [quoteCalculatorOpen, setQuoteCalculatorOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Active section nav filter / view
  const [activeTab, setActiveTab] = useState<'venue' | 'weddings' | 'celebrations' | 'experience' | 'gallery'>('venue');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Gallery filter
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'weddings' | 'receptions' | 'architectural' | 'cocktail_lounge'>('all');

  const filteredGallery = galleryFilter === 'all'
    ? LUXESPACE_GALLERY
    : LUXESPACE_GALLERY.filter((item) => item.category === galleryFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0D0B] text-[#F4EFE6] font-sans selection:bg-[#c5a059] selection:text-black">
      {/* 1. Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="luxespace-htx" />

      {/* 2. Primary Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#0E0D0B]/95 backdrop-blur-md border-b border-[#24211a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#venue"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('venue');
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border border-[#c5a059]/60 flex items-center justify-center bg-[#181612] text-[#c5a059] font-serif text-sm font-bold shadow-sm group-hover:border-[#c5a059] transition-colors">
                L
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.2em] uppercase font-bold text-[#F4EFE6] leading-none">
                  LUXESPACE
                </span>
                <span className="text-[9px] font-mono tracking-[0.35em] text-[#c5a059] uppercase leading-none mt-1">
                  VENUE &bull; HTX
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-[0.2em] text-[#A09A8F]">
            <button
              onClick={() => scrollToSection('venue')}
              className="hover:text-[#c5a059] transition-colors cursor-pointer"
            >
              THE VENUE
            </button>
            <button
              onClick={() => scrollToSection('weddings')}
              className="hover:text-[#c5a059] transition-colors cursor-pointer"
            >
              WEDDINGS
            </button>
            <button
              onClick={() => scrollToSection('celebrations')}
              className="hover:text-[#c5a059] transition-colors cursor-pointer"
            >
              CELEBRATIONS
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-[#c5a059] transition-colors cursor-pointer"
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-[#c5a059] transition-colors cursor-pointer"
            >
              GALLERY
            </button>
            <button
              onClick={() => setFloorPlanOpen(true)}
              className="hover:text-[#c5a059] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>FLOOR PLAN</span>
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="hover:text-[#c5a059] transition-colors cursor-pointer"
            >
              FAQS
            </button>
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setBookTourOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded border border-[#c5a059] bg-[#c5a059] hover:bg-[#d4b06a] text-black font-semibold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-sm shadow-[#c5a059]/20"
            >
              BOOK A TOUR
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-[#A09A8F] hover:text-white hover:bg-[#181612] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#12110E] border-b border-[#24211a] px-5 py-6 space-y-4">
            <div className="flex flex-col space-y-3 text-xs font-mono uppercase tracking-widest text-[#A09A8F]">
              <button
                onClick={() => scrollToSection('venue')}
                className="text-left py-2 hover:text-[#c5a059]"
              >
                THE VENUE
              </button>
              <button
                onClick={() => scrollToSection('weddings')}
                className="text-left py-2 hover:text-[#c5a059]"
              >
                WEDDINGS
              </button>
              <button
                onClick={() => scrollToSection('celebrations')}
                className="text-left py-2 hover:text-[#c5a059]"
              >
                CELEBRATIONS
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left py-2 hover:text-[#c5a059]"
              >
                EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left py-2 hover:text-[#c5a059]"
              >
                GALLERY
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setFloorPlanOpen(true);
                }}
                className="text-left py-2 hover:text-[#c5a059] flex items-center gap-2"
              >
                <LayoutGrid className="w-4 h-4 text-[#c5a059]" />
                <span>INTERACTIVE FLOOR PLAN (150 GUESTS)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteCalculatorOpen(true);
                }}
                className="text-left py-2 hover:text-[#c5a059] flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#c5a059]" />
                <span>CALCULATE WEDDING ESTIMATE</span>
              </button>
              <button
                onClick={() => scrollToSection('faqs')}
                className="text-left py-2 hover:text-[#c5a059]"
              >
                FAQS
              </button>
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookTourOpen(true);
                }}
                className="w-full py-3 rounded bg-[#c5a059] text-black font-bold text-xs uppercase tracking-widest"
              >
                BOOK A PRIVATE TOUR
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section (Replicating exact layout & typography) */}
      <section
        id="venue"
        className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-radial from-[#1A1813] via-[#0E0D0B] to-[#0A0908] border-b border-[#24211a] overflow-hidden"
      >
        {/* Subtle decorative architectural grid lines in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1d18_1px,transparent_1px),linear-gradient(to_bottom,#1f1d18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-block text-[#c5a059] font-mono text-xs sm:text-sm tracking-[0.4em] uppercase mb-4">
            LUXESPACE
          </div>

          {/* Thin divider line */}
          <div className="w-16 h-[1px] bg-[#c5a059]/60 mx-auto mb-6" />

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F4EFE6] font-normal leading-[1.05] mb-6">
            DESIGNED FOR THE REFINED.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#A09A8F] max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            A refined setting for life&rsquo;s most meaningful celebrations. LuxeSpace is a modern Houston event venue accommodating up to 150 guests, thoughtfully designed for weddings, milestone celebrations, showers, and private gatherings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBookTourOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded border border-[#c5a059] bg-[#c5a059] hover:bg-[#d4b06a] text-black font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-[#c5a059]/10"
            >
              BOOK A PRIVATE TOUR
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="w-full sm:w-auto px-8 py-4 rounded border border-[#3b3528] hover:border-[#c5a059] bg-transparent text-[#F4EFE6] hover:text-[#c5a059] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              VIEW GALLERY
            </button>
          </div>

          {/* Quick highlight bar */}
          <div className="mt-14 pt-8 border-t border-[#221f18] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-serif text-[#c5a059]">150</div>
              <div className="text-[10px] font-mono tracking-widest text-[#8e877c] uppercase mt-0.5">Seated Capacity</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif text-[#c5a059]">Houston</div>
              <div className="text-[10px] font-mono tracking-widest text-[#8e877c] uppercase mt-0.5">Prime Location</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif text-[#c5a059]">Bookmatched</div>
              <div className="text-[10px] font-mono tracking-widest text-[#8e877c] uppercase mt-0.5">Marble Wall</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif text-[#c5a059]">BYO Caterer</div>
              <div className="text-[10px] font-mono tracking-widest text-[#8e877c] uppercase mt-0.5">Open Vendor Policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 01: THE VENUE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#24211a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-serif text-sm tracking-widest text-[#c5a059] font-mono">01</span>
              <div className="h-[1px] w-8 bg-[#3d3627]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e877c]">Overview</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EFE6] tracking-tight">
              THE VENUE
            </h2>

            <div className="w-12 h-[1px] bg-[#c5a059]" />

            <p className="text-sm sm:text-base text-[#A09A8F] leading-relaxed">
              Architectural details include frosted windows, a dramatic black exposed ceiling, a marble feature wall, polished concrete floors, sculptural ring chandeliers, and customizable mood lighting designed to transform the atmosphere of the space.
            </p>

            {/* Architectural features list */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-[#14130f] border border-[#26231c] rounded-lg">
                <div className="text-xs font-serif text-[#F4EFE6]">Frosted Windows</div>
                <div className="text-[10px] text-[#7d776d] mt-0.5">Soft, diffused natural daylight</div>
              </div>
              <div className="p-3 bg-[#14130f] border border-[#26231c] rounded-lg">
                <div className="text-xs font-serif text-[#F4EFE6]">Black Exposed Ceiling</div>
                <div className="text-[10px] text-[#7d776d] mt-0.5">Dramatic industrial loft height</div>
              </div>
              <div className="p-3 bg-[#14130f] border border-[#26231c] rounded-lg">
                <div className="text-xs font-serif text-[#F4EFE6]">Marble Feature Wall</div>
                <div className="text-[10px] text-[#7d776d] mt-0.5">Bookmatched luxury backdrop</div>
              </div>
              <div className="p-3 bg-[#14130f] border border-[#26231c] rounded-lg">
                <div className="text-xs font-serif text-[#F4EFE6]">Ring Chandeliers</div>
                <div className="text-[10px] text-[#7d776d] mt-0.5">Sculptural brass fixtures</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookTourOpen(true)}
                className="px-6 py-3 rounded border border-[#c5a059] bg-[#c5a059] hover:bg-[#d4b06a] text-black font-semibold text-xs tracking-widest uppercase transition-colors cursor-pointer"
              >
                BOOK A PRIVATE TOUR
              </button>
              <button
                onClick={() => setFloorPlanOpen(true)}
                className="px-6 py-3 rounded border border-[#3b3528] hover:border-[#c5a059] text-[#F4EFE6] font-semibold text-xs tracking-widest uppercase transition-colors cursor-pointer flex items-center gap-2"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>EXPLORE FLOOR PLAN</span>
              </button>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2e2a21] shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80"
                alt="LuxeSpace HTX Architectural Venue View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[#c5a059] font-mono text-[10px] uppercase tracking-widest">
                  Architectural Interior
                </div>
                <div className="text-white font-serif text-lg mt-0.5">
                  Marble Wall &amp; Sculptural Ring Lighting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 02: WEDDINGS & CELEBRATIONS */}
      <section id="weddings" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#24211a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-sm tracking-widest text-[#c5a059] font-mono">02</span>
              <div className="h-[1px] w-8 bg-[#3d3627]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e877c]">Our Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EFE6] tracking-tight">
              WEDDINGS &amp; CELEBRATIONS
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#A09A8F] leading-relaxed">
              Your event deserves a setting as exceptional as the memories you&rsquo;ll create. LuxeSpace offers a harmonious blend of moody romance and light, airy elegance tailored for luxury weddings, milestone birthdays, baby showers, and corporate galas.
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards: CURATED BEAUTY, SEAMLESS EXPERIENCE, YOURS COMPLETELY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-[#14130f] border border-[#26231c] rounded-xl overflow-hidden hover:border-[#4d4432] transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80"
                alt="Curated Beauty"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14130f] via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-[#F4EFE6] mb-2 tracking-wide">
                CURATED BEAUTY
              </h3>
              <p className="text-xs text-[#A09A8F] leading-relaxed">
                Thoughtful design &amp; refined architectural details create a breathtaking atmosphere that looks extraordinary in photograph and memory.
              </p>
            </div>
          </div>

          <div className="group bg-[#14130f] border border-[#26231c] rounded-xl overflow-hidden hover:border-[#4d4432] transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=80"
                alt="Seamless Experience"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14130f] via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-[#F4EFE6] mb-2 tracking-wide">
                SEAMLESS EXPERIENCE
              </h3>
              <p className="text-xs text-[#A09A8F] leading-relaxed">
                Our experienced venue liaisons handle table and chair setup, vendor arrival, and facility care so you can be fully present with your loved ones.
              </p>
            </div>
          </div>

          <div className="group bg-[#14130f] border border-[#26231c] rounded-xl overflow-hidden hover:border-[#4d4432] transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80"
                alt="Yours Completely"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14130f] via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-[#F4EFE6] mb-2 tracking-wide">
                YOURS COMPLETELY
              </h3>
              <p className="text-xs text-[#A09A8F] leading-relaxed">
                Personalized lighting colors, flexible outside caterers, and private bridal suite spaces make your celebration authentically and uniquely yours.
              </p>
            </div>
          </div>
        </div>

        {/* Wedding Packages Showcase Grid */}
        <div className="mt-16 pt-12 border-t border-[#221f18]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[#c5a059] font-mono text-xs uppercase tracking-widest mb-1">
              Curated Wedding Packages
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif text-[#F4EFE6]">
              Transparent Rental Investments
            </h3>
            <p className="text-xs sm:text-sm text-[#8e877c] mt-2">
              Every package includes full setup and breakdown, 150 modern chairs, tables, and on-site facility support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LUXESPACE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#14130f] border border-[#2b271f] hover:border-[#c5a059]/60 rounded-2xl p-6 flex flex-col justify-between transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase">
                      {pkg.subtitle}
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl text-white mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-serif text-[#c5a059] mb-1">
                    {pkg.startingPrice}
                    <span className="text-xs font-sans text-[#7d776d] font-normal ml-1">starting rate</span>
                  </div>
                  <div className="text-xs text-[#8e877c] mb-6">
                    {pkg.hoursIncluded} &bull; {pkg.guestCapacity}
                  </div>

                  <ul className="space-y-2 text-xs text-[#a09a8f] mb-8 border-t border-[#24211a] pt-4">
                    {pkg.features.slice(0, 6).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setBookTourOpen(true)}
                    className="w-full py-2.5 rounded bg-[#c5a059] hover:bg-[#d4b06a] text-black font-semibold text-xs uppercase tracking-widest cursor-pointer transition-colors"
                  >
                    Book Tour for this Package
                  </button>
                  <button
                    onClick={() => setQuoteCalculatorOpen(true)}
                    className="w-full py-2 rounded bg-transparent hover:bg-[#1f1d17] border border-[#332f26] text-xs text-[#a09a8f] hover:text-white uppercase tracking-wider cursor-pointer transition-colors"
                  >
                    Customize Investment
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setBookTourOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded border border-[#c5a059] bg-[#c5a059] hover:bg-[#d4b06a] text-black font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              EXPLORE THE VENUE &bull; PRIVATE TOURS DAILY
            </button>
          </div>
        </div>
      </section>

      {/* 6. Grand Typographic Callout (LUXESPACE) */}
      <section className="py-16 sm:py-24 bg-[#0a0a08] border-y border-[#201d16] overflow-hidden text-center select-none">
        <div className="max-w-7xl mx-auto px-4">
          <div className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.25em] text-[#222019] hover:text-[#c5a059]/30 transition-colors duration-500 font-extrabold uppercase">
            LUXESPACE
          </div>
        </div>
      </section>

      {/* 7. Section 03: CELEBRATIONS */}
      <section id="celebrations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#24211a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-serif text-sm tracking-widest text-[#c5a059] font-mono">03</span>
              <div className="h-[1px] w-8 bg-[#3d3627]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e877c]">Celebrations</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EFE6] tracking-tight">
              CELEBRATIONS
            </h2>

            <p className="text-sm sm:text-base text-[#A09A8F] leading-relaxed">
              Life&rsquo;s most meaningful moments deserve an unforgettable setting. Birthdays, Showers, Anniversaries, and Corporate Galas designed with precision.
            </p>

            {/* Numbered Cards 01, 02, 03 */}
            <div className="space-y-4 pt-2">
              {LUXESPACE_CELEBRATIONS.map((c) => (
                <div
                  key={c.id}
                  className="p-4 bg-[#14130f] border border-[#26231c] rounded-xl flex items-start gap-4 hover:border-[#4d4432] transition-colors"
                >
                  <span className="font-serif text-lg font-bold text-[#c5a059] font-mono shrink-0">
                    {c.counter}
                  </span>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg text-white">{c.title}</h3>
                    <p className="text-xs text-[#8e877c] mt-0.5 leading-relaxed">{c.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {c.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-mono text-[#c5a059] bg-[#1e1c16] px-2 py-0.5 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setBookTourOpen(true)}
                className="px-6 py-3 rounded border border-[#c5a059] bg-[#c5a059] hover:bg-[#d4b06a] text-black font-semibold text-xs tracking-widest uppercase transition-colors cursor-pointer"
              >
                BOOK A PRIVATE TOUR
              </button>
            </div>
          </div>

          {/* Right Image Mosaic */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#2e2a21] shadow-2xl aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&auto=format&fit=crop&q=80"
                alt="Celebrations at LuxeSpace HTX"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-[#2a261e] aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=80"
                  alt="LuxeSpace HTX Event Setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-[#2a261e] aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=80"
                  alt="Evening Dance Floor & Lighting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section 04: THE LUXESPACE EXPERIENCE */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#24211a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-serif text-sm tracking-widest text-[#c5a059] font-mono">04</span>
              <div className="h-[1px] w-8 bg-[#3d3627]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e877c]">Distinctive Craft</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EFE6] tracking-tight">
              THE LUXESPACE EXPERIENCE
            </h2>

            <p className="text-sm sm:text-base text-[#A09A8F] leading-relaxed">
              An experience, considered down to the last detail. From our architectural lighting to our curated vendor partnerships, every facet is designed for absolute sophistication.
            </p>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => setBookTourOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded border border-[#c5a059] bg-[#c5a059] hover:bg-[#d4b06a] text-black font-semibold text-xs tracking-widest uppercase transition-colors cursor-pointer"
              >
                EXPLORE THE VENUE
              </button>
              <div>
                <button
                  onClick={() => setQuoteCalculatorOpen(true)}
                  className="text-xs text-[#c5a059] hover:underline font-mono uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span>View Package Pricing &amp; Add-ons</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right 6 Numbered Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {LUXESPACE_EXPERIENCE_TIERS.map((tier) => (
              <div
                key={tier.counter}
                className="p-6 bg-[#14130f] border border-[#26231c] rounded-xl hover:border-[#4d4432] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg text-white">{tier.title}</h3>
                  <span className="font-serif text-base font-bold text-[#c5a059] font-mono">
                    {tier.counter}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#A09A8F] leading-relaxed mb-4">
                  {tier.description}
                </p>
                <ul className="space-y-1.5 text-xs text-[#7d776d] border-t border-[#221f18] pt-3">
                  {tier.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Visual Gallery Section */}
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#24211a]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[#c5a059] font-mono text-xs uppercase tracking-widest mb-1">
              Visual Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EFE6] tracking-tight">
              VENUE GALLERY
            </h2>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'weddings', label: 'Weddings' },
              { id: 'receptions', label: 'Receptions' },
              { id: 'architectural', label: 'Architectural' },
              { id: 'cocktail_lounge', label: 'Cocktail Lounge' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setGalleryFilter(f.id as any)}
                className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors ${
                  galleryFilter === f.id
                    ? 'bg-[#c5a059] text-black font-semibold'
                    : 'bg-[#181612] text-[#8e877c] hover:text-white border border-[#2b271f]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-xl overflow-hidden border border-[#2b271f] bg-[#14130f] aspect-[4/3] cursor-pointer shadow-lg"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059]">
                  {img.category}
                </span>
                <h4 className="text-white font-serif text-base mt-0.5">{img.title}</h4>
              </div>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Section 05: Frequently Asked Questions (Elementor Nested Accordion recreated) */}
      <section id="faqs" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#24211a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-sm tracking-widest text-[#c5a059] font-mono">05</span>
              <div className="h-[1px] w-8 bg-[#3d3627]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e877c]">FAQ</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EFE6] tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <p className="text-sm text-[#A09A8F] leading-relaxed">
              Everything you need to know about reserving LuxeSpace HTX, outside vendor policies, setup inclusions, and scheduling your private walkthrough.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setBookTourOpen(true)}
                className="px-6 py-3 rounded border border-[#c5a059] bg-[#c5a059] hover:bg-[#d4b06a] text-black font-semibold text-xs tracking-widest uppercase transition-colors cursor-pointer"
              >
                BOOK A PRIVATE TOUR
              </button>
            </div>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-7 space-y-3">
            {LUXESPACE_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#26231c] rounded-xl overflow-hidden bg-[#14130f] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#191712] transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#F4EFE6]">
                      {faq.question}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#1e1c16] border border-[#383328] text-[#c5a059] flex items-center justify-center shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A09A8F] leading-relaxed border-t border-[#201d17]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Venue Specifications & Location Panel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#24211a]">
        <div className="bg-[#12110e] border border-[#2b271f] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-[#c5a059] font-mono text-xs uppercase tracking-widest mb-1">
                Capacity
              </div>
              <div className="text-2xl font-serif text-white">Up to 150 Seated</div>
              <p className="text-xs text-[#8e877c] mt-1">200 cocktail reception with dance floor &amp; stage</p>
            </div>
            <div>
              <div className="text-[#c5a059] font-mono text-xs uppercase tracking-widest mb-1">
                Location
              </div>
              <div className="text-2xl font-serif text-white">Houston, Texas</div>
              <p className="text-xs text-[#8e877c] mt-1">Prime HTX highway access with on-site guest parking</p>
            </div>
            <div>
              <div className="text-[#c5a059] font-mono text-xs uppercase tracking-widest mb-1">
                Catering &amp; Bar
              </div>
              <div className="text-2xl font-serif text-white">Open Vendor</div>
              <p className="text-xs text-[#8e877c] mt-1">Licensed &amp; insured outside caterers and TABC bartenders</p>
            </div>
            <div>
              <div className="text-[#c5a059] font-mono text-xs uppercase tracking-widest mb-1">
                Full Service
              </div>
              <div className="text-2xl font-serif text-white">Setup &amp; Cleaning</div>
              <p className="text-xs text-[#8e877c] mt-1">Venue crew handles table/chair physical setup &amp; janitorial</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-[#0A0908] text-[#8e877c] border-t border-[#1c1a15] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full border border-[#c5a059]/60 flex items-center justify-center bg-[#181612] text-[#c5a059] font-serif text-xs font-bold">
                L
              </div>
              <span className="font-serif text-lg tracking-[0.2em] uppercase font-bold text-white">
                LUXESPACE VENUE
              </span>
            </div>
            <p className="text-xs text-[#8e877c] leading-relaxed">
              Houston&rsquo;s architectural luxury venue for weddings, private celebrations, and high-profile corporate galas. Designed for the refined.
            </p>
          </div>

          {/* Pages */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#F4EFE6] mb-4">
              Our Pages
            </div>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <button
                  onClick={() => scrollToSection('venue')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  THE VENUE
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('weddings')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  WEDDINGS
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('celebrations')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  CELEBRATIONS
                </button>
              </li>
            </ul>
          </div>

          {/* Booking & Tools */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#F4EFE6] mb-4">
              Booking &amp; Tools
            </div>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  EXPERIENCE
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  GALLERY
                </button>
              </li>
              <li>
                <button
                  onClick={() => setFloorPlanOpen(true)}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  FLOOR PLAN
                </button>
              </li>
              <li>
                <button
                  onClick={() => setBookTourOpen(true)}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  TOUR OUR VENUE
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#F4EFE6] mb-4">
              Support
            </div>
            <ul className="space-y-2 text-xs text-[#8e877c]">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>info@luxespacehtx.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Houston, Texas (HTX)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Private Tours by Appointment</span>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/luxespacehtx"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#181612] border border-[#2b271f] flex items-center justify-center text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <button
                onClick={() => setBookTourOpen(true)}
                className="px-3 py-1.5 bg-[#181612] border border-[#2b271f] rounded text-[10px] font-mono uppercase tracking-wider text-[#c5a059] hover:border-[#c5a059] transition-colors cursor-pointer"
              >
                HoneyBook Portal
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#181612] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5c564b]">
          <div>&copy; 2026 LuxeSpace HTX. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Houston Architectural Event Venue</span>
            <span>&bull;</span>
            <span>Site #59 &bull; Wedding Category</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BookTourModal
        isOpen={bookTourOpen}
        onClose={() => setBookTourOpen(false)}
      />

      <FloorPlanPlannerModal
        isOpen={floorPlanOpen}
        onClose={() => setFloorPlanOpen(false)}
        onOpenBookTour={() => setBookTourOpen(true)}
      />

      <WeddingQuoteModal
        isOpen={quoteCalculatorOpen}
        onClose={() => setQuoteCalculatorOpen(false)}
        onOpenBookTour={() => setBookTourOpen(true)}
      />

      <GalleryLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredGallery}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
