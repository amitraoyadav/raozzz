import React, { useState } from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';

export const GlobalPlanningToolsSection: React.FC = () => {
  // 1. Muhurats state
  const [muhuratYear, setMuhuratYear] = useState<'2026' | '2027'>('2026');
  const [unlockedMuhurat, setUnlockedMuhurat] = useState<boolean>(false);
  const [unlockEmail, setUnlockEmail] = useState('');

  // 2. Checklist state
  const [checkedQuestions, setCheckedQuestions] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });

  const questionsList = [
    'How many weddings do you handle at once?',
    'Who is our main point of contact on the day?',
    'Do you have preferred vendors — are we locked in?',
    'How do you handle family dynamics on the day?',
    'What’s your policy for last-minute changes?',
    'Can we see a full budget breakdown upfront?',
    'Do you coordinate across multiple venues or days?',
    'How do you manage destination travel logistics?',
    'What if you or a key vendor fall sick?',
    'What does your post-wedding service include?'
  ];

  // 3. Budget Calculator state
  const [totalBudget, setTotalBudget] = useState<number>(9500000);

  const budgetCategories = [
    { label: 'Venue & Room Block', pct: 25 },
    { label: 'Catering (F&B)', pct: 25 },
    { label: 'Decor & Florals', pct: 15 },
    { label: 'Photography & Videography', pct: 8 },
    { label: 'Bridal Outfits & Styling', pct: 5 },
    { label: 'Entertainment & Artists', pct: 4 },
    { label: 'Wedding Planner Fee', pct: 5 },
    { label: 'Groom Attire & Grooming', pct: 3 },
    { label: 'Guest Hospitality & Gifts', pct: 3 },
    { label: 'Travel & Transfers', pct: 1 },
    { label: 'Stationery & E-Invites', pct: 1 },
    { label: 'Contingency Buffer', pct: 5 }
  ];

  const formatINR = (val: number) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  const handleToggleQuestion = (index: number) => {
    setCheckedQuestions((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const completedCount = Object.values(checkedQuestions).filter(Boolean).length;

  const muhuratDates2026 = [
    { month: 'January 2026', dates: ['Jan 16', 'Jan 17', 'Jan 21', 'Jan 28'] },
    { month: 'February 2026', dates: ['Feb 4', 'Feb 12', 'Feb 18', 'Feb 24', 'Feb 26'] },
    { month: 'April 2026', dates: ['Apr 18', 'Apr 20', 'Apr 25', 'Apr 29'] },
    { month: 'May 2026', dates: ['May 3', 'May 7', 'May 14', 'May 21', 'May 28'] },
    { month: 'November 2026', dates: ['Nov 19', 'Nov 20', 'Nov 24', 'Nov 28', 'Nov 29'] },
    { month: 'December 2026', dates: ['Dec 4', 'Dec 8', 'Dec 11', 'Dec 14'] }
  ];

  const muhuratDates2027 = [
    { month: 'January 2027', dates: ['Jan 15', 'Jan 22', 'Jan 27'] },
    { month: 'February 2027', dates: ['Feb 5', 'Feb 11', 'Feb 19', 'Feb 23'] },
    { month: 'November 2027', dates: ['Nov 21', 'Nov 25', 'Nov 30'] },
    { month: 'December 2027', dates: ['Dec 3', 'Dec 7', 'Dec 12'] }
  ];

  return (
    <section id="resources" className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
            Free Planning Tools
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Clarity Before Commitment
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-xl mx-auto">
            Practical resources engineered by Global Plannerss to take the mystery out of wedding dates, vendor contracts, and budget allocations.
          </p>
        </div>

        {/* 3 Interactive Accordion Tools */}
        <div className="space-y-6">
          {/* Tool 1: Hindu Wedding Muhurats */}
          <details className="bg-[#171410] border border-stone-800 rounded-2xl overflow-hidden shadow-lg group" open>
            <summary className="p-6 cursor-pointer flex items-center justify-between text-left select-none border-b border-stone-800/60 bg-[#1A1613]">
              <div className="flex items-center gap-3">
                <span className="text-lg">🕉</span>
                <span className="font-serif text-lg sm:text-xl font-semibold text-white group-hover:text-[#E5D7B7] transition">
                  Hindu Wedding Muhurat Dates {globalPlannerssConfig.SEASON_YEARS}
                </span>
              </div>
              <span className="text-[#C19A4B] text-xl font-bold">+</span>
            </summary>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-xs text-stone-400 leading-relaxed mb-4 font-sans">
                  Auspicious windows calculated from the Hindu Panchang. Always confirm specific lagna with your family pandit.
                </p>

                {/* Unlock banner if not unlocked */}
                {!unlockedMuhurat ? (
                  <div className="p-5 rounded-xl bg-[#221C16] border border-[#C19A4B]/30 mb-6">
                    <h4 className="font-serif font-semibold text-white text-sm mb-1">
                      Unlock the Full 2026–27 Auspicious Calendar
                    </h4>
                    <p className="text-xs text-stone-400 mb-3">
                      Enter your email to unlock all months and request availability review for your shortlisted dates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={unlockEmail}
                        onChange={(e) => setUnlockEmail(e.target.value)}
                        className="flex-1 px-3 py-2 rounded bg-stone-900 border border-stone-700 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#C19A4B]"
                      />
                      <button
                        onClick={() => setUnlockedMuhurat(true)}
                        className="px-5 py-2 rounded bg-[#C19A4B] text-[#171410] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-110 transition"
                      >
                        Unlock Calendar →
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-700/40 text-emerald-300 text-xs mb-6 text-center">
                    ✓ Full Calendar Unlocked. Our Director is ready to check these dates with you.
                  </div>
                )}

                {/* Year Switcher */}
                <div className="flex gap-2 mb-6">
                  {(['2026', '2027'] as const).map((year) => (
                    <button
                      key={year}
                      onClick={() => setMuhuratYear(year)}
                      className={`flex-1 py-2 rounded text-xs font-sans font-semibold tracking-wider transition border ${
                        muhuratYear === year
                          ? 'bg-[#C19A4B] text-[#171410] border-[#C19A4B]'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
                      }`}
                    >
                      {year} Muhurats
                    </button>
                  ))}
                </div>

                {/* Dates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {(muhuratYear === '2026' ? muhuratDates2026 : muhuratDates2027).map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-stone-900/60 border border-stone-800">
                      <span className="font-serif text-sm font-semibold text-[#E5D7B7] block mb-2">
                        {item.month}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.dates.map((d, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-black/60 text-[#C19A4B] text-xs font-mono border border-stone-800">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </details>

          {/* Tool 2: 10 Questions Checklist */}
          <details className="bg-[#171410] border border-stone-800 rounded-2xl overflow-hidden shadow-lg group">
            <summary className="p-6 cursor-pointer flex items-center justify-between text-left select-none border-b border-stone-800/60 bg-[#1A1613]">
              <div className="flex items-center gap-3">
                <span className="text-lg">✓</span>
                <span className="font-serif text-lg sm:text-xl font-semibold text-white group-hover:text-[#E5D7B7] transition">
                  10 Questions to Ask Any Wedding Planner
                </span>
              </div>
              <span className="text-[#C19A4B] text-xl font-bold">+</span>
            </summary>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-400 pb-2 border-b border-stone-800">
                <span>Before you sign any planning agreement — tick each one off:</span>
                <span className="font-serif text-[#C19A4B] font-bold">{completedCount} / 10 Completed</span>
              </div>

              <div className="space-y-2">
                {questionsList.map((q, idx) => (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition ${
                      checkedQuestions[idx] ? 'bg-[#C19A4B]/10 text-white' : 'hover:bg-white/5 text-stone-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedQuestions[idx]}
                      onChange={() => handleToggleQuestion(idx)}
                      className="mt-1 accent-[#C19A4B] cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm font-sans">{q}</span>
                  </label>
                ))}
              </div>

              <p className="text-[11px] text-stone-500 text-center pt-4">
                A complimentary accountability resource from {globalPlannerssConfig.SITE_NAME}.
              </p>
            </div>
          </details>

          {/* Tool 3: How should I budget my wedding? */}
          <details className="bg-[#171410] border border-stone-800 rounded-2xl overflow-hidden shadow-lg group" open>
            <summary className="p-6 cursor-pointer flex items-center justify-between text-left select-none border-b border-stone-800/60 bg-[#1A1613]">
              <div className="flex items-center gap-3">
                <span className="text-lg">▦</span>
                <span className="font-serif text-lg sm:text-xl font-semibold text-white group-hover:text-[#E5D7B7] transition">
                  How should I budget my wedding?
                </span>
              </div>
              <span className="text-[#C19A4B] text-xl font-bold">+</span>
            </summary>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Range Slider and Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-serif uppercase tracking-wider text-[#C19A4B]">
                    Total Projected Wedding Budget (₹)
                  </label>
                  <span className="text-xl font-serif font-bold text-white px-3 py-0.5 rounded bg-stone-900 border border-stone-700">
                    {formatINR(totalBudget)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="500000"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(Number(e.target.value))}
                  className="w-full accent-[#C19A4B] bg-stone-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-sans">
                  <span>₹10 Lakhs</span>
                  <span>₹95 Lakhs (Average)</span>
                  <span>₹2.5 Crore</span>
                  <span>₹5.0 Crore</span>
                </div>
              </div>

              {/* 12-Category Allocation Table */}
              <div className="divide-y divide-stone-800/80 font-sans text-xs sm:text-sm">
                {budgetCategories.map((cat, idx) => {
                  const amt = (totalBudget * cat.pct) / 100;
                  return (
                    <div key={idx} className="py-2.5 flex justify-between items-center text-stone-300">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-[#C19A4B] font-bold w-10">
                          {cat.pct}%
                        </span>
                        <span>{cat.label}</span>
                      </div>
                      <span className="font-serif font-semibold text-white">
                        {formatINR(amt)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Total Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#221A14] to-[#171410] border border-[#C19A4B]/40 flex justify-between items-center">
                <span className="font-serif text-sm uppercase tracking-wider text-stone-300">
                  Total Managed Investment
                </span>
                <span className="text-2xl font-serif font-bold text-[#E5D7B7]">
                  {formatINR(totalBudget)}
                </span>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`https://wa.me/${globalPlannerssConfig.WHATSAPP}?text=Hi%20Global%20Plannerss,%20can%20I%20get%20the%20editable%20budget%20planner%20sheet%20for%20${encodeURIComponent(formatINR(totalBudget))}?`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#C19A4B] underline underline-offset-4 hover:text-[#E5D7B7] transition font-sans"
                >
                  Want this as an editable sheet tailored to your wedding? Ask us on WhatsApp →
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
