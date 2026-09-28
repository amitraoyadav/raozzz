import React, { useState } from 'react';
import { ChevronDown, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';

export const FAQSection: React.FC<{ onOpenOrderModal: () => void }> = ({ onOpenOrderModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need any technical or computer knowledge to have a website?',
      a: 'None at all! You simply provide us with your business details, menu/service list, prices, photos, and WhatsApp number. Our team sets up everything, designs your layout, configures hosting, and delivers a live website ready for your customers.'
    },
    {
      q: 'Why is offline presence alone no longer enough?',
      a: 'Over 80% of urban and tier-2 Indian consumers search on Google or WhatsApp before stepping out. If your competitors have a menu, price list, and reviews on their link and you only exist physically, customers choose whoever makes booking effortless.'
    },
    {
      q: 'Do I have to pay for hosting separately?',
      a: 'No — hosting is free and included in your one-time price.'
    },
    {
      q: 'What is the one-time price? Are there hidden monthly hosting bills?',
      a: 'We believe in 100% transparency. Our packages start at a flat ₹999 as a single one-time payment. This includes complete design, mobile optimization, and 1 full year of cloud hosting. You will never encounter hidden monthly charges.'
    },
    {
      q: 'How does the 100% satisfaction or full refund guarantee work?',
      a: 'Once we complete your site, we share a live preview for your feedback. If you are not completely satisfied with the design and quality, we refund your payment in full, no questions asked.'
    },
    {
      q: 'Can I get a custom domain like mycafe.in or myclinic.com?',
      a: 'Yes, absolutely! By default, your website is hosted on a fast link like raositez.in/your-shop. If you own or want your own domain, we configure the DNS records so your site loads seamlessly on your custom web address.'
    },
    {
      q: 'How do customers contact me or place orders from the website?',
      a: 'Every item, service, and doctor consultation has a direct "Chat on WhatsApp" and "Call Now" button. When a visitor clicks, it opens WhatsApp with a pre-filled message (e.g. "Hi, I want to book an appointment with Dr. Sharma"). Customers can also fill out the instant enquiry form, which sends their contact info straight to your lead dashboard.'
    },
    {
      q: 'How does the printable QR code work for my shop or restaurant?',
      a: 'Every website comes with an instant downloadable high-resolution QR code. You can print it on your restaurant table acrylic standees, clinic reception counter, or customer visiting cards. When customers scan it with any phone camera, your digital website and menu open in seconds.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#FAFAF8] border-b border-[#E8E7F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8E7F0]/80 border border-[#D5D4E3] text-[#14162B] text-xs font-semibold mb-3 font-['Inter']">
            <Sparkles className="w-3.5 h-3.5 text-[#4338CA]" />
            <span>Common Questions</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14162B] tracking-tight font-['Fraunces']">
            Frequently Asked Questions
          </h3>
          <p className="mt-3 text-[#474B64] text-sm leading-relaxed font-['Inter']">
            Everything you need to know about getting your local business website made.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 font-['Inter']">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-[#E8E7F0] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFAF8] transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#14162B] font-['Fraunces']">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#4338CA] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#51556E] leading-relaxed border-t border-[#E8E7F0]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E8E7F0] text-center font-['Inter']">
          <h4 className="font-bold text-[#14162B] text-base mb-1 font-['Fraunces']">
            Have a custom question or specific business request?
          </h4>
          <p className="text-xs text-[#51556E] mb-4">
            Talk directly to our founders on WhatsApp. We answer in minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Get Your Website for ₹999
            </button>
            <a
              href="https://wa.me/919876543210?text=Hi%20RaoSitez,%20I%20have%20a%20question%20about%20getting%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#FAFAF8] hover:bg-[#E8E7F0] text-[#14162B] border border-[#E8E7F0] text-xs font-semibold rounded-xl transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
