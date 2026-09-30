import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Globe, Sparkles, X, Check, Utensils, Coffee, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface ReferenceSiteInfo {
  id: string;
  num: number;
  category: 'cafe' | 'restaurant' | 'travel';
  name: string;
  originalUrl: string;
  slug: string;
  referencePath: string;
  concept: string;
  themeColor: string;
  badge: string;
}

export const ALL_29_REFERENCE_SITES: ReferenceSiteInfo[] = [
  // 19 CAFES
  {
    id: '2d-cafe',
    num: 1,
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
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
    category: 'cafe',
    name: 'Subko Coffee Roasters',
    originalUrl: 'https://subko.coffee/',
    slug: 'brew-bloom',
    referencePath: '/references/subko/',
    concept: 'From the Subcontinent — Specialty Pods & Bakes',
    themeColor: '#1e293b',
    badge: 'Subcontinent Craft'
  },
  {
    id: 'american-provisions',
    num: 16,
    category: 'cafe',
    name: 'American Provisions',
    originalUrl: 'https://www.americanprovisions.com/',
    slug: 'american-provisions',
    referencePath: '/references/american-provisions/',
    concept: 'Artisan Sandwiches, Farmstead Cheeses & Natural Wine (Boston)',
    themeColor: '#2b3a2f',
    badge: 'Artisan Market'
  },
  {
    id: 'mojo-coffee',
    num: 17,
    category: 'cafe',
    name: 'Mojo Coffee House',
    originalUrl: 'https://mojocoffeehouse.com/',
    slug: 'mojo-coffee',
    referencePath: '/references/mojo-coffee/',
    concept: 'Kyoto Cold Drip & New Orleans Magazine St Roastery',
    themeColor: '#78350f',
    badge: 'Cold Drip Roastery'
  },
  {
    id: 'sweetwaters',
    num: 18,
    category: 'cafe',
    name: 'Sweetwaters Cafe',
    originalUrl: 'https://www.sweetwaterscafe.com/',
    slug: 'sweetwaters',
    referencePath: '/references/sweetwaters/',
    concept: 'Global Real Leaf Teas, Dragon Eye Coffees & Cozy Spaces',
    themeColor: '#0369a1',
    badge: 'Global Teas'
  },
  {
    id: 'benne',
    num: 19,
    category: 'cafe',
    name: 'Benne',
    originalUrl: 'https://benne.in/',
    slug: 'benne',
    referencePath: '/references/benne/',
    concept: 'Authentic Davangere White-Butter Dosas & Kaapi (Bandra)',
    themeColor: '#854d0e',
    badge: 'Heritage Dosa'
  },

  // 10 RESTAURANTS
  {
    id: 'barbeque-nation',
    num: 20,
    category: 'restaurant',
    name: 'Barbeque Nation',
    originalUrl: 'https://www.barbequenation.com/',
    slug: 'barbeque-nation',
    referencePath: '/references/barbeque-nation/',
    concept: 'Live Table Charcoal Grill & Lavish Unlimited Buffet',
    themeColor: '#b91c1c',
    badge: 'Live Grill Buffet'
  },
  {
    id: 'nandos',
    num: 21,
    category: 'restaurant',
    name: "Nando's India",
    originalUrl: 'https://www.nandosindia.com/',
    slug: 'nandos',
    referencePath: '/references/nandos/',
    concept: 'Afro-Portuguese 24-Hr Marinated Flame-Grilled PERi-PERi',
    themeColor: '#dc2626',
    badge: 'Flame-Grilled PERi'
  },
  {
    id: 'mainland-china',
    num: 22,
    category: 'restaurant',
    name: 'Mainland China',
    originalUrl: 'https://www.speciality.co.in/',
    slug: 'mainland-china',
    referencePath: '/references/mainland-china/',
    concept: 'Cantonese Dim Sum, Claypots & Sichuan Wok Masters',
    themeColor: '#881337',
    badge: 'Imperial Chinese'
  },
  {
    id: 'oh-calcutta',
    num: 23,
    category: 'restaurant',
    name: 'Oh! Calcutta',
    originalUrl: 'https://www.speciality.co.in/',
    slug: 'oh-calcutta',
    referencePath: '/references/oh-calcutta/',
    concept: 'Calcutta 300 Years Nawabi, Zamindari & Mustard Seafood',
    themeColor: '#581c87',
    badge: 'Bengali Heritage'
  },
  {
    id: 'punjab-grill',
    num: 24,
    category: 'restaurant',
    name: 'Punjab Grill',
    originalUrl: 'https://www.punjabgrill.in/',
    slug: 'punjab-grill',
    referencePath: '/references/punjab-grill/',
    concept: 'Gourmet Frontier, Royal Clay Oven & Punjabi Haute Cuisine',
    themeColor: '#b45309',
    badge: 'Royal Frontier'
  },
  {
    id: 'bikanervala',
    num: 25,
    category: 'restaurant',
    name: 'Bikanervala',
    originalUrl: 'https://www.bikanervala.com/',
    slug: 'bikanervala',
    referencePath: '/references/bikanervala/',
    concept: 'Pure Desi Ghee Sweets, Delhi Street Chaat & Royal Thalis',
    themeColor: '#ea580c',
    badge: 'Sweets & Chaat 1905'
  },
  {
    id: 'sagar-ratna',
    num: 26,
    category: 'restaurant',
    name: 'Sagar Ratna',
    originalUrl: 'https://www.sagarratna.in/',
    slug: 'sagar-ratna',
    referencePath: '/references/sagar-ratna/',
    concept: 'South Indian Pure Vegetarian Dining & Ghee Roast Dosas',
    themeColor: '#14532d',
    badge: 'Pure Veg Since 1991'
  },
  {
    id: 'karims',
    num: 27,
    category: 'restaurant',
    name: "Karim's",
    originalUrl: 'https://karims.in/',
    slug: 'karims',
    referencePath: '/references/karims/',
    concept: 'Mughal Royal Kitchens Since 1913 at Jama Masjid Old Delhi',
    themeColor: '#064e3b',
    badge: 'Mughal 1913 Dynasty'
  },
  {
    id: 'al-baik',
    num: 28,
    category: 'restaurant',
    name: 'Al Baik',
    originalUrl: 'https://www.al-baik.com/',
    slug: 'al-baik',
    referencePath: '/references/al-baik/',
    concept: 'World-Famous Pressure Broasted Chicken & Secret Garlic Sauce',
    themeColor: '#dc2626',
    badge: 'Broasted Since 1974'
  },
  {
    id: 'mr-idli',
    num: 29,
    category: 'restaurant',
    name: 'Mr. Idli',
    originalUrl: 'https://www.mridli.in/',
    slug: 'mr-idli',
    referencePath: '/references/mr-idli/',
    concept: '100+ Steamed Healthy Idli Creations & Crispy Tiffin Dosas',
    themeColor: '#15803d',
    badge: '100+ Steamed Creations'
  },

  // 5 TOUR & TRAVEL
  {
    id: 'dream-travels',
    num: 30,
    category: 'travel',
    name: 'DreamScape Travels',
    originalUrl: 'https://www.dreamtotravels.com/',
    slug: 'dream-travels',
    referencePath: '/references/dreamtotravels/',
    concept: 'Incredible India Tour Packages, Golden Triangle & AC Car Rentals',
    themeColor: '#0F2C59',
    badge: 'Tour & Travel'
  },
  {
    id: 'southern-travels',
    num: 31,
    category: 'travel',
    name: 'Southern Travels',
    originalUrl: 'https://www.southerntravelsindia.com/brandstore.aspx-new-delhi',
    slug: 'southern-travels',
    referencePath: '/references/southern-travels/',
    concept: 'New Delhi Brandstore, Domestic & International Tour Packages Since 1970',
    themeColor: '#0B2545',
    badge: '50+ Years Legacy'
  },
  {
    id: 'srm-holidays',
    num: 32,
    category: 'travel',
    name: 'SRM Holidays',
    originalUrl: 'https://srmholidays.in/',
    slug: 'srm-holidays',
    referencePath: '/references/srm-holidays/',
    concept: 'Delhi Tour Packages, Golden Triangle & Luxury Tempo Traveller Hire',
    themeColor: '#1E3A8A',
    badge: 'Delhi Cab & Tours'
  },
  {
    id: 'itdc-travels',
    num: 33,
    category: 'travel',
    name: 'Ashok Travels & Tours (ITDC)',
    originalUrl: 'https://itdc.co.in/travels-tours/',
    slug: 'itdc-travels',
    referencePath: '/references/itdc-travels/',
    concept: 'India Tourism Development Corporation (ITDC) · Govt. of India Enterprise',
    themeColor: '#0F2850',
    badge: 'Govt. Enterprise'
  },
  {
    id: 'travel-art',
    num: 34,
    category: 'travel',
    name: 'Travel Art Company',
    originalUrl: 'https://travelartcompany.com/contact/',
    slug: 'travel-art',
    referencePath: '/references/travel-art/',
    concept: 'Luxury Bus, Coach & Tempo Traveller Rentals in Delhi NCR (Sagar Tours)',
    themeColor: '#DC2626',
    badge: 'Luxury Bus Fleet'
  }
];

