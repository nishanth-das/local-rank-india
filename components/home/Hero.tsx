"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { Star, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="hero"
      className="relative bg-[#F8F9FF] bg-dot-grid pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-br from-[#1B4FFF]/10 to-[#FF6B2B]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left side — Text */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm px-4 py-2 text-sm font-semibold text-[#4A5568] mb-8 hover:shadow-md transition-all">
              <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              India&apos;s #1 Local Web Agency
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold font-display leading-[1.1] text-[#0A0F1E] tracking-tight">
              Websites That Get You <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent">Customers</span>
            </h1>
            
            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-[#4A5568] mt-6 max-w-lg leading-relaxed">
              We build premium, mobile-ready websites for local businesses. No tech jargon, no waiting. <strong className="text-[#0A0F1E]">Go live in just 5 days.</strong>
            </p>
            
            {/* CTA Buttons - Full width on mobile */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative flex items-center justify-center bg-[#1B4FFF] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#1540CC] hover:scale-[1.02] shadow-[0_0_30px_rgba(27,79,255,0.3)] w-full sm:w-auto"
              >
                Get Free Quote 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center justify-center bg-white border-2 border-[#E2E8F0] text-[#0A0F1E] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:border-[#1B4FFF] hover:text-[#1B4FFF] w-full sm:w-auto shadow-sm"
              >
                See Our Work
              </Link>
            </div>
            
            {/* Social Proof Mini */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 flex-wrap bg-white/50 backdrop-blur-sm rounded-2xl py-3 px-5 border border-[#E2E8F0]">
              <div className="flex items-center -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <Image src={`https://i.pravatar.cc/100?img=${i + 15}`} width={32} height={32} alt="User avatar" unoptimized/>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-[#FFB800] gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs font-bold text-[#4A5568] mt-0.5">Trusted by 50+ Businesses</span>
              </div>
            </div>
          </div>

          {/* Right side — Mockup Frame */}
          <div className="relative w-full max-w-2xl mx-auto lg:mt-0 pb-10">
            {/* Decorative Glows */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#FF6B2B]/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            {/* Safari Mockup Frame */}
            <div className="relative bg-white rounded-2xl md:rounded-[2rem] shadow-[0_20px_50px_rgba(10,15,30,0.08)] border border-[#E2E8F0] overflow-hidden transform transition-all hover:scale-[1.02] duration-500">
              
              {/* Mockup Header */}
              <div className="bg-[#F1F5F9] border-b border-[#E2E8F0] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white border border-[#E2E8F0] rounded-md px-24 py-1 text-[10px] font-medium text-[#9CA3AF] shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-sm bg-gray-200"></span>
                    yourbusiness.com
                  </div>
                </div>
              </div>
              
              {/* Mockup Screen Content */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1000&q=80"
                  alt="Beautiful website design preview"
                  fill
                  unoptimized={true}
                  className="object-cover"
                  priority
                />
                
                {/* Floating Success Alert */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/50 flex items-center justify-between gap-6 animate-[bounce_3s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-[#0A0F1E]">New Lead Captured!</div>
                      <div className="text-xs text-[#4A5568] font-medium mt-0.5">Contact form submission</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#1B4FFF] bg-[#1B4FFF]/10 px-2 py-1 rounded-md hidden sm:block">
                    Just now
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
