import React from 'react'
import Link from 'next/link'

export default function IndustriesStrip() {
  return (
    <section className="bg-[#0A0F1E] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-6">
          
          <div>
            <h2 className="text-white font-bold text-xl font-display">
              We build for every type of local business.
            </h2>
            <p className="text-[#9CA3AF] text-sm mt-1">
              Doctor · Gym · Salon · Lawyer · Hotel · CA · Coaching · Photographer · Restaurant · Real Estate
            </p>
          </div>
          
          <Link href="/services" className="bg-[#FF6B2B] text-white rounded-full px-6 py-3 font-semibold hover:bg-[#e55a20] transition-colors">
            See All Services →
          </Link>
          
        </div>
      </div>
    </section>
  )
}
