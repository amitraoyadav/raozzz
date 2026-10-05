import React, { useState, useEffect } from 'react';
import { Site78ClubNavbar } from './Site78ClubNavbar';
import { Site78ClubHeroSlider } from './Site78ClubHeroSlider';
import { Site78ClubIntroduction } from './Site78ClubIntroduction';
import { Site78ClubFacilitiesGrid } from './Site78ClubFacilitiesGrid';
import { Site78ClubEventsAndLawns } from './Site78ClubEventsAndLawns';
import { Site78ClubServices } from './Site78ClubServices';
import { Site78ClubFooter } from './Site78ClubFooter';
import { Site78ClubFacilityDetail } from './Site78ClubFacilityDetail';
import { Site78ClubAboutPage } from './Site78ClubAboutPage';
import { Site78ClubFormsPage } from './Site78ClubFormsPage';
import { Site78ClubAffiliatedClubsPage } from './Site78ClubAffiliatedClubsPage';
import { Site78ClubTenderPage } from './Site78ClubTenderPage';
import { Site78ClubCareersPage } from './Site78ClubCareersPage';
import { Site78ClubContactPage } from './Site78ClubContactPage';
import { Site78ClubMemberLoginModal } from './Site78ClubMemberLoginModal';
import { Site78ClubLightbox } from './Site78ClubLightbox';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { site78ClubConfig } from '../../config/site78ClubConfig';

interface Site78ClubAppProps {
  onBackToHub?: () => void;
  onSwitchToResortSection?: () => void;
}

