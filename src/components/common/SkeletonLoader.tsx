import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[#E8E7F0] shadow-xs animate-pulse space-y-4">
      <div className="aspect-16/10 rounded-xl bg-slate-200" />
      <div className="space-y-2">
        <div className="h-4 bg-slate-200 rounded w-3/4" />
        <div className="h-3 bg-slate-100 rounded w-1/2" />
      </div>
      <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
        <div className="h-5 bg-slate-200 rounded w-20" />
        <div className="h-4 bg-slate-200 rounded w-16" />
      </div>
    </div>
  );
};

export const SkeletonTable: React.FC<{ rows?: number }> = ({ rows = 4 }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E7F0] overflow-hidden animate-pulse">
      <div className="p-4 bg-slate-100 border-b border-slate-200 h-10 w-full" />
      <div className="divide-y divide-slate-100">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="p-4 flex items-center justify-between gap-4">
            <div className="h-4 bg-slate-200 rounded w-1/3" />
            <div className="h-4 bg-slate-100 rounded w-1/4" />
            <div className="h-4 bg-slate-200 rounded w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};
