import React, { useState, useEffect } from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';
import { WeddingStory, ArcFunction, VideoShort, SEARCH_INDEX, SearchEntry } from '../../data/globalPlannerssData';

/* =========================================================================
   1. ENQUIRY & DATE CHECKER MODAL
   ========================================================================= */
interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDate?: string;
  defaultDestination?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultDestination = ''
}) => {
  const [weddingDate, setWeddingDate] = useState('');
  const [season, setSeason] = useState('Winter 2026–27');
  const [destination, setDestination] = useState(defaultDestination || 'Goa');
  const [guestCount, setGuestCount] = useState('200–300 Guests');
  const [budgetRange, setBudgetRange] = useState('₹75L – ₹1.25 Cr');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultDestination) setDestination(defaultDestination);
  }, [defaultDestination]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = `*WEDDING ENQUIRY — ${globalPlannerssConfig.SITE_NAME}*\n\n` +
      `*Name:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Date/Season:* ${weddingDate || season}\n` +
      `*Destination:* ${destination}\n` +
      `*Guests:* ${guestCount}\n` +
      `*Budget:* ${budgetRange}\n` +
      `*Notes:* ${notes || 'None'}\n\n` +
      `Please check date availability and send your planning portfolio.`;

    setTimeout(() => {
      window.open(`https://wa.me/${globalPlannerssConfig.WHATSAPP}?text=${encodeURIComponent(waMsg)}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#171410] border border-stone-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-stone-200 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-900 border border-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="w-10 h-10 rounded-full border border-[#C19A4B]/60 inline-flex items-center justify-center bg-gradient-to-br from-[#2D241A] to-[#171410] text-[#E5D7B7] font-serif font-bold text-xs tracking-wider mb-2">
                GP
              </span>
              <p className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#C19A4B]">
                Capped at {globalPlannerssConfig.ANNUAL_CAP} Weddings / Year
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-tight mt-1">
                Check Your Wedding Date
              </h3>
              <p className="text-xs text-stone-400 font-sans mt-1">
                Our Senior Director reviews every enquiry within 30 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Target Date or Month</label>
                  <input
                    type="text"
                    placeholder="e.g. 18 Nov 2026 or Dec 2026"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-700 text-white placeholder-stone-600 focus:outline-none focus:border-[#C19A4B]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Season / Year</label>
                  <select
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-[#C19A4B]"
                  >
                    <option value="Winter 2026–27">Winter 2026–27 (Peak)</option>
                    <option value="Spring / Summer 2027">Spring / Summer 2027</option>
                    <option value="Late 2027">Late 2027</option>
                    <option value="Emergency (Next 45 Days)">Emergency (Next 45 Days)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Destination</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-[#C19A4B]"
                  >
                    <option value="Goa">Goa (Coastal)</option>
                    <option value="Udaipur">Udaipur (Palaces)</option>
                    <option value="Jaipur">Jaipur (Fortresses)</option>
                    <option value="Delhi NCR">Delhi NCR / Gurugram</option>
                    <option value="Dubai / International">Dubai &amp; Emirates</option>
                    <option value="Rishikesh / Corbett">Rishikesh &amp; Corbett</option>
                    <option value="Other">Other / Undecided</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Guest Count</label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-[#C19A4B]"
                  >
                    <option value="Intimate (<150 Guests)">Intimate (&lt;150 Guests)</option>
                    <option value="200–300 Guests">200–300 Guests (Average)</option>
                    <option value="350–500 Guests">350–500 Guests</option>
                    <option value="Grand (500+ Guests)">Grand (500+ Guests)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Target Budget</label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-[#C19A4B]"
                  >
                    <option value="₹40L – ₹60L">₹40L – ₹60L</option>
                    <option value="₹75L – ₹1.25 Cr">₹75L – ₹1.25 Cr</option>
                    <option value="₹1.25 Cr – ₹2.5 Cr">₹1.25 Cr – ₹2.5 Cr</option>
                    <option value="₹2.5 Cr+">₹2.5 Cr+ (Bespoke Ultra)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder="Bride / Groom / Parent Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-700 text-white placeholder-stone-600 focus:outline-none focus:border-[#C19A4B]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-700 text-white placeholder-stone-600 focus:outline-none focus:border-[#C19A4B]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-700 text-white placeholder-stone-600 focus:outline-none focus:border-[#C19A4B]"
                  required
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-medium">Special Requests or Vision</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your wedding style, specific venues in mind, or questions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-700 text-white placeholder-stone-600 focus:outline-none focus:border-[#C19A4B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded bg-gradient-to-r from-[#B08D57] via-[#C19A4B] to-[#9C7B4E] text-[#171410] font-serif font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-98 transition mt-2"
              >
                Submit &amp; Check Date Availability →
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-2 border-t border-stone-800">
                <span>🔒 Strict Privacy · No spam calls</span>
                <span>Direct WhatsApp concierge</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C19A4B]/20 text-[#C19A4B] mx-auto flex items-center justify-center text-2xl font-serif">
              ✓
            </div>
            <h3 className="font-serif text-2xl text-white font-semibold">
              Thank You, {fullName || 'there'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans max-w-md mx-auto leading-relaxed">
              Your inquiry has been received by the Director of {globalPlannerssConfig.SITE_NAME}. We are reviewing calendar availability for {weddingDate || season} in {destination}.
            </p>
            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-400 font-sans max-w-sm mx-auto">
              A copy of your request was forwarded via WhatsApp. You can also chat directly with us right now:
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${globalPlannerssConfig.WHATSAPP}?text=Hi%20Global%20Plannerss,%20I%20just%20submitted%20my%20enquiry%20for%20${encodeURIComponent(destination)}.`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold text-xs tracking-wider uppercase transition"
              >
                Open WhatsApp Concierge
              </a>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-sans uppercase tracking-wider transition"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


/* =========================================================================
   2. SEARCH MODAL ACROSS ARCHIVE
   ========================================================================= */
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (target: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredResults: SearchEntry[] = query.trim() === ''
    ? SEARCH_INDEX.slice(0, 8)
    : SEARCH_INDEX.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.t.toLowerCase().includes(q) ||
          item.k.toLowerCase().includes(q) ||
          (item.a && item.a.toLowerCase().includes(q))
        );
      });

  const getTagColor = (k: string) => {
    switch (k) {
      case 'page': return 'bg-stone-800 text-stone-300';
      case 'decor': return 'bg-amber-950/60 text-[#E5D7B7] border border-[#C19A4B]/40';
      case 'venue': return 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40';
      case 'tool': return 'bg-sky-950/60 text-sky-300 border border-sky-800/40';
      default: return 'bg-stone-800 text-stone-400';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 backdrop-blur-md p-4 pt-16 sm:pt-24 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#171410] border border-stone-800 rounded-2xl shadow-2xl p-5 sm:p-6 text-stone-200">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4 mb-4">
          <span className="text-stone-400 text-lg">⌕</span>
          <input
            type="text"
            placeholder="Search weddings, decor archives, venues, planning tools, muhurats..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white font-sans text-sm sm:text-base placeholder-stone-600 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-stone-500 hover:text-white text-xs uppercase font-mono px-2 py-1 rounded bg-stone-900"
          >
            ESC
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto space-y-1.5 pr-1">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectResult(item.u);
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl hover:bg-stone-900/80 transition flex items-center justify-between group"
              >
                <div>
                  <span className="font-serif text-sm sm:text-base text-white group-hover:text-[#E5D7B7] transition">
                    {item.t}
                  </span>
                  {item.a && (
                    <span className="block text-[10px] text-stone-500 font-sans mt-0.5">
                      Keywords: {item.a}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded ${getTagColor(item.k)}`}>
                  {item.k}
                </span>
              </button>
            ))
          ) : (
            <div className="text-center py-8 text-xs text-stone-500">
              No matching records found. Try "Goa", "Udaipur", "Mandap", "Budget", or "Muhurats".
            </div>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500 font-sans">
          <span>Search the full {globalPlannerssConfig.SITE_NAME} archive</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   3. WEDDING STORY LIGHTBOX MODAL
   ========================================================================= */
interface WeddingStoryModalProps {
  wedding: WeddingStory | null;
  onClose: () => void;
  onPlanSimilar: (wedding: WeddingStory) => void;
}

export const WeddingStoryModal: React.FC<WeddingStoryModalProps> = ({
  wedding,
  onClose,
  onPlanSimilar
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [wedding]);

  if (!wedding) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#14110E] border border-stone-800 rounded-3xl shadow-2xl overflow-hidden text-stone-200 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black border border-stone-700 flex items-center justify-center transition"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Photo Gallery Showcase */}
          <div className="lg:col-span-7 bg-stone-950 flex flex-col justify-between">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:h-full min-h-[320px] w-full overflow-hidden">
              <img
                src={wedding.gallery[activeImageIdx] || wedding.coverImage}
                alt={`${wedding.couple} Wedding`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Monogram tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C19A4B]/40 text-xs font-serif font-bold text-[#E5D7B7]">
                {wedding.monogram} · Real Celebration
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {wedding.gallery.length > 1 && (
              <div className="p-3 bg-black/60 border-t border-stone-800 flex gap-2 overflow-x-auto">
                {wedding.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border transition ${
                      activeImageIdx === idx ? 'border-[#C19A4B] scale-105' : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Narrative & Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-serif uppercase tracking-widest text-[#C19A4B]">
                  Featured Celebration
                </span>
                <span className="text-xs text-stone-400 font-sans">
                  {wedding.duration} · {wedding.guestCount} Guests
                </span>
              </div>

              <h3 className="font-serif text-3xl font-light text-white mb-1">
                {wedding.couple}
              </h3>
              <p className="text-xs text-stone-400 font-sans mb-4">
                {wedding.venue} · {wedding.destination}
              </p>

              {/* Color Palette */}
              <div className="flex items-center gap-2 mb-4 p-2.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <span className="text-[10px] uppercase font-sans tracking-wider text-stone-400">
                  Curated Palette:
                </span>
                <div className="flex items-center gap-1.5">
                  {wedding.palette.map((c, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-stone-700 shadow-sm"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-stone-300 leading-relaxed mb-4">
                {wedding.story}
              </p>

              {/* Highlights List */}
              <div className="space-y-1.5 border-t border-stone-800/80 pt-4">
                <span className="text-[10px] uppercase font-serif tracking-widest text-[#C19A4B] block mb-2">
                  Atelier Production Highlights:
                </span>
                {wedding.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-300 font-sans">
                    <span className="text-[#C19A4B]">✦</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-800/80 space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onPlanSimilar(wedding);
                }}
                className="w-full py-3 rounded bg-gradient-to-r from-[#B08D57] via-[#C19A4B] to-[#9C7B4E] text-[#171410] font-serif font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition"
              >
                Plan a Celebration Like This →
              </button>
              <p className="text-[10px] text-stone-500 font-sans text-center">
                100% open-book cost matrices and 3D CAD renders available for this venue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   4. WEDDING ARC FUNCTION ARCHIVE MODAL (Haldi, Mehendi, Sangeet, etc.)
   ========================================================================= */
interface ArcFunctionModalProps {
  arcFunction: ArcFunction | null;
  onClose: () => void;
  onCheckDate: () => void;
}

export const ArcFunctionModal: React.FC<ArcFunctionModalProps> = ({
  arcFunction,
  onClose,
  onCheckDate
}) => {
  if (!arcFunction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#171410] border border-stone-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-stone-200 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-900 border border-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-stone-900 border border-stone-800">
          <img
            src={arcFunction.image}
            alt={arcFunction.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] uppercase font-serif tracking-widest text-[#C19A4B] block">
              The Wedding Arc Archive
            </span>
            <h3 className="font-serif text-3xl font-bold text-white">
              {arcFunction.name}
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-serif text-lg text-[#E5D7B7] italic leading-snug">
            "{arcFunction.tagline}"
          </p>

          <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
            {arcFunction.description} At Global Plannerss, our 24-person in-house production atelier designs, fabricates, and executes every function as its own immersive world so your family experiences each milestone fresh.
          </p>

          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2 text-xs font-sans text-stone-400">
            <div className="flex justify-between">
              <span className="text-stone-300 font-medium">Archive Depth:</span>
              <span className="text-[#C19A4B]">{arcFunction.photoCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-300 font-medium">In-House Atelier:</span>
              <span className="text-white">Custom fabrication &amp; zero middleman markup</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onCheckDate();
              }}
              className="flex-1 py-3 rounded bg-[#C19A4B] text-[#171410] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-110 transition"
            >
              Inquire About {arcFunction.name} Decor →
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded bg-stone-800 text-stone-300 text-xs uppercase font-sans hover:bg-stone-700 transition"
            >
              Back to Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   5. VIDEO PLAYER MODAL
   ========================================================================= */
interface VideoPlayerModalProps {
  video: VideoShort | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative w-full max-w-sm bg-[#171410] border border-stone-800 rounded-3xl shadow-2xl overflow-hidden text-stone-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 text-white hover:bg-black border border-stone-700 flex items-center justify-center transition"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="relative aspect-[9/16] w-full bg-stone-950 overflow-hidden">
          <img
            src={video.thumb}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

          {/* Playing Simulation Animation */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-[#C19A4B] text-[#171410] flex items-center justify-center text-2xl font-bold pl-1 shadow-2xl animate-pulse">
              ▶
            </div>
            <span className="text-xs font-sans text-stone-300 uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full border border-white/10">
              60s Wedding Reel
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[10px] uppercase font-serif tracking-widest text-[#C19A4B] block mb-1">
              {globalPlannerssConfig.SITE_NAME} · Reel
            </span>
            <h4 className="font-serif text-base font-semibold text-white leading-snug">
              {video.title}
            </h4>
            <div className="flex items-center gap-3 text-[11px] text-stone-400 font-sans mt-2">
              <span>{video.views} views</span>
              <span>·</span>
              <span>{video.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
