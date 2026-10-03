import React, { useState } from 'react';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  ChevronRight,
  Calculator,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowLeft,
  Home,
} from 'lucide-react';
import { BLOG_POSTS, BlogPost, BRAND_CONFIG, buildWhatsAppLink, GroupAchLoanType } from '../../../data/groupAchData';

interface GroupAchBlogPageProps {
  onOpenApplyModal: (loanType?: GroupAchLoanType, note?: string) => void;
  onNavigate: (path: string) => void;
}

export const GroupAchBlogPage: React.FC<GroupAchBlogPageProps> = ({
  onOpenApplyModal,
  onNavigate,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Eligibility', 'Documentation', 'Balance Transfer', 'Property'];

  const filteredPosts =
    activeFilter === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-slate-900 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          {selectedPost ? (
            <>
              <button
                onClick={() => setSelectedPost(null)}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                Guides &amp; Articles
              </button>
              <span>/</span>
              <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-md">
                {selectedPost.title}
              </span>
            </>
          ) : (
            <span className="text-slate-900 font-semibold">Guides &amp; Articles</span>
          )}
        </div>
      </nav>

      {/* Article Detail View */}
      {selectedPost ? (
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 mb-6 bg-white px-3 py-1.5 rounded-full border border-slate-200 transition-colors shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </button>

          <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                {selectedPost.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {selectedPost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {selectedPost.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <User className="w-3.5 h-3.5 text-slate-400" />
                {selectedPost.author}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {selectedPost.title}
            </h1>

            {/* Summary Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAF9] border-l-4 border-[#2F483E] mb-8 text-sm text-slate-700 leading-relaxed">
              <p className="font-medium text-slate-900 mb-1">Executive Summary:</p>
              {selectedPost.summary}
            </div>

            {/* Key Takeaways Card */}
            {selectedPost.keyTakeaways && selectedPost.keyTakeaways.length > 0 && (
              <div className="mb-8 p-5 sm:p-6 bg-amber-50/60 rounded-2xl border border-amber-200/70">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  Key Advisory Takeaways
                </h3>
                <ul className="space-y-2.5">
                  {selectedPost.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Article Body */}
            <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* In-Article Advisory CTA Card */}
            <div className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-[#192721] rounded-2xl text-white shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Free Consultation Desk
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                    Have questions about this loan topic?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg leading-relaxed">
                    Connect with Group ACH loan advisors for zero-fee evaluation across 70+ partner banks and customized eligibility review.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => onOpenApplyModal('home_loan', `From Guide: ${selectedPost.title}`)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={buildWhatsAppLink(`Hi Group ACH, I just read your article "${selectedPost.title}" and would like advice on my loan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : (
        /* Blog List View */
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2F483E] bg-[#E8EFEA] px-3 py-1 rounded-full">
              Financial Knowledge Base
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 tracking-tight">
              Home Loan &amp; Property Finance Guides
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Clear, practical advice on eligibility, tax benefits, documentation, and lender selection across Delhi NCR and India.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group cursor-pointer hover:border-[#2F483E]/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#2F483E] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 mt-2.5 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{post.date}</span>
                  <span className="font-bold text-[#2F483E] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-14 p-6 sm:p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Looking for a quick loan calculation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Use our interactive EMI calculator, borrowing capacity estimator, or balance transfer tool.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/calculators')}
              className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
            >
              <Calculator className="w-4 h-4" />
              <span>Open Calculators</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
