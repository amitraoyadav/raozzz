import React, { useState } from 'react';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  Award,
  MapPin,
  CheckCircle2,
  X,
  Stethoscope,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { DOCTORS_LIST, DoctorProfile } from '../../data/medicarePlusData';

interface MedicarePlusDoctorsProps {
  onOpenAppointmentModal: (doctorName?: string, speciality?: string) => void;
}

export const MedicarePlusDoctors: React.FC<MedicarePlusDoctorsProps> = ({
  onOpenAppointmentModal,
}) => {
  const [searchName, setSearchName] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedProfileModal, setSelectedProfileModal] = useState<DoctorProfile | null>(null);

  const departments = [
    'all',
    'Cardiology',
    'Orthopaedics',
    'Neurosurgery',
    'Oncology',
    'Urology',
    'Gynaecology',
    'Gastrointestinal Surgery',
    'ENT',
  ];

  const filteredDoctors = DOCTORS_LIST.filter((doc) => {
    if (searchName.trim()) {
      const q = searchName.toLowerCase().trim();
      const match =
        doc.name.toLowerCase().includes(q) ||
        doc.speciality.toLowerCase().includes(q) ||
        doc.keyExpertise.some((e) => e.toLowerCase().includes(q));
      if (!match) return false;
    }
    if (selectedDepartment !== 'all' && doc.department !== selectedDepartment) {
      return false;
    }
    return true;
  });

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Medical Faculty &amp; Surgeons
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Find a Doctor
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Search our directory of distinguished clinicians, surgeons, and department directors across all specialized domains.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200/80 mb-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search by doctor name, speciality or procedure..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:bg-white"
              />
              {searchName && (
                <button
                  onClick={() => setSearchName('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Department Dropdown */}
            <div className="md:col-span-5 relative">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:bg-white cursor-pointer"
              >
                <option value="all">All Clinical Departments ({DOCTORS_LIST.length})</option>
                {departments
                  .filter((d) => d !== 'all')
                  .map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with Available Days Badge */}
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={doc.photoUrl}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/40">
                        {doc.experienceYears}+ Yrs Experience
                      </span>
                    </div>
                  </div>

                  {/* Body Information */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-black text-[#0C4A60] group-hover:text-[#00A896] transition-colors leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-teal-700">
                      {doc.speciality}
                    </p>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {doc.qualification}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Days: {doc.availableDays.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>OPD: {doc.opdTimings}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProfileModal(doc)}
                    className="flex-1 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    View Profile
                  </button>

                  <button
                    onClick={() => onOpenAppointmentModal(doc.name, doc.speciality)}
                    className="flex-1 py-2 rounded-xl bg-[#00A896] hover:bg-teal-700 text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Book OPD</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto">
            <Stethoscope className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800">No doctors match your search</h4>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with another keyword or reset the department filter.
            </p>
            <button
              onClick={() => {
                setSearchName('');
                setSelectedDepartment('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#0C4A60] text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Doctor Profile Detailed Modal */}
      {selectedProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProfileModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-5 border-b border-slate-100">
              <img
                src={selectedProfileModal.photoUrl}
                alt={selectedProfileModal.name}
                className="w-28 h-28 rounded-2xl object-cover shadow-sm shrink-0 border border-slate-200"
              />
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                  {selectedProfileModal.department}
                </span>
                <h3 className="text-2xl font-black text-[#0C4A60] mt-1">
                  {selectedProfileModal.name}
                </h3>
                <p className="text-xs font-bold text-teal-700 mt-0.5">
                  {selectedProfileModal.speciality}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {selectedProfileModal.qualification} · {selectedProfileModal.experienceYears} Years Clinical Experience
                </p>
              </div>
            </div>

            {/* Profile Content */}
            <div className="space-y-4 mt-5 text-xs text-slate-700">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  About Dr. {selectedProfileModal.name.split(' ').slice(1).join(' ')}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProfileModal.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Clinical Expertise &amp; Procedures
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProfileModal.keyExpertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-medium border border-teal-100"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Education &amp; Fellowships
                </h4>
                <ul className="space-y-1 text-slate-600">
                  {selectedProfileModal.education.map((edu, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">OPD Consultation Days</span>
                  <span className="font-bold text-slate-800">{selectedProfileModal.availableDays.join(', ')}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">OPD Timings</span>
                  <span className="font-bold text-slate-800">{selectedProfileModal.opdTimings}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Standard OPD Fee: <strong>₹{selectedProfileModal.consultationFee}</strong> (Demo)
              </span>
              <button
                onClick={() => {
                  onOpenAppointmentModal(selectedProfileModal.name, selectedProfileModal.speciality);
                  setSelectedProfileModal(null);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#00A896] hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment with {selectedProfileModal.name}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
