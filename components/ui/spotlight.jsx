// components/ui/spotlight.tsx
import { cn } from "@/lib/utils";

export function Spotlight({
  className,
  fill = "#2563eb", // blue-600
  ...props
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className
      )}
      aria-hidden="true"
      {...props}
    >
      <div
        className="absolute inset-0 bg-gradient-radial opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${fill}, transparent 70%)`,
        }}
      />
    </div>
  );
}
