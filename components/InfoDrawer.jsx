"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Info, MoreVertical } from "lucide-react";
import Image from "next/image";

export default function InfoDrawer() {
  return (
    <Sheet>
      {/* Desktop Trigger */}
      <SheetTrigger asChild>
        <button className="hidden md:flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-full shadow-md">
          <Info className="w-5 h-5" />
          More Info
        </button>
      </SheetTrigger>

      {/* Mobile Trigger */}
      <SheetTrigger asChild>
        <button className="flex md:hidden items-center justify-center p-2 shadow-md">
          <MoreVertical className="w-6 h-6 text-black" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-white text-gray-800 border-l border-gray-200 p-0 overflow-y-auto max-h-screen flex flex-col"
      >
        <SheetHeader className="relative">
          {/* Hero Image Section */}
          <div className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-b-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1635599814672-4187bb8fd8dd?w=600&auto=format&fit=crop&q=60"
              fill
              alt="Scuba Dive"
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="px-4 pt-4">
            <SheetTitle className="text-cyan-600 text-3xl md:text-4xl font-bold">
              Get In Touch
            </SheetTitle>
            <SheetDescription className="text-gray-500 text-sm md:text-base">
              Experience Underwater Life is not an Everyday Affair
            </SheetDescription>
            <button className="mt-6 px-6 py-3 text-lg font-semibold bg-cyan-500 text-white hover:bg-cyan-400 rounded-md w-full md:w-44 transition">
              Explore Now →
            </button>
          </div>
        </SheetHeader>

        {/* Info Content */}
        <div className="p-4 flex flex-col gap-4 text-md md:text-base flex-grow">
          <h2 className="text-2xl font-semibold text-gray-900">Contact Info</h2>
          <p>⚲ Calangute Circle, Goa</p>
          <p>⚲ Port Blair Andaman Island</p>
          <p>☏ +91 96437 84204</p>
          <p className="text-cyan-600 mt-4 text-md md:text-base font-medium">
           ✉︎ Azhankhan8542@gmail.com
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
