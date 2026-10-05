import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  ArrowUp, 
  ShieldCheck, 
  CheckCircle2, 
  Send,
  Building2,
  Calendar,
  Layers
} from 'lucide-react';
import { SAMAROH_CONFIG } from '../../data/samarohLuxeData';
import { SamarohNavTab } from './SamarohNavbar';

interface SamarohFooterProps {
  onSelectTab: (tab: SamarohNavTab) => void;
  onOpenConsultation: () => void;
}

export const SamarohFooter: React.FC<SamarohFooterProps> = ({
  onSelectTab,
  onOpenConsultation
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello ${SAMAROH_CONFIG.DISPLAY_NAME}, I am reaching out from your website footer to plan our wedding decor & event experience.`
    );
    window.open(`https://wa.me/${SAMAROH_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <footer className="bg-[#141210] text-stone-300 border-t border-stone-800 relative overflow-hidden">
      {/* Pre-footer Callout Banner */}
      <div className="border-b border-stone-800 bg-[#1C1917]/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <span className="text-xs uppercase font-bold tracking-widest text-[#E06D53] flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#E06D53]" />
              Experience 3D Virtual Wedding Design
            </span>
            <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-white">
              See your wedding stage before the big day.
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light max-w-xl">
              Book a complimentary design session with our lead architects. We provide photo-realistic 3D renders tailored to your exact venue floor-plan.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E06D53] to-[#C8523B] hover:from-[#C8523B] hover:to-[#E06D53] text-white text-xs font-bold shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Free 3D Consultation</span>
            </button>
            <button
              onClick={openWhatsApp}
              className="px-5 py-3.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Our Studio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E06D53] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-['Fraunces',serif] text-2xl font-bold text-white tracking-tight">
                  SAMAROH <span className="font-light italic text-[#E06D53]">LUXE</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase block font-semibold">
                  Modern Wedding &amp; Event Platform
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light max-w-sm">
              Samaroh Luxe is India’s modern wedding styling and event experience company. We combine 3D spatial tech with 45,000+ sq. ft. of in-house fabrication workshops to deliver uncompromised luxury decor with transparent, itemized pricing.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E06D53] shrink-0" />
                <span>Zero Middleman Markups</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#E06D53] shrink-0" />
                <span>In-House Fabrication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E06D53] shrink-0" />
                <span>1,450+ Celebrations</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E06D53] shrink-0" />
                <span>100% On-Time Guarantee</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#E06D53]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('packages')} className="hover:text-white transition-colors cursor-pointer">
                  Curated Decor Packages
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('calculator')} className="hover:text-white transition-colors cursor-pointer">
                  Interactive Decor Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('services')} className="hover:text-white transition-colors cursor-pointer">
                  Full Planning Services
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('lookbook')} className="hover:text-white transition-colors cursor-pointer">
                  Real Weddings Lookbook
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('venues')} className="hover:text-white transition-colors cursor-pointer">
                  Iconic Styled Venues
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Our In-House Model
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Studio Desks &amp; Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Decor Specialties Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#E06D53]">
              Ceremony Styling
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Traditional Temple Mandaps</li>
              <li>Glasshouse &amp; Mirrored Stages</li>
              <li>Concert LED Sangeet Dance Floors</li>
              <li>Sunshine Marigold Urli Haldi</li>
              <li>Bohemian Garden Mehendi Teepees</li>
              <li>Cocktail Lounges &amp; Bar Styling</li>
              <li>Floral Walkways &amp; Entrance Tunnels</li>
              <li>Destination Resort Transformations</li>
            </ul>
          </div>

          {/* Experience Studios Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#E06D53]">
              Design Studios
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              {SAMAROH_CONFIG.CITIES.slice(0, 4).map(city => (
                <div key={city.id} className="space-y-0.5">
                  <span className="font-semibold text-stone-200 block">{city.name}</span>
                  <span className="text-[11px] text-stone-500 block leading-tight">{city.studio}</span>
                </div>
              ))}
              <div className="pt-2">
                <span className="text-[11px] text-[#E06D53] font-semibold">Also styling in Chennai &amp; Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter & Direct Line */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email for bridal lookbook &amp; trend guides"
              className="flex-1 bg-stone-900 border border-stone-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#E06D53] hover:bg-[#C8523B] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>

          <div className="flex items-center justify-start md:justify-end gap-3 text-xs">
            <span className="text-stone-400">Follow our celebrations:</span>
            <a
              href={SAMAROH_CONFIG.INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-stone-850 hover:bg-[#E06D53] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SAMAROH_CONFIG.FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-stone-850 hover:bg-[#E06D53] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="mt-8 pt-6 border-t border-stone-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {SAMAROH_CONFIG.LEGAL_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px]">Website #69 in RaoSitez Catalog</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
