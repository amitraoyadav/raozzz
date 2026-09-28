import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, ArrowLeft, Share2, Sparkles, CheckCircle2, User } from 'lucide-react';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  authorRole: string;
  coverImage: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'why-indian-local-shops-lose-customers-without-whatsapp-website',
    title: 'Why Indian Local Shops Lose 40% Customers Without a WhatsApp-Linked Website',
    excerpt: 'Over 80% of urban Indians check menus and rates on their phone before visiting. Here is why forcing customers to call or wait for manual replies is costing you daily sales.',
    category: 'Local Marketing',
    readTime: '4 min read',
    publishedDate: 'March 24, 2026',
    author: 'Amit Yadav',
    authorRole: 'Founder & Product Lead, RaoSitez',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    content: [
      'The modern Indian consumer has changed drastically. Five years ago, a resident would walk around their neighborhood market looking for a dentist, a tailor, or a bakery. Today, the very first impulse is to pull out their smartphone and search Google Maps.',
      'When they find your listing, what happens next? If you have no website, they must either dial your phone number (which frequently goes unanswered when you are busy serving counter customers) or guess your prices and opening hours.',
      'Meanwhile, nearby competitors who provide a direct link to an interactive mobile website and a 1-click WhatsApp order button receive the order within 30 seconds. Over 40% of potential buyers abandon businesses that do not display upfront prices in Indian Rupees (₹).',
      'By offering a clean, mobile-first website connected straight to your WhatsApp, you eliminate friction. Customers see your services, calculate their budget, and send you a ready-to-fulfill message.'
    ]
  },
  {
    id: 'post-2',
    slug: 'google-maps-vs-own-website-local-seo-2026',
    title: 'Google Maps vs Your Own Website: Why You Need Both to Rank #1 Locally in 2026',
    excerpt: 'A Google Business Profile is a great start, but Google’s algorithm heavily favors businesses that have an authoritative linked website with Schema.org markup.',
    category: 'SEO & Growth',
    readTime: '5 min read',
    publishedDate: 'March 20, 2026',
    author: 'Priya Sharma',
    authorRole: 'Senior Growth Strategist',
    coverImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    content: [
      'Many shop owners ask: "I already have a Google Maps pin. Why do I need a website?"',
      'The truth lies in how Google’s local algorithm calculates relevance and proximity. When two clinics or cafes are within 1 kilometer of a searching customer, Google looks at external validation signals. A verified website containing LocalBusiness structured data (Schema.org) tells Google exactly what services you offer, your exact operating hours, and your service radius.',
      'Listings with an official linked website receive up to 70% more click-throughs and rank substantially higher in the coveted Google "Local 3-Pack" map results.',
      'Moreover, having your own website means you own your digital asset. You are not at the mercy of sudden aggregator fee hikes or arbitrary profile suspensions.'
    ]
  },
  {
    id: 'post-3',
    slug: 'true-cost-of-website-development-india-2026',
    title: 'The True Cost of Website Development in India: Why Paying ₹25,000 is Outdated',
    excerpt: 'Traditional agencies charge small businesses ₹25,000+ for slow WordPress websites that require ongoing developer retainers. Here is why the modern turnkey model costs only ₹999.',
    category: 'Industry Insights',
    readTime: '6 min read',
    publishedDate: 'March 15, 2026',
    author: 'Amit Yadav',
    authorRole: 'Founder, RaoSitez',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    content: [
      'For decades, getting a business website built in India meant hiring a freelance developer or an agency. They would quote ₹20,000 to ₹50,000, take 6 weeks to deliver a bloated WordPress theme, and charge another ₹5,000 every time you needed to update a menu price.',
      'For a local sweet shop, dental clinic, or beauty parlour, this model was completely broken. Small businesses do not need heavy corporate software; they need lightning-fast mobile pages that load in under 1 second on 4G networks.',
      'With automated component architectures and modern cloud hosting, high-performance websites can now be deployed in 24 hours at a fraction of the cost. At ₹999 with 1 full year of hosting included, RaoSitez makes having a website as accessible as buying a paper business card.'
    ]
  },
  {
    id: 'post-4',
    slug: 'countertop-qr-code-highest-roi-marketing',
    title: 'QR Code Standees on Countertops: The Highest ROI Marketing for Indian Retailers',
    excerpt: 'How placing a physical acrylic QR standee at your payment counter turns one-time walk-in shoppers into lifelong direct WhatsApp customers.',
    category: 'Retail Strategy',
    readTime: '3 min read',
    publishedDate: 'March 10, 2026',
    author: 'Rohit Verma',
    authorRole: 'Merchant Success Lead',
    coverImage: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=800&q=80',
    content: [
      'Every retail counter in India today has a UPI payment soundbox or QR standee. Customers are already trained to unlock their phone camera at checkout.',
      'Smart merchants place a second, high-resolution RaoSitez QR code standee right next to their payment scanner: "Scan to View Full Menu & Order from Home via WhatsApp".',
      'When customers scan the standee, your official website opens instantly on their phone. They can bookmark it, add it to their home screen as a web app, and order their favorite dishes, groceries, or laundry pickups directly from home without paying 30% aggregator commission.'
    ]
  }
];

