"use client";

import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface ServiceHeroProps {
  eyebrow: string;
  eyebrowColor?: "blue" | "orange";
  title: string;
  subtext: string;
  buttons: ReactNode;
  image?: ReactNode;
  breadcrumb?: ReactNode;
}

export default function ServiceHero({
  eyebrow,
  eyebrowColor = "orange",
  title,
  subtext,
  buttons,
  image,
  breadcrumb,
}: ServiceHeroProps) {
  const { ref, visible } = useReveal();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const eyebrowClasses =
    eyebrowColor === "orange"
      ? "bg-[#FF6B2B]/20 text-[#FF6B2B]"
      : "bg-[#1B4FFF]/20 text-[#1B4FFF]";

  return (
    <section className="relative bg-[#0A0F1E] pt-32 pb-20 border-b border-white/10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1B4FFF]/20 to-[#FF6B2B]/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {image ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            <div>
              {breadcrumb && <div className="mb-6 text-[#9CA3AF]">{breadcrumb}</div>}
              <div className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest shadow-sm border ${
                eyebrowColor === "orange" ? "bg-[#FF6B2B]/20 text-[#FF6B2B] border-[#FF6B2B]/30" : "bg-[#1B4FFF]/20 text-[#1B4FFF] border-[#1B4FFF]/30"
              }`}>
                {eyebrow}
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-extrabold font-display leading-[1.1] tracking-tight pb-2 text-white">
                {title}
              </h1>
              <p className="text-[#9CA3AF] text-lg md:text-xl mt-6 max-w-xl leading-relaxed font-medium">
                {subtext}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                {buttons}
              </div>
            </div>
            <div className="relative w-full max-w-2xl mx-auto lg:mt-0 pb-10">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#1B4FFF]/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(27,79,255,0.2)] border border-white/10 transform transition-transform hover:-translate-y-2 duration-500 bg-[#0F172A] p-2">
                <div className="rounded-[1.5rem] overflow-hidden bg-[#F8F9FF]">
                  {image}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <div className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest shadow-sm border ${
              eyebrowColor === "orange" ? "bg-[#FF6B2B]/20 text-[#FF6B2B] border-[#FF6B2B]/30" : "bg-[#1B4FFF]/20 text-[#1B4FFF] border-[#1B4FFF]/30"
            }`}>
              {eyebrow}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold font-display leading-[1.1] tracking-tight max-w-5xl mx-auto pb-2 text-white">
              {title}
            </h1>
            <p className="text-[#9CA3AF] text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed font-medium">
              {subtext}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              {buttons}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
