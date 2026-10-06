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
import { SweetCoffeeApp } from './components/sweetcoffee/SweetCoffeeApp';
import { BrewBloomApp } from './components/brewbloom/BrewBloomApp';
import { TimWendelboeApp } from './components/timwendelboe/TimWendelboeApp';
import { OnyxApp } from './components/onyx/OnyxApp';
import { CityBrewApp } from './components/citybrew/CityBrewApp';
import { GregorysApp } from './components/gregorys/GregorysApp';
import { VeenaWorldApp } from './components/veenaworld/VeenaWorldApp';
import { EnrichBeautyApp } from './components/enrich/EnrichBeautyApp';
import { BodycraftApp } from './components/bodycraft/BodycraftApp';
import { HomeSalonApp } from './components/homesalon/HomeSalonApp';
import { DessangeMumbaiApp } from './components/dessange/DessangeMumbaiApp';
import { TanishqApp } from './components/tanishq/TanishqApp';
import { JewelboxApp } from './components/jewelbox/JewelboxApp';
import { BeautyBerryApp } from './components/beautyberry/BeautyBerryApp';
import { GoldsGymApp } from './components/goldsgym/GoldsGymApp';
import { FitpassApp } from './components/fitpass/FitpassApp';
import { KrishnaJewellersApp } from './components/krishnajewellers/KrishnaJewellersApp';
import { HazoorilalApp } from './components/hazoorilal/HazoorilalApp';
import { SabkaLoansApp } from './components/sabkaloans/SabkaLoansApp';
import { SabkaFinanceApp } from './components/sabkafinance/SabkaFinanceApp';
import { SquareYardDealersApp } from './components/squareyarddealers/SquareYardDealersApp';
import { ChoudharyRealestateApp } from './components/choudharyrealestate/ChoudharyRealestateApp';
import { DLCGroupApp } from './components/dlcgroup/DLCGroupApp';
import { RaozPropertiesApp } from './components/raozproperties/RaozPropertiesApp';
import { RaozBazaarApp } from './components/raozbazaar/RaozBazaarApp';
import { RaozWeddingsApp } from './components/raozweddings/RaozWeddingsApp';
import { SMLWWeddingsApp } from './components/smlwweddings/SMLWWeddingsApp';
import { RathoreWeddingsApp } from './components/rathoreweddings/RathoreWeddingsApp';
import { AllInOneDestinationWeddingsApp } from './components/destinationweddings/AllInOneDestinationWeddingsApp';
import { LuxeSpaceApp } from './components/luxespace/LuxeSpaceApp';
import { SaveWeb2ZipApp } from './components/saveweb2zip/SaveWeb2ZipApp';
import { LawLinksApp } from './components/lawlinks/LawLinksApp';
import { MaheshwariApp } from './components/maheshwari/MaheshwariApp';
import { RaozMotorsApp } from './components/raozmotors/RaozMotorsApp';
import { GroupAchApp } from './components/groupach/GroupAchApp';
import { ClinicByPeopleApp } from './components/clinicbypeople/ClinicByPeopleApp';
import { MedicarePlusApp } from './components/medicareplus/MedicarePlusApp';
import { SkinScieneApp } from './components/skinsciene/SkinScieneApp';
import { LivintoApp } from './components/livinto/LivintoApp';
import { DevdasApp } from './components/devdas/DevdasApp';
import { PsrVentureWeddingsApp } from './components/psrventureweddings/PsrVentureWeddingsApp';
import { UtsavLuxeApp } from './components/utsavluxe/UtsavLuxeApp';
import { RaozyWeddingPlannerApp } from './components/raozyweddingplanner/RaozyWeddingPlannerApp';
import { GlobalPlannerssApp } from './components/globalplannerss/GlobalPlannerssApp';
import { RaozWeddingHubApp } from './components/raozweddinghub/RaozWeddingHubApp';
import { Site74App } from './components/site74/Site74App';
import { Site75App } from './components/site75/Site75App';
import { Site76App } from './components/site76/Site76App';
import { Site77App } from './components/site77/Site77App';
import { Site78App } from './components/site78/Site78App';
import { Site79App } from './components/site79/Site79App';
import { Site80App } from './components/site80/Site80App';
import { Site81App } from './components/site81/Site81App';
import { Site82App } from './components/site82/Site82App';

