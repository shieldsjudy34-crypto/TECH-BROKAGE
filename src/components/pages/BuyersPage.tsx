"use client";

import { useState, FormEvent } from "react";
import {
  Briefcase,
  Search,
  ClipboardCheck,
  Rocket,
  Eye,
  Database,
  Lock,
  Landmark,
  FileText,
  BarChart3,
  Shield,
  Map,
} from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const workflows = [
  {
    icon: Briefcase,
    title: "Advisory Mandates",
    body: "Strategic counsel for acquisition leadership defining AI roadmaps, budget envelopes, and risk appetite before formal sourcing begins.",
  },
  {
    icon: Search,
    title: "Standalone Sourcing Requests",
    body: "Targeted market scans against a defined requirements package—delivering a ranked shortlist with diligence annotations.",
  },
  {
    icon: ClipboardCheck,
    title: "Full-Cycle Validation",
    body: "End-to-end support from requirements modeling through comparative evaluation, security mapping, and pilot readiness.",
  },
  {
    icon: Rocket,
    title: "Pilot Coordination Support",
    body: "Structured facilitation of controlled pilots—success criteria, data-handling boundaries, and exit decision frameworks.",
  },
];

const diligenceVectors = [
  {
    icon: Eye,
    title: "Model Transparency",
    body: "Training data provenance, architecture disclosure levels, explainability interfaces, and update governance documentation.",
  },
  {
    icon: Database,
    title: "Data Custody Protocols",
    body: "Residency options, retention policies, subprocessors, encryption standards, and contractual data-return/destruction clauses.",
  },
  {
    icon: Lock,
    title: "Deployment Isolation Layers",
    body: "On-prem, VPC, sovereign cloud, and air-gapped paths—plus tenant isolation, key management, and network boundary controls.",
  },
  {
    icon: Landmark,
    title: "Financial Backing & Viability",
    body: "Capital runway, ownership structure, key-person risk, insurance posture, and long-term commercial sustainability signals.",
  },
];

const deliverables = [
  {
    icon: FileText,
    title: "Sourcing Briefing Report",
    body: "Executive-ready narrative of market landscape, shortlist rationale, and residual risk summary for board or procurement committees.",
  },
  {
    icon: BarChart3,
    title: "Comparative Evaluation Rubric",
    body: "Weighted scorecards across functional fit, security, integration, commercial terms, and operational readiness.",
  },
  {
    icon: Shield,
    title: "Architecture Security Audit Map",
    body: "Visual and narrative mapping of each candidate’s deployment topology against your threat and compliance model.",
  },
  {
    icon: Map,
    title: "Pilot Rollout Plan",
    body: "Phased pilot design with success metrics, data boundaries, stakeholder RACI, and go/no-go decision gates.",
  },
];

const matrixRows = [
  {
    demand: "High-volume classified document processing",
    architecture: "On-prem / air-gapped NLP + OCR stack",
    priority: "Data residency, model isolation",
  },
  {
    demand: "Multi-site infrastructure visual monitoring",
    architecture: "Edge CV inference + central analytics",
    priority: "Latency, offline resilience",
  },
  {
    demand: "Enterprise fraud & anomaly detection",
    architecture: "Streaming ML with explainability layer",
    priority: "False-positive control, audit trails",
  },
  {
    demand: "Sovereign cloud LLM knowledge assistant",
    architecture: "Region-locked LLM + RAG pipeline",
    priority: "Prompt/data leakage controls",
  },
  {
    demand: "Network threat posture automation",
    architecture: "Telemetry AI with SOC integration",
    priority: "Throughput, SIEM interoperability",
  },
];

