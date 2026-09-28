import React, { useState } from 'react';
import {
  DynamicSectionDefinition,
  ReferenceDesignBlueprint
} from '../../types/referenceDesign';
import { BusinessWebsite, ItemOrService } from '../../types';
import {
  Sparkles,
  CheckCircle2,
  Star,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  ShieldCheck,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  Tag,
  ArrowRight,
  TrendingUp,
  Quote
} from 'lucide-react';

interface SectionEngineProps {
  section: DynamicSectionDefinition;
  site: BusinessWebsite;
  palette: ReferenceDesignBlueprint['palette'];
  typography: ReferenceDesignBlueprint['typography'];
  onItemSelect?: (item: ItemOrService) => void;
  onOpenBooking?: () => void;
}

export const DynamicSectionEngine: React.FC<SectionEngineProps> = ({
  section,
  site,
  palette,
  typography,
  onItemSelect,
  onOpenBooking
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const headlineFont = typography.headlineFont;
  const cleanPhone = (site.phone || '').replace(/[^0-9+]/g, '');
  const cleanWhatsapp = (site.whatsapp || site.phone || '').replace(/[^0-9]/g, '');

  const handleWhatsApp = (text: string) => {
    window.open(`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  switch (section.type) {
    case 'brand-story':
      return (
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: `${palette.accentColor}15`, color: palette.accentColor }}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{section.subtitle || 'Our Heritage'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: headlineFont }}>
                {section.title || `About ${site.businessName}`}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {site.description || `Welcome to ${site.businessName}, serving authentic quality and dedicated hospitality in ${site.city || 'our city'}. We pride ourselves on attention to detail, exceptional craft, and enduring community trust.`}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Credentials</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Locally Owned & Operated</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={site.coverUrl || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'}
                alt={site.businessName}
                className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg border border-slate-200"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-xs font-bold text-slate-900">“Dedicated to customer delight every single day.”</p>
                <p className="text-[10px] text-slate-500 mt-1">— {site.ownerName || 'The Management'}</p>
              </div>
            </div>
          </div>
        </section>
      );

    case 'highlights-grid':
      return (
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{section.subtitle || 'Excellence Guaranteed'}</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: headlineFont }}>
              {section.title || 'Why Customers Prefer Us'}
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Every product and service meets strict quality benchmarks with zero compromise.' },
              { icon: Award, title: 'Experienced Specialists', desc: 'Our team brings years of hands-on expertise and certified master proficiency.' },
              { icon: Users, title: 'Direct Personal Care', desc: 'No middlemen. Get direct access to our staff via phone and WhatsApp anytime.' }
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all text-left space-y-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: palette.accentColor }}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{f.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case 'chef-spotlight':
      return (
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden" style={{ backgroundColor: palette.baseBg }}>
          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
                ⭐ {section.subtitle || 'Master Recommendation'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ fontFamily: headlineFont }}>
                {section.title || 'Signature Specialty of the House'}
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Handcrafted using secret recipes and authentic local ingredients. Highly praised by regular patrons as an unmissable highlight.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => handleWhatsApp(`Hello ${site.businessName}! I would like to order your Signature Specialty.`)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-transform active:scale-95 cursor-pointer text-slate-900"
                  style={{ backgroundColor: palette.secondaryAccent || '#facc15' }}
                >
                  Order Specialty on WhatsApp
                </button>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                <img
                  src={site.items?.[0]?.imageUrl || 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'}
                  alt="Specialty"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{site.items?.[0]?.name || 'Specialty Item'}</span>
                  <span className="font-mono font-bold text-amber-300">₹{site.items?.[0]?.price || 399}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    case 'testimonials-marquee':
      return (
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{section.subtitle || 'Community Praise'}</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: headlineFont }}>
              {section.title || 'What Our Customers Say'}
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Amit Sharma', review: 'Exceptional service and quick response on WhatsApp. The team went above and beyond for our order.', rating: 5, city: site.city || 'Delhi' },
              { name: 'Priya Iyer', review: 'Best experience in the neighborhood! Transparent pricing and flawless execution. Highly recommended.', rating: 5, city: site.city || 'Gurgaon' },
              { name: 'Rajesh Verma', review: 'Reliable, courteous, and high standards. Will definitely continue using their services.', rating: 5, city: site.city || 'Noida' }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">“{t.review}”</p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-900">{t.name}</span>
                  <span className="text-slate-400">{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case 'stats-counter':
      return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '10+', label: 'Years of Experience' },
              { number: '5,000+', label: 'Happy Customers' },
              { number: '100%', label: 'Quality Guarantee' },
              { number: '4.9 ★', label: 'Average Local Rating' }
            ].map((s, i) => (
              <div key={i} className="p-4 space-y-1">
                <div className="text-2xl sm:text-4xl font-black text-amber-400 font-mono">{s.number}</div>
                <div className="text-xs text-slate-300 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      );

    case 'booking-banner':
      return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden" style={{ backgroundColor: palette.accentColor }}>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black">{section.title || 'Book Fast on WhatsApp'}</h3>
              <p className="text-xs sm:text-sm text-white/90">{section.subtitle || 'Instant confirmation with zero advance deposit'}</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${cleanPhone}`}
                className="px-4 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => handleWhatsApp(`Hello ${site.businessName}! I would like to make an inquiry or book.`)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Instant</span>
              </button>
            </div>
          </div>
        </section>
      );

    case 'faq-accordion':
      const faqs = [
        { q: `What are the operating hours of ${site.businessName}?`, a: `We are open ${site.openingHours || 'Monday through Sunday, 9:00 AM to 10:00 PM'}.` },
        { q: 'How can I place an order or book an appointment?', a: 'You can call us directly or tap any of the green WhatsApp buttons to message us. We confirm requests within minutes.' },
        { q: 'Do you offer doorstep delivery or home visits?', a: 'Yes, we provide prompt local service across our neighborhood and surrounding radius.' },
        { q: 'What payment methods do you accept?', a: 'We accept UPI (Google Pay, PhonePe, Paytm), cash, debit/credit cards, and net banking.' }
      ];
      return (
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{section.subtitle || 'Got Questions?'}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" style={{ fontFamily: headlineFont }}>
              {section.title || 'Frequently Asked Questions'}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === i ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {openFaqIndex === i && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      );

    case 'trust-badges':
      return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { title: '100% Genuine', subtitle: 'Verified Quality Guarantee' },
              { title: 'Secure Payment', subtitle: 'UPI, Cards & Cash on Delivery' },
              { title: 'Direct WhatsApp', subtitle: 'Fast Personal Assistance' },
              { title: 'Govt. Compliant', subtitle: 'Licensed & Registered Standards' }
            ].map((b, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <h4 className="text-xs font-bold text-slate-900">{b.title}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{b.subtitle}</p>
              </div>
            ))}
          </div>
        </section>
      );

    default:
      return null;
  }
};
