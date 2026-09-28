import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export const FAQ_ITEMS = [
  {
    q: 'What exactly is included in the ₹999 launch package?',
    a: 'You get a complete, bespoke mobile-first website designed for your business category, up to 15 products or services with rates in Indian Rupees (₹), sticky Call and WhatsApp ordering buttons, Google Maps location pinning, high-resolution QR code for your counter standee, and 1 full year of ultra-fast cloud hosting.'
  },
  {
    q: 'Do I need any coding, laptop, or technical knowledge?',
    a: 'None at all. You can provide your business details, photos, and price list directly over WhatsApp. Our team configures your entire website, tests it on Android and iOS devices, and sends you your live link within 24 hours.'
  },
  {
    q: 'How do customers order or book appointments on my site?',
    a: 'Depending on your business type, the site features a tailored booking engine: WhatsApp list ordering for retail/kirana/bakers, appointment slot booking for clinics/salons, table reservations for cafes, or doorstep pickup scheduling for repairs and dry cleaners.'
  },
  {
    q: 'Do I have to pay for hosting separately?',
    a: 'No — hosting is free and included in your one-time price.'
  },
  {
    q: 'Can I connect my own custom domain (e.g. mybusiness.in)?',
    a: 'Yes! Every site comes with a free RaoSitez URL (e.g. raositez.in/your-business). If you own or purchase a custom domain like yourshop.in or yourclinic.com, you can easily connect it via our CNAME configuration in our Professional or Premium packages.'
  },
  {
    q: 'What happens after 1 year of free cloud hosting?',
    a: 'Hosting is completely free for your first 12 months. After 1 year, renewal is an honest, flat ₹499/year to cover server costs and ongoing uptime. There are never any surprise recurring monthly charges or hidden fees.'
  },
  {
    q: 'What if I need to update my prices or add new dishes/services later?',
    a: 'You can update your content anytime! Either log into the intuitive RaoSitez Admin Console, or simply message our support desk on WhatsApp with your new price changes. We update your live site within hours.'
  },
  {
    q: 'What is your 100% Satisfaction or Full Refund Guarantee?',
    a: 'We stand by the quality of our websites. If within 7 days of your website going live you are not completely satisfied with the design, speed, or layout, simply let us know and we will issue an immediate 100% refund of your ₹999. No awkward questions asked.'
  },
  {
    q: 'How does the website help me rank higher on Google Maps?',
    a: 'When you link your official RaoSitez website to your Google Business Profile, Google’s search engine recognizes you as a verified local entity. We include LocalBusiness Schema.org structured data, mobile speed optimization, and local address tags so you outrank competitors who only have unverified phone numbers.'
  }
];

export const FAQPage: React.FC<{ onOpenOrderModal: () => void }> = ({ onOpenOrderModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#E8E7F0]/40 via-[#FAFAF8] to-white border-b border-[#E8E7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#14162B] font-['Fraunces'] tracking-tight">
            Everything You Need to Know
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#3C3F58] leading-relaxed">
            Clear answers about pricing, turnaround timelines, custom domains, and our 100% money-back guarantee.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E7F0] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFAF8] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#14162B] font-['Fraunces']">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8E92A8] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#4338CA]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#474B64] leading-relaxed border-t border-[#E8E7F0]/60 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-16 bg-[#14162B] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
          <h3 className="text-2xl font-black font-['Fraunces']">
            Still Have Questions?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#D5D4E3]">
            Chat with our team directly on WhatsApp or call our local business desk. We are here to help.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hello%20RaoSitez,%20I%20have%20a%20question%20about%20building%20my%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
            >
              Ask on WhatsApp (+91 98765 43210)
            </a>
            <button
              onClick={onOpenOrderModal}
              className="px-6 py-3 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
            >
              Launch My Website (₹999)
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
