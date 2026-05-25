import React from 'react'

export default function TechTools() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <div className="inline-block text-[#9CA3AF] text-sm font-bold tracking-wider uppercase mb-2">
            HOW WE BUILD
          </div>
          <h2 className="bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent font-display text-4xl md:text-5xl font-extrabold pb-2">
            The Tools Behind Every Website
          </h2>
          <p className="text-[#4A5568] mt-4 max-w-2xl mx-auto">
            We use the same modern tools that power some of the world&apos;s fastest and most reliable websites — so yours is built to last.
          </p>
        </div>
        
        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-12">
          
          <div className="bg-[#F8F9FF] rounded-2xl p-6 text-center border border-[#E2E8F0] hover:border-[#1B4FFF]/30 hover:shadow-md transition-all duration-300">
            <div className="text-3xl">⚡</div>
            <div className="text-[#0A0F1E] font-bold text-sm mt-3">Next.js</div>
            <div className="text-[#9CA3AF] text-xs mt-1">Framework</div>
          </div>
          
          <div className="bg-[#F8F9FF] rounded-2xl p-6 text-center border border-[#E2E8F0] hover:border-[#1B4FFF]/30 hover:shadow-md transition-all duration-300">
            <div className="text-3xl">🎨</div>
            <div className="text-[#0A0F1E] font-bold text-sm mt-3">Tailwind CSS</div>
            <div className="text-[#9CA3AF] text-xs mt-1">Styling</div>
          </div>
          
          <div className="bg-[#F8F9FF] rounded-2xl p-6 text-center border border-[#E2E8F0] hover:border-[#1B4FFF]/30 hover:shadow-md transition-all duration-300">
            <div className="text-3xl">☁️</div>
            <div className="text-[#0A0F1E] font-bold text-sm mt-3">Cloudflare</div>
            <div className="text-[#9CA3AF] text-xs mt-1">Secure Hosting</div>
          </div>
          
          <div className="bg-[#F8F9FF] rounded-2xl p-6 text-center border border-[#E2E8F0] hover:border-[#1B4FFF]/30 hover:shadow-md transition-all duration-300">
            <div className="text-3xl">🤖</div>
            <div className="text-[#0A0F1E] font-bold text-sm mt-3">AI-Assisted</div>
            <div className="text-[#9CA3AF] text-xs mt-1">Faster Build</div>
          </div>
          
          <div className="bg-[#F8F9FF] rounded-2xl p-6 text-center border border-[#E2E8F0] hover:border-[#1B4FFF]/30 hover:shadow-md transition-all duration-300">
            <div className="text-3xl">🔍</div>
            <div className="text-[#0A0F1E] font-bold text-sm mt-3">SEO Tools</div>
            <div className="text-[#9CA3AF] text-xs mt-1">Ranking</div>
          </div>
          
          <div className="bg-[#F8F9FF] rounded-2xl p-6 text-center border border-[#E2E8F0] hover:border-[#1B4FFF]/30 hover:shadow-md transition-all duration-300">
            <div className="text-3xl">🔒</div>
            <div className="text-[#0A0F1E] font-bold text-sm mt-3">HTTPS / SSL</div>
            <div className="text-[#9CA3AF] text-xs mt-1">Security</div>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}
