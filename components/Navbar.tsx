"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  // Text color needs to be white on inner pages when at the top (transparent nav),
  // because inner pages have dark hero backgrounds.
  const isDarkText = isScrolled || isHomePage;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-1">
            <span className={`text-2xl font-bold font-display transition-colors ${isDarkText ? "text-textPrimary" : "text-white"}`}>
              LocalRank
            </span>
            <span className="text-2xl font-bold text-secondary font-display">
              India
            </span>
            <span className="text-secondary text-sm">●</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors ${
                  isDarkText 
                    ? "text-textSecondary hover:text-primary" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:bg-primary/90"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`focus:outline-none transition-colors p-2 -mr-2 ${isDarkText ? "text-[#0A0F1E]" : "text-white"}`}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0A0F1E]/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Nav Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
          <span className="font-display font-bold text-xl text-[#0A0F1E]">Navigation</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4A5568] hover:text-[#FF6B2B] transition-colors p-2 -mr-2 bg-[#F8F9FF] rounded-full"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-4 text-lg font-bold rounded-2xl transition-all ${
                pathname === link.href 
                  ? "bg-[#1B4FFF]/10 text-[#1B4FFF]" 
                  : "text-[#0A0F1E] hover:bg-[#F8F9FF] hover:text-[#1B4FFF]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-[#E2E8F0] bg-[#F8F9FF]">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#1B4FFF] text-white px-6 py-4 rounded-full font-bold shadow-lg shadow-blue-500/30 active:scale-95 transition-transform"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
