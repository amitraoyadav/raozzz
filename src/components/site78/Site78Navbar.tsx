import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Calendar,
  Sparkles,
  MapPin,
  Waves,
  MessageCircle,
  Clock,
  Compass
} from 'lucide-react';
import { site78Config } from '../../config/site78Config';
import { GOA_GUIDE_CATEGORIES, ROOMS_DATA } from '../../data/site78Data';

interface Site78NavbarProps {
  currentView: string;
  onNavigate: (view: string, guideCategorySlug?: string, roomSlug?: string) => void;
  onOpenBooking: (roomSlug?: string) => void;
}

export const Site78Navbar: React.FC<Site78NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenBooking
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);
  const [guideDropdownOpen, setGuideDropdownOpen] = useState(false);
  const [mobileRoomsOpen, setMobileRoomsOpen] = useState(false);
  const [mobileGuideOpen, setMobileGuideOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, guideCategorySlug?: string, roomSlug?: string) => {
    onNavigate(view, guideCategorySlug, roomSlug);
    setMobileMenuOpen(false);
    setRoomsDropdownOpen(false);
    setGuideDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar with Contacts & Timings */}
      <div className="bg-[#1C1C1C] text-[#C0C0C0] text-[12px] font-['Jost',sans-serif] tracking-wider py-2 px-4 sm:px-8 border-b border-white/10 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-[#B99D75]" />
            <span>Morjim Beachfront, North Goa</span>
          </div>
          <div className="flex items-center gap-2 text-stone-300">
            <Clock className="w-3.5 h-3.5 text-[#B99D75]" />
            <span>Check-in: {site78Config.CHECK_IN_TIME} | Check-out: {site78Config.CHECK_OUT_TIME}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${site78Config.PHONE_ROOMS_RAW}`}
            className="flex items-center gap-1.5 hover:text-[#B99D75] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#B99D75]" />
            <span>Room Bookings: {site78Config.PHONE_ROOMS}</span>
          </a>
          <a
            href={`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(site78Config.WHATSAPP_DEFAULT_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Concierge</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md text-[#222222] shadow-md py-3 border-b border-[#E5DFD7]'
            : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group flex items-center gap-3 cursor-pointer"
          >
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                scrolled
                  ? 'border-[#B99D75] bg-[#747157] text-white shadow-xs'
                  : 'border-[#B99D75] bg-black/40 text-[#B99D75] backdrop-blur-xs'
              }`}
            >
              <span className="font-['Cormorant',serif] font-bold text-2xl tracking-tighter">A</span>
            </div>
            <div>
              <span
                className={`font-['Cormorant',serif] text-2xl sm:text-3xl font-bold tracking-[0.18em] uppercase block leading-none transition-colors ${
                  scrolled ? 'text-[#222222] group-hover:text-[#747157]' : 'text-white group-hover:text-[#B99D75]'
                }`}
              >
                {site78Config.WORDMARK}
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-['Jost',sans-serif] block mt-1 transition-colors ${
                  scrolled ? 'text-[#747157]' : 'text-[#B99D75]'
                }`}
              >
                {site78Config.SUB_WORDMARK}
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7 text-[13px] font-['Jost',sans-serif] font-medium tracking-[0.12em] uppercase">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors py-2 cursor-pointer ${
                currentView === 'home'
                  ? 'text-[#B99D75] border-b-2 border-[#B99D75]'
                  : scrolled
                  ? 'hover:text-[#747157] text-[#222222]'
                  : 'hover:text-[#B99D75] text-white/90'
              }`}
            >
              Home
            </button>

            {/* Rooms Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setRoomsDropdownOpen(true)}
              onMouseLeave={() => setRoomsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('room-deluxe')}
                className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                  currentView.startsWith('room-')
                    ? 'text-[#B99D75] border-b-2 border-[#B99D75]'
                    : scrolled
                    ? 'hover:text-[#747157] text-[#222222]'
                    : 'hover:text-[#B99D75] text-white/90'
                }`}
              >
                <span>Rooms</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {roomsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white text-[#222222] rounded-xl shadow-2xl border border-[#E5DFD7] py-2 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleNavClick('room-deluxe', undefined, 'deluxe-double-room-with-private-pool')}
                    className="w-full text-left px-5 py-3 hover:bg-[#F3EEE7] transition-colors border-b border-[#F3EEE7] cursor-pointer"
                  >
                    <div className="font-['Cormorant',serif] font-semibold text-base text-[#222222]">
                      Deluxe Double Room
                    </div>
                    <div className="text-[11px] text-[#747157] tracking-wider capitalize font-light mt-0.5">
                      With Private Plunge Pool · 420 SQ.FT
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('room-suite', undefined, 'two-bedroom-premium-suite')}
                    className="w-full text-left px-5 py-3 hover:bg-[#F3EEE7] transition-colors cursor-pointer"
                  >
                    <div className="font-['Cormorant',serif] font-semibold text-base text-[#222222]">
                      Two Bedroom Premium Suite
                    </div>
                    <div className="text-[11px] text-[#747157] tracking-wider capitalize font-light mt-0.5">
                      With Private Pool & Garden · 780 SQ.FT
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Direct Links to Rooms as in reference */}
            <button
              onClick={() => handleNavClick('room-deluxe', undefined, 'deluxe-double-room-with-private-pool')}
              className={`transition-colors py-2 cursor-pointer ${
                currentView === 'room-deluxe'
                  ? 'text-[#B99D75] border-b-2 border-[#B99D75]'
                  : scrolled
                  ? 'hover:text-[#747157] text-[#222222]'
                  : 'hover:text-[#B99D75] text-white/90'
              }`}
            >
              Deluxe Double Room
            </button>

            <button
              onClick={() => handleNavClick('room-suite', undefined, 'two-bedroom-premium-suite')}
              className={`transition-colors py-2 cursor-pointer ${
                currentView === 'room-suite'
                  ? 'text-[#B99D75] border-b-2 border-[#B99D75]'
                  : scrolled
                  ? 'hover:text-[#747157] text-[#222222]'
                  : 'hover:text-[#B99D75] text-white/90'
              }`}
            >
              Premium Suite
            </button>

            {/* Events & Celebration */}
            <button
              onClick={() => handleNavClick('events')}
              className={`transition-colors py-2 cursor-pointer ${
                currentView === 'events'
                  ? 'text-[#B99D75] border-b-2 border-[#B99D75]'
                  : scrolled
                  ? 'hover:text-[#747157] text-[#222222]'
                  : 'hover:text-[#B99D75] text-white/90'
              }`}
            >
              Events & Celebration
            </button>

            {/* Goa Guide Mega-Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGuideDropdownOpen(true)}
              onMouseLeave={() => setGuideDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('goa-guide')}
                className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                  currentView === 'goa-guide'
                    ? 'text-[#B99D75] border-b-2 border-[#B99D75]'
                    : scrolled
                    ? 'hover:text-[#747157] text-[#222222]'
                    : 'hover:text-[#B99D75] text-white/90'
                }`}
              >
                <span>Goa Guide</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {guideDropdownOpen && (
                <div className="absolute top-full -left-20 w-[420px] bg-white text-[#222222] rounded-xl shadow-2xl border border-[#E5DFD7] p-3 grid grid-cols-2 gap-1.5 z-50 animate-fadeIn">
                  {GOA_GUIDE_CATEGORIES.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => handleNavClick('goa-guide', cat.slug)}
                      className="text-left px-3 py-2.5 rounded-lg hover:bg-[#F3EEE7] transition-all text-xs font-normal normal-case flex items-center justify-between group/item cursor-pointer"
                    >
                      <span className="font-medium text-[#222222] group-hover/item:text-[#747157]">
                        {cat.navTitle}
                      </span>
                      <span className="text-[10px] text-[#B99D75] opacity-0 group-hover/item:opacity-100 transition-opacity">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Blog / Insights */}
            <button
              onClick={() => handleNavClick('blog')}
              className={`transition-colors py-2 cursor-pointer ${
                currentView === 'blog'
                  ? 'text-[#B99D75] border-b-2 border-[#B99D75]'
                  : scrolled
                  ? 'hover:text-[#747157] text-[#222222]'
                  : 'hover:text-[#B99D75] text-white/90'
              }`}
            >
              Blog
            </button>

            {/* Contact Us */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors py-2 cursor-pointer ${
                currentView === 'contact'
                  ? 'text-[#B99D75] border-b-2 border-[#B99D75]'
                  : scrolled
                  ? 'hover:text-[#747157] text-[#222222]'
                  : 'hover:text-[#B99D75] text-white/90'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Book Rooms Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-[12px] font-['Jost',sans-serif] font-semibold tracking-[0.16em] uppercase transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B99D75]" />
              <span>Book Rooms</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg cursor-pointer ${
              scrolled ? 'text-[#222222] hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Off-Canvas Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] md:top-[98px] z-50 bg-[#1C1C1C] text-white overflow-y-auto animate-fadeIn pb-20 border-t border-white/10">
          <div className="px-6 py-6 space-y-4 font-['Jost',sans-serif]">
            {/* Quick Mobile Booking CTA */}
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#747157] text-white font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-md mb-6"
            >
              <Calendar className="w-4 h-4 text-[#B99D75]" />
              <span>Book Your Luxury Stay</span>
            </button>

            {/* Links List */}
            <div className="space-y-1 text-sm tracking-wider uppercase font-medium">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-3 border-b border-white/10 ${
                  currentView === 'home' ? 'text-[#B99D75] font-bold' : 'text-white'
                }`}
              >
                Home
              </button>

              {/* Rooms Submenu */}
              <div>
                <button
                  onClick={() => setMobileRoomsOpen(!mobileRoomsOpen)}
                  className="w-full text-left py-3 border-b border-white/10 flex items-center justify-between text-white"
                >
                  <span>Rooms & Suites</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileRoomsOpen ? 'rotate-180 text-[#B99D75]' : ''}`} />
                </button>
                {mobileRoomsOpen && (
                  <div className="pl-4 py-2 space-y-2 text-xs normal-case bg-black/30 rounded-lg my-1">
                    <button
                      onClick={() => handleNavClick('room-deluxe', undefined, 'deluxe-double-room-with-private-pool')}
                      className="block w-full text-left py-2 text-stone-300 hover:text-[#B99D75]"
                    >
                      • Deluxe Double Room With Private Pool (420 SQ.FT)
                    </button>
                    <button
                      onClick={() => handleNavClick('room-suite', undefined, 'two-bedroom-premium-suite')}
                      className="block w-full text-left py-2 text-stone-300 hover:text-[#B99D75]"
                    >
                      • Two Bedroom Premium Suite With Pool & Garden (780 SQ.FT)
                    </button>
                  </div>
                )}
              </div>

              {/* Events */}
              <button
                onClick={() => handleNavClick('events')}
                className={`w-full text-left py-3 border-b border-white/10 ${
                  currentView === 'events' ? 'text-[#B99D75] font-bold' : 'text-white'
                }`}
              >
                Events & Celebration
              </button>

              {/* Goa Guide Submenu */}
              <div>
                <button
                  onClick={() => setMobileGuideOpen(!mobileGuideOpen)}
                  className="w-full text-left py-3 border-b border-white/10 flex items-center justify-between text-white"
                >
                  <span>Goa Guide (9 Curated Guides)</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileGuideOpen ? 'rotate-180 text-[#B99D75]' : ''}`} />
                </button>
                {mobileGuideOpen && (
                  <div className="pl-4 py-2 space-y-1.5 text-xs normal-case bg-black/30 rounded-lg my-1">
                    {GOA_GUIDE_CATEGORIES.map(c => (
                      <button
                        key={c.slug}
                        onClick={() => handleNavClick('goa-guide', c.slug)}
                        className="block w-full text-left py-1.5 text-stone-300 hover:text-[#B99D75]"
                      >
                        • {c.navTitle}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog */}
              <button
                onClick={() => handleNavClick('blog')}
                className={`w-full text-left py-3 border-b border-white/10 ${
                  currentView === 'blog' ? 'text-[#B99D75] font-bold' : 'text-white'
                }`}
              >
                Blog & Insights
              </button>

              {/* Contact Us */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left py-3 border-b border-white/10 ${
                  currentView === 'contact' ? 'text-[#B99D75] font-bold' : 'text-white'
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Contact Quick Card */}
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300 space-y-2">
              <div className="font-['Cormorant',serif] text-base font-semibold text-[#B99D75]">
                Aurelia Luxury Beach Resort & Banquets
              </div>
              <p>{site78Config.ADDRESS_LINE}, {site78Config.DISTRICT}</p>
              <p>Room Bookings: <a href={`tel:${site78Config.PHONE_ROOMS_RAW}`} className="text-white underline">{site78Config.PHONE_ROOMS}</a></p>
              <p>Email: <a href={`mailto:${site78Config.EMAIL_RESERVATIONS}`} className="text-white underline">{site78Config.EMAIL_RESERVATIONS}</a></p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
