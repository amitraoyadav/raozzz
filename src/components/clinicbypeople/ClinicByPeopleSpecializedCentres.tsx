import React from 'react';
import {
  Activity,
  Heart,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ClinicByPeopleSpecializedCentresProps {
  onOpenConsultationModal: (speciality?: string) => void;
}

export const ClinicByPeopleSpecializedCentres: React.FC<ClinicByPeopleSpecializedCentresProps> = ({
  onOpenConsultationModal,
}) => {
  const centres = [
    {
      id: 'general-surgery',
      title: 'General Surgery Centre of Excellence',
      shortTitle: 'General Surgery',
      desc: 'Dedicated modular 3D laparoscopy suites for hernia repairs, gallbladder stones, and laser appendectomies with minimal pain.',
      icon: Activity,
      color: '#0C5BE2',
      metrics: '4,500+ Daycare Cases',
    },
    {
      id: 'womens-health',
      title: "Women's Health & Gynaecology Pavilion",
      shortTitle: "Women's Health",
      desc: 'Comprehensive female surgical care with 100% lady gynaecologists for fertility-preserving fibroid removals and ovarian cyst surgeries.',
      icon: Heart,
      color: '#E11D48',
      metrics: '3,800+ Female Procedures',
    },
    {
      id: 'orthocare',
      title: 'OrthoCare Robotic Joint Institute',
      shortTitle: 'Orthopaedics',
      desc: 'Sub-millimetre robotic alignment for total knee & hip replacement and sports medicine arthroscopy for swift, natural walking.',
      icon: Shield,
      color: '#0284C7',
      metrics: '5,000+ Joint Surgeries',
    },
    {
      id: 'plastic-surgery',
      title: 'Aesthetic & Plastic Surgery Institute',
      shortTitle: 'Plastic Surgery',
      desc: 'Board-certified cosmetic surgeons specializing in male chest reduction (gynecomastia), high-definition liposuction, and hair restoration.',
      icon: Sparkles,
      color: '#4F46E5',
      metrics: '2,400+ Aesthetic Transformations',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100">
            Centres of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            Specialized Surgical Institutes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Each institute unites specialized surgical teams, US-FDA cleared medical devices, and private recovery facilities under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {centres.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-md transition-transform group-hover:scale-105"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {item.metrics}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0C5BE2] transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onOpenConsultationModal(item.shortTitle)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#0C5BE2] hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Explore Institute</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
