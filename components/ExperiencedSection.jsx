"use client";
import { Spotlight } from "./ui/spotlight";
import { Card } from "./ui/card";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
const cards = [
  {
    title: "SCUBA DIVING",
    subtitle: "Explore Underwater Life",
    image: "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/icons/divemask.svg",
  },
  {
    title: "BANANA RIDE",
    subtitle: "Fun Group Ride @ ₹399",
    image: "https://images.unsplash.com/photo-1574159918085-47cec07597bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuYW5hJTIwcmlkZSUyMGJvYXR8ZW58MHx8MHx8fDA%3D",
    icon: "/icons/banana.svg",
  },
  {
    title: "PARASAILING",
    subtitle: "Sky-high Thrill",
    image: "https://images.unsplash.com/photo-1628690920311-a820459457ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyYXNhaWxpbmd8ZW58MHx8MHx8fDA%3D",
    icon: "/icons/parasail.svg",
  },
  {
    title: "JET SKI",
    subtitle: "Speed on Waves",
    image: "https://images.unsplash.com/photo-1554132267-d06483b00adc?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/icons/jetski.svg",
  },
  {
    title: "SNORKELING",
    subtitle: "Swim with Coral Life",
    image: "https://images.unsplash.com/photo-1583364493238-248032147fbd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/icons/snorkel.svg",
  },
  {
    title: "GLASS BOAT",
    subtitle: "See the Sea Below",
    image: "https://plus.unsplash.com/premium_photo-1680831748352-3a6f45a3468e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdsYXNzJTIwYm9hdHxlbnwwfHwwfHx8MA%3D%3D",
    icon: "/icons/glassboat.svg",
  },
  {
    title: "KAYAKING",
    subtitle: "Solo Paddle Adventure",
    image: "https://images.unsplash.com/photo-1480480565647-1c4385c7c0bf?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "./icons/kayak.svg",
  },
  {
    title: "FISHING TRIP",
    subtitle: "Catch & Relax",
    image: "https://plus.unsplash.com/premium_photo-1663040174476-280284ba9613?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/icons/fish.svg",
  },
  {
    title: "SUNSET CRUISE",
    subtitle: "Evening Romance",
    image: "https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/icons/cruise.svg",
  },
];


  const scrollRef = useRef(null);

  return (
   <section className="relative w-full h-screen bg-[#0a0f1b] text-white overflow-hidden flex flex-col justify-center">
      <Spotlight className="top-0 left-0" fill="#1a1f30" />

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-yellow-400 text-sm uppercase tracking-[0.2em]">
          Any 5 Water Sports Included
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mt-2 leading-tight tracking-wide">
          Experience the <span className="text-blue-500">Thrill</span>
        </h1>
      </div>

      {/* Horizontal Scroll with Perspective */}
      <div
        ref={scrollRef}
        className="px-8 flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 perspective-[1500px] scroll-no-bar overflow-y-hidden"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative  min-w-[360px] md:min-w-[450px] snap-center shrink-0 group"
            initial={{ opacity: 0, y: 50, rotateY: 25 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Blue Glow */}
            <div className="absolute -inset-4 rounded-xl bg-blue-700 blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-300 z-0" />

            {/* Card */}
            <Card className="relative z-10 shadow-lg overflow-hidden rounded-xl bg-[#101524] border border-gray-700">
              <Image
                src={card.image}
                alt={card.subtitle}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-gray-400 uppercase">{card.title}</p>
                <h3 className="text-xl font-semibold mt-1">{card.subtitle}</h3>
              </div>

              {/* Icon Overlay */}
              <div className="absolute -top-2 right-6 bg-[#0f172a] border-4 border-[#1e293b] p-4 rounded-full z-20 shadow-lg">
                <Image src={card.icon} alt="icon" width={30} height={30} />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
