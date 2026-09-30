import React from 'react';
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
  Heart,
  Car,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface BrioFooterProps {
  onNavigate: (tab: string, packageSlug?: string) => void;
  onOpenBookingModal: () => void;
}

export const BrioFooter: React.FC<BrioFooterProps> = ({
  onNavigate,
  onOpenBookingModal
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs sm:text-sm">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black text-white font-['Poppins']">
                  Brio<span className="text-teal-400">Travels</span>
                </span>
                <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Demo Website
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-['Inter']">
              Delhi NCR’s premier tour & travel agency specializing in tailor-made domestic holidays, international vacation circuits, honeymoon private pool villas, and same day Agra Taj Mahal tours.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-teal-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ISO 9001:2015</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-amber-300">
                <span>★ 4.9/5 Rating (4.9k+ Travellers)</span>
              </span>
            </div>

            {/* WhatsApp CTA button */}
            <div className="pt-2">
              <a
                href="https://wa.me/910000000000?text=Hello%20Brio%20Travels,%20I%20am%20interested%20in%20planning%20a%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+91-00000-00000)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Domestic Holidays */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Poppins']">
              Domestic Tours
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'kashmir')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Kashmir & Dal Lake
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'golden-triangle')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Golden Triangle (Agra/Jaipur)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'kerala')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Kerala Backwaters
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'himachal-pradesh')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Himachal (Shimla/Manali)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'andaman')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Andaman Islands
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'chardham')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Sacred Chardham Yatra
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('domestic')}
                  className="text-teal-400 font-bold hover:underline cursor-pointer"
                >
                  View All 30 Domestic Tours →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: International Tours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Poppins']">
              International Tours
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'dubai')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Dubai & Abu Dhabi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'indonesia-bali')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Bali & Nusa Penida
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'maldives')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Maldives Overwater Villa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'almaty')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Almaty (Kazakhstan)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'europe')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Europe Highlights (Paris/Swiss)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('package-detail', 'thailand')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Thailand (Bangkok/Pattaya)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('international')}
                  className="text-teal-400 font-bold hover:underline cursor-pointer"
                >
                  View All 15 International Tours →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Poppins']">
              Contact & Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Connaught Place, Inner Circle, New Delhi - 110001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+910000000000" className="hover:text-white transition-colors">
                  +91-00000-00000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                  info@example.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mon - Sat: 10:00 AM – 7:00 PM<br />(Sunday on Call)</span>
              </div>
            </div>

            {/* Special Quick Links */}
            <div className="pt-2 border-t border-slate-800 space-y-1.5">
              <button
                onClick={() => onNavigate('taj-mahal')}
                className="text-xs text-orange-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3 h-3" />
                <span>Same Day Taj Mahal Tour</span>
              </button>
              <button
                onClick={() => onNavigate('car-rentals')}
                className="text-xs text-teal-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Car className="w-3 h-3" />
                <span>Chauffeur Car Rentals</span>
              </button>
              <button
                onClick={() => onNavigate('honeymoon')}
                className="text-xs text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Heart className="w-3 h-3" />
                <span>Honeymoon Special Packages</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Demo Badge & Policy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Brio Travels. All rights reserved.</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-amber-400">
              Demo Website
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('refund')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Refund & Cancellation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
