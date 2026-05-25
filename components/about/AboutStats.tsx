import React from 'react'
import { Globe, Clock, MapPin, Smartphone } from 'lucide-react'

export default function AboutStats() {
  return (
    <section className="bg-[#0A0F1E] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center">
          Local Rank India by the Numbers
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          
          <div className="bg-white/5 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="text-[#1B4FFF] w-8 h-8" />
            </div>
            <div className="text-[#FF6B2B] text-4xl font-black font-display mt-4">50+</div>
            <div className="text-[#9CA3AF] text-sm mt-2">Websites Delivered</div>
          </div>
          
          <div className="bg-white/5 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="text-[#FF6B2B] w-8 h-8" />
            </div>
            <div className="text-[#FF6B2B] text-4xl font-black font-display mt-4">5 Days</div>
            <div className="text-[#9CA3AF] text-sm mt-2">Average Delivery Time</div>
          </div>
          
          <div className="bg-white/5 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-[#10B981] w-8 h-8" />
            </div>
            <div className="text-[#FF6B2B] text-4xl font-black font-display mt-4">15+</div>
            <div className="text-[#9CA3AF] text-sm mt-2">Cities Served Across India</div>
          </div>
          
          <div className="bg-white/5 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="text-[#6366F1] w-8 h-8" />
            </div>
            <div className="text-[#FF6B2B] text-4xl font-black font-display mt-4">100%</div>
            <div className="text-[#9CA3AF] text-sm mt-2">Mobile Responsive</div>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}
