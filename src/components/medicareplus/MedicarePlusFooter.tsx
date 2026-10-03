import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Ambulance,
  ShieldCheck,
  ChevronRight,
  ArrowUp,
  Heart,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { MEDICARE_CONFIG, SPECIALITIES_LIST, SERVICES_LIST } from '../../data/medicarePlusData';
import { MedicarePlusLogo } from './MedicarePlusLogo';

interface MedicarePlusFooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenAppointmentModal: () => void;
  onOpenPaymentModal: () => void;
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'rights') => void;
  onSelectSpeciality?: (specialityId: string) => void;
}

export const MedicarePlusFooter: React.FC<MedicarePlusFooterProps> = ({
  onNavigateToSection,
  onOpenAppointmentModal,
  onOpenPaymentModal,
  onOpenLegalModal,
  onSelectSpeciality,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const topSpecialities = SPECIALITIES_LIST.slice(0, 8);
  const topServices = SERVICES_LIST.slice(0, 8);

  return (
    <footer className="bg-[#051E28] text-slate-300 font-['Satoshi',sans-serif] border-t border-cyan-900/60 relative overflow-hidden">
      {/* Decorative Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Emergency & OPD Hotline Strip */}
      <div className="bg-[#083344] border-b border-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-full bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                <Ambulance className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-rose-300 font-bold">24x7 Emergency & Ambulance Network</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={`tel:${MEDICARE_CONFIG.phoneAmbulance}`}
                    className="text-lg sm:text-xl font-bold text-white hover:text-rose-300 transition-colors"
                  >
                    {MEDICARE_CONFIG.phoneAmbulance}
                  </a>
                  <span className="text-slate-600 hidden sm:inline">|</span>
                  <a
                    href={`tel:${MEDICARE_CONFIG.phoneCasualty}`}
                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    Emergency Bay: {MEDICARE_CONFIG.phoneCasualty}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <button
                onClick={onOpenAppointmentModal}
                className="px-4 py-2.5 rounded-lg bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-bold transition-all shadow-md hover:shadow-teal-900/50 cursor-pointer"
              >
                Book OPD Consultation
              </button>
              <button
                onClick={onOpenPaymentModal}
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/30 text-xs font-bold transition-all cursor-pointer"
              >
                Demo Online Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Column 1: Hospital Brand & Info */}
          <div className="lg:col-span-2 space-y-5">
            <MedicarePlusLogo theme="light" size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              MedicarePlus Hospital is an advanced tertiary healthcare and clinical research institution delivering
              cutting-edge diagnostics, robotic surgical precision, and compassionate patient-first medical care.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{MEDICARE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>
                  OPD: <a href={`tel:${MEDICARE_CONFIG.phoneOpd}`} className="hover:text-teal-300">{MEDICARE_CONFIG.phoneOpd}</a> · Boardline: <a href={`tel:${MEDICARE_CONFIG.phoneBoardline}`} className="hover:text-teal-300">{MEDICARE_CONFIG.phoneBoardline}</a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${MEDICARE_CONFIG.emailInfo}`} className="hover:text-teal-300">
                  {MEDICARE_CONFIG.emailInfo}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>OPD: Mon–Sat 8:00 AM – 8:00 PM | Casualty: 24x7</span>
              </div>
            </div>

            {/* Accreditations demo badge */}
            <div className="pt-3 flex items-center gap-3">
              <div className="px-2.5 py-1 rounded bg-teal-950/80 border border-teal-500/30 text-[10px] font-bold text-teal-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                NABH Benchmarked Standards
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-[10px] font-bold text-slate-300">
                NABL Accredited Diagnostics
              </div>
            </div>
          </div>

          {/* Column 2: Clinical Specialities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4 border-b border-cyan-900/60 pb-2">
              Clinical Specialities
            </h4>
            <ul className="space-y-2 text-xs">
              {topSpecialities.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      if (onSelectSpeciality) onSelectSpeciality(s.id);
                      onNavigateToSection('specialities');
                    }}
                    className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-500" />
                    <span>{s.shortName || s.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigateToSection('specialities')}
                  className="text-teal-300 hover:text-teal-200 font-bold flex items-center gap-1 mt-2 text-[11px]"
                >
                  <span>View All 22 Specialities</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hospital Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4 border-b border-cyan-900/60 pb-2">
              Hospital Services
            </h4>
            <ul className="space-y-2 text-xs">
              {topServices.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigateToSection('services')}
                    className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-500" />
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigateToSection('services')}
                  className="text-teal-300 hover:text-teal-200 font-bold flex items-center gap-1 mt-2 text-[11px]"
                >
                  <span>All 17 Hospital Services</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Patient Care */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4 border-b border-cyan-900/60 pb-2">
              Patient Care & Guide
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateToSection('about')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-500" /> About MedicarePlus
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('doctors')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-500" /> Find a Specialist Doctor
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('packages')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-500" /> Preventive Health Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('patient-care')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-500" /> Inpatient & TPA Insurance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('visitors-guide')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-500" /> Visiting Hours & Policies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('academics')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-500" /> Academics, DNB & Research
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('feedback')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-500" /> Patient Feedback & Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('emergency')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-500" /> Emergency & Trauma Hotline
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demo Disclaimer & Legal Strip */}
      <div className="border-t border-cyan-900/60 bg-[#04171f] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="text-center lg:text-left space-y-1">
              <p className="font-semibold text-slate-400">
                © {new Date().getFullYear()} MedicarePlus Hospital. All rights reserved. Original portfolio demonstration.
              </p>
              <p className="text-[11px] text-slate-500 max-w-3xl">
                MedicarePlus Hospital is an independent demonstration web application created for portfolio evaluation.
                All doctors, patient stories, and medical cases are simulated demonstration assets.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center text-[11px]">
              <button
                onClick={() => onOpenLegalModal('privacy')}
                className="hover:text-teal-300 transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenLegalModal('terms')}
                className="hover:text-teal-300 transition-colors"
              >
                Terms of Care
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenLegalModal('rights')}
                className="hover:text-teal-300 transition-colors"
              >
                Patient Rights & Responsibilities
              </button>
              <span>·</span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-teal-400 transition-colors flex items-center gap-1"
                title="Back to Top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span className="text-[10px]">Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
