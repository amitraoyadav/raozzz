import React, { useState, useEffect } from 'react';
import { UtsavHeader } from './UtsavHeader';
import { UtsavHero } from './UtsavHero';
import { UtsavServiceCatalog } from './UtsavServiceCatalog';
import { UtsavBudgetCalculator } from './UtsavBudgetCalculator';
import { UtsavLookbook } from './UtsavLookbook';
import { UtsavRealWeddings } from './UtsavRealWeddings';
import { UtsavVenuesSection } from './UtsavVenuesSection';
import { UtsavPackages } from './UtsavPackages';
import { UtsavWhyChooseUs } from './UtsavWhyChooseUs';
import { UtsavProcess } from './UtsavProcess';
import { UtsavTestimonials } from './UtsavTestimonials';
import { UtsavFaqSection } from './UtsavFaqSection';
import { UtsavAboutSection } from './UtsavAboutSection';
import { UtsavContactSection } from './UtsavContactSection';
import { UtsavFooter } from './UtsavFooter';
import { ConsultationModal } from './ConsultationModal';
import { LookbookModal } from './LookbookModal';
import { CitySelectorModal } from './CitySelectorModal';
import { LookbookItem, UtsavServiceCategory, RealWeddingStory, UtsavVenueItem, UtsavPackagePlan, UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

interface UtsavLuxeAppProps {
  onBackToHub?: () => void;
}

export const UtsavLuxeApp: React.FC<UtsavLuxeAppProps> = ({ onBackToHub }) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCity, setSelectedCity] = useState<string>('bengaluru');

  // Modals
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);
  const [cityModalOpen, setCityModalOpen] = useState<boolean>(false);
  const [selectedLookbookItem, setSelectedLookbookItem] = useState<LookbookItem | null>(null);
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Handlers
  const handleOpenCalculator = () => {
    setActiveTab('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookService = (service: UtsavServiceCategory) => {
    setPrefilledNotes(`Interested in ${service.name} (${service.startingPrice}). Please include in consultation agenda.`);
    setConsultationModalOpen(true);
  };

  const handleBookLook = (item: LookbookItem) => {
    setPrefilledNotes(`Looking to customize the '${item.title}' design (${item.categoryLabel} / ${item.vibeLabel}) estimated around ${item.estimatedCost}.`);
    setConsultationModalOpen(true);
  };

  const handlePlanSimilar = (story: RealWeddingStory) => {
    setPrefilledNotes(`Inspired by ${story.coupleNames}'s wedding at ${story.venueName} in ${story.city} (${story.guestCount} guests). Please prepare a similar 3D concept.`);
    setConsultationModalOpen(true);
  };

  const handleInquireVenue = (venue: UtsavVenueItem) => {
    setPrefilledNotes(`Interested in booking and checking dates for ${venue.name} in ${venue.city} (Capacity: ${venue.capacity}).`);
    setConsultationModalOpen(true);
  };

  const handleSelectPackage = (pkg: UtsavPackagePlan) => {
    setPrefilledNotes(`Selecting ${pkg.name} package (${pkg.priceDisplay}). Let's discuss dates and venue compatibility.`);
    setConsultationModalOpen(true);
  };

  const handleCalculatorConsultation = (quoteData: any) => {
    setPrefilledNotes(
      `Calculated Quote: ${quoteData.city.toUpperCase()} with ${quoteData.guestCount} guests, ${quoteData.eventDays} days, ${quoteData.decorTier.toUpperCase()} decor tier. Estimated Budget: ₹${quoteData.estimatedTotal.toLocaleString('en-IN')}.`
    );
    setConsultationModalOpen(true);
    showToast('Quote captured! Our wedding director will have your numbers ready.');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#E05A47]/20 selection:text-[#E05A47] flex flex-col">
      
      {/* Top RaozSite Catalog Return Bar */}
      {onBackToHub && (
        <div className="bg-[#120306] text-stone-300 px-4 py-2 text-xs flex items-center justify-between border-b border-[#2A0E13] sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHub}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              <span>←</span>
              <span>Back to RaozSite Catalog</span>
            </button>
            <span className="hidden sm:inline font-mono text-[11px] text-stone-400">
              WEBSITE #69 · UTSAV LUXE (Next-Gen Wedding & Decor Platform)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono text-[10px] border border-emerald-800">
              Live Interactive Platform
            </span>
            <button
              onClick={handleOpenCalculator}
              className="px-2.5 py-1 rounded bg-[#E05A47] hover:bg-[#C94330] text-white text-[11px] font-semibold transition-colors"
            >
              Cost Estimator
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <UtsavHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCity={selectedCity}
        onOpenCityModal={() => setCityModalOpen(true)}
        onOpenConsultationModal={() => {
          setPrefilledNotes('General wedding consultation request.');
          setConsultationModalOpen(true);
        }}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-950 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-stone-800 text-xs sm:text-sm font-medium flex items-center gap-3 animate-fade-in">
          <span className="text-emerald-400 font-bold text-base">✓</span>
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-stone-400 hover:text-white ml-2">
            ✕
          </button>
        </div>
      )}

      {/* Content Rendering By Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <UtsavHero
              onOpenCalculator={handleOpenCalculator}
              onOpenConsultationModal={() => {
                setPrefilledNotes('Direct inquiry from homepage hero.');
                setConsultationModalOpen(true);
              }}
              onExploreLookbook={() => setActiveTab('lookbook')}
              onSelectCity={(cId) => setSelectedCity(cId)}
              selectedCity={selectedCity}
            />

            {/* Core Services Section */}
            <UtsavServiceCatalog
              onBookService={handleBookService}
              onOpenCalculator={handleOpenCalculator}
            />

            {/* Interactive Budget Calculator */}
            <UtsavBudgetCalculator
              onBookConsultation={handleCalculatorConsultation}
              initialCity={selectedCity}
            />

            {/* 3D Lookbook Preview */}
            <UtsavLookbook
              onSelectItem={(item) => setSelectedLookbookItem(item)}
              onBookLook={handleBookLook}
            />

            {/* Why Choose Us & Comparison */}
            <UtsavWhyChooseUs />

            {/* 4-Step Process */}
            <UtsavProcess />

            {/* Real Weddings Showcase */}
            <UtsavRealWeddings
              onPlanSimilar={handlePlanSimilar}
            />

            {/* Curated Luxury Venues */}
            <UtsavVenuesSection
              onInquireVenue={handleInquireVenue}
              selectedCity={selectedCity}
            />

            {/* Package Pricing Tiers */}
            <UtsavPackages
              onSelectPackage={handleSelectPackage}
              onOpenCalculator={handleOpenCalculator}
            />

            {/* Testimonials */}
            <UtsavTestimonials />

            {/* FAQs */}
            <UtsavFaqSection />

            {/* Final Contact & Inquiry Lead Form */}
            <UtsavContactSection
              initialCity={selectedCity}
            />
          </>
        )}

        {activeTab === 'services' && (
          <div className="py-8">
            <UtsavServiceCatalog
              onBookService={handleBookService}
              onOpenCalculator={handleOpenCalculator}
            />
            <UtsavPackages
              onSelectPackage={handleSelectPackage}
              onOpenCalculator={handleOpenCalculator}
            />
            <UtsavWhyChooseUs />
            <UtsavContactSection initialCity={selectedCity} />
          </div>
        )}

        {activeTab === 'lookbook' && (
          <div className="py-8">
            <UtsavLookbook
              onSelectItem={(item) => setSelectedLookbookItem(item)}
              onBookLook={handleBookLook}
            />
            <UtsavProcess />
            <UtsavContactSection initialCity={selectedCity} defaultService="Custom 3D Lookbook Design" />
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="py-8">
            <UtsavBudgetCalculator
              onBookConsultation={handleCalculatorConsultation}
              initialCity={selectedCity}
            />
            <UtsavPackages
              onSelectPackage={handleSelectPackage}
              onOpenCalculator={handleOpenCalculator}
            />
            <UtsavFaqSection />
          </div>
        )}

        {activeTab === 'real-weddings' && (
          <div className="py-8">
            <UtsavRealWeddings onPlanSimilar={handlePlanSimilar} />
            <UtsavTestimonials />
            <UtsavContactSection initialCity={selectedCity} defaultService="Real Wedding Case Study Inquiry" />
          </div>
        )}

        {activeTab === 'venues' && (
          <div className="py-8">
            <UtsavVenuesSection onInquireVenue={handleInquireVenue} selectedCity={selectedCity} />
            <UtsavWhyChooseUs />
            <UtsavContactSection initialCity={selectedCity} defaultService="Venue Booking & Site Recce" />
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="py-8">
            <UtsavPackages onSelectPackage={handleSelectPackage} onOpenCalculator={handleOpenCalculator} />
            <UtsavBudgetCalculator onBookConsultation={handleCalculatorConsultation} initialCity={selectedCity} />
            <UtsavFaqSection />
            <UtsavContactSection initialCity={selectedCity} defaultService="Package Plan Selection" />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="py-8">
            <UtsavAboutSection onOpenConsultationModal={() => {
              setPrefilledNotes('Inquiry from About Us page.');
              setConsultationModalOpen(true);
            }} />
            <UtsavWhyChooseUs />
            <UtsavTestimonials />
            <UtsavContactSection initialCity={selectedCity} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="py-8">
            <UtsavContactSection initialCity={selectedCity} />
            <UtsavFaqSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <UtsavFooter
        onNavClick={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCityModal={() => setCityModalOpen(true)}
        onOpenCalculator={handleOpenCalculator}
        onOpenConsultationModal={() => {
          setPrefilledNotes('Inquiry from footer CTA.');
          setConsultationModalOpen(true);
        }}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={UTSAV_BUSINESS_CONFIG.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center gap-2 group transition-all hover:scale-105 active:scale-95"
        title="Chat with Utsav Luxe Concierge"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
        <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">
          WhatsApp Us
        </span>
      </a>

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultCity={selectedCity}
        prefilledNotes={prefilledNotes}
      />

      <LookbookModal
        item={selectedLookbookItem}
        onClose={() => setSelectedLookbookItem(null)}
        onBookLook={handleBookLook}
      />

      <CitySelectorModal
        isOpen={cityModalOpen}
        onClose={() => setCityModalOpen(false)}
        selectedCity={selectedCity}
        onSelectCity={(cId) => {
          setSelectedCity(cId);
          showToast(`City switched to ${cId.toUpperCase()}`);
        }}
      />

    </div>
  );
};
