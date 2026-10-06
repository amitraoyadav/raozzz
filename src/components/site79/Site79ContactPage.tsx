import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  MessageCircle,
  ShieldCheck,
  Send,
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { site79Config } from '../../config/site79Config';

export const Site79ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Table Booking Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#050505] text-white min-h-screen font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>VIP Concierge & Access</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
          Location & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Contact</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed">
          Situated inside Shangri-La’s Eros Hotel in Connaught Place. Connect with our dedicated concierge desk for table reservations, celebrity hosting, and group celebrations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Contact & Information Bento */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl bg-[#0c0a07] border border-white/10 p-6 sm:p-8 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-['Cinzel',serif] text-white">
                Venue Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#DFB759]/10 border border-[#DFB759]/30 flex items-center justify-center text-[#DFB759] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-semibold">Address</strong>
                    <span className="text-gray-400 font-light leading-relaxed">
                      {site79Config.LOCATION}
                    </span>
                    <a
                      href={site79Config.MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DFB759] text-xs font-semibold hover:underline block mt-1 flex items-center gap-1"
                    >
                      <span>Get Driving Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#DFB759]/10 border border-[#DFB759]/30 flex items-center justify-center text-[#DFB759] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-semibold">Club Hours</strong>
                    <span className="text-gray-400 font-light">
                      Wednesday to Sunday • 10:30 PM to 5:00 AM IST
                    </span>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Doors open at 11:30 PM. Peak party hours 1:00 AM – 4:30 AM.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#DFB759]/10 border border-[#DFB759]/30 flex items-center justify-center text-[#DFB759] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-semibold">Direct Concierge Phone</strong>
                    <a
                      href={`tel:${site79Config.PHONE}`}
                      className="text-white hover:text-[#DFB759] font-mono text-base font-bold transition-colors"
                    >
                      {site79Config.PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#DFB759]/10 border border-[#DFB759]/30 flex items-center justify-center text-[#DFB759] shrink-0 mt-0.5">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-semibold">Valet Parking</strong>
                    <span className="text-gray-400 font-light">
                      Complimentary red carpet valet parking available at hotel main entrance.
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${site79Config.WHATSAPP}?text=Hi%20Elysium!%20I%20have%20an%20inquiry%20regarding%20the%20club.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#DFB759] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Admission Rules Notice */}
            <div className="rounded-3xl bg-[#0c0a07] border border-white/10 p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#DFB759] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#DFB759]" />
                <span>Strict Venue Admission Protocol</span>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Age limit is strictly 25 and above. Please carry an original government-issued photo ID (Aadhaar, Passport, or Driving License). Dress code: Glamorous Chic clubwear. The management reserves the right of admission.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6 rounded-3xl bg-[#0c0a07] border border-white/10 p-6 sm:p-8 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold font-['Cinzel',serif] text-white mb-2">
              Send a Message to the Concierge
            </h2>
            <p className="text-xs text-gray-400 mb-6 font-light">
              Submit your inquiry and our VIP reservations team will respond within 30 minutes.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#DFB759]/10 border border-[#DFB759]/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#DFB759] mx-auto" />
                <h3 className="font-['Cinzel',serif] text-xl font-bold text-white">
                  Message Dispatched
                </h3>
                <p className="text-xs text-gray-300">
                  Thank you, {name}. Our VIP host has received your request and will connect with you on WhatsApp / phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-semibold text-white hover:border-[#DFB759] cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-['Inter']">
                <div>
                  <label className="text-gray-300 font-semibold block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sameer Kapoor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#DFB759]"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98100 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#DFB759]"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold block mb-1">
                    Inquiry Nature
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 text-white focus:outline-none focus:border-[#DFB759]"
                  >
                    <option value="Table Booking Inquiry">VIP Table Booking Inquiry</option>
                    <option value="Guestlist & Stag Policy">Guestlist & Stag Policy</option>
                    <option value="Birthday or Bachelor Celebration">Birthday or Bachelor Celebration</option>
                    <option value="Corporate / Private Buyout">Corporate / Brand Venue Buyout</option>
                    <option value="Artist / DJ Collaboration">Artist / DJ Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 font-semibold block mb-1">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify date, expected guest count, bottle preferences or special requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#DFB759]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Concierge</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Map Full View */}
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 aspect-[21/9] w-full relative shadow-2xl">
          <iframe
            title="Elysium New Delhi Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2612726553856!2d77.21448697621182!3d28.621908984570046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd34fc9b1d7d%3A0xe54d24a919cb5bf!2sShangri-La%20Eros%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 filter invert contrast-125 brightness-75 hover:filter-none transition-all duration-700"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
