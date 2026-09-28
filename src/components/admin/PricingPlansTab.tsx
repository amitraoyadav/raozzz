import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PricingPlan } from '../../types';
import { IndianRupee, Save, Plus, Trash2, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';

export const PricingPlansTab: React.FC = () => {
  const { pricingPlans, updatePricingPlan } = useApp();
  const [plans, setPlans] = useState<PricingPlan[]>(pricingPlans);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  const handlePriceChange = (id: string, price: number) => {
    setPlans(prev => prev.map(p => (p.id === id ? { ...p, price } : p)));
  };

  const handleNameChange = (id: string, name: string) => {
    setPlans(prev => prev.map(p => (p.id === id ? { ...p, name } : p)));
  };

  const handleDescriptionChange = (id: string, description: string) => {
    setPlans(prev => prev.map(p => (p.id === id ? { ...p, description } : p)));
  };

  const handleTimelineChange = (id: string, timeline: string) => {
    setPlans(prev => prev.map(p => (p.id === id ? { ...p, timeline } : p)));
  };

  const handleTogglePopular = (id: string) => {
    setPlans(prev => prev.map(p => (p.id === id ? { ...p, popular: !p.popular } : p)));
  };

  const handleSave = async (plan: PricingPlan) => {
    await updatePricingPlan(plan);
    setSaveSuccess(plan.id);
    setTimeout(() => setSaveSuccess(null), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">RaoSitez Pricing Packages</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Modify client pricing rates (₹999, ₹1,499, ₹1,999) and features displayed on the main homepage
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Real-time sync to homepage</span>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map(plan => {
          const isSaved = saveSuccess === plan.id;

          return (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                plan.popular ? 'border-indigo-500 ring-2 ring-indigo-100 shadow-lg' : 'border-slate-200 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase">
                    Package ID: {plan.id}
                  </span>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={Boolean(plan.popular)}
                      onChange={() => handleTogglePopular(plan.id)}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Highlight as Popular</span>
                  </label>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Plan Display Title
                  </label>
                  <input
                    type="text"
                    value={plan.name}
                    onChange={e => handleNameChange(plan.id, e.target.value)}
                    className="w-full px-3 py-2 text-xs font-bold text-slate-900 rounded-xl border border-slate-200 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Price in Indian Rupees (₹)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={plan.price}
                      onChange={e => handlePriceChange(plan.id, Number(e.target.value))}
                      className="w-full pl-7 pr-3 py-2 text-sm font-extrabold text-slate-900 rounded-xl border border-slate-200 bg-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Delivery Speed Tagline
                  </label>
                  <input
                    type="text"
                    value={plan.timeline}
                    onChange={e => handleTimelineChange(plan.id, e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Target Business Pitch
                  </label>
                  <textarea
                    rows={2}
                    value={plan.description}
                    onChange={e => handleDescriptionChange(plan.id, e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-2">
                    Features List ({plan.features.length})
                  </label>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={feat}
                          onChange={e => {
                            const updated = [...plan.features];
                            updated[fIdx] = e.target.value;
                            setPlans(prev => prev.map(p => (p.id === plan.id ? { ...p, features: updated } : p)));
                          }}
                          className="flex-1 px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-white text-slate-700"
                        />
                        <button
                          onClick={() => {
                            const updated = plan.features.filter((_, i) => i !== fIdx);
                            setPlans(prev => prev.map(p => (p.id === plan.id ? { ...p, features: updated } : p)));
                          }}
                          className="p-1 text-slate-400 hover:text-rose-500 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      const updated = [...plan.features, 'New feature perk'];
                      setPlans(prev => prev.map(p => (p.id === plan.id ? { ...p, features: updated } : p)));
                    }}
                    className="mt-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Feature Perk
                  </button>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 mt-5">
                <button
                  onClick={() => handleSave(plan)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSaved
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {isSaved ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                  {isSaved ? 'Price Saved & Synced!' : `Save ${plan.name}`}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
