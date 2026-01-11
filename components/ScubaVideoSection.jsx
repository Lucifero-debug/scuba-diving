"use client";

import { motion } from "framer-motion";

const videos = [
  "/video/video1.mp4",
  "/video/video2.mp4",
  "/video/video3.mp4",
  "/video/video4.mp4",
];

export default function ScubaVideosSection() {
  return (
    <section className="w-full py-14 px-4 md:px-10 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3c1b8a] mb-10">
        Scuba Diving Videos
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        style={{ perspective: 1200 }}
      >
        {videos.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{
              rotateX: 6,
              rotateY: -6,
              y: -10,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
              y: -4,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 18,
            }}
            className="rounded-xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full aspect-video">
              <video
                src={src}
                muted
                playsInline
                controls
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
