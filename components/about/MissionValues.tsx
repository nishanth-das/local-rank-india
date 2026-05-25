import React from 'react'
import { Heart, Zap, Shield } from 'lucide-react'

export default function MissionValues() {
  return (
    <section className="bg-[#F8F9FF] bg-dot-grid py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <div className="inline-block text-[#9CA3AF] text-sm font-bold tracking-wider uppercase mb-2">
            WHAT DRIVES US
          </div>
          <h2 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent font-display text-4xl md:text-5xl font-extrabold pb-2">
            Our Mission & Values
          </h2>
        </div>
        
        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mt-8">
          <p className="text-xl md:text-2xl text-[#0A0F1E] font-medium leading-relaxed">
            &quot;To make professional web presence accessible to every local business in India — regardless of city size, industry, or technical knowledge.&quot;
          </p>
        </div>
        
        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          
          {/* Value 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 text-center">
            <div className="bg-[#FF6B2B]/10 rounded-2xl p-4 inline-flex">
              <Heart className="text-[#FF6B2B] w-10 h-10" />
            </div>
            <h3 className="font-display font-bold text-xl mt-6 text-[#0A0F1E]">Local First</h3>
            <p className="text-[#4A5568] mt-3 leading-relaxed">
              We understand local markets because we&apos;re local ourselves. We know what works for businesses in Agartala, Guwahati, and every small city in between.
            </p>
          </div>
          
          {/* Value 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 text-center">
            <div className="bg-[#1B4FFF]/10 rounded-2xl p-4 inline-flex">
              <Zap className="text-[#1B4FFF] w-10 h-10" />
            </div>
            <h3 className="font-display font-bold text-xl mt-6 text-[#0A0F1E]">Speed & Simplicity</h3>
            <p className="text-[#4A5568] mt-3 leading-relaxed">
              We move fast without cutting corners. 5-day delivery means your business starts getting customers online sooner — not after months of back-and-forth.
            </p>
          </div>
          
          {/* Value 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 text-center">
            <div className="bg-[#10B981]/10 rounded-2xl p-4 inline-flex">
              <Shield className="text-[#10B981] w-10 h-10" />
            </div>
            <h3 className="font-display font-bold text-xl mt-6 text-[#0A0F1E]">Honest & Transparent</h3>
            <p className="text-[#4A5568] mt-3 leading-relaxed">
              No hidden fees, no confusing jargon, no overpromising. We tell you exactly what you&apos;re getting and we deliver it.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}
