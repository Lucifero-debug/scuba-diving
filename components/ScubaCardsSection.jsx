"use client";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ScubaCardsSection() {
  return (
    <section className="relative w-full min-h-[130vh] bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-200 text-gray-900 overflow-hidden py-24 px-12 md:px-4">
      {/* Dynamic Underwater BG Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: [1.1, 1.15, 1.1], rotate: [0, 1, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?w=600&auto=format&fit=crop&q=60"
          alt="Scuba Background"
          fill
          className="object-cover opacity-50 saturate-[1.7] contrast-[1.2] brightness-110"
        />
      </motion.div>

      {/* Floating Light Orbs */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-10 w-6 h-6 rounded-full bg-cyan-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{
            y: [-20, 20, -20],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.2, 0.5, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Heading */}
      <motion.div
        className="relative z-20 text-center mb-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-cyan-600 drop-shadow-[0_0_10px_#0e7490]">
          BESTSELLING PACKAGES
        </h1>
        <button className="mt-6 px-8 py-3 rounded-full bg-cyan-500 text-white text-lg font-semibold hover:bg-cyan-400 transition">
          ANDAMAN ALL ACTIVITIES
        </button>
      </motion.div>

      {/* Cards */}
      <div
        className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-20 justify-center items-center max-w-7xl mx-auto"
        style={{ perspective: "1000px" }}
      >
        {[...Array(2)].map((_, idx) => (
          <motion.div
            key={idx}
            whileHover={{ rotateX: 10, rotateY: -10, translateZ: 80, scale: 1.03 }}
            whileTap={{ rotateY: 180, scale: 0.98, translateZ: 150, rotateX: -180 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="transform-style preserve-3d"
          >
            <Card className="w-full md:w-[480px] min-h-[500px] bg-gradient-to-br from-white/60 to-cyan-100/60 backdrop-blur-xl border border-cyan-300/30 shadow-[0_0_20px_#67e8f9] hover:shadow-[0_0_40px_#22d3ee] transition-all duration-500 rounded-3xl overflow-hidden">
              <CardContent className="flex flex-col gap-6 p-8">
                <h2 className="text-2xl font-bold text-center text-cyan-800">
                  {idx === 0
                    ? "SCUBA DIVING AT ANDAMAN ISLAND"
                    : "SCUBA DIVING AT NEIL ISLAND"}
                </h2>
                <p className="text-base text-center text-cyan-700">
                  {idx === 0
                    ? "Best Scubadiving for Non-swimmers"
                    : "Andaman & Nicobar Island"}
                </p>
                <div className="text-5xl font-bold text-center text-amber-500">
                  {idx === 0 ? "₹5,500" : "₹6,000"}
                </div>
                <div className="text-center text-base text-cyan-800 space-y-1">
                  <p>✅ {idx === 0 ? "North Bay Island" : "Neil Island"}, Andaman</p>
                  <p>✅ NO Swimming Skills Required</p>
                  <p>✅ Best For Beginners</p>
                  <p>✅ Scuba diving At Andaman Island</p>
                  <p>✅ Best For Beginners</p>
                  <p>✅ Best For Beginners</p>
                  <p>✅ Best For Beginners</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
