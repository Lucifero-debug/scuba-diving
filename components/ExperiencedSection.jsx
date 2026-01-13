"use client";
import { Spotlight } from "./ui/spotlight";
import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
  const cards = [
    {
      title: "SCUBA DIVING",
      subtitle: "Explore Underwater Life",
      image: "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=1170&auto=format&fit=crop",
      icon: "/icons/divemask.jpg",
    },
    {
      title: "BANANA RIDE",
      subtitle: "Fun Group Ride @ ₹399",
      image: "https://images.unsplash.com/photo-1574159918085-47cec07597bb?w=600&auto=format&fit=crop",
      icon: "/icons/banana.webp",
    },
    {
      title: "PARASAILING",
      subtitle: "Sky-high Thrill",
      image: "https://images.unsplash.com/photo-1628690920311-a820459457ba?w=600&auto=format&fit=crop",
      icon: "/icons/parasail.png",
    },
    {
      title: "JET SKI",
      subtitle: "Speed on Waves",
      image: "https://images.unsplash.com/photo-1554132267-d06483b00adc?q=80&w=1172&auto=format&fit=crop",
      icon: "/icons/jetski.jpg",
    },
    {
      title: "SNORKELING",
      subtitle: "Swim with Coral Life",
      image: "https://images.unsplash.com/photo-1583364493238-248032147fbd?q=80&w=1074&auto=format&fit=crop",
      icon: "/icons/snorkelling.jpg",
    },
    {
      title: "KAYAKING",
      subtitle: "Solo Paddle Adventure",
      image: "https://images.unsplash.com/photo-1480480565647-1c4385c7c0bf?q=80&w=1331&auto=format&fit=crop",
      icon: "/icons/kayak.jpg",
    },
    {
      title: "SUNSET CRUISE",
      subtitle: "Evening Romance",
      image: "/home/cruise.jpeg",
      icon: "/icons/cruise.jpg",
    },
  ];

  const scrollRef = useRef(null);

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#f0f4ff] to-[#ffffff] text-[#1e293b] overflow-hidden flex flex-col mt-6">
      {/* <Spotlight className="top-0 left-0" fill="#e0e8ff" /> */}

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-8 px-4">
                <h1 className="text-[26px] md:text-7xl font-poppins font-bold  leading-tight tracking-wide">
          Experience the Thrill
        </h1>
        <h2 className="text-black font-regular font-poppins text-[14px] tracking-[0.2em]">
          Any 5 Water Sports Included
        </h2>
      </div>

      {/* Horizontal Scroll with Perspective */}
      <div
        ref={scrollRef}
        className="px-8 flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 perspective-[1500px] scroll-no-bar overflow-y-hidden"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative w-[220px] lg:min-w-[450px] snap-center shrink-0 group"
            initial={{ opacity: 0, y: 50, rotateY: 25 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Glow */}
            <div className="absolute -inset-4 rounded-xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-300 z-0" />

            {/* Card */}
            <Card className="relative z-10 shadow-xl overflow-hidden rounded-xl bg-white border border-gray-200">
              <Image
                src={card.image}
                alt={card.subtitle}
                width={400}
                height={230}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-[12px] font-bold font-poppins text-[#1e293b] uppercase">{card.title}</p>
                <h3 className="text-[8px] font-regular mt-1 text-[#1A1A1A]">
                  {card.subtitle}
                </h3>
              </div>

              {/* Icon Overlay */}
              <div className="absolute -top-2 right-6 bg-white border-4 border-gray-300 p-4 rounded-full z-20 shadow-md">
                <Image src={card.icon} alt="icon" width={35} height={35} />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
