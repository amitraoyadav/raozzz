import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Clock,
  Calendar,
  X,
  Share2,
  Check,
  ArrowRight,
  Sparkles,
  Tag
} from 'lucide-react';
import { BLOG_ARTICLES, BlogArticle } from '../../data/site82Data';

interface Site82BlogsPageProps {
  initialCategorySlug?: string;
}

export const Site82BlogsPage: React.FC<Site82BlogsPageProps> = ({
  initialCategorySlug = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategorySlug || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { label: 'All Blogs', slug: 'all' },
    { label: 'Vastu Guide', slug: 'vastu-guide' },
    { label: 'Home & Interiors', slug: 'home-interior' },
    { label: 'Legal & Documentation', slug: 'legal-documentation-guide' },
    { label: 'City & Living Guides', slug: 'city-local-living-guide' },
    { label: "India's Luxury Real Estate", slug: 'luxury-real-estate' }
  ];

  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    if (selectedCategory !== 'all' && art.categorySlug !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.author.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#FCFAF9] min-h-screen pt-28 pb-20 text-[#1E2430]">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#F54900] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Advisory &amp; Knowledge Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1E2430] tracking-tight">
            Real Estate Guides &amp; Market Insights
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
            From Vedic Vastu compliance and legal title deed checklists to NCR neighborhood growth forecasts.
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.slug
                    ? 'bg-[#F54900] text-white shadow-md shadow-orange-500/25'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:border-orange-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search guides, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:outline-none focus:border-[#F54900]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase font-mono px-2.5 py-1 rounded-full bg-black/75 text-white backdrop-blur-md">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono mb-2">
                    <span>{art.date}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-bold text-lg text-[#1E2430] group-hover:text-[#F54900] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs border-t border-neutral-100 mt-4">
                <span className="font-semibold text-neutral-800">By {art.author}</span>
                <span className="text-[#F54900] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl relative text-[#1E2430]">
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <span className="text-xs font-mono uppercase font-bold text-[#F54900]">
                {activeArticle.category} · {activeArticle.readTime}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-500 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E2430] leading-tight">
                {activeArticle.title}
              </h1>

              <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono pb-4 border-b border-neutral-100">
                <span>By {activeArticle.author}</span>
                <span>·</span>
                <span>Published on {activeArticle.date}</span>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
                <img src={activeArticle.imageUrl} alt={activeArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="text-sm sm:text-base text-neutral-700 leading-relaxed space-y-4 font-normal">
                {activeArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-neutral-200 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-neutral-400">Topics:</span>
                {activeArticle.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
