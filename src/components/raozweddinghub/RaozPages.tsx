import React, { useState } from 'react';
import {
  Calendar, Users, DollarSign, Heart, MapPin, Globe, CheckCircle2, ChevronRight,
  Plane, Clock, Sparkles, Filter, Music, ArrowRight, Utensils, Bed, ShieldCheck,
  Download, ExternalLink, HelpCircle, Check, Compass, MessageCircle, AlertCircle
} from 'lucide-react';
import { raozWeddingHubConfig } from '../../config/raozWeddingHubConfig';
import {
  SAMPLE_SCHEDULE, SAMPLE_GUESTS, SAMPLE_BUDGET, DESTINATION_GUIDES,
  FAQS_DATA, PLANNER_PHASES, ScheduleEvent, GuestItem, BudgetItem, DestinationGuide
} from '../../data/raozWeddingHubData';

// ==========================================
// 1. COUPLES DESTINATION PAGE (RAOZ AFAR)
// ==========================================
export const CouplesDestinationPage: React.FC<{
  onStartPlanning: () => void;
  currency: string;
}> = ({ onStartPlanning, currency }) => {
  const [activeDashboardTab, setActiveDashboardTab] = useState<'schedule' | 'guests' | 'budget' | 'seating' | 'vision'>('schedule');
  const [guestFilter, setGuestFilter] = useState<'All' | 'Attending' | 'Awaiting' | 'Declined'>('All');
  const [guests, setGuests] = useState<GuestItem[]>(SAMPLE_GUESTS);
  const [schedule, setSchedule] = useState<ScheduleEvent[]>(SAMPLE_SCHEDULE);
  const [budget, setBudget] = useState<BudgetItem[]>(SAMPLE_BUDGET);

  const currentCurr = raozWeddingHubConfig.CURRENCIES.find(c => c.code === currency) || raozWeddingHubConfig.CURRENCIES[0];

  const filteredGuests = guests.filter(g => {
    if (guestFilter === 'All') return true;
    return g.rsvpStatus === guestFilter;
  });

  const totalBudgetEst = budget.reduce((acc, b) => acc + b.estimatedCost, 0);
  const totalBudgetPaid = budget.reduce((acc, b) => acc + b.paidAmount, 0);

  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            Raoz Afar · Destination Weddings
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl text-[#1F1B16] mt-2 text-balance leading-tight">
            A calm digital home for your 3–5 day celebration.
          </h1>
          <p className="text-base sm:text-lg text-[#6B6155] mt-4 leading-relaxed">
            From multi-day itineraries and flight tracking to multi-currency budget buffers and room block allocations. Designed for couples marrying far from home.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onStartPlanning}
              className="inline-flex items-center gap-2 rounded-full bg-[#4A5847] hover:bg-[#394437] text-white px-5 py-2.5 text-xs font-semibold shadow-xs"
            >
              <span>Get your couple hub ({currentCurr.symbol}{currentCurr.couplePrice} one-time)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-xs text-[#8A7B6E]">Zero monthly subscriptions</span>
          </div>
        </div>

        {/* Live Interactive Couple Dashboard Simulator */}
        <div className="bg-white rounded-3xl border border-[#E8DFD3] shadow-lg overflow-hidden">
          {/* Dashboard Header Bar */}
          <div className="bg-[#FAF8F5] border-b border-[#E8DFD3] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FAF2ED] text-[#A85C3D] flex items-center justify-center font-serif font-bold text-sm">
                M&amp;D
              </div>
              <div>
                <h3 className="font-serif font-medium text-base text-[#1F1B16]">Maya &amp; David’s Wedding Chapter</h3>
                <span className="text-xs text-[#7A6E62]">18–21 June 2026 · Villa Rosa, Tuscany, Italy</span>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="flex items-center gap-1 bg-[#EFE8DE] p-1 rounded-xl overflow-x-auto max-w-full">
              {[
                { key: 'schedule', label: 'Multi-Day Schedule', icon: Calendar },
                { key: 'guests', label: 'Guest & Flight Tracker', icon: Users },
                { key: 'budget', label: 'Currency Budget', icon: DollarSign },
                { key: 'seating', label: 'Seating Chart', icon: Utensils },
                { key: 'vision', label: 'Vision Board', icon: Sparkles }
              ].map(tab => {
                const Icon = tab.icon;
                const isActive = activeDashboardTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveDashboardTab(tab.key as any)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      isActive ? 'bg-white text-[#1F1B16] shadow-2xs font-semibold' : 'text-[#6B6155] hover:text-[#1F1B16]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab 1: Schedule View */}
          {activeDashboardTab === 'schedule' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-medium text-xl text-[#1F1B16]">Multi-Day Itinerary</h4>
                  <p className="text-xs text-[#6B6155]">All events sync directly to your guests’ multi-lingual Guest Hub with shuttle links.</p>
                </div>
                <span className="font-mono text-xs text-[#A85C3D] bg-[#FAF2ED] px-3 py-1 rounded-full font-bold">
                  4 Days · 7 Events
                </span>
              </div>

              <div className="space-y-4">
                {schedule.map(ev => (
                  <div key={ev.id} className="p-5 rounded-2xl border border-[#EFE8DE] bg-[#FAF8F5]/50 hover:bg-[#FAF8F5] transition-colors space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#A85C3D] bg-[#FAF2ED] px-2 py-0.5 rounded">
                          {ev.dayLabel}
                        </span>
                        <span className="text-xs text-[#8A7B6E] font-medium">{ev.date} · {ev.time}</span>
                      </div>
                      {ev.transportProvided && (
                        <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Shuttle Provided
                        </span>
                      )}
                    </div>
                    <h5 className="font-serif font-medium text-lg text-[#1F1B16]">{ev.title}</h5>
                    <p className="text-xs text-[#6B6155] leading-relaxed">{ev.description}</p>
                    <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#7A6E62] border-t border-[#EFE8DE]">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#A85C3D]" /> {ev.location}</span>
                      <span className="font-mono text-[11px] text-[#A85C3D]">Dress: {ev.dressCode}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Guest Tracker View */}
          {activeDashboardTab === 'guests' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-medium text-xl text-[#1F1B16]">Guest &amp; Logistics Tracker</h4>
                  <p className="text-xs text-[#6B6155]">RSVP status, flights, dietary requirements, and room block assignments.</p>
                </div>
                
                {/* RSVP Filter buttons */}
                <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#E8DFD3]">
                  {(['All', 'Attending', 'Awaiting', 'Declined'] as const).map(status => (
                    <button
                      key={status}
                      onClick={() => setGuestFilter(status)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                        guestFilter === status ? 'bg-[#1F1B16] text-white' : 'text-[#6B6155] hover:text-[#1F1B16]'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests Table */}
              <div className="overflow-x-auto rounded-2xl border border-[#E8DFD3]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF8F5] border-b border-[#E8DFD3] text-[#7A6E62] font-mono text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-medium">Guest / Party</th>
                      <th className="py-3 px-4 font-medium">Group</th>
                      <th className="py-3 px-4 font-medium">RSVP Status</th>
                      <th className="py-3 px-4 font-medium">Dietary Requirements</th>
                      <th className="py-3 px-4 font-medium">Flight Arrival</th>
                      <th className="py-3 px-4 font-medium">Room Assigned</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE8DE] bg-white">
                    {filteredGuests.map(guest => (
                      <tr key={guest.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="font-medium text-[#1F1B16] block">{guest.name}</span>
                          <span className="text-[10px] text-[#8A7B6E] font-mono">{guest.partySize} {guest.partySize === 1 ? 'Guest' : 'Guests'}</span>
                        </td>
                        <td className="py-3.5 px-4 text-[#6B6155]">{guest.group}</td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-block font-mono text-[10px] px-2 py-0.5 rounded font-bold ${
                            guest.rsvpStatus === 'Attending' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                            guest.rsvpStatus === 'Awaiting' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                            'bg-rose-50 text-rose-800 border border-rose-200'
                          }`}>
                            {guest.rsvpStatus}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-[#6B6155]">
                          {guest.dietary === 'None' || guest.dietary === 'N/A' ? (
                            <span className="text-[#8A7B6E]">{guest.dietary}</span>
                          ) : (
                            <span className="text-[#A85C3D] font-medium">{guest.dietary}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[11px] text-[#6B6155]">{guest.flightArrival}</td>
                        <td className="py-3.5 px-4 text-[#6B6155]">{guest.roomAssigned}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Budget View */}
          {activeDashboardTab === 'budget' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD3]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A7B6E] block">Estimated Total</span>
                  <span className="font-serif text-2xl font-bold text-[#1F1B16] mt-1 block">€{totalBudgetEst.toLocaleString()} EUR</span>
                  <span className="text-[10px] text-[#8A7B6E] font-mono">≈ {currentCurr.symbol}{Math.round(totalBudgetEst * currentCurr.rate).toLocaleString()} {currentCurr.code}</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F0F4EF] border border-[#D5DFD3]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#4A5847] block">Paid Deposits</span>
                  <span className="font-serif text-2xl font-bold text-[#4A5847] mt-1 block">€{totalBudgetPaid.toLocaleString()} EUR</span>
                  <span className="text-[10px] text-[#4A5847] font-mono">{Math.round((totalBudgetPaid / totalBudgetEst) * 100)}% Settled</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF2ED] border border-[#ECD9CE]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A85C3D] block">Balance Remaining</span>
                  <span className="font-serif text-2xl font-bold text-[#A85C3D] mt-1 block">€{(totalBudgetEst - totalBudgetPaid).toLocaleString()} EUR</span>
                  <span className="text-[10px] text-[#A85C3D] font-mono">3 Vendor Balances Due</span>
                </div>
              </div>

              {/* Budget Table */}
              <div className="overflow-x-auto rounded-2xl border border-[#E8DFD3]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF8F5] border-b border-[#E8DFD3] text-[#7A6E62] font-mono text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-medium">Category &amp; Item</th>
                      <th className="py-3 px-4 font-medium">Estimated</th>
                      <th className="py-3 px-4 font-medium">Actual</th>
                      <th className="py-3 px-4 font-medium">Paid</th>
                      <th className="py-3 px-4 font-medium">Status</th>
                      <th className="py-3 px-4 font-medium">Due Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE8DE] bg-white font-mono text-[11px]">
                    {budget.map(item => (
                      <tr key={item.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                        <td className="py-3.5 px-4 font-sans text-xs">
                          <span className="font-medium text-[#1F1B16] block">{item.name}</span>
                          <span className="text-[10px] text-[#8A7B6E] font-mono">{item.category}</span>
                        </td>
                        <td className="py-3.5 px-4 text-[#6B6155]">€{item.estimatedCost.toLocaleString()}</td>
                        <td className="py-3.5 px-4 text-[#1F1B16] font-semibold">€{item.actualCost.toLocaleString()}</td>
                        <td className="py-3.5 px-4 text-emerald-800">€{item.paidAmount.toLocaleString()}</td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-block text-[10px] px-2 py-0.5 rounded font-bold ${
                            item.status === 'Paid' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-[#7A6E62] text-[10px] font-sans">{item.dueDays}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 4: Seating View */}
          {activeDashboardTab === 'seating' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-medium text-xl text-[#1F1B16]">Imperial Tables &amp; Seating Layout</h4>
                  <p className="text-xs text-[#6B6155]">Table assignments for the Saturday Evening Banquet under the Tuscan Pergola.</p>
                </div>
                <span className="font-mono text-xs text-[#4A5847] bg-[#F0F4EF] px-3 py-1 rounded-full font-bold">
                  4 Long Imperial Tables
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { tableNum: 1, name: 'Table 1: Family & Elders', count: '16 Seats', guests: ['Eleanor Vance', 'Marcus Vance', 'Dr. Rohan Sharma', 'Priya Sharma', 'Sofia Rossi', 'Marco Rossi'] },
                  { tableNum: 2, name: 'Table 2: Bridal Party & Siblings', count: '14 Seats', guests: ['Chloe Montgomery', 'Julian Hayes', 'Luke Dawson', 'Mia Sterling', 'Lucas Wright'] },
                  { tableNum: 3, name: 'Table 3: University Friends', count: '18 Seats', guests: ['Liam Chen', 'Sophia Chen', 'Mathieu Laurent', 'Camille Laurent', 'Tara Brooks', 'Oliver Brooks'] },
                  { tableNum: 4, name: 'Table 4: Global Travelers & Colleagues', count: '16 Seats', guests: ['Alexander Wright', 'Elena Petrova', 'James Sutherland', 'Klara Novak'] }
                ].map(table => (
                  <div key={table.tableNum} className="p-5 rounded-2xl border border-[#E8DFD3] bg-[#FAF8F5]/40 space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-2">
                      <span className="font-serif font-medium text-base text-[#1F1B16]">{table.name}</span>
                      <span className="font-mono text-[10px] text-[#A85C3D] font-bold">{table.count}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {table.guests.map((g, idx) => (
                        <span key={idx} className="bg-white border border-[#E8DFD3] px-2.5 py-1 rounded-lg text-xs text-[#4A4036]">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Vision View */}
          {activeDashboardTab === 'vision' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="font-serif font-medium text-xl text-[#1F1B16]">Vision Journal &amp; Spatial Palette</h4>
                <p className="text-xs text-[#6B6155]">Cypress greens, warm terracotta linen, flickering candlelight, and olive leaf arches.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', caption: 'Sunset Belvedere Vows' },
                  { img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80', caption: 'Pergola Candlelit Long Tables' },
                  { img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80', caption: 'Terracotta & Olive Florals' },
                  { img: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=600&q=80', caption: 'Val d’Orcia Golden Hour' }
                ].map((item, idx) => (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white group">
                    <img src={item.img} alt={item.caption} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="p-2.5 text-center">
                      <span className="font-serif italic text-xs text-[#1F1B16]">{item.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. COUPLES LOCAL PAGE (RAOZ HERE)
// ==========================================
export const CouplesLocalPage: React.FC<{
  onStartPlanning: () => void;
  currency: string;
}> = ({ onStartPlanning, currency }) => {
  const currentCurr = raozWeddingHubConfig.CURRENCIES.find(c => c.code === currency) || raozWeddingHubConfig.CURRENCIES[0];

  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-14">
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            Raoz Here · Local &amp; Hometown Celebrations
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl text-[#1F1B16] mt-2 text-balance leading-tight">
            One day. One place. Every detail singing.
          </h1>
          <p className="text-base sm:text-lg text-[#6B6155] mt-4 leading-relaxed">
            When your guests aren’t hopping transatlantic flights, you don't need flight trackers or multi-currency converters. Raoz Here strips out international logistics, delivering an uncluttered dashboard for a flawless single-day celebration.
          </p>
        </div>

        {/* Feature comparison / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD3] shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#FAF2ED] text-[#A85C3D] flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-serif font-medium text-xl text-[#1F1B16]">Day-Of Run Sheet Precision</h3>
            <p className="text-xs text-[#6B6155] leading-relaxed">
              Hair and makeup milestones, photographer golden hour portrait windows, caterer speech timings, and dance floor opening cues.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD3] shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#FAF2ED] text-[#A85C3D] flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-serif font-medium text-xl text-[#1F1B16]">Direct Instant Guest RSVPs</h3>
            <p className="text-xs text-[#6B6155] leading-relaxed">
              No overseas logistics clutter. Just clean meal selections, song requests, and plus-one coordination with instant export.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD3] shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#FAF2ED] text-[#A85C3D] flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-serif font-medium text-xl text-[#1F1B16]">Local Vendor Ledger</h3>
            <p className="text-xs text-[#6B6155] leading-relaxed">
              Track your domestic deposits, payment schedules, and contractual riders without confusing cross-border exchange rates.
            </p>
          </div>
        </div>

        {/* Action card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1F1B16] text-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium">Ready to plan your day with calm clarity?</h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1.5">Same one-time pricing of {currentCurr.symbol}{currentCurr.couplePrice}. No recurring fees.</p>
          </div>
          <button
            onClick={onStartPlanning}
            className="px-6 py-3 bg-[#A85C3D] hover:bg-[#8F4C30] text-white rounded-full text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Start Raoz Here Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. FOR GUESTS PAGE (LIVE GUEST HUB SIMULATOR)
// ==========================================
export const ForGuestsPage: React.FC<{
  onOpenRSVP: () => void;
}> = ({ onOpenRSVP }) => {
  const [selectedLang, setSelectedLang] = useState<string>('EN');
  const [songText, setSongText] = useState('');
  const [songSubmitted, setSongSubmitted] = useState(false);
  const [photoCount, setPhotoCount] = useState(12);

  const langGreetingMap: Record<string, { welcome: string; date: string; venue: string; dressPrompt: string }> = {
    EN: { welcome: 'Welcome to Maya & David’s Wedding Chapter', date: '18–21 June 2026', venue: 'Villa Rosa · Val d’Orcia, Tuscany', dressPrompt: 'Summer Linen & Garden Cocktail' },
    FR: { welcome: 'Bienvenue au Mariage de Maya & David', date: '18–21 Juin 2026', venue: 'Villa Rosa · Val d’Orcia, Toscane', dressPrompt: 'Lin estival & cocktail de jardin' },
    IT: { welcome: 'Benvenuti alle Nozze di Maya & David', date: '18–21 Giugno 2026', venue: 'Villa Rosa · Val d’Orcia, Toscana', dressPrompt: 'Lino estivo ed eleganza in giardino' },
    ES: { welcome: 'Bienvenidos a la Boda de Maya & David', date: '18–21 de Junio de 2026', venue: 'Villa Rosa · Val d’Orcia, Toscana', dressPrompt: 'Lino de verano y cóctel de jardín' },
    DE: { welcome: 'Willkommen zur Hochzeit von Maya & David', date: '18.–21. Juni 2026', venue: 'Villa Rosa · Val d’Orcia, Toskana', dressPrompt: 'Sommerliches Leinen & Garten-Cocktail' },
    HI: { welcome: 'माया और डेविड के विवाह समारोह में आपका स्वागत है', date: '18–21 जून 2026', venue: 'विला रोज़ा · टस्कनी, इटली', dressPrompt: 'गर्मियों का सुरुचिपूर्ण परिधान' },
    EL: { welcome: 'Καλώς ήρθατε στον Γάμο της Maya & του David', date: '18–21 Ιουνίου 2026', venue: 'Villa Rosa · Val d’Orcia, Τοσκάνη', dressPrompt: 'Καλοκαιρινό λινό και κοκτέιλ' },
    JA: { welcome: 'マヤとデイヴィッドの結婚式へようこそ', date: '2026年6月18日〜21日', venue: 'ヴィラ・ローザ（トスカーナ）', dressPrompt: 'サマーリネン＆ガーデンカクテル' }
  };

  const currentCopy = langGreetingMap[selectedLang] || langGreetingMap.EN;

  const handleSongSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (songText.trim()) {
      setSongSubmitted(true);
      setTimeout(() => setSongSubmitted(false), 2000);
      setSongText('');
    }
  };

  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            The Guest Experience
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl text-[#1F1B16] mt-2 text-balance leading-tight">
            One link. Eight languages. No app to download.
          </h1>
          <p className="text-base sm:text-lg text-[#6B6155] mt-4 leading-relaxed">
            Your guests travel across time zones to celebrate with you. We make sure they step off the plane feeling completely informed, welcomed, and calm.
          </p>
        </div>

        {/* Live Guest Hub Simulator Frame */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E8DFD3] shadow-xl overflow-hidden">
          {/* Simulated Mobile/Browser Top Bar */}
          <div className="bg-[#1F1B16] text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs tracking-wider text-stone-200">guest.raozweddinghub.com/maya-david</span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#A85C3D] mr-1" />
              {raozWeddingHubConfig.LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-colors ${
                    selectedLang === lang.code ? 'bg-[#A85C3D] text-white' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Banner inside Guest Hub */}
          <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1200&q=80"
              alt="Villa Rosa in Tuscany"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="font-mono text-[10px] tracking-widest uppercase text-amber-300 font-bold">
                {currentCopy.date}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium">
                {currentCopy.welcome}
              </h2>
              <p className="text-xs text-stone-300 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#A85C3D]" /> {currentCopy.venue}
              </p>
            </div>
          </div>

          {/* Guest Hub Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Quick RSVP CTA box */}
            <div className="p-5 rounded-2xl bg-[#FAF2ED] border border-[#ECD9CE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#A85C3D] block">
                  Action Required by 1 May 2026
                </span>
                <h4 className="font-serif text-lg font-medium text-[#1F1B16] mt-0.5">
                  Confirm your attendance &amp; dietary preferences
                </h4>
                <p className="text-xs text-[#7A6E62]">Takes less than 60 seconds. No password or registration needed.</p>
              </div>
              <button
                onClick={onOpenRSVP}
                className="px-5 py-2.5 rounded-full bg-[#A85C3D] hover:bg-[#8F4C30] text-white text-xs font-semibold whitespace-nowrap shadow-xs transition-colors cursor-pointer"
              >
                Submit RSVP Now →
              </button>
            </div>

            {/* Itinerary Preview */}
            <div className="space-y-4">
              <h4 className="font-serif font-medium text-xl text-[#1F1B16] border-b border-[#E8DFD3] pb-2">
                4-Day Celebration Schedule
              </h4>
              <div className="space-y-3">
                {SAMPLE_SCHEDULE.slice(0, 3).map(ev => (
                  <div key={ev.id} className="p-4 rounded-xl border border-[#E8DFD3] bg-[#FAF8F5]/60 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DFD3] text-[#A85C3D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {ev.dayNumber}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-medium text-sm text-[#1F1B16]">{ev.title}</span>
                        <span className="text-[11px] text-[#8A7B6E] font-mono">{ev.time}</span>
                      </div>
                      <p className="text-xs text-[#6B6155]">{ev.description}</p>
                      <span className="inline-block text-[11px] font-mono text-[#A85C3D]">Dress: {ev.dressCode}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel & Shuttle Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-[#E8DFD3] bg-white space-y-2">
                <div className="flex items-center gap-2 font-serif font-medium text-base text-[#1F1B16]">
                  <Plane className="w-4 h-4 text-[#A85C3D]" />
                  <span>Recommended Flights</span>
                </div>
                <p className="text-xs text-[#6B6155] leading-relaxed">
                  Fly into Florence (FLR) or Rome Fiumicino (FCO). High-speed Frecciarossa trains connect Rome to Chiusi-Chianciano Terme station in 65 minutes.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-[#E8DFD3] bg-white space-y-2">
                <div className="flex items-center gap-2 font-serif font-medium text-base text-[#1F1B16]">
                  <Clock className="w-4 h-4 text-[#4A5847]" />
                  <span>Private Shuttles</span>
                </div>
                <p className="text-xs text-[#6B6155] leading-relaxed">
                  Dedicated Mercedes Sprinters run between Hotel Bellavista, San Quirico town square, and Villa Rosa throughout all events.
                </p>
              </div>
            </div>

            {/* Interactive Song Request & Memory Photo Drop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E8DFD3]">
              <div className="space-y-3">
                <h5 className="font-serif font-medium text-base text-[#1F1B16] flex items-center gap-2">
                  <Music className="w-4 h-4 text-[#A85C3D]" />
                  <span>Song Request for the DJ</span>
                </h5>
                <form onSubmit={handleSongSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={songText}
                    onChange={e => setSongText(e.target.value)}
                    placeholder="Song Title &amp; Artist"
                    className="flex-1 px-3 py-1.5 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                  />
                  <button type="submit" className="px-3 py-1.5 bg-[#1F1B16] text-white rounded-xl text-xs font-medium">
                    Send
                  </button>
                </form>
                {songSubmitted && (
                  <span className="text-[11px] text-emerald-700 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Song passed to DJ booth!
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <h5 className="font-serif font-medium text-base text-[#1F1B16] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A85C3D]" />
                  <span>Live Photo Memories ({photoCount} photos)</span>
                </h5>
                <button
                  onClick={() => setPhotoCount(prev => prev + 1)}
                  className="w-full py-2 border-2 border-dashed border-[#D5C9B8] hover:border-[#A85C3D] rounded-xl text-xs text-[#6B6155] hover:text-[#A85C3D] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>+ Drop photo from phone camera roll</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. FOR PLANNERS PAGE
// ==========================================
export const ForPlannersPage: React.FC<{
  onStartPlanning: () => void;
  onOpenPartnerModal: () => void;
}> = ({ onStartPlanning, onOpenPartnerModal }) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const currentPhase = PLANNER_PHASES.find(p => p.phaseNumber === selectedPhase) || PLANNER_PHASES[0];

  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A5847]">
            For Wedding Planners &amp; Agencies
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl text-[#1F1B16] mt-2 text-balance leading-tight">
            The multi-wedding hub built for destination production.
          </h1>
          <p className="text-base sm:text-lg text-[#6B6155] mt-4 leading-relaxed">
            Stop stitching together 14 spreadsheets, client Canva decks, and endless WhatsApp threads. Manage multiple concurrent weddings with white-label client portals, multi-lingual guest hubs, and our 10-phase destination workflow.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenPartnerModal}
              className="inline-flex items-center gap-2 rounded-full bg-[#4A5847] hover:bg-[#394437] text-white px-5 py-2.5 text-xs font-semibold shadow-xs cursor-pointer"
            >
              <span>Apply for Planner Partner Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-xs text-[#8A7B6E]">Custom white-label branding included</span>
          </div>
        </div>

        {/* 10-Phase Destination Workflow Explorer */}
        <div className="bg-white rounded-3xl border border-[#E8DFD3] shadow-md p-6 sm:p-9 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#4A5847] font-bold">
                Proprietary Standard Operating Procedure
              </span>
              <h3 className="font-serif font-medium text-2xl text-[#1F1B16]">
                10 Phases · ~280 Curated Destination Milestones
              </h3>
            </div>
            <span className="font-mono text-xs text-[#6B6155] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8DFD3]">
              Tested across 240+ multi-day weddings
            </span>
          </div>

          {/* Phase Number selector rail */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {PLANNER_PHASES.map(p => (
              <button
                key={p.phaseNumber}
                onClick={() => setSelectedPhase(p.phaseNumber)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedPhase === p.phaseNumber
                    ? 'bg-[#4A5847] text-white font-bold shadow-xs'
                    : 'bg-[#FAF8F5] text-[#6B6155] hover:bg-[#EFE8DE] border border-[#E8DFD3]'
                }`}
              >
                <span>Phase {p.phaseNumber}:</span>
                <span className="font-sans font-medium">{p.phaseName}</span>
              </button>
            ))}
          </div>

          {/* Selected Phase Details */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD3] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8DFD3] pb-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase text-[#4A5847]">Timeframe: {currentPhase.timeframe}</span>
                <h4 className="font-serif font-medium text-2xl text-[#1F1B16] mt-0.5">
                  Phase {currentPhase.phaseNumber}: {currentPhase.phaseName}
                </h4>
              </div>
              <span className="font-mono text-xs bg-white border border-[#E8DFD3] px-3 py-1 rounded-lg text-[#1F1B16] font-bold">
                {currentPhase.tasksCount} Active Checkpoints
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A6E62] font-semibold block">
                  Key Production Milestones
                </span>
                <ul className="space-y-2 text-xs text-[#3D352E]">
                  {currentPhase.keyMilestones.map((km, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A5847] shrink-0 mt-0.5" />
                      <span>{km}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A6E62] font-semibold block">
                  Client Deliverables &amp; Riders
                </span>
                <ul className="space-y-2 text-xs text-[#3D352E]">
                  {currentPhase.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Compass className="w-4 h-4 text-[#A85C3D] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 5. DESTINATION GUIDES PAGE
// ==========================================
export const DestinationGuidesPage: React.FC<{
  onSelectGuide: (guide: DestinationGuide) => void;
}> = ({ onSelectGuide }) => {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Europe' | 'Asia' | 'India'>('All');

  const filteredGuides = DESTINATION_GUIDES.filter(g => {
    if (selectedRegion === 'All') return true;
    if (selectedRegion === 'Europe') return g.region.includes('Tuscany') || g.region.includes('Italy') || g.region.includes('Greece');
    if (selectedRegion === 'Asia') return g.region.includes('Ubud') || g.region.includes('Thailand');
    if (selectedRegion === 'India') return g.region.includes('Goa') || g.region.includes('Pichola');
    return true;
  });

  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            Curated Knowledge Base
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl text-[#1F1B16] mt-2 text-balance leading-tight">
            Destination Guides &amp; Venue Intelligence
          </h1>
          <p className="text-base sm:text-lg text-[#6B6155] mt-3">
            Real logistics, legal wedding frameworks, seasonal microclimates, and venue buyouts across our primary destination hubs.
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex items-center gap-2 border-b border-[#E8DFD3] pb-3">
          {(['All', 'Europe', 'Asia', 'India'] as const).map(reg => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedRegion === reg ? 'bg-[#1F1B16] text-white' : 'text-[#6B6155] hover:text-[#1F1B16] bg-white border border-[#E8DFD3]'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map(guide => (
            <div
              key={guide.id}
              onClick={() => onSelectGuide(guide)}
              className="group rounded-3xl bg-white border border-[#E8DFD3] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={guide.heroImage}
                    alt={guide.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-200">{guide.region}</span>
                    <h3 className="font-serif font-medium text-2xl">{guide.name}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#8A7B6E] block">BEST WEATHER:</span>
                    <span className="text-xs text-[#1F1B16] font-medium">{guide.bestMonths}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#8A7B6E] block">TYPICAL INVESTMENT:</span>
                    <span className="text-xs text-[#A85C3D] font-bold">{guide.avgWeddingBudget}</span>
                  </div>
                  <p className="text-xs text-[#6B6155] line-clamp-2 leading-relaxed">
                    {guide.atmosphere}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#FAF8F5]">
                <span className="text-xs font-semibold text-[#1F1B16] group-hover:text-[#A85C3D] flex items-center justify-between transition-colors">
                  <span>View venues &amp; legal guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 6. PRICING PAGE
// ==========================================
export const PricingPage: React.FC<{
  onOpenCheckout: (plan: 'couple' | 'planner-studio' | 'planner-agency') => void;
  currency: string;
}> = ({ onOpenCheckout, currency }) => {
  const currentCurr = raozWeddingHubConfig.CURRENCIES.find(c => c.code === currency) || raozWeddingHubConfig.CURRENCIES[0];

  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            Simple, Honest Pricing
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl text-[#1F1B16]">
            One price. Lifetime chapter access.
          </h1>
          <p className="text-base text-[#6B6155]">
            No monthly subscription traps if your celebration is in 18 months. No ads, no hidden vendor commissions, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Free Starter */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8DFD3] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#8A7B6E] font-bold">
                TRIAL EXPLORATION
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#1F1B16]">Free Starter</h3>
              <p className="text-xs text-[#6B6155]">
                Build your schedule and test out the calm dashboard before sharing with guests.
              </p>
              <div className="pt-2">
                <span className="font-serif text-4xl font-bold text-[#1F1B16]">{currentCurr.symbol}0</span>
                <span className="text-xs text-[#8A7B6E] ml-1.5 font-mono">Free forever</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-[#4A4036] py-4 border-y border-[#F0EAE1]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Up to 15 Guests</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multi-day Schedule Builder</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Budget &amp; Seating Chart preview</span>
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <span className="w-4 text-center">✕</span>
                <span>Custom Domain &amp; 8-Language Hub</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenCheckout('couple')}
              className="w-full py-3 rounded-full border border-[#1F1B16] text-[#1F1B16] hover:bg-black/5 text-xs font-semibold transition-colors cursor-pointer"
            >
              Start Free Exploration
            </button>
          </div>

          {/* Full Access One-Time */}
          <div className="p-8 rounded-3xl bg-[#1F1B16] text-white shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-wider uppercase text-amber-300 font-bold">
                  COMPLETE WEDDING CHAPTER
                </span>
                <span className="font-mono text-[9px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-300/30">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-white">Full Couple Access</h3>
              <p className="text-xs text-stone-300">
                Everything you need for your entire multi-day chapter from invitation to photo wrap.
              </p>
              <div className="pt-2">
                <span className="font-serif text-4xl font-bold text-white">{currentCurr.symbol}{currentCurr.couplePrice}</span>
                <span className="text-xs text-stone-400 ml-1.5 font-mono">one-time · lifetime access</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-stone-200 py-4 border-y border-stone-800">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Unlimited Guests &amp; RSVP Tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Guest Hub in 8 Native Languages (No app needed)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Multi-Currency Budget &amp; Exchange Converter</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Flight arrival tracking &amp; Room block manager</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>DJ Song Request box &amp; Guest photo vault</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenCheckout('couple')}
              className="w-full py-3.5 rounded-full bg-[#A85C3D] hover:bg-[#8F4C30] text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
            >
              Get Full Access ({currentCurr.symbol}{currentCurr.couplePrice} Once)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 7. FAQ PAGE
// ==========================================
export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'General' | 'Couples' | 'Guests' | 'Planners' | 'Pricing'>('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ 'faq-1': true });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQS_DATA.filter(f => {
    if (selectedCategory === 'All') return true;
    return f.category === selectedCategory;
  });

  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            Common Questions
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl text-[#1F1B16]">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-[#6B6155]">
            Everything you need to know about destination wedding planning on Raoz Wedding Hub.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(['All', 'General', 'Couples', 'Guests', 'Planners', 'Pricing'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === cat ? 'bg-[#1F1B16] text-white' : 'bg-white text-[#6B6155] border border-[#E8DFD3] hover:text-[#1F1B16]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map(faq => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-medium text-base sm:text-lg text-[#1F1B16]"
                >
                  <span>{faq.question}</span>
                  <span className={`text-[#A85C3D] font-mono text-sm transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                    →
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm leading-relaxed text-[#6B6155] border-t border-[#F5EFE5]">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 8. ABOUT & STORY PAGE
// ==========================================
export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            Our Story &amp; Philosophy
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl text-[#1F1B16] leading-tight">
            We built Raoz Wedding Hub because wedding tools were failing destination couples.
          </h1>
        </div>

        <div className="prose prose-stone max-w-none text-[#52483E] text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            When two people decide to gather their favourite human beings on an Italian hill, a Balinese cliff, or a Goan shoreline, they aren’t planning a four-hour dinner party. They are creating a once-in-a-lifetime reunion that lasts several days.
          </p>
          <p>
            Yet every major wedding website in existence was constructed in 2008 for a standard 4-hour banquet with a single dinner chicken-or-beef RSVP checkbox.
          </p>
          <p>
            Couples were left to fend for themselves: cobbling together five Google Spreadsheets, dozens of WhatsApp chats, fragile PDF attachments, and panicked text messages at 2:00 AM asking which train station to disembark at.
          </p>
          <blockquote className="border-l-2 border-[#A85C3D] pl-4 italic font-serif text-lg text-[#1F1B16]">
            "We believe the greatest luxury at any wedding is not gold leaf or fireworks. It is unhurried presence — the time to have deep conversations with the people who crossed continents to hold your hand."
          </blockquote>
          <p>
            Raoz Wedding Hub exists to calm the chaos. One serene interface where couples feel organized, guests feel cherished and informed, and professional planners have the production tools to execute flawlessly.
          </p>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 9. CONTACT PAGE
// ==========================================
export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Couple planning a wedding',
    destination: 'Tuscany, Italy',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            Get In Touch
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl text-[#1F1B16] mt-2">
            We’d love to hear about your celebration.
          </h1>
          <p className="text-sm text-[#6B6155] mt-3">
            Have questions about your destination, need a planner recommendation, or want a personalized concierge walk-through? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFD3] shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                    placeholder="Eleanor Vance"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                    placeholder="eleanor@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">I am a...</label>
                  <select
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                  >
                    <option>Couple planning a wedding</option>
                    <option>Wedding Planner or Agency</option>
                    <option>Venue Owner or Hotel Manager</option>
                    <option>Guest with a question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                    placeholder="Tell us about your dates, destination, or what you need help with..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#4A5847] hover:bg-[#394437] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Send Inquiry to Raoz Concierge
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-medium text-xl text-[#1F1B16]">Message received!</h4>
                <p className="text-xs text-[#6B6155]">
                  Our destination team will reply to {formData.email} within 24 business hours.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E8DFD3] space-y-2">
              <span className="font-mono text-[10px] uppercase text-[#A85C3D] font-bold">Direct Email</span>
              <p className="font-serif text-lg text-[#1F1B16]">{raozWeddingHubConfig.EMAIL}</p>
              <p className="text-xs text-[#7A6E62]">For general inquiries and concierge support</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8DFD3] space-y-2">
              <span className="font-mono text-[10px] uppercase text-[#4A5847] font-bold">Planner Partners</span>
              <p className="font-serif text-lg text-[#1F1B16]">{raozWeddingHubConfig.SUPPORT_EMAIL}</p>
              <p className="text-xs text-[#7A6E62]">For verified wedding agencies &amp; white-label licensing</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8DFD3] space-y-2">
              <span className="font-mono text-[10px] uppercase text-[#6B6155] font-bold">Studio Hubs</span>
              <p className="text-xs text-[#3D352E] leading-relaxed">
                {raozWeddingHubConfig.ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 10. PARTNER AGREEMENT PAGE
// ==========================================
export const PartnerAgreementPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A5847]">
            Professional Terms
          </span>
          <h1 className="font-serif font-medium text-4xl text-[#1F1B16] mt-1">
            Raoz Wedding Hub Planner Partner Agreement
          </h1>
          <p className="text-xs text-[#7A6E62] mt-1 font-mono">
            Last Updated: January 2026 · Standard Terms of Engagement
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-[#E8DFD3] space-y-6 text-xs text-[#52483E] leading-relaxed">
          <section className="space-y-2">
            <h4 className="font-serif font-medium text-base text-[#1F1B16]">1. Purpose of Agreement</h4>
            <p>
              This Planner Partner Agreement governs the terms under which approved wedding planning agencies, production ateliers, and independent coordinators utilize the Raoz Wedding Hub platform, white-label interfaces, and multi-wedding management suites on behalf of client couples.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif font-medium text-base text-[#1F1B16]">2. Client Data &amp; Privacy Protection</h4>
            <p>
              Planner Partners maintain sole custody of their client relationships. Raoz Wedding Hub shall not solicit client couples, display external vendor advertisements, or sell attendee data. All guest dietary data and flight information is treated strictly under high-security confidentiality standards.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif font-medium text-base text-[#1F1B16]">3. White-Label Branding Guidelines</h4>
            <p>
              Partners licensed under Atelier or Agency tiers are entitled to customize portal color palettes, display studio typography, and mount custom CNAME domains for couple and guest subdomains without forced third-party badges.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 11. LEGAL PAGES (PRIVACY & TERMS)
// ==========================================
export const LegalPage: React.FC<{ type: 'privacy' | 'terms' }> = ({ type }) => {
  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D]">
            Legal Information
          </span>
          <h1 className="font-serif font-medium text-4xl text-[#1F1B16] mt-1">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="text-xs text-[#7A6E62] font-mono">
            Raoz Wedding Hub · {raozWeddingHubConfig.LEGAL_NAME}
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-[#E8DFD3] space-y-5 text-xs text-[#52483E] leading-relaxed">
          <p>
            At Raoz Wedding Hub, we respect the sanctity of personal celebrations. We never monetize couple data, sell guest contact rosters to third-party vendors, or inject promotional spam into your wedding experience.
          </p>
          <p>
            All information provided during planning—including confidential guest room allocations, sensitive dietary allergies, and personal vows—is stored with bank-grade encryption and accessible exclusively by your designated party.
          </p>
        </div>
      </div>
    </div>
  );
};
