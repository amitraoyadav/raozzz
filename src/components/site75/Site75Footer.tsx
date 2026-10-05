import React, { useState } from 'react';
import { ArrowUp, Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react';
import { site75Config } from '../../config/site75Config';
import { DESTINATIONS_DATA, SERVICES_DATA } from '../../data/site75Data';

interface Site75FooterProps {
  setActiveTab: (tab: string) => void;
  onBackToHub?: () => void;
  onOpenCallback: () => void;
  onOpenPlanning: () => void;
}

export const Site75Footer: React.FC<Site75FooterProps> = ({
  setActiveTab,
  onBackToHub,
  onOpenCallback,
  onOpenPlanning
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    scrollToTop();
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#05070B] text-white border-t border-[#20293D] pt-20 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Brand & Newsletter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#20293D]">
          
          {/* Brand Vision Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-[#080B12] flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold">
                AL
              </div>
              <div>
                <span className="block font-serif tracking-[0.25em] text-xl font-medium text-white">
                  AURA LUXE
                </span>
                <span className="block font-sans text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
                  Wedding Atelier
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-md">
              {site75Config.TAGLINE}. Specializing in turnkey destination wedding direction, architectural scenography, and royal palace celebrations across India, the Mediterranean, and Middle East.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1.5 font-mono">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{site75Config.ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{site75Config.PHONE_DISPLAY} (Direct Hotline)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{site75Config.EMAIL}</span>
              </p>
            </div>
          </div>

          {/* Newsletter / The Gazette */}
          <div className="lg:col-span-7 bg-[#0E131F] border border-[#20293D] rounded-3xl p-6 sm:p-8 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              The Atelier Gazette
            </span>
            <h3 className="font-serif text-2xl text-white font-medium">
              Receive Curated Seasonal Destination Scouting &amp; Lookbooks
            </h3>
            <p className="text-xs text-slate-400 font-light max-w-xl">
              Quarterly private dispatches showcasing recién unveiled heritage palace venues, global couture designer collections, and floral installations.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3.5 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37] text-xs text-[#D4AF37] font-mono">
                ✓ Thank you. You are subscribed to the private Gazette dispatches.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your personal email address..."
                  className="flex-1 px-4 py-3 rounded-full bg-[#131A29] border border-[#20293D] text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] transition-all cursor-pointer shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-light">
          
          {/* Column 1: The Atelier */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              The Atelier
            </span>
            <div className="space-y-2">
              <button onClick={() => handleNav('home')} className="block hover:text-[#D4AF37] transition-colors cursor-pointer">
                Home
              </button>
              <button onClick={() => handleNav('about')} className="block hover:text-[#D4AF37] transition-colors cursor-pointer">
                Philosophy &amp; Founders
              </button>
              <button onClick={() => handleNav('portfolio')} className="block hover:text-[#D4AF37] transition-colors cursor-pointer">
                Real Wedding Portfolio
              </button>
              <button onClick={() => handleNav('experiences')} className="block hover:text-[#D4AF37] transition-colors cursor-pointer">
                Ceremonial Journey
              </button>
              <button onClick={() => handleNav('gallery')} className="block hover:text-[#D4AF37] transition-colors cursor-pointer">
                Inspiration Gallery
              </button>
              <button onClick={() => handleNav('contact')} className="block hover:text-[#D4AF37] transition-colors cursor-pointer">
                Concierge Desks
              </button>
            </div>
          </div>

          {/* Column 2: Signature Services */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Signature Pillars
            </span>
            <div className="space-y-2 text-slate-300">
              {SERVICES_DATA.slice(0, 6).map(s => (
                <button
                  key={s.id}
                  onClick={() => handleNav('services')}
                  className="block hover:text-[#D4AF37] transition-colors cursor-pointer text-left truncate max-w-full"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Curated Sanctuaries */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Sanctuaries
            </span>
            <div className="space-y-2 text-slate-300">
              {DESTINATIONS_DATA.slice(0, 6).map(d => (
                <button
                  key={d.id}
                  onClick={() => handleNav('destinations')}
                  className="block hover:text-[#D4AF37] transition-colors cursor-pointer text-left truncate max-w-full"
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Direct Action & Hotlines */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Begin Planning
            </span>
            <p className="text-slate-400 text-xs">
              Strictly capped at 18 celebrations annually. Reservations for 2026-2027 are currently open.
            </p>
            <div className="space-y-2">
              <button
                onClick={onOpenPlanning}
                className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] transition-all cursor-pointer shadow-md"
              >
                Start Event Inquiry
              </button>
              <button
                onClick={onOpenCallback}
                className="w-full py-2 text-xs font-medium text-slate-300 hover:text-white border border-[#20293D] rounded-full transition-colors cursor-pointer"
              >
                Request Concierge Call
              </button>
            </div>
          </div>

        </div>

        {/* Social Media & Bottom Legal Bar */}
        <div className="pt-10 border-t border-[#20293D] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-400">
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={site75Config.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#20293D] hover:border-[#D4AF37] flex items-center justify-center text-slate-400 hover:text-[#D4AF37] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={site75Config.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#20293D] hover:border-[#D4AF37] flex items-center justify-center text-slate-400 hover:text-[#D4AF37] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={site75Config.YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#20293D] hover:border-[#D4AF37] flex items-center justify-center text-slate-400 hover:text-[#D4AF37] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={site75Config.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#20293D] hover:border-[#D4AF37] flex items-center justify-center text-slate-400 hover:text-[#D4AF37] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-5 flex-wrap justify-center text-[11px] font-mono">
            <button onClick={() => handleNav('privacy')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => handleNav('terms')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Terms of Engagement
            </button>
            <span>·</span>
            <button onClick={() => handleNav('cookies')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Cookie Policy
            </button>
            <span>·</span>
            <button onClick={() => handleNav('accessibility')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Accessibility
            </button>
            <span>·</span>
            <button onClick={() => handleNav('sitemap')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Sitemap
            </button>
          </div>

          {/* Back to Catalog Hub & Scroll to Top */}
          <div className="flex items-center gap-3">
            {onBackToHub && (
              <button
                onClick={onBackToHub}
                className="px-3.5 py-1.5 rounded-full border border-[#20293D] hover:border-[#D4AF37] text-[11px] font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                ← Catalog Hub
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border border-[#20293D] hover:border-[#D4AF37] flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-[11px] text-stone-500 font-mono">
          <p>
            © {site75Config.ESTABLISHED}–2026 {site75Config.LEGAL_NAME}. All Rights Reserved. Crafted with Original Architectural Design for Site #75.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Site75Footer;
