import React, { useState } from 'react';
import { BusinessWebsite } from '../../types';
import { getCategoryToken } from '../../data/categoryDesignTokens';
import {
  Tag,
  Palette,
  Type,
  ShoppingCart,
  MapPin,
  ExternalLink,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface SiteTagTableProps {
  site: BusinessWebsite;
  initiallyExpanded?: boolean;
}

export const SiteTagTable: React.FC<SiteTagTableProps> = ({ site, initiallyExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(initiallyExpanded);
  const token = getCategoryToken(site.category);

  const siteType = site.siteTypeTag || `${token.name} (${token.taglineVibe})`;
  const inspiration = site.dribbbleInspiration || (site.slug.includes('dribbble') || ['botanica-greenhouse-cafe', 'vinyl-attic-jazz-cafe', 'neon-grind-coworking-cafe', 'maison-sucre-french-cafe', 'brewcraft-taproom-cafe', 'petal-pour-floral-cafe'].includes(site.slug) ? 'Dribbble Cafe Trends Curated Concept' : 'Indian Local Business Landmark Workflow');
  const commerceModel = site.tradeModel || (site.bookingType === 'whatsapp_order' ? 'Direct WhatsApp Ordering & Price List' : site.bookingType === 'appointment_slot' ? 'Timed Appointment Slot Scheduling' : site.bookingType === 'pickup_drop' ? 'Doorstep Device / Laundry Pickup & Drop' : 'Table Reservation & Party Booking');

  return (
    <div className="my-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-['Inter']">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all">
        {/* Table Header Bar */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-5 py-4 bg-slate-50 hover:bg-slate-100/80 cursor-pointer flex items-center justify-between border-b border-slate-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 font-mono">
                  Site Architecture & Type Specs
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  {site.category.toUpperCase()}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                {siteType}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500 hidden sm:inline">
              {isExpanded ? 'Hide Specs' : 'Show Full Tag Table'}
            </span>
            <button className="p-1 rounded-md text-slate-400 hover:text-slate-700">
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Collapsible Table Content */}
        {isExpanded && (
          <div className="p-5 sm:p-6 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="pb-3 pr-4 font-semibold w-1/4">Specification Tag</th>
                  <th className="pb-3 px-4 font-semibold w-2/5">Configured Value</th>
                  <th className="pb-3 pl-4 font-semibold w-1/3">Design & Operational Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* 1. Site Type Tag */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-slate-700 flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Site Archetype Type</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                      <Sparkles className="w-3 h-3 text-indigo-600" />
                      {siteType}
                    </span>
                  </td>
                  <td className="py-3 pl-4 text-slate-500 text-[11px] leading-relaxed">
                    Defines the specific business sub-genre and user journey for {site.businessName}.
                  </td>
                </tr>

                {/* 2. Dribbble / Industry Reference */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-slate-700 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Design Inspiration</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-slate-800">
                      {inspiration}
                    </span>
                  </td>
                  <td className="py-3 pl-4 text-slate-500 text-[11px] leading-relaxed">
                    Visual styling inspired by modern Dribbble cafe & e-commerce trends rather than generic SaaS templates.
                  </td>
                </tr>

                {/* 3. Color Tokens & Swatches */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-slate-700 flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Color Palette Tokens</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0 shadow-2xs"
                          style={{ backgroundColor: token.baseBg }}
                        />
                        <span className="font-mono text-[10px] text-slate-700">Base: {token.baseBg}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0 shadow-2xs"
                          style={{ backgroundColor: site.primaryColor || token.accentColor }}
                        />
                        <span className="font-mono text-[10px] text-slate-700">Accent: {site.primaryColor || token.accentColor}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0 shadow-2xs"
                          style={{ backgroundColor: token.surfaceBg }}
                        />
                        <span className="font-mono text-[10px] text-slate-700">Surface: {token.surfaceBg}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pl-4 text-slate-500 text-[11px] leading-relaxed">
                    Saturated base with single deliberate accent. High contrast, zero muddy gray-on-gray.
                  </td>
                </tr>

                {/* 4. Font Pairing */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-slate-700 flex items-center gap-2">
                    <Type className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Typography Pairing</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-800">
                      <span>Headlines: </span>
                      <span className="font-mono font-bold text-indigo-700">{site.fontFamily || token.headlineFont}</span>
                      <span className="text-slate-400"> + </span>
                      <span>Body: </span>
                      <span className="font-mono text-slate-600">{token.bodyFont}</span>
                    </div>
                  </td>
                  <td className="py-3 pl-4 text-slate-500 text-[11px] leading-relaxed">
                    Distinct characterful display typeface for titles paired with highly readable functional UI sans.
                  </td>
                </tr>

                {/* 5. Commerce & Booking Model */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-slate-700 flex items-center gap-2">
                    <ShoppingCart className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Commerce & Booking Model</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-slate-800 block">
                      {commerceModel}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-mono">
                      CTA: "{site.bookingCtaLabel}"
                    </span>
                  </td>
                  <td className="py-3 pl-4 text-slate-500 text-[11px] leading-relaxed">
                    Eliminates slow carts with direct 1-tap conversion to WhatsApp or reservation slot.
                  </td>
                </tr>

                {/* 6. Service Radius / City Scope */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-slate-700 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Location & Service Scope</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-800">
                      {site.city || site.address}
                    </div>
                    {site.deliveryRadius && (
                      <span className="text-[10px] text-amber-700 font-medium">
                        Radius: {site.deliveryRadius}
                      </span>
                    )}
                  </td>
                  <td className="py-3 pl-4 text-slate-500 text-[11px] leading-relaxed">
                    Targeted local geo-presence with Google Maps directions embed.
                  </td>
                </tr>

                {/* 7. Platform Features Enabled */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Turnkey Features</span>
                  </td>
                  <td className="py-3 px-4" colSpan={2}>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
                        ✓ 1-Tap WhatsApp Lead Forwarding
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-semibold">
                        ✓ PWA Add to Home Screen App
                      </span>
                      <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 text-[10px] font-semibold">
                        ✓ Counter Standee QR Code
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-semibold">
                        ✓ Schema.org LocalBusiness JSON-LD
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-semibold">
                        ✓ Flat ₹999 Turnkey Hosting
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
