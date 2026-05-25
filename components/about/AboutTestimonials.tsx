import React from 'react'
import { Star } from 'lucide-react'

export default function AboutTestimonials() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent text-3xl md:text-4xl font-extrabold font-display pb-2 text-center">
          What Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          
          {/* Testimonial 1 */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex gap-1 mb-4 text-[#F59E0B]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-[#4A5568] text-lg leading-relaxed italic mb-6">
              &quot;Nishanth built our clinic website in 4 days. Patients now find us directly on Google. We couldn&apos;t be happier.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1B4FFF]/10 flex items-center justify-center text-[#1B4FFF] font-bold text-xl">
                D
              </div>
              <div>
                <p className="text-[#0A0F1E] font-bold">Dr. Priya Sharma</p>
                <p className="text-[#9CA3AF] text-sm">Sharma Dental Clinic, Agartala</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex gap-1 mb-4 text-[#F59E0B]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-[#4A5568] text-lg leading-relaxed italic mb-6">
              &quot;Professional, fast, and genuinely cares about your business. He understood exactly what we needed without us having to over-explain.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF6B2B]/10 flex items-center justify-center text-[#FF6B2B] font-bold text-xl">
                R
              </div>
              <div>
                <p className="text-[#0A0F1E] font-bold">Rahul Deb</p>
                <p className="text-[#9CA3AF] text-sm">FitZone Gym, Agartala</p>
              </div>
            </div>
          </div>
          
        </div>
        
        <p className="text-xs text-[#9CA3AF] text-center mt-6">
          *Early client testimonials. More reviews being added as we grow.
        </p>
        
      </div>
    </section>
  )
}
