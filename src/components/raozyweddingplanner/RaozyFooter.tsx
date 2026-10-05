import React from 'react';
import { raozyConfig } from '../../config/raozyWeddingConfig';

interface RaozyFooterProps {
  onNavClick: (tab: string) => void;
  onOpenConsultationModal: () => void;
  onOpenCalculator: () => void;
}

export const RaozyFooter: React.FC<RaozyFooterProps> = ({
  onNavClick,
  onOpenConsultationModal,
  onOpenCalculator
}) => {
  return (
    <footer className="bg-[#0B0908] text-stone-400 font-sans border-t border-stone-800 text-xs">
      {/* Upper Footer: Brand & Studio Network */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#DFC082]/60 flex items-center justify-center bg-gradient-to-br from-[#2A231C] to-[#171410] text-[#DFC082] font-serif font-bold text-sm tracking-wider">
                {raozyConfig.LOGO.monogram}
              </div>
              <div>
                <div className="text-lg font-serif tracking-[0.2em] font-semibold text-white">
                  {raozyConfig.SITE_NAME}
                </div>
                <div className="text-[9px] tracking-[0.3em] font-sans uppercase text-[#DFC082]">
                  {raozyConfig.LOGO.subtext}
                </div>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              {raozyConfig.SUB_TAGLINE}. Operating our own 25,000 sq.ft. fabrication atelier in Gurugram with direct farm florals and 100% open-book management fees.
            </p>

            <div className="pt-2 flex items-center gap-3 text-stone-300">
              <a
                href={raozyConfig.SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 hover:border-[#DFC082] hover:text-[#DFC082] flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <span>IG</span>
              </a>
              <a
                href={raozyConfig.SOCIAL_LINKS.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 hover:border-[#DFC082] hover:text-[#DFC082] flex items-center justify-center transition"
                aria-label="Pinterest"
              >
                <span>PIN</span>
              </a>
              <a
                href={raozyConfig.SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 hover:border-[#DFC082] hover:text-[#DFC082] flex items-center justify-center transition"
                aria-label="YouTube"
              >
                <span>YT</span>
              </a>
              <a
                href={raozyConfig.SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 hover:border-[#DFC082] hover:text-[#DFC082] flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <span>IN</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-serif uppercase tracking-widest text-xs font-semibold">
              Celebration Hub
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-[#DFC082] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('portfolio')} className="hover:text-[#DFC082] transition">
                  60-Weddings Lookbook
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-[#DFC082] transition">
                  Full Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('destinations')} className="hover:text-[#DFC082] transition">
                  Destinations &amp; Venues
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('atelier')} className="hover:text-[#DFC082] transition">
                  In-House Atelier (25k sq ft)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('calculator')} className="hover:text-[#DFC082] transition">
                  Cost Estimator
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('real-weddings')} className="hover:text-[#DFC082] transition">
                  Real Stories &amp; Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('contact')} className="hover:text-[#DFC082] transition">
                  Check Dates
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif uppercase tracking-widest text-xs font-semibold">
              Specialized Pillars
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>• Turnkey Wedding Planning &amp; Direction</li>
              <li>• In-House Structural &amp; Floral Decor</li>
              <li>• 3D CAD Virtual Blueprints</li>
              <li>• GM-Tier Hotel &amp; Palace Buyouts</li>
              <li>• VIP Airport Desks &amp; Fleet Logistics</li>
              <li>• A-List Artists &amp; Concert Audio</li>
              <li>• F&amp;B Architecture &amp; Mixology</li>
              <li>• 15-Day Emergency Takeovers</li>
            </ul>
          </div>

          {/* Studios & Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif uppercase tracking-widest text-xs font-semibold">
              Studios &amp; Direct Lines
            </h4>
            <p className="text-stone-300 leading-relaxed">
              <strong className="text-white block">Headquarters Atelier:</strong>
              {raozyConfig.ADDRESS}
            </p>
            <div className="space-y-1 pt-2 border-t border-stone-800">
              <div>
                Director Desk: <a href={`tel:${raozyConfig.PHONE.replace(/\s+/g, '')}`} className="text-[#DFC082] hover:underline">{raozyConfig.PHONE_DISPLAY}</a>
              </div>
              <div>
                VIP WhatsApp: <span className="text-emerald-400">{raozyConfig.WHATSAPP_DISPLAY}</span>
              </div>
              <div>
                Concierge: <a href={`mailto:${raozyConfig.EMAIL}`} className="text-stone-300 hover:underline">{raozyConfig.EMAIL}</a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="w-full py-2.5 rounded bg-[#DFC082]/15 hover:bg-[#DFC082] text-[#DFC082] hover:text-[#171410] border border-[#DFC082]/40 text-xs font-serif font-bold uppercase tracking-wider transition"
              >
                Book Director Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Branch Network Pills */}
        <div className="mt-12 pt-8 border-t border-stone-800/80">
          <div className="text-[10px] uppercase font-serif text-[#DFC082] tracking-widest mb-3 text-center sm:text-left">
            Regional Experience Centers &amp; Desks:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-[11px] text-stone-400">
            {raozyConfig.BRANCHES.map((branch, index) => (
              <div key={index} className="p-2 rounded bg-stone-900/60 border border-stone-800">
                <span className="font-semibold text-stone-200 block truncate">{branch.city}</span>
                <span className="text-[10px] text-stone-500 block truncate">{branch.address}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#070605] py-6 border-t border-stone-800/60 text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <div>
            © {new Date().getFullYear()} {raozyConfig.LEGAL_NAME}. All rights reserved.
            <span className="mx-2">·</span>
            Bespoke Luxury Wedding Atelier &amp; Production House.
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-700 text-stone-300 font-serif">
              Website #71 · RaoSitez Collection
            </span>
            <span className="text-stone-400">Strictly Capped at 60 Weddings / Year</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
