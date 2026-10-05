import React, { useState } from 'react';
import { UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCity?: string;
  prefilledNotes?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultCity = 'bengaluru',
  prefilledNotes = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState(defaultCity);
  const [weddingDate, setWeddingDate] = useState('');
  const [notes, setNotes] = useState(prefilledNotes);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Utsav Luxe Team! I would like to book a free 3D venue recce & consultation in ${city.toUpperCase()} for my wedding around ${weddingDate || 'upcoming date'}. My name is ${name}.`
    );
    window.open(`https://wa.me/${UTSAV_BUSINESS_CONFIG.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 animate-scale-up">
        
        {/* Modal Header */}
        <div className="bg-[#140809] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-lg hover:bg-white/10 text-xl font-bold"
          >
            ✕
          </button>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF8D7B]">
            Complimentary 3D CAD Blueprint
          </span>
          <h3 className="font-serif text-2xl font-bold mt-1 text-white">
            Book Free Wedding Recce
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Meet with our Senior Wedding Director & receive a 3D venue walkthrough.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto">
                ✓
              </div>
              <h4 className="font-serif text-xl font-bold text-stone-900">
                Consultation Request Confirmed!
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="font-bold text-stone-900">{name}</span>. 
                Our studio lead for <span className="font-bold text-[#E05A47]">{city.toUpperCase()}</span> will call you on <span className="font-bold text-stone-900">{phone}</span> to finalize your recce time.
              </p>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Chat with Concierge on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-xs text-stone-500 hover:text-stone-800 font-semibold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Wedding City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold bg-stone-50 focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                  >
                    {UTSAV_BUSINESS_CONFIG.cities.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Approx. Date
                  </label>
                  <input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Specific Requests or Chosen Venue
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us if you have booked a venue or want decor suggestions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] shadow-md shadow-[#E05A47]/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? 'Confirming...' : 'Confirm Free 3D Recce'}
              </button>

              <div className="flex items-center justify-between text-[10px] text-stone-500 pt-1">
                <span>✓ 100% Free · Zero Commitment</span>
                <span>Response in 15 mins</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
