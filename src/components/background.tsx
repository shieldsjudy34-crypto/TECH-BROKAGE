import { cn } from "@/lib/utils";

/**
 * Editorial grid backdrop + film grain overlay.
 * Grid renders locally; grain is a fixed, pointer-transparent film layer.
 */
export function BackgroundGridGrain({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("editorial-grid pointer-events-none absolute inset-0", className)}
    />
  );
}

export function GrainOverlay() {
  return <div aria-hidden="true" className="grain-overlay" />;
}