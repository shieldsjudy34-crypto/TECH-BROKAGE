"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { EASE } from "@/components/animated-reveal";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // TODO(integration): connect to an email provider (Resend, Mailchimp,
  // ConvertKit) once the account is provisioned.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-sm border border-hairline bg-soft/40 p-8 md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {submitted ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex items-center gap-4"
            role="status"
            aria-live="polite"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brass/50 bg-brass/10">
              <Check aria-hidden="true" className="h-4 w-4 text-brass" strokeWidth={1.5} />
            </span>
            <div>
              <p className="font-serif text-lg text-offwhite">Subscribed.</p>
              <p className="mt-1 text-sm text-stone/60">
                Briefings will arrive in your inbox—when they are published.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Work email…"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-1 rounded-sm border border-hairline bg-charcoal/60 px-4 py-3 text-sm text-stone placeholder:text-stone/35 transition-colors duration-300 focus:border-brass/60 focus:outline-none focus:ring-1 focus:ring-brass/30"
            />
            <Button type="submit" className="shrink-0">
              Subscribe to briefings
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}