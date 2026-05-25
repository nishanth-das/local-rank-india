"use client";

import { useReveal } from "@/hooks/useReveal";
import { CheckCircle2, X } from "lucide-react";

export default function WhyUs() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-[#0A0F1E] relative py-20 md:py-28 overflow-hidden border-y border-white/10">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1B4FFF] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#FF6B2B] text-sm font-bold tracking-widest uppercase bg-[#FF6B2B]/10 px-4 py-1.5 rounded-full">
            Why Local Rank India
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display mt-6 text-white">
            Local Knowledge. Big City Quality.
          </h2>
          <p className="text-[#9CA3AF] mt-6 text-lg">
            You get a dedicated builder who understands your market — not a big agency that outsources your project.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          {/* Mobile View (Cards) */}
          <div className="md:hidden space-y-6">
            {[
              { feature: "Delivery Time", us: "3–5 Working Days", them: "4–8 Weeks" },
              { feature: "Hosting Cost", us: "Secure Included", them: "Extra yearly charges" },
              { feature: "Who builds it", us: "Dedicated Expert", them: "Outsourced to juniors" },
              { feature: "Communication", us: "WhatsApp / Direct call", them: "Tickets & email chains" },
              { feature: "Local Understanding", us: "Knows your market", them: "Remote, no local clue" },
              { feature: "Revisions", us: "1 round included", them: "Charged separately" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1B4FFF]"></div>
                <div className="text-white font-bold text-lg mb-4">{item.feature}</div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#10B981] bg-[#10B981]/10 rounded-full p-1"><CheckCircle2 size={14} /></div>
                    <div>
                      <div className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wider mb-0.5">Local Rank India</div>
                      <div className="text-white font-bold">{item.us}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                    <div className="mt-1 text-[#EF4444] bg-[#EF4444]/10 rounded-full p-1"><X size={14} /></div>
                    <div>
                      <div className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wider mb-0.5">Big City Agency</div>
                      <div className="text-[#9CA3AF]">{item.them}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View (Table) */}
          <div className="hidden md:block bg-[#0A0F1E] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(27,79,255,0.15)] relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-6 font-semibold w-1/3 border-b border-white/10"></th>
                    <th className="p-6 font-bold text-white bg-[#1B4FFF] w-1/3 border-b border-[#1B4FFF] text-center text-lg shadow-inner">
                      Local Rank India <span className="inline-block ml-2 bg-white/20 rounded-full p-0.5 text-white"><CheckCircle2 size={18} /></span>
                    </th>
                    <th className="p-6 font-bold text-[#9CA3AF] w-1/3 border-b border-white/10 bg-white/[0.02] text-center text-lg">
                      Big City Agency <span className="inline-block ml-2"><X size={18} /></span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-6 font-semibold text-white">Delivery Time</td>
                    <td className="p-6 font-bold text-white bg-[#1B4FFF]/10 border-x border-[#1B4FFF]/20 text-center">3–5 Working Days</td>
                    <td className="p-6 text-[#9CA3AF] bg-white/[0.02] text-center">4–8 Weeks</td>
                  </tr>
                  <tr className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-6 font-semibold text-white">Hosting Cost</td>
                    <td className="p-6 font-bold text-white bg-[#1B4FFF]/10 border-x border-[#1B4FFF]/20 text-center">Secure Included</td>
                    <td className="p-6 text-[#9CA3AF] bg-white/[0.02] text-center">Extra yearly charges</td>
                  </tr>
                  <tr className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-6 font-semibold text-white">Who builds it</td>
                    <td className="p-6 font-bold text-white bg-[#1B4FFF]/10 border-x border-[#1B4FFF]/20 text-center">Dedicated Expert</td>
                    <td className="p-6 text-[#9CA3AF] bg-white/[0.02] text-center">Outsourced to juniors</td>
                  </tr>
                  <tr className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-6 font-semibold text-white">Communication</td>
                    <td className="p-6 font-bold text-white bg-[#1B4FFF]/10 border-x border-[#1B4FFF]/20 text-center">WhatsApp / Direct call</td>
                    <td className="p-6 text-[#9CA3AF] bg-white/[0.02] text-center">Tickets & email chains</td>
                  </tr>
                  <tr className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-6 font-semibold text-white">Local Understanding</td>
                    <td className="p-6 font-bold text-white bg-[#1B4FFF]/10 border-x border-[#1B4FFF]/20 text-center">Knows your market</td>
                    <td className="p-6 text-[#9CA3AF] bg-white/[0.02] text-center">Remote, no local clue</td>
                  </tr>
                  <tr className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-6 font-semibold text-white">Revisions</td>
                    <td className="p-6 font-bold text-white bg-[#1B4FFF]/10 border-x border-[#1B4FFF]/20 border-b border-b-[#1B4FFF]/20 rounded-b-xl text-center">1 round included</td>
                    <td className="p-6 text-[#9CA3AF] bg-white/[0.02] text-center">Charged separately</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 shadow-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#1B4FFF] text-4xl font-black font-display mb-2 drop-shadow-[0_0_15px_rgba(27,79,255,0.5)]">50+</div>
            <div className="text-[#D1D5DB] font-medium text-sm">Websites Delivered</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 shadow-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#FF6B2B] text-4xl font-black font-display mb-2 drop-shadow-[0_0_15px_rgba(255,107,43,0.5)]">5 Days</div>
            <div className="text-[#D1D5DB] font-medium text-sm">Average Delivery</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 shadow-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#1B4FFF] text-4xl font-black font-display mb-2 drop-shadow-[0_0_15px_rgba(27,79,255,0.5)]">100%</div>
            <div className="text-[#D1D5DB] font-medium text-sm">Mobile Responsive</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 shadow-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#FF6B2B] text-4xl font-black font-display mb-2 drop-shadow-[0_0_15px_rgba(255,107,43,0.5)]">15+</div>
            <div className="text-[#D1D5DB] font-medium text-sm">Cities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
