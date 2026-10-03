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
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  CLINIC_CONFIG,
  SPECIALITIES_DATA,
  buildClinicWhatsAppLink,
  ClinicConsultationLead,
  submitClinicConsultation,
} from '../../data/clinicByPeopleData';
import { ClinicByPeopleNavbar } from './ClinicByPeopleNavbar';
import { ClinicByPeopleHero } from './ClinicByPeopleHero';
import { ClinicByPeopleSpecialities } from './ClinicByPeopleSpecialities';
import { ClinicByPeoplePatientExperience } from './ClinicByPeoplePatientExperience';
import { ClinicByPeopleHospitals } from './ClinicByPeopleHospitals';
import { ClinicByPeoplePatientJourney } from './ClinicByPeoplePatientJourney';
import { ClinicByPeopleSpecialists } from './ClinicByPeopleSpecialists';
import { ClinicByPeopleSpecializedCentres } from './ClinicByPeopleSpecializedCentres';
import { ClinicByPeopleTrust } from './ClinicByPeopleTrust';
import { ClinicByPeopleInsurance } from './ClinicByPeopleInsurance';
import { ClinicByPeopleHealthfeed } from './ClinicByPeopleHealthfeed';
import { ClinicByPeopleAbout } from './ClinicByPeopleAbout';
import { ClinicByPeopleFaq } from './ClinicByPeopleFaq';
import { ClinicByPeoplePatientStories } from './ClinicByPeoplePatientStories';
import { ClinicByPeopleAppCta } from './ClinicByPeopleAppCta';
import { ClinicByPeopleFooter } from './ClinicByPeopleFooter';
import { ClinicByPeopleConsultationModal } from './ClinicByPeopleConsultationModal';
import { ClinicByPeopleLegalModals } from './ClinicByPeopleLegalModals';

interface ClinicByPeopleAppProps {
  onBackToHub?: () => void;
  initialFullDemo?: boolean;
}

