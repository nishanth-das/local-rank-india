import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { WHATSAPP_DEFAULT, PHONE, EMAIL } from '@/lib/constants'

export default function ThreeWaysSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent text-3xl md:text-4xl font-extrabold font-display pb-2">
            Three Ways to Reach Us
          </h2>
          <p className="text-[#4A5568] mt-3">Pick whatever&apos;s easiest for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          
          {/* Card 1 — WhatsApp */}
          <div className="bg-[#F0FDF4] border-2 border-[#10B981]/30 rounded-3xl p-8 text-center hover:shadow-lg transition-all flex flex-col relative">
            <div className="absolute top-4 right-4 bg-[#10B981] text-white text-xs px-3 py-1 rounded-full font-medium">
              Fastest
            </div>
            
            <div className="bg-[#25D366] rounded-2xl p-4 inline-flex mx-auto shrink-0 shadow-md shadow-[#25D366]/20 mt-2">
              <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.842L.057 23.428a.5.5 0 00.514.572l5.765-1.502A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.002-1.366l-.357-.214-3.722.969.995-3.608-.234-.371A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
            </div>
            
            <h3 className="font-display font-bold text-xl mt-5 text-[#0A0F1E]">WhatsApp</h3>
            <p className="text-[#4A5568] text-sm mt-3 flex-grow">
              Message us directly. Fastest response — usually under 2 hours.
            </p>
            
            <a 
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white rounded-full px-6 py-3 font-semibold w-full mt-6 hover:bg-[#1ebd59] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Card 2 — Phone */}
          <div className="bg-[#EFF6FF] border border-[#1B4FFF]/20 rounded-3xl p-8 text-center hover:shadow-lg transition-all flex flex-col">
            <div className="bg-[#1B4FFF] rounded-2xl p-4 inline-flex mx-auto shrink-0 shadow-md shadow-[#1B4FFF]/20 mt-2">
              <Phone className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="font-display font-bold text-xl mt-5 text-[#0A0F1E]">Phone Call</h3>
            <p className="text-[#4A5568] text-sm mt-3 flex-grow">
              Prefer to talk? Give us a call during business hours and we&apos;ll discuss your project right away.
            </p>
            
            <a 
              href={`tel:${PHONE}`}
              className="bg-[#1B4FFF] text-white rounded-full px-6 py-3 font-semibold w-full mt-6 hover:bg-[#1540CC] transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Card 3 — Email */}
          <div className="bg-[#FFF7ED] border border-[#FF6B2B]/20 rounded-3xl p-8 text-center hover:shadow-lg transition-all flex flex-col">
            <div className="bg-[#FF6B2B] rounded-2xl p-4 inline-flex mx-auto shrink-0 shadow-md shadow-[#FF6B2B]/20 mt-2">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="font-display font-bold text-xl mt-5 text-[#0A0F1E]">Email</h3>
            <p className="text-[#4A5568] text-sm mt-3 flex-grow">
              Send us a detailed email and we&apos;ll come back with a full breakdown of what we can do for your business.
            </p>
            
            <a 
              href={`mailto:${EMAIL}`}
              className="bg-[#FF6B2B] text-white rounded-full px-6 py-3 font-semibold w-full mt-6 hover:bg-[#e55a20] transition-colors"
            >
              Send Email
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
