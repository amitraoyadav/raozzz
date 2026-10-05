import React from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Sparkles } from 'lucide-react';
import { site74Config } from '../../config/site74Config';

interface Site74FooterProps {
  setActiveTab: (tab: string) => void;
  onBackToHub?: () => void;
  onOpenCallback: () => void;
  onOpenPlanning: () => void;
}

export const Site74Footer: React.FC<Site74FooterProps> = ({
  setActiveTab,
  onBackToHub,
  onOpenCallback,
  onOpenPlanning
}) => {
  const navigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#11100F] text-[#FAF8F5] border-t border-stone-800 pt-16 pb-12 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Top Action Banner */}
        <div className="bg-[#1C1A17] rounded-3xl p-8 sm:p-10 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold block">
              BEGIN YOUR JOURNEY
            </span>
            <h3 className="font-serif font-medium text-2xl sm:text-3xl text-white">
              Every detail planned with devotion &amp; grandeur.
            </h3>
            <p className="text-xs text-stone-300 max-w-lg">
              Explore property buyouts, auspicious muhurat availability, and bespoke culinary tastings with our Senior Wedding Specialists.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenCallback}
              className="px-6 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request a Callback
            </button>
            <button
              onClick={onOpenPlanning}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4B26F] via-[#C5A059] to-[#A37E36] hover:from-[#E2C78A] text-[#141210] font-bold text-xs uppercase tracking-widest transition-transform hover:scale-102 cursor-pointer shadow-md"
            >
              Start Planning Now →
            </button>
          </div>
        </div>

        {/* 4-Column Directory Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_repeat(3,1fr)] gap-10 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C5A059] flex items-center justify-center text-[#141210] font-serif font-bold text-sm">
                G
              </div>
              <span className="font-serif font-bold tracking-[0.2em] text-lg text-white uppercase">
                {site74Config.WORDMARK}
              </span>
            </div>

            <p className="font-serif italic text-sm text-stone-400 leading-relaxed max-w-xs">
              "Where Everlasting Vows Meet Timeless Grandeur. Curating India’s most magnificent royal palaces and coastal wedding resorts."
            </p>

            <div className="text-xs text-stone-400 space-y-1.5 pt-2 font-mono">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Toll-Free: {site74Config.TOLL_FREE}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{site74Config.EMAIL}</span>
              </p>
              <p className="flex items-center gap-2 text-stone-500">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{site74Config.ADDRESS}</span>
              </p>
            </div>

            {onBackToHub && (
              <div className="pt-3">
                <button
                  onClick={onBackToHub}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-700 hover:border-amber-400 bg-stone-900 text-xs font-mono text-stone-200 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to RaozSites Hub</span>
                </button>
              </div>
            )}
          </div>

          {/* Col 2: Destinations */}
          <div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-amber-400 block mb-4">
              Destinations
            </span>
            <ul className="space-y-2 text-xs text-stone-300">
              {['Goa Beach Resorts', 'Jaipur Royal Palaces', 'Udaipur Floating Lakes', 'Mussoorie Himalayan Ridges', 'Mumbai Seafront Ballrooms', 'Dubai Skyline & Desert'].map((d, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate('destinations')}
                    className="hover:text-amber-300 transition-colors text-left"
                  >
                    {d}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-amber-400 block mb-4">
              Bespoke Services
            </span>
            <ul className="space-y-2 text-xs text-stone-300">
              {[
                { name: 'Wedding Planning', tab: 'services' },
                { name: 'Master Cuisine & Banqueting', tab: 'services' },
                { name: 'Designer Décor & Lighting', tab: 'services' },
                { name: 'Bridal Suite & Wellness Spa', tab: 'services' },
                { name: 'Guest Concierge & Transfers', tab: 'services' },
                { name: 'Entertainment & Celebrity Artists', tab: 'services' },
                { name: 'Inspiration Photo Gallery', tab: 'gallery' }
              ].map((s, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate(s.tab)}
                    className="hover:text-amber-300 transition-colors text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Experience & Legal */}
          <div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-amber-400 block mb-4">
              Explore &amp; Legal
            </span>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => navigate('offers')} className="hover:text-amber-300 transition-colors">
                  Special Wedding Offers
                </button>
              </li>
              <li>
                <button onClick={() => navigate('honeymoon')} className="hover:text-amber-300 transition-colors">
                  Honeymoon Retreats
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-amber-300 transition-colors">
                  Global Concierge Desks
                </button>
              </li>
              <li>
                <button onClick={() => navigate('terms')} className="hover:text-amber-300 transition-colors">
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('privacy')} className="hover:text-amber-300 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('accessibility')} className="hover:text-amber-300 transition-colors">
                  Accessibility Statement
                </button>
              </li>
              <li>
                <button onClick={() => navigate('sitemap')} className="hover:text-amber-300 transition-colors">
                  HTML Directory / Sitemap
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <span>© {new Date().getFullYear()} {site74Config.BRAND_NAME}. All rights reserved.</span>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Placeholder Brand: {site74Config.PLACEHOLDER_BRAND}</span>
            <span>·</span>
            <span>24/7 Global Wedding Hotline</span>
          </div>
        </div>

        <p className="text-[11px] leading-relaxed text-stone-500 max-w-4xl font-sans">
          The {site74Config.BRAND_NAME} website, brand styling, photography curations, banquet layouts, multi-step planning engines, and all associated intellectual property are configured centrally under {site74Config.BRAND_NAME}. Recreated with reverence for world-class luxury wedding hospitality.
        </p>
      </div>
    </footer>
  );
};

export default Site74Footer;
