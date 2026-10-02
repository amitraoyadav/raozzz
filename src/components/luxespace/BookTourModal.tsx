import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, Building2, Phone, Mail, User, ShieldCheck } from 'lucide-react';

interface BookTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEventType?: string;
}

export const BookTourModal: React.FC<BookTourModalProps> = ({
  isOpen,
  onClose,
  defaultEventType = 'Wedding'
}) => {
  const [tourType, setTourType] = useState<'in_person' | 'virtual'>('in_person');
  const [eventType, setEventType] = useState(defaultEventType);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [estimatedGuests, setEstimatedGuests] = useState('100 - 150 Guests');
  const [fullName, setFullName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'LX-HTX-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#12110e] text-[#f4efe6] border border-[#2d2922] rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200 font-sans">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1c1a15] to-[#141310] border-b border-[#2d2922] p-5 sm:p-6 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#c5a059] text-[11px] font-mono uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LuxeSpace HTX &bull; Houston Event Venue</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#f4efe6] tracking-tight">
              Schedule Your Private Tour
            </h3>
            <p className="text-xs text-[#a09a8f] mt-0.5">
              Experience our architectural marble walls, mood lighting &amp; 150-guest space in person.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#1e1c18] hover:bg-[#2c2923] text-[#a09a8f] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center mx-auto mb-4 border border-[#c5a059]/40">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-[#f4efe6] mb-1">
                Tour Reserved, {fullName}!
              </h4>
              <p className="text-xs sm:text-sm text-[#a09a8f] max-w-md mx-auto mb-5 leading-relaxed">
                Your private {tourType === 'in_person' ? 'in-person' : '3D virtual'} venue tour for <strong className="text-white">{eventType}</strong> on <strong className="text-white">{preferredDate || 'upcoming selected date'}</strong> at <strong className="text-white">{preferredTime}</strong> has been logged in our HoneyBook venue calendar.
              </p>
              <div className="p-3 bg-[#181612] border border-[#2d2922] rounded-xl inline-block font-mono text-xs text-[#c5a059] mb-6">
                Confirmation Ref: {confirmationCode}
              </div>
              <div className="block">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-md bg-[#c5a059] hover:bg-[#d4b06a] text-black font-semibold text-xs uppercase tracking-widest cursor-pointer transition-colors"
                >
                  Close &amp; Return to Venue
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Tour Format Selector */}
              <div>
                <label className="block text-[#a09a8f] font-medium mb-1.5 uppercase tracking-wider text-[10px]">
                  Select Tour Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTourType('in_person')}
                    className={`p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                      tourType === 'in_person'
                        ? 'bg-[#1c1a15] border-[#c5a059] text-[#f4efe6]'
                        : 'bg-[#151411] border-[#2d2922] text-[#7d776d] hover:border-[#423d33]'
                    }`}
                  >
                    <Building2 className={`w-4 h-4 ${tourType === 'in_person' ? 'text-[#c5a059]' : 'text-stone-500'}`} />
                    <div>
                      <div className="font-semibold text-xs">In-Person Tour</div>
                      <div className="text-[10px] text-[#8e877c]">Walkthrough in Houston, TX</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTourType('virtual')}
                    className={`p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                      tourType === 'virtual'
                        ? 'bg-[#1c1a15] border-[#c5a059] text-[#f4efe6]'
                        : 'bg-[#151411] border-[#2d2922] text-[#7d776d] hover:border-[#423d33]'
                    }`}
                  >
                    <Clock className={`w-4 h-4 ${tourType === 'virtual' ? 'text-[#c5a059]' : 'text-stone-500'}`} />
                    <div>
                      <div className="font-semibold text-xs">Virtual Walkthrough</div>
                      <div className="text-[10px] text-[#8e877c]">Live video conference tour</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Event Type & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Wedding & Reception">Wedding &amp; Reception</option>
                    <option value="Ceremony Only">Ceremony Only</option>
                    <option value="Rehearsal Dinner">Rehearsal Dinner</option>
                    <option value="Milestone Birthday">Milestone Birthday (30th, 40th, 50th)</option>
                    <option value="Baby Shower">Baby Shower / Gender Reveal</option>
                    <option value="Anniversary Soiree">Anniversary / Vow Renewal</option>
                    <option value="Corporate Gala">Corporate Gala / Brand Activation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                    Estimated Guests
                  </label>
                  <select
                    value={estimatedGuests}
                    onChange={(e) => setEstimatedGuests(e.target.value)}
                    className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Under 50 Guests">Under 50 Guests (Intimate Gathering)</option>
                    <option value="50 - 100 Guests">50 - 100 Guests (Medium Wedding / Soirée)</option>
                    <option value="100 - 150 Guests">100 - 150 Guests (Full Seated Banquet Capacity)</option>
                    <option value="150 - 200 Guests">150 - 200 Guests (Cocktail Reception Style)</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                    Preferred Tour Date
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="10:00 AM">10:00 AM (Morning Tour)</option>
                    <option value="11:30 AM">11:30 AM (Midday Natural Light)</option>
                    <option value="2:00 PM">2:00 PM (Afternoon)</option>
                    <option value="4:30 PM">4:30 PM (Golden Hour / Mood Lighting)</option>
                    <option value="6:00 PM">6:00 PM (Evening Twilight View)</option>
                  </select>
                </div>
              </div>

              {/* Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica Montgomery"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059] placeholder-[#5c5549]"
                  />
                </div>
                <div>
                  <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                    Partner / Co-Host Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Marcus Sterling"
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059] placeholder-[#5c5549]"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jessica@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059] placeholder-[#5c5549]"
                  />
                </div>
                <div>
                  <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(713) 555-0192"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059] placeholder-[#5c5549]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                  Specific Design Vision / Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your wedding colors, preferred vendors, or any questions about our lighting system and outside catering policy..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059] placeholder-[#5c5549]"
                />
              </div>

              {/* Inclusions badge */}
              <div className="p-3 bg-[#171511] border border-[#2d2922] rounded-lg flex items-center gap-2.5 text-[#9e968a]">
                <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span className="text-[11px] leading-tight">
                  Tours are completely complimentary. Your date will be tentatively held for 48 hours following your tour.
                </span>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#c5a059] hover:bg-[#d4b06a] text-black font-bold uppercase tracking-widest text-xs cursor-pointer transition-all duration-200 shadow-lg shadow-[#c5a059]/10"
                >
                  Confirm Tour Booking &bull; HoneyBook Calendar Hold
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
