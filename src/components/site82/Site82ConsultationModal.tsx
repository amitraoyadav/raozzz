import React, { useState } from 'react';
import {
  X,
  Phone,
  Calendar,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Send,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { site82Config } from '../../config/site82Config';
import { CITIES_LIST, WEALTH_PROPERTIES } from '../../data/site82Data';

interface Site82ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillProperty?: string;
  prefillCity?: string;
}

export const Site82ConsultationModal: React.FC<Site82ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefillProperty = '',
  prefillCity = ''
}) => {
  const [activeTab, setActiveTab] = useState<'consultation' | 'site-visit' | 'callback'>('consultation');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState(prefillCity || 'Noida');
  const [propertyInterest, setPropertyInterest] = useState(prefillProperty || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10 AM - 1 PM)');
  const [budget, setBudget] = useState('₹1 Cr - ₹2.5 Cr');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#F0D9CC] max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#F54900] to-[#F36F21] text-white p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Brokerage &bull; Certified RERA Advisor</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {activeTab === 'consultation' && 'Book Private Real Estate Consultation'}
            {activeTab === 'site-visit' && 'Schedule Free VIP Site Visit'}
            {activeTab === 'callback' && 'Request Instant Callback in 15 Mins'}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm mt-1">
            Connect directly with Wealth Nexus senior property strategists. 100% confidential.
          </p>

          {/* Navigation Tabs */}
          <div className="flex gap-2 mt-5">
            <button
              onClick={() => setActiveTab('consultation')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'consultation'
                  ? 'bg-white text-[#F54900] shadow-md'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              Consultation
            </button>
            <button
              onClick={() => setActiveTab('site-visit')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'site-visit'
                  ? 'bg-white text-[#F54900] shadow-md'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              Site Visit
            </button>
            <button
              onClick={() => setActiveTab('callback')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'callback'
                  ? 'bg-white text-[#F54900] shadow-md'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              Instant Callback
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900">
                Inquiry Successfully Submitted!
              </h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. A dedicated Wealth Nexus property consultant will contact you on <strong>{phone}</strong> within 15 minutes with verified inventory and floor plan brochures.
              </p>

              <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-left text-xs space-y-1.5 text-neutral-700 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-semibold capitalize text-[#F54900]">{activeTab}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">City / Target:</span>
                  <span className="font-semibold">{city || 'All Delhi-NCR'}</span>
                </div>
                {propertyInterest && (
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Project:</span>
                    <span className="font-semibold">{propertyInterest}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-neutral-500">RERA Advisor:</span>
                  <span className="font-semibold">Noida Corporate Desk</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Done
                </button>
                <a
                  href={`https://wa.me/${site82Config.WHATSAPP}?text=Hi,%20I%20just%20submitted%20inquiry%20for%20${encodeURIComponent(propertyInterest || 'Property Advisory')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Name <span className="text-[#F54900]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#F54900] focus:ring-1 focus:ring-[#F54900]"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Mobile Number <span className="text-[#F54900]">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-neutral-300 bg-neutral-50 text-xs text-neutral-500 font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-r-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#F54900] focus:ring-1 focus:ring-[#F54900]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#F54900] focus:ring-1 focus:ring-[#F54900]"
                  />
                </div>

                {/* Target City */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Target City / Region
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#F54900] focus:ring-1 focus:ring-[#F54900] bg-white cursor-pointer"
                  >
                    {CITIES_LIST.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                    <option value="Other">Other Location</option>
                  </select>
                </div>
              </div>

              {/* Property of Interest */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Specific Project or Requirement
                </label>
                <input
                  type="text"
                  value={propertyInterest}
                  onChange={(e) => setPropertyInterest(e.target.value)}
                  placeholder="e.g. Orion One 32, Godrej Tropical Isle, Commercial Retail Shop"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#F54900] focus:ring-1 focus:ring-[#F54900]"
                />
              </div>

              {/* Extra fields if site-visit is selected */}
              {activeTab === 'site-visit' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3.5 rounded-xl bg-orange-50/60 border border-orange-200/80">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#F54900]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#F54900]"
                    >
                      <option>Morning (10:00 AM - 01:00 PM)</option>
                      <option>Afternoon (01:00 PM - 04:00 PM)</option>
                      <option>Evening (04:00 PM - 07:00 PM)</option>
                      <option>Weekend VIP Slot</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Budget Preference */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Investment / Purchasing Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {['Under ₹60 L', '₹60 L - ₹1.5 Cr', '₹1.5 Cr - ₹3 Cr', '₹3 Cr+ Ultra-Luxury'].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`px-2.5 py-2 rounded-xl text-center border font-medium transition-all cursor-pointer ${
                        budget === b
                          ? 'border-[#F54900] bg-orange-50 text-[#F54900]'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comments / Notes */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Any Specific Requirements or Questions
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Need immediate possession, looking for pre-leased commercial with high rental yield..."
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-[#F54900] focus:ring-1 focus:ring-[#F54900]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Your contact is protected by NDAs and UP RERA norms.
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#F54900] to-[#F36F21] text-white font-bold text-xs hover:brightness-110 shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {activeTab === 'consultation' && 'Confirm Consultation'}
                    {activeTab === 'site-visit' && 'Confirm VIP Site Visit'}
                    {activeTab === 'callback' && 'Request 15-Min Callback'}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
