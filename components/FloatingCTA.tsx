"use client"

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { WHATSAPP_DEFAULT } from '@/lib/constants'

export default function FloatingCTA() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const trackCTA = (label: string) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "cta_click", {
        event_category: "Engagement",
        event_label: label,
      })
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }

  if (pathname === '/contact') return null

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E8F0] px-4 py-3 md:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp (opens in new tab)"
          onClick={() => trackCTA("WhatsApp")}
          className="bg-[#25D366] text-white rounded-xl py-3 font-semibold text-sm text-center shadow-md flex items-center justify-center gap-2"
        >
          💬 WhatsApp Us
        </a>
        <Link
          href="/contact"
          aria-label="Get a free quote"
          onClick={() => trackCTA("Get Quote")}
          className="bg-[#1B4FFF] text-white rounded-xl py-3 font-semibold text-sm text-center shadow-md flex items-center justify-center"
        >
          📋 Get Free Quote
        </Link>
      </div>
    </div>
  )
}
