import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  FileText,
  Calculator,
  PhoneCall,
  Calendar,
  Layers,
  Fuel,
  Gauge,
  Weight,
  Compass,
  Zap,
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { CommercialVehicle } from './types';

interface VehicleDetailModalProps {
  vehicle: CommercialVehicle;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (vehicle: CommercialVehicle) => void;
  onBookTestDrive: (vehicle: CommercialVehicle) => void;
  onDownloadBrochure: (vehicle: CommercialVehicle) => void;
  onCompare: (vehicle: CommercialVehicle) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  isOpen,
  onClose,
  onRequestQuote,
  onBookTestDrive,
  onDownloadBrochure,
  onCompare
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'applications' | 'calculator' | 'overview'>('specs');

  // EMI Calculator State
  const cleanPriceStr = vehicle.startingPrice.replace(/[^0-9.]/g, '');
  const baseLakhs = parseFloat(cleanPriceStr) || 15.0;
  const basePriceRupees = baseLakhs * 100000;

  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [tenureYears, setTenureYears] = useState<number>(5);
  const [interestRate, setInterestRate] = useState<number>(9.5);

  const loanAmount = basePriceRupees * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const monthlyEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-[#121417] text-white w-full max-w-5xl rounded-2xl border border-stone-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="px-5 py-4 border-b border-stone-800 flex items-center justify-between bg-[#191c21]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
              {vehicle.subCategoryLabel}
            </span>
            <span className="text-stone-400 text-xs hidden sm:inline">|</span>
            <span className="text-stone-400 text-xs hidden sm:inline font-mono">{vehicle.series}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onCompare(vehicle)}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Compare Model</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-6">
          {/* Main Visual & Key Stats Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-xl overflow-hidden border border-stone-800 aspect-[16/10] bg-stone-900 group">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stock commercial truck if error
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{vehicle.name}</h2>
                    <p className="text-stone-300 text-xs sm:text-sm mt-0.5 line-clamp-1">{vehicle.tagline}</p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-600/90 text-white backdrop-blur-sm">
                    {vehicle.fuelType} BS6 Phase 2
                  </span>
                </div>
              </div>

              {/* Quick Highlight Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <div className="bg-[#1a1e24] p-2.5 rounded-lg border border-stone-800 text-center">
                  <div className="text-[10px] text-stone-400 font-mono flex items-center justify-center gap-1">
                    <Weight className="w-3 h-3 text-amber-400" /> GVW
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{vehicle.gvw}</div>
                </div>
                <div className="bg-[#1a1e24] p-2.5 rounded-lg border border-stone-800 text-center">
                  <div className="text-[10px] text-stone-400 font-mono flex items-center justify-center gap-1">
                    <Gauge className="w-3 h-3 text-red-400" /> MAX POWER
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{vehicle.power.split('@')[0]}</div>
                </div>
                <div className="bg-[#1a1e24] p-2.5 rounded-lg border border-stone-800 text-center">
                  <div className="text-[10px] text-stone-400 font-mono flex items-center justify-center gap-1">
                    <Compass className="w-3 h-3 text-blue-400" /> WHEELBASE
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{vehicle.specs.wheelbase.split('/')[0]}</div>
                </div>
                <div className="bg-[#1a1e24] p-2.5 rounded-lg border border-stone-800 text-center">
                  <div className="text-[10px] text-stone-400 font-mono flex items-center justify-center gap-1">
                    <Fuel className="w-3 h-3 text-emerald-400" /> FUEL TANK
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{vehicle.specs.fuelTank.split(' ')[0]} L</div>
                </div>
              </div>
            </div>

            {/* Price & Action Box */}
            <div className="lg:col-span-5 bg-[#171a20] rounded-xl p-5 border border-stone-800 space-y-4">
              <div>
                <div className="text-xs text-stone-400 uppercase font-mono tracking-wider">Starting Ex-Showroom</div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">{vehicle.startingPrice}</div>
                <div className="text-[11px] text-stone-400 mt-1">
                  *Ex-showroom price before statutory RTO registration, GST, and insurance. Fleet volume concessions available.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-stone-900/80 border border-stone-800 space-y-1.5">
                <div className="text-xs font-bold text-stone-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Raoz Motors Factory Warranty</span>
                </div>
                <p className="text-xs text-stone-400">
                  3 Years / Unlimited Kilometres comprehensive driveline protection + 24x7 nationwide roadside assistance.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => onRequestQuote(vehicle)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>REQUEST OFFICIAL QUOTATION</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onBookTestDrive(vehicle)}
                    className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 border border-stone-700 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Book Demo</span>
                  </button>

                  <button
                    onClick={() => onDownloadBrochure(vehicle)}
                    className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 border border-stone-700 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                    <span>Brochure</span>
                  </button>
                </div>
              </div>

              {/* Highlights Bullet List */}
              <div className="border-t border-stone-800 pt-3 space-y-2">
                <div className="text-xs font-bold text-stone-300 uppercase tracking-wider font-mono">Key Highlights</div>
                {vehicle.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-stone-800 flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Full Technical Specifications</span>
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'applications'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
              }`}
            >
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Commercial Applications</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'calculator'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>EMI &amp; Finance Estimator</span>
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Engineering Overview</span>
            </button>
          </div>

          {/* Tab 1: Full Technical Specifications */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Engine & Performance */}
                <div className="bg-[#171a20] rounded-xl p-4 border border-stone-800 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono border-b border-stone-800 pb-2">
                    <Zap className="w-4 h-4" />
                    <span>Engine &amp; Performance</span>
                  </div>
                  <div className="space-y-2 text-xs divide-y divide-stone-800/60">
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Engine Type</span>
                      <span className="font-semibold text-white text-right max-w-[60%]">{vehicle.specs.engine}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Max Power Output</span>
                      <span className="font-semibold text-white">{vehicle.specs.maxPower}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Max Torque</span>
                      <span className="font-semibold text-white">{vehicle.specs.maxTorque}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Engine Displacement</span>
                      <span className="font-semibold text-white">{vehicle.specs.displacement}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Emission Standard</span>
                      <span className="font-semibold text-emerald-400">{vehicle.specs.emissionNorms}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Gradeability</span>
                      <span className="font-semibold text-white">{vehicle.specs.gradeability || '25%'}</span>
                    </div>
                  </div>
                </div>

                {/* Transmission & Drivetrain */}
                <div className="bg-[#171a20] rounded-xl p-4 border border-stone-800 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono border-b border-stone-800 pb-2">
                    <Compass className="w-4 h-4" />
                    <span>Transmission &amp; Driveline</span>
                  </div>
                  <div className="space-y-2 text-xs divide-y divide-stone-800/60">
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Gearbox</span>
                      <span className="font-semibold text-white text-right max-w-[60%]">{vehicle.specs.transmission}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Clutch System</span>
                      <span className="font-semibold text-white text-right max-w-[60%]">{vehicle.specs.clutch}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Steering</span>
                      <span className="font-semibold text-white text-right max-w-[60%]">{vehicle.specs.steering}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Braking System</span>
                      <span className="font-semibold text-white text-right max-w-[60%]">{vehicle.specs.brakes}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Suspension Type</span>
                      <span className="font-semibold text-white text-right max-w-[60%]">{vehicle.specs.suspension}</span>
                    </div>
                  </div>
                </div>

                {/* Weights & Dimensions */}
                <div className="bg-[#171a20] rounded-xl p-4 border border-stone-800 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono border-b border-stone-800 pb-2">
                    <Weight className="w-4 h-4" />
                    <span>Weights &amp; Capacities</span>
                  </div>
                  <div className="space-y-2 text-xs divide-y divide-stone-800/60">
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Gross Vehicle Weight (GVW)</span>
                      <span className="font-semibold text-amber-400">{vehicle.specs.gvw}</span>
                    </div>
                    {vehicle.specs.payload && (
                      <div className="flex justify-between py-1.5">
                        <span className="text-stone-400">Rated Payload</span>
                        <span className="font-semibold text-white">{vehicle.specs.payload}</span>
                      </div>
                    )}
                    {vehicle.specs.seatingCapacity && (
                      <div className="flex justify-between py-1.5">
                        <span className="text-stone-400">Seating Capacity</span>
                        <span className="font-semibold text-white">{vehicle.specs.seatingCapacity}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Fuel Tank Capacity</span>
                      <span className="font-semibold text-white">{vehicle.specs.fuelTank}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Tyre Specification</span>
                      <span className="font-semibold text-white">{vehicle.specs.tyres}</span>
                    </div>
                  </div>
                </div>

                {/* Dimensions & Bodies */}
                <div className="bg-[#171a20] rounded-xl p-4 border border-stone-800 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono border-b border-stone-800 pb-2">
                    <Layers className="w-4 h-4" />
                    <span>Dimensions &amp; Wheelbase</span>
                  </div>
                  <div className="space-y-2 text-xs divide-y divide-stone-800/60">
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Wheelbase</span>
                      <span className="font-semibold text-white">{vehicle.specs.wheelbase}</span>
                    </div>
                    {vehicle.specs.overallLength && (
                      <div className="flex justify-between py-1.5">
                        <span className="text-stone-400">Overall Vehicle Length</span>
                        <span className="font-semibold text-white">{vehicle.specs.overallLength}</span>
                      </div>
                    )}
                    {vehicle.specs.cargoDeckLength && (
                      <div className="flex justify-between py-1.5">
                        <span className="text-stone-400">Available Cargo Deck Options</span>
                        <span className="font-semibold text-white">{vehicle.specs.cargoDeckLength}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1.5">
                      <span className="text-stone-400">Top Speed Limit</span>
                      <span className="font-semibold text-white">{vehicle.specs.topSpeed || '80 km/h'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Commercial Applications */}
          {activeTab === 'applications' && (
            <div className="space-y-4">
              <p className="text-stone-300 text-sm">
                The {vehicle.name} is custom-engineered to excel across diverse high-intensity commercial duties. Designed with heavy-duty structural chassis cross-members, it readily accommodates multiple body configurations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {vehicle.applications.map((app, i) => (
                  <div key={i} className="bg-[#181c22] p-4 rounded-xl border border-stone-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-stone-200">{app}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Factory Approved Body Fabrication:</strong> Raoz Motors partners with certified body builders nationwide for High Side Deck (HSD), Drop Side Deck (DSD), Refrigerated Container, Insulated Van, and High-Roof Cabin fabrications with full ARAI compliance.
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: EMI & Loan Estimator */}
          {activeTab === 'calculator' && (
            <div className="bg-[#171a20] rounded-xl p-5 border border-stone-800 space-y-6">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div>
                  <h3 className="font-bold text-white text-base">Commercial Vehicle Loan &amp; EMI Estimator</h3>
                  <p className="text-xs text-stone-400">Calculate estimated monthly installments for {vehicle.name}</p>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-stone-400 font-mono">ESTIMATED EMI</div>
                  <div className="text-2xl font-black text-amber-400">₹ {monthlyEmi.toLocaleString('en-IN')}<span className="text-xs text-stone-300 font-normal"> / mo</span></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Down Payment Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-400 font-semibold">Down Payment ({downPaymentPercent}%)</span>
                    <span className="font-bold text-white">₹ {Math.round(basePriceRupees * (downPaymentPercent / 100)).toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500">
                    <span>10% Min</span>
                    <span>50% Max</span>
                  </div>
                </div>

                {/* Loan Tenure Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-400 font-semibold">Loan Tenure</span>
                    <span className="font-bold text-white">{tenureYears} Years ({tenureYears * 12} Mos)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500">
                    <span>1 Year</span>
                    <span>7 Years</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-400 font-semibold">Interest Rate (p.a.)</span>
                    <span className="font-bold text-white">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="14.0"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500">
                    <span>7.5%</span>
                    <span>14.0%</span>
                  </div>
                </div>
              </div>

              {/* Finance Tie-up Highlights */}
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-300">
                  <span className="font-bold text-white block">Pre-Approved Commercial Vehicle Financing Available</span>
                  Tie-ups with SBI, HDFC Bank, ICICI Bank, Tata Capital, Cholamandalam &amp; Sundaram Finance with up to 90% funding.
                </div>
                <button
                  onClick={() => onRequestQuote(vehicle)}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs whitespace-nowrap cursor-pointer"
                >
                  Apply For Finance
                </button>
              </div>
            </div>
          )}

          {/* Tab 4: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="bg-[#171a20] rounded-xl p-5 border border-stone-800 space-y-3">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider font-mono text-amber-400">
                  Engineering &amp; Design Architecture
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">{vehicle.overview}</p>
                <div className="border-t border-stone-800 pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-400">
                  <div>
                    <span className="text-white font-semibold block mb-0.5">Manufacturing Facility</span>
                    Produced at the 200-acre Asron plant with robotic Japanese spot welding and cathode electrodeposition rustproofing.
                  </div>
                  <div>
                    <span className="text-white font-semibold block mb-0.5">SML Saarthi Telematics</span>
                    Pre-equipped with 24x7 real-time CAN-bus GPS telemetry, geo-fencing, speed tracking, and fuel pilferage alert.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky Footer */}
        <div className="px-5 py-3 border-t border-stone-800 bg-[#16181d] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-400 hidden sm:block">
            Need urgent assistance? Call Raoz Motors Commercial Helpline: <span className="text-amber-400 font-bold">1800-419-7269 (Toll-Free)</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onRequestQuote(vehicle)}
              className="w-1/2 sm:w-auto px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-amber-500/20"
            >
              <span>Get Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