export const ClinicByPeopleApp: React.FC<ClinicByPeopleAppProps> = ({
  onBackToHub,
  initialFullDemo = true,
}) => {
  const { setActiveView, submitLead, submitWebsiteRequest } = useApp();

  // Current selected city across clinic experience
  const [currentCity, setCurrentCity] = useState<string>('Delhi NCR');

  // Showcase header banner state (collapsible)
  const [isFullDemoMode, setIsFullDemoMode] = useState<boolean>(initialFullDemo);
  const [showcaseBarCollapsed, setShowcaseBarCollapsed] = useState<boolean>(false);

  // Modals for ClinicByPeople demo
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [modalSpeciality, setModalSpeciality] = useState<string>('General Surgery');
  const [modalNote, setModalNote] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Raozsite "Get a website like this" modal
  const [raozsiteLeadModalOpen, setRaozsiteLeadModalOpen] = useState(false);
  const [raozName, setRaozName] = useState('');
  const [raozPhone, setRaozPhone] = useState('');
  const [raozEmail, setRaozEmail] = useState('');
  const [raozCity, setRaozCity] = useState('');
  const [raozRequirements, setRaozRequirements] = useState(
    'I want a modern healthcare & clinic website like ClinicByPeople (Project #64) with specialist discovery, appointment consultation, treatment directory, and cashless insurance support.'
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

  const handleOpenConsultationModal = (speciality?: string, note?: string) => {
    if (speciality) setModalSpeciality(speciality);
    if (note) setModalNote(note);
    setConsultationModalOpen(true);
  };

  const handleRaozsiteLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!raozPhone.trim() || raozSubmitting) return;

    setRaozSubmitting(true);
    try {
      if (submitLead) {
        await submitLead({
          websiteSlug: '64-clinicbypeople',
          businessName: 'ClinicByPeople (Project #64)',
          customerName: raozName || 'Prospective Healthcare Client',
          customerEmail: raozEmail || '',
          customerPhone: raozPhone,
          message: `${raozRequirements} (City: ${raozCity || 'Not specified'})`,
          status: 'new',
        });
      }
      if (submitWebsiteRequest) {
        await submitWebsiteRequest({
          businessName: `${raozName || 'Prospective Client'}'s Healthcare Clinic`,
          category: 'clinic',
          ownerName: raozName || 'Prospective Client',
          phone: raozPhone,
          city: raozCity || 'Delhi NCR',
          notes: raozRequirements,
        });
      }
      setRaozSubmitted(true);
    } catch (err) {
      console.error('Error submitting Raozsite lead:', err);
      setRaozSubmitted(true);
    } finally {
      setRaozSubmitting(false);
    }
  };

  const handleBackToPortfolio = () => {
    if (onBackToHub) {
      onBackToHub();
    } else {
      setActiveView('demo-websites');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-900 font-['Lexend',sans-serif] selection:bg-[#0C5BE2] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. RAOZSITE PORTFOLIO TOP SHOWCASE BAR (PROJECT #64 HEADER)              */}
      {/* ========================================================================= */}
      <aside aria-label="Project showcase controls" className="bg-[#0B1528] text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Left info badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToPortfolio}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer border border-slate-700"
              title="Return to Raozsite Portfolio"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Portfolio</span>
              <span className="sm:hidden">Back</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-sky-400 border border-blue-500/30">
                PROJECT #64
              </span>
              <div className="hidden md:flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-white">
                  ClinicByPeople
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400">Healthcare &amp; Specialist Clinic Website</span>
              </div>
            </div>

            {/* Badges */}
            <div className="hidden lg:flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                HEALTHCARE
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                CLINIC
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                DEMO WEBSITE
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsFullDemoMode(!isFullDemoMode);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isFullDemoMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  : 'bg-[#0C5BE2] text-white hover:bg-blue-600 shadow-sm'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isFullDemoMode ? 'Show Overview' : 'LAUNCH DEMO'}</span>
            </button>

            <button
              onClick={() => setRaozsiteLeadModalOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-[#FF6B4A] hover:bg-[#ea5838] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>GET A WEBSITE LIKE THIS</span>
            </button>

            <button
              onClick={() => setShowcaseBarCollapsed(!showcaseBarCollapsed)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title={showcaseBarCollapsed ? 'Expand Details' : 'Collapse Details'}
            >
              {showcaseBarCollapsed ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Overview Drawer */}
        {!showcaseBarCollapsed && !isFullDemoMode && (
          <div className="bg-[#070D18] border-t border-slate-800/80 px-4 py-6 text-slate-300 animate-in fade-in duration-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400">
                  PROJECT SPECIFICATIONS
                </span>
                <h2 className="text-white font-bold text-base mt-1">
                  PROJECT #64 — CLINICBYPeople
                </h2>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-sky-300 text-[10px] font-bold">
                    HEALTHCARE / CLINIC
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    DEMO WEBSITE
                  </span>
                </div>
                <p className="text-slate-400 mt-2 text-xs leading-relaxed">
                  A modern healthcare platform designed to help patients discover specialist care, explore treatments, find healthcare centres, connect with doctors and request consultations.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsFullDemoMode(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#0C5BE2] hover:bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <span>LAUNCH DEMO</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setRaozsiteLeadModalOpen(true)}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs"
                  >
                    GET A WEBSITE LIKE THIS
                  </button>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B4A]">
                  PRIMARY HIGHLIGHTS
                </span>
                <ul className="mt-2 space-y-1.5 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Specialist Discovery:</strong> 8 core surgical &amp; clinical specialities with verified surgeon credentials.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>15-Minute Consultation:</strong> Free OPD booking with city detection &amp; instant care coordinator callback.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>NABH Daycare Centres:</strong> Class 100 modular OTs across Delhi NCR, Mumbai, Bengaluru &amp; Hyderabad.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Cashless Insurance:</strong> Instant policy pre-authorisation checker with 50+ insurance partners.</span>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  CONTACT &amp; CARE HELPLINE
                </span>
                <div className="mt-2 space-y-1 text-slate-300">
                  <p><strong>Brand:</strong> {CLINIC_CONFIG.brandName}</p>
                  <p><strong>Tagline:</strong> {CLINIC_CONFIG.tagline}</p>
                  <p><strong>Care Helpline:</strong> {CLINIC_CONFIG.phone}</p>
                  <p><strong>Email:</strong> {CLINIC_CONFIG.email}</p>
                  <p><strong>Network Coverage:</strong> 12+ Metro &amp; Tier 1 Cities in India</p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
                  <a
                    href={buildClinicWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp ({CLINIC_CONFIG.phone})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* ========================================================================= */}
      {/* 2. CLINICBYPEOPLE INTERACTIVE WEBSITE EXPERIENCE                           */}
      {/* ========================================================================= */}
      <main className="w-full">
        {/* Navigation Bar */}
        <ClinicByPeopleNavbar
          currentCity={currentCity}
          onSelectCity={(city) => setCurrentCity(city)}
          onOpenConsultationModal={handleOpenConsultationModal}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* Hero Section with Quick Consultation Booking Form */}
        <div id="hero">
          <ClinicByPeopleHero
            currentCity={currentCity}
            onSelectCity={(city) => setCurrentCity(city)}
            onExploreSpecialities={() => handleNavigateToSection('specialities')}
            onOpenConsultationModal={handleOpenConsultationModal}
          />
        </div>

        {/* Specialities Grid with Treatment Modals */}
        <div id="specialities">
          <ClinicByPeopleSpecialities
            currentCity={currentCity}
            onOpenConsultationModal={handleOpenConsultationModal}
          />
        </div>

        {/* Patient Experience (Pre, During, Recovery) */}
        <div id="experience">
          <ClinicByPeoplePatientExperience
            onOpenConsultationModal={() => handleOpenConsultationModal('General Surgery', 'Patient Experience Inquiry')}
          />
        </div>

        {/* Hospital & Daycare Surgical Centres Locator */}
        <div id="hospitals">
          <ClinicByPeopleHospitals
            currentCity={currentCity}
            onOpenConsultationModal={handleOpenConsultationModal}
          />
        </div>

        {/* 6-Step Patient Recovery Journey Pipeline */}
        <div id="journey">
          <ClinicByPeoplePatientJourney
            onOpenConsultationModal={() => handleOpenConsultationModal('General Surgery', 'Patient Journey Step')}
          />
        </div>

        {/* Top Specialists & Surgeon Profiles */}
        <div id="doctors">
          <ClinicByPeopleSpecialists
            onOpenConsultationModal={handleOpenConsultationModal}
          />
        </div>

        {/* Specialized Centers of Excellence */}
        <div id="centres">
          <ClinicByPeopleSpecializedCentres
            onOpenConsultationModal={handleOpenConsultationModal}
          />
        </div>

        {/* Trust & Safety Benchmarks */}
        <div id="trust">
          <ClinicByPeopleTrust />
        </div>

        {/* Cashless Insurance Calculator & Partner Showcase */}
        <div id="insurance">
          <ClinicByPeopleInsurance
            onOpenConsultationModal={handleOpenConsultationModal}
          />
        </div>

        {/* Medical Healthfeed Articles */}
        <div id="healthfeed">
          <ClinicByPeopleHealthfeed
            onOpenConsultationModal={handleOpenConsultationModal}
          />
        </div>

        {/* Patient Stories & Verified Feedback */}
        <div id="stories">
          <ClinicByPeoplePatientStories />
        </div>

        {/* About ClinicByPeople Network */}
        <div id="about">
          <ClinicByPeopleAbout
            onOpenConsultationModal={() => handleOpenConsultationModal('General Surgery', 'About Clinic Inquiry')}
          />
        </div>

        {/* Frequently Asked Questions */}
        <div id="faq">
          <ClinicByPeopleFaq
            onOpenConsultationModal={() => handleOpenConsultationModal('General Surgery', 'FAQ Inquiry')}
          />
        </div>

        {/* Mobile App Companion Banner */}
        <div id="app">
          <ClinicByPeopleAppCta />
        </div>

        {/* Complete Footer */}
        <div id="footer">
          <ClinicByPeopleFooter
            onNavigateToSection={handleNavigateToSection}
            onOpenConsultationModal={handleOpenConsultationModal}
            onOpenLegal={(type) => setLegalModalType(type)}
          />
        </div>
      </main>

      {/* ========================================================================= */}
      {/* 3. FLOATING QUICK CTAS (WHATSAPP & EMERGENCY HELPLINE)                    */}
      {/* ========================================================================= */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Mobile quick book consultation floating button */}
        <button
          onClick={() => handleOpenConsultationModal('General Surgery', 'Floating CTA')}
          className="sm:hidden px-4 py-2.5 rounded-full bg-[#0C5BE2] text-white text-xs font-bold shadow-lg hover:bg-blue-600 transition-all flex items-center gap-2 border border-white/20"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Free OPD</span>
        </button>

        {/* WhatsApp Direct Help */}
        <a
          href={buildClinicWhatsAppLink('Hello ClinicByPeople, I would like to consult a doctor.')}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl transition-transform hover:scale-105 flex items-center justify-center border-2 border-white"
          title="Chat with Care Coordinator on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>

      {/* ========================================================================= */}
      {/* 4. MODALS (CONSULTATION, LEGAL, RAOZSITE LEAD MODAL)                      */}
      {/* ========================================================================= */}
      {/* ClinicByPeople Consultation Modal */}
      <ClinicByPeopleConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialSpeciality={modalSpeciality}
        initialCity={currentCity}
        initialNote={modalNote}
      />

      {/* ClinicByPeople Legal Modals */}
      <ClinicByPeopleLegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Raozsite "Get a Website Like This" Modal */}
      {raozsiteLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setRaozsiteLeadModalOpen(false);
                setRaozSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {raozSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Request Received!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you! Our digital healthcare solutions team will contact you within 2 hours to discuss launching your clinic or hospital platform.
                </p>
                <button
                  onClick={() => {
                    setRaozsiteLeadModalOpen(false);
                    setRaozSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleRaozsiteLeadSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B4A]">
                    Raozsite Custom Solution
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Get a Website Like ClinicByPeople
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Project #64 Architecture · Specialist Discovery, Daycare OTs, Cashless Insurance &amp; OPD Booking.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Name / Doctor Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={raozName}
                      onChange={(e) => setRaozName(e.target.value)}
                      placeholder="Dr. Rajesh Mehra"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0C5BE2] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={raozPhone}
                        onChange={(e) => setRaozPhone(e.target.value)}
                        placeholder="+91 98100 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0C5BE2] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Clinic / Hospital City
                      </label>
                      <input
                        type="text"
                        value={raozCity}
                        onChange={(e) => setRaozCity(e.target.value)}
                        placeholder="e.g. Delhi NCR, Mumbai"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0C5BE2] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={raozEmail}
                      onChange={(e) => setRaozEmail(e.target.value)}
                      placeholder="clinic@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0C5BE2] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Requirements &amp; Features Needed
                    </label>
                    <textarea
                      rows={3}
                      value={raozRequirements}
                      onChange={(e) => setRaozRequirements(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0C5BE2] focus:border-transparent resize-none leading-relaxed"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={raozSubmitting}
                    className="w-full py-3 rounded-xl bg-[#0C5BE2] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {raozSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry to Raozsite Team</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Direct integration with Raozsite's client inquiry and project management pipeline.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
