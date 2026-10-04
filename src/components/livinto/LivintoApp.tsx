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
  Heart,
  Award,
  Globe,
  Star,
  MapPin,
  Hammer,
  Clock,
  Calculator,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  LIVINTO_CONFIG,
  LIVINTO_WEBSITE,
  PRODUCT_CATEGORIES_DATA,
  SHOWROOMS_DATA,
  PACKAGE_OFFERS_DATA,
} from '../../data/livintoInteriorsData';

// Component imports
import { LivintoTopBar } from './LivintoTopBar';
import { LivintoNavbar } from './LivintoNavbar';
import { LivintoHero } from './LivintoHero';
import { LivintoStatsBar } from './LivintoStatsBar';
import { LivintoPackageOffers } from './LivintoPackageOffers';
import { LivintoIntroSection } from './LivintoIntroSection';
import { LivintoWhatWeDo } from './LivintoWhatWeDo';
import { LivintoProcessTimeline } from './LivintoProcessTimeline';
import { LivintoCostEstimator } from './LivintoCostEstimator';
import { LivintoGallerySection } from './LivintoGallerySection';
import { LivintoFactorySection } from './LivintoFactorySection';
import { LivintoTestimonialsSection } from './LivintoTestimonialsSection';
import { LivintoLocationsSection } from './LivintoLocationsSection';
import { LivintoBlogSection } from './LivintoBlogSection';
import { LivintoFaqSection } from './LivintoFaqSection';
import { LivintoFooter } from './LivintoFooter';
import { LivintoConsultationModal } from './LivintoConsultationModal';
import { LivintoProductDetailModal } from './LivintoProductDetailModal';
import { LivintoSubPageModal } from './LivintoSubPageModal';

interface LivintoAppProps {
  onBackToHub?: () => void;
}

