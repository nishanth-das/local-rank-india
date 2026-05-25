import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_DEFAULT } from '@/lib/constants'
import { CityData } from '@/lib/cities'

interface LocationHeroProps {
  city: CityData
}

export default function LocationHero({ city }: LocationHeroProps) {
  return (
    <section className="relative bg-[#0A0F1E] py-24 md:py-32 border-b border-white/10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1B4FFF]/20 to-[#FF6B2B]/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-2 text-[#9CA3AF] text-xs font-semibold tracking-wider uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#4A5568]">/</span>
              <span className="text-[#4A5568]">Web Design</span>
              <span className="text-[#4A5568]">/</span>
              <span className="text-white">{city.name}</span>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-[#FF6B2B]/20 text-[#FF6B2B] text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest border border-[#FF6B2B]/30 shadow-sm">
              WEBSITE DESIGN IN {city.name.toUpperCase()}
            </div>
            
            <h1 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent font-display text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight font-extrabold pb-2 text-white">
              Professional Website Design in {city.name}
            </h1>
            
            <p className="text-[#9CA3AF] text-lg md:text-xl mt-8 leading-relaxed max-w-xl font-medium">
              We build premium, fast, and highly-converting websites for local businesses in {city.name}, {city.state}. Go live in 5 days.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact"
                className="bg-[#1B4FFF] text-white rounded-full px-8 py-4 text-center font-bold hover:bg-[#1540CC] transition-colors shadow-lg shadow-blue-500/30 text-lg w-full sm:w-auto"
              >
                Get Free Quote
              </Link>
              <a 
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white rounded-full px-8 py-4 font-bold hover:bg-[#1ebd59] transition-colors shadow-lg flex items-center justify-center gap-2 text-lg w-full sm:w-auto"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative w-full max-w-2xl mx-auto lg:mt-0 pb-10">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#1B4FFF]/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(27,79,255,0.2)] border border-white/10 transform transition-transform hover:-translate-y-2 duration-500 bg-[#0F172A] p-2">
              <div className="rounded-[1.5rem] overflow-hidden h-full relative">
                <Image 
                  src={city.image}
                  alt={`Website design services in ${city.name}, ${city.state}`}
                  fill
                  className="object-cover"
                  priority={true}
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/90 via-[#0A0F1E]/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-8 left-8 text-white font-bold text-lg tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                  {city.landmark ? city.landmark : city.name}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
