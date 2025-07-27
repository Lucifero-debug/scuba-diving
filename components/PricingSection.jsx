'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ScubaSpecialLightSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-gray-900">
      {/* Background image with light overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2NlYW58ZW58MHx8MHx8fDA%3D')",
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 30, repeat: Infinity }}
      />
      {/* Light white-blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90 z-10" />

      {/* Content */}
      <div className="relative z-20 py-24 px-6 md:px-20 text-center flex flex-col items-center gap-14">
        <motion.h3
          className="text-cyan-600 tracking-widest font-semibold text-sm uppercase"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          SCUBA DIVING IN GOA
        </motion.h3>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
          SPECIAL PACKAGES
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-full shadow-lg transition"
        >
          GOA ALL PACKAGES
        </motion.button>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mt-10">
          {[1, 2].map((id) => (
            <motion.div
              key={id}
              className="p-6 rounded-3xl border border-cyan-100 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all text-left"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold text-cyan-700 mb-1">
                SCUBA DIVING AT GRAND ISLAND
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                With Watersports | Bestselling Combo
              </p>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-red-500 line-through text-xl">₹5,000</p>
                <p className="text-green-600 text-3xl font-bold">₹3,000</p>
              </div>
              <p className="text-sm mb-3 text-yellow-600">⭐ 4.8 (980+ reviews)</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Free Pick up/drop</li>
                <li>65+ km open Speed Boat</li>
                <li>Scuba Training by PADI Diver</li>
                <li>GoPro HD Video</li>
                <li>Water Sports + Parasailing</li>
                <li>Breakfast, Lunch, Beer</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sea bottom wave */}
     {/* Sea bottom wave */}
    </section>
  );
}
