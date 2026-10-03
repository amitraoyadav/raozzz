import React, { useState } from 'react';
import {
  MapPin,
  HelpCircle,
  ChevronDown,
  Home,
  Phone,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { buildWhatsAppLink, GroupAchLoanType } from '../../../data/groupAchData';

interface GroupAchDelhiNcrPageProps {
  onOpenApplyModal: (loanType?: GroupAchLoanType, note?: string) => void;
  onNavigate: (path: string) => void;
  variant?: 'delhi' | 'delhi_ncr' | 'lap_delhi';
}

export const GroupAchDelhiNcrPage: React.FC<GroupAchDelhiNcrPageProps> = ({
  onOpenApplyModal,
  onNavigate,
  variant = 'delhi',
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isDelhiLap = variant === 'lap_delhi';
  const isNcr = variant === 'delhi_ncr';

  const areas = [
    {
      region: 'South Delhi',
      localities: 'Greater Kailash, Saket, Vasant Kunj, Hauz Khas, Defence Colony, Green Park',
      specialty: 'High-ticket freehold builder floors, luxury apartment acquisitions, and LAP on commercial plazas.',
    },
    {
      region: 'West Delhi & Dwarka',
      localities: 'Dwarka Sub-City (Sectors 1-23), Janakpuri, Rajouri Garden, Paschim Vihar, Punjabi Bagh',
      specialty: 'DDA CGHS cooperative group housing societies, freehold builder floors, and DDA flat conversions.',
    },
    {
      region: 'North & Central Delhi',
      localities: 'Rohini, Pitampura, Model Town, Civil Lines, Karol Bagh, Connaught Place peripheral',
      specialty: 'Commercial retail shop mortgages, ancestral property divisions, and high-LTV residential loans.',
    },
    {
      region: 'Gurugram (Gurgaon)',
      localities: 'Golf Course Road, Golf Course Extension, DLF Phases 1-5, Sohna Road, New Gurgaon (Sec 80-115)',
      specialty: 'High-end gated condominium financing, corporate executive salaried schemes, and builder transfers.',
    },
    {
      region: 'Noida & Greater Noida',
      localities: 'Noida Expressway, Sectors 50, 75, 137, 150, Greater Noida West (Noida Extension)',
      specialty: 'Authority leasehold flats, sub-lease registrations, tri-party agreements, and express builder payouts.',
    },
    {
      region: 'Ghaziabad & Faridabad',
      localities: 'Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Faridabad Neharpar (Sectors 75-89)',
      specialty: 'Affordable housing schemes, private builder floor financing, and debt consolidation through LAP.',
    },
  ];

  const faqs = [
    {
      q: 'Can I get a home loan or LAP on a Delhi builder floor without a sanctioned map?',
      a: 'Banks require the building to have an MCD/NDMC sanctioned building plan or regularized layout as per Master Plan 2021. For floors with minor deviation, certain housing finance companies (HFCs) offer specialized deviation surrogates where structural engineers verify stability. Group ACH assesses the building documents to match you with the right lender.',
    },
    {
      q: 'Do banks finance DDA flats on Power of Attorney (GPA) in Delhi?',
      a: 'Most premier banks require DDA properties to be converted from Leasehold to Freehold with a registered Conveyance Deed before sanctioning. If your property is on GPA, Group ACH guides you through the conversion and legal documentation process to make it bankable.',
    },
    {
      q: 'How does doorstep advisory work across Delhi NCR?',
      a: 'You do not need to visit crowded bank branches. Our assigned loan advisor visits your residence or office anywhere in Delhi, Gurugram, Noida, Ghaziabad, or Faridabad to collect documents, complete verification, and provide real-time status updates until disbursement.',
    },
    {
      q: 'What is the processing turnaround time for Delhi NCR property loans?',
      a: 'With pre-vetted property documents and clear KYC, sanction letters are typically issued in 3 to 7 working days, followed by technical valuation and legal title verification for smooth fund release.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors cursor-pointer">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('/home-loan')} className="hover:text-slate-900 transition-colors cursor-pointer">
            Home Loan
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">
            {isDelhiLap ? 'Loan Against Property in Delhi' : isNcr ? 'Delhi NCR Advisory' : 'Home Loan in Delhi'}
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Comprehensive Delhi &amp; NCR Region Coverage (Doorstep Service)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {isDelhiLap
              ? 'Loan Against Property in Delhi for Residential & Commercial Assets'
              : isNcr
              ? 'Home Loan Advisory Across Entire Delhi NCR Region'
              : 'Home Loan Solutions & Advisory Across Delhi'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Navigating property finance in Delhi NCR requires deep understanding of local municipal laws (MCD, DDA, HUDA, Noida Authority). Group ACH provides expert local loan advisory, doorstep documentation, and direct connections with 70+ institutional lenders.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenApplyModal(isDelhiLap ? 'loan_against_property' : 'home_loan', 'Delhi Location Page')}
              className="px-6 py-3 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Delhi NCR Advisor Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={buildWhatsAppLink('Hello Group ACH, I need home loan / LAP assistance for a property in Delhi NCR.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        {/* Local Scenarios */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Local Property Financing Scenarios We Specialize In
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Delhi NCR has unique land tenures and property types that standard algorithms struggle to approve. Our on-ground credit team specializes in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
              <h3 className="font-bold text-slate-900 text-sm">DDA Allotments &amp; Society Flats</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Smooth processing for freehold DDA flats, CGHS group housing societies in Dwarka, Rohini, and Mayur Vihar with clear non-encumbrance search.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
              <h3 className="font-bold text-slate-900 text-sm">Freehold Builder Floors</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Financing for individual floor-wise registrations across South Delhi, West Delhi, and Gurugram with sanctioned roof-rights evaluation.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
              <h3 className="font-bold text-slate-900 text-sm">Authority Plots &amp; Tri-Party Pacts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Noida, Greater Noida, and Yamuna Expressway authority leased apartments with seamless tri-party agreement (TPA) execution and developer NOCs.
              </p>
            </div>
          </div>
        </div>

        {/* Micro-Market Coverage Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Delhi NCR Service &amp; Doorstep Advisory Footprint
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our advisors provide dedicated doorstep assistance across all premier micro-markets in the National Capital Region:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {areas.map((area, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#85673E] shrink-0" />
                  <h4 className="font-bold text-slate-900 text-sm">{area.region}</h4>
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  <strong>Key Localities:</strong> {area.localities}
                </div>
                <div className="text-[11px] text-slate-500 pt-1">
                  <strong>Focus:</strong> {area.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#85673E]" />
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Delhi NCR Home Loan &amp; Property Financing FAQs
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === index ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Local Internal Links */}
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] flex flex-wrap items-center gap-3 text-xs">
          <span className="font-semibold text-slate-700">Explore Nearby Options:</span>
          <button onClick={() => onNavigate('/home-loan')} className="text-[#85673E] hover:underline font-semibold cursor-pointer">
            All Home Loan Rates
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('/loan-against-property')} className="text-[#85673E] hover:underline font-semibold cursor-pointer">
            Loan Against Property
          </button>
          <span>•</span>
          <button onClick={() => onNavigate('/home-loan-documents')} className="text-[#85673E] hover:underline font-semibold cursor-pointer">
            Documents Required in Delhi
          </button>
        </div>

        {/* CTA Banner */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-serif font-bold text-white">
            Schedule a Free Doorstep Consultation in Delhi NCR
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our local mortgage specialists will visit your home or office, evaluate your property papers, and present customized offers from 70+ banks without you stepping into a single branch.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenApplyModal(isDelhiLap ? 'loan_against_property' : 'home_loan', 'Delhi Bottom CTA')}
              className="px-6 py-3 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Book Doorstep Advisor
            </button>
            <a
              href="tel:+919482537337"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Direct Hotline: +91 94825 37337</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
