'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

const scubaPackages = [
  {
    title: "SCUBA DIVING AT GRAND ISLAND",
    subtitle: "Full Adventure Combo | Most Popular Package",
    oldPrice: "₹5,000",
    newPrice: "₹3,000",
    rating: "⭐ 4.8 (980+ reviews)",
    features: [
      "Free Pick up/drop",
      "65+km open Speed Boat WET sea trip over Arabian sea.",
      "Dolphin | Sightseeing",
      "Scuba Diving at Grand Island",
      "Scuba Training by PADI Diver",
      "Scuba Head Cap",
      "Scuba Diving Full Wet Suit",
      "Scuba Cylinder",
      "Mouth Pump",
      "BCD Regulator",
      "HD Live Videoshoot underwater with GoPro 10.",
      "Water Sports",
      "Jet Skii",
      "Bumper Ride",
      "disco",
      "Parasailling With Sea Dip (Free Sea Dip Worth ₹2,500)",
      "GET",
      "Speed Boat",
      "Banana ride",
      "Snorkeling (complimentary)",
      "Breakfast | Lunch (veg & Non-veg)",
      "Mineral Water | Beers",
      "Booking Amount: ₹1,000 / person",
    ],
  },
  {
    title: "Only Scuba Diving at Grand Island With Island Sea Trip",
    subtitle: "Inclusive Trip with Premium Meals & Gear",
    oldPrice: "₹3,000",
    newPrice: "₹1,800",
    rating: "⭐ 4.6 (720+ reviews)",
    features: [
      "Free Pick up/drop",
      "65+km open Speed Boat WET sea trip over Arabian sea.",
      "Dolphin | Sightseeing",
      "Scuba Training by PADI Diver",
      "Scuba Diving at Grand Island",
      "Scuba Head Cap",
      "Scuba Diving Full Wet Suit",
      "Scuba Cylinder",
      "Mouth Pump",
      "BCD Regulator",
      "HD Live Videoshoot underwater with GoPro 10.",
      "Snorkeling (complimentary)",
      "Breakfast | Lunch (veg & Non-veg)",
      "Mineral Water | Beers",
      "Booking Amount: ₹1,000 / person",
      "Group Discount: ₹2,200 / person (Pre-booking)",
    ],
  },
];



export default function ScubaSpecialLightSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-gray-900">
      {/* Background image with light overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{
          backgroundImage:
            "url('/home/pricing.avif')",
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 30, repeat: Infinity }}
      />
      {/* Light white-blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90 z-10" />

      {/* Content */}
      <div className="relative z-20 py-24 px-6 md:px-20 text-center flex flex-col items-center gap-14">
        <motion.h3
          className="text-cyan-600 tracking-widest font-semibold text-md uppercase"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          SCUBA DIVING IN GOA
        </motion.h3>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
          SPECIAL PACKAGES
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 cursor-pointer bg-green-700 text-white font-semibold rounded-full shadow-lg transition"
          onClick={() => window.scrollBy({ top: 800, behavior: "smooth" })}
        >
          GOA ALL PACKAGES
        </motion.button>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mt-10">
          {scubaPackages.map((pkg,id) => (
            <motion.div
              key={id}
              className="p-6 rounded-3xl flex flex-col gap-1 border border-cyan-100 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all text-left"
              whileHover={{ scale: 1.02 }}
            >
              <Image src={'https://im.whatshot.in/img/2022/Jan/sao-jacinto-island-5-best-islands-of-goa-1641806851.jpg?wm=1&w=1200&h=630&cc=1'} width={500} height={150}/>
              <h2 className="text-[24px] font-bold text-[#191919] font-poppins mb-1">
              {pkg.title}
              </h2>
              <p className="text-[16px] font-normal font-poppins text-gray-600 mb-3">
            {pkg.subtitle}
              </p>
              <div className="flex items-center gap-4 mb-4">
      <p className="text-[#191919] text-3xl font-bold">{pkg.newPrice}</p>
              <p className="text-[#008395] line-through text-xl">{pkg.oldPrice}</p>
              </div>
              <p className="text-sm mb-3 text-yellow-600">{pkg.rating}</p>
              <ul className="list-inside text-md text-gray-700 space-y-1">
                {pkg.features.map((feature, fIdx) => (
        <li className='flex gap-3 leading-[24px] font-normal font-serif text-[15px]' key={fIdx}>  <span className="mt-2 h-2 w-2 rounded-full bg-[#191919]"></span>  {feature}</li>
      ))}
              </ul>
              <Link href={`https://wa.me/+917678464517?text=I%20want%20to%20enquire%20about%20your%20${pkg.title}%20packages`}>
                  <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-auto px-6 py-2 cursor-pointer text-[#008395] font-medium rounded-full shadow transition w-fit self-start"
    >
      GET DISCOUNT ON WHATSAPP
    </motion.button>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sea bottom wave */}
     {/* Sea bottom wave */}
    </section>
  );
}
