import React from 'react';
import { Globe, MessageSquare, Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC<{ onOpenOrderModal: () => void }> = ({ onOpenOrderModal }) => {
  const { setActiveView, websites } = useApp();

  return (
    <footer className="bg-[#14162B] text-[#8E92A8] pt-16 pb-12 border-t border-[#232742] font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#232742]">
          {/* Brand Col */}
          <div className="lg:col-span-1 space-y-4">
            <button
              onClick={() => setActiveView('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight font-['Fraunces']">
                RaoSitez<span className="text-[#FF6B4A]">.in</span>
              </span>
            </button>
            <p className="text-xs text-[#8E92A8] leading-relaxed">
              Empowering local Indian business owners — cafés, clinics, salons, gyms, boutiques, and stores — with bespoke, fast-loading, mobile-friendly websites at an honest ₹999 launch price.
            </p>
            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href="https://wa.me/919876543210?text=Hello%20RaoSitez,%20I%20want%20to%20create%20a%20website%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[44px] gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 active:bg-emerald-500/30 text-xs font-semibold border border-emerald-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: +91 98765 43210</span>
              </a>
              <button
                onClick={() => setActiveView('contact')}
                className="inline-flex items-center min-h-[44px] gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 text-slate-300 text-xs font-semibold border border-white/10 transition-all text-left cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#FF6B4A] shrink-0" />
                <span>DLF CyberCity, Gurugram NCR</span>
              </button>
            </div>
          </div>

          {/* Marketing Pages Col */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4 font-['Fraunces']">
              Explore RaoSitez
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveView('demo-websites')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  130 Business Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('pricing')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pricing Comparison (₹999)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('case-studies')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Client Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('testimonials')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('blog')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Knowledge Journal & SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('refer-and-earn')}
                  className="hover:text-white transition-colors text-left cursor-pointer text-[#FF6B4A] font-semibold"
                >
                  Refer & Earn ₹300 / Business
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('faq')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Standalone FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Us & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Programmatic City SEO Pages Col */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4 font-['Fraunces']">
              City Website Builders
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Delhi NCR', slug: 'delhi' },
                { name: 'Mumbai', slug: 'mumbai' },
                { name: 'Bangalore', slug: 'bangalore' },
                { name: 'Pune', slug: 'pune' },
                { name: 'Hyderabad', slug: 'hyderabad' },
                { name: 'Jaipur', slug: 'jaipur' },
                { name: 'Lucknow', slug: 'lucknow' },
                { name: 'Ahmedabad', slug: 'ahmedabad' }
              ].map(city => (
                <li key={city.slug}>
                  <button
                    onClick={() => setActiveView('city', city.slug)}
                    className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA]"></span>
                    Website Builder in {city.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Supported Categories Col */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4 font-['Fraunces']">
              Business Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {websites.length > 0 ? (
                websites.slice(0, 6).map(site => (
                  <li key={site.slug}>
                    <button
                      onClick={() => setActiveView('site', site.slug)}
                      className="hover:text-white transition-colors text-left truncate max-w-full block cursor-pointer"
                    >
                      {site.businessName}
                    </button>
                  </li>
                ))
              ) : (
                <>
                  <li><button onClick={() => setActiveView('demo-websites')} className="hover:text-white transition-colors text-left">Cafes & Bakeries</button></li>
                  <li><button onClick={() => setActiveView('demo-websites')} className="hover:text-white transition-colors text-left">Clinics & Doctors</button></li>
                  <li><button onClick={() => setActiveView('demo-websites')} className="hover:text-white transition-colors text-left">Salons & Spas</button></li>
                  <li><button onClick={() => setActiveView('demo-websites')} className="hover:text-white transition-colors text-left">Fitness Gyms & Studios</button></li>
                  <li><button onClick={() => setActiveView('demo-websites')} className="hover:text-white transition-colors text-left">Retail & Kirana Stores</button></li>
                  <li><button onClick={() => setActiveView('demo-websites')} className="hover:text-white transition-colors text-left">Coaching & Tuitions</button></li>
                </>
              )}
              <li>
                <button
                  onClick={() => setActiveView('demo-websites')}
                  className="text-[#FF6B4A] hover:underline font-bold text-[11px] block mt-1 cursor-pointer"
                >
                  View All 130 Categories →
                </button>
              </li>
            </ul>
          </div>

          {/* Guarantee & Order Col */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4 font-['Fraunces']">
              Our Commitments
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E92A8] mb-5">
              <li className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>100% Satisfaction or Refund</span>
              </li>
              <li>Flat ₹999 (90% Launch Offer)</li>
              <li>Zero Hidden Charges</li>
              <li>Ready in 24 Hours</li>
              <li>1 Year Cloud Hosting Included</li>
            </ul>
            <button
              onClick={onOpenOrderModal}
              className="w-full min-h-[44px] py-2.5 px-4 bg-[#FF6B4A] hover:bg-[#F25A38] active:bg-[#d94a2b] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center"
            >
              Order Website (₹999)
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#636882]">
          <p>© {new Date().getFullYear()} RaoSitez.in · Handcrafted for Indian Local Businesses.</p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button onClick={() => setActiveView('faq')} className="hover:text-white cursor-pointer">
              FAQ
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => setActiveView('refer-and-earn')} className="hover:text-white cursor-pointer">
              Partner Referral
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => setActiveView('contact')} className="hover:text-white cursor-pointer">
              Support
            </button>
            <span aria-hidden="true">·</span>
            <span>Zero Subscription Trap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
