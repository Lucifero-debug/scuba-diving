'use client'
import CruiseOptionsSection from '@/components/CruiseOptions'
import DinnerCruiseHero from '@/components/DinnerCruiseHero'
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import LuxuryDinnerCruiseSetion from '@/components/LuxuryCruisesection';
import VerticalCardSlider from '@/components/VerticalScrollCards';
import BestServiceSection from '@/components/BestServiceSection';
import { Bus, Trees, Salad, ShieldCheck, Mountain, Users } from "lucide-react";
import ContactForm from '@/components/ContactForm';
import { FaCheck } from 'react-icons/fa';

const dudhsagarCards = [
  {
    title: "Jungle Jeep Safari",
    subtitle: "ADVENTURE",
    description: "Thrilling off-road ride through the Bhagwan Mahavir Wildlife Sanctuary.\nIncludes forest entry fees and life jackets.",
    image: "https://images.pexels.com/photos/887828/pexels-photo-887828.jpeg",
  },
  {
    title: "Dudhsagar Waterfall Viewpoint",
    subtitle: "HIGHLIGHT",
    description: "Witness the majestic 4-tier waterfall cascading from 310 meters.\nPerfect for photos and nature lovers.",
    image: "https://images.pexels.com/photos/32449133/pexels-photo-32449133.jpeg",
  },
  {
    title: "Spice Plantation Tour",
    subtitle: "CULTURE",
    description: "Learn about Goa’s rich spice heritage.\nAromatic walkthroughs with guides explaining each spice.",
    image: "/dudhsagar/spice.webp",
  },
  {
    title: "Goan Buffet Lunch",
    subtitle: "FOOD",
    description: "Unlimited buffet with veg, non-veg, Jain options.\nIncludes dessert & soft drinks at a scenic location.",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=600&auto=format&fit=crop",
  },
  {
    title: "Old Goa Churches",
    subtitle: "HISTORY",
    description: "Visit Basilica of Bom Jesus & Se Cathedral.\nUNESCO heritage sites reflecting Portuguese influence.",
    image: "https://images.pexels.com/photos/32731499/pexels-photo-32731499.jpeg",
  },
];

const dudhsagarFeatures = [
  {
    title: "AC Multi-Axle Volvo Bus Journey",
    image: "https://images.pexels.com/photos/3829175/pexels-photo-3829175.jpeg",
  },
  {
    title: "Jungle Jeep Safari Adventure",
    image: "https://images.pexels.com/photos/29666818/pexels-photo-29666818.png",
  },
  {
    title: "Spice Plantation Guided Tour",
    image: "/dudhsagar/spice.webp",
  },
    {
    title: "Forest Entry & Life Jackets Included",
    image: "https://images.pexels.com/photos/33197674/pexels-photo-33197674.jpeg",
  },
  {
    title: "Buffet Lunch + Soft Drinks",
    image: "https://images.pexels.com/photos/20475781/pexels-photo-20475781.jpeg",
  },
    {
    title: "Hotel Pickup & Drop-off",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
  },
  {
    title: "Old Goa & Bom Jesus Church Visit",
    image: "https://images.pexels.com/photos/26753044/pexels-photo-26753044.jpeg",
  },
];
const dudhsagarBestFeatures = [
  { icon: <Bus />, text: "AC Multi Excel Volvo Bus Journey" },
  { icon: <Trees />, text: "Jungle Jeep Safari & Forest Entry" },
  { icon: <ShieldCheck />, text: "Life Jackets & Safety Guided Tour" },
  { icon: <Salad />, text: "Buffet Lunch + Soft Drinks at Spice Plantation" },
  { icon: <Mountain />, text: "Visit Dudhsagar Waterfalls" },
  { icon: <Users />, text: "Old Goa & Bom Jesus Church Visit" },
];


