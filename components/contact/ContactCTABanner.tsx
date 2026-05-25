import React from 'react'
import { WHATSAPP_DEFAULT, PHONE } from '@/lib/constants'

export default function ContactCTABanner() {
  return (
    <section className="bg-gradient-to-r from-[#1B4FFF] to-[#1540CC] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-white text-4xl font-extrabold font-display">
          Still Thinking? Let&apos;s Just Talk.
        </h2>
        
        <p className="text-blue-100 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
          No pressure, no sales pitch. Just a friendly conversation about your business and how we can help.
        </p>
        
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a 
            href={WHATSAPP_DEFAULT} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white rounded-full px-8 py-4 font-bold hover:bg-[#1ebd59] transition-colors shadow-lg"
          >
            WhatsApp Us Now
          </a>
          <a 
            href={`tel:${PHONE}`} 
            className="bg-white text-[#1B4FFF] rounded-full px-8 py-4 font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Call Us
          </a>
        </div>
        
        <p className="text-blue-200 text-sm text-center mt-6 font-medium">
          ⚡ Mon–Sat · 9AM–7PM IST · Based in Agartala, Tripura
        </p>
        
      </div>
    </section>
  )
}
