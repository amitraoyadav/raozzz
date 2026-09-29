import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Sparkles, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BusinessWebsite } from '../../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
  defaultCategory?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultCategory
}) => {
  const {
    submitWebsiteRequest,
    categoryReferences,
    websites,
    setActiveView
  } = useApp();

  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState<string>(defaultCategory || 'cafe');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedCategory, setSubmittedCategory] = useState<string>('cafe');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !phone.trim()) return;

    setLoading(true);

    // Save ONLY raw information to website_requests collection with status "New"
    // No template is selected, no site object/slug/page is created, no content generated.
    await submitWebsiteRequest({
      businessName: businessName.trim(),
      category: category.trim(),
      ownerName: ownerName.trim(),
      phone: phone.trim(),
      city: city.trim() || 'Delhi NCR',
      notes: notes.trim()
    });

    setSubmittedCategory(category);
    setLoading(false);
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello RaoSitez! I want to discuss getting a website built for my business.\n\n` +
      `*Business Name:* ${businessName || 'My Business'}\n` +
      `*Category:* ${category}\n` +
      `*Owner Name:* ${ownerName || 'Business Owner'}\n` +
      `*Phone:* ${phone}\n` +
      `*City:* ${city || 'Not specified'}\n` +
      `*About My Business:* ${notes || 'Please contact me to discuss.'}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setBusinessName('');
    setOwnerName('');
    setPhone('');
    setCity('');
    setNotes('');
    onClose();
  };

  // Find 2-3 existing demo sites from the same category or related categories to show as thank-you inspiration
  const matchingDemos = websites.filter(w =>
    w.category === submittedCategory ||
    w.category.toLowerCase().includes(submittedCategory.toLowerCase()) ||
    submittedCategory.toLowerCase().includes(w.category.toLowerCase())
  ).slice(0, 3);

  const fallbackDemos = matchingDemos.length > 0 ? matchingDemos : websites.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-slate-50/60 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full mb-1">
              <Sparkles className="w-3 h-3 text-indigo-600" />
              <span>Get Your Website Built by RaoSitez</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {submitted ? 'Request Received' : 'Tell Us About Your Business'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-4 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-slate-900 font-['Fraunces']">
                  Request Saved!
                </h4>
                {/* Exact required confirmation message */}
                <p className="text-sm font-semibold text-slate-700 mt-2 max-w-md mx-auto leading-relaxed">
                  Thanks! Our team will contact you within 24 hours to discuss and build your website.
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  We have saved your details in our system. An operator will call you at <strong>{phone}</strong> to confirm your menu/services and begin work.
                </p>
              </div>

              {/* Next Steps or Inspiration Websites */}
              <div className="pt-4 border-t border-slate-100 text-left">
                {fallbackDemos.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-800">
                        Here's the kind of website we'll build for you:
                      </span>
                      <span className="text-[11px] text-slate-500">Live Sites</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {fallbackDemos.map(demo => (
                        <div
                          key={demo.slug}
                          onClick={() => {
                            onClose();
                            setActiveView('site', demo.slug);
                          }}
                          className="group cursor-pointer rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between"
                        >
                          <div className="aspect-16/10 bg-slate-900 overflow-hidden relative">
                            <img
                              src={demo.coverUrl || demo.logoUrl}
                              alt={demo.businessName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                              {demo.category}
                            </div>
                          </div>
                          <div className="p-2.5">
                            <h5 className="font-bold text-xs text-slate-900 truncate group-hover:text-indigo-600">
                              {demo.businessName}
                            </h5>
                            <p className="text-[10px] text-slate-500 truncate mt-0.5">
                              {demo.city || 'India'}
                            </p>
                            <div className="mt-2 text-[10px] font-bold text-indigo-600 flex items-center gap-0.5">
                              <span>View Site</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      What Happens Next
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <span className="font-bold text-indigo-600 block mb-0.5">1. Quick Call</span>
                        <p className="text-[11px] text-slate-600">We call to understand your business, products, and prices.</p>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <span className="font-bold text-emerald-600 block mb-0.5">2. WhatsApp Setup</span>
                        <p className="text-[11px] text-slate-600">We configure your direct WhatsApp ordering and Google Maps.</p>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <span className="font-bold text-amber-600 block mb-0.5">3. Live in 24h</span>
                        <p className="text-[11px] text-slate-600">Your site is published on fast cloud hosting with QR standee.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Instantly on WhatsApp</span>
                </button>
                <button
                  onClick={handleReset}
                  className="py-3 px-5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                Fill in your details below. We do not automatically auto-generate or publish websites without consulting you. Our engineering team will call you within 24 hours to review your requirements, design preferences, and build your site.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Business / Shop Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Cafe, Sharma Dental"
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Business Category *
                  </label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    {categoryReferences && categoryReferences.length > 0 ? (
                      categoryReferences.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.categoryName} ({c.group})
                        </option>
                      ))
                    ) : (
                      <>
                        <option value="cafe">Café & Restaurant</option>
                        <option value="clinic">Clinic & Doctor</option>
                        <option value="salon">Salon & Spa</option>
                        <option value="retail">Boutique & Retail Shop</option>
                        <option value="gym">Gym & Fitness</option>
                        <option value="coaching">Coaching & Tutors</option>
                        <option value="services">Local Services</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Amit Yadav"
                    value={ownerName}
                    onChange={e => setOwnerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jaipur, Gurugram, Lucknow"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tell us about your business (free-text)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you sell, your specialities, how many menu items or services you have, or any reference websites you like..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Saving...' : 'Request Website Call'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl border border-emerald-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
