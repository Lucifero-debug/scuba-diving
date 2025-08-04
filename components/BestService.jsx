"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  TimerReset,
  Video,
  Users,
  PlaneLanding,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: BadgeCheck, label: "Real Scuba Experience" },
  { icon: Waves, label: "Best Watersports Activities" },
  { icon: Users, label: "Professional Instructor" },
  { icon: TimerReset, label: "Max. Dive-in Time" },
  { icon: Video, label: "GoPro10 HD Underwater Shoot" },
  { icon: PlaneLanding, label: "Pickup & Drop to Scuba Centre" },
];

export default function BestService() {
  return (
    <section
      className="w-full relative py-20 px-4 bg-[#ecf7ff] text-black text-center overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(0,191,255,0.1), transparent 60%)",
      }}
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-6 tracking-wide"
      >
        Best Service
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl text-gray-700 mb-12"
      >
        We Strive To Provide Our Customers
      </motion.p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 px-4">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md border border-blue-200 rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.03] transition-transform shadow-xl"
          >
            <feat.icon className="text-blue-600 w-8 h-8 shrink-0" />
            <span className="text-md sm:text-lg text-gray-800 font-medium">
              {feat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-base text-gray-600 mb-6"
      >
        Best Rated Scuba Experience in India.
      </motion.p>

      {/* WhatsApp Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <a href="https://wa.me/917678464517?text=Hello%2C%20it%27s%20great%20to%20know%20about%20goasportsadventure.in.%20Help%20me%20with%20the%20Goa%20Water%20Sports%20package%20details%20and%20further%20process." className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition">
          GET DETAILS ON WHATSAPP
        </a>
      </motion.div>
    </section>
  );
}
