import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { PremiumCard } from "@/components/premium-card";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTASection } from "@/components/cta-section";
import { media } from "@/content/media";
import { trustPillars, frameworkNotes, procurementSupportDocs } from "@/content/site";

export const metadata: Metadata = {
  title: "Trust & Compliance",
  description:
    "Trust, governance, and procurement readiness at PDSCOMM—confidentiality-first engagement, institutional security awareness, vendor due diligence, and responsible AI principles.",
};

const responsibleAiPrinciples = [
  {
    title: "Bias considerations",
    body: "Representation, evaluation, and fairness considerations are raised as part of every evaluation framework.",
  },
  {
    title: "Explainability",
    body: "Output transparency and decision rationale are examined where institutional accountability requires it.",
  },
  {
    title: "Audit trail",
    body: "Evaluation and reasoning documentation is structured so decisions can be reconstructed and reviewed.",
  },
  {
    title: "Human oversight where required",
    body: "The right level of human review is a design question—addressed per use case, never assumed away.",
  },
];

export default function TrustCompliancePage() {
  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Trust & Compliance"
        title={
          <>
            Trust, governance, and{" "}
            <em className="italic text-brass">procurement</em> readiness.
          </>
        }
        lead="A posture defined before details are exchanged, documented throughout, and available for review at every stage of an engagement."
        image={media.trust.header}
        imageAlt="Stone vault interior with a single brass hinge"
      />

      {/* Pillars */}
      <Section>
        <Container>
          <SectionHeading
            index="01"
            eyebrow="Our posture"
            title="Four pillars of the PDSCOMM trust framework."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {trustPillars.map((pillar, i) => (
              <AnimatedReveal key={pillar.title} delay={i * 0.06} className="h-full">
                <PremiumCard
                  icon={trustIcon(pillar.icon)}
                  title={pillar.title}
                  body={pillar.body}
                  className="h-full"
                />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Confidentiality-first */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                index="02"
                eyebrow="Confidentiality"
                title="NDA-first. Always."
                lead="The default posture is protection. NDA availability where appropriate, defined information boundaries, and handling expectations confirmed per buyer—before requirements are shared."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-6">
                {[
                  {
                    title: "Boundaries defined per engagement",
                    body: "What may be shared, retained, or referenced is agreed in writing before the first substantive exchange.",
                  },
                  {
                    title: "Buyer-defined handling expectations",
                    body: "We adapt to each institution's information handling and classification expectations—not the other way around.",
                  },
                  {
                    title: "Records under control",
                    body: "Engagement documentation is maintained with defined access, retention, and destruction expectations.",
                  },
                ].map((item, i) => (
                  <AnimatedReveal key={item.title} delay={i * 0.06}>
                    <div className="flex items-start gap-5 rounded-sm border border-hairline bg-soft/30 p-7">
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
            </div>
          </div>
        </Container>
      </Section>

      {/* Frameworks as considerations */}
      <Section>
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Security & governance"
            title="Frameworks referenced as considerations—not claimed as certifications."
            lead="Institutional buyers commonly ask how we align with the frameworks their own environments already use. We engage with those frameworks as structuring references."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {frameworkNotes.map((framework, i) => (
              <AnimatedReveal key={framework.title} delay={i * 0.05} className="bg-charcoal">
                <div className="group h-full bg-soft/30 p-7 transition-colors duration-300 hover:bg-soft/60">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                    Framework
                  </p>
                  <h3 className="mt-4 font-serif text-xl text-offwhite">{framework.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone/60">{framework.body}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal delay={0.15}>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-stone/40">
              No certification, registration, or approval status is claimed or implied.
            </p>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Vendor due diligence lens */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="04"
            eyebrow="Due diligence lens"
            title="What we examine in every vendor."
            lead="A structured diligence lens applied consistently—so assessments are comparable across candidates."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              ["Architecture", "System design, dependencies, and deployment topology."],
              ["Data flows", "Ingestion, processing, storage, and return paths—with locations."],
              ["Model monitoring", "Drift detection, retraining, and versioning practices."],
              ["Retention", "Data retention, deletion, and ownership expectations."],
              ["Support & SLAs", "Service levels, escalation, and continuity commitments."],
              ["Vendor viability", "Commercial durability across the engagement horizon."],
            ].map(([title, body], i) => (
              <AnimatedReveal key={title} delay={i * 0.05} className="h-full">
                <div className="group flex h-full items-start gap-5 rounded-sm border border-hairline bg-soft/30 p-7 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40">
                  <span className="mt-1 shrink-0 font-serif text-2xl italic text-brass/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-offwhite">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone/60">{body}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Responsible AI */}
      <Section>
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Responsible AI"
            title="Principles written into the framework—not left implicit."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
            {responsibleAiPrinciples.map((principle, i) => (
              <AnimatedReveal key={principle.title} delay={i * 0.05} className="bg-charcoal">
                <div className="h-full bg-soft/30 p-8 transition-colors duration-300 hover:bg-soft/60">
                  <h3 className="font-serif text-xl text-offwhite">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone/60">{principle.body}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Procurement documentation support */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="06"
                eyebrow="Procurement support"
                title="Documentation that travels through procurement."
                lead="Structured artifacts designed for institutional review, sign-off, and filing."
              />
            </div>
            <div className="space-y-px overflow-hidden rounded-sm border border-hairline bg-hairline lg:col-span-8">
              {procurementSupportDocs.map((doc, i) => (
                <AnimatedReveal key={doc.title} delay={i * 0.04} className="bg-charcoal">
                  <div className="flex flex-col gap-2 bg-soft/30 p-6 transition-colors duration-300 hover:bg-soft/60 sm:flex-row sm:items-baseline sm:gap-8 md:p-7">
                    <span className="shrink-0 font-serif text-lg italic text-brass/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-offwhite">{doc.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone/60">{doc.body}</p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Private briefing"
        title="Review our posture in confidence."
        body="A secure, private briefing—NDA available where appropriate. Ask us anything about how we handle information, diligence, and accountability."
        primaryLabel="Schedule a Private Briefing"
        secondaryLabel="Submit Requirements"
      />
    </>
  );
}

import type { LucideIcon } from "lucide-react";
import { Vault, Scale, Fingerprint, Eye } from "lucide-react";

function trustIcon(name: string): LucideIcon | undefined {
  switch (name) {
    case "Vault":
      return Vault;
    case "Scale":
      return Scale;
    case "Fingerprint":
      return Fingerprint;
    case "Eye":
      return Eye;
    default:
      return undefined;
  }
}