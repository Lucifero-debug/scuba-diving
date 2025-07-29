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

const page = () => {
  const goaCombos = [
{
  title: "LUXURY DINNER CRUISE PARTY COMBO",
  subtitle: "Double Decker Cruise + Buffet + Performances + Casino View",
  oldPrice: "₹2,999",
  newPrice: "₹2,199",
  rating: "⭐ 4.8 (950+ reviews)",
  features: [
    "4 Hour Double Decker Luxury Cruise Ride on Mandovi River",
    "Free Pickup and Drop from Hotel",
    "Welcome Drinks While On-Boarding",
    "Unlimited Veg / Non-Veg Buffet Dinner",
    "Jain Food Also Available",
    "Sightseeing of Top Casinos: Big Daddy, Casino Pride, Deltin Jack, King's Casino",
    "6-7 Types of Dance Performances including Couple & Folk Dances",
    "Goan & Portuguese Cultural Dance Shows",
    "Fun Games with Spot Prizes",
    "Live DJ - Bollywood Music",
    "Mesmerizing Laser Light Show at End of Night",
    "2 Complimentary Drinks (Alcoholic or Non-Alcoholic)",
    "2 Starters + Buffet Dinner (Veg & Non-Veg)",
    "Bar Service: Beer, Whiskey, Vodka, Rum, Wine & Soft Drinks",
    "Special Birthday / Anniversary Celebration Arrangements",
    "Pickup Time: 7:30 PM | Drop Time: 12:30 AM",
  ],
},

  ];

  const cruiseCards = [
  {
    title: "Open Air Upper Deck",
    subtitle: "DANCE FLOOR",
    description: "Casino Sightseeing\nEnjoy best views of Goa During Night.",
    image: "https://images.unsplash.com/photo-1667604963377-93dda0e11b1b?q=80&w=1072&auto=format&fit=crop",
  },
  {
    title: "Dinner Party Disco Cruise",
    subtitle: "ENJOY",
    description: "Chilled Drinks | Tasty Dinner Buffet | Dessert | BOLLYWOOD DJ | DANCE FLOOR | LASER LIGHTS\nPick up at 8:30",
    image: "https://images.unsplash.com/photo-1643981693404-d76e58594bbf?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Middle Deck",
    subtitle: "CUISINE",
    description: "Enjoy at Full AC Middle Deck\nGet 5 Star Dinner from Novotel.",
    image: "https://images.unsplash.com/photo-1736059057120-d24888d4d7d5?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Special Party Cruise",
    subtitle: "CUISINE",
    description: "Private Cruise For Special Occasions\nCustom Celebration Setup Available.",
    image: "https://images.unsplash.com/photo-1736059057120-d24888d4d7d5?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Traditional Dance Performance",
    subtitle: "ENTERTAINMENT",
    description: "Enjoy Goan Folk & Portuguese Dance\nLive Cultural Showcase on Board.",
    image: "https://images.unsplash.com/photo-1736059057120-d24888d4d7d5?w=600&auto=format&fit=crop&q=60",
  },
];
const dinnerCruiseFeatures = [
  {
    title: "4-Hour Double Decker Cruise Ride",
    image: "https://images.pexels.com/photos/13869266/pexels-photo-13869266.jpeg",
  },
  {
    title: "Welcome Drinks & Unlimited Buffet",
    image: "https://images.pexels.com/photos/7518779/pexels-photo-7518779.jpeg",
  },
  {
    title: "Live DJ & Laser Show",
    image: "https://images.pexels.com/photos/8786740/pexels-photo-8786740.jpeg",
  },
  {
    title: "Casino Sightseeing & Dance Shows",
    image: "https://images.pexels.com/photos/3279695/pexels-photo-3279695.jpeg",
  },
  {
    title: "Games with Prizes & Celebration",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
  },
  {
    title: "Folk & Portuguese Dance",
    image: "https://images.pexels.com/photos/27823223/pexels-photo-27823223.jpeg",
  },
  {
    title: "Bar Service & Complimentary Drinks",
    image: "https://images.pexels.com/photos/20104039/pexels-photo-20104039.jpeg",
  },
];
const dinnerCruiseBestFeatures = [
  { icon: <Timer />, text: "4 hours Double Decker Sea Ride" },
  { icon: <Music />, text: "Live DJ with Bollywood Music" },
  { icon: <Disc3 />, text: "6–7 Dance Performances + AC Disco" },
  { icon: <Star />, text: "Unlimited Buffet Dinner & Drinks" },
  { icon: <BadgeCheck />, text: "Special Celebration & Laser Show" },
  { icon: <Users />, text: "Folk & Portuguese Dance + Games" },
];

  return (
    <div className="w-full min-h-screen">
  <DinnerCruiseHero
      backgroundImage="https://images.unsplash.com/photo-1694501898533-3298f5899e3d?q=80&w=687&auto=format&fit=crop"
      title="DINNER CRUISE PARTY"
      subtitle="Hello!"
      heading="Welcome to"
      highlight="Dinner Party Cruise"
      descriptionList={[
        "<span class='font-semibold text-white'>Goa's No. 1 Highlight To Enjoy</span>",
        "Don't Miss: 3-Hour Dinner Cruise Party at Goa's Capital",
        "<strong>1 Lifetime Experience!</strong>",
        "<strong>Best for:</strong> Family and Couples",
        "<strong>Private Table:</strong> For All on Deck",
        "<strong>Different Cruises Available:</strong> Couples, Family & Groups",
      ]}
    />
 <CruiseOptionsSection
      sectionTitle={<><span className="text-blue-600">Cruises</span> For All Moods</>}
      cards={cruiseCards}
      ctaText="BOOK YOUR GOA CRUISE"
      onCtaClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
    />

      <div className="w-full flex justify-center px-4 py-10">
        <div className="flex flex-row flex-wrap justify-center items-start gap-10 max-w-[1440px]">
          {/* Left Image */}
          <div className="relative w-[400px] h-[700px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1662102763608-0d67c5fb3cc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlkZGxlJTIwZGVja3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Cruise Background"
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
            <Card className="w-full md:w-[480px] min-h-[600px] bg-gradient-to-br from-white/60 to-cyan-100/60 backdrop-blur-xl border border-cyan-300/30 shadow-[0_0_20px_#67e8f9] hover:shadow-[0_0_40px_#22d3ee] transition-all duration-500 rounded-3xl overflow-hidden">
              <CardContent className="flex flex-col gap-6 p-6 md:p-8 ">
                <h2 className="text-2xl font-bold text-center text-cyan-800">
                  {goaCombos[0].title}
                </h2>
                <p className="text-base text-center text-cyan-700">
                  {goaCombos[0].subtitle}
                </p>
                <div className="flex items-center justify-center gap-4 text-center">
                  <span className="text-red-500 line-through text-xl">{goaCombos[0].oldPrice}</span>
                  <span className="text-green-600 text-3xl font-bold">{goaCombos[0].newPrice}</span>
                </div>
                <p className="text-sm text-yellow-600 text-center">{goaCombos[0].rating}</p>
                <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                  {goaCombos[0].features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-full shadow transition self-center"
                >
                  GET DETAILS
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
        <LuxuryDinnerCruiseSection
      title="Luxury Dinner Cruise Party"
      subtitle="Sea | Music | Celebration | Food | Dance"
      timeNote="Pickup at 7:30 PM — Drop by 12:30 AM"
      imageUrl="https://images.unsplash.com/photo-1529070538774-1843cb3265df" // Replace with cruise image
      heading="All-In-One Luxury Celebration on Sea"
      description="Enjoy a magical 4-hour evening on Goa’s only double-decker dinner cruise. From hotel pickup, welcome drinks, and buffet to casino views, DJ, folk dance, laser show, and celebration arrangements — this is the ultimate Goan experience!"
      callLabel="Call to Book Your Cruise"
      phoneNumber="+91 98765 43210"
      whatsappLink="https://wa.me/919876543210?text=I%20want%20to%20book%20the%20Dinner%20Cruise"
      scrollCardComponent={
        <VerticalCardSlider features={dinnerCruiseFeatures} intervalMs={4000} />
      }
    />

    <BestServiceSection
      title="Luxury Dinner Cruise"
      subtitle="Enjoy the Ultimate Party on the Sea"
      features={dinnerCruiseBestFeatures}
      ctaText={"BOOK YOUR DINNER CRUISE"}
         ctaLink="https://wa.me/919643784204?text=Hello%2C%20I'm%20interested%20in%20the%20Dinner%20Cruise%20Tour%20Package"
      description="Hop aboard our Luxury Dinner Cruise in Goa – the perfect evening for families, couples, and groups with buffet, music, performances, and more!"
    />
    </div>
  );
};

export default page;
