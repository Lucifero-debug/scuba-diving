"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const videos = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1720265376207-7ee69b023fef?w=600&auto=format&fit=crop&q=60",
    video: "https://cdn.pixabay.com/video/2019/07/24/25477-350507890_tiny.mp4",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1628532532453-f37d324c8f35?w=600&auto=format&fit=crop&q=60",
    video: "https://cdn.pixabay.com/video/2024/03/04/202877-919288692_tiny.mp4",
  },
  {
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1663050838876-e848c1e4f19f?w=600&auto=format&fit=crop&q=60",
    video: "https://cdn.pixabay.com/video/2025/01/19/253436_tiny.mp4",
  },
  {
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1669839137069-4166d6ea11f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhY2V8ZW58MHx8MHx8fDA%3D",
    video: "https://cdn.pixabay.com/video/2020/03/30/34608-402679728_tiny.mp4",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1548170341-a3caf2a32aa8?w=600&auto=format&fit=crop&q=60",
    video: "https://cdn.pixabay.com/video/2024/08/30/228847_tiny.mp4",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V8ZW58MHx8MHx8fDA%3D",
    video: "https://media.istockphoto.com/id/1413729919/video/panoramic-aerial-drone-flight-video-around-trekker-on-green-hill-with-beautiful-sunset-scene.mp4?s=mp4-640x640-is&k=20&c=aiWBZnEAcgPzCgeaylUWpvCKjmmoAcrfQlTY2IIIWQg=",
  },
];

export default function VideoGallery() {
  const [playing, setPlaying] = useState(null);

  return (
    <div
      className="relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6 mt-6"
      style={{ perspective: "1800px" }}
    >
      {videos.map((video, idx) => (
       <motion.div
  key={idx}
  onClick={() => {
    if (playing !== idx) setPlaying(idx);
  }}
  whileHover={
    playing === idx
      ? {}
      : {
          rotateX: -15,
          rotateY: 15,
          scale: 1.02,
          z: 100,
          translateZ: 150,
        }
  }
  whileTap={
    playing === idx
      ? { scale: 0.98 }
      : { scale: 0.95, rotateX: -40, rotateY: 40 }
  }
  whileInView={
    playing === idx
      ? {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          translateZ: 0,
        }
      : {
          opacity: 1,
          scale: 1.05,
          rotateX: -35,
          rotateY: 35,
          translateZ: 200,
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
          rotateX: 25,
          rotateY: -25,
          scale: 0.95,
        }
  }
  viewport={{ once: true, amount: 0.4 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 18,
    delay: idx * 0.2,
  }}
  className="relative rounded-2xl overflow-hidden bg-black shadow-[0_0_60px_#06b6d4b0] max-w-[90vw] sm:max-w-[420px] h-[220px] sm:h-[280px]  transform-style-preserve-3d cursor-pointer"
>

          {/* Glowing border blur */}
          <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-600 blur-xl z-0 rounded-2xl opacity-60" />

          {/* Thumbnail + play button */}
          <div className="relative z-10">
            <Image
              src={video.thumbnail}
              alt="Thumbnail"
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />

            {/* Desktop-only play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-sm opacity-0 hover:opacity-100 transition hidden md:flex">
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

          {/* Playing video overlay */}
          {playing === idx && (
            <div className="absolute inset-0 z-30">
              <video
                autoPlay
                muted
                playsInline
                controls
                className="w-full h-full object-cover rounded-2xl"
                onClick={(e) => e.stopPropagation()}
                onEnded={() => setPlaying(null)}
              >
                <source src={video.video} type="video/mp4" />
              </video>

              {/* Optional close on tap (mobile-friendly) */}
              <div
                className="absolute top-0 right-0 p-2 z-40 bg-black/60 rounded-bl-xl text-white text-sm font-semibold"
                onClick={() => setPlaying(null)}
              >
                ✕ Close
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
