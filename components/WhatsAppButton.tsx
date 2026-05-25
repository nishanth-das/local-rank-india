"use client"

import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { WHATSAPP_DEFAULT, WHATSAPP_NUMBER } from "@/lib/constants"
import { Globe, MapPin, MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [shiftUp, setShiftUp] = useState(false)
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && pathname !== '/contact') {
        setShiftUp(true)
      } else {
        setShiftUp(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const trackWhatsApp = (label: string) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "Lead",
        event_label: label,
      })
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }

  return (
    <div 
      ref={containerRef} 
      className={`fixed right-6 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        shiftUp ? 'bottom-24 md:bottom-6' : 'bottom-6'
      }`}
    >
      {/* Tray */}
      <div 
        className={`flex flex-col gap-2 items-end transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-4 opacity-0 invisible'
        }`}
      >
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi+Nishanth%2C+I+need+a+website+for+my+business`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp about website (opens in new tab)"
          onClick={() => trackWhatsApp("I need a Website")}
          className="flex items-center gap-3 bg-[#1B4FFF] text-white rounded-full pl-4 pr-5 py-3 shadow-lg text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap"
        >
          <Globe className="w-4 h-4 text-white" />
          <span>I need a Website</span>
        </a>
        
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+need+Google+My+Business+setup`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp about GMB setup (opens in new tab)"
          onClick={() => trackWhatsApp("I need GMB Setup")}
          className="flex items-center gap-3 bg-[#FF6B2B] text-white rounded-full pl-4 pr-5 py-3 shadow-lg text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap"
        >
          <MapPin className="w-4 h-4 text-white" />
          <span>I need GMB Setup</span>
        </a>
        
        <a 
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp for general enquiry (opens in new tab)"
          onClick={() => trackWhatsApp("General Enquiry")}
          className="flex items-center gap-3 bg-[#25D366] text-white rounded-full pl-4 pr-5 py-3 shadow-lg text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>General Enquiry</span>
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none"
        title="Chat with us on WhatsApp"
        aria-label="Toggle WhatsApp Options"
      >
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        )}
        
        {isOpen ? (
          <X className="relative z-10 w-6 h-6" />
        ) : (
          <svg
            className="relative z-10 w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.192 1.6 6.024L.16 23.518l5.63-1.479c1.783.957 3.791 1.464 5.86 1.464 6.646 0 12.031-5.385 12.031-12.031C23.681 5.385 18.297 0 12.031 0zm3.626 17.202c-.152.424-.882.83-1.228.878-.344.049-.785.143-2.61-.611-2.204-.913-3.642-3.14-3.753-3.287-.11-.148-.897-1.196-.897-2.28 0-1.084.567-1.616.764-1.83.197-.215.428-.27.57-.27.141 0 .282 0 .408.006.13.006.304-.049.475.362.17.411.583 1.42.634 1.524.05.105.084.227.013.368-.071.141-.106.227-.212.35-.106.123-.223.265-.316.357-.101.098-.207.205-.094.401.114.197.505.836 1.084 1.354.747.668 1.365.875 1.564.975.197.101.312.086.427-.046.115-.132.493-.574.624-.77.13-.197.262-.163.444-.095.183.068 1.157.545 1.354.644.197.101.328.151.376.233.048.083.048.475-.104.899z" />
          </svg>
        )}
      </button>
    </div>
  )
}

