import React from 'react'
import { MessageCircle, Phone, Mail, MapPin, Clock, Zap } from 'lucide-react'
import { WHATSAPP_DEFAULT, PHONE, EMAIL } from '@/lib/constants'

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      
      {/* Card 1 — Quick Contact */}
      <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm">
        <h2 className="font-display font-bold text-lg text-[#0A0F1E]">Get in Touch Directly</h2>
        
        <div className="mt-5 space-y-4">
          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="bg-[#25D366]/10 rounded-full p-2 shrink-0">
              <MessageCircle className="text-[#25D366] w-5 h-5" />
            </div>
            <div className="flex-grow">
              <p className="text-xs text-[#9CA3AF] font-medium uppercase mb-0.5">WhatsApp (Fastest)</p>
              <a 
                href={WHATSAPP_DEFAULT} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0A0F1E] font-semibold hover:text-[#1B4FFF] transition-colors"
              >
                {PHONE}
              </a>
            </div>
            <div className="bg-[#25D366]/10 text-[#25D366] text-xs px-3 py-1 rounded-full shrink-0 font-medium">
              Chat Now →
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-[#1B4FFF]/10 rounded-full p-2 shrink-0">
              <Phone className="text-[#1B4FFF] w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#9CA3AF] font-medium uppercase mb-0.5">Phone / Call</p>
              <a 
                href={`tel:${PHONE}`} 
                className="text-[#0A0F1E] font-semibold hover:text-[#1B4FFF] transition-colors"
              >
                {PHONE}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-[#FF6B2B]/10 rounded-full p-2 shrink-0">
              <Mail className="text-[#FF6B2B] w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#9CA3AF] font-medium uppercase mb-0.5">Email</p>
              <a 
                href={`mailto:${EMAIL}`} 
                className="text-[#0A0F1E] font-semibold hover:text-[#1B4FFF] transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="bg-[#6366F1]/10 rounded-full p-2 shrink-0">
              <MapPin className="text-[#6366F1] w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#9CA3AF] font-medium uppercase mb-0.5">Location</p>
              <p className="text-[#0A0F1E] font-semibold">Agartala, Tripura, India</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="bg-[#10B981]/10 rounded-full p-2 shrink-0">
              <Clock className="text-[#10B981] w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#9CA3AF] font-medium uppercase mb-0.5">Business Hours</p>
              <p className="text-[#0A0F1E] font-semibold">Mon–Sat, 9AM–7PM IST</p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Card 2 — Response Promise */}
      <div className="bg-[#1B4FFF] rounded-3xl p-8 text-white shadow-md">
        <Zap className="w-8 h-8 text-[#FF6B2B]" />
        <h3 className="font-display font-bold text-xl mt-3">We Respond Fast</h3>
        <p className="text-blue-100 mt-2 text-sm leading-relaxed">
          Send us a message and we&apos;ll reply on WhatsApp within 2 hours during business hours. For urgent enquiries, WhatsApp us directly.
        </p>
        <div className="mt-4 bg-white/10 rounded-full px-4 py-2 text-sm text-white inline-flex items-center gap-2">
          <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
          Response time: &lt; 2 hours
        </div>
      </div>

      {/* Card 3 — Google Maps Embed */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm">
        <h3 className="font-display font-bold text-lg text-[#0A0F1E] mb-3">Find Us</h3>

        <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] h-48 bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58509.61520857595!2d91.24983!3d23.83308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375140066b5cba71%3A0x4a2bbb0b6b11ae84!2sAgartala%2C%20Tripura!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Local Rank India — Agartala, Tripura"
          />
        </div>
        <p className="text-xs text-[#9CA3AF] mt-3 text-center">
          📍 Based in Agartala, Tripura — serving businesses all across India
        </p>
      </div>

    </div>
  )
}
