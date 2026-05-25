import React from 'react'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ThreeWaysSection from '@/components/contact/ThreeWaysSection'
import ContactFAQ from '@/components/contact/ContactFAQ'
import ContactCTABanner from '@/components/contact/ContactCTABanner'

export const metadata = {
  title: "Contact Us — Get a Free Website Quote | Local Rank India",
  description: "Get in touch with Local Rank India for a free website quote. We build professional websites for local businesses across India. WhatsApp, call, or fill the form.",
  openGraph: {
    title: "Contact Local Rank India — Free Website Quote",
    description: "Get a free website quote for your local business. Based in Agartala, Tripura. Serving all of India.",
    url: "https://localrankindia.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* SECTION 1 — Page Hero */}
      <section className="bg-[#0A0F1E] bg-dot-grid py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-[#FF6B2B]/20 text-[#FF6B2B] text-sm font-bold px-4 py-2 rounded-full mb-6">
            GET IN TOUCH
          </div>
          <h1 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent font-display text-5xl md:text-6xl font-extrabold pb-2">
            Let&apos;s Get Your Business Online
          </h1>
          <p className="text-[#9CA3AF] text-lg mt-6 max-w-2xl mx-auto">
            Tell us about your business and what you need. We&apos;ll get back to you within 2 hours with a free, no-obligation quote.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-5 py-2 text-sm text-[#9CA3AF]">
              ⚡ Response within 2 hours
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-5 py-2 text-sm text-[#9CA3AF]">
              💬 Free consultation
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-5 py-2 text-sm text-[#9CA3AF]">
              ✅ No obligation quote
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Main Contact Section */}
      <section className="bg-[#F8F9FF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Desktop: Form Left (60%), Info Right (40%) */}
            {/* Mobile: Info First, then Form. We use flex col-reverse or grid row ordering. */}
            
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ContactForm />
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2">
              <ContactInfo />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — Three Ways to Reach Us */}
      <ThreeWaysSection />

      {/* SECTION 4 — FAQ */}
      <ContactFAQ />

      {/* SECTION 5 — Final CTA */}
      <ContactCTABanner />

    </main>
  )
}
