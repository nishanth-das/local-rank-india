import React from 'react'
import Image from 'next/image'
import { MapPin, ExternalLink } from 'lucide-react'
import { PortfolioItem } from '@/lib/portfolio'



interface PortfolioCardProps {
  item: PortfolioItem
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-52 overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={`${item.title} — website built by Local Rank India`}
          fill
          unoptimized={true}
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#0A0F1E] text-xs font-bold px-3 py-1 rounded-full">
          {item.category}
        </div>
        {item.status === "live" && (
          <div className="absolute top-3 right-3 bg-[#10B981] text-white text-xs px-3 py-1 rounded-full font-medium">
            Live ✓
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-[#FF6B2B] font-semibold uppercase tracking-wide">
          {item.businessType}
        </div>
        <h3 className="text-lg font-bold font-display text-[#0A0F1E] mt-1">
          {item.title}
        </h3>
        
        <div className="flex items-center gap-1 text-sm text-[#9CA3AF] mt-1">
          <MapPin className="w-3 h-3 shrink-0" />
          <span>{item.city}</span>
        </div>
        
        <p className="text-sm text-[#4A5568] mt-3 leading-relaxed line-clamp-2">
          {item.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2 mb-2">
          {item.features.map((feature, idx) => (
            <span key={idx} className="bg-[#F8F9FF] text-[#4A5568] text-xs px-3 py-1 rounded-full border border-[#E2E8F0]">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
          <span className="text-[#1B4FFF] text-sm font-semibold group-hover:underline cursor-pointer">
            View Details
          </span>
          <ExternalLink className="text-[#9CA3AF] w-4 h-4" />
        </div>
      </div>
    </div>
  )
}
