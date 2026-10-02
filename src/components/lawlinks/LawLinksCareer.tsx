import React, { useState } from 'react';
import { LAWLINKS_INFO } from '../../data/lawlinksData';
import {
  Briefcase,
  GraduationCap,
  Send,
  CheckCircle2,
  Mail,
  FileText,
  UserCheck,
  Building
} from 'lucide-react';

export const LawLinksCareer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Inner Banner */}
      <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src="/assets/lawlinks/about-banner.png"
          alt="Careers Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
            Join Our Firm
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Careers & Internships</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Fostering legal excellence, critical thinking, and dedicated mentorship for the next generation of advocates.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
            <div className="border-l-4 border-[#03A9F5] pl-4 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#03A9F5]">Work With Us</span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Application & Resume Submission</h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              We believe that the talents and viewpoints of a diverse team create the fulfilling professional environment that has brought us consistent recognition from our clients. At Law Links, diversity is a part of our long-term strategy, not just a short-term program.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">Application Received Successfully!</h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our recruiting team will review your credentials and contact you at <strong>{formData.email}</strong> as soon as a vacancy or internship slot opens matching your profile.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', experience: '', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adv. Rohit Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] focus:ring-1 focus:ring-[#03A9F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rohit@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] focus:ring-1 focus:ring-[#03A9F5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] focus:ring-1 focus:ring-[#03A9F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Experience / Law School Year *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3rd Year B.A. LL.B. / 3 Years PQE"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] focus:ring-1 focus:ring-[#03A9F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Cover Letter & Brief Profile Summary *
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Tell us about your legal background, key practice areas of interest, published research, and why you wish to work with Law Links..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#03A9F5] focus:ring-1 focus:ring-[#03A9F5]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg uppercase tracking-wider text-xs shadow hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Application...' : 'SEND NOW'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-7 shadow-xl space-y-5">
              <div className="space-y-1 border-b border-slate-800 pb-3">
                <span className="text-xs uppercase font-bold text-[#03A9F5] tracking-wider">Recruitment Desk</span>
                <h3 className="text-lg font-bold">Internships & Lateral Hiring</h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                If you would like to intern with us or work with us as a fresher or experienced professional then please contact us directly via email with your CV.
              </p>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#03A9F5] shrink-0" />
                <div className="text-xs">
                  <strong className="block text-white">Direct Email for CVs</strong>
                  <a href={`mailto:${LAWLINKS_INFO.headOffice.email}`} className="text-[#03A9F5] hover:underline">
                    {LAWLINKS_INFO.headOffice.email}
                  </a>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Student Internships:</strong> Minimum 4-week commitment for 4th/5th year law students.</span>
                </div>
                <div className="flex items-start gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Associate Positions:</strong> PQE in civil/commercial litigation, IBC, or arbitrations.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Locations:</strong> Nizamuddin East (New Delhi) or Seshadripuram (Bengaluru).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
