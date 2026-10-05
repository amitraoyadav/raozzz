import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  X,
  Upload,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CLUB_CAREERS, ClubCareerOpening } from '../../data/site78ClubData';
import { site78ClubConfig } from '../../config/site78ClubConfig';

export const Site78ClubCareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<ClubCareerOpening | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('5 Years');
  const [coverNote, setCoverNote] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleApplyClick = (job: ClubCareerOpening) => {
    setSelectedJob(job);
    setSubmitted(false);
    setApplicationModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#1C242C] font-['Jost',sans-serif]">
      {/* Header Banner */}
      <section className="bg-[#0F2537] text-white py-14 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A869] block">
            Work With Us
          </span>
          <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl text-white">
            Careers at The Kensington Club
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto">
            Join South Delhi’s most prestigious hospitality team, fostering excellence, heritage, and genuine warmth.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Culture Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#183D2F] text-xs font-bold uppercase tracking-[0.25em]">
            Professional Excellence
          </span>
          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#0F2537]">
            Build a Distinquished Career
          </h2>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            We offer competitive remuneration, performance incentives, medical coverage, meal allowances, and a respectful institutional work environment.
          </p>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CLUB_CAREERS.map(job => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DF] hover:border-[#C5A869] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded bg-[#183D2F]/10 text-[#183D2F] font-semibold">
                    {job.department}
                  </span>
                  <span className="text-stone-400 font-light flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>{job.type}</span>
                  </span>
                </div>

                <h3 className="font-['Cormorant',serif] font-bold text-2xl text-[#0F2537] group-hover:text-[#183D2F] transition-colors">
                  {job.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {job.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-bold text-[#0F2537] uppercase tracking-wider">
                    Key Responsibilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-600 font-light list-disc pl-4">
                    {job.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-bold text-[#0F2537] uppercase tracking-wider">
                    Requirements:
                  </div>
                  <div className="text-xs text-stone-600 font-light space-y-1">
                    <div><strong>Experience:</strong> {job.experienceRequired}</div>
                    <div><strong>Education:</strong> {job.qualifications.join(' · ')}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F3EFE6] flex items-center justify-between">
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>South Delhi</span>
                </span>

                <button
                  onClick={() => handleApplyClick(job)}
                  className="px-5 py-2.5 rounded-lg bg-[#0F2537] hover:bg-[#183D2F] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A869]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F9F8F5] border border-[#E8E5DF] text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-['Cormorant',serif] font-bold text-2xl sm:text-3xl text-[#0F2537]">
            Don’t see an exact match?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-light max-w-lg mx-auto leading-relaxed">
            We are always interested in connecting with passionate hospitality, culinary, and athletic talent. Send your curriculum vitae directly to our human resources desk.
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${site78ClubConfig.EMAIL_CAREERS}?subject=Open%20Application%20-%20Kensington%20Club`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#183D2F] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#0F2537] transition-all"
            >
              <span>Email CV to careers@kensingtonclubdelhi.org</span>
              <Send className="w-3.5 h-3.5 text-[#C5A869]" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Application Modal */}
      {applicationModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8E5DF] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmitApplication} className="space-y-5">
                <div>
                  <span className="text-[10px] text-[#C5A869] uppercase font-bold tracking-widest block">
                    Job Application
                  </span>
                  <h3 className="font-['Cormorant',serif] font-bold text-2xl text-[#0F2537]">
                    {selectedJob.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-light">
                    Department: {selectedJob.department} · Location: South Delhi
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anirudh Sen"
                      value={applicantName}
                      onChange={e => setApplicantName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-700">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98110 00000"
                      value={applicantPhone}
                      onChange={e => setApplicantPhone(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={applicantEmail}
                      onChange={e => setApplicantEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-700">Total Relevant Experience</label>
                    <select
                      value={applicantExperience}
                      onChange={e => setApplicantExperience(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden bg-white"
                    >
                      <option value="2-4 Years">2 – 4 Years</option>
                      <option value="5-7 Years">5 – 7 Years</option>
                      <option value="8+ Years">8+ Years Senior</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload Simulator */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700">Upload Resume / CV (PDF / DOCX)</label>
                  <label className="border-2 border-dashed border-[#E8E5DF] hover:border-[#C5A869] rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors text-center">
                    <Upload className="w-6 h-6 text-stone-400 mb-1" />
                    <span className="text-xs text-stone-600 font-medium">
                      {fileName ? fileName : 'Click to select file or drag here'}
                    </span>
                    <span className="text-[10px] text-stone-400 mt-0.5">Maximum file size 5MB</span>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700">Brief Cover Note</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your hospitality background..."
                    value={coverNote}
                    onChange={e => setCoverNote(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#183D2F] hover:bg-[#0F2537] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Application Dossier</span>
                    <Send className="w-3.5 h-3.5 text-[#C5A869]" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Cormorant',serif] font-bold text-3xl text-[#0F2537]">
                  Application Received
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{applicantName}</strong>. Your dossier for <strong>{selectedJob.title}</strong> has been registered with our Human Resources Committee. Our recruitment cell will review your profile and contact you within 5 working days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setApplicationModalOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0F2537] text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
