import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { BlogPost } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all duration-300 h-full flex flex-col relative group-hover:-translate-y-1">
        
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden shrink-0">
          <Image 
            src={post.coverImage} 
            alt={`Cover image for: ${post.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized={true}
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-[#1B4FFF] text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
            {post.category}
          </div>
        </div>
        
        {/* Body */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-1 text-xs text-[#9CA3AF] mb-2 font-medium">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
          
          <h3 className="font-display font-bold text-lg text-[#0A0F1E] line-clamp-2 group-hover:text-[#1B4FFF] transition-colors leading-snug">
            {post.title}
          </h3>
          
          <p className="text-sm text-[#4A5568] mt-3 line-clamp-3 leading-relaxed flex-grow">
            {post.excerpt}
          </p>
          
          <div className="mt-auto pt-4 border-t border-[#E2E8F0] flex items-center justify-between shrink-0">
            <span className="text-[#1B4FFF] text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              Read More →
            </span>
            <div className="flex items-center gap-1 text-xs text-[#9CA3AF] font-medium">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </div>
          </div>
        </div>
        
      </div>
    </Link>
  )
}
