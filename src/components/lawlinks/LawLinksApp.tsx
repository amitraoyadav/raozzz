import React, { useState, useEffect } from 'react';
import { LawLinksHeader, LawLinksSubPage } from './LawLinksHeader';
import { LawLinksFooter } from './LawLinksFooter';
import { LawLinksDisclaimer } from './LawLinksDisclaimer';
import { LawLinksHome } from './LawLinksHome';
import { LawLinksAbout } from './LawLinksAbout';
import { LawLinksServices } from './LawLinksServices';
import { LawLinksPracticeArea } from './LawLinksPracticeArea';
import { LawLinksTeam } from './LawLinksTeam';
import { LawLinksPublications } from './LawLinksPublications';
import { LawLinksGallery } from './LawLinksGallery';
import { LawLinksCareer } from './LawLinksCareer';
import { LawLinksContact } from './LawLinksContact';
import { LawLinksConsultationModal } from './LawLinksConsultationModal';

export const LawLinksApp: React.FC = () => {
  const [activeSubPage, setActiveSubPage] = useState<LawLinksSubPage>('home');
  const [selectedLawyerId, setSelectedLawyerId] = useState<string | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Disclaimer Agreement state
  const [hasAgreedDisclaimer, setHasAgreedDisclaimer] = useState<boolean>(() => {
    try {
      return localStorage.getItem('lawlinks_disclaimer_agreed') === 'true';
    } catch {
      return false;
    }
  });

  const handleAgreeDisclaimer = () => {
    setHasAgreedDisclaimer(true);
    try {
      localStorage.setItem('lawlinks_disclaimer_agreed', 'true');
    } catch {
      // ignore
    }
  };

  const handleNavigate = (page: LawLinksSubPage, extraId?: string) => {
    setActiveSubPage(page);
    if (extraId) {
      setSelectedLawyerId(extraId);
    } else if (page !== 'our-team' && page !== 'team-detail') {
      setSelectedLawyerId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLawyer = (lawyerId: string | null) => {
    setSelectedLawyerId(lawyerId);
    if (lawyerId) {
      setActiveSubPage('team-detail');
    } else {
      setActiveSubPage('our-team');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#03A9F5] selection:text-white">
      {/* 1. Bar Council of India Mandatory Disclaimer */}
      <LawLinksDisclaimer
        isOpen={!hasAgreedDisclaimer}
        onAgree={handleAgreeDisclaimer}
      />

      {/* 2. Top Header & Nav */}
      <LawLinksHeader
        activeSubPage={activeSubPage}
        onNavigate={handleNavigate}
        onRequestConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 3. Main View Renderer */}
      <main className="flex-1">
        {activeSubPage === 'home' && (
          <LawLinksHome
            onNavigate={handleNavigate}
            onRequestConsultation={() => setIsConsultationOpen(true)}
            onSelectLawyer={handleSelectLawyer}
          />
        )}

        {activeSubPage === 'about' && (
          <LawLinksAbout
            onNavigate={handleNavigate}
            onSelectLawyer={handleSelectLawyer}
            onRequestConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeSubPage === 'services' && (
          <LawLinksServices
            onNavigate={handleNavigate}
            onRequestConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeSubPage === 'litigation' && (
          <LawLinksPracticeArea
            areaId="litigation"
            onNavigate={handleNavigate}
            onRequestConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeSubPage === 'arbitration' && (
          <LawLinksPracticeArea
            areaId="arbitration"
            onNavigate={handleNavigate}
            onRequestConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeSubPage === 'dispute-resolution' && (
          <LawLinksPracticeArea
            areaId="dispute-resolution"
            onNavigate={handleNavigate}
            onRequestConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeSubPage === 'transactional-corporate' && (
          <LawLinksPracticeArea
            areaId="transactional-and-corporate-advisory"
            onNavigate={handleNavigate}
            onRequestConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeSubPage === 'specialization-areas' && (
          <LawLinksPracticeArea
            areaId="specialization-areas"
            onNavigate={handleNavigate}
            onRequestConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {(activeSubPage === 'our-team' || activeSubPage === 'team-detail') && (
          <LawLinksTeam
            selectedLawyerId={selectedLawyerId}
            onSelectLawyer={handleSelectLawyer}
            onNavigate={handleNavigate}
            onRequestConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeSubPage === 'publications' && (
          <LawLinksPublications />
        )}

        {activeSubPage === 'photo-gallery' && (
          <LawLinksGallery initialTab="photos" />
        )}

        {activeSubPage === 'video-gallery' && (
          <LawLinksGallery initialTab="videos" />
        )}

        {activeSubPage === 'career' && (
          <LawLinksCareer />
        )}

        {activeSubPage === 'contact-us' && (
          <LawLinksContact />
        )}
      </main>

      {/* 4. Footer */}
      <LawLinksFooter onNavigate={handleNavigate} />

      {/* 5. Consultation Request Modal */}
      <LawLinksConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};
export default LawLinksApp;