const page = () => {
  return (
    <div className='w-full min-h-screen'>
       <DinnerCruiseHero
      backgroundImage="/dudhsagar/hero.webp"
      title="DUDHSAGAR WATERFALL TOUR"
      subtitle="Nature & Adventure"
      heading="Explore the Majestic"
      highlight="Dudhsagar Falls"
      descriptionList={[
        "<span class='font-semibold text-white'>All-Inclusive Jungle Safari Combo</span>",
        "AC Volvo Journey + Hotel Pickup + Jeep Safari",
        "Forest Entry + Life Jackets + Spice Plantation Tour",
        "Buffet Lunch + Old Goa & Bom Jesus Church Visit",
        "<strong>Ideal For:</strong> Family, Friends, Nature Lovers",
      ]}
    />
      <CruiseOptionsSection
      sectionTitle={<><span className="text-emerald-600">Dudhsagar</span> Tour Highlights</>}
      cards={dudhsagarCards}
      ctaText="BOOK DUDHSAGAR PACKAGE"
      onCtaClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
    />
    <div className="w-full flex justify-center px-4 py-10">
  <div className="flex flex-row flex-wrap justify-center items-start gap-10 max-w-[1440px]">
    {/* Left Image */}
    <div className="relative w-full lg:w-[400px] h-[700px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/dudhsagar/dudhsagar.jpg"
        alt="Dudhsagar Waterfall"
        fill
        className="object-cover"
      />
    </div>

    {/* Right Card */}
    <motion.div
      className="transform-style preserve-3d"
    >
      <Card className="w-full md:w-[480px] min-h-[600px] bg-gradient-to-br from-white/60 to-lime-100/60 backdrop-blur-xl border border-lime-300/30 shadow-[0_0_20px_#bef264] hover:shadow-[0_0_40px_#a3e635] transition-all duration-500 rounded-3xl overflow-hidden">
        <CardContent className="flex flex-col gap-6 p-6 md:p-8 ">
          <h2 className="text-2xl font-bold text-center text-lime-800">
            Dudhsagar Waterfall Jungle Safari
          </h2>
          <p className="text-base text-center text-lime-700">
            AC Bus Pickup, Jeep Safari, Forest Entry, Spice Plantation, Buffet & More!
          </p>
          <div className="flex items-center justify-center gap-4 text-center">
            <span className="text-red-500 line-through text-xl">₹3000</span>
            <span className="text-green-600 text-3xl font-bold">₹2700</span>
          </div>
          <p className="text-sm text-yellow-600 text-center">★ 4.8 | 850+ Reviews</p>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            <li  className="flex gap-3 leading-[24px] font-normal font-serif text-[15px] text-gray-800"> <FaCheck className="text-black mt-[5px]" />AC Multi Excel Volvo Bus Journey</li>
            <li  className="flex gap-3 leading-[24px] font-normal font-serif text-[15px] text-gray-800"> <FaCheck className="text-black mt-[5px]" />Hotel Pickup & Drop</li>
            <li  className="flex gap-3 leading-[24px] font-normal font-serif text-[15px] text-gray-800"> <FaCheck className="text-black mt-[5px]" />Jungle Jeep Safari</li>
            <li  className="flex gap-3 leading-[24px] font-normal font-serif text-[15px] text-gray-800"> <FaCheck className="text-black mt-[5px]" />Forest Entry + Life Jackets</li>
            <li  className="flex gap-3 leading-[24px] font-normal font-serif text-[15px] text-gray-800"> <FaCheck className="text-black mt-[5px]" />Spice Plantation Guided Tour</li>
            <li  className="flex gap-3 leading-[24px] font-normal font-serif text-[15px] text-gray-800"> <FaCheck className="text-black mt-[5px]" />Buffet Lunch with Drinks</li>
            <li  className="flex gap-3 leading-[24px] font-normal font-serif text-[15px] text-gray-800"> <FaCheck className="text-black mt-[5px]" />Old Goa & Bom Jesus Church Visit</li>
            <li  className="flex gap-3 leading-[24px] font-normal font-serif text-[15px] text-gray-800"> <strong className='text-lg'>For 4+ Group Is 2500/-PP</strong></li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-full shadow transition self-center"
          >
            GET DETAILS
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  </div>
</div>
   <LuxuryDinnerCruiseSetion
      title="Dudhsagar Waterfalls Combo Tour"
      subtitle="Explore Nature, Spice & Heritage"
      timeNote="Pickup: 6:00 AM · Drop: 6:00 PM"
      imageUrl="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
      heading="Experience Goa's Natural Marvel"
      description="Enjoy a thrilling Jeep Safari, scenic waterfalls, cultural spice plantation, buffet lunch, and visits to Old Goa churches — all in one power-packed day!"
      callLabel="Limited Spots Available – Call Now"
      phoneNumber="+91 76784 64517"
      whatsappLink="https://wa.me/917678464517?text=Hello%2C%20I'm%20interested%20in%20the%20Dudhsagar%20Waterfalls%20Tour%20Package"
      scrollCardComponent={
        <VerticalCardSlider features={dudhsagarFeatures} intervalMs={4000} />
      }
    />
  <BestServiceSection
      title="What's Included in Dudhsagar Tour"
      subtitle="Experience the Ultimate Combo Adventure"
      description="Enjoy a thrilling Dudhsagar trip with jeep safari, waterfalls, churches, spice plantation, and a delicious buffet lunch—all organized for a perfect day in Goa."
      features={dudhsagarBestFeatures}
      ctaText="BOOK YOUR TRIP"
      ctaLink="https://wa.me/917678464517?text=Hello%2C%20I'm%20interested%20in%20the%20Dudhsagar%20Waterfalls%20Tour%20Package"
    />
     <ContactForm/>
    </div>
  )
}

export default page