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
      className="relative z-10 w-full bg-white border-t border-gray-200 shadow-[0_-20px_60px_#bae6fd70] pt-12 pb-6 px-6 sm:px-12 text-gray-800 overflow-hidden"
    >
      {/* Soft background blur glow */}
      <div className="absolute inset-0 -z-10 blur-2xl opacity-30 bg-gradient-to-r from-cyan-200 via-blue-100 to-indigo-200" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Column 1 - Logo */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-wider text-cyan-600">
            Goa Tour Packages
          </h2>
          <p className="text-sm text-gray-600">
            Explore the deep. Experience the thrill.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-700">Quick Links</h3>
          <ul className="space-y-1 text-gray-700 text-sm">
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
          <h3 className="text-xl font-semibold text-cyan-700">Get In Touch</h3>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>Azhankhan8542@gmail.com</li>
            <li>+91 96437 84204</li>
          </ul>
        </div>
      </div>

      <Separator className="my-6 bg-gray-200" />

      {/* Bottom row */}
      <div className="text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Goa Sports Adventures All Rights Reserved.
      </div>
    </motion.footer>
  );
}
