"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  { video: "/videos/scuba1.mp4" },
  { video: "/videos/scuba2.mp4" },
  { video: "/videos/scuba3.mp4" },
  { video: "/videos/scuba4.mp4" },
  { video: "/videos/scuba5.mp4" },
  { video: "/videos/scuba6.mp4" },
  { video: "/videos/dudhsagar1.mp4" },
  { video: "/videos/dudhsagar2.mp4" },
  { video: "/videos/dudhsagar3.mp4" },
  { video: "/videos/dinner1.mp4" },
  { video: "/videos/dinner2.mp4" },
  { video: "/videos/last.mp4" },
];

export default function VideoGallery() {
  const [playing, setPlaying] = useState(null);

  return (
    <div
      className="relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-6 md:py-12 mb-16 transition-all duration-700"
      style={{ perspective: "1800px", minHeight: "120vh" }}
    >
      {videos.map((video, idx) => {
        const isPlaying = playing === idx;

        return (
          <motion.div
            key={idx}
            onClick={() => {
              if (!isPlaying) setPlaying(idx);
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ scale: isPlaying ? 1 : 1.02 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: idx * 0.2,
            }}
            className={`relative transform-style-preserve-3d cursor-pointer transition-all duration-500 rounded-2xl overflow-hidden bg-black shadow-[0_0_60px_#06b6d4b0] max-w-[90vw] sm:max-w-[420px] h-[220px] sm:h-[280px] ${
              isPlaying ? "z-20" : ""
            }`}
          >
            {/* Glowing border blur */}
            {!isPlaying && (
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-600 blur-xl z-0 rounded-2xl opacity-60" />
            )}

            {/* Video Thumbnail Preview */}
            {!isPlaying && (
              <div className="relative z-10 w-full h-full">
                <video
                  src={video.video}
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-2xl pointer-events-none"
                />
                {/* Desktop play overlay */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center z-20 bg-black/60 backdrop-blur-sm opacity-0 hover:opacity-100 transition">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlaying(idx);
                    }}
                    className="px-6 py-2 text-white text-xl bg-cyan-500 rounded-full shadow-lg hover:scale-110 transition"
                  >
                    Play Video
                  </button>
                </div>
              </div>
            )}

            {/* Actual Playing Video */}
            {isPlaying && (
              <div className="absolute inset-0 z-30">
                <video
                  ref={(el) => {
                    if (el) {
                      el.play().catch((e) =>
                        console.error("Video playback failed", e)
                      );
                    }
                  }}
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                  onClick={(e) => e.stopPropagation()}
                  onEnded={() => setPlaying(null)}
                >
                  <source src={video.video} type="video/mp4" />
                </video>

                {/* Mobile Close Button */}
                <div
                  className="absolute top-0 right-0 p-2 z-40 bg-black/60 rounded-bl-xl text-white text-sm font-semibold cursor-pointer"
                  onClick={() => setPlaying(null)}
                >
                  ✕ Close
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
