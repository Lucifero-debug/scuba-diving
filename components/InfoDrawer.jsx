import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Info } from "lucide-react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";

export default function InfoDrawer() {
  return (
    <Sheet>
  <SheetTrigger asChild>
    <button className="hidden md:flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg">
      <Info className="w-5 h-5" />
      More Info
    </button>
  </SheetTrigger>

  {/* Mobile trigger */}
  <SheetTrigger asChild>
    <button className="flex md:hidden items-center justify-center  text-white shadow-lg">
      <MoreVertical className="w-6 h-6" />
    </button>
  </SheetTrigger>

      <SheetContent side="right" className="bg-black text-white">
        <SheetHeader>
            <div className=" w-full h-[35vh] relative">
                <Image src='https://images.unsplash.com/photo-1635599814672-4187bb8fd8dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZCUyMGJhY2tncm91bmQlMjB3aXRoJTIwdGV4dHxlbnwwfHwwfHx8MA%3D%3D' fill/>
            </div>
          <SheetTitle className="text-cyan-400 text-4xl">Get In Touch</SheetTitle>
          <SheetDescription className="text-gray-400">
         Experience Underwater Life is not an Everyday Affair
          </SheetDescription>
                  <button className="px-4 py-2 text-xl font-semibold backdrop-blur-sm border bg-white/10 border-white/30 text-white text-center rounded-md w-44 h-16 mt-6">
          Explore Now →
        </button>
        </SheetHeader>
        <div className="p-4 flex flex-col gap-4">
            <h1 className="text-2xl text-white font-bold">Contact Info</h1>
          <p className="text-base mb-2">✅ Scuba Dive in Goa - ₹3,499</p>
          <p className="text-base mb-2">✅ Jet Ski, Banana Ride, Parasailing</p>
          <p className="text-base mb-2">✅ Underwater Video Included</p>
          <p className="text-sm text-cyan-300 mt-4">Book now and get a free T-shirt!</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
