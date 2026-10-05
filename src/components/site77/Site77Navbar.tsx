import React, { useState, useEffect } from 'react';
import {
  Menu as MenuIcon,
  X,
  Phone,
  Calendar,
  Sparkles,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Music,
  ChevronDown,
  Clock,
  MapPin,
  ShieldCheck,
  Disc
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';

interface Site77NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenBooking: (tableId?: string) => void;
}

export const Site77Navbar: React.FC<Site77NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [audioPulsing, setAudioPulsing] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'events', label: 'Events' },
    { id: 'booking', label: 'Book a Table' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'franchise', label: 'Franchise' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact-us', label: 'Contact Us' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Flash Ticker - Tonight Announcement */}
      <div className="bg-[#050608] border-b border-[#2A2315] text-[#D4AF37] text-[11px] font-mono tracking-wider py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/40 uppercase tracking-widest animate-pulse">
              Tonight at 10 PM
            </span>
            <span className="text-white/90">
              DJ Nikhil Chinapa Live · Void Acoustics Arena · Limited VIP Mezzanine Tables Remaining
            </span>
          </div>
          <div className="flex items-center space-x-5 text-gray-400">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3 h-3 text-[#D4AF37]" />
              <span>9:00 PM – 4:30 AM (365 Nights)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>Baga Creek, North Goa</span>
            </div>
            <a
              href={`tel:${site77Config.PHONE}`}
              className="text-[#D4AF37] hover:text-[#F3E5AB] transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3 h-3" />
              <span>VIP Hotline: {site77Config.PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-2xl shadow-black/80 py-3'
            : 'bg-[#07080A]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Club Brand Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="group flex items-center space-x-3 text-left focus:outline-none"
            >
              <div className="relative w-10 h-10 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-gradient-to-br from-[#1A1810] to-[#0A0B0E] group-hover:border-[#D4AF37] transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                <Disc className="w-5 h-5 text-[#D4AF37] animate-[spin_8s_linear_infinite]" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-serif tracking-[0.25em] text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors uppercase">
                    {site77Config.BRAND_NAME}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                </div>
                <p className="text-[9px] font-mono tracking-[0.25em] text-[#D4AF37]/80 uppercase">
                  LUXURY NIGHTCLUB · GOA
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map(link => {
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative px-3 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                      isActive
                        ? 'text-[#F3E5AB] font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_8px_#D4AF37]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Header Right Action Area */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Audio Beat Wave Widget */}
              <button
                onClick={() => setAudioPulsing(!audioPulsing)}
                title="Club Sound Monitor"
                className="hidden xl:flex items-center space-x-1.5 px-2.5 py-1.5 rounded border border-white/10 bg-white/5 hover:border-[#D4AF37]/40 text-[10px] font-mono text-gray-400 hover:text-white transition-all"
              >
                <Music className="w-3 h-3 text-[#D4AF37]" />
                <div className="flex items-end space-x-0.5 h-3">
                  <span
                    className={`w-0.5 bg-[#D4AF37] rounded-full transition-all ${
                      audioPulsing ? 'h-3 animate-pulse' : 'h-1'
                    }`}
                  />
                  <span
                    className={`w-0.5 bg-[#F3E5AB] rounded-full transition-all ${
                      audioPulsing ? 'h-2 animate-bounce' : 'h-1'
                    }`}
                  />
                  <span
                    className={`w-0.5 bg-[#D4AF37] rounded-full transition-all ${
                      audioPulsing ? 'h-3.5 animate-pulse' : 'h-1.5'
                    }`}
                  />
                  <span
                    className={`w-0.5 bg-amber-400 rounded-full transition-all ${
                      audioPulsing ? 'h-2.5 animate-bounce' : 'h-1'
                    }`}
                  />
                </div>
                <span>132 BPM</span>
              </button>

              {/* VIP Table Booking Primary CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="relative group overflow-hidden px-5 py-2.5 rounded bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                  <span>Book a Table</span>
                </span>
                <span className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider sm:hidden"
              >
                Book Table
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Off-Canvas Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#07080A]/98 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn overflow-y-auto">
          {/* Mobile Top Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#1A1810]">
                <Disc className="w-4 h-4 text-[#D4AF37] animate-[spin_6s_linear_infinite]" />
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-lg font-bold text-white uppercase">
                  {site77Config.BRAND_NAME}
                </span>
                <p className="text-[9px] font-mono tracking-widest text-[#D4AF37]">
                  LUXURY NIGHTCLUB GOA
                </p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border border-white/20 text-gray-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="py-6 space-y-2">
            {navLinks.map(link => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left py-3 px-3 rounded flex items-center justify-between text-base uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? 'text-[#F3E5AB] bg-[#D4AF37]/10 font-bold border-l-2 border-[#D4AF37]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
              );
            })}
          </div>

          {/* Bottom Actions & Concierge */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reserve Your VIP Table</span>
            </button>

            <a
              href={`https://wa.me/${site77Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(
                site77Config.WHATSAPP_DEFAULT_MSG
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
            >
              <span>Direct WhatsApp Concierge</span>
            </a>

            <div className="flex items-center justify-center space-x-6 text-gray-400 pt-2">
              <a href={site77Config.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={site77Config.FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={site77Config.YOUTUBE} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={site77Config.SPOTIFY} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">
                <Music className="w-5 h-5" />
              </a>
            </div>

            <p className="text-center text-[10px] font-mono text-gray-500">
              {site77Config.ADDRESS}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
