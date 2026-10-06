import React, { useState } from 'react';
import { ArrowRight, Sparkles, X, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { LUXURY_CATEGORIES, LuxuryCategoryBlock } from '../../data/site81Data';
import { site81Config } from '../../config/site81Config';

interface Site81LuxuryCategoriesProps {
  onSelectRealEstate: () => void;
  onOpenSellModal: () => void;
}

export const Site81LuxuryCategories: React.FC<Site81LuxuryCategoriesProps> = ({
  onSelectRealEstate,
  onOpenSellModal
}) => {
  const [activeAssetModal, setActiveAssetModal] = useState<LuxuryCategoryBlock | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Additional secondary luxury categories (watches, jewelry, helicopters, etc.)
  const additionalCategories = [
    {
      id: 'cat-watches',
      name: 'Haute Horlogerie',
      tagline: 'Patek Philippe, Audemars Piguet, Rolex Daytona & Richard Mille',
      listingCount: '14,000+ Timepieces',
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      slug: 'watches'
    },
    {
      id: 'cat-jewelry',
      name: 'High Jewelry',
      tagline: 'Cartier, Graff, Harry Winston, Van Cleef & Arpels Rare Gems',
      listingCount: '6,800+ Jewels',
      imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      slug: 'jewelry'
    },
    {
      id: 'cat-helicopters',
      name: 'Helicopters',
      tagline: 'Airbus ACH130, Bell 429, Sikorsky S-76 Executive Transport',
      listingCount: '320+ Aircraft',
      imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80',
      slug: 'helicopters'
    },
    {
      id: 'cat-rentals',
      name: 'Bespoke Charters & Villa Rentals',
      tagline: 'Private Islands, Mediterranean Superyacht Charters & Chalets',
      listingCount: '2,900+ Rentals',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      slug: 'rentals'
    }
  ];

  const handleCategoryClick = (cat: LuxuryCategoryBlock) => {
    if (cat.id === 'cat-re') {
      onSelectRealEstate();
    } else {
      setActiveAssetModal(cat);
      setInquirySubmitted(false);
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim()) return;
    setInquirySubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/40 border border-white/10 text-[11px] font-mono tracking-widest text-amber-400 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Multi-Asset Luxury Universe</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal">
            Beyond Prime Real Estate
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 font-light leading-relaxed">
            Acquire museum-grade supercars, megayachts, private aviation assets, and fine horology syndicated directly from the world’s elite manufacturers and sovereign dealers.
          </p>
        </div>

        {/* 4 Main Core Category Blocks (Real Estate, Cars, Yachts, Jets) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LUXURY_CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-neutral-950 cursor-pointer border border-neutral-800 hover:border-amber-400/50 shadow-xl transition-all duration-300"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/20 group-hover:via-neutral-950/20 transition-colors" />

              <div className="absolute top-4 right-4">
                <span className="bg-black/70 backdrop-blur-md text-amber-300 font-mono text-[10px] uppercase px-2.5 py-1 rounded border border-amber-300/20">
                  {category.listingCount}
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <h3 className="font-serif text-2xl font-normal group-hover:text-amber-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2 font-light">
                  {category.tagline}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Enter {category.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Category Strips */}
        <div className="mt-10 pt-10 border-t border-neutral-800">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-serif text-xl font-light text-neutral-200">
              Additional Luxury Asset Portfolios
            </h4>
            <span className="text-xs font-mono text-neutral-500 uppercase">
              Global Concierge Syndication
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalCategories.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  handleCategoryClick({
                    ...item,
                    tagline: item.tagline
                  })
                }
                className="group p-4 rounded-lg bg-neutral-950/70 border border-neutral-800 hover:border-neutral-600 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                    <span className="text-amber-400">{item.listingCount}</span>
                    <span className="uppercase">{item.slug}</span>
                  </div>
                  <h5 className="font-serif text-lg font-medium text-white group-hover:text-amber-200 transition-colors">
                    {item.name}
                  </h5>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {item.tagline}
                  </p>
                </div>
                <div className="mt-3 text-xs text-neutral-500 group-hover:text-white font-mono flex items-center gap-1">
                  <span>Browse Portfolio →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Seller Syndication CTA */}
        <div className="mt-14 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Discreet Broker &amp; Dealer Syndication
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1">
              Syndicate Supercars, Yachts or Aircraft
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Reach the world’s most qualified ultra-high-net-worth buyers through our certified international partner network.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenSellModal}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer shadow-lg"
            >
              List Luxury Asset
            </button>
            <a
              href={`tel:${site81Config.PHONE}`}
              className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-white text-xs uppercase font-mono tracking-wider rounded transition-colors text-center"
            >
              Contact Desk: {site81Config.PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Asset Class Modal Viewer */}
      {activeAssetModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-white relative shadow-2xl">
            <button
              onClick={() => setActiveAssetModal(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Valtierra Private Client Asset Division</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              {activeAssetModal.name} Acquisition Portal
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              {activeAssetModal.tagline} · Currently featuring {activeAssetModal.listingCount} across global partner vaults and private shipyards.
            </p>

            <div className="my-6 rounded-lg overflow-hidden h-44 bg-neutral-950">
              <img
                src={activeAssetModal.imageUrl}
                alt={activeAssetModal.name}
                className="w-full h-full object-cover"
              />
            </div>

            {inquirySubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-lg p-5 text-center text-emerald-200">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-serif text-lg font-bold text-white">Acquisition Inquiry Registered</h4>
                <p className="text-xs text-neutral-300 mt-1">
                  Our Managing Director for {activeAssetModal.name} will contact you discreetly.
                </p>
                <button
                  onClick={() => setActiveAssetModal(null)}
                  className="mt-4 px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-xs uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="px-3 py-2 text-xs bg-neutral-950 border border-neutral-700 rounded text-white focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    className="px-3 py-2 text-xs bg-neutral-950 border border-neutral-700 rounded text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Request Confidential Prospectus &amp; Inventory
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
