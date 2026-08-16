import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTASection } from "@/components/cta-section";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { media } from "@/content/media";
import {
  insightCategories,
  featuredInsights,
  editorialStandards,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Briefings on AI sourcing, procurement, and risk—procurement notes, AI risk, market maps, and buyer briefs from PDSCOMM.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        index="08"
        eyebrow="Insights"
        title={
          <>
            Briefings on AI sourcing,{" "}
            <em className="italic text-brass">procurement</em>, and risk.
          </>
        }
        lead="Concise, procurement-oriented, no hype. Editorial content exists to make buyers sharper—not to sell anything."
        image={media.insights.header}
        imageAlt="Editorial writing desk at night"
      />

      {/* Featured insights */}
      <Section>
        <Container>
          <SectionHeading
            index="01"
            eyebrow="Featured"
            title="Briefings a buyer can actually use."
            lead="These are working notes, not a blog. Request the full piece in a 15-minute briefing—no drip, no cadence theater."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featuredInsights.map((insight, i) => (
              <AnimatedReveal key={insight.title} delay={i * 0.08} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-hairline bg-soft/40 transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:border-brass/40">
                  <div className="relative h-40">
                    <img
                      src={media.insights.featured[i]}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal/30" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass/70">
                        {insight.category}
                      </p>
                      <span className="rounded-sm border border-hairline px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-stone/45">
                        {insight.status}
                      </span>
                    </div>
                    <h3 className="mt-6 flex-1 font-serif text-2xl leading-snug text-offwhite transition-colors duration-300 group-hover:text-brass">
                      {insight.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone/60">
                      {insight.abstract}
                    </p>
                    <p className="mt-8 border-t border-hairline pt-5 text-xs italic text-stone/40">
                      Full note available on request in a confidential briefing.
                    </p>
                  </div>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="02"
            eyebrow="Categories"
            title="Four lines of editorial work."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {insightCategories.map((category, i) => (
              <AnimatedReveal key={category} delay={i * 0.05} className="bg-charcoal">
                <div className="group h-full bg-soft/30 p-8 transition-colors duration-300 hover:bg-soft/60">
                  <p className="font-serif text-3xl italic text-brass/50">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-xl text-offwhite">{category}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-stone/50">
                    {categoryNote(category)}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                index="03"
                eyebrow="Briefing signup"
                title="The PDSCOMM Briefing."
                lead="Occasional, substantive, and infrequent. When there is something worth saying, it arrives. No cadence theater."
              />
            </div>
            <div className="flex items-center lg:col-span-7">
              <AnimatedReveal className="w-full">
                <NewsletterSignup />
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Editorial standards */}
      <Section className="border-t border-hairline bg-soft/20">
        <Container>
          <SectionHeading
            index="04"
            eyebrow="Editorial standards"
            title="The rules of this publication."
          />
          <ul className="mt-12 space-y-5">
            {editorialStandards.map((standard, i) => (
              <AnimatedReveal key={standard} delay={i * 0.05}>
                <li className="flex items-start gap-5 border-b border-hairline pb-5">
                  <span className="shrink-0 font-serif text-lg italic text-brass/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-stone/70">{standard}</p>
                </li>
              </AnimatedReveal>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection
        eyebrow="Beyond editorial"
        title="Prefer a conversation to a read?"
        body="The briefings are the public layer. The private layer—your requirements, your constraints—starts with a 15-minute call."
        primaryLabel="Schedule a 15‑Minute Briefing"
        secondaryLabel="Submit Requirements"
      />
    </>
  );
}

function categoryNote(category: string): string {
  switch (category) {
    case "Procurement Notes":
      return "Frameworks, documentation, and process for AI buying.";
    case "AI Risk":
      return "Failure modes, diligence dimensions, and mitigations.";
    case "Market Maps":
      return "Capability landscapes across AI software categories.";
    case "Buyer Briefs":
      return "Practical guidance written for institutional decision-makers.";
    default:
      return "";
  }
}