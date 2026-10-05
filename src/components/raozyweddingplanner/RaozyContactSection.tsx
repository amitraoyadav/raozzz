import React, { useState } from 'react';
import { raozyConfig } from '../../config/raozyWeddingConfig';

export const RaozyContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    coupleNames: '',
    phone: '',
    email: '',
    weddingDate: '',
    destination: 'delhi',
    guestCount: '250',
    budgetTier: '50-100',
    scope: 'turnkey',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Wedding Inquiry — ${raozyConfig.SITE_NAME}*
Couple: ${formData.coupleNames || 'Prospective Client'}
Phone: ${formData.phone}
Email: ${formData.email}
Wedding Date: ${formData.weddingDate || 'TBD'}
Destination: ${formData.destination}
Guests: ${formData.guestCount}
Budget Tier: ${formData.budgetTier}
Scope: ${formData.scope}
Notes: ${formData.notes || 'Looking for senior director availability.'}`;

    window.open(`https://wa.me/${raozyConfig.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0D0B0A] text-stone-200 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Atelier Coordinates & Exclusivity Note */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
                Check Season Availability
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-6">
                Reserve Your Date with Raozy
              </h2>
              <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed mb-8">
                Due to our strict <strong className="text-stone-200">60-weddings-a-year policy</strong>, peak auspicious winter muhurats 
                are allotted on a first-confirmed basis. Initiate your conversation directly with our Founding Directors.
              </p>

              {/* Atelier Details */}
              <div className="space-y-6 text-xs sm:text-sm font-sans mb-10">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#DFC082]/10 border border-[#DFC082]/30 flex items-center justify-center text-[#DFC082] shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-white">Flagship Atelier &amp; Studio</h4>
                    <p className="text-stone-400 mt-0.5 leading-relaxed">{raozyConfig.ADDRESS}</p>
                    <span className="text-[11px] text-[#DFC082]">By Prior Appointment Only</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#DFC082]/10 border border-[#DFC082]/30 flex items-center justify-center text-[#DFC082] shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-white">Direct Director Lines</h4>
                    <p className="text-stone-400 mt-0.5">
                      <a href={`tel:${raozyConfig.PHONE.replace(/\s+/g, '')}`} className="text-stone-200 hover:text-[#DFC082]">
                        {raozyConfig.PHONE_DISPLAY}
                      </a>
                    </p>
                    <p className="text-stone-400 text-xs">
                      Email: <a href={`mailto:${raozyConfig.EMAIL}`} className="hover:underline">{raozyConfig.EMAIL}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-700/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-white">WhatsApp VIP Concierge</h4>
                    <p className="text-emerald-400 mt-0.5 font-medium">{raozyConfig.WHATSAPP_DISPLAY}</p>
                    <span className="text-[11px] text-stone-500">Instant responses within 30 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* City Studios List */}
            <div className="p-4 rounded-xl bg-[#14110E] border border-stone-800 text-xs">
              <span className="text-[10px] font-serif text-[#DFC082] uppercase tracking-widest block mb-2">
                Destination Presence:
              </span>
              <div className="grid grid-cols-2 gap-2 text-stone-400">
                <div>• Gurugram (Atelier HQ)</div>
                <div>• Udaipur (Lake Concierge)</div>
                <div>• South Delhi (Design Loft)</div>
                <div>• Jaipur (Heritage Studio)</div>
                <div>• South Goa (Beach Desk)</div>
                <div>• Dubai (Downtown Liaison)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#151210] p-8 sm:p-10 rounded-2xl border border-stone-800 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#DFC082]/20 border border-[#DFC082] text-[#DFC082] mx-auto flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-white">
                    Availability Request Received
                  </h3>
                  <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.coupleNames || 'Valued Couple'}</strong>. 
                    A Senior Wedding Director has been notified to verify date exclusivity for your destination.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-serif text-xs font-bold uppercase tracking-wider transition"
                    >
                      Connect on WhatsApp Now
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded bg-stone-900 text-stone-300 text-xs font-sans border border-stone-700 hover:bg-stone-800 transition"
                    >
                      Edit Submission
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-stone-800 pb-4">
                    <h3 className="text-xl font-serif font-semibold text-white">
                      Request Date Availability &amp; Atelier Proposal
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      Fill out your celebration details below or chat with us directly.
                    </p>
                  </div>

                  {/* 1. Names and Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1.5">
                        Couple / Family Names *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya &amp; Kabir"
                        value={formData.coupleNames}
                        onChange={(e) => setFormData({ ...formData, coupleNames: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1.5">
                        Approximate Wedding Date / Month
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. November 2025 / Dec 2025"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                      />
                    </div>
                  </div>

                  {/* 2. Destination & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1.5">
                        Destination
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-3 py-2.5 rounded bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-[#DFC082]"
                      >
                        <option value="delhi">Gurugram / Delhi NCR</option>
                        <option value="udaipur">Udaipur Palaces</option>
                        <option value="jaipur">Jaipur Heritage Forts</option>
                        <option value="goa">South Goa Beachfront</option>
                        <option value="corbett">Jim Corbett Wilderness</option>
                        <option value="dubai">Dubai &amp; UAE</option>
                        <option value="other">Other Destination</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1.5">
                        Expected Guests
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-3 py-2.5 rounded bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-[#DFC082]"
                      >
                        <option value="100">Intimate (Up to 100)</option>
                        <option value="250">200 to 350 Guests</option>
                        <option value="500">400 to 600 Guests</option>
                        <option value="800">700 to 1,000+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1.5">
                        Celebration Scope
                      </label>
                      <select
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full px-3 py-2.5 rounded bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-[#DFC082]"
                      >
                        <option value="turnkey">Full Turnkey Planning + Decor</option>
                        <option value="decor">In-House Decor Production Only</option>
                        <option value="emergency">Emergency 15-Day Takeover</option>
                        <option value="venue">Venue Scouting &amp; Buyout</option>
                      </select>
                    </div>
                  </div>

                  {/* 3. Notes */}
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1.5">
                      Your Celebration Vision / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your venue preferences, functions planned, or specific decor styles you admire..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded bg-gradient-to-r from-[#C5A059] to-[#DFC082] text-[#171410] font-serif font-bold text-xs tracking-wider uppercase shadow-xl hover:brightness-110 active:scale-98 transition"
                    >
                      Submit Availability Request
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto py-3.5 px-6 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-sans flex items-center justify-center gap-2 transition"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z" />
                      </svg>
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
