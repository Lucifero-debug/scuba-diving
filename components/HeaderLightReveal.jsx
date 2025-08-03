"use client";

import { motion } from "framer-motion";
import React from "react";

export default function HeaderWithLightReveal() {
  return (
    <div className="relative w-full py-14 text-center overflow-hidden bg-gradient-to-b from-blue-100 via-white to-blue-50">
      {/* Text */}
      <h1 className="relative inline-block text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-800 tracking-wide">
        Try the Ultimate Experience

        {/* Light sweep overlay */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent blur-md"
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2.5,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100%",
            pointerEvents: "none",
          }}
        />
      </h1>
    </div>
  );
}
