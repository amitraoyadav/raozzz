import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  FileCheck,
  Building,
  Truck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface LivintoProcessTimelineProps {
  onOpenConsultation: () => void;
}

export const LivintoProcessTimeline: React.FC<LivintoProcessTimelineProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      num: '01',
      title: 'Talk to Interior Designer & Get an Estimate',
      desc: 'Meet our design consultants, share your floor plan, explore live mockups, and get a transparent line-item estimate.',
      icon: MessageSquare,
      timeline: 'Days 1 - 5',
    },
    {
      num: '02',
      title: 'Detailed 3D Drawing & Approval',
      desc: 'Inspect photorealistic 3D renders of your kitchen, bedrooms, and living room with exact laminate finishes and dimensions.',
      icon: FileCheck,
      timeline: 'Days 6 - 12',
    },
    {
      num: '03',
      title: 'Production at Own Factory',
      desc: 'Automated CNC cutting, drilling, and German edge-banding in our 350,000 sq ft mechanized manufacturing plant.',
      icon: Building,
      timeline: 'Days 13 - 30',
    },
    {
      num: '04',
      title: 'Material Delivery & Assembly',
      desc: 'Flat-packed panels delivered directly to your site and assembled cleanly by trained company technicians.',
      icon: Truck,
      timeline: 'Days 31 - 38',
    },
    {
      num: '05',
      title: 'On-Time Project Handover',
      desc: '150-point quality audit, site deep-cleaning, and handover with your written 10-Year Warranty Certificate.',
      icon: CheckCircle2,
      timeline: 'Day 40 Handover',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [STEPS.length]);

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#814882]" />
            <span>Guaranteed Handover SLA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Project Completion in <span className="text-[#814882]">40 Working Days*</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A systematic, contract-backed execution workflow from preliminary consultation to final key handover.
          </p>
        </div>

        {/* 5-Step Process Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
                  isActive
                    ? 'bg-[#814882] text-white border-[#814882] shadow-xl scale-[1.02]'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-purple-50/50'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-serif font-black ${
                        isActive ? 'text-amber-300' : 'text-slate-400'
                      }`}
                    >
                      {step.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-white text-[#814882] border border-slate-200 shadow-xs'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div
                    className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${
                      isActive ? 'text-purple-200' : 'text-[#814882]'
                    }`}
                  >
                    {step.timeline}
                  </div>

                  <h3
                    className={`font-serif font-bold text-sm sm:text-base leading-snug mb-2 ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isActive ? 'text-purple-100' : 'text-slate-600'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-[11px] font-semibold flex items-center gap-1 ${
                    isActive
                      ? 'border-white/20 text-amber-300'
                      : 'border-slate-200 text-slate-500'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Phase {step.num} Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Bottom Guarantee Note */}
        <div className="mt-12 p-6 rounded-2xl bg-purple-50 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-slate-900">
              Guaranteed Handover or We Pay Penalty
            </h4>
            <p className="text-xs text-slate-600">
              Our 40-day delivery commitment is backed by an enforceable on-time handover penalty clause in your contract.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-2.5 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs uppercase tracking-wider shadow-md shrink-0 cursor-pointer"
          >
            Start Your 40-Day Project
          </button>
        </div>
      </div>
    </section>
  );
};
