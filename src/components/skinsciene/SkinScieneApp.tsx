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
  Award,
  Globe,
  Star,
  MapPin,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  SKINSCIENE_CONFIG,
  SKINSCIENE_WEBSITE,
  TREATMENTS_DATA,
  DOCTORS_DATA,
  DoctorProfile,
  TreatmentItem,
} from '../../data/skinScieneData';

// Component imports
import { SkinScieneTopBar } from './SkinScieneTopBar';
import { SkinScieneNavbar } from './SkinScieneNavbar';
import { SkinScieneHero } from './SkinScieneHero';
import { SkinScieneStats } from './SkinScieneStats';
import { SkinScieneConcernQuiz } from './SkinScieneConcernQuiz';
import { SkinScieneTreatments } from './SkinScieneTreatments';
import { SkinScieneWhyUs } from './SkinScieneWhyUs';
import { SkinScieneBeforeAfter } from './SkinScieneBeforeAfter';
import { SkinScieneDoctors } from './SkinScieneDoctors';
import { SkinScieneTechShowcase } from './SkinScieneTechShowcase';
import { SkinScieneClinicLocator } from './SkinScieneClinicLocator';
import { SkinScieneReviews } from './SkinScieneReviews';
import { SkinScieneBlog } from './SkinScieneBlog';
import { SkinScieneFaq } from './SkinScieneFaq';
import { SkinScieneFooter } from './SkinScieneFooter';
import { SkinScieneAppointmentModal } from './SkinScieneAppointmentModal';
import { TreatmentDetailModal, DoctorBioModal } from './SkinScieneDetailModals';

interface SkinScieneAppProps {
  onBackToHub?: () => void;
}

