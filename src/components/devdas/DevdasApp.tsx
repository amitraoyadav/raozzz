import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Phone,
  MessageSquare,
  Building,
  Heart,
  Calendar,
  Layers,
  Award,
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { DevdasTopBar } from './DevdasTopBar';
import { DevdasNavbar } from './DevdasNavbar';
import { DevdasHero } from './DevdasHero';
import { DevdasIntro } from './DevdasIntro';
import { DevdasDestinations } from './DevdasDestinations';
import { DevdasServices } from './DevdasServices';
import { DevdasBudgetCalculator } from './DevdasBudgetCalculator';
import { DevdasPackages } from './DevdasPackages';
import { DevdasRealWeddings } from './DevdasRealWeddings';
import { DevdasTestimonialsSection } from './DevdasTestimonialsSection';
import { DevdasBlogSection } from './DevdasBlogSection';
import { DevdasFaqSection } from './DevdasFaqSection';
import { DevdasFooter } from './DevdasFooter';

// Modals
import { DevdasDestinationModal } from './DevdasDestinationModal';
import { DevdasServiceModal } from './DevdasServiceModal';
import { DevdasInquiryModal } from './DevdasInquiryModal';
import { DevdasBlogModal } from './DevdasBlogModal';
import { DevdasSubPageModal } from './DevdasSubPageModal';

import { DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasAppProps {
  onBackToHub?: () => void;
}

export const DevdasApp: React.FC<DevdasAppProps> = ({ onBackToHub }) => {
  // Modal states
  const [selectedDestinationSlug, setSelectedDestinationSlug] = useState<string | null>(null);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null);
  const [selectedSubPage, setSelectedSubPage] = useState<string | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialDest, setInquiryInitialDest] = useState<string | undefined>();
  const [inquiryInitialPkg, setInquiryInitialPkg] = useState<string | undefined>();

  // Smooth scroll handler
  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (destOrPkg?: string) => {
    setInquiryInitialDest(destOrPkg);
    setInquiryInitialPkg(destOrPkg);
    setInquiryModalOpen(true);
  };

  const handleOpenCalculator = () => {
    handleNavigateToSection('calculator');
  };

  useEffect(() => {
    // Set document title & SEO
    document.title = 'Devdas Wedding | Luxury Destination Wedding Planners India';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#7A1C30] selection:text-white">
      {/* 1. Raozsite Portfolio Top Showcase Header Toolbar */}
      <div className="bg-[#14080B] text-slate-200 border-b border-amber-900/30 sticky top-0 z-50 px-4 py-2 flex items-center justify-between text-xs backdrop-blur-md bg-opacity-95">
        <div className="flex items-center gap-3">
          {onBackToHub && (
            <button
              onClick={onBackToHub}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Raozsite Portfolio</span>
            </button>
          )}
          <span className="hidden sm:inline-block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold text-[10px] tracking-wider uppercase">
              Project #68
            </span>
            <span className="font-serif font-bold text-amber-200 hidden md:inline">
              DEVDAS WEDDING · Luxury Destination Wedding Planners
            </span>
          </div>
        </div>

        {/* Global Reference Switcher */}
        <div className="flex items-center gap-2">
          <ReferenceSiteSwitcher currentSiteId="devdas-wedding" />
        </div>
      </div>

      {/* 2. Devdas Top Bar Strip */}
      <DevdasTopBar
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* 3. Main Sticky Navbar */}
      <DevdasNavbar
        onNavigateToSection={handleNavigateToSection}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenDestination={(slug) => setSelectedDestinationSlug(slug)}
        onOpenService={(slug) => setSelectedServiceSlug(slug)}
        onOpenSubPage={(sub) => setSelectedSubPage(sub)}
      />

      {/* 4. Grand Hero Slide Carousel */}
      <DevdasHero
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenCalculator={handleOpenCalculator}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* 5. Brand Narrative & Values (Why Devdas) */}
      <DevdasIntro
        onOpenInquiry={() => handleOpenInquiry()}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* 6. Top Wedding Destinations Showcase */}
      <DevdasDestinations
        onOpenDestination={(slug) => setSelectedDestinationSlug(slug)}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* 7. Turnkey Wedding Planning Services */}
      <DevdasServices
        onOpenService={(slug) => setSelectedServiceSlug(slug)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* 8. Interactive Destination Wedding Cost Estimator */}
      <DevdasBudgetCalculator
        onOpenInquiry={() => handleOpenInquiry('Cost Estimator Follow-up')}
      />

      {/* 9. Planning Packages & Transparent Fees */}
      <DevdasPackages
        onOpenInquiry={(pkgName) => handleOpenInquiry(pkgName)}
      />

      {/* 10. Real Weddings Gallery Lightbox */}
      <DevdasRealWeddings
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* 11. Couple Testimonials & Reviews */}
      <DevdasTestimonialsSection
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* 12. Editorial Wedding Guides & Blog Hub */}
      <DevdasBlogSection
        onOpenBlog={(slug) => setSelectedBlogSlug(slug)}
      />

      {/* 13. Frequently Asked Questions Accordion */}
      <DevdasFaqSection
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* 14. Multi-Column Regional Footer */}
      <DevdasFooter
        onNavigateToSection={handleNavigateToSection}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenDestination={(slug) => setSelectedDestinationSlug(slug)}
        onOpenCalculator={handleOpenCalculator}
        onOpenSubPage={(sub) => setSelectedSubPage(sub)}
      />

      {/* Modals & Overlays */}
      <DevdasDestinationModal
        slug={selectedDestinationSlug}
        onClose={() => setSelectedDestinationSlug(null)}
        onOpenInquiry={(dest) => handleOpenInquiry(dest)}
        onOpenCalculator={handleOpenCalculator}
      />

      <DevdasServiceModal
        slug={selectedServiceSlug}
        onClose={() => setSelectedServiceSlug(null)}
        onOpenInquiry={(srv) => handleOpenInquiry(srv)}
      />

      <DevdasBlogModal
        slug={selectedBlogSlug}
        onClose={() => setSelectedBlogSlug(null)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <DevdasSubPageModal
        pageType={selectedSubPage}
        onClose={() => setSelectedSubPage(null)}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenCalculator={handleOpenCalculator}
      />

      <DevdasInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialDestination={inquiryInitialDest}
        initialPackage={inquiryInitialPkg}
      />
    </div>
  );
};
