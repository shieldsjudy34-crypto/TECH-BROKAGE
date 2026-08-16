import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { PremiumCard } from "@/components/premium-card";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTASection } from "@/components/cta-section";
import { media } from "@/content/media";
import {
  partnerQualities,
  partnerTiers,
  partnerOnboarding,
  partnerReadinessChecklist,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Technology Partners",
  description:
    "Bring qualified AI software to institutional buyers. PDSCOMM sources, evaluates, and introduces AI providers to government and enterprise buyers.",
};

export default function TechnologyPartnersPage() {
  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Technology Partners"
        title={
          <>
            Bring qualified AI software to{" "}
            <em className="italic text-brass">institutional</em> buyers.
          </>
        }
        lead="A structured route to government and enterprise markets—based on fit, documentation readiness, and delivery capability. Selection for buyer fit, not portfolio size."
        image={media.partners.header}
        imageAlt="Uninhabited specialist atelier with brass instruments"
      />

      <Section id="what-we-look-for">
        <Container>
          <SectionHeading
            index="01"
            eyebrow="What PDSCOMM looks for"
            title="Four signals of an institutional-grade provider."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {partnerQualities.map((quality, i) => (
              <AnimatedReveal key={quality.title} delay={i * 0.06} className="h-full">
                <PremiumCard
                  icon={partnerIcon(quality.icon)}
                  title={quality.title}
                  body={quality.body}
                  className="h-full"
                />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Partner tiers */}
      <Section id="partner-tiers" className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="02"
            eyebrow="Partner tiers"
            title="A tiered relationship—earned, not granted."
            lead="Tiers reflect demonstrated fit across buyer engagements. Current tier assignments are disclosed per engagement, never implied publicly."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {partnerTiers.map((tier, i) => (
              <AnimatedReveal key={tier.tier} delay={i * 0.08} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-soft/40 p-8 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                    Tier {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-offwhite">{tier.tier}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone/60">
                    {tier.body}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-8 h-px w-full bg-gradient-to-r from-brass/40 to-transparent"
                  />
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal delay={0.2}>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-stone/40">
              No current partner relationships are implied or claimed here.
            </p>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Onboarding process */}
      <Section id="onboarding">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="03"
                eyebrow="Onboarding"
                title="Six inputs. One structured intake."
                lead="A disciplined onboarding builds the foundation for every future buyer introduction."
              />
            </div>
            <div className="space-y-px overflow-hidden rounded-sm border border-hairline bg-hairline lg:col-span-8">
              {partnerOnboarding.map((item, i) => (
                <AnimatedReveal key={item.title} delay={i * 0.04} className="bg-charcoal">
                  <div className="flex flex-col gap-2 bg-soft/30 p-6 transition-colors duration-300 hover:bg-soft/60 sm:flex-row sm:items-baseline sm:gap-8 md:p-7">
                    <span className="shrink-0 font-serif text-lg italic text-brass/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-offwhite">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone/60">{item.body}</p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Routes to market */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="04"
            eyebrow="Routes to market"
            title="Where the introductions happen."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <AnimatedReveal className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-soft/40">
                <div className="relative h-40">
                  <img
                    src={media.partners.routeGov}
                    alt="Empty hall for government introductions"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/35" />
                </div>
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">
                    Government introductions
                  </p>
                  <h3 className="mt-4 font-serif text-2xl text-offwhite">
                    Structured by agency reality.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone/60">
                    Civilian and public-sector-adjacent buyers with defined
                    procurement environments. Introductions are documentation-
                    conscious, NDA-first, and matched to the buyer&rsquo;s stated
                    requirements. No contractual claims are made.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-soft/40">
                <div className="relative h-40">
                  <img
                    src={media.partners.routeEnt}
                    alt="Empty reception for enterprise introductions"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/35" />
                </div>
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">
                    Enterprise introductions
                  </p>
                  <h3 className="mt-4 font-serif text-2xl text-offwhite">
                    Matched on fit, not volume.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone/60">
                    Regulated and high-procurement organizations across sectors.
                    We match providers to buyer-fit profiles—including
                    deployment, integration, and documentation expectations—
                    so conversations start already qualified.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </Section>

      {/* Readiness checklist */}
      <Section>
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Vendor readiness"
            title="The readiness checklist we run on every candidate."
            lead="Answer these five areas convincingly, and your provider profile can represent itself to institutional buyers."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {partnerReadinessChecklist.map((item, i) => (
              <AnimatedReveal key={item.title} delay={i * 0.05} className="h-full">
                <div className="group flex h-full items-start gap-5 rounded-sm border border-hairline bg-soft/30 p-7 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40">
                  <span className="mt-1 shrink-0 font-serif text-2xl italic text-brass/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-offwhite">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone/60">{item.body}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="For partners"
        title="Begin partner intake."
        body="A 15-minute conversation to determine whether your product fits institutional buyers—and whether we fit it. Confidentiality applies from the first exchange."
        primaryLabel="Partner Intake"
      />
    </>
  );
}

import type { LucideIcon } from "lucide-react";
import { Target, Server, ShieldCheck, Users } from "lucide-react";

function partnerIcon(name: string): LucideIcon | undefined {
  switch (name) {
    case "Target":
      return Target;
    case "Server":
      return Server;
    case "ShieldCheck":
      return ShieldCheck;
    case "Users":
      return Users;
    default:
      return undefined;
  }
}