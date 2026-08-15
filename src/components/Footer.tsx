import Link from "next/link";
import { footerColumns, offices } from "@/lib/navigation";
import Button from "./Button";

/**
 * Global footer with CTA band, navigation columns, and office footprint.
 */
export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline mt-auto">
      {/* CTA band */}
      <div className="border-b border-hairline">
        <div className="container-page py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">Engage</p>
              <h2 className="heading-section text-3xl sm:text-4xl">
                Initiate your requirements review.
              </h2>
              <p className="body-md mt-4">
                Confidential briefings for government and enterprise acquisition
                teams. NDA-first from first contact.
              </p>
              <p className="mt-6 text-xs uppercase tracking-wideLabel text-mutedStone font-sans">
                {offices.map((o) => o.city).join(" · ")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/contact" size="lg" variant="primary">
                Schedule a 15‑Minute Briefing
              </Button>
              <Button href="/buyers#intake" size="lg" variant="secondary">
                Submit Sourcing Parameters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link
              href="/"
              className="font-sans text-base font-medium tracking-brand uppercase text-stone"
            >
              PDSCOMM
            </Link>
            <p className="body-md mt-4 max-w-sm">
              Global AI software brokerage connecting institutional buyers with
              qualified technology providers—from requirements to shortlist.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="section-label mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-mutedStone hover:text-brass transition-colors duration-300 font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-mutedStone/70 font-sans">
            © {new Date().getFullYear()} PDSCOMM. All rights reserved. Confidential
            engagement protocols apply.
          </p>
          <div className="flex gap-6 text-xs text-mutedStone/70 font-sans">
            <Link href="/trust" className="hover:text-brass transition-colors">
              Privacy & Data Handling
            </Link>
            <Link href="/trust" className="hover:text-brass transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
