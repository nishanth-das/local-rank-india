"use client";

import { useReveal } from "@/hooks/useReveal";

export default function SocialProofBar() {
  const { ref, visible } = useReveal();

  const cities = [
    "Agartala",
    "Guwahati",
    "Shillong",
    "Silchar",
    "Imphal",
    "Patna",
    "Ranchi",
    "Bhubaneswar",
    "Raipur",
    "Coimbatore",
    "Madurai",
    "Nagpur",
    "Indore",
    "Jorhat",
    "Dibrugarh",
  ];

  // Repeat cities to ensure the marquee fills wide screens
  const marqueeItems = [...cities, ...cities, ...cities];

  return (
    <section id="social-proof" className="bg-[#0A0F1E] py-12 border-y border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-10 bg-[#1B4FFF] blur-[60px] opacity-20 pointer-events-none"></div>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#9CA3AF] font-semibold text-sm uppercase tracking-wider mb-4">
              Trusted by local businesses across India
            </p>
            <div className="flex gap-8 md:gap-12 flex-wrap">
              <div>
                <div className="text-4xl font-extrabold text-white font-display">
                  50<span className="text-[#FF6B2B]">+</span>
                </div>
                <div className="text-[#9CA3AF] text-sm mt-1 font-medium">Websites Built</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-white font-display">
                  10<span className="text-[#1B4FFF]">+</span>
                </div>
                <div className="text-[#9CA3AF] text-sm mt-1 font-medium">Industries Served</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-white font-display">
                  15<span className="text-[#10B981]">+</span>
                </div>
                <div className="text-[#9CA3AF] text-sm mt-1 font-medium">Cities Across India</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative fade-edges md:pl-10 md:border-l border-white/10">
            <div className="flex w-max animate-marquee space-x-12 items-center">
              {marqueeItems.map((city, idx) => (
                <div key={idx} className="flex items-center space-x-12 group">
                  <span className="text-white/40 font-display font-bold text-xl lg:text-2xl group-hover:text-white group-hover:opacity-100 transition-all cursor-default">
                    {city}
                  </span>
                  <span className="text-[#E2E8F0]/10 text-lg">●</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
