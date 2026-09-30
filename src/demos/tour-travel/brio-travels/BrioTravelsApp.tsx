import React, { useState, useEffect } from 'react';
import './brioTravels.css';
import { useApp } from '../../../context/AppContext';
import { BrioTopBar } from './components/BrioTopBar';
import { BrioNavbar } from './components/BrioNavbar';
import { BrioFooter } from './components/BrioFooter';
import { BrioHeroSlider } from './components/BrioHeroSlider';
import { BrioAboutBlock } from './components/BrioAboutBlock';
import { BrioPopularTours } from './components/BrioPopularTours';
import { BrioPackagesCarousel } from './components/BrioPackagesCarousel';
import { BrioExperienceGallery } from './components/BrioExperienceGallery';
import { BrioTestimonialsSlider } from './components/BrioTestimonialsSlider';
import { BrioReasonToChoose } from './components/BrioReasonToChoose';
import { BrioSeoSection } from './components/BrioSeoSection';
import { BrioQuickEnquiryForm } from './components/BrioQuickEnquiryForm';
import { BrioPackageDetail } from './components/BrioPackageDetail';
import { BrioListingPage } from './components/BrioListingPage';
import { BrioCarRentalsPage } from './components/BrioCarRentalsPage';
import { BrioHoneymoonPage } from './components/BrioHoneymoonPage';
import { BrioTajMahalPage } from './components/BrioTajMahalPage';
import { BrioAboutPage } from './components/BrioAboutPage';
import { BrioContactPage } from './components/BrioContactPage';
import { BrioMediaPage } from './components/BrioMediaPage';
import { BrioBlogPage } from './components/BrioBlogPage';
import { BrioPoliciesPages } from './components/BrioPoliciesPages';
import { BrioBookingModal } from './components/BrioBookingModal';

import {
  DOMESTIC_PACKAGES,
  INTERNATIONAL_PACKAGES,
  TAJ_MAHAL_SPECIAL,
  HONEYMOON_PACKAGES,
  BrioTourPackage
} from './data/brioTravelsData';