export const LivintoApp: React.FC<LivintoAppProps> = ({ onBackToHub }) => {
  const { setActiveView, submitWebsiteRequest } = useApp();

  // Selected City state (defaults to Bengaluru)
  const [selectedCity, setSelectedCity] = useState('Bengaluru');

  // Raozsite top showcase bar states
  const [showcaseBarCollapsed, setShowcaseBarCollapsed] = useState(false);
  const [isFullDemoMode, setIsFullDemoMode] = useState(true);

  // Modals state
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<string | undefined>(undefined);
  const [activeProductSlug, setActiveProductSlug] = useState<string | null>(null);
  const [activeSubPageType, setActiveSubPageType] = useState<string | null>(null);

  // Raozsite "Get a website like this" lead capture modal
  const [raozsiteLeadModalOpen, setRaozsiteLeadModalOpen] = useState(false);
  const [raozName, setRaozName] = useState('');
  const [raozPhone, setRaozPhone] = useState('');
  const [raozEmail, setRaozEmail] = useState('');
  const [raozCity, setRaozCity] = useState('');
  const [raozSubmitted, setRaozSubmitted] = useState(false);

  // Quick navigation helper
  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (packName?: string) => {
    setSelectedPackageForModal(packName);
    setConsultationModalOpen(true);
  };

  const handleOpenEstimate = () => {
    handleNavigateToSection('estimator');
  };

  const handleOpenProduct = (slug: string) => {
    setActiveProductSlug(slug);
  };

  const handleOpenSubPage = (pageType: string) => {
    setActiveSubPageType(pageType);
  };

  const handleRaozLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!raozPhone) return;
    submitWebsiteRequest({
      businessName: `${raozName || 'Client'}'s Interior Project`,
      ownerName: raozName,
      phone: raozPhone,
      category: 'interior_design',
      city: raozCity,
      notes: `Email: ${raozEmail} | Source: Project #67 - Livinto Home Interiors`,
    });
    setRaozSubmitted(true);
    setTimeout(() => {
      setRaozsiteLeadModalOpen(false);
      setRaozSubmitted(false);
    }, 2500);
  };

  const handleBack = () => {
    if (onBackToHub) {
      onBackToHub();
    } else {
      setActiveView('demo-websites');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#814882] selection:text-white">
      {/* 1. RAOZSITE PORTFOLIO TOP SHOWCASE BAR */}
      <aside
        aria-label="Portfolio Project Navigation"
        className="sticky top-0 z-50 bg-[#160e17] text-white border-b border-purple-900/40 shadow-xl transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between py-2 sm:py-2.5 gap-2 text-xs">
            {/* Left: Back button & Project badge */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer group"
                title="Return to Raozsite Portfolio Directory"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">Back to Raozsite Portfolio</span>
                <span className="sm:hidden">Portfolio</span>
              </button>

              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 font-mono">
                  #67
                </span>
                <span className="font-serif font-bold text-sm tracking-wide text-white hidden md:inline">
                  LIVINTO HOME INTERIORS
                </span>
                <span className="text-[11px] text-purple-200 hidden lg:inline">
                  • Premium Home Interior Design &amp; Modular Execution
                </span>
              </div>
            </div>

            {/* Right: Quick actions & "Get a Website Like This" */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setRaozsiteLeadModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Build Website Like This</span>
                <span className="sm:hidden">Get Website</span>
              </button>

              <button
                onClick={() => setShowcaseBarCollapsed(!showcaseBarCollapsed)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title={showcaseBarCollapsed ? 'Expand project specs' : 'Collapse project specs'}
              >
                {showcaseBarCollapsed ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronUp className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Expandable Project Specs Drawer */}
          {!showcaseBarCollapsed && (
            <div className="py-2.5 border-t border-purple-900/40 text-[11px] text-slate-300 flex flex-wrap items-center justify-between gap-3 animate-in fade-in duration-200">
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>Category: <strong className="text-white">Home Interior &amp; Modular Living</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-purple-300" />
                  <span>Architecture: <strong className="text-white">29 Showrooms • 350k Sq Ft Factory</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Guarantees: <strong className="text-white">40-Day Delivery • 10-Yr Warranty</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavigateToSection('estimator')}
                  className="px-2 py-0.5 rounded bg-purple-900/60 hover:bg-purple-900 text-amber-300 hover:text-amber-200 cursor-pointer font-medium"
                >
                  Cost Calculator
                </button>
                <button
                  onClick={() => handleNavigateToSection('gallery')}
                  className="px-2 py-0.5 rounded bg-purple-900/60 hover:bg-purple-900 text-slate-200 hover:text-white cursor-pointer font-medium"
                >
                  Handover Gallery
                </button>
                <button
                  onClick={() => handleNavigateToSection('locations')}
                  className="px-2 py-0.5 rounded bg-purple-900/60 hover:bg-purple-900 text-slate-200 hover:text-white cursor-pointer font-medium"
                >
                  Showrooms
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* 2. LIVINTO CLINIC TOP BAR */}
      <LivintoTopBar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenEstimate={handleOpenEstimate}
        onSelectCity={(city) => setSelectedCity(city)}
      />

      {/* 3. LIVINTO NAVBAR */}
      <LivintoNavbar
        onNavigateToSection={handleNavigateToSection}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenProduct={handleOpenProduct}
        onOpenSubPage={handleOpenSubPage}
      />

      {/* 4. HERO SECTION */}
      <LivintoHero
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenEstimate={handleOpenEstimate}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* 5. STATS BAR */}
      <LivintoStatsBar />

      {/* 6. PACKAGE OFFERS */}
      <LivintoPackageOffers
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenEstimate={(packageSlug) => {
          handleOpenConsultation(packageSlug);
        }}
      />

      {/* 7. ABOUT INTRO SECTION */}
      <LivintoIntroSection
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 8. WHAT WE DO (6 CORE LIVING CATEGORIES) */}
      <LivintoWhatWeDo
        onOpenProduct={handleOpenProduct}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 9. 40-DAY COMPLETION PROCESS TIMELINE */}
      <LivintoProcessTimeline
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 10. INTERACTIVE BHK COST ESTIMATOR / CALCULATOR */}
      <LivintoCostEstimator
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 11. RECENT PROJECTS & FILTERABLE GALLERY */}
      <LivintoGallerySection
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 12. 350,000 SQ FT GERMAN AUTOMATED FACTORY SECTION */}
      <LivintoFactorySection
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 13. CLIENT TESTIMONIALS & VIDEO STORIES */}
      <LivintoTestimonialsSection
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 14. 29 DIRECT COMPANY SHOWROOMS ACROSS 15+ CITIES */}
      <LivintoLocationsSection
        onOpenConsultation={() => handleOpenConsultation()}
        selectedCity={selectedCity}
      />

      {/* 15. INTERIOR DESIGN KNOWLEDGE HUB & GUIDES */}
      <LivintoBlogSection
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 16. FREQUENTLY ASKED QUESTIONS */}
      <LivintoFaqSection />

      {/* 17. COMPREHENSIVE MULTI-COLUMN FOOTER */}
      <LivintoFooter
        onNavigateToSection={handleNavigateToSection}
        onOpenProduct={handleOpenProduct}
        onOpenSubPage={handleOpenSubPage}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* FLOATING ACTION CTAS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${LIVINTO_CONFIG.whatsapp.replace('+', '')}?text=Hi%20Livinto%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20home%20interiors`}
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
          title="Chat with Senior Architect on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </a>

        <button
          onClick={() => handleOpenConsultation()}
          className="px-4 py-3 rounded-full bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 hover:scale-105 transition-all cursor-pointer border border-white/20"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="hidden sm:inline">Book Free 3D Design</span>
          <span className="sm:hidden">Consult</span>
        </button>
      </div>

      {/* CONSULTATION BOOKING MODAL */}
      <LivintoConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedCity={selectedCity}
        preselectedPackage={selectedPackageForModal}
      />

      {/* PRODUCT DEEP-DIVE MODAL */}
      <LivintoProductDetailModal
        productSlug={activeProductSlug}
        onClose={() => setActiveProductSlug(null)}
        onOpenConsultation={() => {
          setActiveProductSlug(null);
          handleOpenConsultation();
        }}
      />

      {/* SUB-PAGES MODAL (Company, Customized Interiors, Design & Build) */}
      <LivintoSubPageModal
        pageType={activeSubPageType}
        onClose={() => setActiveSubPageType(null)}
        onOpenConsultation={() => {
          setActiveSubPageType(null);
          handleOpenConsultation();
        }}
        onOpenProduct={(slug) => {
          setActiveSubPageType(null);
          setActiveProductSlug(slug);
        }}
      />

      {/* RAOZSITE LEAD CAPTURE MODAL */}
      {raozsiteLeadModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setRaozsiteLeadModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-[11px] uppercase tracking-wider">
                Raozsite Custom Website Delivery
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                Want a website like Livinto Home Interiors?
              </h3>
              <p className="text-xs text-slate-500">
                Get a high-converting interior design &amp; modular studio website with project gallery, interactive cost calculator, and showroom locator.
              </p>
            </div>

            {!raozSubmitted ? (
              <form onSubmit={handleRaozLeadSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={raozName}
                  onChange={(e) => setRaozName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Mobile Number *"
                  value={raozPhone}
                  onChange={(e) => setRaozPhone(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={raozEmail}
                  onChange={(e) => setRaozEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                />
                <input
                  type="text"
                  placeholder="Your City"
                  value={raozCity}
                  onChange={(e) => setRaozCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#814882] to-[#5a2e5b] hover:from-[#6e3a6f] hover:to-[#4e274f] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Custom Demo &amp; Quote</span>
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-lg text-slate-900">Request Received!</h4>
                <p className="text-xs text-slate-600">
                  Our website consultant will contact you on WhatsApp with portfolio samples and commercial options.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
