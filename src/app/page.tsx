import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { BackgroundGridGrain } from "@/components/background";
import { AnimatedReveal } from "@/components/animated-reveal";
import { Container, Section, SectionHeading, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { PremiumCard } from "@/components/premium-card";
import { ArtifactSlider } from "@/components/artifact-slider";
import { Timeline } from "@/components/timeline";
import { CTASection } from "@/components/cta-section";
import { media } from "@/content/media";
import {
  site,
  pillarCards,
  buyerMarkets,
  capabilityItems,
  engagementTimeline,
  vettingCriteria,
  trustHighlights,
  selectedEngagements,
} from "@/content/site";

const homeCapImages = [
  media.home.caps.document,
  media.home.caps.vision,
  media.home.caps.predictive,
  media.home.caps.fraud,
  media.home.caps.cyber,
  media.home.caps.mlops,
] as const;

export const metadata: Metadata = {
  title: "AI Software Brokerage for Institutional Buyers",
  description:
    "PDSCOMM connects government and enterprise buyers with qualified AI software providers—supporting sourcing, evaluation, and due diligence from requirements to shortlist.",
};

export default function HomePage() {
  return (
    <>
      {/* 01 — Hero */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[64%]">
          <Image
            src={media.home.hero}
            alt="Uninhabited institutional archive corridor at night"
            fill
            priority
            className="object-cover ken-burns"
            sizes="(min-width: 768px) 64vw, 100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/20 md:bg-gradient-to-r md:from-charcoal md:via-charcoal/35 md:to-transparent" />
        </div>
        <BackgroundGridGrain className="opacity-40 [mask-image:radial-gradient(ellipse_80%_70%_at_20%_15%,black,transparent)]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_-5%,rgba(176,141,87,0.10),transparent_70%)]"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-20 pt-32 md:px-10 md:pt-40">
          <AnimatedReveal>
            <Eyebrow index="01">{site.hq} · Global AI Software Brokerage</Eyebrow>
          </AnimatedReveal>

          <AnimatedReveal delay={0.12} blur>
            <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] text-offwhite md:text-7xl lg:text-8xl">
              AI brokerage built for{" "}
              <em className="italic text-brass">procurement-grade</em>{" "}
              decisions.
            </h1>
          </AnimatedReveal>

          <AnimatedReveal delay={0.24}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone/65 md:text-lg">
              {site.description}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.32}>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.3em] text-stone/45">
              {site.presence.map((p, i) => (
                <span key={p}>
                  {i > 0 && (
                    <span aria-hidden="true" className="mx-3 text-brass/60">
                      ·
                    </span>
                  )}
                  {p}
                </span>
              ))}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.4}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={site.ctas.briefing.href} size="lg">
                {site.ctas.briefing.label}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </ButtonLink>
              <ButtonLink href={site.ctas.requirements.href} size="lg" variant="secondary">
                {site.ctas.requirements.label}
              </ButtonLink>
            </div>
          </AnimatedReveal>
        </div>

        <div className="relative border-t border-hairline">
          <Container className="flex items-center justify-between py-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone/40">
              Structured · Discreet · Global
            </p>
            <span
              aria-hidden="true"
              className="hidden h-px w-24 bg-gradient-to-r from-brass/60 to-transparent md:block"
            />
          </Container>
        </div>
      </section>

      {/* 02 — What PDSCOMM Does */}
      <Section>
        <Container>
          <SectionHeading
            index="02"
            eyebrow="What PDSCOMM does"
            title="Structured AI sourcing—end to end."
            lead="From a first briefing to a defensible shortlist, every step is documented, comparable, and aligned to how institutions actually buy."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillarCards.map((card, i) => (
              <AnimatedReveal key={card.title} delay={i * 0.08} className="h-full">
                <PremiumCard
                  icon={mapIcon(card.icon)}
                  title={card.title}
                  body={card.body}
                  className="h-full"
                />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 03 — Who We Serve */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Who we serve"
            title="Built for institutions that need rigor—not noise."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {buyerMarkets.map((market, i) => (
              <AnimatedReveal key={market.title} delay={i * 0.1} className="h-full">
                <PremiumCard
                  icon={mapIcon(market.icon)}
                  title={market.title}
                  body={market.body}
                  className="h-full"
                  image={
                    i === 0
                      ? media.home.whoGovernment
                      : media.home.whoEnterprise
                  }
                  imageAlt={
                    i === 0
                      ? "Empty civic colonnade at dusk"
                      : "Empty executive boardroom at night"
                  }
                >
                  <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
                    {market.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-stone/65">
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.5} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </PremiumCard>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 04 — AI Software Coverage */}
      <Section>
        <Container>
          <SectionHeading
            index="04"
            eyebrow="AI software coverage"
            title="AI software domains we source across."
            lead="Six capability families anchor our market scans. Scope is confirmed per buyer—never assumed."
          />
          <div className="mt-14">
            <ArtifactSlider
              items={capabilityItems.map((item, i) => ({
                src: homeCapImages[i],
                alt: item.title,
                title: item.title,
                body: item.body,
              }))}
            />
          </div>
          <AnimatedReveal delay={0.1}>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-stone/40">
              Final scope depends on buyer requirements and deployment constraints.
            </p>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* 05 — Engagement Model Timeline */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="05"
                eyebrow="Engagement model"
                title="A clear process—designed to move responsibly."
                lead="Six stages, each with a defined output. Nothing moves forward until the previous stage is documented and confirmed."
              />
            </div>
            <div className="pt-2 lg:col-span-8">
              <Timeline steps={engagementTimeline} />
            </div>
          </div>
        </Container>
      </Section>

      {/* 06 — Partner Ecosystem */}
      <Section>
        <Container>
          <SectionHeading
            index="06"
            eyebrow="Partner ecosystem"
            title="Access to specialists and established providers."
            lead="PDSCOMM works across AI software categories—from focused specialists to enterprise-ready platforms—selecting for use-case fit, implementation realities, and procurement readiness."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
            {vettingCriteria.map((criterion, i) => (
              <AnimatedReveal key={criterion.title} delay={i * 0.06} className="bg-charcoal">
                <div className="group h-full rounded-none border-0 bg-soft/30 p-8 transition-colors duration-300 hover:bg-soft/60">
                  <p className="font-serif text-4xl italic text-brass/60">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-xl text-offwhite">{criterion.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone/60">{criterion.body}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 07 — Trust & Compliance Preview */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                index="07"
                eyebrow="Trust & compliance"
                title="Trust, discretion, and governance awareness."
                lead="Our posture is defined before details are exchanged—and documented throughout every engagement."
              />
              <AnimatedReveal delay={0.2}>
                <Link
                  href="/trust-compliance"
                  className="link-underline mt-8 inline-flex items-center gap-2 text-sm text-brass"
                >
                  Read our Trust & Compliance posture
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </AnimatedReveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
                {trustHighlights.map((item, i) => (
                  <AnimatedReveal key={item.title} delay={i * 0.06} className="bg-charcoal">
                    <div className="h-full bg-soft/30 p-7 transition-colors duration-300 hover:bg-soft/60">
                      <h3 className="font-serif text-lg text-offwhite">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone/60">{item.body}</p>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 08 — Selected Engagements Preview */}
      <Section>
        <Container>
          <SectionHeading
            index="08"
            eyebrow="Selected engagements"
            title="Selected engagements—details available under NDA."
            lead="Anonymized records of how PDSCOMM actually works: sector, region, scope, and what the buyer left with. Parties are unnamed. The work is not."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {selectedEngagements.slice(0, 3).map((engagement, i) => (
              <AnimatedReveal key={engagement.ref} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-sm border border-hairline bg-soft/40 p-7 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                      {engagement.ref}
                    </p>
                    <span className="rounded-sm border border-brass/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-brass/80">
                      Under NDA
                    </span>
                  </div>
                  <dl className="mt-6 flex-1 space-y-4 border-t border-hairline pt-6">
                    {(
                      [
                        ["Sector", engagement.sector],
                        ["Region", engagement.region],
                        ["Scope", engagement.scope],
                        ["Outcome", engagement.outcome],
                      ] as const
                    ).map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-[11px] uppercase tracking-[0.22em] text-stone/40">
                          {label}
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-stone/70">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-6 border-t border-hairline pt-5 text-xs leading-relaxed text-stone/40">
                    Anonymized per confidentiality. Details available under
                    NDA upon briefing.
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 09 — Final CTA */}
      <CTASection
        eyebrow="Engage"
        title="Begin with a 15-minute briefing."
        body="We'll align on your objectives, constraints, timelines, and the appropriate engagement path—buyer-side or partner-side."
        secondaryLabel={site.ctas.requirements.label}
      />
    </>
  );
}

import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Search,
  ShieldCheck,
  Landmark,
  Building2,
} from "lucide-react";

function mapIcon(name: string): LucideIcon | undefined {
  switch (name) {
    case "FileText":
      return FileText;
    case "Search":
      return Search;
    case "ShieldCheck":
      return ShieldCheck;
    case "Landmark":
      return Landmark;
    case "Building2":
      return Building2;
    default:
      return undefined;
  }
}