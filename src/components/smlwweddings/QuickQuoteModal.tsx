import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [isdCode, setIsdCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('North India');
  const [preferredMonth, setPreferredMonth] = useState('November');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#18191f] text-white border border-[#353642] rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Quote Request Sent!</h4>
              <p className="text-xs text-stone-300 mb-5">
                Our Senior Wedding Destination Specialist will call you at <strong className="text-white">{isdCode} {phone}</strong> within 2 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 rounded-full bg-[#d2cd48] text-black font-bold text-xs uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-1.5 text-[#d2cd48] text-[11px] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Consultation</span>
              </div>
              <h4 className="text-xl font-black text-white">Get a quick quote from us!</h4>
              <p className="text-xs text-stone-400 mt-1 mb-5">
                Share a few basic details so that our luxury wedding planner can contact you with verified venue rates.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#22232b] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d2cd48]"
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <select
                    value={isdCode}
                    onChange={(e) => setIsdCode(e.target.value)}
                    className="w-24 bg-[#22232b] border border-stone-700 rounded-xl px-2 py-2.5 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+1">+1 (US/CA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+66">+66 (TH)</option>
                    <option value="+60">+60 (MY)</option>
                    <option value="+61">+61 (AU)</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 bg-[#22232b] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d2cd48]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 mb-1">Preferred Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#22232b] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                  >
                    <option value="North India">North India (Delhi NCR / Jaipur / Udaipur / Mussoorie)</option>
                    <option value="GOA">Goa (Beachside luxury resorts)</option>
                    <option value="South India">South India (Kerala / Kochi / Bangalore / Hyderabad)</option>
                    <option value="Outside India">Outside India (Thailand / Dubai / Bali / Europe)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 mb-1">Preferred Month</label>
                  <select
                    value={preferredMonth}
                    onChange={(e) => setPreferredMonth(e.target.value)}
                    className="w-full bg-[#22232b] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                  >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November (Peak Season)</option>
                    <option value="December">December (Peak Season)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d2cd48] to-[#b8b335] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 cursor-pointer shadow-md transition-all"
                  >
                    Submit Quick Inquiry
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
