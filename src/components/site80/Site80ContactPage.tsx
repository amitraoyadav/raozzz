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
  ExternalLink,
  Facebook,
  Twitter,
  Youtube,
  Instagram
} from 'lucide-react';
import { site80Config } from '../../config/site80Config';

interface Site80ContactPageProps {
  onOpenBooking: () => void;
}

export const Site80ContactPage: React.FC<Site80ContactPageProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    inquiryType: 'Table Reservation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill in your name, contact phone number, and email.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-black text-white min-h-screen font-['Inter']">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>Connect & Visit</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal font-['Alegreya_Sans',sans-serif] uppercase tracking-wide leading-tight">
          Contact <span className="text-[#FFD700]">Club Noir Blanc</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-400 font-light font-['Alegreya_Sans',sans-serif] leading-relaxed">
          Reach our VIP hospitality desk for private celebrations, corporate buyouts, guestlist enquiries, or find your way to The Suryaa Hotel.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Concierge Box */}
            <div className="p-6 rounded-3xl bg-[#0c0c0c] border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-['Alegreya_Sans',sans-serif] text-white">
                    Direct VIP Concierge
                  </h3>
                  <p className="text-xs text-gray-400">Instant WhatsApp replies 24/7</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed font-light">
                Need immediate table availability, bottle package menus, or guestlist confirmation? Connect directly with our host on WhatsApp.
              </p>

              <a
                href={`https://wa.me/${site80Config.WHATSAPP}?text=Hi%20Club%20Noir%20Blanc%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Address & Hours Card */}
            <div className="p-6 rounded-3xl bg-[#0c0c0c] border border-white/10 shadow-xl space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#FFD700] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Address</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    {site80Config.LOCATION}
                  </p>
                  <a
                    href={site80Config.MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#FFD700] hover:underline mt-2 font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#FFD700] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Opening Hours</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Tuesday – Sunday: 9:00 PM – 4:30 AM
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    (Mondays Closed • Peak Hours: 11:30 PM Onwards)
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#FFD700] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Phone Bookings</h4>
                  <a
                    href={`tel:${site80Config.PHONE}`}
                    className="text-xs text-gray-300 hover:text-[#FFD700] block mt-1 transition-colors"
                  >
                    {site80Config.PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#FFD700] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Email Enquiries</h4>
                  <a
                    href={`mailto:${site80Config.EMAIL}`}
                    className="text-xs text-gray-300 hover:text-[#FFD700] block mt-1 transition-colors"
                  >
                    {site80Config.EMAIL}
                  </a>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-start gap-4">
                <Car className="w-5 h-5 text-[#FFD700] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Valet & Parking</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Complimentary 24/7 dedicated valet parking at The Suryaa Hotel main porch for all club guests.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="p-6 rounded-3xl bg-[#0c0c0c] border border-white/10 shadow-xl">
              <h4 className="text-xs uppercase font-extrabold text-[#FFD700] tracking-widest mb-4">
                Follow Club Noir Blanc
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={site80Config.SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all"
                  aria-label="Club Facebook"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={site80Config.SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all"
                  aria-label="Club Twitter"
                >
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={site80Config.SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all"
                  aria-label="Club YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={site80Config.SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all"
                  aria-label="Club Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0c] border border-white/10 shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD700] block mb-1">
                Drop Us an Enquiry
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Alegreya_Sans',sans-serif] text-white mb-6">
                Send a Message to Management
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 border border-[#FFD700] text-[#FFD700] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-['Alegreya_Sans',sans-serif] text-white">
                    Enquiry Dispatched!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our guest hospitality manager will reach out via WhatsApp / phone shortly.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          date: '',
                          inquiryType: 'Table Reservation',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={onOpenBooking}
                      className="px-6 py-2.5 rounded-full bg-[#FFD700] text-black text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                    >
                      Instant Table Booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Malhotra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98110 xxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-[#FFD700] text-sm text-white outline-none transition-all cursor-pointer"
                      >
                        <option value="Table Reservation">Table Reservation</option>
                        <option value="Guestlist Inquiry">Guestlist Inquiry</option>
                        <option value="Corporate / Private Buyout">Corporate / Private Buyout</option>
                        <option value="Birthday / Celebration Package">Birthday / Celebration Package</option>
                        <option value="Artist / DJ Booking">Artist / DJ Booking</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Intended Date of Visit (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-sm text-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Let us know your party size, bottle preferences, or celebration details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-sm text-white placeholder-gray-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#FFD700] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map Embed Section */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    Location Map
                  </h4>
                  <p className="text-xs text-gray-400">
                    The Suryaa Hotel, New Friends Colony, New Delhi
                  </p>
                </div>
                <a
                  href={site80Config.MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/20 flex items-center gap-1.5 transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-[#FFD700]" />
                </a>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-zinc-950">
                <iframe
                  title="Club Noir Blanc Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.712604276707!2d77.26705387630737!3d28.56187798721992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39860b64d0d%3A0xe1db0aa415c1e57c!2sThe%20Suryaa%20New%20Delhi!5e0!3m2!1sen!2sin!4v1709664400000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter contrast-125 invert-[0.9] hue-rotate-180"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
