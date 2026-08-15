"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/navigation";
import Button from "./Button";

/**
 * Fixed institutional navigation — transparent at rest,
 * glass-blur charcoal on scroll with reduced height.
 */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Compact nav for desktop (hide Insights on smaller desktop widths via CSS)
  const primaryLinks = navLinks.filter(
    (l) => !["/insights", "/engagements"].includes(l.href)
  );
  const moreLinks = navLinks.filter((l) =>
    ["/insights", "/engagements"].includes(l.href)
  );

  return (
    <>
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-500 ease-premium
          border-b
          ${
            scrolled
              ? "h-16 bg-charcoal/85 backdrop-blur-xl border-hairline shadow-navGlow"
              : "h-20 bg-transparent border-[rgba(231,225,215,0.08)]"
          }
        `}
      >
        <div className="container-page h-full flex items-center justify-between gap-4">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-sans text-sm sm:text-base font-medium tracking-brand uppercase text-stone hover:text-brass transition-colors duration-300 shrink-0"
          >
            PDSCOMM
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
            {[...primaryLinks, ...moreLinks].map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-3 py-2 text-[13px] font-sans text-mutedStone
                    hover:text-stone transition-colors duration-300
                    group
                    ${active ? "text-stone" : ""}
                  `}
                >
                  {link.label}
                  <span
                    className={`
                      absolute left-3 right-3 -bottom-0.5 h-px bg-brass
                      origin-left transition-transform duration-400 ease-premium
                      ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:block">
              <Button href="/contact" size="sm" variant="primary">
                Schedule a 15‑Minute Briefing
              </Button>
            </div>
            <button
              type="button"
              className="xl:hidden p-2 text-stone hover:text-brass transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-softCharcoal border-l border-hairline pt-24 px-8 pb-10 overflow-y-auto"
              aria-label="Mobile"
            >
              <ul className="space-y-1">
                {navLinks.map((link, i) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + i * 0.04,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`
                          block py-3 text-lg font-serif tracking-tighter2 border-b border-hairline
                          transition-colors duration-300
                          ${active ? "text-brass" : "text-stone hover:text-brass"}
                        `}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-10">
                <Button href="/contact" size="lg" className="w-full">
                  Schedule a 15‑Minute Briefing
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
