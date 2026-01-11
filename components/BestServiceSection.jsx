"use client";
import { motion } from "framer-motion";


export default function BestServiceSection({
  title,
  subtitle,
  description,
  features,
  ctaText,
  ctaLink,
}) {
  return (
    <section className="w-full bg-white py-14 px-6 md:px-16 flex flex-col items-center text-center overflow-hidden relative">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl mt-2 text-gray-600"
      >
        {subtitle}
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl w-full">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex items-center gap-4 p-4 bg-white/60 shadow-md rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300"
          >
            <div className="p-2 rounded-full bg-blue-100 text-blue-600 shadow">
              {item.icon}
            </div>
            <span className="text-gray-800 font-medium">{item.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="max-w-3xl text-center text-base md:text-lg text-gray-700 mt-12"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="mt-8"
      >
        <a
          href={ctaLink}
          className="bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md transition-all duration-300"
        >
          {ctaText}
        </a>
      </motion.div>
    </section>
  );
}
