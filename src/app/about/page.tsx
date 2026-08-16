import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTASection } from "@/components/cta-section";
import { media } from "@/content/media";
import {
  presenceRegions,
  leadership,
  operatingPrinciples,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Global presence, procurement-oriented discipline. PDSCOMM is a global AI software brokerage connecting institutional buyers to qualified AI technology providers.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="07"
        eyebrow="About"
        title={
          <>
            Global presence.{" "}
            <em className="italic text-brass">Procurement-oriented</em>{" "}
            discipline.
          </>
        }
        lead="A brokerage that treats institutional buying as a craft—structured, discreet, and consistent across four regions."
        image={media.about.header}
        imageAlt="California civic building at blue hour"
      />

      {/* Company overview */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                index="01"
                eyebrow="Company overview"
                title="What PDSCOMM is."
              />
            </div>
            <div className="lg:col-span-7">
              <AnimatedReveal>
                <p className="text-lg leading-relaxed text-stone/75 md:text-xl">
                  PDSCOMM is a global AI software brokerage connecting
                  institutional buyers to qualified AI technology providers.
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.1}>
                <p className="mt-6 text-[15px] leading-relaxed text-stone/60">
                  We operate on the buyer&rsquo;s side of the table: sourcing,
                  shortlisting, evaluating, and diligencing AI software so
                  government and enterprise organizations can make decisions
                  they can defend in writing. We work across regions, across
                  capability domains, and across the full arc of procurement—
                  from first briefing to final selection.
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.18}>
                <p className="mt-6 text-[15px] leading-relaxed text-stone/60">
                  We are not a consultancy that dabbles in AI, and not a
                  marketplace that auctions vendors. We are a brokerage with a
                  procurement-grade process—and the documentation discipline
                  to prove it.
                </p>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global footprint */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="02"
            eyebrow="Global footprint"
            title="Four regions. One standard."
            lead="Headquarters in California, with presence across three further markets. No street addresses are published—deliberately."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
            {presenceRegions.map((region, i) => {
              const still =
                region.name === "California"
                  ? media.about.california
                  : region.name === "Dubai"
                    ? media.about.dubai
                    : region.name === "Singapore"
                      ? media.about.singapore
                      : media.about.china;
              return (
                <AnimatedReveal key={region.name} delay={i * 0.05} className="bg-charcoal">
                  <div className="group flex h-full flex-col bg-soft/30 transition-colors duration-300 hover:bg-soft/60">
                    <div className="relative h-40">
                      <img
                        src={still}
                        alt={`${region.name} presence`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-charcoal/30" />
                    </div>
                    <div className="flex items-start gap-5 p-8">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-hairline bg-charcoal/70 text-brass">
                        <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3 className="font-serif text-xl text-offwhite">{region.name}</h3>
                        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.25em] text-brass/70">
                          {region.role}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-stone/60">{region.note}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Leadership */}
      <Section>
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Leadership"
            title="Who you work with."
            lead="The founder is named. Practice seats are introduced in a briefing. The work each seat owns is public."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {leadership.map((leader, i) => (
              <AnimatedReveal key={leader.role} delay={i * 0.07} className="h-full">
                <div className="group flex h-full flex-col rounded-sm border border-hairline bg-soft/40 p-8 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40">
                  <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-sm border border-hairline bg-charcoal/70">
                    <span className="font-serif text-lg italic text-brass/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                    {leader.role}
                  </p>
                  <h3 className="mt-3 font-serif text-xl text-offwhite">{leader.name}</h3>
                  <dl className="mt-5 space-y-3 border-t border-hairline pt-5 text-sm">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-stone/40">Background</dt>
                      <dd className="mt-1 leading-relaxed text-stone/60">{leader.background}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-stone/40">Focus area</dt>
                      <dd className="mt-1 text-stone/60">{leader.focus}</dd>
                    </div>
                  </dl>
                  {"href" in leader && leader.href ? (
                    <Link
                      href={leader.href}
                      className="mt-6 inline-flex items-center gap-2 text-[13px] text-brass/80 transition-colors hover:text-brass"
                    >
                      Biography
                      <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </Link>
                  ) : null}
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Advisory network */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <div className="relative overflow-hidden rounded-sm border border-hairline bg-soft/40 p-10 md:p-14">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_0%_0%,rgba(176,141,87,0.07),transparent_70%)]"
            />
            <div className="relative max-w-2xl">
              <SectionHeading
                index="04"
                eyebrow="Advisory network"
                title="Specialists we convene when the brief requires it."
                lead="Procurement counsel, security-documentation reviewers, and regional market specialists across California, Dubai, Singapore, and China. Named introductions are arranged under NDA—never published as a roster."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Operating principles */}
      <Section>
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Operating principles"
            title="Five commitments that govern every engagement."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {operatingPrinciples.map((principle, i) => (
              <AnimatedReveal key={principle.title} delay={i * 0.05} className="h-full">
                <div className="group flex h-full items-start gap-5 rounded-sm border border-hairline bg-soft/30 p-7 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40">
                  <span className="mt-1 shrink-0 font-serif text-2xl italic text-brass/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-offwhite">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone/60">{principle.body}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="06"
            eyebrow="Headquarters"
            title="Headquartered in California, USA."
            lead="Global coordination runs from California. Regional presence in Dubai, Singapore, and China covers each market's buying environment."
            align="center"
          />
        </Container>
      </Section>

      <CTASection
        eyebrow="Engage"
        title="Get to know how we work."
        body="The most efficient introduction to PDSCOMM is a 15-minute briefing—no deck dump, just alignment."
        primaryLabel="Schedule a 15‑Minute Briefing"
        secondaryLabel="Submit Requirements"
      />
    </>
  );
}