import React, { useState, useEffect } from 'react';
import {
  X,
  Menu as MenuIcon,
  ChevronDown,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  ArrowRight,
  Sparkles,
  Phone,
  Clock
} from 'lucide-react';
import { site80Config } from '../../config/site80Config';

interface Site80NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenBooking: (eventTitle?: string) => void;
  onBackToHub?: () => void;
}

export const Site80Navbar: React.FC<Site80NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenBooking,
  onBackToHub
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setGalleryDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Header Container */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#000000]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
            : 'bg-gradient-to-b from-black/95 via-black/75 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* 1. Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateTo('home')}
                className="text-left group cursor-pointer flex items-center gap-2"
                aria-label="Club Noir Blanc Home"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-black tracking-[0.2em] uppercase text-white group-hover:text-[#FFD700] transition-colors">
                      CLUB NOIR
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700]" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.38em] text-white/60 font-semibold font-['Inter']">
                    BLANC • THE SURYAA NEW DELHI
                  </span>
                </div>
              </button>
            </div>

            {/* 2. Desktop Navigation Menu */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8 font-['Alegreya_Sans',sans-serif]">
              {/* What's new */}
              <button
                onClick={() => navigateTo('home')}
                className={`text-base tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer relative pb-1 ${
                  currentView === 'home'
                    ? 'text-[#FFD700] border-b-2 border-white'
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-[#FFD700]'
                }`}
              >
                What’s new
              </button>

              {/* About */}
              <button
                onClick={() => navigateTo('about')}
                className={`text-base tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer relative pb-1 ${
                  currentView === 'about'
                    ? 'text-[#FFD700] border-b-2 border-white'
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-[#FFD700]'
                }`}
              >
                About
              </button>

              {/* Gallery Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setGalleryDropdownOpen(true)}
                onMouseLeave={() => setGalleryDropdownOpen(false)}
              >
                <button
                  className={`text-base tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 pb-1 ${
                    currentView === 'media' || currentView === 'post-event'
                      ? 'text-[#FFD700] border-b-2 border-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                  aria-expanded={galleryDropdownOpen}
                >
                  <span>Gallery</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      galleryDropdownOpen ? 'rotate-180 text-[#FFD700]' : ''
                    }`}
                  />
                </button>

                {/* Submenu Dropdown */}
                {galleryDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-44 rounded-xl bg-[#0e0e0e] border border-white/15 p-2 shadow-2xl backdrop-blur-xl animate-fadeIn">
                    <button
                      onClick={() => navigateTo('media')}
                      className={`w-full text-left px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                        currentView === 'media'
                          ? 'bg-white/15 text-[#FFD700]'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      Media
                    </button>
                    <button
                      onClick={() => navigateTo('post-event')}
                      className={`w-full text-left px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                        currentView === 'post-event'
                          ? 'bg-white/15 text-[#FFD700]'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      Post Event
                    </button>
                  </div>
                )}
              </div>

              {/* Videos */}
              <button
                onClick={() => navigateTo('videos')}
                className={`text-base tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer relative pb-1 ${
                  currentView === 'videos'
                    ? 'text-[#FFD700] border-b-2 border-white'
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-[#FFD700]'
                }`}
              >
                Videos
              </button>

              {/* Contact */}
              <button
                onClick={() => navigateTo('contact')}
                className={`text-base tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer relative pb-1 ${
                  currentView === 'contact'
                    ? 'text-[#FFD700] border-b-2 border-white'
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-[#FFD700]'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* 3. Right Zone: Social Icons & Book CTA */}
            <div className="flex items-center gap-4">
              {/* Social Icons (Hidden on mobile) */}
              <div className="hidden xl:flex items-center gap-2.5">
                <a
                  href={site80Config.SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#FFD700] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Club Facebook"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                </a>
                <a
                  href={site80Config.SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#FFD700] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Club Twitter"
                >
                  <Twitter className="w-3.5 h-3.5 fill-current" />
                </a>
                <a
                  href={site80Config.SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#FFD700] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Club YouTube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a
                  href={site80Config.SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#FFD700] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Club Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Table Booking Action Button */}
              <button
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFD700] bg-transparent hover:bg-[#FFD700] text-white hover:text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.25)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)]"
              >
                <span>Book Table</span>
              </button>

              {/* Hub switch button if in demo platform */}
              {onBackToHub && (
                <button
                  onClick={onBackToHub}
                  className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-white/20 text-white/70 hover:text-white text-xs font-semibold cursor-pointer"
                >
                  <span>130 Demos</span>
                </button>
              )}

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#FFD700] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden animate-fadeIn"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm overflow-y-auto bg-gradient-to-b from-[#141414] via-[#0a0a0a] to-[#050505] border-l border-white/15 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Drawer Top Lockup */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="font-['Cinzel',serif] text-xl font-bold tracking-widest text-[#FFD700]">
                    CLUB NOIR BLANC
                  </span>
                  <span className="text-[9px] tracking-[0.25em] text-white/50">
                    THE SURYAA NEW DELHI
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full border border-white/20 text-white hover:text-[#FFD700] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="py-6 space-y-1.5 font-['Alegreya_Sans',sans-serif]">
                <button
                  onClick={() => navigateTo('home')}
                  className={`w-full text-left py-3 px-4 rounded-xl text-base font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    currentView === 'home'
                      ? 'bg-white/10 text-[#FFD700]'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  <span>What’s new</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                <button
                  onClick={() => navigateTo('about')}
                  className={`w-full text-left py-3 px-4 rounded-xl text-base font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    currentView === 'about'
                      ? 'bg-white/10 text-[#FFD700]'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  <span>About</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                {/* Gallery Accordion inside Mobile */}
                <div className="p-2 rounded-xl bg-white/[0.03] space-y-1">
                  <div className="text-xs uppercase font-bold text-white/50 px-2 py-1 tracking-wider">
                    Gallery
                  </div>
                  <button
                    onClick={() => navigateTo('media')}
                    className={`w-full text-left py-2 px-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                      currentView === 'media'
                        ? 'bg-white/15 text-[#FFD700]'
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    Media
                  </button>
                  <button
                    onClick={() => navigateTo('post-event')}
                    className={`w-full text-left py-2 px-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                      currentView === 'post-event'
                        ? 'bg-white/15 text-[#FFD700]'
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    Post Event
                  </button>
                </div>

                <button
                  onClick={() => navigateTo('videos')}
                  className={`w-full text-left py-3 px-4 rounded-xl text-base font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    currentView === 'videos'
                      ? 'bg-white/10 text-[#FFD700]'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  <span>Videos</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                <button
                  onClick={() => navigateTo('contact')}
                  className={`w-full text-left py-3 px-4 rounded-xl text-base font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    currentView === 'contact'
                      ? 'bg-white/10 text-[#FFD700]'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  <span>Contact</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>
              </div>

              {/* Book Table Button in Drawer */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-full bg-[#FFD700] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg text-center"
                >
                  Reserve VIP Table
                </button>
              </div>
            </div>

            {/* Social in Drawer */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-3">
                <a
                  href={site80Config.SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                </a>
                <a
                  href={site80Config.SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80"
                >
                  <Twitter className="w-3.5 h-3.5 fill-current" />
                </a>
                <a
                  href={site80Config.SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
