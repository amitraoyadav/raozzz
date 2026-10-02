import React, { useState } from 'react';
import { X, Calendar, MapPin, Phone, IndianRupee, Users, CheckCircle, Sparkles } from 'lucide-react';
import { SMLWVenue } from './smlwData';

interface CheckAvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVenue?: SMLWVenue | null;
  initialCity?: string;
}

export const CheckAvailabilityModal: React.FC<CheckAvailabilityModalProps> = ({
  isOpen,
  onClose,
  initialVenue,
  initialCity
}) => {
  const [destination, setDestination] = useState(initialCity || (initialVenue ? initialVenue.city : 'Udaipur'));
  const [venueName, setVenueName] = useState(initialVenue ? initialVenue.name : '');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guestCount, setGuestCount] = useState('200 - 350');
  const [budget, setBudget] = useState('₹40 - ₹60 Lakhs');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'SMLW-AVAIL-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#141416] text-white border border-[#303038] rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1c1d22] to-[#25262c] p-6 border-b border-[#2d2e35] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#d2cd48] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Real-Time Venue Availability & Pricing</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              {venueName ? `Check Availability: ${venueName}` : 'Check Real-Time Venue Availability'}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              Verified dates, room block rates &amp; banqueting estimates returned within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Availability Request Received!</h4>
              <p className="text-sm text-stone-300 max-w-md mx-auto mb-4">
                Our Senior Wedding Destination Specialist is currently contacting the hotel revenue desk for <strong className="text-white">{destination}</strong>.
              </p>
              <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl inline-block font-mono text-xs text-amber-400 mb-6">
                Inquiry Ref: {refId}
              </div>
              <div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#d2cd48] hover:bg-[#e0db52] text-black font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d2cd48]" /> Destination City
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-[#1e1f25] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                    required
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Goa">Goa</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mussoorie">Mussoorie</option>
                    <option value="Agra">Agra</option>
                    <option value="Kochi, Kerala">Kochi / Kerala</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Thailand">Thailand (Phuket/Hua Hin)</option>
                    <option value="Dubai">Dubai / UAE</option>
                    <option value="Bali">Bali (Indonesia)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#d2cd48]" /> Estimated Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#1e1f25] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                  >
                    <option value="50 - 100 Guests">50 - 100 Guests (Intimate)</option>
                    <option value="100 - 250 Guests">100 - 250 Guests (Standard)</option>
                    <option value="250 - 450 Guests">250 - 450 Guests (Grand)</option>
                    <option value="450 - 1000+ Guests">450 - 1000+ Guests (Royal Mega Wedding)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d2cd48]" /> Wedding Check-in Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-[#1e1f25] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d2cd48]" /> Wedding Check-out Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-[#1e1f25] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-[#d2cd48]" /> Target Total Wedding Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#1e1f25] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                >
                  <option value="₹25 - ₹40 Lakhs">₹25 - ₹40 Lakhs</option>
                  <option value="₹40 - ₹75 Lakhs">₹40 - ₹75 Lakhs</option>
                  <option value="₹75 Lakhs - ₹1.5 Crore">₹75 Lakhs - ₹1.5 Crore</option>
                  <option value="₹1.5 Crore - ₹3 Crore">₹1.5 Crore - ₹3 Crore</option>
                  <option value="₹3 Crore+ (Ultra Luxury)">₹3 Crore+ (Ultra Luxury Regal)</option>
                </select>
              </div>

              <div className="border-t border-stone-800 pt-3">
                <h5 className="text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
                  Contact Information for Quotation
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#1e1f25] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d2cd48]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#1e1f25] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d2cd48]"
                      required
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <input
                    type="email"
                    placeholder="Email Address (for Venue Proposal PDF) *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1e1f25] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d2cd48]"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d2cd48] to-[#b8b335] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 cursor-pointer shadow-lg shadow-[#d2cd48]/15 transition-all"
                >
                  Check Venue Dates &amp; Get Quotation
                </button>
                <p className="text-[11px] text-stone-500 text-center mt-2">
                  🔒 100% Free consultation. No spam. Direct institutional rates guaranteed.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
