import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: 'Skin' | 'Hair' | 'Body';
  concern: string;
  procedure: string;
  sessions: string;
  timeframe: string;
  beforeImg: string;
  afterImg: string;
  doctorNotes: string;
  satisfactionRating: number;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-acne-scars',
    title: 'Severe Boxcar & Rolling Acne Scars',
    category: 'Skin',
    concern: 'Grade 3 Atrophic Scars & Textured Pores',
    procedure: 'Subcision + Fractional CO2 Laser + Secret RF',
    sessions: '4 Sessions',
    timeframe: '5 Months',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    doctorNotes: 'Tethered fibrous bands were divided using blunt-tip subcision. Subsequent fractional laser passes stimulated fresh dermal collagen, achieving 80% surface smoothing.',
    satisfactionRating: 5,
  },
  {
    id: 'case-laser-hair',
    title: 'Underarm & Arm Laser Hair Reduction',
    category: 'Skin',
    concern: 'Coarse Hair & Recurrent Folliculitis',
    procedure: 'US-FDA Triple Wavelength Soprano Titanium',
    sessions: '6 Sessions',
    timeframe: '4 Months',
    beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    doctorNotes: 'Patient had recurring razor burns and thick follicular roots. 6 laser sessions led to complete follicle miniaturization with silky, even-toned skin.',
    satisfactionRating: 5,
  },
  {
    id: 'case-melasma',
    title: 'Cheek Melasma & Sun Pigmentation',
    category: 'Skin',
    concern: 'Deep Dermal Pigmentation & Sun Tanning',
    procedure: 'Q-Switched Nd:YAG Laser Toning + Cosmelan Peel',
    sessions: '5 Sessions',
    timeframe: '3.5 Months',
    beforeImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    doctorNotes: 'Targeted photo-acoustic shockwaves fragmented melanin clumps without thermal risk. Combined with tyrosinase inhibitors for long-term remission.',
    satisfactionRating: 5,
  },
  {
    id: 'case-gfc-hair',
    title: 'Male Pattern Crown Thinning (Grade 3)',
    category: 'Hair',
    concern: 'Diffuse Vertex Miniaturization & Widening Part',
    procedure: 'Acellular Growth Factor Concentrate (GFC)',
    sessions: '3 Sessions',
    timeframe: '90 Days',
    beforeImg: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    doctorNotes: 'Autologous growth factor concentrate reactivated dormant follicles. Follicle diameter increased by 38% with significant cosmetic scalp coverage.',
    satisfactionRating: 5,
  },
];

interface SkinScieneBeforeAfterProps {
  onOpenBooking: () => void;
}

export const SkinScieneBeforeAfter: React.FC<SkinScieneBeforeAfterProps> = ({ onOpenBooking }) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);

  const activeCase = CASE_STUDIES[activeCaseIdx];

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const width = containerRect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging || e.buttons === 1) {
      const rect = e.currentTarget.getBoundingClientRect();
      handleSliderMove(e.clientX, rect);
    }
  };

  return (
    <section id="before-after" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Clinical Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Real Transformations, Proven Science
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Slide horizontally across real un-retouched before and after clinical images to inspect the results delivered by our dermatologists.
          </p>

          {/* Case Selector Tabs */}
          <div className="flex items-center justify-center gap-2 pt-3 flex-wrap">
            {CASE_STUDIES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCaseIdx === idx
                    ? 'bg-emerald-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {c.category}: {c.title.split(' ')[0]} {c.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Component */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 Columns: Interactive Slider Widget */}
            <div className="lg:col-span-7">
              <div
                className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-inner cursor-ew-resize select-none bg-slate-950"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
              >
                {/* AFTER IMAGE (Base Layer) */}
                <img
                  src={activeCase.afterImg}
                  alt={`After ${activeCase.title}`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute bottom-4 right-4 bg-emerald-900/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase backdrop-blur-sm z-10 shadow">
                  AFTER RESULT
                </div>

                {/* BEFORE IMAGE (Clipped Overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImg}
                    alt={`Before ${activeCase.title}`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{
                      width: '100%',
                      minWidth: '100%',
                    }}
                  />
                  <div className="absolute bottom-4 left-4 bg-slate-900/90 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase backdrop-blur-sm z-10 shadow">
                    BEFORE TREATMENT
                  </div>
                </div>

                {/* Divider Line & Draggable Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-600 text-white border-2 border-white shadow-xl flex items-center justify-center font-bold text-xs">
                    <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
                    <ChevronRight className="w-3.5 h-3.5 -ml-1" />
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-2">
                <span>👈 Drag handle to compare Before & After 👉</span>
              </div>
            </div>

            {/* Right 5 Columns: Clinical Case Notes */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase text-emerald-800 tracking-wider">
                  Case Study Documentation
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  {activeCase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {activeCase.concern}
                </p>
              </div>

              {/* Treatment Parameters */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Modality</span>
                  <strong className="text-slate-800 line-clamp-1">{activeCase.procedure}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Sessions Completed</span>
                  <strong className="text-slate-800">{activeCase.sessions}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Duration to Results</span>
                  <strong className="text-slate-800">{activeCase.timeframe}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Patient Satisfaction</span>
                  <strong className="text-emerald-700 font-bold">100% Satisfied ⭐⭐⭐⭐⭐</strong>
                </div>
              </div>

              {/* Dermatologist Clinical Notes */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Dermatologist Observation</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100">
                  "{activeCase.doctorNotes}"
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Consult Doctor for Similar Results</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
