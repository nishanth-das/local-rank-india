import React from 'react'
import Link from 'next/link'
import { CityData } from '@/lib/cities'

interface LocationServicesProps {
  city: CityData
}

export default function LocationServices({ city }: LocationServicesProps) {
  return (
    <section className="bg-[#F8F9FF] bg-dot-grid py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent text-3xl md:text-4xl font-extrabold font-display pb-2">
            Our Services for {city.name} Businesses
          </h2>
          <p className="text-[#4A5568] mt-4 text-lg">
            Everything you need to establish a strong online presence in {city.name}.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Website Design */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-[#1B4FFF]/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0A0F1E] mb-4">Website Development</h3>
            <p className="text-[#4A5568] mb-8 leading-relaxed">
              Professional, mobile-ready websites designed specifically to convert {city.name} visitors into customers. Fast loading and SEO-optimised.
            </p>
            <Link 
              href="/services/website-development"
              className="text-[#1B4FFF] font-bold hover:text-[#1540CC] flex items-center gap-2"
            >
              View Service Details <span>→</span>
            </Link>
          </div>
          
          {/* GMB Setup */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-[#FF6B2B]/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🗺️</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0A0F1E] mb-4">Google Business Setup</h3>
            <p className="text-[#4A5568] mb-8 leading-relaxed">
              Get found on Google Maps when customers in {city.name} search for your services. We handle the complete setup and optimisation.
            </p>
            <Link 
              href="/services/google-my-business"
              className="text-[#FF6B2B] font-bold hover:text-[#e55a20] flex items-center gap-2"
            >
              View Service Details <span>→</span>
            </Link>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}
