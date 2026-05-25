import React from 'react'
import { CityData } from '@/lib/cities'

interface LocationFAQProps {
  city: CityData
}

export default function LocationFAQ({ city }: LocationFAQProps) {
  const faqs = [
    {
      q: `Do you build websites for businesses in ${city.name}?`,
      a: `Yes, absolutely. We work with businesses all across India including ${city.name}, ${city.state}. Everything is handled remotely over WhatsApp and phone — location is no barrier.`
    },
    {
      q: "How long does it take to build a website?",
      a: "Most websites are delivered within 3–5 working days from the time we receive your content and brief."
    },
    {
      q: `Will my website rank on Google in ${city.name}?`,
      a: `We build every website with on-page SEO best practices so you're set up to rank in ${city.name} search results. We also recommend pairing your website with a Google Business Profile for maximum local visibility.`
    },
    {
      q: "How do I get started?",
      a: "Just fill in our contact form or send us a WhatsApp message. We'll ask a few quick questions and give you a free, no-obligation quote."
    }
  ]

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#0A0F1E] pb-2">
            Common Questions from {city.name} Businesses
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[#F8F9FF] rounded-2xl p-8 border border-[#E2E8F0]"
            >
              <h3 className="font-bold text-[#0A0F1E] mb-3">{faq.q}</h3>
              <p className="text-[#4A5568] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
