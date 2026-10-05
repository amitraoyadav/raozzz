import React from 'react';
import {
  Leaf,
  ShieldCheck,
  Feather,
  Droplet,
  Users,
  Sun,
  MapPin,
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { site76Config } from '../../config/site76Config';

interface Site76AboutCraftProps {
  section: 'about' | 'craft' | 'sustainability';
  onNavigateToShop: () => void;
  onNavigateToMaterials: () => void;
}

export const Site76AboutCraft: React.FC<Site76AboutCraftProps> = ({
  section,
  onNavigateToShop,
  onNavigateToMaterials
}) => {
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-10 sm:py-16 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Selector for the 3 Brand Pillars */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-[#F5EFEB] rounded-full border border-[#E8E1D5] text-xs font-semibold uppercase tracking-wider">
            <span className={`px-5 py-2 rounded-full ${section === 'about' ? 'bg-[#263422] text-white shadow-xs' : 'text-[#544133]'}`}>
              About Aranya Earth
            </span>
            <span className={`px-5 py-2 rounded-full ${section === 'craft' ? 'bg-[#263422] text-white shadow-xs' : 'text-[#544133]'}`}>
              Artisan Craftsmanship
            </span>
            <span className={`px-5 py-2 rounded-full ${section === 'sustainability' ? 'bg-[#263422] text-white shadow-xs' : 'text-[#544133]'}`}>
              Zero Synthetics Manifesto
            </span>
          </div>
        </div>

        {/* SECTION: ABOUT */}
        {section === 'about' && (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                  Founded {site76Config.ESTABLISHED} · New Delhi
                </span>
                <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-6xl font-bold text-[#1E1F21] leading-tight">
                  Clothing as a sacred pact between earth and skin.
                </h1>
                <p className="text-sm sm:text-base text-[#544133] leading-relaxed font-light">
                  {site76Config.BRAND_NAME} was founded in 2018 by textile conservator {site76Config.FOUNDER} out of an urgent necessity: the modern fashion industry had severed its connection to nature. Clothing had become disposable petroleum plastic that sheds microfibers and exploits rural weaving families.
                </p>
                <p className="text-sm text-[#544133] leading-relaxed">
                  We chose the slower, harder, more poetic path: cultivating indigenous non-hybrid seeds, reviving pedal-powered Charkha spinning wheels, hand-dipping yardage in live fermented plant indigo, and designing minimal, timeless silhouettes that endure for decades.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={onNavigateToShop}
                    className="px-6 py-3 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors"
                  >
                    Explore The Wardrobe
                  </button>
                  <button
                    type="button"
                    onClick={onNavigateToMaterials}
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#9C4C36] hover:underline"
                  >
                    Our 6 Natural Fibers →
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#D5C7B5] bg-[#EAE2D7]">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
                  alt="Aranya Earth Atelier Founders and Garments"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#E8E1D5] pt-12">
              <div className="p-6 bg-white rounded-2xl border border-[#E8E1D5] space-y-3">
                <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#C16A52]">01</span>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">Pure Materiality</h3>
                <p className="text-xs text-[#544133] leading-relaxed">
                  Never a synthetic compromise. If a fiber cannot return to compost in your garden within six months, it has no place in our atelier.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E8E1D5] space-y-3">
                <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#C16A52]">02</span>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">Artisan Sovereignty</h3>
                <p className="text-xs text-[#544133] leading-relaxed">
                  We work directly with registered village weaver cooperatives in Kutch, Bengal, and Uttarakhand, paying 2.5x standard market wages directly.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E8E1D5] space-y-3">
                <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#C16A52]">03</span>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">Slow Architecture</h3>
                <p className="text-xs text-[#544133] leading-relaxed">
                  We do not follow quarterly fashion weeks. We produce two focused small-batch edits per year, cutting down on seasonal textile overproduction.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION: CRAFT */}
        {section === 'craft' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                Centuries of Intangible Heritage
              </span>
              <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-6xl font-bold text-[#1E1F21]">
                Hands Over Machines. Always.
              </h1>
              <p className="text-sm sm:text-base text-[#544133] font-light leading-relaxed">
                A garment woven on a wooden handloom carries the rhythmic heartbeat and subtle breathing tension of the artisan who loomed it. It possesses soul that industrial automated looms can never duplicate.
              </p>
            </div>

            {/* Weaving Clusters Map Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  cluster: 'Kutch, Gujarat',
                  craft: 'Kala Cotton & Bhujodi Extra-Weft',
                  story: 'Indigenous rainfed organic desi cotton loomed by the Vankar community without chemical fertilizers.'
                },
                {
                  cluster: 'Phulia, West Bengal',
                  craft: 'Fine Linen & Jamdani Weaving',
                  story: 'Master weavers hand-inserting supplementary weft floral motifs directly into the warp with needle-like precision.'
                },
                {
                  cluster: 'Almora, Uttarakhand',
                  craft: 'High-Altitude Wild Hemp',
                  story: 'Wild-harvested mountain hemp water-retted in glacial streams and hand-spun by women’s hill cooperatives.'
                },
                {
                  cluster: 'Bagru, Rajasthan',
                  craft: 'Living Fermented Plant Dyes',
                  story: 'Open-air earthen indigo vats fed with jaggery and lime, yielding deep ocean blues and warm madder roots.'
                }
              ].map((c, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-[#E8E1D5] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#9C4C36]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{c.cluster}</span>
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1E1F21]">
                    {c.craft}
                  </h3>
                  <p className="text-xs text-[#544133] leading-relaxed">
                    {c.story}
                  </p>
                </div>
              ))}
            </div>

            {/* Artisan Spotlight Quote */}
            <div className="bg-[#F5EFEB] p-8 sm:p-12 rounded-3xl border border-[#D5C7B5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                  Master Artisan Voice
                </span>
                <blockquote className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl italic text-[#1E1F21] leading-relaxed">
                  "When I sit at the pit loom, I am in conversation with my grandfather. Every click of the wooden shuttle is mathematical and spiritual. When someone wears our khadi, they carry our ancestral blessing against their skin."
                </blockquote>
                <p className="text-xs font-semibold text-[#544133]">
                  — Shamji Vankar, 4th Generation Master Weaver, Bhujodi
                </p>
              </div>
              <div className="lg:col-span-4 aspect-square rounded-2xl overflow-hidden bg-[#EAE2D7]">
                <img
                  src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
                  alt="Master artisan at wooden handloom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* SECTION: SUSTAINABILITY */}
        {section === 'sustainability' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                The Non-Negotiable Standard
              </span>
              <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-6xl font-bold text-[#1E1F21]">
                Zero Polyester. Zero Microplastics.
              </h1>
              <p className="text-sm sm:text-base text-[#544133] font-light leading-relaxed">
                60% of all clothing made globally contains hidden synthetic plastics like polyester, nylon, and elastane. At Aranya Earth, our commitment is absolute: every fiber, button, and thread is 100% natural and biodegradable.
              </p>
            </div>

            {/* Empirical Commitments */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-[#E8E1D5] space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#586737]">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">
                  100% Closed-Loop Plant Dyeing
                </h3>
                <p className="text-xs text-[#544133] leading-relaxed">
                  Conventional textile dyeing discharges carcinogenic aromatic amines into rivers. Our botanical dye vats use indigo leaves, pomegranate rinds, and madder roots. The water from our dyeing baths is filtered through sand and reed beds, then used to irrigate local agroforestry plots.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#586737] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Zero Toxic Heavy Metal Sludge</span>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-[#E8E1D5] space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#586737]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">
                  Plastic-Free Trims &amp; Packaging
                </h3>
                <p className="text-xs text-[#544133] leading-relaxed">
                  Even luxury brands often hide plastic zippers and polyester sewing threads. We use carved sheesham wood buttons, reclaimed coconut shell closures, organic cotton sewing thread, and 100% compostable cornstarch mailers sealed with natural water-activated gummed paper tape.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#586737] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Landfill-Compostable Mailers</span>
                </div>
              </div>
            </div>

            {/* Environmental Metric Scorecard */}
            <div className="bg-[#263422] text-[#FDFBF7] p-8 sm:p-12 rounded-3xl space-y-6">
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-center">
                Our Audited Environmental Metrics
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center pt-4">
                <div>
                  <span className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#D5C7B5] block">
                    -91%
                  </span>
                  <span className="text-xs text-[#EAE2D7] mt-1 block">Freshwater consumed vs conventional cotton</span>
                </div>
                <div>
                  <span className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#D5C7B5] block">
                    100%
                  </span>
                  <span className="text-xs text-[#EAE2D7] mt-1 block">Plastic-free garments & packaging</span>
                </div>
                <div>
                  <span className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#D5C7B5] block">
                    2.5x
                  </span>
                  <span className="text-xs text-[#EAE2D7] mt-1 block">Standard fair-trade artisan wages paid</span>
                </div>
                <div>
                  <span className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#D5C7B5] block">
                    6 Mos
                  </span>
                  <span className="text-xs text-[#EAE2D7] mt-1 block">Average home compost biodegrade time</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
