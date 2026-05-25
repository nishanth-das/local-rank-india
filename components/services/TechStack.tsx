export default function TechStack() {
  const techs = [
    { emoji: "⚡", name: "Next.js", label: "React Framework" },
    { emoji: "🎨", name: "Tailwind CSS", label: "Styling" },
    { emoji: "☁️", name: "Cloudflare", label: "Secure Hosting" },
    { emoji: "🔍", name: "Google Search", label: "SEO Ready" },
    { emoji: "📱", name: "Responsive", label: "All Devices" },
    { emoji: "🔒", name: "HTTPS", label: "SSL Security" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12 max-w-5xl mx-auto">
      {techs.map((tech, idx) => (
        <div key={idx} className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-all border border-white/5">
          <div className="text-3xl mb-3">{tech.emoji}</div>
          <div className="text-white font-semibold text-sm">{tech.name}</div>
          <div className="text-[#9CA3AF] text-xs mt-1">{tech.label}</div>
        </div>
      ))}
    </div>
  );
}
