import React, { useState, useEffect } from 'react';
import {
  HERO_SLIDES,
  STATISTICS,
  PRACTICE_AREAS,
  INDUSTRY_SECTORS,
  CLIENT_LOGOS,
  TEAM_MEMBERS,
  PUBLICATIONS,
  PHOTO_GALLERY,
  LAWLINKS_INFO
} from '../../data/lawlinksData';
import { LawLinksSubPage } from './LawLinksHeader';
import {
  ChevronLeft,
  ChevronRight,
  Scale,
  Award,
  Users,
  Clock,
  Building,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Calendar,
  Search,
  Video,
  ShieldAlert
} from 'lucide-react';

interface Props {
  onNavigate: (page: LawLinksSubPage, extraId?: string) => void;
  onRequestConsultation: () => void;
  onSelectLawyer: (lawyerId: string) => void;
}

export const LawLinksHome: React.FC<Props> = ({
  onNavigate,
  onRequestConsultation,
  onSelectLawyer
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sectorSearch, setSectorSearch] = useState('');

  // Auto rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const filteredSectors = INDUSTRY_SECTORS.filter((s) =>
    s.name.toLowerCase().includes(sectorSearch.toLowerCase())
  );

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. HERO SLIDER */}
      <section className="relative w-full h-[520px] sm:h-[600px] lg:h-[680px] overflow-hidden bg-slate-950">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background image with overlay */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-60 scale-105 transition-transform duration-10000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03A9F5]/20 border border-[#03A9F5]/40 text-[#03A9F5] text-xs font-bold uppercase tracking-widest">
                    <Scale className="w-3.5 h-3.5" />
                    <span>{slide.subtitle}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                    {slide.title}
                  </h1>

                  <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed pt-1">
                    {slide.highlight}
                  </p>

                  <div className="pt-6 flex flex-wrap gap-4">
                    <button
                      onClick={() => onNavigate('litigation')}
                      className="px-6 py-3.5 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wider text-sm flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Practice Areas</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onRequestConsultation}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 backdrop-blur-sm transition-all duration-200 uppercase tracking-wider text-sm cursor-pointer"
                    >
                      Request Legal Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-[#03A9F5] text-white flex items-center justify-center transition-colors border border-white/20 backdrop-blur-sm cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-[#03A9F5] text-white flex items-center justify-center transition-colors border border-white/20 backdrop-blur-sm cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? 'w-8 bg-[#03A9F5]' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5] block">
                Since 2004 · Boutique Law Firm
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                About Law Links Advocates & Legal Consultants
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              Law Links is a premier boutique legal service firm founded by{' '}
              <strong className="text-slate-900">Ms. Lalit Mohini Bhat</strong>,{' '}
              <strong className="text-slate-900">Mr. Naveen R. Nath</strong> (designated Senior Advocate), and{' '}
              <strong className="text-slate-900">Ms. Hetu Arora Sethi</strong> (Advocate-on-Record). The firm operates out of their owned office premises in the prestigious Nizamuddin East area of New Delhi since 2004, alongside a full-fledged branch office in Seshadripuram, Bengaluru.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm">
              With seasoned litigation experience spanning over three decades, our team routinely appears before the{' '}
              <span className="text-slate-900 font-semibold">Supreme Court of India</span>, Delhi High Court, and High Courts across Karnataka, Bombay, Madras, and Allahabad, alongside national tribunals such as NCLAT, NCDRC, APTEL, and NGT. We have more than{' '}
              <strong className="text-[#03A9F5]">500 reported judgments</strong> from the Supreme Court of India alone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-sky-50/60 border border-sky-100">
                <CheckCircle className="w-5 h-5 text-[#03A9F5] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Supreme Court Niche</strong>
                  <span className="text-slate-600">Handled landmark Constitution Bench matters</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-sky-50/60 border border-sky-100">
                <CheckCircle className="w-5 h-5 text-[#03A9F5] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Arbitration & ADR</strong>
                  <span className="text-slate-600">High Court nominated Arbitrators & 500+ mediations</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 bg-[#1e293b] hover:bg-[#03A9F5] text-white font-bold rounded-lg shadow transition-colors text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Firm Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/lawlinks/banner4.png"
                alt="Law Links Supreme Court and High Court Practice"
                className="w-full h-[380px] sm:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#03A9F5]">Owned Office Premises</span>
                  <h4 className="text-xl font-bold">C-47 (LGF), Nizamuddin East, New Delhi</h4>
                  <p className="text-xs text-slate-300">Modern digital legal repository, physical law library & pro-bono service commitment.</p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#03A9F5] text-white p-5 rounded-xl shadow-xl flex items-center gap-4 border-2 border-white">
              <Clock className="w-10 h-10 text-sky-100" />
              <div>
                <span className="text-2xl sm:text-3xl font-black block leading-none">30+ Years</span>
                <span className="text-xs font-semibold tracking-wider uppercase text-sky-100">Litigation Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRACTICE AREAS SECTION */}
      <section className="bg-slate-50 py-16 lg:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
              Core Legal Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Practice Areas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Providing rigorous advocacy, proactive dispute prevention, domestic and international arbitration, and strategic commercial advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((pa) => (
              <div
                key={pa.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 overflow-hidden flex flex-col group"
              >
                <div className="p-6 sm:p-7 space-y-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#03A9F5] group-hover:bg-[#03A9F5] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                    <Scale className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#03A9F5] transition-colors">
                    {pa.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {pa.shortDesc}
                  </p>

                  {/* Bullet highlights */}
                  <div className="space-y-1.5 pt-2 text-xs text-slate-500 border-t border-slate-100">
                    {pa.forums && (
                      <p className="font-medium text-slate-700">
                        • Supreme Court, High Courts & 12+ National Tribunals
                      </p>
                    )}
                    {pa.features && (
                      <p className="font-medium text-slate-700">
                        • {pa.features[0]}
                      </p>
                    )}
                    {pa.sections && (
                      <p className="font-medium text-slate-700">
                        • Secretarial, Governance, Commercial Drafting & Compliance
                      </p>
                    )}
                    {pa.areas && (
                      <p className="font-medium text-slate-700">
                        • Public Law, Commercial, Land Acquisition, IPR, Tax
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(pa.id as LawLinksSubPage)}
                    className="text-xs font-bold uppercase tracking-wider text-[#03A9F5] hover:text-[#0288d1] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-mono">0{PRACTICE_AREAS.indexOf(pa) + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('specialization-areas')}
              className="px-8 py-3.5 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg shadow hover:shadow-lg transition-all text-sm uppercase tracking-wider cursor-pointer"
            >
              View All 32 Specialization Areas & Tribunals
            </button>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY SECTORS (All 32 Sectors) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
              Cross-Sector Expertise
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              32 Industry Sectors We Serve
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              From heavy infrastructure, civil aviation, and banking to telecommunications and white-collar criminal defense.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={sectorSearch}
              onChange={(e) => setSectorSearch(e.target.value)}
              placeholder="Search sectors..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#03A9F5] focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredSectors.map((sector) => (
            <div
              key={sector.name}
              className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#03A9F5] hover:shadow-md transition-all flex items-center gap-3.5 group cursor-default"
            >
              <div className="w-8 h-8 rounded-full bg-sky-50 text-[#03A9F5] flex items-center justify-center shrink-0 group-hover:bg-[#03A9F5] group-hover:text-white transition-colors">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#03A9F5] transition-colors leading-snug">
                {sector.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NUMBERS & STATISTICS COUNTERS */}
      <section className="bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/80">
            {STATISTICS.map((stat, i) => (
              <div key={i} className="pt-6 md:pt-0 px-4 space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#03A9F5]/20 text-[#03A9F5] mx-auto flex items-center justify-center mb-3">
                  {i === 0 && <Users className="w-6 h-6" />}
                  {i === 1 && <Clock className="w-6 h-6" />}
                  {i === 2 && <Building className="w-6 h-6" />}
                  {i === 3 && <Award className="w-6 h-6" />}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#03A9F5] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR TEAM PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
              Qualified Advocates & Partners
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Meet Our Senior Legal Counsel
            </h2>
            <p className="text-sm text-slate-600">
              Seasoned litigators, certified arbitrators, and accredited mediators appearing before Supreme Court and High Courts.
            </p>
          </div>
          <button
            onClick={() => onNavigate('our-team')}
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#03A9F5] hover:text-[#0288d1] flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <span>View All 12 Lawyers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => onSelectLawyer(member.id)}
            >
              <div className="h-64 sm:h-72 overflow-hidden bg-slate-100 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider bg-[#03A9F5] px-2.5 py-1 rounded">
                    Click to View Bio
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#03A9F5] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#03A9F5] font-semibold">{member.role}</p>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{member.experience}</span>
                  <span className="text-[#03A9F5] font-semibold group-hover:underline">Profile &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. KEY CLIENTS CAROUSEL / GRID (28 Logos) */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
              Trusted By Institutions & Corporates
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Key Clients & Empanelled Organizations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              PSUs, Nationalized Banks, Multinational Corporations, and Government Authorities represented across India.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 items-center">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group h-24"
                title={client.name}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-12 w-auto max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                />
                <span className="text-[10px] text-slate-400 group-hover:text-slate-700 truncate w-full text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RECENT PUBLICATIONS & LECTURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
              Knowledge & Scholarly Discourse
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Recent Publications & Legal Insights
            </h2>
            <p className="text-sm text-slate-600">
              Scholarly papers on practical drafting, force majeure, arbitration strategies, and Supreme Court jurisprudence.
            </p>
          </div>
          <button
            onClick={() => onNavigate('publications')}
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#03A9F5] hover:text-[#0288d1] flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <span>View All Publications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-[#03A9F5]" />
                  <span>{pub.date}</span>
                  <span>•</span>
                  <span className="text-slate-600 font-semibold">{pub.author}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 hover:text-[#03A9F5] transition-colors leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {pub.summary}
                </p>
              </div>

              <button
                onClick={() => onNavigate('publications')}
                className="text-xs font-bold uppercase tracking-wider text-[#03A9F5] flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 9. PHOTO & VIDEO GALLERY PREVIEW */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
                Conferences & Media
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Photo & Video Gallery
              </h2>
              <p className="text-sm text-slate-400">
                Capturing high-profile arbitration hearings, legal seminars, and public lectures.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('photo-gallery')}
                className="px-4 py-2 bg-slate-800 hover:bg-[#03A9F5] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer"
              >
                Photos ({PHOTO_GALLERY.length})
              </button>
              <button
                onClick={() => onNavigate('video-gallery')}
                className="px-4 py-2 bg-[#03A9F5] hover:bg-[#0288d1] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Video Lectures (5)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PHOTO_GALLERY.slice(0, 6).map((photo) => (
              <div
                key={photo.id}
                onClick={() => onNavigate('photo-gallery')}
                className="h-36 rounded-lg overflow-hidden relative group cursor-pointer bg-slate-800"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONSULTATION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-[#03A9F5] to-[#0288d1] rounded-2xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-100">
              New Delhi & Bengaluru Offices
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Looking for Experienced Legal Counsel?
            </h3>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              Connect with our senior partners for comprehensive case assessment in Supreme Court, High Courts, arbitration panels, or corporate advisory.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={onRequestConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider cursor-pointer"
            >
              Request Consultation
            </button>
            <button
              onClick={() => onNavigate('contact-us')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/40 hover:bg-slate-900/60 text-white font-bold rounded-xl border border-white/30 transition-all text-sm uppercase tracking-wider cursor-pointer"
            >
              Contact Offices
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
