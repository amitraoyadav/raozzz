import React from 'react';
import { Compass, Sparkles, MapPin, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export const BrioSeoSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section 1: Make An Unforgettable Luxury Vacation */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Premium Holiday Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight mb-4">
            Make An Unforgettable Luxury Vacation With Brio Travels
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-['Inter'] mb-4">
            Planning the perfect vacation requires meticulous attention to detail, local insider knowledge, and dependable on-ground execution. At Brio Travels, we take pride in being Delhi NCR’s premier tour and travel company. From luxury private pool villas overlooking Balinese rice terraces and five-star overwater bungalows in the Maldives to tranquil carved houseboats on Srinagar’s Dal Lake and heritage palace hotels in Rajasthan, every itinerary is handcrafted for pure indulgence and peace of mind.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed font-['Inter']">
            Whether you are planning a romantic honeymoon, an annual multi-generational family holiday, a high-altitude Himalayan trek, or an executive corporate retreat, our travel advisors assist you from start to finish with customized sightseeing schedules, VIP monument passes, sanitized luxury vehicles, and round-the-clock WhatsApp support.
          </p>
        </div>

        {/* 3-Column SEO Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: What Makes Us The Best Travel Agency */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Poppins']">
              What Makes Us The Best Travel Agency
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
              Our unwavering commitment to customer delight sets us apart in Delhi:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Over 4,900+ verified customer reviews with 98.4% satisfaction</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Zero hidden charges — transparent inclusions, meals & tax breakdown</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Direct contracts with top hospitality brands & luxury transport providers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Certified ISO 9001:2015 quality standards and Ministry accreditations</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Best Rated Destinations */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Poppins']">
              Best Rated Destinations
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
              Popular vacation circuits favored by our travellers this season:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Kashmir:</strong> Dal Lake houseboats, Gulmarg Gondola & Pahalgam Lidder river</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Dubai:</strong> Burj Khalifa 124th floor, 4x4 desert safari & Abu Dhabi Grand Mosque</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Kerala:</strong> Munnar tea hills, Periyar wildlife & Alleppey backwater houseboats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Bali & Nusa Penida:</strong> Ubud private pool villas, jungle swings & Kelingking beach</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Services */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Poppins']">
              Top Services Offered
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
              Comprehensive end-to-end travel solutions under one roof:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span><strong>Customized Holiday Packages:</strong> Tailored family, group & solo vacations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span><strong>Honeymoon Specials:</strong> Candlelight dinners, villa flower setups & spa vouchers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span><strong>Same Day Agra Taj Mahal:</strong> Express private car tours via Yamuna Expressway</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span><strong>Chauffeur Car Rentals:</strong> Swift Dzire, Innova Crysta & Tempo Travellers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
