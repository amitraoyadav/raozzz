import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle2,
  Disc,
  Sparkles
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';
import { FAQS_DATA, ClubFaq } from '../../data/site77Data';

export const Site77ContactFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [contactSubject, setContactSubject] = useState<string>('VIP Table Inquiry');
  const [contactMessage, setContactMessage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#07080A] relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16140D] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F3E5AB] uppercase">
              GET IN TOUCH & VISIT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            VENUE LOCATION & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
              VIP CONCIERGE
            </span>
          </h2>

          <div className="flex items-center justify-center space-x-4 max-w-xs mx-auto my-5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            <Disc className="w-3.5 h-3.5 text-[#D4AF37]" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          </div>

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Situated on the waterfront banks of Baga Creek in Arpora, North Goa. Open 365 nights a year.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#0E1015] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all text-center">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
              CLUB VENUE
            </h4>
            <p className="text-sm font-semibold text-white mb-2">Baga Creek Waterfront</p>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              {site77Config.ADDRESS}
            </p>
          </div>

          <div className="bg-[#0E1015] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all text-center">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
              OPENING HOURS
            </h4>
            <p className="text-sm font-semibold text-white mb-2">9:00 PM – 4:30 AM</p>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Open 365 Nights. Waterfront Sundowner opens 6:30 PM on Weekends.
            </p>
          </div>

          <div className="bg-[#0E1015] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all text-center">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
              VIP HOTLINE
            </h4>
            <p className="text-sm font-semibold text-white mb-2">{site77Config.PHONE_DISPLAY}</p>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Toll Free: {site77Config.TOLL_FREE}
            </p>
          </div>

          <div className="bg-[#0E1015] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all text-center">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
              CONCIERGE INQUIRIES
            </h4>
            <p className="text-sm font-semibold text-white mb-2">{site77Config.EMAIL}</p>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              {site77Config.BOOKINGS_EMAIL}
            </p>
          </div>
        </div>

        {/* Map and Dress Code Notice Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Left: Google Map View Box */}
          <div className="lg:col-span-7 bg-[#0E1015] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center space-x-2 text-xs font-mono text-gray-300">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>NOCTURNA WATERFRONT ARENA · ARPORA, NORTH GOA</span>
              </div>
              <a
                href={site77Config.MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-[#D4AF37] hover:underline"
              >
                Open in Maps ↗
              </a>
            </div>
            <div className="relative flex-1 min-h-[300px] w-full bg-[#181B24] flex items-center justify-center p-6 text-center">
              {/* Simulated Elegant Stylized Map Graphic */}
              <div className="space-y-4 max-w-md">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                  <Disc className="w-7 h-7 animate-[spin_8s_linear_infinite]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                    {site77Config.BRAND_NAME} WATERFRONT PROMENADE
                  </h4>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    Baga Creek Road, Arpora, North Goa · 403516
                  </p>
                </div>
                <div className="text-[11px] text-gray-400 bg-black/60 p-3 rounded-lg border border-white/5">
                  🚗 Complimentary Valet Drop directly at Waterfront Main Gate.
                  10 mins from Calangute & Baga beaches.
                </div>
                <a
                  href={site77Config.MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 rounded bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider"
                >
                  Get Driving Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right: Door Policy & Strict Dress Code Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#14161F] to-[#0E1015] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>ENTRY ADMISSION PROTOCOLS</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wide mb-4">
                DRESS CODE & STAG POLICY
              </h3>
              <div className="space-y-4 text-xs text-gray-300 font-light leading-relaxed">
                <div className="border-l-2 border-[#D4AF37] pl-3">
                  <strong className="text-white block font-mono">DRESS CODE:</strong>
                  {site77Config.POLICIES.dressCode}
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-3">
                  <strong className="text-white block font-mono">AGE REQUIREMENT (21+):</strong>
                  Government-issued photo identification (Passport, Driving License, Voter ID, Aadhaar) is strictly mandatory for all patrons at door scanning.
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-3">
                  <strong className="text-white block font-mono">STAG GENTLEMEN POLICY:</strong>
                  {site77Config.POLICIES.stagsPolicy}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <a
                href={`https://wa.me/${site77Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(
                  'Hello Nocturna Concierge, I have a question regarding the entry policy and table reservation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs font-mono uppercase tracking-wider text-center block transition-colors"
              >
                Inquire With Door Manager on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <HelpCircle className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-widest">
              Everything You Need to Know Before Your Visit
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0E1015] border border-white/10 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif font-bold text-white uppercase tracking-wide hover:text-[#F3E5AB] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-[#0E1015] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
              SEND A CONCIERGE MESSAGE
            </h3>
            <p className="text-xs text-gray-400 font-light mt-1">
              Have special artist, celebrity guest, or custom celebration inquiries? Our team responds within 2 hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center p-6 bg-[#141822] rounded-xl border border-[#D4AF37] space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto" />
              <h4 className="font-serif text-lg font-bold text-white uppercase">
                MESSAGE DELIVERED
              </h4>
              <p className="text-xs text-gray-300 font-light">
                Thank you, <strong>{contactName}</strong>. Our concierge has received your note and will contact you via {contactPhone || contactEmail}.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-2 text-xs font-mono text-[#D4AF37] underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    placeholder="Rohit Mehra"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={e => setContactPhone(e.target.value)}
                    placeholder="+91 98231 07777"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                    placeholder="rohit@example.com"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">Subject</label>
                  <select
                    value={contactSubject}
                    onChange={e => setContactSubject(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="VIP Table Inquiry">VIP Table Inquiry</option>
                    <option value="Private Celebration / Birthday">Private Celebration / Birthday</option>
                    <option value="Corporate Hosting">Corporate VIP Hosting</option>
                    <option value="Artist / DJ Booking">Artist / DJ Booking</option>
                    <option value="Franchise Opportunity">Franchise Opportunity</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 mb-1">Message *</label>
                <textarea
                  rows={3}
                  value={contactMessage}
                  onChange={e => setContactMessage(e.target.value)}
                  placeholder="Share details of your request or party plans..."
                  className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Message to VIP Desk</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
