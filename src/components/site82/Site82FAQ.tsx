import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight, Phone } from 'lucide-react';
import { WEALTH_FAQS } from '../../data/site82Data';

interface Site82FAQProps {
  onOpenConsultation: () => void;
}

export const Site82FAQ: React.FC<Site82FAQProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-12 pb-14 lg:pt-20 lg:pb-24 bg-gradient-to-b from-white via-[#F4F6FB] to-[#EEF1F7] px-6 sm:px-12 lg:px-24">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Heading & Illustration / Callout */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2430] tracking-tight leading-tight">
                Frequently <br />
                <span className="text-[#F54900]">Asked</span> <br />
                Questions
              </h2>

              <p className="text-sm text-neutral-600 mt-4 leading-relaxed">
                Everything you need to know about purchasing residential, commercial, and investment property in Noida, Greater Noida, and NCR.
              </p>

              {/* Consultation Callout Box */}
              <div className="mt-8 p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F54900] flex items-center justify-center mb-3">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-neutral-900">
                  Have a specific question about a project?
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Our certified RERA property advisors are available 7 days a week for unbiased guidance.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F54900] hover:text-[#C7510B] cursor-pointer"
                >
                  <span>Talk with an advisor now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {WEALTH_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#1E2430] leading-snug">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-orange-50 text-[#F54900] flex items-center justify-center shrink-0 transition-transform duration-200">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-[#6B6B74] leading-relaxed border-t border-neutral-100 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
