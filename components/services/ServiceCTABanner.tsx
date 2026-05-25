"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { WHATSAPP_DEFAULT } from "@/lib/constants";

interface ServiceCTABannerProps {
  variant: "blue" | "orange";
  title: string;
  subtext: string;
}

export default function ServiceCTABanner({ variant, title, subtext }: ServiceCTABannerProps) {
  const { ref, visible } = useReveal();

  const bgGradient =
    variant === "blue"
      ? "bg-gradient-to-r from-[#1B4FFF] to-[#1540CC]"
      : "bg-gradient-to-r from-[#FF6B2B] to-[#e55a20]";

  return (
    <section className={`${bgGradient} py-20`}>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold font-display leading-tight">
            {title}
          </h2>
          <p className={`${variant === "blue" ? "text-blue-100" : "text-orange-100"} text-lg mt-6 max-w-xl mx-auto`}>
            {subtext}
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {variant === "blue" ? (
              <>
                <Link
                  href="/contact"
                  className="bg-[#FF6B2B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#e55a20] transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </Link>
                <Link
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#1B4FFF] px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  WhatsApp Us
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/contact"
                  className="bg-white text-[#FF6B2B] px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </Link>
                <Link
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl"
                >
                  WhatsApp Us
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
