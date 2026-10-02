import React, { useState } from 'react';
import { LAWLINKS_INFO } from '../../data/lawlinksData';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Facebook,
  Linkedin,
  Youtube,
  Building2,
  Clock
} from 'lucide-react';

export const LawLinksContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Inner Banner */}
      <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src="/assets/lawlinks/about-banner.png"
          alt="Contact Us Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
            Reach Our Offices
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Contact Us</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Get in touch with our legal chambers in New Delhi and Bengaluru for inquiries and filings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form: SEND MESSAGE (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
            <div className="border-l-4 border-[#03A9F5] pl-4 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#03A9F5]">Direct Communication</span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">SEND MESSAGE</h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Please enter your details and the subject matter of your inquiry. All communications remain strictly confidential under attorney-client privilege guidelines.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">Message Sent Successfully!</h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our designated registry partner will review your inquiry and get in touch with you shortly at <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] focus:ring-1 focus:ring-[#03A9F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] focus:ring-1 focus:ring-[#03A9F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] focus:ring-1 focus:ring-[#03A9F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={8}
                    required
                    placeholder="Briefly state the nature of your dispute or legal requirement (e.g., Supreme Court SLP, High Court Writ, Arbitration notice, Corporate advisory)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] focus:ring-1 focus:ring-[#03A9F5]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg uppercase tracking-wider text-xs shadow hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'SEND NOW'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info: CONTACT DETAILS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1e293b] text-white rounded-2xl p-7 shadow-xl space-y-6">
              <div className="space-y-1 border-b border-slate-700 pb-3">
                <span className="text-xs uppercase font-bold text-[#03A9F5] tracking-wider">Direct Contacts</span>
                <h3 className="text-xl font-bold">CONTACT DETAILS</h3>
              </div>

              {/* Delhi Head Office */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#03A9F5]">
                  <Building2 className="w-4 h-4" />
                  <h4>Delhi office (Head office)</h4>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-300 pl-6">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Law Links, Advocates & Legal Consultants<br />
                    C-47 (LGF), Nizamuddin East, New Delhi – 110 013
                  </p>
                </div>
              </div>

              {/* Bengaluru Office */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                  <Building2 className="w-4 h-4" />
                  <h4>Bengaluru office</h4>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-300 pl-6">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Law Links, Advocates & Legal Consultants<br />
                    No.23/1, 5th Floor, 1st Main Road, Seshadripuram, Bengaluru - 560020
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-[#03A9F5] shrink-0" />
                  <div>
                    <strong className="block text-white">PHONE</strong>
                    <p className="space-x-2">
                      <a href="tel:01143017435" className="hover:text-[#03A9F5]">011- 43017435</a>
                      <span>/</span>
                      <a href="tel:01146452172" className="hover:text-[#03A9F5]">46452172</a>
                      <span>/</span>
                      <a href="tel:08041242407" className="hover:text-[#03A9F5]">080- 41242407</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-[#03A9F5] shrink-0" />
                  <div>
                    <strong className="block text-white">EMAIL</strong>
                    <a href={`mailto:${LAWLINKS_INFO.headOffice.email}`} className="text-[#03A9F5] hover:underline">
                      {LAWLINKS_INFO.headOffice.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <strong className="text-xs uppercase tracking-wider text-slate-400 block">SOCIAL MEDIA</strong>
                <div className="flex items-center gap-3">
                  <a
                    href={LAWLINKS_INFO.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded bg-slate-800 hover:bg-[#03A9F5] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={LAWLINKS_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded bg-slate-800 hover:bg-[#03A9F5] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={LAWLINKS_INFO.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded bg-slate-800 hover:bg-red-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Interactive Map Embed */}
        <div className="space-y-4">
          <div className="border-l-4 border-[#03A9F5] pl-4 py-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#03A9F5]">Chambers Location</span>
            <h3 className="text-xl font-bold text-slate-900">Nizamuddin East, New Delhi</h3>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
            <iframe
              title="Law Links Chambers Map"
              src="https://maps.google.com/maps?q=C-47%20Nizamuddin%20East%20New%20Delhi%20110013&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
