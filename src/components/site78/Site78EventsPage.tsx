import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Sparkles,
  Heart,
  Music,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Wine,
  Camera,
  Layers,
  Clock
} from 'lucide-react';
import { EVENTS_DATA, EventServiceItem } from '../../data/site78Data';
import { site78Config } from '../../config/site78Config';

interface Site78EventsPageProps {
  onOpenBooking: () => void;
}

export const Site78EventsPage: React.FC<Site78EventsPageProps> = ({
  onOpenBooking
}) => {
  const [selectedEventType, setSelectedEventType] = useState(EVENTS_DATA[0].title);
  const [guestCount, setGuestCount] = useState('80');
  const [eventDate, setEventDate] = useState('2026-11-20');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*AURELIA GOA — EVENT & CELEBRATION ENQUIRY*\n\n*Event Type:* ${selectedEventType}\n*Approx Guests:* ${guestCount}\n*Target Date:* ${eventDate}\n*Contact Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Special Requirements:* ${notes || 'None'}\n\nPlease dispatch event brochure & customized banquet proposal.`;
    window.open(`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#222222] font-['Jost',sans-serif]">
      {/* Hero Banner */}
      <section className="relative min-h-[460px] sm:min-h-[520px] flex items-center bg-[#1C1C1C] text-white overflow-hidden mb-20">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/assets/site78/banner-9.webp"
            alt="Events and Celebration at Aurelia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-[#B99D75]/40 text-[#B99D75] text-xs font-semibold uppercase tracking-[0.2em]">
              Luxury Gatherings & Banquets
            </span>
            <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl text-white leading-tight">
              Events and Celebration <br />
              <span className="italic font-normal text-[#B99D75]">by Morjim Sands</span>
            </h1>
            <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
              From intimate sunset beach weddings to chic poolside sundowners, high-profile fashion previews, and executive corporate retreats—host your milestone in an unforgettable coastal haven.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Overview */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>Curated Hospitality</span>
            <span className="w-8 h-[1px] bg-[#B99D75]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl text-[#1C1C1C]">
            Signature Celebrations Tailored to You
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
            <span className="text-[#B99D75] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Our dedicated banquet managers, master culinary chefs, and sound engineers ensure every moment runs with frictionless perfection.
          </p>
        </div>

        {/* Event Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {EVENTS_DATA.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E5DFD7] hover:border-[#B99D75] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#B99D75] text-[10px] font-bold uppercase tracking-wider">
                    {event.capacity}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <span className="text-[11px] font-semibold text-[#747157] uppercase tracking-wider block">
                    {event.tagline}
                  </span>
                  <h3 className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-3 space-y-1.5 border-t border-[#F3EEE7]">
                    {event.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#747157] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => {
                    setSelectedEventType(event.title);
                    const el = document.getElementById('event-inquiry-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F3EEE7] group-hover:bg-[#747157] text-[#222222] group-hover:text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B99D75] group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Venues Specification Table */}
        <div className="bg-[#F3EEE7] rounded-3xl p-8 sm:p-12 border border-[#E5DFD7] mb-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-[#747157] tracking-widest">
              Spaces & Capacities
            </span>
            <h3 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#1C1C1C]">
              Bespoke Venues on the Property
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E5DFD7] space-y-3">
              <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
                The Sunset Beach Lawn
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Open-air manicured grass lawn facing the Morjim dunes. Ideal for wedding mandaps, dinner receptions, and live bands under the open starry sky.
              </p>
              <div className="text-xs font-semibold text-[#747157] pt-2 border-t border-[#F3EEE7]">
                Capacity: 50 – 250 Guests
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5DFD7] space-y-3">
              <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
                Poolside Deck & Veranda
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Refined teakwood deck surrounding ambient freshwater pools. Shaded with frangipani blossoms and tropical palms for chic day sundowners and cocktail nights.
              </p>
              <div className="text-xs font-semibold text-[#747157] pt-2 border-t border-[#F3EEE7]">
                Capacity: 30 – 120 Guests
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5DFD7] space-y-3">
              <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
                Resto-Bar Covered Pavilion
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Weather-protected open architectural wooden pavilion with full cocktail bar, state-of-the-art acoustic sound rigging, and bespoke banquet buffet stations.
              </p>
              <div className="text-xs font-semibold text-[#747157] pt-2 border-t border-[#F3EEE7]">
                Capacity: 40 – 150 Guests
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Event Enquiry Form */}
        <div id="event-inquiry-form" className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DFD7] shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase text-[#747157] tracking-widest">
              Plan Your Celebration
            </span>
            <h3 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#1C1C1C]">
              Request an Event Proposal & Quote
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light">
              Fill in your details below and our Events Director will connect with a tailored floor plan, menu options, and availability within 4 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-['Cormorant',serif] font-bold text-2xl text-emerald-950">
                Enquiry Received with Gratitude!
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 font-light">
                Our Banquet Events Manager is reviewing your requirements and will reach out via WhatsApp and Email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                    Event Type
                  </label>
                  <select
                    value={selectedEventType}
                    onChange={e => setSelectedEventType(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                  >
                    {EVENTS_DATA.map(ev => (
                      <option key={ev.id} value={ev.title}>
                        {ev.title}
                      </option>
                    ))}
                    <option value="Custom Bespoke Celebration">Other Celebration</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                    Expected Number of Guests
                  </label>
                  <input
                    type="number"
                    value={guestCount}
                    onChange={e => setGuestCount(e.target.value)}
                    placeholder="e.g. 50"
                    className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                    Target Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 Mobile Number"
                    className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                  Special Notes / Catering / Floral Requests
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Tell us about your celebration theme, dietary preferences, or room stay requirements..."
                  className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Submit Event Inquiry</span>
                <ArrowRight className="w-4 h-4 text-[#B99D75]" />
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-[#E5DFD7] text-center text-xs text-stone-500">
            Direct Events Line: <a href={`tel:${site78Config.PHONE_EVENTS_RAW}`} className="text-[#747157] font-semibold underline">{site78Config.PHONE_EVENTS}</a> · Email: <a href={`mailto:${site78Config.EMAIL_EVENTS}`} className="text-[#747157] font-semibold underline">{site78Config.EMAIL_EVENTS}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
