"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const videos = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1720265376207-7ee69b023fef?w=600&auto=format&fit=crop&q=60",
    video: "/videos/clip1.mp4",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1628532532453-f37d324c8f35?w=600&auto=format&fit=crop&q=60",
    video: "/videos/clip2.mp4",
  },
  {
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1663050838876-e848c1e4f19f?w=600&auto=format&fit=crop&q=60",
    video: "/videos/clip3.mp4",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1716479801966-3c8dc9b4e9cb?w=600&auto=format&fit=crop&q=60",
    video: "/videos/clip3.mp4",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1548170341-a3caf2a32aa8?w=600&auto=format&fit=crop&q=60",
    video: "/videos/clip3.mp4",
  },
];

export default function VideoGallery() {
  const [playing, setPlaying] = useState(null);

  return (
    <div
      className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center px-6 mt-6"
      style={{ perspective: "1800px" }}
    >
      {videos.map((video, idx) => (
        <motion.div
          key={idx}
          whileHover={{
            rotateX: -15,
            rotateY: 15,
            scale: 1.02,
            z: 100,
            translateZ: 150,
          }}
          whileTap={{
            scale: 0.95,
            rotateX: 0,
            rotateY: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1.05,
            rotateX: -15,
            rotateY: 15,
            translateZ: 150,
            z: 100,
          }}
          initial={{
            opacity: 0,
            y: 100,
            rotateX: 25,
            rotateY: -25,
            scale: 0.95,
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 100, damping: 18, delay: idx * 0.2 }}
          className="relative rounded-2xl overflow-hidden bg-black shadow-[0_0_60px_#06b6d4b0] transform-style-preserve-3d"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-600 blur-xl z-0 rounded-2xl opacity-60" />
          <div className="relative z-10">
            <Image
              src={video.thumbnail}
              alt="Thumbnail"
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-sm opacity-0 hover:opacity-100 transition">
              <button
                onClick={() => setPlaying(idx)}
                className="px-6 py-2 text-white text-xl bg-cyan-500 rounded-full shadow-lg hover:scale-110 transition"
              >
                Play Video
              </button>
            </div>
          </div>

          {/* Show video if playing */}
          {playing === idx && (
            <video
              autoPlay
              muted
              controls
              className="absolute inset-0 w-full h-full object-cover z-30 rounded-2xl"
              onClick={() => setPlaying(null)}
            >
              <source src={video.video} type="video/mp4" />
            </video>
          )}
        </motion.div>
      ))}
    </div>
  );
}
