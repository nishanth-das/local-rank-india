import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { SOCIAL_LINKS, EMAIL, PHONE, ADDRESS } from "@/lib/constants";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-28 md:pb-10 border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#1B4FFF]/5 to-[#FF6B2B]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1 */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-[#0A0F1E] font-display">
                LocalRank
              </span>
              <span className="text-2xl font-bold text-[#FF6B2B] font-display">
                India
              </span>
              <span className="text-[#FF6B2B] text-sm">●</span>
            </Link>
            <p className="text-[#4A5568] text-sm leading-relaxed max-w-xs font-medium">
              Professional, mobile-ready websites for local businesses across India. Delivered in 5 days.
            </p>
            <div className="flex space-x-5 pt-2">
              <Link
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                className="text-[#9CA3AF] hover:text-[#1B4FFF] hover:-translate-y-1 transition-all duration-300"
              >
                <FacebookIcon size={22} />
              </Link>
              <Link
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                className="text-[#9CA3AF] hover:text-[#FF6B2B] hover:-translate-y-1 transition-all duration-300"
              >
                <InstagramIcon size={22} />
              </Link>
              <Link
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                className="text-[#9CA3AF] hover:text-[#25D366] hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle size={22} />
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-[#0A0F1E] tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#4A5568] font-medium hover:text-[#1B4FFF] hover:translate-x-1 transition-all inline-block text-sm">Home</Link></li>
              <li><Link href="/services" className="text-[#4A5568] font-medium hover:text-[#1B4FFF] hover:translate-x-1 transition-all inline-block text-sm">Services</Link></li>
              <li><Link href="/portfolio" className="text-[#4A5568] font-medium hover:text-[#1B4FFF] hover:translate-x-1 transition-all inline-block text-sm">Portfolio</Link></li>
              <li><Link href="/about" className="text-[#4A5568] font-medium hover:text-[#1B4FFF] hover:translate-x-1 transition-all inline-block text-sm">About</Link></li>
              <li><Link href="/blog" className="text-[#4A5568] font-medium hover:text-[#1B4FFF] hover:translate-x-1 transition-all inline-block text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-[#4A5568] font-medium hover:text-[#1B4FFF] hover:translate-x-1 transition-all inline-block text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-[#0A0F1E] tracking-wide">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/website-development" className="text-[#4A5568] font-medium hover:text-[#1B4FFF] hover:translate-x-1 transition-all inline-block text-sm">Website Development</Link></li>
              <li><Link href="/services/google-my-business" className="text-[#4A5568] font-medium hover:text-[#1B4FFF] hover:translate-x-1 transition-all inline-block text-sm">Google My Business</Link></li>
              <li><Link href="/services" className="text-[#4A5568] font-medium hover:text-[#1B4FFF] hover:translate-x-1 transition-all inline-block text-sm">SEO & Visibility</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-[#0A0F1E] tracking-wide">Get In Touch</h3>
            <ul className="space-y-5">
              <li className="flex items-center space-x-3 text-[#4A5568] text-sm font-medium">
                <div className="w-8 h-8 rounded-full bg-[#1B4FFF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1B4FFF]">
                  <Phone className="text-[#1B4FFF]" size={14} />
                </div>
                <a href={`tel:${PHONE}`} className="hover:text-[#1B4FFF] transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center space-x-3 text-[#4A5568] text-sm font-medium">
                <div className="w-8 h-8 rounded-full bg-[#1B4FFF]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#1B4FFF]" size={14} />
                </div>
                <a href={`mailto:${EMAIL}`} className="hover:text-[#1B4FFF] transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-start space-x-3 text-[#4A5568] text-sm font-medium">
                <div className="w-8 h-8 rounded-full bg-[#1B4FFF]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="text-[#1B4FFF]" size={14} />
                </div>
                <span className="leading-relaxed">{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9CA3AF] font-semibold tracking-wide">
          <p>© {new Date().getFullYear()} Local Rank India. All rights reserved.</p>
          <p>Made with <span className="text-red-500 text-sm">♥</span> in Agartala, Tripura 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
