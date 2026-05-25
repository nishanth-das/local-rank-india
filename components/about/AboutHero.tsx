import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutHero() {
  return (
    <section className="relative bg-[#0A0F1E] py-24 md:py-32 border-b border-white/10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1B4FFF]/20 to-[#FF6B2B]/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FF6B2B]/20 text-[#FF6B2B] text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest border border-[#FF6B2B]/30 shadow-sm">
              OUR STORY
            </div>
            
            <h1 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent font-display text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight font-extrabold pb-2">
              Built in Agartala. <br className="hidden md:block" />Built for India.
            </h1>
            
            <p className="text-[#9CA3AF] text-lg md:text-xl mt-8 max-w-xl leading-relaxed font-medium">
              Local Rank India was created with one simple belief — every local business in India deserves a professional online presence, regardless of where they are or what their budget looks like.
            </p>
            
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-[#1B4FFF] text-white rounded-full px-10 py-5 font-bold hover:bg-[#1540CC] transition-colors shadow-lg shadow-blue-500/30 w-full sm:w-auto text-center text-lg">
                Work With Us →
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative w-full max-w-2xl mx-auto lg:mt-0 pb-10">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#1B4FFF]/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative aspect-[4/3] lg:aspect-square max-h-[500px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(27,79,255,0.2)] border border-white/10 transform transition-transform hover:-translate-y-2 duration-500 bg-[#0F172A] p-2">
              <div className="rounded-[1.5rem] overflow-hidden h-full">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Local Rank India team working on websites for local businesses"
                  fill
                  unoptimized={true}
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
