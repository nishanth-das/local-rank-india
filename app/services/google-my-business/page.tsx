import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Star, Image as ImageIcon, Tag, Globe, Phone, Clock, MessageSquare, TrendingUp } from "lucide-react";
import { WHATSAPP_DEFAULT } from "@/lib/constants";
import ServiceHero from "@/components/services/ServiceHero";
import FeatureCard from "@/components/services/FeatureCard";
import MockGoogleCard from "@/components/services/MockGoogleCard";
import BeforeAfter from "@/components/services/BeforeAfter";
import FAQAccordion from "@/components/services/FAQAccordion";
import ServiceCTABanner from "@/components/services/ServiceCTABanner";

export const metadata: Metadata = {
  title: "Google My Business Setup for Local Businesses in India | Local Rank India",
  description: "Get your business found on Google Maps with a fully optimised Google Business Profile. Setup done by experts. Serving local businesses across India.",
  openGraph: {
    title: "Google My Business Setup — Local Rank India",
    description: "Get found on Google Maps. Professional GMB setup for Indian businesses.",
    url: "https://localrankindia.com/services/google-my-business",
  },
};

export default function GoogleMyBusinessPage() {
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
      src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80"
      alt="Google My Business setup for local businesses India"
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
      <span className="text-white">Google My Business</span>
    </div>
  );

  const features = [
    { icon: <MapPin />, title: "Google Maps Listing", desc: "Your business pinned on Google Maps so customers can find your exact location." },
    { icon: <Star />, title: "Profile Fully Optimised", desc: "Business name, category, description, and attributes filled in correctly for maximum visibility." },
    { icon: <ImageIcon />, title: "Photos & Logo Uploaded", desc: "We upload your business photos and logo to make your profile stand out." },
    { icon: <Tag />, title: "Services & Products Listed", desc: "All your services listed clearly so customers know exactly what you offer." },
    { icon: <Globe />, title: "Website Link Added", desc: "Your website linked to your GMB so customers can visit it directly." },
    { icon: <Phone />, title: "Click-to-Call Enabled", desc: "Customers can call your business with one tap directly from Google search." },
    { icon: <Clock />, title: "Business Hours Set", desc: "Opening hours set correctly so Google shows 'Open Now' at the right times." },
    { icon: <MessageSquare />, title: "Q&A Section Seeded", desc: "We add common questions and answers to your profile to help customers." },
    { icon: <TrendingUp />, title: "Review Strategy", desc: "We guide you on how to ask happy customers for Google reviews to build your rating." },
  ];

  const faqs = [
    { q: "What is Google My Business / Google Business Profile?", a: "It's a free tool from Google that lets you control how your business appears on Google Search and Maps. When someone searches for your business or a business like yours nearby, your profile shows up with your address, phone number, photos, and reviews." },
    { q: "Is Google My Business free?", a: "Yes — the Google Business Profile itself is completely free. You only pay us for the time and expertise it takes to set it up correctly and optimise it." },
    { q: "How long does GMB setup take?", a: "The initial setup typically takes 1–2 working days. Google then verifies your listing (usually within 3–7 days via postcard or video verification). We guide you through the entire verification process." },
    { q: "Do I need a website for GMB?", a: "No — GMB works even without a website. However, having both dramatically increases your visibility and trust. We offer both services and can combine them." },
    { q: "Can you set up GMB for a business in any city in India?", a: "Yes. We set up and optimise Google Business Profiles for businesses all across India, fully remotely." },
    { q: "What if I already have a GMB listing but it's not optimised?", a: "We can audit and fully optimise your existing profile — updating all information, adding photos, setting up services, and improving your chances of appearing in local searches." },
  ];

  return (
    <main>
      <ServiceHero
        eyebrow="GOOGLE MY BUSINESS"
        eyebrowColor="orange"
        title="Get Found When Customers Search Near Them"
        subtext="When someone searches 'dentist near me' or 'gym in Agartala' — is your business showing up? With Google My Business, it will."
        buttons={heroButtons}
        image={heroImage}
        breadcrumb={breadcrumb}
      />

      {/* SECTION 2: The Problem / Why GMB Matters */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display pb-1">
                Your Customers Are Searching Right Now
              </h2>
              <p className="text-[#4A5568] leading-relaxed mt-4 text-lg">
                Every day, thousands of people in your city search for businesses like yours on Google. If you don&apos;t have a Google Business Profile, you&apos;re invisible in those results — and your competitors get those customers instead.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-[#1B4FFF] text-4xl md:text-5xl font-black font-display">46%</div>
                  <div className="text-[#4A5568] text-xs mt-2">of all Google searches are looking for local businesses</div>
                </div>
                <div>
                  <div className="text-[#1B4FFF] text-4xl md:text-5xl font-black font-display">88%</div>
                  <div className="text-[#4A5568] text-xs mt-2">of local mobile searches call or visit within 24 hours</div>
                </div>
                <div>
                  <div className="text-[#1B4FFF] text-4xl md:text-5xl font-black font-display">3x</div>
                  <div className="text-[#4A5568] text-xs mt-2">more calls for businesses with complete GMB profiles</div>
                </div>
              </div>
            </div>
            <div>
              <MockGoogleCard />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: What's Included */}
      <section className="bg-[#F8F9FF] bg-dot-grid py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#FF6B2B] text-sm font-bold tracking-widest uppercase">
              WHAT YOU GET
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mt-4 bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent pb-1">
              A Complete Google Business Profile Setup
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Before vs After */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display pb-1">
              Before vs After GMB Setup
            </h2>
            <p className="text-[#4A5568] mt-6 text-lg">
              See the difference a properly set up Google Business Profile makes.
            </p>
          </div>
          <BeforeAfter />
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="bg-[#F8F9FF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display pb-1">
              Common Questions About GMB
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* SECTION 6: CTA Banner */}
      <ServiceCTABanner
        variant="orange"
        title="Get Your Business on Google Maps Today"
        subtext="It takes less than 48 hours. Contact us and we'll handle everything."
      />
    </main>
  );
}
