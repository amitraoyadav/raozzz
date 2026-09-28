import React, { useState } from 'react';
import { TEMPLATES } from '../../data/templateDefs';
import { Palette, Check, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { TemplateDefinition } from '../../types';

export const TemplatesTab: React.FC<{ onCreateWithTemplate: (templateId: string) => void }> = ({ onCreateWithTemplate }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filtered = selectedCat === 'all'
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === selectedCat);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Website Design Templates</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Engineered layouts with distinct font pairings, color palettes, and component dynamics
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-1.5">
          {['all', 'cafe', 'clinic', 'salon', 'retail', 'gym', 'coaching'].map(c => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                selectedCat === c
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c === 'all' ? 'All Templates' : c}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(tmpl => (
          <div
            key={tmpl.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <img
                  src={tmpl.thumbnail}
                  alt={tmpl.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white text-slate-900 shadow-xs">
                    {tmpl.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-bold text-sm">{tmpl.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5">
                    <span
                      className="w-3 h-3 rounded-full inline-block border border-white"
                      style={{ backgroundColor: tmpl.themeColor }}
                    />
                    <span>{tmpl.style}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tmpl.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                  <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    Font: {tmpl.fontFamily}
                  </span>
                  <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    Vibe: {tmpl.vibe}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onCreateWithTemplate(tmpl.id)}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Use This Template</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
