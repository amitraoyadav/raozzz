import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Calendar,
  CreditCard,
  Building2,
  Stethoscope,
  Heart,
  ShieldAlert,
  ArrowRight,
  Globe,
  BookOpen,
  Award,
  Users,
  Clock,
  Sparkles,
  HeartPulse,
} from 'lucide-react';
import {
  MEDICARE_CONFIG,
  SPECIALITIES_LIST,
  SERVICES_LIST,
  DOCTORS_LIST,
  MEDIA_ARTICLES,
} from '../../data/medicarePlusData';
import { MedicarePlusLogo } from './MedicarePlusLogo';

interface MedicarePlusNavbarProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenAppointmentModal: (doctorName?: string, speciality?: string) => void;
  onOpenPaymentModal: () => void;
  onSelectSpeciality?: (specialityId: string) => void;
  onOpenSpecialitiesDirectory?: () => void;
}

export const MedicarePlusNavbar: React.FC<MedicarePlusNavbarProps> = ({
  onNavigateToSection,
  onOpenAppointmentModal,
  onOpenPaymentModal,
  onSelectSpeciality,
  onOpenSpecialitiesDirectory,
}) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Auto focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery('');
    }
  }, [searchOpen]);

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setActiveMegaMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter items for search
  const matchingDoctors = searchQuery.trim()
    ? DOCTORS_LIST.filter(
        (d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.department.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const matchingSpecialities = searchQuery.trim()
    ? SPECIALITIES_LIST.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.commonProcedures.some((p) =>
            p.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : [];

  const matchingServices = searchQuery.trim()
    ? SERVICES_LIST.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const matchingArticles = searchQuery.trim()
    ? MEDIA_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const hasSearchResults =
    matchingDoctors.length > 0 ||
    matchingSpecialities.length > 0 ||
    matchingServices.length > 0 ||
    matchingArticles.length > 0;

  const toggleMega = (menuId: string) => {
    setActiveMegaMenu(activeMegaMenu === menuId ? null : menuId);
  };

  const closeAllMenus = () => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <header
      ref={navContainerRef}
      className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs font-['Satoshi',sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Hospital Logo */}
          <div
            onClick={() => {
              onNavigateToSection('hero');
              closeAllMenus();
            }}
            className="cursor-pointer shrink-0"
          >
            <MedicarePlusLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 text-[13px] font-bold text-[#0C4A60]">
            {/* 1. ABOUT US */}
            <div className="relative">
              <button
                onClick={() => toggleMega('about')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  activeMegaMenu === 'about'
                    ? 'bg-slate-100 text-[#00A896]'
                    : 'hover:text-[#00A896]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeMegaMenu === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMegaMenu === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    {[
                      { label: 'Introduction & Heritage', id: 'about' },
                      { label: 'Our Founder & Vision', id: 'about' },
                      { label: 'Executive Leadership', id: 'about' },
                      { label: 'Mission, Vision & Values', id: 'about' },
                      { label: 'Quality & Patient Safety', id: 'quality-safety' },
                      { label: 'Media & Press Releases', id: 'media-blogs' },
                      { label: 'Hospital Careers & Nursing', id: 'academics' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateToSection(item.id);
                          closeAllMenus();
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-teal-50 hover:text-[#0C4A60] transition-colors flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. SPECIALITIES MEGA MENU */}
            <div className="relative">
              <button
                onClick={() => toggleMega('specialities')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  activeMegaMenu === 'specialities'
                    ? 'bg-slate-100 text-[#00A896]'
                    : 'hover:text-[#00A896]'
                }`}
              >
                <span>Specialities</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeMegaMenu === 'specialities' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMegaMenu === 'specialities' && (
                <div className="fixed left-4 right-4 sm:left-12 sm:right-12 top-28 mx-auto max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in duration-150 max-h-[75vh] overflow-y-auto">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="text-base font-extrabold text-[#0C4A60]">
                        Clinical Specialities &amp; Centres of Excellence
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Over 22 specialized medical and surgical departments with state-of-the-art operative suites.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onNavigateToSection('specialities');
                        closeAllMenus();
                      }}
                      className="text-xs font-bold text-[#00A896] hover:underline flex items-center gap-1"
                    >
                      <span>Explore All 22 Specialities</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
                    {SPECIALITIES_LIST.map((spec) => (
                      <button
                        key={spec.id}
                        onClick={() => {
                          if (onSelectSpeciality) onSelectSpeciality(spec.id);
                          onNavigateToSection('specialities');
                          closeAllMenus();
                        }}
                        className="text-left p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-2.5 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#00A896] flex items-center justify-center shrink-0 group-hover:bg-[#00A896] group-hover:text-white transition-colors">
                          <HeartPulse className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-slate-800 group-hover:text-[#0C4A60] truncate">
                            {spec.shortName}
                          </p>
                          <p className="text-[10px] text-slate-400 capitalize truncate">
                            {spec.category.replace('_', ' ')}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. SERVICES MEGA MENU */}
            <div className="relative">
              <button
                onClick={() => toggleMega('services')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  activeMegaMenu === 'services'
                    ? 'bg-slate-100 text-[#00A896]'
                    : 'hover:text-[#00A896]'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeMegaMenu === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMegaMenu === 'services' && (
                <div className="fixed left-4 right-4 sm:left-12 sm:right-12 top-28 mx-auto max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in duration-150 max-h-[75vh] overflow-y-auto">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="text-base font-extrabold text-[#0C4A60]">
                        Hospital Medical Services &amp; Diagnostics
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        24/7 emergency support, blood bank, advanced 3T MRI imaging, and outpatient services.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onNavigateToSection('services');
                        closeAllMenus();
                      }}
                      className="text-xs font-bold text-[#00A896] hover:underline flex items-center gap-1"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                    {SERVICES_LIST.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => {
                          onNavigateToSection('services');
                          closeAllMenus();
                        }}
                        className="text-left p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-2 group cursor-pointer"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span className="font-semibold text-slate-800 group-hover:text-[#0C4A60] truncate">
                          {srv.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. PATIENT CARE */}
            <div className="relative">
              <button
                onClick={() => toggleMega('patient-care')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  activeMegaMenu === 'patient-care'
                    ? 'bg-slate-100 text-[#00A896]'
                    : 'hover:text-[#00A896]'
                }`}
              >
                <span>Patient Care</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeMegaMenu === 'patient-care' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMegaMenu === 'patient-care' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in duration-150">
                  <div className="space-y-1">
                    {[
                      { label: 'Room Accommodation & Tariffs', id: 'patient-care' },
                      { label: 'Corporate & Insurance TPA', id: 'patient-care' },
                      { label: 'International Patients Desk', id: 'international' },
                      { label: 'Inpatient Admission Guide', id: 'patient-care' },
                      { label: 'Floor Directory & Facilities', id: 'visitors-guide' },
                      { label: 'Patient Rights & Responsibilities', id: 'patient-care' },
                      { label: 'Patient Feedback & Stories', id: 'feedback' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateToSection(item.id);
                          closeAllMenus();
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-teal-50 hover:text-[#0C4A60] transition-colors flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. VISITORS GUIDE */}
            <div className="relative">
              <button
                onClick={() => toggleMega('visitors')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  activeMegaMenu === 'visitors'
                    ? 'bg-slate-100 text-[#00A896]'
                    : 'hover:text-[#00A896]'
                }`}
              >
                <span>Visitors Guide</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeMegaMenu === 'visitors' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMegaMenu === 'visitors' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in duration-150">
                  <div className="space-y-1">
                    {[
                      { label: 'Visiting Hours (ICU & Wards)', id: 'visitors-guide' },
                      { label: 'Visitor Policies & Passes', id: 'visitors-guide' },
                      { label: 'Facilities, Cafeteria & ATMs', id: 'visitors-guide' },
                      { label: 'Campus Parking & Navigation', id: 'visitors-guide' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateToSection(item.id);
                          closeAllMenus();
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-teal-50 hover:text-[#0C4A60] transition-colors flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 6. ACADEMICS */}
            <div className="relative">
              <button
                onClick={() => toggleMega('academics')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  activeMegaMenu === 'academics'
                    ? 'bg-slate-100 text-[#00A896]'
                    : 'hover:text-[#00A896]'
                }`}
              >
                <span>Academics</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeMegaMenu === 'academics' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMegaMenu === 'academics' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in duration-150">
                  <div className="space-y-1">
                    {[
                      { label: 'DNB Residency Programs', id: 'academics' },
                      { label: 'Clinical Fellowships', id: 'academics' },
                      { label: 'Continuing Medical Education (CME)', id: 'academics' },
                      { label: 'Nursing College & Training', id: 'academics' },
                      { label: 'Clinical Research & Ethical Board', id: 'academics' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateToSection(item.id);
                          closeAllMenus();
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-teal-50 hover:text-[#0C4A60] transition-colors flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 7. FIND A DOCTOR */}
            <button
              onClick={() => {
                onNavigateToSection('doctors');
                closeAllMenus();
              }}
              className="px-3 py-2 rounded-lg hover:text-[#00A896] transition-colors cursor-pointer"
            >
              Find a Doctor
            </button>

            {/* 8. ONLINE PAYMENT */}
            <button
              onClick={() => {
                onOpenPaymentModal();
                closeAllMenus();
              }}
              className="px-3 py-2 rounded-lg text-cyan-800 hover:text-[#00A896] transition-colors cursor-pointer"
            >
              Online Payment
            </button>

            {/* 9. CONTACT US */}
            <button
              onClick={() => {
                onNavigateToSection('footer');
                closeAllMenus();
              }}
              className="px-3 py-2 rounded-lg hover:text-[#00A896] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Right Action Controls: Search & Appointment CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-[#0C4A60] hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
              title="Search Doctors, Specialities, Services"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Book Appointment CTA Button */}
            <button
              onClick={() => onOpenAppointmentModal()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0C4A60] to-[#007A87] hover:from-[#083344] hover:to-[#005B66] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULL-WIDTH SEARCH BAR POPUP (Matching reference hospital search experience)*/}
      {/* ========================================================================= */}
      {searchOpen && (
        <div className="border-t border-slate-200 bg-slate-50/95 backdrop-blur-sm px-4 py-4 shadow-inner animate-in fade-in duration-150">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword or phrase (e.g. Cardiology, Dr. Sharma, MRI, Kidney Stone...)"
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A896] shadow-xs"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Live Search Results Dropdown */}
            {searchQuery.trim().length >= 2 && (
              <div className="mt-3 bg-white rounded-2xl border border-slate-200 shadow-xl p-4 max-h-[60vh] overflow-y-auto space-y-4 text-xs">
                {hasSearchResults ? (
                  <>
                    {/* Matching Doctors */}
                    {matchingDoctors.length > 0 && (
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 block mb-2">
                          Specialist Doctors ({matchingDoctors.length})
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {matchingDoctors.map((doc) => (
                            <div
                              key={doc.id}
                              onClick={() => {
                                onOpenAppointmentModal(doc.name, doc.speciality);
                                closeAllMenus();
                              }}
                              className="p-2.5 rounded-xl border border-slate-100 hover:border-teal-300 hover:bg-teal-50/40 transition-all flex items-center gap-3 cursor-pointer"
                            >
                              <img
                                src={doc.photoUrl}
                                alt={doc.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div className="truncate">
                                <p className="font-bold text-slate-900">{doc.name}</p>
                                <p className="text-[11px] text-slate-500">{doc.speciality}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Matching Specialities */}
                    {matchingSpecialities.length > 0 && (
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0C4A60] block mb-2">
                          Medical Specialities ({matchingSpecialities.length})
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {matchingSpecialities.map((spec) => (
                            <div
                              key={spec.id}
                              onClick={() => {
                                if (onSelectSpeciality) onSelectSpeciality(spec.id);
                                onNavigateToSection('specialities');
                                closeAllMenus();
                              }}
                              className="p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-between cursor-pointer"
                            >
                              <span className="font-bold text-slate-800">{spec.name}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Matching Services */}
                    {matchingServices.length > 0 && (
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                          Hospital Services &amp; Diagnostics ({matchingServices.length})
                        </span>
                        <div className="space-y-1">
                          {matchingServices.map((srv) => (
                            <div
                              key={srv.id}
                              onClick={() => {
                                onNavigateToSection('services');
                                closeAllMenus();
                              }}
                              className="p-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer text-slate-700"
                            >
                              <span>{srv.title}</span>
                              <span className="text-[10px] text-teal-600 font-medium">Explore</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Matching Articles */}
                    {matchingArticles.length > 0 && (
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-2">
                          Health Information &amp; Articles ({matchingArticles.length})
                        </span>
                        <div className="space-y-1">
                          {matchingArticles.map((art) => (
                            <div
                              key={art.id}
                              onClick={() => {
                                onNavigateToSection('media-blogs');
                                closeAllMenus();
                              }}
                              className="p-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer text-slate-700 truncate"
                            >
                              <span className="truncate">{art.title}</span>
                              <span className="text-[10px] text-slate-400 shrink-0 ml-2">{art.category}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-6 text-slate-500">
                    <p className="font-semibold text-slate-700">No direct matches for "{searchQuery}"</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Try searching for Cardiology, Neurology, MRI, Dialysis, or doctor names.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MOBILE OFFCANVAS MENU (Matching reference mobile menu)                     */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-28 bottom-0 bg-white z-50 overflow-y-auto p-4 border-t border-slate-200 shadow-2xl animate-in slide-in-from-right duration-200">
          <div className="space-y-2 pb-16">
            {/* Quick action buttons in mobile menu */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => {
                  onOpenAppointmentModal();
                  closeAllMenus();
                }}
                className="py-2.5 px-3 rounded-xl bg-[#0C4A60] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Appointment</span>
              </button>
              <button
                onClick={() => {
                  onOpenPaymentModal();
                  closeAllMenus();
                }}
                className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0C4A60] text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Online Pay</span>
              </button>
            </div>

            {/* Mobile Navigation List with Accordions */}
            {[
              {
                id: 'about',
                title: 'About Us',
                subItems: [
                  { label: 'Introduction & Heritage', id: 'about' },
                  { label: 'Our Founder & Leadership', id: 'about' },
                  { label: 'Quality & Patient Safety', id: 'quality-safety' },
                  { label: 'Media & Press Releases', id: 'media-blogs' },
                ],
              },
              {
                id: 'specialities',
                title: 'Specialities (22 Departments)',
                subItems: SPECIALITIES_LIST.slice(0, 10).map((s) => ({
                  label: s.name,
                  id: 'specialities',
                })),
              },
              {
                id: 'services',
                title: 'Hospital Services',
                subItems: SERVICES_LIST.slice(0, 8).map((s) => ({
                  label: s.title,
                  id: 'services',
                })),
              },
              {
                id: 'patient-care',
                title: 'Patient Care & Resources',
                subItems: [
                  { label: 'Room Accommodation & Tariffs', id: 'patient-care' },
                  { label: 'Corporate & Insurance TPA', id: 'patient-care' },
                  { label: 'International Patients Desk', id: 'international' },
                  { label: 'Patient Feedback', id: 'feedback' },
                ],
              },
              {
                id: 'visitors',
                title: 'Visitors Guide',
                subItems: [
                  { label: 'Visiting Hours (ICU & Wards)', id: 'visitors-guide' },
                  { label: 'Visitor Policies & Facilities', id: 'visitors-guide' },
                ],
              },
              {
                id: 'academics',
                title: 'Academics & Research',
                subItems: [
                  { label: 'DNB & Fellowships', id: 'academics' },
                  { label: 'Nursing Education & CME', id: 'academics' },
                ],
              },
            ].map((section) => (
              <div key={section.id} className="border-b border-slate-100 pb-2">
                <button
                  onClick={() =>
                    setExpandedMobileCategory(
                      expandedMobileCategory === section.id ? null : section.id
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800"
                >
                  <span>{section.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      expandedMobileCategory === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedMobileCategory === section.id && (
                  <div className="pl-3 py-1 space-y-1 text-xs">
                    {section.subItems.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateToSection(sub.id);
                          closeAllMenus();
                        }}
                        className="w-full text-left py-1.5 text-slate-600 hover:text-teal-600"
                      >
                        • {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Direct Mobile Links */}
            <div className="pt-2 space-y-2 text-sm font-bold text-slate-800">
              <button
                onClick={() => {
                  onNavigateToSection('doctors');
                  closeAllMenus();
                }}
                className="w-full text-left py-2 flex items-center justify-between"
              >
                <span>Find a Doctor</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => {
                  onNavigateToSection('packages');
                  closeAllMenus();
                }}
                className="w-full text-left py-2 flex items-center justify-between"
              >
                <span>Health Checkup Packages</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => {
                  onNavigateToSection('emergency');
                  closeAllMenus();
                }}
                className="w-full text-left py-2 flex items-center justify-between text-rose-600 font-bold"
              >
                <span>24x7 Emergency &amp; Ambulance</span>
                <ChevronRight className="w-4 h-4 text-rose-500" />
              </button>
              <button
                onClick={() => {
                  onNavigateToSection('footer');
                  closeAllMenus();
                }}
                className="w-full text-left py-2 flex items-center justify-between"
              >
                <span>Contact Hospital</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
