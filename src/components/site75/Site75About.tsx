import React from 'react';
import { Sparkles, Shield, Compass, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { site75Config } from '../../config/site75Config';

interface Site75AboutProps {
  onOpenPlanning: () => void;
  onExploreServices: () => void;
}

export const Site75About: React.FC<Site75AboutProps> = ({
  onOpenPlanning,
  onExploreServices
}) => {
  const pillars = [
    {
      num: '01',
      title: 'Couture Scenography',
      desc: 'We never duplicate a concept. Every mandap, ballroom, and poolside pavilion is custom-engineered using photorealistic 3D CAD modeling before master craftsmen sculpt the physical reality.'
    },
    {
      num: '02',
      title: 'Precision Logistics Cell',
      desc: 'Behind the breathtaking glamour lies a military-grade logistical backbone. Private air charters, discreet VIP security protocols, and barcoded guest luggage handling from jet tarmac to suite bedside.'
    },
    {
      num: '03',
      title: 'Sensory Gastronomy',
      desc: 'Food is sacred memory. We partner with celebrated masterchefs, heritage halwais, and world-class mixologists to curate sensory banquets that delight grandparents and international globetrotters alike.'
    },
    {
      num: '04',
      title: 'Strict Atelier Cap',
      desc: 'We intentionally limit our calendar to 18 celebrations annually. This guarantees that our creative directors, Aarav & Meera Singhania, are physically leading your wedding on the ground.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#080B12] text-white border-t border-[#20293D]/60 relative overflow-hidden">
      
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            The Atelier Philosophy
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Where Haute Couture <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E8CA65]">
              Meets Sacred Emotion
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Founded in Mumbai and trusted across the globe, {site75Config.BRAND_NAME} was born from a singular belief: a wedding is not a sequence of events, but an immersive cinematic epoch woven from timeless family heritage and contemporary wonder.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Image & Philosophy Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          
          {/* Left Column: Layered Editorial Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#20293D] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
                alt="Bridal Couture Styling"
                className="w-full h-[480px] sm:h-[560px] object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-transparent opacity-80" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0E131F]/90 backdrop-blur-md border border-[#20293D]">
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono tracking-widest uppercase mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Bespoke Excellence</span>
                </div>
                <p className="text-xs text-slate-300 font-light font-sans">
                  "Every design detail should evoke reverence, astonishment, and deep emotional stillness."
                </p>
                <span className="text-[10px] text-[#D4AF37] font-serif italic block mt-1">
                  — {site75Config.FOUNDERS}, Creative Directors
                </span>
              </div>
            </div>

            {/* Accent Floating Mini Card */}
            <div className="hidden sm:block absolute -top-6 -right-6 p-4 rounded-2xl bg-[#131A29] border border-[#D4AF37]/30 shadow-xl max-w-[200px] text-left">
              <span className="font-serif text-2xl text-[#D4AF37] block font-light">100%</span>
              <span className="text-[10px] uppercase font-sans tracking-wider text-slate-300 block">
                Open-Book Commercials. Zero Hidden Markups.
              </span>
            </div>
          </div>

          {/* Right Column: Story & Founding Vision */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                An Intimate Approach to Monumental Celebrations
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                For over a decade, we have quietly orchestrated the weddings of prominent industrialists, discerning international couples, and cultural figures. Our distinction lies in rejecting mass-production wedding templates.
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Whether transforming Jagmandir Island in Udaipur into a floating paradise of white mogra, or chartering mahogany speedboats on Lake Como for sunset vows, we act as creative architects, financial stewards, and familial confidantes.
              </p>
            </div>

            {/* Bullet Proof Points */}
            <div className="space-y-3 pt-2">
              {[
                'Full in-house 3D design studio, spatial engineers, and floristry procurement.',
                'Direct booking of global and Bollywood artists with zero intermediary fees.',
                'Complete guest concierge handling commercial flights, private jets, and room drops.',
                'Discreet non-disclosure protocols safeguarding your family’s privacy.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-light">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPlanning}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] transition-all cursor-pointer shadow-lg"
              >
                Inquire With The Atelier
              </button>
              <button
                onClick={onExploreServices}
                className="text-xs font-medium uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer py-2"
              >
                <span>View All 8 Pillars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {pillars.map(pillar => (
            <div
              key={pillar.num}
              className="p-6 rounded-2xl bg-[#0E131F]/70 border border-[#20293D] hover:border-[#D4AF37]/50 transition-all group"
            >
              <span className="font-mono text-xs font-bold text-[#D4AF37] tracking-widest block mb-3">
                {pillar.num}
              </span>
              <h4 className="font-serif text-xl text-white font-medium mb-2 group-hover:text-[#D4AF37] transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Site75About;
