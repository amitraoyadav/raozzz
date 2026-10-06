import React, { useState, useEffect } from 'react';
import { Site79Navbar } from './Site79Navbar';
import { Site79Hero } from './Site79Hero';
import { Site79PolicyTicker } from './Site79PolicyTicker';
import { Site79WeeklyLineup } from './Site79WeeklyLineup';
import { Site79OffersSlider } from './Site79OffersSlider';
import { Site79WhyChoose } from './Site79WhyChoose';
import { Site79AmbienceShowcase } from './Site79AmbienceShowcase';
import { Site79DJsThemeNights } from './Site79DJsThemeNights';
import { Site79EventsCelebration } from './Site79EventsCelebration';
import { Site79GalleryShowcase } from './Site79GalleryShowcase';
import { Site79SpecialOffers } from './Site79SpecialOffers';
import { Site79Awards } from './Site79Awards';
import { Site79TableCtaBanner } from './Site79TableCtaBanner';
import { Site79FaqSection } from './Site79FaqSection';
import { Site79LocationContact } from './Site79LocationContact';
import { Site79SocialSection } from './Site79SocialSection';
import { Site79Footer } from './Site79Footer';

import { Site79EventsPage } from './Site79EventsPage';
import { Site79OffersPage } from './Site79OffersPage';
import { Site79GalleryPage } from './Site79GalleryPage';
import { Site79MenuPage } from './Site79MenuPage';
import { Site79ContactPage } from './Site79ContactPage';
import { Site79BookingModal, BookingModalMode } from './Site79BookingModal';

import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { site79Config } from '../../config/site79Config';
import { MessageCircle, Phone, Calendar, ArrowUp } from 'lucide-react';

interface Site79AppProps {
  onBackToHub?: () => void;
}

