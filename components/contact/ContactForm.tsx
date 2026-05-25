"use client"

import React, { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { WHATSAPP_DEFAULT } from '@/lib/constants'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "",
    city: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name"
    }
    if (!formData.businessName || formData.businessName.trim() === "") {
      newErrors.businessName = "Please enter your business name"
    }
    if (!formData.businessType) {
      newErrors.businessType = "Please select your business type"
    }
    if (!formData.city || formData.city.trim() === "") {
      newErrors.city = "Please enter your city"
    }
    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number"
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.service) {
      newErrors.service = "Please select the service you need"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({

          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: "New Website Enquiry — Local Rank India",
          from_name: "Local Rank India Website",
          ...formData
        })
      })
      
      if (response.ok) {
        setSubmitStatus("success")
        /* eslint-disable @typescript-eslint/no-explicit-any */
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "form_submit", {
            event_category: "Lead",
            event_label: "Contact Form",
            value: 1,
          })
        }
        /* eslint-enable @typescript-eslint/no-explicit-any */
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" })
    }
  }

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service })
    if (errors.service) {
      setErrors({ ...errors, service: "" })
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="bg-[#F0FDF4] rounded-3xl p-10 text-center border border-[#10B981]/20 shadow-xl">
        <CheckCircle2 className="w-16 h-16 text-[#10B981] mx-auto" />
        <h2 className="font-display font-bold text-2xl text-[#0A0F1E] mt-4">
          Message Sent! 🎉
        </h2>
        <p className="text-[#4A5568] mt-3">
          Thanks for reaching out! We&apos;ve received your enquiry and will get back to you on WhatsApp within 2 hours.
        </p>
        <a 
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-[#25D366] text-white rounded-full px-8 py-4 font-bold hover:bg-[#1ebd59] transition-colors shadow-lg"
        >
          Or chat with us right now on WhatsApp →
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#E2E8F0]">
      <h2 className="font-display font-bold text-2xl text-[#0A0F1E]">Send Us a Message</h2>
      <p className="text-[#4A5568] text-sm mt-1">Fill in the details below and we&apos;ll get back to you shortly.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5 mt-8">
        
        {/* Hidden Fields for Web3Forms */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0A0F1E] mb-2">Full Name *</label>
          <input 
            id="name"
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="E.g. Rahul Sharma"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-[#F8F9FF] text-[#0A0F1E] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
              errors.name ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0] focus:ring-[#1B4FFF]'
            }`}
          />
          {errors.name && <p id="name-error" role="alert" className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="businessName" className="block text-sm font-semibold text-[#0A0F1E] mb-2">Business Name *</label>
          <input 
            id="businessName"
            type="text" 
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="E.g. Sharma Dental Clinic"
            aria-required="true"
            aria-invalid={!!errors.businessName}
            aria-describedby={errors.businessName ? "businessName-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-[#F8F9FF] text-[#0A0F1E] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
              errors.businessName ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0] focus:ring-[#1B4FFF]'
            }`}
          />
          {errors.businessName && <p id="businessName-error" role="alert" className="text-xs text-red-500 mt-1">{errors.businessName}</p>}
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-semibold text-[#0A0F1E] mb-2">Business Type *</label>
          <select 
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.businessType}
            aria-describedby={errors.businessType ? "businessType-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-[#F8F9FF] text-[#0A0F1E] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none ${
              errors.businessType ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0] focus:ring-[#1B4FFF]'
            }`}
          >
            <option value="" disabled>Select your business type</option>
            <option value="Doctor / Clinic">Doctor / Clinic</option>
            <option value="Dental Clinic">Dental Clinic</option>
            <option value="Gym & Fitness">Gym & Fitness</option>
            <option value="Salon & Spa">Salon & Spa</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Chartered Accountant">Chartered Accountant</option>
            <option value="Hotel & Resort">Hotel & Resort</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Photography">Photography</option>
            <option value="Coaching Centre">Coaching Centre</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Other">Other</option>
          </select>
          {errors.businessType && <p id="businessType-error" role="alert" className="text-xs text-red-500 mt-1">{errors.businessType}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-[#0A0F1E] mb-2">City *</label>
          <input 
            id="city"
            type="text" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="E.g. Guwahati, Assam"
            aria-required="true"
            aria-invalid={!!errors.city}
            aria-describedby={errors.city ? "city-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-[#F8F9FF] text-[#0A0F1E] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
              errors.city ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0] focus:ring-[#1B4FFF]'
            }`}
          />
          {errors.city && <p id="city-error" role="alert" className="text-xs text-red-500 mt-1">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0A0F1E] mb-2">Phone Number *</label>
          <input 
            id="phone"
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your WhatsApp number"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
            className={`w-full px-4 py-3 rounded-xl border bg-[#F8F9FF] text-[#0A0F1E] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
              errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0] focus:ring-[#1B4FFF]'
            }`}
          />
          {errors.phone ? (
            <p id="phone-error" role="alert" className="text-xs text-red-500 mt-1">{errors.phone}</p>
          ) : (
            <p id="phone-hint" className="text-xs text-[#9CA3AF] mt-1">📱 We&apos;ll WhatsApp you on this number</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0A0F1E] mb-2">Email Address (Optional)</label>
          <input 
            id="email"
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-[#F8F9FF] text-[#0A0F1E] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
              errors.email ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0] focus:ring-[#1B4FFF]'
            }`}
          />
          {errors.email && <p id="email-error" role="alert" className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <fieldset>
            <legend className="block text-sm font-semibold text-[#0A0F1E] mb-2">Service Needed *</legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "Website", icon: "🌐", title: "Website", desc: "Professional website for my business" },
                { id: "Google My Business", icon: "📍", title: "Google My Business", desc: "Get on Google Maps" },
                { id: "Both", icon: "🚀", title: "Both", desc: "Website + GMB setup" }
              ].map((option) => (
                <div 
                  key={option.id}
                  onClick={() => handleServiceSelect(option.id)}
                  role="radio"
                  aria-checked={formData.service === option.id}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleServiceSelect(option.id)
                      e.preventDefault()
                    }
                  }}
                  className={`border-2 rounded-2xl p-4 cursor-pointer transition-all relative focus-visible ${
                    formData.service === option.id 
                      ? 'border-[#1B4FFF] bg-[#1B4FFF]/5' 
                      : 'border-[#E2E8F0] bg-[#F8F9FF] hover:border-[#1B4FFF]/30'
                  }`}
                >
                  {formData.service === option.id && (
                    <CheckCircle2 className="w-5 h-5 text-[#1B4FFF] absolute top-3 right-3" />
                  )}
                  <div className="text-2xl mb-1">{option.icon}</div>
                  <div className="font-bold text-[#0A0F1E] text-sm">{option.title}</div>
                  <div className="text-xs text-[#4A5568] mt-1">{option.desc}</div>
                </div>
              ))}
            </div>
            {errors.service && <p role="alert" className="text-xs text-red-500 mt-1">{errors.service}</p>}
          </fieldset>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#0A0F1E] mb-2">Message (Optional)</label>
          <textarea 
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us anything else — your website goals, timeline, any reference sites you like... (optional)"
            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8F9FF] text-[#0A0F1E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FFF] focus:border-transparent transition-all resize-none"
          />
        </div>

        {submitStatus === "error" && (
          <div className="bg-[#FEF2F2] rounded-xl p-4 border border-red-200 mt-4 text-center">
            <p className="text-red-600 text-sm mb-2">
              Something went wrong. Please try again or WhatsApp us directly.
            </p>
            <a 
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B4FFF] font-semibold text-sm hover:underline"
            >
              WhatsApp Us →
            </a>
          </div>
        )}

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#1B4FFF] text-white rounded-2xl py-4 font-bold text-lg hover:bg-[#1540CC] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

      </form>
    </div>
  )
}
