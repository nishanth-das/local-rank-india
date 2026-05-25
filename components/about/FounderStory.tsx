import React from 'react'
import Image from 'next/image'

export default function FounderStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Photo */}
          <div className="w-full max-w-[400px] mx-auto lg:mx-0">
            {/* TODO: Replace with real photo of Nishanth */}
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Nishanth Das — Founder, Local Rank India"
                fill
                unoptimized={true}
                loading="lazy"
                className="rounded-3xl shadow-xl object-cover"
              />
            </div>
            <p className="text-center text-sm text-[#9CA3AF] mt-3">
              Nishanth Das — Founder, Local Rank India
            </p>
          </div>
          
          {/* Right Text */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0A0F1E]">
              Hi, I&apos;m Nishanth 👋
            </h2>
            
            <div className="text-[#4A5568] leading-relaxed mt-4 space-y-4">
              <p>
                I&apos;m a web developer from Agartala, Tripura — right here in Northeast India. I&apos;ve been building websites and learning digital marketing for the past 2 years, and I&apos;ve seen something that bothered me: thousands of great local businesses in our region had no online presence whatsoever.
              </p>
              
              <p>
                Doctors who patients couldn&apos;t find. Gyms that weren&apos;t showing up on Google. Talented photographers with no portfolio online. Lawyers losing clients to competitors with basic websites. Not because their business wasn&apos;t good enough — but simply because nobody had made it affordable and accessible for them.
              </p>
              
              <p>
                I started Local Rank India to fix that. To bring the same quality of website that big-city businesses enjoy, to local businesses everywhere in India — delivered fast, priced fairly, and built with real care.
              </p>
            </div>
            
            <div className="mt-8 border-l-4 border-[#1B4FFF] pl-6 py-2">
              <p className="text-[#0A0F1E] font-semibold text-lg italic">
                &quot;Your business deserves to be found. I&apos;m here to make sure it is.&quot;
              </p>
              <p className="text-[#9CA3AF] mt-2">
                — Nishanth Das, Founder
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
