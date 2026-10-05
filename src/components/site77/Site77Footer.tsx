import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Music,
  ArrowRight,
  Disc,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';

interface Site77FooterProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export const Site77Footer: React.FC<Site77FooterProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [guestlistEmail, setGuestlistEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestlistEmail.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-[#D4AF37]/20 text-gray-400 text-xs">
      {/* Top Pre-Footer Callout Banner */}
      <div className="border-b border-white/5 py-12 bg-gradient-to-r from-[#14120C] via-[#08090C] to-[#14120C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MAKE TONIGHT UNFORGETTABLE</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
              READY FOR AN EXTRAORDINARY NIGHT?
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all"
            >
              Book VIP Table
            </button>
            <a
              href={`https://wa.me/${site77Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(
                site77Config.WHATSAPP_DEFAULT_MSG
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 font-mono uppercase tracking-wider text-xs transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#1A1810]">
                <Disc className="w-5 h-5 text-[#D4AF37] animate-[spin_8s_linear_infinite]" />
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-xl font-bold text-white uppercase">
                  {site77Config.BRAND_NAME}
                </span>
                <p className="text-[9px] font-mono tracking-widest text-[#D4AF37]">
                  LUXURY NIGHTCLUB GOA
                </p>
              </div>
            </div>

            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
              {site77Config.SUBTITLE}. Inspired by the pinnacle of international nightlife culture, 
              delivering precision acoustic engineering, kinetic laser visual spectacles, and white-glove VIP hospitality.
            </p>

            <div className="space-y-1.5 font-mono text-[11px] text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>{site77Config.ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>{site77Config.OPENING_HOURS}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>VIP Concierge: {site77Config.PHONE_DISPLAY}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={site77Config.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={site77Config.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={site77Config.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={site77Config.SPOTIFY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
              >
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#F3E5AB]">
              EXPLORE NOCTURNA
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Arena
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-us')}
                  className="hover:text-white transition-colors"
                >
                  About the Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-white transition-colors"
                >
                  Upcoming Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('booking')}
                  className="hover:text-white transition-colors text-[#D4AF37]"
                >
                  Book a VIP Table
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Photo Gallery & Lasers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Business & Press */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#F3E5AB]">
              BUSINESS & STORIES
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <button
                  onClick={() => onNavigate('franchise')}
                  className="hover:text-white transition-colors"
                >
                  Franchise Opportunity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blogs')}
                  className="hover:text-white transition-colors"
                >
                  Nightlife Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="hover:text-white transition-colors"
                >
                  Venue & Door Policy
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${site77Config.BOOKINGS_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  Private Event Hire
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site77Config.EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  Artist Booking Rider
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: VIP Guestlist Club Signup */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-2 text-[#F3E5AB]">
              VIP GUEST LIST
            </h4>
            <p className="text-[11px] text-gray-400 font-light mb-4">
              Receive secret guest DJ announcements and priority table allotments directly to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F3E5AB] text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>You’re on the exclusive list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={guestlistEmail}
                  onChange={e => setGuestlistEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-[#D4AF37] text-black font-bold uppercase text-[11px] font-mono tracking-wider hover:bg-[#F3E5AB] transition-colors"
                >
                  Join Guest List
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-500 gap-4">
          <p>
            © {site77Config.FOUNDED_YEAR}–2026 {site77Config.LEGAL_NAME}. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span>Age 21+ Strictly Enforced</span>
            <span>·</span>
            <span>Dress Code: Glamorous Chic</span>
            <span>·</span>
            <span>Baga Creek, North Goa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
