import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Phone,
  Calculator,
  ArrowUp,
  Scale,
  Heart
} from 'lucide-react';
import { site82Config } from '../../config/site82Config';
import { WealthProperty, WEALTH_PROPERTIES } from '../../data/site82Data';
import { Site82Header } from './Site82Header';
import { Site82HeroSearch } from './Site82HeroSearch';
import { Site82TrustStats } from './Site82TrustStats';
import { Site82PropertyDiscovery } from './Site82PropertyDiscovery';
import { Site82ProjectOfTheMonth } from './Site82ProjectOfTheMonth';
import { Site82PropertyCategories } from './Site82PropertyCategories';
import { Site82WhyChooseUs } from './Site82WhyChooseUs';
import { Site82PartnerDevelopers } from './Site82PartnerDevelopers';
import { Site82Testimonials } from './Site82Testimonials';
import { Site82FAQ } from './Site82FAQ';
import { Site82PropertyMarketplace } from './Site82PropertyMarketplace';
import { Site82PropertyDetail } from './Site82PropertyDetail';
import { Site82EventsPage } from './Site82EventsPage';
import { Site82BlogsPage } from './Site82BlogsPage';
import { Site82NewsPage } from './Site82NewsPage';
import { Site82CompanyPages } from './Site82CompanyPages';
import { Site82Footer } from './Site82Footer';
import { Site82ConsultationModal } from './Site82ConsultationModal';
import { Site82CompareModal } from './Site82CompareModal';
import { Site82WishlistDrawer } from './Site82WishlistDrawer';
import { Site82CalculatorModal } from './Site82CalculatorModal';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';

interface Site82AppProps {
  onBackToHub?: () => void;
}

