import { XCircle, CheckCircle2 } from "lucide-react";

export default function BeforeAfter() {
  return (
    <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
      {/* Before Column */}
      <div className="bg-[#FEF2F2] p-10">
        <h3 className="text-red-600 font-bold text-xl flex items-center gap-2">
          <XCircle className="w-6 h-6" />
          Without GMB
        </h3>
        <ul className="mt-6 space-y-4">
          <li className="flex gap-3">
            <span className="text-red-400 mt-0.5 shrink-0">✕</span>
            <span className="text-[#4A5568] text-sm">Invisible on Google Maps</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 mt-0.5 shrink-0">✕</span>
            <span className="text-[#4A5568] text-sm">No phone number on Google</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 mt-0.5 shrink-0">✕</span>
            <span className="text-[#4A5568] text-sm">Customers can&apos;t find your location</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 mt-0.5 shrink-0">✕</span>
            <span className="text-[#4A5568] text-sm">Zero reviews showing</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 mt-0.5 shrink-0">✕</span>
            <span className="text-[#4A5568] text-sm">Competitors appear instead of you</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 mt-0.5 shrink-0">✕</span>
            <span className="text-[#4A5568] text-sm">No way for customers to get directions</span>
          </li>
        </ul>
      </div>

      {/* After Column */}
      <div className="bg-[#F0FDF4] p-10">
        <h3 className="text-[#10B981] font-bold text-xl flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6" />
          With GMB
        </h3>
        <ul className="mt-6 space-y-4">
          <li className="flex gap-3">
            <CheckCircle2 className="text-[#10B981] w-5 h-5 shrink-0" />
            <span className="text-[#4A5568] text-sm">Visible on Google Maps</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="text-[#10B981] w-5 h-5 shrink-0" />
            <span className="text-[#4A5568] text-sm">Phone number shown — customers call directly</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="text-[#10B981] w-5 h-5 shrink-0" />
            <span className="text-[#4A5568] text-sm">Exact location with directions</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="text-[#10B981] w-5 h-5 shrink-0" />
            <span className="text-[#4A5568] text-sm">Star ratings build trust</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="text-[#10B981] w-5 h-5 shrink-0" />
            <span className="text-[#4A5568] text-sm">Appear in &apos;near me&apos; searches</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="text-[#10B981] w-5 h-5 shrink-0" />
            <span className="text-[#4A5568] text-sm">Free, ongoing visibility on Google</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
