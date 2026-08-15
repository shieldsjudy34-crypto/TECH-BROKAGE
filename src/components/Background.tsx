"use client";

/**
 * Global ambient background: structural grid, film grain, and vignette.
 * Sits fixed behind all page content for institutional depth.
 */
export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base charcoal */}
      <div className="absolute inset-0 bg-charcoal" />

      {/* Soft vignette from top center */}
      <div className="absolute inset-0 bg-vignette" />

      {/* Structural grid — 140px cadence, faint hairlines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(231, 225, 215, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(231, 225, 215, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",
        }}
      />

      {/* Film grain / noise texture */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Subtle bottom fade for depth */}
      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background:
            "linear-gradient(to top, rgba(18, 20, 23, 0.6) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
