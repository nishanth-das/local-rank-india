"use client";

import { useReveal } from "@/hooks/useReveal";
import { PhoneCall, Code2, Rocket } from "lucide-react";

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section id="how-it-works" className="bg-[#F8F9FF] bg-dot-grid py-20 md:py-28">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#FF6B2B] text-sm font-bold tracking-widest uppercase">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display mt-4 text-[#0A0F1E]">
            From Zero to Live Website in 5 Days
          </h2>
          <p className="text-[#4A5568] mt-6 text-lg">
            We keep it simple. No confusing tech, no long waits.
          </p>
        </div>

        <div className="relative mt-20 max-w-6xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-[16.66%] right-[16.66%] border-t-2 border-dashed border-[#CBD5E1] z-0"></div>
          
          {/* Connecting line for mobile */}
          <div className="md:hidden absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 border-l-2 border-dashed border-[#CBD5E1] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {/* Step 1 */}
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(27,79,255,0.12)] border border-[#E2E8F0] hover:border-[#1B4FFF]/50 p-8 md:p-10 relative flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1B4FFF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 rounded-2xl bg-[#1B4FFF]/10 text-[#1B4FFF] flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:bg-[#1B4FFF] group-hover:text-white transition-all duration-500">
                <PhoneCall className="w-10 h-10" />
              </div>
              <div className="bg-[#F8F9FF] border border-[#E2E8F0] text-[#4A5568] text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5 relative z-10">
                Day 1
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A0F1E] mb-4 relative z-10 group-hover:text-[#1B4FFF] transition-colors">
                We Talk
              </h3>
              <p className="text-[#4A5568] leading-relaxed relative z-10 font-medium">
                Tell us about your business in a free 10-minute call or WhatsApp message. No forms, no waiting.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,107,43,0.12)] border border-[#E2E8F0] hover:border-[#FF6B2B]/50 p-8 md:p-10 relative flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B2B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 rounded-2xl bg-[#FF6B2B]/10 text-[#FF6B2B] flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:bg-[#FF6B2B] group-hover:text-white transition-all duration-500">
                <Code2 className="w-10 h-10" />
              </div>
              <div className="bg-[#F8F9FF] border border-[#E2E8F0] text-[#4A5568] text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5 relative z-10">
                Day 2–4
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A0F1E] mb-4 relative z-10 group-hover:text-[#FF6B2B] transition-colors">
                We Build
              </h3>
              <p className="text-[#4A5568] leading-relaxed relative z-10 font-medium">
                We design and develop your website using modern tools. You get to review and suggest changes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] border border-[#E2E8F0] hover:border-[#10B981]/50 p-8 md:p-10 relative flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 rounded-2xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:bg-[#10B981] group-hover:text-white transition-all duration-500">
                <Rocket className="w-10 h-10" />
              </div>
              <div className="bg-[#F8F9FF] border border-[#E2E8F0] text-[#4A5568] text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5 relative z-10">
                Day 5
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A0F1E] mb-4 relative z-10 group-hover:text-[#10B981] transition-colors">
                You Launch
              </h3>
              <p className="text-[#4A5568] leading-relaxed relative z-10 font-medium">
                Your website goes live on your domain. We hand over everything and you start getting customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
