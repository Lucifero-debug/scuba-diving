"use client";

import { motion } from "framer-motion";
import { BadgeCheck, TimerReset, Video, Users, PlaneLanding, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: BadgeCheck, label: "Real Scuba Experience" },
  { icon: Waves, label: "Best Watersports Activities" },
  { icon: Users, label: "Professional Instructor" },
  { icon: TimerReset, label: "Max. Dive-in Time" },
  { icon: Video, label: "GoPro10 HD Underwater Shoot" },
  { icon: PlaneLanding, label: "Pickup & Drop to Scuba Centre" },
];

export default function BestServiceSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#0a0a1a] text-white text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_#06b6d4] mb-6 tracking-wider"
      >
        Best Service
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl text-cyan-100 mb-12"
      >
        We Strive To Provide Our Customers
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 px-4">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0f0f2a] border border-cyan-500/40 shadow-[0_0_20px_#06b6d4a0] rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition-transform"
          >
            <feat.icon className="text-cyan-400 w-8 h-8 shrink-0" />
            <span className="text-md sm:text-lg text-cyan-100 font-medium">{feat.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-base text-cyan-300 mb-6"
      >
        Best Rated Scuba Experience in India.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Button className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition">
          GET DETAILS ON WHATSAPP
        </Button>
      </motion.div>
    </section>
  );
}