export const ALL_34_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_29_REFERENCE_SITES;
export const ALL_30_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_29_REFERENCE_SITES;
export const ALL_15_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_29_REFERENCE_SITES.slice(0, 15);

interface SwitcherProps {
  currentSiteId: string;
}

export const ReferenceSiteSwitcher: React.FC<SwitcherProps> = ({ currentSiteId }) => {
  const { setActiveView } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'cafe' | 'restaurant' | 'travel'>('all');

  const currentSite =
    ALL_30_REFERENCE_SITES.find(s => s.id === currentSiteId || s.slug === currentSiteId) ||
    ALL_30_REFERENCE_SITES[0];

  const filteredSites = ALL_30_REFERENCE_SITES.filter(s => {
    if (categoryFilter === 'all') return true;
    return s.category === categoryFilter;
  });

  const handleSelectSite = (site: ReferenceSiteInfo) => {
    setModalOpen(false);
    setActiveView('site', site.slug);
  };

  const getCategoryTitle = (cat: string) => {
    if (cat === 'cafe') return 'CAFES';
    if (cat === 'restaurant') return 'RESTAURANTS';
    return 'TOUR & TRAVEL';
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
            WEBSITE {currentSite.num}/34: {currentSite.name.toUpperCase()} ({getCategoryTitle(currentSite.category)})
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Dropdown Modal Trigger */}
          <button
            onClick={() => setModalOpen(true)}
            className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-medium text-[11px] flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Switch Website ({ALL_34_REFERENCE_SITES.length} Sites)</span>
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

      {/* 34 Reference Websites Picker Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#18181b] text-white border border-stone-800 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>{ALL_34_REFERENCE_SITES.length} Complete Faithful Website Recreations</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  Reference Website Directory — Cafes, Restaurants & Tour & Travel
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  Three Main Categories: 19 Cafes, 10 Restaurants & 5 Tour & Travel. Every website maintains its independent UI, layouts, and features.
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-stone-800 bg-[#141416] flex flex-wrap items-center gap-2">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  categoryFilter === 'all'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                All Websites ({ALL_34_REFERENCE_SITES.length})
              </button>
              <button
                onClick={() => setCategoryFilter('cafe')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'cafe'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>Cafes ({ALL_34_REFERENCE_SITES.filter(s => s.category === 'cafe').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('restaurant')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'restaurant'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Restaurants ({ALL_34_REFERENCE_SITES.filter(s => s.category === 'restaurant').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('travel')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'travel'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Tour & Travel ({ALL_34_REFERENCE_SITES.filter(s => s.category === 'travel').length})</span>
              </button>
            </div>

            {/* Grid of Websites */}
            <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSites.map(s => {
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
                          #{s.num} · {s.category === 'cafe' ? 'CAFE' : 'RESTAURANT'}
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
              <span>All 29 reference websites preserved and active in this project.</span>
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