export const Site82App: React.FC<Site82AppProps> = ({ onBackToHub }) => {
  // Navigation View State
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProperty, setSelectedProperty] = useState<WealthProperty | null>(null);

  // Marketplace filter states when navigating from header or hero
  const [marketplaceFilters, setMarketplaceFilters] = useState<{
    projectType?: string;
    city?: string;
    category?: string;
    query?: string;
  }>({
    projectType: 'all',
    city: 'all',
    category: 'all',
    query: ''
  });

  const [selectedBlogCategory, setSelectedBlogCategory] = useState<string>('all');

  // Wishlist State (persisted in localStorage)
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wealth_nexus_wishlist');
      return saved ? JSON.parse(saved) : ['p1', 'p2'];
    } catch {
      return ['p1', 'p2'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wealth_nexus_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  // Compare State (up to 4 properties)
  const [compareList, setCompareList] = useState<string[]>(['p1', 'p3']);

  const toggleCompare = (id: string) => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 4) {
        alert('You can compare a maximum of 4 properties side-by-side.');
        return prev;
      }
      return [...prev, id];
    });
  };

  const removeFromCompare = (id: string) => {
    setCompareList((prev) => prev.filter((item) => item !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  // Modal States
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState<{
    property?: string;
    city?: string;
  }>({});

  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Scroll to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler for navigation routing
  const handleNavigate = (view: string, cityOrCategory?: string) => {
    scrollToTop();

    if (view === 'home') {
      setCurrentView('home');
      setSelectedProperty(null);
      return;
    }

    if (view === 'properties') {
      setMarketplaceFilters({
        projectType: 'all',
        city: 'all',
        category: 'all',
        query: ''
      });
      setCurrentView('properties');
      setSelectedProperty(null);
      return;
    }

    if (view === 'properties-residential') {
      setMarketplaceFilters({
        projectType: 'Residential',
        city: 'all',
        category: 'all',
        query: ''
      });
      setCurrentView('properties');
      setSelectedProperty(null);
      return;
    }

    if (view === 'properties-commercial') {
      setMarketplaceFilters({
        projectType: 'Commercial',
        city: 'all',
        category: 'all',
        query: ''
      });
      setCurrentView('properties');
      setSelectedProperty(null);
      return;
    }

    if (view === 'properties-luxury') {
      setMarketplaceFilters({
        projectType: 'Luxury',
        city: 'all',
        category: 'all',
        query: ''
      });
      setCurrentView('properties');
      setSelectedProperty(null);
      return;
    }

    if (view === 'properties-plots') {
      setMarketplaceFilters({
        projectType: 'Plots',
        city: 'all',
        category: 'all',
        query: ''
      });
      setCurrentView('properties');
      setSelectedProperty(null);
      return;
    }

    if (view === 'properties-city' && cityOrCategory) {
      setMarketplaceFilters({
        projectType: 'all',
        city: cityOrCategory,
        category: 'all',
        query: ''
      });
      setCurrentView('properties');
      setSelectedProperty(null);
      return;
    }

    if (view === 'properties-category' && cityOrCategory) {
      setMarketplaceFilters({
        projectType: 'all',
        city: 'all',
        category: cityOrCategory,
        query: ''
      });
      setCurrentView('properties');
      setSelectedProperty(null);
      return;
    }

    if (view === 'blogs' || view.startsWith('blogs-')) {
      const cat = view === 'blogs' ? 'all' : view.replace('blogs-', '');
      setSelectedBlogCategory(cat);
      setCurrentView('blogs');
      return;
    }

    // Default view transition
    setCurrentView(view);
  };

  // Open property detail
  const handleSelectProperty = (property: WealthProperty) => {
    setSelectedProperty(property);
    setCurrentView('property-detail');
    scrollToTop();
  };

  // Open consultation with context
  const handleOpenConsultation = (property?: string, city?: string) => {
    setConsultationPrefill({ property, city });
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF9] text-[#1E2430] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. Sticky Navigation Header */}
      <Site82Header
        currentView={currentView}
        onNavigate={handleNavigate}
        wishlistCount={wishlist.length}
        compareCount={compareList.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 2. Main Page Content View Switcher */}
      <main className="flex-1 pt-[72px]">
        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <>
            {/* Hero Search */}
            <Site82HeroSearch
              onSearch={({ city, propertyType, query }) => {
                setMarketplaceFilters({
                  city: city || 'all',
                  projectType: propertyType === 'All Types' ? 'all' : propertyType,
                  category: 'all',
                  query: query || ''
                });
                setCurrentView('properties');
                scrollToTop();
              }}
              onSelectProperty={handleSelectProperty}
              onViewAllProperties={() => handleNavigate('properties')}
            />

            {/* Trust Metrics & Stats */}
            <Site82TrustStats
              onCheckProjects={() => handleNavigate('properties')}
              onTalkToExpert={() => handleOpenConsultation()}
              onBookConsultation={() => handleOpenConsultation()}
            />

            {/* Property Discovery by City Tabs */}
            <Site82PropertyDiscovery
              onSelectProperty={handleSelectProperty}
              onViewAll={() => handleNavigate('properties')}
            />

            {/* Project of the Month Feature */}
            <Site82ProjectOfTheMonth
              onSelectProperty={handleSelectProperty}
              onBookConsultation={() => handleOpenConsultation('Orion One 32', 'Noida')}
            />

            {/* Property Categories (Ready to Move, Affordable, Mid-Range, Luxury) */}
            <Site82PropertyCategories
              onSelectCategory={(category) => {
                setMarketplaceFilters({
                  projectType: 'all',
                  city: 'all',
                  category: category,
                  query: ''
                });
                setCurrentView('properties');
                scrollToTop();
              }}
              onSendEnquiry={() => handleOpenConsultation()}
            />

            {/* Why Choose Wealth Nexus */}
            <Site82WhyChooseUs />

            {/* Partner Developers */}
            <Site82PartnerDevelopers />

            {/* Client Testimonials */}
            <Site82Testimonials />

            {/* FAQ Accordion */}
            <Site82FAQ onOpenConsultation={() => handleOpenConsultation()} />
          </>
        )}

        {/* VIEW: PROPERTY MARKETPLACE */}
        {currentView === 'properties' && (
          <Site82PropertyMarketplace
            initialProjectType={marketplaceFilters.projectType || 'all'}
            initialCity={marketplaceFilters.city || 'all'}
            initialCategory={marketplaceFilters.category || 'all'}
            onSelectProperty={handleSelectProperty}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            compareList={compareList}
            onToggleCompare={toggleCompare}
            onOpenCompareModal={() => setIsCompareOpen(true)}
          />
        )}

        {/* VIEW: PROPERTY DETAIL */}
        {currentView === 'property-detail' && selectedProperty && (
          <Site82PropertyDetail
            property={selectedProperty}
            onBack={() => {
              setCurrentView('properties');
              scrollToTop();
            }}
            onSelectProperty={handleSelectProperty}
            isWishlisted={wishlist.includes(selectedProperty.id)}
            onToggleWishlist={toggleWishlist}
            isCompared={compareList.includes(selectedProperty.id)}
            onToggleCompare={toggleCompare}
            onOpenConsultation={() => handleOpenConsultation(selectedProperty.name, selectedProperty.city)}
          />
        )}

        {/* VIEW: EVENTS */}
        {currentView === 'events' && <Site82EventsPage />}

        {/* VIEW: BLOGS & GUIDES */}
        {currentView === 'blogs' && (
          <Site82BlogsPage initialCategorySlug={selectedBlogCategory} />
        )}

        {/* VIEW: NEWS */}
        {currentView === 'news' && <Site82NewsPage />}

        {/* VIEW: COMPANY PAGES */}
        {[
          'about-us',
          'career',
          'life-at-wc',
          'contact-us',
          'happy-customers',
          'terms-and-conditions',
          'privacy-policy',
          'disclaimer'
        ].includes(currentView) && (
          <Site82CompanyPages
            pageType={currentView as any}
            onNavigateHome={() => handleNavigate('home')}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* 3. Floating Action Widgets */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Compare Floating Badge */}
        {compareList.length > 0 && (
          <button
            onClick={() => setIsCompareOpen(true)}
            className="pointer-events-auto p-3.5 rounded-full bg-[#1E2430] text-white shadow-xl hover:bg-[#2D3748] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer border border-neutral-700"
            title="View Comparison"
          >
            <Scale className="w-5 h-5 text-[#F54900]" />
            <span className="text-xs font-bold pr-1">Compare ({compareList.length})</span>
          </button>
        )}

        {/* Wishlist Floating Quick Button */}
        {wishlist.length > 0 && (
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="pointer-events-auto p-3.5 rounded-full bg-white text-neutral-800 shadow-xl hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer border border-[#F0D9CC]"
            title="Saved Properties"
          >
            <Heart className="w-5 h-5 fill-red-500 text-red-500" />
            <span className="text-xs font-bold pr-1">{wishlist.length}</span>
          </button>
        )}

        {/* Calculator Floating Button */}
        <button
          onClick={() => setIsCalculatorOpen(true)}
          className="pointer-events-auto p-3.5 rounded-full bg-amber-500 text-white shadow-xl hover:bg-amber-600 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          title="EMI & Yield Calculator"
        >
          <Calculator className="w-5 h-5" />
          <span className="text-xs font-bold hidden sm:inline pr-1">EMI Calculator</span>
        </button>

        {/* WhatsApp Consultation Button */}
        <a
          href={`https://wa.me/${site82Config.WHATSAPP}?text=Hello%20Wealth%20Nexus,%20I%20am%20looking%20for%20property%20investment%20advisory.`}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1EBE5D] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          title="Chat with RERA Specialist"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold hidden sm:inline pr-1">WhatsApp</span>
        </a>
      </div>

      {/* 4. Complete Footer */}
      <Site82Footer
        onNavigate={handleNavigate}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 5. Modals & Drawers */}
      <Site82ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefillProperty={consultationPrefill.property}
        prefillCity={consultationPrefill.city}
      />

      <Site82CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        compareIds={compareList}
        onRemoveFromCompare={removeFromCompare}
        onClearAll={clearCompare}
        onSelectProperty={handleSelectProperty}
        onOpenConsultation={(name) => handleOpenConsultation(name)}
      />

      <Site82WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        onRemoveFromWishlist={toggleWishlist}
        onClearWishlist={clearWishlist}
        onSelectProperty={handleSelectProperty}
        onExploreProperties={() => handleNavigate('properties')}
      />

      <Site82CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 6. Multi-Site Reference Navigation Switcher */}
      <ReferenceSiteSwitcher currentSiteId="site-82-wealth-clinic" />
    </div>
  );
};
