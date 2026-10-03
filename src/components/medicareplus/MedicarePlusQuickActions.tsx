import React from 'react';
import {
  Search,
  Globe,
  CreditCard,
  ClipboardList,
  Video,
  AlertTriangle,
  ArrowRight,
  Calendar,
  HeartHandshake,
} from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

interface MedicarePlusQuickActionsProps {
  onExploreDoctors: () => void;
  onOpenAppointmentModal: () => void;
  onOpenPaymentModal: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const MedicarePlusQuickActions: React.FC<MedicarePlusQuickActionsProps> = ({
  onExploreDoctors,
  onOpenAppointmentModal,
  onOpenPaymentModal,
  onNavigateToSection,
}) => {
  const actions = [
    {
      id: 'find-doctor',
      title: 'Find a Doctor',
      subtitle: '400+ Specialists Across 40+ Domains',
      icon: Search,
      action: onExploreDoctors,
      color: 'from-blue-600 to-cyan-600',
      tag: 'OPD Directory',
    },
    {
      id: 'international',
      title: 'International Patients',
      subtitle: 'Visa, Airport Pickup & Language Care',
      icon: Globe,
      action: () => onNavigateToSection('international'),
      color: 'from-teal-600 to-emerald-600',
      tag: 'Global Desk',
    },
    {
      id: 'online-payment',
      title: 'Online Payment',
      subtitle: 'Pay OPD & Inpatient Bills Online',
      icon: CreditCard,
      action: onOpenPaymentModal,
      color: 'from-cyan-700 to-blue-800',
      tag: 'Demo Safe Portal',
    },
    {
      id: 'health-checkup',
      title: 'Health Check-up',
      subtitle: '6 Preventive Diagnostic Packages',
      icon: ClipboardList,
      action: () => onNavigateToSection('packages'),
      color: 'from-emerald-600 to-teal-700',
      tag: 'Same-Day Reports',
    },
    {
      id: 'appointment',
      title: 'Book Appointment',
      subtitle: 'Instant OPD Slot Request',
      icon: Calendar,
      action: onOpenAppointmentModal,
      color: 'from-teal-700 to-[#0C4A60]',
      tag: 'No Queues',
    },
    {
      id: 'emergency',
      title: '24/7 Emergency Care',
      subtitle: `Casualty Call: ${MEDICARE_CONFIG.phoneCasualty}`,
      icon: AlertTriangle,
      action: () => onNavigateToSection('emergency'),
      color: 'from-rose-600 to-red-700',
      tag: 'Level 1 Trauma',
    },
  ];

  return (
    <section className="relative z-30 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-['Satoshi',sans-serif]">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-3 sm:p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <button
                key={act.id}
                onClick={act.action}
                className="group relative flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl hover:bg-slate-50/90 border border-slate-100 hover:border-slate-300/80 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-md"
              >
                {/* Icon Circle */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${act.color} text-white flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5 drop-shadow-xs" />
                </div>

                {/* Tag */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#00A896] transition-colors">
                  {act.tag}
                </span>

                {/* Title */}
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0C4A60] mt-1 leading-tight">
                  {act.title}
                </h4>

                {/* Subtitle */}
                <p className="hidden sm:block text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {act.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
