import React from 'react';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Percent,
  CheckCircle2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS,
  EMAIL_ADDRESS,
  GOVT_REG_ID,
  CHOUDHARY_LEGAL_DISCLAIMER
} from '../../data/choudharyRealestateData';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onSelectSector: (sector: string) => void;
  onOpenPostProperty: () => void;
  onOpenValuation: () => void;
}

export const ChoudharyRealestateFooter: React.FC<FooterProps> = ({
  onSelectCategory,
  onSelectSector,
  onOpenPostProperty,
  onOpenValuation
}) => {
  const dwarkaSectors = [
    'Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 6',
    'Sector 7', 'Sector 8', 'Sector 9', 'Sector 10', 'Sector 11', 'Sector 12',
    'Sector 13', 'Sector 14', 'Sector 16', 'Sector 17', 'Sector 18', 'Sector 19',
    'Sector 20', 'Sector 21', 'Sector 22', 'Sector 23', 'Sector 24', 'Sector 26'
  ];

  return (
    <footer className="bg-[#091322] text-slate-300 font-['Plus_Jakarta_Sans',sans-serif] border-t border-amber-500/20">
      {/* Top Banner Feature Strip */}
      <div className="bg-[#0F1E36] border-b border-white/10 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Fixed 1% Brokerage</h5>
              <p className="text-xs text-slate-400">Zero artificial price markups, guaranteed.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">30-Year Legal Scrutiny</h5>
              <p className="text-xs text-slate-400">Every property verified before listing.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Free Accompanied Visits</h5>
              <p className="text-xs text-slate-400">Daily 9 AM to 8 PM across all Dwarka sectors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C5A25D] to-[#E5C378] text-[#0F1E36] flex items-center justify-center font-black shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white uppercase font-['Poppins',sans-serif]">
                  CHOUDHARY
                </span>
                <span className="text-xl font-light text-[#C5A25D] uppercase font-['Poppins',sans-serif] ml-1">
                  REALESTATE
                </span>
                <span className="block text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                  Dwarka Property Consultant
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-light">
              Choudhary Realestate is the leading property consultant and real estate advisory firm in Dwarka, New Delhi. Specializing in 100% legally verified DDA builder floors, society flats (CGHS), luxury freehold floors, and commercial shops.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{OFFICE_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">
                  {EMAIL_ADDRESS}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Monday – Sunday: 9:00 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-amber-400 font-mono font-bold">
                Govt. MSME Reg: {GOVT_REG_ID}
              </span>
            </div>
          </div>

          {/* Column 2: Properties in Dwarka */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5A25D]">
              Properties in Dwarka
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onSelectCategory('builder-floors')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  DDA Builder Floors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('society-flats')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Society Flats &amp; CGHS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('commercial')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Commercial Shops &amp; Offices
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('plots')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Freehold Residential Plots
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('rent')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Rental Floors &amp; Apartments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('builder-floors')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Luxury Stilt + Lift Floors
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Homeowner Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5A25D]">
              Owner &amp; Buyer Tools
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={onOpenPostProperty}
                  className="hover:text-white transition-colors cursor-pointer text-left text-emerald-400 font-bold"
                >
                  + List Your Property (Free)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenValuation}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Free Property Valuation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('loan-calc')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home Loan &amp; EMI Calculator
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Choudhary Realestate, I would like to check property title and registry legal documents.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  30-Year Title Search Assistance
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Choudhary Realestate, I want assistance with Sub-Registrar registry in Dwarka.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Sub-Registrar Registry Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5A25D]">
              Direct Contact Desk
            </h4>
            <p className="text-xs text-slate-400">
              Have a property question or want to list your Dwarka floor today? Connect with our senior consultants directly:
            </p>
            <div className="space-y-2.5">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Choudhary Realestate, I am looking for properties in Dwarka.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dwarka Sectors Directory Tag Cloud */}
        <div className="mt-12 pt-8 border-t border-white/10 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-[#C5A25D] font-bold block">
            Dwarka Sectors Directory
          </span>
          <div className="flex flex-wrap gap-2 text-xs">
            {dwarkaSectors.map((sec, idx) => (
              <button
                key={idx}
                onClick={() => onSelectSector(sec)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#C5A25D] hover:text-slate-950 text-slate-300 border border-white/5 transition-all cursor-pointer"
              >
                {sec} Dwarka
              </button>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-slate-400 leading-relaxed">
          <p>{CHOUDHARY_LEGAL_DISCLAIMER}</p>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>CHOUDHARY REALESTATE</strong>. All Rights Reserved. Govt. MSME Reg: {GOVT_REG_ID}.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Sector 8 Dwarka Flagship</span>
            <span>•</span>
            <span>1% Brokerage Model</span>
            <span>•</span>
            <span>Freehold Title Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
