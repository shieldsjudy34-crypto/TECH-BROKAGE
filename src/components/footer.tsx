import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { ButtonLink } from "@/components/button";
import {
  footerNav,
  site,
  footerBuyerLinks,
  footerPartnerLinks,
} from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-hairline bg-charcoal">
      <div className="mx-auto w-full max-w-7xl px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Wordmark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone/55">
              {site.description}
            </p>
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.28em] text-brass/80">
              Global presence
            </p>
            <p className="mt-3 text-sm text-stone/60">
              {site.presence.join(" · ")}
            </p>
          </div>

          {/* Site */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone/45">
              Site
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-stone/65"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyers / Partners */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone/45">
              For buyers
            </p>
            <ul className="mt-5 space-y-3">
              {footerBuyerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-stone/65"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.28em] text-stone/45">
              For partners
            </p>
            <ul className="mt-5 space-y-3">
              {footerPartnerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-stone/65"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-4">
            <div className="rounded-sm border border-hairline bg-soft/40 p-7">
              <p className="font-serif text-xl text-offwhite">
                Begin with a 15-minute briefing.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone/55">
                We&rsquo;ll align on objectives, constraints, timelines, and the
                appropriate engagement path.
              </p>
              <ButtonLink
                href={site.ctas.briefing.href}
                size="sm"
                className="mt-6"
              >
                {site.ctas.briefing.label}
                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 text-xs text-stone/40 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Legal placeholders — wire to real policies before launch. */}
            <Link href="#" className="link-underline text-stone/50">
              Privacy
            </Link>
            <Link href="#" className="link-underline text-stone/50">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}