import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  User,
  Shield,
  FileText,
  MapPin,
  Clock,
  ExternalLink,
  Lock,
  ArrowRight,
  Globe
} from 'lucide-react';
import { site78ClubConfig } from '../../config/site78ClubConfig';
import { CLUB_FACILITIES } from '../../data/site78ClubData';

interface Site78ClubNavbarProps {
  currentView: string;
  onNavigate: (view: string, facilitySlug?: string) => void;
  onOpenLogin: () => void;
  onToggleSection?: () => void;
  activeSectionName?: string;
}

export const Site78ClubNavbar: React.FC<Site78ClubNavbarProps> = ({
  currentView,
  onNavigate,
  onOpenLogin,
  onToggleSection,
  activeSectionName = 'Club'
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [facilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, facilitySlug?: string) => {
    onNavigate(view, facilitySlug);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setFacilitiesDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Jost',sans-serif]">
      {/* Topmost Notice Bar with Club Contacts & Timings */}
      <div className="bg-[#0A1926] text-stone-300 text-[11px] sm:text-[12px] font-medium tracking-wider py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>{site78ClubConfig.LOCATION_TAG}</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-300">
            <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Club Hours: {site78ClubConfig.HOURS_CLUB}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${site78ClubConfig.PHONE_RECEPTION_RAW}`}
            className="flex items-center gap-1.5 hover:text-[#C5A869] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Reception: {site78ClubConfig.PHONE_RECEPTION}</span>
          </a>
          <a
            href={`mailto:${site78ClubConfig.EMAIL_GENERAL}`}
            className="flex items-center gap-1.5 hover:text-[#C5A869] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>{site78ClubConfig.EMAIL_GENERAL}</span>
          </a>

          {onToggleSection && (
            <button
              onClick={onToggleSection}
              className="text-[11px] px-2.5 py-0.5 rounded bg-white/10 hover:bg-[#C5A869] hover:text-[#0F2537] text-[#C5A869] border border-[#C5A869]/40 transition-all cursor-pointer flex items-center gap-1 font-semibold"
              title="Toggle between Club and Resort sections"
            >
              <span>View Resort Section</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md text-[#1C242C] shadow-lg py-2.5 sm:py-3 border-b border-[#E8E5DF]'
            : 'bg-[#0F2537] text-white py-3.5 sm:py-4 shadow-md border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Club Crest & Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group flex items-center gap-3.5 cursor-pointer"
          >
            <div
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                scrolled
                  ? 'border-[#C5A869] bg-[#0F2537] text-[#C5A869] shadow-sm'
                  : 'border-[#C5A869] bg-[#183D2F] text-[#C5A869] shadow-md'
              }`}
            >
              <span className="font-['Cormorant',serif] font-bold text-2xl sm:text-3xl leading-none">
                {site78ClubConfig.CREST_LETTER}
              </span>
            </div>
            <div>
              <span
                className={`font-['Cormorant',serif] text-xl sm:text-2xl font-bold tracking-[0.14em] uppercase block leading-tight transition-colors ${
                  scrolled ? 'text-[#0F2537] group-hover:text-[#183D2F]' : 'text-white group-hover:text-[#C5A869]'
                }`}
              >
                {site78ClubConfig.CLUB_NAME}
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.24em] uppercase font-medium block mt-0.5 transition-colors ${
                  scrolled ? 'text-[#183D2F]' : 'text-[#C5A869]'
                }`}
              >
                ESTABLISHED {site78ClubConfig.ESTABLISHED_YEAR} · NEW DELHI
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 text-[12px] 2xl:text-[13px] font-semibold tracking-[0.08em] uppercase">
            {/* HOME */}
            <button
              onClick={() => handleNavClick('home')}
              className={`py-2 transition-colors cursor-pointer ${
                currentView === 'home'
                  ? 'text-[#C5A869] border-b-2 border-[#C5A869]'
                  : scrolled
                  ? 'text-[#1C242C] hover:text-[#C5A869]'
                  : 'text-stone-200 hover:text-[#C5A869]'
              }`}
            >
              HOME
            </button>

            {/* ABOUT US Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${
                  currentView.startsWith('about') || currentView === 'committee'
                    ? 'text-[#C5A869] border-b-2 border-[#C5A869]'
                    : scrolled
                    ? 'text-[#1C242C] hover:text-[#C5A869]'
                    : 'text-stone-200 hover:text-[#C5A869]'
                }`}
              >
                <span>ABOUT US</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white text-[#1C242C] rounded-lg shadow-xl border border-[#E8E5DF] py-2 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-5 py-2.5 hover:bg-[#F9F8F5] hover:text-[#183D2F] transition-colors text-xs font-semibold normal-case block border-b border-[#F3EFE6] cursor-pointer"
                  >
                    Club History & Heritage
                  </button>
                  <button
                    onClick={() => handleNavClick('committee')}
                    className="w-full text-left px-5 py-2.5 hover:bg-[#F9F8F5] hover:text-[#183D2F] transition-colors text-xs font-semibold normal-case block border-b border-[#F3EFE6] cursor-pointer"
                  >
                    Management Committee
                  </button>
                  <button
                    onClick={() => handleNavClick('careers')}
                    className="w-full text-left px-5 py-2.5 hover:bg-[#F9F8F5] hover:text-[#183D2F] transition-colors text-xs font-semibold normal-case block cursor-pointer"
                  >
                    Careers at Club
                  </button>
                </div>
              )}
            </div>

            {/* FACILITIES Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFacilitiesDropdownOpen(true)}
              onMouseLeave={() => setFacilitiesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('facilities')}
                className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${
                  currentView === 'facilities' || currentView === 'facility-detail'
                    ? 'text-[#C5A869] border-b-2 border-[#C5A869]'
                    : scrolled
                    ? 'text-[#1C242C] hover:text-[#C5A869]'
                    : 'text-stone-200 hover:text-[#C5A869]'
                }`}
              >
                <span>FACILITIES</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {facilitiesDropdownOpen && (
                <div className="absolute top-full -left-10 w-72 bg-white text-[#1C242C] rounded-lg shadow-xl border border-[#E8E5DF] py-2 z-50 animate-fadeIn">
                  {CLUB_FACILITIES.map(fac => (
                    <button
                      key={fac.id}
                      onClick={() => handleNavClick('facility-detail', fac.slug)}
                      className="w-full text-left px-5 py-2 hover:bg-[#F9F8F5] hover:text-[#183D2F] transition-colors text-xs font-semibold normal-case flex items-center justify-between group cursor-pointer"
                    >
                      <span>{fac.name}</span>
                      <span className="text-[10px] text-[#C5A869] opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </button>
                  ))}
                  <div className="border-t border-[#F3EFE6] mt-1 pt-1">
                    <button
                      onClick={() => handleNavClick('facilities')}
                      className="w-full text-left px-5 py-2 font-bold text-xs text-[#C5A869] hover:text-[#183D2F] transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      View All Facilities →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* DOWNLOAD FORMS */}
            <button
              onClick={() => handleNavClick('forms')}
              className={`py-2 transition-colors cursor-pointer ${
                currentView === 'forms'
                  ? 'text-[#C5A869] border-b-2 border-[#C5A869]'
                  : scrolled
                  ? 'text-[#1C242C] hover:text-[#C5A869]'
                  : 'text-stone-200 hover:text-[#C5A869]'
              }`}
            >
              DOWNLOAD FORMS
            </button>

            {/* AFFILIATED CLUBS */}
            <button
              onClick={() => handleNavClick('affiliated-clubs')}
              className={`py-2 transition-colors cursor-pointer ${
                currentView === 'affiliated-clubs'
                  ? 'text-[#C5A869] border-b-2 border-[#C5A869]'
                  : scrolled
                  ? 'text-[#1C242C] hover:text-[#C5A869]'
                  : 'text-stone-200 hover:text-[#C5A869]'
              }`}
            >
              AFFILIATED CLUBS
            </button>

            {/* TENDER */}
            <button
              onClick={() => handleNavClick('tender')}
              className={`py-2 transition-colors cursor-pointer ${
                currentView === 'tender'
                  ? 'text-[#C5A869] border-b-2 border-[#C5A869]'
                  : scrolled
                  ? 'text-[#1C242C] hover:text-[#C5A869]'
                  : 'text-stone-200 hover:text-[#C5A869]'
              }`}
            >
              TENDER
            </button>

            {/* CONTACT US */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`py-2 transition-colors cursor-pointer ${
                currentView === 'contact'
                  ? 'text-[#C5A869] border-b-2 border-[#C5A869]'
                  : scrolled
                  ? 'text-[#1C242C] hover:text-[#C5A869]'
                  : 'text-stone-200 hover:text-[#C5A869]'
              }`}
            >
              CONTACT US
            </button>

            {/* CAREERS */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`py-2 transition-colors cursor-pointer ${
                currentView === 'careers'
                  ? 'text-[#C5A869] border-b-2 border-[#C5A869]'
                  : scrolled
                  ? 'text-[#1C242C] hover:text-[#C5A869]'
                  : 'text-stone-200 hover:text-[#C5A869]'
              }`}
            >
              CAREERS
            </button>

            {/* MEMBER LOGIN CTA BUTTON */}
            <button
              onClick={onOpenLogin}
              className="ml-2 px-5 py-2.5 rounded-md bg-[#C5A869] hover:bg-[#d4bc82] text-[#0F2537] text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5" />
              <span>MEMBER LOGIN</span>
            </button>
          </div>

          {/* Mobile Right Action and Hamburger */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={onOpenLogin}
              className="px-3.5 py-1.5 rounded bg-[#C5A869] text-[#0F2537] text-xs font-bold tracking-wider uppercase flex items-center gap-1"
            >
              <User className="w-3 h-3" />
              <span>LOGIN</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? 'text-[#0F2537] hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Off-Canvas Menu Drawer (Matches Panchshila reference) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-[#0F2537] text-white p-6 shadow-2xl overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-[#C5A869] flex items-center justify-center font-['Cormorant',serif] font-bold text-lg text-[#C5A869]">
                    K
                  </div>
                  <div>
                    <span className="font-['Cormorant',serif] font-bold text-lg tracking-wider block leading-tight">
                      KENSINGTON CLUB
                    </span>
                    <span className="text-[8px] tracking-[0.2em] text-[#C5A869] block">
                      SOUTH DELHI · ESTD 1972
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation List */}
              <div className="py-6 space-y-1 text-xs font-semibold tracking-wider uppercase">
                {/* HOME */}
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-left py-3 px-3 rounded-lg transition-colors cursor-pointer ${
                    currentView === 'home' ? 'bg-white/10 text-[#C5A869]' : 'text-stone-200 hover:bg-white/5'
                  }`}
                >
                  HOME
                </button>

                {/* ABOUT US Accordion */}
                <div>
                  <button
                    onClick={() => setMobileAboutOpen(prev => !prev)}
                    className="w-full text-left py-3 px-3 rounded-lg flex items-center justify-between text-stone-200 hover:bg-white/5 cursor-pointer"
                  >
                    <span>ABOUT US</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180 text-[#C5A869]' : ''}`} />
                  </button>
                  {mobileAboutOpen && (
                    <div className="pl-6 py-1 space-y-1 normal-case text-xs font-normal border-l-2 border-[#C5A869]/40 ml-4 my-1">
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left py-2 text-stone-300 hover:text-[#C5A869]"
                      >
                        Club History & Heritage
                      </button>
                      <button
                        onClick={() => handleNavClick('committee')}
                        className="w-full text-left py-2 text-stone-300 hover:text-[#C5A869]"
                      >
                        Management Committee
                      </button>
                      <button
                        onClick={() => handleNavClick('careers')}
                        className="w-full text-left py-2 text-stone-300 hover:text-[#C5A869]"
                      >
                        Careers
                      </button>
                    </div>
                  )}
                </div>

                {/* FACILITIES Accordion */}
                <div>
                  <button
                    onClick={() => setMobileFacilitiesOpen(prev => !prev)}
                    className="w-full text-left py-3 px-3 rounded-lg flex items-center justify-between text-stone-200 hover:bg-white/5 cursor-pointer"
                  >
                    <span>FACILITIES</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileFacilitiesOpen ? 'rotate-180 text-[#C5A869]' : ''}`} />
                  </button>
                  {mobileFacilitiesOpen && (
                    <div className="pl-6 py-1 space-y-1 normal-case text-xs font-normal border-l-2 border-[#C5A869]/40 ml-4 my-1 max-h-56 overflow-y-auto">
                      <button
                        onClick={() => handleNavClick('facilities')}
                        className="w-full text-left py-2 text-[#C5A869] font-semibold"
                      >
                        All Facilities Overview →
                      </button>
                      {CLUB_FACILITIES.map(fac => (
                        <button
                          key={fac.id}
                          onClick={() => handleNavClick('facility-detail', fac.slug)}
                          className="w-full text-left py-1.5 text-stone-300 hover:text-[#C5A869]"
                        >
                          {fac.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* DOWNLOAD FORMS */}
                <button
                  onClick={() => handleNavClick('forms')}
                  className={`w-full text-left py-3 px-3 rounded-lg transition-colors cursor-pointer ${
                    currentView === 'forms' ? 'bg-white/10 text-[#C5A869]' : 'text-stone-200 hover:bg-white/5'
                  }`}
                >
                  DOWNLOAD FORMS
                </button>

                {/* AFFILIATED CLUBS */}
                <button
                  onClick={() => handleNavClick('affiliated-clubs')}
                  className={`w-full text-left py-3 px-3 rounded-lg transition-colors cursor-pointer ${
                    currentView === 'affiliated-clubs' ? 'bg-white/10 text-[#C5A869]' : 'text-stone-200 hover:bg-white/5'
                  }`}
                >
                  AFFILIATED CLUBS
                </button>

                {/* TENDER */}
                <button
                  onClick={() => handleNavClick('tender')}
                  className={`w-full text-left py-3 px-3 rounded-lg transition-colors cursor-pointer ${
                    currentView === 'tender' ? 'bg-white/10 text-[#C5A869]' : 'text-stone-200 hover:bg-white/5'
                  }`}
                >
                  TENDER
                </button>

                {/* CONTACT US */}
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`w-full text-left py-3 px-3 rounded-lg transition-colors cursor-pointer ${
                    currentView === 'contact' ? 'bg-white/10 text-[#C5A869]' : 'text-stone-200 hover:bg-white/5'
                  }`}
                >
                  CONTACT US
                </button>

                {/* CAREERS */}
                <button
                  onClick={() => handleNavClick('careers')}
                  className={`w-full text-left py-3 px-3 rounded-lg transition-colors cursor-pointer ${
                    currentView === 'careers' ? 'bg-white/10 text-[#C5A869]' : 'text-stone-200 hover:bg-white/5'
                  }`}
                >
                  CAREERS
                </button>
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-white/15 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-3 rounded-md bg-[#C5A869] text-[#0F2537] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
              >
                <User className="w-4 h-4" />
                <span>MEMBER LOGIN</span>
              </button>

              {onToggleSection && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onToggleSection();
                  }}
                  className="w-full py-2.5 rounded-md bg-white/5 text-stone-300 hover:text-white border border-white/10 text-[11px] font-medium tracking-wider uppercase flex items-center justify-center gap-1.5"
                >
                  <span>Switch to Resort Section</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A869]" />
                </button>
              )}

              <div className="text-[11px] text-stone-400 text-center space-y-1 pt-2">
                <div>Phone: {site78ClubConfig.PHONE_RECEPTION}</div>
                <div>{site78ClubConfig.LOCATION_TAG}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
