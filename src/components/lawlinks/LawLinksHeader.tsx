import React, { useState } from 'react';
import { LAWLINKS_INFO } from '../../data/lawlinksData';
import {
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Youtube,
  Menu,
  X,
  ChevronDown,
  Scale,
  MessageSquare
} from 'lucide-react';

export type LawLinksSubPage =
  | 'home'
  | 'about'
  | 'services'
  | 'litigation'
  | 'arbitration'
  | 'dispute-resolution'
  | 'transactional-corporate'
  | 'specialization-areas'
  | 'our-team'
  | 'team-detail'
  | 'publications'
  | 'photo-gallery'
  | 'video-gallery'
  | 'career'
  | 'contact-us';

interface Props {
  activeSubPage: LawLinksSubPage;
  onNavigate: (page: LawLinksSubPage, extraId?: string) => void;
  onRequestConsultation: () => void;
}

export const LawLinksHeader: React.FC<Props> = ({
  activeSubPage,
  onNavigate,
  onRequestConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  const handleNav = (page: LawLinksSubPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setPracticeDropdownOpen(false);
    setGalleryDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPracticeActive = [
    'litigation',
    'arbitration',
    'dispute-resolution',
    'transactional-corporate',
    'specialization-areas'
  ].includes(activeSubPage);

  const isGalleryActive = ['photo-gallery', 'video-gallery'].includes(activeSubPage);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100 font-sans">
      {/* Top bar */}
      <div className="bg-[#1e293b] text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Contacts */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <a
              href={`mailto:${LAWLINKS_INFO.headOffice.email}`}
              className="flex items-center gap-1.5 hover:text-[#03A9F5] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#03A9F5]" />
              <span>{LAWLINKS_INFO.headOffice.email}</span>
            </a>
            <a
              href={`tel:${LAWLINKS_INFO.headOffice.phone.split('/')[0].trim()}`}
              className="flex items-center gap-1.5 hover:text-[#03A9F5] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#03A9F5]" />
              <span>{LAWLINKS_INFO.headOffice.phone}</span>
            </a>
          </div>

          {/* Social Icons & City note */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-400 text-xs">Offices: New Delhi (HQ) & Bengaluru</span>
            <div className="flex items-center gap-3 border-l border-slate-700 pl-3">
              <a
                href={LAWLINKS_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#03A9F5] transition-colors p-1"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={LAWLINKS_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#03A9F5] transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={LAWLINKS_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors p-1"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <img
            src="/assets/lawlinks/logo.png"
            alt="Law Links Logo"
            className="h-11 sm:h-13 w-auto object-contain"
            onError={(e) => {
              // fallback if logo fails
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="hidden sm:block">
            <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block uppercase">
              LAW <span className="text-[#03A9F5]">LINKS</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-500 font-semibold block uppercase">
              Advocates & Legal Consultants
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
          <button
            onClick={() => handleNav('home')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              activeSubPage === 'home'
                ? 'text-[#03A9F5] font-bold bg-sky-50'
                : 'hover:text-[#03A9F5] hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              activeSubPage === 'about'
                ? 'text-[#03A9F5] font-bold bg-sky-50'
                : 'hover:text-[#03A9F5] hover:bg-slate-50'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNav('services')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              activeSubPage === 'services'
                ? 'text-[#03A9F5] font-bold bg-sky-50'
                : 'hover:text-[#03A9F5] hover:bg-slate-50'
            }`}
          >
            Services
          </button>

          {/* Practice Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPracticeDropdownOpen(true)}
            onMouseLeave={() => setPracticeDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('litigation')}
              className={`px-3 py-2 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
                isPracticeActive
                  ? 'text-[#03A9F5] font-bold bg-sky-50'
                  : 'hover:text-[#03A9F5] hover:bg-slate-50'
              }`}
            >
              <span>Practice Areas</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {practiceDropdownOpen && (
              <div className="absolute left-0 top-full w-72 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                <button
                  onClick={() => handleNav('litigation')}
                  className="w-full text-left px-4 py-2.5 text-xs sm:text-sm hover:bg-sky-50 hover:text-[#03A9F5] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-[#03A9F5] shrink-0" />
                  <span>Litigation (Supreme Court & High Courts)</span>
                </button>
                <button
                  onClick={() => handleNav('arbitration')}
                  className="w-full text-left px-4 py-2.5 text-xs sm:text-sm hover:bg-sky-50 hover:text-[#03A9F5] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-[#03A9F5] shrink-0" />
                  <span>Arbitration (Domestic & International)</span>
                </button>
                <button
                  onClick={() => handleNav('dispute-resolution')}
                  className="w-full text-left px-4 py-2.5 text-xs sm:text-sm hover:bg-sky-50 hover:text-[#03A9F5] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-[#03A9F5] shrink-0" />
                  <span>Dispute Resolution - Mediation & Conciliation</span>
                </button>
                <button
                  onClick={() => handleNav('transactional-corporate')}
                  className="w-full text-left px-4 py-2.5 text-xs sm:text-sm hover:bg-sky-50 hover:text-[#03A9F5] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-[#03A9F5] shrink-0" />
                  <span>Transactional & Corporate Advisory</span>
                </button>
                <button
                  onClick={() => handleNav('specialization-areas')}
                  className="w-full text-left px-4 py-2.5 text-xs sm:text-sm hover:bg-sky-50 hover:text-[#03A9F5] transition-colors flex items-center gap-2 border-t border-slate-100 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Specialization Areas (32 Sectors)</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('our-team')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              activeSubPage === 'our-team' || activeSubPage === 'team-detail'
                ? 'text-[#03A9F5] font-bold bg-sky-50'
                : 'hover:text-[#03A9F5] hover:bg-slate-50'
            }`}
          >
            Our Team
          </button>

          <button
            onClick={() => handleNav('publications')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              activeSubPage === 'publications'
                ? 'text-[#03A9F5] font-bold bg-sky-50'
                : 'hover:text-[#03A9F5] hover:bg-slate-50'
            }`}
          >
            Publications
          </button>

          {/* Gallery Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setGalleryDropdownOpen(true)}
            onMouseLeave={() => setGalleryDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('photo-gallery')}
              className={`px-3 py-2 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
                isGalleryActive
                  ? 'text-[#03A9F5] font-bold bg-sky-50'
                  : 'hover:text-[#03A9F5] hover:bg-slate-50'
              }`}
            >
              <span>Gallery</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {galleryDropdownOpen && (
              <div className="absolute left-0 top-full w-48 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                <button
                  onClick={() => handleNav('photo-gallery')}
                  className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-sky-50 hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  Photo Gallery (20)
                </button>
                <button
                  onClick={() => handleNav('video-gallery')}
                  className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-sky-50 hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  Video Gallery (5)
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('career')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              activeSubPage === 'career'
                ? 'text-[#03A9F5] font-bold bg-sky-50'
                : 'hover:text-[#03A9F5] hover:bg-slate-50'
            }`}
          >
            Career
          </button>

          <button
            onClick={() => handleNav('contact-us')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              activeSubPage === 'contact-us'
                ? 'text-[#03A9F5] font-bold bg-sky-50'
                : 'hover:text-[#03A9F5] hover:bg-slate-50'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* CTA Button + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRequestConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#03A9F5] hover:bg-[#0288d1] text-white text-xs sm:text-sm font-bold rounded-lg shadow hover:shadow-md transition-all uppercase tracking-wider cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consultation</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[108px] bg-white z-40 overflow-y-auto border-t border-slate-200 p-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="space-y-1 text-base font-semibold text-slate-800">
            <button
              onClick={() => handleNav('home')}
              className={`w-full text-left px-4 py-3 rounded-lg ${activeSubPage === 'home' ? 'bg-sky-50 text-[#03A9F5]' : 'hover:bg-slate-50'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`w-full text-left px-4 py-3 rounded-lg ${activeSubPage === 'about' ? 'bg-sky-50 text-[#03A9F5]' : 'hover:bg-slate-50'}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNav('services')}
              className={`w-full text-left px-4 py-3 rounded-lg ${activeSubPage === 'services' ? 'bg-sky-50 text-[#03A9F5]' : 'hover:bg-slate-50'}`}
            >
              Services (32 Sectors)
            </button>

            {/* Practice Areas */}
            <div className="pl-2 border-l-2 border-slate-200 my-2 space-y-1">
              <span className="block px-3 py-1 text-xs uppercase text-slate-400 font-bold tracking-wider">Practice Areas</span>
              <button
                onClick={() => handleNav('litigation')}
                className={`w-full text-left px-3 py-2 text-sm rounded ${activeSubPage === 'litigation' ? 'text-[#03A9F5] font-bold' : 'text-slate-600'}`}
              >
                • Litigation Practice
              </button>
              <button
                onClick={() => handleNav('arbitration')}
                className={`w-full text-left px-3 py-2 text-sm rounded ${activeSubPage === 'arbitration' ? 'text-[#03A9F5] font-bold' : 'text-slate-600'}`}
              >
                • Arbitration Practice
              </button>
              <button
                onClick={() => handleNav('dispute-resolution')}
                className={`w-full text-left px-3 py-2 text-sm rounded ${activeSubPage === 'dispute-resolution' ? 'text-[#03A9F5] font-bold' : 'text-slate-600'}`}
              >
                • Dispute Resolution - Mediation
              </button>
              <button
                onClick={() => handleNav('transactional-corporate')}
                className={`w-full text-left px-3 py-2 text-sm rounded ${activeSubPage === 'transactional-corporate' ? 'text-[#03A9F5] font-bold' : 'text-slate-600'}`}
              >
                • Transactional & Corporate Advisory
              </button>
              <button
                onClick={() => handleNav('specialization-areas')}
                className={`w-full text-left px-3 py-2 text-sm rounded ${activeSubPage === 'specialization-areas' ? 'text-[#03A9F5] font-bold' : 'text-slate-600'}`}
              >
                • Specialization Areas
              </button>
            </div>

            <button
              onClick={() => handleNav('our-team')}
              className={`w-full text-left px-4 py-3 rounded-lg ${activeSubPage === 'our-team' ? 'bg-sky-50 text-[#03A9F5]' : 'hover:bg-slate-50'}`}
            >
              Our Team (12 Lawyers)
            </button>
            <button
              onClick={() => handleNav('publications')}
              className={`w-full text-left px-4 py-3 rounded-lg ${activeSubPage === 'publications' ? 'bg-sky-50 text-[#03A9F5]' : 'hover:bg-slate-50'}`}
            >
              Publications & Lectures
            </button>
            <button
              onClick={() => handleNav('photo-gallery')}
              className={`w-full text-left px-4 py-3 rounded-lg ${activeSubPage === 'photo-gallery' ? 'bg-sky-50 text-[#03A9F5]' : 'hover:bg-slate-50'}`}
            >
              Photo Gallery
            </button>
            <button
              onClick={() => handleNav('video-gallery')}
              className={`w-full text-left px-4 py-3 rounded-lg ${activeSubPage === 'video-gallery' ? 'bg-sky-50 text-[#03A9F5]' : 'hover:bg-slate-50'}`}
            >
              Video Gallery
            </button>
            <button
              onClick={() => handleNav('career')}
              className={`w-full text-left px-4 py-3 rounded-lg ${activeSubPage === 'career' ? 'bg-sky-50 text-[#03A9F5]' : 'hover:bg-slate-50'}`}
            >
              Career & Internships
            </button>
            <button
              onClick={() => handleNav('contact-us')}
              className={`w-full text-left px-4 py-3 rounded-lg ${activeSubPage === 'contact-us' ? 'bg-sky-50 text-[#03A9F5]' : 'hover:bg-slate-50'}`}
            >
              Contact Us (Delhi & Bengaluru)
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="w-full py-3 bg-[#03A9F5] text-white font-bold rounded-lg shadow uppercase text-sm"
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
