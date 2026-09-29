import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Globe, Sparkles, X, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface ReferenceSiteInfo {
  id: string;
  num: number;
  name: string;
  originalUrl: string;
  slug: string;
  referencePath: string;
  concept: string;
  themeColor: string;
  badge: string;
}

export const ALL_15_REFERENCE_SITES: ReferenceSiteInfo[] = [
  {
    id: '2d-cafe',
    num: 1,
    name: '2D Cafe',
    originalUrl: 'https://2dcafe.in/',
    slug: '2d-cafe',
    referencePath: '/references/2d-cafe/',
    concept: '2D Sketchbook & Comic Monochrome Cafe',
    themeColor: '#0c0c0c',
    badge: 'Sketchbook Comic'
  },
  {
    id: 'blue-tokai',
    num: 2,
    name: 'Blue Tokai Coffee',
    originalUrl: 'https://bluetokaicoffee.com/',
    slug: 'blue-tokai',
    referencePath: '/references/blue-tokai/',
    concept: 'Single Estate Indian Specialty Coffee',
    themeColor: '#002B49',
    badge: 'Estate Roasters'
  },
  {
    id: 'third-wave',
    num: 3,
    name: 'Third Wave Coffee',
    originalUrl: 'https://www.thirdwavecoffeeroasters.com/',
    slug: 'third-wave',
    referencePath: '/references/third-wave/',
    concept: '100% Arabica Roastery & Contemporary Cafes',
    themeColor: '#C86D3B',
    badge: '100% Arabica'
  },
  {
    id: 'cafe-coffee-day',
    num: 4,
    name: 'Cafe Coffee Day (CCD)',
    originalUrl: 'https://www.cafecoffeeday.com/',
    slug: 'cafe-coffee-day',
    referencePath: '/references/cafe-coffee-day/',
    concept: 'A Lot Can Happen Over Coffee — Heritage Icon',
    themeColor: '#960E18',
    badge: 'Indian Icon'
  },
  {
    id: 'koffee-hut',
    num: 5,
    name: 'Koffee Hut (Sweet Coffee)',
    originalUrl: 'https://koffeehut.in/',
    slug: 'sweet-coffee',
    referencePath: '/references/koffee-hut/',
    concept: 'Cozy Artisanal Pastry & Bakery Cafe',
    themeColor: '#5c3a21',
    badge: 'Artisanal Bakery'
  },
  {
    id: 'tim-wendelboe',
    num: 6,
    name: 'Tim Wendelboe',
    originalUrl: 'https://timwendelboe.no/',
    slug: 'brew-bloom-tim-wendelboe',
    referencePath: '/references/tim-wendelboe/',
    concept: 'Nordic Light-Roast & Farm Direct Trade (Oslo)',
    themeColor: '#b91c1c',
    badge: 'Nordic Light Roast'
  },
  {
    id: 'onyx-coffee-lab',
    num: 7,
    name: 'Onyx Coffee Lab EU',
    originalUrl: 'https://onyxcoffeelab.eu/',
    slug: 'brew-bloom-onyx',
    referencePath: '/references/onyx-coffee-lab/',
    concept: 'Never Settle & Radical Transparency (Amsterdam)',
    themeColor: '#c5a059',
    badge: 'Radical Transparency'
  },
  {
    id: 'city-brew',
    num: 8,
    name: 'City Brew Coffee',
    originalUrl: 'https://citybrew.com/',
    slug: 'brew-bloom-city-brew',
    referencePath: '/references/city-brew/',
    concept: 'Mountain West Signature Drinks & Roastery',
    themeColor: '#1b4332',
    badge: 'Mountain West'
  },
  {
    id: 'gregorys-coffee',
    num: 9,
    name: 'Gregorys Coffee',
    originalUrl: 'https://gregoryscoffee.com/',
    slug: 'brew-bloom-gregorys',
    referencePath: '/references/gregorys-coffee/',
    concept: 'See Coffee Differently & Cold Brew NYC',
    themeColor: '#e11d48',
    badge: 'NYC High-Energy'
  },
  {
    id: 'rubys-cafe',
    num: 10,
    name: "Ruby's Cafe",
    originalUrl: 'https://rubyscafe.com/',
    slug: 'rubys-cafe',
    referencePath: '/references/rubys-cafe/',
    concept: 'Australian All-Day Brunch & Ricotta Hotcakes',
    themeColor: '#2b2b2b',
    badge: 'Aussie All-Day'
  },
  {
    id: 'brewed-coffee-shop',
    num: 11,
    name: 'Brewed Coffee Shop',
    originalUrl: 'https://brewedcoffeeshop.com/',
    slug: 'brewed-coffee-shop',
    referencePath: '/references/brewed-coffee-shop/',
    concept: 'Rhode Island Drive-Thrus & Frozen Awakenings',
    themeColor: '#3c2415',
    badge: 'Drive-Thru Roastery'
  },
  {
    id: 'greenberrys',
    num: 12,
    name: "Greenberry's Coffee Roasters",
    originalUrl: 'https://greenberrys.com/',
    slug: 'greenberrys',
    referencePath: '/references/greenberrys/',
    concept: 'Craft Hand-Roasted Coffee (Charlottesville, VA)',
    themeColor: '#1d3557',
    badge: 'Craft Roastery'
  },
  {
    id: 'mean-mug',
    num: 13,
    name: 'Mean Mug Coffeehouse',
    originalUrl: 'https://meanmugcoffee.com/',
    slug: 'mean-mug',
    referencePath: '/references/mean-mug/',
    concept: 'In-House Micro-Roaster & Scratch Bakery (TN)',
    themeColor: '#4a3525',
    badge: 'Micro-Roaster'
  },
  {
    id: 'revival-cafe',
    num: 14,
    name: 'Revival Cafe & Kitchen',
    originalUrl: 'https://www.revivalcafeandkitchen.com/',
    slug: 'revival-cafe',
    referencePath: '/references/revival-cafe/',
    concept: 'Boston Community Kitchen, Brioche & Craft Coffee',
    themeColor: '#2c3e50',
    badge: 'Boston Kitchen'
  },
  {
    id: 'subko',
    num: 15,
    name: 'Subko Coffee Roasters',
    originalUrl: 'https://subko.coffee/',
    slug: 'brew-bloom',
    referencePath: '/references/subko/',
    concept: 'From the Subcontinent — Specialty Pods & Bakes',
    themeColor: '#1e293b',
    badge: 'Subcontinent Craft'
  }
];

