import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowUp,
  Heart,
  MessageCircle,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { LivintoLogo } from './LivintoLogo';
import { LIVINTO_CONFIG, SHOWROOMS_DATA } from '../../data/livintoInteriorsData';

interface LivintoFooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenProduct: (slug: string) => void;
  onOpenSubPage: (pageType: string) => void;
  onOpenConsultation: () => void;
}

export const LivintoFooter: React.FC<LivintoFooterProps> = ({
  onNavigateToSection,
  onOpenProduct,
  onOpenSubPage,
  onOpenConsultation,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 text-xs border-t border-slate-800">
      {/* Pre-Footer Action Banner */}
      <div className="bg-gradient-to-r from-[#814882] to-[#5a2e5b] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-amber-300 font-bold uppercase tracking-wider text-xs">
              40 Working Days Delivery Guarantee
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Ready to Design Your Dream Home?
            </h3>
            <p className="text-xs sm:text-sm text-purple-100 max-w-xl">
              Meet our award-winning interior designers for a complimentary space planning &amp; 3D visualization session.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-white text-[#814882] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-all shadow-xl cursor-pointer"
            >
              Book Free Consultation
            </button>
            <a
              href={`https://wa.me/${LIVINTO_CONFIG.whatsapp.replace('+', '')}?text=Hi%20Livinto%20Team%2C%20I%20am%20looking%20for%20home%20interiors`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <LivintoLogo theme="light" size="lg" showSubline={true} />

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Livinto is India's premier turnkey home interior design and modular execution company. With 22+ years of design heritage, 29 direct company showrooms, and a 350,000 sq. ft. mechanized manufacturing facility, we have handed over 16,000+ happy homes on time.
            </p>

            <div className="space-y-2 text-xs pt-1 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  National Toll-Free:{' '}
                  <a
                    href={`tel:${LIVINTO_CONFIG.helpline}`}
                    className="font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {LIVINTO_CONFIG.helplineDisplay}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  WhatsApp Assist:{' '}
                  <span className="font-bold text-white">{LIVINTO_CONFIG.whatsappDisplay}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>
                  Corporate Email:{' '}
                  <span className="text-white">{LIVINTO_CONFIG.email}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{LIVINTO_CONFIG.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Customized Interiors
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onOpenProduct('kitchen')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Modular Kitchens (BWP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProduct('bedroom')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Bedroom Wardrobes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProduct('living-room')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Living Room Entertainment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProduct('dining-room')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Dining &amp; Crockery Units
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProduct('decorative-units')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Decorative Partitions &amp; Foyers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProduct('kids-room')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Kids Study &amp; Bunk Suites
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Company &amp; Workflow
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onOpenSubPage('company')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  About Livinto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenSubPage('design-and-build')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Design and Build Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('process')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  40-Day Delivery Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('offers')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Package Offers (28% OFF)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('estimator')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Instant Cost Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('gallery')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Recent Handover Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('testimonials')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  16,000+ Client Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Showroom Hubs */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              29 Direct Showrooms
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-slate-400 text-[11px]">
              <div>• Bengaluru (5)</div>
              <div>• Delhi NCR (4)</div>
              <div>• Mumbai (3)</div>
              <div>• Hyderabad (3)</div>
              <div>• Chennai (3)</div>
              <div>• Pune (2)</div>
              <div>• Kochi (2)</div>
              <div>• Trivandrum (2)</div>
              <div>• Calicut (2)</div>
              <div>• Ahmedabad (1)</div>
              <div>• Coimbatore (1)</div>
              <div>• Mangaluru (1)</div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigateToSection('locations')}
                className="text-amber-400 hover:underline text-[11px] font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>View All Showroom Addresses</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Showrooms Address Strip */}
        <div className="border-t border-slate-800/80 pt-8 space-y-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Selected Flagship Experience Centres:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[11px] text-slate-400">
            {SHOWROOMS_DATA.slice(0, 4).map((s) => (
              <div key={s.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                <div className="font-bold text-white mb-1">{s.branchName}</div>
                <div className="line-clamp-2 text-slate-400">{s.address}</div>
                <div className="text-amber-400 font-mono mt-1 font-semibold">{s.phone}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {LIVINTO_CONFIG.legalName}. All rights reserved. 100% Original Brand Portfolio Recreation.
          </div>

          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 Certified Plant</span>
            <span>•</span>
            <span>10 Years Warranty</span>
            <span>•</span>
            <span>Austrian &amp; German Fittings</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#814882] text-white flex items-center justify-center transition-colors cursor-pointer ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
