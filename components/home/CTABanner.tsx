"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { WHATSAPP_DEFAULT } from "@/lib/constants";

export default function CTABanner() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-white py-20 relative">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="bg-gradient-to-r from-[#1B4FFF] to-[#1540CC] rounded-[2.5rem] p-10 md:p-16 text-center shadow-[0_20px_50px_rgba(27,79,255,0.2)] relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B2B]/20 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-white font-extrabold text-3xl md:text-5xl font-display leading-tight">
              Ready to Get Found <br className="hidden md:block" />on Google?
            </h2>
            <p className="text-blue-100 mt-6 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Let&apos;s build your website this week. One call or WhatsApp message is all it takes to get started.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-block bg-[#FF6B2B] text-white rounded-full px-10 py-5 font-bold hover:bg-[#e55a20] transition-colors shadow-lg text-lg w-full sm:w-auto"
              >
                Get Free Quote →
              </Link>
              <Link
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#1B4FFF] rounded-full px-10 py-5 font-bold hover:bg-blue-50 transition-colors shadow-lg text-lg w-full sm:w-auto"
              >
                WhatsApp Us Now
              </Link>
            </div>

            <p className="text-blue-200 text-sm mt-8 font-medium">
              ⚡ Typically respond within 2 hours · Free consultation · No obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
