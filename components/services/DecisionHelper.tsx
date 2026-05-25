"use client";

import { useState } from "react";
import { Globe, MapPin } from "lucide-react";
import Link from "next/link";

export default function DecisionHelper() {
  const [selected, setSelected] = useState<"none" | "A" | "B">("none");

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <div className="bg-[#F8F9FF] p-8 rounded-3xl border border-[#E2E8F0]">
        <h3 className="font-display font-bold text-xl text-[#0A0F1E] mb-6 text-center">
          Does your business currently have a website?
        </h3>
        
        <div className="space-y-4">
          <button
            onClick={() => setSelected("A")}
            className={`w-full p-6 text-left border-2 rounded-2xl transition-all duration-300 focus:outline-none group shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-between ${
              selected === "A"
                ? "border-[#1B4FFF] bg-[#1B4FFF]/5 shadow-[0_8px_30px_rgba(27,79,255,0.12)] -translate-y-1"
                : "border-[#E2E8F0] hover:border-[#1B4FFF]/50 bg-white"
            }`}
          >
            <span className={`font-bold text-lg transition-colors ${selected === "A" ? "text-[#1B4FFF]" : "text-[#0A0F1E] group-hover:text-[#1B4FFF]"}`}>
              No, I don&apos;t have a website yet
            </span>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selected === "A" ? "border-[#1B4FFF] bg-[#1B4FFF]" : "border-[#CBD5E1]"}`}>
              {selected === "A" && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
          </button>
          
          <button
            onClick={() => setSelected("B")}
            className={`w-full p-6 text-left border-2 rounded-2xl transition-all duration-300 focus:outline-none group shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-between ${
              selected === "B"
                ? "border-[#FF6B2B] bg-[#FF6B2B]/5 shadow-[0_8px_30px_rgba(255,107,43,0.12)] -translate-y-1"
                : "border-[#E2E8F0] hover:border-[#FF6B2B]/50 bg-white"
            }`}
          >
            <span className={`font-bold text-lg transition-colors ${selected === "B" ? "text-[#FF6B2B]" : "text-[#0A0F1E] group-hover:text-[#FF6B2B]"}`}>
              Yes, I have a website already
            </span>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selected === "B" ? "border-[#FF6B2B] bg-[#FF6B2B]" : "border-[#CBD5E1]"}`}>
              {selected === "B" && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
          </button>
        </div>

        {/* Result A */}
        {selected === "A" && (
          <div className="mt-8 p-8 bg-white rounded-[2rem] border border-[#1B4FFF]/20 shadow-[0_20px_50px_rgba(27,79,255,0.08)] opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease-out_forwards]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="bg-gradient-to-br from-[#1B4FFF] to-[#1540CC] p-4 rounded-2xl shrink-0 shadow-lg shadow-blue-500/30">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-[#0A0F1E] mb-3">
                  You Need: A Website First
                </h4>
                <p className="text-[#4A5568] mb-8 font-medium leading-relaxed">
                  Start with a professional website. Once it&apos;s live, we&apos;ll also set up your Google Business Profile to complete your online presence.
                </p>
                <Link
                  href="/services/website-development"
                  className="inline-flex items-center gap-2 bg-[#1B4FFF] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1540CC] transition-colors shadow-lg shadow-blue-500/20 active:scale-95"
                >
                  Get a Website →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Result B */}
        {selected === "B" && (
          <div className="mt-8 p-8 bg-white rounded-[2rem] border border-[#FF6B2B]/20 shadow-[0_20px_50px_rgba(255,107,43,0.08)] opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease-out_forwards]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="bg-gradient-to-br from-[#FF6B2B] to-[#FF8B5B] p-4 rounded-2xl shrink-0 shadow-lg shadow-orange-500/30">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-[#0A0F1E] mb-3">
                  You Need: Google My Business Setup
                </h4>
                <p className="text-[#4A5568] mb-8 font-medium leading-relaxed">
                  Great — let&apos;s make sure people can find your existing business on Google Maps and in local search results.
                </p>
                <Link
                  href="/services/google-my-business"
                  className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#e55a20] transition-colors shadow-lg shadow-orange-500/20 active:scale-95"
                >
                  Set Up GMB →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Third Option */}
      <div className="mt-8 text-center bg-white p-8 rounded-[2rem] border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#1B4FFF]/30 transition-all duration-300">
        <p className="text-[#4A5568] mb-4 font-medium text-lg">Want both? We offer a combined package.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-[#1B4FFF] font-bold text-lg hover:text-[#1540CC] transition-colors group"
        >
          Get Free Quote for Both <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
