import React, { useState, useEffect } from 'react';
import {
  Scale, Shield, Award, Phone, Mail, MapPin, ChevronRight, CheckCircle2,
  Calendar, ArrowRight, UserCheck, Search, Filter, Briefcase, FileText,
  Clock, ExternalLink, Globe, Sparkles, Building, Send
} from 'lucide-react';
import {
  MAHESHWARI_FIRM_INFO,
  PRACTICE_AREAS,
  TEAM_MEMBERS,
  AWARDS_LIST,
  BLOG_POSTS,
  CLIENT_TESTIMONIALS,
  GALLERY_ITEMS,
  WHY_CHOOSE_US_POINTS,
  STATS_ITEMS,
  PracticeAreaItem,
  TeamMember,
  BlogPost
} from '../../data/maheshwariData';
import { MaheshwariNavbar } from './MaheshwariNavbar';
import { MaheshwariFooter } from './MaheshwariFooter';
import { MaheshwariDisclaimerModal } from './MaheshwariDisclaimerModal';
import { MaheshwariConsultationModal } from './MaheshwariConsultationModal';

interface Props {
  onBackToHub?: () => void;
}

export const MaheshwariApp: React.FC<Props> = ({ onBackToHub }) => {
  type TabType =
    | 'home'
    | 'about'
    | 'practice-areas'
    | 'team'
    | 'awards'
    | 'insights'
    | 'gallery'
    | 'careers'
    | 'contact';

  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedPracticeSlug, setSelectedPracticeSlug] = useState<string | null>(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [teamCategoryFilter, setTeamCategoryFilter] = useState<string>('all');
  const [practiceSearch, setPracticeSearch] = useState<string>('');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationPractice, setConsultationPractice] = useState<string>('');

  // Bar Council disclaimer popup state
  const [disclaimerOpen, setDisclaimerOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('maheshwari_disclaimer_accepted') !== 'true';
    }
    return true;
  });

  const handleAcceptDisclaimer = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('maheshwari_disclaimer_accepted', 'true');
    }
    setDisclaimerOpen(false);
  };

  const handleOpenConsultation = (practiceName?: string) => {
    setConsultationPractice(practiceName || '');
    setConsultationModalOpen(true);
  };

  const handleSelectPracticeBySlug = (slug: string) => {
    setSelectedPracticeSlug(slug);
    setActiveTab('practice-areas');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticleBySlug = (slug: string) => {
    const post = BLOG_POSTS.find(b => b.slug === slug);
    if (post) {
      setSelectedArticle(post);
      setActiveTab('insights');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Careers form state
  const [careerSubmitted, setCareerSubmitted] = useState(false);
  const [careerName, setCareerName] = useState('');
  const [careerEmail, setCareerEmail] = useState('');
  const [careerRole, setCareerRole] = useState('Associate - Corporate M&A');

  // Contact form state
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#8B1E2B]/10 selection:text-[#8B1E2B]">
      {/* Disclaimer Modal */}
      <MaheshwariDisclaimerModal
        isOpen={disclaimerOpen}
        onAccept={handleAcceptDisclaimer}
      />

      {/* Consultation Intake Modal */}
      <MaheshwariConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultPractice={consultationPractice}
      />

      {/* Navigation */}
      <MaheshwariNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultation={() => handleOpenConsultation()}
        onSelectPractice={handleSelectPracticeBySlug}
        onBackToHub={onBackToHub}
      />

      {/* ==================================================== */}
      {/* 1. HOME TAB */}
      {/* ==================================================== */}
      {activeTab === 'home' && (
        <main>
          {/* Hero Banner Section */}
          <section className="relative bg-[#191D24] text-white overflow-hidden py-16 md:py-24 border-b-4 border-[#8B1E2B]">
            {/* Background Image with dark luxury gradient */}
            <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
              <img
                src="/assets/maheshwari/Corporate-Commercial-1.jpg"
                alt="Maheshwari & Co."
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#111419] via-[#191D24]/95 to-[#241518]/90 z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2B]/30 border border-[#8B1E2B]/60 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                  <Scale className="w-3.5 h-3.5 text-amber-400" />
                  <span>Advocates &amp; Legal Consultants</span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                  Leading Full Service Law Firm in Delhi, India
                </h1>

                <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-2xl font-normal">
                  Delivering premier corporate advisory, high-stakes dispute resolution, cross-border M&amp;A structuring, and patent enforcement with relentless precision and strategic foresight.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => handleOpenConsultation()}
                    className="px-6 py-3.5 bg-[#8B1E2B] hover:bg-[#721721] text-white text-xs font-bold uppercase tracking-wider rounded shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveTab('practice-areas')}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 backdrop-blur-sm transition-all"
                  >
                    Explore Practice Areas
                  </button>
                </div>
              </div>

              {/* Statistics Counters */}
              <div className="mt-14 pt-10 border-t border-slate-700/80 grid grid-cols-2 md:grid-cols-4 gap-6">
                {STATS_ITEMS.map((stat, i) => (
                  <div key={i} className="border-l-2 border-[#8B1E2B] pl-4">
                    <div className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Areas Showcase Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                  Specialized Legal Services
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
                  <span className="text-[#8B1E2B]">Practice</span> Areas
                </h2>
                <div className="w-16 h-1 bg-[#8B1E2B] mx-auto mt-3 mb-4 rounded-full"></div>
                <p className="text-sm text-slate-600">
                  Comprehensive legal advisory spanning corporate transactions, courtroom litigation, and emerging regulatory regimes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {PRACTICE_AREAS.slice(0, 6).map((practice) => (
                  <div
                    key={practice.id}
                    className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#8B1E2B]/40 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-200">
                      <img
                        src={practice.image}
                        alt={practice.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/maheshwari/Corporate-Commercial-1.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                          Core Practice
                        </span>
                        <h3 className="text-lg font-serif font-bold text-white mt-1">
                          {practice.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {practice.shortDesc}
                      </p>

                      <div className="space-y-1.5 border-t border-slate-200 pt-3">
                        <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                          Key Sub-Practices:
                        </div>
                        <ul className="text-xs text-slate-600 space-y-1">
                          {practice.subPractices.slice(0, 3).map((sub, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E2B]"></span>
                              <span className="truncate">{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <button
                          onClick={() => handleSelectPracticeBySlug(practice.slug)}
                          className="text-xs font-bold text-[#8B1E2B] hover:text-[#721721] flex items-center gap-1 group-hover:underline cursor-pointer"
                        >
                          <span>Explore Domain</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleOpenConsultation(practice.title)}
                          className="text-[11px] text-slate-500 hover:text-slate-800 underline"
                        >
                          Book Retainer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <button
                  onClick={() => setActiveTab('practice-areas')}
                  className="px-6 py-3 bg-[#1F242C] hover:bg-[#8B1E2B] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors"
                >
                  View All 11+ Practice Areas →
                </button>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 md:py-20 bg-slate-100 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                    Firm Capabilities
                  </span>
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                    <span className="text-[#8B1E2B]">Why</span> Choose Us?
                  </h2>
                  <div className="w-14 h-1 bg-[#8B1E2B] rounded-full"></div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    With an uncompromising dedication to legal rigor and client confidentiality, Maheshwari &amp; Co. blends deep jurisprudential authority with modern commercial agility.
                  </p>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2 mt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#8B1E2B]/10 text-[#8B1E2B] flex items-center justify-center font-bold">
                        <Scale className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 font-serif">
                          Senior Advocate Oversight
                        </div>
                        <div className="text-xs text-slate-500">
                          Direct partner engagement on every active brief
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {WHY_CHOOSE_US_POINTS.map((pt) => (
                    <div
                      key={pt.id}
                      className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#8B1E2B]/30 transition-all space-y-2.5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#8B1E2B] text-white flex items-center justify-center shadow">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-slate-900">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Attorneys & Leadership Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                    Legal Luminaries
                  </span>
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mt-1">
                    Meet Our <span className="text-[#8B1E2B]">Attorneys</span>
                  </h2>
                  <div className="w-16 h-1 bg-[#8B1E2B] mt-2 rounded-full"></div>
                </div>
                <button
                  onClick={() => setActiveTab('team')}
                  className="text-xs font-bold text-[#8B1E2B] hover:underline flex items-center gap-1"
                >
                  <span>View All 24 Partners &amp; Advisors</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {TEAM_MEMBERS.slice(0, 4).map((member) => (
                  <div
                    key={member.id}
                    onClick={() => {
                      setSelectedTeamMember(member);
                      setActiveTab('team');
                    }}
                    className="group bg-white rounded-xl border border-slate-200 hover:border-[#8B1E2B] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="h-64 overflow-hidden bg-slate-100 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/maheshwari/18-555x600.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] text-amber-300 font-semibold tracking-wider uppercase block">
                          {member.role}
                        </span>
                        <h3 className="text-base font-serif font-bold text-white">
                          {member.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {member.bio}
                      </p>
                      <div className="pt-1 flex items-center justify-between text-[11px] text-[#8B1E2B] font-semibold">
                        <span>View Profile &amp; Bio</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Awards & Accolades Showcase */}
          <section className="py-16 md:py-20 bg-[#191D24] text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold tracking-[0.2em] text-[#D9A74A] uppercase">
                  Global Recognitions
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mt-1">
                  Awards &amp; <span className="text-[#8B1E2B]">Accolades</span>
                </h2>
                <div className="w-16 h-1 bg-[#8B1E2B] mx-auto mt-2 rounded-full"></div>
                <p className="text-sm text-slate-300 mt-2">
                  Consistently ranked among the elite legal advisory firms by international rating publications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {AWARDS_LIST.map((award) => (
                  <div
                    key={award.id}
                    className="bg-[#21262F] border border-slate-700 rounded-xl p-5 hover:border-[#8B1E2B] transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="h-28 flex items-center justify-center bg-white/5 rounded-lg p-2">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <span className="text-[10px] font-bold text-[#D9A74A] tracking-wider uppercase">
                        {award.organization} · {award.year}
                      </span>
                      <h3 className="text-sm font-serif font-bold text-white">
                        {award.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {award.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Blogs & Insights Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                    Thought Leadership
                  </span>
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mt-1">
                    <span className="text-[#8B1E2B]">Recent</span> Blogs &amp; Insights
                  </h2>
                  <div className="w-16 h-1 bg-[#8B1E2B] mt-2 rounded-full"></div>
                </div>
                <button
                  onClick={() => setActiveTab('insights')}
                  className="text-xs font-bold text-[#8B1E2B] hover:underline flex items-center gap-1"
                >
                  <span>Explore All Insights</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                  <article
                    key={post.id}
                    onClick={() => handleSelectArticleBySlug(post.slug)}
                    className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#8B1E2B]/40 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
                  >
                    <div className="h-48 overflow-hidden bg-slate-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/maheshwari/Corporate-Commercial-1.jpg';
                        }}
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
                          <span className="text-[#8B1E2B] font-semibold">{post.category}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8B1E2B] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-3 mt-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                        <span>By {post.author}</span>
                        <span className="font-semibold text-[#8B1E2B]">Read More →</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Client Testimonials Section */}
          <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                  Verified Client Feedback
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mt-1">
                  Clients’ <span className="text-[#8B1E2B]">Testimonials</span>
                </h2>
                <div className="w-16 h-1 bg-[#8B1E2B] mx-auto mt-2 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {CLIENT_TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
                  >
                    <p className="text-xs md:text-sm text-slate-700 italic leading-relaxed">
                      "{t.quote}"
                    </p>
                    <div className="pt-3 border-t border-slate-100">
                      <div className="font-serif font-bold text-sm text-slate-900">
                        {t.name}
                      </div>
                      <div className="text-xs text-[#8B1E2B] font-medium">
                        {t.role}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {t.organization}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Direct Consultation Callout Banner */}
          <section className="bg-[#8B1E2B] text-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                  Get in Touch with Us!
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Facing a Critical Legal Dispute or Transaction?
                </h2>
                <p className="text-xs md:text-sm text-rose-100">
                  Connect directly with our managing partners for confidential evaluation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${MAHESHWARI_FIRM_INFO.phone}`}
                  className="px-6 py-3 bg-[#1F242C] hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{MAHESHWARI_FIRM_INFO.phone}</span>
                </a>
                <button
                  onClick={() => handleOpenConsultation()}
                  className="px-6 py-3 bg-white text-[#8B1E2B] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider rounded shadow transition-colors"
                >
                  Request Callback
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ==================================================== */}
      {/* 2. ABOUT US TAB */}
      {/* ==================================================== */}
      {activeTab === 'about' && (
        <main className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                About the Firm
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                Pioneering Legal Acumen, Global Standards
              </h1>
              <div className="w-16 h-1 bg-[#8B1E2B] mx-auto rounded-full"></div>
            </div>

            {/* Story & Philosophy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Maheshwari &amp; Co.</strong> is a distinguished full-service Indian law firm established under the visionary leadership of Mr. Vipul Maheshwari. Over more than two and a half decades of committed advocacy, the firm has evolved into a premier destination for complex cross-border corporate advisory, high-stakes commercial litigation, and international arbitrations.
                </p>
                <p>
                  Headquartered in New Delhi with dedicated chambers in Mumbai and an associate presence in New York, the firm represents Fortune 500 corporations, public sector enterprises, high-growth startups, and sovereign diplomatic missions.
                </p>
                <p>
                  Our practice philosophy centers on combining intellectual depth with commercial pragmatism. We believe that legal counsel must not merely identify statutory constraints, but forge decisive pathways that protect enterprise value and corporate integrity.
                </p>

                <div className="pt-3 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg border border-slate-200">
                    <div className="text-xl font-bold font-serif text-[#8B1E2B]">25+</div>
                    <div className="text-xs text-slate-600 mt-1">Years of Practice Experience</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-slate-200">
                    <div className="text-xl font-bold font-serif text-[#8B1E2B]">1,500+</div>
                    <div className="text-xs text-slate-600 mt-1">Matters Resolved Across Tribunals</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/assets/maheshwari/Corporate-Commercial-1.jpg"
                  alt="Maheshwari & Co. Chambers"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 bg-[#1F242C] text-white">
                  <h3 className="text-base font-serif font-bold text-amber-400">
                    Our Mission &amp; Core Values
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Uncompromising ethical standards, rigorous conflict checks, senior partner oversight on every brief, and responsive global reach.
                  </p>
                </div>
              </div>
            </div>

            {/* International Desks */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-3">
                International Desks &amp; Bilateral Trade
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-serif font-bold text-[#8B1E2B]">
                    <Globe className="w-4 h-4" />
                    <span>Indo - German Desk</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Anchored by Rechtsanwalt Markus Hoffmann von Wolffersdorff, guiding German, Swiss, and Austrian engineering and automotive companies on FDI in India.
                  </p>
                </div>
                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-serif font-bold text-[#8B1E2B]">
                    <Globe className="w-4 h-4" />
                    <span>Indo - Italian Desk</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Led by Avvocato Umberto Grella, providing legal facilitation for Italian luxury, fashion, and infrastructure conglomerates entering the subcontinent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ==================================================== */}
      {/* 3. PRACTICE AREAS TAB */}
      {/* ==================================================== */}
      {activeTab === 'practice-areas' && (
        <main className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                Practice Areas
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                11 Core Practice Areas &amp; Advisory Domains
              </h1>
              <div className="w-16 h-1 bg-[#8B1E2B] mx-auto rounded-full"></div>
              <p className="text-sm text-slate-600">
                Search or select any practice domain to examine scope of work, governing statutes, and precedent matters.
              </p>
            </div>

            {/* Search filter */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search practice areas, statutes, or keywords..."
                value={practiceSearch}
                onChange={e => setPracticeSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30"
              />
            </div>

            {/* Practice Areas Detailed Cards */}
            <div className="space-y-8">
              {PRACTICE_AREAS
                .filter(p => {
                  if (!practiceSearch) return true;
                  const q = practiceSearch.toLowerCase();
                  return (
                    p.title.toLowerCase().includes(q) ||
                    p.shortDesc.toLowerCase().includes(q) ||
                    p.subPractices.some(s => s.toLowerCase().includes(q))
                  );
                })
                .map((practice) => {
                  const isExpanded = selectedPracticeSlug === practice.slug;

                  return (
                    <div
                      key={practice.id}
                      id={`practice-${practice.slug}`}
                      className={`bg-white rounded-xl border transition-all overflow-hidden ${isExpanded ? 'border-[#8B1E2B] shadow-xl' : 'border-slate-200 hover:border-slate-300 shadow-sm'}`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-4 h-56 lg:h-auto relative overflow-hidden bg-slate-200">
                          <img
                            src={practice.image}
                            alt={practice.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/assets/maheshwari/Corporate-Commercial-1.jpg';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-black/40 px-2 py-0.5 rounded">
                              Domain
                            </span>
                            <h3 className="text-xl font-serif font-bold mt-1">
                              {practice.title}
                            </h3>
                          </div>
                        </div>

                        <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between space-y-4">
                          <div className="space-y-3">
                            <p className="text-sm text-slate-700 leading-relaxed font-normal">
                              {practice.fullDesc}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                                  Scope of Sub-Practices:
                                </h4>
                                <ul className="text-xs text-slate-600 space-y-1">
                                  {practice.subPractices.map((sub, idx) => (
                                    <li key={idx} className="flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E2B]"></span>
                                      <span>{sub}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                                  Key Governing Statutes:
                                </h4>
                                <ul className="text-xs text-slate-600 space-y-1">
                                  {practice.keyLaws.map((law, idx) => (
                                    <li key={idx} className="flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                      <span>{law}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Case highlights */}
                            {practice.caseHighlights && practice.caseHighlights.length > 0 && (
                              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1.5 mt-3">
                                <div className="font-semibold text-slate-800">Notable Case Precedents:</div>
                                {practice.caseHighlights.map((c, idx) => (
                                  <div key={idx} className="text-slate-600 pl-2 border-l-2 border-[#8B1E2B]">
                                    • {c}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <button
                              onClick={() => setSelectedPracticeSlug(isExpanded ? null : practice.slug)}
                              className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                            >
                              {isExpanded ? '▲ Collapse View' : '▼ Expand Practice Details'}
                            </button>
                            <button
                              onClick={() => handleOpenConsultation(practice.title)}
                              className="px-4 py-2 bg-[#8B1E2B] hover:bg-[#721721] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors"
                            >
                              Consult on this Domain
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </main>
      )}

      {/* ==================================================== */}
      {/* 4. OUR TEAM TAB */}
      {/* ==================================================== */}
      {activeTab === 'team' && (
        <main className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                Legal Expertise
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                Meet Our Partners &amp; Attorneys
              </h1>
              <div className="w-16 h-1 bg-[#8B1E2B] mx-auto rounded-full"></div>
              <p className="text-sm text-slate-600">
                Our multi-disciplinary team brings decades of courtroom triumphs, transaction structuring, and regulatory expertise.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', label: 'All Attorneys (24)' },
                { id: 'partner', label: 'Partners' },
                { id: 'associate_partner', label: 'Associate Partners' },
                { id: 'senior_associate', label: 'Senior Associates' },
                { id: 'advisor', label: 'International Desks & Advisors' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setTeamCategoryFilter(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${teamCategoryFilter === tab.id ? 'bg-[#8B1E2B] text-white shadow' : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS
                .filter(m => teamCategoryFilter === 'all' || m.category === teamCategoryFilter)
                .map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedTeamMember(member)}
                    className="group bg-white rounded-xl border border-slate-200 hover:border-[#8B1E2B] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-64 overflow-hidden bg-slate-100 relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/maheshwari/18-555x600.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
                        <div className="absolute bottom-3 left-4 right-4 text-white">
                          <span className="text-[10px] text-amber-300 font-semibold tracking-wider uppercase block">
                            {member.role}
                          </span>
                          <h3 className="text-base font-serif font-bold">
                            {member.name}
                          </h3>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {member.bio}
                        </p>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {member.specialization.slice(0, 2).map((s, idx) => (
                            <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs text-[#8B1E2B] font-semibold">
                      <span>View Bio &amp; Credentials</span>
                      <span>→</span>
                    </div>
                  </div>
                ))}
            </div>

            {/* Individual Team Member Modal */}
            {selectedTeamMember && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
                <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="bg-[#1F242C] text-white p-6 border-b-4 border-[#8B1E2B] flex items-start justify-between">
                    <div>
                      <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">
                        {selectedTeamMember.role}
                      </span>
                      <h3 className="text-2xl font-serif font-bold mt-0.5">
                        {selectedTeamMember.name}
                      </h3>
                      {selectedTeamMember.qualifications && (
                        <p className="text-xs text-slate-300 mt-1">
                          {selectedTeamMember.qualifications}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedTeamMember(null)}
                      className="text-slate-400 hover:text-white p-1"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
                    <p>{selectedTeamMember.bio}</p>

                    {selectedTeamMember.barAdmission && (
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                        <strong className="text-slate-800">Bar Admissions &amp; Courts:</strong>
                        <p className="text-slate-600">{selectedTeamMember.barAdmission}</p>
                      </div>
                    )}

                    <div>
                      <strong className="text-xs uppercase tracking-wider text-slate-800 block mb-1.5">
                        Core Practice Domains:
                      </strong>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedTeamMember.specialization.map((s, idx) => (
                          <span key={idx} className="text-xs bg-[#8B1E2B]/10 text-[#8B1E2B] font-semibold px-2.5 py-1 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        Maheshwari &amp; Co. Advocates
                      </div>
                      <button
                        onClick={() => {
                          setSelectedTeamMember(null);
                          handleOpenConsultation(selectedTeamMember.specialization[0] || 'Corporate Advisory');
                        }}
                        className="px-4 py-2 bg-[#8B1E2B] text-white text-xs font-bold uppercase tracking-wider rounded shadow"
                      >
                        Request Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      )}

      {/* ==================================================== */}
      {/* 5. AWARDS TAB */}
      {/* ==================================================== */}
      {activeTab === 'awards' && (
        <main className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                International Recognition
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                Awards &amp; Accolades
              </h1>
              <div className="w-16 h-1 bg-[#8B1E2B] mx-auto rounded-full"></div>
              <p className="text-sm text-slate-600">
                Acknowledged by global rating directories for jurisprudential leadership, transaction volume, and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {AWARDS_LIST.map((award) => (
                <div
                  key={award.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row gap-6 items-center"
                >
                  <div className="w-full sm:w-44 h-36 bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center justify-center shrink-0">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-[11px] font-bold text-[#8B1E2B] uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                      {award.organization} · {award.year}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-slate-900">
                      {award.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ==================================================== */}
      {/* 6. INSIGHTS / BLOGS TAB */}
      {/* ==================================================== */}
      {activeTab === 'insights' && (
        <main className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                Thought Leadership
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                Legal Insights &amp; Publications
              </h1>
              <div className="w-16 h-1 bg-[#8B1E2B] mx-auto rounded-full"></div>
              <p className="text-sm text-slate-600">
                Authoritative commentary and actionable analysis on statutory notifications, landmark judicial decisions, and regulatory trends.
              </p>
            </div>

            {/* Active article view if selected */}
            {selectedArticle ? (
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-10 shadow-lg space-y-6 max-w-4xl mx-auto">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-bold text-[#8B1E2B] hover:underline flex items-center gap-1"
                >
                  ← Back to All Articles
                </button>

                <div className="h-72 rounded-lg overflow-hidden bg-slate-100">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="text-[#8B1E2B] font-semibold">{selectedArticle.category}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900">
                    {selectedArticle.title}
                  </h2>
                  <div className="text-xs text-slate-500 font-medium">
                    Authored by {selectedArticle.author}, Maheshwari &amp; Co.
                  </div>
                </div>

                <div className="text-sm text-slate-700 leading-relaxed space-y-4 border-t border-slate-200 pt-6 whitespace-pre-line font-serif">
                  {selectedArticle.content}
                </div>

                <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-500">
                    For customized legal advice on this matter, schedule a consultation with our practice heads.
                  </span>
                  <button
                    onClick={() => handleOpenConsultation(selectedArticle.category)}
                    className="px-5 py-2.5 bg-[#8B1E2B] text-white text-xs font-bold uppercase tracking-wider rounded shadow"
                  >
                    Consult on this Topic
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => {
                      setSelectedArticle(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group bg-white border border-slate-200 hover:border-[#8B1E2B]/40 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-52 overflow-hidden bg-slate-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/maheshwari/Corporate-Commercial-1.jpg';
                          }}
                        />
                      </div>
                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span className="text-[#8B1E2B] font-semibold">{post.category}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8B1E2B] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs text-slate-500">
                      <span>{post.date}</span>
                      <span className="font-semibold text-[#8B1E2B]">Read Full Article →</span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </main>
      )}

      {/* ==================================================== */}
      {/* 7. GALLERY TAB */}
      {/* ==================================================== */}
      {activeTab === 'gallery' && (
        <main className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                Chambers &amp; Events
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                Firm Gallery &amp; Symposia
              </h1>
              <div className="w-16 h-1 bg-[#8B1E2B] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-56 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-1.5">
                    <span className="text-[10px] font-bold text-[#8B1E2B] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-base font-serif font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ==================================================== */}
      {/* 8. CAREERS TAB */}
      {/* ==================================================== */}
      {activeTab === 'careers' && (
        <main className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                Work with Us
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                Join the Maheshwari &amp; Co. Team
              </h1>
              <div className="w-16 h-1 bg-[#8B1E2B] mx-auto rounded-full"></div>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                We cultivate an intellectually stimulating environment fostering precision, ethical leadership, and rapid career progression.
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-10 shadow-sm">
              {careerSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    Application Submitted Successfully
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{careerName}</strong>. Our human resources committee reviews candidate portfolios and will get in touch if your background aligns with active openings.
                  </p>
                  <button
                    onClick={() => { setCareerSubmitted(false); setCareerName(''); setCareerEmail(''); }}
                    className="px-5 py-2 bg-[#8B1E2B] text-white text-xs font-bold uppercase rounded shadow"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCareerSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Candidate Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={careerName}
                        onChange={e => setCareerName(e.target.value)}
                        placeholder="e.g. Ananya Mehra"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={careerEmail}
                        onChange={e => setCareerEmail(e.target.value)}
                        placeholder="ananya@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Position of Interest *
                    </label>
                    <select
                      value={careerRole}
                      onChange={e => setCareerRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30"
                    >
                      <option value="Associate - Corporate M&A">Associate - Corporate &amp; Commercial</option>
                      <option value="Senior Counsel - Dispute Resolution">Senior Counsel - Dispute Resolution &amp; Arbitration</option>
                      <option value="Associate - IP Prosecution">Associate - Intellectual Property</option>
                      <option value="Legal Intern (Summer/Winter)">Legal Intern (Summer / Winter)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Statement of Motivation / Law School Credentials
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly state your law school degree, bar admission status, and practice focus..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#8B1E2B] hover:bg-[#721721] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>
      )}

      {/* ==================================================== */}
      {/* 9. CONTACT TAB */}
      {/* ==================================================== */}
      {activeTab === 'contact' && (
        <main className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8B1E2B] uppercase">
                Offices &amp; Chambers
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                Contact Maheshwari &amp; Co.
              </h1>
              <div className="w-16 h-1 bg-[#8B1E2B] mx-auto rounded-full"></div>
              <p className="text-sm text-slate-600">
                Reach out to schedule in-person chambers conferences or virtual counsel sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Offices column */}
              <div className="lg:col-span-5 space-y-6">
                {/* Delhi */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-base font-serif font-bold text-slate-900">
                    <MapPin className="w-5 h-5 text-[#8B1E2B]" />
                    <span>{MAHESHWARI_FIRM_INFO.headOffice.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {MAHESHWARI_FIRM_INFO.headOffice.address}, {MAHESHWARI_FIRM_INFO.headOffice.city} - {MAHESHWARI_FIRM_INFO.headOffice.postalCode}, {MAHESHWARI_FIRM_INFO.headOffice.country}
                  </p>
                  <div className="text-xs space-y-1 text-slate-600 pt-2 border-t border-slate-100">
                    <div><strong>Phone:</strong> {MAHESHWARI_FIRM_INFO.headOffice.phone}</div>
                    <div><strong>Email:</strong> {MAHESHWARI_FIRM_INFO.headOffice.email}</div>
                    <div><strong>Hours:</strong> {MAHESHWARI_FIRM_INFO.headOffice.hours}</div>
                  </div>
                </div>

                {/* Mumbai */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-base font-serif font-bold text-slate-900">
                    <MapPin className="w-5 h-5 text-[#8B1E2B]" />
                    <span>{MAHESHWARI_FIRM_INFO.mumbaiOffice.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {MAHESHWARI_FIRM_INFO.mumbaiOffice.address}, {MAHESHWARI_FIRM_INFO.mumbaiOffice.city} - {MAHESHWARI_FIRM_INFO.mumbaiOffice.postalCode}
                  </p>
                  <div className="text-xs space-y-1 text-slate-600 pt-2 border-t border-slate-100">
                    <div><strong>Phone:</strong> {MAHESHWARI_FIRM_INFO.mumbaiOffice.phone}</div>
                    <div><strong>Email:</strong> {MAHESHWARI_FIRM_INFO.mumbaiOffice.email}</div>
                  </div>
                </div>
              </div>

              {/* Working Contact Form */}
              <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">
                  Send a Direct Legal Inquiry
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Inquiries are treated with strict confidentiality.
                </p>

                {contactSubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-base font-serif font-bold text-emerald-900">
                      Inquiry Dispatched to Practice Heads
                    </h4>
                    <p className="text-xs text-emerald-700">
                      Thank you, {contactName}. We have acknowledged your communication and will connect within statutory hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={e => setContactName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={e => setContactEmail(e.target.value)}
                          placeholder="email@company.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={e => setContactPhone(e.target.value)}
                        placeholder="+91 9643106874"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nature of Legal Query *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={contactMessage}
                        onChange={e => setContactMessage(e.target.value)}
                        placeholder="Detail your requirements..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B]/30"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#8B1E2B] hover:bg-[#721721] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors"
                      >
                        Submit Confidential Inquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <MaheshwariFooter
        setActiveTab={setActiveTab}
        onSelectPractice={handleSelectPracticeBySlug}
      />
    </div>
  );
};
