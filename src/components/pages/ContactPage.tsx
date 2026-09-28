import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ContactPage: React.FC = () => {
  const { submitLead } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [businessType, setBusinessType] = useState('Cafe & Restaurant');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await submitLead({
        websiteSlug: 'raositez-in',
        businessName: `${name}'s ${businessType}`,
        customerName: name.trim(),
        customerPhone: phone.trim(),
        customerEmail: email.trim(),
        message: `Category: ${businessType} | City: ${city} | Message: ${message || 'New website inquiry'}`,
        serviceRequested: `Website Consultation (${businessType})`,
        status: 'new'
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Lead submit failed', err);
      // Fallback: direct WhatsApp
      const cleanPhone = '919876543210';
      const text = encodeURIComponent(
        `Hello RaoSitez! I want to create a website.\nName: ${name}\nPhone: ${phone}\nCategory: ${businessType}\nCity: ${city}\nMessage: ${message}`
      );
      window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#E8E7F0]/40 via-[#FAFAF8] to-white border-b border-[#E8E7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14162B] font-['Fraunces'] tracking-tight">
            Let's Get Your Business Online
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#3C3F58] leading-relaxed">
            Have questions about getting your website live or need assistance with your menu or photos? Speak with our team directly.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left, Contact Details & Map on Right */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E7F0] shadow-sm">
            <h3 className="text-2xl font-black text-[#14162B] font-['Fraunces'] mb-2">
              Send Us An Inquiry
            </h3>
            <p className="text-xs text-[#474B64] mb-6">
              Fill in your business details. Our onboarding team will call or WhatsApp you within 2 business hours.
            </p>

            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-reveal">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-['Fraunces'] text-[#14162B]">
                  Thank You, {name}!
                </h4>
                <p className="text-xs text-[#474B64] max-w-sm mx-auto">
                  We received your message. One of our website consultants will connect with you on WhatsApp ({phone}) shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold text-[#4338CA] hover:underline pt-2 cursor-pointer block mx-auto"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#14162B] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#14162B] mb-1">WhatsApp Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#14162B] mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="vikram@gmail.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#14162B] mb-1">Business Category *</label>
                    <select
                      value={businessType}
                      onChange={e => setBusinessType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA]"
                    >
                      <option>Cafe & Restaurant</option>
                      <option>Doctor Clinic & Dental</option>
                      <option>Salon, Spa & Beauty</option>
                      <option>Clothing & Retail Boutique</option>
                      <option>Coaching & Tuition Centre</option>
                      <option>Gym & Fitness Studio</option>
                      <option>AC & Mobile Repair</option>
                      <option>Bakery & Sweets</option>
                      <option>Real Estate Consultancy</option>
                      <option>Other Small Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#14162B] mb-1">City / Town *</label>
                    <input
                      type="text"
                      placeholder="e.g. Gurugram, Jaipur, Pune"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#14162B] mb-1">How can we help you?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business or paste a link to your current Google Maps listing..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA]"
                  />
                </div>

                {/* Coral Conversion Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF6B4A]/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message to Team'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Channels & Interactive Google Map */}
          <div className="space-y-6">
            {/* Quick Connect Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/919876543210?text=Hello%20RaoSitez,%20I%20want%20to%20create%20a%20website%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50 hover:bg-emerald-100/80 p-5 rounded-2xl border border-emerald-200 transition-colors flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-900 block">WhatsApp Us</span>
                  <span className="text-xs text-emerald-700 font-mono">+91 98765 43210</span>
                  <span className="text-[10px] text-emerald-600 block mt-0.5">Average reply in 5 mins</span>
                </div>
              </a>

              <a
                href="tel:+919876543210"
                className="bg-white hover:bg-[#FAFAF8] p-5 rounded-2xl border border-[#E8E7F0] transition-colors flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#14162B] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#14162B] block">Call Our Desk</span>
                  <span className="text-xs text-[#474B64] font-mono">+91 98765 43210</span>
                  <span className="text-[10px] text-[#8E92A8] block mt-0.5">Mon - Sat: 9 AM – 8 PM</span>
                </div>
              </a>
            </div>

            {/* Office Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4338CA] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14162B]">Headquarters</h4>
                  <p className="text-xs text-[#474B64] mt-0.5 leading-relaxed">
                    Time Tower, 4th Floor, Main MG Road, DLF Phase 2, Gurugram, Delhi NCR 122002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#E8E7F0]">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4338CA] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14162B]">Official Support Email</h4>
                  <p className="text-xs text-[#474B64] font-mono mt-0.5">
                    support@raositez.in · contact@raositez.in
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-[#E8E7F0] shadow-sm aspect-16/9 bg-slate-100">
              <iframe
                title="RaoSitez Headquarters Location"
                src="https://maps.google.com/maps?q=Time+Tower+MG+Road+Gurugram&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
