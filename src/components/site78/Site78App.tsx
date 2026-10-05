import React, { useState, useEffect } from 'react';
import { Site78Navbar } from './Site78Navbar';
import { Site78Hero } from './Site78Hero';
import { Site78Introduction } from './Site78Introduction';
import { Site78RoomsSection } from './Site78RoomsSection';
import { Site78AmenitiesSection } from './Site78AmenitiesSection';
import { Site78WellnessSection } from './Site78WellnessSection';
import { Site78SignatureFeatures } from './Site78SignatureFeatures';
import { Site78Sustainability } from './Site78Sustainability';
import { Site78FaqSection } from './Site78FaqSection';
import { Site78BlogSection } from './Site78BlogSection';
import { Site78SeoContent } from './Site78SeoContent';
import { Site78RoomDetail } from './Site78RoomDetail';
import { Site78EventsPage } from './Site78EventsPage';
import { Site78GoaGuidePage } from './Site78GoaGuidePage';
import { Site78ContactPage } from './Site78ContactPage';
import { Site78BookingModal } from './Site78BookingModal';
import { Site78Footer } from './Site78Footer';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { site78Config } from '../../config/site78Config';
import { Site78ClubApp } from '../site78club/Site78ClubApp';

interface Site78AppProps {
  onBackToHub?: () => void;
}

export const Site78App: React.FC<Site78AppProps> = ({ onBackToHub }) => {
  // Defaults to the requested 'club' section: The Kensington Club (recreating Panchshila Club)
  const [sectionMode, setSectionMode] = useState<'club' | 'resort'>('club');
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeGuideCategorySlug, setActiveGuideCategorySlug] = useState<string | undefined>(undefined);
  const [activeRoomSlug, setActiveRoomSlug] = useState<string>('deluxe-double-room-with-private-pool');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${site78Config.BRAND_NAME} | ${site78Config.SUBTITLE}`;
  }, [currentView, activeGuideCategorySlug, activeRoomSlug]);

  const handleNavigate = (view: string, guideCategorySlug?: string, roomSlug?: string) => {
    if (guideCategorySlug) {
      setActiveGuideCategorySlug(guideCategorySlug);
    }
    if (roomSlug) {
      setActiveRoomSlug(roomSlug);
    }
    setCurrentView(view);
  };

  const handleOpenBooking = (
    roomSlug?: string,
    initialData?: { checkIn?: string; checkOut?: string; guests?: number }
  ) => {
    if (roomSlug) {
      setActiveRoomSlug(roomSlug);
    }
    if (initialData) {
      setBookingInitialData(initialData);
    }
    setBookingModalOpen(true);
  };

  const handleScrollToRooms = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('rooms');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('rooms');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If in 'club' mode, render the Panchshila-inspired Kensington Club application
  if (sectionMode === 'club') {
    return (
      <Site78ClubApp
        onBackToHub={onBackToHub}
        onSwitchToResortSection={() => setSectionMode('resort')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#222222] font-['Jost',sans-serif] selection:bg-[#B99D75] selection:text-white">
      {/* Floating Section Mode Switcher Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setSectionMode('club')}
          className="px-4 py-2.5 rounded-full bg-[#0F2537] text-white border-2 border-[#C5A869] text-xs font-bold tracking-wider uppercase shadow-2xl hover:bg-[#183D2F] transition-all cursor-pointer flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#C5A869] animate-pulse" />
          <span>Switch to Club Section (Kensington Club)</span>
        </button>
      </div>

      {/* Floating Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="site-78-aurelia-resort" />

      {/* Global Navigation */}
      <Site78Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking(activeRoomSlug)}
      />

      {/* VIEW: HOME */}
      {currentView === 'home' && (
        <main>
          {/* 1. Hero Section */}
          <Site78Hero
            onExploreRooms={handleScrollToRooms}
            onOpenBooking={(slug, data) => handleOpenBooking(slug, data)}
          />

          {/* 2. Hotel Introduction & Experience */}
          <Site78Introduction
            onExploreRooms={handleScrollToRooms}
            onExploreEvents={() => handleNavigate('events')}
          />

          {/* 4. Rooms and Suites */}
          <Site78RoomsSection
            onViewRoomDetail={(slug) => {
              if (slug === 'two-bedroom-premium-suite') {
                handleNavigate('room-suite', undefined, slug);
              } else {
                handleNavigate('room-deluxe', undefined, slug);
              }
            }}
            onBookRoom={(slug) => handleOpenBooking(slug)}
          />

          {/* 6. Exclusive Amenities */}
          <Site78AmenitiesSection />

          {/* 7. Wellness & Recreation */}
          <Site78WellnessSection
            onExploreGuide={() => handleNavigate('goa-guide', 'activities-to-do-in-goa')}
          />

          {/* 8. Signature Points & Features */}
          <Site78SignatureFeatures
            onReserveTable={() => handleNavigate('contact')}
          />

          {/* 9. Sustainability */}
          <Site78Sustainability />

          {/* 10. Frequently Asked Questions */}
          <Site78FaqSection />

          {/* 11. News & Insights / Blog */}
          <Site78BlogSection />

          {/* 12. Long-Form Hotel Content / SEO */}
          <Site78SeoContent />
        </main>
      )}

      {/* VIEW: ROOM DELUXE DOUBLE */}
      {currentView === 'room-deluxe' && (
        <main>
          <Site78RoomDetail
            roomSlug="deluxe-double-room-with-private-pool"
            onNavigateHome={() => handleNavigate('home')}
            onSelectOtherRoom={(slug) => handleNavigate('room-suite', undefined, slug)}
            onBookRoom={(slug) => handleOpenBooking(slug)}
          />
        </main>
      )}

      {/* VIEW: ROOM TWO BEDROOM SUITE */}
      {currentView === 'room-suite' && (
        <main>
          <Site78RoomDetail
            roomSlug="two-bedroom-premium-suite"
            onNavigateHome={() => handleNavigate('home')}
            onSelectOtherRoom={(slug) => handleNavigate('room-deluxe', undefined, slug)}
            onBookRoom={(slug) => handleOpenBooking(slug)}
          />
        </main>
      )}

      {/* VIEW: EVENTS & CELEBRATION */}
      {currentView === 'events' && (
        <main>
          <Site78EventsPage
            onOpenBooking={() => handleOpenBooking()}
          />
        </main>
      )}

      {/* VIEW: GOA GUIDE */}
      {currentView === 'goa-guide' && (
        <main>
          <Site78GoaGuidePage
            initialCategorySlug={activeGuideCategorySlug}
            onBookRoom={() => handleOpenBooking()}
          />
        </main>
      )}

      {/* VIEW: BLOG */}
      {currentView === 'blog' && (
        <main className="pt-24 sm:pt-32 pb-16">
          <Site78BlogSection />
        </main>
      )}

      {/* VIEW: CONTACT US */}
      {currentView === 'contact' && (
        <main>
          <Site78ContactPage />
        </main>
      )}

      {/* Global Luxury Footer */}
      <Site78Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking(activeRoomSlug)}
      />

      {/* Interactive Reservation Booking Modal */}
      <Site78BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomSlug={activeRoomSlug}
        initialCheckIn={bookingInitialData.checkIn}
        initialCheckOut={bookingInitialData.checkOut}
        initialGuests={bookingInitialData.guests}
      />
    </div>
  );
};
