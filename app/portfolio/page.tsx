import React from 'react'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import IndustriesStrip from '@/components/portfolio/IndustriesStrip'
import Link from 'next/link'
import { WHATSAPP_DEFAULT } from '@/lib/constants'

export const metadata = {
  title: "Portfolio — Websites We've Built for Local Businesses | Local Rank India",
  description: "See the websites we've built for local businesses across India — clinics, gyms, salons, lawyers, photographers and more. Based in Agartala, Tripura.",
  openGraph: {
    title: "Portfolio — Local Rank India",
    description: "Websites built for local businesses across India by Local Rank India.",
    url: "https://localrankindia.com/portfolio",
  },
}

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <PortfolioGrid />
      
      {/* SECTION 3 — "Your Business Could Be Here" */}
      <section className="bg-white py-20 md:py-28 border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent text-3xl md:text-4xl font-extrabold font-display pb-2">
            Your Business Could Be Next
          </h2>
          <p className="text-[#4A5568] mt-4 text-lg">
            We&apos;re actively building new websites every week. If you want a site that looks this good and works even better — let&apos;s talk.
          </p>
          
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-[#1B4FFF] text-white rounded-full px-8 py-4 font-bold hover:bg-[#1540CC] transition-colors">
              Start Your Project →
            </Link>
            <a 
              href={WHATSAPP_DEFAULT} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-[#1B4FFF] text-[#1B4FFF] rounded-full px-8 py-4 font-semibold hover:bg-[#1B4FFF] hover:text-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          
          <p className="text-xs text-[#9CA3AF] mt-6">
            *Portfolio shown includes early client work and representative examples as we grow our portfolio.
          </p>
        </div>
      </section>

      <IndustriesStrip />
    </main>
  )
}
