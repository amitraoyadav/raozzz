import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, MapPin, Users, Calendar, Phone, Mail } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, preselectedService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState(preselectedService || 'Wedding Planning');
  const [guests, setGuests] = useState('200');
  const [country, setCountry] = useState('India');
  const [state, setState] = useState('Delhi NCR');
  const [city, setCity] = useState('New Delhi');
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'RW-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(id);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#17181f] text-white border border-[#363744] rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#21232d] to-[#1c1d25] p-5 sm:p-6 border-b border-[#2d2e38] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[#FFD481] text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Let&rsquo;s Meet · Rathore Weddings</span>
            </div>
            <h3 className="text-xl font-bold text-white">Make An Inquiry</h3>
            <p className="text-xs text-stone-400 mt-0.5">
              Fill in your details and our team will get in touch to guide you through every step.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 text-[#FFD481] flex items-center justify-center mx-auto mb-3 border border-amber-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Inquiry Successfully Dispatched!</h4>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto mb-4">
                Thank you, <strong className="text-white">{name}</strong>. Our Lead Destination Wedding Planner is reviewing your details for <strong className="text-white">{city}, {state}</strong>.
              </p>
              <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl inline-block font-mono text-xs text-[#FFD481] mb-6">
                Inquiry Ref: {inquiryId}
              </div>
              <div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#FFD481] hover:bg-[#ffe3a6] text-black font-extrabold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rohini Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#20212b] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="e.g. rohini@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#20212b] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Address / Current Location</label>
                <input
                  type="text"
                  placeholder="e.g. South Extension / DLF Phase 5, Gurugram"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-[#20212b] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Interested Service *</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#20212b] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFD481]"
                  >
                    <option value="Wedding Planning">Wedding Planning</option>
                    <option value="Destination Wedding">Destination Wedding</option>
                    <option value="Venue Selection">Venue Selection Assistance</option>
                    <option value="Logistics and Hospitality">Logistics &amp; Hospitality</option>
                    <option value="Decor & Designing">Decor &amp; Designing</option>
                    <option value="Catering & Food">Catering &amp; Food Management</option>
                    <option value="Entertainment & Artist">Entertainment &amp; Artist Management</option>
                    <option value="Photography & Videography">Photography &amp; Videography</option>
                    <option value="Trousseau Gifting">Trousseau &amp; Gifting Assistance</option>
                    <option value="Wedding Stationary">Wedding Stationery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Expected No. of Guests *</label>
                  <input
                    type="number"
                    min="10"
                    max="5000"
                    placeholder="e.g. 250"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#20212b] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                    required
                  />
                </div>
              </div>

              {/* Preferred Destination */}
              <div className="bg-[#1e1f28] p-3.5 rounded-xl border border-stone-800">
                <span className="block text-xs font-bold text-[#FFD481] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Preferred Destination
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Country (e.g. India)"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-[#262734] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="State (e.g. Rajasthan / Goa)"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="bg-[#262734] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="City (e.g. Udaipur / Jaipur)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-[#262734] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD481]"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FFD481] to-[#f5be53] text-black font-black text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg shadow-[#FFD481]/15 cursor-pointer"
                >
                  Send An Inquiry
                </button>
                <p className="text-[11px] text-stone-500 text-center mt-2">
                  🔒 Zero spam. Your inquiry is directly routed to the senior partners at Rathore Weddings.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
