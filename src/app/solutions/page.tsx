import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { CapabilityGrid } from "@/components/capability-grid";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTASection } from "@/components/cta-section";
import { media } from "@/content/media";
import {
  solutionCategories,
  deploymentConsiderations,
  evaluationLens,
  riskMitigations,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI capabilities matched to mission and operations—document intelligence, computer vision, predictive analytics, fraud detection, cybersecurity AI, and MLOps governance.",
};

const governmentUseCases = [
  {
    title: "Civilian records & knowledge",
    body: "Document intelligence and retrieval across institutional records, with defined handling boundaries.",
  },
  {
    title: "Fraud, waste & abuse detection",
    body: "Detection and scoring for public-sector payment and program environments.",
  },
  {
    title: "Inspection & compliance support",
    body: "Vision and analytics support for structured inspection and oversight workflows.",
  },
  {
    title: "Operations forecasting",
    body: "Predictive support for planning, resourcing, and maintenance across public services.",
  },
];

const enterpriseUseCases = [
  {
    title: "Regulated-industry document operations",
    body: "Contract, compliance, and record workflows with audit-trail expectations.",
  },
  {
    title: "Financial crime & risk",
    body: "Anomaly detection and risk scoring for financial services environments.",
  },
  {
    title: "Industrial inspection & maintenance",
    body: "Computer vision and predictive maintenance for physical operations.",
  },
  {
    title: "Customer operations augmentation",
    body: "Conversational AI and case-handling support for high-volume centers.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Solutions"
        title={
          <>
            AI capabilities matched to{" "}
            <em className="italic text-brass">mission</em> and{" "}
            <em className="italic text-brass">operations</em>.
          </>
        }
        lead="Capability mapping, use-case alignment, deployment considerations, and evaluation discipline—structured so institutions can adopt AI with confidence."
        image={media.solutions.header}
        imageAlt="Empty industrial inspection hall at night"
      />

      {/* Capability map */}
      <Section>
        <Container>
          <SectionHeading
            index="01"
            eyebrow="AI capability map"
            title="Six capability families. One evaluation discipline."
          />
          <div className="mt-14">
            <CapabilityGrid items={solutionCategories} />
          </div>
        </Container>
      </Section>

      {/* Government use-case mapping */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="02"
                eyebrow="Government mapping"
                title="Where public-sector missions meet AI."
                lead="Representative mappings—final suitability is confirmed against requirements, constraints, and deployment realities."
              />
            </div>
            <div className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:col-span-8">
              {governmentUseCases.map((useCase, i) => (
                <AnimatedReveal key={useCase.title} delay={i * 0.04} className="bg-charcoal">
                  <div className="h-full bg-soft/30 p-7 transition-colors duration-300 hover:bg-soft/60">
                    <h3 className="font-serif text-lg text-offwhite">{useCase.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone/60">{useCase.body}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Enterprise use-case mapping */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="03"
                eyebrow="Enterprise mapping"
                title="Where private-sector rigor meets AI."
              />
            </div>
            <div className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:col-span-8">
              {enterpriseUseCases.map((useCase, i) => (
                <AnimatedReveal key={useCase.title} delay={i * 0.04} className="bg-charcoal">
                  <div className="h-full bg-soft/30 p-7 transition-colors duration-300 hover:bg-soft/60">
                    <h3 className="font-serif text-lg text-offwhite">{useCase.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone/60">{useCase.body}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Deployment & integration */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="04"
            eyebrow="Deployment & integration"
            title="Considered before commitment."
            lead="We surface deployment and integration reality as considerations—never as guaranteed delivery."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {deploymentConsiderations.map((item, i) => (
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

      {/* Evaluation approach */}
      <Section>
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Evaluation approach"
            title="Four lenses on every candidate."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {evaluationLens.map((lens, i) => (
              <AnimatedReveal key={lens.title} delay={i * 0.05} className="bg-charcoal">
                <div className="group h-full bg-soft/30 p-7 transition-colors duration-300 hover:bg-soft/60">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                    Lens {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-xl text-offwhite">{lens.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone/60">{lens.body}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Risks & mitigation */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="06"
                eyebrow="Risk & mitigation"
                title="Common risks—named, not ignored."
                lead="We put failure modes on the table early, so mitigation is designed into the engagement."
              />
            </div>
            <div className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:col-span-8">
              {riskMitigations.map((risk, i) => (
                <AnimatedReveal key={risk.title} delay={i * 0.04} className="bg-charcoal">
                  <div className="h-full bg-soft/30 p-7 transition-colors duration-300 hover:bg-soft/60">
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                      Risk {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-serif text-lg text-offwhite">{risk.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone/60">{risk.body}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="For buyers"
        title="Map your requirement to the right capability."
        body="Submit requirements and we'll structure the capability mapping, evaluation framework, and shortlist around your actual environment."
        primaryLabel="Submit Requirements"
        secondaryLabel="Schedule a 15‑Minute Briefing"
      />
    </>
  );
}