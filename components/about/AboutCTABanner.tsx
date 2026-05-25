import React from 'react'
import Link from 'next/link'
import { WHATSAPP_DEFAULT } from '@/lib/constants'

export default function AboutCTABanner() {
  return (
    <section className="bg-gradient-to-r from-[#1B4FFF] to-[#1540CC] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B2B] opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-white text-4xl md:text-5xl font-extrabold font-display">
          Let&apos;s Build Something Great Together
        </h2>
        
        <p className="text-blue-100 mt-6 text-lg max-w-xl mx-auto leading-relaxed">
          If you&apos;re a local business owner who wants to grow online, we&apos;d love to hear about your business. Free consultation — no obligation.
        </p>
        
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <Link href="/contact" className="bg-[#FF6B2B] text-white rounded-full px-8 py-4 font-bold hover:bg-[#e55a20] transition-colors shadow-lg shadow-[#FF6B2B]/20">
            Get Free Quote
          </Link>
          <a 
            href={WHATSAPP_DEFAULT} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-[#1B4FFF] rounded-full px-8 py-4 font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-white/10"
          >
            WhatsApp Us
          </a>
        </div>
        
        <p className="text-blue-200 text-sm text-center mt-8 font-medium">
          ⚡ Usually respond within 2 hours · Based in Agartala, Tripura
        </p>
        
      </div>
    </section>
  )
}
