import React from 'react'
import { CityData } from '@/lib/cities'

interface LocationWhyUsProps {
  city: CityData
}

export default function LocationWhyUs({ city }: LocationWhyUsProps) {
  const reasons = [
    {
      title: "Get Found on Google",
      desc: `Customers in ${city.name} search Google every day for businesses like yours. Without a website, you're invisible to them.`
    },
    {
      title: "Beat Local Competition",
      desc: `Most businesses in ${city.name} still don't have a proper website. Get online now and establish your advantage.`
    },
    {
      title: "Build Trust Instantly",
      desc: `A professional website makes your ${city.name} business look credible and trustworthy before a customer even calls.`
    },
    {
      title: "Work 24/7 for You",
      desc: `Your ${city.name} website brings in enquiries around the clock — even when your doors are closed.`
    }
  ]

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#0A0F1E] pb-2">
            Why {city.name} Businesses Need a Website Now
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <div key={i} className="bg-[#F8F9FF] p-8 rounded-3xl border border-[#E2E8F0]">
              <div className="w-10 h-10 bg-[#1B4FFF] text-white rounded-full flex items-center justify-center font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-[#0A0F1E] mb-3">{r.title}</h3>
              <p className="text-[#4A5568] leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
