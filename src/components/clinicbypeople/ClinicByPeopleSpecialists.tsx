import React, { useState } from 'react';
import {
  Award,
  Calendar,
  Clock,
  MapPin,
  Star,
  CheckCircle2,
  X,
  Stethoscope,
  ArrowRight,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { DOCTORS_DATA, ClinicDoctor, buildClinicWhatsAppLink } from '../../data/clinicByPeopleData';

interface ClinicByPeopleSpecialistsProps {
  onOpenConsultationModal: (speciality?: string, note?: string) => void;
}

export const ClinicByPeopleSpecialists: React.FC<ClinicByPeopleSpecialistsProps> = ({
  onOpenConsultationModal,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [profileDoctorModal, setProfileDoctorModal] = useState<ClinicDoctor | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Specialists' },
    { id: 'general-surgery', label: 'General Surgery' },
    { id: 'womens-health', label: "Women's Health" },
    { id: 'orthopaedics', label: 'Orthopaedics' },
    { id: 'ent', label: 'ENT' },
    { id: 'urology', label: 'Urology' },
    { id: 'plastic-surgery', label: 'Plastic Surgery' },
  ];

  const filteredDoctors =
    selectedFilter === 'all'
      ? DOCTORS_DATA
      : DOCTORS_DATA.filter((d) => d.specialityId === selectedFilter);

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-white border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100">
            Clinical Panel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            Our Top Healthcare Specialists
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Meet board-certified senior surgeons with an average of 15+ years experience and over 3,000 successful surgeries.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#0C5BE2] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Avatar Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C5BE2] to-[#0A3EA1] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                    {doc.name.replace('Dr. ', '').split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold mb-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{doc.rating}</span>
                      <span className="text-slate-400">({doc.ratingCount} reviews)</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0C5BE2] transition-colors leading-tight">
                      {doc.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#0C5BE2] block mt-0.5">
                      {doc.speciality}
                    </span>
                  </div>
                </div>

                {/* Qualification & Experience */}
                <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Award className="w-4 h-4 text-[#0C5BE2] shrink-0" />
                    <span className="truncate">{doc.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong className="text-slate-900">{doc.experienceYears}+ Years</strong> Surgical Experience
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-[#FF6B4A] shrink-0" />
                    <span className="truncate">{doc.location}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mt-3 leading-relaxed">
                  {doc.bio}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setProfileDoctorModal(doc)}
                  className="text-xs font-bold text-slate-700 hover:text-[#0C5BE2] cursor-pointer transition-colors"
                >
                  View Profile
                </button>

                <button
                  onClick={() =>
                    onOpenConsultationModal(
                      doc.speciality,
                      `Consultation requested with ${doc.name}`
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  Book OPD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOCTOR PROFILE MODAL */}
      {profileDoctorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setProfileDoctorModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-[#0C5BE2] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                {profileDoctorModal.name.replace('Dr. ', '').split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-50 text-[#0C5BE2]">
                  Specialist Doctor
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {profileDoctorModal.name}
                </h3>
                <span className="text-xs text-slate-600 font-medium">
                  {profileDoctorModal.speciality}
                </span>
              </div>
            </div>

            <div className="my-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-700">
              <p><strong>Credentials:</strong> {profileDoctorModal.qualification}</p>
              <p><strong>Experience:</strong> {profileDoctorModal.experienceYears}+ Years Clinical Practice</p>
              <p><strong>Surgeries Performed:</strong> {profileDoctorModal.surgeriesCount}+ Minimally Invasive Cases</p>
              <p><strong>Hospital Affiliation:</strong> {profileDoctorModal.hospitalAffiliation}</p>
              <p><strong>OPD Timings:</strong> {profileDoctorModal.opdTimings}</p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {profileDoctorModal.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onOpenConsultationModal(
                    profileDoctorModal.speciality,
                    `Appointment request with ${profileDoctorModal.name}`
                  );
                  setProfileDoctorModal(null);
                }}
                className="flex-1 py-3 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs font-bold transition-colors cursor-pointer text-center"
              >
                Book Free Consultation
              </button>
              <a
                href={buildClinicWhatsAppLink(`Hi ClinicByPeople, I would like to book an appointment with ${profileDoctorModal.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
