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
    image: "https://tse3.mm.bing.net/th/id/OIP.RjfWEBqlp_zQFtNZFkQwagHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse3.mm.bing.net/th/id/OIP.RjfWEBqlp_zQFtNZFkQwagHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
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
      backgroundImage="https://tse4.mm.bing.net/th/id/OIP.U3WIcMC4y93mHw9HanwnqQHaGL?r=0&w=1260&h=1050&rs=1&pid=ImgDetMain&o=7&rm=3"
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
    <div className="relative w-[400px] h-[700px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="https://sandeepachetan.com/wp-content/uploads/2013/10/tumblr_mltei6m8xe1s2js0yo1_1280.jpg"
        alt="Dudhsagar Waterfall"
        fill
        className="object-cover"
      />
    </div>

    {/* Right Card */}
    <motion.div
      whileHover={{ rotateX: 10, rotateY: -10, translateZ: 80, scale: 1.03 }}
      whileTap={{ rotateY: 180, scale: 0.98, translateZ: 150, rotateX: -180 }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
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
            <span className="text-red-500 line-through text-xl">₹2499</span>
            <span className="text-green-600 text-3xl font-bold">₹1599</span>
          </div>
          <p className="text-sm text-yellow-600 text-center">★ 4.8 | 850+ Reviews</p>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            <li>AC Multi Excel Volvo Bus Journey</li>
            <li>Hotel Pickup & Drop</li>
            <li>Jungle Jeep Safari</li>
            <li>Forest Entry + Life Jackets</li>
            <li>Spice Plantation Guided Tour</li>
            <li>Buffet Lunch with Drinks</li>
            <li>Old Goa & Bom Jesus Church Visit</li>
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
      phoneNumber="+91 98765 43210"
      whatsappLink="https://wa.me/919876543210"
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
      ctaLink="https://wa.me/919643784204?text=Hello%2C%20I'm%20interested%20in%20the%20Dudhsagar%20Waterfalls%20Tour%20Package"
    />
    </div>
  )
}

export default page