"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import InfoDrawer from "./InfoDrawer";




const navItems = [
  { name: "Home", href: "#" },
  { name: "Goa Tour Packages", href: "#packages" },
  { name: "Goa Adventure", href: "#gallery" },
  { name: "About Us", href: "#whyus" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full z-50 fixed top-0 bg-black/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-white/10 shadow-lg"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold text-cyan-400 tracking-wide"
      >
        DiveXP
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            whileHover={{ scale: 1.05 }}
            className="text-white font-medium hover:text-cyan-300 transition-colors duration-200 relative"
          >
            <span className="hover-underline">{item.name}</span>
          </motion.a>
        ))}
      </div>

      {/* Call to Action */}
      <div className="hidden md:flex">
        <Button
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg rounded-full px-6 py-2"
        >
          Enquire Now
        </Button>
        <InfoDrawer/>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex gap-6">
             <InfoDrawer/>
        <Menu
          className="text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        />

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-[70px] left-0 w-full bg-black/90 backdrop-blur-md p-4 flex flex-col gap-4 md:hidden z-40 border-t border-white/10"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-cyan-300 transition"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold w-full">
            Enquire Now
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
