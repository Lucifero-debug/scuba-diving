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
    icon: <FaChalkboardTeacher className="text-5xl text-white" />,
    revealProps: { animationSpeed: 5.1, containerClassName: "bg-emerald-900" },
  },
  {
    title: "Development & Updates",
    description:
      "I cue my lofi playlist and dive into coding. From sketches to polished code, you stay updated.",
    icon: <FaLaptopCode className="text-5xl text-white" />,
    revealProps: {
      animationSpeed: 3,
      containerClassName: "bg-black",
      colors: [
        [236, 72, 153],
        [232, 121, 249],
      ],
      dotSize: 2,
    },
  },
  {
    title: "Launch & Deployment",
    description:
      "This is where the magic happens! Based on the approved design, I'll build your website from the ground up.",
    icon: <FaRocket className="text-5xl text-white" />,
    revealProps: {
      animationSpeed: 3,
      containerClassName: "bg-sky-600",
      colors: [[125, 211, 252]],
    },
  },
];

export function Approach() {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Why <span className="text-purple-400">Choose Us</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        {features.map((feature, i) => (
          <Card
            key={i}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          >
            <CanvasRevealEffect {...feature.revealProps} />
            {i === 1 && (
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            )}
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
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] lg:h-[35rem] rounded-3xl cursor-pointer"
    >
      {/* Corner Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* Canvas Background Reveal */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="canvas-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 z-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Front Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">
        {/* Icon always visible */}
        <div className={`transition duration-300 ${hovered ? "-translate-y-2" : ""}`}>
          {icon}
        </div>

        {/* Text only on hover/tap */}
        {hovered && (
          <>
            <h2 className="dark:text-white text-3xl font-bold text-black mt-4 transition duration-300">
              {title}
            </h2>
            <p className="dark:text-white text-sm text-black mt-4 transition duration-300" style={{ color: "#e4ecff" }}>
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
