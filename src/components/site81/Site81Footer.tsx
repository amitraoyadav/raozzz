import React, { useState } from 'react';
import {
  ArrowUp,
  Mail,
  Send,
  CheckCircle2,
  Globe,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Twitter,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { site81Config } from '../../config/site81Config';

interface Site81FooterProps {
  onNavigate: (view: string, propertySlugOrId?: string) => void;
  onOpenSellModal: () => void;
  currency: string;
  onSelectCurrency: (code: string) => void;
}

export const Site81Footer: React.FC<Site81FooterProps> = ({
  onNavigate,
  onOpenSellModal,
  currency,
  onSelectCurrency
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800 text-xs font-light">
      {/* 1. Global Newsletter & Concierge Subscription Strip */}
      <div className="border-b border-neutral-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-amber-400 block mb-1">
              Private Client Intelligence
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Receive Off-Market Global Portfolios
            </h3>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              Curated architectural acquisitions, private island listings, and macroeconomic property reviews dispatched weekly.
            </p>
          </div>

          <div className="w-full max-w-md">
            {newsletterSuccess ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 rounded-lg text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Private briefings subscription confirmed. Check your inbox for the inaugural folio.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter private client email..."
                  className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-700 rounded text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer shrink-0 shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main Sitemap Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Col 1: Brand & Headquarters */}
          <div className="col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-[0.25em] text-white uppercase font-light">
                {site81Config.BRAND_NAME}
              </span>
              <span className="text-[9px] tracking-[0.3em] text-neutral-500 uppercase -mt-0.5">
                The World’s Premier Luxury Marketplace
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed pr-6">
              Valtierra is the global marketplace connecting discerning international buyers with the world’s finest residences, supercars, yachts, and private aircraft.
            </p>

            <div className="space-y-1.5 pt-2 text-neutral-400 font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>New York · Paris · Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{site81Config.PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{site81Config.EMAIL}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={site81Config.SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={site81Config.SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={site81Config.SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={site81Config.SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Luxury Categories */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Marketplace
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Real Estate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Supercars
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Superyachts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Private Jets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Fine Watches
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  High Jewelry
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Prime Countries */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Top Countries
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  United States
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  France &amp; Côte d’Azur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Italy &amp; Como
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Switzerland &amp; Alps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  United Arab Emirates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Spain &amp; Balearics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Prime Cities */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Top Enclaves
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Saint-Tropez
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Lake Como
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Beverly Hills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Palm Jumeirah
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mayfair London
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Paris 8th &amp; 16th
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Services */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Valtierra
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Journal
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSellModal}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  List Your Property
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSellModal}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Broker Syndication
                </button>
              </li>
              <li>
                <span className="text-neutral-500">iOS &amp; Android App</span>
              </li>
              <li>
                <span className="text-neutral-500">Private Office Terms</span>
              </li>
              <li>
                <span className="text-neutral-500">Privacy &amp; Security</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Global Offices Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] text-neutral-400">
          <div>
            <span className="font-semibold text-white block uppercase tracking-wider mb-0.5">
              New York Directorate
            </span>
            <span>{site81Config.GLOBAL_HEADQUARTERS}</span>
          </div>
          <div>
            <span className="font-semibold text-white block uppercase tracking-wider mb-0.5">
              Paris European Office
            </span>
            <span>{site81Config.EUROPE_OFFICE}</span>
          </div>
          <div>
            <span className="font-semibold text-white block uppercase tracking-wider mb-0.5">
              Middle East &amp; Asia Bureau
            </span>
            <span>{site81Config.ASIA_OFFICE}</span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Legal & Currency Bar */}
      <div className="border-t border-neutral-900 py-6 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-neutral-500">
              © {new Date().getFullYear()} {site81Config.LEGAL_NAME}. All international rights reserved.
            </span>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <span className="hidden sm:inline text-neutral-500 font-mono">
              Equal Housing Opportunity · Member of International Luxury Real Estate Federation
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer font-mono text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
