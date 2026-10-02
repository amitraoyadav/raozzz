import React, { useState } from 'react';
import { X, CheckCircle, PhoneCall, Building2, Truck, MapPin, Send, ShieldCheck } from 'lucide-react';
import { CommercialVehicle } from './types';
import { ALL_COMMERCIAL_VEHICLES } from './vehicleData';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVehicle?: CommercialVehicle | null;
}

export const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedVehicle
}) => {
  const [vehicleId, setVehicleId] = useState<string>(selectedVehicle ? selectedVehicle.id : ALL_COMMERCIAL_VEHICLES[0].id);
  const [fleetQty, setFleetQty] = useState<string>('1 Vehicle');
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [state, setState] = useState<string>('Maharashtra');
  const [city, setCity] = useState<string>('Mumbai');
  const [exchangeInterest, setExchangeInterest] = useState<boolean>(false);
  const [financeInterest, setFinanceInterest] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');

  if (!isOpen) return null;

  const currentVeh = ALL_COMMERCIAL_VEHICLES.find(v => v.id === vehicleId) || ALL_COMMERCIAL_VEHICLES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = 'RM-QTE-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(newId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      <div className="bg-[#13161a] text-white w-full max-w-2xl rounded-2xl border border-stone-800 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-800 bg-[#191d24] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-white text-base tracking-tight">Request Commercial Vehicle Quotation</h3>
              <p className="text-[11px] text-stone-400">Official Ex-Showroom &amp; On-Road Price with Fleet Discounts</p>
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
            <h4 className="text-xl font-black text-white">Quotation Request Received!</h4>
            <p className="text-xs text-stone-300 max-w-md mx-auto">
              Thank you, <span className="font-bold text-white">{fullName}</span>. Your commercial vehicle quotation request for <span className="text-amber-400 font-bold">{currentVeh.name}</span> has been logged under Reference ID:
            </p>
            <div className="inline-block px-4 py-2 rounded-xl bg-stone-900 border border-amber-500/40 font-mono text-base font-black text-amber-400 tracking-wider">
              {ticketId}
            </div>
            <p className="text-[11px] text-stone-400 max-w-md mx-auto">
              Our regional commercial fleet specialist from the nearest 3S dealership in <span className="text-stone-200">{city}, {state}</span> will connect with you within 2 business hours with an official pricing breakdown, tax invoice estimation, and financing options.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs cursor-pointer shadow-lg shadow-amber-500/20"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {/* Vehicle Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-300 font-mono uppercase tracking-wider flex items-center justify-between">
                <span>Select Commercial Model</span>
                <span className="text-amber-400 text-[11px] font-normal">{currentVeh.startingPrice}</span>
              </label>
              <select
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
              >
                <optgroup label="Commercial Trucks">
                  {ALL_COMMERCIAL_VEHICLES.filter(v => v.category === 'trucks').map(v => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.gvw} · {v.fuelType}) — from {v.startingPrice}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Passenger Buses & Coaches">
                  {ALL_COMMERCIAL_VEHICLES.filter(v => v.category === 'buses').map(v => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.seatingOrPayload}) — from {v.startingPrice}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Special Application Vehicles">
                  {ALL_COMMERCIAL_VEHICLES.filter(v => v.category === 'special').map(v => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.subCategoryLabel}) — from {v.startingPrice}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Fleet Qty & Application */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-300 font-mono uppercase">Fleet Requirement</label>
                <select
                  value={fleetQty}
                  onChange={(e) => setFleetQty(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="1 Vehicle">1 Vehicle (Single Unit)</option>
                  <option value="2-5 Vehicles">2 - 5 Vehicles (Small Fleet)</option>
                  <option value="6-20 Vehicles">6 - 20 Vehicles (Medium Fleet)</option>
                  <option value="20+ Vehicles">20+ Vehicles (Large Enterprise / Govt Tender)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-300 font-mono uppercase">State / Territory</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Other">Other State</option>
                </select>
              </div>
            </div>

            {/* Contact Person Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Company / Fleet Name</label>
                <input
                  type="text"
                  placeholder="e.g. Kumar Roadways Logistics"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Mobile Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">City / District *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mumbai, Pune, Delhi"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="pt-1 space-y-2 text-xs text-stone-300">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={financeInterest}
                  onChange={(e) => setFinanceInterest(e.target.checked)}
                  className="rounded border-stone-700 text-amber-500 focus:ring-amber-500"
                />
                <span>Include commercial vehicle loan &amp; flexible EMI financing options</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={exchangeInterest}
                  onChange={(e) => setExchangeInterest(e.target.checked)}
                  className="rounded border-stone-700 text-amber-500 focus:ring-amber-500"
                />
                <span>I have an existing commercial truck/bus for exchange / trade-in valuation</span>
              </label>
            </div>

            {/* Privacy notice */}
            <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-[11px] text-stone-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Your contact details are strictly kept confidential and routed directly to authorized Raoz Motors dealership managers.</span>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT OFFICIAL QUOTE REQUEST</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
