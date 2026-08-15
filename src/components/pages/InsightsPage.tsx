"use client";

import { useState, FormEvent } from "react";
import { BookOpen, TrendingUp, Archive, ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const briefs = [
  {
    tag: "Model Risk",
    title:
      "Evaluating Vendor Models for Drift and Accuracy Erosion in Public Sector Operations",
    excerpt:
      "A practical framework for acquisition teams to demand measurable drift monitoring, baseline re-validation cadences, and contractual remedies when production accuracy degrades below accepted thresholds.",
    read: "14 min",
  },
  {
    tag: "Document AI",
    title:
      "A Pragmatic Framework for Sourcing Enterprise-Ready Document AI Pipelines",
    excerpt:
      "From OCR quality under degraded scans to access-control inheritance in federated search—how to structure requirements that eliminate demo-ware before shortlist.",
    read: "11 min",
  },
  {
    tag: "Legal Horizon",
    title:
      "The Emerging Legal Landscape of Autonomous Agent Tool Deployments in Regulated Markets",
    excerpt:
      "Accountability assignment, audit trails, and procurement language for agentic systems that take actions—not merely generate recommendations—inside enterprise and government estates.",
    read: "16 min",
  },
];

const indexData = [
  { label: "On-Prem / Air-Gapped", value: 34, note: "Preferred deployment path mentions" },
  { label: "Sovereign / Regional Cloud", value: 28, note: "Residency-constrained mandates" },
  { label: "Hybrid VPC", value: 22, note: "Private networking with managed control plane" },
  { label: "Multi-tenant SaaS", value: 16, note: "Accepted only with strong isolation proofs" },
];

const categoryMix = [
  { label: "Document Intelligence", pct: 27 },
  { label: "Cyber / Defensive AI", pct: 22 },
  { label: "Predictive Operations", pct: 19 },
  { label: "Computer Vision", pct: 17 },
  { label: "MLOps & Governance", pct: 15 },
];

export default function InsightsPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [archiveSent, setArchiveSent] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <>
      {/* 1. Hero */}
      <section className="section-pad">
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">Insights & Briefs</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl">
              Market intelligence for decision makers.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg mt-7 max-w-2xl">
              Occasional research, analytical briefs, and legal updates outlining
              the dynamic intersection of state-level regulations and enterprise AI
              software—written for acquisition leadership, not content marketing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Featured Intelligence Note */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <Reveal>
            <Card className="p-8 sm:p-12 lg:p-14 overflow-hidden relative">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(176,141,87,0.08), transparent 55%)",
                }}
              />
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen size={16} className="text-brass" strokeWidth={1.5} />
                  <p className="eyebrow mb-0">Featured Intelligence Note</p>
                </div>
                <h2 className="heading-section text-2xl sm:text-3xl lg:text-4xl mb-5">
                  The Rise of Private Sovereign Cloud Architectures in Regional
                  Procurement Environments
                </h2>
                <p className="body-md mb-6 max-w-2xl">
                  Across GCC, APAC, and selected European programs, procurement
                  language is shifting from “cloud-first” to “sovereignty-capable.”
                  This note examines how residency, operational control, and legal
                  process exposure are reshaping AI vendor shortlists—and what
                  buyers should demand in architecture annexes before pilot.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-mutedStone">
                  <span className="uppercase tracking-wideLabel text-brass">
                    Strategic Brief
                  </span>
                  <span>·</span>
                  <span>22 min read</span>
                  <span>·</span>
                  <span>Updated Q2 2026</span>
                </div>
                <div className="mt-8">
                  <Button href="/contact" variant="secondary">
                    Request Full Brief
                    <ArrowUpRight size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* 3. Insights Grid */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Recent Briefs"
            title="Intelligence notes for institutional readers."
            description="Each brief is available under confidentiality filters upon request. Public abstracts below."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {briefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <Card className="h-full p-7 flex flex-col">
                  <p className="text-[11px] uppercase tracking-wideLabel text-brass font-sans mb-4">
                    {b.tag}
                  </p>
                  <h3 className="font-serif text-xl tracking-tighter2 text-stone mb-3 leading-snug flex-1">
                    {b.title}
                  </h3>
                  <p className="body-md text-sm mb-6">{b.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-hairline">
                    <span className="text-xs text-mutedStone font-sans">
                      {b.read} read
                    </span>
                    <Button href="/contact" size="sm" variant="secondary">
                      Request
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Monthly Brief Signup */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page max-w-2xl">
          <SectionHeading
            eyebrow="Monthly Market Intelligence Brief"
            title="Private paper for institutional leaders."
            description="A concise monthly digest on regulatory shifts, deployment pattern trends, and diligence themes observed across active mandates. Distributed to verified institutional addresses only."
            align="center"
            className="mb-10"
          />
          <Reveal delay={0.1}>
            {subscribed ? (
              <Card className="p-8 text-center" static>
                <p className="eyebrow mb-3">Subscription Noted</p>
                <p className="body-md">
                  If your address passes institutional verification, the next brief
                  will arrive through our secure distribution list.
                </p>
              </Card>
            ) : (
              <Card className="p-8" static>
                <form onSubmit={handleSubscribe} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-field" htmlFor="i-name">
                        Name
                      </label>
                      <input id="i-name" required className="input-field" />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="i-org">
                        Organization
                      </label>
                      <input id="i-org" required className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="i-email">
                      Institutional Email
                    </label>
                    <input
                      id="i-email"
                      type="email"
                      required
                      className="input-field"
                      placeholder="name@institution.gov"
                    />
                  </div>
                  <p className="text-xs text-mutedStone/70 font-sans">
                    Consumer and unverified domains are not accepted. Unsubscribe
                    available on every issue.
                  </p>
                  <Button type="submit" size="lg">
                    Request Monthly Brief
                  </Button>
                </form>
              </Card>
            )}
          </Reveal>
        </div>
      </section>

      {/* 5. Sourcing Index */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Sourcing Index"
            title="Observed preferences across active mandates."
            description="Illustrative aggregates from anonymized engagement patterns—reinforcing market expertise, not a public league table. Figures are directional."
          />
          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <Reveal>
              <Card className="p-7 sm:p-8 h-full" static>
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp size={16} className="text-brass" strokeWidth={1.5} />
                  <p className="section-label mb-0">Deployment Platform Preference</p>
                </div>
                <div className="space-y-5">
                  {indexData.map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-sm font-sans mb-2">
                        <span className="text-stone">{row.label}</span>
                        <span className="text-brass">{row.value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-charcoal overflow-hidden">
                        <div
                          className="h-full rounded-full bg-brass/70 transition-all duration-700 ease-premium"
                          style={{ width: `${row.value}%` }}
                        />
                      </div>
                      <p className="text-xs text-mutedStone/70 font-sans mt-1.5">
                        {row.note}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-7 sm:p-8 h-full" static>
                <p className="section-label mb-6">AI Category Mix in Mandates</p>
                <div className="space-y-5">
                  {categoryMix.map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-sm font-sans mb-2">
                        <span className="text-stone">{row.label}</span>
                        <span className="text-mutedStone">{row.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-charcoal overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[rgba(231,225,215,0.35)]"
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-xs text-mutedStone/60 font-sans">
                  Based on anonymized mandate categorizations. Not investment advice
                  or market sizing.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Archive Request */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <Card className="p-8 sm:p-12" static>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Reveal>
                  <div className="flex items-center gap-2 mb-4">
                    <Archive size={16} className="text-brass" strokeWidth={1.5} />
                    <p className="eyebrow mb-0">Archive Request</p>
                  </div>
                  <h2 className="heading-section text-3xl sm:text-4xl mb-4">
                    Historic vault of research and vendor landscape maps.
                  </h2>
                  <p className="body-md">
                    Institutional teams may request access to prior briefs and
                    redacted landscape maps under strict confidentiality filters.
                    Approval is discretionary and role-verified.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.1}>
                {archiveSent ? (
                  <div className="text-center sm:text-left">
                    <p className="eyebrow mb-2">Request Received</p>
                    <p className="body-md">
                      Our intelligence desk will respond if your role and
                      organization qualify for archive access.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setArchiveSent(true);
                    }}
                    className="space-y-4"
                  >
                    <input
                      required
                      className="input-field"
                      placeholder="Name & title"
                    />
                    <input
                      required
                      type="email"
                      className="input-field"
                      placeholder="Institutional email"
                    />
                    <input
                      required
                      className="input-field"
                      placeholder="Organization"
                    />
                    <Button type="submit" size="lg" className="w-full">
                      Request Archive Access
                    </Button>
                  </form>
                )}
              </Reveal>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
