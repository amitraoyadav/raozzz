import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQS_LIST, FaqItem } from '../../data/site79Data';

interface Site79FaqSectionProps {
  onOpenTableBooking?: () => void;
  onOpenGuestlist?: () => void;
}

export const Site79FaqSection: React.FC<Site79FaqSectionProps> = ({
  onOpenTableBooking,
  onOpenGuestlist
}) => {
  const [openId, setOpenId] = useState<string | null>(FAQS_LIST[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="relative py-20 sm:py-28 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers & Club Guidance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Questions</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-gray-400 font-light leading-relaxed font-['Inter']">
            Everything you need to know about our venue policies, stag screening, redeemable cover charges, VIP tables, and complimentary guestlist entry.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dress code, stags, table cover..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#DFB759] transition-colors"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0e0c08] border-[#DFB759]/60 shadow-[0_0_25px_rgba(223,183,89,0.15)]'
                    : 'bg-[#090806] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen
                        ? 'border-[#DFB759] bg-[#DFB759]/20 text-[#DFB759] rotate-180'
                        : 'border-white/20 text-white/60'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-300 font-light leading-relaxed font-['Inter'] border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 rounded-2xl bg-[#0c0a07] border border-white/10 p-6 text-center space-y-3">
          <p className="text-xs text-gray-400 font-['Inter']">
            Still have a query regarding stag entry, bottle pricing, or private mezzanine reservations?
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {onOpenTableBooking && (
              <button
                onClick={onOpenTableBooking}
                className="px-6 py-2.5 rounded-full bg-[#DFB759] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
              >
                Book VIP Table
              </button>
            )}
            {onOpenGuestlist && (
              <button
                onClick={onOpenGuestlist}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer border border-white/20"
              >
                Join Guestlist
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
