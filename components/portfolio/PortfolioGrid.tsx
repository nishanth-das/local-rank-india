"use client"

import React, { useState } from 'react'
import { portfolioItems, portfolioCategories } from '@/lib/portfolio'
import PortfolioCard from './PortfolioCard'

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section className="bg-[#F8F9FF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 border
                ${activeFilter === category 
                  ? 'bg-[#1B4FFF] text-white border-[#1B4FFF]' 
                  : 'bg-white border-[#E2E8F0] text-[#4A5568] hover:border-[#1B4FFF] hover:text-[#1B4FFF]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {filteredItems.map(item => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            {/* Empty State */}
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#0A0F1E] mb-2">No projects in this category yet.</h3>
            <p className="text-[#4A5568]">We&apos;re always adding new work — check back soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
