import React from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';

interface GlobalFooterProps {
  setActiveTab: (tab: string) => void;
  onOpenEnquiry: () => void;
  onOpenSearch: () => void;
}

export const GlobalFooter: React.FC<GlobalFooterProps> = ({
  setActiveTab,
  onOpenEnquiry,
  onOpenSearch
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0B0A] text-stone-300 font-sans border-t border-stone-800">
      {/* Pre-Footer Action Banner */}
      <div className="bg-gradient-to-r from-[#1E1812] via-[#2A2016] to-[#17130F] py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B]">
            Limited Availability
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            We Take On {globalPlannerssConfig.ANNUAL_CAP} Weddings a Year.
          </h2>
          <p className="text-stone-300 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every celebration receives personal attention from our full-time directorate. Check your wedding date to see if your window is still open.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-[#B08D57] via-[#C19A4B] to-[#9C7B4E] text-[#171410] font-serif font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition"
            >
              {globalPlannerssConfig.CTAS.checkDate}
            </button>
            <a
              href={`https://wa.me/${globalPlannerssConfig.WHATSAPP}?text=Hi%20Global%20Plannerss,%20we%20would%20love%20to%20discuss%20our%20wedding%20plans.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded bg-stone-900 border border-stone-700 text-stone-200 hover:text-white text-xs uppercase tracking-wider font-semibold hover:bg-stone-800 transition text-center"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C19A4B]/60 flex items-center justify-center bg-gradient-to-br from-[#2D241A] to-[#171410] text-[#E5D7B7] font-serif font-bold text-sm tracking-wider">
                GP
              </div>
              <div>
                <span className="font-serif text-xl tracking-[0.16em] font-semibold text-white block">
                  {globalPlannerssConfig.SITE_NAME}
                </span>
                <span className="text-[10px] tracking-[0.25em] font-sans uppercase text-[#C19A4B] font-medium block">
                  Luxury Wedding Planners
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              Luxury wedding planning company founded in {globalPlannerssConfig.ESTABLISHED_YEAR}. Capped at {globalPlannerssConfig.ANNUAL_CAP} weddings a year so every family is present, not managing. Published transparent collections from ₹2.5L.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1 font-sans">
              <p className="text-white font-medium">{globalPlannerssConfig.ADDRESS}</p>
              <p>Direct: <a href={`tel:${globalPlannerssConfig.PHONE.replace(/\s+/g, '')}`} className="text-stone-300 hover:text-[#C19A4B] transition">{globalPlannerssConfig.PHONE_DISPLAY}</a></p>
              <p>Email: <a href={`mailto:${globalPlannerssConfig.EMAIL}`} className="text-stone-300 hover:text-[#C19A4B] transition">{globalPlannerssConfig.EMAIL}</a></p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-xs font-serif uppercase tracking-widest text-[#C19A4B] font-semibold mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('weddings')} className="hover:text-white transition">
                  Our Celebrations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-white transition">
                  Our Story &amp; Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition">
                  What We Do
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('destinations')} className="hover:text-white transition">
                  Destinations &amp; Venues
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('journal')} className="hover:text-white transition">
                  Wedding Journal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition">
                  Contact &amp; Dates
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Planning Tools & Pricing */}
          <div>
            <p className="text-xs font-serif uppercase tracking-widest text-[#C19A4B] font-semibold mb-4">
              Planning Tools
            </p>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('calculator')} className="hover:text-[#C19A4B] text-white font-medium transition">
                  Budget Calculator →
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-white transition">
                  Muhurat Dates 2026–27
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-white transition">
                  10 Questions Checklist
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing-planning')} className="hover:text-white transition">
                  Full Planning Collections
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing-coordination')} className="hover:text-white transition">
                  Wedding-Day Coordination
                </button>
              </li>
              <li>
                <button onClick={onOpenSearch} className="hover:text-white transition text-[#C19A4B]">
                  Search Site Archive ⌕
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Destinations */}
          <div>
            <p className="text-xs font-serif uppercase tracking-widest text-[#C19A4B] font-semibold mb-4">
              Destinations
            </p>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('destinations')} className="hover:text-white transition">
                  Goa (North &amp; South)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('destinations')} className="hover:text-white transition">
                  Udaipur (Lake Pichola)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('destinations')} className="hover:text-white transition">
                  Jaipur (Royal Fortresses)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('destinations')} className="hover:text-white transition">
                  Dubai &amp; Emirates
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('destinations')} className="hover:text-white transition">
                  Delhi NCR &amp; Gurugram
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('destinations')} className="hover:text-white transition">
                  Rishikesh &amp; Jim Corbett
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Presence Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[#C19A4B] font-serif uppercase tracking-wider text-[11px]">Presence Hubs:</span>
            {globalPlannerssConfig.PRESENCE.map((p, i) => (
              <span key={i} className="text-stone-400">
                {p} {i < globalPlannerssConfig.PRESENCE.length - 1 && '·'}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <a href={globalPlannerssConfig.INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-[#C19A4B] transition">
              Instagram
            </a>
            <a href={globalPlannerssConfig.FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-[#C19A4B] transition">
              Facebook
            </a>
            <a href={globalPlannerssConfig.YOUTUBE} target="_blank" rel="noreferrer" className="hover:text-[#C19A4B] transition">
              YouTube
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-stone-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 font-sans text-center sm:text-left">
          <p>
            © {currentYear} {globalPlannerssConfig.LEGAL_NAME}. All rights reserved. 
            Celebrating Love, Life &amp; You.
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-stone-400">Website #72 in RaoSitez Enterprise Catalog</span>
            <span>·</span>
            <button onClick={() => handleNav('story')} className="hover:text-stone-300">
              Terms &amp; Disclosures
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
