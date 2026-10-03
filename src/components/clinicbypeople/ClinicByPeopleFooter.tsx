import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldAlert,
  ArrowUp,
  MessageSquare,
} from 'lucide-react';
import { CLINIC_CONFIG, SPECIALITIES_DATA, buildClinicWhatsAppLink } from '../../data/clinicByPeopleData';
import { ClinicByPeopleLogo } from './ClinicByPeopleLogo';

interface ClinicByPeopleFooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenConsultationModal: (speciality?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const ClinicByPeopleFooter: React.FC<ClinicByPeopleFooterProps> = ({
  onNavigateToSection,
  onOpenConsultationModal,
  onOpenLegal,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070D18] text-slate-300 font-['Lexend',sans-serif] border-t border-slate-800">
      {/* 1. Pre-footer Care Hotline Banner */}
      <div className="bg-[#0B1528] border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
              Need Medical Clarification?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Speak with a Dedicated Care Coordinator Now
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Free guidance on symptoms, surgeon availability, insurance cashless approvals, and hospital cab logistics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_CONFIG.phoneClean}`}
              className="px-5 py-3 rounded-2xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs font-bold transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {CLINIC_CONFIG.phone}</span>
            </a>
            <a
              href={buildClinicWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <ClinicByPeopleLogo theme="dark" size="md" />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              ClinicByPeople is a digital healthcare platform focused on helping people discover specialist surgical care, accredited daycare healthcare centres, and paperless cashless insurance settlements.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0C5BE2] shrink-0" />
                <span>{CLINIC_CONFIG.phone} (24x7 Helpline)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0C5BE2] shrink-0" />
                <span>{CLINIC_CONFIG.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5" />
                <span>{CLINIC_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Healthcare & Treatments */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Healthcare
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateToSection('specialities')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  General Laparoscopic Surgery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('specialities')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Laser Proctology (Piles Care)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('specialities')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Robotic Orthopaedics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('specialities')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Women's Gynaecology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('specialities')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Incisionless Urology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('specialities')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  ENT &amp; Micro-Ear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('specialities')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Plastic &amp; Cosmetic Surgery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Care Network */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Care Network
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateToSection('doctors')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Specialist Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('hospitals')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Healthcare Centres
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('hospitals')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Partner Hospitals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('healthfeed')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Healthfeed Medical Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultationModal()}
                  className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-sky-400"
                >
                  Book Free Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Legal &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy &amp; Data Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Medical Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Patient FAQs
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Statutory Medical Disclaimer Box */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold text-slate-300 mb-1">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Statutory Medical Notice &amp; Compliance</span>
          </div>
          <p>
            {CLINIC_CONFIG.disclaimer}
          </p>
        </div>

        {/* 4. Bottom Copyright & Back to Top */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {CLINIC_CONFIG.brandName}. All rights reserved. Specialist Discovery &amp; Care Coordination Platform.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
