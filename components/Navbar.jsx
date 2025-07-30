"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import InfoDrawer from "./InfoDrawer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Grand Island", href: "/grand" },
  { name: "Dudh Sagar Waterfall", href: "/dudhsagar" },
  { name: "Dinner Cruise Party", href: "/dinner" },
  { name: "Adventure Water Sports", href: "/adventure" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const router=useRouter()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full z-50 fixed top-0 max-w-screen bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-gray-200 shadow-md"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold text-cyan-600 tracking-wide"
      >
     <div className="w-24 h-14 sm:w-28 sm:h-28 md:w-32 md:h-14 relative" onClick={() => router.push("/")}>
    <Image src="/home/logo-bg.png" fill className="object-cover" alt="Logo" />
  </div>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            whileHover={{ scale: 1.05 }}
            className="text-gray-800 font-medium hover:text-cyan-600 transition-colors duration-200"
          >
            {item.name}
          </motion.a>
        ))}
      </div>

      {/* Call to Action */}
      <div className="hidden md:flex items-center gap-2">
        <Button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold shadow-md rounded-full px-6 py-2">
          Enquire Now
        </Button>
        <InfoDrawer />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex gap-4 items-center">
        <InfoDrawer />
        <Menu
          className="text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-[70px] left-0 w-full bg-white/95 backdrop-blur-sm p-4 flex flex-col gap-4 md:hidden z-40 border-t border-gray-200"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 text-lg font-medium hover:text-cyan-600 transition"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold w-full">
            Enquire Now
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
