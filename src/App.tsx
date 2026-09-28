import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { TrustBadgesRow } from './components/home/TrustBadgesRow';
import { BeforeAfterSlider } from './components/home/BeforeAfterSlider';
import { DemoShowcase } from './components/home/DemoShowcase';
import { ProcessSection } from './components/home/ProcessSection';
import { BenefitsSection } from './components/home/BenefitsSection';
import { TestimonialCarousel } from './components/home/TestimonialCarousel';
import { PricingSection } from './components/home/PricingSection';
import { FAQSection } from './components/home/FAQSection';
import { ContactModal } from './components/home/ContactModal';
import { DiscountPopup } from './components/common/DiscountPopup';
import { CategoryPickerPopup } from './components/common/CategoryPickerPopup';
import { AdminLayout } from './components/admin/AdminLayout';
import { SiteRenderer } from './components/site/SiteRenderer';
import { RealEstatePropertyExplorer } from './components/site/RealEstatePropertyExplorer';

// Marketing Pages
import { DemoWebsitesPage } from './components/pages/DemoWebsitesPage';
import { PricingPage } from './components/pages/PricingPage';
import { CaseStudiesPage } from './components/pages/CaseStudiesPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { BlogPage } from './components/pages/BlogPage';
import { ReferAndEarnPage } from './components/pages/ReferAndEarnPage';
import { FAQPage } from './components/pages/FAQPage';
import { ContactPage } from './components/pages/ContactPage';
import { CitySeoPage } from './components/home/CitySeoPage';

import { MobileWizard } from './components/wizard/MobileWizard';
import { MobileEditor } from './components/editor/MobileEditor';
import { MobileDashboard } from './components/dashboard/MobileDashboard';

function AppContent() {
  const {
    activeView,
    activeCitySlug,
    setActiveView,
    categoryPickerOpen,
    setCategoryPickerOpen,
    activeEditorSiteId,
    setActiveEditorSiteId
  } = useApp();
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('professional');

  const handleOpenOrder = (pkg: string = 'professional') => {
    setSelectedPackage(pkg);
    setOrderModalOpen(true);
  };

  const handleScrollToDemos = () => {
    const el = document.getElementById('demos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveView('demo-websites');
    }
  };

  // Dedicated Mobile-First Wizard View
  if (activeView === 'wizard') {
    return (
      <MobileWizard
        onCancel={() => setActiveView('home')}
        onComplete={site => {
          setActiveEditorSiteId(site.id);
          setActiveView('dashboard');
        }}
      />
    );
  }

  // Dedicated Mobile-First Editor View
  if (activeView === 'editor') {
    return (
      <MobileEditor
        siteId={activeEditorSiteId}
        onBackToDashboard={() => setActiveView('dashboard')}
      />
    );
  }

  // Dedicated Mobile-First Customer Dashboard View
  if (activeView === 'dashboard') {
    return (
      <MobileDashboard
        onCreateNew={() => setActiveView('wizard')}
        onEditSite={id => {
          setActiveEditorSiteId(id);
          setActiveView('editor');
        }}
        onPreviewSite={site => setActiveView('site', site.slug)}
      />
    );
  }

  // Full Screen Admin Portal Views
  if (activeView === 'admin' || activeView === 'builder') {
    return <AdminLayout />;
  }

  if (activeView === 'site') {
    return <SiteRenderer />;
  }

  const renderPublicShell = (content: React.ReactNode, isHome = false) => (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Inter'] selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onOpenOrderModal={() => handleOpenOrder('professional')} />
      <main className="flex-1">{content}</main>
      <Footer onOpenOrderModal={() => handleOpenOrder('professional')} />
      <ContactModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        defaultPackage={selectedPackage}
      />
      {/* "What's Your Business?" Category-Picker Popup (Requirement 8) */}
      <CategoryPickerPopup
        isOpen={categoryPickerOpen}
        onClose={() => setCategoryPickerOpen(false)}
      />
      {/* 15% Instant Discount Session Popup on homepage (Requirement 5) */}
      {isHome && <DiscountPopup />}
    </div>
  );

  // Real Estate Property Explorer (Standalone / Deep link)
  if (activeView === 'properties') {
    return renderPublicShell(
      <RealEstatePropertyExplorer onBackToSite={() => setActiveView('home')} />
    );
  }

  // Marketing Page Views
  if (activeView === 'demo-websites') {
    return renderPublicShell(
      <DemoWebsitesPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'pricing') {
    return renderPublicShell(
      <PricingPage onOpenOrderModal={(plan) => handleOpenOrder(plan || 'professional')} />
    );
  }

  if (activeView === 'case-studies') {
    return renderPublicShell(
      <CaseStudiesPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'testimonials') {
    return renderPublicShell(
      <TestimonialsPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'blog') {
    return renderPublicShell(
      <BlogPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'refer-and-earn') {
    return renderPublicShell(<ReferAndEarnPage />);
  }

  if (activeView === 'faq') {
    return renderPublicShell(
      <FAQPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'contact') {
    return renderPublicShell(<ContactPage />);
  }

  if (activeView === 'city') {
    return renderPublicShell(
      <CitySeoPage
        citySlug={activeCitySlug}
        onOpenOrderModal={() => handleOpenOrder('professional')}
        onSelectCity={(slug) => setActiveView('city', slug)}
      />
    );
  }

  // Home Page View
  return renderPublicShell(
    <>
      <HeroSection
        onOpenOrderModal={() => handleOpenOrder('professional')}
        onExploreDemos={handleScrollToDemos}
      />
      {/* Dynamic Trust Badges row pulling counts from websites */}
      <TrustBadgesRow />
      {/* Before / After Interactive Visual Slider */}
      <BeforeAfterSlider />
      {/* Demo Showcase with horizontally scrollable category chips */}
      <DemoShowcase />
      <ProcessSection onOpenOrderModal={() => handleOpenOrder('professional')} />
      <BenefitsSection />
      {/* Auto-scrolling swipeable testimonial carousel */}
      <TestimonialCarousel />
      <PricingSection onOpenOrderModal={() => handleOpenOrder('professional')} />
      <FAQSection onOpenOrderModal={() => handleOpenOrder('professional')} />
    </>,
    true
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  );
}
