import { Star } from "lucide-react";

export default function MockGoogleCard() {
  return (
    <div className="bg-[#F8F9FF] rounded-2xl p-6 border border-[#E2E8F0] shadow-lg w-full max-w-sm mx-auto">
      <div className="text-center mb-6">
        <span className="text-2xl font-bold tracking-tighter">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
        <div className="mt-4 bg-white border border-[#E2E8F0] rounded-full px-4 py-2 text-left text-sm text-[#4A5568] flex items-center shadow-sm">
          dentist near me
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm relative overflow-hidden">
        <h4 className="text-[#1B4FFF] font-semibold text-lg">Dr. Sharma Dental Clinic</h4>
        <div className="flex items-center gap-1 mt-1">
          <span className="font-bold text-[#4A5568] text-sm">4.9</span>
          <div className="flex text-[#F59E0B] gap-0.5">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="text-[#9CA3AF] text-sm ml-1">(32)</span>
        </div>
        <div className="text-sm text-[#4A5568] mt-2">
          <span className="text-[#10B981] font-semibold">Open</span> · Closes 7 PM
        </div>
        <div className="text-sm text-[#9CA3AF] mt-1">📍 Agartala, Tripura</div>
        
        <div className="flex gap-2 mt-4">
          <div className="flex-1 bg-[#1B4FFF]/10 text-[#1B4FFF] text-center py-2 rounded-lg text-sm font-semibold">
            Call
          </div>
          <div className="flex-1 bg-[#1B4FFF]/10 text-[#1B4FFF] text-center py-2 rounded-lg text-sm font-semibold">
            Directions
          </div>
        </div>
      </div>

      <p className="text-xs text-center text-[#9CA3AF] mt-6 italic">
        This is what your business could look like on Google →
      </p>
    </div>
  );
}
