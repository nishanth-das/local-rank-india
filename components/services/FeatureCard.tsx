import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#F8F9FF] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#1B4FFF]/30 hover:shadow-md transition-all duration-300">
      <div className="bg-[#1B4FFF]/10 text-[#1B4FFF] rounded-xl p-3 inline-flex mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-[#0A0F1E] mb-2">{title}</h3>
      <p className="text-[#4A5568] text-sm">{description}</p>
    </div>
  );
}
