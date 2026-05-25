export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string        // full HTML/markdown content string
  category: string
  tags: string[]
  publishedAt: string    // "2025-05-01"
  readTime: string       // "5 min read"
  coverImage: string     // Unsplash URL
  author: {
    name: string
    role: string
    avatar: string
  }
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string
  }
}

export const blogCategories = [
  "All",
  "Website Tips",
  "Local Business",
  "Google My Business",
  "SEO",
  "Northeast India",
]

export const blogPosts: BlogPost[] = [
  {
    slug: "why-every-local-business-in-india-needs-a-website-in-2025",
    title: "Why Every Local Business in India Needs a Website in 2025",
    excerpt: "If your business isn't online, you're invisible to thousands of potential customers searching Google every day. Here's why a website is no longer optional for local businesses in India.",
    category: "Local Business",
    tags: ["website", "local business", "India", "digital presence"],
    publishedAt: "2025-05-01",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    author: {
      name: "Nishanth Das",
      role: "Founder, Local Rank India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    seo: {
      metaTitle: "Why Every Local Business in India Needs a Website in 2025 | Local Rank India",
      metaDescription: "Discover why local businesses across India are losing customers without a website. Learn how a professional website helps you get found on Google and grow your business.",
      keywords: "local business website India, why website important, business website 2025, get found on Google India",
    },
    content: `
  <h2>The Way Customers Find Businesses Has Changed Forever</h2>
  <p>Think about the last time you needed a dentist, a gym, or a photographer. Did you ask a friend? Maybe. But chances are you opened Google and typed something like "dentist near me" or "best gym in Agartala."</p>
  <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80" alt="Local Indian business owners checking digital presence" />
  
  <div class="blog-infographic">
    <h4 style="margin-top:0; font-weight:900; font-size:1.25rem; color:#0A0F1E;">The Digital Reality in India</h4>
    <div class="blog-stat-grid">
      <div class="blog-stat-item">
        <div class="blog-stat-value">84%</div>
        <div class="blog-stat-label">Start with Search</div>
      </div>
      <div class="blog-stat-item">
        <div class="blog-stat-value">3x</div>
        <div class="blog-stat-label">Higher Trust</div>
      </div>
      <div class="blog-stat-item">
        <div class="blog-stat-value">500k</div>
        <div class="blog-stat-label">Monthly Searches</div>
      </div>
    </div>
  </div>

  <p>That is exactly what your potential customers are doing right now. Every single day, thousands of people across India search Google for businesses exactly like yours. The question is — are you showing up?</p>
  <p>If you don't have a website, the honest answer is: no, you're not.</p>
  
  <h2>Your Competitors Are Already Online</h2>
  <p>Here's the hard truth — while you're waiting, your competitors are getting those customers. Even a basic website puts a business miles ahead of one that has no online presence at all.</p>
  
  <blockquote>
    "In 2025, a business without a website is like a shop without a signboard. You might be the best, but nobody knows you exist."
  </blockquote>

  <p>When a potential customer searches for your type of business and finds your competitor's website but nothing for you, the decision is made in seconds. They call your competitor. Not because their business is better — but because they showed up and you didn't.</p>
  
  <h2>A Website Works for You 24/7</h2>
  <p>Your shop might close at 8 PM. Your website never does. Someone looking for your services at 11 PM on a Sunday can find you, learn about what you offer, and send you an enquiry — all while you're asleep.</p>
  
  <div class="blog-infographic" style="background:#0A0F1E; border:none;">
    <h4 style="margin-top:0; font-weight:900; font-size:1.25rem; color:white;">Your 24/7 Sales Engine</h4>
    <div class="blog-process-flow">
      <div class="blog-process-step">
        <div class="blog-step-number">1</div>
        <div class="blog-step-text">Customer Searches for Your Service at Night</div>
      </div>
      <div class="blog-process-step">
        <div class="blog-step-number">2</div>
        <div class="blog-step-text">Finds Your Website and Reviews Your Work</div>
      </div>
      <div class="blog-process-step">
        <div class="blog-step-number">3</div>
        <div class="blog-step-text">Fills Out Your Enquiry Form Instantly</div>
      </div>
      <div class="blog-process-step" style="background:#1B4FFF; color:white;">
        <div class="blog-step-number" style="background:white; color:#1B4FFF;">4</div>
        <div class="blog-step-text" style="color:white;">You Wake Up to a New High-Quality Lead!</div>
      </div>
    </div>
  </div>

  <h2>Google My Business Alone Is Not Enough</h2>
  <p>Many local business owners think that having a Google My Business listing is enough. It's a great start — but it has limits. You can't explain your services in detail, show a gallery of your work, collect leads through a form, or build the kind of trust that a proper website creates.</p>
  <p>A website combined with Google My Business is the complete package. Together, they cover both Google Search and Google Maps — giving you maximum visibility.</p>
    `,
  },
  {
    slug: "how-to-get-your-business-on-google-maps-india",
    title: "How to Get Your Business on Google Maps — A Complete Guide for Indian Businesses",
    excerpt: "Google Maps is where local customers find businesses. Here's a step-by-step guide to setting up and optimising your Google Business Profile so you show up when it matters.",
    category: "Google My Business",
    tags: ["google my business", "google maps", "local SEO", "India"],
    publishedAt: "2025-05-05",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&q=80",
    author: {
      name: "Nishanth Das",
      role: "Founder, Local Rank India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    seo: {
      metaTitle: "How to Get Your Business on Google Maps India — Complete Guide | Local Rank India",
      metaDescription: "Step-by-step guide to setting up Google My Business for local businesses in India. Get found on Google Maps and attract more local customers.",
      keywords: "google my business India, get on google maps India, local SEO India, google business profile setup",
    },
    content: `
  <h2>Why Google Maps Matters for Your Business</h2>
  <p>When someone searches "pharmacy near me" or "hotel in Shillong," Google shows a map with 3 local businesses at the top of the results. This is called the "Local Pack" — and it's prime real estate. Businesses that appear here get the majority of calls and visits.</p>
  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Google Maps navigation on smartphone" />

  <div class="blog-infographic">
    <h4 style="margin-top:0; font-weight:900; font-size:1.25rem; color:#0A0F1E;">The Power of the Local Pack</h4>
    <div class="blog-stat-grid">
      <div class="blog-stat-item">
        <div class="blog-stat-value">68%</div>
        <div class="blog-stat-label">Click on Top 3</div>
      </div>
      <div class="blog-stat-item">
        <div class="blog-stat-value">50%</div>
        <div class="blog-stat-label">Visit within 24h</div>
      </div>
    </div>
  </div>

  <p>The key to appearing in the Local Pack is having a complete, optimised Google Business Profile. This guide will walk you through exactly how to set it up.</p>
  
  <h2>The Step-by-Step Setup Process</h2>
  
  <div class="blog-process-flow">
    <div class="blog-process-step">
      <div class="blog-step-number">1</div>
      <div class="blog-step-text">Go to business.google.com and sign in</div>
    </div>
    <div class="blog-process-step">
      <div class="blog-step-number">2</div>
      <div class="blog-step-text">Enter your exact business name (No keyword stuffing!)</div>
    </div>
    <div class="blog-process-step">
      <div class="blog-step-number">3</div>
      <div class="blog-step-text">Choose your Primary Category carefully</div>
    </div>
    <div class="blog-process-step">
      <div class="blog-step-number">4</div>
      <div class="blog-step-text">Add your precise location and pin on the map</div>
    </div>
    <div class="blog-process-step">
      <div class="blog-step-number">5</div>
      <div class="blog-step-text">Request verification via Postcard</div>
    </div>
  </div>

  <h2 style="margin-top:3rem;">Optimization Secrets for 2025</h2>
  <p>Once verified, go beyond the basics. Write a detailed business description (up to 750 characters) — describe what you do, who you serve, and what makes you different. Add all your services with descriptions. Upload at least 5–10 high-quality photos of your business, products, or work.</p>
    `,
  },
  {
    slug: "website-design-for-doctors-clinics-india",
    title: "Why Doctors and Clinics in India Need a Professional Website in 2025",
    excerpt: "Patients search Google before choosing a doctor. If your clinic doesn't have a website, you're losing patients to competitors who do. Here's what a great clinic website looks like.",
    category: "Website Tips",
    tags: ["healthcare website", "doctor website", "clinic website India", "medical website"],
    publishedAt: "2025-05-10",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
    author: {
      name: "Nishanth Das",
      role: "Founder, Local Rank India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    seo: {
      metaTitle: "Website Design for Doctors and Clinics in India | Local Rank India",
      metaDescription: "Why doctors and clinics across India need a professional website. Learn what to include, how patients find you online, and how to build trust before they even walk in.",
      keywords: "doctor website India, clinic website design, medical website India, healthcare website Agartala",
    },
    content: `
  <h2>Patients Google Their Doctor Before Booking</h2>
  <p>Before a patient calls your clinic, they search for you online. They want to know who you are, what you specialise in, where you're located, and what other patients say about you. If they can't find a website, many will simply move on to a doctor who has one.</p>
  <p>This is the new reality of healthcare in India — and it applies whether you're in Mumbai or Agartala.</p>
  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="Doctor consulting patient in modern clinic" />
  
  <h2>What a Great Clinic Website Must Include</h2>
  <p>A clinic website isn't just a digital business card. Done right, it actively brings in new patients. Here's what every doctor's or clinic's website should have:</p>
  <p><strong>Doctor's Profile:</strong> A professional photo, your qualifications, specialisations, years of experience, and any hospital affiliations. Patients want to know who they're trusting with their health.</p>
  <p><strong>List of Services:</strong> Clearly list all conditions you treat and procedures you offer. This is what Google uses to match your site to patient searches.</p>
  <p><strong>Appointment Enquiry Form:</strong> Make it easy for patients to request an appointment online. Include fields for name, phone, and preferred date/time.</p>
  <p><strong>Clinic Location and Hours:</strong> An embedded Google Map and clear opening hours prevent patients from going to the wrong address or calling when you're closed.</p>
  <p><strong>Patient Testimonials:</strong> Positive reviews from real patients build enormous trust. Even 3–4 good testimonials can significantly increase how many people choose you.</p>
  
  <h2>How a Website Helps You Rank on Google</h2>
  <p>Every service you list on your website is a chance to appear in search results. A page about "root canal treatment" can rank when someone in your city searches for that procedure. A page about "paediatric care" can show up for parents searching for a children's doctor nearby.</p>
  <p>This kind of organic visibility brings patients to you continuously — without any advertising spend.</p>
  
  <h2>Building Trust Before the First Visit</h2>
  <p>In healthcare, trust is everything. A well-designed, professional website communicates that you take your practice seriously. It gives patients confidence before they've even met you — and can be the difference between someone choosing your clinic or a competitor's.</p>
  
  <h2>The Competitive Advantage in Smaller Cities</h2>
  <p>In cities like Agartala, Silchar, Imphal, or Shillong, the majority of doctors and clinics still don't have proper websites. This means that the first clinic to have a professional online presence in a given specialty often dominates local search results for years.</p>
  <p>The doctors who move now will enjoy a significant first-mover advantage over those who wait.</p>
    `,
  },
  {
    slug: "local-seo-guide-for-small-businesses-india",
    title: "Local SEO Guide for Small Businesses in India — Get Found on Google for Free",
    excerpt: "Local SEO is how small businesses get found on Google without paying for ads. This practical guide explains what local SEO is and exactly what you need to do to rank in your city.",
    category: "SEO",
    tags: ["local SEO", "small business SEO", "Google ranking India", "free traffic"],
    publishedAt: "2025-05-15",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
    author: {
      name: "Nishanth Das",
      role: "Founder, Local Rank India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    seo: {
      metaTitle: "Local SEO Guide for Small Businesses in India | Local Rank India",
      metaDescription: "A practical local SEO guide for small businesses in India. Learn how to rank on Google in your city, get found by local customers, and grow without paid ads.",
      keywords: "local SEO India, small business SEO, rank on Google India, local search optimization",
    },
    content: `
  <h2>What Is Local SEO?</h2>
  <p>Local SEO (Search Engine Optimisation) is the process of making your business more visible in Google's search results for location-based searches. When someone types "salon near me" or "gym in Guwahati," Google shows results it considers most relevant and local. Local SEO is how you make sure your business is one of those results.</p>
  <p>The best part? Unlike Google Ads, local SEO traffic is completely free. Once you rank, you keep getting customers without paying per click.</p>
  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Data analytics and SEO ranking charts" />
  
  <h2>The Three Pillars of Local SEO</h2>
  <p><strong>1. Google Business Profile:</strong> This is the most impactful thing you can do. A complete, optimised Google Business Profile makes you eligible to appear in Google Maps results and the Local Pack — the map section that appears at the top of local search results.</p>
  <p><strong>2. Your Website:</strong> Your website signals to Google what your business does, where it's located, and who it serves. Every page on your site is an opportunity to rank for a specific search term.</p>
  <p><strong>3. Reviews and Citations:</strong> The number and quality of your Google reviews influence your local ranking. Citations — mentions of your business name, address, and phone number on other websites — also help establish your credibility.</p>
  
  <h2>On-Page SEO: What Your Website Needs</h2>
  <p><strong>Title Tags:</strong> Every page should have a unique title tag that includes your primary keyword and city. Example: "Dental Clinic in Agartala | Sharma Dental Care."</p>
  <p><strong>Meta Descriptions:</strong> A compelling 150-character description that includes your location and main service. This appears in search results and affects click-through rates.</p>
  <p><strong>Headings (H1, H2):</strong> Use your main keyword naturally in your page heading. Don't repeat it robotically — write for humans first, Google second.</p>
  <p><strong>Local Content:</strong> Mention your city and region naturally throughout your content. "We serve patients across Agartala and the surrounding areas of Tripura" is better than just "we serve patients."</p>
  <p><strong>Fast Loading:</strong> Google ranks fast websites higher. Using Cloudflare hosting and Next.js gives you a significant speed advantage over businesses using slow, cheap hosting.</p>
  
  <h2>The Opportunity in Tier 2 and Tier 3 Cities</h2>
  <p>In big cities like Mumbai or Bangalore, ranking for competitive terms can take years. But in cities like Patna, Ranchi, Bhubaneswar, Coimbatore, or any Northeast Indian city, the competition is dramatically lower.</p>
  <p>A well-optimised website for a business in Silchar, Assam can rank on the first page of Google within weeks — not years. This is one of the most underutilised advantages that local businesses in smaller Indian cities have right now.</p>
  
  <h2>How to Get Google Reviews</h2>
  <p>After completing a service, send your customer a WhatsApp message: "Hi [Name], thank you for visiting us! If you were happy with our service, we'd really appreciate a quick Google review — it helps a lot. Here's the link: [your review link]." Most happy customers will leave a review if you make it this easy.</p>
  
  <h2>Start Today</h2>
  <p>You don't need to master all of this at once. Start with a professional website and a complete Google Business Profile — those two things alone will put you ahead of the majority of your local competitors.</p>
    `,
  },
  {
    slug: "5-reasons-northeast-india-businesses-losing-customers-without-website",
    title: "5 Reasons Local Businesses in Northeast India Are Losing Customers Without a Website",
    excerpt: "Northeast India is one of the most underserved regions digitally, yet customers here are searching Google just as much as anywhere else. Here's what local businesses are missing out on.",
    category: "Northeast India",
    tags: ["Northeast India", "Tripura", "Assam", "local business", "website"],
    publishedAt: "2025-05-20",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
    author: {
      name: "Nishanth Das",
      role: "Founder, Local Rank India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    seo: {
      metaTitle: "5 Reasons Northeast India Businesses Are Losing Customers Without a Website | Local Rank India",
      metaDescription: "Local businesses in Tripura, Assam, Manipur and across Northeast India are missing out on customers daily. Here are 5 reasons why and what to do about it.",
      keywords: "website Northeast India, local business Tripura, business website Assam, digital presence Northeast India",
    },
    content: `
  <h2>Northeast India Is Online — Are Your Customers Finding You?</h2>
  <p>Smartphone usage in Northeast India has exploded over the last 5 years. People in Agartala, Guwahati, Imphal, Shillong, and Aizawl are using Google to find businesses just as much as people in Delhi or Bangalore. But most local businesses here haven't kept up — and it's costing them customers every day.</p>
  <img src="https://images.unsplash.com/photo-1627914845012-a89e92ee146d?w=800&q=80" alt="Mobile phone usage in India" />
  
  <h2>Reason 1: Customers Can't Find You When They Search</h2>
  <p>When someone moves to Agartala and searches for a dentist, a gym, or a photographer — they're going to find whoever shows up on Google. If you're not there, you simply don't exist for that customer. It doesn't matter how good your business is if it's invisible online.</p>
  <p>In Northeast India, the bar is still low. Many businesses have no website at all. The ones that get online now will dominate search results for years.</p>
  
  <h2>Reason 2: You're Relying Only on Word of Mouth</h2>
  <p>Word of mouth is powerful — but it has a ceiling. It only reaches people in your existing network. A website reaches anyone in your city, anyone who has just moved there, anyone visiting from another state, and anyone searching from home at 10 PM when your shop is closed.</p>
  <p>Word of mouth builds your reputation. A website scales it.</p>
  
  <h2>Reason 3: You Look Less Professional Than You Are</h2>
  <p>When potential customers can't find a website for your business, they make assumptions. They assume you're small, informal, or possibly not operating anymore. In contrast, even a simple, clean website instantly signals that you're professional and serious about your work.</p>
  <p>In Northeast India especially, where digital adoption is newer, having a website immediately sets you apart from the majority of local businesses.</p>
  
  <h2>Reason 4: Out-of-State Customers Can't Discover You</h2>
  <p>Tourism is a growing industry across Northeast India. People planning trips to Tripura, Meghalaya, or Manipur search for hotels, tour guides, restaurants, and services before they arrive. If your business doesn't have a website, you're completely invisible to this entire segment of potential customers.</p>
  <p>A simple website with good photos and clear information about your services can attract customers from across India — not just your local area.</p>
  
  <h2>Reason 5: Your Competitors Are Starting to Move</h2>
  <p>The window of easy opportunity is still open — but it's closing. More businesses in Northeast India are getting online every month. The ones who act now will establish rankings and online reputation while the competition is still low. Those who wait will face a much harder climb.</p>
  <p>This isn't a warning — it's an opportunity. Northeast India is one of the best regions in India right now for a local business to quickly dominate Google search results with a well-built website.</p>
  
  <h2>The Good News</h2>
  <p>Getting online doesn't have to be complicated or expensive. At Local Rank India, we specifically built our service for businesses exactly like yours — local, quality, and ready to grow. We're from Agartala ourselves, so we understand your market better than any agency in Mumbai or Bangalore ever could.</p>
    `,
  },
]
