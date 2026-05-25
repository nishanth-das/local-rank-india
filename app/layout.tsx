import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingCTA from "@/components/FloatingCTA";
import Analytics from "@/components/Analytics";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://localrankindia.com"),
  alternates: {
    canonical: "/",
  },
  title: "Local Rank India — Professional Website Design for Local Businesses",
  description:
    "We build fast, mobile-ready websites for local businesses across India. Google My Business setup included. Based in Agartala, Tripura.",
  keywords:
    "website design India, local business website, web development Agartala, Google My Business setup",
  openGraph: {
    title: "Local Rank India — Professional Website Design for Local Businesses",
    description: "We build fast, mobile-ready websites for local businesses across India. Google My Business setup included.",
    url: "https://localrankindia.com",
    siteName: "Local Rank India",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Local Rank India - We Build Websites That Get You Customers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://api.web3forms.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Local Rank India",
              "description": "Professional website design and Google My Business setup for local businesses across India.",
              "founder": {
                "@type": "Person",
                "name": "Nishanth Das"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Agartala",
                "addressRegion": "Tripura",
                "postalCode": "799001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.8315",
                "longitude": "91.2868"
              },
              "areaServed": "India",
              "telephone": "+91 8837061320",
              "email": "localrankindia@gmail.com",
              "url": "https://localrankindia.com",
              "sameAs": [
                "https://facebook.com/localrankindia",
                "https://instagram.com/localrankindia"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "09:00",
                "closes": "19:00"
              }
            })
          }}
        />

      </head>
      <body className={`${plusJakartaSans.variable} ${dmSans.variable} font-sans antialiased`}>
        <Analytics />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#1B4FFF] text-white px-4 py-2 rounded-lg z-[100]">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <FloatingCTA />
      </body>
    </html>
  );
}
