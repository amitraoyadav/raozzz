import React from 'react';
import { Phone, Mail, MapPin, Globe, Menu, X, ChevronDown, Scale } from 'lucide-react';
import { MAHESHWARI_FIRM_INFO, PRACTICE_AREAS } from '../../data/maheshwariData';

interface Props {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  onOpenConsultation: () => void;
  onSelectPractice?: (slug: string) => void;
  onBackToHub?: () => void;
}

export const MaheshwariNavbar: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  onOpenConsultation,
  onSelectPractice,
  onBackToHub
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [practiceDropdown, setPracticeDropdown] = React.useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm font-sans">
      {/* Top utility bar */}
      <div className="bg-[#1F242C] text-slate-300 text-[12px] py-2 px-4 md:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href={`tel:${MAHESHWARI_FIRM_INFO.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B1E2B]" />
              <span className="font-semibold">{MAHESHWARI_FIRM_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href={`mailto:${MAHESHWARI_FIRM_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#8B1E2B]" />
              <span>{MAHESHWARI_FIRM_INFO.email}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#8B1E2B]" />
              <span>Delhi (Head Office) · Mumbai · New York</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onBackToHub && (
              <button
                onClick={onBackToHub}
                className="text-[11px] px-2.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors"
              >
                ← RaoSitez Catalog
              </button>
            )}
            <span className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
              Site #62 · Live Reference
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 text-left group"
        >
          <img
            src="/assets/maheshwari/logo-1.png"
            alt="Maheshwari & Co."
            className="h-11 md:h-13 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div>
            <div className="text-xl md:text-2xl font-bold font-serif text-[#1F242C] tracking-tight flex items-center gap-1.5">
              <span>MAHESHWARI &amp; CO.</span>
            </div>
            <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#8B1E2B]">
              Advocates &amp; Legal Consultants
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[13.5px] font-medium text-slate-700">
          <button
            onClick={() => setActiveTab('home')}
            className={`transition-colors py-1 ${activeTab === 'home' ? 'text-[#8B1E2B] font-bold border-b-2 border-[#8B1E2B]' : 'hover:text-[#8B1E2B]'}`}
          >
            Home
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`transition-colors py-1 ${activeTab === 'about' ? 'text-[#8B1E2B] font-bold border-b-2 border-[#8B1E2B]' : 'hover:text-[#8B1E2B]'}`}
          >
            About
          </button>

          {/* Practice Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPracticeDropdown(true)}
            onMouseLeave={() => setPracticeDropdown(false)}
          >
            <button
              onClick={() => setActiveTab('practice-areas')}
              className={`flex items-center gap-1 py-1 transition-colors ${activeTab.startsWith('practice') ? 'text-[#8B1E2B] font-bold border-b-2 border-[#8B1E2B]' : 'hover:text-[#8B1E2B]'}`}
            >
              <span>Practice Areas</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {practiceDropdown && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Core Legal Domains
                </div>
                {PRACTICE_AREAS.slice(0, 8).map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      if (onSelectPractice) onSelectPractice(p.slug);
                      else setActiveTab('practice-areas');
                      setPracticeDropdown(false);
                    }}
                    className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#8B1E2B] transition-colors flex items-center justify-between"
                  >
                    <span>{p.title}</span>
                    <span className="text-[10px] text-slate-400">→</span>
                  </button>
                ))}
                <div className="pt-1.5 border-t border-slate-100 px-3">
                  <button
                    onClick={() => {
                      setActiveTab('practice-areas');
                      setPracticeDropdown(false);
                    }}
                    className="w-full text-center text-xs font-semibold text-[#8B1E2B] hover:underline py-1"
                  >
                    View All 11+ Practice Areas →
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setActiveTab('team')}
            className={`transition-colors py-1 ${activeTab === 'team' || activeTab === 'team-detail' ? 'text-[#8B1E2B] font-bold border-b-2 border-[#8B1E2B]' : 'hover:text-[#8B1E2B]'}`}
          >
            Our Team
          </button>

          <button
            onClick={() => setActiveTab('awards')}
            className={`transition-colors py-1 ${activeTab === 'awards' ? 'text-[#8B1E2B] font-bold border-b-2 border-[#8B1E2B]' : 'hover:text-[#8B1E2B]'}`}
          >
            Awards
          </button>

          <button
            onClick={() => setActiveTab('insights')}
            className={`transition-colors py-1 ${activeTab === 'insights' || activeTab === 'insight-detail' ? 'text-[#8B1E2B] font-bold border-b-2 border-[#8B1E2B]' : 'hover:text-[#8B1E2B]'}`}
          >
            Insights &amp; Blogs
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`transition-colors py-1 ${activeTab === 'gallery' ? 'text-[#8B1E2B] font-bold border-b-2 border-[#8B1E2B]' : 'hover:text-[#8B1E2B]'}`}
          >
            Gallery
          </button>

          <button
            onClick={() => setActiveTab('careers')}
            className={`transition-colors py-1 ${activeTab === 'careers' ? 'text-[#8B1E2B] font-bold border-b-2 border-[#8B1E2B]' : 'hover:text-[#8B1E2B]'}`}
          >
            Careers
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`transition-colors py-1 ${activeTab === 'contact' ? 'text-[#8B1E2B] font-bold border-b-2 border-[#8B1E2B]' : 'hover:text-[#8B1E2B]'}`}
          >
            Contact
          </button>
        </nav>

        {/* Schedule Consultation CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-[#8B1E2B] hover:bg-[#721721] text-white text-xs font-semibold uppercase tracking-wider rounded shadow transition-all hover:shadow-md cursor-pointer"
          >
            Consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#8B1E2B] rounded-lg"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 text-sm font-medium">
          <button
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-slate-800"
          >
            Home
          </button>
          <button
            onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-slate-800"
          >
            About Us
          </button>
          <button
            onClick={() => { setActiveTab('practice-areas'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-slate-800"
          >
            Practice Areas (11 Domains)
          </button>
          <button
            onClick={() => { setActiveTab('team'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-slate-800"
          >
            Our Team (24 Legal Experts)
          </button>
          <button
            onClick={() => { setActiveTab('awards'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-slate-800"
          >
            Awards &amp; Accolades
          </button>
          <button
            onClick={() => { setActiveTab('insights'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-slate-800"
          >
            Insights &amp; Recent Blogs
          </button>
          <button
            onClick={() => { setActiveTab('gallery'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-slate-800"
          >
            Gallery
          </button>
          <button
            onClick={() => { setActiveTab('careers'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-slate-800"
          >
            Careers
          </button>
          <button
            onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 px-3 rounded hover:bg-slate-50 text-slate-800"
          >
            Contact Us
          </button>

          <div className="pt-2">
            <button
              onClick={() => { onOpenConsultation(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 bg-[#8B1E2B] text-white text-center font-semibold rounded shadow uppercase tracking-wider text-xs"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
