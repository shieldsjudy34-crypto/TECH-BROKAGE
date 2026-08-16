import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTASection } from "@/components/cta-section";
import { Timeline } from "@/components/timeline";
import { media } from "@/content/media";
import { methodologyRecap, selectedEngagements } from "@/content/site";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Selected engagements—details available under NDA. Anonymized case-study structure, methodology, and reference policy for institutional AI sourcing.",
};

const caseStudyTemplate = [
  { label: "Context", note: "The buyer's environment, mandate, and operating reality." },
  { label: "Objective", note: "The stated outcome the engagement was structured to achieve." },
  { label: "Scope", note: "Capability families, constraints, and boundaries of the work." },
  { label: "Constraints", note: "Deployment, data, timeline, and governance constraints." },
  { label: "Approach", note: "The structured path taken—scan, shortlist, evaluation, diligence." },
  { label: "Outcome", note: "What was delivered and how it was assessed." },
];

export default function EngagementsPage() {
  return (
    <>
      <PageHeader
        index="05"
        eyebrow="Engagements"
        title={
          <>
            Selected engagements. Details available{" "}
            <em className="italic text-brass">under NDA</em>.
          </>
        }
        lead="Anonymized records of how PDSCOMM works—sector, region, objective, constraints, and what the buyer left with. Parties stay unnamed. The work does not."
        image={media.engagements.header}
        imageAlt="Sealed archive drawers in an uninhabited vault"
      />

      {/* Confidentiality explainer */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                index="01"
                eyebrow="Why anonymized"
                title="Discretion is a feature, not a footnote."
                lead="Government and enterprise clients routinely require that engagements, constraints, and outcomes never surface—even in aggregate."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-6">
                {[
                  {
                    title: "Client consent governs publication",
                    body: "Nothing appears on this page without the client's explicit agreement to anonymized disclosure.",
                  },
                  {
                    title: "Parties stay unnamed. The work does not.",
                    body: "Sectors, regions, constraints, and outcomes are shown. Names, systems, and contract values are not.",
                  },
                  {
                    title: "Verified on request",
                    body: "Engagement records and references are verifiable in a briefing under NDA, where permitted by the client.",
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

      {/* Anonymized engagement records */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="02"
            eyebrow="Engagement records"
            title="Four records. Four regions. One standard."
            lead="Each engagement follows the same arc—intake, scan, qualify, evaluate, diligence, introduce. What changes is the buyer’s environment."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {selectedEngagements.map((engagement, i) => (
              <AnimatedReveal key={engagement.ref} delay={i * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-sm border border-hairline bg-soft/40 p-8 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40">
                  <div className="flex items-center justify-between gap-4">
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
                        ["Objective", engagement.objective],
                        ["Scope", engagement.scope],
                        ["Constraints", engagement.constraints],
                        ["Outcome", engagement.outcome],
                      ] as const
                    ).map(([label, value]) => (
                      <div key={label} className="border-b border-hairline/50 pb-3 last:border-0">
                        <dt className="text-[11px] uppercase tracking-[0.22em] text-stone/40">
                          {label}
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-stone/70">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case study template */}
      <Section>
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Case study template"
            title="How future case studies will be structured."
            lead="A fixed structure keeps every published engagement comparable—and honest."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {caseStudyTemplate.map((item, i) => (
              <AnimatedReveal key={item.label} delay={i * 0.04} className="bg-charcoal">
                <div className="h-full bg-soft/30 p-7 transition-colors duration-300 hover:bg-soft/60">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-xl text-offwhite">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone/60">{item.note}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Methodology recap */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                index="04"
                eyebrow="Methodology"
                title="The same six stages, every time."
                lead="Reproducibility is what makes engagement records comparable across sectors and years."
              />
            </div>
            <div className="pt-2 lg:col-span-8">
              <Timeline steps={methodologyRecap} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Reference policy */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-sm border border-hairline bg-soft/40 p-10 md:p-14">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_100%_0%,rgba(176,141,87,0.07),transparent_70%)]"
            />
            <div className="relative">
              <SectionHeading
                index="05"
                eyebrow="Reference policy"
                title="Reference conversations—arranged where permitted."
                lead="Client references are never assumed, never fabricated, and never pushed. Where a client permits, reference conversations can be arranged as part of diligence."
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Engage"
        title="Review the record in person."
        body="The fastest way to verify anything on this page is a confidential briefing. Schedule one—NDA available where appropriate."
        primaryLabel="Schedule a 15‑Minute Briefing"
        secondaryLabel="Submit Requirements"
      />
    </>
  );
}