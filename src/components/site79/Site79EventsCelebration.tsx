import React from 'react';
import { Crown, Sparkles, Cake, Wine, Users, Shield, ArrowRight, Check } from 'lucide-react';
import { site79Config } from '../../config/site79Config';

interface Site79EventsCelebrationProps {
  onOpenTableBooking: (celebrationType?: string) => void;
}

export const Site79EventsCelebration: React.FC<Site79EventsCelebrationProps> = ({
  onOpenTableBooking
}) => {
  const celebrationTypes = [
    {
      title: 'Milestone Birthdays',
      tagline: 'The Ultimate Golden Celebration',
      description:
        'Elevate your birthday with personal sparkler bottle trains, custom LED name greetings across our central 3D screens, and complimentary gourmet pastry chef cake presentation.',
      icon: Cake,
      features: ['Personalized DJ Shoutout', 'Custom LED Greetings Wall', 'Sparkler Bottle Parade', 'Reserved Mezzanine Table']
    },
    {
      title: 'Bachelor & Bachelorette',
      tagline: 'Last Nights of Freedom in Style',
      description:
        'Fast-track red carpet entry for your entire crew, premium champagne towers, bespoke shooter rounds, and dedicated private concierge to orchestrate every detail.',
      icon: Crown,
      features: ['Priority Queue Skip for Group', 'Signature Shooter Cocktails', 'Champagne Well Setup', 'Personal Security Detail']
    },
    {
      title: 'Corporate & Brand Buyouts',
      tagline: 'Full Venue Exclusivity & Gala Events',
      description:
        'Host high-profile brand drops, venture capital celebrations, and corporate galas with full AV production, 30KW Void Acoustics sound, custom LED branding, and tailored banquet menus.',
      icon: Users,
      features: ['Capacity up to 1,500 Guests', 'Custom AV & Stage Rigging', 'Gourmet Tapas & Bar Open Flow', 'Valet Parking Coordination']
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#070604] text-white overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#DFB759]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB759]/10 border border-[#DFB759]/30 text-[#DFB759] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Celebrations & VIP Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Cinzel',serif] uppercase tracking-wide leading-tight">
            Celebrate In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759]">Pure Luxury</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-gray-400 font-light leading-relaxed font-['Inter']">
            Whether welcoming a milestone year, toasting with friends, or hosting a brand showcase, our bespoke concierge curates an electrifying atmosphere tailored entirely to your celebration.
          </p>
        </div>

        {/* 3 Celebrations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {celebrationTypes.map((c, idx) => {
            const IconComponent = c.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-[#0d0b07] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#DFB759]/60 hover:shadow-[0_0_35px_rgba(223,183,89,0.25)] transition-all duration-500 relative"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#DFB759]/10 border border-[#DFB759]/30 flex items-center justify-center text-[#DFB759] mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#DFB759] block mb-1">
                    {c.tagline}
                  </span>

                  <h3 className="font-['Cinzel',serif] text-2xl font-bold text-white mb-3 group-hover:text-[#DFB759] transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6 font-['Inter']">
                    {c.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10 mb-8">
                    {c.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                        <div className="w-4 h-4 rounded-full bg-[#DFB759]/20 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#DFB759] stroke-[3]" />
                        </div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenTableBooking(c.title)}
                  className="w-full py-3 rounded-full bg-[#DFB759] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Plan {c.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Inquiry Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-[#18140c] via-[#100d08] to-[#18140c] border border-[#DFB759]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-bold font-['Cinzel',serif] text-white">
              Have a Custom VIP Group or Celebrity Requirement?
            </h4>
            <p className="text-xs text-gray-400 font-['Inter']">
              Connect directly with our Chief Concierge on WhatsApp for private booth configurations and customized bottle packages.
            </p>
          </div>

          <a
            href={`https://wa.me/${site79Config.WHATSAPP}?text=Hi%20Elysium!%20I%20would%20like%20to%20discuss%20a%20private%20VIP%20celebration.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            Chat with Concierge
          </a>
        </div>
      </div>
    </section>
  );
};
