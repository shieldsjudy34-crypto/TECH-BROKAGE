import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTASection } from "@/components/cta-section";
import { media } from "@/content/media";
import { founder } from "@/content/site";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Ruben Wagner, Founder & Managing Partner of PDSCOMM—a California-based AI software brokerage for government and enterprise buyers.",
};

export default function FounderPage() {
  return (
    <>
      <PageHeader
        index="F"
        eyebrow="Founder"
        title={
          <>
            Ruben Wagner.{" "}
            <em className="italic text-brass">Founder &amp; Managing Partner.</em>
          </>
        }
        lead="A California-based broker who built PDSCOMM so institutional buyers could source AI software with a file, not a roadshow."
        image={media.founder.header}
        imageAlt="Private California study at dusk, uninhabited"
      />

      {/* Portrait + identity */}
      <Section>
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <AnimatedReveal className="lg:col-span-5">
              <figure className="relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-hairline bg-soft/40">
                  <Image
                    src={media.founder.portrait}
                    alt="Portrait placeholder for Ruben Wagner, Founder of PDSCOMM"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    unoptimized
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/10" />
                </div>
                <figcaption className="mt-4 text-[11px] leading-relaxed tracking-wide text-stone/40">
                  {founder.photoNote}
                </figcaption>
              </figure>
            </AnimatedReveal>

            <div className="lg:col-span-7">
              <AnimatedReveal>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/80">
                  Biography
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-[1.12] text-offwhite md:text-5xl">
                  {founder.name}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-stone/50">
                  {founder.role} · {founder.location}
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <p className="mt-8 text-lg leading-relaxed text-stone/75 md:text-xl">
                  {founder.lede}
                </p>
              </AnimatedReveal>
              <dl className="mt-10 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
                {founder.facts.map((fact, i) => (
                  <AnimatedReveal
                    key={fact.label}
                    delay={0.04 * i}
                    className="bg-charcoal"
                  >
                    <div className="bg-soft/30 px-6 py-5">
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-stone/40">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-offwhite">
                        {fact.value}
                      </dd>
                    </div>
                  </AnimatedReveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* Long-form biography */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="01"
            eyebrow="Biography"
            title="The record, as it stands."
            lead="A working biography of the founder—written to be edited against Ruben Wagner’s own dates, seats, and particulars. The method described here is the firm’s."
          />
          <div className="mt-16 space-y-20">
            {founder.chapters.map((chapter, i) => (
              <AnimatedReveal key={chapter.title} delay={0.04}>
                <article className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 max-w-sm font-serif text-2xl leading-snug text-offwhite md:text-3xl">
                      {chapter.title}
                    </h3>
                  </div>
                  <div className="max-w-2xl space-y-5 lg:col-span-8">
                    {chapter.body.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="text-[15px] leading-relaxed text-stone/65 md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Business history */}
      <Section>
        <Container>
          <SectionHeading
            index="02"
            eyebrow="Business history"
            title="How the practice was built."
            lead="Chapters, not a résumé. Replace periods and titles with dated seats when the public record is ready."
          />
          <ol className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[7px] top-2 w-px bg-hairline"
            />
            {founder.history.map((step, i) => (
              <li key={step.period} className="relative pb-14 pl-12 last:pb-0 md:pl-16">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-brass/60 bg-charcoal"
                >
                  <span className="h-1 w-1 rounded-full bg-brass/80" />
                </span>
                <AnimatedReveal delay={i * 0.04}>
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/80">
                    {step.period}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-snug text-offwhite md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone/60 md:text-[15px]">
                    {step.body}
                  </p>
                </AnimatedReveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Working with him */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Working with the founder"
            title="What a buyer should expect."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {founder.workingWith.map((item, i) => (
              <AnimatedReveal key={item.title} delay={i * 0.05} className="h-full">
                <div className="group flex h-full items-start gap-5 rounded-sm border border-hairline bg-soft/30 p-7 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40">
                  <span className="mt-1 shrink-0 font-serif text-2xl italic text-brass/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-offwhite">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone/60">
                      {item.body}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal delay={0.12}>
            <p className="mx-auto mt-16 max-w-3xl border-t border-hairline pt-10 text-center text-sm italic leading-relaxed text-stone/45">
              {founder.closing}
            </p>
          </AnimatedReveal>
        </Container>
      </Section>

      <CTASection
        eyebrow="Engage"
        title="A fifteen-minute briefing with the founder."
        body="No deck dump. Alignment on whether the requirement is real, whether a committee can own it, and whether PDSCOMM should take the work."
        primaryLabel="Schedule a 15‑Minute Briefing"
        secondaryLabel="Submit Requirements"
      />
    </>
  );
}
