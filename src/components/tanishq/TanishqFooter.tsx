import React from 'react';
import {
  ShieldCheck,
  Award,
  RefreshCw,
  Truck,
  Phone,
  Mail,
  MapPin,
  Lock,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onOpenStoreLocator: () => void;
  onOpenAppointment: () => void;
  onOpenCareGuide: () => void;
  onOpenSizeGuide: () => void;
  onOpenGoldRate: () => void;
}

export const TanishqFooter: React.FC<FooterProps> = ({
  onOpenStoreLocator,
  onOpenAppointment,
  onOpenCareGuide,
  onOpenSizeGuide,
  onOpenGoldRate
}) => {
  return (
    <footer className="bg-[#1C1819] text-stone-300 font-['Inter']">
      {/* 1. Trust & Pillars Bar */}
      <div className="border-b border-stone-800 bg-[#262122] py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#832729]/40 border border-[#832729] flex items-center justify-center text-amber-300 mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white font-['Playfair_Display']">100% BIS Hallmarked</h4>
            <p className="text-xs text-stone-400 mt-1">Guaranteed 22K & 18K purity tested with computerized Karatmeter</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#832729]/40 border border-[#832729] flex items-center justify-center text-amber-300 mb-3">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white font-['Playfair_Display']">Zero-Deduction Exchange</h4>
            <p className="text-xs text-stone-400 mt-1">100% exchange value on all Tanishq gold across any store in India</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#832729]/40 border border-[#832729] flex items-center justify-center text-amber-300 mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white font-['Playfair_Display']">Free Insured Shipping</h4>
            <p className="text-xs text-stone-400 mt-1">Transit insurance on every doorstep order with OTP delivery</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#832729]/40 border border-[#832729] flex items-center justify-center text-amber-300 mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white font-['Playfair_Display']">The TATA Trust</h4>
            <p className="text-xs text-stone-400 mt-1">Transparent pricing with weight-based itemized billing guarantee</p>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation & Directory Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#832729] text-amber-300 flex items-center justify-center font-['Playfair_Display'] font-black text-lg">
              T
            </div>
            <div>
              <span className="font-['Playfair_Display'] text-xl font-black text-white tracking-widest">
                TANISHQ
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-stone-400">
                Titan Company Limited · A TATA Enterprise
              </span>
            </div>
          </div>
          <p className="text-stone-400 leading-relaxed pr-6">
            For over 25 years, Tanishq has symbolized trust, craftsmanship, and uncompromised purity for millions of Indian households. Explore bridal jewellery, certified diamonds, and everyday gold designed for life’s precious moments.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <span className="text-[11px] text-stone-400">Join the Tanishq Circle:</span>
            <div className="flex gap-2">
              <a href="#" className="p-2 rounded-full bg-stone-800 hover:bg-[#832729] text-stone-300 hover:text-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-stone-800 hover:bg-[#832729] text-stone-300 hover:text-white transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-stone-800 hover:bg-[#832729] text-stone-300 hover:text-white transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-stone-800 hover:bg-[#832729] text-stone-300 hover:text-white transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Shopping Categories */}
        <div className="space-y-3">
          <h5 className="font-bold text-white uppercase tracking-wider text-[11px] font-['Playfair_Display']">
            Online Shopping
          </h5>
          <ul className="space-y-2 text-stone-400">
            <li><a href="#shop" className="hover:text-amber-300">Gold Earrings & Jhumkas</a></li>
            <li><a href="#shop" className="hover:text-amber-300">Solitaire Diamond Rings</a></li>
            <li><a href="#shop" className="hover:text-amber-300">Traditional Gold Mangalsutras</a></li>
            <li><a href="#shop" className="hover:text-amber-300">Bridal Chokers & Necklaces</a></li>
            <li><a href="#shop" className="hover:text-amber-300">22K Filigree Bangles</a></li>
            <li><a href="#shop" className="hover:text-amber-300">24K Pure Gold Coins</a></li>
            <li><a href="#shop" className="hover:text-amber-300">Mia Workwear Jewellery</a></li>
          </ul>
        </div>

        {/* Services & Programs */}
        <div className="space-y-3">
          <h5 className="font-bold text-white uppercase tracking-wider text-[11px] font-['Playfair_Display']">
            Customer Services
          </h5>
          <ul className="space-y-2 text-stone-400">
            <li>
              <button onClick={onOpenAppointment} className="hover:text-amber-300 text-left cursor-pointer">
                Book Store Appointment
              </button>
            </li>
            <li>
              <button onClick={onOpenStoreLocator} className="hover:text-amber-300 text-left cursor-pointer">
                Find Nearest Store (450+)
              </button>
            </li>
            <li>
              <button onClick={onOpenGoldRate} className="hover:text-amber-300 text-left cursor-pointer">
                Today's Gold Rate Ticker
              </button>
            </li>
            <li>
              <button onClick={onOpenSizeGuide} className="hover:text-amber-300 text-left cursor-pointer">
                Ring & Bangle Size Guide
              </button>
            </li>
            <li>
              <button onClick={onOpenCareGuide} className="hover:text-amber-300 text-left cursor-pointer">
                Jewellery Care & Cleaning
              </button>
            </li>
            <li><span className="text-amber-400/80">Golden Harvest Savings Scheme</span></li>
            <li><span className="text-amber-400/80">Old Gold Exchange Program</span></li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div className="space-y-3">
          <h5 className="font-bold text-white uppercase tracking-wider text-[11px] font-['Playfair_Display']">
            Concierge Support
          </h5>
          <div className="space-y-2.5 text-stone-400">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Toll Free: 1800 266 0123</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>customercare@tanishq.co.in</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Titan Company Ltd, Bangalore</span>
            </div>
            <div className="mt-3 p-3 bg-stone-900 border border-stone-800 rounded-lg text-[11px]">
              <span className="text-amber-300 font-bold block mb-1">Rivaah Bridal Lounges</span>
              <span>Available in all major cities with personal wedding styling specialists.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright & Hallmarking Disclaimers */}
      <div className="border-t border-stone-800 bg-[#141112] py-4 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Titan Company Limited (A TATA Enterprise). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms & Conditions</span>
            <span>•</span>
            <span>BIS Hallmarking License #HM/C-7654321</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
