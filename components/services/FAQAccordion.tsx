"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-[#F8F9FF] transition-colors focus:outline-none"
            >
              <span className="font-semibold text-[#0A0F1E] pr-4">{item.q}</span>
              <ChevronDown
                className={`text-[#4A5568] transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="p-6 pt-0 text-[#4A5568]">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
