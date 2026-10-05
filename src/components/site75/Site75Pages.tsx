import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, ShieldCheck, ArrowRight, Sparkles, Check, Globe } from 'lucide-react';
import { site75Config } from '../../config/site75Config';
import { DESTINATIONS_DATA, SERVICES_DATA, PROJECTS_DATA, DestinationItem, ServiceItem } from '../../data/site75Data';

// ========================================================
// 1. CONTACT CONCIERGE PAGE
// ========================================================
interface ContactConciergePageProps {
  onOpenCallback: () => void;
  onOpenPlanning: () => void;
}

export const ContactConciergePage: React.FC<ContactConciergePageProps> = ({
  onOpenCallback,
  onOpenPlanning
}) => {
  return (
    <div className="py-24 sm:py-32 bg-[#080B12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            Direct Concierge Desks
          </span>
          <h1 className="font-serif font-light text-4xl sm:text-6xl text-white tracking-tight">
            Connect with Aura Luxe
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Whether inquiring about prime wedding dates, private island buyouts, or discreet bridal consultations, our executive concierge stands ready to assist.
          </p>
        </div>

        {/* 3-Column Office & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Mumbai Flagship Atelier */}
          <div className="p-8 rounded-3xl bg-[#0E131F] border border-[#20293D] space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Flagship Atelier
            </span>
            <h3 className="font-serif text-2xl text-white font-medium">
              Mumbai Headquarters
            </h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              {site75Config.ADDRESS}
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{site75Config.PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{site75Config.EMAIL}</span>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=High+Street+Phoenix+Lower+Parel+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#D4AF37] font-medium hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>View Atelier Location on Map</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Regional Concierge Desks */}
          <div className="p-8 rounded-3xl bg-[#0E131F] border border-[#20293D] space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Worldwide Reach
            </span>
            <h3 className="font-serif text-2xl text-white font-medium">
              Regional Desks
            </h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Permanent production and scouting coordinators stationed across our most requested destinations:
            </p>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>• <strong>New Delhi &amp; NCR:</strong> Aerocity Hospitality Pavilion</p>
              <p>• <strong>Rajasthan:</strong> Lake Palace Road, Udaipur</p>
              <p>• <strong>Goa:</strong> Cavelossim Coastal Office</p>
              <p>• <strong>UAE:</strong> Downtown Dubai &amp; Palm Jumeirah</p>
              <p>• <strong>Italy:</strong> Lake Como Partner Salon</p>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="p-8 rounded-3xl bg-[#131A29] border border-[#D4AF37]/30 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
                Immediate Response
              </span>
              <h3 className="font-serif text-2xl text-white font-medium">
                Instant Channels
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Connect directly with our senior wedding concierges via WhatsApp or schedule a dedicated voice briefing.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <a
                href={`https://wa.me/${site75Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(site75Config.WHATSAPP_DEFAULT_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-800/80 hover:bg-emerald-900/80 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onOpenCallback}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#20293D] hover:border-white/40 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Request a Callback</span>
              </button>

              <button
                onClick={onOpenPlanning}
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>Multi-Step Planning Form</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

// ========================================================
// 2. STANDALONE LEGAL & DIRECTORY PAGES
// ========================================================
interface LegalDocumentPageProps {
  type: 'privacy' | 'terms' | 'cookies' | 'accessibility' | 'sitemap';
}

export const LegalDocumentPage: React.FC<LegalDocumentPageProps> = ({ type }) => {
  const titles = {
    privacy: 'Privacy Policy & Guest Confidentiality',
    terms: 'Terms & Conditions of Hospitality Engagement',
    cookies: 'Cookie & Tracking Protocol',
    accessibility: 'Accessibility Commitment',
    sitemap: 'Atelier Directory & Sitemap'
  };

  return (
    <div className="py-24 sm:py-32 bg-[#080B12] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        <div className="space-y-2 border-b border-[#20293D] pb-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            Legal &amp; Governance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-medium">
            {titles[type]}
          </h1>
          <p className="text-xs text-stone-400 font-mono">
            {site75Config.LEGAL_NAME} · Last Updated October 2026
          </p>
        </div>

        {type === 'privacy' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            <p>
              At <strong>{site75Config.BRAND_NAME}</strong>, we hold client confidentiality and data sanctity with the highest level of fiduciary care. We regularly design celebrations for prominent families, business leaders, and cultural figures where discretion is paramount.
            </p>
            <h3 className="font-serif text-lg text-white font-medium">1. Non-Disclosure Commitment</h3>
            <p>
              All client names, guest registries, flight manifests, and private venue coordinates are guarded under strict Non-Disclosure Agreements (NDAs). Our staff and sub-contractors sign legally binding confidentiality agreements prior to event access.
            </p>
            <h3 className="font-serif text-lg text-white font-medium">2. Data Collection &amp; Use</h3>
            <p>
              Information gathered via our planning inquiry form is used exclusively to calibrate your wedding design proposal and orchestrate logistics. We never sell, lease, or distribute private contact information to third-party marketing brokers.
            </p>
            <h3 className="font-serif text-lg text-white font-medium">3. Contacting the Data Protection Officer</h3>
            <p>
              Inquiries regarding our privacy practices can be addressed directly to our compliance team at <span className="text-[#D4AF37]">{site75Config.EMAIL}</span>.
            </p>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            <p>
              These Terms &amp; Conditions govern the professional advisory, design direction, and event production services rendered by <strong>{site75Config.LEGAL_NAME}</strong>.
            </p>
            <h3 className="font-serif text-lg text-white font-medium">1. Engagement &amp; Retainer</h3>
            <p>
              Our atelier secures dates only upon execution of the formal master service agreement and receipt of the non-refundable design initiation retainer. Due to our strict cap of 18 celebrations per year, wedding dates cannot be reserved provisionally.
            </p>
            <h3 className="font-serif text-lg text-white font-medium">2. 100% Open-Book Commercials</h3>
            <p>
              Third-party supplier contracts (venues, floristry, audio-visual fabrication, artists, transport) are negotiated on behalf of the client with zero undisclosed markups. Invoices are provided directly to the client at actuals.
            </p>
            <h3 className="font-serif text-lg text-white font-medium">3. Force Majeure &amp; Weather Contingencies</h3>
            <p>
              For all outdoor and coastal celebrations, our design blueprints include mandatory indoor or waterproof covered weather backups approved during 3D CAD design reviews.
            </p>
          </div>
        )}

        {type === 'cookies' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            <p>
              Our website uses strictly essential session tokens to preserve inquiry form state and respect your preferred currency and display settings. We do not engage in aggressive behavioral ad retargeting.
            </p>
          </div>
        )}

        {type === 'accessibility' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            <p>
              <strong>{site75Config.BRAND_NAME}</strong> is committed to ensuring our digital experiences and physical wedding celebrations are accessible to all guests, including elders, individuals with mobility requirements, and sensory needs.
            </p>
            <h3 className="font-serif text-lg text-white font-medium">Accessible Celebrations</h3>
            <p>
              Every venue floor plan we engineer includes ramp transitions, quiet lounges for sensory relief, and dedicated elder golf cart shuttles across sprawling palace lawns.
            </p>
          </div>
        )}

        {type === 'sitemap' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300">
            <p className="font-light">Complete architectural directory of our wedding atelier and destination portals:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 text-xs font-mono">
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block uppercase tracking-wider">Atelier Overview</span>
                <p>• Homepage (Everlasting Vows)</p>
                <p>• The Atelier Philosophy &amp; Founders</p>
                <p>• Multi-Step Planning Suite</p>
                <p>• Direct Concierge Desks</p>
              </div>

              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block uppercase tracking-wider">Signature Services</span>
                {SERVICES_DATA.map(s => (
                  <p key={s.id}>• {s.title}</p>
                ))}
              </div>

              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block uppercase tracking-wider">Curated Sanctuaries</span>
                {DESTINATIONS_DATA.map(d => (
                  <p key={d.id}>• {d.name} ({d.region})</p>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
