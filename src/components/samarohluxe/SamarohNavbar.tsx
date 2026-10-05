import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Menu, 
  X, 
  MapPin, 
  ChevronDown, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Crown
} from 'lucide-react';
import { SAMAROH_CONFIG } from '../../data/samarohLuxeData';

export type SamarohNavTab = 
  | 'home' 
  | 'packages' 
  | 'calculator' 
  | 'services' 
  | 'lookbook' 
  | 'venues' 
  | 'about' 
  | 'contact';

interface SamarohNavbarProps {
  activeTab: SamarohNavTab;
  onSelectTab: (tab: SamarohNavTab) => void;
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
  onOpenConsultation: () => void;
  onBackToHub?: () => void;
}

export const SamarohNavbar: React.FC<SamarohNavbarProps> = ({
  activeTab,
  onSelectTab,
  selectedCity,
  onSelectCity,
  onOpenConsultation,
  onBackToHub
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const activeCityObj = SAMAROH_CONFIG.CITIES.find(c => c.id === selectedCity) || SAMAROH_CONFIG.CITIES[0];

  const navLinks: { id: SamarohNavTab; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Decor Packages', badge: 'Curated' },
    { id: 'calculator', label: 'Decor Calculator', badge: 'Interactive' },
    { id: 'services', label: 'Services' },
    { id: 'lookbook', label: 'Real Weddings' },
    { id: 'venues', label: 'Styled Venues' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tab: SamarohNavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello ${SAMAROH_CONFIG.DISPLAY_NAME} team in ${activeCityObj.name}, I would like to schedule a free 3D decor consultation for our upcoming wedding.`
    );
    window.open(`https://wa.me/${SAMAROH_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Top Notification / City Switcher Bar */}
      <div className="bg-[#1C1917] text-stone-300 text-xs border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* City Selector */}
            <div className="relative">
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="inline-flex items-center gap-1.5 text-stone-200 hover:text-white font-medium bg-stone-800/80 hover:bg-stone-800 px-2.5 py-1 rounded-md transition-colors cursor-pointer border border-stone-700/60"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E06D53]" />
                <span>{activeCityObj.name}</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              {cityDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setCityDropdownOpen(false)} 
                  />
                  <div className="absolute left-0 mt-1 w-52 bg-[#292524] border border-stone-700 rounded-xl shadow-2xl z-50 py-1.5">
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-b border-stone-800">
                      Select Event City
                    </div>
                    {SAMAROH_CONFIG.CITIES.map(city => (
                      <button
                        key={city.id}
                        onClick={() => {
                          onSelectCity(city.id);
                          setCityDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-stone-750 transition-colors cursor-pointer ${
                          selectedCity === city.id ? 'text-[#E06D53] font-bold bg-stone-800/50' : 'text-stone-300'
                        }`}
                      >
                        <span>{city.name}</span>
                        {city.isPrimary && (
                          <span className="text-[9px] bg-stone-800 text-stone-400 px-1.5 py-0.5 rounded">HQ</span>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <span className="hidden sm:inline text-stone-400 text-[11px]">
              Studio: <strong className="text-stone-200 font-normal">{activeCityObj.studio}</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`tel:${SAMAROH_CONFIG.PHONE}`} 
              className="hidden md:inline-flex items-center gap-1.5 hover:text-[#E06D53] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#E06D53]" />
              <span>{SAMAROH_CONFIG.PHONE_DISPLAY}</span>
            </a>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </button>

            {onBackToHub && (
              <>
                <span className="text-stone-700 hidden sm:inline">•</span>
                <button
                  onClick={onBackToHub}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer text-[10px] uppercase font-bold tracking-widest bg-stone-850 px-2 py-0.5 rounded border border-stone-700/50"
                >
                  ← RaoSitez Catalog
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#1C1917]/95 backdrop-blur-md shadow-lg py-3 border-b border-stone-800' 
            : 'bg-[#1C1917] py-4 border-b border-stone-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E06D53] to-[#C8523B] p-[1.5px] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-[#1C1917] flex items-center justify-center text-[#E06D53]">
                <Sparkles className="w-5 h-5 text-[#E06D53] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-['Fraunces',serif] text-xl sm:text-2xl font-bold tracking-tight text-white block group-hover:text-[#E06D53] transition-colors leading-tight">
                SAMAROH <span className="font-light italic text-[#E06D53]">LUXE</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase font-sans font-semibold block -mt-0.5">
                Modern Wedding Design
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium tracking-wide">
            {navLinks.map(link => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-[#E06D53] font-semibold' 
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 bg-[#E06D53]/20 text-[#E06D53] rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E06D53] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E06D53] to-[#C8523B] hover:from-[#C8523B] hover:to-[#E06D53] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get 3D Decor Quote</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#1C1917] text-white shadow-2xl flex flex-col justify-between border-l border-stone-800 z-10 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E06D53] flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-['Fraunces',serif] text-lg font-bold text-white block">
                      Samaroh Luxe
                    </span>
                    <span className="text-[10px] tracking-widest text-stone-400 uppercase block">
                      Wedding Design Platform
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* City Switcher inside Mobile Menu */}
              <div className="py-4 border-b border-stone-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Operating City:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {SAMAROH_CONFIG.CITIES.map(city => (
                    <button
                      key={city.id}
                      onClick={() => onSelectCity(city.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-left border transition-all cursor-pointer ${
                        selectedCity === city.id
                          ? 'bg-[#E06D53]/15 border-[#E06D53] text-[#E06D53] font-bold'
                          : 'bg-stone-850 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Items */}
              <div className="py-6 space-y-1">
                {navLinks.map(link => {
                  const isActive = activeTab === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#E06D53] text-white font-bold'
                          : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                      }`}
                    >
                      <span className="capitalize">{link.label}</span>
                      {link.badge && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#E06D53]/20 text-[#E06D53]'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Bottom */}
            <div className="p-6 bg-stone-900 border-t border-stone-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E06D53] to-[#C8523B] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book 3D Design Consultation</span>
              </button>

              <button
                onClick={openWhatsApp}
                className="w-full py-2.5 rounded-xl border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 font-medium text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
