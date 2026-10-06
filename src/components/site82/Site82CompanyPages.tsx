import React, { useState } from 'react';
import {
  Building2,
  Users,
  Award,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Briefcase,
  Heart,
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';
import { site82Config } from '../../config/site82Config';
import { CLIENT_REVIEWS } from '../../data/site82Data';

interface Site82CompanyPagesProps {
  pageType: 'about-us' | 'career' | 'life-at-wc' | 'contact-us' | 'happy-customers' | 'terms-and-conditions' | 'privacy-policy' | 'disclaimer';
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
}

export const Site82CompanyPages: React.FC<Site82CompanyPagesProps> = ({
  pageType,
  onNavigateHome,
  onOpenConsultation
}) => {
  // Contact Form State
  const [cName, setCName] = useState('');
  const [cPhone, setCPhone] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cMessage, setCMessage] = useState('');
  const [cSubmitted, setCSubmitted] = useState(false);

  // Career Form State
  const [jobName, setJobName] = useState('');
  const [jobRole, setJobRole] = useState('Senior Property Advisor');
  const [jobPhone, setJobPhone] = useState('');
  const [jobSubmitted, setJobSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cName.trim() || !cPhone.trim()) return;
    setCSubmitted(true);
  };

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobName.trim() || !jobPhone.trim()) return;
    setJobSubmitted(true);
  };

  return (
    <div className="bg-[#FCFAF9] min-h-screen pt-28 pb-20 text-[#1E2430]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* 1. ABOUT US PAGE */}
        {pageType === 'about-us' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase text-[#F54900] bg-orange-100 px-3 py-1 rounded-full">
                14+ Years Legacy
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E2430] mt-3">
                About Wealth Nexus
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 mt-2">
                India’s leading real estate consultancy dedicated to transparent, RERA-approved residential &amp; commercial investments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm text-center">
                <Award className="w-10 h-10 text-[#F54900] mx-auto mb-2" />
                <div className="text-3xl font-bold text-[#1E2430]">{site82Config.YEARS_OF_TRUST}</div>
                <div className="text-xs text-neutral-500 mt-1">Years of Grounded Advisory</div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm text-center">
                <Users className="w-10 h-10 text-[#F54900] mx-auto mb-2" />
                <div className="text-3xl font-bold text-[#1E2430]">{site82Config.HAPPY_CUSTOMERS}</div>
                <div className="text-xs text-neutral-500 mt-1">Satisfied Homebuyers &amp; Investors</div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm text-center">
                <Building2 className="w-10 h-10 text-[#F54900] mx-auto mb-2" />
                <div className="text-3xl font-bold text-[#1E2430]">{site82Config.PROJECTS_LISTED}</div>
                <div className="text-xs text-neutral-500 mt-1">Vetted RERA Projects Listed</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-2xl font-bold text-[#1E2430]">Our Story &amp; Core Mission</h3>
              <p>
                Founded in {site82Config.FOUNDED_YEAR}, Wealth Nexus was born with a singular conviction: to eliminate the opaque practices, misleading projections, and hidden broker commissions that plagued Indian real estate transactions.
              </p>
              <p>
                Headquartered in Sector 132 Noida with branch offices spanning Connaught Place, Lucknow, Ayodhya, and Gurugram, we act as fiduciary partners for individuals, family offices, and institutional investors. We rigorously audit builder credentials, land titles, and RERA milestones before recommending any development.
              </p>
            </div>
          </div>
        )}

        {/* 2. CAREER PAGE */}
        {pageType === 'career' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase text-[#F54900] bg-orange-100 px-3 py-1 rounded-full">
                Join Our Family
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E2430] mt-3">
                Build Your Career at Wealth Nexus
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 mt-2">
                Work alongside India’s most respected real estate investment strategists.
              </p>
            </div>

            {/* Current Openings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Senior Property Consultant', dept: 'Residential Sales · Noida Exp.', exp: '3 - 6 Years', type: 'Full Time' },
                { title: 'Commercial Leasing Manager', dept: 'Grade-A Retail & Office · NCR', exp: '5 - 8 Years', type: 'Full Time' },
                { title: 'Legal & RERA Documentation Associate', dept: 'Legal Operations · Sector 132', exp: '2 - 5 Years', type: 'Full Time' }
              ].map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#F54900] font-bold">{job.type}</span>
                    <h3 className="text-lg font-bold text-[#1E2430] mt-1">{job.title}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{job.dept}</p>
                    <div className="mt-3 text-xs text-neutral-600">Experience: <strong>{job.exp}</strong></div>
                  </div>
                  <button
                    onClick={() => {
                      setJobRole(job.title);
                      window.scrollTo({ top: 800, behavior: 'smooth' });
                    }}
                    className="mt-5 w-full py-2.5 rounded-xl bg-orange-50 text-[#F54900] hover:bg-[#F54900] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            {/* Fast Application Form */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-md max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-[#1E2430]">Submit Your Application</h3>
              {jobSubmitted ? (
                <div className="p-5 mt-4 rounded-2xl bg-emerald-50 text-emerald-900 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold">Resume Submitted!</h4>
                  <p className="text-xs mt-1">Our Talent Acquisition team will review your credentials within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleCareerSubmit} className="space-y-3 mt-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">Applying For Role</label>
                    <input type="text" readOnly value={jobRole} className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl bg-neutral-100 font-bold" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">Full Name *</label>
                    <input type="text" required value={jobName} onChange={(e) => setJobName(e.target.value)} placeholder="Your Name" className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">Phone Number *</label>
                    <input type="tel" required value={jobPhone} onChange={(e) => setJobPhone(e.target.value)} placeholder="+91 98765 43210" className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl" />
                  </div>
                  <button type="submit" className="w-full py-3 bg-[#F54900] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer">
                    Submit Candidate Profile
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* 3. LIFE AT WC */}
        {pageType === 'life-at-wc' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase text-[#F54900] bg-orange-100 px-3 py-1 rounded-full">
                Work Culture
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E2430] mt-3">
                Life at Wealth Nexus
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 mt-2">
                A culture built on meritocracy, customer-first empathy, continuous learning, and shared triumphs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm space-y-3">
                <Sparkles className="w-8 h-8 text-[#F54900]" />
                <h3 className="text-xl font-bold">Annual Awards &amp; Conclaves</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Every year, our top real estate advisors and operational champions are felicitated at luxury retreats in Goa, Dubai, and Udaipur with performance bonuses and leadership honors.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm space-y-3">
                <Heart className="w-8 h-8 text-[#F54900]" />
                <h3 className="text-xl font-bold">Health &amp; Family Welfare</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Comprehensive family medical insurance, flexible work models, parental leaves, and continuous upskilling workshops ensure every team member thrives personally and professionally.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4. CONTACT US PAGE */}
        {pageType === 'contact-us' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase text-[#F54900] bg-orange-100 px-3 py-1 rounded-full">
                Direct Touchpoints
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E2430] mt-3">
                Contact Our Property Advisory Desks
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 mt-2">
                Visit our regional offices or connect with our corporate headquarters in Sector 132 Noida.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Regional Offices (6 cols) */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-bold text-[#1E2430]">Regional Head Offices</h3>
                {[
                  { name: 'Corporate Headquarters — Noida', addr: site82Config.HEAD_OFFICE, phone: site82Config.PHONE },
                  { name: 'Delhi NCR Central Bureau', addr: site82Config.DELHI_OFFICE, phone: site82Config.PHONE },
                  { name: 'Lucknow Regional Hub', addr: site82Config.LUCKNOW_OFFICE, phone: site82Config.PHONE },
                  { name: 'Ayodhya Corridor Advisory', addr: site82Config.AYODHYA_OFFICE, phone: site82Config.PHONE },
                  { name: 'Gurugram Corporate Desk', addr: site82Config.GURUGRAM_OFFICE, phone: site82Config.PHONE }
                ].map((office, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-1">
                    <h4 className="font-bold text-sm text-[#1E2430]">{office.name}</h4>
                    <p className="text-xs text-neutral-500">{office.addr}</p>
                    <div className="text-xs font-mono text-[#F54900] font-bold pt-1">Tel: {office.phone}</div>
                  </div>
                ))}
              </div>

              {/* Contact Form (6 cols) */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1E2430]">Send Us a Message</h3>
                  <p className="text-xs text-neutral-500 mt-1 mb-4">
                    Our Senior Relationship Manager will get back to you within 2 business hours.
                  </p>

                  {cSubmitted ? (
                    <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-900 text-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-bold">Message Dispatched!</h4>
                      <p className="text-xs mt-1">Thank you {cName}. We will call you shortly on {cPhone}.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">Your Name *</label>
                        <input type="text" required value={cName} onChange={(e) => setCName(e.target.value)} placeholder="Full Name" className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">Mobile *</label>
                          <input type="tel" required value={cPhone} onChange={(e) => setCPhone(e.target.value)} placeholder="+91 98765 43210" className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">Email</label>
                          <input type="email" value={cEmail} onChange={(e) => setCEmail(e.target.value)} placeholder="you@domain.com" className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">Message</label>
                        <textarea rows={3} value={cMessage} onChange={(e) => setCMessage(e.target.value)} placeholder="Tell us your location preference and budget..." className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl" />
                      </div>
                      <button type="submit" className="w-full py-3 bg-[#F54900] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer">
                        Send Message Now
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. HAPPY CUSTOMERS */}
        {pageType === 'happy-customers' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase text-[#F54900] bg-orange-100 px-3 py-1 rounded-full">
                Real Experiences
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E2430] mt-3">
                15 Million+ Happy Customers
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 mt-2">
                Discover what families, NRIs, and institutional investors have to say about their journey with Wealth Nexus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLIENT_REVIEWS.map((rev) => (
                <div key={rev.id} className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={rev.avatarUrl} alt={rev.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-base text-[#1E2430]">{rev.name}</h4>
                      <span className="text-xs text-neutral-400 font-mono">{rev.verifiedSource} · {rev.relativeDate}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                    “{rev.comment}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. LEGAL / TERMS / PRIVACY / DISCLAIMER */}
        {(pageType === 'terms-and-conditions' || pageType === 'privacy-policy' || pageType === 'disclaimer') && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm space-y-5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F54900] font-bold">
              Legal Transparency
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1E2430] capitalize">
              {pageType.replace(/-/g, ' ')}
            </h1>

            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-neutral-800 space-y-1">
              <div className="font-bold text-[#F54900]">RERA Mandatory Disclosure</div>
              <div>Uttar Pradesh RERA Agent Reg: <strong>{site82Config.RERA_NUMBERS.UP}</strong></div>
              <div>Delhi RERA Agent Reg: <strong>{site82Config.RERA_NUMBERS.DELHI}</strong></div>
              <div>Haryana RERA Agent Reg: <strong>{site82Config.RERA_NUMBERS.HARYANA}</strong></div>
            </div>

            <p>
              Wealth Nexus Realty &amp; Investment Advisory Pvt. Ltd. operates exclusively as a registered real estate facilitator and marketing channel partner. While we take every effort to provide accurate, verified data, customers are advised to independently review builder RERA registration certificates, sanction layouts, and encumbrance certificates.
            </p>
            <p>
              Prices, specifications, floor plans, and project amenities mentioned across the website are subject to developer revision as per RERA statutory notifications. No financial commitment should be made without verifying the respective state RERA portal.
            </p>
            <button
              onClick={onNavigateHome}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#F54900] text-white font-bold text-xs uppercase"
            >
              Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
