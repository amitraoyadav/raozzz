import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  Layers,
  Briefcase,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const Site82WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Verified Property Recommendations',
      description: 'Explore carefully reviewed commercial and residential projects from trusted developers across India.'
    },
    {
      icon: CheckCircle2,
      title: 'Verified & RERA-Compliant Projects',
      description: 'Zero legal ambiguity. Every listed property undergoes mandatory RERA scrutiny before onboarding.'
    },
    {
      icon: Building2,
      title: 'Strong Market Presence',
      description: '14+ years of grounded advisory in Noida, Greater Noida, Ayodhya, Lucknow, and emerging growth corridors.'
    },
    {
      icon: Layers,
      title: 'End-to-End Assistance',
      description: 'From property discovery and escorted site visits to legal vetting, home loans, and registry support.'
    },
    {
      icon: Briefcase,
      title: 'Commercial & Residential Expertise',
      description: 'Specialized teams for retail shops, lockable office spaces, luxury penthouses, studio suites, and plots.'
    },
    {
      icon: TrendingUp,
      title: 'Investment-Focused Advisory',
      description: 'Algorithmic insights on high rental yield properties, capital appreciation zones, and proven ROI models.'
    }
  ];

  return (
    <section className="px-6 pt-12 pb-16 lg:pt-24 lg:pb-28 bg-[#F7F7F7]">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="font-sans font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#1F2430] leading-tight">
            <span className="text-[#FF5A00] font-bold">Why Choose </span>
            <span className="text-[#3F3F46] font-semibold">
              Wealth Nexus as Your Trusted Real Estate Consultant in Noida?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed mt-4 max-w-3xl mx-auto">
            As a trusted real estate consultant in Noida, Wealth Nexus helps you identify{' '}
            <span className="text-[#F54900] font-semibold">high-potential investment opportunities</span> across India’s fastest-growing real estate markets. From project selection and site visits to{' '}
            <span className="text-[#F54900] font-semibold">RERA verification</span>, legal documentation, and investment planning, we provide{' '}
            <span className="text-[#F54900] font-semibold">expert guidance</span> at every stage of your property journey.
          </p>
        </div>

        {/* Two-Column Architecture: Image Left + 6 Features Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
          {/* Left Column: Large Editorial Image */}
          <div className="w-full lg:w-auto shrink-0 flex justify-center">
            <div className="w-full max-w-[420px] lg:w-[380px] xl:w-[430px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-neutral-900 relative">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                alt="Wealth Nexus Property Advisor Inspection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF9B54] font-bold block mb-1">
                  100% Unbiased Fiduciary Advice
                </span>
                <p className="text-sm font-semibold">
                  Zero Buyer Brokerage · Dedicated Relationship Manager
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 flex-1">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#F54900] flex items-center justify-center shrink-0 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#1E2430] leading-snug mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7C7C7C] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
