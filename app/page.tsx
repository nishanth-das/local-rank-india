import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import SocialProofBar from "@/components/home/SocialProofBar";
import dynamic from "next/dynamic";

const ServicesOverview = dynamic(() => import("@/components/home/ServicesOverview"));
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"));
const Industries = dynamic(() => import("@/components/home/Industries"));
const WhyUs = dynamic(() => import("@/components/home/WhyUs"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const CTABanner = dynamic(() => import("@/components/home/CTABanner"));

export const metadata: Metadata = {
  title: "Local Rank India — Professional Website Design for Local Businesses in India",
  description: "We build fast, mobile-ready websites for local businesses across India. Google My Business setup included. 5-day delivery. Based in Agartala, Tripura.",
  keywords: "website design India, local business website, web development Agartala Tripura, affordable website India, Google My Business setup",
  openGraph: {
    title: "Local Rank India — Websites That Get You Customers",
    description: "Professional website design for local businesses. 5-day delivery. Secure hosting. Based in Agartala, Tripura.",
    url: "https://localrankindia.com",
    siteName: "Local Rank India",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ServicesOverview />
      <HowItWorks />
      <Industries />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
