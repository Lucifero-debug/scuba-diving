import BestServiceSection from "@/components/BestService";
import Carousel from "@/components/Carousel";
import Clients from "@/components/Clients";
import ExperienceSection from "@/components/ExperiencedSection";
import { First } from "@/components/First";
import HeaderWithLightReveal from "@/components/HeaderLightReveal";
import PricingSection from "@/components/PricingSection";
import ScubaCardsSection from "@/components/ScubaCardsSection";
import VideoGallery from "@/components/VideoGallery";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" w-full overflow-x-hidden">
    <div className="relative w-full h-[99vh] md:h-[95vh] overflow-hidden">
<First/>
    </div>
<div className="flex flex-col md:flex-row w-full justify-center items-center min-h-screen p-6 md:p-16 gap-12 bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] rounded-xl shadow-md">
  {/* Left Section */}
  <div className="w-full md:w-1/2 flex flex-col gap-6 px-2 md:px-4">
    {/* Section Label */}
    <h2 className="text-md text-blue-500 tracking-[0.2em] font-medium uppercase glow">
      Who We Are
    </h2>

    {/* Main Title */}
    <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight glow">
      Welcome To Scuba Diving Adventure! Best Scuba and Water Sports Experience in Goa & Andaman Islands
    </h1>

    {/* Paragraph */}
    <p className="text-base md:text-lg text-gray-700 tracking-wide leading-relaxed pt-6 md:pt-10 max-w-xl">
      <span className="text-blue-500 text-4xl md:text-6xl font-bold float-left leading-none pr-2 drop-shadow">
        S
      </span>
cuba diving experience is one of a kind experience. We Provide Scubadiving experience at Goa and Andaman Islands, One of the best destination in india, if you are planning to visit any of these beautiful destinations, then we recommend to add scubadiving in your tour to add some Adventure and Thrill.

We Provide best services in Goa & Andaman Because we've been there and done it. When you choose us, you'll feel the benefit of 7 years' experience of Scuba Diving and Watersports.

Read More About Us
    </p>
  </div>

  {/* Right Section - Carousel */}
  <div className="w-full md:w-1/2 max-w-md drop-shadow-xl">
    <Carousel />
  </div>
</div>

<ExperienceSection/>
<PricingSection/>
<ScubaCardsSection/>
<WhyChooseUsSection/>
<Clients/>
<HeaderWithLightReveal/>
<div className="h-24 md:h-16" />
<VideoGallery/>
<div className="h-64 md:h-44" />
<BestServiceSection/>
    </div>
  );
}
