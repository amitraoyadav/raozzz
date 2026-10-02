import React, { useState } from 'react';
import { X, Search, MapPin, Star, Building2, ExternalLink } from 'lucide-react';
import { DW_RESORTS, DWResort } from './destinationWeddingsData';

interface ResortSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResort: (resort: DWResort) => void;
}

export const ResortSearchModal: React.FC<ResortSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResort
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredResorts = DW_RESORTS.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase()) ||
    r.location.toLowerCase().includes(query.toLowerCase()) ||
    r.country.toLowerCase().includes(query.toLowerCase()) ||
    r.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-20 overflow-y-auto">
      <div className="bg-[#1b1e24] text-white border border-[#2e3440] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search bar header */}
        <div className="p-4 border-b border-stone-800 bg-[#242832] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#b3275a] shrink-0" />
          <input
            type="search"
            placeholder="Search for hotels and resorts by name, destination, or brand..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-stone-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-1">
            Matching Resorts ({filteredResorts.length})
          </div>

          {filteredResorts.map((resort) => (
            <div
              key={resort.id}
              onClick={() => {
                onSelectResort(resort);
                onClose();
              }}
              className="p-3.5 rounded-xl bg-[#20242d] hover:bg-[#282d38] border border-stone-800 hover:border-[#b3275a]/50 flex items-center gap-4 cursor-pointer transition-colors group"
            >
              <img
                src={resort.image}
                alt={resort.name}
                className="w-16 h-16 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#b3275a]/20 text-[#f76d9e]">
                    {resort.category}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{resort.rating}</span>
                  </div>
                </div>

                <h4 className="font-bold text-sm text-white group-hover:text-[#f76d9e] transition-colors truncate mt-1">
                  {resort.name}
                </h4>

                <div className="flex items-center gap-2 text-xs text-stone-400 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#b3275a]" />
                  <span>{resort.location}, {resort.country}</span>
                  <span>&bull;</span>
                  <span className="text-stone-300 font-semibold">{resort.startingPrice}</span>
                </div>
              </div>

              <div className="hidden sm:block text-right shrink-0">
                <span className="px-3 py-1.5 rounded-lg bg-stone-800 group-hover:bg-[#b3275a] text-white text-xs font-bold transition-colors">
                  View Resort &rarr;
                </span>
              </div>
            </div>
          ))}

          {filteredResorts.length === 0 && (
            <div className="text-center py-10 text-stone-400 text-xs">
              No resorts found matching &ldquo;{query}&rdquo;. Try &ldquo;Dreams&rdquo;, &ldquo;Hard Rock&rdquo;, &ldquo;Cancun&rdquo;, or &ldquo;Jamaica&rdquo;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
