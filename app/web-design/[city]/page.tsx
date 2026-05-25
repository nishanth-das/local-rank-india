import React from 'react'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
import LocationHero from '@/components/location/LocationHero'
import LocationServices from '@/components/location/LocationServices'
import LocationWhyUs from '@/components/location/LocationWhyUs'
import LocationFAQ from '@/components/location/LocationFAQ'
import LocationCTABanner from '@/components/location/LocationCTABanner'

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city)
  if (!city) return {}
  
  return {
    title: `Website Design in ${city.name} | Professional Web Design | Local Rank India`,
    description: `Professional website design for local businesses in ${city.name}, ${city.state}. Fast delivery, mobile-ready, SEO optimised. Get a free quote from Local Rank India today.`,
    keywords: `website design ${city.name}, web design ${city.name}, website development ${city.name}, affordable website ${city.name} ${city.state}`,
    openGraph: {
      title: `Website Design in ${city.name} | Local Rank India`,
      description: `Professional, affordable website design for local businesses in ${city.name}. Free quote available.`,
      url: `https://localrankindia.com/web-design/${city.slug}`,
    },
  }
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city)
  
  if (!city) {
    notFound()
  }

  const industries = [
    { emoji: "🏥", label: "Doctor / Clinic" },
    { emoji: "🦷", label: "Dental Clinic" },
    { emoji: "💪", label: "Gym & Fitness" },
    { emoji: "💇", label: "Salon & Spa" },
    { emoji: "⚖️", label: "Lawyer / CA" },
    { emoji: "🏨", label: "Hotel & Resort" },
    { emoji: "📸", label: "Photographer" },
    { emoji: "🎓", label: "Coaching Centre" },
    { emoji: "🏠", label: "Real Estate" },
    { emoji: "🍽️", label: "Restaurant" },
  ]

  return (
    <main>
      {/* SECTION 1 — Hero */}
      <LocationHero city={city} />

      {/* SECTION 2 — City Context */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#0A0F1E] pb-2">
              Growing Your Business in {city.name}
            </h2>
            <p className="text-[#4A5568] mt-6 text-lg leading-relaxed">
              {city.description}
            </p>
            <p className="text-[#4A5568] mt-4 text-lg leading-relaxed">
              We work with {city.businessContext} in {city.name} — helping them build professional websites that get found on Google and bring in new customers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="bg-[#F8F9FF] border border-[#E2E8F0] rounded-3xl p-8 shadow-sm">
                <div className="text-[#1B4FFF] font-display font-extrabold text-4xl mb-2">5 Days</div>
                <div className="text-[#4A5568] font-medium">Average website delivery time</div>
              </div>
              <div className="bg-[#F8F9FF] border border-[#E2E8F0] rounded-3xl p-8 shadow-sm">
                <div className="text-[#FF6B2B] font-display font-extrabold text-4xl mb-2">Secure</div>
                <div className="text-[#4A5568] font-medium">Hosting included with every site</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Services */}
      <LocationServices city={city} />

      {/* SECTION 4 — Why Us */}
      <LocationWhyUs city={city} />

      {/* SECTION 5 — Industries */}
      <section className="bg-[#F8F9FF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#0A0F1E] pb-2">
              Industries We Serve in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
            {industries.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white border border-[#E2E8F0] rounded-2xl p-6 text-center hover:bg-[#1B4FFF] hover:border-[#1B4FFF] transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </div>
                <div className="text-sm font-semibold text-[#0A0F1E] group-hover:text-white transition-colors duration-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <LocationFAQ city={city} />

      {/* SECTION 7 — CTA Banner */}
      <LocationCTABanner city={city} />

    </main>
  )
}
