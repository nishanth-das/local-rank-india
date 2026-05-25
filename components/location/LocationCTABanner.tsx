import React from 'react'
import Link from 'next/link'
import { WHATSAPP_DEFAULT } from '@/lib/constants'
import { CityData } from '@/lib/cities'

interface LocationCTABannerProps {
  city: CityData
}

export default function LocationCTABanner({ city }: LocationCTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-[#1B4FFF] to-[#1540CC] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-white text-4xl md:text-5xl font-extrabold font-display leading-tight">
          Ready to Get Your {city.name} Business Online?
        </h2>
        
        <p className="text-blue-100 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Get in touch for a free quote. We&apos;ll get back to you within 2 hours.
        </p>
        
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <Link 
            href="/contact"
            className="bg-[#FF6B2B] text-white rounded-full px-8 py-4 font-bold hover:bg-[#e55a20] transition-colors shadow-lg"
          >
            Get Free Quote
          </Link>
          <a 
            href={WHATSAPP_DEFAULT} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white rounded-full px-8 py-4 font-bold hover:bg-[#1ebd59] transition-colors shadow-lg"
          >
            WhatsApp Us
          </a>
        </div>
        
      </div>
    </section>
  )
}
