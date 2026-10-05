import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2,
  Calendar,
  Loader2
} from 'lucide-react';
import { SAMAROH_CONFIG } from '../../data/samarohLuxeData';

export const SamarohContactPage: React.FC = () => {
  const [selectedStudioCity, setSelectedStudioCity] = useState('bengaluru');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeStudio = SAMAROH_CONFIG.CITIES.find(c => c.id === selectedStudioCity) || SAMAROH_CONFIG.CITIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${SAMAROH_CONFIG.DISPLAY_NAME} (${activeStudio.name} studio), I would like to schedule a 3D wedding design consultation.`
    );
    window.open(`https://wa.me/${SAMAROH_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#141210] text-white">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-[#1C1917] border-b border-stone-800 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
          <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
            Connect With Our Studios
          </span>
        </div>
        <h1 className="font-['Fraunces',serif] text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Contact Samaroh Luxe
        </h1>
        <p className="text-stone-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
          Design pavilions and fabrication centers across Bengaluru, Hyderabad, Delhi NCR, Goa, Chennai, and Mumbai.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Studio Locations & Direct Lines (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E06D53] block">
                Direct Contact Desks
              </span>
              <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-white">
                Experience Centers Across India
              </h2>
              <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                Visit us to touch bespoke textile fabrics, inspect brass and floral samples, and view 3D renders on high-res architectural displays.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E06D53]/15 text-[#E06D53] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="text-stone-400 block">General Central Hotline</span>
                  <a href={`tel:${SAMAROH_CONFIG.PHONE}`} className="font-bold text-white hover:text-[#E06D53] transition-colors text-sm">
                    {SAMAROH_CONFIG.PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="text-stone-400 block">Instant WhatsApp Concierge</span>
                  <button onClick={openWhatsApp} className="font-bold text-emerald-400 hover:underline cursor-pointer text-sm">
                    {SAMAROH_CONFIG.WHATSAPP_DISPLAY}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="text-stone-400 block">Email Proposals &amp; Moodboards</span>
                  <a href={`mailto:${SAMAROH_CONFIG.EMAIL}`} className="font-bold text-white hover:text-[#E06D53] transition-colors text-sm">
                    {SAMAROH_CONFIG.EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* City Studios List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-300 block">
                Regional Design Studios:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SAMAROH_CONFIG.CITIES.map(c => (
                  <div
                    key={c.id}
                    onClick={() => setSelectedStudioCity(c.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      selectedStudioCity === c.id
                        ? 'bg-[#E06D53]/15 border-[#E06D53] text-white'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-xs text-white">{c.name}</strong>
                      {c.isPrimary && (
                        <span className="text-[9px] bg-stone-800 text-[#E06D53] px-1.5 py-0.5 rounded font-bold">Flagship</span>
                      )}
                    </div>
                    <span className="text-[11px] text-stone-400 block mt-1">{c.studio}</span>
                    <span className="text-[10px] text-stone-500 block font-mono mt-0.5">{c.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-['Fraunces',serif] text-2xl font-bold text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white font-semibold">{name}</strong>. Our senior design director in <strong className="text-[#E06D53]">{activeStudio.name}</strong> will review your celebration details and prepare a preliminary 3D concept within 2 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-stone-800 hover:bg-stone-750 text-stone-300 text-xs font-semibold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 pb-4 border-b border-stone-800">
                  <h3 className="font-['Fraunces',serif] text-xl font-bold text-white">
                    Book an In-Studio or Virtual Design Session
                  </h3>
                  <p className="text-xs text-stone-400 font-light">
                    Share your requirements to view 3D renders matching your wedding venue layout.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvi Rao"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-stone-850 border border-stone-750 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98800 XXXXX"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full bg-stone-850 border border-stone-750 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@domain.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-stone-850 border border-stone-750 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Tentative Wedding Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={e => setEventDate(e.target.value)}
                      className="w-full bg-stone-850 border border-stone-750 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E06D53]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Celebration City Studio
                  </label>
                  <select
                    value={selectedStudioCity}
                    onChange={e => setSelectedStudioCity(e.target.value)}
                    className="w-full bg-stone-850 border border-stone-750 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E06D53] cursor-pointer"
                  >
                    {SAMAROH_CONFIG.CITIES.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.name} Studio ({c.studio})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Venue Name &amp; Decor Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your venue, shortlisted decor themes, expected guest count, and any specific ceremony ideas..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-stone-850 border border-stone-750 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E06D53] to-[#C8523B] hover:from-[#C8523B] hover:to-[#E06D53] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit for 3D Consultation</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-[10px] text-stone-500">
                    🔒 100% Privacy guaranteed. Zero spam or third-party marketing calls.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
