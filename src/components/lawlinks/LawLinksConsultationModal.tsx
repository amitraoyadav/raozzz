import React, { useState } from 'react';
import { LAWLINKS_INFO, PRACTICE_AREAS } from '../../data/lawlinksData';
import {
  X,
  Scale,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LawLinksConsultationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: 'Litigation (Supreme Court & High Courts)',
    urgentRelief: false,
    summary: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.summary) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-[#1e293b] text-white p-6 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#03A9F5]/20 text-[#03A9F5] flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#03A9F5]">Case Assessment</span>
              <h3 className="text-xl font-bold">Request Legal Consultation</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Consultation Request Lodged</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. A registry counsel from our Delhi/Bengaluru chambers will call you directly at <strong>{formData.phone}</strong> to confirm documents and schedule a briefing session.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg text-xs uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98110 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Primary Practice Area
                </label>
                <select
                  value={formData.practiceArea}
                  onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] bg-white"
                >
                  <option value="Litigation (Supreme Court & High Courts)">Litigation (Supreme Court & High Courts)</option>
                  <option value="Arbitration (Domestic & International)">Arbitration (Domestic & International)</option>
                  <option value="Dispute Resolution - Mediation & Conciliation">Dispute Resolution - Mediation & Conciliation</option>
                  <option value="Transactional and Corporate Advisory">Transactional and Corporate Advisory</option>
                  <option value="Insolvency (IBC) & Company Law">Insolvency (IBC) & Company Law</option>
                  <option value="Consumer Protection (NCDRC)">Consumer Protection (NCDRC)</option>
                  <option value="Other Industry Sectors">Other Industry Sectors</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="urgentRelief"
                  checked={formData.urgentRelief}
                  onChange={(e) => setFormData({ ...formData, urgentRelief: e.target.checked })}
                  className="rounded text-[#03A9F5] focus:ring-[#03A9F5]"
                />
                <label htmlFor="urgentRelief" className="text-xs font-semibold text-slate-700 cursor-pointer">
                  Urgent Stay / Interim Relief matter (hearing within 48 hours)
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Brief Facts / Dispute Summary *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline the impugned order, court, parties, or contract details..."
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict Attorney-Client Privilege</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg text-xs uppercase tracking-wider shadow cursor-pointer transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
