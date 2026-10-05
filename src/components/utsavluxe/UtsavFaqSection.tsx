import React, { useState } from 'react';
import { UTSAV_FAQS } from '../../data/utsavLuxeData';

export const UtsavFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white text-stone-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Everything you need to know about our 3D design workflow, transparent fees, 
            and turnkey wedding management.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {UTSAV_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left bg-stone-50 hover:bg-stone-100/80 transition-colors flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-stone-900">
                    {faq.question}
                  </span>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-stone-300 text-stone-600 text-sm transition-transform ${isOpen ? 'rotate-180 bg-[#E05A47] text-white border-[#E05A47]' : ''}`}>
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200">
                    {faq.answer}
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
