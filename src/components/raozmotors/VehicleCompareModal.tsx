import React, { useState } from 'react';
import { X, Check, Layers, ArrowRight } from 'lucide-react';
import { CommercialVehicle } from './types';
import { ALL_COMMERCIAL_VEHICLES } from './vehicleData';

interface VehicleCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: CommercialVehicle | null;
  onRequestQuote: (vehicle: CommercialVehicle) => void;
}

export const VehicleCompareModal: React.FC<VehicleCompareModalProps> = ({
  isOpen,
  onClose,
  initialVehicle,
  onRequestQuote
}) => {
  const [vehicle1Id, setVehicle1Id] = useState<string>(initialVehicle ? initialVehicle.id : ALL_COMMERCIAL_VEHICLES[0].id);
  const [vehicle2Id, setVehicle2Id] = useState<string>(ALL_COMMERCIAL_VEHICLES[3].id);

  if (!isOpen) return null;

  const v1 = ALL_COMMERCIAL_VEHICLES.find(v => v.id === vehicle1Id) || ALL_COMMERCIAL_VEHICLES[0];
  const v2 = ALL_COMMERCIAL_VEHICLES.find(v => v.id === vehicle2Id) || ALL_COMMERCIAL_VEHICLES[1];

  const compareRows = [
    { label: 'Category & Segment', v1: v1.subCategoryLabel, v2: v2.subCategoryLabel },
    { label: 'Starting Price (Ex-Showroom)', v1: v1.startingPrice, v2: v2.startingPrice, highlight: true },
    { label: 'Gross Vehicle Weight (GVW)', v1: v1.gvw, v2: v2.gvw },
    { label: 'Payload / Seating', v1: v1.seatingOrPayload, v2: v2.seatingOrPayload },
    { label: 'Engine', v1: v1.specs.engine, v2: v2.specs.engine },
    { label: 'Max Power', v1: v1.specs.maxPower, v2: v2.specs.maxPower },
    { label: 'Max Torque', v1: v1.specs.maxTorque, v2: v2.specs.maxTorque },
    { label: 'Fuel Type & Norms', v1: `${v1.fuelType} · ${v1.specs.emissionNorms}`, v2: `${v2.fuelType} · ${v2.specs.emissionNorms}` },
    { label: 'Transmission', v1: v1.specs.transmission, v2: v2.specs.transmission },
    { label: 'Brakes', v1: v1.specs.brakes, v2: v2.specs.brakes },
    { label: 'Wheelbase', v1: v1.specs.wheelbase, v2: v2.specs.wheelbase },
    { label: 'Cargo Deck / Body Option', v1: v1.specs.cargoDeckLength || v1.specs.seatingCapacity || 'Custom', v2: v2.specs.cargoDeckLength || v2.specs.seatingCapacity || 'Custom' },
    { label: 'Fuel Tank', v1: v1.specs.fuelTank, v2: v2.specs.fuelTank }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-[#13161a] text-white w-full max-w-4xl rounded-2xl border border-stone-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-800 bg-[#191d24] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-white text-base tracking-tight">Commercial Vehicle Model Comparison</h3>
              <p className="text-[11px] text-stone-400">Side-by-side technical and commercial evaluation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-6">
          {/* Selectors */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 bg-[#181c22] p-4 rounded-xl border border-stone-800">
              <label className="text-xs font-mono font-bold text-amber-400 uppercase">Vehicle 1</label>
              <select
                value={vehicle1Id}
                onChange={(e) => setVehicle1Id(e.target.value)}
                className="w-full bg-[#121417] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white"
              >
                {ALL_COMMERCIAL_VEHICLES.map(v => (
                  <option key={v.id} value={v.id}>{v.name} ({v.gvw})</option>
                ))}
              </select>
              <div className="aspect-[16/9] rounded-lg overflow-hidden border border-stone-800 mt-2">
                <img src={v1.image} alt={v1.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-black text-white text-sm">{v1.name}</span>
                <span className="font-bold text-amber-400 text-xs">{v1.startingPrice}</span>
              </div>
              <button
                onClick={() => { onClose(); onRequestQuote(v1); }}
                className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs cursor-pointer"
              >
                Quote for {v1.name}
              </button>
            </div>

            <div className="space-y-2 bg-[#181c22] p-4 rounded-xl border border-stone-800">
              <label className="text-xs font-mono font-bold text-amber-400 uppercase">Vehicle 2</label>
              <select
                value={vehicle2Id}
                onChange={(e) => setVehicle2Id(e.target.value)}
                className="w-full bg-[#121417] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white"
              >
                {ALL_COMMERCIAL_VEHICLES.map(v => (
                  <option key={v.id} value={v.id}>{v.name} ({v.gvw})</option>
                ))}
              </select>
              <div className="aspect-[16/9] rounded-lg overflow-hidden border border-stone-800 mt-2">
                <img src={v2.image} alt={v2.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-black text-white text-sm">{v2.name}</span>
                <span className="font-bold text-amber-400 text-xs">{v2.startingPrice}</span>
              </div>
              <button
                onClick={() => { onClose(); onRequestQuote(v2); }}
                className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs cursor-pointer"
              >
                Quote for {v2.name}
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="rounded-xl border border-stone-800 overflow-hidden">
            <table className="w-full text-left text-xs divide-y divide-stone-800">
              <thead className="bg-[#1a1e24] text-stone-400 font-mono uppercase">
                <tr>
                  <th className="p-3 w-1/3">Specification Feature</th>
                  <th className="p-3 w-1/3 text-amber-400">{v1.name}</th>
                  <th className="p-3 w-1/3 text-amber-400">{v2.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 bg-[#15181d]">
                {compareRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#15181d]' : 'bg-[#181c22]'}>
                    <td className="p-3 font-medium text-stone-400">{row.label}</td>
                    <td className={`p-3 ${row.highlight ? 'font-black text-amber-400 text-sm' : 'text-stone-200'}`}>
                      {row.v1}
                    </td>
                    <td className={`p-3 ${row.highlight ? 'font-black text-amber-400 text-sm' : 'text-stone-200'}`}>
                      {row.v2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-stone-800 bg-[#16181d] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold transition-colors cursor-pointer"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
