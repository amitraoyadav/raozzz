import React, { useState } from 'react';
import { RAOZY_FAQS } from '../../data/raozyWeddingData';
import { raozyConfig } from '../../config/raozyWeddingConfig';

export const RaozyFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
            Everything You Need To Know
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base">
            Clear, candid answers regarding our 60-weddings cap, in-house fabrication, and open-book billing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {RAOZY_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#171410] rounded-xl border border-stone-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-serif text-[#DFC082] px-2 py-0.5 rounded bg-[#DFC082]/10 border border-[#DFC082]/20 uppercase">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-serif font-medium text-white">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`w-6 h-6 rounded-full border border-stone-700 flex items-center justify-center text-xs text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#DFC082] border-[#DFC082]' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-400 font-sans leading-relaxed border-t border-stone-800/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 rounded-xl bg-stone-900/60 border border-stone-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-serif font-semibold text-white">
              Have a confidential query or unique venue condition?
            </h4>
            <p className="text-xs text-stone-400 mt-0.5">
              Connect directly with our Founding Director on WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${raozyConfig.WHATSAPP_NUMBER}?text=Hello%20Raozy%20Wedding%20Planner,%20I%20have%20a%20few%20specific%20questions.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-serif font-semibold tracking-wider uppercase transition shadow shrink-0"
          >
            Direct WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};
