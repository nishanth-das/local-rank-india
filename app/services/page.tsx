import { Metadata } from "next";
import Link from "next/link";
import { Globe, MapPin } from "lucide-react";
import { WHATSAPP_DEFAULT } from "@/lib/constants";
import ServiceHero from "@/components/services/ServiceHero";
import DecisionHelper from "@/components/services/DecisionHelper";
import ServiceCTABanner from "@/components/services/ServiceCTABanner";

export const metadata: Metadata = {
  title: "Our Services — Website Design & Google My Business | Local Rank India",
  description: "Professional website development and Google My Business setup for local businesses across India. Fast delivery, mobile-ready, SEO optimised.",
  openGraph: {
    title: "Services — Local Rank India",
    description: "Website design and GMB setup for local Indian businesses.",
    url: "https://localrankindia.com/services",
  },
};

export default function ServicesPage() {
  const heroButtons = (
    <>
      <Link
        href="/contact"
        className="bg-[#1B4FFF] text-white rounded-full px-8 py-4 font-bold hover:bg-[#1540CC] transition-colors shadow-lg"
      >
        Get Free Quote
      </Link>
      <Link
        href={WHATSAPP_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-white/20 text-white rounded-full px-8 py-4 font-semibold hover:border-white transition-colors shadow-lg"
      >
        WhatsApp Us
      </Link>
    </>
  );

  return (
    <main>
      {/* SECTION 1: Page Hero */}
      <ServiceHero
        eyebrow="OUR SERVICES"
        eyebrowColor="orange"
        title="Everything You Need to Grow Online"
        subtext="From a professional website to getting found on Google Maps — we handle your entire online presence so you can focus on running your business."
        buttons={heroButtons}
      />

      {/* SECTION 2: Two Main Service Cards */}
      <section className="bg-[#F8F9FF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#FF6B2B] text-sm font-bold tracking-widest uppercase">
              WHAT WE OFFER
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mt-4 bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent pb-1">
              Two Services. One Goal — More Customers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white border border-[#E2E8F0] hover:border-[#1B4FFF]/40 hover:shadow-xl transition-all duration-300 rounded-3xl p-10 flex flex-col">
              <div className="bg-[#1B4FFF]/10 rounded-2xl p-4 w-fit mb-6">
                <Globe className="w-12 h-12 text-[#1B4FFF]" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A0F1E]">Website Development</h3>
              <p className="text-[#4A5568] mt-4 leading-relaxed mb-6 flex-grow">
                A professionally designed, mobile-ready website that represents your business 24/7. Built to load fast, rank on Google, and turn visitors into enquiries.
              </p>
              <ul className="space-y-3 mb-8">
                {["Mobile & tablet responsive", "WhatsApp button & contact form", "Google Maps embedded", "On-page SEO included", "SSL certificate & secure hosting", "Delivered in 3–5 working days"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#10B981] w-5 h-5 flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-[#4A5568] text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services/website-development" className="bg-[#1B4FFF] text-white rounded-full px-6 py-3 font-semibold w-full text-center mt-auto hover:bg-[#1540CC] transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white border border-[#E2E8F0] hover:border-[#FF6B2B]/40 hover:shadow-xl transition-all duration-300 rounded-3xl p-10 flex flex-col">
              <div className="absolute top-6 right-6 bg-[#FF6B2B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Requested
              </div>
              <div className="bg-[#FF6B2B]/10 rounded-2xl p-4 w-fit mb-6">
                <MapPin className="w-12 h-12 text-[#FF6B2B]" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A0F1E]">Google My Business Setup</h3>
              <p className="text-[#4A5568] mt-4 leading-relaxed mb-6 flex-grow">
                Get your business showing up when people search &apos;near me&apos; on Google. We set up and optimise your Google Business Profile so local customers can find you, call you, and visit you.
              </p>
              <ul className="space-y-3 mb-8">
                {["Google Maps listing created", "Business profile fully optimised", "Categories & service areas set", "Photos & logo uploaded", "Appear in 'near me' searches", "Review strategy guidance"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#10B981] w-5 h-5 flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-[#4A5568] text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services/google-my-business" className="bg-[#FF6B2B] text-white rounded-full px-6 py-3 font-semibold w-full text-center mt-auto hover:bg-[#e55a20] transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Decision Helper */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display pb-1">
              Not Sure What You Need?
            </h2>
            <p className="text-[#4A5568] mt-6 text-lg">
              Answer one question and we&apos;ll point you in the right direction.
            </p>
          </div>
          <DecisionHelper />
        </div>
      </section>

      {/* SECTION 4: Process Overview */}
      <section className="bg-[#F8F9FF] bg-dot-grid py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display pb-1">
              How We Work
            </h2>
            <p className="text-[#4A5568] mt-6 text-lg">
              Simple, transparent, and built around you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { num: 1, icon: "💬", title: "Discovery Call", desc: "Tell us about your business in 10 minutes." },
              { num: 2, icon: "🎨", title: "Design & Build", desc: "We build your site and share previews for feedback." },
              { num: 3, icon: "✅", title: "Review & Revise", desc: "You approve, we make any final tweaks." },
              { num: 4, icon: "🚀", title: "Go Live", desc: "Your site is live and customers can find you." },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#1B4FFF] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                  {step.num}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h4 className="font-bold text-[#0A0F1E] mb-2">{step.title}</h4>
                <p className="text-sm text-[#4A5568]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA Banner */}
      <ServiceCTABanner
        variant="blue"
        title="Ready to Grow Your Business Online?"
        subtext="Get in touch today — free consultation, no obligation."
      />
    </main>
  );
}
