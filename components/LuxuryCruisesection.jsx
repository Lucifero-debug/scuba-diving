"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function LuxuryDinnerCruiseSetion({
  title,
  subtitle,
  timeNote,
  imageUrl,
  heading,
  description,
  callLabel,
  phoneNumber,
  whatsappLink,
  scrollCardComponent,
}) {
  return (
    <section className="w-full bg-white flex flex-col">
      {/* SECTION 1 - Hero with Call Info and Book Button */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-6 bg-gradient-to-br from-blue-100 to-white">
        {/* LEFT Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src={imageUrl}
            alt="Cruise Party"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* RIGHT Text */}
        <motion.div
          className="flex-1 space-y-4 text-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold text-blue-950">{title}</h1>
          <h2 className="text-2xl">{subtitle}</h2>
          <p className="text-xl text-gray-500">{timeNote}</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl sm:text-5xl font-extrabold text-blue-950 leading-tight">
            {heading}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>

          <div className="bg-white border-l-4 border-yellow-400 p-5 shadow-lg rounded-md">
            <p className="text-lg font-semibold text-gray-800">{callLabel}</p>
            <p className="text-3xl sm:text-4xl font-bold text-blue-800 tracking-wide">
              {phoneNumber}
            </p>
          </div>

          <a
            href={whatsappLink}
            className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-4 rounded-xl shadow-md"
          >
            BOOK NOW
          </a>
        </motion.div>

        {/* Right Scroll Card Section */}
        <motion.div
          className="flex-1 w-full max-w-md"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {scrollCardComponent}
        </motion.div>
      </div>
    </section>
  );
}
