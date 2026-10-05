import React from 'react';
import { UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

interface UtsavAboutSectionProps {
  onOpenConsultationModal: () => void;
}

export const UtsavAboutSection: React.FC<UtsavAboutSectionProps> = ({
  onOpenConsultationModal
}) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            Our Story & Craft
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Crafting Celebrations With Architectural Precision
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Founded with a singular mission: to eliminate wedding planning chaos through 
            photorealistic 3D visualization, transparent line-item pricing, and soulful hospitality.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-stone-700 leading-relaxed text-sm sm:text-base">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
              Why We Rebelled Against the Traditional Wedding Industry
            </h3>
            <p>
              For decades, couples in India have faced the same wedding nightmare: vague verbal promises from decorators, 
              inflated middlemen commissions, surprise invoices on the morning of the pheras, and chaotic 
              on-ground coordination.
            </p>
            <p>
              <strong>UTSAV LUXE</strong> was built by architects, tech innovators, and hospitality veterans to change this forever. 
              We operate our own cold-chain floral procurement directly from farms in Bangalore and Holland, fabricate 
              structural sets in our regional workshops, and build photorealistic 3D digital blueprints for every client before they commit.
            </p>
            <p>
              Today, with over 3,200 weddings curated across 8 Indian cities, we are proud to stand as India's most trusted 
              modern full-stack wedding planning platform.
            </p>

            <div className="pt-3 flex items-center gap-6 text-stone-900 font-semibold text-xs sm:text-sm">
              <div>
                <span className="font-serif text-2xl font-bold text-[#E05A47] block">3,200+</span>
                <span>Weddings Planned</span>
              </div>
              <div className="h-10 w-px bg-stone-200" />
              <div>
                <span className="font-serif text-2xl font-bold text-stone-900 block">500+</span>
                <span>In-House Artisans</span>
              </div>
              <div className="h-10 w-px bg-stone-200" />
              <div>
                <span className="font-serif text-2xl font-bold text-emerald-600 block">8 Studios</span>
                <span>Nationwide Presence</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                alt="Floral architecture"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md mt-6">
              <img
                src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80"
                alt="Mandap lighting"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Pillars of Infrastructure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E05A47]/10 text-[#E05A47] flex items-center justify-center font-bold text-lg">
              🌸
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              In-House Cold-Chain Floral
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              We eliminate wholesale mandi markups. Direct partnerships with Dutch tulip growers and Indian rose cultivators guarantee pristine bloom longevity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E05A47]/10 text-[#E05A47] flex items-center justify-center font-bold text-lg">
              📐
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Architectural 3D CAD Studio
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our 3D modeling software tests laser measurements, sightlines, guest chair spacing, and evening illumination before physical fabrication.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E05A47]/10 text-[#E05A47] flex items-center justify-center font-bold text-lg">
              📻
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              14-Member Operations Squad
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Armed with walkie-talkies and minute-by-minute cue sheets, our operations leads enforce punctual baraat departures and flawless dining delivery.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultationModal}
            className="px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] shadow-lg shadow-[#E05A47]/30 transition-all hover:scale-105"
          >
            Meet Our Wedding Directors in Studio
          </button>
        </div>

      </div>
    </section>
  );
};
