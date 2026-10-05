import React, { useState } from 'react';
import { 
  Palette, 
  Compass, 
  Camera, 
  Music, 
  Sparkles, 
  Utensils, 
  ArrowRight, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SAMAROH_SERVICES, ServiceOffering } from '../../data/samarohLuxeData';
import { SamarohServiceDetailModal } from './SamarohServiceDetailModal';

interface SamarohServicesSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const SamarohServicesSection: React.FC<SamarohServicesSectionProps> = ({
  onOpenConsultation
}) => {
  const [selectedService, setSelectedService] = useState<ServiceOffering | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Palette': return <Palette className="w-5 h-5 text-[#E06D53]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#E06D53]" />;
      case 'Camera': return <Camera className="w-5 h-5 text-[#E06D53]" />;
      case 'Music': return <Music className="w-5 h-5 text-[#E06D53]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#E06D53]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#E06D53]" />;
      default: return <Sparkles className="w-5 h-5 text-[#E06D53]" />;
    }
  };

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-[#181514] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
            <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
              Turnkey Wedding Capabilities
            </span>
          </div>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Comprehensive Wedding Services
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Everything your celebration demands under one accountable roof. From 3D floral scenography and candid cinema to molecular cocktail bar styling.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMAROH_SERVICES.map(service => (
            <div
              key={service.id}
              className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-700 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.coverImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  
                  {/* Floating Icon Box */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-700 flex items-center justify-center shadow-lg">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Price Tag Bottom Right */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                      {service.pricingRange}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-['Fraunces',serif] text-xl font-bold text-white group-hover:text-[#E06D53] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-stone-800/80">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3 border-t border-stone-850">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 min-h-[42px] px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-200 text-xs font-semibold transition-colors cursor-pointer text-center"
                >
                  View Deliverables
                </button>
                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="flex-1 min-h-[42px] px-3 py-2 rounded-xl bg-[#E06D53] hover:bg-[#C8523B] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <SamarohServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
