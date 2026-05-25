"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Industries() {
  const { ref, visible } = useReveal();

  const industries = [
    { emoji: "🏥", label: "Doctor / Clinic" },
    { emoji: "🦷", label: "Dental Clinic" },
    { emoji: "💪", label: "Gym & Fitness" },
    { emoji: "💇", label: "Salon & Spa" },
    { emoji: "⚖️", label: "Lawyer / CA" },
    { emoji: "🏨", label: "Hotel & Resort" },
    { emoji: "📸", label: "Photographer" },
    { emoji: "🎓", label: "Coaching Centre" },
    { emoji: "🏠", label: "Real Estate" },
    { emoji: "🍽️", label: "Restaurant" },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#FF6B2B] text-sm font-bold tracking-widest uppercase">
            Who We Work With
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display mt-4 bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent">
            Built for Every Local Business
          </h2>
          <p className="text-[#4A5568] mt-6 text-lg">
            If you have a business and need customers to find you online — we&apos;ve got you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 max-w-5xl mx-auto">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="group inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-full px-5 py-3 md:px-6 md:py-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(27,79,255,0.12)] hover:border-[#1B4FFF]/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="text-2xl md:text-3xl transform group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
              <div className="text-sm md:text-base font-bold text-[#0A0F1E] group-hover:text-[#1B4FFF] transition-colors duration-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
