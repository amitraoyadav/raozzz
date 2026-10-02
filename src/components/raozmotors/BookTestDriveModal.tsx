import React, { useState } from 'react';
import { X, Calendar, CheckCircle, Truck, Clock, MapPin, Send } from 'lucide-react';
import { CommercialVehicle } from './types';
import { ALL_COMMERCIAL_VEHICLES } from './vehicleData';

interface BookTestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVehicle?: CommercialVehicle | null;
}

export const BookTestDriveModal: React.FC<BookTestDriveModalProps> = ({
  isOpen,
  onClose,
  selectedVehicle
}) => {
  const [vehicleId, setVehicleId] = useState<string>(selectedVehicle ? selectedVehicle.id : ALL_COMMERCIAL_VEHICLES[0].id);
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (10 AM - 1 PM)');
  const [locationType, setLocationType] = useState<'dealership' | 'doorstep'>('dealership');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentVeh = ALL_COMMERCIAL_VEHICLES.find(v => v.id === vehicleId) || ALL_COMMERCIAL_VEHICLES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      <div className="bg-[#13161a] text-white w-full max-w-xl rounded-2xl border border-stone-800 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-800 bg-[#191d24] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-white text-base tracking-tight">Schedule Vehicle Demonstration</h3>
              <p className="text-[11px] text-stone-400">Experience Payload Performance &amp; Driving Ergonomics</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black text-white">Demonstration Scheduled!</h4>
            <p className="text-xs text-stone-300 max-w-md mx-auto">
              Thank you, <span className="font-bold text-white">{name}</span>. Your vehicle trial appointment for <span className="text-amber-400 font-bold">{currentVeh.name}</span> has been confirmed.
            </p>
            <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-xs text-stone-300 space-y-1">
              <div><strong>Format:</strong> {locationType === 'dealership' ? 'At Authorized 3S Dealership' : 'On-Site Fleet Customer Premises'}</div>
              <div><strong>Date &amp; Slot:</strong> {preferredDate || 'Next Available Business Day'} · {preferredTime}</div>
            </div>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2 rounded-xl bg-amber-500 text-slate-950 font-black text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-300 font-mono uppercase">Vehicle Model</label>
              <select
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                {ALL_COMMERCIAL_VEHICLES.map(v => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({v.subCategoryLabel})
                  </option>
                ))}
              </select>
            </div>

            {/* Trial Location Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-300 font-mono uppercase">Trial Preference</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLocationType('dealership')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    locationType === 'dealership'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-stone-900 border-stone-800 text-stone-400'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>At 3S Dealership</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLocationType('doorstep')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    locationType === 'doorstep'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-stone-900 border-stone-800 text-stone-400'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>At Customer Fleet Depot</span>
                </button>
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Preferred Date</label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Time Slot</label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                  <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                </select>
              </div>
            </div>

            {/* Name, Phone, City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Contact Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Mobile Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">City / Location *</label>
              <input
                type="text"
                required
                placeholder="e.g. Pune, Chakan Industrial Area"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRM DEMO BOOKING</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
