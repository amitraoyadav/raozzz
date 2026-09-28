import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { CategoryReferenceItem, ReferenceSite, exportReferenceCsv } from '../../data/categories130Data';
import {
  Search,
  Upload,
  Download,
  RotateCcw,
  ExternalLink,
  Sparkles,
  Layers,
  Check,
  Globe,
  FileSpreadsheet,
  AlertCircle,
  X,
  Edit2,
  Wand2,
  ArrowRight
} from 'lucide-react';

interface CategoriesTabProps {
  onSelectCategory: (cat: string, referenceId?: string) => void;
}

export const CategoriesTab: React.FC<CategoriesTabProps> = ({ onSelectCategory }) => {
  const {
    categoryReferences,
    importReferencesFromCsv,
    updateCategoryReference,
    resetReferencesToDefault,
    websites
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [showImportModal, setShowImportModal] = useState<boolean>(false);
  const [importText, setImportText] = useState<string>('');
  const [importStatus, setImportStatus] = useState<{ count?: number; error?: string } | null>(null);
  const [editingCategory, setEditingCategory] = useState<CategoryReferenceItem | null>(null);

  // Extract distinct groups
  const groups = useMemo(() => {
    const set = new Set<string>();
    categoryReferences.forEach(c => set.add(c.group));
    return ['all', ...Array.from(set)];
  }, [categoryReferences]);

  // Filtered categories
  const filteredCategories = useMemo(() => {
    return categoryReferences.filter(cat => {
      const matchesGroup = selectedGroup === 'all' || cat.group === selectedGroup;
      const term = searchTerm.toLowerCase().trim();
      if (!term) return matchesGroup;

      const matchesName = cat.categoryName.toLowerCase().includes(term);
      const matchesGroupText = cat.group.toLowerCase().includes(term);
      const matchesFeatures = cat.featuresToStudy.toLowerCase().includes(term);
      const matchesRefs = cat.references.some(
        r => r.name.toLowerCase().includes(term) || r.url.toLowerCase().includes(term) || r.features.toLowerCase().includes(term)
      );

      return matchesGroup && (matchesName || matchesGroupText || matchesFeatures || matchesRefs);
    });
  }, [categoryReferences, selectedGroup, searchTerm]);

  // Export CSV
  const handleExportCsv = () => {
    const csvContent = exportReferenceCsv(categoryReferences);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `raositez-130-categories-references-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle file input upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = evt => {
      const text = evt.target?.result as string;
      if (text) {
        const res = importReferencesFromCsv(text);
        setImportStatus(res);
        if (!res.error) {
          setTimeout(() => {
            setShowImportModal(false);
            setImportStatus(null);
            setImportText('');
          }, 1500);
        }
      }
    };
    reader.readAsText(file);
  };

  // Handle manual text import submit
  const handleTextImport = () => {
    if (!importText.trim()) return;
    const res = importReferencesFromCsv(importText);
    setImportStatus(res);
    if (!res.error) {
      setTimeout(() => {
        setShowImportModal(false);
        setImportStatus(null);
        setImportText('');
      }, 1500);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Reference-Driven Architecture Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              130 Indian Business Categories & Reference Websites
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every business category features 3 authentic reference websites with curated visual archetypes, font pairings, and conversion layouts. Choose a reference site to drive the generated design.
            </p>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowImportModal(true)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Import CSV / Excel</span>
            </button>

            <button
              onClick={handleExportCsv}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Export 130 CSV</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm('Reset all categories and references to system defaults?')) {
                  resetReferencesToDefault();
                }
              }}
              title="Reset to original 130 references"
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Counter Pills */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
            <span className="text-indigo-400 font-bold text-sm">{categoryReferences.length}</span>
            <span>Business Categories</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
            <span className="text-emerald-400 font-bold text-sm">
              {categoryReferences.reduce((acc, c) => acc + c.references.length, 0)}
            </span>
            <span>Verified Reference Websites</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
            <span className="text-amber-400 font-bold text-sm">3 Archetypes</span>
            <span>Per Category (Flagship, Boutique, Rapid)</span>
          </div>
        </div>
      </div>

      {/* Search & Group Filters */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search category, domain, or feature..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-800">{filteredCategories.length}</strong> of{' '}
            <strong>{categoryReferences.length}</strong> categories
          </div>
        </div>

        {/* Group Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {groups.map(grp => (
            <button
              key={grp}
              onClick={() => setSelectedGroup(grp)}
              className={`px-3 py-1.5 rounded-xl font-semibold capitalize whitespace-nowrap transition-colors cursor-pointer ${
                selectedGroup === grp
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {grp === 'all' ? 'All Groups' : grp}
            </button>
          ))}
        </div>
      </div>

      {/* Categories & Reference Sites Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredCategories.map(cat => {
          const liveSitesInCat = websites.filter(w => w.category === cat.id).length;

          return (
            <div
              key={cat.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header & Badges */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {cat.group}
                      </span>
                      {liveSitesInCat > 0 && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                          {liveSitesInCat} Published Sites
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{cat.categoryName}</h3>
                  </div>

                  <button
                    onClick={() => setEditingCategory(cat)}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit reference links"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  <span className="font-semibold text-slate-700">Features to Study:</span> {cat.featuresToStudy}
                </p>

                {/* 3 Reference Sites Sub-Cards */}
                <div className="space-y-3 mb-5">
                  {cat.references.map((ref, idx) => (
                    <div
                      key={ref.id}
                      className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-bold text-xs text-slate-900 truncate">
                            {ref.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200/70 text-slate-700 shrink-0">
                            {ref.designSignature.vibeTag}
                          </span>
                        </div>

                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline shrink-0"
                        >
                          <span>Visit Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed mb-2.5">
                        {ref.features}
                      </p>

                      {/* Design Signature Preview Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400">Palette:</span>
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/10 inline-block shadow-2xs"
                            style={{ backgroundColor: ref.designSignature.palette.baseBg }}
                            title="Base Color"
                          />
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/10 inline-block shadow-2xs"
                            style={{ backgroundColor: ref.designSignature.palette.accentColor }}
                            title="Accent Color"
                          />
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/10 inline-block shadow-2xs"
                            style={{ backgroundColor: ref.designSignature.palette.secondaryAccent }}
                            title="Secondary Accent"
                          />
                        </div>

                        <div>
                          Font: <strong className="text-slate-700">{ref.designSignature.typography.fontPairingLabel}</strong>
                        </div>

                        <button
                          onClick={() => onSelectCategory(cat.id, ref.id)}
                          className="px-2 py-1 bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200 transition-colors cursor-pointer"
                        >
                          Use Style #{idx + 1}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  Slug: {cat.id}
                </span>

                <button
                  onClick={() => onSelectCategory(cat.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Build {cat.categoryName} Site</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSV Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-bold text-slate-900">Import Category Workbook (CSV)</h3>
              </div>
              <button
                onClick={() => {
                  setShowImportModal(false);
                  setImportStatus(null);
                }}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Upload your <strong>raositez-references.csv</strong> file or paste CSV text below. Expected columns:
              <br />
              <code className="text-[11px] font-mono bg-slate-100 px-1 py-0.5 rounded text-indigo-600">
                Category, Reference 1 Name, Reference 1 URL, Reference 2 Name, Reference 2 URL, Reference 3 Name, Reference 3 URL, Features to Study
              </code>
            </p>

            {/* File Upload Zone */}
            <div className="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-2xl p-6 text-center transition-colors bg-slate-50/50">
              <Upload className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700 mb-1">
                Drop your raositez-references.csv here
              </p>
              <p className="text-[11px] text-slate-400 mb-3">or click to browse from device</p>
              <input
                type="file"
                accept=".csv,text/csv"
                onChange={handleFileUpload}
                className="text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
              />
            </div>

            {/* Or Paste CSV text */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Or Paste Raw CSV Data:
              </label>
              <textarea
                rows={4}
                placeholder="Category,Reference 1 Name,Reference 1 URL,..."
                value={importText}
                onChange={e => setImportText(e.target.value)}
                className="w-full p-3 text-xs font-mono rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none bg-slate-50"
              />
            </div>

            {/* Status message */}
            {importStatus && (
              <div
                className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  importStatus.error
                    ? 'bg-rose-50 text-rose-800 border border-rose-200'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}
              >
                {importStatus.error ? (
                  <>
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{importStatus.error}</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Successfully imported {importStatus.count} categories and reference sites!</span>
                  </>
                )}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  setShowImportModal(false);
                  setImportStatus(null);
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleTextImport}
                disabled={!importText.trim()}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                Parse & Import
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {editingCategory && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Edit Reference Websites: {editingCategory.categoryName}
                </h3>
                <p className="text-xs text-slate-500">Group: {editingCategory.group}</p>
              </div>
              <button
                onClick={() => setEditingCategory(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Features to Study
              </label>
              <textarea
                rows={2}
                value={editingCategory.featuresToStudy}
                onChange={e =>
                  setEditingCategory({
                    ...editingCategory,
                    featuresToStudy: e.target.value
                  })
                }
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {editingCategory.references.map((ref, idx) => (
              <div key={ref.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2.5">
                <span className="text-xs font-bold text-indigo-700">Reference #{idx + 1}</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Name</label>
                    <input
                      type="text"
                      value={ref.name}
                      onChange={e => {
                        const updatedRefs = [...editingCategory.references] as [ReferenceSite, ReferenceSite, ReferenceSite];
                        updatedRefs[idx] = { ...updatedRefs[idx], name: e.target.value };
                        setEditingCategory({ ...editingCategory, references: updatedRefs });
                      }}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Website URL</label>
                    <input
                      type="text"
                      value={ref.url}
                      onChange={e => {
                        const updatedRefs = [...editingCategory.references] as [ReferenceSite, ReferenceSite, ReferenceSite];
                        updatedRefs[idx] = { ...updatedRefs[idx], url: e.target.value };
                        setEditingCategory({ ...editingCategory, references: updatedRefs });
                      }}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Feature Notes</label>
                  <input
                    type="text"
                    value={ref.features}
                    onChange={e => {
                      const updatedRefs = [...editingCategory.references] as [ReferenceSite, ReferenceSite, ReferenceSite];
                      updatedRefs[idx] = { ...updatedRefs[idx], features: e.target.value };
                      setEditingCategory({ ...editingCategory, references: updatedRefs });
                    }}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                  />
                </div>
              </div>
            ))}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setEditingCategory(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  updateCategoryReference(editingCategory.id, editingCategory);
                  setEditingCategory(null);
                }}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
