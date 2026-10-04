import React, { useState } from 'react';
import {
  X,
  Calendar,
  Sparkles,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Heart,
  Building,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { DESTINATIONS_DATA, DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
  initialPackage?: string;
}

export const DevdasInquiryModal: React.FC<DevdasInquiryModalProps> = ({
  isOpen,
  onClose,
  initialDestination,
  initialPackage,
}) => {
  const [coupleNames, setCoupleNames] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(initialDestination || 'Udaipur, Rajasthan');
  const [guestCount, setGuestCount] = useState('100 - 150 guests');
  const [weddingDate, setWeddingDate] = useState('');
  const [estBudget, setEstBudget] = useState('₹40 Lacs - ₹60 Lacs');
  const [notes, setNotes] = useState(initialPackage ? `Inquiring for ${initialPackage}` : '');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-amber-900/10 overflow-hidden my-auto max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#7A1C30] p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIP Consultation Desk</span>
          </div>

          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
            Plan Your Destination Celebration
          </h3>
          <p className="text-xs text-rose-100 mt-1">
            Connect directly with a Senior Nuptial Artiste. Receive a preliminary destination feasibility study and venue comparative matrix within 24 hours.
          </p>
        </div>

        {/* Content Form */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-2xl text-slate-900">
                Inquiry Successfully Logged!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{coupleNames}</strong>. A dedicated Devdas Nuptial Director will review your dates ({weddingDate || 'TBD'}) and connect via WhatsApp/Call at <strong>{phone}</strong> within 12 business hours.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 max-w-md mx-auto text-left">
                <strong>Need immediate assistance?</strong> Call our Gurgaon lead studio directly at {DEVDAS_CONFIG.phonePrimary} or WhatsApp {DEVDAS_CONFIG.whatsappDisplay}.
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#7A1C30] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close &amp; Explore More Venues
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Couple Names / Family Representative *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya & Rohan"
                      value={coupleNames}
                      onChange={(e) => setCoupleNames(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#7A1C30] focus:ring-1 focus:ring-[#7A1C30] outline-none text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Contact Phone (with WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98100 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#7A1C30] focus:ring-1 focus:ring-[#7A1C30] outline-none text-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="couple@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#7A1C30] focus:ring-1 focus:ring-[#7A1C30] outline-none text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Preferred Wedding Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#7A1C30] outline-none text-slate-900"
                  >
                    {DESTINATIONS_DATA.map((d) => (
                      <option key={d.id} value={`${d.name}, ${d.stateOrCountry}`}>
                        {d.name} ({d.stateOrCountry})
                      </option>
                    ))}
                    <option value="Undecided / Open to Suggestions">Undecided / Open to Suggestions</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tentative Wedding Date / Month
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dec 2026 or Winter"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#7A1C30] outline-none text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Estimated Guest Count
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#7A1C30] outline-none text-slate-900"
                  >
                    <option value="Under 75 guests (Intimate)">Under 75 guests (Intimate)</option>
                    <option value="75 - 150 guests">75 - 150 guests</option>
                    <option value="150 - 250 guests">150 - 250 guests</option>
                    <option value="250 - 400 guests">250 - 400 guests</option>
                    <option value="400+ guests (Grand)">400+ guests (Grand)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Estimated Total Budget
                  </label>
                  <select
                    value={estBudget}
                    onChange={(e) => setEstBudget(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#7A1C30] outline-none text-slate-900"
                  >
                    <option value="₹25 Lacs - ₹40 Lacs">₹25 Lacs - ₹40 Lacs</option>
                    <option value="₹40 Lacs - ₹60 Lacs">₹40 Lacs - ₹60 Lacs</option>
                    <option value="₹60 Lacs - ₹1 Crore">₹60 Lacs - ₹1 Crore</option>
                    <option value="₹1 Crore - ₹2 Crore">₹1 Crore - ₹2 Crore</option>
                    <option value="₹2 Crore+ (Ultra Luxury)">₹2 Crore+ (Ultra Luxury)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Wedding Vision, Functions &amp; Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your events (e.g. 2-day beach sangeet + pool party, or 3-day royal palace pheras)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#7A1C30] outline-none text-slate-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-red-950/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Request Bespoke Wedding Proposal</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Confidential · Direct Nuptial Director Contact · Zero Vendor Spams</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
