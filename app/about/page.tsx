import React from 'react'
import AboutHero from '@/components/about/AboutHero'
import FounderStory from '@/components/about/FounderStory'
import MissionValues from '@/components/about/MissionValues'
import AboutStats from '@/components/about/AboutStats'
import TechTools from '@/components/about/TechTools'
import NortheastSection from '@/components/about/NortheastSection'
import AboutTestimonials from '@/components/about/AboutTestimonials'
import AboutCTABanner from '@/components/about/AboutCTABanner'

export const metadata = {
  title: "About Us — Local Rank India | Website Design from Agartala, Tripura",
  description: "Learn about Local Rank India — a web design agency built in Agartala, Tripura to help local businesses across India get found online. Founded by Nishanth Das.",
  openGraph: {
    title: "About Local Rank India — Built in Agartala for India",
    description: "Our story, mission, and why we exist — Local Rank India.",
    url: "https://localrankindia.com/about",
  },
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <FounderStory />
      <MissionValues />
      <AboutStats />
      <TechTools />
      <NortheastSection />
      <AboutTestimonials />
      <AboutCTABanner />
    </main>
  )
}
