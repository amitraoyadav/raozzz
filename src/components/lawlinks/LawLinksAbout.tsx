import React from 'react';
import { LAWLINKS_INFO, TEAM_MEMBERS } from '../../data/lawlinksData';
import { LawLinksSubPage } from './LawLinksHeader';
import {
  Scale,
  Award,
  BookOpen,
  Users,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Building
} from 'lucide-react';

interface Props {
  onNavigate: (page: LawLinksSubPage) => void;
  onSelectLawyer: (lawyerId: string) => void;
  onRequestConsultation: () => void;
}

export const LawLinksAbout: React.FC<Props> = ({
  onNavigate,
  onSelectLawyer,
  onRequestConsultation
}) => {
  const founders = TEAM_MEMBERS.slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Inner Banner */}
      <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src="/assets/lawlinks/about-banner.png"
          alt="About Law Links"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
            Established 2004 · New Delhi & Bengaluru
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">About Law Links</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            A boutique legal service firm with seasoned litigators, arbitrators, and advisors.
          </p>
        </div>
      </div>

      {/* 2. Main Narrative & Core Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-slate-700 leading-relaxed text-base">
            <div className="border-l-4 border-[#03A9F5] pl-4 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#03A9F5]">Who We Are</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Over Two Decades of Legal Distinction
              </h2>
            </div>

            <p className="text-lg font-medium text-slate-900 leading-relaxed">
              Law Links is a boutique legal service firm founded by{' '}
              <strong className="text-[#03A9F5]">Ms. Lalit Mohini Bhat</strong>,{' '}
              <strong className="text-[#03A9F5]">Mr. Naveen R. Nath</strong> (designated Senior Advocate since February, 2021) and{' '}
              <strong className="text-[#03A9F5]">Ms. Hetu Arora Sethi</strong> (Advocate-on-Record). The firm operates out of their owned office premises in the posh Nizamuddin East area of New Delhi since 2004.
            </p>

            <p>
              We have been providing broad-ranging litigation and advisory services since 2004. Our team of lawyers comprises of seasoned litigators, advisors, arbitrators and mediators. With a litigation experience ranging from three to thirty-five years, our team routinely appears before the Hon’ble Supreme Court of India, Hon’ble High Court of Delhi and other High Courts and Tribunals pan-India.
            </p>

            <p>
              Our expertise spreads across a broad span of business disciplines and major industries, including Automobile, Aviation, Contracts, Consumer, Criminal, Defence, Educational Institutions, Water Disputes, Constitutional Matters, Electricity, Employment and Labour, Energy, Environment, Hospitality, Information Technology, Infrastructure, Insurance, Intellectual Property, Joint Ventures, M&A, Maritime & Shipping, Media, Metrology, Metal & Minerals, Pharmaceutical & Hospitals, Real Estate, Renewable Energy, Taxation, Telecommunications, Service & Administrative Law, White Collar crimes and Insolvency (IBC).
            </p>

            <p>
              Law Links provides a full-range of litigation services specialising in Constitutional, Corporate, Civil, Commercial and specialized areas such as Competition Laws, Consumer Law, Insolvency and Banking laws, Land Acquisitions Laws, Real Estate Laws, Insurance Laws, Environmental Laws, Labour & Industrial Laws, Matrimonial & Family Laws, Arbitrations and Mediations. Our advisory services also relate to these fields.
            </p>

            <div className="bg-sky-50/60 p-6 rounded-xl border border-sky-100 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <HeartHandshake className="w-5 h-5 text-[#03A9F5]" />
                <h3 className="text-lg">Pro-Bono Commitment & Social Responsibility</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Law Links espouses and discharges its social obligations by rendering selective pro-bono services to marginalized individuals, educational non-profits, and public interest matters before Constitutional courts.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-slate-900">Modern Infrastructure & Research Capabilities</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Law Links believes in adapting to the latest technological innovations relating to the changing needs of the times. We maintain extensive digital legal resources, e-libraries, and subscription-based legal search repositories along with an exhaustive physical law library in our Nizamuddin East offices. We have a competent and loyal paralegal staff with extensive experience handling paralegal work in various courts and tribunals pan-India.
              </p>
            </div>
          </div>

          {/* Right Sidebar: Key Highlights Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-xl space-y-6">
              <div className="space-y-2 border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#03A9F5]">Fast Facts</span>
                <h3 className="text-xl font-bold">Firm Credentials</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#03A9F5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Established 2004</strong>
                    <span className="text-slate-400 text-xs">Over 20 continuous years of practice</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#03A9F5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">500+ Supreme Court Judgments</strong>
                    <span className="text-slate-400 text-xs">Reported judgments in SCC, SCR & AIR</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-[#03A9F5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Arbitration & Mediation</strong>
                    <span className="text-slate-400 text-xs">High Court appointed arbitrators & 500+ mediations</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#03A9F5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Dual Office Hubs</strong>
                    <span className="text-slate-400 text-xs">New Delhi (HQ) & Bengaluru</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#03A9F5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">12 Lawyers & Pan-India Network</strong>
                    <span className="text-slate-400 text-xs">Correspondent counsels in every State High Court</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={onRequestConsultation}
                  className="w-full py-3 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg uppercase tracking-wider text-xs shadow cursor-pointer transition-colors"
                >
                  Consult Our Partners
                </button>
              </div>
            </div>

            {/* Owned Office Callout */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-3">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#03A9F5]" />
                <span>Delhi Owned Premises</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating out of C-47 (LGF), Nizamuddin East, New Delhi – 110013 with complete client conference facilities, private arbitration rooms, and research libraries.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Founding Partners Highlight */}
        <div className="pt-10 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">Founding Leadership</span>
            <h2 className="text-3xl font-black text-slate-900">Founders of Law Links</h2>
            <p className="text-sm text-slate-600">
              The cornerstone advocates whose leadership and appellate expertise guide the firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
              >
                <div className="h-72 bg-slate-100 relative overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-sky-300 uppercase tracking-wider">
                      {founder.experience} Experience
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#03A9F5] transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#03A9F5]">{founder.role}</p>
                    <p className="text-xs text-slate-600 line-clamp-3 pt-2 leading-relaxed">
                      {founder.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectLawyer(founder.id)}
                      className="text-xs font-bold uppercase tracking-wider text-[#03A9F5] hover:text-[#0288d1] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Full Bio & Cases</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
