import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  Send,
  CheckCircle2,
  X,
  Phone,
  MessageSquare,
  Building,
  Shield,
  Stethoscope,
  Heart,
  Activity,
  Calendar,
  Award,
  Ambulance,
  CreditCard,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  MEDICARE_CONFIG,
  SPECIALITIES_LIST,
  DOCTORS_LIST,
  SpecialityItem,
  DoctorProfile,
  buildMedicareWhatsAppLink,
  MedicareAppointmentLead,
  submitMedicareAppointment,
} from '../../data/medicarePlusData';

// Hospital Sections & Components
import { MedicarePlusTopBar } from './MedicarePlusTopBar';
import { MedicarePlusNavbar } from './MedicarePlusNavbar';
import { MedicarePlusHero } from './MedicarePlusHero';
import { MedicarePlusQuickActions } from './MedicarePlusQuickActions';
import { MedicarePlusSymptoms } from './MedicarePlusSymptoms';
import { MedicarePlusSpecialities } from './MedicarePlusSpecialities';
import { MedicarePlusCentresExcellence } from './MedicarePlusCentresExcellence';
import { MedicarePlusAbout } from './MedicarePlusAbout';
import { MedicarePlusDoctors } from './MedicarePlusDoctors';
import { MedicarePlusHealthPackages } from './MedicarePlusHealthPackages';
import { MedicarePlusServices } from './MedicarePlusServices';
import { MedicarePlusEmergency } from './MedicarePlusEmergency';
import { MedicarePlusPatientCare } from './MedicarePlusPatientCare';
import { MedicarePlusInternationalPatients } from './MedicarePlusInternationalPatients';
import { MedicarePlusVisitorsGuide } from './MedicarePlusVisitorsGuide';
import { MedicarePlusAcademics } from './MedicarePlusAcademics';
import { MedicarePlusPatientFeedback } from './MedicarePlusPatientFeedback';
import { MedicarePlusQualitySafety } from './MedicarePlusQualitySafety';
import { MedicarePlusMediaBlog } from './MedicarePlusMediaBlog';
import { MedicarePlusFooter } from './MedicarePlusFooter';

// Modals
import { MedicarePlusAppointmentModal } from './MedicarePlusAppointmentModal';
import { MedicarePlusOnlinePayment } from './MedicarePlusOnlinePayment';
import { MedicarePlusDoctorModal } from './MedicarePlusDoctorModal';
import { MedicarePlusSpecialityModal } from './MedicarePlusSpecialityModal';
import { MedicarePlusLegalModals } from './MedicarePlusLegalModals';

interface MedicarePlusAppProps {
  onBackToHub?: () => void;
  initialFullDemo?: boolean;
}

