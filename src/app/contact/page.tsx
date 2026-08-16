import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTASection } from "@/components/cta-section";
import { IntakeSwitcher } from "@/components/intake-switcher";
import { media } from "@/content/media";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start with the right conversation—buyer intake, partner intake, or a confidential briefing. NDA available where appropriate.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="09"
        eyebrow="Contact"
        title={
          <>
            Start with the{" "}
            <em className="italic text-brass">right</em> conversation.
          </>
        }
        lead="Buyer or technology partner—the intake below routes you correctly. Confidential. NDA available where appropriate."
        image={media.contact.header}
        imageAlt="Empty institutional reception hall"
      />

      {/* Intake */}
      <Section>
        <Container>
          <SectionHeading
            index="01"
            eyebrow="Choose your path"
            title="One firm. Two doorways."
            lead="Buyers submit requirements; technology partners submit capability. Both paths lead to a structured conversation."
          />
          <div className="mt-14">
            <AnimatedReveal>
              <IntakeSwitcher />
            </AnimatedReveal>
          </div>
        </Container>
      </Section>

      {/* Global presence */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="02"
            eyebrow="Global presence"
            title="Reachable across regions."
            lead="Engagements are coordinated from California and served across the regions below. No public addresses—briefings are where introductions happen."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {site.presence.map((region, i) => (
              <AnimatedReveal key={region} delay={i * 0.05} className="bg-charcoal">
                <div className="group h-full bg-soft/30 p-8 text-center transition-colors duration-300 hover:bg-soft/60">
                  <p className="font-serif text-3xl italic text-brass/50">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-xl uppercase tracking-[0.18em] text-offwhite">
                    {region}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[200px] text-xs leading-relaxed text-stone/50">
                    {regionNote(region)}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Confidentiality note */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-sm border border-hairline bg-soft/40 p-10 text-center md:p-14">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_100%,rgba(176,141,87,0.07),transparent_70%)]"
            />
            <div className="relative">
              <AnimatedReveal>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">
                  Confidentiality
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <p className="mx-auto mt-6 max-w-2xl font-serif text-2xl leading-snug text-offwhite md:text-3xl">
                  Confidential. NDA available where appropriate—before you
                  share anything you would rather not repeat.
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.16}>
                <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-stone/60">
                  Information boundaries are defined per engagement. What you
                  submit stays within the conversation it was meant for.
                </p>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Alternative"
        title="Prefer to talk first?"
        body="The intake forms work. The 15-minute briefing works faster—objectives, constraints, timelines, and the right path, in one call."
        primaryLabel="Schedule a 15‑Minute Briefing"
        secondaryLabel="Submit Requirements"
      />
    </>
  );
}

function regionNote(region: string): string {
  switch (region) {
    case "California":
      return "Headquarters — global coordination.";
    case "Dubai":
      return "Regional presence — Gulf engagement coverage.";
    case "Singapore":
      return "Regional presence — Southeast Asia coverage.";
    case "China":
      return "Regional presence — market and partner coverage.";
    default:
      return "";
  }
}