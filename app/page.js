import Carousel from "@/components/Carousel";
import Clients from "@/components/Clients";
import ExperienceSection from "@/components/ExperiencedSection";
import { First } from "@/components/First";
import PricingSection from "@/components/PricingSection";
import ScubaCardsSection from "@/components/ScubaCardsSection";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="h-screen w-full">
<First/>
<div className="flex flex-col md:flex-row w-full justify-center items-center min-h-screen p-4 md:p-16 gap-12">
  {/* Left Section */}
  <div className="w-full md:w-1/2 flex flex-col gap-6 px-2 md:px-4">
    {/* Section Label */}
    <h2 className="text-sm text-yellow-400 tracking-[0.2em] font-medium uppercase">
      Who We Are
    </h2>

    {/* Main Title */}
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
      This is Big
    </h1>

    {/* Paragraph */}
    <p className="text-base md:text-lg text-gray-400 tracking-wide leading-relaxed pt-6 md:pt-10 max-w-xl">
      <span className="text-white text-4xl md:text-6xl font-semibold float-left leading-none pr-2">
        L
      </span>
      orem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, nesciunt. Animi
      voluptatem vero praesentium corporis necessitatibus odit autem nesciunt natus sed,
      ipsum aliquid sequi pariatur. Sequi similique at libero! Ab.
    </p>
  </div>

  {/* Right Section - Carousel */}
  <div className="w-full md:w-1/2 max-w-md">
    <Carousel />
  </div>
</div>
<ExperienceSection/>
<PricingSection/>
<ScubaCardsSection/>
<WhyChooseUsSection/>
<Clients/>
    </div>
  );
}
