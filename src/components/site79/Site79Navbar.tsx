import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Users,
  Ticket,
  UtensilsCrossed,
  Sparkles,
  Phone,
  X,
  Menu as MenuIcon,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Flame,
  Wine
} from 'lucide-react';
import { site79Config } from '../../config/site79Config';

interface Site79NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenTableBooking: () => void;
  onOpenGuestlist: () => void;
  onOpenWalkIn: () => void;
  onBackToHub?: () => void;
}

export const Site79Navbar: React.FC<Site79NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenTableBooking,
  onOpenGuestlist,
  onOpenWalkIn,
  onBackToHub
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookDropdownOpen, setBookDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (tabName: string) => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
    setBookDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#DFB759]/25 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
            {/* Left Nav (Desktop) */}
            <ul className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-widest uppercase text-white/90 font-['Inter']">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className={`hover:text-[#DFB759] transition-colors cursor-pointer ${
                    activeTab === 'home' ? 'text-[#DFB759]' : ''
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('offers')}
                  className={`hover:text-[#DFB759] transition-colors cursor-pointer ${
                    activeTab === 'offers' ? 'text-[#DFB759]' : ''
                  }`}
                >
                  Offers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('gallery')}
                  className={`hover:text-[#DFB759] transition-colors cursor-pointer ${
                    activeTab === 'gallery' ? 'text-[#DFB759]' : ''
                  }`}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGuestlist}
                  className="hover:text-[#DFB759] transition-colors cursor-pointer"
                >
                  Guestlist
                </button>
              </li>
            </ul>

            {/* Center Logo */}
            <div className="flex justify-start lg:justify-center items-center">
              <button
                onClick={() => navigateTo('home')}
                className="text-left lg:text-center group cursor-pointer"
                aria-label="Elysium Nightclub Home"
              >
                <div className="flex flex-col items-start lg:items-center">
                  <span className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-black tracking-[0.22em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759] group-hover:brightness-110 transition-all drop-shadow-[0_2px_15px_rgba(223,183,89,0.35)]">
                    ELYSIUM
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-white/60 -mt-0.5 font-['Inter'] font-semibold">
                    THE ECSTASY • DELHI
                  </span>
                </div>
              </button>
            </div>

            {/* Right Nav & Book Now Action */}
            <div className="flex items-center justify-end gap-5">
              <ul className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-widest uppercase text-white/90 font-['Inter']">
                <li>
                  <button
                    onClick={() => navigateTo('menu')}
                    className={`hover:text-[#DFB759] transition-colors cursor-pointer ${
                      activeTab === 'menu' ? 'text-[#DFB759]' : ''
                    }`}
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('events')}
                    className={`hover:text-[#DFB759] transition-colors cursor-pointer ${
                      activeTab === 'events' ? 'text-[#DFB759]' : ''
                    }`}
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('contact')}
                    className={`hover:text-[#DFB759] transition-colors cursor-pointer ${
                      activeTab === 'contact' ? 'text-[#DFB759]' : ''
                    }`}
                  >
                    Contact
                  </button>
                </li>
              </ul>

              {/* Book Now Dropdown CTA */}
              <div className="relative">
                <button
                  onClick={() => setBookDropdownOpen(!bookDropdownOpen)}
                  className="group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#e8c676] border-[#DFB759] text-black shadow-[0_0_18px_rgba(223,183,89,.35)] hover:shadow-[0_0_35px_rgba(223,183,89,.6)] hover:scale-[1.03] cursor-pointer text-xs sm:text-sm font-bold tracking-wider uppercase"
                  aria-expanded={bookDropdownOpen}
                >
                  <span>Book Now</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      bookDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {bookDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-gradient-to-b from-[#16130d] to-[#0a0a0a] border border-[#DFB759]/40 p-2 shadow-[0_15px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl animate-fadeIn z-50">
                    <button
                      onClick={() => {
                        setBookDropdownOpen(false);
                        onOpenTableBooking();
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-white flex items-center gap-3 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#DFB759]/20 border border-[#DFB759]/40 flex items-center justify-center text-[#DFB759]">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#DFB759] transition-colors">
                          Reserve a Table
                        </div>
                        <div className="text-[10px] text-white/50">
                          Flat 20% online booking discount
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setBookDropdownOpen(false);
                        onOpenGuestlist();
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-white flex items-center gap-3 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#DFB759]/20 border border-[#DFB759]/40 flex items-center justify-center text-[#DFB759]">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#DFB759] transition-colors">
                          Join Guestlist
                        </div>
                        <div className="text-[10px] text-white/50">
                          Couples & female stags RSVP
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setBookDropdownOpen(false);
                        onOpenWalkIn();
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-white flex items-center gap-3 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#DFB759]/20 border border-[#DFB759]/40 flex items-center justify-center text-[#DFB759]">
                        <Ticket className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#DFB759] transition-colors">
                          VIP Walk-ins
                        </div>
                        <div className="text-[10px] text-white/50">
                          Prepaid queue-skip passes
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Back to Platform Link if in applet showcase */}
              {onBackToHub && (
                <button
                  onClick={onBackToHub}
                  className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-[#DFB759] text-[11px] font-semibold transition-all cursor-pointer"
                >
                  <span>130 Demos</span>
                </button>
              )}

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#DFB759] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sliding Drawer */}
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

          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm overflow-y-auto bg-gradient-to-b from-[#14110b] via-[#0a0a0a] to-[#050505] border-l border-[#DFB759]/30 shadow-[-10px_0_40px_rgba(223,183,89,0.2)] p-6 flex flex-col justify-between">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="font-['Cinzel',serif] text-xl font-bold tracking-widest text-[#DFB759]">
                    ELYSIUM
                  </span>
                  <span className="text-[9px] tracking-[0.25em] text-white/50">
                    CONNAUGHT PLACE • DELHI
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full border border-white/20 text-white/70 hover:text-[#DFB759] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="py-6 space-y-1.5 font-['Inter']">
                <button
                  onClick={() => navigateTo('home')}
                  className="w-full text-left py-3 px-4 rounded-xl text-white hover:bg-white/5 hover:text-[#DFB759] flex items-center justify-between text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTableBooking();
                  }}
                  className="w-full text-left py-3 px-4 rounded-xl text-white hover:bg-white/5 hover:text-[#DFB759] flex items-center justify-between text-sm font-semibold transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#DFB759]" />
                    <span>Table Reservation</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#DFB759] bg-[#DFB759]/10 px-2 py-0.5 rounded-full">
                    20% OFF
                  </span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGuestlist();
                  }}
                  className="w-full text-left py-3 px-4 rounded-xl text-white hover:bg-white/5 hover:text-[#DFB759] flex items-center justify-between text-sm font-semibold transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-[#DFB759]" />
                    <span>Join Guestlist</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWalkIn();
                  }}
                  className="w-full text-left py-3 px-4 rounded-xl text-white hover:bg-white/5 hover:text-[#DFB759] flex items-center justify-between text-sm font-semibold transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Ticket className="w-4 h-4 text-[#DFB759]" />
                    <span>VIP Walk-ins</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                <button
                  onClick={() => navigateTo('events')}
                  className="w-full text-left py-3 px-4 rounded-xl text-white hover:bg-white/5 hover:text-[#DFB759] flex items-center justify-between text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Weekly Events & Lineup</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                <button
                  onClick={() => navigateTo('offers')}
                  className="w-full text-left py-3 px-4 rounded-xl text-white hover:bg-white/5 hover:text-[#DFB759] flex items-center justify-between text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Exclusive Offers</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                <button
                  onClick={() => navigateTo('gallery')}
                  className="w-full text-left py-3 px-4 rounded-xl text-white hover:bg-white/5 hover:text-[#DFB759] flex items-center justify-between text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Photo & Video Gallery</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                <button
                  onClick={() => navigateTo('menu')}
                  className="w-full text-left py-3 px-4 rounded-xl text-white hover:bg-white/5 hover:text-[#DFB759] flex items-center justify-between text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Mixology & Dining Menu</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>

                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full text-left py-3 px-4 rounded-xl text-white hover:bg-white/5 hover:text-[#DFB759] flex items-center justify-between text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Location & Contact</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </button>
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTableBooking();
                }}
                className="w-full py-3.5 rounded-full text-center bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#e8c676] text-black font-bold tracking-wider text-xs uppercase shadow-[0_0_20px_rgba(223,183,89,0.35)] cursor-pointer"
              >
                Book a Table (20% Off)
              </button>

              <a
                href={`https://wa.me/${site79Config.WHATSAPP}?text=Hi%20Elysium!%20I%20would%20like%20to%20know%20about%20table%20bookings%20and%20guestlist.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-center border border-white/20 text-white font-semibold text-xs tracking-wider uppercase hover:border-[#DFB759] block cursor-pointer transition-colors"
              >
                WhatsApp Concierge
              </a>

              <div className="text-[10px] text-white/40 text-center pt-2">
                Shangri-La's Eros Hotel, CP, New Delhi
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
