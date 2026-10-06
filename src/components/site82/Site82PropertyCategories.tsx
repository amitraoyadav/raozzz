import React from 'react';
import {
  Key,
  Coins,
  Sparkles,
  Crown,
  ArrowRight,
  UserCheck,
  Send,
  Building
} from 'lucide-react';

interface Site82PropertyCategoriesProps {
  onSelectCategory: (category: 'ready-to-move' | 'affordable' | 'mid-range' | 'luxury') => void;
  onSendEnquiry: () => void;
}

export const Site82PropertyCategories: React.FC<Site82PropertyCategoriesProps> = ({
  onSelectCategory,
  onSendEnquiry
}) => {
  const categories = [
    {
      id: 'ready-to-move' as const,
      title: 'Ready-to-Move',
      icon: Key,
      desc: 'Move in today with completed RERA-certified homes ready for immediate registration & possession.',
      badge: 'Immediate Keys'
    },
    {
      id: 'affordable' as const,
      title: 'Affordable Living',
      icon: Coins,
      desc: 'High-value budget homes and studio suites under ₹ 60 Lakhs without compromising on connectivity.',
      badge: 'Best Value'
    },
    {
      id: 'mid-range' as const,
      title: 'Mid-Range Family Condos',
      icon: Sparkles,
      desc: 'Spacious 2 & 3 BHK homes in prime sectors offering the sweet-spot of lifestyle amenities & ROI.',
      badge: 'Most Popular'
    },
    {
      id: 'luxury' as const,
      title: 'Ultra Luxury & Penthouses',
      icon: Crown,
      desc: 'Signature residences, golf-course sky mansions, and duplexes crafted for elevated prestige.',
      badge: 'High-Net-Worth'
    }
  ];

  return (
    <section className="px-5 py-12 sm:px-10 sm:py-20 bg-gradient-to-b from-[#F2F3F5] to-[#F7ECDF] relative">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Heading & 4 Category Cards */}
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2430] tracking-tight leading-tight">
              Find the Right Property <br />
              <span className="text-[#F54900]">For Your Goal</span>
            </h2>

            <div className="w-12 h-1 rounded bg-[#F54900] mt-4 mb-3" />

            <p className="text-sm sm:text-base text-[#57606F] leading-relaxed">
              Explore verified properties that match your lifestyle, budget, and investment goals. From{' '}
              <span className="text-[#F54900] font-semibold">ready-to-move homes</span> to{' '}
              <span className="text-[#F54900] font-semibold">luxury residences</span> and{' '}
              <span className="text-[#F54900] font-semibold">affordable apartments</span>, our experts help you make the right choice.
            </p>

            {/* 4 Category Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className="flex flex-col text-left p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#F54900] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F54900] bg-orange-50 px-2 py-0.5 rounded-full">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-[#1F2937] group-hover:text-[#F54900] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-snug">
                      {cat.desc}
                    </p>
                    <span className="mt-3 text-[11px] font-bold text-[#F54900] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Showcase + Floating Advisor Strip */}
          <div className="flex-1 w-full max-w-xl relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-neutral-900 border-4 border-white relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Contemporary Architecture Villa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute top-6 left-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                  Hand-Picked NCR Portfolios
                </span>
                <h4 className="text-xl font-bold mt-1">Prime Integrated Townships</h4>
              </div>
            </div>

            {/* Floating "Talk to a Real Estate Advisor" bar */}
            <div className="w-[92%] sm:w-full mx-auto -mt-10 sm:-mt-8 relative z-20 rounded-2xl bg-[#1F2937] text-white p-4 sm:p-5 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-neutral-700">
              <div className="flex items-center gap-3.5 w-full sm:w-auto">
                <div className="w-11 h-11 rounded-full bg-[#F54900] flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-300 uppercase tracking-wider font-mono">
                    Talk to a
                  </div>
                  <div className="text-base font-bold text-[#F54900]">
                    Real Estate Advisor
                  </div>
                  <div className="text-xs text-neutral-400">
                    Get custom shortlists tailored to your budget.
                  </div>
                </div>
              </div>

              <button
                onClick={onSendEnquiry}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#F54900] hover:bg-[#C7510B] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-1.5"
              >
                <span>SEND ENQUIRY</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
