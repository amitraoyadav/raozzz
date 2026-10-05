import React from 'react';
import { UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

interface UtsavFooterProps {
  onNavClick: (tab: string) => void;
  onOpenCityModal: () => void;
  onOpenCalculator: () => void;
  onOpenConsultationModal: () => void;
}

export const UtsavFooter: React.FC<UtsavFooterProps> = ({
  onNavClick,
  onOpenCityModal,
  onOpenCalculator,
  onOpenConsultationModal
}) => {
  return (
    <footer className="bg-[#140809] text-white border-t border-[#2D1515]">
      {/* Upper Footer CTA Strip */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#200B0D] via-[#140809] to-[#200B0D] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF8D7B]">
              Experience The Future of Wedding Planning
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Ready to See Your Wedding in 3D?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
              Book a complimentary venue site recce & design consultation with our senior designers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
            >
              Instant Cost Calculator
            </button>
            <button
              onClick={onOpenConsultationModal}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] shadow-lg shadow-[#E05A47]/30 transition-all hover:scale-105"
            >
              Book Free 3D Recce
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E05A47] to-[#B83827] flex items-center justify-center text-white font-serif font-bold text-xl shadow-md">
                U
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                UTSAV<span className="font-sans font-light tracking-widest text-[#FF8D7B] text-lg ml-1">LUXE</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              India’s premier tech-enabled full-stack wedding planning & experiential decor platform. 
              Photorealistic 3D renders, in-house cold chain floral supply, and transparent pricing.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div>📞 <a href={`tel:${UTSAV_BUSINESS_CONFIG.phoneRaw}`} className="hover:text-white font-semibold">{UTSAV_BUSINESS_CONFIG.phone}</a></div>
              <div>✉️ <a href={`mailto:${UTSAV_BUSINESS_CONFIG.email}`} className="hover:text-white">{UTSAV_BUSINESS_CONFIG.email}</a></div>
              <div>🏢 {UTSAV_BUSINESS_CONFIG.headquarters}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-[#FF8D7B] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-[#FF8D7B] transition-colors">
                  Services & Inclusions
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('lookbook')} className="hover:text-[#FF8D7B] transition-colors">
                  3D Design Lookbook
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('calculator')} className="hover:text-[#FF8D7B] transition-colors">
                  Cost Estimator
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('real-weddings')} className="hover:text-[#FF8D7B] transition-colors">
                  Real Wedding Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('venues')} className="hover:text-[#FF8D7B] transition-colors">
                  Curated Luxury Venues
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('packages')} className="hover:text-[#FF8D7B] transition-colors">
                  Pricing Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('contact')} className="hover:text-[#FF8D7B] transition-colors">
                  Contact & Book Recce
                </button>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Sacred Mandap Architecture</li>
              <li>Concert Sangeet Stages</li>
              <li>Haldi & Mehendi Canopies</li>
              <li>Turnkey 48-Page Timelines</li>
              <li>Bride & Groom Shadow Squad</li>
              <li>Licensed 4K Aerial Drones</li>
              <li>Live Sufi & Bollywood DJs</li>
              <li>Regional Awadhi & Live Banquets</li>
            </ul>
          </div>

          {/* Studio Hubs */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Permanent Studios
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {UTSAV_BUSINESS_CONFIG.cities.map(c => (
                <li key={c.id}>
                  <button
                    onClick={onOpenCityModal}
                    className="hover:text-white flex items-center justify-between w-full text-left"
                  >
                    <span>{c.name}</span>
                    <span className="text-[10px] text-stone-500 font-mono">({c.weddingsHosted}+)</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {UTSAV_BUSINESS_CONFIG.siteName}. All rights reserved. 
            <span className="ml-2 px-2 py-0.5 rounded bg-white/10 text-stone-400 font-mono text-[10px]">
              Website #69 · RaozSite Catalog
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Zero-Markup Guarantee</span>
            <span>•</span>
            <span>3D CAD Verification</span>
            <span>•</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
