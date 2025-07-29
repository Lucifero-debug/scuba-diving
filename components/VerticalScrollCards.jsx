"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function VerticalCardSlider({
  features,
  intervalMs = 3000,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [features.length, intervalMs]);

  const getVisibleItems = () => {
    const first = features[index % features.length];
    const second = features[(index + 1) % features.length];
    return [first, second];
  };

  return (
    <div className={`relative w-full max-w-md mx-auto h-[560px] overflow-hidden bg-[#f8f8ff] rounded-2xl shadow-lg ${className}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 grid grid-rows-2 gap-4 p-4"
        >
          {getVisibleItems().map((item, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden group shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={250}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
        {features.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-400"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
