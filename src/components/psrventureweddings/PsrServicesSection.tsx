import React, { useState } from 'react';
import { 
  Building2, 
  CalendarCheck2, 
  Palette, 
  HeartHandshake, 
  UtensilsCrossed, 
  Camera, 
  Music, 
  Car, 
  Users, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { PSR_SERVICES, WeddingServiceItem } from '../../data/psrWeddingsData';

interface PsrServicesSectionProps {
  onSelectService: (service: WeddingServiceItem) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const PsrServicesSection: React.FC<PsrServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  // Helper to render dynamic icons based on service.iconName
  const renderServiceIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-6 h-6 text-[#DFBE78]" />;
      case 'CalendarCheck2': return <CalendarCheck2 className="w-6 h-6 text-[#DFBE78]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#DFBE78]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#DFBE78]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-[#DFBE78]" />;
      case 'Camera': return <Camera className="w-6 h-6 text-[#DFBE78]" />;
      case 'Music': return <Music className="w-6 h-6 text-[#DFBE78]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#DFBE78]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#DFBE78]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#DFBE78]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#DFBE78]" />;
      default: return <Sparkles className="w-6 h-6 text-[#DFBE78]" />;
    }
  };

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-[#180408] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <Sparkles className="w-3 h-3 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              360° Turnkey Management
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Complete Wedding Planning Services
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            From initial palace discovery and budget modeling to bespoke mandap scenography, celebrity entertainment, and white-glove guest concierge, we orchestrate every dimension of your celebration.
          </p>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PSR_SERVICES.map(service => (
            <div
              key={service.id}
              className="bg-[#21070B] rounded-2xl border border-[#C5A059]/20 hover:border-[#DFBE78]/50 p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon & Index */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#2E0B11] border border-[#C5A059]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {renderServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#C5A059]/60 font-bold">
                    PSR // {service.slug.toUpperCase().slice(0, 8)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white group-hover:text-[#DFBE78] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Sample */}
                <div className="pt-2 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#DFBE78] block">
                    Key Scope:
                  </span>
                  <ul className="space-y-1 text-[11px] text-stone-300 font-light">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#DFBE78] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-stone-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-[#DFBE78] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Scope of Work</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#C5A059] hover:text-[#1A0509] text-xs font-bold text-stone-200 uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
