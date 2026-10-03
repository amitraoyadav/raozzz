import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

interface MedicarePlusLegalModalsProps {
  modalType: 'privacy' | 'terms' | 'rights' | null;
  onClose: () => void;
}

export const MedicarePlusLegalModals: React.FC<MedicarePlusLegalModalsProps> = ({
  modalType,
  onClose,
}) => {
  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto font-['Satoshi',sans-serif]">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0C4A60] text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500 text-white">
              Institutional Governance
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight">
            {modalType === 'privacy' && 'Hospital Privacy & Patient Health Data Policy'}
            {modalType === 'terms' && 'Hospital Terms of Admission & Clinical Care'}
            {modalType === 'rights' && 'Charter of Patient Rights & Responsibilities'}
          </h3>
          <p className="text-xs text-teal-100 mt-1">
            MedicarePlus Hospital · Clinical Ethics & Administrative Guidelines
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-xs text-slate-600 space-y-4 leading-relaxed">
          {modalType === 'privacy' && (
            <>
              <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg text-teal-900 text-xs">
                <strong>Data Protection:</strong> All patient medical records and diagnostic results at MedicarePlus Hospital are governed by clinical data confidentiality protocols.
              </div>
              <h4 className="font-bold text-slate-800 text-sm">1. Collection of Health Records</h4>
              <p>
                We collect personal health identifiers, medical history, clinical investigations, and insurance documentation solely for providing healthcare diagnosis, inpatient management, and regulatory compliance.
              </p>
              <h4 className="font-bold text-slate-800 text-sm">2. Confidentiality & Electronic Health Records</h4>
              <p>
                Electronic Medical Records (EMR) are stored within protected clinical networks accessible exclusively by authorized medical specialists, primary nursing staff, and laboratory technicians directly involved in patient care.
              </p>
              <h4 className="font-bold text-slate-800 text-sm">3. Demo Environment Notice</h4>
              <p>
                This web platform is an illustrative portfolio demonstration. No real patient data is transmitted to or retained in commercial health registries.
              </p>
            </>
          )}

          {modalType === 'terms' && (
            <>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 text-xs">
                <strong>General Guidelines:</strong> Admission, OPD tokens, and elective surgical procedures are scheduled in accordance with medical necessity and clinical triage protocols.
              </div>
              <h4 className="font-bold text-slate-800 text-sm">1. Emergency Care Priority</h4>
              <p>
                The casualty and trauma emergency department functions 24x7. Critical patients are triaged based on hemodynamic stability regardless of pre-booking sequence.
              </p>
              <h4 className="font-bold text-slate-800 text-sm">2. Inpatient Tariffs & Billing</h4>
              <p>
                Estimated medical treatment schedules are provided at admission. Total final billing is based on clinical consumables, operating theatre duration, and intensive care duration.
              </p>
              <h4 className="font-bold text-slate-800 text-sm">3. Cashless Insurance Clearances</h4>
              <p>
                TPA cashless authorizations depend on individual health insurance policy clauses. Patients are advised to submit pre-authorization claims 48 hours prior to planned hospitalizations.
              </p>
            </>
          )}

          {modalType === 'rights' && (
            <>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg text-purple-900 text-xs">
                <strong>NABH Patient Charter:</strong> We honor the dignity, autonomy, and cultural beliefs of all individuals under our medical care.
              </div>
              <h4 className="font-bold text-slate-800 text-sm">Patient Rights</h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Right to considerate and respectful care delivered by qualified healthcare professionals.</li>
                <li>Right to complete medical information regarding diagnosis, proposed treatment alternatives, and anticipated risks.</li>
                <li>Right to informed consent prior to any surgical intervention or clinical investigation.</li>
                <li>Right to full confidentiality and privacy regarding medical records and clinical examinations.</li>
                <li>Right to transparent billing estimates and breakdown of all pharmaceutical and diagnostic expenses.</li>
              </ul>
              <h4 className="font-bold text-slate-800 text-sm mt-3">Patient Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Provide accurate personal medical history, drug allergies, and current medications.</li>
                <li>Adhere to prescribed clinical medication and postoperative rehabilitation guidelines.</li>
                <li>Respect hospital visiting hours and ICU sanitization protocols.</li>
                <li>Refrain from smoking, loud noise, or unauthorized photography inside hospital premises.</li>
              </ul>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-bold transition-all cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
