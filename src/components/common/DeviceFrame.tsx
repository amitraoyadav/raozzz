import React from 'react';
import { Monitor, Tablet, Smartphone, ExternalLink, RotateCcw } from 'lucide-react';

interface DeviceFrameProps {
  mode: 'desktop' | 'tablet' | 'mobile';
  onModeChange: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  siteSlug: string;
  businessName: string;
  children: React.ReactNode;
  onOpenNewTab?: () => void;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  mode,
  onModeChange,
  siteSlug,
  businessName,
  children,
  onOpenNewTab
}) => {
  return (
    <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Device Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="font-medium text-slate-300 hidden sm:inline">{businessName}</span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 text-[11px] truncate max-w-[200px] sm:max-w-[320px]">
            raositez.in/{siteSlug}
          </span>
        </div>

        {/* Viewport switchers */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => onModeChange('desktop')}
            title="Desktop View (Full Width)"
            aria-label="Desktop View"
            className={`min-h-[36px] min-w-[36px] p-2 flex items-center justify-center rounded-md transition-colors cursor-pointer ${
              mode === 'desktop' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => onModeChange('tablet')}
            title="Tablet View (768px)"
            aria-label="Tablet View"
            className={`min-h-[36px] min-w-[36px] p-2 flex items-center justify-center rounded-md transition-colors cursor-pointer ${
              mode === 'tablet' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => onModeChange('mobile')}
            title="Mobile View (375px)"
            aria-label="Mobile View"
            className={`min-h-[36px] min-w-[36px] p-2 flex items-center justify-center rounded-md transition-colors cursor-pointer ${
              mode === 'mobile' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Actions */}
        {onOpenNewTab && (
          <button
            onClick={onOpenNewTab}
            className="flex items-center gap-1 px-2.5 py-1 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Open Live</span>
          </button>
        )}
      </div>

      {/* Frame Container */}
      <div className="flex-1 bg-slate-950/80 overflow-y-auto p-1.5 sm:p-4 flex justify-center items-start">
        <div
          className={`transition-all duration-300 bg-white text-slate-900 rounded-xl overflow-hidden shadow-2xl max-w-full ${
            mode === 'desktop'
              ? 'w-full min-h-[500px] sm:min-h-[680px]'
              : mode === 'tablet'
              ? 'w-[768px] min-h-[600px] sm:min-h-[800px] border-2 sm:border-4 border-slate-800 rounded-2xl'
              : 'w-[390px] min-h-[500px] sm:min-h-[780px] border-2 sm:border-[6px] border-slate-800 rounded-2xl sm:rounded-3xl'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
