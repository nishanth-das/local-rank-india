import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Smartphone, Zap, MessageCircle, Mail, MapPin, Search, Shield, Globe, RefreshCw, Image as ImageIcon, BarChart2, Headphones } from "lucide-react";
import { WHATSAPP_DEFAULT } from "@/lib/constants";
import ServiceHero from "@/components/services/ServiceHero";
import FeatureCard from "@/components/services/FeatureCard";
import TierCards from "@/components/services/TierCards";
import Timeline from "@/components/services/Timeline";
import TechStack from "@/components/services/TechStack";
import FAQAccordion from "@/components/services/FAQAccordion";
import ServiceCTABanner from "@/components/services/ServiceCTABanner";

export const metadata: Metadata = {
  title: "Website Development for Local Businesses in India | Local Rank India",
  description: "Professional website design and development for local businesses across India. Mobile-ready, SEO optimised, delivered in 5 days. Contact us for a free quote.",
  openGraph: {
    title: "Website Development — Local Rank India",
    description: "Fast, professional websites for local Indian businesses. Free quote available.",
    url: "https://localrankindia.com/services/website-development",
  },
};

export default function WebsiteDevelopmentPage() {
  const heroButtons = (
    <>
      <Link
        href="/contact"
        className="bg-[#1B4FFF] text-white rounded-full px-8 py-4 font-bold hover:bg-[#1540CC] transition-colors"
      >
        Get Free Quote →
      </Link>
      <Link
        href={WHATSAPP_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white/20 text-white rounded-full px-8 py-4 hover:bg-white/10 transition-colors"
      >
        WhatsApp Us
      </Link>
    </>
  );

  const heroImage = (
    <Image
      src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
      alt="Website development for local businesses India"
      width={600}
      height={500}
      unoptimized={true}
      className="rounded-3xl shadow-2xl w-full object-cover"
      priority
    />
  );

  const breadcrumb = (
    <div className="flex items-center text-[#9CA3AF] text-sm">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <Link href="/services" className="hover:text-white transition-colors">Services</Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <span className="text-white">Website Development</span>
    </div>
  );

  const features = [
    { icon: <Smartphone />, title: "Mobile Responsive", desc: "Looks perfect on all phones, tablets, and desktops." },
    { icon: <Zap />, title: "Fast Loading Speed", desc: "Optimised for speed so visitors don't leave before the page loads." },
    { icon: <MessageCircle />, title: "WhatsApp Button", desc: "One-tap WhatsApp contact button so customers can message you instantly." },
    { icon: <Mail />, title: "Contact Form", desc: "A simple form that sends enquiries directly to your email inbox." },
    { icon: <MapPin />, title: "Google Maps Embed", desc: "Your location embedded so customers can get directions with one tap." },
    { icon: <Search />, title: "SEO Optimised", desc: "Meta tags, headings, and schema markup set up so Google can find you." },
    { icon: <Shield />, title: "SSL Certificate", desc: "HTTPS security included — required for Google rankings and customer trust." },
    { icon: <Globe />, title: "Secure Hosting", desc: "Hosted on Cloudflare's global network — fast, reliable, and secure." },
    { icon: <RefreshCw />, title: "1 Free Revision", desc: "After delivery, one round of revisions is included at no extra charge." },
    { icon: <ImageIcon />, title: "Custom Design", desc: "Designed to match your brand — not a generic template." },
    { icon: <BarChart2 />, title: "Google Analytics", desc: "Track your visitors and see how people find your website." },
    { icon: <Headphones />, title: "Post-Launch Support", desc: "We're available on WhatsApp after launch if you need help." },
  ];

  const faqs = [
    { q: "Do I need to provide content and photos?", a: "We help guide you through what's needed. If you have photos and text ready, great — we'll use them. If not, we can use professional stock images and help write the basic copy for your business." },
    { q: "What if I don't have a domain name yet?", a: "No problem. We'll guide you on buying a domain (usually ₹800–1,200/year from providers like GoDaddy or Namecheap). Hosting is free on Cloudflare — no monthly charges." },
    { q: "Can I update the website myself after it's built?", a: "We'll show you how to make basic text and image updates. For bigger changes, you can always reach out to us and we'll help." },
    { q: "What if I'm not happy with the design?", a: "We share a preview before the final build and take your feedback seriously. Every website includes 1 free revision after delivery. Your satisfaction is our priority." },
    { q: "Do you work with businesses outside Tripura?", a: "Absolutely. We work with businesses all across India — everything is handled over WhatsApp, phone, and email. Location is no barrier." },
    { q: "How do I pay?", a: "We take 50% upfront to begin work and the remaining 50% before the site goes live. Payment via UPI, bank transfer, or any method that works for you." },
    { q: "Will my website rank on Google?", a: "We build every website with on-page SEO best practices — proper headings, meta tags, fast load speed, and schema markup. Ranking takes time, but your site will be built correctly from day one." },
  ];

  return (
    <main>
      <ServiceHero
        eyebrow="WEBSITE DEVELOPMENT"
        eyebrowColor="blue"
        title="Your Business Deserves a Website That Actually Works"
        subtext="We build fast, mobile-ready websites that help local businesses get found on Google and convert visitors into customers."
        buttons={heroButtons}
        image={heroImage}
        breadcrumb={breadcrumb}
      />

      {/* SECTION 2: What's Included */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#FF6B2B] text-sm font-bold tracking-widest uppercase">
              WHAT YOU GET
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mt-4 bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent pb-1">
              Everything Included — No Hidden Extras
            </h2>
            <p className="text-[#4A5568] mt-6 text-lg">
              Every website we build comes with these features as standard.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Website Types / Tiers */}
      <section className="bg-[#F8F9FF] bg-dot-grid py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display pb-1">
              Choose the Right Website for Your Business
            </h2>
            <p className="text-[#4A5568] mt-6 text-lg">
              Not sure which type fits? Message us — we&apos;ll recommend the right one for free.
            </p>
          </div>
          <TierCards />
        </div>
      </section>

      {/* SECTION 4: Delivery Timeline */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display pb-1">
              From Brief to Live in 5 Days
            </h2>
            <p className="text-[#4A5568] mt-6 text-lg">
              Here&apos;s exactly what happens after you contact us.
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* SECTION 5: Tech Stack */}
      <section className="bg-[#0A0F1E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white text-4xl md:text-5xl font-extrabold font-display pb-1">
              Built With Modern, Proven Technology
            </h2>
            <p className="text-[#9CA3AF] mt-6 text-lg">
              We use the same tools that power Fortune 500 websites — so yours is fast, secure, and built to last.
            </p>
          </div>
          <TechStack />
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="bg-[#F8F9FF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display pb-1">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* SECTION 7: CTA Banner */}
      <ServiceCTABanner
        variant="blue"
        title="Let's Build Your Website This Week"
        subtext="Contact us today for a free quote. We'll get back to you within 2 hours."
      />
    </main>
  );
}
