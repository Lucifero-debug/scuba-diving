"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasReveal";
import { FaChalkboardTeacher, FaLaptopCode, FaRocket } from "react-icons/fa";

const features = [
  {
    title: "Planning And Strategy",
    description:
      "We'll collaborate to map out your website's goals, target audience, and key functionalities.",
    icon: <FaChalkboardTeacher className="text-4xl md:text-5xl text-cyan-800" />,
    revealProps: {
      animationSpeed: 5.1,
      containerClassName: "bg-gradient-to-br from-cyan-200 via-teal-100 to-white",
    },
  },
  {
    title: "Development & Updates",
    description:
      "I cue my lofi playlist and dive into coding. From sketches to polished code, you stay updated.",
    icon: <FaLaptopCode className="text-4xl md:text-5xl text-purple-700" />,
    revealProps: {
      animationSpeed: 3,
      containerClassName: "bg-gradient-to-br from-purple-100 via-pink-50 to-white",
      colors: [
        [216, 180, 254],
        [255, 240, 245],
      ],
      dotSize: 2,
    },
  },
  {
    title: "Launch & Deployment",
    description:
      "This is where the magic happens! Based on the approved design, I'll build your website from the ground up.",
    icon: <FaRocket className="text-4xl md:text-5xl text-amber-600" />,
    revealProps: {
      animationSpeed: 3,
      containerClassName: "bg-gradient-to-br from-sky-100 via-blue-50 to-white",
      colors: [[125, 211, 252]],
    },
  },
];

export function Approach() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-white">
      <h1 className="heading text-center text-4xl md:text-6xl font-bold tracking-wider text-gray-800">
        Why <span className="text-purple-500">Choose Us</span>
      </h1>

      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8">
        {features.map((feature, i) => (
          <Card
            key={i}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          >
            <CanvasRevealEffect {...feature.revealProps} />
          </Card>
        ))}
      </div>
    </section>
  );
}

const Card = ({ title, icon, children, description }) => {
  const [hovered, setHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const handleClick = () => {
    if (isMobile) setHovered((prev) => !prev);
  };

  return (
    <div
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={handleClick}
      className="relative border border-gray-200 bg-white/80 backdrop-blur-md shadow-xl group/canvas-card w-full max-w-xs md:max-w-sm h-[26rem] md:h-[32rem] p-4 rounded-3xl cursor-pointer flex items-center justify-center transition"
    >
      {/* Corner Icons */}
      <Icon className="absolute h-5 w-5 -top-3 -left-3 text-gray-300" />
      <Icon className="absolute h-5 w-5 -bottom-3 -left-3 text-gray-300" />
      <Icon className="absolute h-5 w-5 -top-3 -right-3 text-gray-300" />
      <Icon className="absolute h-5 w-5 -bottom-3 -right-3 text-gray-300" />

      {/* Canvas Background */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="canvas-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 w-full h-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-2">
        <div
          className={`transition duration-300 ${
            hovered ? "-translate-y-2 scale-110 drop-shadow-xl" : ""
          }`}
        >
          {icon}
        </div>

        {hovered && (
          <>
            <h2 className="text-gray-800 text-xl md:text-2xl font-semibold mt-4 transition duration-300 drop-shadow-sm">
              {title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-3 px-1">
              {description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
