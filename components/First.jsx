"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ImagesSlider } from "./ui/images-slider";

export function First() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1661265851801-e523847e3932?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661894232140-73d96a67731b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const texts = [
    {
  title: (
      <>
        Official <br /> Scuba Diving Centre
      </>
    ),
      description: (
        <>
         Enjoyment of Bording. Chat to book your first Scuba Diving
                      Experience in Goa &amp; Andaman Islands.
        </>
      ),
      align: "items-end text-right pr-12",
    },
    {
       title: (
      <>
        Water Sports &amp; <br /> Scuba Diving Packages
      </>
    ),
      description: (
        <>
         Best Scuba Diving and Watersports in Goa &amp; Andaman
                      Islands. Safe and secured dive in Goa &amp; Andaman for
                      beginners and swimmers.
        </>
      ),
      align: "items-start text-left pl-12",
    },
  ];

  const [index, setIndex] = useState(0);

  // Sync index with autoplay duration
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImagesSlider images={images}>
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`z-50 absolute w-full h-full flex flex-col justify-center ${texts[index].align}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
          {texts[index].title}
        </h1>
        <p className="text-lg md:text-2xl text-white mt-2 max-w-xl leading-relaxed">
          {texts[index].description}
        </p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-white/10 border-white/30 text-white text-center rounded-full mt-6">
          Explore Now →
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
