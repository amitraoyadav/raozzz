import React, { useState } from 'react';
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react';
import { GOLDS_GYM_BLOGS } from '../../data/goldsGymData';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenFreeTrial: () => void;
  onSelectBlog?: (slug: string) => void;
}

export const GoldsGymFooter: React.FC<FooterProps> = ({
  onNavClick,
  onOpenFreeTrial,
  onSelectBlog
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer id="footer-main" className="bg-[#111111] text-stone-300 font-['Montserrat',sans-serif] pt-14 pb-8 border-t-4 border-[#FFE400]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Quick Links (5 Cols) */}
          <div className="lg:col-span-5">
            <h4 className="text-white text-base font-extrabold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FFE400] inline-block rounded-xs"></span>
              <span>Quick Links</span>
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-xs font-medium">
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => onNavClick('gyms')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Gym Locator (156+ Clubs)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('about')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('contact')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Become an Influencer with Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('careers')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('testimonials')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('press')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Press Room
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('events')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Our Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('programs')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Group Program (GGX Studio)
                  </button>
                </li>
              </ul>

              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => onNavClick('blogs')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Blogs & Nutrition
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('programs')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Corporate Wellness Program
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('gallery')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('franchise')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Own a Franchise
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('ggfi')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left text-[#FFE400] font-bold"
                  >
                    Fitness Institute (GGFI)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('contact')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left"
                  >
                    Advertise with Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavClick('membership')}
                    className="hover:text-[#FFE400] transition-colors cursor-pointer text-left font-bold text-white"
                  >
                    Buy Membership Now
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenFreeTrial}
                    className="text-[#FFE400] hover:underline transition-all cursor-pointer text-left font-bold"
                  >
                    Claim 1-Day Free Trial
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 2: Newsletter & Socials (3.5 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-base font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FFE400] inline-block rounded-xs"></span>
              <span>Newsletter</span>
            </h4>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed">
              Sign up for our mailing list to receive the latest workout guides, special membership discounts, and event passes.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-600/50 rounded-xl p-3 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are now subscribed to Gold's Gym updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#1c1c1f] border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#FFE400]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FFE400] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe Now</span>
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="mt-6">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">
                Follow Gold's Gym India
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/GoldsGymIndia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#FFE400] hover:text-black text-stone-300 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/GoldsGymIndia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#FFE400] hover:text-black text-stone-300 flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCCPNLx0irb9sbFdsdTCV6rg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#FFE400] hover:text-black text-stone-300 flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/goldsgymindia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#FFE400] hover:text-black text-stone-300 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/gold-s-gym-india/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#FFE400] hover:text-black text-stone-300 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Latest Blog (3.5 Cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-base font-extrabold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FFE400] inline-block rounded-xs"></span>
              <span>Latest Blog</span>
            </h4>
            <div className="space-y-3.5">
              {GOLDS_GYM_BLOGS.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => onSelectBlog ? onSelectBlog(blog.slug) : onNavClick('blogs')}
                  className="group flex gap-3 cursor-pointer items-start p-2 rounded-lg hover:bg-stone-900 transition-colors"
                >
                  <div className="w-16 h-14 rounded-md overflow-hidden bg-stone-800 shrink-0">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-stone-200 group-hover:text-[#FFE400] transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </p>
                    <span className="text-[10px] text-stone-500 block mt-1">
                      {blog.date} · {blog.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4 border-b border-stone-800">
          <div>
            <p>© 2026 Gold's Gym.in. All Rights Reserved. F2 Fun & Fitness India Pvt. Ltd.</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => onNavClick('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>|</span>
            <button
              onClick={() => onNavClick('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => onNavClick('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>

        {/* Related Searches Section */}
        <div className="pt-6 text-[11px] text-stone-500 leading-relaxed">
          <span className="font-bold text-stone-400 block mb-1">Related Searches:</span>
          <p>
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('gyms')}>Gym Near Me</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('gyms')}>Gold’s Gym Mumbai Bandra</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('programs')}>Corporate Wellness Program</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('programs')}>Personal Training Program</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('membership')}>Gym Memberships Near Me</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('gyms')}>Fitness Near Me</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('gyms')}>Golds Gym Near Me</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('programs')}>Personal Training Near Me</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('gyms')}>Gyms In Pune Kalyani Nagar</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('gyms')}>Gyms In Bengaluru RR Nagar</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('gyms')}>Gyms In Delhi Greater Kailash</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('blogs')}>Gym Workout Routine</span>,{' '}
            <span className="hover:text-stone-300 cursor-pointer" onClick={() => onNavClick('blogs')}>Weight Training for Weight Loss</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
