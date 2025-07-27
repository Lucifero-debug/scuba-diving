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
      {/* Desktop trigger */}
      <SheetTrigger asChild>
        <button className="hidden md:flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg">
          <Info className="w-5 h-5" />
          More Info
        </button>
      </SheetTrigger>

      {/* Mobile trigger */}
      <SheetTrigger asChild>
        <button className="flex md:hidden items-center justify-center  shadow-lg">
          <MoreVertical className="w-6 h-6 text-white" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-black text-white p-0 overflow-y-auto max-h-screen flex flex-col"
      >
        <SheetHeader className="relative">
          {/* Hero Image Section */}
          <div className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh]">
            <Image
              src="https://images.unsplash.com/photo-1635599814672-4187bb8fd8dd?w=600&auto=format&fit=crop&q=60"
              fill
              alt="Scuba Dive"
              className="object-cover rounded-b-xl"
            />
          </div>

          {/* Text Section */}
          <div className="px-4 pt-4">
            <SheetTitle className="text-cyan-400 text-3xl md:text-4xl">
              Get In Touch
            </SheetTitle>
            <SheetDescription className="text-gray-400 text-sm md:text-base">
              Experience Underwater Life is not an Everyday Affair
            </SheetDescription>
            <button className="mt-6 px-6 py-3 text-lg font-semibold backdrop-blur-sm border bg-white/10 border-white/30 text-white rounded-md w-full md:w-44">
              Explore Now →
            </button>
          </div>
        </SheetHeader>

        {/* Info Content */}
        <div className="p-4 flex flex-col gap-4 text-sm md:text-base flex-grow">
          <h2 className="text-2xl font-bold text-white">Contact Info</h2>
          <p>✅ Scuba Dive in Goa - ₹3,499</p>
          <p>✅ Jet Ski, Banana Ride, Parasailing</p>
          <p>✅ Underwater Video Included</p>
          <p className="text-cyan-300 mt-4 text-sm md:text-base">
            Book now and get a free T-shirt!
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
