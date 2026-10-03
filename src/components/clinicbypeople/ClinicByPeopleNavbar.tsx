import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Search,
  Menu,
  X,
  ChevronDown,
  Calendar,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Building2,
  BookOpen,
  Info,
} from 'lucide-react';
import { CLINIC_CONFIG, CITIES_LIST, SPECIALITIES_DATA, buildClinicWhatsAppLink } from '../../data/clinicByPeopleData';
import { ClinicByPeopleLogo } from './ClinicByPeopleLogo';

interface ClinicByPeopleNavbarProps {
  currentCity: string;
  onSelectCity: (city: string) => void;
  onOpenConsultationModal: (speciality?: string, note?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
  onSearchSelectTreatment?: (treatment: string) => void;
}

export const ClinicByPeopleNavbar: React.FC<ClinicByPeopleNavbarProps> = ({
  currentCity,
  onSelectCity,
  onOpenConsultationModal,
  onNavigateToSection,
  onSearchSelectTreatment,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const cityRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
        setCityDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter all treatments across specialities based on search query
  const allTreatments = SPECIALITIES_DATA.flatMap((s) =>
    s.treatments.map((t) => ({ treatment: t, speciality: s.name, specialityId: s.id }))
  );

  const filteredTreatments = searchQuery.trim()
    ? allTreatments.filter((item) =>
        item.treatment.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        item.speciality.toLowerCase().includes(searchQuery.toLowerCase().trim())
      ).slice(0, 6)
    : [];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateToSection(sectionId);
  };

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-12 z-40 font-['Lexend',sans-serif]">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#0B1528] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: 24x7 Helpline & Support */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${CLINIC_CONFIG.phoneClean}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-sky-400 font-semibold transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#0C5BE2]" />
              <span>24x7 Care Helpline: {CLINIC_CONFIG.phone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>NABH-Accredited Partner Hospitals · 100% Cashless Insurance</span>
            </div>
          </div>

          {/* Right: City Selector Dropdown & WhatsApp */}
          <div className="flex items-center gap-3">
            {/* City Dropdown */}
            <div className="relative" ref={cityRef}>
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white text-[11px] font-medium border border-slate-700 transition-colors cursor-pointer"
                aria-expanded={cityDropdownOpen}
              >
                <MapPin className="w-3.5 h-3.5 text-[#FF6B4A]" />
                <span>{currentCity}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {cityDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Select Your City
                  </div>
                  <div className="max-h-56 overflow-y-auto py-1">
                    {CITIES_LIST.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          onSelectCity(city);
                          setCityDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                          currentCity === city
                            ? 'font-bold text-[#0C5BE2] bg-blue-50/60'
                            : 'text-slate-700'
                        }`}
                      >
                        <span>{city}</span>
                        {currentCity === city && <span className="w-1.5 h-1.5 rounded-full bg-[#0C5BE2]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* WhatsApp */}
            <a
              href={buildClinicWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 text-[11px] font-semibold hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER ROW */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => handleNavClick('hero')}
            className="cursor-pointer transition-opacity hover:opacity-95"
          >
            <ClinicByPeopleLogo size="md" />
          </div>

          {/* Quick Search Bar (Desktop) */}
          <div className="hidden lg:block relative w-80 xl:w-96" ref={searchRef}>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setSearchFocused(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search disease, surgery or doctor..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-[#0C5BE2] focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-800"
              />
            </div>

            {/* Search Suggestions Dropdown */}
            {searchFocused && (
              <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50">
                {searchQuery.trim() ? (
                  filteredTreatments.length > 0 ? (
                    <div>
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Matching Treatments &amp; Surgeries
                      </div>
                      {filteredTreatments.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            if (onSearchSelectTreatment) {
                              onSearchSelectTreatment(item.treatment);
                            } else {
                              onOpenConsultationModal(item.speciality, `Interested in ${item.treatment}`);
                            }
                            setSearchFocused(false);
                            setSearchQuery('');
                          }}
                          className="px-3 py-2 rounded-xl text-xs hover:bg-slate-50 flex items-center justify-between cursor-pointer group"
                        >
                          <div>
                            <span className="font-semibold text-slate-800 group-hover:text-[#0C5BE2]">
                              {item.treatment}
                            </span>
                            <span className="block text-[10px] text-slate-400">{item.speciality}</span>
                          </div>
                          <span className="text-[10px] font-bold text-sky-600 group-hover:underline">
                            Book OPD →
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-500">
                      No exact treatment found. You can book an evaluation with a general specialist.
                    </div>
                  )
                ) : (
                  <div>
                    <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Popular Surgeries
                    </div>
                    <div className="grid grid-cols-2 gap-1 mt-1">
                      {['Piles Laser Treatment', 'Gallbladder Stones', 'Hernia Repair', 'Kidney Stone RIRS', 'Knee Replacement', 'Gynecomastia'].map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            onOpenConsultationModal('general-surgery', `Inquiry for ${t}`);
                            setSearchFocused(false);
                          }}
                          className="text-left px-2.5 py-1.5 rounded-lg text-[11px] text-slate-700 hover:bg-blue-50/70 hover:text-[#0C5BE2] transition-colors cursor-pointer"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-semibold text-slate-700">
          <button
            onClick={() => handleNavClick('specialities')}
            className="hover:text-[#0C5BE2] transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Treatments</span>
          </button>
          <button
            onClick={() => handleNavClick('specialities')}
            className="hover:text-[#0C5BE2] transition-colors cursor-pointer"
          >
            Specialities
          </button>
          <button
            onClick={() => handleNavClick('doctors')}
            className="hover:text-[#0C5BE2] transition-colors cursor-pointer"
          >
            Doctors
          </button>
          <button
            onClick={() => handleNavClick('hospitals')}
            className="hover:text-[#0C5BE2] transition-colors cursor-pointer"
          >
            Hospitals
          </button>
          <button
            onClick={() => handleNavClick('healthfeed')}
            className="hover:text-[#0C5BE2] transition-colors cursor-pointer"
          >
            Healthfeed
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-[#0C5BE2] transition-colors cursor-pointer"
          >
            About Us
          </button>
        </nav>

        {/* Header Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenConsultationModal()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Free Consultation</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 3. MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          {/* Mobile Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatment, doctor, surgery..."
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-100 border border-slate-200 focus:outline-none"
            />
          </div>

          {searchQuery.trim() && filteredTreatments.length > 0 && (
            <div className="bg-slate-50 rounded-xl p-2 max-h-48 overflow-y-auto space-y-1">
              {filteredTreatments.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onOpenConsultationModal(item.speciality, `Inquiry for ${item.treatment}`);
                    setMobileMenuOpen(false);
                    setSearchQuery('');
                  }}
                  className="p-2 text-xs hover:bg-white rounded-lg flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-900">{item.treatment}</span>
                  <span className="text-[10px] text-[#0C5BE2]">Book →</span>
                </div>
              ))}
            </div>
          )}

          {/* Nav Links */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => handleNavClick('specialities')}
              className="p-2.5 rounded-xl bg-slate-50 text-left text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2"
            >
              <Stethoscope className="w-4 h-4 text-[#0C5BE2]" />
              <span>Specialities</span>
            </button>
            <button
              onClick={() => handleNavClick('doctors')}
              className="p-2.5 rounded-xl bg-slate-50 text-left text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#0C5BE2]" />
              <span>Our Doctors</span>
            </button>
            <button
              onClick={() => handleNavClick('hospitals')}
              className="p-2.5 rounded-xl bg-slate-50 text-left text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2"
            >
              <Building2 className="w-4 h-4 text-[#0C5BE2]" />
              <span>Centres</span>
            </button>
            <button
              onClick={() => handleNavClick('healthfeed')}
              className="p-2.5 rounded-xl bg-slate-50 text-left text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#0C5BE2]" />
              <span>Healthfeed</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="p-2.5 rounded-xl bg-slate-50 text-left text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2 col-span-2"
            >
              <Info className="w-4 h-4 text-[#0C5BE2]" />
              <span>About ClinicByPeople</span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full py-3 rounded-xl bg-[#0C5BE2] text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Consultation</span>
            </button>
            <a
              href={`tel:${CLINIC_CONFIG.phoneClean}`}
              className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#0C5BE2]" />
              <span>Call Helpline: {CLINIC_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
