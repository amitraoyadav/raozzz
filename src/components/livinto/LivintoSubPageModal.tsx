import React from 'react';
import {
  X,
  Building2,
  Layers,
  Hammer,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  Users,
  Compass,
  FileCheck,
  Truck,
  Building,
  Cpu,
} from 'lucide-react';
import { LIVINTO_CONFIG } from '../../data/livintoInteriorsData';

interface LivintoSubPageModalProps {
  pageType: string | null;
  onClose: () => void;
  onOpenConsultation: () => void;
  onOpenProduct: (slug: string) => void;
}

export const LivintoSubPageModal: React.FC<LivintoSubPageModalProps> = ({
  pageType,
  onClose,
  onOpenConsultation,
  onOpenProduct,
}) => {
  if (!pageType) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. COMPANY PAGE */}
        {pageType === 'company' && (
          <div>
            <div className="relative h-64 sm:h-72 w-full bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="About Livinto"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full bg-[#814882] text-white text-xs font-bold uppercase tracking-wider inline-block">
                  Company Heritage
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white">
                  About Livinto Home Interiors
                </h2>
                <p className="text-xs sm:text-sm text-amber-300">
                  22+ Years of Engineering Bespoke Homes Across 15+ Metropolitan Cities
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Established in 2004, <strong>Livinto Home Interiors</strong> has grown from a specialized bespoke woodworking studio into one of India’s most trusted direct-to-consumer interior architecture and manufacturing companies. We operate 29 flagship experience centres and manage a 350,000 sq ft mechanized manufacturing plant.
                </p>
                <p>
                  Over the past 22 years, our team of 1,700+ interior architects, production engineers, and master installers has successfully delivered <strong>16,000+ completed homes</strong> with a documented 96.4% on-time handover rate.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-purple-50/60 border border-purple-100 text-center">
                <div>
                  <div className="font-serif font-black text-2xl sm:text-3xl text-[#814882]">
                    {LIVINTO_CONFIG.stats.experienceYears}
                  </div>
                  <div className="text-[11px] font-bold text-slate-600 mt-1">Design Heritage</div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl sm:text-3xl text-[#814882]">
                    {LIVINTO_CONFIG.stats.homesDelivered}
                  </div>
                  <div className="text-[11px] font-bold text-slate-600 mt-1">Homes Handed Over</div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl sm:text-3xl text-[#814882]">
                    {LIVINTO_CONFIG.stats.showroomsCount}
                  </div>
                  <div className="text-[11px] font-bold text-slate-600 mt-1">Direct Showrooms</div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl sm:text-3xl text-[#814882]">
                    {LIVINTO_CONFIG.stats.deliveryDays}
                  </div>
                  <div className="text-[11px] font-bold text-slate-600 mt-1">Guaranteed Delivery</div>
                </div>
              </div>

              {/* Core Values */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Our Uncompromising Core Pillars
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <ShieldCheck className="w-5 h-5 text-[#814882]" />
                    <h4 className="font-bold text-xs text-slate-900">100% Genuine BWP Plywood</h4>
                    <p className="text-[11px] text-slate-600">
                      Never MDF or commercial particle board in wet areas. Certified 710-grade boiling waterproof ply carcass.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    <h4 className="font-bold text-xs text-slate-900">Blum &amp; Hafele Precision</h4>
                    <p className="text-[11px] text-slate-600">
                      Exclusive tie-up with Austrian and German hardware leaders with 10-year functional warranty.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-bold text-xs text-slate-900">Fixed 40-Day Delivery</h4>
                    <p className="text-[11px] text-slate-600">
                      Strict project penalty clause if delivery exceeds 40 working days from 3D sign-off.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Meet Our Leadership &amp; Design Team
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. CUSTOMIZED INTERIORS PAGE */}
        {pageType === 'customized-interiors' && (
          <div>
            <div className="relative h-64 sm:h-72 w-full bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="Customized Interiors"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full bg-[#814882] text-white text-xs font-bold uppercase tracking-wider inline-block">
                  Specialized Woodwork
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white">
                  Customized Home Interiors
                </h2>
                <p className="text-xs sm:text-sm text-amber-300">
                  Precision-Engineered Modular Solutions Tailored to Your Spatial Architecture
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  At Livinto, "customization" means building every cabinet, shutter, and wardrobe panel from scratch to fit your apartment’s specific room dimensions, beam offsets, electrical conduits, and your personal lifestyle habits.
                </p>
                <p>
                  We do not force modular standard box sizes. Our computerized German machinery cuts panels to millimeter tolerances, maximizing ceiling height, corner utility, and floor space.
                </p>
              </div>

              {/* 6 Categories Quick Links */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Select a Living Zone to Customize:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { slug: 'kitchen', title: 'Modular Kitchen', desc: 'Island, L-shape, BWP marine ply, Blum tandems' },
                    { slug: 'bedroom', title: 'Bedroom Wardrobes', desc: 'Sliding, walk-in, floor-to-ceiling, dresser integration' },
                    { slug: 'living-room', title: 'Living Room Units', desc: 'Floating TV consoles, acoustic panelling, bar cabinets' },
                    { slug: 'dining-room', title: 'Dining & Crockery', desc: 'Glass profile display, quartz counter, cutlery drawers' },
                    { slug: 'decorative-units', title: 'Foyers & Partitions', desc: 'Shoe racks with seating, CNC jali dividers, worship units' },
                    { slug: 'kids-room', title: 'Kids Study & Bunk', desc: 'Ergonomic study desks, rounded safety edges, dual storage' },
                  ].map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => {
                        onClose();
                        onOpenProduct(c.slug);
                      }}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-purple-50 hover:border-[#814882] text-left transition-all group cursor-pointer"
                    >
                      <div className="font-bold text-xs text-slate-900 group-hover:text-[#814882]">
                        {c.title}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{c.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Book Free Custom Design Consultation
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. DESIGN AND BUILD PAGE (Complete 7-Step Process) */}
        {pageType === 'design-and-build' && (
          <div>
            <div className="relative h-64 sm:h-72 w-full bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Design and Build"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full bg-[#814882] text-white text-xs font-bold uppercase tracking-wider inline-block">
                  Turnkey Execution
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white">
                  Design &amp; Build: Complete 7-Step Journey
                </h2>
                <p className="text-xs sm:text-sm text-amber-300">
                  From First Sketch to Final 40-Day Key Handover with Zero Hassle
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Livinto’s proprietary Design &amp; Build turnkey model integrates conceptual architecture, material sourcing, mechanized factory fabrication, and on-site assembly under a single contract with a dedicated project manager.
                </p>
              </div>

              {/* The 7 Steps Requested by User */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  The Complete 7-Step Design &amp; Execution Framework:
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      step: '01',
                      title: 'Design Consultation',
                      desc: 'Meet our senior interior architects at our experience centre or via virtual 3D call. Discuss your design expectations, floor plan layout, budget constraints, and aesthetic vision.',
                    },
                    {
                      step: '02',
                      title: 'Space Planning',
                      desc: 'Our architects develop comprehensive 2D floor plans detailing furniture circulation, kitchen work triangles, wardrobe clearances, and natural lighting optimization.',
                    },
                    {
                      step: '03',
                      title: '3D Visualization & VR Walkthrough',
                      desc: 'Explore photorealistic 3D renders of your exact rooms with your selected laminate/acrylic color palette, cove lighting, and false ceiling details before spending a single rupee on manufacturing.',
                    },
                    {
                      step: '04',
                      title: 'Material Selection',
                      desc: 'Touch and select physical material swatches, BWP 710 marine ply cores, acrylics, laminates, quartz worktops, and Blum/Hafele hardware at our live showroom display suites.',
                    },
                    {
                      step: '05',
                      title: 'Automated Factory Manufacturing',
                      desc: 'Once approved, your woodwork is cut and edge-banded on computerized German Homag CNC machinery in our 350,000 sq ft mechanized plant to millimeter tolerances.',
                    },
                    {
                      step: '06',
                      title: 'Clean On-Site Installation',
                      desc: 'Flat-packed panels and hardware arrive directly at your residence and are assembled cleanly by trained company technicians with zero carpenter dust or noise.',
                    },
                    {
                      step: '07',
                      title: 'Final 150-Point Handover & 10-Year Warranty',
                      desc: 'Our quality assurance team completes a rigorous 150-point audit, performs deep site cleaning, and hands over your house keys alongside your written 10-Year Warranty Certificate on Day 40.',
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4 hover:border-[#814882] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#814882] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                        {s.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif font-bold text-sm text-slate-900">
                          {s.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900 to-slate-900 text-white text-center space-y-3">
                <h4 className="font-serif font-bold text-xl text-white">
                  Start Your Design &amp; Build Journey Today
                </h4>
                <p className="text-xs text-purple-200 max-w-lg mx-auto">
                  Experience seamless turnkey home interiors with guaranteed 40-day handover and zero cost escalations.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenConsultation();
                    }}
                    className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors shadow-xl cursor-pointer"
                  >
                    BOOK A FREE CONSULTATION
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
