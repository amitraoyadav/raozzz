import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info, Calendar, Users, MapPin } from 'lucide-react';

interface BrioQuickEnquiryFormProps {
  defaultDestination?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const BrioQuickEnquiryForm: React.FC<BrioQuickEnquiryFormProps> = ({
  defaultDestination = '',
  onSuccess,
  compact = false
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(defaultDestination);
  const [travelDate, setTravelDate] = useState('');
  const [travellers, setTravellers] = useState('2');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Please enter your full name';
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!email.trim() || !email.includes('@')) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!destination.trim()) {
      newErrors.destination = 'Please choose your preferred destination';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    if (onSuccess) onSuccess();
  };

  if (isSubmitted) {
    return (
      <div className="bg-teal-50 border-2 border-teal-500/40 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
        <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-bold text-teal-900 font-['Poppins']">
          Enquiry Form Received!
        </h4>
        <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
          Demo only, enquiry not actually sent
        </div>
        <p className="text-xs text-slate-600 leading-relaxed font-['Inter']">
          Thank you for exploring the Brio Travels demo website. In a production environment, our travel specialist would instantly review your dates for <strong>{destination || 'your tour'}</strong> and send an official itinerary via WhatsApp and email.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
          }}
          className="mt-2 text-xs font-bold text-teal-700 hover:underline cursor-pointer"
        >
          Submit Another Demo Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Disclaimer Badge */}
      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
        <Info className="w-4 h-4 text-amber-700 shrink-0" />
        <span>Interactive Demo: Submissions display a demo confirmation without sending actual emails.</span>
      </div>

      <div className={compact ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Ramesh Sharma"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 bg-white outline-none transition-colors ${
              errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-teal-500'
            }`}
          />
          {errors.name && <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            WhatsApp / Mobile Number *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="e.g. +91 98765 43210"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 bg-white outline-none transition-colors ${
              errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-teal-500'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="e.g. ramesh@example.com"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 bg-white outline-none transition-colors ${
              errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-teal-500'
            }`}
          />
          {errors.email && <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email}</p>}
        </div>

        {/* Destination */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Tour Destination *
          </label>
          <input
            type="text"
            value={destination}
            onChange={e => setDestination(e.target.value)}
            placeholder="e.g. Kashmir, Dubai, Golden Triangle, Bali"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 bg-white outline-none transition-colors ${
              errors.destination ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-teal-500'
            }`}
          />
          {errors.destination && <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.destination}</p>}
        </div>

        {/* Travel Date */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Tentative Travel Date
          </label>
          <input
            type="date"
            value={travelDate}
            onChange={e => setTravelDate(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 bg-white outline-none focus:border-teal-500"
          />
        </div>

        {/* Travellers count */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Number of Travellers
          </label>
          <select
            value={travellers}
            onChange={e => setTravellers(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 bg-white outline-none focus:border-teal-500"
          >
            <option value="1">1 Solo Traveller</option>
            <option value="2">2 Adults (Couple / Friends)</option>
            <option value="3-4">3 to 4 Travellers (Family)</option>
            <option value="5-8">5 to 8 Travellers (Small Group)</option>
            <option value="9+">9+ Travellers (Group / Corporate)</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Special Preferences / Requirements (Optional)
        </label>
        <textarea
          rows={compact ? 2 : 3}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="e.g. Need 4-star mountain view rooms, pure vegetarian meals, candlelight dinner..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 bg-white outline-none focus:border-teal-500 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>Request Instant Quote & Itinerary (Free)</span>
      </button>
    </form>
  );
};
