import React from 'react';
import { ShieldCheck, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { LIVINTO_CONFIG } from '../../data/livintoInteriorsData';

interface LivintoIntroSectionProps {
  onOpenConsultation: () => void;
}

export const LivintoIntroSection: React.FC<LivintoIntroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Architectural Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Contemporary Home Interior Designers"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 shadow-xl flex items-center justify-between">
                <div>
                  <div className="font-serif font-black text-xl text-slate-900">
                    22+ Years of Trust
                  </div>
                  <div className="text-xs text-[#814882] font-semibold">
                    16,000+ Homes Handed Over Across India
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold">
                  Since 2004
                </span>
              </div>
            </div>
          </div>

          {/* Right: Rich Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#814882]">
                Contemporary Home Interiors
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Contemporary Home Interior Designers &amp; Contractors
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                Livinto is one of India's premier home interior design companies with company-owned experience centres in Bengaluru, Delhi NCR, Gurugram, Noida, Mumbai, Navi Mumbai, Pune, Hyderabad, Chennai, Coimbatore, Kochi, Trivandrum, Calicut, and Ahmedabad. With over 22 years of experience, 29 direct showrooms, a 350,000 sq ft mechanized manufacturing plant, and a team of 1,700+ design professionals, we hand over 300+ customized homes every month.
              </p>
              <p>
                As dedicated contemporary interior designers, we design and build functional, beautiful living spaces within apartments, penthouses, gated communities, and independent villas. Every modular kitchen, bedroom wardrobe, living console, and dining set is tailored to your family's exact room measurements and daily lifestyle.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#814882] shrink-0" />
                <span>100% Factory Mechanized Assembly</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#814882] shrink-0" />
                <span>BWP Grade Boiling Waterproof Plywood</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#814882] shrink-0" />
                <span>40 Working Days Handover Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#814882] shrink-0" />
                <span>10-Year Written Warranty Certificate</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <span>Book Free Design Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
