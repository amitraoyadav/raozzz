import React, { useState } from 'react';
import { Sparkles, Clock, Compass, Heart, ArrowRight } from 'lucide-react';
import { EXPERIENCES_DATA, ExperienceItem } from '../../data/site75Data';

interface Site75ExperiencesProps {
  onStartPlanning: () => void;
}

export const Site75Experiences: React.FC<Site75ExperiencesProps> = ({ onStartPlanning }) => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem>(EXPERIENCES_DATA[0]);

  return (
    <section className="py-24 sm:py-32 bg-[#0E131F] text-white border-t border-[#20293D]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            The Ceremonial Journey
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            A Multi-Chapter <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#D4AF37]">
              Cinematic Odyssey
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            An Indian luxury wedding is an unfolding symphony. Each ceremonial milestone carries its own distinct mood, sacred resonance, sonic identity, and haute couture visual language.
          </p>
        </div>

        {/* Interactive Experience Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Timeline Navigation Buttons */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-4">
              Select Celebration Chapter
            </span>
            <div className="space-y-2">
              {EXPERIENCES_DATA.map((exp, idx) => {
                const isSelected = selectedExp.id === exp.id;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExp(exp)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-[#131A29] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)] translate-x-1'
                        : 'bg-[#080B12]/60 border-[#20293D] hover:border-white/20 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#D4AF37]">0{idx + 1}</span>
                        <h4 className={`font-serif text-lg font-medium ${isSelected ? 'text-[#D4AF37]' : 'text-white'}`}>
                          {exp.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                        {exp.sanskritName} · {exp.typicalTiming}
                      </span>
                    </div>

                    <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#D4AF37] text-[#080B12]' : 'text-slate-500'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Featured Chapter Showcase Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#131A29] border border-[#20293D] rounded-3xl overflow-hidden shadow-2xl animate-in fade-in duration-300">
              
              {/* Cinematic Visual Banner */}
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <img
                  src={selectedExp.image}
                  alt={selectedExp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131A29] via-[#131A29]/20 to-transparent" />
                
                {/* Vibe Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#080B12]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
                    {selectedExp.sanskritName}
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {selectedExp.vibes.map((vibe, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-xs text-[10px] font-sans text-slate-200">
                        {vibe}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chapter Title Over Image */}
                <div className="absolute bottom-5 left-6 right-6 text-left">
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                    {selectedExp.title}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-mono tracking-wider uppercase mt-1">
                    {selectedExp.tagline}
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6 text-left">
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {selectedExp.description}
                </p>

                {/* Key Atelier Elements */}
                <div className="space-y-3 pt-2 border-t border-white/5">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    Curatorial Highlights &amp; Elements
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedExp.keyElements.map((el, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#0E131F] border border-white/5 flex items-start gap-2.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-light">{el}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Typical Duration: {selectedExp.typicalTiming}</span>
                  </div>

                  <button
                    onClick={onStartPlanning}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] transition-all cursor-pointer shadow-md"
                  >
                    Plan This Ceremony
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Site75Experiences;