function AppContent() {
  const {
    activeView,
    activeCitySlug,
    activeSiteSlug,
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
    if (activeSiteSlug === '82-wealth-clinic' || activeSiteSlug === 'wealth-clinic' || activeSiteSlug === 'wealthclinic' || activeSiteSlug === 'wealthnexus' || activeSiteSlug === 'wealth-nexus' || activeSiteSlug === 'site-82-wealth-clinic' || activeSiteSlug === 'site-82') {
      return <Site82App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '81-luxury-real-estate' || activeSiteSlug === 'luxury-real-estate' || activeSiteSlug === '81-real-estate' || activeSiteSlug === 'jamesedition' || activeSiteSlug === 'valtierra' || activeSiteSlug === 'site-81-luxury-real-estate' || activeSiteSlug === 'site-81') {
      return <Site81App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '80-club-bw' || activeSiteSlug === 'club-bw' || activeSiteSlug === 'clubbw' || activeSiteSlug === '80-club' || activeSiteSlug === 'clubnoirblanc' || activeSiteSlug === 'site-80-club-bw' || activeSiteSlug === 'site-80') {
      return <Site80App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '79-elysium-club' || activeSiteSlug === 'elysium-club' || activeSiteSlug === '79-elysium' || activeSiteSlug === 'elysium' || activeSiteSlug === 'privee' || activeSiteSlug === 'privee-delhi' || activeSiteSlug === 'site-79-elysium-club' || activeSiteSlug === 'site-79') {
      return <Site79App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '78-aurelia-resort' || activeSiteSlug === 'aurelia-resort' || activeSiteSlug === '78-aurelia' || activeSiteSlug === 'aurelia' || activeSiteSlug === 'anemos' || activeSiteSlug === 'anemos-goa' || activeSiteSlug === 'anemosgoa' || activeSiteSlug === 'site-78-aurelia-resort') {
      return <Site78App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '77-nocturna-club' || activeSiteSlug === 'nocturna-club' || activeSiteSlug === '77-nocturna' || activeSiteSlug === 'nocturna' || activeSiteSlug === 'hammerzz') {
      return <Site77App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '76-aranya-earth' || activeSiteSlug === 'aranya-earth' || activeSiteSlug === '76-aranya' || activeSiteSlug === 'aranya' || activeSiteSlug === 'craftedknots') {
      return <Site76App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '75-aura-luxe' || activeSiteSlug === 'aura-luxe' || activeSiteSlug === '75-aura' || activeSiteSlug === 'aura' || activeSiteSlug === 'bonevento') {
      return <Site75App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '74-grandeur-weddings' || activeSiteSlug === 'grandeur-weddings' || activeSiteSlug === '74-grandeur' || activeSiteSlug === 'grandeur' || activeSiteSlug === 'marriottindiaweddings') {
      return <Site74App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '73-raoz-wedding-hub' || activeSiteSlug === 'raoz-wedding-hub' || activeSiteSlug === '73-raoz' || activeSiteSlug === 'raoz-hub' || activeSiteSlug === 'vowsafar') {
      return <RaozWeddingHubApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '72-global-plannerss' || activeSiteSlug === 'global-plannerss' || activeSiteSlug === '72-global' || activeSiteSlug === 'global-planners') {
      return <GlobalPlannerssApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '71-raozy-wedding-planner' || activeSiteSlug === 'raozy-wedding-planner' || activeSiteSlug === '71-raozy' || activeSiteSlug === 'raozy') {
      return <RaozyWeddingPlannerApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '70-psr-venture-weddings' || activeSiteSlug === 'psr-venture-weddings' || activeSiteSlug === '70-psr' || activeSiteSlug === 'psr' || activeSiteSlug === 'psr-weddings') {
      return <PsrVentureWeddingsApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '68-devdas-wedding' || activeSiteSlug === 'devdas-wedding' || activeSiteSlug === '68-devdas' || activeSiteSlug === 'devdas') {
      return <DevdasApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '67-livinto-interiors' || activeSiteSlug === 'livinto-interiors' || activeSiteSlug === '67-livinto' || activeSiteSlug === 'livinto') {
      return <LivintoApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '66-skinsciene-naturals' || activeSiteSlug === 'skinsciene-naturals' || activeSiteSlug === 'skinsciene') {
      return <SkinScieneApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '65-medicareplus-hospital' || activeSiteSlug === 'medicareplus' || activeSiteSlug === 'medicareplus-hospital') {
      return <MedicarePlusApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '64-clinicbypeople' || activeSiteSlug === 'clinicbypeople') {
      return <ClinicByPeopleApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === 'group-ach' || activeSiteSlug === 'group-ach-loan-solutions') {
      return <GroupAchApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    return <SiteRenderer />;
  }

  if (activeView === 'sweet-coffee') {
    return <SweetCoffeeApp />;
  }

  if (activeView === 'brew-bloom') {
    return <BrewBloomApp />;
  }

  if (activeView === 'tim-wendelboe') {
    return <TimWendelboeApp />;
  }

  if (activeView === 'onyx') {
    return <OnyxApp />;
  }

  if (activeView === 'city-brew') {
    return <CityBrewApp />;
  }

  if (activeView === 'gregorys') {
    return <GregorysApp />;
  }

  if (activeView === 'veena-world') {
    return <VeenaWorldApp />;
  }

  if (activeView === 'enrich') {
    return <EnrichBeautyApp />;
  }

  if (activeView === 'bodycraft') {
    return <BodycraftApp />;
  }

  if (activeView === 'home-salon') {
    return <HomeSalonApp />;
  }

  if (activeView === 'dessange-mumbai') {
    return <DessangeMumbaiApp />;
  }

  if (activeView === 'tanishq') {
    return <TanishqApp />;
  }

  if (activeView === 'jewelbox') {
    return <JewelboxApp />;
  }

  if (activeView === 'beauty-berry') {
    return <BeautyBerryApp />;
  }

  if (activeView === 'golds-gym') {
    return <GoldsGymApp />;
  }

  if (activeView === 'fitpass') {
    return <FitpassApp />;
  }

  if (activeView === 'krishna-jewellers') {
    return <KrishnaJewellersApp />;
  }

  if (activeView === 'hazoorilal-jewellers') {
    return <HazoorilalApp />;
  }

  if (activeView === 'sabka-loans') {
    return <SabkaLoansApp />;
  }

  if (activeView === 'sabka-finance') {
    return <SabkaFinanceApp />;
  }

  if (activeView === 'square-yard-dealers') {
    return <SquareYardDealersApp />;
  }

  if (activeView === 'choudhary-realestate') {
    return <ChoudharyRealestateApp />;
  }

  if (activeView === 'dlc-group') {
    return <DLCGroupApp />;
  }

  if (activeView === 'raoz-properties') {
    return <RaozPropertiesApp />;
  }

  if (activeView === 'raoz-bazaar') {
    return <RaozBazaarApp />;
  }

  if (activeView === 'raoz-weddings') {
    return <RaozWeddingsApp />;
  }

  if (activeView === 'smlwindia') {
    return <SMLWWeddingsApp />;
  }

  if (activeView === 'rathore-weddings') {
    return <RathoreWeddingsApp />;
  }

  if (activeView === 'all-in-one-destination-weddings') {
    return <AllInOneDestinationWeddingsApp />;
  }

  if (activeView === 'luxespace-htx') {
    return <LuxeSpaceApp />;
  }

  if (activeView === 'saveweb2zip') {
    return <SaveWeb2ZipApp />;
  }

  if (activeView === 'lawlinks') {
    return <LawLinksApp />;
  }

  if (activeView === 'maheshwari') {
    return <MaheshwariApp onBackToHub={() => setActiveView('home')} />;
  }

  if (activeView === 'group-ach') {
    return <GroupAchApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'clinicbypeople') {
    return <ClinicByPeopleApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-82-wealth-clinic' || activeView === '82-wealth-clinic' || activeView === 'wealth-clinic' || activeView === 'wealthnexus' || activeView === 'wealth-nexus') {
    return <Site82App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-81-luxury-real-estate' || activeView === '81-luxury-real-estate' || activeView === 'valtierra' || activeView === 'jamesedition') {
    return <Site81App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-80-club-bw' || activeView === '80-club-bw' || activeView === 'club-bw' || activeView === 'clubbw') {
    return <Site80App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-79-elysium-club' || activeView === '79-elysium-club') {
    return <Site79App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-78-aurelia-resort' || activeView === '78-aurelia-resort') {
    return <Site78App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-77-nocturna-club' || activeView === '77-nocturna-club') {
    return <Site77App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-76-aranya-earth' || activeView === '76-aranya-earth') {
    return <Site76App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-75-aura-luxe' || activeView === '75-aura-luxe') {
    return <Site75App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'grandeur-weddings' || activeView === '74-grandeur-weddings') {
    return <Site74App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'raoz-wedding-hub' || activeView === '73-raoz-wedding-hub') {
    return <RaozWeddingHubApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'global-plannerss' || activeView === '72-global-plannerss') {
    return <GlobalPlannerssApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'raozy-wedding-planner' || activeView === '71-raozy-wedding-planner') {
    return <RaozyWeddingPlannerApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'psr-venture-weddings' || activeView === '70-psr-venture-weddings') {
    return <PsrVentureWeddingsApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'utsav-luxe' || activeView === '69-utsav-luxe') {
    return <UtsavLuxeApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'devdas-wedding') {
    return <DevdasApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'livinto-interiors') {
    return <LivintoApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'skinsciene-naturals') {
    return <SkinScieneApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'medicareplus') {
    return <MedicarePlusApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'raoz-motors') {
    return <RaozMotorsApp />;
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
