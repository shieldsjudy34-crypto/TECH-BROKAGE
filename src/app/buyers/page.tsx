import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { PremiumCard } from "@/components/premium-card";
import { CapabilityGrid } from "@/components/capability-grid";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTASection } from "@/components/cta-section";
import { media } from "@/content/media";
import {
  buyerEngagementModels,
  procurementDocs,
  diligenceAreas,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Buyers",
  description:
    "Procurement-ready AI sourcing for government and enterprise buyers—advisory, sourcing, evaluation support, and ongoing partner management.",
};

const useCaseLibrary = [
  {
    icon: "FileText",
    title: "Document Intelligence",
    body: "Parsing, extraction, and summarization for large institutional document estates.",
  },
  {
    icon: "Fingerprint",
    title: "Fraud & Risk Detection",
    body: "Detection and scoring for high-stakes financial and operational environments.",
  },
  {
    icon: "Eye",
    title: "Inspections & Operations Support",
    body: "Vision and sensor-driven support for structured inspection workflows.",
  },
  {
    icon: "Search",
    title: "Knowledge Retrieval",
    body: "Fast, governed retrieval across institutional knowledge bases.",
  },
  {
    icon: "Lock",
    title: "Cybersecurity AI",
    body: "Triage, monitoring, and response augmentation for security teams.",
  },
  {
    icon: "Users",
    title: "Call Center Augmentation",
    body: "Conversational AI and case handling support for high-volume centers.",
  },
];

const governmentPathway = [
  "Confidential briefing under NDA—boundaries defined before detail is shared",
  "Structured requirements capture aligned to agency objectives",
  "Market scan limited to qualified, documented providers",
  "Shortlist built with an explicit evaluation rationale",
  "Evaluation support with comparison frameworks for internal review",
  "Procurement documentation structured for agency processes",
];

const enterprisePathway = [
  "Stakeholder alignment across business, IT, and risk functions",
  "Requirements and constraints captured against existing systems",
  "Sourcing against capability, integration, and commercial fit",
  "Weighted scorecard evaluation supporting defensible selection",
  "Pilot readiness outline with success measures and exit criteria",
  "Procurement handover with comparison and diligence documentation",
];

export default function BuyersPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Buyers"
        title={
          <>
            Procurement-ready AI sourcing for{" "}
            <em className="italic text-brass">government</em> and{" "}
            <em className="italic text-brass">enterprise</em> buyers.
          </>
        }
        lead="Requirements confirmed per buyer. Documentation practices commonly expected in institutional procurement. No noise, no theater—structure and substance."
        image={media.buyers.header}
        imageAlt="Empty civic council chamber at dawn"
      />

      {/* Engagement models */}
      <Section>
        <Container>
          <SectionHeading
            index="01"
            eyebrow="Engagement models"
            title="Four ways to engage—each with a defined output."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {buyerEngagementModels.map((model, i) => (
              <AnimatedReveal key={model.title} delay={i * 0.06} className="h-full">
                <PremiumCard
                  icon={buyerIcon(model.icon)}
                  title={model.title}
                  body={model.body}
                  className="h-full"
                />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Procurement documentation */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="02"
            eyebrow="Procurement documentation"
            title="Documents that make selection defensible."
            lead="Every engagement produces structured artifacts your team can review, sign off on, and file."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
            {procurementDocs.map((doc, i) => (
              <AnimatedReveal key={doc.title} delay={i * 0.05} className="bg-charcoal">
                <div className="group h-full bg-soft/30 p-8 transition-colors duration-300 hover:bg-soft/60">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                    Artifact {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl text-offwhite">{doc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone/60">{doc.body}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Due diligence coverage */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="03"
                eyebrow="Due diligence"
                title="Five diligence dimensions, consistently covered."
                lead="Structured coordination—not checkbox theater. Each dimension produces a documented assessment."
              />
            </div>
            <div className="space-y-px overflow-hidden rounded-sm border border-hairline bg-hairline lg:col-span-8">
              {diligenceAreas.map((area, i) => (
                <AnimatedReveal key={area.title} delay={i * 0.04} className="bg-charcoal">
                  <div className="flex flex-col gap-2 bg-soft/30 p-6 transition-colors duration-300 hover:bg-soft/60 sm:flex-row sm:items-baseline sm:gap-8 md:p-7">
                    <span className="shrink-0 font-serif text-lg italic text-brass/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-offwhite">{area.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone/60">{area.body}</p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pathways */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="04"
            eyebrow="Buyer pathways"
            title="Two pathways, one standard of rigor."
            lead="The structure differs by environment; the discipline does not."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <AnimatedReveal className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-soft/40">
                <div className="relative h-44">
                  <img
                    src={media.buyers.pathwayGov}
                    alt="Empty civic colonnade for the government pathway"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/35" />
                </div>
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">
                    Government pathway
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-offwhite">
                    NDA-first, documentation-conscious.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone/60">
                    Engagements are adapted to agency procurement structures.
                    No registration or contracting status is claimed or implied —
                    posture is defined per engagement, and confidentiality is
                    the default.
                  </p>
                  <ol className="mt-8 flex-1 space-y-4 border-t border-hairline pt-8">
                    {governmentPathway.map((step, i) => (
                      <li key={step} className="flex items-start gap-4 text-sm text-stone/70">
                        <span className="mt-0.5 font-serif text-sm italic text-brass/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-soft/40">
                <div className="relative h-44">
                  <img
                    src={media.buyers.pathwayEnt}
                    alt="Empty executive corridor for the enterprise pathway"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/35" />
                </div>
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">
                    Enterprise pathway
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-offwhite">
                    Built for regulated environments.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone/60">
                    For organizations with high procurement standards, internal
                    governance, and integration realities that cannot be
                    hand-waved. Evaluation is documented for internal review at
                    every stage.
                  </p>
                  <ol className="mt-8 flex-1 space-y-4 border-t border-hairline pt-8">
                    {enterprisePathway.map((step, i) => (
                      <li key={step} className="flex items-start gap-4 text-sm text-stone/70">
                        <span className="mt-0.5 font-serif text-sm italic text-brass/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </Section>

      {/* Use-case library */}
      <Section>
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Use-case library"
            title="Where buyers typically start."
            lead="Representative use cases across our capability map—your actual scope is confirmed against requirements and constraints."
          />
          <div className="mt-14">
            <CapabilityGrid items={useCaseLibrary} />
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="For buyers"
        title="Start with your requirements."
        body="Submit your requirements or schedule a briefing. Either path begins with confidentiality and ends with a structured engagement."
        primaryLabel="Submit Requirements"
        secondaryLabel="Schedule a 15‑Minute Briefing"
      />
    </>
  );
}

import type { LucideIcon } from "lucide-react";
import { Compass, Search, FileCheck2, Workflow } from "lucide-react";

function buyerIcon(name: string): LucideIcon | undefined {
  switch (name) {
    case "Compass":
      return Compass;
    case "Search":
      return Search;
    case "FileCheck2":
      return FileCheck2;
    case "Workflow":
      return Workflow;
    default:
      return undefined;
  }
}