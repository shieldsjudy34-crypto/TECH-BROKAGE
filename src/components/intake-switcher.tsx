"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { EASE } from "@/components/animated-reveal";
import { buyerIntakeFields, partnerIntakeFields } from "@/content/site";
import { cn } from "@/lib/utils";

type Path = "buyer" | "partner";

export function IntakeSwitcher() {
  const [path, setPath] = useState<Path>("buyer");

  return (
    <div>
      {/* Path selector */}
      <div
        role="tablist"
        aria-label="Choose your path"
        className="inline-flex rounded-sm border border-hairline bg-soft/40 p-1"
      >
        {(
          [
            { id: "buyer", label: "Buyer" },
            { id: "partner", label: "Technology Partner" },
          ] as const
        ).map((option) => (
          <button
            key={option.id}
            role="tab"
            aria-selected={path === option.id}
            onClick={() => setPath(option.id)}
            className={cn(
              "rounded-sm px-6 py-2.5 text-sm tracking-wide transition-all duration-300 ease-luxe focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
              path === option.id
                ? "bg-brass text-charcoal"
                : "text-stone/60 hover:text-offwhite",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {path === "buyer" ? (
              <ContactForm
                variant="buyer"
                title="Buyer intake"
                description="Requirements, interest areas, and timelines. All details handled confidentially."
                fields={buyerIntakeFields}
              />
            ) : (
              <ContactForm
                variant="partner"
                title="Partner intake"
                description="Product, deployment model, and target buyers. We review every intake for institutional fit."
                fields={partnerIntakeFields}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}