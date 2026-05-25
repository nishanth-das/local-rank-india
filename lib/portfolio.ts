export interface PortfolioItem {
  id: number
  title: string
  category: string
  businessType: string
  city: string
  description: string
  image: string
  tags: string[]
  features: string[]
  status: "live" | "coming-soon"
  color: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Sharma Dental Clinic",
    category: "Healthcare",
    businessType: "Dental Clinic",
    city: "Agartala, Tripura",
    description: "A clean, professional website for a dental clinic with online appointment enquiry, services list, and Google Maps integration.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    tags: ["Healthcare", "Clinic", "Appointment Form"],
    features: ["5 pages", "Appointment form", "Google Maps", "Mobile ready"],
    status: "live",
    color: "#1B4FFF",
  },
  {
    id: 2,
    title: "FitZone Gym",
    category: "Fitness",
    businessType: "Gym & Fitness Centre",
    city: "Agartala, Tripura",
    description: "An energetic gym website with membership enquiry form, class schedule, trainer profiles, and before/after gallery.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    tags: ["Fitness", "Gym", "Gallery"],
    features: ["6 pages", "Membership form", "Gallery", "Trainer profiles"],
    status: "live",
    color: "#FF6B2B",
  },
  {
    id: 3,
    title: "Advocate Ranjit Das",
    category: "Legal & Finance",
    businessType: "Law Practice",
    city: "Agartala, Tripura",
    description: "A professional and trustworthy website for a lawyer with practice areas, case consultation form, and client testimonials.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    tags: ["Legal", "Lawyer", "Consultation"],
    features: ["4 pages", "Consultation form", "Practice areas", "Testimonials"],
    status: "live",
    color: "#6366F1",
  },
  {
    id: 4,
    title: "Lens & Life Photography",
    category: "Photography",
    businessType: "Photography Studio",
    city: "Agartala, Tripura",
    description: "A stunning portfolio website for a photographer with full-screen galleries, booking enquiry form, and Instagram feed.",
    image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&q=80",
    tags: ["Photography", "Portfolio", "Gallery"],
    features: ["Gallery pages", "Booking form", "Full-screen images", "Fast loading"],
    status: "live",
    color: "#EC4899",
  },
  {
    id: 5,
    title: "Bright Minds Coaching",
    category: "Education",
    businessType: "Coaching Centre",
    city: "Guwahati, Assam",
    description: "A results-driven website for a coaching centre featuring courses, faculty profiles, results showcase, and online enquiry.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
    tags: ["Education", "Coaching", "Courses"],
    features: ["7 pages", "Course listings", "Results page", "Enquiry form"],
    status: "live",
    color: "#10B981",
  },
  {
    id: 6,
    title: "Hotel Sunrise Shillong",
    category: "Hospitality",
    businessType: "Hotel & Resort",
    city: "Shillong, Meghalaya",
    description: "A beautiful hotel website with room showcase, amenities, photo gallery, and direct booking enquiry to bypass OTA commissions.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    tags: ["Hospitality", "Hotel", "Booking"],
    features: ["6 pages", "Room gallery", "Booking form", "Amenities page"],
    status: "live",
    color: "#F59E0B",
  },
  {
    id: 7,
    title: "CA Priya Bhattacharya",
    category: "Legal & Finance",
    businessType: "Chartered Accountant",
    city: "Silchar, Assam",
    description: "A professional website for a CA firm showcasing services like GST filing, ITR, company registration with a consultation booking form.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    tags: ["Finance", "CA", "GST"],
    features: ["5 pages", "Services list", "Consultation form", "Document checklist"],
    status: "live",
    color: "#0EA5E9",
  },
  {
    id: 8,
    title: "Glow Beauty Salon",
    category: "Business",
    businessType: "Salon & Spa",
    city: "Imphal, Manipur",
    description: "A stylish salon website with service menu, price list, photo gallery, and WhatsApp appointment booking integration.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    tags: ["Salon", "Beauty", "Booking"],
    features: ["4 pages", "Service menu", "Photo gallery", "WhatsApp booking"],
    status: "live",
    color: "#D946EF",
  },
]

export const portfolioCategories = [
  "All",
  "Healthcare",
  "Fitness",
  "Legal & Finance",
  "Photography",
  "Education",
  "Hospitality",
  "Business",
]
