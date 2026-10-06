import React, { useState } from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';
import { WHY_CHOOSE_EXPERIENCES, ClubExperiencePoint } from '../../data/site79Data';

interface Site79WhyChooseProps {
  onNavigateExplore: () => void;
}

export const Site79WhyChoose: React.FC<Site79WhyChooseProps> = ({
  onNavigateExplore
}) => {
  const [activeExpId, setActiveExpId] = useState<string>('ambience');

  const activeExp =
    WHY_CHOOSE_EXPERIENCES.find(e => e.id === activeExpId) ||
    WHY_CHOOSE_EXPERIENCES[0];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 md:px-16 bg-[#050505] relative overflow-hidden text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Left Side: Photo with #1 Nightclub in the City Badge */}
        <div className="md:w-1/2 w-full relative group">
          <div className="relative w-full h-[320px] sm:h-[450px] md:h-[580px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.9)] bg-zinc-950">
            <img
              src={activeExp.image}
              alt={activeExp.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out brightness-85 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Glowing Accent Ring */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-black/60 border border-[#DFB759]/40 text-[#DFB759] text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                Elysium Signature
              </span>
            </div>
          </div>

          {/* Iconic #1 Nightclub in the City Badge Overlay matching Priveé */}
          <div className="absolute -bottom-5 sm:-bottom-6 -right-2 sm:-right-4 md:-right-6 bg-[#0e0c08]/95 border border-[#DFB759] p-5 sm:p-6 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl z-20">
            <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] to-[#F4D774] leading-none">
              #1
            </p>
            <p className="text-xs sm:text-sm text-gray-200 font-extrabold tracking-wider uppercase mt-1">
              NIGHTCLUB
            </p>
            <p className="text-[10px] sm:text-xs text-[#DFB759]/80 uppercase tracking-widest font-semibold mt-0.5">
              IN THE CITY
            </p>
          </div>
        </div>

        {/* Right Side: Narrative & 4 Interactive Selector Cards */}
        <div className="md:w-1/2 w-full pt-4 md:pt-0">
          <h3 className="text-[#DFB759] text-xs sm:text-sm uppercase tracking-[0.35em] font-semibold mb-3 flex items-center gap-3">
            <span className="w-10 h-px bg-[#DFB759]" />
            <span>Why Choose Us</span>
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Cinzel',serif] mb-4 sm:mb-6 leading-tight text-white">
            {activeExp.title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed mb-8 sm:mb-10 font-['Inter']">
            {activeExp.longDesc}
          </p>

          {/* 2x2 Grid of Interactive Points matching reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {WHY_CHOOSE_EXPERIENCES.filter(e => e.id !== 'ambience').slice(0, 4).map((pt) => {
              const isActive = activeExpId === pt.id;

              return (
                <div
                  key={pt.id}
                  onClick={() => setActiveExpId(pt.id)}
                  className={`cursor-pointer border-l-2 pl-4 transition-all duration-300 hover:translate-x-1 py-1 ${
                    isActive
                      ? 'border-[#DFB759] bg-[#DFB759]/5 rounded-r-xl'
                      : 'border-white/15 hover:border-[#DFB759]/50'
                  }`}
                >
                  <h4 className={`font-bold text-base sm:text-lg mb-1 transition-colors ${
                    isActive ? 'text-[#DFB759]' : 'text-white'
                  }`}>
                    {pt.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-snug">
                    {pt.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Explore More CTA */}
          <button
            onClick={onNavigateExplore}
            className="text-white border-b border-[#DFB759] pb-1 hover:text-[#DFB759] transition-colors inline-flex items-center gap-2 font-semibold text-xs sm:text-sm tracking-widest uppercase cursor-pointer"
          >
            <span>Explore More</span>
            <ArrowRight className="w-4 h-4 text-[#DFB759]" />
          </button>
        </div>
      </div>
    </section>
  );
};
