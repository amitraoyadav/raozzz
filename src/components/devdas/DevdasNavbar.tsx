import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Calendar,
  MapPin,
  Building,
  Award,
  BookOpen,
  ArrowRight,
  Shield,
  Layers,
  Heart,
  Music,
  Camera,
  Utensils,
  Car,
  Compass,
} from 'lucide-react';
import { DevdasLogo } from './DevdasLogo';
import { DESTINATIONS_DATA, SERVICES_DATA } from '../../data/devdasWeddingData';

interface DevdasNavbarProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenInquiry: () => void;
  onOpenDestination: (slug: string) => void;
  onOpenService: (slug: string) => void;
  onOpenSubPage: (pageType: string) => void;
}

export const DevdasNavbar: React.FC<DevdasNavbarProps> = ({
  onNavigateToSection,
  onOpenInquiry,
  onOpenDestination,
  onOpenService,
  onOpenSubPage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile accordion state
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleMobileSub = (key: string) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigateToSection(sectionId);
  };

  const handleDestinationClick = (slug: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenDestination(slug);
  };

  const handleServiceClick = (slug: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenService(slug);
  };

  const handleSubPageClick = (pageType: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenSubPage(pageType);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-amber-900/10 py-2.5 sm:py-3'
          : 'bg-white border-b border-slate-100 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer focus:outline-none"
        >
          <DevdasLogo theme="dark" size="md" showSubline={true} />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs xl:text-sm font-semibold text-slate-700">
          {/* HOME */}
          <button
            onClick={() => handleNavClick('hero')}
            className="px-2.5 py-2 hover:text-[#7A1C30] rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
          >
            Home
          </button>

          {/* ABOUT US DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('intro')}
              className={`px-2.5 py-2 flex items-center gap-1 rounded-lg transition-colors cursor-pointer uppercase tracking-wider ${
                activeDropdown === 'about' ? 'text-[#7A1C30] bg-rose-50' : 'hover:text-[#7A1C30]'
              }`}
            >
              <span>About Us</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'about' && (
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-amber-900/10 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <button
                  onClick={() => handleSubPageClick('story')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-rose-50 hover:text-[#7A1C30] transition-colors text-xs font-bold flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#7A1C30]" />
                    <span>Our Story &amp; Founders</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleNavClick('intro')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-rose-50 hover:text-[#7A1C30] transition-colors text-xs font-bold flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#7A1C30]" />
                    <span>Why Devdas Wedding</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleNavClick('team')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-rose-50 hover:text-[#7A1C30] transition-colors text-xs font-bold flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#7A1C30]" />
                    <span>Creative Nuptial Artistes</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            )}
          </div>

          {/* DESTINATIONS MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('destinations')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('destinations')}
              className={`px-2.5 py-2 flex items-center gap-1 rounded-lg transition-colors cursor-pointer uppercase tracking-wider ${
                activeDropdown === 'destinations' ? 'text-[#7A1C30] bg-rose-50' : 'hover:text-[#7A1C30]'
              }`}
            >
              <span>Destinations</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'destinations' && (
              <div className="absolute left-0 mt-1 w-[560px] bg-white rounded-2xl shadow-2xl border border-amber-900/10 p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                {DESTINATIONS_DATA.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => handleDestinationClick(dest.slug)}
                    className="text-left p-2.5 rounded-xl hover:bg-rose-50 hover:text-[#7A1C30] transition-colors text-xs group flex items-start gap-3"
                  >
                    <img
                      src={dest.coverImage}
                      alt={dest.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0 mt-0.5 border border-amber-900/10"
                    />
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#7A1C30] flex items-center gap-1">
                        <span>{dest.name}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 font-normal">
                          {dest.vibe.split(' ')[0]}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {dest.tagline}
                      </p>
                    </div>
                  </button>
                ))}

                <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-2">
                  <span>Transparent Hotel Contracts &amp; Attrition Protection</span>
                  <button
                    onClick={() => handleNavClick('calculator')}
                    className="font-bold text-[#7A1C30] hover:underline"
                  >
                    Calculate Destination Budget →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('services')}
              className={`px-2.5 py-2 flex items-center gap-1 rounded-lg transition-colors cursor-pointer uppercase tracking-wider ${
                activeDropdown === 'services' ? 'text-[#7A1C30] bg-rose-50' : 'hover:text-[#7A1C30]'
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-amber-900/10 p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                {SERVICES_DATA.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => handleServiceClick(srv.slug)}
                    className="w-full text-left p-2 rounded-xl hover:bg-rose-50 hover:text-[#7A1C30] transition-colors text-xs group flex items-center gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-rose-100 text-[#7A1C30] flex items-center justify-center shrink-0">
                      {srv.slug.includes('venue') && <Building className="w-3.5 h-3.5" />}
                      {srv.slug.includes('decor') && <Sparkles className="w-3.5 h-3.5" />}
                      {srv.slug.includes('hospitality') && <Car className="w-3.5 h-3.5" />}
                      {srv.slug.includes('entertainment') && <Music className="w-3.5 h-3.5" />}
                      {srv.slug.includes('photo') && <Camera className="w-3.5 h-3.5" />}
                      {srv.slug.includes('catering') && <Utensils className="w-3.5 h-3.5" />}
                    </div>
                    <span className="font-semibold text-slate-800 group-hover:text-[#7A1C30] truncate">
                      {srv.title}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PACKAGES & COSTS */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('packages')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('packages')}
              className={`px-2.5 py-2 flex items-center gap-1 rounded-lg transition-colors cursor-pointer uppercase tracking-wider ${
                activeDropdown === 'packages' ? 'text-[#7A1C30] bg-rose-50' : 'hover:text-[#7A1C30]'
              }`}
            >
              <span>Packages &amp; Cost</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'packages' && (
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-amber-900/10 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <button
                  onClick={() => handleNavClick('calculator')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-rose-50 hover:text-[#7A1C30] transition-colors text-xs font-bold flex items-center justify-between group"
                >
                  <span>Interactive Cost Estimator</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleNavClick('packages')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-rose-50 hover:text-[#7A1C30] transition-colors text-xs font-bold flex items-center justify-between group"
                >
                  <span>Planning Fees &amp; Packages</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleSubPageClick('costs')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-rose-50 hover:text-[#7A1C30] transition-colors text-xs font-bold flex items-center justify-between group"
                >
                  <span>Destination Cost Guides</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            )}
          </div>

          {/* REAL WEDDINGS */}
          <button
            onClick={() => handleNavClick('gallery')}
            className="px-2.5 py-2 hover:text-[#7A1C30] rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
          >
            Real Weddings
          </button>

          {/* BLOG */}
          <button
            onClick={() => handleNavClick('blog')}
            className="px-2.5 py-2 hover:text-[#7A1C30] rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
          >
            Blog
          </button>

          {/* CONTACT */}
          <button
            onClick={() => handleNavClick('inquiry')}
            className="px-2.5 py-2 hover:text-[#7A1C30] rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
          >
            Contact
          </button>
        </nav>

        {/* Header Right Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="px-5 py-2.5 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-red-950/20 cursor-pointer flex items-center gap-1.5 border border-amber-400/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Plan Your Wedding</span>
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-rose-50 hover:text-[#7A1C30] transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-Out Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl p-5 space-y-3 max-h-[82vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <button
            onClick={() => handleNavClick('hero')}
            className="w-full text-left py-2 px-3 rounded-xl hover:bg-rose-50 text-slate-800 font-bold text-xs uppercase tracking-wider"
          >
            Home
          </button>

          {/* Mobile About Accordion */}
          <div>
            <button
              onClick={() => toggleMobileSub('about')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-rose-50 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-between"
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileExpanded['about'] ? 'rotate-180 text-[#7A1C30]' : ''
                }`}
              />
            </button>
            {mobileExpanded['about'] && (
              <div className="pl-6 pr-2 py-1 space-y-1 text-xs">
                <button
                  onClick={() => handleSubPageClick('story')}
                  className="w-full text-left py-1.5 text-slate-600 hover:text-[#7A1C30]"
                >
                  Our Story &amp; Founders
                </button>
                <button
                  onClick={() => handleNavClick('intro')}
                  className="w-full text-left py-1.5 text-slate-600 hover:text-[#7A1C30]"
                >
                  Why Devdas Wedding
                </button>
                <button
                  onClick={() => handleNavClick('team')}
                  className="w-full text-left py-1.5 text-slate-600 hover:text-[#7A1C30]"
                >
                  Nuptial Artistes &amp; Team
                </button>
              </div>
            )}
          </div>

          {/* Mobile Destinations Accordion */}
          <div>
            <button
              onClick={() => toggleMobileSub('dest')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-rose-50 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-between"
            >
              <span>Destinations</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileExpanded['dest'] ? 'rotate-180 text-[#7A1C30]' : ''
                }`}
              />
            </button>
            {mobileExpanded['dest'] && (
              <div className="pl-6 pr-2 py-1 space-y-1 text-xs">
                {DESTINATIONS_DATA.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => handleDestinationClick(dest.slug)}
                    className="w-full text-left py-1.5 text-slate-600 hover:text-[#7A1C30] flex items-center justify-between"
                  >
                    <span>{dest.name}</span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                      {dest.vibe.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => toggleMobileSub('serv')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-rose-50 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-between"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileExpanded['serv'] ? 'rotate-180 text-[#7A1C30]' : ''
                }`}
              />
            </button>
            {mobileExpanded['serv'] && (
              <div className="pl-6 pr-2 py-1 space-y-1 text-xs">
                {SERVICES_DATA.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => handleServiceClick(srv.slug)}
                    className="w-full text-left py-1.5 text-slate-600 hover:text-[#7A1C30]"
                  >
                    {srv.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Packages & Costs */}
          <div>
            <button
              onClick={() => toggleMobileSub('costs')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-rose-50 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-between"
            >
              <span>Packages &amp; Costs</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileExpanded['costs'] ? 'rotate-180 text-[#7A1C30]' : ''
                }`}
              />
            </button>
            {mobileExpanded['costs'] && (
              <div className="pl-6 pr-2 py-1 space-y-1 text-xs">
                <button
                  onClick={() => handleNavClick('calculator')}
                  className="w-full text-left py-1.5 text-slate-600 hover:text-[#7A1C30]"
                >
                  Interactive Cost Estimator
                </button>
                <button
                  onClick={() => handleNavClick('packages')}
                  className="w-full text-left py-1.5 text-slate-600 hover:text-[#7A1C30]"
                >
                  Planning Fees &amp; Packages
                </button>
                <button
                  onClick={() => handleSubPageClick('costs')}
                  className="w-full text-left py-1.5 text-slate-600 hover:text-[#7A1C30]"
                >
                  Destination Cost Guides
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('gallery')}
            className="w-full text-left py-2 px-3 rounded-xl hover:bg-rose-50 text-slate-800 font-bold text-xs uppercase tracking-wider"
          >
            Real Weddings
          </button>

          <button
            onClick={() => handleNavClick('blog')}
            className="w-full text-left py-2 px-3 rounded-xl hover:bg-rose-50 text-slate-800 font-bold text-xs uppercase tracking-wider"
          >
            Blog
          </button>

          <button
            onClick={() => handleNavClick('inquiry')}
            className="w-full text-left py-2 px-3 rounded-xl hover:bg-rose-50 text-slate-800 font-bold text-xs uppercase tracking-wider"
          >
            Contact
          </button>

          <div className="pt-3 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 rounded-xl bg-[#7A1C30] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
