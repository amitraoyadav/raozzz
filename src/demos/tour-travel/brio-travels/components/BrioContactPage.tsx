import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  Send,
  CheckCircle2,
  Info
} from 'lucide-react';

export const BrioContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Please provide your name';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Please provide a valid email';
    if (!phone.trim()) newErrors.phone = 'Please provide a contact phone number';
    if (!message.trim()) newErrors.message = 'Please enter your message or query';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
            Get in Touch
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Contact Brio Travels
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-['Inter']">
            Visit our Connaught Place travel desk or reach our trip advisory team for customized package quotations.
          </p>
        </div>

        {/* 2-Column Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office Details & Styled Map Embed Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-slate-900 font-['Poppins']">
                Delhi Head Office
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Address:</strong>
                    <span>Connaught Place, Inner Circle, New Delhi - 110001, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Opening Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 7:00 PM</span>
                    <span className="block text-slate-400 text-xs mt-0.5">Sunday: Emergency on-trip dispatch on call</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Phone & WhatsApp:</strong>
                    <a href="tel:+910000000000" className="hover:text-teal-600 transition-colors">
                      +91-00000-00000 (Central Helpline)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Email:</strong>
                    <a href="mailto:info@example.com" className="hover:text-teal-600 transition-colors">
                      info@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/910000000000?text=Hi%20Brio%20Travels,%20I%20have%20an%20enquiry%20regarding%20a%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Start WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs overflow-hidden">
              <div className="relative h-56 rounded-2xl bg-slate-200 overflow-hidden flex flex-col items-center justify-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-lg mb-2">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-800 text-xs font-['Poppins']">
                  Brio Travels Flagship Desk
                </h4>
                <p className="text-[11px] text-slate-500 max-w-xs mt-0.5">
                  Inner Circle, Connaught Place, New Delhi · Near Rajiv Chowk Metro Gate 2
                </p>
                <span className="mt-3 px-2.5 py-1 rounded bg-white text-slate-700 text-[10px] font-mono border border-slate-300">
                  Interactive Map Embed Placeholder
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-['Poppins']">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-['Inter']">
                  Fill in your details below and our destination specialist will assist with your customized holiday plan.
                </p>
              </div>

              {submitted ? (
                <div className="bg-teal-50 border-2 border-teal-500/40 rounded-2xl p-8 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-teal-900 font-['Poppins']">
                    Message Submitted Successfully!
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                    Demo only, enquiry not actually sent
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-['Inter']">
                    Thank you, {name}! In a production environment, our central travel desk at Connaught Place would reach back to you at {email} and {phone} within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="mt-3 text-xs font-bold text-teal-700 hover:underline cursor-pointer"
                  >
                    Send Another Demo Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                    <Info className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Demo mode enabled: Form submission simulates lead capture without sending real emails.</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Ankit Gupta"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 outline-none ${
                          errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-teal-500'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 outline-none ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-teal-500'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="e.g. ankit@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 outline-none ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-teal-500'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        placeholder="e.g. Custom Family Tour Quote"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message or Travel Query *
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Tell us about your preferred destinations, number of passengers, and expected travel dates..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 outline-none resize-none ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-teal-500'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Brio Travels</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
