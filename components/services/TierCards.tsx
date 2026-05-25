import { User, Building2, Briefcase, Rocket } from "lucide-react";
import Link from "next/link";

export default function TierCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">
      {/* Tier 1 */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col hover:border-[#1B4FFF]/30 hover:shadow-lg transition-all">
        <div className="bg-[#1B4FFF]/10 text-[#1B4FFF] p-3 rounded-xl w-fit mb-4">
          <User className="w-6 h-6" />
        </div>
        <div className="text-xs font-semibold text-[#4A5568] bg-[#F8F9FF] px-3 py-1 rounded-full w-fit mb-4">
          Perfect for: Freelancers & Solo Businesses
        </div>
        <h3 className="font-display font-bold text-2xl text-[#0A0F1E] mb-6">Starter</h3>
        <ul className="space-y-3 mb-8 text-sm text-[#4A5568] flex-grow">
          <li>✓ Up to 3 pages</li>
          <li>✓ Mobile responsive</li>
          <li>✓ WhatsApp button</li>
          <li>✓ Contact form</li>
          <li>✓ Basic SEO</li>
        </ul>
        <Link href="/contact" className="w-full py-3 text-center rounded-xl font-semibold border-2 border-[#1B4FFF] text-[#1B4FFF] hover:bg-[#1B4FFF] hover:text-white transition-colors">
          Get a Quote
        </Link>
      </div>

      {/* Tier 2 */}
      <div className="bg-white border-2 border-[#1B4FFF] rounded-2xl p-6 flex flex-col relative shadow-xl transform md:-translate-y-2">
        <div className="absolute top-0 right-6 bg-[#1B4FFF] text-white text-xs font-bold px-4 py-1 rounded-b-xl">
          Most Popular
        </div>
        <div className="bg-[#1B4FFF]/10 text-[#1B4FFF] p-3 rounded-xl w-fit mb-4 mt-2">
          <Building2 className="w-6 h-6" />
        </div>
        <div className="text-xs font-semibold text-[#4A5568] bg-[#F8F9FF] px-3 py-1 rounded-full w-fit mb-4">
          Perfect for: Clinics, Gyms, Salons
        </div>
        <h3 className="font-display font-bold text-2xl text-[#0A0F1E] mb-6">Standard</h3>
        <ul className="space-y-3 mb-8 text-sm text-[#4A5568] flex-grow">
          <li>✓ Up to 6 pages</li>
          <li>✓ Everything in Starter</li>
          <li>✓ Google Maps embed</li>
          <li>✓ Gallery / photo section</li>
          <li>✓ Blog-ready structure</li>
          <li>✓ Google Analytics</li>
        </ul>
        <Link href="/contact" className="w-full py-3 text-center rounded-xl font-semibold bg-[#1B4FFF] text-white hover:bg-[#1540CC] transition-colors">
          Get a Quote
        </Link>
      </div>

      {/* Tier 3 */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col hover:border-[#1B4FFF]/30 hover:shadow-lg transition-all">
        <div className="bg-[#1B4FFF]/10 text-[#1B4FFF] p-3 rounded-xl w-fit mb-4">
          <Briefcase className="w-6 h-6" />
        </div>
        <div className="text-xs font-semibold text-[#4A5568] bg-[#F8F9FF] px-3 py-1 rounded-full w-fit mb-4">
          Perfect for: Restaurants, Hotels, Real Estate
        </div>
        <h3 className="font-display font-bold text-2xl text-[#0A0F1E] mb-6">Business</h3>
        <ul className="space-y-3 mb-8 text-sm text-[#4A5568] flex-grow">
          <li>✓ Up to 10 pages</li>
          <li>✓ Everything in Standard</li>
          <li>✓ Menu / services catalogue</li>
          <li>✓ Booking enquiry form</li>
          <li>✓ Multiple location pages</li>
          <li>✓ Social media links</li>
        </ul>
        <Link href="/contact" className="w-full py-3 text-center rounded-xl font-semibold border-2 border-[#1B4FFF] text-[#1B4FFF] hover:bg-[#1B4FFF] hover:text-white transition-colors">
          Get a Quote
        </Link>
      </div>

      {/* Tier 4 */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col hover:border-[#1B4FFF]/30 hover:shadow-lg transition-all">
        <div className="bg-[#1B4FFF]/10 text-[#1B4FFF] p-3 rounded-xl w-fit mb-4">
          <Rocket className="w-6 h-6" />
        </div>
        <div className="text-xs font-semibold text-[#4A5568] bg-[#F8F9FF] px-3 py-1 rounded-full w-fit mb-4">
          Perfect for: Coaching Centres, Large Businesses
        </div>
        <h3 className="font-display font-bold text-2xl text-[#0A0F1E] mb-6">Enterprise</h3>
        <ul className="space-y-3 mb-8 text-sm text-[#4A5568] flex-grow">
          <li>✓ Unlimited pages</li>
          <li>✓ Everything in Business</li>
          <li>✓ Custom interactive features</li>
          <li>✓ Advanced SEO setup</li>
          <li>✓ Performance optimisation</li>
          <li>✓ Priority support</li>
        </ul>
        <Link href="/contact" className="w-full py-3 text-center rounded-xl font-semibold border-2 border-[#1B4FFF] text-[#1B4FFF] hover:bg-[#1B4FFF] hover:text-white transition-colors">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
