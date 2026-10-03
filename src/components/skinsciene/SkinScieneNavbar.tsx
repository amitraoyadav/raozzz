import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Calendar,
  MapPin,
  UserCheck,
  Award,
  BookOpen,
  ArrowRight,
  Shield,
  Layers,
  Zap,
} from 'lucide-react';
import { SkinScieneLogo } from './SkinScieneLogo';
import { TREATMENTS_DATA, SKINSCIENE_CONFIG } from '../../data/skinScieneData';

interface SkinScieneNavbarProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenBooking: () => void;
  onSelectTreatment: (slug: string) => void;
  selectedCity: string;
}

export const SkinScieneNavbar: React.FC<SkinScieneNavbarProps> = ({
  onNavigateToSection,
  onOpenBooking,
  onSelectTreatment,
  selectedCity,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skinTreatments = TREATMENTS_DATA.filter((t) => t.category === 'skin');
  const hairTreatments = TREATMENTS_DATA.filter((t) => t.category === 'hair');
  const bodyTreatments = TREATMENTS_DATA.filter((t) => t.category === 'body');

  const handleNavClick = (sectionId: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    onNavigateToSection(sectionId);
  };

  const handleTreatmentClick = (slug: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    onSelectTreatment(slug);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5 sm:py-3'
          : 'bg-white border-b border-slate-100 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer focus:outline-none"
        >
          <SkinScieneLogo theme="dark" size="md" showTagline={false} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* SKIN MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('skin')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              onClick={() => handleNavClick('treatments')}
              className={`px-3 py-2 text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors rounded-lg ${
                activeMegaMenu === 'skin'
                  ? 'text-emerald-700 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <span>SKIN</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeMegaMenu === 'skin' && (
              <div className="absolute left-0 mt-1 w-[460px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div>
                  <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Laser & Clearance</span>
                  </div>
                  <div className="space-y-1">
                    {skinTreatments.slice(0, 3).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleTreatmentClick(item.slug)}
                        className="w-full text-left p-2 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-colors text-xs group"
                      >
                        <div className="font-semibold flex items-center justify-between">
                          <span>{item.name}</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100/70 text-emerald-800 font-medium">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.shortDesc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Aesthetics & Radiance</span>
                  </div>
                  <div className="space-y-1">
                    {skinTreatments.slice(3).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleTreatmentClick(item.slug)}
                        className="w-full text-left p-2 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-colors text-xs group"
                      >
                        <div className="font-semibold flex items-center justify-between">
                          <span>{item.name}</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100/70 text-emerald-800 font-medium">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.shortDesc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-xl">
                  <span className="text-slate-600 font-medium">
                    All treatments performed by MD Dermatologists
                  </span>
                  <button
                    onClick={() => handleNavClick('treatments')}
                    className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>View All Skin Protocols</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* HAIR MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('hair')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              onClick={() => handleNavClick('treatments')}
              className={`px-3 py-2 text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors rounded-lg ${
                activeMegaMenu === 'hair'
                  ? 'text-emerald-700 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <span>HAIR</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeMegaMenu === 'hair' && (
              <div className="absolute left-0 mt-1 w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Trichology & Regrowth Solutions</span>
                </div>
                <div className="space-y-1">
                  {hairTreatments.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleTreatmentClick(item.slug)}
                      className="w-full text-left p-2 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-colors text-xs"
                    >
                      <div className="font-semibold flex items-center justify-between">
                        <span>{item.name}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100/70 text-emerald-800 font-medium">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {item.shortDesc}
                      </p>
                    </button>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Acellular GFC & FUE Transplants</span>
                  <button
                    onClick={() => handleNavClick('treatments')}
                    className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <span>Explore Trichology</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* BODY MENU */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('body')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              onClick={() => handleNavClick('treatments')}
              className={`px-3 py-2 text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors rounded-lg ${
                activeMegaMenu === 'body'
                  ? 'text-emerald-700 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <span>BODY</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeMegaMenu === 'body' && (
              <div className="absolute left-0 mt-1 w-[360px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2">
                  Non-Invasive Body Aesthetics
                </div>
                <div className="space-y-1">
                  {bodyTreatments.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleTreatmentClick(item.slug)}
                      className="w-full text-left p-2 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-colors text-xs"
                    >
                      <div className="font-semibold flex items-center justify-between">
                        <span>{item.name}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100/70 text-emerald-800 font-medium">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {item.shortDesc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* DOCTORS */}
          <button
            onClick={() => handleNavClick('doctors')}
            className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            OUR DOCTORS
          </button>

          {/* CLINICS / LOCATOR */}
          <button
            onClick={() => handleNavClick('clinics')}
            className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1"
          >
            <span>CLINICS ({SKINSCIENE_CONFIG.stats.clinicsCount})</span>
          </button>

          {/* WHY US */}
          <button
            onClick={() => handleNavClick('why-us')}
            className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            WHY US
          </button>

          {/* RESULTS */}
          <button
            onClick={() => handleNavClick('before-after')}
            className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            RESULTS
          </button>

          {/* BLOG */}
          <button
            onClick={() => handleNavClick('blog')}
            className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            BLOG
          </button>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-300" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-emerald-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="p-3 bg-emerald-50 rounded-xl flex items-center justify-between text-xs">
            <span className="font-semibold text-emerald-900">
              Selected City: {selectedCity}
            </span>
            <span className="text-emerald-700 font-bold">120+ MD Dermatologists</span>
          </div>

          <div className="space-y-1 divide-y divide-slate-100 text-sm font-semibold text-slate-800">
            <div className="pt-2">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Skin Treatments
              </span>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {skinTreatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleTreatmentClick(t.slug)}
                    className="py-1.5 text-left text-xs text-slate-600 hover:text-emerald-800 flex items-center justify-between"
                  >
                    <span>{t.name}</span>
                    <span className="text-[9px] text-emerald-700 bg-emerald-100 px-1 rounded">
                      {t.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Hair Treatments
              </span>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {hairTreatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleTreatmentClick(t.slug)}
                    className="py-1.5 text-left text-xs text-slate-600 hover:text-emerald-800 flex items-center justify-between"
                  >
                    <span>{t.name}</span>
                    <span className="text-[9px] text-emerald-700 bg-emerald-100 px-1 rounded">
                      {t.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Body Treatments
              </span>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {bodyTreatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleTreatmentClick(t.slug)}
                    className="py-1.5 text-left text-xs text-slate-600 hover:text-emerald-800 flex items-center justify-between"
                  >
                    <span>{t.name}</span>
                    <span className="text-[9px] text-emerald-700 bg-emerald-100 px-1 rounded">
                      {t.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('doctors')}
              className="w-full text-left py-2.5 flex items-center justify-between"
            >
              <span>Our MD Dermatologists</span>
              <UserCheck className="w-4 h-4 text-emerald-600" />
            </button>

            <button
              onClick={() => handleNavClick('clinics')}
              className="w-full text-left py-2.5 flex items-center justify-between"
            >
              <span>Find Clinics ({SKINSCIENE_CONFIG.stats.clinicsCount} Across 10 Cities)</span>
              <MapPin className="w-4 h-4 text-emerald-600" />
            </button>

            <button
              onClick={() => handleNavClick('why-us')}
              className="w-full text-left py-2.5 flex items-center justify-between"
            >
              <span>Why SkinSciene Naturals</span>
              <Shield className="w-4 h-4 text-emerald-600" />
            </button>

            <button
              onClick={() => handleNavClick('before-after')}
              className="w-full text-left py-2.5 flex items-center justify-between"
            >
              <span>Clinical Results & Transformations</span>
              <Award className="w-4 h-4 text-emerald-600" />
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className="w-full text-left py-2.5 flex items-center justify-between"
            >
              <span>Skin & Hair Knowledge Blog</span>
              <BookOpen className="w-4 h-4 text-emerald-600" />
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white font-bold text-center shadow-lg cursor-pointer"
          >
            Book Free Clinical Consultation
          </button>
        </div>
      )}
    </header>
  );
};
