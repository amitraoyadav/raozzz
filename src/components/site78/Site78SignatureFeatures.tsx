import React from 'react';
import { Utensils, GlassWater, Sunset, ArrowRight, Phone } from 'lucide-react';
import { site78Config } from '../../config/site78Config';

interface Site78SignatureFeaturesProps {
  onReserveTable: () => void;
}

export const Site78SignatureFeatures: React.FC<Site78SignatureFeaturesProps> = ({
  onReserveTable
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#181818] text-white relative overflow-hidden font-['Jost',sans-serif]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#747157]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#B99D75] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>Distinctive Culinary & Coastal Charms</span>
            <span className="w-8 h-[1px] bg-[#B99D75]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.12]">
            Signature Points at our Goa Beach Resort
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-white/20" />
            <span className="text-[#B99D75] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-white/20" />
          </div>

          <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-2xl mx-auto">
            From golden-hour ocean breezes to hyper-local seafood and molecular coastal mixology, savor the very finest nuances of beachside living.
          </p>
        </div>

        {/* Feature 1: The Ocean & Sunset Promenade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-[#B99D75] text-xs font-semibold uppercase tracking-widest">
              <Sunset className="w-4 h-4" />
              <span>Coastal Horizon</span>
            </div>

            <h3 className="font-['Cormorant',serif] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              The Ocean Breeze & Sunset Promenade
            </h3>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Morjim is celebrated throughout the subcontinent for its unobstructed westward horizon. As dusk descends, the sky catches fire in brilliant gradients of copper, vermilion, and rose gold.
            </p>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Take an unhurried barefoot walk along the gentle surf, listen to the whisper of the tide, and return to your secluded poolside villa illuminated by soft lanterns.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs tracking-wider uppercase text-stone-400">
              <span className="flex items-center gap-1.5 text-stone-200">
                <span className="text-[#B99D75]">✦</span> Low-Density Quiet Beach
              </span>
              <span className="flex items-center gap-1.5 text-stone-200">
                <span className="text-[#B99D75]">✦</span> Protected Turtle Habitat
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] group">
            <img
              src="/assets/site78/banner-9.webp"
              alt="Morjim Ocean Sunset"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Feature 2: Beachfront Dining Resto Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] lg:order-1 group">
            <img
              src="/assets/site78/69.webp"
              alt="Beachfront Resto Bar & Cocktails"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="lg:col-span-6 space-y-5 lg:order-2">
            <div className="inline-flex items-center gap-2 text-[#B99D75] text-xs font-semibold uppercase tracking-widest">
              <Utensils className="w-4 h-4" />
              <span>Gastronomy & Mixology</span>
            </div>

            <h3 className="font-['Cormorant',serif] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Beachfront Dining Resto Bar
            </h3>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Our open-air beachfront restaurant celebrates the culinary heritage of Goa alongside contemporary Mediterranean classics. Feast on line-caught kingfish, garlic butter mud crabs, and fragrant coconut curries.
            </p>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Our mixologists infuse local cashew and palm feni, kokum, and botanical gin with tropical herbs to craft unforgettable sundowner elixirs served under swaying palm canopies.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${site78Config.PHONE_RESTAURANT_RAW}`}
                className="px-6 py-3 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-semibold tracking-[0.16em] uppercase transition-all shadow-md flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B99D75]" />
                <span>Table Reservations: {site78Config.PHONE_RESTAURANT}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
