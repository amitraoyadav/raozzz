import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  RotateCcw,
  Truck,
  Leaf
} from 'lucide-react';
import { site76Config } from '../../config/site76Config';
import { FAQS_DATA, FaqItem } from '../../data/site76Data';

interface Site76ContactFaqProps {
  view: 'contact' | 'faq' | 'shipping' | 'refund-policy' | 'privacy-policy' | 'terms';
  onNavigateToShop: () => void;
}

export const Site76ContactFaq: React.FC<Site76ContactFaqProps> = ({
  view,
  onNavigateToShop
}) => {
  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Order & Sizing Consultation');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  // FAQ State
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS_DATA[0].id);

  const faqCategories = ['All', 'Shipping', 'Returns & Exchanges', 'Sizing & Fit', 'Materials & Care', 'Orders & Payment'];

  const filteredFaqs = selectedFaqCategory === 'All'
    ? FAQS_DATA
    : FAQS_DATA.filter(f => f.category === selectedFaqCategory);

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  // RENDER: CONTACT VIEW
  if (view === 'contact') {
    return (
      <div className="bg-[#FDFBF7] min-h-screen py-10 sm:py-16 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
              Reach Our Delhi Atelier
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-[#1E1F21]">
              Conversations in Natural Fiber
            </h1>
            <p className="text-sm text-[#544133] font-light leading-relaxed">
              Whether you need bespoke size adjustments, bridal trousseau consultations, or wholesale inquiries, our team is at your service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Info */}
            <div className="lg:col-span-5 space-y-8 bg-[#F5EFEB] p-8 rounded-3xl border border-[#E8E1D5]">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C16A52] shrink-0 border border-[#E8E1D5]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1F21]">Physical Atelier</h4>
                    <p className="text-xs text-[#544133] mt-1 leading-relaxed">
                      {site76Config.ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C16A52] shrink-0 border border-[#E8E1D5]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1F21]">Concierge Hotline</h4>
                    <p className="text-xs text-[#544133] mt-1 font-mono">
                      {site76Config.PHONE_DISPLAY}
                    </p>
                    <p className="text-[11px] text-[#6F736D]">Toll Free: {site76Config.TOLL_FREE}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C16A52] shrink-0 border border-[#E8E1D5]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1F21]">Email Inquiries</h4>
                    <p className="text-xs text-[#544133] mt-1 font-mono">
                      {site76Config.EMAIL}
                    </p>
                    <p className="text-[11px] text-[#6F736D]">Orders: {site76Config.ORDERS_EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C16A52] shrink-0 border border-[#E8E1D5]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1F21]">Studio Hours</h4>
                    <p className="text-xs text-[#544133] mt-1">
                      Monday to Saturday: 10:00 AM – 7:30 PM IST
                    </p>
                    <p className="text-[11px] text-[#6F736D]">Sunday: Closed for loom rest &amp; meditation</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 bg-white rounded-2xl border border-[#D5C7B5] space-y-2">
                <span className="font-bold text-xs text-[#1E1F21] block">Instant Sizing Consultation</span>
                <p className="text-xs text-[#6F736D]">
                  Our master pattern-makers can assist with chest and length specifications directly.
                </p>
                <a
                  href={`https://wa.me/${site76Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(site76Config.WHATSAPP_DEFAULT_MSG)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#263422] hover:text-[#C16A52]"
                >
                  <span>Chat on WhatsApp ({site76Config.WHATSAPP_DISPLAY})</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E1D5] shadow-xs">
              {formSent ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#586737]/15 text-[#586737] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#1E1F21]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#544133] max-w-md mx-auto leading-relaxed">
                    Thank you, {name}. Our Delhi atelier team will respond to your message via email ({email}) or phone ({phone}) within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSent(false)}
                    className="px-6 py-2.5 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitContact} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1E1F21] font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Radhika Sen"
                        className="w-full p-3 bg-[#FDFBF7] border border-[#D5C7B5] rounded-xl focus:outline-hidden focus:border-[#C16A52]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#1E1F21] font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="radhika@example.com"
                        className="w-full p-3 bg-[#FDFBF7] border border-[#D5C7B5] rounded-xl focus:outline-hidden focus:border-[#C16A52]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1E1F21] font-semibold mb-1">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full p-3 bg-[#FDFBF7] border border-[#D5C7B5] rounded-xl focus:outline-hidden focus:border-[#C16A52]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#1E1F21] font-semibold mb-1">Inquiry Subject *</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-3 bg-[#FDFBF7] border border-[#D5C7B5] rounded-xl focus:outline-hidden focus:border-[#C16A52] cursor-pointer"
                      >
                        <option>Order &amp; Sizing Consultation</option>
                        <option>Custom Handloom Tailoring</option>
                        <option>Bespoke Wedding Trousseau</option>
                        <option>Returns &amp; Exchange Assistance</option>
                        <option>Press &amp; Editorial Features</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1E1F21] font-semibold mb-1">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention specific garments, sizing details, or inquiries..."
                      className="w-full p-3 bg-[#FDFBF7] border border-[#D5C7B5] rounded-xl focus:outline-hidden focus:border-[#C16A52]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#263422] hover:bg-[#354830] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message to Atelier</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RENDER: FAQ VIEW
  if (view === 'faq') {
    return (
      <div className="bg-[#FDFBF7] min-h-screen py-10 sm:py-16 border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
              Knowledge Base
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-[#1E1F21]">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-[#544133] font-light">
              Clear answers regarding slow shipping, doorstep exchanges, natural dye care, and artisan transparency.
            </p>
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFaqCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedFaqCategory === cat
                    ? 'bg-[#263422] text-white shadow-xs'
                    : 'bg-white border border-[#D5C7B5] text-[#544133] hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map(faq => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-bold text-[#1E1F21]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#9C4C36] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#544133] leading-relaxed border-t border-[#E8E1D5] pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="text-center p-8 bg-[#F5EFEB] rounded-3xl border border-[#E8E1D5] space-y-2">
            <h4 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">
              Have a Question About a Specific Loom Piece?
            </h4>
            <p className="text-xs text-[#6F736D]">
              Our concierge team is available 6 days a week to guide your wardrobe decisions.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${site76Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(site76Config.WHATSAPP_DEFAULT_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Ask Concierge on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RENDER: POLICIES (Shipping / Refund / Privacy / Terms)
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-10 sm:py-16 border-b border-[#E8E1D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 border-b border-[#E8E1D5] pb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
            {site76Config.LEGAL_NAME}
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl font-bold text-[#1E1F21]">
            {view === 'shipping' && 'Plastic-Free Shipping & Delivery Policy'}
            {view === 'refund-policy' && '14-Day Doorstep Exchange & Refund Policy'}
            {view === 'privacy-policy' && 'Fiduciary Privacy & Data Protection'}
            {view === 'terms' && 'Terms & Conditions of Slow Commerce'}
          </h1>
          <p className="text-xs text-[#6F736D] font-mono">Last Updated October 2026</p>
        </div>

        <div className="prose prose-stone max-w-none text-xs sm:text-sm text-[#544133] leading-relaxed space-y-6">
          {view === 'shipping' && (
            <>
              <p>
                At Aranya Earth, our packaging matches our clothing philosophy: completely natural and biodegradable. We use zero bubble wrap, zero plastic tape, and zero synthetic sleeves.
              </p>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">Delivery Timelines</h3>
              <p>
                • Metros (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata): 3 to 5 business days.<br />
                • Regional and interior pincodes: 5 to 7 business days.<br />
                • Express Air Courier: 1 to 2 business days at a flat ₹200 fee.
              </p>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">Free Delivery Threshold</h3>
              <p>
                All orders above ₹{site76Config.FREE_SHIPPING_THRESHOLD.toLocaleString('en-IN')} qualify for complimentary domestic delivery. Orders below this threshold incur a nominal ₹{site76Config.DEFAULT_SHIPPING_FEE} eco-courier charge.
              </p>
            </>
          )}

          {view === 'refund-policy' && (
            <>
              <p>
                We understand that natural fibers drape uniquely on every body. That is why we provide a generous 14-day exchange and return window from the day your parcel is delivered.
              </p>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">Complimentary Reverse Pickup</h3>
              <p>
                If you require a size swap or prefer an alternative silhouette, we send our courier partner to collect the unworn garment from your doorstep at zero cost to you.
              </p>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">Refund Dispatch</h3>
              <p>
                Upon inspection at our Mehrauli atelier, refunds are initiated within 48 hours to your original payment mode (UPI, card, or direct bank transfer for COD orders).
              </p>
            </>
          )}

          {view === 'privacy-policy' && (
            <>
              <p>
                Aranya Earth operates with strict fiduciary data privacy standards. We never sell, lease, or monetize customer phone numbers or email addresses.
              </p>
              <p>
                Your phone number is strictly used for order tracking SMS, doorstep delivery coordination, and personalized WhatsApp styling assistance when initiated by you.
              </p>
            </>
          )}

          {view === 'terms' && (
            <>
              <p>
                These Terms govern the purchase and custom ordering of handloom apparel and home textiles produced by {site76Config.LEGAL_NAME}.
              </p>
              <p>
                Because our garments are woven on manual handlooms and dyed with natural plant extracts, minor variations in slub texture and dye saturation are authentic proof of slow craftsmanship and are not considered manufacturing defects.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
