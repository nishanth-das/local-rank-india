import React from 'react'
import Image from 'next/image'

export default function NortheastSection() {
  const cities = [
    "Agartala", "Guwahati", "Shillong", "Silchar", "Imphal", "Patna", "Ranchi", 
    "Bhubaneswar", "Raipur", "Coimbatore", "Madurai", "Nagpur", "Indore", "Jorhat", "Dibrugarh"
  ]

  return (
    <section className="bg-[#F8F9FF] bg-dot-grid py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0A0F1E]">
              Proudly From Northeast India 🇮🇳
            </h2>
            
            <div className="text-[#4A5568] leading-relaxed mt-4 space-y-4">
              <p>
                Northeast India is one of the most underserved regions in the country when it comes to digital services. Most web agencies are based in Mumbai, Bangalore, or Delhi — and they charge accordingly. Local businesses here are often left with no good options.
              </p>
              <p>
                Being based in Agartala means we understand our region. We know the local business culture, the languages, the challenges — and we&apos;re invested in seeing local businesses thrive.
              </p>
              <p>
                But our work doesn&apos;t stop here. We serve businesses from Agartala to Coimbatore, Patna to Shillong — wherever a local business needs to get found online.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {cities.map((city, idx) => (
                <span 
                  key={idx}
                  className="bg-[#1B4FFF]/10 text-[#1B4FFF] text-sm px-4 py-2 rounded-full font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative w-full aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
              alt="Northeast India local businesses getting online with Local Rank India"
              fill
              unoptimized={true}
              loading="lazy"
              className="rounded-3xl shadow-xl object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}
