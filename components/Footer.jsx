"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 18 }}
      viewport={{ once: true }}
      className="relative z-10 w-full bg-black border-t border-cyan-500/30 shadow-[0_-20px_60px_#06b6d440] pt-12 pb-6 px-6 sm:px-12 text-white overflow-hidden"
    >
      {/* Glowing background blur */}
      <div className="absolute inset-0 -z-10 blur-xl opacity-40 bg-gradient-to-r from-cyan-500 via-purple-700 to-indigo-600" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Column 1 - Logo */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-wider text-cyan-400">
            Goa Tour Packages
          </h2>
          <p className="text-sm text-white/70">
            Explore the deep. Experience the thrill.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-300">Quick Links</h3>
          <ul className="space-y-1 text-white/80 text-sm">
            <li>Weekend Goa Tour Package</li>
            <li>Holiday Goa Tour Package</li>
            <li>Adventure Goa Tour Package</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Refund and Returns Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 3 - Get in Touch */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-300">Get In Touch</h3>
          <ul className="space-y-1 text-white/80 text-sm">
            <li>info@goatourpackages.co</li>
            <li>+91 8368263169</li>
          </ul>
        </div>
      </div>

      <Separator className="my-6 bg-cyan-500/20" />

      {/* Bottom row */}
      <div className="text-sm text-white/60 text-center">
        © {new Date().getFullYear()} Goa Tour Packages. All rights reserved.
      </div>
    </motion.footer>
  );
}
