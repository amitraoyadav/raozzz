import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Shield,
  Shirt,
  Calendar
} from 'lucide-react';
import { site78ClubConfig } from '../../config/site78ClubConfig';

export const Site78ClubContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [memberStatus, setMemberStatus] = useState<'yes' | 'no'>('no');
  const [memberId, setMemberId] = useState('');
  const [department, setDepartment] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const msg = `Hello Kensington Club Concierge, I am contacting you regarding ${department} from the club website.`;
    window.open(`https://wa.me/${site78ClubConfig.WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#1C242C] font-['Jost',sans-serif]">
      {/* Header Banner */}
      <section className="bg-[#0F2537] text-white py-14 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A869] block">
            Reach Out To Us
          </span>
          <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl text-white">
            Contact & Location
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto">
            Our Concierge and Administration teams are at your service for membership enquiries, banquet bookings, and reciprocal privileges.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Official Directory & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[#183D2F] text-xs font-bold uppercase tracking-[0.25em]">
                Direct Contacts
              </span>
              <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#0F2537]">
                Club Secretariat
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Conveniently situated on the Outer Ring Road in South Delhi with effortless metro connectivity and generous valet parking.
              </p>
            </div>

            {/* Department Contacts Card */}
            <div className="p-6 rounded-2xl bg-[#F9F8F5] border border-[#E8E5DF] space-y-4 text-xs font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0F2537] font-semibold text-sm">Physical Address</strong>
                  <span className="text-stone-600">{site78ClubConfig.FULL_ADDRESS}</span>
                  <div className="text-[11px] text-[#183D2F] font-medium mt-1">
                    Near {site78ClubConfig.NEAREST_METRO}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#E8E5DF]">
                <Phone className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block text-[#0F2537] font-semibold text-sm">Phone Lines</strong>
                  <div>Reception: <a href={`tel:${site78ClubConfig.PHONE_RECEPTION_RAW}`} className="text-[#183D2F] font-medium">{site78ClubConfig.PHONE_RECEPTION}</a></div>
                  <div>Banquets & Lawns: <a href={`tel:${site78ClubConfig.PHONE_BANQUETS_RAW}`} className="text-[#183D2F] font-medium">{site78ClubConfig.PHONE_BANQUETS}</a></div>
                  <div>Sports & Pool: <a href={`tel:${site78ClubConfig.PHONE_SPORTS_RAW}`} className="text-[#183D2F] font-medium">{site78ClubConfig.PHONE_SPORTS}</a></div>
                  <div>Secretary Office: <a href={`tel:${site78ClubConfig.PHONE_OFFICE_RAW}`} className="text-[#183D2F] font-medium">{site78ClubConfig.PHONE_OFFICE}</a></div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#E8E5DF]">
                <Mail className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block text-[#0F2537] font-semibold text-sm">Official Emails</strong>
                  <div>General: <a href={`mailto:${site78ClubConfig.EMAIL_GENERAL}`} className="text-[#183D2F]">{site78ClubConfig.EMAIL_GENERAL}</a></div>
                  <div>Membership: <a href={`mailto:${site78ClubConfig.EMAIL_MEMBERSHIP}`} className="text-[#183D2F]">{site78ClubConfig.EMAIL_MEMBERSHIP}</a></div>
                  <div>Banquets: <a href={`mailto:${site78ClubConfig.EMAIL_BANQUETS}`} className="text-[#183D2F]">{site78ClubConfig.EMAIL_BANQUETS}</a></div>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-2xl bg-[#0F2537] text-white space-y-3.5 shadow-md">
              <h3 className="font-['Cormorant',serif] font-bold text-xl text-[#C5A869] border-b border-white/10 pb-2">
                Operating Timings
              </h3>
              <div className="space-y-2 text-xs font-light text-stone-200">
                <div className="flex justify-between">
                  <span>Main Club Gates</span>
                  <span className="font-medium text-white">{site78ClubConfig.HOURS_CLUB}</span>
                </div>
                <div className="flex justify-between">
                  <span>Dining Room</span>
                  <span className="font-medium text-white">{site78ClubConfig.HOURS_DINING}</span>
                </div>
                <div className="flex justify-between">
                  <span>Vintage Oak Bar</span>
                  <span className="font-medium text-white">{site78ClubConfig.HOURS_BAR}</span>
                </div>
                <div className="flex justify-between">
                  <span>Swimming Pool</span>
                  <span className="font-medium text-white">{site78ClubConfig.HOURS_SWIMMING}</span>
                </div>
                <div className="flex justify-between">
                  <span>Administrative Office</span>
                  <span className="font-medium text-white">{site78ClubConfig.HOURS_OFFICE}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleWhatsAppChat}
                  className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E5DF] shadow-lg">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#183D2F] block">
                      Direct Communication
                    </span>
                    <h2 className="font-['Cormorant',serif] font-bold text-2xl sm:text-3xl text-[#0F2537]">
                      Send an Enquiry or Feedback
                    </h2>
                    <p className="text-xs text-stone-500 font-light mt-1">
                      Our front office executive will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-stone-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Malhotra"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-stone-700">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98110 00000"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-stone-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-stone-700">Department / Nature of Query</label>
                      <select
                        value={department}
                        onChange={e => setDepartment(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs rounded-xl border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden bg-white"
                      >
                        <option value="General Enquiry">General Information</option>
                        <option value="Membership Enquiry">Membership Dossier & Balloting</option>
                        <option value="Banquet & Lawn Booking">Banquet & Lawn Booking</option>
                        <option value="Sports & Pool Academy">Sports & Coaching Academy</option>
                        <option value="Affiliated Club Intro Card">Affiliated Club Intro Card</option>
                        <option value="Feedback / Suggestion">Feedback to Management</option>
                      </select>
                    </div>
                  </div>

                  {/* Member verification toggle */}
                  <div className="p-4 rounded-xl bg-[#F9F8F5] border border-[#E8E5DF] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#0F2537]">Are you an existing Kensington Club Member?</span>
                      <div className="flex items-center gap-3">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="member"
                            checked={memberStatus === 'yes'}
                            onChange={() => setMemberStatus('yes')}
                          />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="member"
                            checked={memberStatus === 'no'}
                            onChange={() => setMemberStatus('no')}
                          />
                          <span>No</span>
                        </label>
                      </div>
                    </div>

                    {memberStatus === 'yes' && (
                      <input
                        type="text"
                        placeholder="Enter your Member ID (e.g. MEM-1972-884)"
                        value={memberId}
                        onChange={e => setMemberId(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden bg-white"
                      />
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-700">Message / Request Details *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please mention dates, number of guests, or specific assistance needed..."
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#183D2F] hover:bg-[#0F2537] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message to Club Desk</span>
                    <Send className="w-4 h-4 text-[#C5A869]" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Cormorant',serif] font-bold text-3xl text-[#0F2537]">
                    Thank You, {name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light max-w-sm mx-auto leading-relaxed">
                    Your enquiry regarding <strong>{department}</strong> has been logged with reference number <strong>#KC-REQ-{(Math.random() * 90000 + 10000).toFixed(0)}</strong>. Our desk will contact you at {phone} / {email}.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#0F2537] text-white text-xs font-semibold uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full Width Google Maps Embed Frame */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E8E5DF]">
          <div className="p-4 bg-[#F9F8F5] border-b border-[#E8E5DF] flex items-center justify-between text-xs text-stone-600">
            <span className="font-semibold text-[#0F2537] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C5A869]" />
              <span>Interactive Navigation & Location Map</span>
            </span>
            <span>South Delhi · Hauz Khas - Panchsheel Sector</span>
          </div>
          <div className="h-80 sm:h-96 w-full bg-stone-900">
            <iframe
              src={site78ClubConfig.MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Club Interactive Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
