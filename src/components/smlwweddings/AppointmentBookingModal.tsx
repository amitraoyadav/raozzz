import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Building2, Phone, CheckCircle, Sparkles } from 'lucide-react';

interface AppointmentBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentBookingModal: React.FC<AppointmentBookingModalProps> = ({ isOpen, onClose }) => {
  const [meetingMode, setMeetingMode] = useState<'video' | 'office'>('video');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('4:00 PM - 5:00 PM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destinationVision, setDestinationVision] = useState('Udaipur / Rajasthan Palaces');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#141416] text-white border border-[#303038] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-[#1c1d23] to-[#262732] p-5 sm:p-6 border-b border-[#2d2e35] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[#d2cd48] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1-on-1 Dedicated Session</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">Book Wedding Consultation</h3>
            <p className="text-xs text-stone-400">Speak directly with our Lead Destination Wedding Specialist.</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Consultation Confirmed!</h4>
              <p className="text-xs text-stone-300 mb-4">
                We have reserved your slot on <strong className="text-white">{preferredDate || 'Upcoming Selected Date'}</strong> at <strong className="text-white">{preferredTime}</strong> via {meetingMode === 'video' ? 'Google Meet / Zoom' : 'New Delhi Corporate Office'}.
              </p>
              <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl text-xs text-stone-400 mb-6">
                A calendar invitation with meeting coordinates has been dispatched to {email || phone}.
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-[#d2cd48] text-black font-bold text-xs uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">Consultation Mode</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMeetingMode('video')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-bold transition-all cursor-pointer ${
                      meetingMode === 'video'
                        ? 'bg-[#d2cd48]/15 border-[#d2cd48] text-white'
                        : 'bg-[#1b1c23] border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#d2cd48]" />
                    <span>Live Video Call</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeetingMode('office')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-bold transition-all cursor-pointer ${
                      meetingMode === 'office'
                        ? 'bg-[#d2cd48]/15 border-[#d2cd48] text-white'
                        : 'bg-[#1b1c23] border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#d2cd48]" />
                    <span>In-Person (Delhi)</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#d2cd48]" /> Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#1e1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#d2cd48]" /> Preferred Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#1e1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                  >
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                    <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                    <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>
                    <option value="8:00 PM - 9:00 PM">8:00 PM - 9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Envisioned Destination / Theme</label>
                <select
                  value={destinationVision}
                  onChange={(e) => setDestinationVision(e.target.value)}
                  className="w-full bg-[#1e1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d2cd48]"
                >
                  <option value="Udaipur / Rajasthan Palaces">Udaipur / Royal Rajasthan Palaces</option>
                  <option value="Goa Seaside Beachfront">Goa Sunset Beachfront Wedding</option>
                  <option value="Delhi NCR Luxury Estate">Delhi NCR Luxury Estate & Farmhouse</option>
                  <option value="Mussoorie / Hills Retreat">Mussoorie / Himalayan Mountain Retreat</option>
                  <option value="International (Thailand / Dubai / Bali)">International (Thailand / Dubai / Bali)</option>
                  <option value="Undecided / Open to Recommendations">Undecided / Need Specialist Recommendations</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#1e1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d2cd48]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-[#1e1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d2cd48]"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address (for Meeting Link) *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1e1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d2cd48]"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d2cd48] to-[#b8b335] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 cursor-pointer shadow-md transition-all"
                >
                  Confirm Free Consultation Slot
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
