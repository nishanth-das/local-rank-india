export default function Timeline() {
  const steps = [
    {
      badgeText: "Day 1",
      badgeColor: "bg-[#1B4FFF]",
      title: "Discovery & Brief",
      description: "We have a quick call or WhatsApp chat to understand your business, services, target customers, and design preferences. We collect your logo, photos, and any content you have."
    },
    {
      badgeText: "Day 2",
      badgeColor: "bg-[#FF6B2B]",
      title: "Design Mockup",
      description: "We create the initial design layout and send you a preview. You tell us what you love and what you'd like changed."
    },
    {
      badgeText: "Day 3–4",
      badgeColor: "bg-[#6366F1]",
      title: "Development",
      description: "We build the full website — all pages, mobile layout, contact forms, WhatsApp button, maps, and SEO setup."
    },
    {
      badgeText: "Day 5",
      badgeColor: "bg-[#10B981]",
      title: "Review & Go Live",
      description: "You review the final site. We make any last tweaks, then point your domain to the site and it goes live."
    },
    {
      badgeText: "Post-Launch",
      badgeColor: "bg-[#9CA3AF]",
      title: "Support",
      description: "We're available on WhatsApp for questions after launch. Your 1 free revision can be used within 30 days."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto mt-16 space-y-6 sm:space-y-8 relative">
      {/* Background connector for mobile */}
      <div className="sm:hidden absolute left-[1.5rem] top-[2rem] bottom-[2rem] w-0.5 bg-gradient-to-b from-[#1B4FFF] via-[#10B981] to-[#9CA3AF] opacity-30"></div>

      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative z-10 group">
          {/* Vertical line connector for desktop */}
          {idx !== steps.length - 1 && (
            <div className="hidden sm:block absolute left-[3.5rem] top-[3rem] bottom-[-2rem] w-0.5 bg-[#E2E8F0] group-hover:bg-[#1B4FFF]/30 transition-colors duration-300"></div>
          )}
          
          <div className="sm:w-32 shrink-0 z-10 pt-1 flex items-center sm:block">
            <div className={`${step.badgeColor} text-white rounded-full px-5 py-2 text-sm font-bold text-center inline-block w-auto sm:w-full shadow-md`}>
              {step.badgeText}
            </div>
            {/* Title on mobile appears next to badge */}
            <h3 className="font-bold text-[#0A0F1E] text-lg ml-4 sm:hidden">{step.title}</h3>
          </div>
          
          <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl flex-grow shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(27,79,255,0.08)] hover:border-[#1B4FFF]/30 hover:-translate-y-1 transition-all duration-300 ml-8 sm:ml-0">
            <h3 className="font-bold text-[#0A0F1E] text-xl mb-3 hidden sm:block">{step.title}</h3>
            <p className="text-[#4A5568] leading-relaxed font-medium">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
