import React from 'react'

export default function PortfolioHero() {
  return (
    <section className="relative bg-[#0A0F1E] py-28 md:py-36 border-b border-white/10 overflow-hidden">
      {/* Decorative clean background blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF6B2B]/20 to-transparent rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#FF6B2B]/20 text-[#FF6B2B] text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest border border-[#FF6B2B]/30 shadow-sm">
          OUR WORK
        </div>
        
        <h1 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent font-display text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight font-extrabold pb-2">
          Websites That Work <br className="hidden md:block" />as Hard as You Do
        </h1>
        
        <p className="text-[#9CA3AF] text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed font-medium">
          Every website we build is designed to attract customers, load instantly, and represent your business with pride.
        </p>

        <div className="mt-16 flex justify-center gap-12 flex-wrap bg-white/5 shadow-[0_0_40px_rgba(27,79,255,0.15)] border border-white/10 rounded-3xl py-8 px-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-white font-black text-4xl md:text-5xl font-display">
              50<span className="text-[#FF6B2B]">+</span>
            </div>
            <div className="text-[#9CA3AF] text-sm md:text-base font-semibold mt-2 tracking-wide uppercase">Websites Built</div>
          </div>
          <div className="text-center hidden sm:block w-px bg-white/10"></div>
          <div className="text-center">
            <div className="text-white font-black text-4xl md:text-5xl font-display">
              10<span className="text-[#1B4FFF]">+</span>
            </div>
            <div className="text-[#9CA3AF] text-sm md:text-base font-semibold mt-2 tracking-wide uppercase">Industries Served</div>
          </div>
          <div className="text-center hidden sm:block w-px bg-white/10"></div>
          <div className="text-center">
            <div className="text-white font-black text-4xl md:text-5xl font-display">
              15<span className="text-[#10B981]">+</span>
            </div>
            <div className="text-[#9CA3AF] text-sm md:text-base font-semibold mt-2 tracking-wide uppercase">Cities Across India</div>
          </div>
        </div>
      </div>
    </section>
  )
}
