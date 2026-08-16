"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ArtifactKind =
  | "seal"
  | "column"
  | "plates"
  | "gantry"
  | "obelisk"
  | "vault"
  | "folio"
  | "ring"
  | "cassette";

/**
 * Live 3D object unique to the page. Brass / stone / charcoal only.
 * This is geometry, not a reused photograph.
 */
export function BrassArtifact({
  kind,
  className,
}: {
  kind: ArtifactKind;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <div
        className="relative h-full w-full"
        style={{ perspective: "900px", perspectiveOrigin: "50% 45%" }}
      >
        <div
          className={cn(
            "absolute left-1/2 top-1/2",
            !reduce && "artifact-tumble",
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {kind === "seal" && <Seal />}
          {kind === "column" && <Column />}
          {kind === "plates" && <Plates />}
          {kind === "gantry" && <Gantry />}
          {kind === "obelisk" && <Obelisk />}
          {kind === "vault" && <Vault />}
          {kind === "folio" && <Folio />}
          {kind === "ring" && <Ring />}
          {kind === "cassette" && <Cassette />}
        </div>
      </div>
    </div>
  );
}

function face(extra: string, transform: string) {
  return (
    <span
      className={cn("absolute border border-brass/30", extra)}
      style={{ transform, backfaceVisibility: "hidden" }}
    />
  );
}

function Seal() {
  return (
    <div className="relative h-40 w-40" style={{ transformStyle: "preserve-3d" }}>
      {face(
        "inset-0 bg-brass",
        "translateZ(14px) rotate(45deg)",
      )}
      {face(
        "inset-0 bg-brasshover",
        "translateZ(-14px) rotate(45deg) rotateY(180deg)",
      )}
      <span
        className="absolute left-1/2 top-1/2 h-3 w-3 bg-offwhite/85"
        style={{ transform: "translateZ(16px) translate(-50%, -50%) rotate(45deg)" }}
      />
      <span className="artifact-glow" />
    </div>
  );
}

function Column() {
  return (
    <div className="relative h-52 w-16" style={{ transformStyle: "preserve-3d" }}>
      {face("inset-0 bg-stone/80", "translateZ(10px)")}
      {face("inset-0 bg-stone/40", "rotateY(180deg) translateZ(10px)")}
      {face("top-0 h-full w-5 bg-brass/70", "rotateY(90deg) translateZ(22px)")}
      {face("top-0 h-full w-5 bg-brass/40", "rotateY(-90deg) translateZ(22px)")}
    </div>
  );
}

function Plates() {
  return (
    <div className="relative h-36 w-44" style={{ transformStyle: "preserve-3d" }}>
      {face("h-2 w-44 bg-brass", "translateY(-28px) rotateX(70deg)")}
      {face("h-2 w-44 bg-stone/70", "translateY(0) rotateX(70deg)")}
      {face("h-2 w-44 bg-brasshover", "translateY(28px) rotateX(70deg)")}
    </div>
  );
}

function Gantry() {
  return (
    <div className="relative h-28 w-56" style={{ transformStyle: "preserve-3d" }}>
      {face("h-3 w-56 bg-brass", "translateZ(8px)")}
      {face("left-4 top-3 h-24 w-2 bg-stone/60", "translateZ(0)")}
      {face("right-4 top-3 h-24 w-2 bg-stone/60", "translateZ(0)")}
    </div>
  );
}

function Obelisk() {
  return (
    <div className="relative h-56 w-20" style={{ transformStyle: "preserve-3d" }}>
      {face("inset-x-2 top-0 h-56 bg-stone/75", "translateZ(8px) rotateX(4deg)")}
      {face("inset-x-2 top-0 h-56 bg-brass/50", "rotateY(90deg) translateZ(10px)")}
    </div>
  );
}

function Vault() {
  return (
    <div className="relative h-36 w-36" style={{ transformStyle: "preserve-3d" }}>
      {face("inset-0 bg-soft", "translateZ(18px)")}
      {face("inset-0 bg-charcoal", "rotateY(180deg) translateZ(18px)")}
      {face("top-0 h-full w-9 bg-brass/60", "rotateY(90deg) translateZ(18px)")}
      {face("top-0 h-full w-9 bg-brass/30", "rotateY(-90deg) translateZ(18px)")}
    </div>
  );
}

function Folio() {
  return (
    <div className="relative h-44 w-32" style={{ transformStyle: "preserve-3d" }}>
      {face("inset-0 bg-stone/80", "rotateY(-18deg) translateZ(6px)")}
      {face("inset-0 bg-brass/40", "rotateY(12deg) translateZ(-6px)")}
    </div>
  );
}

function Ring() {
  return (
    <div className="relative h-40 w-40" style={{ transformStyle: "preserve-3d" }}>
      <span
        className="absolute inset-4 rounded-full border-[10px] border-brass/80"
        style={{ transform: "rotateX(68deg)" }}
      />
      <span
        className="absolute inset-8 rounded-full border border-stone/40"
        style={{ transform: "rotateX(68deg) translateZ(8px)" }}
      />
    </div>
  );
}

function Cassette() {
  return (
    <div className="relative h-24 w-48" style={{ transformStyle: "preserve-3d" }}>
      {face("inset-0 bg-soft", "translateZ(10px)")}
      {face("inset-0 bg-charcoal", "rotateX(90deg) translateZ(12px)")}
      {face("left-6 top-6 h-3 w-36 bg-brass/70", "translateZ(12px)")}
    </div>
  );
}
