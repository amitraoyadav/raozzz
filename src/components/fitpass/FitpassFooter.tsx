import React from 'react';
import {
  Briefcase,
  Copy,
  Database,
  Heart,
  ShieldCheck,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface FitpassFooterProps {
  onNavigate: (tab: string) => void;
  onOpenBmiModal: () => void;
}

export const FitpassFooter: React.FC<FitpassFooterProps> = ({ onNavigate, onOpenBmiModal }) => {
  return (
    <footer id="footer" className="bg-[#000000] text-white pt-12 pb-8 w-full border-t border-stone-800 font-['Figtree',sans-serif]">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
        {/* Top Grid: Links + Registered Address */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12 pb-10">
          {/* Left: 4 Columns of Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 flex-1">
            {/* 1. PRODUCTS */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
                PRODUCTS
              </h4>
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-stone-300">
                <button onClick={() => onNavigate('onepass')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  FITPASS NETWORK
                </button>
                <button onClick={() => onNavigate('fitfeast')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  FITFEAST
                </button>
                <button onClick={() => onNavigate('fitcoach')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  FITCOACH
                </button>
                <button onClick={() => onNavigate('tv')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  FITPASS-TV
                </button>
                <button onClick={() => onNavigate('explore')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  FITNESS ACTIVITIES
                </button>
              </div>
            </div>

            {/* 2. ABOUT US */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
                ABOUT US
              </h4>
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-stone-300">
                <button onClick={() => onNavigate('onepass')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  About FITPASS
                </button>
                <button onClick={() => onNavigate('onepass')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Leadership Team
                </button>
                <button onClick={() => onNavigate('blog')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Careers & Hiring
                </button>
                <button onClick={() => onNavigate('blog')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Fitness Journal
                </button>
                <button onClick={() => onNavigate('onepass')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Investor Relations
                </button>
                <button onClick={() => onNavigate('onepass')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Web Stories
                </button>
              </div>
            </div>

            {/* 3. HELP */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
                HELP
              </h4>
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-stone-300">
                <a href="mailto:care@fitpass.co.in" className="hover:text-[#D6383B] transition-colors">
                  Contact Us
                </a>
                <button onClick={() => onNavigate('plans')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Become a Partner Gym
                </button>
                <button onClick={() => onNavigate('onepass')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Sweatiquette FAQs
                </button>
                <button onClick={() => onNavigate('fitheal')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  FITHEAL Healthcare
                </button>
              </div>
            </div>

            {/* 4. CONSUMER POLICY */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
                CONSUMER POLICY
              </h4>
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-stone-300">
                <button onClick={() => onNavigate('onepass')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Terms & Conditions
                </button>
                <button onClick={() => onNavigate('onepass')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Fair Use Policy
                </button>
                <button onClick={() => onNavigate('onepass')} className="text-left hover:text-[#D6383B] transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>

          {/* Right: Registered Office Address */}
          <div className="lg:max-w-md w-full flex flex-col gap-3 text-xs sm:text-sm text-stone-300 border-t lg:border-t-0 border-stone-800 pt-6 lg:pt-0">
            <h4 className="text-white text-sm sm:text-base font-bold tracking-wide">
              Registered Office Address
            </h4>
            <div className="space-y-1.5 text-stone-400">
              <p className="font-semibold text-white">ASR Market Ventures Private Limited</p>
              <p>3E/2, Block E3, Jhandewalan Extension, Jhandewalan, New Delhi, Delhi 110055, India</p>
              <p className="text-[11px] font-mono text-stone-400">CIN: U52590DL2012PTC232368</p>
              <p>
                Toll-free no:{' '}
                <a href="tel:1800-5714-466" className="text-[#D6383B] font-bold hover:underline">
                  1800-5714-466
                </a>
                {' '}| Email:{' '}
                <a href="mailto:care@fitpass.co.in" className="text-white underline hover:text-[#D6383B]">
                  care@fitpass.co.in
                </a>
              </p>
            </div>

            {/* Social icons */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-white block mb-2">Follow us on</span>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/fitpassindia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-xs font-bold hover:bg-[#D6383B] transition-colors" title="Facebook">
                  f
                </a>
                <a href="https://x.com/fitpassindia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-xs font-bold hover:bg-[#D6383B] transition-colors" title="X (Twitter)">
                  𝕏
                </a>
                <a href="https://www.instagram.com/fitpassindia/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-xs font-bold hover:bg-[#D6383B] transition-colors" title="Instagram">
                  📸
                </a>
                <a href="https://www.youtube.com/@Fitpass" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-xs font-bold hover:bg-[#D6383B] transition-colors" title="YouTube">
                  ▶
                </a>
                <a href="https://in.linkedin.com/company/fitpassindia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-xs font-bold hover:bg-[#D6383B] transition-colors" title="LinkedIn">
                  in
                </a>
                <a href="https://wa.me/919821183422" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-emerald-900 border border-emerald-700 flex items-center justify-center text-xs font-bold hover:bg-emerald-600 transition-colors" title="WhatsApp">
                  💬
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: International Certifications */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-stone-800">
          <div className="flex flex-col gap-1 max-w-xl">
            <h5 className="font-bold text-sm sm:text-base text-white">Security & Quality Certifications</h5>
            <p className="text-xs text-stone-400">
              We meet requisite international quality and data security standards including ISO 27001 and GDPR compliance.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 flex items-center gap-2 text-xs font-bold text-stone-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 flex items-center gap-2 text-xs font-bold text-stone-200">
              <Award className="w-4 h-4 text-amber-400" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar: Quick navigation icons & Copyright */}
        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full md:w-auto">
            <button onClick={() => onNavigate('onepass')} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-left">
              <Briefcase className="w-3.5 h-3.5 text-[#D6383B]" />
              <span>Corporate Report</span>
            </button>
            <button onClick={() => onNavigate('onepass')} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-left">
              <Copy className="w-3.5 h-3.5 text-[#D6383B]" />
              <span>Corporate Wellness</span>
            </button>
            <button onClick={() => onNavigate('explore')} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-left">
              <Database className="w-3.5 h-3.5 text-[#D6383B]" />
              <span>Browse Studios</span>
            </button>
            <button onClick={onOpenBmiModal} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-left text-amber-300 font-bold">
              <Heart className="w-3.5 h-3.5 text-[#D6383B] animate-pulse" />
              <span>Health / BMI Calculator</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-[11px] sm:text-xs">
              © 2015-2026 fitpass.co.in | All Rights Reserved
            </span>
            <div className="flex items-center gap-1 text-[10px] text-stone-500 bg-stone-900 px-2.5 py-1 rounded">
              <span>🔒 256-Bit SSL Encrypted Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
