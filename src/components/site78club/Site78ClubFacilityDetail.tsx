import React, { useState } from 'react';
import {
  ChevronLeft,
  Clock,
  Shirt,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Maximize2,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { CLUB_FACILITIES, ClubFacility } from '../../data/site78ClubData';
import { site78ClubConfig } from '../../config/site78ClubConfig';

interface Site78ClubFacilityDetailProps {
  facilitySlug: string;
  onNavigateHome: () => void;
  onSelectOtherFacility: (slug: string) => void;
  onOpenBookingModal: (facilityName: string) => void;
  onOpenImageLightbox: (src: string, caption: string) => void;
}

export const Site78ClubFacilityDetail: React.FC<Site78ClubFacilityDetailProps> = ({
  facilitySlug,
  onNavigateHome,
  onSelectOtherFacility,
  onOpenBookingModal,
  onOpenImageLightbox
}) => {
  const facility = CLUB_FACILITIES.find(f => f.slug === facilitySlug) || CLUB_FACILITIES[0];
  const otherFacilities = CLUB_FACILITIES.filter(f => f.slug !== facility.slug);

  const [activeImage, setActiveImage] = useState(facility.image);

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#1C242C] font-['Jost',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-widest mb-8">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#183D2F] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <button
            onClick={() => onSelectOtherFacility('facilities')}
            className="hover:text-[#183D2F] transition-colors cursor-pointer"
          >
            Facilities
          </button>
          <span>/</span>
          <span className="text-[#183D2F] font-bold">{facility.name}</span>
        </div>

        {/* Header Hero Title */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-[#183D2F] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#C5A869]" />
            <span>Club Facility & Standards</span>
            <span className="w-8 h-[1px] bg-[#C5A869]" />
          </div>

          <h1 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0F2537] leading-tight">
            {facility.name}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-light max-w-3xl leading-relaxed">
            {facility.shortTagline}
          </p>
        </div>

        {/* Main Photo & Thumbnail Gallery */}
        <div className="space-y-4 mb-14">
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] sm:aspect-[21/9] bg-stone-900 group cursor-pointer"
            onClick={() => onOpenImageLightbox(activeImage, facility.name)}
          >
            <img
              src={activeImage}
              alt={facility.name}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded bg-black/60 backdrop-blur-xs text-xs text-white">
              Click to view in Fullscreen Lightbox
            </div>
          </div>

          {/* Thumbnails */}
          {facility.galleryImages && facility.galleryImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {facility.galleryImages.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(thumb)}
                  className={`w-28 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImage === thumb ? 'border-[#C5A869] shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={thumb} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid: Overview and Guidelines Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Main Column: In-Depth Description & Key Highlights */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h3 className="font-['Cormorant',serif] font-bold text-2xl sm:text-3xl text-[#0F2537]">
                Facility Overview
              </h3>
              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                {facility.longOverview}
              </p>
            </div>

            {/* Highlights Checklist */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9F8F5] border border-[#E8E5DF] space-y-4">
              <h4 className="font-['Cormorant',serif] font-bold text-xl text-[#0F2537]">
                Signature Amenities & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {facility.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#183D2F] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Club By-Laws & Usage Rules */}
            <div className="space-y-4">
              <h4 className="font-['Cormorant',serif] font-bold text-xl text-[#0F2537] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C5A869]" />
                <span>Club By-Laws & Usage Norms</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
                {facility.rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Column: Specifications & Member Reservation Callout */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0F2537] text-white space-y-5 shadow-lg border border-white/10">
              <h4 className="font-['Cormorant',serif] font-bold text-2xl text-white border-b border-white/15 pb-3">
                Key Particulars
              </h4>

              <div className="space-y-4 text-xs font-light">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#C5A869] font-semibold uppercase tracking-wider text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Operating Timings</span>
                  </div>
                  <p className="text-stone-300 pl-5">{facility.timings}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#C5A869] font-semibold uppercase tracking-wider text-[11px]">
                    <Shirt className="w-3.5 h-3.5" />
                    <span>Dress Code</span>
                  </div>
                  <p className="text-stone-300 pl-5">{facility.dressCode}</p>
                </div>

                {facility.capacityOrSpecs && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[#C5A869] font-semibold uppercase tracking-wider text-[11px]">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Capacity & Specs</span>
                    </div>
                    <p className="text-stone-300 pl-5">{facility.capacityOrSpecs}</p>
                  </div>
                )}
              </div>

              {facility.bookingAllowed ? (
                <div className="pt-2">
                  <button
                    onClick={() => onOpenBookingModal(facility.name)}
                    className="w-full py-3 rounded-md bg-[#C5A869] hover:bg-[#d4bc82] text-[#0F2537] text-xs font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Member Booking / Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="pt-2">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-stone-300 text-center">
                    Walk-in access for members on first-come basis.
                  </div>
                </div>
              )}
            </div>

            {/* Direct Assistance Box */}
            <div className="p-5 rounded-2xl bg-[#F9F8F5] border border-[#E8E5DF] text-xs space-y-3">
              <div className="font-bold text-[#0F2537]">Need immediate assistance?</div>
              <p className="text-stone-600 font-light">
                Call the Club Concierge or Front Office Desk for special group arrangements.
              </p>
              <div className="font-medium text-[#183D2F]">
                Phone: {site78ClubConfig.PHONE_RECEPTION}
              </div>
            </div>
          </div>
        </div>

        {/* Other Facilities Carousel / Quick Links */}
        <div className="border-t border-[#E8E5DF] pt-12">
          <h3 className="font-['Cormorant',serif] font-bold text-2xl sm:text-3xl text-[#0F2537] mb-8">
            Explore Other Facilities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherFacilities.slice(0, 4).map(other => (
              <div
                key={other.id}
                onClick={() => onSelectOtherFacility(other.slug)}
                className="group bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-lg border border-[#E8E5DF] transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-900">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-['Cormorant',serif] font-bold text-lg text-[#0F2537] group-hover:text-[#183D2F] transition-colors">
                    {other.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-light line-clamp-1">
                    {other.shortTagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
