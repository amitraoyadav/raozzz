import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Plane, Building, Calendar, Users, MapPin, Send } from 'lucide-react';
import { useApp } from '../../../context/AppContext';

export const VeenaCustomizedPage: React.FC = () => {
  const { submitLead } = useApp();
  const [dest, setDest] = useState('Switzerland, Paris & Amsterdam');
  const [travelType, setTravelType] = useState('Family Holiday');
  const [duration, setDuration] = useState('8 - 10 Days');
  const [hotelPref, setHotelPref] = useState('4-Star Premium Deluxe');
  const [budget, setBudget] = useState('₹2,00,000 - ₹3,00,000 per person');
  const [travelMonth, setTravelMonth] = useState('May 2026');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    submitLead({
      websiteSlug: 'veena-world',
      businessName: 'Veena World Customized Holidays',
      customerName: fullName,
      customerPhone: phone,
      customerEmail: email,
      serviceRequested: `Customized Holiday: ${dest} (${travelType}) · ${duration} in ${travelMonth} · Hotel: ${hotelPref} · Budget: ${budget} · Travelers: ${adults} Adults, ${children} Kids`,
      message: notes || 'Submitted via Veena World Customized Holidays Page',
      status: 'new'
    });

    const waMsg = `*VEENA WORLD CUSTOMIZED HOLIDAYS REQUEST*\n\n*Destination:* ${dest}\n*Type:* ${travelType}\n*Duration:* ${duration}\n*Month:* ${travelMonth}\n*Hotel Standard:* ${hotelPref}\n*Budget:* ${budget}\n*Travelers:* ${adults} Adults, ${children} Children\n*Guest Name:* ${fullName} (${phone})\n*Remarks:* ${notes || 'None'}\n\nPlease prepare a bespoke itinerary and cost proposal.`;
    window.open(`https://wa.me/918879972222?text=${encodeURIComponent(waMsg)}`, '_blank');

    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-[600px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#FDB813] bg-[#0F2C59] px-3 py-1 rounded-full">
            Tailor-Made Vacations
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#0F2C59] mt-3">
            Veena World Customized Holidays
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Your destination, your departure date, your preferred hotel, your private car. Tell us your dream travel wish list and our specialists will craft your perfect itinerary.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
            <h3 className="text-2xl font-black text-[#0F2C59]">
              Customized Holiday Request Sent!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong>{fullName}</strong>. Our senior holiday designer has received your preferences for <strong>{dest}</strong> and is connecting with you on WhatsApp with a day-by-day plan.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-[#0F2C59] text-white rounded-xl text-xs font-bold"
            >
              Plan Another Holiday
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-lg font-black text-[#0F2C59] border-b border-slate-100 pb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FDB813]" />
              <span>Step 1: Your Holiday Preferences</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Destination(s) *</label>
                <input
                  type="text"
                  required
                  value={dest}
                  onChange={e => setDest(e.target.value)}
                  placeholder="e.g. Kashmir, Switzerland, New Zealand, Bali"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:bg-white focus:ring-2 focus:ring-[#FDB813]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Travel Type</label>
                <select
                  value={travelType}
                  onChange={e => setTravelType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                >
                  <option value="Family Holiday">Family Holiday</option>
                  <option value="Honeymoon / Couple Escape">Honeymoon / Couple Escape</option>
                  <option value="Friends Group Getaway">Friends Group Getaway</option>
                  <option value="Senior Citizens Relaxed">Senior Citizens Relaxed</option>
                  <option value="Solo Self-Discovery">Solo Self-Discovery</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Duration</label>
                <select
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                >
                  <option value="4 - 6 Days (Short Break)">4 - 6 Days (Short Break)</option>
                  <option value="7 - 9 Days (Classic)">7 - 9 Days (Classic)</option>
                  <option value="10 - 14 Days (Grand Vacation)">10 - 14 Days (Grand Vacation)</option>
                  <option value="15+ Days (Explorer)">15+ Days (Explorer)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Hotel Category</label>
                <select
                  value={hotelPref}
                  onChange={e => setHotelPref(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                >
                  <option value="3-Star Cozy Comfort">3-Star Cozy Comfort</option>
                  <option value="4-Star Premium Deluxe">4-Star Premium Deluxe</option>
                  <option value="5-Star Luxury & Resorts">5-Star Luxury & Resorts</option>
                  <option value="Heritage Palaces / Villas with Private Pool">Heritage Palaces / Private Pool Villas</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Expected Budget</label>
                <select
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                >
                  <option value="Under ₹50,000 per person">Under ₹50,000 per person</option>
                  <option value="₹50,000 - ₹1,00,000 per person">₹50,000 - ₹1,00,000 per person</option>
                  <option value="₹1,00,000 - ₹2,00,000 per person">₹1,00,000 - ₹2,00,000 per person</option>
                  <option value="₹2,00,000 - ₹3,50,000 per person">₹2,00,000 - ₹3,50,000 per person</option>
                  <option value="₹3,50,000+ Luxury without compromise">₹3,50,000+ Luxury without compromise</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Month of Travel</label>
                <input
                  type="text"
                  value={travelMonth}
                  onChange={e => setTravelMonth(e.target.value)}
                  placeholder="e.g. May 2026 / Diwali 2026"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                />
              </div>
            </div>

            <h3 className="text-lg font-black text-[#0F2C59] border-b border-slate-100 pb-3 pt-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#FDB813]" />
              <span>Step 2: Traveler & Contact Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mobile / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98200 XXXXX"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Adults</label>
                  <input
                    type="number"
                    min="1"
                    value={adults}
                    onChange={e => setAdults(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Children</label>
                  <input
                    type="number"
                    min="0"
                    value={children}
                    onChange={e => setChildren(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Any Special Requests or Specific Sights to Include</label>
              <textarea
                rows={3}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="e.g. Jain food required throughout, wheelchair support for grandmother, private sunset boat cruise in Paris..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] font-black rounded-2xl text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              Get Custom Itinerary & Free Quote
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
