import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  Compass
} from 'lucide-react';
import { site78Config } from '../../config/site78Config';

export const Site78ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Room Booking Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*AURELIA GOA RESORT — CONTACT MESSAGE*\n\n*Subject:* ${subject}\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`;
    window.open(`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#222222] font-['Jost',sans-serif]">
      {/* Hero Header */}
      <section className="relative min-h-[420px] sm:min-h-[460px] flex items-center bg-[#1C1C1C] text-white overflow-hidden mb-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/assets/site78/banner-9.webp"
            alt="Contact Aurelia Resort Goa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-[#B99D75]/40 text-[#B99D75] text-xs font-semibold uppercase tracking-[0.2em]">
              We Are At Your Service
            </span>
            <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl text-white leading-tight">
              Contact Us <br />
              <span className="italic font-normal text-[#B99D75]">at Morjim Beach</span>
            </h1>
            <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
              Have questions regarding private pool suites, airport pickup transfers, restaurant dining, or bespoke banquet celebrations? We are just a message away.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards (Exact matching structure from reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Card 1: Locate Us */}
          <div className="bg-[#F3EEE7]/50 p-6 sm:p-7 rounded-3xl border border-[#E5DFD7] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#747157] shadow-xs">
              <MapPin className="w-5 h-5 text-[#747157]" />
            </div>
            <div className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
              Locate Us
            </div>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              {site78Config.FULL_ADDRESS}
            </p>
            <div className="pt-2">
              <a
                href={site78Config.MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#747157] hover:underline inline-flex items-center gap-1"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 text-[#B99D75]" />
              </a>
            </div>
          </div>

          {/* Card 2: Drop a Mail */}
          <div className="bg-[#F3EEE7]/50 p-6 sm:p-7 rounded-3xl border border-[#E5DFD7] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#747157] shadow-xs">
              <Mail className="w-5 h-5 text-[#747157]" />
            </div>
            <div className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
              Drop A Mail
            </div>
            <div className="space-y-1.5 text-xs text-stone-600 font-light">
              <div>
                <span className="font-semibold text-stone-800 block">Room Bookings:</span>
                <a href={`mailto:${site78Config.EMAIL_RESERVATIONS}`} className="hover:underline">
                  {site78Config.EMAIL_RESERVATIONS}
                </a>
              </div>
              <div>
                <span className="font-semibold text-stone-800 block">General Enquiry:</span>
                <a href={`mailto:${site78Config.EMAIL_GENERAL}`} className="hover:underline">
                  {site78Config.EMAIL_GENERAL}
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Call Us */}
          <div className="bg-[#F3EEE7]/50 p-6 sm:p-7 rounded-3xl border border-[#E5DFD7] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#747157] shadow-xs">
              <Phone className="w-5 h-5 text-[#747157]" />
            </div>
            <div className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
              Call Us
            </div>
            <div className="space-y-1.5 text-xs text-stone-600 font-light">
              <div>
                <span className="font-semibold text-stone-800 block">Room Bookings:</span>
                <a href={`tel:${site78Config.PHONE_ROOMS_RAW}`} className="hover:underline">
                  {site78Config.PHONE_ROOMS}
                </a>
              </div>
              <div>
                <span className="font-semibold text-stone-800 block">Restaurant Reservations:</span>
                <a href={`tel:${site78Config.PHONE_RESTAURANT_RAW}`} className="hover:underline">
                  {site78Config.PHONE_RESTAURANT}
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: Check-in / Check-out */}
          <div className="bg-[#F3EEE7]/50 p-6 sm:p-7 rounded-3xl border border-[#E5DFD7] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#747157] shadow-xs">
              <Clock className="w-5 h-5 text-[#747157]" />
            </div>
            <div className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
              Timings
            </div>
            <div className="space-y-1.5 text-xs text-stone-600 font-light">
              <div>
                <span className="font-semibold text-stone-800 block">Check-In:</span>
                <span>{site78Config.CHECK_IN_TIME}</span>
              </div>
              <div>
                <span className="font-semibold text-stone-800 block">Check-Out:</span>
                <span>{site78Config.CHECK_OUT_TIME}</span>
              </div>
              <div className="text-[11px] text-stone-500 pt-1">
                Early check-in subject to availability
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column: Send Us a Message Form & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E5DFD7] shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#747157] tracking-widest">
                Get In Touch
              </span>
              <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#1C1C1C]">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light">
                Fill in the form below and our guest concierge will reply promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-['Cormorant',serif] font-bold text-2xl text-emerald-950">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-emerald-800 font-light">
                  Thank you for reaching out. We have opened a direct chat on WhatsApp with our concierge desk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                      Phone Number
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
                    Enquiry Subject
                  </label>
                  <select
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                  >
                    <option value="Room Booking Enquiry">Room Booking Enquiry</option>
                    <option value="Restaurant Table Reservation">Restaurant Table Reservation</option>
                    <option value="Event / Wedding Enquiry">Event / Wedding Enquiry</option>
                    <option value="Airport Pickup Assistance">Airport Pickup Assistance</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Write your dates, questions, or requirements here..."
                    className="w-full p-3 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#B99D75]" />
                  <span>Send Message via Concierge</span>
                </button>
              </form>
            )}
          </div>

          {/* Embedded Map & Location Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD7] aspect-[4/3] bg-stone-100">
              <iframe
                title="Aurelia Goa Location Map"
                src={site78Config.MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-6 rounded-2xl bg-[#F3EEE7] border border-[#E5DFD7] space-y-2 text-xs text-stone-600 font-light">
              <div className="font-['Cormorant',serif] font-bold text-xl text-[#1C1C1C]">
                How to Reach Aurelia Goa
              </div>
              <p>• <strong>By Air:</strong> Fly into Manohar International Airport MOPA (GOX) — 32 km (approx. 35 mins). Chauffeur airport transfers available upon request.</p>
              <p>• <strong>From South Goa / Dabolim:</strong> Dabolim Airport (GOI) is approx. 54 km (70 mins via Atal Setu bypass).</p>
              <p>• <strong>By Rail:</strong> Nearest major railway stations are Thivim (20 km / 25 mins) and Karmali (38 km / 45 mins).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
