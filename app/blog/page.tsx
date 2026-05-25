import React from 'react'
import BlogHero from '@/components/blog/BlogHero'
import BlogGrid from '@/components/blog/BlogGrid'

export const metadata = {
  title: "Blog — Website & Local SEO Tips for Indian Businesses | Local Rank India",
  description: "Practical articles about websites, Google My Business, and local SEO for small businesses across India. Written by Local Rank India, based in Agartala, Tripura.",
  openGraph: {
    title: "Blog — Local Rank India",
    description: "Website tips, SEO guides, and local business advice for Indian businesses.",
    url: "https://localrankindia.com/blog",
  },
}

export default function BlogListingPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
    </main>
  )
}
