import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS_DATA } from '../../data/livintoInteriorsData';

export const LivintoFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#814882]" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm text-slate-600">
            Everything you need to know about our 40-day delivery commitment, 10-year warranty, materials, and payment stages.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#814882] bg-purple-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#814882] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-100/60 animate-in fade-in">
                    <p>{faq.a}</p>
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
