import React from 'react';
import {
  Building2,
  Sparkles,
  Car,
  Music,
  Camera,
  Utensils,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES_DATA, WeddingService } from '../../data/devdasWeddingData';

interface DevdasServicesProps {
  onOpenService: (slug: string) => void;
  onOpenInquiry: () => void;
}

export const DevdasServices: React.FC<DevdasServicesProps> = ({
  onOpenService,
  onOpenInquiry,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Car':
        return <Car className="w-5 h-5" />;
      case 'Music':
        return <Music className="w-5 h-5" />;
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#FCFBF7] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#7A1C30] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            OUR WEDDING SERVICES
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From initial hotel contract negotiations to minute-to-minute ceremony management, we act as your trusted family advocates on-ground.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onOpenService(service.slug)}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#7A1C30] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                {/* Visual Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-2xl bg-[#7A1C30] text-amber-300 border border-amber-500/30 flex items-center justify-center shadow-lg">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-[#7A1C30] transition-colors leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1C30] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#7A1C30]">
                <span>View Scope &amp; Deliverables</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Service Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-500 mb-4">
            Need customized assistance for a unique cross-cultural or multi-day wedding?
          </p>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-3 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            <span>Talk to Our Planning Director</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
