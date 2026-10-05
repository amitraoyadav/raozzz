import React from 'react';
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Heart
} from 'lucide-react';
import { SAMAROH_CONFIG } from '../../data/samarohLuxeData';

interface SamarohAboutPageProps {
  onOpenConsultation: () => void;
}

export const SamarohAboutPage: React.FC<SamarohAboutPageProps> = ({
  onOpenConsultation
}) => {
  return (
    <div className="bg-[#141210] text-white">
      {/* Editorial Header */}
      <section className="relative py-20 lg:py-28 bg-[#1C1917] border-b border-stone-800 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
          <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
            About Samaroh Luxe
          </span>
        </div>
        <h1 className="font-['Fraunces',serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto">
          Reimagining Indian Weddings Through Design &amp; Technology
        </h1>
        <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
          Founded in Bengaluru with a vision to eliminate the opaque 30% middleman markups, anxiety, and guesswork from wedding decor and celebrations.
        </p>
      </section>

      {/* Main Narrative & Numbers */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#E06D53] block">
              Our Origin &amp; Mission
            </span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-bold text-white leading-tight">
              Why We Built India’s First Tech-Enabled Event Design Platform
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              <p>
                In 2018, our founders planned their own family weddings and experienced the chaotic reality of Indian event styling: unverified Pinterest moodboards, last-minute vendor price escalations, broken flowers, and zero accountability on the day of the wedding.
              </p>
              <p>
                We asked a simple question: <strong className="text-white font-medium">Why can't wedding decor be designed in 3D like architecture, fabricated directly in dedicated warehouses, and priced with 100% itemized transparency?</strong>
              </p>
              <p>
                Today, Samaroh Luxe operates over 45,000 sq. ft. of fabrication and floral workshops across Bengaluru, Hyderabad, and Delhi NCR. We have brought over 1,450+ celebrations to life with an unmatched 4.94 / 5.0 customer satisfaction score.
              </p>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-1">
                <span className="font-['Fraunces',serif] text-2xl font-bold text-[#E06D53]">1,450+</span>
                <span className="text-[11px] text-stone-400 block">Weddings Styled</span>
              </div>
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-1">
                <span className="font-['Fraunces',serif] text-2xl font-bold text-[#E06D53]">45,000+</span>
                <span className="text-[11px] text-stone-400 block">Sq. Ft. Warehouses</span>
              </div>
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-1">
                <span className="font-['Fraunces',serif] text-2xl font-bold text-[#E06D53]">4.94★</span>
                <span className="text-[11px] text-stone-400 block">Google Rating</span>
              </div>
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-1">
                <span className="font-['Fraunces',serif] text-2xl font-bold text-[#E06D53]">6 Cities</span>
                <span className="text-[11px] text-stone-400 block">Experience Studios</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-stone-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
                alt="Samaroh Luxe Design Workshop & Wedding Production"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-stone-900 border border-stone-750 p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <span className="text-xs font-bold text-[#E06D53] block">100% In-House Guarantee</span>
              <p className="text-[11px] text-stone-300 mt-1 font-light">
                Our carpenters, welders, and floral artists are full-time employees, ensuring strict adherence to European safety and aesthetic standards.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Innovation */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-white">
              The Three Pillars of Samaroh Luxe
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light">
              How our integrated model redefines event planning for families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E06D53]/20 text-[#E06D53] flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-['Fraunces',serif] text-lg font-bold text-white">
                3D CAD Architecture
              </h4>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                We treat wedding mandaps and stages as temporary architectural pavilions. Pre-measuring sight-lines, guest seating ergonomics, and lighting trusses prevents awkward surprises on the wedding night.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E06D53]/20 text-[#E06D53] flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-['Fraunces',serif] text-lg font-bold text-white">
                Direct Farm Floral Supply
              </h4>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                By purchasing marigolds, tuberoses, orchids, and Dutch roses directly from farm mandis and international auctions, we eliminate 3 tiers of middleman markups and pass 30% more floral density to our couples.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E06D53]/20 text-[#E06D53] flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-['Fraunces',serif] text-lg font-bold text-white">
                Single Point Event Directors
              </h4>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                A senior production director is your single contact point from moodboard to teardown. No frantic calls to sound technicians, generator suppliers, or florists on your wedding morning.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1C1917] border border-stone-800 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-white">
              Visit Our Experience Studios
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light">
              Touch fabric swatches, inspect real flower combinations, and view your venue’s 3D digital model over artisanal coffee.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SAMAROH_CONFIG.CITIES.map(c => (
              <div key={c.id} className="p-3 bg-stone-900 rounded-2xl border border-stone-800 text-xs">
                <span className="font-bold text-white block">{c.name}</span>
                <span className="text-[10px] text-stone-500 block mt-0.5">{c.studio}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#E06D53] to-[#C8523B] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Book Studio Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
