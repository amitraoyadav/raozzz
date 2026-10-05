import React, { useState, useEffect } from 'react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { site75Config } from '../../config/site75Config';
import { Site75Navbar } from './Site75Navbar';
import { Site75Hero } from './Site75Hero';
import { Site75About } from './Site75About';
import { Site75Services } from './Site75Services';
import { Site75Destinations } from './Site75Destinations';
import { Site75Experiences } from './Site75Experiences';
import { Site75Portfolio } from './Site75Portfolio';
import { Site75Gallery } from './Site75Gallery';
import { Site75Testimonials } from './Site75Testimonials';
import { Site75PlanningForm } from './Site75PlanningForm';
import { CallbackModal, DestinationDetailModal } from './Site75Modals';
import { ContactConciergePage, LegalDocumentPage } from './Site75Pages';
import { Site75Footer } from './Site75Footer';
import { DestinationItem, DESTINATIONS_DATA } from '../../data/site75Data';

interface Site75AppProps {
  onBackToHub?: () => void;
}

export const Site75App: React.FC<Site75AppProps> = ({ onBackToHub }) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<DestinationItem | null>(null);
  const [planningInitialDest, setPlanningInitialDest] = useState<string>('Udaipur, Rajasthan');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | undefined>(undefined);

  // Dynamic SEO & Structured Data Sync
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const prevTitle = document.title;
    const titles: Record<string, string> = {
      home: 'Aura Luxe Weddings | Luxury Wedding Planner & Haute Couture Atelier Mumbai',
      about: 'The Atelier Philosophy & Founders | Aura Luxe Weddings',
      services: 'Turnkey Wedding Planning, Scenography & Décor Pillars | Aura Luxe',
      destinations: 'Destination Wedding Sanctuaries India & Worldwide | Aura Luxe',
      portfolio: 'Real Wedding Masterpieces & Case Studies | Aura Luxe Weddings',
      experiences: 'The Ceremonial Wedding Journey & Traditions | Aura Luxe Weddings',
      gallery: 'Inspiration Gallery, Mandap Designs & Scenography | Aura Luxe',
      contact: 'Direct Wedding Concierge & Consultation Desks | Aura Luxe Weddings',
      planning: 'Start Planning Your Celebration | Aura Luxe Weddings',
      privacy: 'Privacy Policy & Guest Data Sanctity | Aura Luxe Weddings',
      terms: 'Terms & Conditions of Hospitality Engagement | Aura Luxe Weddings',
      cookies: 'Cookie Policy | Aura Luxe Weddings',
      accessibility: 'Accessibility Statement | Aura Luxe Weddings',
      sitemap: 'Directory & Sitemap | Aura Luxe Weddings'
    };

    document.title = titles[activeTab] || 'Aura Luxe Weddings | Luxury Wedding Planner & Atelier';

    // Inject Schema.org LocalBusiness & WebSite JSON-LD
    const schemaId = 'site-75-auraluxe-jsonld';
    let script = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://auraluxeweddings.com/#business',
          name: site75Config.BRAND_NAME,
          alternateName: 'Aura Luxe Wedding Atelier',
          description: site75Config.TAGLINE,
          url: 'https://auraluxeweddings.com',
          telephone: site75Config.PHONE,
          email: site75Config.EMAIL,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'The Palladium Atelier, 12th Floor, High Street Phoenix',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '400013',
            addressCountry: 'IN'
          },
          priceRange: '$$$$',
          areaServed: ['India', 'United Arab Emirates', 'Italy', 'Maldives', 'Thailand', 'Indonesia'],
          founder: {
            '@type': 'Person',
            name: site75Config.FOUNDERS
          },
          knowsAbout: [
            'Luxury Wedding Planning',
            'Destination Wedding Architecture',
            'Bespoke Scenography & Décor',
            'Haute Couture Bridal Styling',
            'Celebrity & Artist Booking',
            'Ceremonial Sangeet, Mehendi & Phera Direction'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': 'https://auraluxeweddings.com/#website',
          url: 'https://auraluxeweddings.com',
          name: site75Config.BRAND_NAME,
          publisher: {
            '@id': 'https://auraluxeweddings.com/#business'
          }
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      document.title = prevTitle;
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [activeTab]);

  const handleOpenPlanningForDest = (destName: string) => {
    setPlanningInitialDest(destName);
    setActiveTab('planning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPlanning = () => {
    const el = document.getElementById('planning-form-container');
    if (activeTab === 'home' && el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('planning');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-white font-sans selection:bg-[#D4AF37] selection:text-[#080B12]">
      
      {/* Catalog Reference Switcher Bar */}
      <ReferenceSiteSwitcher currentSiteId="site-75-aura-luxe" />

      {/* Main Luxury Header */}
      <Site75Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPlanning={handleOpenPlanning}
        onOpenCallback={() => setCallbackModalOpen(true)}
        onSelectDestination={destSlug => {
          const found = DESTINATIONS_DATA.find(d => d.slug === destSlug);
          if (found) {
            setSelectedDestination(found);
          }
        }}
        onSelectService={serviceSlug => {
          setSelectedServiceSlug(serviceSlug);
          setActiveTab('services');
        }}
      />

      {/* MAIN VIEW CONTENT */}
      <main>
        {activeTab === 'home' && (
          <>
            {/* Immersive Cinematic Hero */}
            <Site75Hero
              onStartPlanning={handleOpenPlanning}
              onExplorePortfolio={() => {
                const el = document.getElementById('portfolio-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('portfolio');
              }}
              onExploreDestinations={() => {
                const el = document.getElementById('destinations-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('destinations');
              }}
            />

            {/* Atelier Philosophy & Founders Introduction */}
            <Site75About
              onOpenPlanning={handleOpenPlanning}
              onExploreServices={() => setActiveTab('services')}
            />

            {/* Signature Capabilities & Pillars */}
            <Site75Services
              onOpenPlanning={handleOpenPlanning}
              selectedServiceSlug={selectedServiceSlug}
            />

            {/* Curated Sanctuaries & Destinations */}
            <Site75Destinations
              onSelectDestination={dest => setSelectedDestination(dest)}
              onExploreAll={() => setActiveTab('destinations')}
            />

            {/* Living Archive: Real Wedding Case Studies */}
            <Site75Portfolio
              onStartPlanning={handleOpenPlanning}
              onExploreAll={() => setActiveTab('portfolio')}
            />

            {/* The Ceremonial Journey */}
            <Site75Experiences
              onStartPlanning={handleOpenPlanning}
            />

            {/* Visual Poetry Gallery with Lightbox */}
            <Site75Gallery />

            {/* Client Acclaim Testimonials */}
            <Site75Testimonials />

            {/* Multi-Step Start Planning Experience */}
            <Site75PlanningForm
              initialDestination={planningInitialDest}
              onSuccess={() => {}}
            />
          </>
        )}

        {/* STANDALONE SUBPAGES */}
        {activeTab === 'about' && (
          <div className="pt-6">
            <Site75About
              onOpenPlanning={handleOpenPlanning}
              onExploreServices={() => setActiveTab('services')}
            />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-6">
            <Site75Services
              onOpenPlanning={handleOpenPlanning}
              selectedServiceSlug={selectedServiceSlug}
            />
          </div>
        )}

        {activeTab === 'destinations' && (
          <div className="pt-6">
            <Site75Destinations
              onSelectDestination={dest => setSelectedDestination(dest)}
            />
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="pt-6">
            <Site75Portfolio
              onStartPlanning={handleOpenPlanning}
            />
          </div>
        )}

        {activeTab === 'experiences' && (
          <div className="pt-6">
            <Site75Experiences
              onStartPlanning={handleOpenPlanning}
            />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="pt-6">
            <Site75Gallery />
          </div>
        )}

        {activeTab === 'contact' && (
          <ContactConciergePage
            onOpenCallback={() => setCallbackModalOpen(true)}
            onOpenPlanning={handleOpenPlanning}
          />
        )}

        {activeTab === 'planning' && (
          <div className="pt-6">
            <Site75PlanningForm
              initialDestination={planningInitialDest}
              onSuccess={() => {}}
            />
          </div>
        )}

        {/* Legal Pages */}
        {activeTab === 'privacy' && <LegalDocumentPage type="privacy" />}
        {activeTab === 'terms' && <LegalDocumentPage type="terms" />}
        {activeTab === 'cookies' && <LegalDocumentPage type="cookies" />}
        {activeTab === 'accessibility' && <LegalDocumentPage type="accessibility" />}
        {activeTab === 'sitemap' && <LegalDocumentPage type="sitemap" />}
      </main>

      {/* Global Luxury Footer */}
      <Site75Footer
        setActiveTab={setActiveTab}
        onBackToHub={onBackToHub}
        onOpenCallback={() => setCallbackModalOpen(true)}
        onOpenPlanning={handleOpenPlanning}
      />

      {/* Fast Callback Modal */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />

      {/* Detailed Destination Property Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanForDestination={handleOpenPlanningForDest}
      />

    </div>
  );
};

export default Site75App;
