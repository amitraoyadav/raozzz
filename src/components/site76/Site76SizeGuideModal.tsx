import React, { useState } from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';

interface Site76SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Site76SizeGuideModal: React.FC<Site76SizeGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  const [genderTab, setGenderTab] = useState<'women' | 'men'>('women');

  if (!isOpen) return null;

  const womenMeasurementsInches = [
    { size: 'XS', bust: '34', waist: '28', hip: '38', length: '46' },
    { size: 'S', bust: '36', waist: '30', hip: '40', length: '46.5' },
    { size: 'M', bust: '38', waist: '32', hip: '42', length: '47' },
    { size: 'L', bust: '40', waist: '34', hip: '44', length: '47.5' },
    { size: 'XL', bust: '42', waist: '36', hip: '46', length: '48' },
    { size: 'XXL', bust: '44', waist: '38', hip: '48', length: '48.5' }
  ];

  const menMeasurementsInches = [
    { size: 'S', chest: '38', shoulder: '17.5', waist: '32', length: '30' },
    { size: 'M', chest: '40', shoulder: '18', waist: '34', length: '30.5' },
    { size: 'L', chest: '42', shoulder: '18.5', waist: '36', length: '31' },
    { size: 'XL', chest: '44', shoulder: '19', waist: '38', length: '31.5' },
    { size: 'XXL', chest: '46', shoulder: '19.5', waist: '40', length: '32' }
  ];

  // Helper converter
  const toCm = (val: string) => Math.round(parseFloat(val) * 2.54);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FDFBF7] rounded-3xl max-w-2xl w-full border border-[#E8E1D5] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E1D5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#C16A52]" />
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">
              Natural Fit &amp; Size Guide
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#6F736D] hover:text-[#1E1F21] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Toggles: Gender + Unit */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex p-1 bg-[#F5EFEB] rounded-xl border border-[#E8E1D5] text-xs font-semibold uppercase">
              <button
                type="button"
                onClick={() => setGenderTab('women')}
                className={`px-4 py-1.5 rounded-lg transition-colors ${genderTab === 'women' ? 'bg-[#263422] text-white' : 'text-[#544133]'}`}
              >
                Women's Silhouettes
              </button>
              <button
                type="button"
                onClick={() => setGenderTab('men')}
                className={`px-4 py-1.5 rounded-lg transition-colors ${genderTab === 'men' ? 'bg-[#263422] text-white' : 'text-[#544133]'}`}
              >
                Men's Silhouettes
              </button>
            </div>

            <div className="flex p-1 bg-[#F5EFEB] rounded-xl border border-[#E8E1D5] text-xs font-semibold font-mono">
              <button
                type="button"
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 rounded-lg ${unit === 'inches' ? 'bg-white text-[#1E1F21] shadow-xs' : 'text-[#6F736D]'}`}
              >
                Inches (in)
              </button>
              <button
                type="button"
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 rounded-lg ${unit === 'cm' ? 'bg-white text-[#1E1F21] shadow-xs' : 'text-[#6F736D]'}`}
              >
                Centimetres (cm)
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="border border-[#E8E1D5] rounded-xl overflow-hidden bg-white shadow-xs">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#F5EFEB] border-b border-[#E8E1D5] text-[#1E1F21] uppercase tracking-wider font-semibold font-mono">
                <tr>
                  <th className="p-3">Size</th>
                  <th className="p-3">{genderTab === 'women' ? 'Bust' : 'Chest'}</th>
                  {genderTab === 'men' && <th className="p-3">Shoulder</th>}
                  <th className="p-3">Waist</th>
                  {genderTab === 'women' && <th className="p-3">Hip</th>}
                  <th className="p-3">Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E1D5] font-mono text-[#544133]">
                {genderTab === 'women' ? (
                  womenMeasurementsInches.map(row => (
                    <tr key={row.size} className="hover:bg-[#FDFBF7]">
                      <td className="p-3 font-bold text-[#1E1F21]">{row.size}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.bust}"` : `${toCm(row.bust)} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.waist}"` : `${toCm(row.waist)} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.hip}"` : `${toCm(row.hip)} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.length}"` : `${toCm(row.length)} cm`}</td>
                    </tr>
                  ))
                ) : (
                  menMeasurementsInches.map(row => (
                    <tr key={row.size} className="hover:bg-[#FDFBF7]">
                      <td className="p-3 font-bold text-[#1E1F21]">{row.size}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.chest}"` : `${toCm(row.chest)} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.shoulder}"` : `${toCm(row.shoulder)} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.waist}"` : `${toCm(row.waist)} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${row.length}"` : `${toCm(row.length)} cm`}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Handloom Tailoring Note */}
          <div className="bg-[#F5EFEB] p-4 rounded-xl border border-[#D5C7B5] space-y-1.5 text-xs text-[#544133]">
            <div className="flex items-center gap-1.5 font-semibold text-[#1E1F21]">
              <CheckCircle2 className="w-4 h-4 text-[#586737]" />
              <span>Generous Handloom Seam Allowance:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Every Aranya Earth garment includes an internal 1.5-inch hidden side seam allowance. If you ever wish to expand or cinch the fit, your local neighborhood tailor can adjust it in minutes without altering the silhouette.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
