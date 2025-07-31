"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    video: "/videos/scuba1.mp4",
  },
  {
  video: "/videos/scuba2.mp4",
  },
  {
  video: "/videos/scuba3.mp4",
  },
  {
  video: "/videos/scuba4.mp4",
  },
  {
  video: "/videos/scuba5.mp4",
  },
  {
      video: "/videos/scuba6.mp4",
  },
  {
     video: "/videos/dudhsagar1.mp4",
  },
  {
    video: "/videos/dudhsagar2.mp4",
  },
  {
    video: "/videos/dudhsagar3.mp4",
  },
  {
    video: "/videos/dinner1.mp4",
  },
  {
    video: "/videos/dinner2.mp4",
  },
  {
       video: "/videos/last.mp4",
  },
];

const getFloatRotation = (idx) => ({
  transition: {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 6 + (idx % 3),
    ease: "easeInOut",
  },
});

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
            whileInView={
              isPlaying
                ? {
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    rotateY: 0,
                    translateZ: 0,
                  }
                : {
                    opacity: 1,
                    z: 100,
                  }
            }
            initial={
              playing === idx
                ? {
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    rotateY: 0,
                    translateZ: 0,
                  }
                : {
                    opacity: 0,
                    y: 100,
                    scale: 0.95,
                  }
            }
            viewport={{ once: true, amount: 0.4 }}
            animate={
              isPlaying
                ? { rotateX: 0, rotateY: 0, scale: 1.02, zIndex: 20 }
                : getFloatRotation(idx)
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: idx * 0.2,
            }}
            className={`relative transform-style-preserve-3d cursor-pointer transition-all duration-500  rounded-2xl overflow-hidden bg-black shadow-[0_0_60px_#06b6d4b0] max-w-[90vw] sm:max-w-[420px] h-[220px] sm:h-[280px]`}
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

            {/* Actual Video */}
            {isPlaying && (
              <div className="absolute inset-0 z-30">
                <video
                  playsInline
                  controls
                  className="w-full h-full object-cover rounded-2xl"
                  onClick={(e) => e.stopPropagation()}
                  onEnded={() => setPlaying(null)}
                >
                  <source src={video.video} type="video/mp4" />
                </video>

                {/* Mobile Close */}
                <div
                  className="absolute top-0 right-0 p-2 z-40 bg-black/60 rounded-bl-xl text-white text-sm font-semibold"
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
