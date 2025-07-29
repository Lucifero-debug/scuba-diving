"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function DinnerCruiseHero({
  backgroundImage,
  title,
  subtitle,
  heading,
  highlight,
  descriptionList,
}) {
  return (
    <section className="relative pt-32 md:pt-0 w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Animated Content */}
      <motion.div
        className="relative z-20 text-center text-white px-4 max-w-5xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide mb-3 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-cyan-100 uppercase tracking-widest mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-snug">
          {heading}{" "}
          {highlight && <span className="text-yellow-400">{highlight}</span>}
        </h2>
        <div className="text-sm sm:text-base md:text-lg text-slate-200 space-y-1 font-medium">
          {descriptionList.map((desc, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
