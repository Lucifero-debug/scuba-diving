'use client'

import CruiseOptionsSection from '@/components/CruiseOptions'
import DinnerCruiseHero from '@/components/DinnerCruiseHero'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from '@/components/ui/card';
import LuxuryDinnerCruiseSection from '@/components/LuxuryCruisesection'
import BestServiceSection from '@/components/BestServiceSection'
import VerticalCardSlider from '@/components/VerticalScrollCards'
import { Timer, Music, Disc3, Star, BadgeCheck, Users } from "lucide-react";
import ContactForm from '@/components/ContactForm'
import { FaCheck } from 'react-icons/fa'

const page = () => {
  const adventureCombos = [
    {
      title: "ADVENTURE BOAT PARTY COMBO",
      subtitle: "Island + Dolphin Show + Watersports + Breakfast/Lunch + Pickup",
      oldPrice: "₹2,500",
      newPrice: "₹2,200",
      rating: "⭐ 4.7 (800+ reviews)",
      features: [
        "40+ Km Divar Island Sea Trip via Speed Boat",
        "Exciting Thrilling Ride over Arabian Sea",
        "Dolphin Show & Island Sightseeing",
        "All Goa Thrilling Watersports Combo (Jetski, Banana, Bumper, Speedboat)",
        "Morning Slot: Breakfast (Fruits / Samosa / Burger / Cold Coffee / Juice)",
        "Afternoon Slot: Veg & Non-Veg Buffet with Beer & Soft Drinks",
        "Pickup & Drop from Hotel (Pre-booked only)",
        "Morning Slot: 8:30 AM - 2:00 PM",
        "Afternoon Slot: 1:30 PM - 6:00 PM",
        "For Group Discount 4+ Guest Is 2000/-"
      ],
    },
  ];

  const scrollFeatures = [
    { title: "Dolphin Watching & Island Ride", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { title: "Full Combo Watersports", image: "https://images.pexels.com/photos/15875345/pexels-photo-15875345.jpeg" },
    { title: "Tasty Lunch & Beer", image: "https://images.pexels.com/photos/2280573/pexels-photo-2280573.jpeg" },
    { title: "Jetski + Banana + Speedboat", image: "https://images.pexels.com/photos/33046/jet-ski-water-sport-water-bike-water.jpg" },
    { title: "Arabian Sea Island Views", image: "/adventure/arabian-view.webp" },
  ];

  const adventureBestFeatures = [
    { icon: <Timer />, text: "40+ Km Island Speed Boat Ride" },
    { icon: <Music />, text: "Music on the Go" },
    { icon: <Disc3 />, text: "All Watersports Combo Included" },
    { icon: <Star />, text: "Veg & Non-Veg Lunch + Beer" },
    { icon: <BadgeCheck />, text: "Free Pickup & Drop" },
    { icon: <Users />, text: "Morning & Afternoon Slots Available" },
  ];

const verticalSliderFeatures = [
  { title: "Pickup & Drop Included", image: "/adventure/pickup.webp" },
  { title: "Morning & Afternoon Slots", image: "/adventure/morning.webp" },
  { title: "Breakfast & Lunch Variants", image: "/adventure/breakfast.webp" },
  { title: "Unlimited Fun on Arabian Sea", image: "/adventure/arabian-view.webp" },
];

  return (
    <div className="w-full min-h-screen">
      <DinnerCruiseHero
        backgroundImage="/adventure/hero.jpg"
        title="ADVENTURE BOAT PARTY"
        subtitle="Island, Dolphin Show, Watersports, Food"
        heading="Welcome to"
        highlight="Adventure Sea Trip"
        descriptionList={[
          "<span class='font-semibold text-white'>Most Thrilling Experience in Goa</span>",
          "Includes: Island, Dolphin Show, Watersports, Lunch/Breakfast",
          "<strong>Perfect for:</strong> Friends, Groups & Thrill Seekers",
        ]}
      />

      <CruiseOptionsSection
        sectionTitle={<><span className="text-blue-600">Adventure</span> Activities</>}
        cards={scrollFeatures.map(f => ({
          title: f.title,
          subtitle: "INCLUDED",
          description: f.title,
          image: f.image,
        }))}
        ctaText="BOOK YOUR SEA ADVENTURE"
        onCtaClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
      />

      <div className="w-full flex justify-center px-4 py-10">
        <div className="flex flex-row flex-wrap justify-center items-start gap-10 max-w-[1440px]">
          <div className="relative w-full lg:w-[400px] h-[700px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/adventure/adven-bg.jpeg"
              alt="Adventure Background"
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            className="transform-style preserve-3d"
          >
            <Card className="w-full md:w-[480px] min-h-[600px] bg-gradient-to-br from-white/60 to-cyan-100/60 backdrop-blur-xl border border-cyan-300/30 shadow-[0_0_20px_#67e8f9] hover:shadow-[0_0_40px_#22d3ee] transition-all duration-500 rounded-3xl overflow-hidden">
              <CardContent className="flex flex-col gap-6 p-6 md:p-8 ">
                <h2 className="text-2xl font-bold text-center text-cyan-800">
                  {adventureCombos[0].title}
                </h2>
                <p className="text-base text-center text-cyan-700">
                  {adventureCombos[0].subtitle}
                </p>
                <div className="flex items-center justify-center gap-4 text-center">
                  <span className="text-red-500 line-through text-xl">{adventureCombos[0].oldPrice}</span>
                  <span className="text-green-600 text-3xl font-bold">{adventureCombos[0].newPrice}</span>
                </div>
                <p className="text-sm text-yellow-600 text-center">{adventureCombos[0].rating}</p>
                <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                  {adventureCombos[0].features.map((feature, fIdx) => (
                     <li className="flex gap-3 leading-[24px] font-normal font-serif text-[15px] text-gray-800" key={fIdx}>
      {feature.includes("Group Discount") ? (
        <strong className='text-lg'>{feature}</strong>
      ) : (
        <>
           <FaCheck className="text-black mt-[5px]" />
        {feature}
        </>
      )}
    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/+917678464517?text=I%20want%20to%20enquire%20about%20your%20${adventureCombos[0].title}%20packages`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-full shadow transition self-center"
                >
                  GET DETAILS
                </motion.button>       
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <LuxuryDinnerCruiseSection
        title="Adventure Boat Party Trip"
        subtitle="Island | Watersports | Dolphins | Lunch"
        timeNote="Morning: 8:30 AM | Afternoon: 1:30 PM"
        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        heading="All-In-One Adventure on Arabian Sea"
        description="Join us for Goa's most exciting sea trip: from thrilling speed boat rides and dolphin spotting to a full combo of watersports and delicious food!"
        callLabel="Book Your Adventure Now"
        phoneNumber="+91 76784 64517"
        whatsappLink="https://wa.me/917678464517?text=I%20want%20to%20book%20Adventure%20Boat%20Party"
        scrollCardComponent={
          <VerticalCardSlider features={verticalSliderFeatures} intervalMs={4000} />
        }
      />

      <BestServiceSection
        title="Adventure Boat Party"
        subtitle="Explore, Ride, Splash & Celebrate"
        features={adventureBestFeatures}
        ctaText={"BOOK YOUR ADVENTURE NOW"}
        ctaLink={"https://wa.me/917678464517?text=Hello%2C%20I'm%20interested%20in%20the%20Adventure%20Boat%20Party%20Tour%20Package"}
        description="Thrilling rides, dolphin shows, watersports, and delicious meals — all in one ultimate sea adventure!"
      />
      <ContactForm/>
    </div>
  );
};

export default page;
