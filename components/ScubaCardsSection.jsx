"use client";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const goaCombos = [
  {
    title: "DUDHSAGAR WATERFALLS TRIP COMBO",
    subtitle: "Jeep Safari + Buffet + Churches + Spice Plantation",
    oldPrice: "₹3000",
    newPrice: "₹2700",
    rating: "⭐ 4.7 (860+ reviews)",
    features: [
      "65+ km Journey to Dudhsagar Waterfalls via AC Multi Excel Volvo Bus",
      "Free Pick and drop from your Hotel",
      "Jeep Safari Through Jungle and Rivers till Dudhsagar",
      "Forest Entry and Life Jackets included for swimming",
      "Spice Plantation Guided Tour",
      "Veg / Non-Veg Buffet Lunch at Spice Plantation",
      "2 Complimentary Hard Drinks",
      "Soft Drinks - Coca-Cola, Diet Coke, Sprite, Pepsi",
      "Old Goa Church Visit",
      "Bom Jesus Church Tour",
      "For 4+ Group Discount Is 2500/-PP"
    ],
  },
  {
    title: "LUXURY DINNER CRUISE PARTY",
    subtitle: "4 Hr Double Decker Cruise | Buffet + DJ + Celebrations",
    oldPrice: "₹2700",
    newPrice: "₹2200",
    rating: "⭐ 4.9 (1,120+ reviews)",
    features: [
      "Free Pick and Drop from Hotel",
      "Welcome Drinks while On-Boarding",
      "Unlimited Veg / Non-Veg Buffet Dinner",
      "Jain Food Also Available",
      "Casino Sightseeing: Big Daddy, Casino Pride, Deltin Jack, King's Casino",
      "6–7 Types of Dance Performances",
      "Couple Dance + Live Bollywood DJ",
      "Mesmerizing Laser Light Show",
      "Goan Folk & Portuguese Dances",
      "Fun Games with Spot Prizes",
      "2 Complimentary Drinks (alcoholic / non-alcoholic)",
      "2 Starters + Bar Service (Beer, Vodka, Whiskey, Rum, Wine, Soft Drinks)",
      "Special Birthday/Anniversary Celebration Arrangements",
      "Pickup Time: 7:30 PM | Drop Time: 12:30 AM",
      "For Group Discount 4+ Guest is 2000/- PP",
    ],
  },
];


export default function ScubaCardsSection() {
  return (
    <section className="relative w-full min-h-[130vh] bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-200 text-gray-900 overflow-hidden py-24 px-12 md:px-4">
      {/* Dynamic Underwater BG Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: [1.1, 1.15, 1.1], rotate: [0, 1, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/home/pricing.avif"
          alt="Scuba Background"
          fill
          className="object-cover opacity-50 saturate-[1.7] contrast-[1.2] brightness-110"
        />
      </motion.div>

      {/* Floating Light Orbs */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}s
          className="absolute z-10 w-6 h-6 rounded-full bg-cyan-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{
            y: [-20, 20, -20],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.2, 0.5, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Heading */}
      <motion.div
        className="relative z-20 text-center mb-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-cyan-600 drop-shadow-[0_0_10px_#0e7490]">
          BESTSELLING PACKAGES
        </h1>
        <button className="mt-6 px-8 py-3 rounded-full bg-cyan-500 text-white text-lg font-semibold hover:bg-cyan-400 transition">
          ANDAMAN ALL ACTIVITIES
        </button>
      </motion.div>

      {/* Cards */}
      <div
        className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-20 justify-center items-center max-w-7xl mx-auto"
        style={{ perspective: "1000px" }}
      >
 {goaCombos.map((pkg, idx) => (
          <motion.div
            key={idx}
            className="transform-style preserve-3d"
          >
            <Card className="w-full md:w-[480px] min-h-[550px] bg-gradient-to-br from-white/60 to-cyan-100/60 backdrop-blur-xl border border-cyan-300/30 shadow-[0_0_20px_#67e8f9] hover:shadow-[0_0_40px_#22d3ee] transition-all duration-500 rounded-3xl overflow-hidden">
              <CardContent className="flex flex-col gap-6 p-8">
                <h2 className="text-2xl font-bold text-center text-cyan-800">
                  {pkg.title}
                </h2>
                <p className="text-base text-center text-cyan-700">
                  {pkg.subtitle}
                </p>
                <div className="flex items-center justify-center gap-4 text-center">
                  <span className="text-red-500 line-through text-xl">{pkg.oldPrice}</span>
                  <span className="text-green-600 text-3xl font-bold">{pkg.newPrice}</span>
                </div>
                <p className="text-sm text-yellow-600 text-center">{pkg.rating}</p>
                <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                  {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx}>
      {feature.includes("Group Discount") ? (
        <strong className='text-lg'>{feature}</strong>
      ) : (
        feature
      )}
    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-full shadow transition self-center"
                >
                  GET DETAILS
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
