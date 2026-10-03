import React from 'react';
import {
  Globe,
  Plane,
  Languages,
  FileCheck,
  Building,
  HeartHandshake,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

interface MedicarePlusInternationalProps {
  onOpenAppointmentModal: (doctorName?: string, speciality?: string) => void;
}

export const MedicarePlusInternationalPatients: React.FC<MedicarePlusInternationalProps> = ({
  onOpenAppointmentModal,
}) => {
  const services = [
    {
      title: 'Medical Visa Assistance',
      desc: 'Prompt issuance of official medical visa invitation letters (Form V) for patient and attendants with embassy liaisons.',
      icon: FileCheck,
    },
    {
      title: 'Complimentary Airport Transfers',
      desc: 'Dedicated private transport from Indira Gandhi International Airport (DEL) directly to hospital campus or guest accommodation.',
      icon: Plane,
    },
    {
      title: 'Multilingual Translators & Interpreters',
      desc: 'Dedicated in-house language coordinators proficient in Arabic, Russian, French, Bengali, and Swahili throughout the stay.',
      icon: Languages,
    },
    {
      title: 'Guest Houses & Hotel Tie-Ups',
      desc: 'Curated serviced apartments and 4/5-star accommodation in close vicinity suited for family stays during recovery.',
      icon: Building,
    },
    {
      title: 'Personalized Treatment Estimates',
      desc: 'Transparent pre-arrival surgical evaluations, second opinions, and comprehensive financial estimates within 24 hours.',
      icon: HeartHandshake,
    },
    {
      title: 'Dedicated International Lounge',
      desc: 'Exclusive private lounge with international cuisine, currency exchange assistance, and local SIM card provisioning.',
      icon: Globe,
    },
  ];

  return (
    <section id="international" className="py-16 sm:py-24 bg-gradient-to-br from-[#0C4A60] to-[#05222E] text-white font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-teal-300 border border-white/20">
            Global Healthcare Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
            International Patient Services
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Seamless cross-border clinical pathways welcoming patients from over 45 countries with end-to-end concierge and translation assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/10 border border-white/10 hover:border-teal-400/50 hover:bg-white/15 transition-all duration-300 backdrop-blur-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-400/20 text-teal-300 flex items-center justify-center mb-4 border border-teal-300/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-2">{srv.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{srv.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center text-xs text-teal-300 font-bold">
                  <span>Concierge Support</span>
                  <CheckCircle2 className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Banner for International Patients */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-teal-900/60 border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">Need a Pre-Arrival Treatment Opinion?</h4>
            <p className="text-xs text-slate-300 mt-1">
              Email medical reports to our International Liaison Board for senior surgeon evaluation in 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenAppointmentModal(undefined, 'International Patient Inquiry')}
              className="px-5 py-2.5 rounded-xl bg-[#00A896] hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Request Free Estimate
            </button>
            <a
              href={`mailto:${MEDICARE_CONFIG.emailInfo}`}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{MEDICARE_CONFIG.emailInfo}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
