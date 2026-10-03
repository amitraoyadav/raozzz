import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const SkinScieneFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      q: 'How does SkinSciene Naturals differ from a regular beauty salon or spa?',
      a: 'Salons provide superficial cosmetic massages using unverified creams and bleaching agents that often damage the skin barrier. At SkinSciene Naturals, every consultation and treatment is led by MD-certified Dermatologists using US-FDA approved medical lasers, tailored chemical peels, and autologous cellular therapies to fix root biological causes safely.',
    },
    {
      q: 'Is US-FDA Laser Hair Removal really permanent and pain-free?',
      a: 'Yes. US-FDA cleared lasers achieve up to 90% permanent hair reduction over 6 to 8 sessions by targeting anagen hair follicles. With our Soprano Titanium ICE continuous contact cooling tip, skin is chilled down to -3°C, making the sensation virtually painless and completely safe on Indian skin tones.',
    },
    {
      q: 'How many sessions will I need for acne scars or melasma?',
      a: 'During your initial digital dermascope consultation, our MD dermatologist assesses your scar depth or melanin layer. Most patients achieve 70% - 85% textural smoothing in 4 to 6 sessions of combination subcision and fractional laser, spaced 4 weeks apart.',
    },
    {
      q: 'Are consultations free, and can I choose my doctor?',
      a: 'Yes, our introductory screening and digital skin/hair analysis is complimentary at all 36+ clinics. You can select your preferred senior MD dermatologist and schedule a time slot that suits your weekday or weekend calendar.',
    },
    {
      q: 'Do you offer flexible EMI or financing options for comprehensive packages?',
      a: 'Yes. We offer zero-cost EMI plans on all major credit and debit cards across 3, 6, and 9 month tenures for multi-session laser hair removal, hair transplant, and scar revision protocols.',
    },
    {
      q: 'What COVID-19 and clinic sterilization measures are followed?',
      a: 'All our clinics adhere to strict hospital-grade sterilization: positive-pressure HEPA filtered treatment suites, class-B autoclave sterilization of instruments, and 100% single-use disposable bed sheets, goggles, and needles.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, transparent answers directly from our dermatological medical board.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif font-bold text-base text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
