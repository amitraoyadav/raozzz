import React from 'react';
import { Sparkles, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, Quote } from 'lucide-react';

export const CASE_STUDIES = [
  {
    id: 'case-1',
    businessName: 'Sharma Heritage Sweets & Bakers',
    owner: 'Suresh & Rakesh Sharma',
    city: 'Jaipur, Rajasthan',
    category: 'Mithai & Confectionery',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    challenge: 'During the festive wedding and Diwali season, customers crowded the counter demanding gift box options and prices. Staff spent hours taking blurry smartphone photos of sweets and sending them on WhatsApp individually, losing dozens of impatient corporate bulk orders.',
    solution: 'RaoSitez built a bespoke royal maroon storefront with festive pre-order boxes, per kg rates in ₹, and a QR standee placed at their shop cash counter. Customers scanned the standee to browse their full menu and order boxes directly on WhatsApp.',
    results: [
      { stat: '180+', label: 'Monthly WhatsApp Pre-Orders' },
      { stat: '₹1.4L', label: 'Extra Festival Turnover' },
      { stat: '0%', label: 'Commission to Food Aggregators' }
    ],
    quote: 'Our counter congestion dropped by half, and we booked 60 bulk wedding dry fruit boxes simply by sending our RaoSitez link in family WhatsApp groups.'
  },
  {
    id: 'case-2',
    businessName: 'Sundaram Dental Care & Implant Center',
    owner: 'Dr. Meenakshi Sundaram (BDS, MDS)',
    city: 'Indiranagar, Bangalore',
    category: 'Doctor & Dental Care',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    challenge: 'Patients often called during active root canal procedures to inquire about clinic timings, consultation fees, and doctor availability. The receptionist was constantly overwhelmed, leading to missed appointments and patient frustration.',
    solution: 'A calm, medical-grade portal with doctor qualification badges, daily morning and evening OPD timings, root canal and cleaning rates, and an automated appointment slot booking engine connected to WhatsApp.',
    results: [
      { stat: '60+', label: 'Weekly Confirmed Online Slots' },
      { stat: '85%', label: 'Reduction in Phone Inquiries' },
      { stat: '#1', label: 'Google Maps Local Rank' }
    ],
    quote: 'Patients now arrive already knowing our treatment charges and timings. The transparency has built tremendous trust in Indiranagar.'
  },
  {
    id: 'case-3',
    businessName: 'Glamour Touch Unisex Salon & Bridal Studio',
    owner: 'Pooja Verma & Stylist Team',
    city: 'Baner, Pune',
    category: 'Salon & Beauty Lounge',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    challenge: 'Weekday morning slots were consistently empty, while weekends had long chaotic waiting times. Potential clients browsing Instagram had no easy way to view service durations or book specific stylist slots.',
    solution: 'RaoSitez set up a luxury warm gold salon portal with service duration tags (e.g. "Keratin: 90 mins"), weekday discount countdown offers, and a 1-click WhatsApp appointment slot selector linked directly from their Instagram bio.',
    results: [
      { stat: '38%', label: 'Higher Weekday Utilization' },
      { stat: '25+', label: 'Bridal Makeovers Booked' },
      { stat: '3 Days', label: 'Advance Weekend Booking' }
    ],
    quote: 'Putting our website link in our Instagram bio changed everything. Clients check the rates and directly confirm their time slot without back-and-forth messaging.'
  },
  {
    id: 'case-4',
    businessName: 'Rathore SafeMove Packers & Movers',
    owner: 'Vikram Singh Rathore',
    city: 'Dwarka / Gurugram, Delhi NCR',
    category: 'Packers & Movers',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=800&q=80',
    challenge: 'Paying aggregator directories ₹600 per lead, of which 70% were fake or shared simultaneously with 5 other movers who engaged in cut-throat price undercutting.',
    solution: 'A high-authority verified website highlighting their ISO certification, bubble-wrap multi-layer packing process, transit insurance guarantee, and a direct doorstep survey booking form.',
    results: [
      { stat: '100%', label: 'Direct Exclusive Customer Leads' },
      { stat: '₹45,000', label: 'Saved Monthly on Lead Portals' },
      { stat: '4.9★', label: 'Google Rating with 220+ Reviews' }
    ],
    quote: 'Now when people search for reliable movers in Dwarka or Gurugram, they land directly on our official site. No middlemen and no shared leads.'
  }
];

export const CaseStudiesPage: React.FC<{ onOpenOrderModal: () => void }> = ({ onOpenOrderModal }) => {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#E8E7F0]/40 via-[#FAFAF8] to-white border-b border-[#E8E7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Customer Stories
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14162B] font-['Fraunces'] tracking-tight leading-tight">
            How Indian Businesses Grow with RaoSitez
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#3C3F58] leading-relaxed">
            Discover real before-and-after case studies from local doctors, sweet makers, salons, and moving contractors who replaced paper menus and aggregator fees with their own digital storefront.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {CASE_STUDIES.map((cs, idx) => (
          <article
            key={cs.id}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E7F0] shadow-sm flex flex-col lg:flex-row gap-8 items-center"
          >
            {/* Visual Cover & Results */}
            <div className="lg:w-2/5 w-full shrink-0 space-y-4">
              <div className="aspect-16/10 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                <img
                  src={cs.image}
                  alt={cs.businessName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat Row */}
              <div className="grid grid-cols-3 gap-2 bg-[#FAFAF8] p-3 rounded-2xl border border-[#E8E7F0] text-center">
                {cs.results.map((r, i) => (
                  <div key={i}>
                    <span className="text-lg font-black text-[#4338CA] font-mono-price block">
                      {r.stat}
                    </span>
                    <span className="text-[10px] text-[#636882] font-semibold block leading-tight">
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:w-3/5 w-full space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#4338CA]/10 text-[#4338CA] text-[11px] font-bold">
                    {cs.category}
                  </span>
                  <span className="text-xs text-[#8E92A8] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#8E92A8]" />
                    {cs.city}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#14162B] font-['Fraunces']">
                  {cs.businessName}
                </h3>
                <p className="text-xs text-[#636882] font-medium">
                  Led by {cs.owner}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#474B64]">
                <div>
                  <strong className="text-[#14162B] block text-xs uppercase tracking-wider mb-1 font-bold">
                    The Challenge:
                  </strong>
                  <p className="leading-relaxed">{cs.challenge}</p>
                </div>

                <div>
                  <strong className="text-[#14162B] block text-xs uppercase tracking-wider mb-1 font-bold">
                    The RaoSitez Solution:
                  </strong>
                  <p className="leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Owner Quote */}
              <blockquote className="p-4 rounded-2xl bg-[#FAFAF8] border-l-4 border-[#4338CA] text-xs sm:text-sm italic text-[#14162B] font-medium font-['Fraunces']">
                "{cs.quote}"
              </blockquote>
            </div>
          </article>
        ))}

        {/* Bottom CTA */}
        <div className="bg-[#14162B] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black font-['Fraunces']">
            Ready to Write Your Own Digital Success Story?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#D5D4E3] max-w-xl mx-auto">
            Get your business online in 24 hours without coding or hiring expensive agencies. Flat ₹999 launch package.
          </p>
          <button
            onClick={onOpenOrderModal}
            className="mt-6 px-6 py-3.5 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch My Business Website (₹999)</span>
          </button>
        </div>
      </main>
    </div>
  );
};
