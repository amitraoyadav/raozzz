import React, { useState } from 'react';
import {
  Clock,
  Star,
  MapPin,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Share2,
  Calendar,
  ShieldCheck,
  Send,
  ArrowLeft,
  Camera,
  Heart
} from 'lucide-react';
import { BrioTourPackage } from '../data/types';
import { BrioQuickEnquiryForm } from './BrioQuickEnquiryForm';

interface BrioPackageDetailProps {
  pkg: BrioTourPackage;
  onBack: () => void;
  onOpenBookingModal: (title: string) => void;
}

export const BrioPackageDetail: React.FC<BrioPackageDetailProps> = ({
  pkg,
  onBack,
  onOpenBookingModal
}) => {
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [activeGalleryImg, setActiveGalleryImg] = useState<string>(pkg.coverImage);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Breadcrumb & Back Bar */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-teal-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Tours</span>
          </button>

          <span className="text-xs text-slate-400 font-mono">
            Tour Code: BT-{pkg.slug.toUpperCase().slice(0, 8)}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white min-h-[360px] sm:min-h-[440px] flex items-end">
        <img
          src={pkg.coverImage}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-teal-600 text-white">
              {pkg.category === 'domestic'
                ? 'Domestic Holiday'
                : pkg.category === 'international'
                ? 'International Holiday'
                : 'Special Package'}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white/20 text-white backdrop-blur-md flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-300" />
              <span>{pkg.duration}</span>
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white/20 text-white backdrop-blur-md flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{pkg.rating.toFixed(1)} ({pkg.reviewsCount} reviews)</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Poppins'] tracking-tight text-white mb-2 max-w-4xl">
            {pkg.title}
          </h1>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl font-['Inter']">
            {pkg.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Layout with Sticky Enquiry Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Overview, Highlights, Day-by-Day Itinerary, Inclusions, Gallery */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-['Poppins']">
                Tour Overview
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
                {pkg.overview}
              </p>

              {/* Highlights Bulleted */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Key Tour Highlights:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pkg.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Photo Gallery Strip */}
            {pkg.galleryImages && pkg.galleryImages.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-['Poppins'] flex items-center gap-2">
                  <Camera className="w-5 h-5 text-teal-600" />
                  <span>Destination Gallery</span>
                </h2>

                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                  <img
                    src={activeGalleryImg}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
                  {[pkg.coverImage, ...pkg.galleryImages].map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryImg(img)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeGalleryImg === img ? 'border-teal-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Day-Wise Itinerary Accordion */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-['Poppins']">
                  Day-by-Day Itinerary ({pkg.days} Days / {pkg.nights} Nights)
                </h2>
                <button
                  onClick={() => setOpenDay(openDay === null ? 1 : null)}
                  className="text-xs font-bold text-teal-600 hover:underline cursor-pointer"
                >
                  {openDay === null ? 'Expand Days' : 'Collapse All'}
                </button>
              </div>

              <div className="space-y-3">
                {pkg.itinerary.map(item => {
                  const isOpen = openDay === item.day;
                  return (
                    <div
                      key={item.day}
                      className={`rounded-xl border transition-all ${
                        isOpen
                          ? 'border-teal-300 bg-teal-50/20'
                          : 'border-slate-200 bg-white hover:bg-slate-50/60'
                      }`}
                    >
                      <button
                        onClick={() => toggleDay(item.day)}
                        className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                            isOpen ? 'bg-teal-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700'
                          }`}>
                            D{item.day}
                          </span>
                          <div>
                            <h4 className="font-bold text-xs sm:text-sm text-slate-900 font-['Poppins']">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                              <span>Stay: <strong className="text-slate-700">{item.stayCity}</strong></span>
                              <span>•</span>
                              <span>Meals: <strong className="text-slate-700">{item.meals}</strong></span>
                            </div>
                          </div>
                        </div>

                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter'] border-t border-teal-100/60 mt-1">
                          {item.description}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h3 className="font-bold text-sm text-emerald-800 uppercase tracking-wider font-['Poppins'] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Package Inclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-medium">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h3 className="font-bold text-sm text-rose-800 uppercase tracking-wider font-['Poppins'] flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Package Exclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-medium">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Pricing & Enquiry Card */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 border-2 border-teal-500/30 shadow-xl space-y-5">
              {/* Price Tag */}
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Starting From
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-teal-800 font-mono">
                      ₹{pkg.startingPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-mono">
                      ₹{pkg.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[10px] text-teal-700 font-medium">
                    Per Person on Twin Sharing Basis
                  </span>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-orange-500 text-white text-xs font-bold shadow-xs">
                  Save {Math.round(((pkg.originalPrice - pkg.startingPrice) / pkg.originalPrice) * 100)}%
                </div>
              </div>

              {/* Direct Booking Modal Button */}
              <button
                onClick={() => onOpenBookingModal(pkg.title)}
                className="w-full py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Tour Package</span>
              </button>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-3 text-slate-400 text-xs font-medium">Or Send Quick Enquiry</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              {/* Embedded Sticky Enquiry Form */}
              <BrioQuickEnquiryForm defaultDestination={pkg.title} compact={true} />

              {/* Trust Badges */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>No Booking Fees & 100% Price Match Promise</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Flexible Date Rescheduling on all packages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
