"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform } from "framer-motion";

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
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [tiltData, setTiltData] = useState({ x: 0, y: 0 });

  // Enable gyroscope effect on mobile
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(isTouch);

    const handleOrientation = (e) => {
      const maxTilt = 15;
      const x = Math.min(Math.max(e.beta || 0, -30), 30);
      const y = Math.min(Math.max(e.gamma || 0, -30), 30);

      setTiltData({
        x: (x / 30) * maxTilt,
        y: (y / 30) * maxTilt,
      });
    };

    if (isTouch && window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-16 bg-[#0f172a] min-h-screen">
      {videos.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative group perspective-[1200px]"
        >
          <motion.div
            animate={
              isMobile
                ? {
                    rotateX: -tiltData.x,
                    rotateY: tiltData.y,
                    scale: 1.04,
                  }
                : {}
            }
            whileHover={!isMobile ? { rotateY: 12, rotateX: -10, scale: 1.06 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="transform-style-preserve-3d relative"
          >
            {/* Glow + sparkle layer */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none z-10">
              <div className="absolute w-full h-full bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-3xl blur-lg opacity-30 animate-pulse" />
              <div className="absolute w-full h-full rounded-3xl bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent opacity-10 animate-spin-slow" />
            </div>

            <Card
              onClick={() => setPlayingIndex(idx)}
              className={cn(
                "overflow-hidden cursor-pointer border-2 border-cyan-500/30 shadow-xl rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] group-hover:shadow-cyan-400/50 transition-all duration-500"
              )}
            >
              <CardContent className="p-0 h-[220px] sm:h-[260px] md:h-[300px]">
                {playingIndex === idx ? (
                  <video
                    src={item.video}
                    controls
                    autoPlay
                    className="w-full h-full object-cover rounded-3xl"
                  />
                ) : (
                  <motion.img
                    src={item.thumbnail}
                    alt="Thumbnail"
                    className="w-full h-full object-cover rounded-3xl"
                    whileHover={{ scale: 1.05 }}
                  />
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
