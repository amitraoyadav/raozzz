import React, { useState } from 'react';
import {
  UserCheck,
  Award,
  GraduationCap,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  Search,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { DOCTORS_DATA, DoctorProfile, SKINSCIENE_CONFIG } from '../../data/skinScieneData';

interface SkinScieneDoctorsProps {
  onOpenBooking: (doctorName?: string) => void;
  onSelectDoctor: (doctor: DoctorProfile) => void;
}

export const SkinScieneDoctors: React.FC<SkinScieneDoctorsProps> = ({
  onOpenBooking,
  onSelectDoctor,
}) => {
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    const matchesCity = selectedCity === 'All' || doc.city === selectedCity;
    const matchesQuery =
      searchQuery === '' ||
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.speciality.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      doc.qualifications.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesQuery;
  });

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>120+ MD Dermatologists & Trichologists</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Consult India’s Finest Dermatologists
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Every clinical procedure is strictly prescribed and executed by certified MD/DNB dermatologists with post-graduate fellowships in aesthetic and laser medicine.
          </p>

          {/* Search & City Filter Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by doctor name or specialty..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none transition-colors"
              />
            </div>

            {/* City Dropdown */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full sm:w-56 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none font-medium cursor-pointer"
            >
              <option value="All">All Cities ({DOCTORS_DATA.length} Doctors)</option>
              {['Hyderabad', 'Bengaluru', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Kochi'].map(
                (city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Doctor Photo */}
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-bold border border-emerald-500/30 flex items-center gap-1">
                  <Award className="w-3 h-3 text-emerald-400" />
                  <span>{doc.experienceYears}+ Yrs Experience</span>
                </div>

                {/* City Tag */}
                <div className="absolute top-3 right-3 bg-emerald-700 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                  {doc.city}
                </div>

                {/* Next Available Slot */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] flex items-center justify-between font-medium">
                  <span className="flex items-center gap-1 text-emerald-300">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{doc.nextAvailable}</span>
                  </span>
                  <span className="text-slate-200">
                    {doc.clinicBranch.split('&')[0]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3
                    onClick={() => onSelectDoctor(doc)}
                    className="font-serif font-bold text-lg text-slate-900 group-hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    {doc.name}
                  </h3>
                  <div className="text-xs text-emerald-700 font-semibold line-clamp-1">
                    {doc.role}
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{doc.qualifications}</span>
                  </div>
                </div>

                {/* Specialties Pills */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {doc.speciality.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenBooking(doc.name)}
                    className="flex-1 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Book Consult</span>
                  </button>

                  <button
                    onClick={() => onSelectDoctor(doc)}
                    className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Bio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