export default function BuyersPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. Hero */}
      <section className="section-pad">
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">For Institutional Buyers</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl">
              Procurement-ready AI sourcing.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg mt-7 max-w-2xl">
              Empowering institutional acquisition teams with comparative data,
              absolute diligence, and verified AI vendor lists—structured for
              boards, security officers, and procurement authorities.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button href="#intake" size="lg">
                Begin Secure Intake
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Schedule a Briefing
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Engagement Workflows */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Engagement Workflows"
            title="Support calibrated to your mandate."
            description="Whether you need strategic counsel or a full evaluation cycle, each workflow inherits the same diligence standard."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflows.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <Card className="h-full p-6">
                  <div className="w-10 h-10 rounded-md border border-hairline flex items-center justify-center text-brass mb-5">
                    <w.icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg tracking-tighter2 text-stone mb-2">
                    {w.title}
                  </h3>
                  <p className="body-md text-sm">{w.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sourcing Specification */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionHeading
              eyebrow="The Sourcing Specification"
              title="Eliminate unqualified noise before it reaches evaluation."
              description="We design rigorous functional requirements documents that encode operational constraints, security baselines, integration realities, and commercial non-negotiables—so market scans begin from a defensible filter, not a wish list."
            />
            <Reveal delay={0.1}>
              <Card className="p-8" static>
                <p className="section-label mb-6">Specification Layers</p>
                <ol className="space-y-5">
                  {[
                    "Operational outcomes & success metrics",
                    "Deployment topology & network boundaries",
                    "Data classification & custody rules",
                    "Security & compliance baseline controls",
                    "Integration surfaces & legacy constraints",
                    "Commercial, SLA, and exit provisions",
                  ].map((item, i) => (
                    <li key={item} className="flex gap-4 items-start">
                      <span className="text-brass font-sans text-xs tracking-wide mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-mutedStone font-sans">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Diligence Vectors */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Diligence Vectors"
            title="How candidate vendors are inspected and compared."
            description="Four primary inspection axes—applied consistently so shortlists are comparable, auditable, and defensible under committee scrutiny."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {diligenceVectors.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 0.08}>
                <Card className="h-full p-7">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md border border-hairline flex items-center justify-center text-brass shrink-0">
                      <d.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl tracking-tighter2 text-stone mb-2">
                        {d.title}
                      </h3>
                      <p className="body-md text-sm">{d.body}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Government Pathway */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <Card className="p-8 sm:p-12 lg:p-14" static>
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow mb-4">Government-Specific Pathway</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="heading-section text-3xl sm:text-4xl mb-6">
                  Built for clearance, discretion, and public procurement mechanics.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="body-md mb-8">
                  Public-sector mandates introduce constraints that generic
                  technology marketplaces cannot accommodate. PDSCOMM maintains
                  dedicated pathways for civilian and defense environments—
                  covering clearance compatibility discussions, non-disclosure
                  regimes, multi-stakeholder approval chains, and alignment with
                  modern digital transformation guidelines without compromising
                  operational security posture.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Clearance-compatible engagement protocols",
                    "Civilian vs. defense procurement literacy",
                    "Multi-agency stakeholder coordination",
                    "Sovereign & classified environment readiness",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border border-hairline rounded-lg px-4 py-3 text-sm text-mutedStone font-sans"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Card>
        </div>
      </section>

      {/* 6. Sourcing Matrix */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Hypothetical Sourcing Matrix"
            title="Operational demand mapped to architecture."
            description="An illustrative model of how we translate institutional needs into architectural and diligence priorities—demonstrating analytical depth before engagement."
          />
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-xl border border-hairline bg-softCharcoal">
              <table className="premium-table min-w-[640px]">
                <thead>
                  <tr>
                    <th>Operational Demand</th>
                    <th>Indicative Architecture</th>
                    <th>Primary Diligence Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {matrixRows.map((row) => (
                    <tr key={row.demand}>
                      <td className="text-stone">{row.demand}</td>
                      <td>{row.architecture}</td>
                      <td>{row.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Deliverables */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Deliverables Suite"
            title="What your team receives."
            description="Core work products designed for acquisition boards, CISOs, and technical evaluation panels—not marketing decks."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <Card className="h-full p-6">
                  <div className="w-10 h-10 rounded-md border border-hairline flex items-center justify-center text-brass mb-5">
                    <d.icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg tracking-tighter2 text-stone mb-2">
                    {d.title}
                  </h3>
                  <p className="body-md text-sm">{d.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Intake Form */}
      <section id="intake" className="section-pad border-t border-hairline scroll-mt-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="Secure Intake Terminal"
            title="Submit your sourcing parameters."
            description="Information is handled under NDA-first protocols. Fields marked for institutional authority ensure routing to the correct brokerage desk."
            align="center"
            className="mb-12"
          />
          <Reveal delay={0.1}>
            {submitted ? (
              <Card className="p-10 text-center" static>
                <p className="eyebrow mb-3">Transmission Received</p>
                <h3 className="font-serif text-2xl tracking-tighter2 text-stone mb-3">
                  Your intake has been logged securely.
                </h3>
                <p className="body-md">
                  A PDSCOMM broker will respond within one business day in your
                  operational timezone. Do not transmit classified material
                  through this channel.
                </p>
              </Card>
            ) : (
              <Card className="p-8 sm:p-10" static>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="b-name">
                        Contact Authority
                      </label>
                      <input
                        id="b-name"
                        name="name"
                        required
                        className="input-field"
                        placeholder="Full name & title"
                      />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="b-org">
                        Organization
                      </label>
                      <input
                        id="b-org"
                        name="org"
                        required
                        className="input-field"
                        placeholder="Institution or enterprise"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="b-email">
                        Secure Email
                      </label>
                      <input
                        id="b-email"
                        name="email"
                        type="email"
                        required
                        className="input-field"
                        placeholder="name@institution.gov"
                      />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="b-sector">
                        Organizational Sector
                      </label>
                      <select id="b-sector" name="sector" required className="input-field">
                        <option value="">Select sector</option>
                        <option>Government — Civilian</option>
                        <option>Government — Defense / Security</option>
                        <option>Enterprise — Regulated</option>
                        <option>Enterprise — Critical Infrastructure</option>
                        <option>Other Institutional</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="b-env">
                        Deployment Environment
                      </label>
                      <select id="b-env" name="env" required className="input-field">
                        <option value="">Select environment</option>
                        <option>Public / Private Cloud</option>
                        <option>Hybrid Cloud</option>
                        <option>On-Premises</option>
                        <option>Air-Gapped / Classified</option>
                        <option>Multi-Environment</option>
                      </select>
                    </div>
                    <div>
                      <label className="label-field" htmlFor="b-scale">
                        Data Scale
                      </label>
                      <select id="b-scale" name="scale" className="input-field">
                        <option value="">Select scale</option>
                        <option>Departmental</option>
                        <option>Enterprise-wide</option>
                        <option>National / Multi-entity</option>
                        <option>To be determined</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="b-timeline">
                      Delivery Timeline
                    </label>
                    <select id="b-timeline" name="timeline" className="input-field">
                      <option value="">Select timeline</option>
                      <option>Immediate (0–30 days)</option>
                      <option>Near-term (1–3 months)</option>
                      <option>Planned cycle (3–9 months)</option>
                      <option>Strategic (9+ months)</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="b-notes">
                      Requirements Summary
                    </label>
                    <textarea
                      id="b-notes"
                      name="notes"
                      className="input-field"
                      placeholder="Describe operational need, constraints, and any non-classified context relevant to sourcing."
                      rows={5}
                    />
                  </div>
                  <p className="text-xs text-mutedStone/70 font-sans">
                    By submitting, you acknowledge NDA-first handling. Do not
                    include classified, export-controlled, or personally sensitive
                    data in this form.
                  </p>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Secure Intake
                  </Button>
                </form>
              </Card>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
