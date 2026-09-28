import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, MapPin, Sparkles, Filter } from 'lucide-react';
import { TESTIMONIALS, TestimonialItem } from '../home/TestimonialCarousel';

export const EXTENDED_TESTIMONIALS: TestimonialItem[] = [
  ...TESTIMONIALS,
  {
    id: 't-6',
    name: 'Ananya Hegde',
    businessName: 'Vritti Organics Farm & Veg Box',
    category: 'Organic Farm & Grocery',
    city: 'Whitefield, Bangalore',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote: 'Our weekly farm vegetable subscription went from 30 households to over 240 active weekly subscribers. Having a clean site where buyers pick their weekly box size on WhatsApp made all the difference.',
    rating: 5,
    highlightStat: '8x Growth',
    statLabel: 'Weekly Harvest Boxes'
  },
  {
    id: 't-7',
    name: 'Govind Rathore',
    businessName: 'Hastkala Heritage Jaipur Blue Pottery',
    category: 'Handicraft & Artisan',
    city: 'C-Scheme, Jaipur',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    quote: 'Tourists from Mumbai, Delhi, and Bangalore visit our workshop after discovering our blue pottery collection online. The direct WhatsApp inquiry button has helped us close export consignments too.',
    rating: 5,
    highlightStat: '100% Direct',
    statLabel: 'Zero Middlemen'
  },
  {
    id: 't-8',
    name: 'Karthik Menon',
    businessName: 'Respawn Arena PS5 & VR Lounge',
    category: 'Gaming & Entertainment',
    city: 'Indiranagar, Bangalore',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    quote: 'College gamers and tech folks now pre-book their PS5 Pro pod before arriving. It completely eliminated weekend queue arguments and boosted our cafe snack combos.',
    rating: 5,
    highlightStat: '92% Full',
    statLabel: 'Console Utilization'
  }
];

export const TestimonialsPage: React.FC<{ onOpenOrderModal: () => void }> = ({ onOpenOrderModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: `All Reviews (${EXTENDED_TESTIMONIALS.length})` },
    { id: 'food', label: 'Cafes, Sweets & Food' },
    { id: 'health', label: 'Clinics & Healthcare' },
    { id: 'salon', label: 'Salons & Lifestyle' },
    { id: 'services', label: 'Home Services & Repairs' }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#E8E7F0]/40 via-[#FAFAF8] to-white border-b border-[#E8E7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Customer Feedback
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14162B] font-['Fraunces'] tracking-tight leading-tight">
            Loved by Hundreds of Business Owners
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#3C3F58] leading-relaxed">
            Read authentic stories from verified Indian entrepreneurs who trusted RaoSitez to launch their digital presence.
          </p>
        </div>
      </section>

      {/* Grid of Testimonials */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXTENDED_TESTIMONIALS.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Verified Owner
                  </span>
                </div>

                <blockquote className="text-sm text-[#14162B] font-['Fraunces'] leading-relaxed mb-6 font-medium">
                  "{t.quote}"
                </blockquote>
              </div>

              <div>
                {/* Highlight metric */}
                <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E7F0] mb-4 flex items-center justify-between">
                  <span className="text-xs text-[#636882]">{t.statLabel}</span>
                  <span className="text-sm font-bold text-[#4338CA] font-mono-price">{t.highlightStat}</span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E8E7F0]">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-11 h-11 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#14162B] truncate">{t.name}</h4>
                    <p className="text-[11px] text-[#4338CA] font-semibold truncate">{t.businessName}</p>
                    <p className="text-[10px] text-[#8E92A8] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#8E92A8]" />
                      {t.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#14162B] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black font-['Fraunces']">
            Join India's Fastest Growing Small Businesses
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#D5D4E3]">
            Start today for just ₹999 with 100% money-back guarantee. Site live in 24 hours.
          </p>
          <button
            onClick={onOpenOrderModal}
            className="mt-6 px-6 py-3 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch My Business Website (₹999)</span>
          </button>
        </div>
      </main>
    </div>
  );
};
