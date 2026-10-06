import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  Users,
  Send
} from 'lucide-react';
import { REAL_ESTATE_EVENTS, RealEstateEvent } from '../../data/site82Data';

export const Site82EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<RealEstateEvent | null>(null);
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim() || !regPhone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FCFAF9] min-h-screen pt-28 pb-20">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#F54900] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Expos &amp; Conclaves</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1E2430] tracking-tight">
            Real Estate Events &amp; Investor Summits
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
            Gain direct access to exclusive pre-launch builder inventories, spot allotments, and expert macroeconomic panels across India and global NRI destinations.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REAL_ESTATE_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-neutral-900">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-bold uppercase font-mono px-2.5 py-1 rounded-full ${
                        event.isUpcoming
                          ? 'bg-[#F54900] text-white shadow'
                          : 'bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      {event.isUpcoming ? 'Registration Open' : 'Concluded'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#F54900] font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#1E2430] leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-neutral-500 flex items-center gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{event.venue}, {event.city}</span>
                  </p>

                  <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5 text-xs text-neutral-700">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                {event.isUpcoming ? (
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setSubmitted(false);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#F54900] hover:bg-[#C7510B] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-orange-500/20 cursor-pointer"
                  >
                    Register for Free Pass →
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full py-2.5 rounded-xl bg-neutral-100 text-neutral-400 font-bold text-xs uppercase tracking-wider cursor-not-allowed"
                  >
                    Event Completed
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Pass Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-neutral-900 shadow-2xl relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold">Pass Confirmed!</h3>
                <p className="text-xs text-neutral-600 mt-2">
                  Your VIP Entry Pass QR code for <strong>{selectedEvent.title}</strong> has been dispatched to {regPhone}.
                </p>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="mt-6 px-6 py-2 bg-[#F54900] text-white text-xs font-bold uppercase rounded-xl"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F54900] font-bold">
                  Complimentary Entry Pass
                </span>
                <h3 className="text-xl font-bold mt-1">{selectedEvent.title}</h3>
                <p className="text-xs text-neutral-500 mt-1">
                  {selectedEvent.date} · {selectedEvent.venue}
                </p>

                <form onSubmit={handleRegisterSubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="e.g. Vikramaditya"
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="investor@domain.com"
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#F54900] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md mt-2 cursor-pointer"
                  >
                    Confirm Registration
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
