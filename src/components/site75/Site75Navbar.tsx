import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronDown, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { site75Config } from '../../config/site75Config';
import { DESTINATIONS_DATA, SERVICES_DATA } from '../../data/site75Data';

interface Site75NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPlanning: () => void;
  onOpenCallback: () => void;
  onSelectDestination?: (destSlug: string) => void;
  onSelectService?: (serviceSlug: string) => void;
}

export const Site75Navbar: React.FC<Site75NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenPlanning,
  onOpenCallback,
  onSelectDestination,
  onSelectService
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setDestDropdownOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'The Atelier' },
    { id: 'services', label: 'Services', hasDropdown: 'services' },
    { id: 'destinations', label: 'Destinations', hasDropdown: 'destinations' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080B12]/95 backdrop-blur-md border-b border-[#20293D] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#080B12]/90 via-[#080B12]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-[#080B12] flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold group-hover:border-[#D4AF37] group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              AL
            </div>
            <div>
              <span className="block font-serif tracking-[0.25em] text-lg sm:text-xl font-medium text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                AURA LUXE
              </span>
              <span className="block font-sans text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
                Wedding Atelier
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] tracking-widest uppercase font-sans font-light">
            {navLinks.map(link => {
              const isActive = activeTab === link.id;

              if (link.hasDropdown === 'destinations') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setDestDropdownOpen(true)}
                    onMouseLeave={() => setDestDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('destinations')}
                      className={`flex items-center gap-1 transition-colors cursor-pointer py-2 ${
                        isActive || destDropdownOpen ? 'text-[#D4AF37]' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${destDropdownOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                    </button>

                    {/* Destinations Mega Dropdown */}
                    {destDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-[#0E131F] border border-[#20293D] rounded-2xl shadow-2xl p-5 text-left grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold block mb-2 px-2.5">
                            Royal India
                          </span>
                          <div className="space-y-1">
                            {DESTINATIONS_DATA.filter(d => d.region === 'India').slice(0, 4).map(dest => (
                              <button
                                key={dest.id}
                                onClick={() => {
                                  if (onSelectDestination) onSelectDestination(dest.slug);
                                  handleNavClick('destinations');
                                }}
                                className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs normal-case text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                              >
                                <span>{dest.name}</span>
                                <span className="text-[10px] text-stone-500 font-mono">Explore →</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold block mb-2 px-2.5">
                            International Sanctuaries
                          </span>
                          <div className="space-y-1">
                            {DESTINATIONS_DATA.filter(d => d.region === 'International').map(dest => (
                              <button
                                key={dest.id}
                                onClick={() => {
                                  if (onSelectDestination) onSelectDestination(dest.slug);
                                  handleNavClick('destinations');
                                }}
                                className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs normal-case text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                              >
                                <span>{dest.name}</span>
                                <span className="text-[10px] text-stone-500 font-mono">Explore →</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="col-span-2 pt-3 border-t border-[#20293D] flex items-center justify-between px-2 text-[11px] normal-case text-stone-400">
                          <span>18+ Iconic Destinations Worldwide</span>
                          <button
                            onClick={() => handleNavClick('destinations')}
                            className="text-[#D4AF37] font-medium hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            View All Curated Sanctuaries →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasDropdown === 'services') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`flex items-center gap-1 transition-colors cursor-pointer py-2 ${
                        isActive || servicesDropdownOpen ? 'text-[#D4AF37]' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-[#0E131F] border border-[#20293D] rounded-2xl shadow-2xl p-4 text-left space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                        {SERVICES_DATA.slice(0, 6).map(service => (
                          <button
                            key={service.id}
                            onClick={() => {
                              if (onSelectService) onSelectService(service.slug);
                              handleNavClick('services');
                            }}
                            className="w-full text-left p-2 rounded-xl text-xs normal-case text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between group/srv"
                          >
                            <span className="font-medium group-hover/srv:text-[#D4AF37] transition-colors">
                              {service.title}
                            </span>
                            <ArrowRight className="w-3 h-3 text-stone-500 group-hover/srv:translate-x-1 group-hover/srv:text-[#D4AF37] transition-all" />
                          </button>
                        ))}
                        <div className="pt-2 border-t border-[#20293D] text-center">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="text-[11px] text-[#D4AF37] hover:underline normal-case cursor-pointer"
                          >
                            Explore All 8 Signature Pillars →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-2 transition-colors cursor-pointer ${
                    isActive ? 'text-[#D4AF37] font-normal' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs (Right-aligned) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Callback Trigger */}
            <button
              onClick={onOpenCallback}
              className="px-3.5 py-2 text-xs text-slate-300 hover:text-white border border-[#20293D] hover:border-[#D4AF37]/50 rounded-full transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-wider text-[11px] uppercase">Callback</span>
            </button>

            {/* Direct WhatsApp Concierge */}
            <a
              href={`https://wa.me/${site75Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(site75Config.WHATSAPP_DEFAULT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs text-emerald-300 hover:text-white border border-emerald-900/50 hover:border-emerald-500/50 bg-emerald-950/30 rounded-full transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="tracking-wider text-[11px] uppercase">WhatsApp</span>
            </a>

            {/* Start Planning Gold CTA */}
            <button
              onClick={onOpenPlanning}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#080B12] bg-gradient-to-r from-[#D4AF37] via-[#E8CA65] to-[#D4AF37] hover:brightness-110 active:scale-95 rounded-full transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Planning</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenPlanning}
              className="px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#080B12] bg-[#D4AF37] rounded-full sm:flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Plan</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-[#20293D] bg-[#0E131F] flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Full-Screen Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full h-[calc(100vh-70px)] bg-[#080B12]/98 backdrop-blur-2xl border-t border-[#20293D] flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Atelier Directory
            </span>
            <div className="space-y-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-lg font-serif transition-colors flex items-center justify-between ${
                    activeTab === link.id
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10 font-bold border-l-2 border-[#D4AF37]'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-stone-500 font-sans tracking-widest">0{navLinks.indexOf(link) + 1}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#20293D] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanning();
              }}
              className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-[#080B12] bg-[#D4AF37] rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Planning Celebration</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback();
                }}
                className="w-full py-2.5 text-xs font-semibold text-white border border-[#20293D] rounded-xl flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Us</span>
              </button>

              <a
                href={`https://wa.me/${site75Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(site75Config.WHATSAPP_DEFAULT_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-xl flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="text-center pt-2">
              <p className="text-[11px] text-stone-400 font-sans flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                {site75Config.REGIONAL_ATELIERS}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Site75Navbar;