export const SkinScieneApp: React.FC<SkinScieneAppProps> = ({ onBackToHub }) => {
  const { setActiveView, submitWebsiteRequest } = useApp();

  // Selected City state (defaults to Hyderabad)
  const [selectedCity, setSelectedCity] = useState('Hyderabad');

  // Raozsite top showcase bar states
  const [showcaseBarCollapsed, setShowcaseBarCollapsed] = useState(false);
  const [isFullDemoMode, setIsFullDemoMode] = useState(true);

  // Modals
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialTreatment, setBookingInitialTreatment] = useState<string | undefined>(undefined);
  const [bookingInitialBranch, setBookingInitialBranch] = useState<string | undefined>(undefined);
  const [bookingInitialDoctor, setBookingInitialDoctor] = useState<string | undefined>(undefined);

  const [selectedTreatmentModal, setSelectedTreatmentModal] = useState<TreatmentItem | null>(null);
  const [selectedDoctorModal, setSelectedDoctorModal] = useState<DoctorProfile | null>(null);

  // Raozsite "Get a website like this" lead capture modal
  const [raozsiteLeadModalOpen, setRaozsiteLeadModalOpen] = useState(false);
  const [raozName, setRaozName] = useState('');
  const [raozPhone, setRaozPhone] = useState('');
  const [raozEmail, setRaozEmail] = useState('');
  const [raozCity, setRaozCity] = useState('');
  const [raozRequirements, setRaozRequirements] = useState(
    'I want a premium dermatology, hair & aesthetic clinic website like SkinSciene Naturals (Project #66) with treatment catalogs, multi-city clinic locator, doctor profiles, before/after slider, and appointment scheduling.'
  );
  const [raozSubmitting, setRaozSubmitting] = useState(false);
  const [raozSubmitted, setRaozSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (
    treatmentSlug?: string,
    branchName?: string,
    doctorName?: string
  ) => {
    setBookingInitialTreatment(treatmentSlug);
    setBookingInitialBranch(branchName);
    setBookingInitialDoctor(doctorName);
    setBookingModalOpen(true);
  };

  const handleSelectTreatmentSlug = (slug: string) => {
    const found = TREATMENTS_DATA.find((t) => t.slug === slug);
    if (found) {
      setSelectedTreatmentModal(found);
    } else {
      handleNavigateToSection('treatments');
    }
  };

  const handleRaozsiteLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!raozName || !raozPhone) return;

    setRaozSubmitting(true);
    try {
      if (submitWebsiteRequest) {
        await submitWebsiteRequest({
          businessName: 'SkinSciene Naturals (Project #66) Website Build',
          category: 'healthcare',
          ownerName: raozName || 'Prospective Clinic Owner',
          phone: raozPhone,
          city: raozCity || 'Hyderabad',
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
    <div className="min-h-screen bg-white font-['Satoshi',sans-serif] text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
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
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 text-[11px] tracking-wide">
                  PROJECT #66
                </span>
                <span className="font-extrabold text-white tracking-wide uppercase text-xs">
                  SKINSCIENE NATURALS
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">
                  <Shield className="w-3 h-3 text-emerald-400" />
                  Beauty / Dermatology / Skin & Hair Clinic
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
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isFullDemoMode ? 'Show Overview' : 'LAUNCH DEMO'}</span>
              </button>

              <button
                onClick={() => setRaozsiteLeadModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold transition-all shadow-md hover:shadow-emerald-500/20 cursor-pointer text-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get A Website Like This</span>
              </button>

              <button
                onClick={() => setShowcaseBarCollapsed(true)}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                title="Collapse toolbar"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Floating Expand Tab if Toolbar was collapsed */}
      {showcaseBarCollapsed && (
        <button
          onClick={() => setShowcaseBarCollapsed(false)}
          className="fixed top-3 right-4 z-50 bg-slate-900/90 text-emerald-400 hover:text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl border border-slate-700 backdrop-blur-md flex items-center gap-1.5 cursor-pointer"
        >
          <span>Raozsite #66</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. OPTIONAL PROJECT DETAIL OVERVIEW DRAWER */}
      {/* ------------------------------------------------------------- */}
      {!isFullDemoMode && (
        <section className="bg-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30">
                  <span>PROJECT #66</span>
                  <span>•</span>
                  <span>BEAUTY / DERMATOLOGY / SKIN & HAIR CLINIC</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-white">
                  SKINSCIENE NATURALS
                </h1>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  A complete, high-fidelity reference reproduction of India’s leading aesthetic and dermatology clinic network. Features 10-city clinic locator, 120+ MD dermatologists, before/after slider, and multi-step appointment scheduler.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsFullDemoMode(true)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Live Interactive Demo</span>
                </button>
                <button
                  onClick={() => setRaozsiteLeadModalOpen(true)}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 cursor-pointer"
                >
                  Inquire About This Template
                </button>
              </div>
            </div>

            {/* Technical Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2">
                <span className="font-bold text-emerald-400 uppercase tracking-wider block">
                  Original Branding
                </span>
                <p className="text-slate-300">
                  All reference proprietary brand marks, corporate claims, and numbers completely sanitized and replaced with original SkinSciene Naturals clinic identity.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2">
                <span className="font-bold text-teal-400 uppercase tracking-wider block">
                  Clinical Architecture
                </span>
                <p className="text-slate-300">
                  Comprehensive treatment encyclopedia across Skin, Hair, and Body, 5-Step medical protocol, US-FDA technology directory, and interactive before/after sliders.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider block">
                  Multi-City Locator
                </span>
                <p className="text-slate-300">
                  36+ clinics across Hyderabad, Bengaluru, Chennai, Kolkata, Pune, Ahmedabad, Kochi, Vizag, Vijayawada, and Ludhiana with direct booking and location maps.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 3. MAIN SKINSCIENE NATURALS WEBSITE APPLICATION */}
      {/* ------------------------------------------------------------- */}
      <main>
        {/* Top Info Bar */}
        <SkinScieneTopBar
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Sticky Clinic Navbar with Mega Menus */}
        <SkinScieneNavbar
          onNavigateToSection={handleNavigateToSection}
          onOpenBooking={() => handleOpenBooking()}
          onSelectTreatment={handleSelectTreatmentSlug}
          selectedCity={selectedCity}
        />

        {/* Hero Section with Dynamic Banners & Quick Consult Card */}
        <SkinScieneHero
          onOpenBooking={handleOpenBooking}
          selectedCity={selectedCity}
          onSelectTreatment={handleSelectTreatmentSlug}
        />

        {/* Trust Metrics Bar */}
        <SkinScieneStats />

        {/* Interactive "Identify Your Concern" Quiz */}
        <SkinScieneConcernQuiz
          onOpenBooking={handleOpenBooking}
          onSelectTreatment={handleSelectTreatmentSlug}
        />

        {/* Featured Clinical Treatments Catalog (Skin, Hair, Body) */}
        <SkinScieneTreatments
          onOpenBooking={handleOpenBooking}
          onSelectTreatment={handleSelectTreatmentSlug}
        />

        {/* Why Us: 5-Step Dermatologist Consultation Protocol */}
        <SkinScieneWhyUs
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Interactive Before & After Results Comparison Slider */}
        <SkinScieneBeforeAfter
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Meet 120+ MD Dermatologists & Trichologists */}
        <SkinScieneDoctors
          onOpenBooking={(docName) => handleOpenBooking(undefined, undefined, docName)}
          onSelectDoctor={(doc) => setSelectedDoctorModal(doc)}
        />

        {/* US-FDA Approved Equipment Showcase */}
        <SkinScieneTechShowcase />

        {/* Interactive 36+ Clinic Locator in 10 Cities */}
        <SkinScieneClinicLocator
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          onOpenBooking={(slug, branch) => handleOpenBooking(slug, branch)}
        />

        {/* Patient Reviews & Video Testimonials */}
        <SkinScieneReviews />

        {/* Dermatologist Knowledge Hub / Blog Articles */}
        <SkinScieneBlog />

        {/* Frequently Asked Questions */}
        <SkinScieneFaq />

        {/* Clinic Mega Footer */}
        <SkinScieneFooter
          onNavigateToSection={handleNavigateToSection}
          onOpenBooking={() => handleOpenBooking()}
          onSelectTreatment={handleSelectTreatmentSlug}
        />
      </main>

      {/* ------------------------------------------------------------- */}
      {/* 4. MODALS & POPUPS */}
      {/* ------------------------------------------------------------- */}

      {/* Appointment Booking Modal */}
      <SkinScieneAppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialTreatmentSlug={bookingInitialTreatment}
        initialBranchName={bookingInitialBranch}
        initialDoctorName={bookingInitialDoctor}
        selectedCity={selectedCity}
      />

      {/* Treatment Detail Guide Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatmentModal}
        onClose={() => setSelectedTreatmentModal(null)}
        onOpenBooking={(slug) => handleOpenBooking(slug)}
      />

      {/* Doctor Bio Modal */}
      <DoctorBioModal
        doctor={selectedDoctorModal}
        onClose={() => setSelectedDoctorModal(null)}
        onOpenBooking={(docName) => handleOpenBooking(undefined, undefined, docName)}
      />

      {/* Raozsite Lead Generation Modal */}
      {raozsiteLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Raozsite Project #66 Inquiry
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  Get A Clinic Website Like This
                </h3>
              </div>
              <button
                onClick={resetRaozModal}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {raozSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, {raozName}. The Raozsite team has recorded your request for a clinic/dermatology website. We will contact you at {raozPhone}.
                </p>
                <button
                  onClick={resetRaozModal}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleRaozsiteLeadSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Ramesh Gupta"
                    value={raozName}
                    onChange={(e) => setRaozName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={raozPhone}
                      onChange={(e) => setRaozPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Clinic City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bengaluru"
                      value={raozCity}
                      onChange={(e) => setRaozCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="doctor@clinic.com"
                    value={raozEmail}
                    onChange={(e) => setRaozEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Your Requirements & Customizations
                  </label>
                  <textarea
                    rows={3}
                    value={raozRequirements}
                    onChange={(e) => setRaozRequirements(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={raozSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{raozSubmitting ? 'Sending Request...' : 'Submit Website Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
