import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Flame,
  Star,
  Quote,
  Instagram,
  Crown,
  Disc,
  Volume2,
  Calendar,
  CheckCircle2,
  Phone,
  Clock,
  MapPin
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';
import {
  EVENTS_DATA,
  GALLERY_ITEMS,
  CLUB_PILLARS,
  BLOGS_DATA,
  FAQS_DATA,
  TESTIMONIALS_DATA,
  FRANCHISE_TIERS
} from '../../data/site77Data';
import { Site77Navbar } from './Site77Navbar';
import { Site77Hero } from './Site77Hero';
import { Site77AboutExperience } from './Site77AboutExperience';
import { Site77Events } from './Site77Events';
import { Site77VipTables } from './Site77VipTables';
import { Site77Booking } from './Site77Booking';
import { Site77Gallery } from './Site77Gallery';
import { Site77Franchise } from './Site77Franchise';
import { Site77Blogs } from './Site77Blogs';
import { Site77ContactFaq } from './Site77ContactFaq';
import { Site77Footer } from './Site77Footer';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';

interface Site77AppProps {
  onBackToHub?: () => void;
}

export const Site77App: React.FC<Site77AppProps> = ({ onBackToHub }) => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [preselectedTableId, setPreselectedTableId] = useState<string | undefined>(undefined);
  const [preselectedEventTitle, setPreselectedEventTitle] = useState<string | undefined>(undefined);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${site77Config.BRAND_NAME} | ${site77Config.TAGLINE}`;
  }, [currentView]);

  const handleOpenBooking = (tableIdOrEventTitle?: string) => {
    if (tableIdOrEventTitle) {
      if (tableIdOrEventTitle.startsWith('table-')) {
        setPreselectedTableId(tableIdOrEventTitle);
      } else {
        setPreselectedEventTitle(tableIdOrEventTitle);
      }
    }
    setCurrentView('booking');
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-white selection:bg-[#D4AF37] selection:text-black font-sans">
      {/* Floating Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="site-77-nocturna-club" />

      {/* Main Global Navigation */}
      <Site77Navbar
        currentView={currentView}
        onNavigate={view => setCurrentView(view)}
        onOpenBooking={handleOpenBooking}
      />

      {/* View Routing Engine */}
      <main>
        {/* HOMEPAGE VIEW */}
        {currentView === 'home' && (
          <>
            {/* 1. Full-screen Cinematic Hero */}
            <Site77Hero
              onOpenBooking={() => handleOpenBooking()}
              onExploreEvents={() => setCurrentView('events')}
              onExploreExperience={() => setCurrentView('about-us')}
            />

            {/* 2. Intro / Club Identity & Sound Architecture */}
            <Site77AboutExperience
              onOpenBooking={() => handleOpenBooking()}
              onExploreGallery={() => setCurrentView('gallery')}
            />

            {/* 3. Upcoming Events & Headline DJs */}
            <Site77Events onOpenBooking={handleOpenBooking} />

            {/* 4. VIP Table Tiers & Bottle Privileges */}
            <Site77VipTables onSelectTableForBooking={handleOpenBooking} />

            {/* 5. Interactive Table Reservation Engine */}
            <Site77Booking
              initialTableId={preselectedTableId}
              initialEventTitle={preselectedEventTitle}
            />

            {/* 6. Gallery & Lightbox Mosaic */}
            <Site77Gallery onOpenBooking={() => handleOpenBooking()} />

            {/* 7. Verified Client & Celebrity Reviews */}
            <section className="py-20 bg-[#0A0C10] border-t border-b border-white/5 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
                    <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    <span>CLIENT & GUEST ACCLAIM</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white uppercase tracking-wider">
                    TESTIMONIALS OF THE NIGHT
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TESTIMONIALS_DATA.map(t => (
                    <div
                      key={t.id}
                      className="p-6 rounded-2xl bg-[#0E1015] border border-white/10 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-1 text-[#D4AF37]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                          ))}
                        </div>
                        <Quote className="w-6 h-6 text-[#D4AF37]/40" />
                        <p className="text-xs text-gray-300 font-light leading-relaxed italic">
                          "{t.quote}"
                        </p>
                      </div>

                      <div className="border-t border-white/10 pt-4 mt-6">
                        <h4 className="font-serif text-sm font-bold text-white uppercase">
                          {t.name}
                        </h4>
                        <p className="text-[10px] font-mono text-[#D4AF37]">
                          {t.occasion} · {t.city}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. Franchise Opportunities Teaser */}
            <Site77Franchise />

            {/* 9. Blogs / Nightlife Journal */}
            <Site77Blogs onOpenBooking={() => handleOpenBooking()} />

            {/* 10. Venue Location & FAQ */}
            <Site77ContactFaq />

            {/* 11. Social / Instagram Live Wall */}
            <section className="py-16 bg-[#050608] border-t border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
                  <Instagram className="w-4 h-4" />
                  <span>TAG US @NOCTURNACLUBGOA</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wider mb-8">
                  NIGHTLIFE MOMENTS CAPTURED
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
                  {GALLERY_ITEMS.slice(0, 6).map((g, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-white/10"
                    >
                      <img
                        src={g.imageUrl}
                        alt="Instagram moment"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={site77Config.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-[#D4AF37]/50 text-[#F3E5AB] hover:bg-[#D4AF37] hover:text-black text-xs font-mono uppercase tracking-wider transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow on Instagram @nocturnaclubgoa</span>
                </a>
              </div>
            </section>
          </>
        )}

        {/* DEDICATED ABOUT US PAGE */}
        {currentView === 'about-us' && (
          <div>
            <div className="bg-[#0A0C10] border-b border-white/10 py-16 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  DISCOVER THE VISION
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white uppercase tracking-wide mb-4">
                  ABOUT {site77Config.BRAND_NAME}
                </h1>
                <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
                  Goa’s multi-level waterfront sanctuary engineered for pure acoustic transcendence,
                  3D kinetic visual architecture, and white-glove VIP hospitality.
                </p>
              </div>
            </div>
            <Site77AboutExperience
              onOpenBooking={() => handleOpenBooking()}
              onExploreGallery={() => setCurrentView('gallery')}
            />
            <Site77VipTables onSelectTableForBooking={handleOpenBooking} />
          </div>
        )}

        {/* DEDICATED EVENTS PAGE */}
        {currentView === 'events' && (
          <div>
            <div className="bg-[#0A0C10] border-b border-white/10 py-16 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  CLUB SCHEDULE & ARTISTS
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white uppercase tracking-wide mb-4">
                  UPCOMING EVENTS
                </h1>
                <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
                  From international festival DJs to Goa’s grandest Bollywood and underground techno nights,
                  reserve your entry and VIP tables early.
                </p>
              </div>
            </div>
            <Site77Events onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {/* DEDICATED BOOKING PAGE */}
        {currentView === 'booking' && (
          <div>
            <div className="bg-[#0A0C10] border-b border-white/10 py-16 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  VIP CONCIERGE DESK
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white uppercase tracking-wide mb-4">
                  BOOK A TABLE / GUEST LIST
                </h1>
                <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
                  Instant table confirmation with 100% redeemable spend credit. Exclusive mezzanine, 
                  stage-side booths, and waterfront river cabanas.
                </p>
              </div>
            </div>
            <Site77Booking
              initialTableId={preselectedTableId}
              initialEventTitle={preselectedEventTitle}
            />
            <Site77VipTables onSelectTableForBooking={handleOpenBooking} />
          </div>
        )}

        {/* DEDICATED GALLERY PAGE */}
        {currentView === 'gallery' && (
          <div>
            <div className="bg-[#0A0C10] border-b border-white/10 py-16 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  THE VISUAL ARCHIVE
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white uppercase tracking-wide mb-4">
                  NIGHTLIFE GALLERY
                </h1>
                <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
                  Experience the energy of our dance floor, 120-beam kinetic laser rig, and VIP mezzanine suites.
                </p>
              </div>
            </div>
            <Site77Gallery onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {/* DEDICATED FRANCHISE PAGE */}
        {currentView === 'franchise' && (
          <div>
            <div className="bg-[#0A0C10] border-b border-white/10 py-16 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  EXPANSION OPPORTUNITY
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white uppercase tracking-wide mb-4">
                  NOCTURNA FRANCHISE
                </h1>
                <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
                  Bring India’s premier luxury nightclub experience to high-net-worth metro markets in India, Dubai, and the UK.
                </p>
              </div>
            </div>
            <Site77Franchise />
          </div>
        )}

        {/* DEDICATED BLOGS PAGE */}
        {currentView === 'blogs' && (
          <div>
            <div className="bg-[#0A0C10] border-b border-white/10 py-16 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  STORIES & PERSPECTIVES
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white uppercase tracking-wide mb-4">
                  NIGHTLIFE JOURNAL
                </h1>
                <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
                  Insights into luxury party culture, sound system engineering, and cocktail craftsmanship.
                </p>
              </div>
            </div>
            <Site77Blogs onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {/* DEDICATED CONTACT US PAGE */}
        {currentView === 'contact-us' && (
          <div>
            <div className="bg-[#0A0C10] border-b border-white/10 py-16 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  LOCATION & ASSISTANCE
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white uppercase tracking-wide mb-4">
                  CONTACT NOCTURNA
                </h1>
                <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
                  Baga Creek Promenade, Arpora, North Goa. Connect with our VIP Concierge for personalized bookings.
                </p>
              </div>
            </div>
            <Site77ContactFaq />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Site77Footer
        onNavigate={view => setCurrentView(view)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
};
