import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Calendar, Users, MapPin, IndianRupee, Phone, Mail } from 'lucide-react';
import { WEDDING_CITIES, RAOZ_WEDDINGS_CONTACT } from '../../data/raozWeddingsData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedCity?: string;
}

export const ProposalModal: React.FC<Props> = ({ isOpen, onClose, selectedCity = 'bengaluru' }) => {
  const [step, setStep] = useState(1);
  const [city, setCity] = useState(selectedCity);
  const [guestCount, setGuestCount] = useState('200-500 guests');
  const [budget, setBudget] = useState('₹15 - ₹25 Lakhs');
  const [eventDate, setEventDate] = useState('Within next 6 months');
  const [servicesNeeded, setServicesNeeded] = useState<string[]>([
    'Venue Booking',
    'Decor & Mandap',
    'Photography'
  ]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    setServicesNeeded(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-rose-100 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#9A2157] text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Instant Wedding Proposal Tool</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 font-serif">
              Personalized Wedding Proposal in 30 Seconds
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-6">
              Tell us your preferences and our AI wedding concierge will curate tailored venues, decor designs, and guaranteed discounted rates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9A2157]" />
                  Wedding City / Destination
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-sm font-semibold border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#9A2157] outline-none"
                >
                  {WEDDING_CITIES.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.venuesCount}+ Verified Venues)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#9A2157]" />
                    Estimated Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full text-xs font-semibold border border-slate-300 rounded-xl px-3 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#9A2157] outline-none"
                  >
                    <option>50 - 150 guests (Intimate)</option>
                    <option>200 - 500 guests (Classic)</option>
                    <option>500 - 1,000 guests (Grand)</option>
                    <option>1,000+ guests (Mega Royal)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <IndianRupee className="w-3.5 h-3.5 text-[#9A2157]" />
                    Estimated Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full text-xs font-semibold border border-slate-300 rounded-xl px-3 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#9A2157] outline-none"
                  >
                    <option>Under ₹10 Lakhs</option>
                    <option>₹10 - ₹20 Lakhs</option>
                    <option>₹20 - ₹40 Lakhs</option>
                    <option>₹40 Lakhs - ₹1 Crore</option>
                    <option>₹1 Crore+ (Royal Destination)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#9A2157]" />
                  Tentative Wedding Date / Timeline
                </label>
                <select
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full text-xs font-semibold border border-slate-300 rounded-xl px-3 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#9A2157] outline-none"
                >
                  <option>Within next 3 months (Urgent dates available)</option>
                  <option>Within next 6 months</option>
                  <option>Upcoming Winter Saaya Season (Oct - Feb)</option>
                  <option>Next Year / Flexible dates</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Services You Require (Check all that apply):
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Venue Booking',
                    'Decor & Mandap',
                    'Photography & Film',
                    'Catering Menus',
                    'Hospitality & Fleet',
                    'Makeup & Styling'
                  ].map(srv => {
                    const isChecked = servicesNeeded.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`px-3 py-2 rounded-xl text-left font-medium border transition cursor-pointer flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#9A2157]/10 border-[#9A2157] text-[#9A2157] font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{srv}</span>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#9A2157]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siddharth Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs border border-slate-300 rounded-xl px-3 py-2 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#9A2157] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#9A2157]" />
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs border border-slate-300 rounded-xl px-3 py-2 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#9A2157] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-3 py-3.5 rounded-2xl bg-gradient-to-r from-[#9A2157] via-[#BC2D6D] to-[#9A2157] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate My Free Wedding Proposal</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 font-serif">
              Proposal Request Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>! Your customized proposal for{' '}
              <strong className="text-[#9A2157]">{city.toUpperCase()}</strong> has been dispatched to{' '}
              <strong>{formData.phone}</strong> via WhatsApp.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-rose-50/70 border border-rose-100 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Destination:</span>
                <span className="font-bold text-slate-900 capitalize">{city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Guests & Budget:</span>
                <span className="font-bold text-slate-900">{guestCount} · {budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Price Beat Guarantee:</span>
                <span className="font-bold text-emerald-700">Activated (5-10% Discount)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Dedicated Expert:</span>
                <span className="font-bold text-slate-900">Assigned within 15 Minutes</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${RAOZ_WEDDINGS_CONTACT.phoneRaw}&text=Hi%20RAOZ%20WEDDINGS%2C%20I%20just%20submitted%20a%20wedding%20proposal%20for%20${city}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp Directly</span>
              </a>
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
