import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Card = forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-[#1e293b] bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] shadow-xl shadow-cyan-500/10 text-white transition-transform duration-300 ease-out",
        className
      )}
      {...props}
    />
  );
});

export const CardContent = forwardRef(function CardContent({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("p-6 md:p-8", className)}
      {...props}
    />
  );
});