export const MedicarePlusApp: React.FC<MedicarePlusAppProps> = ({
  onBackToHub,
  initialFullDemo = true,
}) => {
  const { setActiveView, submitWebsiteRequest } = useApp();

  // Showcase header banner state (collapsible)
  const [isFullDemoMode, setIsFullDemoMode] = useState<boolean>(initialFullDemo);
  const [showcaseBarCollapsed, setShowcaseBarCollapsed] = useState<boolean>(false);

  // Modals for MedicarePlus demo
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [modalDoctorName, setModalDoctorName] = useState<string>('');
  const [modalSpeciality, setModalSpeciality] = useState<string>('');
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const [selectedDoctorModal, setSelectedDoctorModal] = useState<DoctorProfile | null>(null);
  const [selectedSpecialityModal, setSelectedSpecialityModal] = useState<SpecialityItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'rights' | null>(null);

  // Raozsite "Get a website like this" modal
  const [raozsiteLeadModalOpen, setRaozsiteLeadModalOpen] = useState(false);
  const [raozName, setRaozName] = useState('');
  const [raozPhone, setRaozPhone] = useState('');
  const [raozEmail, setRaozEmail] = useState('');
  const [raozCity, setRaozCity] = useState('');
  const [raozRequirements, setRaozRequirements] = useState(
    'I want a modern multispeciality hospital website like MedicarePlus Hospital (Project #65) with doctor discovery, specialities, hospital services, patient information, appointments, emergency support and hospital resources.'
  );
  const [raozSubmitting, setRaozSubmitting] = useState(false);
  const [raozSubmitted, setRaozSubmitted] = useState(false);

  // Scroll to section helper
  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAppointmentModal = (doctorName?: string, speciality?: string) => {
    if (doctorName) setModalDoctorName(doctorName);
    else setModalDoctorName('');

    if (speciality) setModalSpeciality(speciality);
    else setModalSpeciality('');

    setAppointmentModalOpen(true);
  };

  const handleSelectSpeciality = (specialityId: string) => {
    const match = SPECIALITIES_LIST.find((s) => s.id === specialityId || s.slug === specialityId);
    if (match) {
      setSelectedSpecialityModal(match);
    } else {
      handleNavigateToSection('specialities');
    }
  };

  const handleRaozsiteLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!raozName || !raozPhone) return;

    setRaozSubmitting(true);
    try {
      if (submitWebsiteRequest) {
        await submitWebsiteRequest({
          businessName: 'MedicarePlus Hospital (Project #65) Website Build',
          category: 'healthcare',
          ownerName: raozName || 'Prospective Healthcare Client',
          phone: raozPhone,
          city: raozCity || 'Delhi NCR',
          notes: raozRequirements,
        });
      }
      setRaozSubmitted(true);
    } catch {
      setRaozSubmitted(true);
    } finally {
      setRaozSubmitting(false);
    }
  };

  const resetRaozModal = () => {
    setRaozsiteLeadModalOpen(false);
    setRaozSubmitted(false);
    setRaozName('');
    setRaozPhone('');
    setRaozEmail('');
    setRaozCity('');
  };

  return (
    <div className="min-h-screen bg-white font-['Satoshi',sans-serif] text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* ------------------------------------------------------------- */}
      {/* 1. RAOZSITE PORTFOLIO TOP SHOWCASE BAR */}
      {/* ------------------------------------------------------------- */}
      {!showcaseBarCollapsed && (
        <aside
          aria-label="Raozsite Project Showcase Toolbar"
          className="bg-slate-900 border-b border-slate-800 text-white px-3 sm:px-6 py-2.5 sm:py-3 sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95"
        >
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Left: Back button & Project Identification */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => {
                  if (onBackToHub) onBackToHub();
                  else setActiveView('demo-websites');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold transition-all border border-slate-700 hover:border-slate-600 cursor-pointer text-xs"
                title="Return to Raozsite Portfolio Hub"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Raozsite Portfolio</span>
              </button>

              <div className="h-4 w-px bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30 text-[11px] tracking-wide">
                  PROJECT #65
                </span>
                <span className="font-extrabold text-white tracking-wide uppercase text-xs">
                  MEDICAREPLUS HOSPITAL
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">
                  <Shield className="w-3 h-3 text-teal-400" />
                  Healthcare / Multispeciality Hospital
                </span>
                <span className="hidden lg:inline-flex px-1.5 py-0.5 rounded bg-emerald-950/80 text-[10px] text-emerald-400 border border-emerald-800/60 font-semibold">
                  DEMO WEBSITE
                </span>
              </div>
            </div>

            {/* Right: Lead Generation & Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsFullDemoMode(!isFullDemoMode);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isFullDemoMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    : 'bg-[#00A896] text-white hover:bg-[#008f80] shadow-sm'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isFullDemoMode ? 'Show Overview' : 'LAUNCH DEMO'}</span>
              </button>

              <button
                onClick={() => setRaozsiteLeadModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold transition-all shadow-md hover:shadow-cyan-500/20 cursor-pointer text-xs"
              >
                <span>GET A WEBSITE LIKE THIS</span>
              </button>

              <button
                onClick={() => setShowcaseBarCollapsed(true)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Collapse toolbar for fullscreen demo"
                aria-label="Hide portfolio bar"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Project Detail Specifications Drawer */}
          {!isFullDemoMode && (
            <div className="bg-[#051E28] border-t border-slate-800 px-4 py-6 text-slate-300 animate-in fade-in duration-200 mt-2">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">
                    PROJECT ARCHITECTURE
                  </span>
                  <h2 className="text-white font-bold text-base mt-1">
                    PROJECT #65 — MEDICAREPLUS HOSPITAL
                  </h2>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-bold">
                      HEALTHCARE / HOSPITAL
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      DEMO WEBSITE
                    </span>
                  </div>
                  <p className="text-slate-300 mt-2 text-xs leading-relaxed">
                    A comprehensive multispeciality hospital website designed to help patients discover doctors, explore medical specialities, understand hospital services, access patient resources and request appointments.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      onClick={() => {
                        setIsFullDemoMode(true);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 rounded-lg bg-[#00A896] hover:bg-[#008f80] text-white font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>LAUNCH DEMO</span>
                    </button>
                    <button
                      onClick={() => setRaozsiteLeadModalOpen(true)}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/30 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>GET A WEBSITE LIKE THIS</span>
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">
                    KEY HOSPITAL FEATURES
                  </span>
                  <ul className="mt-2 space-y-1.5 text-slate-300">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>Doctor discovery with filters by name, speciality &amp; department</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>22 clinical specialities &amp; 17 hospital services</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>24x7 emergency trauma hotline &amp; ambulance network</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>Interactive appointment scheduling with confirmation workflow</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>Safe online payment demonstration portal for OPD &amp; diagnostics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">
                    RAOZSITE HEALTHCARE SUITE
                  </span>
                  <p className="mt-2 text-slate-300 leading-relaxed text-xs">
                    Raozsite builds high-conversion, patient-centric healthcare and hospital portals optimized for local patient discovery, OPD scheduling, NABH compliance presentation, and multi-department management.
                  </p>
                  <div className="mt-3 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Target Deployment: Hospital / Clinic</span>
                    <span className="text-teal-400 font-bold">Turnkey Ready</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </aside>
      )}

      {/* Floating restore button when showcase bar is collapsed */}
      {showcaseBarCollapsed && (
        <button
          onClick={() => setShowcaseBarCollapsed(false)}
          className="fixed top-3 right-3 z-50 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-teal-300 hover:text-teal-200 text-xs font-bold border border-teal-500/40 shadow-xl backdrop-blur-md transition-all cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-teal-400" />
          <span>Show Raozsite Bar</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. MEDICAREPLUS HOSPITAL HEADER / TOP BAR */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusTopBar />

      {/* ------------------------------------------------------------- */}
      {/* 3. MAIN HOSPITAL NAVIGATION & MEGA-MENUS */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusNavbar
        onNavigateToSection={handleNavigateToSection}
        onOpenAppointmentModal={handleOpenAppointmentModal}
        onOpenPaymentModal={() => setPaymentModalOpen(true)}
        onSelectSpeciality={handleSelectSpeciality}
        onOpenSpecialitiesDirectory={() => handleNavigateToSection('specialities')}
      />

      {/* ------------------------------------------------------------- */}
      {/* 4. HOSPITAL HERO SLIDER */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusHero
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onExploreDoctors={() => handleNavigateToSection('doctors')}
        onExploreSpecialities={() => handleNavigateToSection('specialities')}
      />

      {/* ------------------------------------------------------------- */}
      {/* 5. QUICK ACTION CARDS */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusQuickActions
        onExploreDoctors={() => handleNavigateToSection('doctors')}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onOpenPaymentModal={() => setPaymentModalOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* ------------------------------------------------------------- */}
      {/* 6. SYMPTOM EXPLORER / SPECIALIST ADVISOR */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusSymptoms
        onSelectSpeciality={handleSelectSpeciality}
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* ------------------------------------------------------------- */}
      {/* 7. 22 CORE CLINICAL SPECIALITIES */}
      {/* ------------------------------------------------------------- */}
      <div id="specialities">
        <MedicarePlusSpecialities
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 8. CENTRES OF EXCELLENCE */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusCentresExcellence
        onSelectSpeciality={handleSelectSpeciality}
      />

      {/* ------------------------------------------------------------- */}
      {/* 9. ABOUT MEDICAREPLUS HOSPITAL */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusAbout />

      {/* ------------------------------------------------------------- */}
      {/* 10. FIND A DOCTOR DIRECTORY */}
      {/* ------------------------------------------------------------- */}
      <div id="doctors">
        <MedicarePlusDoctors
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 11. PREVENTIVE HEALTH CHECKUP PACKAGES */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusHealthPackages
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* ------------------------------------------------------------- */}
      {/* 12. 17+ HOSPITAL SERVICES & CLINICAL DIAGNOSTICS */}
      {/* ------------------------------------------------------------- */}
      <div id="services">
        <MedicarePlusServices
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 13. 24x7 EMERGENCY & AMBULANCE BAY */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusEmergency />

      {/* ------------------------------------------------------------- */}
      {/* 14. PATIENT CARE & INPATIENT ACCOMMODATION */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusPatientCare />

      {/* ------------------------------------------------------------- */}
      {/* 15. INTERNATIONAL PATIENT SERVICES */}
      {/* ------------------------------------------------------------- */}
      <div id="international">
        <MedicarePlusInternationalPatients
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 16. VISITORS GUIDE & HOSPITAL POLICIES */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusVisitorsGuide />

      {/* ------------------------------------------------------------- */}
      {/* 17. ACADEMICS, DNB & CLINICAL RESEARCH */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusAcademics />

      {/* ------------------------------------------------------------- */}
      {/* 18. PATIENT FEEDBACK & EXPERIENCES */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusPatientFeedback />

      {/* ------------------------------------------------------------- */}
      {/* 19. QUALITY & CLINICAL SAFETY */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusQualitySafety />

      {/* ------------------------------------------------------------- */}
      {/* 20. HOSPITAL NEWS & HEALTH ARTICLES */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusMediaBlog />

      {/* ------------------------------------------------------------- */}
      {/* 21. MULTI-COLUMN HOSPITAL FOOTER */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusFooter
        onNavigateToSection={handleNavigateToSection}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onOpenPaymentModal={() => setPaymentModalOpen(true)}
        onOpenLegalModal={(type) => setLegalModalType(type)}
        onSelectSpeciality={handleSelectSpeciality}
      />

      {/* ------------------------------------------------------------- */}
      {/* FLOATING ACTION BUTTONS */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
        {/* Floating Emergency Ambulance Hotline */}
        <a
          href={`tel:${MEDICARE_CONFIG.phoneAmbulance}`}
          className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-xl transition-all hover:scale-105 border-2 border-white cursor-pointer"
          title="24x7 Ambulance Emergency Hotline"
        >
          <Ambulance className="w-4 h-4 animate-bounce" />
          <span className="hidden sm:inline">24x7 Ambulance: {MEDICARE_CONFIG.phoneAmbulance}</span>
          <span className="sm:hidden font-mono">Ambulance</span>
        </a>

        {/* Floating Quick OPD Appointment */}
        <button
          onClick={() => handleOpenAppointmentModal()}
          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0C4A60] hover:bg-[#083344] text-white font-bold text-xs shadow-xl transition-all hover:scale-105 border border-cyan-400/40 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-teal-400" />
          <span>Book OPD Appointment</span>
        </button>

        {/* Floating WhatsApp Care Liaison */}
        <a
          href={buildMedicareWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-lg transition-all hover:scale-105 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Care Liaison</span>
        </a>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODAL 1: REQUEST AN APPOINTMENT */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusAppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDoctorName={modalDoctorName}
        initialSpeciality={modalSpeciality}
      />

      {/* ------------------------------------------------------------- */}
      {/* MODAL 2: ONLINE DEMO PAYMENT PORTAL */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusOnlinePayment
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />

      {/* ------------------------------------------------------------- */}
      {/* MODAL 3: DOCTOR PROFILE DEEP DIVE */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusDoctorModal
        doctor={selectedDoctorModal}
        onClose={() => setSelectedDoctorModal(null)}
        onRequestAppointment={(doc, spec) => {
          handleOpenAppointmentModal(doc, spec);
        }}
      />

      {/* ------------------------------------------------------------- */}
      {/* MODAL 4: SPECIALITY DEEP DIVE */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusSpecialityModal
        speciality={selectedSpecialityModal}
        onClose={() => setSelectedSpecialityModal(null)}
        onRequestAppointment={(_, spec) => {
          handleOpenAppointmentModal(undefined, spec);
        }}
      />

      {/* ------------------------------------------------------------- */}
      {/* MODAL 5: LEGAL & PATIENT CHARTER */}
      {/* ------------------------------------------------------------- */}
      <MedicarePlusLegalModals
        modalType={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* ------------------------------------------------------------- */}
      {/* MODAL 6: RAOZSITE LEAD MODAL ("GET A WEBSITE LIKE THIS") */}
      {/* ------------------------------------------------------------- */}
      {raozsiteLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-white">
            <button
              onClick={resetRaozModal}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {raozSubmitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Requirement Received!</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Thank you! The Raozsite healthcare digital production team will contact you within 24 hours to review your hospital website project, doctor discovery integrations, and deployment blueprint.
                </p>
                <button
                  onClick={resetRaozModal}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow-md"
                >
                  Return to Demo
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    Raozsite Custom Build
                  </span>
                  <span className="text-xs text-slate-400">Project #65</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Get A Multispeciality Hospital Website
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Deliver a world-class patient journey with doctor discovery, OPD booking, hospital services, and medical trust for your hospital or medical institution.
                </p>

                <form onSubmit={handleRaozsiteLeadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name <span className="text-teal-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={raozName}
                      onChange={(e) => setRaozName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Sharma / Hospital Administrator"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone / WhatsApp <span className="text-teal-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={raozPhone}
                        onChange={(e) => setRaozPhone(e.target.value)}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={raozEmail}
                        onChange={(e) => setRaozEmail(e.target.value)}
                        placeholder="hospital@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      City / Hospital Location
                    </label>
                    <input
                      type="text"
                      value={raozCity}
                      onChange={(e) => setRaozCity(e.target.value)}
                      placeholder="e.g. Mumbai, Delhi NCR, Bangalore"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Notes & Features Required
                    </label>
                    <textarea
                      rows={3}
                      value={raozRequirements}
                      onChange={(e) => setRaozRequirements(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={raozSubmitting}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/20 cursor-pointer disabled:opacity-50"
                    >
                      {raozSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-slate-950" />
                          <span>Request Hospital Website Consultation</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
