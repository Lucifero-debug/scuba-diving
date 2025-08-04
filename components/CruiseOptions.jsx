"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";


export default function CruiseOptionsSection({
  sectionTitle,
  cards,
  ctaText,
  onCtaClick,
}) {
  return (
    <section className="w-full py-16 px-4 bg-white relative">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-bold mb-8"
      >
        {sectionTitle}
      </motion.h2>

      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-x-auto gap-6 px-4 md:px-8 no-scrollbar scroll-smooth snap-x snap-mandatory h-[450px] md:h-[450px] overflow-y-hidden">
          {/* Cards will be rendered here */}
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="w-[280px] md:w-[520px] h-full snap-center shrink-0 bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg transition-all hover:shadow-blue-300 hover:border-blue-400"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-[220px] relative rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <p className="text-xs uppercase text-gray-500">{card.subtitle}</p>
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2 whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {ctaText && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex justify-center mt-6 mb-6"
        >
          <Button
            variant="default"
            className="bg-gradient-to-r from-[#38bdf8] via-[#7c3aed] to-[#38bdf8] text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-purple-400 transition-all rounded-full cursor-pointer"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </motion.div>
      )}
    </section>
  );
}
