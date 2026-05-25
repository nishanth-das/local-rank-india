import React from 'react'

export default function ContactFAQ() {
  const faqs = [
    {
      q: "How quickly will you respond?",
      a: "We typically respond within 2 hours on WhatsApp during business hours (Mon–Sat, 9AM–7PM). For messages sent outside hours, we'll get back to you first thing the next morning."
    },
    {
      q: "Is the consultation really free?",
      a: "Yes, 100%. We'll have a quick call or WhatsApp conversation to understand your needs and tell you exactly what we'd build for you — no charge, no commitment required."
    },
    {
      q: "Do you work with businesses outside Tripura?",
      a: "Absolutely. We work with businesses all across India. Everything is handled remotely over WhatsApp, phone, and email — location is no barrier at all."
    },
    {
      q: "How do I get started?",
      a: "Just fill in the form above, send us a WhatsApp message, or give us a call. We'll ask you a few questions about your business and take it from there. It takes about 10 minutes to get the ball rolling."
    }
  ]

  return (
    <section className="bg-[#F8F9FF] bg-dot-grid py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent text-3xl font-extrabold font-display pb-2">
            Quick Answers
          </h2>
          <p className="text-[#4A5568] mt-3">
            Before you reach out — these might help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-[#0A0F1E]">{faq.q}</h3>
              <p className="text-[#4A5568] text-sm mt-2 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