interface SwitcherProps {
  currentSiteId: string;
}

export const ReferenceSiteSwitcher: React.FC<SwitcherProps> = ({ currentSiteId }) => {
  const { setActiveView } = useApp();
  const [modalOpen, setModalOpen] = useState(false);

  const currentSite =
    ALL_15_REFERENCE_SITES.find(s => s.id === currentSiteId || s.slug === currentSiteId) ||
    ALL_15_REFERENCE_SITES[0];

  const handleSelectSite = (site: ReferenceSiteInfo) => {
    setModalOpen(false);
    setActiveView('site', site.slug);
  };

  return (
    <>
      <nav aria-label="Reference Website Switcher" className="bg-[#111111] text-white text-xs py-2 px-3 sm:px-4 border-b border-stone-800 flex flex-wrap items-center justify-between gap-2 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
            style={{ backgroundColor: currentSite.themeColor || '#10b981' }}
          />
          <span className="font-bold tracking-wide truncate max-w-[200px] xs:max-w-[320px] sm:max-w-none text-white font-mono text-[11px] sm:text-xs">
            WEBSITE {currentSite.num}/15: {currentSite.name.toUpperCase()} (Recreated as BREW & BLOOM)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Dropdown Modal Trigger */}
          <button
            onClick={() => setModalOpen(true)}
            className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-medium text-[11px] flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Switch Website (15 Sites)</span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
          </button>

          {/* Return to Dashboard */}
          <button
            onClick={() => setActiveView('dashboard')}
            className="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-black font-bold text-[11px] cursor-pointer transition-colors"
          >
            Dashboard
          </button>
        </div>
      </nav>

      {/* 15 Reference Websites Picker Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#18181b] text-white border border-stone-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>15 Complete Faithful Website Recreations</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  BREW & BLOOM — Reference Website Directory
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  Each website maintains its own independent UI/UX, layouts, color palette, animations, and functionality.
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid of 15 Websites */}
            <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ALL_15_REFERENCE_SITES.map(s => {
                const isSelected = s.id === currentSite.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSelectSite(s)}
                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                        : 'bg-[#202024] border-stone-800 hover:border-stone-700 hover:bg-[#27272b] text-stone-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-800 text-stone-400">
                          #{s.num}
                        </span>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${s.themeColor}22`,
                            color: isSelected ? '#fbbf24' : '#e4e4e7',
                            border: `1px solid ${s.themeColor}44`
                          }}
                        >
                          {s.badge}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-white flex items-center justify-between">
                        <span>{s.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        {s.concept}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-500">
                      <span className="font-mono text-amber-400/80">{s.referencePath}</span>
                      <span className="hover:underline flex items-center gap-1 text-stone-400">
                        Launch →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#141416] border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>All 15 websites preserved and active in the same project.</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-white font-medium rounded-lg cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
