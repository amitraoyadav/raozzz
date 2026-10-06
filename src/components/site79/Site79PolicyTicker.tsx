import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export const Site79PolicyTicker: React.FC = () => {
  const policyItems = [
    '• No Shorts/Tracks',
    '• No Open Footwear',
    '• Entry Subjected To Management',
    '• Valid Physical Government ID Mandatory',
    '• 25+ Age Requirement',
    '• Stags Allowed Strictly Subject to Screening & Venue Policy',
    '• Dress Code: Glamorous Chic & Upscale Evening Clubwear',
    '• Free-Flow Ladies Drinks on Thursdays till 12:30 AM',
    '• 100% Redeemable Minimum Food & Beverage Cover on VIP Tables'
  ];

  // Floating particles
  const particles = [
    { width: 3.4, height: 3.9, left: 12, delay: 1.2, duration: 18 },
    { width: 2.5, height: 3.3, left: 24, delay: 3.5, duration: 16 },
    { width: 3.6, height: 2.4, left: 38, delay: 0.8, duration: 20 },
    { width: 2.1, height: 3.8, left: 52, delay: 4.2, duration: 15 },
    { width: 3.0, height: 3.3, left: 66, delay: 2.1, duration: 17 },
    { width: 3.6, height: 3.4, left: 78, delay: 5.0, duration: 19 },
    { width: 2.8, height: 2.8, left: 88, delay: 1.8, duration: 14 }
  ];

  return (
    <div className="relative bg-[#050505] overflow-hidden border-y border-[#DFB759]/20 py-2.5">
      {/* Floating Gold Particles in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-[#DFB759] opacity-0"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              left: `${p.left}%`,
              bottom: '-5%',
              animation: `floatParticle ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-70px) translateX(15px); opacity: 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Marquee Ticker */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee items-center gap-6 text-[#DFB759] text-xs sm:text-sm tracking-widest font-semibold uppercase font-['Inter'] whitespace-nowrap">
          {policyItems.concat(policyItems).map((text, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-[#DFB759]">{text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
