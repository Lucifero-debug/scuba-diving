"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const goaCombos = [
  {
    title: "SCUBA DIVING AT ANDAMAN ISLAND",
    subtitle: "Best Scuba Diving for Non-Swimmers",
    oldPrice: "₹6,000",
    newPrice: "₹5,500",
    rating: "⭐ 4.9 (208 reviews)",
    features: [
      "North Bay Island, Andaman",
      "NO Swimming Skills Required",
      "Best For Beginners",
      "Scuba Diving at Andaman Island",
      "Scuba diving Training by PADI dive master",
      "Certified Scuba Dive Master accompany you underwater",
      "Boat Ride to Dive Location",
      "Photos & videos underwater (GoPro 10 camera underwater)",
      "Boat Trip | Sightseeing",
      "Maximum Depth 12 Metres",
      "Certified Scuba Trainer",
      "Free Pick up/drop",
      "Pre-Book it on 15% Discount",
      "Booking Amount is 1,000 INR/person",
    ],
  },
  {
    title: "SCUBA DIVING AT ROCK ISLAND",
    subtitle: "Gold Package - Full Experience Combo",
    oldPrice: "₹3,500",
    newPrice: "₹2,700",
    rating: "⭐ 4.6 (600 reviews)",
    features: [
      "Free Pick up/drop",
      "1.5 Hour Bus Journey to Jetty",
      "Short Sea Trip",
      "Scuba Training by PADI Diver",
      "Scuba Diving at Rock Island",
      "Scuba Head Cap",
      "Scuba Suite",
      "Scuba Cylinder",
      "Mouth Pump",
      "BCD Regulator",
      "Sightseeing",
      "Watersports",
      "Parasailing",
      "Speed Boat",
      "Jet Ski",
      "Banana Ride",
      "Bumper Ride",
      "Snorkeling (Complementary)",
      "Life Jacket",
      "Breakfast",
      "Lunch (Veg/Non Veg)",
      "Beers | Mineral Water",
      "For 4+ Guest Group Discount is 2500/- PP"
    ],
  },
];

export default function ScubaSpecialLightSection() {
  return (
    <section className="relative w-full min-h-[130vh] bg-gradient-to-br from-[#f3f4f6] via-[#f8f9fa] to-[#f3f4f6] text-gray-900 overflow-hidden py-24 px-6 md:px-16 font-poppins">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-[#475569] drop-shadow-[0_0_10px_#cbd5e1] text-center"
      >
        BESTSELLING PACKAGES
      </motion.h1>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-6"
      >
          <button className="px-8 py-3 rounded-full bg-slate-700 text-white text-lg font-semibold hover:bg-slate-600 transition cursor-pointer" onClick={() => window.scrollBy({ top: 800, behavior: "smooth" })}>
            ANDAMAN ALL ACTIVITIES
          </button>
      </motion.div>

      {/* Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12 place-items-center">
        {goaCombos.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="pointer-events-auto"
          >
            <Card className="w-full md:w-[480px] min-h-[550px] bg-gradient-to-br from-white/70 to-gray-100/70 backdrop-blur-xl border border-gray-300/30 shadow-[0_0_20px_#e2e8f0] hover:shadow-[0_0_40px_#cbd5e1] transition-all duration-500 rounded-3xl overflow-hidden p-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#334155] text-center font-serif">
                {pkg.title}
              </h2>
              <p className="text-[15px] text-gray-700 text-center mt-2 font-serif">
                {pkg.subtitle}
              </p>
              <div className="flex justify-center gap-4 mt-3">
                <span className="text-red-500 line-through text-lg">{pkg.oldPrice}</span>
                <span className="text-green-600 text-2xl font-bold">{pkg.newPrice}</span>
              </div>
              <p className="text-center text-slate-600 mt-1">{pkg.rating}</p>

              <ul className="mt-5 space-y-2 text-[15px]">
                {pkg.features.map((feature, fIdx) => (
                  <li
                    className="flex gap-3 leading-[24px] font-normal font-poppins text-[15px] text-gray-800"
                    key={fIdx}
                  >
                    {feature.includes("Group Discount") ? (
                      <strong className="text-[#1e293b] text-[16px]">{feature}</strong>
                    ) : (
                      <>
                        <FaCheck className="text-[#334155] mt-[5px]" />
                        <span>{feature}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
                            <Link href={`https://wa.me/+917678464517?text=I%20want%20to%20enquire%20about%20your%20${pkg.title}%20packages`} >
                  <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-5 px-6 py-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-full shadow transition w-fit self-start"
    >
      GET DETAILS
    </motion.button>

              </Link>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* SVG Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#f1f5f9"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,202.7C672,224,768,256,864,266.7C960,277,1056,267,1152,245.3C1248,224,1344,192,1392,176L1440,160V320H0Z"
        />
      </svg>
    </section>
  );
}
