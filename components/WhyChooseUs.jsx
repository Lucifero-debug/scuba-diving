"use client";

import React from "react";
import {
  FaUserTie,
  FaHeart,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

const features = [
  {
    title: "Experienced & Certified Instructors",
    description:
      "Dive with confidence under the guidance of professionals with years of training and certification.",
    icon: <FaUserTie className="text-4xl text-cyan-800" />,
    bg: "bg-gradient-to-br from-cyan-100 via-teal-50 to-white",
  },
  {
    title: "Personalized Dive Sessions",
    description:
      "We adapt each dive to your comfort and skill level, ensuring a unique underwater experience.",
    icon: <FaUserFriends className="text-4xl text-purple-700" />,
    bg: "bg-gradient-to-br from-purple-100 via-pink-50 to-white",
  },
  {
    title: "Top-Quality Equipment & Safety Standards",
    description:
      "We use high-end gear and follow international safety protocols to ensure a secure dive every time.",
    icon: <FaShieldAlt className="text-4xl text-amber-600" />,
    bg: "bg-gradient-to-br from-sky-100 via-blue-50 to-white",
  },
  {
    title: "Unmatched Customer Satisfaction",
    description:
      "Our happy customers speak for us — stellar reviews and memorable adventures guaranteed.",
    icon: <FaHeart className="text-4xl text-rose-500" />,
    bg: "bg-gradient-to-br from-rose-100 via-amber-50 to-white",
  },
];

export function Approach() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-white">
      <h1 className="text-center text-4xl md:text-6xl font-bold tracking-wide text-gray-800 mb-12">
        Why <span className="text-purple-500">Choose Us</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`rounded-3xl shadow-md border border-gray-200 p-6 text-center ${feature.bg}`}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h2>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Approach;