export const Site78ClubApp: React.FC<Site78ClubAppProps> = ({
  onBackToHub,
  onSwitchToResortSection
}) => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeFacilitySlug, setActiveFacilitySlug] = useState<string>('dining');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState('');
  const [prefilledIntroClub, setPrefilledIntroClub] = useState<string | undefined>(undefined);

  // Scroll to top upon navigating to a new view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${site78ClubConfig.CLUB_NAME} | ${site78ClubConfig.TAGLINE}`;
  }, [currentView, activeFacilitySlug]);

  const handleNavigate = (view: string, facilitySlug?: string) => {
    if (facilitySlug) {
      setActiveFacilitySlug(facilitySlug);
      setCurrentView('facility-detail');
      return;
    }
    setCurrentView(view);
  };

  const handleOpenLightbox = (src: string, caption: string) => {
    setLightboxImage(src);
    setLightboxCaption(caption);
    setLightboxOpen(true);
  };

  const handleRequestIntroCard = (clubName: string) => {
    setPrefilledIntroClub(clubName);
    setLoginModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1C242C] font-['Jost',sans-serif] selection:bg-[#C5A869] selection:text-[#0F2537]">
      {/* Floating Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="site-78-aurelia-resort" />

      {/* Main Top Header Navbar */}
      <Site78ClubNavbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenLogin={() => setLoginModalOpen(true)}
        onToggleSection={onSwitchToResortSection}
        activeSectionName="Club"
      />

      {/* =========================================================================
          VIEW: HOME
          ========================================================================= */}
      {currentView === 'home' && (
        <main>
          {/* 1. Multi-Slide Hero Carousel */}
          <Site78ClubHeroSlider onNavigate={handleNavigate} />

          {/* 2. Club Introduction & 4-Grid Photos */}
          <Site78ClubIntroduction
            onReadMore={() => handleNavigate('about')}
            onFacilityClick={(slug) => handleNavigate('facility-detail', slug)}
            onImageClick={handleOpenLightbox}
          />

          {/* 3. Facilities 8-Cards Grid */}
          <Site78ClubFacilitiesGrid
            onFacilityClick={(slug) => handleNavigate('facility-detail', slug)}
            onViewAllFacilities={() => handleNavigate('facilities')}
          />

          {/* 4. Events, Celebrations & Winter Lawns Showcase */}
          <Site78ClubEventsAndLawns
            onExploreEvents={() => handleNavigate('facilities', 'events')}
            onFacilityClick={(slug) => handleNavigate('facility-detail', slug)}
          />

          {/* 5. Extra Services (6 Infoboxes matching Panchshila reference) */}
          <Site78ClubServices />
        </main>
      )}

      {/* =========================================================================
          VIEW: ABOUT US / HERITAGE
          ========================================================================= */}
      {currentView === 'about' && (
        <main>
          <Site78ClubAboutPage
            initialTab="history"
            onNavigateContact={() => handleNavigate('contact')}
            onNavigateFacilities={() => handleNavigate('facilities')}
          />
        </main>
      )}

      {/* =========================================================================
          VIEW: MANAGEMENT COMMITTEE
          ========================================================================= */}
      {currentView === 'committee' && (
        <main>
          <Site78ClubAboutPage
            initialTab="committee"
            onNavigateContact={() => handleNavigate('contact')}
            onNavigateFacilities={() => handleNavigate('facilities')}
          />
        </main>
      )}

      {/* =========================================================================
          VIEW: ALL FACILITIES
          ========================================================================= */}
      {currentView === 'facilities' && (
        <main className="pt-20 sm:pt-28">
          <Site78ClubFacilitiesGrid
            onFacilityClick={(slug) => handleNavigate('facility-detail', slug)}
            onViewAllFacilities={() => {}}
          />
        </main>
      )}

      {/* =========================================================================
          VIEW: INDIVIDUAL FACILITY DETAIL
          ========================================================================= */}
      {currentView === 'facility-detail' && (
        <main>
          <Site78ClubFacilityDetail
            facilitySlug={activeFacilitySlug}
            onNavigateHome={() => handleNavigate('home')}
            onSelectOtherFacility={(slug) => handleNavigate('facility-detail', slug)}
            onOpenBookingModal={() => setLoginModalOpen(true)}
            onOpenImageLightbox={handleOpenLightbox}
          />
        </main>
      )}

      {/* =========================================================================
          VIEW: DOWNLOAD FORMS
          ========================================================================= */}
      {currentView === 'forms' && (
        <main>
          <Site78ClubFormsPage />
        </main>
      )}

      {/* =========================================================================
          VIEW: AFFILIATED CLUBS
          ========================================================================= */}
      {currentView === 'affiliated-clubs' && (
        <main>
          <Site78ClubAffiliatedClubsPage
            onRequestIntroCard={handleRequestIntroCard}
          />
        </main>
      )}

      {/* =========================================================================
          VIEW: TENDER
          ========================================================================= */}
      {currentView === 'tender' && (
        <main>
          <Site78ClubTenderPage />
        </main>
      )}

      {/* =========================================================================
          VIEW: CONTACT US
          ========================================================================= */}
      {currentView === 'contact' && (
        <main>
          <Site78ClubContactPage />
        </main>
      )}

      {/* =========================================================================
          VIEW: CAREERS
          ========================================================================= */}
      {currentView === 'careers' && (
        <main>
          <Site78ClubCareersPage />
        </main>
      )}

      {/* =========================================================================
          LEGAL & POLICY PAGES
          ========================================================================= */}
      {(currentView === 'rules' || currentView === 'disclaimer' || currentView === 'privacy' || currentView === 'terms' || currentView === 'refund') && (
        <main className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl text-[#0F2537] mb-6 capitalize">
              {currentView.replace('-', ' ')}
            </h1>
            <div className="space-y-4 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-[#E8E5DF] pt-6">
              <p>
                All members and their guests at {site78ClubConfig.CLUB_NAME} are bound by the institution’s By-Laws as framed by the General Body and managed by the elected Management Committee.
              </p>
              <p>
                <strong>Dress Code & Decorum:</strong> Collared shirts and formal/smart footwear are required across all indoor dining halls, the Library, and The Oak Bar after 07:00 PM. Flip-flops and sleeveless jerseys are not permitted inside dining areas.
              </p>
              <p>
                <strong>Guest Sign-In:</strong> Members must accompany their guests and record their names at the entrance reception. Members remain fully responsible for the conduct and billing of their authorized visitors.
              </p>
              <p>
                <strong>Card Room & Billiards:</strong> Commercial gambling or unauthorized wagers are strictly prohibited under Club Rules.
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={() => handleNavigate('home')}
                className="px-6 py-2.5 rounded-full bg-[#0F2537] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Global 4-Column Footer */}
      <Site78ClubFooter
        onNavigate={handleNavigate}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* Interactive Member Login Portal Modal */}
      <Site78ClubMemberLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        prefilledClubIntroName={prefilledIntroClub}
      />

      {/* Fullscreen Image Lightbox Modal */}
      <Site78ClubLightbox
        isOpen={lightboxOpen}
        imageSrc={lightboxImage}
        caption={lightboxCaption}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};
