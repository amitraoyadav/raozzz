import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Clock, 
  Award,
  Crown
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export type PsrNavTab = 
  | 'home' 
  | 'about' 
  | 'destinations' 
  | 'venues' 
  | 'services' 
  | 'packages' 
  | 'portfolio' 
  | 'calculator' 
  | 'blog' 
  | 'contact';

interface PsrNavbarProps {
  activeTab: PsrNavTab;
  onSelectTab: (tab: PsrNavTab) => void;
  onOpenConsultation: () => void;
  onBackToHub?: () => void;
}

export const PsrNavbar: React.FC<PsrNavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenConsultation,
  onBackToHub
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
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

  const navLinks: { id: PsrNavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'venues', label: 'Venues' },
    { id: 'services', label: 'Planning Services' },
    { id: 'packages', label: 'Packages' },
    { id: 'portfolio', label: 'Real Weddings' },
    { id: 'calculator', label: 'Cost Calculator' },
    { id: 'blog', label: 'Insights' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tab: PsrNavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello ${siteConfig.SITE_NAME} team, I would like to enquire about planning our destination wedding in India.`
    );
    window.open(`https://wa.me/${siteConfig.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#4A0E17] text-[#DFBE78] text-[11px] sm:text-xs tracking-wider border-b border-[#C5A059]/20 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-stone-200">
              <Crown className="w-3.5 h-3.5 text-[#DFBE78]" />
              Premier Luxury Destination Wedding Planner in India
            </span>
            <span className="text-[#C5A059]/40">•</span>
            <span className="text-stone-300">380+ Royal Celebrations Across Rajasthan, Goa & Kerala</span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${siteConfig.PHONE.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-stone-200 hover:text-[#DFBE78] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#DFBE78]" />
              <span>{siteConfig.PHONE_DISPLAY}</span>
            </a>
            <span className="text-[#C5A059]/40">•</span>
            <button 
              onClick={openWhatsApp}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-medium"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Concierge</span>
            </button>
            {onBackToHub && (
              <>
                <span className="text-[#C5A059]/40">•</span>
                <button
                  onClick={onBackToHub}
                  className="text-stone-300 hover:text-white transition-colors cursor-pointer text-[10px] uppercase font-bold tracking-widest bg-black/30 px-2 py-0.5 rounded"
                >
                  ← RaoSitez Catalog
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#1A0509]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#C5A059]/30' 
            : 'bg-[#1A0509] py-4 border-b border-[#C5A059]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#DFBE78] via-[#C5A059] to-[#8C6D2D] p-[1.5px] shadow-lg flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#1A0509] flex items-center justify-center text-[#DFBE78]">
                <Crown className="w-5 h-5 text-[#DFBE78] group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold tracking-tight text-white block group-hover:text-[#DFBE78] transition-colors leading-tight">
                {siteConfig.SITE_NAME}
              </span>
              <span className="text-[10px] tracking-[0.28em] text-[#DFBE78] uppercase font-sans font-semibold block -mt-0.5">
                Luxury Weddings &amp; Venues
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium tracking-wide">
            {navLinks.map(link => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors cursor-pointer py-1 relative ${
                    isActive 
                      ? 'text-[#DFBE78] font-semibold' 
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#DFBE78] to-[#C5A059]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] hover:from-[#DFBE78] hover:to-[#C5A059] text-[#1A0509] font-bold text-xs tracking-wider uppercase shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{siteConfig.PRIMARY_CTA}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#DFBE78] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#1A0509] text-white shadow-2xl flex flex-col justify-between border-l border-[#C5A059]/30 z-10 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center text-[#1A0509]">
                    <Crown className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-['Playfair_Display',serif] text-lg font-bold text-white block">
                      {siteConfig.SITE_NAME}
                    </span>
                    <span className="text-[9px] tracking-widest text-[#DFBE78] uppercase block">
                      Destination Wedding Specialist
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="py-6 space-y-1">
                {navLinks.map(link => {
                  const isActive = activeTab === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#C5A059]/20 text-[#DFBE78] font-bold border-l-4 border-[#C5A059]'
                          : 'text-stone-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#DFBE78]' : 'text-stone-600'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Quick Contact & Action Buttons */}
              <div className="pt-4 border-t border-stone-800 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Consultation</span>
                </button>

                <button
                  onClick={openWhatsApp}
                  className="w-full py-3 rounded-xl bg-emerald-700/30 border border-emerald-600/50 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-700 hover:text-white transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Bottom info */}
            <div className="p-6 bg-black/40 border-t border-stone-800 text-xs text-stone-400 space-y-2">
              <div className="flex items-center gap-2 text-stone-300">
                <Phone className="w-3.5 h-3.5 text-[#DFBE78]" />
                <a href={`tel:${siteConfig.PHONE.replace(/\s+/g, '')}`}>{siteConfig.PHONE_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Mail className="w-3.5 h-3.5 text-[#DFBE78]" />
                <a href={`mailto:${siteConfig.EMAIL}`}>{siteConfig.EMAIL}</a>
              </div>
              <p className="text-[11px] text-stone-500 pt-2">
                © {new Date().getFullYear()} {siteConfig.SITE_NAME}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
