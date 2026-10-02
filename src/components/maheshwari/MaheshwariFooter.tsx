import React from 'react';
import { Phone, Mail, MapPin, Scale, ChevronRight, Shield, Award } from 'lucide-react';
import { MAHESHWARI_FIRM_INFO, PRACTICE_AREAS } from '../../data/maheshwariData';

interface Props {
  setActiveTab: (tab: any) => void;
  onSelectPractice?: (slug: string) => void;
}

export const MaheshwariFooter: React.FC<Props> = ({ setActiveTab, onSelectPractice }) => {
  return (
    <footer className="bg-[#171B21] text-slate-300 font-sans border-t-4 border-[#8B1E2B]">
      {/* Upper Footer: Offices & Practices */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Column 1: Firm Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/maheshwari/logo-1.png"
                alt="Maheshwari & Co."
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <h3 className="text-lg font-bold font-serif text-white tracking-tight">
                  MAHESHWARI &amp; CO.
                </h3>
                <p className="text-[10px] tracking-widest text-[#D9A74A] uppercase font-semibold">
                  Advocates &amp; Legal Consultants
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Acclaimed premier full-service law firm headquartered in New Delhi with dedicated chambers in Mumbai and international associate coverage in New York.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8B1E2B]" />
                <a href={`tel:${MAHESHWARI_FIRM_INFO.phone}`} className="hover:text-white font-semibold">
                  {MAHESHWARI_FIRM_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8B1E2B]" />
                <a href={`mailto:${MAHESHWARI_FIRM_INFO.email}`} className="hover:text-white">
                  {MAHESHWARI_FIRM_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Key Practice Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-700 pb-2">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {PRACTICE_AREAS.slice(0, 7).map(p => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      if (onSelectPractice) onSelectPractice(p.slug);
                      else setActiveTab('practice-areas');
                    }}
                    className="hover:text-[#D9A74A] transition-colors flex items-center gap-1.5 text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-[#8B1E2B] shrink-0" />
                    <span>{p.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setActiveTab('practice-areas')}
                  className="text-[#D9A74A] hover:underline font-semibold pt-1 block"
                >
                  View All Practices →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Office Chambers */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-700 pb-2">
              Office Locations
            </h4>

            {/* Delhi */}
            <div className="text-xs space-y-1 text-slate-400">
              <div className="font-semibold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8B1E2B]" />
                <span>New Delhi (Head Office)</span>
              </div>
              <p>{MAHESHWARI_FIRM_INFO.headOffice.address}, {MAHESHWARI_FIRM_INFO.headOffice.city} - {MAHESHWARI_FIRM_INFO.headOffice.postalCode}</p>
              <p className="text-[11px] text-slate-500">Tel: {MAHESHWARI_FIRM_INFO.landlineDelhi}</p>
            </div>

            {/* Mumbai */}
            <div className="text-xs space-y-1 text-slate-400 pt-2 border-t border-slate-800">
              <div className="font-semibold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8B1E2B]" />
                <span>Mumbai Office</span>
              </div>
              <p>{MAHESHWARI_FIRM_INFO.mumbaiOffice.address}</p>
              <p className="text-[11px] text-slate-500">Tel: {MAHESHWARI_FIRM_INFO.landlineMumbai}</p>
            </div>
          </div>

          {/* Column 4: Quick Navigation & Accolades */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-700 pb-2">
              Firm Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">
                  About the Firm &amp; Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('team')} className="hover:text-white transition-colors">
                  Partners &amp; Key Attorneys
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('awards')} className="hover:text-white transition-colors">
                  IFLR 1000 &amp; AsiaLaw Rankings
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('insights')} className="hover:text-white transition-colors">
                  Legal Insights &amp; Publications
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('gallery')} className="hover:text-white transition-colors">
                  Chambers &amp; Event Gallery
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('careers')} className="hover:text-white transition-colors">
                  Career Openings &amp; Internships
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors">
                  Schedule Office Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bar Council Compliance Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <div className="flex items-start gap-2.5 max-w-4xl">
            <Scale className="w-4 h-4 text-[#8B1E2B] shrink-0 mt-0.5" />
            <p>
              <strong>Bar Council of India Rule Compliance:</strong> As per the rules of the Bar Council of India, law firms in India are not permitted to solicit work or advertise. The user wishes to gain more information about Maheshwari &amp; Co. for their own information and personal use. All information provided is purely for educational and reference purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Sub-bar */}
      <div className="bg-[#0F1216] py-4 px-4 md:px-8 text-center text-xs text-slate-500 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            &copy; {new Date().getFullYear()} Maheshwari &amp; Co. Advocates and Legal Consultants. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Engagement</span>
            <span>•</span>
            <span>Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
