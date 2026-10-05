import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Crown,
  ShieldCheck,
  Send,
  Loader2
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { PSR_DESTINATIONS } from '../../data/psrWeddingsData';

export const PsrContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('150-300');
  const [budget, setBudget] = useState('₹40L - ₹75L');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello ${siteConfig.SITE_NAME} team, I would like to schedule a formal destination wedding consultation.`
    );
    window.open(`https://wa.me/${siteConfig.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-[#120306] text-white">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-[#180408] border-b border-[#C5A059]/20 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
          <Crown className="w-3 h-3 text-[#DFBE78]" />
          <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
            Connect With Our Planners
          </span>
        </div>
        <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Contact {siteConfig.SITE_NAME}
        </h1>
        <p className="text-stone-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
          Headquartered in Delhi NCR with experience studios across Rajasthan and Goa. We look forward to welcoming you for a private bridal consultation.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Branch Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider block">
                Direct Contact Channels
              </span>
              <h2 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">
                Speak with Our Directors
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Whether you have already chosen your palace venue or are exploring early destination possibilities, our senior advisory team is available 7 days a week.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#1C060A] border border-[#C5A059]/25 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DFBE78] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Corporate Headquarters</span>
                  <p className="text-xs text-stone-300 mt-0.5">{siteConfig.ADDRESS}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C060A] border border-[#C5A059]/25 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#DFBE78] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Central Phone Line</span>
                    <a href={`tel:${siteConfig.PHONE.replace(/\s+/g, '')}`} className="text-xs text-[#DFBE78] hover:underline">
                      {siteConfig.PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <span className="text-[10px] text-stone-400 font-mono">10 AM - 8 PM</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C060A] border border-[#C5A059]/25 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">WhatsApp Concierge Desk</span>
                    <span className="text-xs text-emerald-400">{siteConfig.WHATSAPP_DISPLAY}</span>
                  </div>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/50 text-emerald-300 hover:text-white text-[10px] font-bold uppercase cursor-pointer transition-colors"
                >
                  Chat Now
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C060A] border border-[#C5A059]/25 flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#DFBE78] shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Official Email</span>
                  <a href={`mailto:${siteConfig.EMAIL}`} className="text-xs text-stone-300 hover:text-white">
                    {siteConfig.EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Regional Studios */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider block">
                Regional Experience Studios
              </span>
              <div className="space-y-2.5">
                {siteConfig.BRANCHES.slice(1).map(branch => (
                  <div key={branch.city} className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs">
                    <span className="text-white font-bold block">{branch.city}</span>
                    <p className="text-stone-400 text-[11px] mt-0.5">{branch.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Consultation Lead Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#1C060A] rounded-3xl border border-[#C5A059]/35 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="space-y-1 border-b border-stone-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DFBE78] block">
                Direct Inquiry Form
              </span>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">
                Request a Custom Destination Proposal
              </h3>
              <p className="text-xs text-stone-300 font-light">
                Fill in your celebration parameters below. Our directors will prepare an initial destination & venue feasibility dossier for your review.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DFBE78] to-[#C5A059] text-[#1A0509] flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">
                  Consultation Request Dispatched!
                </h4>
                <p className="text-xs text-stone-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong className="text-white font-semibold">{name}</strong>. Our senior wedding directors will contact you at <strong className="text-white font-semibold">{phone}</strong> within 4 business hours with your custom blueprint.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={openWhatsApp}
                    className="px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Message</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs cursor-pointer"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Kapoor"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-300">WhatsApp Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98111 22233"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. radhika@gmail.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-300">Destination Preference</label>
                    <select
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#DFBE78]"
                    >
                      <option value="">Choose Destination</option>
                      {PSR_DESTINATIONS.map(d => (
                        <option key={d.slug} value={d.name}>{d.name} ({d.stateOrRegion})</option>
                      ))}
                      <option value="Flexible / Recommendation Needed">Flexible / Recommendation Needed</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-300">Target Wedding Date</label>
                    <input
                      type="text"
                      placeholder="e.g. Nov 2026"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-300">Guest Count</label>
                    <select
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#DFBE78]"
                    >
                      <option value="Under 100">Under 100 Guests</option>
                      <option value="100-200">100 - 200 Guests</option>
                      <option value="150-300">150 - 300 Guests</option>
                      <option value="300-500">300 - 500 Guests</option>
                      <option value="500+">500+ Guests</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-300">Budget Range</label>
                    <select
                      value={budget}
                      onChange={e => setBudget(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#DFBE78]"
                    >
                      <option value="₹25L - ₹40L">₹25L - ₹40L</option>
                      <option value="₹40L - ₹75L">₹40L - ₹75L</option>
                      <option value="₹75L - ₹1.5 Cr">₹75L - ₹1.5 Crores</option>
                      <option value="₹1.5 Cr - ₹3 Cr">₹1.5 Cr - ₹3 Crores</option>
                      <option value="₹3 Cr+">₹3 Crores+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-300">Special Notes or Questions</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your specific venue preferences, catering requirements, or questions..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] hover:from-[#DFBE78] hover:to-[#C5A059] text-[#1A0509] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#1A0509]" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
