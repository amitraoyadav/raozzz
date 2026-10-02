import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Star,
  Sparkles,
  Heart,
  Play,
  CheckCircle2,
  Compass,
  Building2,
  Award,
  Globe,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Clock,
  Shield,
  Search,
  Menu,
  X,
  ArrowRight,
  Send,
  MessageCircle,
  Gem,
  Check
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  RATHORE_SERVICES,
  RATHORE_FLIP_SERVICES,
  RATHORE_FEATURED_WEDDINGS,
  RATHORE_TESTIMONIALS,
  RATHORE_PORTFOLIO,
  RATHORE_PROCESS,
  RATHORE_STYLES,
  RATHORE_FAQS,
  RATHORE_BLOGS,
  RATHORE_CLIENT_LOGOS,
  RathoreService,
  RathoreFeaturedWedding
} from './rathoreData';
import { InquiryModal } from './InquiryModal';
import { GalleryLightboxModal } from './GalleryLightboxModal';
import { VideoPlayerModal } from './VideoPlayerModal';

export const RathoreWeddingsApp: React.FC = () => {
  // Page Title & SEO
  useEffect(() => {
    document.title = 'Best Wedding Planners in Delhi - Rathore Weddings | Luxury Destination Weddings';
    window.scrollTo(0, 0);
  }, []);

  // Modals
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Wedding Planning');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Slideshow
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Testimonials Carousel
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Wedding Styles Carousel
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Embedded Inquiry Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formAddress, setFormAddress] = useState('');
  const [formService, setFormService] = useState('Wedding Planning');
  const [formGuests, setFormGuests] = useState('250');
  const [formCountry, setFormCountry] = useState('India');
  const [formState, setFormState] = useState('Delhi NCR');
  const [formCity, setFormCity] = useState('New Delhi');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmbeddedFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleOpenServiceInquiry = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    setInquiryModalOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0f1015] text-stone-100 font-['Lora',serif] selection:bg-[#FFD481] selection:text-black">
      {/* 1. Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="rathore-weddings" />

      {/* 2. Top Bar with Social Icons & Direct Contact */}
      <div className="bg-[#15161e] border-b border-stone-800 text-xs py-2 px-4 font-sans text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-4 text-stone-400">
            <span className="flex items-center gap-1.5 hover:text-white">
              <Mail className="w-3.5 h-3.5 text-[#FFD481]" /> info@rathoreweddings.in
            </span>
            <span className="text-stone-700 hidden sm:inline">|</span>
            <a href="tel:919810196863" className="flex items-center gap-1.5 hover:text-[#FFD481] font-bold text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#FFD481]" /> +91-9810196863
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-stone-400 font-medium hidden md:inline">Follow Our Stories:</span>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-stone-800 hover:bg-[#FFD481] hover:text-black flex items-center justify-center transition-colors">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-stone-800 hover:bg-[#FFD481] hover:text-black flex items-center justify-center transition-colors">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-stone-800 hover:bg-[#FFD481] hover:text-black flex items-center justify-center transition-colors">
                <Youtube className="w-3 h-3" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-stone-800 hover:bg-[#FFD481] hover:text-black flex items-center justify-center transition-colors">
                <Linkedin className="w-3 h-3" />
              </a>
            </div>
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="ml-2 px-3 py-1 rounded-full bg-[#FFD481] hover:bg-[#ffe3a6] text-black font-extrabold text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      {/* 3. Primary Header & Split Navigation */}
      <header className="sticky top-0 z-40 bg-[#121319]/95 backdrop-blur-md border-b border-stone-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">
          {/* Left Menu (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-sans font-bold uppercase tracking-wider text-stone-300">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#FFD481] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => { const el = document.getElementById('about-sec'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-[#FFD481] transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => { const el = document.getElementById('services-sec'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-[#FFD481] transition-colors cursor-pointer"
            >
              What We Do
            </button>
            <button
              onClick={() => { const el = document.getElementById('portfolio-sec'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-[#FFD481] transition-colors cursor-pointer"
            >
              Gallery
            </button>
          </nav>

          {/* Center Brand Crest & Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-center cursor-pointer group px-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-wider text-white font-serif">
                RATHORE
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-light tracking-widest text-[#FFD481] font-serif">
                WEDDINGS
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-5 h-[1px] bg-[#FFD481]/60" />
              <div className="text-[9px] tracking-widest text-stone-400 font-sans uppercase font-bold">
                Luxury Wedding &amp; Event Planners
              </div>
              <div className="w-5 h-[1px] bg-[#FFD481]/60" />
            </div>
          </div>

          {/* Right Menu (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-sans font-bold uppercase tracking-wider text-stone-300">
            <button
              onClick={() => { const el = document.getElementById('featured-sec'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-[#FFD481] transition-colors cursor-pointer"
            >
              Featured Weddings
            </button>
            <button
              onClick={() => { const el = document.getElementById('testimonials-sec'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-[#FFD481] transition-colors cursor-pointer"
            >
              Success Story
            </button>
            <button
              onClick={() => { const el = document.getElementById('blogs-sec'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-[#FFD481] transition-colors cursor-pointer"
            >
              Blogs
            </button>
            <button
              onClick={() => { const el = document.getElementById('contact-sec'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-[#FFD481] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-3 py-1.5 rounded-full bg-[#FFD481] text-black font-extrabold text-[11px] uppercase tracking-wider"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-stone-800 text-stone-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#161720] border-b border-stone-800 p-4 space-y-2 font-sans text-xs uppercase tracking-wider font-bold">
            <button onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="w-full text-left py-2 px-3 rounded hover:bg-stone-800 text-stone-200">Home</button>
            <button onClick={() => { setMobileMenuOpen(false); document.getElementById('about-sec')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left py-2 px-3 rounded hover:bg-stone-800 text-stone-200">About Us</button>
            <button onClick={() => { setMobileMenuOpen(false); document.getElementById('services-sec')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left py-2 px-3 rounded hover:bg-stone-800 text-stone-200">What We Do</button>
            <button onClick={() => { setMobileMenuOpen(false); document.getElementById('portfolio-sec')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left py-2 px-3 rounded hover:bg-stone-800 text-stone-200">Gallery</button>
            <button onClick={() => { setMobileMenuOpen(false); document.getElementById('featured-sec')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left py-2 px-3 rounded hover:bg-stone-800 text-stone-200">Featured Weddings</button>
            <button onClick={() => { setMobileMenuOpen(false); document.getElementById('testimonials-sec')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left py-2 px-3 rounded hover:bg-stone-800 text-stone-200">Success Story</button>
            <button onClick={() => { setMobileMenuOpen(false); document.getElementById('blogs-sec')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left py-2 px-3 rounded hover:bg-stone-800 text-stone-200">Blogs</button>
            <button onClick={() => { setMobileMenuOpen(false); document.getElementById('contact-sec')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left py-2 px-3 rounded hover:bg-stone-800 text-stone-200">Contact Us</button>
          </div>
        )}
      </header>

      {/* 4. Hero Slideshow Banner */}
      <section className="relative h-[560px] sm:h-[680px] lg:h-[750px] overflow-hidden bg-black flex items-center justify-center">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              idx === currentHeroSlide ? 'opacity-100 z-10 scale-105 transition-transform duration-7000' : 'opacity-0 z-0 pointer-events-none'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1015] via-transparent to-black/60" />
          </div>
        ))}

        {/* Hero Slogan Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD481]/15 border border-[#FFD481]/30 text-[#FFD481] text-xs font-sans uppercase font-bold tracking-widest mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>Rathore Weddings · Delhi &amp; Destination India</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-tight mb-6">
            Where Love Becomes <br />
            <span className="text-[#FFD481] italic">a Celebration</span>
          </h1>

          <p className="text-stone-300 font-sans text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Award-winning luxury wedding planning, royal palace architecture, and bespoke multi-day celebrations crafted to your highest aspirations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 font-sans text-xs uppercase font-extrabold tracking-wider">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#FFD481] hover:bg-[#ffe3a6] text-black shadow-xl shadow-[#FFD481]/20 transition-all cursor-pointer"
            >
              Plan Your Dream Wedding
            </button>
            <button
              onClick={() => { const el = document.getElementById('services-sec'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 transition-colors cursor-pointer"
            >
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <button
            onClick={() => { const el = document.getElementById('services-sec'); el?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex flex-col items-center text-[10px] font-sans font-bold tracking-widest text-stone-400 hover:text-[#FFD481] transition-colors cursor-pointer uppercase"
          >
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#FFD481] to-transparent mb-1" />
            <span>Scroll Down</span>
          </button>
        </div>
      </section>

      {/* 5. Introduction Header & 12 Comprehensive Services Grid */}
      <section id="services-sec" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-[1px] h-14 bg-[#FFD481] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Best Wedding Planners in Delhi
          </h2>
          <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed">
            We bring in our years old experience in every sector to provide you the best of them all.
          </p>

          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-16 h-[1px] bg-stone-700" />
            <div className="w-8 h-8 rounded-full bg-[#FFD481]/15 text-[#FFD481] flex items-center justify-center border border-[#FFD481]/30">
              <Gem className="w-4 h-4" />
            </div>
            <div className="w-16 h-[1px] bg-stone-700" />
          </div>
        </div>

        {/* 12 Services Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RATHORE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => handleOpenServiceInquiry(srv.title)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-stone-800 hover:border-[#FFD481]/60 shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-end p-6"
            >
              <img
                src={srv.image}
                alt={srv.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:via-black/70 transition-colors" />

              <div className="relative z-10">
                <span className="text-[10px] font-sans uppercase font-bold text-[#FFD481] tracking-widest block mb-1">
                  Signature Offering
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#FFD481] transition-colors mb-2">
                  {srv.title}
                </h3>
                <p className="font-sans text-xs text-stone-300 line-clamp-2 leading-relaxed mb-3">
                  {srv.shortDesc}
                </p>

                <div className="flex items-center gap-1 text-xs font-sans font-bold text-[#FFD481] uppercase tracking-wider">
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Wedding Ceremony Video Section */}
      <section className="relative py-24 bg-[#14151e] border-y border-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Wedding Ceremony
            </h2>
            <p className="font-sans text-sm text-[#FFD481] uppercase tracking-widest font-semibold">
              Celebrating Your Love
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-[1px] bg-stone-700" />
              <div className="w-6 h-6 rounded-full bg-[#FFD481]/15 text-[#FFD481] flex items-center justify-center border border-[#FFD481]/30">
                <Heart className="w-3 h-3 fill-[#FFD481]" />
              </div>
              <div className="w-12 h-[1px] bg-stone-700" />
            </div>
          </div>

          <div
            onClick={() => setVideoModalOpen(true)}
            className="group relative max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden border border-stone-700 shadow-2xl cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80"
              alt="Wedding ceremony teaser"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#FFD481] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-black ml-1" />
              </div>
              <span className="mt-4 font-sans text-xs uppercase font-extrabold tracking-widest text-white drop-shadow">
                Watch Cinematic Ceremony Film
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Featured Weddings (Real Couples Showcase) */}
      <section id="featured-sec" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-[1px] h-12 bg-[#FFD481] mx-auto mb-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Featured Weddings</h2>
          <p className="font-sans text-stone-300 text-sm leading-relaxed">
            We bring together two people in love and execute their dreams into reality exactly the way they want it to be.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RATHORE_FEATURED_WEDDINGS.map((fw) => (
            <div
              key={fw.id}
              onClick={() => handleOpenServiceInquiry(`Attending / Planning wedding like ${fw.couple}`)}
              className="group relative h-96 rounded-2xl overflow-hidden border border-stone-800 hover:border-[#FFD481] shadow-xl cursor-pointer transition-all flex flex-col justify-end p-6"
            >
              <img
                src={fw.image}
                alt={fw.couple}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full bg-[#FFD481] text-black font-sans text-[10px] font-black uppercase tracking-wider inline-block mb-2">
                  {fw.highlight}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{fw.couple}</h3>
                <p className="font-sans text-xs text-[#FFD481] mb-2">{fw.venue} · {fw.location}</p>
                <p className="font-sans text-xs text-stone-300 line-clamp-2 leading-relaxed">
                  {fw.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Client Testimonials Carousel */}
      <section id="testimonials-sec" className="py-20 bg-[#14151e] border-y border-stone-800 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-1.5 text-[#FFD481] text-xs font-sans uppercase font-bold tracking-widest mb-2">
            <Star className="w-4 h-4 fill-[#FFD481]" />
            <span>Real Couple Love</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            What Our Clients Are Saying
          </h2>

          {/* Testimonial Active Display */}
          <div className="relative bg-[#1b1c26] border border-stone-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <img
                src={RATHORE_TESTIMONIALS[currentTestimonialIndex].image}
                alt={RATHORE_TESTIMONIALS[currentTestimonialIndex].name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#FFD481] mb-6 shadow-xl"
              />

              <div className="flex items-center gap-1 text-[#FFD481] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD481]" />
                ))}
              </div>

              <blockquote className="text-sm sm:text-base text-stone-200 italic leading-relaxed max-w-3xl mb-6">
                &ldquo;{RATHORE_TESTIMONIALS[currentTestimonialIndex].quote}&rdquo;
              </blockquote>

              <cite className="not-italic font-sans">
                <span className="font-bold text-sm sm:text-base text-white block">
                  {RATHORE_TESTIMONIALS[currentTestimonialIndex].name}
                </span>
                <span className="text-xs text-[#FFD481]">
                  {RATHORE_TESTIMONIALS[currentTestimonialIndex].role} &bull; {RATHORE_TESTIMONIALS[currentTestimonialIndex].wedding}
                </span>
              </cite>
            </div>

            {/* Prev / Next controls */}
            <button
              onClick={() => setCurrentTestimonialIndex((prev) => (prev - 1 + RATHORE_TESTIMONIALS.length) % RATHORE_TESTIMONIALS.length)}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#FFD481] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % RATHORE_TESTIMONIALS.length)}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#FFD481] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-8 py-3 rounded-full bg-[#FFD481] hover:bg-[#ffe3a6] text-black font-sans font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              View All Testimonials &amp; Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* 9. Portfolio: Our Amazing Work (Masonry Gallery) */}
      <section id="portfolio-sec" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="w-[1px] h-12 bg-[#FFD481] mx-auto mb-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Our Amazing Work</h2>
          <p className="font-sans text-stone-300 text-sm">
            Thousands of magical moments, opulent mandap concepts, and unforgettable bridal entries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RATHORE_PORTFOLIO.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-square border border-stone-800 hover:border-[#FFD481] cursor-pointer shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="font-sans text-[10px] font-bold text-[#FFD481] uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setInquiryModalOpen(true)}
            className="px-8 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-sans text-xs font-bold uppercase tracking-wider border border-stone-700 transition-colors cursor-pointer"
          >
            More Wedding Stories &amp; Full Galleries
          </button>
        </div>
      </section>

      {/* 10. "Let's Meet - Make An Inquiry" On-Page Form */}
      <section id="contact-sec" className="py-20 bg-[#13141c] border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#1b1c26] border border-stone-700 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="font-sans text-xs font-bold text-[#FFD481] uppercase tracking-widest block mb-1">
                Let&rsquo;s Meet
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Make An Inquiry</h2>
              <p className="font-sans text-stone-300 text-xs sm:text-sm">
                Fill in your details and our team will get in touch to guide you through every step of planning.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-[#FFD481] flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank you! Your inquiry is received.</h3>
                <p className="font-sans text-sm text-stone-300 mb-6">
                  Our Senior Wedding Planner will contact you within 2 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#FFD481] text-black font-sans font-bold text-xs uppercase cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleEmbeddedFormSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="bg-[#242533] border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="bg-[#242533] border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  value={formAddress}
                  onChange={(e) => setFormAddress(e.target.value)}
                  className="w-full bg-[#242533] border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="bg-[#242533] border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD481]"
                  >
                    <option value="Wedding Planning">Wedding Planning</option>
                    <option value="Destination Wedding">Destination Wedding</option>
                    <option value="Venue Selection">Venue Selection</option>
                    <option value="Logistics and Hospitality">Logistics and Hospitality</option>
                    <option value="Decor">Decor</option>
                    <option value="Catering">Catering</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Makeover Artist">Makeover Artist</option>
                    <option value="Photography">Photography</option>
                  </select>

                  <input
                    type="number"
                    placeholder="No. of Guests *"
                    value={formGuests}
                    onChange={(e) => setFormGuests(e.target.value)}
                    className="bg-[#242533] border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                    required
                  />
                </div>

                <div className="bg-[#20212e] p-4 rounded-xl border border-stone-700">
                  <label className="block text-[#FFD481] uppercase tracking-wider font-bold mb-2">
                    Preferred Destination
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="Country"
                      value={formCountry}
                      onChange={(e) => setFormCountry(e.target.value)}
                      className="bg-[#292a3a] border border-stone-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                      required
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={formState}
                      onChange={(e) => setFormState(e.target.value)}
                      className="bg-[#292a3a] border border-stone-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                      required
                    />
                    <input
                      type="text"
                      placeholder="City"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      className="bg-[#292a3a] border border-stone-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="px-10 py-3.5 rounded-full bg-gradient-to-r from-[#FFD481] to-[#e6b95c] text-black font-extrabold uppercase tracking-wider text-xs shadow-xl shadow-[#FFD481]/15 hover:opacity-95 cursor-pointer"
                  >
                    Send An Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 11. Corporate & Hospitality Partner Logos */}
      <section className="py-12 bg-[#0d0e13] border-b border-stone-800 text-center font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h4 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-6">
            Building Success With Our Prestigious Venue Partners
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {RATHORE_CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="bg-[#171822] p-3 rounded-xl border border-stone-800 text-center flex flex-col items-center justify-center h-20 hover:border-[#FFD481]/40 transition-colors"
              >
                <img src={client.logo} alt={client.name} className="w-8 h-8 rounded-full object-cover mb-1 opacity-70" />
                <span className="text-[11px] font-semibold text-stone-300">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. About Us / Story Section */}
      <section id="about-sec" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-stone-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80"
                alt="About Rathore Weddings"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-[#FFD481] text-black font-sans font-black text-center shadow-xl hidden sm:block">
              <span className="text-3xl block">15+</span>
              <span className="text-[10px] uppercase tracking-wider block">Years of Royal Magic</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="w-12 h-[1px] bg-[#FFD481] mb-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Best Wedding Planners in Delhi — Crafting Unforgettable Celebrations
            </h2>
            <p className="font-sans text-stone-300 text-sm leading-relaxed mb-4">
              Rathore Weddings believes every wedding is a sacred celebration of love, cherished memories, and pure emotion. As the best wedding planners in Delhi, we ensure every detail reflects your unique heritage and vision.
            </p>
            <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed mb-6">
              We are a full-service wedding planning company that handles every detail from venue selection to complete hospitality, catering, and rituals. Whether you are planning a lush garden wedding, a royal palace wedding in Rajasthan, or an exotic beach wedding in Goa, Rathore Weddings brings the same creativity, warmth, and surgical precision to every event.
            </p>

            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#FFD481] hover:bg-[#ffe3a6] text-black font-sans font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
            >
              Book a Free Consultation Now!
            </button>
          </div>
        </div>
      </section>

      {/* 13. Interactive 3D Flip-Boxes (10 Services) */}
      <section className="py-20 bg-[#14151e] border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Our Complete Wedding Planning Services
            </h2>
            <p className="font-sans text-stone-300 text-sm">
              Hover over each service to explore how our specialized departments execute every dimension under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {RATHORE_FLIP_SERVICES.map((flip) => (
              <div
                key={flip.id}
                className="group relative h-80 rounded-2xl overflow-hidden border border-stone-800 bg-[#1b1c26] shadow-lg cursor-pointer"
              >
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 transition-transform duration-500 group-hover:scale-95 group-hover:opacity-0">
                  <img
                    src={flip.frontImage}
                    alt={flip.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg font-bold text-white">{flip.title}</h3>
                  </div>
                </div>

                {/* Back Side (Revealed on hover) */}
                <div className="absolute inset-0 bg-[#21232e] p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-[#FFD481] rounded-2xl">
                  <div>
                    <h4 className="text-base font-bold text-[#FFD481] mb-2">{flip.title}</h4>
                    <p className="font-sans text-xs text-stone-300 leading-relaxed">
                      {flip.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenServiceInquiry(flip.title)}
                    className="w-full py-2 rounded-lg bg-[#FFD481] text-black font-sans font-extrabold text-[10px] uppercase tracking-wider hover:bg-[#ffe3a6]"
                  >
                    Select Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Wedding Styles We Bring to Life (Slider Carousel) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Wedding Styles We Bring to Life
          </h2>
          <p className="font-sans text-stone-300 text-sm">
            Whether royal, intimate, coastal, or multi-cultural, we breathe extraordinary life into every aesthetic.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-stone-700 shadow-2xl h-[450px]">
          <img
            src={RATHORE_STYLES[currentStyleIndex].image}
            alt={RATHORE_STYLES[currentStyleIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end p-8 sm:p-12">
            <div className="max-w-xl">
              <span className="font-sans text-[10px] uppercase font-bold text-[#FFD481] tracking-widest block mb-1">
                Curated Aesthetic
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                {RATHORE_STYLES[currentStyleIndex].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-200 leading-relaxed mb-6">
                {RATHORE_STYLES[currentStyleIndex].description}
              </p>

              <button
                onClick={() => setInquiryModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-[#FFD481] text-black font-sans font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Plan {RATHORE_STYLES[currentStyleIndex].title}
              </button>
            </div>
          </div>

          {/* Slider controls */}
          <button
            onClick={() => setCurrentStyleIndex((prev) => (prev - 1 + RATHORE_STYLES.length) % RATHORE_STYLES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#FFD481] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentStyleIndex((prev) => (prev + 1) % RATHORE_STYLES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#FFD481] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 15. Our Wedding Management Process (8 Steps) */}
      <section className="py-20 bg-[#14151e] border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Our Wedding Management Process
            </h2>
            <p className="font-sans text-stone-300 text-sm">
              Eight disciplined stages ensuring your multi-day festivities unfold like clockwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RATHORE_PROCESS.map((p) => (
              <div
                key={p.step}
                className="bg-[#1b1c26] border border-stone-800 rounded-2xl overflow-hidden p-5 flex flex-col justify-between group hover:border-[#FFD481]/50 transition-colors shadow-lg"
              >
                <div>
                  <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#FFD481] text-black font-sans font-black flex items-center justify-center text-xs shadow-md">
                      0{p.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="font-sans text-xs text-stone-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Why Rathore? (6 Gold Round Badges) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Why Choose Rathore Weddings?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { title: 'End-to-End Planning', desc: 'Concept to Execution' },
            { title: 'Bespoke Themes', desc: 'No Duplicates' },
            { title: '50+ Prestigious Venues', desc: 'Top Institutional Rates' },
            { title: '15+ Years Experience', desc: 'Proven Reliability' },
            { title: 'Budget Transparency', desc: 'Direct Vendor Invoices' },
            { title: 'Personal Presence', desc: 'Senior Directors On-Site' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#181922] border border-stone-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-[#FFD481] transition-colors shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD481] to-[#b3842a] flex items-center justify-center text-black font-black text-xl mb-3 shadow-lg shadow-[#FFD481]/15">
                ★
              </div>
              <h3 className="font-bold text-sm text-white mb-1">{item.title}</h3>
              <p className="font-sans text-[11px] text-stone-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 17. Frequently Asked Questions (Accordion) */}
      <section className="py-20 bg-[#13141b] border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-stone-300 text-sm">
              Answers to everything couples ask when booking luxury wedding planning in Delhi NCR and India.
            </p>
          </div>

          <div className="space-y-3 font-sans">
            {RATHORE_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#1b1c26] border border-stone-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-800/40"
                  >
                    <span className="font-bold text-sm sm:text-base text-white">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FFD481] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 bg-[#181922]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 18. Latest Blogs Section */}
      <section id="blogs-sec" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="w-[1px] h-12 bg-[#FFD481] mx-auto mb-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Our Latest Blogs</h2>
          <p className="font-sans text-stone-300 text-sm">
            Expert insights on destination venues, trends, and wedding planning budgets across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
          {RATHORE_BLOGS.map((b) => (
            <div
              key={b.id}
              onClick={() => setInquiryModalOpen(true)}
              className="bg-[#181922] border border-stone-800 rounded-2xl overflow-hidden hover:border-[#FFD481] transition-colors cursor-pointer shadow-lg flex flex-col justify-between"
            >
              <div>
                <img src={b.image} alt={b.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <span className="text-[11px] text-[#FFD481] font-mono block mb-1">{b.date}</span>
                  <h3 className="font-bold text-base text-white hover:text-[#FFD481] transition-colors mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {b.summary}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="text-xs font-bold text-[#FFD481] uppercase tracking-wider flex items-center gap-1">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 19. Footer */}
      <footer className="bg-[#0b0c10] border-t border-stone-800 pt-16 pb-8 text-stone-400 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Col 1 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-white font-serif">RATHORE</span>
                <span className="text-xl font-light text-[#FFD481] font-serif">WEDDINGS</span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed mb-4">
                Welcome and open yourself to your truest love with us! Luxury wedding and event planners crafting bespoke memories across Delhi, Rajasthan, and international shores.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#FFD481] hover:text-black">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#FFD481] hover:text-black">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#FFD481] hover:text-black">
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#FFD481] hover:text-black">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
                Information
              </h4>
              <ul className="space-y-2">
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#FFD481]">Home</button></li>
                <li><button onClick={() => document.getElementById('about-sec')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD481]">Who We Are</button></li>
                <li><button onClick={() => document.getElementById('portfolio-sec')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD481]">Gallery &amp; Portfolio</button></li>
                <li><button onClick={() => document.getElementById('featured-sec')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD481]">Featured Weddings</button></li>
                <li><button onClick={() => document.getElementById('testimonials-sec')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD481]">Success Story</button></li>
                <li><button onClick={() => document.getElementById('blogs-sec')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD481]">Blogs &amp; Insights</button></li>
                <li><button onClick={() => document.getElementById('contact-sec')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD481]">Contact Us</button></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
                Contact
              </h4>
              <p className="mb-3 text-stone-300">Would you have any enquiries? Please feel free to contact us:</p>
              <div className="space-y-2 text-stone-300">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FFD481] shrink-0" />
                  <a href="mailto:info@rathoreweddings.in" className="hover:text-[#FFD481]">info@rathoreweddings.in</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FFD481] shrink-0" />
                  <a href="tel:919810196863" className="hover:text-[#FFD481] font-bold text-white">+91-9810196863</a>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#FFD481] shrink-0 mt-0.5" />
                  <span>B-29, Geetanjali Enclave Near Aurobindo College, New Delhi-110017</span>
                </p>
              </div>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
                Wedding Category #57
              </h4>
              <p className="text-stone-400 text-xs leading-relaxed mb-4">
                Part of the 57 Curated Business Sites Registry under <strong>Wedding &amp; Event Planning</strong>.
              </p>
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-[#FFD481] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffe3a6]"
              >
                Book Wedding Planner
              </button>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 text-center text-stone-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              &copy; 2026 Rathore Weddings. All Rights Reserved.
            </div>
            <div className="text-[11px] text-stone-400 font-mono">
              Site #57 · Rathore Weddings · Wedding &amp; Event Planning
            </div>
          </div>
        </div>
      </footer>

      {/* 20. Floating Contact Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 font-sans">
        <a
          href="tel:919810196863"
          className="px-4 py-2.5 rounded-full bg-stone-900 border border-stone-700 text-white hover:text-[#FFD481] hover:border-[#FFD481] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl transition-all"
        >
          <Phone className="w-4 h-4 text-[#FFD481]" />
          <span>LET’S TALK</span>
        </a>

        <a
          href="https://wa.me/919810196863?text=Hello%20Rathore%20Weddings%2C%20I%20would%20like%20to%20discuss%20our%20upcoming%20wedding%20plans."
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:opacity-90 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>LIVE CHAT</span>
        </a>
      </div>

      {/* 21. Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedService={selectedServiceForInquiry}
      />

      <GalleryLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={RATHORE_PORTFOLIO}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title="Rathore Weddings · Real Ceremony Highlights"
      />
    </div>
  );
};
