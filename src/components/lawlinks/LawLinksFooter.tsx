import React from 'react';
import { LAWLINKS_INFO } from '../../data/lawlinksData';
import { LawLinksSubPage } from './LawLinksHeader';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Youtube,
  ArrowUp,
  Scale
} from 'lucide-react';

interface Props {
  onNavigate: (page: LawLinksSubPage) => void;
}

export const LawLinksFooter: React.FC<Props> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-slate-300 font-sans border-t border-slate-800">
      {/* Main Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About Firm */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/lawlinks/logo.png"
                alt="Law Links Logo"
                className="h-12 w-auto object-contain bg-white/10 p-1 rounded"
              />
              <div>
                <span className="text-xl font-black text-white tracking-wider block">
                  LAW <span className="text-[#03A9F5]">LINKS</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block tracking-widest">
                  Advocates & Legal Consultants
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A boutique legal services firm established in 2004 by seasoned advocates, offering comprehensive litigation before the Supreme Court of India, High Courts, arbitral tribunals, and full-spectrum transactional advisory.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase text-slate-400 font-bold tracking-wider block mb-2">Connect With Us</span>
              <div className="flex items-center gap-3">
                <a
                  href={LAWLINKS_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded bg-slate-800 hover:bg-[#03A9F5] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={LAWLINKS_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded bg-slate-800 hover:bg-[#03A9F5] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={LAWLINKS_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded bg-slate-800 hover:bg-red-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-[#03A9F5] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  • Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  • About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  • Services (32 Sectors)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('our-team')}
                  className="hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  • Our Team (12 Lawyers)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('publications')}
                  className="hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  • Publications & Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('photo-gallery')}
                  className="hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  • Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('video-gallery')}
                  className="hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  • Video Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('career')}
                  className="hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  • Careers & Internships
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="hover:text-[#03A9F5] transition-colors cursor-pointer"
                >
                  • Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-[#03A9F5] pl-3">
              Practice Areas
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('litigation')}
                  className="text-left hover:text-[#03A9F5] transition-colors flex items-start gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                  <span>Litigation (Supreme Court & High Courts)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('arbitration')}
                  className="text-left hover:text-[#03A9F5] transition-colors flex items-start gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                  <span>Arbitration (Domestic & International)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dispute-resolution')}
                  className="text-left hover:text-[#03A9F5] transition-colors flex items-start gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                  <span>Dispute Resolution - Mediation & Conciliation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('transactional-corporate')}
                  className="text-left hover:text-[#03A9F5] transition-colors flex items-start gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                  <span>Transactional & Corporate Advisory</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('specialization-areas')}
                  className="text-left hover:text-[#03A9F5] transition-colors flex items-start gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                  <span>Specialization Areas & Tribunals</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Addresses */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-[#03A9F5] pl-3">
              Office Locations
            </h4>

            {/* Delhi */}
            <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-700/60 space-y-1.5">
              <span className="text-xs uppercase font-bold text-[#03A9F5] tracking-wider block">
                Delhi (Head Office)
              </span>
              <p className="text-xs text-slate-300 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{LAWLINKS_INFO.headOffice.address}</span>
              </p>
              <p className="text-xs text-slate-300 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="tel:01143017435" className="hover:text-[#03A9F5]">{LAWLINKS_INFO.headOffice.phone}</a>
              </p>
            </div>

            {/* Bengaluru */}
            <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-700/60 space-y-1.5">
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider block">
                Bengaluru Office
              </span>
              <p className="text-xs text-slate-300 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{LAWLINKS_INFO.branchOffice.address}</span>
              </p>
              <p className="text-xs text-slate-300 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="tel:08041242407" className="hover:text-[#03A9F5]">{LAWLINKS_INFO.branchOffice.phone}</a>
              </p>
            </div>

            <div className="pt-1">
              <a
                href={`mailto:${LAWLINKS_INFO.headOffice.email}`}
                className="text-xs text-[#03A9F5] hover:underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{LAWLINKS_INFO.headOffice.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#090d16] border-t border-slate-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Law Links, Advocates & Legal Consultants. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400">Bar Council of India Compliant</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-800 hover:bg-[#03A9F5] text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
