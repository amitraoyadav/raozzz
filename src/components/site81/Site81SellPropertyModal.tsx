import React, { useState } from 'react';
import { X, Building2, ShieldCheck, CheckCircle2, Phone, Mail, Sparkles, Upload } from 'lucide-react';
import { site81Config } from '../../config/site81Config';

interface Site81SellPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Site81SellPropertyModal: React.FC<Site81SellPropertyModalProps> = ({
  isOpen,
  onClose
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [propertyType, setPropertyType] = useState('Villa / Mansion');
  const [location, setLocation] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState('$10,000,000+');
  const [sellerType, setSellerType] = useState<'owner' | 'broker' | 'developer'>('owner');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 text-neutral-900 shadow-2xl relative">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-black rounded hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-700 font-semibold">
              Valtierra Private Client Directorate
            </span>
            <h3 className="font-serif text-2xl font-bold text-neutral-950 mt-1">
              Syndication Application Received
            </h3>
            <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto leading-relaxed">
              Thank you, {fullName}. Our Private Acquisitions Committee will review your listing submission for {location || 'your property'} and contact you confidentially within 4 hours.
            </p>
            <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-lg text-xs text-neutral-600 text-left">
              <div className="flex items-center gap-2 font-semibold text-neutral-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Confidential NDA &amp; Broker Terms</span>
              </div>
              <span>
                All submitted documentation is protected under Valtierra Standard Non-Disclosure Protocols. No public listings are syndicated without certified owner authorization.
              </span>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 bg-neutral-950 text-white rounded text-xs uppercase font-semibold tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold mb-1">
              <Building2 className="w-4 h-4" />
              <span>Seller &amp; Broker Syndication</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal">
              List Your Luxury Estate
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Access 140,000+ certified family offices, royal treasuries, and high-net-worth buyers worldwide.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {step === 1 ? (
                <>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      I am the:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'owner', label: 'Property Owner' },
                        { id: 'broker', label: 'Licensed Broker' },
                        { id: 'developer', label: 'Developer / Fund' }
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSellerType(type.id as any)}
                          className={`py-2 px-2 text-xs rounded border transition-colors cursor-pointer text-center ${
                            sellerType === type.id
                              ? 'bg-neutral-900 text-white border-neutral-900 font-semibold'
                              : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Property Classification
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded bg-white"
                    >
                      <option value="Villa / Mansion">Villa / Modernist Mansion</option>
                      <option value="Penthouse">Penthouse / Sky Duplex</option>
                      <option value="Waterfront Estate">Waterfront / Coastal Sanctuary</option>
                      <option value="Château">Château / Historic Palace</option>
                      <option value="Alpine Chalet">Alpine Ski Chalet</option>
                      <option value="Private Island">Private Island</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Property Location (City, Country) *
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Saint-Jean-Cap-Ferrat, France"
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Estimated Valuation Target
                    </label>
                    <select
                      value={estimatedPrice}
                      onChange={(e) => setEstimatedPrice(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded bg-white"
                    >
                      <option value="$5,000,000 - $10,000,000">$5M – $10,000,000 USD</option>
                      <option value="$10,000,000 - $25,000,000">$10M – $25,000,000 USD</option>
                      <option value="$25,000,000 - $50,000,000">$25M – $50,000,000 USD</option>
                      <option value="$50,000,000+">$50,000,000+ USD (Super-Prime)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (!location.trim()) {
                          alert('Please specify the property location.');
                          return;
                        }
                        setStep(2);
                      }}
                      className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Continue to Client Information →
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Lord Alexander Sinclair"
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                        Direct Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="client@familyoffice.com"
                        className="w-full px-3 py-2 text-sm border border-neutral-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (800) 000-0000"
                        className="w-full px-3 py-2 text-sm border border-neutral-300 rounded"
                      />
                    </div>
                  </div>

                  {sellerType !== 'owner' && (
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                        Agency / Brokerage Firm Name
                      </label>
                      <input
                        type="text"
                        value={agencyName}
                        onChange={(e) => setAgencyName(e.target.value)}
                        placeholder="e.g. Sotheby's International / Engel & Völkers"
                        className="w-full px-3 py-2 text-sm border border-neutral-300 rounded"
                      />
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-2.5 border border-neutral-300 text-neutral-700 text-xs font-semibold uppercase tracking-wider rounded"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="flex-2 py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer shadow-md"
                    >
                      Submit Confidential Listing Request
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
