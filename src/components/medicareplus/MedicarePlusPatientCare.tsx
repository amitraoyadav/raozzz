import React, { useState } from 'react';
import {
  Bed,
  ShieldCheck,
  FileText,
  Layers,
  HeartHandshake,
  CheckCircle2,
  Download,
  Building2,
  CreditCard,
  UserCheck,
} from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

export const MedicarePlusPatientCare: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rooms' | 'insurance' | 'directory' | 'rights'>('rooms');

  const roomCategories = [
    {
      type: 'Presidential Suite',
      priceDesc: 'Executive Luxury Suite',
      features: ['Private Patient Bedroom & Family Living Room', '2 Ensuite Bathrooms with Premium Toiletries', 'Dedicated 24x7 Staff Nurse', 'Refrigerator, Microwave & Dining Setup', 'High-Speed Wi-Fi & Two 55" Smart TVs'],
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    },
    {
      type: 'Deluxe Single Private Room',
      priceDesc: 'Comfortable Private Recovery Pod',
      features: ['Electric Multi-Position Patient Bed', 'Attendant Recliner Sofa Bed', 'Attached Private Sanitized Washroom', 'Individual Air Conditioning Controls', 'Room Service & Dietary Menu'],
      img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
    },
    {
      type: 'Twin Sharing Semi-Private',
      priceDesc: 'Budget-Conscious Comfort',
      features: ['Two Separated Patient Beds with Privacy Curtains', 'Individual Attendant Seating', 'Shared Attached Clean Washroom', 'Nurse Call Bells at Each Bedside', 'Centralized Oxygen & Suction'],
      img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const tpaPartners = [
    'Star Health & Allied Insurance',
    'HDFC ERGO General Insurance',
    'ICICI Lombard Health',
    'Care Health Insurance (Religare)',
    'Niva Bupa Health Insurance',
    'Bajaj Allianz General Insurance',
    'Medi Assist TPA',
    'Vidal Health TPA',
    'MD India Health Insurance TPA',
    'Paramount Health Services',
    'Heritage Health TPA',
    'FHPL Family Health Plan',
  ];

  const floorDirectory = [
    { floor: 'Basement 1 & 2', depts: 'Radiology (3T MRI, 256-CT), Radiation Oncology, Nuclear Medicine, Central Sterile Supply (CSSD), Underground Parking' },
    { floor: 'Ground Floor', depts: '24/7 Casualty & Trauma Bay, Triage, Outpatient Registration, Emergency Pharmacy, Cashless Insurance TPA Desk, Blood Bank' },
    { floor: '1st & 2nd Floor', depts: 'Specialist OPD Consultation Suites (Rooms 101–240), Preventive Health Check-Up Pavilion, Sample Collection Labs' },
    { floor: '3rd Floor', depts: 'Endoscopy & ERCP Suites, Hemodialysis Centre (24 Beds), Day Care Surgical Lounge, IVF Cleanroom Laboratory' },
    { floor: '4th Floor', depts: 'Class 100 Modular Operation Theatres (18 OTs), Robotic Surgery Suites, Cardiac Cath Labs (Biplane), Post-Op Recovery PACU' },
    { floor: '5th Floor', depts: 'Intensive Care Units (Medical ICU, Surgical ICU, Coronary CCU, Neuro-ICU, Isolation Negative Pressure Cubicles)' },
    { floor: '6th to 9th Floor', depts: 'Inpatient Rooms (Presidential Suites, Single Deluxe, Twin Sharing), Level-3 NICU & Maternity LDR Suites, Inpatient Dining' },
  ];

  return (
    <section id="patient-care" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Patient Support &amp; Resources
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Patient Care &amp; Inpatient Amenities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Transparent room options, seamless cashless insurance clearance, and comprehensive visitor guidance designed around patient comfort.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'rooms', label: 'Room Accommodation', icon: Bed },
            { id: 'insurance', label: 'Cashless Insurance & TPA', icon: ShieldCheck },
            { id: 'directory', label: 'Floor Directory', icon: Building2 },
            { id: 'rights', label: 'Patient Rights & Safety', icon: HeartHandshake },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0C4A60] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Room Accommodation */}
        {activeTab === 'rooms' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {roomCategories.map((room, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={room.img}
                    alt={room.type}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-white">
                    {room.priceDesc}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-black text-[#0C4A60]">{room.type}</h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {room.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
                  <span className="text-xs font-bold text-[#00A896]">
                    24x7 In-Room Nurse Call Enabled
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Cashless Insurance & TPA */}
        {activeTab === 'insurance' && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-6 animate-in fade-in duration-200">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                Cashless Hospitalization Desk
              </span>
              <h3 className="text-xl font-black text-[#0C4A60] mt-1">
                Empanelled Insurance Companies &amp; TPAs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                MedicarePlus Hospital maintains direct tie-ups with all major health insurance providers and Third Party Administrators (TPAs) to offer cashless admission, pre-authorization, and rapid claim settlement.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
              {tpaPartners.map((tpa, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200/80 font-bold text-slate-800 flex items-center gap-2 shadow-2xs"
                >
                  <ShieldCheck className="w-4 h-4 text-[#00A896] shrink-0" />
                  <span className="truncate">{tpa}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/60 text-xs text-teal-900 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>Have a question about your policy coverage or need pre-authorization help?</span>
              <span className="font-bold underline cursor-pointer">Visit TPA Desk (Ground Floor · Ext 4020)</span>
            </div>
          </div>
        )}

        {/* Tab 3: Floor Directory */}
        {activeTab === 'directory' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs animate-in fade-in duration-200">
            <div className="divide-y divide-slate-100">
              {floorDirectory.map((f, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="sm:w-1/4 font-black text-[#0C4A60] text-sm flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#00A896]" />
                    <span>{f.floor}</span>
                  </div>
                  <div className="sm:w-3/4 text-xs text-slate-600 leading-relaxed">
                    {f.depts}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Patient Rights */}
        {activeTab === 'rights' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-6 animate-in fade-in duration-200">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                Ethical Healthcare Charter
              </span>
              <h3 className="text-xl font-black text-[#0C4A60] mt-1">
                Patients Rights and Responsibilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Every patient at MedicarePlus Hospital has the right to receive respectful, confidential, and safe clinical treatment irrespective of background, ethnicity, or medical condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h4 className="font-bold text-[#0C4A60] text-sm">Your Rights as a Patient:</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                    <span>Right to informed consent prior to any test or operative procedure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                    <span>Right to privacy and medical record confidentiality.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                    <span>Right to a detailed cost estimate and itemized billing summary.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                    <span>Right to seek a second clinical opinion without hesitation.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h4 className="font-bold text-[#0C4A60] text-sm">Patient Responsibilities:</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Provide complete, accurate medical history and drug allergy details.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Adhere to infection control rules, mask mandates, and visitor limitations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Treat healthcare workers and nursing staff with mutual courtesy and respect.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Settle hospital financial obligations in a timely manner.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
