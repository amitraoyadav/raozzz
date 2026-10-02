import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { MAHESHWARI_FIRM_INFO, PRACTICE_AREAS } from '../../data/maheshwariData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultPractice?: string;
}

export const MaheshwariConsultationModal: React.FC<Props> = ({
  isOpen,
  onClose,
  defaultPractice
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [practice, setPractice] = useState(defaultPractice || 'Corporate & Commercial');
  const [preferredOffice, setPreferredOffice] = useState<'Delhi' | 'Mumbai' | 'Virtual'>('Delhi');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#1F242C] text-white px-6 py-5 flex items-center justify-between border-b-4 border-[#8B1E2B]">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-0.5">
              Client Advisory Intake
            </span>
            <h3 className="text-xl font-bold font-serif tracking-tight">
              Schedule a Legal Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-slate-900">
              Consultation Request Received
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-800">{name}</strong>. Our senior practice coordinator will review your inquiry against conflict checks and reach out within 4 business hours.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-left text-xs text-slate-600 space-y-1 max-w-md mx-auto">
              <div><strong>Practice Area:</strong> {practice}</div>
              <div><strong>Selected Forum/Office:</strong> {preferredOffice} Office / Consultation</div>
              <div><strong>Direct Telephone:</strong> {MAHESHWARI_FIRM_INFO.phone}</div>
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#8B1E2B] hover:bg-[#721721] text-white text-sm font-semibold rounded-lg shadow transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Rajiv Sengupta"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30 focus:border-[#8B1E2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Corporate / Entity Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder="e.g. Apex Global Industries Ltd."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30 focus:border-[#8B1E2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30 focus:border-[#8B1E2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+91 98110 00000"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30 focus:border-[#8B1E2B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Practice Area *
                </label>
                <select
                  value={practice}
                  onChange={e => setPractice(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30 focus:border-[#8B1E2B]"
                >
                  {PRACTICE_AREAS.map(p => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                  <option value="General Corporate Inquiry">Other Legal Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Location / Mode
                </label>
                <select
                  value={preferredOffice}
                  onChange={e => setPreferredOffice(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30 focus:border-[#8B1E2B]"
                >
                  <option value="Delhi">New Delhi Head Office (Safdarjung Enclave)</option>
                  <option value="Mumbai">Mumbai Office (Platina, BKC)</option>
                  <option value="Virtual">Virtual Video Conference (Zoom / Teams)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Brief Description of the Matter
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Please outline the nature of the transaction, dispute, or advisory requirement (strictly confidential)..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30 focus:border-[#8B1E2B]"
              ></textarea>
            </div>

            <div className="flex items-start gap-2 pt-1 text-xs text-slate-500">
              <input type="checkbox" required id="confidentiality" className="mt-0.5 rounded text-[#8B1E2B]" />
              <label htmlFor="confidentiality">
                I understand this submission does not establish an attorney-client relationship until formal engagement is confirmed by Maheshwari &amp; Co.
              </label>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#8B1E2B] hover:bg-[#721721] active:bg-[#5b1219] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Consultation Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
