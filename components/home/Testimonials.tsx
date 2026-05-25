"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Testimonials() {
  const { ref, visible } = useReveal();

  const testimonials = [
    {
      quote: "Nishanth built our clinic website in just 4 days. Patients now call us directly from Google. Best investment we made.",
      name: "Dr. Priya Sharma",
      business: "Sharma Dental Clinic",
      city: "Agartala",
      initial: "P",
    },
    {
      quote: "I was skeptical at first, but the website looks so professional. Our gym membership enquiries doubled in 2 months.",
      name: "Rahul Deb",
      business: "FitZone Gym",
      city: "Agartala",
      initial: "R",
    },
    {
      quote: "Finally found someone who understood what a local business in Northeast India actually needs. Highly recommend.",
      name: "Anjali Nath",
      business: "Lens & Life Photography",
      city: "Tripura",
      initial: "A",
    },
  ];

  return (
    <section className="bg-[#F8F9FF] bg-dot-grid py-20 md:py-28">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#FF6B2B] text-sm font-bold tracking-widest uppercase">
            Client Love
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display mt-4 bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(27,79,255,0.12)] border border-[#E2E8F0] flex flex-col hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Premium decorative quote mark */}
              <div className="absolute -top-4 -right-2 text-[120px] font-serif font-black text-[#1B4FFF]/5 group-hover:text-[#1B4FFF]/10 transition-colors duration-500 pointer-events-none select-none leading-none">
                &quot;
              </div>
              
              <div className="text-[#F59E0B] text-lg tracking-widest relative z-10 flex gap-1">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-[#0A0F1E] font-medium mt-6 leading-relaxed flex-grow relative z-10 text-lg">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-8 flex items-center gap-4 relative z-10 pt-6 border-t border-[#E2E8F0] group-hover:border-[#1B4FFF]/20 transition-colors">
                <div className="bg-gradient-to-br from-[#1B4FFF] to-[#1540CC] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl shrink-0 shadow-md">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#0A0F1E] text-base">{t.name}</div>
                  <div className="text-sm text-[#4A5568] font-medium">
                    {t.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#9CA3AF] text-center mt-10">
          *Early client testimonials. More reviews coming as we grow.
        </p>
      </div>
    </section>
  );
}
