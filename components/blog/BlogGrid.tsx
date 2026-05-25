"use client"

import React, { useState } from 'react'
import { blogPosts, blogCategories } from '@/lib/blog'
import BlogCard from './BlogCard'

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <section className="bg-[#F8F9FF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#0A0F1E] text-white shadow-md scale-105"
                  : "bg-white text-[#4A5568] border border-[#E2E8F0] hover:border-[#1B4FFF] hover:text-[#1B4FFF]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E2E8F0] max-w-2xl mx-auto">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#0A0F1E] mb-2">No posts in this category yet.</h3>
            <p className="text-[#4A5568]">We&apos;re always publishing new content — check back soon!</p>
          </div>
        )}

      </div>
    </section>
  )
}
