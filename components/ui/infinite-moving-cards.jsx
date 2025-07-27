"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [pauseAnimation, setPauseAnimation] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    let duration = "20s";
    if (speed === "normal") duration = "40s";
    if (speed === "slow") duration = "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div className="relative w-full">
      {/* Toggle Pause Button */}
      <button
        onClick={() => setPauseAnimation(!pauseAnimation)}
        className="mb-4 absolute right-4 top-0 z-30 rounded-full bg-white px-4 py-1 text-sm font-medium text-gray-600 shadow-md transition hover:bg-gray-100"
      >
        {pauseAnimation ? "Resume" : "Pause"}
      </button>

      {/* Infinite Scrolling List */}
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
            start && !pauseAnimation && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
            pauseAnimation && "[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-[90vw] max-w-full md:w-[60vw] relative flex-shrink-0 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-6 md:p-10 shadow-lg"
            >
              <blockquote>
                <span className="relative z-20 text-sm md:text-lg text-gray-700 leading-relaxed font-medium">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1631208700519-72597dcf7d4d?w=600&auto=format&fit=crop&q=60"
                    alt="profile"
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full border-2 border-white shadow-md"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-500">{item.title}</span>
                  </div>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
