import React, { useState } from 'react';

export const RaozyAtelierSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'metal' | 'florals' | 'furniture'>('3d');

  const capabilities = [
    {
      id: '3d',
      title: '3D CAD Blueprints & Virtual Renders',
      subtitle: 'Preview exact scale, lighting, and finishes months before the event',
      description: 'Our in-house 3D design studio builds millimeter-accurate CAD scale models of your selected banquet or lawn. We run virtual camera walkthroughs with simulated daylight, sunset, and nighttime lighting scenes so there is never guesswork on event day.',
      stats: '1:1 Visual Accuracy Guarantee',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        'Laser site measurement of actual lawn dimensions & electrical points',
        'Photorealistic 3ds Max & Unreal Engine walkthroughs',
        'Full material swatch presentation (fabrics, metals, timber stains)',
        'Physical mockup display at our Gurugram design loft before fabrication'
      ]
    },
    {
      id: 'metal',
      title: 'Heavy Metal Rigging & CNC Woodworking',
      subtitle: '25,000 sq.ft. industrial fabrication bay in Gurugram',
      description: 'We do not rent flimsy aluminum trusses from local tent vendors. Raozy operates certified steel and aluminum welding lines, high-precision CNC routers, and scenic carpentry workshops to fabricate monumental mandaps, Moorish portals, and mirrored stages.',
      stats: '65+ In-House Certified Craftsmen',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        'Structural engineering certifications for wind and outdoor safety',
        'Laser-cut filigree jali arches and beaten gold/champagne leaf foils',
        'Concealed cable trays and zero exposed wiring protocols',
        'Rapid modular assembly ensuring setup completes 6 hours before guest arrival'
      ]
    },
    {
      id: 'florals',
      title: 'Direct-Farm Floral Cold Chain',
      subtitle: 'Direct imports from Holland & South Indian high-altitude farms',
      description: 'Florals are perishable art. Raozy bypasses middleman flower mandis. We maintain dedicated 4°C refrigerated storage at our Gurugram facility, transporting stems in refrigerated reefers directly to palace courtyards in Udaipur, Jaipur, or Goa.',
      stats: '4°C Temperature-Controlled Logistics',
      image: 'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        'Dutch Avalanche roses, Cymbidium orchids, and Dutch hydrangeas',
        'Bengaluru high-altitude carnations and long-stem tuberoses (Rajnigandha)',
        '100% organic, petal-safe natural marigolds for Haldi ceremonies',
        'Strict zero-wilting freshness guarantee throughout multi-day events'
      ]
    },
    {
      id: 'furniture',
      title: 'Luxury Furniture & Prop Archive',
      subtitle: 'Over 1,000 curated pieces owned directly by Raozy',
      description: 'Say goodbye to plastic banquet chairs with ill-fitting cloth covers. Raozy maintains an extensive private inventory of tufted velvet Chesterfield sofas, woven Parisian cane lounges, brass Moroccan lanterns, and bespoke crystal chandeliers.',
      stats: '1,000+ Owned Designer Furniture Units',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        'Custom velvet diwans, royal gaddas, and gold-leaf bridal thrones',
        'Over 300 authentic beaten brass Moroccan and Jaipuri lanterns',
        'High-gloss acrylic infinity dance floors and illuminated cocktail bars',
        'Regular deep sanitation, polishing, and upholstery refresh before every wedding'
      ]
    }
  ];

  const currentCap = capabilities.find((c) => c.id === activeTab) || capabilities[0];

  return (
    <section id="atelier" className="py-20 sm:py-28 bg-[#0D0B0A] text-stone-200 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
            The In-House Atelier Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Where 3D Blueprint Meets Artisan Steel
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            By owning our own 25,000 sq.ft. fabrication facility in Gurugram, Raozy delivers 
            30–40% greater visual grandeur for your decor budget while eliminating broker delays.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {capabilities.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`px-5 py-2.5 rounded-lg text-xs font-sans tracking-wider uppercase transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-[#DFC082] text-[#171410] font-bold shadow-lg'
                  : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {item.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Active Capability Showcase */}
        <div className="bg-[#14110E] rounded-2xl border border-stone-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Text Detail */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#DFC082]/10 text-[#DFC082] text-[11px] font-serif uppercase tracking-widest border border-[#DFC082]/30 mb-4">
                <span>{currentCap.stats}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-2">
                {currentCap.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#DFC082] font-medium mb-6">
                {currentCap.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans mb-8">
                {currentCap.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3">
                {currentCap.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300">
                    <span className="w-5 h-5 rounded-full bg-[#DFC082]/20 text-[#DFC082] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-8 pt-6 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
              <span>Atelier Location: DLF Phase 5, Gurugram</span>
              <span className="text-[#DFC082] font-semibold">100% In-House Fleet</span>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[460px] overflow-hidden bg-stone-900">
            <img
              src={currentCap.image}
              alt={currentCap.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded text-[11px] font-serif text-[#DFC082] border border-[#DFC082]/30 uppercase tracking-widest">
              Live Production Snapshot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
