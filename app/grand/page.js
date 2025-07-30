'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Timer, Music, Disc3, Star, BadgeCheck, Users } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import BestServiceSection from '@/components/BestServiceSection';
import VerticalCardSlider from '@/components/VerticalScrollCards';
import DinnerCruiseHero from '@/components/DinnerCruiseHero';
import CruiseOptionsSection from '@/components/CruiseOptions';
import LuxuryDinnerCruiseSetion from '@/components/LuxuryCruisesection';

const page = () => {
  const grandIsland = {
    title: 'FULL FUN GRAND ISLAND COMBO',
    subtitle:
      'Scuba Diving + Water Sports + Dolphin Show + Meals + Photos + Pickup',
    oldPrice: '₹3,500',
    newPrice: '₹2,299',
    rating: '⭐ 4.9 (1000+ reviews)',
    features: [
      '65+ Km Grand Island Sea Trip Via Speed Boat',
      'Dolphin Show & Island Sightseeing',
      'Scuba diving 🤿 Adventure + All Goa Watersports',
      'Breakfast - Fruits, Samosa, Burger, Cold Coffee, Juices, Water',
      'Veg & Non-Veg Buffet Lunch with Beers and Soft Drinks',
      'Go-pro10 HD photo & video shoot Underwater',
      'Free Pick up & Drop from Hotel (With Pre Booking)',
      'Parasailing with Dip, Jetskii, Speed Boat, Banana, Bumper Ride',
      'Unlimited dive in Scuba - 7 to 15 meters',
      'Trip Timing: Morning 8:30 AM TO 5:30PM',
    ],
  };

const grandIslandFeatures = [
  {
    title: "65+ Km Grand Island Sea Trip",
    image: "/grand/boat.jpg",
  },
  {
    title: "Dolphin Show & Island Sightseeing",
    image: "/grand/dolphin.jpg",
  },
  {
    title: "Scuba Diving + Watersports Combo",
    image: "/grand/scuba.jpg",
  },
  {
    title: "Breakfast: Fruits, Samosa, Burger & Drinks",
    image: "/grand/breakfast.jpg",
  },
  {
    title: "Buffet Lunch + Beer & Soft Drinks",
    image: "/grand/food.avif",
  },
  {
    title: "GoPro10 HD Underwater Photography",
    image: "/grand/photo.jpg",
  },
  {
    title: "Free Hotel Pickup & Drop",
    image: "/grand/pickup.jpeg",
  },
  {
    title: "Parasailing, Jetski, Banana & Bumper Rides",
    image: "/grand/sports.webp",
  },
  {
    title: "Unlimited Scuba Dive (7–15m, No Time Limit)",
    image: "/grand/scuba.jpg",
  },
];



const grandIslandCards = [
  {
    title: "Scuba Diving Adventure",
    subtitle: "THRILL",
    description: "Unlimited scuba diving up to 15 meters.\nDive into crystal-clear waters with GoPro10 HD photo/video shoot.",
    image: "/grand/scuba.jpg",
  },
  {
    title: "High-Speed Boat Ride",
    subtitle: "EXCITEMENT",
    description: "65+ km thrilling sea trip to Grand Island.\nFeel the rush over the Arabian Sea with safety gear provided.",
    image: "/grand/boat.jpg",
  },
  {
    title: "Dolphin Show & Sightseeing",
    subtitle: "NATURE",
    description: "Watch dolphins jump in the wild!\nExplore the scenic beauty and hidden island views.",
    image: "/grand/dolphin.jpg",
  },
  {
    title: "Buffet Breakfast & Lunch",
    subtitle: "FOOD",
    description: "Morning fruits, burger, cold coffee.\nLunch buffet with veg, non-veg, beer & soft drinks included.",
    image: "/grand/food.avif",
  },
  {
    title: "Watersports Combo",
    subtitle: "ADVENTURE",
    description: "Includes Parasailing, Jetski, Banana, Bumper, and Speed Boat ride.\nAll 6+ top water activities in one combo!",
    image: "/grand/sports.webp",
  },
  {
    title: "Underwater Photo & Video",
    subtitle: "MEMORIES",
    description: "Get HD photos and videos of your dive.\nCaptured by GoPro10—perfect for solo or group moments.",
    image: "/grand/photo.jpg",
  },
];


  const bestFeatures = [
    { icon: <Timer />, text: 'Full Day 8:30 AM – 5:30 PM' },
    { icon: <Disc3 />, text: 'Unlimited Dive Time' },
    { icon: <Star />, text: 'Rated 4.9 by 1000+ Travelers' },
    { icon: <Music />, text: 'Dolphin Show & Island Tour' },
    { icon: <BadgeCheck />, text: 'All Major Water Sports Included' },
    { icon: <Users />, text: 'Photos & Videos by GoPro10' },
  ];

  return (
    <div className="w-full min-h-screen">
      <DinnerCruiseHero
        title="GRAND ISLAND TOUR"
        subtitle="Goa’s Top Rated Combo Adventure"
        heading="Ultimate Sea Adventure"
        highlight="Grand Island Package"
        backgroundImage="/grand/hero.jpg"
        descriptionList={[
          '<strong>Full Day Scuba + Watersports + Meals</strong>',
          'Best Value Combo Adventure in Goa',
          'Pickup, Meals, Photos, Gear – All Included!',
        ]}
      />

      <CruiseOptionsSection
        sectionTitle={<><span className="text-blue-600">Adventure</span> Highlights</>}
        cards={grandIslandCards}
        ctaText="BOOK YOUR ISLAND ADVENTURE"
        onCtaClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
      />

      <div className="w-full flex justify-center px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 max-w-[1440px]">
          <div className="relative w-full lg:w-[400px] h-[700px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/grand/poster.jpg" alt="Grand Island" fill className="object-cover" />
          </div>

          <motion.div
            className="transform-style preserve-3d"
          >
            <Card className="w-full md:w-[480px] min-h-[600px] bg-gradient-to-br from-white/60 to-emerald-100/60 backdrop-blur-xl border border-green-300/30 shadow-[0_0_20px_#6ee7b7] hover:shadow-[0_0_40px_#10b981] transition-all duration-500 rounded-3xl overflow-hidden">
              <CardContent className="flex flex-col gap-6 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-center text-emerald-800">{grandIsland.title}</h2>
                <p className="text-base text-center text-emerald-700">{grandIsland.subtitle}</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-red-500 line-through text-xl">{grandIsland.oldPrice}</span>
                  <span className="text-green-600 text-3xl font-bold">{grandIsland.newPrice}</span>
                </div>
                <p className="text-sm text-yellow-600 text-center">{grandIsland.rating}</p>
                <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                  {grandIsland.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-full shadow transition self-center"
                >
                  GET DETAILS
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <LuxuryDinnerCruiseSetion
  title="FULL FUN GRAND ISLAND COMBO"
  subtitle="Scuba, Watersports, Sightseeing & Thrill"
  timeNote="Trip Timing: 8:30 AM – 5:30 PM"
  imageUrl="/grand/heavy.jpg"
  heading="Your Ultimate Day Out in Goa"
  description="A thrilling 65+ km speed boat sea trip to Grand Island with scuba diving, dolphin show, full watersports combo, buffet meals, GoPro shoot, and free hotel transfers!"
  callLabel="Seats Filling Fast – Call to Book"
  phoneNumber="+91 98765 43210"
  whatsappLink="https://wa.me/919876543210"
  scrollCardComponent={
    <VerticalCardSlider features={grandIslandFeatures} intervalMs={4000} />
  }
/>


      <BestServiceSection
        title="Grand Island Combo"
        subtitle="The Most Complete Adventure Day in Goa"
        features={bestFeatures}
        ctaText="BOOK GRAND ISLAND"
        ctaLink="https://wa.me/919643784204?text=Hello%2C%20I'm%20interested%20in%20the%20Grand%20Island%20Tour%20Package"
        description="Dive into Goa’s best tour combo: Scuba, Dolphins, Water Sports, Food, Photos & Pickup — All at once!"
      />

      <ContactForm />
    </div>
  );
};

export default page;
