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
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

interface FooterProps {
  onOpenStoreLocator: () => void;
  onOpenEducation: () => void;
  onNavigateCategory: (cat: string) => void;
}

export const JewelboxFooter: React.FC<FooterProps> = ({
  onOpenStoreLocator,
  onOpenEducation,
  onNavigateCategory
}) => {
  return (
    <footer className="bg-[#0A1D18] text-stone-300 font-['Inter'] pt-14 pb-8 border-t border-[#13392f]">
      {/* 1. Value Proposition Pillars Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#0F2C24] border border-[#1a4a3d] text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#163e33] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                100% Real Diamonds
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                IGI & SGL certified with laser inscription
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#163e33] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                BIS Hallmarked Gold
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                14K & 18K solid gold with 6-digit HUID
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#163e33] flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Lifetime Exchange
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                80% exchange & 70% buyback liquidity
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#163e33] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Free Insured Shipping
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Tamper-proof transit across India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-['Playfair_Display'] text-2xl font-bold tracking-[0.2em] text-white">
              JEWELBOX
            </span>
            <span className="bg-[#D4AF37] text-[#0F2C24] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 uppercase">
              <Zap className="w-2.5 h-2.5 fill-current" /> Shark Tank S3
            </span>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
            India's foremost conscious luxury jewellery brand. We craft modern fine jewellery using 100% real, conflict-free lab-grown diamonds set in BIS Hallmarked 14K & 18K solid gold. Experience up to 70% savings with higher brilliance, zero environmental devastation, and lifelong trust.
          </p>

          <div className="pt-2 flex items-center gap-3 text-stone-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#0F2C24] hover:text-[#D4AF37] hover:bg-[#163e33] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#0F2C24] hover:text-[#D4AF37] hover:bg-[#163e33] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#0F2C24] hover:text-[#D4AF37] hover:bg-[#163e33] transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#0F2C24] hover:text-[#D4AF37] hover:bg-[#163e33] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Categories */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#1b4d3f] pb-2">
            Jewellery Categories
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigateCategory('rings')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Solitaire & Diamond Rings
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('bracelets')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Tennis & Bolo Bracelets
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('earrings')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Studs, Hoops & Huggies
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('pendants')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Solitaire Pendants & Chains
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('mangalsutra')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Modern Mangalsutras
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('mens')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Men's Diamond Collection
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Why Lab Grown & Education */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#1b4d3f] pb-2">
            Diamond Education
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={onOpenEducation}
                className="text-[#D4AF37] hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold"
              >
                <Sparkles className="w-3 h-3" />
                Why Lab-Grown Diamonds?
              </button>
            </li>
            <li>
              <button
                onClick={onOpenEducation}
                className="hover:text-white transition-colors cursor-pointer"
              >
                The 4 Cs of Lab Diamonds
              </button>
            </li>
            <li>
              <button
                onClick={onOpenEducation}
                className="hover:text-white transition-colors cursor-pointer"
              >
                IGI Certification Verification
              </button>
            </li>
            <li>
              <button
                onClick={onOpenEducation}
                className="hover:text-white transition-colors cursor-pointer"
              >
                CVD vs HPHT Science
              </button>
            </li>
            <li>
              <button
                onClick={onOpenEducation}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Price Comparison Calculator
              </button>
            </li>
            <li>
              <button
                onClick={onOpenStoreLocator}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Visit Experience Stores
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Customer Care & Experience */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#1b4d3f] pb-2">
            Store & Concierge
          </h4>
          <div className="space-y-2 text-xs text-stone-400">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Flagships: Mumbai (Bandra), Bangalore (Indiranagar), Delhi NCR (Gurugram), Kolkata & Hyderabad</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>+91 98200 45678 (10 AM - 8 PM)</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>care@jewelbox.co.in</span>
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenStoreLocator}
              className="w-full py-2 px-3 bg-[#163e33] hover:bg-[#1f5546] text-white text-[11px] font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Book In-Store Styling</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal & Certifications Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#13392f] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <span>© 2026 Jewelbox Luxury Brands Pvt Ltd. All Rights Reserved.</span>
          <span>•</span>
          <span>100% Real Lab-Grown Diamonds</span>
          <span>•</span>
          <span>Shark Tank India S3 Brand</span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1 text-stone-400">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            256-Bit SSL Encrypted Checkout
          </span>
          <span>•</span>
          <span className="text-[#D4AF37] font-semibold">
            BIS Hallmarked & IGI Certified
          </span>
        </div>
      </div>
    </footer>
  );
};