export const Site79App: React.FC<Site79AppProps> = ({ onBackToHub }) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingMode, setBookingMode] = useState<BookingModalMode>('table');
  const [selectedEventName, setSelectedEventName] = useState<string | undefined>(undefined);
  const [selectedOfferTitle, setSelectedOfferTitle] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll to top and set document title on tab switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let titleSuffix = 'Luxury Nightclub & Ultra Lounge in Connaught Place';
    if (activeTab === 'events') titleSuffix = 'Weekly Lineup & Guest DJ Schedule';
    if (activeTab === 'offers') titleSuffix = 'VIP Table Privileges & MVP Passes';
    if (activeTab === 'gallery') titleSuffix = 'Photo & Video Archive';
    if (activeTab === 'menu') titleSuffix = 'Bar, Champagnes & Tapas Menu';
    if (activeTab === 'contact') titleSuffix = 'Location, Valet & Reservations';

    document.title = `${site79Config.BRAND_NAME} | ${titleSuffix}`;
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openTableBooking = (eventName?: string) => {
    setBookingMode('table');
    setSelectedEventName(eventName);
    setSelectedOfferTitle(undefined);
    setBookingModalOpen(true);
  };

  const openGuestlist = (eventName?: string) => {
    setBookingMode('guestlist');
    setSelectedEventName(eventName);
    setSelectedOfferTitle(undefined);
    setBookingModalOpen(true);
  };

  const openWalkIn = () => {
    setBookingMode('walkin');
    setSelectedEventName(undefined);
    setSelectedOfferTitle(undefined);
    setBookingModalOpen(true);
  };

  const openOfferClaim = (offerTitle: string) => {
    setBookingMode('offer');
    setSelectedOfferTitle(offerTitle);
    setSelectedEventName(undefined);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#DFB759] selection:text-black font-['Inter'] relative">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'NightClub',
                '@id': 'https://elysiumdelhi.com/#nightclub',
                name: site79Config.BRAND_NAME,
                alternateName: site79Config.SHORT_BRAND,
                legalName: site79Config.LEGAL_NAME,
                description:
                  "Delhi's premier luxury nightclub and ultra-lounge located at Shangri-La's Eros Hotel in Connaught Place. Featuring 360° Void Acoustics sound, 120-beam kinetic laser chandeliers, VIP mezzanine tables, and international headliner DJs.",
                url: 'https://elysiumdelhi.com',
                telephone: site79Config.PHONE,
                email: site79Config.EMAIL,
                priceRange: '₹₹₹₹',
                openingHours: site79Config.OPENING_HOURS,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: site79Config.ADDRESS_STREET,
                  addressLocality: site79Config.ADDRESS_LOCALITY,
                  addressRegion: site79Config.ADDRESS_REGION,
                  postalCode: site79Config.ADDRESS_POSTAL,
                  addressCountry: site79Config.ADDRESS_COUNTRY
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 28.6219,
                  longitude: 77.2145
                },
                servesCuisine: ['Cocktails', 'Champagne', 'International Tapas', 'Pan-Asian Dim Sum'],
                amenityFeature: [
                  { '@type': 'LocationFeatureSpecification', name: 'Valet Parking', value: true },
                  { '@type': 'LocationFeatureSpecification', name: 'VIP Mezzanine Lounges', value: true },
                  { '@type': 'LocationFeatureSpecification', name: 'Void Acoustics Sound', value: true }
                ]
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Are male stags allowed at Elysium?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Male stag entry depends on the night, scheduled headline artist, and venue policy. Stags are allowed strictly subject to prior screening or accompanied by couples.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What does prepaid redeemable cover charge mean?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'It means you prepay an amount online or at the entrance, and the exact same value becomes 100% redeemable at the bar and restaurant for food & beverages.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What are Walk-ins on the Elysium website?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Walk-ins on our website are a prepaid entry reservation designed to help you skip the queue and receive prioritized door access.'
                    }
                  }
                ]
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://elysiumdelhi.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Events & Lineup', item: 'https://elysiumdelhi.com/events' },
                  { '@type': 'ListItem', position: 3, name: 'VIP Table Offers', item: 'https://elysiumdelhi.com/offers' },
                  { '@type': 'ListItem', position: 4, name: 'Gallery', item: 'https://elysiumdelhi.com/gallery' },
                  { '@type': 'ListItem', position: 5, name: 'Bar & Menu', item: 'https://elysiumdelhi.com/menu' },
                  { '@type': 'ListItem', position: 6, name: 'Contact & Location', item: 'https://elysiumdelhi.com/contact' }
                ]
              }
            ]
          })
        }}
      />

      {/* Floating Demo Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="site-79-elysium-club" />

      {/* Global Navigation Header */}
      <Site79Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenTableBooking={() => openTableBooking()}
        onOpenGuestlist={() => openGuestlist()}
        onOpenWalkIn={openWalkIn}
        onBackToHub={onBackToHub}
      />

      {/* Main Content Router */}
      <main>
        {activeTab === 'home' && (
          <>
            {/* 1. Full-screen cinematic video hero with floating CTAs */}
            <Site79Hero
              onOpenTableBooking={() => openTableBooking()}
              onOpenGuestlist={() => openGuestlist()}
              onOpenWalkIn={openWalkIn}
            />

            {/* 2. Club entry / venue policy strip with gold particles */}
            <Site79PolicyTicker />

            {/* 3. Weekly Lineup section with live radar indicator & day filters */}
            <Site79WeeklyLineup
              onOpenTableBooking={openTableBooking}
              onOpenGuestlist={openGuestlist}
            />

            {/* 4. Interactive "WHAT WE OFFER" card slider */}
            <Site79OffersSlider />

            {/* 5. Why Choose / Club Experience section with #1 Nightclub badge */}
            <Site79WhyChoose onNavigateExplore={() => setActiveTab('events')} />

            {/* 6. Ambience showcase with Void Acoustics & Kinetic Lasers */}
            <Site79AmbienceShowcase onOpenTableBooking={() => openTableBooking()} />

            {/* 7. World-class DJs & 5 Curated Theme Nights */}
            <Site79DJsThemeNights
              onOpenTableBooking={openTableBooking}
              onOpenGuestlist={openGuestlist}
            />

            {/* 8. VIP celebrations & private buyouts */}
            <Site79EventsCelebration onOpenTableBooking={openTableBooking} />

            {/* 9. Visual energy photo gallery & weekend video reels */}
            <Site79GalleryShowcase onNavigateGallery={() => setActiveTab('gallery')} />

            {/* 10. Special Offers (Elysium Guestlist, VIP Table 20% OFF, MVP Pass, Midnight Check-In) */}
            <Site79SpecialOffers
              onOpenGuestlist={() => openGuestlist()}
              onOpenTableBooking={() => openTableBooking()}
              onOpenOfferClaim={openOfferClaim}
            />

            {/* 11. Hall of Fame 3D spinning gold awards medallions */}
            <Site79Awards />

            {/* 12. VIP Table booking CTA banner */}
            <Site79TableCtaBanner
              onOpenTableBooking={() => openTableBooking()}
              onOpenGuestlist={() => openGuestlist()}
            />

            {/* 13. FAQ accordion section */}
            <Site79FaqSection
              onOpenTableBooking={() => openTableBooking()}
              onOpenGuestlist={() => openGuestlist()}
            />

            {/* 14. Location & Contact section */}
            <Site79LocationContact onOpenTableBooking={() => openTableBooking()} />

            {/* 15. Social media & Instagram feed */}
            <Site79SocialSection />
          </>
        )}

        {/* Dedicated Pages */}
        {activeTab === 'events' && (
          <Site79EventsPage
            onOpenTableBooking={openTableBooking}
            onOpenGuestlist={openGuestlist}
          />
        )}

        {activeTab === 'offers' && (
          <Site79OffersPage
            onOpenTableBooking={() => openTableBooking()}
            onOpenGuestlist={() => openGuestlist()}
            onOpenWalkIn={openWalkIn}
            onOpenOfferClaim={openOfferClaim}
          />
        )}

        {activeTab === 'gallery' && <Site79GalleryPage />}

        {activeTab === 'menu' && (
          <Site79MenuPage onOpenTableBooking={() => openTableBooking()} />
        )}

        {activeTab === 'contact' && <Site79ContactPage />}
      </main>

      {/* Global Luxury Footer */}
      <Site79Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenTableBooking={() => openTableBooking()}
        onOpenGuestlist={() => openGuestlist()}
        onOpenWalkIn={openWalkIn}
      />

      {/* Interactive Booking & RSVP Modal */}
      <Site79BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialMode={bookingMode}
        initialEventName={selectedEventName}
        initialOfferTitle={selectedOfferTitle}
      />

      {/* Floating Bottom Quick Concierge Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#DFB759] hover:border-[#DFB759] shadow-2xl backdrop-blur-md cursor-pointer transition-all"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Direct Floating Button */}
        <a
          href={`https://wa.me/${site79Config.WHATSAPP}?text=Hi%20Elysium!%20I%20would%20like%20to%20know%20about%20table%20bookings%20and%20guestlist.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:scale-105 transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp VIP Desk</span>
        </a>

        {/* Quick Table Booking Floating Badge */}
        <button
          onClick={() => openTableBooking()}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_30px_rgba(223,183,89,0.7)] hover:scale-105 hover:brightness-110 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Table (20% Off)</span>
        </button>
      </div>
    </div>
  );
};
