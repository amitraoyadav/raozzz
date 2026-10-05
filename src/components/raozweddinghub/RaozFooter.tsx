import React from 'react';
import { ArrowLeft, Heart, Shield, Globe } from 'lucide-react';
import { raozWeddingHubConfig } from '../../config/raozWeddingHubConfig';

interface RaozFooterProps {
  setActiveTab: (tab: string) => void;
  onBackToHub?: () => void;
}

export const RaozFooter: React.FC<RaozFooterProps> = ({ setActiveTab, onBackToHub }) => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E8DFD3] px-6 py-14 md:py-20 text-[#1F1B16]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Reassurance Banner */}
        <div className="text-center font-mono text-[11px] tracking-[0.1em] uppercase text-[#8A7B6E] pb-10 border-b border-[#E8DFD3]">
          No ads · No vendor pressure · No hidden fees · No automatic renewals
        </div>

        {/* 4-Column Navigation Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_repeat(3,1fr)] gap-10 md:gap-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#A85C3D] flex items-center justify-center text-white font-serif font-bold text-xs">
                RH
              </div>
              <span className="font-serif font-medium text-xl tracking-tight text-[#1F1B16]">
                Raoz Wedding Hub
              </span>
            </div>
            <p className="font-serif italic text-sm text-[#7A6E62] max-w-xs leading-relaxed">
              Destination wedding planning, in one calm place. For couples, planners, and guests.
            </p>

            {onBackToHub && (
              <div className="pt-2">
                <button
                  onClick={onBackToHub}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D5C9B8] hover:border-[#1F1B16] bg-white text-xs font-medium text-[#1F1B16] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to RaozSites Hub</span>
                </button>
              </div>
            )}
          </div>

          {/* Explore Col */}
          <div>
            <span className="font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-[#A85C3D] block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs text-[#52483E]">
              <li>
                <button
                  onClick={() => { setActiveTab('couples-destination'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Couples Destination (Afar)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('couples-local'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Couples Local (Here)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('for-guests'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Guest Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('for-planners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Planner Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Product Col */}
          <div>
            <span className="font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-[#A85C3D] block mb-4">
              Product
            </span>
            <ul className="space-y-2.5 text-xs text-[#52483E]">
              <li>
                <button
                  onClick={() => { setActiveTab('pricing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Couples Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('pricing-planners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Planners Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('guides'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Destination Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <span className="font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-[#A85C3D] block mb-4">
              Company
            </span>
            <ul className="space-y-2.5 text-xs text-[#52483E]">
              <li>
                <button
                  onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  About Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Contact Concierge
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('partner-agreement'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Planner Agreement
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#A85C3D] transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Hairline divider & Bottom Row */}
        <div className="pt-8 border-t border-[#E8DFD3] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#7A6E62]">
          <span>© {new Date().getFullYear()} {raozWeddingHubConfig.SITE_NAME}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${raozWeddingHubConfig.EMAIL}`} className="hover:text-[#1F1B16] transition-colors lowercase font-sans">
              {raozWeddingHubConfig.EMAIL}
            </a>
            <span>·</span>
            <span>{raozWeddingHubConfig.PHONE_DISPLAY}</span>
          </div>
        </div>

        <p className="text-[11px] leading-relaxed text-[#948779] max-w-4xl">
          The {raozWeddingHubConfig.SITE_NAME} name, design system, user interfaces, multi-day coordination methods, and all associated software and intellectual property are the exclusive property of {raozWeddingHubConfig.LEGAL_NAME}. Designed with reverence for human connection and timeless celebration.
        </p>
      </div>
    </footer>
  );
};

export default RaozFooter;
