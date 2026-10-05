import React, { useState } from 'react';
import { 
  Crown, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Youtube, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { PsrNavTab } from './PsrNavbar';

interface PsrFooterProps {
  onSelectTab: (tab: PsrNavTab) => void;
  onSelectDestination?: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const PsrFooter: React.FC<PsrFooterProps> = ({
  onSelectTab,
  onSelectDestination,
  onOpenConsultation
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello ${siteConfig.SITE_NAME}, I am reaching out through your website footer to plan our destination wedding.`
    );
    window.open(`https://wa.me/${siteConfig.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`, '_blank');
  };

  const destinations = [
    { name: 'Udaipur Palace Weddings', slug: 'udaipur' },
    { name: 'Jaipur Heritage Celebrations', slug: 'jaipur' },
    { name: 'Goa Beachfront Romance', slug: 'goa' },
    { name: 'Jodhpur Imperial Fortresses', slug: 'jodhpur' },
    { name: 'Kerala Serene Backwaters', slug: 'kerala' },
    { name: 'Delhi NCR Luxury Estates', slug: 'delhi-ncr' },
    { name: 'Agra Taj Mahal Horizons', slug: 'agra' },
    { name: 'Jim Corbett Forest Weddings', slug: 'jim-corbett' }
  ];

  return (
    <footer className="bg-[#120306] text-stone-300 border-t border-[#C5A059]/30 relative overflow-hidden">
      {/* Decorative Golden Pattern / Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#C5A059]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top Pre-Footer Conversion Callout */}
      <div className="border-b border-[#C5A059]/20 bg-[#1D060B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-2">
            <span className="text-[#DFBE78] text-xs font-bold uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#DFBE78]" />
              Start Your Journey with India’s Elite Planners
            </span>
            <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ready to Craft an Unforgettable Royal Wedding?
            </h3>
            <p className="text-stone-400 text-sm max-w-xl">
              Schedule a private consultation with our Senior Wedding Directors. We analyze your guest count, aesthetic vision, and deliver a transparent line-item feasibility roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] hover:from-[#DFBE78] hover:to-[#C5A059] text-[#1A0509] font-bold text-xs uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <span>{siteConfig.PRIMARY_CTA}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={openWhatsApp}
              className="px-6 py-3.5 rounded-full bg-emerald-800/40 hover:bg-emerald-700/60 border border-emerald-500/50 text-emerald-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Chat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info (Span 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DFBE78] via-[#C5A059] to-[#8C6D2D] p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#1A0509] flex items-center justify-center text-[#DFBE78]">
                  <Crown className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="font-['Playfair_Display',serif] text-2xl font-bold tracking-tight text-white block">
                  {siteConfig.SITE_NAME}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#DFBE78] uppercase font-sans font-semibold block -mt-0.5">
                  Luxury Weddings &amp; Venues
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.SITE_NAME} is a leading destination wedding planning company and luxury venue specialist in India. Over 12+ years and 380+ celebrations, we have redefined royal palace and coastal nuptials with complete financial transparency and five-star hospitality.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <ShieldCheck className="w-4 h-4 text-[#DFBE78] shrink-0" />
                <span>100% Open-Book Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <Award className="w-4 h-4 text-[#DFBE78] shrink-0" />
                <span>380+ Destination Weddings</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <Crown className="w-4 h-4 text-[#DFBE78] shrink-0" />
                <span>140+ Curated Palaces & Forts</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <Sparkles className="w-4 h-4 text-[#DFBE78] shrink-0" />
                <span>Zero Hidden Commissions</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="text-xs uppercase tracking-widest text-[#DFBE78] font-bold block mb-3">
                Follow Our Royal Journeys
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#DFBE78] hover:text-[#DFBE78] flex items-center justify-center transition-colors text-stone-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#DFBE78] hover:text-[#DFBE78] flex items-center justify-center transition-colors text-stone-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.YOUTUBE}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#DFBE78] hover:text-[#DFBE78] flex items-center justify-center transition-colors text-stone-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-b border-[#C5A059]/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-[#DFBE78] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('about')} className="hover:text-[#DFBE78] transition-colors cursor-pointer">
                  About {siteConfig.SITE_NAME}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('destinations')} className="hover:text-[#DFBE78] transition-colors cursor-pointer">
                  Destination Showcase
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('venues')} className="hover:text-[#DFBE78] transition-colors cursor-pointer">
                  Curated Venues & Palaces
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('services')} className="hover:text-[#DFBE78] transition-colors cursor-pointer">
                  11 Planning Services
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('packages')} className="hover:text-[#DFBE78] transition-colors cursor-pointer">
                  Wedding Packages
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('portfolio')} className="hover:text-[#DFBE78] transition-colors cursor-pointer">
                  Real Weddings Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('calculator')} className="hover:text-[#DFBE78] transition-colors cursor-pointer text-[#DFBE78] font-medium">
                  Budget Estimator Tool
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('blog')} className="hover:text-[#DFBE78] transition-colors cursor-pointer">
                  Insights & Cost Guides
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('contact')} className="hover:text-[#DFBE78] transition-colors cursor-pointer">
                  Contact & Consultations
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-b border-[#C5A059]/30 pb-2">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              {destinations.map(d => (
                <li key={d.slug}>
                  <button
                    onClick={() => {
                      if (onSelectDestination) {
                        onSelectDestination(d.slug);
                      } else {
                        onSelectTab('destinations');
                      }
                    }}
                    className="hover:text-[#DFBE78] transition-colors cursor-pointer text-left block"
                  >
                    {d.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-b border-[#C5A059]/30 pb-2">
              Contact & Studios
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFBE78] shrink-0 mt-0.5" />
                <span>{siteConfig.ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFBE78] shrink-0" />
                <a href={`tel:${siteConfig.PHONE.replace(/\s+/g, '')}`} className="hover:text-[#DFBE78] transition-colors text-white font-medium">
                  {siteConfig.PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFBE78] shrink-0" />
                <a href={`mailto:${siteConfig.EMAIL}`} className="hover:text-[#DFBE78] transition-colors">
                  {siteConfig.EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <button onClick={openWhatsApp} className="text-emerald-400 hover:underline cursor-pointer">
                  WhatsApp: {siteConfig.WHATSAPP_DISPLAY}
                </button>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#DFBE78] font-semibold block mb-2">
                The Destination Wedding Journal
              </span>
              <p className="text-[11px] text-stone-400 mb-2">
                Receive curated venue secret rates, seasonal cost trends, and bridal styling previews.
              </p>
              {subscribed ? (
                <div className="p-2.5 rounded-lg bg-emerald-900/40 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Welcome to our inner circle.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={e => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 rounded bg-[#C5A059] hover:bg-[#DFBE78] text-[#1A0509] font-bold text-xs flex items-center justify-center cursor-pointer transition-colors"
                      title="Subscribe"
                    >
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Branch Offices Pill Row */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-400">
          {siteConfig.BRANCHES.map(branch => (
            <div key={branch.city} className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1">
              <span className="text-white font-bold block">{branch.city}</span>
              <p className="text-[11px] text-stone-400 line-clamp-2">{branch.address}</p>
            </div>
          ))}
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.LEGAL_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => onSelectTab('about')} className="hover:text-stone-300 cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onSelectTab('about')} className="hover:text-stone-300 cursor-pointer">
              Terms of Engagement
            </button>
            <span>•</span>
            <button onClick={() => onSelectTab('contact')} className="hover:text-stone-300 cursor-pointer">
              Liaison Office
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
