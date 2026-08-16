"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { EASE } from "@/components/animated-reveal";
import type { IntakeField } from "@/content/site";

const inputClasses =
  "w-full rounded-sm border border-hairline bg-charcoal/60 px-4 py-3 text-sm text-stone placeholder:text-stone/35 transition-colors duration-300 focus:border-brass/60 focus:outline-none focus:ring-1 focus:ring-brass/30";

const labelClasses =
  "mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-stone/55";

export function ContactForm({
  variant,
  title,
  description,
  fields,
}: {
  variant: "buyer" | "partner";
  title: string;
  description: string;
  fields: IntakeField[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  // TODO(integration): wire this to an email service or CRM (e.g., Resend,
  // HubSpot, Salesforce) once the account is provisioned. For now the form
  // shows a polished success state without leaving the page.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="relative rounded-sm border border-hairline bg-soft/40 p-7 md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex min-h-[420px] flex-col items-center justify-center py-16 text-center"
            role="status"
            aria-live="polite"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brass/50 bg-brass/10">
              <Check aria-hidden="true" className="h-6 w-6 text-brass" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-offwhite md:text-3xl">
              Submission received
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone/60">
              Thank you for reaching out. Your details are handled
              confidentially — an NDA is available where appropriate. A member
              of the team will respond to your inquiry.
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="mt-8"
              onClick={() => setSubmitted(false)}
            >
              Submit another inquiry
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: EASE }}
            onSubmit={handleSubmit}
            aria-label={title}
          >
            <h3 className="font-serif text-2xl text-offwhite md:text-3xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone/60">{description}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {fields.map((field) => (
                <div
                  key={field.name}
                  className={field.type === "textarea" ? "sm:col-span-2" : undefined}
                >
                  <label htmlFor={`${variant}-${field.name}`} className={labelClasses}>
                    {field.label}
                    {field.required && (
                      <span aria-hidden="true" className="text-brass">
                        {" "}
                        *
                      </span>
                    )}
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={`${variant}-${field.name}`}
                      name={field.name}
                      required={field.required}
                      defaultValue=""
                      className={inputClasses}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt} className="bg-soft text-stone">
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={`${variant}-${field.name}`}
                      name={field.name}
                      rows={4}
                      placeholder="Optional context…"
                      className={`${inputClasses} resize-y`}
                    />
                  ) : (
                    <input
                      id={`${variant}-${field.name}`}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      placeholder={field.required ? "Required" : "Optional"}
                      className={inputClasses}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-stone/40">
                Confidential. NDA available where appropriate.
              </p>
              <Button type="submit" disabled={sending} className="sm:min-w-[180px]">
                {sending ? "Transmitting…" : "Submit"}
                {!sending && (
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}