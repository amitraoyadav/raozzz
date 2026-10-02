import React from 'react';
import { X, Download, Printer, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CommercialVehicle } from './types';

interface BrochureModalProps {
  vehicle: CommercialVehicle | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (vehicle: CommercialVehicle) => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  vehicle,
  isOpen,
  onClose,
  onRequestQuote
}) => {
  if (!isOpen || !vehicle) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      <div className="bg-white text-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Printable/Viewer Top Bar */}
        <div className="px-5 py-3.5 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase">
              Raoz Motors Official Technical Product Leaflet
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Brochure Document Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1 text-slate-800">
          {/* Header Brand */}
          <div className="flex items-start justify-between border-b-2 border-amber-500 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-slate-950">RAOZ MOTORS</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase font-mono">
                  Commercial Vehicles
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Swaraj Mazda &amp; Isuzu Commercial Vehicle Legacy · Engineering Excellence
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-slate-500">SPECIFICATION SHEET</span>
              <div className="text-sm font-black text-amber-600 font-mono mt-0.5">BS6 PHASE 2 OBD-2</div>
            </div>
          </div>

          {/* Vehicle Hero */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-700 uppercase bg-amber-50 px-2 py-0.5 rounded">
                {vehicle.subCategoryLabel}
              </span>
              <h2 className="text-3xl font-black text-slate-950">{vehicle.name}</h2>
              <p className="text-xs text-slate-600">{vehicle.tagline}</p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-800">
                  GVW: {vehicle.gvw}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-800">
                  Power: {vehicle.power.split('@')[0]}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-black">
                  {vehicle.startingPrice}
                </span>
              </div>
            </div>
            <div className="md:col-span-6 rounded-xl overflow-hidden border border-slate-200 aspect-[16/10]">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Technical Specs Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Standard Technical Data
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">ENGINE SPECIFICATION</span>
                <span className="font-bold text-slate-900">{vehicle.specs.engine}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">MAX TORQUE</span>
                <span className="font-bold text-slate-900">{vehicle.specs.maxTorque}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">GEARBOX / CLUTCH</span>
                <span className="font-bold text-slate-900">{vehicle.specs.transmission}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">WHEELBASE</span>
                <span className="font-bold text-slate-900">{vehicle.specs.wheelbase}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">BRAKES &amp; ABS</span>
                <span className="font-bold text-slate-900">{vehicle.specs.brakes}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">FUEL TANK CAPACITY</span>
                <span className="font-bold text-slate-900">{vehicle.specs.fuelTank}</span>
              </div>
            </div>
          </div>

          {/* Warranty & Telematics */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Raoz Motors Comprehensive Warranty:</strong> 3 Years / Unlimited Kilometres on Engine &amp; Gearbox driveline. Factory-fitted SML Saarthi IoT telematics for 24x7 real-time tracking, speed governing, and remote diagnostics.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            Toll-Free Helpline: 1800-419-7269 · raozmotors.com
          </div>
          <button
            onClick={() => { onClose(); onRequestQuote(vehicle); }}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs cursor-pointer shadow-md"
          >
            Get Fleet Quotation
          </button>
        </div>
      </div>
    </div>
  );
};
