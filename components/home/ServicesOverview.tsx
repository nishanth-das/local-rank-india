"use client";

import Link from "next/link";
import { Globe, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function ServicesOverview() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="bg-[#F8F9FF] py-20 md:py-28 relative">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#1B4FFF] text-sm font-bold tracking-widest uppercase bg-[#1B4FFF]/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-[#0A0F1E] tracking-tight">
            Everything You Need to <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent">Get Found Online</span>
          </h2>
          <p className="text-[#4A5568] mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From a stunning website to dominating local Google Maps — we handle everything so you can focus on running your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-20">
          
          {/* Card 1 */}
          <div className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(27,79,255,0.12)] transition-all duration-500 border border-[#E2E8F0] hover:border-[#1B4FFF]/50 flex flex-col h-full overflow-hidden hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1B4FFF]/10 to-transparent rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1B4FFF]/10 mb-8 relative z-10 group-hover:bg-[#1B4FFF] group-hover:scale-110 transition-all duration-500 shadow-sm">
              <Globe className="w-8 h-8 text-[#1B4FFF] group-hover:text-white transition-colors duration-500" />
            </div>
            
            <h3 className="text-2xl font-bold font-display text-[#0A0F1E] mb-4 relative z-10 group-hover:text-[#1B4FFF] transition-colors">
              Website Development
            </h3>
            <p className="text-[#4A5568] mb-8 flex-grow leading-relaxed relative z-10">
              Premium, mobile-ready websites built to convert visitors into paying customers. Go live in 3–5 working days.
            </p>
            
            <ul className="space-y-4 mb-10 text-[#4A5568] font-medium relative z-10">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold">✓</span> 
                Mobile Responsive
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold">✓</span> 
                WhatsApp Integration
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold">✓</span> 
                Secure Hosting Included
              </li>
            </ul>
            
            <Link
              href="/services/website-development"
              className="mt-auto inline-flex items-center gap-2 text-[#0A0F1E] font-bold group-hover:text-[#1B4FFF] transition-colors"
            >
              Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,107,43,0.12)] transition-all duration-500 border border-[#E2E8F0] hover:border-[#FF6B2B]/50 flex flex-col h-full overflow-hidden hover:-translate-y-2 lg:-translate-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B2B]/10 to-transparent rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="absolute top-6 right-6 bg-gradient-to-r from-[#FF6B2B] to-[#FF8B5B] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Most Popular
            </div>

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF6B2B]/10 mb-8 relative z-10 group-hover:bg-[#FF6B2B] group-hover:scale-110 transition-all duration-500 shadow-sm">
              <MapPin className="w-8 h-8 text-[#FF6B2B] group-hover:text-white transition-colors duration-500" />
            </div>
            
            <h3 className="text-2xl font-bold font-display text-[#0A0F1E] mb-4 relative z-10 group-hover:text-[#FF6B2B] transition-colors">
              Google My Business
            </h3>
            <p className="text-[#4A5568] mb-8 flex-grow leading-relaxed relative z-10">
              Get your business listed on Google Maps so customers can find you exactly when they search for services near them.
            </p>
            
            <ul className="space-y-4 mb-10 text-[#4A5568] font-medium relative z-10">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold">✓</span> 
                Google Maps Setup
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold">✓</span> 
                Profile Optimization
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold">✓</span> 
                Local SEO Boost
              </li>
            </ul>
            
            <Link
              href="/services/google-my-business"
              className="mt-auto inline-flex items-center gap-2 text-[#0A0F1E] font-bold group-hover:text-[#FF6B2B] transition-colors"
            >
              Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(27,79,255,0.12)] transition-all duration-500 border border-[#E2E8F0] hover:border-[#1B4FFF]/50 flex flex-col h-full overflow-hidden hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1B4FFF]/10 to-transparent rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1B4FFF]/10 mb-8 relative z-10 group-hover:bg-[#1B4FFF] group-hover:scale-110 transition-all duration-500 shadow-sm">
              <TrendingUp className="w-8 h-8 text-[#1B4FFF] group-hover:text-white transition-colors duration-500" />
            </div>
            
            <h3 className="text-2xl font-bold font-display text-[#0A0F1E] mb-4 relative z-10 group-hover:text-[#1B4FFF] transition-colors">
              SEO & Visibility
            </h3>
            <p className="text-[#4A5568] mb-8 flex-grow leading-relaxed relative z-10">
              We build every website with technical SEO baked in, so you rank higher on Google and attract free organic traffic.
            </p>
            
            <ul className="space-y-4 mb-10 text-[#4A5568] font-medium relative z-10">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold">✓</span> 
                On-Page SEO
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold">✓</span> 
                Lightning Fast Speeds
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold">✓</span> 
                Search Console Setup
              </li>
            </ul>
            
            <Link
              href="/services"
              className="mt-auto inline-flex items-center gap-2 text-[#0A0F1E] font-bold group-hover:text-[#1B4FFF] transition-colors"
            >
              Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