export const BrioTravelsApp: React.FC = () => {
  const { setActiveView } = useApp();

  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPackageSlug, setSelectedPackageSlug] = useState<string | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingTourTitle, setBookingTourTitle] = useState('');

  // Combine all packages for lookup
  const allPackages: BrioTourPackage[] = [
    ...DOMESTIC_PACKAGES,
    ...INTERNATIONAL_PACKAGES,
    TAJ_MAHAL_SPECIAL,
    ...HONEYMOON_PACKAGES
  ];

  // Scroll to top when view/tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedPackageSlug]);

  const handleNavigate = (tab: string, packageSlug?: string) => {
    if (tab === 'package-detail' && packageSlug) {
      setSelectedPackageSlug(packageSlug);
      setActiveTab('package-detail');
    } else {
      setSelectedPackageSlug(null);
      setActiveTab(tab);
    }
  };

  const handleOpenBookingModal = (tourTitle: string = '') => {
    setBookingTourTitle(tourTitle);
    setBookingModalOpen(true);
  };

  const currentPackage = selectedPackageSlug
    ? allPackages.find(p => p.slug === selectedPackageSlug || p.id === selectedPackageSlug)
    : undefined;

  return (
    <div className="brio-app min-h-screen flex flex-col font-['Inter'] selection:bg-teal-100 selection:text-teal-900 bg-white">
      {/* 1. Small Top Bar with Back to Portfolio Link */}
      <BrioTopBar onBackToPortfolio={() => setActiveView('home')} />

      {/* 2. Sticky Mega/Dropdown Navbar */}
      <BrioNavbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* 3. Main View Switching */}
      <main className="flex-1">
        {/* VIEW: Package Detail */}
        {activeTab === 'package-detail' && currentPackage && (
          <BrioPackageDetail
            pkg={currentPackage}
            onBack={() => {
              if (currentPackage.category === 'international') {
                setActiveTab('international');
              } else if (currentPackage.category === 'honeymoon') {
                setActiveTab('honeymoon');
              } else {
                setActiveTab('domestic');
              }
            }}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {/* VIEW: Domestic Tours Listing (30 packages) */}
        {activeTab === 'domestic' && (
          <BrioListingPage
            title="Domestic Tour Packages Across India"
            subtitle="Explore 30 handcrafted itineraries from Kashmir and Himachal snow glades to Kerala backwaters, Rajasthan palaces, and sacred Himalayan shrines."
            packages={DOMESTIC_PACKAGES}
            categoryType="domestic"
            onSelectPackage={pkg => handleNavigate('package-detail', pkg.slug)}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {/* VIEW: International Tours Listing (15 packages) */}
        {activeTab === 'international' && (
          <BrioListingPage
            title="International Holiday Escapes"
            subtitle="Explore 15 trending world destinations from Dubai, Bali, and Kazakhstan to Switzerland, Singapore, Europe, and Vietnam with rapid visa processing."
            packages={INTERNATIONAL_PACKAGES}
            categoryType="international"
            onSelectPackage={pkg => handleNavigate('package-detail', pkg.slug)}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {/* VIEW: Car Rentals */}
        {activeTab === 'car-rentals' && (
          <BrioCarRentalsPage onOpenBookingModal={handleOpenBookingModal} />
        )}

        {/* VIEW: Honeymoon Packages */}
        {activeTab === 'honeymoon' && (
          <BrioHoneymoonPage
            onSelectPackage={pkg => handleNavigate('package-detail', pkg.slug)}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {/* VIEW: Taj Mahal Tour */}
        {activeTab === 'taj-mahal' && (
          <BrioTajMahalPage onOpenBookingModal={handleOpenBookingModal} />
        )}

        {/* VIEW: Media (Photos & Videos) */}
        {activeTab === 'media' && <BrioMediaPage />}

        {/* VIEW: Blog */}
        {activeTab === 'blog' && <BrioBlogPage />}

        {/* VIEW: About Us */}
        {activeTab === 'about' && (
          <BrioAboutPage
            onExploreTours={() => setActiveTab('domestic')}
            onContact={() => setActiveTab('contact')}
          />
        )}

        {/* VIEW: Contact Us */}
        {activeTab === 'contact' && <BrioContactPage />}

        {/* VIEW: Policies (Terms, Privacy, Refund) */}
        {(activeTab === 'terms' || activeTab === 'privacy' || activeTab === 'refund') && (
          <BrioPoliciesPages
            policyType={activeTab as any}
            onBack={() => setActiveTab('home')}
          />
        )}

        {/* VIEW: Home Page */}
        {activeTab === 'home' && (
          <>
            {/* 3-slide Hero Slider with Explore Tours + Our Services + Search */}
            <BrioHeroSlider
              onExploreTours={() => setActiveTab('domestic')}
              onOurServices={() => setActiveTab('car-rentals')}
              onSearch={q => {
                setActiveTab('domestic');
              }}
            />

            {/* About Us Block (Best Travel Agency in Delhi, 4.9k happy travellers) */}
            <BrioAboutBlock onLearnMore={() => setActiveTab('about')} />

            {/* Domestic Tour Packages Carousel */}
            <BrioPackagesCarousel
              title="Domestic Tour Packages"
              subtitle="Scenic hill stations, royal palaces, coastal shores, and sacred Himalayan abodes."
              packages={DOMESTIC_PACKAGES}
              onSelectPackage={pkg => handleNavigate('package-detail', pkg.slug)}
              onViewAll={() => setActiveTab('domestic')}
              viewAllLabel="Explore All 30 Domestic Tours"
              badgeLabel="Incredible India"
              themeColor="teal"
            />

            {/* International Tour Packages Carousel */}
            <BrioPackagesCarousel
              title="International Tour Packages"
              subtitle="Hassle-free international holidays with swift visas and curated experiences."
              packages={INTERNATIONAL_PACKAGES}
              onSelectPackage={pkg => handleNavigate('package-detail', pkg.slug)}
              onViewAll={() => setActiveTab('international')}
              viewAllLabel="Explore All 15 Global Tours"
              badgeLabel="Around The World"
              themeColor="indigo"
            />

            {/* Most Popular Tours Grid (8 distinct cards with real titles, durations, starting prices) */}
            <BrioPopularTours
              onSelectPackage={pkg => handleNavigate('package-detail', pkg.slug)}
              onOpenBookingModal={handleOpenBookingModal}
            />

            {/* "A Simply Amazing Experience" Photo Gallery */}
            <BrioExperienceGallery />

            {/* Client Testimonials Slider */}
            <BrioTestimonialsSlider />

            {/* Reason to Choose Us (8 icon tiles) */}
            <BrioReasonToChoose />

            {/* SEO Text Section */}
            <BrioSeoSection />

            {/* Quick Enquiry Section */}
            <section className="py-16 sm:py-20 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                  <div className="text-center max-w-xl mx-auto mb-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
                      Get Quick Quote
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Poppins']">
                      Ready to Plan Your Next Journey?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-['Inter']">
                      Send us your travel requirements and our Delhi team will share a personalized itinerary and best price quote within 2 hours.
                    </p>
                  </div>

                  <BrioQuickEnquiryForm compact={false} />
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* 4. Footer */}
      <BrioFooter
        onNavigate={handleNavigate}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* 5. Booking Modal */}
      <BrioBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultTourTitle={bookingTourTitle}
      />
    </div>
  );
};
