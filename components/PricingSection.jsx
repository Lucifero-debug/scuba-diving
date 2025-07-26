"use client";

import { motion } from "framer-motion";

export default function ScubaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background Image with zoom animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2NlYW58ZW58MHx8MHx8fDA%3D')",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Bubbles Layer using working version */}
      <motion.div
        className="absolute inset-0 z-20 overflow-hidden"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-30 py-20 px-6 md:px-20 flex flex-col items-center gap-12">
    <div className="relative z-10 text-center mb-12">
        <h3 className="text-cyan-300 text-lg tracking-widest font-medium">SCUBA DIVING IN GOA</h3>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-2 text-white neon-text">
          SPECIAL <span className="text-cyan-400">PACKAGES</span>
        </h1>
        <button className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-full cursor-pointer text-white font-bold tracking-wide shadow-lg">
          GOA ALL PACKAGES
        </button>
      </div>

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/20 shadow-2xl hover:scale-[1.03] transition-all duration-300 text-white hover:rotate-[-27deg] active:rotate-[-27deg]">
            <h2 className="text-2xl font-bold mb-2">SCUBA DIVING AT GRAND ISLAND</h2>
            <p className="text-lg font-light mb-4">With Watersports | Bestselling Combo</p>
            <p className="text-3xl font-bold text-yellow-400 line-through">₹5,000</p>
            <p className="text-5xl font-bold text-yellow-300">₹3,000</p>
            <p className="text-sm mt-2 mb-4">⭐ 4.8 (980+ reviews)</p>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Free Pick up/drop</li>
              <li>65+ km open Speed Boat WET sea trip</li>
              <li>Dolphin | Sightseeing</li>
              <li>Scuba Diving at Grand Island</li>
              <li>Scuba Training by PADI Diver</li>
              <li>Full Wet Suit, Cylinder, GoPro 10 HD Video</li>
              <li>Water Sports + Parasailing + Snorkeling</li>
              <li>Breakfast, Lunch, Beer</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/20 shadow-2xl hover:scale-[1.03] transition-all duration-300 text-white hover:rotate-[27deg] active:rotate-[27deg]">
            <h2 className="text-2xl font-bold mb-2">SCUBA AT GRAND ISLAND</h2>
            <p className="text-lg font-light mb-4">Only Scuba Diving | Grand Island Trip</p>
            <p className="text-3xl font-bold text-yellow-400 line-through">₹3,000</p>
            <p className="text-5xl font-bold text-yellow-300">₹2,300</p>
            <p className="text-sm mt-2 mb-4">⭐ 4.6 (768+ reviews)</p>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Free Pick up/drop</li>
              <li>Speed Boat WET sea trip + Dolphin Spotting</li>
              <li>Scuba Training by PADI Diver</li>
              <li>GoPro HD Video + Snorkeling</li>
              <li>Breakfast, Lunch, Beer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
