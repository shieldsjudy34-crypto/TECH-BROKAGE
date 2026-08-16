"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { ButtonLink } from "@/components/button";
import { EASE } from "@/components/animated-reveal";
import { nav, site, type NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, item: NavItem) {
  if (pathname === item.href) return true;
  return item.children?.some((child) => pathname === child.href) ?? false;
}

function DesktopItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActive(pathname, item);
  const label = item.short ?? item.label;

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        data-active={active}
        className={cn(
          "link-underline whitespace-nowrap text-[13px] tracking-wide",
          active ? "text-offwhite" : "text-stone/65",
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        data-active={active}
        className={cn(
          "link-underline whitespace-nowrap text-[13px] tracking-wide",
          active ? "text-offwhite" : "text-stone/65",
        )}
      >
        {label}
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 ease-luxe group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="rounded-sm border border-hairline bg-charcoal/95 py-1.5 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md">
          <li>
            <Link
              href={item.href}
              className={cn(
                "block px-4 py-2.5 text-[13px] tracking-wide transition-colors duration-200",
                pathname === item.href
                  ? "text-offwhite"
                  : "text-stone/65 hover:text-offwhite",
              )}
            >
              {item.label}
            </Link>
          </li>
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={cn(
                  "block px-4 py-2.5 text-[13px] tracking-wide transition-colors duration-200",
                  pathname === child.href
                    ? "text-offwhite"
                    : "text-stone/65 hover:text-offwhite",
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe",
          scrolled
            ? "border-b border-hairline bg-charcoal/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 px-6 md:h-20 md:gap-8 md:px-10">
          <Wordmark className="shrink-0" />

          <nav
            aria-label="Primary"
            className="hidden min-w-0 items-center justify-end gap-5 xl:flex 2xl:gap-7"
          >
            {nav.map((item) => (
              <DesktopItem key={item.href} item={item} pathname={pathname} />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <ButtonLink
              href={site.ctas.briefing.href}
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              {site.ctas.briefing.label}
              <ArrowRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </ButtonLink>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-hairline text-stone transition-colors duration-300 hover:border-brass/50 hover:text-offwhite xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-charcoal/95 backdrop-blur-xl xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-1 flex-col justify-center px-8 pb-10 pt-28">
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {nav.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 * i, duration: 0.5, ease: EASE }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          "flex items-baseline gap-4 border-b border-hairline py-4 font-serif text-2xl transition-colors duration-300",
                          active ? "text-brass" : "text-offwhite hover:text-brass",
                        )}
                      >
                        <span className="text-[11px] font-medium tracking-[0.3em] text-stone/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </Link>
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          className={cn(
                            "flex items-baseline gap-4 border-b border-hairline py-3 pl-12 text-sm tracking-wide transition-colors duration-300",
                            pathname === child.href
                              ? "text-brass"
                              : "text-stone/70 hover:text-brass",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
                className="mt-10"
              >
                <ButtonLink href={site.ctas.briefing.href} size="lg" className="w-full" onClick={closeMenu}>
                  {site.ctas.briefing.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </ButtonLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
