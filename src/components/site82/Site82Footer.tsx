import React, { useState } from 'react';
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calculator,
  Calendar,
  BookOpen,
  Send,
  Heart
} from 'lucide-react';
import { site82Config } from '../../config/site82Config';
import { CITIES_LIST } from '../../data/site82Data';

interface Site82FooterProps {
  onNavigate: (view: string, cityOrCategory?: string) => void;
  onOpenCalculator: () => void;
  onOpenConsultation: () => void;
}

export const Site82Footer: React.FC<Site82FooterProps> = ({
  onNavigate,
  onOpenCalculator,
  onOpenConsultation
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#12161F] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      {/* Top Banner / Consultation CTA */}
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-12 mb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#F54900] via-[#F36F21] to-[#E65100] p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-orange-950/40 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              100% Free RERA Advisory &amp; Zero Brokerage
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Looking for High-ROI Property Investment in Delhi-NCR?
            </h3>
            <p className="text-white/90 text-sm sm:text-base mt-2 max-w-xl">
              Connect with our certified property strategists for verified commercial suites, high-street retail, and luxury homes.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-white text-[#F54900] font-bold text-sm hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${site82Config.WHATSAPP}?text=Hello%20Wealth%20Nexus,%20I%20am%20interested%20in%20property%20consultation.`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-xl bg-emerald-600/90 text-white font-semibold text-sm hover:bg-emerald-500 transition-all cursor-pointer flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-800/80">
        {/* Column 1: Brand Info & RERA info */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F54900] to-[#F36F21] flex items-center justify-center text-white shadow-md shadow-orange-500/25">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans font-bold text-xl tracking-tight text-white block">
                {site82Config.BRAND_NAME}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#F36F21] block">
                {site82Config.BRAND_SUBTITLE}
              </span>
            </div>
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
            {site82Config.TAGLINE}. {site82Config.LEGAL_NAME} has delivered trusted advisory to 15,000+ satisfied buyers and institutional investors across India since {site82Config.FOUNDED_YEAR}.
          </p>

          {/* RERA Badge Cards */}
          <div className="pt-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-2.5">
              Verified RERA Registrations
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800 flex flex-col">
                <span className="text-[#F36F21] font-semibold">UP RERA</span>
                <span className="text-neutral-300 font-medium">{site82Config.RERA_NUMBERS.UP}</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800 flex flex-col">
                <span className="text-[#F36F21] font-semibold">Delhi RERA</span>
                <span className="text-neutral-300 font-medium">{site82Config.RERA_NUMBERS.DELHI}</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800 flex flex-col">
                <span className="text-[#F36F21] font-semibold">Haryana RERA</span>
                <span className="text-neutral-300 font-medium">{site82Config.RERA_NUMBERS.HARYANA}</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800 flex flex-col">
                <span className="text-[#F36F21] font-semibold">Uttarakhand RERA</span>
                <span className="text-neutral-300 font-medium">{site82Config.RERA_NUMBERS.UTTARAKHAND}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Properties & Cities */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-l-2 border-[#F54900] pl-2.5">
            Explore Properties
          </h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <button
                onClick={() => onNavigate('properties')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                All Verified Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('properties-residential')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Residential Apartments &amp; Villas
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('properties-commercial')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Commercial Office &amp; Retail
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('properties-luxury')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Luxury &amp; Golf Penthouses
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('properties-plots')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Plots &amp; Mixed Land Use
              </button>
            </li>
            <li className="pt-2">
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-1.5 font-bold">
                Top Cities
              </span>
              <div className="flex flex-wrap gap-1.5">
                {CITIES_LIST.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onNavigate('properties-city', c.name)}
                    className="px-2 py-0.5 rounded text-xs bg-neutral-800 text-neutral-300 hover:bg-[#F54900] hover:text-white transition-all cursor-pointer"
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>

        {/* Column 3: Insights & Tools */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-l-2 border-[#F54900] pl-2.5">
            Knowledge &amp; Tools
          </h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <button
                onClick={() => onNavigate('blogs')}
                className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#F54900]" />
                <span>All Real Estate Guides</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('blogs-vastu')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Vastu Guide for Modern Homes
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('blogs-legal')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Legal &amp; Registry Documentation
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('blogs-city')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Noida &amp; NCR Master Plan Guides
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('events')}
                className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#F54900]" />
                <span>Investor Meets &amp; Expos</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('news')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                NCR Infrastructure News
              </button>
            </li>
            <li className="pt-2">
              <button
                onClick={onOpenCalculator}
                className="w-full px-3 py-2 rounded-lg bg-orange-950/40 border border-orange-500/30 text-[#F54900] hover:bg-orange-900/30 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>EMI &amp; ROI Yield Calculator</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Company & Advisory */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-l-2 border-[#F54900] pl-2.5">
            Company &amp; Offices
          </h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <button
                onClick={() => onNavigate('about-us')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                About Wealth Nexus
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('happy-customers')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Client Testimonials &amp; Stories
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('career')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Careers &amp; Open Roles
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('life-at-wc')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Life @ Wealth Nexus
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact-us')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Contact &amp; Branch Locator
              </button>
            </li>
            <li className="pt-2 text-xs text-neutral-400 space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F54900] shrink-0 mt-0.5" />
                <span>Sector 132, Express Trade Tower-2, Noida (HQ)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F54900] shrink-0" />
                <a href={`tel:${site82Config.PHONE_NUM}`} className="hover:text-white transition-colors">
                  {site82Config.PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F54900] shrink-0" />
                <a href={`mailto:${site82Config.EMAIL}`} className="hover:text-white transition-colors">
                  {site82Config.EMAIL}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter & Subscriptions Bar */}
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-12 py-8 border-b border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-base font-semibold text-white">
            Subscribe to NCR Property Watch &amp; Exclusive Pre-Launch Invites
          </h4>
          <p className="text-xs text-neutral-400 mt-1">
            Receive weekly RERA alerts, commercial rental yield analysis, and off-market project previews.
          </p>
        </div>

        <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto gap-2">
          {newsletterSubscribed ? (
            <div className="px-4 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you! You are now subscribed to NCR Property Watch.</span>
            </div>
          ) : (
            <>
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#F54900] w-full sm:w-72"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#F54900] text-white text-xs font-semibold hover:bg-[#E65100] transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </form>
      </div>

      {/* Bottom Legal Disclaimer & Copyright */}
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 text-xs text-neutral-400 space-y-4">
        <p className="leading-relaxed text-[11px] text-neutral-400">
          <strong className="text-neutral-400">Disclaimer:</strong> {site82Config.LEGAL_NAME} is an authorized real estate channel partner and advisory firm (UP RERA: {site82Config.RERA_NUMBERS.UP}). The information provided on this website is for general awareness and guidance purposes only and does not constitute a legal offer, financial advice, or solicitation. Project details, specifications, floor plans, and pricing are subject to revision as per respective developer notifications and RERA guidelines. All trademarks, developer brand logos, and project names belong to their respective registered proprietors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800/60 text-neutral-400 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {site82Config.LEGAL_NAME}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms-and-conditions')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => onNavigate('disclaimer')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              RERA Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
