import BestServiceSection from "@/components/BestService";
import Carousel from "@/components/Carousel";
import Clients from "@/components/Clients";
import ExperienceSection from "@/components/ExperiencedSection";
import FaqAccordion from "@/components/Faq";
import { First } from "@/components/First";
import HeaderWithLightReveal from "@/components/HeaderLightReveal";
import PricingSection from "@/components/PricingSection";
import ScubaCardsSection from "@/components/ScubaCardsSection";
import ScubaCtaSection from "@/components/ScubaCtaSection";
import WhyChooseUsSection from "@/components/WhyChooseUs";

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
      Welcome To Goa Sports Adventure! Best Scuba and Water Sports Experience in Goa & Andaman Islands
    </h1>

    {/* Paragraph */}
    <p className="text-base md:text-lg text-gray-700 tracking-wide leading-relaxed pt-6 md:pt-10 max-w-xl">
      <span className="text-blue-500 text-4xl md:text-6xl font-bold float-left leading-none pr-2 drop-shadow">
        S
      </span>
cuba Diving & Water Sports Adventures

Are you planning an unforgettable scuba diving experience or thrilling water sports adventure? With over 4 to 5 years of hands-on expertise, our team is committed to delivering safe, exciting, and memorable underwater journeys.

Whether you&apos;re a first-time diver or an adventure enthusiast, we tailor each experience to suit your comfort and skill level. We operate in some of India&apos;s top diving Destinations 

We Promise You This — You Won&apos;t Be Disappointed. 

Dive In With Us, And Discover The Magic Beneath. <br></br>
<a href="/about"><strong>Read More About Us</strong></a>

    </p>
  </div>

  {/* Right Section - Carousel */}
  <div className="w-full md:w-1/2 max-w-md drop-shadow-xl">
    <Carousel />
  </div>
</div>

<ExperienceSection/>
<div id="pricing">
<PricingSection/>
</div>
<ScubaCardsSection/>
<WhyChooseUsSection/>
<Clients/>
<HeaderWithLightReveal/>
<FaqAccordion/>
<ScubaCtaSection/>
<BestServiceSection/>
    </div>
  );
}