export const BlogPage: React.FC<{ onOpenOrderModal: () => void }> = ({ onOpenOrderModal }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#E8E7F0]/40 to-[#FAFAF8] border-b border-[#E8E7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Knowledge Base & Small Business Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#14162B] font-['Fraunces'] tracking-tight">
            The RaoSitez Growth Journal
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#474B64] leading-relaxed">
            Actionable strategies, local SEO advice, and digital retail guides crafted specifically for Indian small business owners.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {selectedPost ? (
          /* ARTICLE DETAIL TEMPLATE */
          <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E8E7F0] shadow-sm animate-reveal">
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4338CA] hover:underline mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all articles</span>
            </button>

            <div className="flex items-center gap-3 text-xs text-[#636882] mb-3">
              <span className="px-2.5 py-0.5 rounded-md bg-[#4338CA]/10 text-[#4338CA] font-bold text-[11px]">
                {selectedPost.category}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime}
              </span>
              <span>·</span>
              <span>{selectedPost.publishedDate}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14162B] font-['Fraunces'] leading-tight mb-6">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-3 pb-6 border-b border-[#E8E7F0] mb-8">
              <div className="w-10 h-10 rounded-full bg-[#14162B] text-white flex items-center justify-center font-bold text-xs">
                {selectedPost.author.charAt(0)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#14162B] block">{selectedPost.author}</span>
                <span className="text-[11px] text-[#8E92A8]">{selectedPost.authorRole}</span>
              </div>
            </div>

            <div className="aspect-16/9 rounded-2xl overflow-hidden mb-8 bg-slate-100">
              <img
                src={selectedPost.coverImage}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Body copy */}
            <div className="prose max-w-none space-y-5 text-sm sm:text-base text-[#3C3F58] leading-relaxed">
              {selectedPost.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* In-Article Conversion Card */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FAFAF8] border border-[#E8E7F0] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-[#14162B] font-['Fraunces']">
                  Put Your Business Online in 24 Hours
                </h4>
                <p className="text-xs text-[#474B64] mt-1">
                  Turn your local business into a high-converting digital storefront for just ₹999.
                </p>
              </div>
              <button
                onClick={onOpenOrderModal}
                className="px-5 py-3 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer shrink-0"
              >
                Launch My Website (₹999)
              </button>
            </div>
          </article>
        ) : (
          /* ARTICLES LIST */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map(post => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8E7F0] shadow-sm hover:shadow-md hover:border-[#4338CA]/30 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="aspect-16/10 relative overflow-hidden bg-slate-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#14162B]/80 backdrop-blur-xs text-white text-[10px] font-bold">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-[#8E92A8] mb-2">
                      <span>{post.publishedDate}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#14162B] group-hover:text-[#4338CA] transition-colors leading-snug font-['Fraunces'] line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#474B64] mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E7F0] mt-6 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#8E92A8]">{post.author}</span>
                    <span className="text-xs font-bold text-[#4338CA] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
