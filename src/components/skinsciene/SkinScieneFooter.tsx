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
} from 'lucide-react';
import { SkinScieneLogo } from './SkinScieneLogo';
import { SKINSCIENE_CONFIG, TREATMENTS_DATA } from '../../data/skinScieneData';

interface SkinScieneFooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenBooking: () => void;
  onSelectTreatment: (slug: string) => void;
}

export const SkinScieneFooter: React.FC<SkinScieneFooterProps> = ({
  onNavigateToSection,
  onOpenBooking,
  onSelectTreatment,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skinTreatments = TREATMENTS_DATA.filter((t) => t.category === 'skin');
  const hairTreatments = TREATMENTS_DATA.filter((t) => t.category === 'hair');
  const bodyTreatments = TREATMENTS_DATA.filter((t) => t.category === 'body');

  return (
    <footer className="bg-slate-950 text-slate-300 text-xs border-t border-slate-800">
      {/* Upper Newsletter & Consultation Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif font-bold text-xl text-white">
              Ready to Transform Your Skin and Hair?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Book a complimentary digital analysis with an MD Dermatologist at your nearest clinic.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={`tel:${SKINSCIENE_CONFIG.phone}`}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: {SKINSCIENE_CONFIG.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs shadow-lg transition-all cursor-pointer"
            >
              Book Free Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info & Toll Free */}
          <div className="lg:col-span-1 space-y-4">
            <SkinScieneLogo theme="light" size="sm" showTagline />
            <p className="text-slate-400 text-xs leading-relaxed">
              India’s premier chain of dermatologist-led skin, hair, and aesthetic clinics offering 100% US-FDA approved laser treatments across 36+ state-of-the-art facilities.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <a
                href={`tel:${SKINSCIENE_CONFIG.phone}`}
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold">{SKINSCIENE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${SKINSCIENE_CONFIG.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SKINSCIENE_CONFIG.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SKINSCIENE_CONFIG.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Skin Treatments */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-emerald-400">
              Skin Treatments
            </h5>
            <ul className="space-y-2">
              {skinTreatments.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onSelectTreatment(t.slug)}
                    className="hover:text-emerald-300 transition-colors text-left flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{t.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hair Treatments */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-emerald-400">
              Hair & Trichology
            </h5>
            <ul className="space-y-2">
              {hairTreatments.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onSelectTreatment(t.slug)}
                    className="hover:text-emerald-300 transition-colors text-left flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{t.name}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <h6 className="font-bold text-white uppercase text-[11px] mb-2 text-emerald-400">
                  Body Aesthetics
                </h6>
                <ul className="space-y-1.5">
                  {bodyTreatments.map((t) => (
                    <li key={t.id}>
                      <button
                        onClick={() => onSelectTreatment(t.slug)}
                        className="hover:text-emerald-300 transition-colors text-left flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-3 h-3 text-slate-600" />
                        <span>{t.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Column 4: Clinics by City */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-emerald-400">
              Our 36+ Clinics
            </h5>
            <ul className="space-y-1.5 text-slate-400">
              {SKINSCIENE_CONFIG.cities.map((city) => (
                <li key={city}>
                  <button
                    onClick={() => onNavigateToSection('clinics')}
                    className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    <span>Clinics in {city}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Medical Excellence & Quick Links */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-emerald-400">
              Medical Excellence
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateToSection('why-us')}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>5-Step Clinical Protocol</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('doctors')}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Meet 120+ MD Dermatologists</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('before-after')}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Before & After Transformations</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('blog')}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Skin & Hair Knowledge Blog</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold text-emerald-400"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Book Free Consultation</span>
                </button>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>US-FDA Cleared Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed text-center sm:text-left">
            <strong>Medical Disclaimer:</strong> The clinical results showcased on this website are documented patient case studies from SkinSciene Naturals clinics. Individual results may vary based on skin type, hormonal health, genetics, and adherence to prescribed post-care regimens. All consultations and machine parameters are customized strictly by MD Dermatologists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              © 2026 SkinSciene Naturals India Pvt Ltd. All rights reserved. (Project #66 Demo)
            </div>

            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Clinical Care</span>
              <span>•</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-emerald-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
