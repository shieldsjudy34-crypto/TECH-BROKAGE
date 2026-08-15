"use client";

import {
  Package,
  Building2,
  Radio,
  Target,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const cases = [
  {
    id: "01",
    icon: Package,
    sector: "Global Logistics",
    title: "Global Logistics Analytics Sourcing",
    challenge:
      "A multinational shipping group required predictive ML capabilities to anticipate port congestion, equipment imbalance, and route disruption—without exposing proprietary operational data to multi-tenant public AI services.",
    profile:
      "Predictive analytics platforms with on-prem or VPC deployment, strong time-series and graph modeling, and documented integration with existing TMS and ERP estates.",
    sifting:
      "Market scan covered 40+ vendors; automated demos and pure SaaS-only offerings were eliminated early. Twelve candidates entered structured technical review.",
    security:
      "Diligence emphasized data residency, model training data boundaries, tenant isolation, and right-to-audit clauses. Three vendors failed key-management or subprocessors review.",
    shortlist:
      "Dual-vendor shortlist delivered with comparative scorecards, pilot designs, and commercial term annotations for procurement negotiation.",
    outcome:
      "Client advanced a controlled pilot with the primary shortlist vendor; secondary retained as competitive and continuity option. Twelve-month SLA framework established pre-award.",
  },
  {
    id: "02",
    icon: Building2,
    sector: "Civilian Government",
    title: "Civilian Agency Multi-Source AI Implementation",
    challenge:
      "A civilian agency needed secure OCR and semantic processing across several regional government databases—without violating citizen privacy rules or creating unlawful cross-system data fusion.",
    profile:
      "Document intelligence stacks supporting federated search with inherited access controls, on-prem inference, and privacy-preserving retrieval patterns.",
    sifting:
      "Emphasis on vendors with public-sector deployment history and willingness to support jurisdiction-specific data minimization designs.",
    security:
      "Privacy impact considerations, encryption standards, logging of access to citizen-related records, and clear separation between index metadata and content payloads.",
    shortlist:
      "Three-vendor shortlist with architecture diagrams showing how each would respect regional database boundaries while enabling authorized cross-repository query.",
    outcome:
      "Agency selected a phased rollout beginning with two regions; PDSCOMM supported pilot success criteria definition and redacted reference coordination under mutual NDA.",
  },
  {
    id: "03",
    icon: Radio,
    sector: "Telecommunications",
    title: "Telecommunications Network Defense AI",
    challenge:
      "A national telecom operator required high-throughput cyber AI capable of managing terabytes of raw telemetry under peak network load, with SOC integration and strict change-control on detection models.",
    profile:
      "Defensive cyber AI platforms with proven multi-Tbps-class telemetry handling (or equivalent horizontal scale), SIEM/SOAR interoperability, and model governance for detection logic updates.",
    sifting:
      "Load-test evidence and reference architecture review were mandatory. Marketing claims without reproducible throughput data were disqualified.",
    security:
      "Supply-chain review of detection content updates, secure model distribution, role-based analyst access, and air-gap update packaging options for sensitive network segments.",
    shortlist:
      "Two platforms advanced with full security audit maps and a 90-day pilot runbook including false-positive budgets and escalation SLAs.",
    outcome:
      "Operator executed a dual-track evaluation pilot; primary vendor entered commercial negotiation with escrow and continuous assurance provisions.",
  },
];

const verification = [
  {
    title: "Performance SLA Tracking",
    body: "Accuracy, latency, and throughput metrics collected against the baselines established at shortlist—reviewed at 30/90/180/365 day gates.",
  },
  {
    title: "Security Posture Continuity",
    body: "Re-validation of control environment changes, new subprocessors, and material architecture shifts that could alter original risk acceptance.",
  },
  {
    title: "Operational Adoption Signals",
    body: "Usage, escalation rates, and human-override patterns that indicate whether the deployed system is delivering institutional value—or creating shadow work.",
  },
  {
    title: "Commercial Health Indicators",
    body: "Support responsiveness, roadmap delivery against commitments, and financial stability signals relevant to multi-year dependency risk.",
  },
];

export default function EngagementsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="section-pad">
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">Engagement Portfolio</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl">
              Selected client engagements.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg mt-7 max-w-2xl">
              A structured portfolio of our sourcing, diligence, and advisory
              impact. Due to confidentiality agreements, identifying markers have
              been generalized.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2–4 Case Studies */}
      {cases.map((c, idx) => (
        <section
          key={c.id}
          className="section-pad border-t border-hairline"
          id={`case-${c.id}`}
        >
          <div className="container-page">
            <Reveal>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-brass font-sans text-xs tracking-wideLabel">
                  Case Study {c.id}
                </span>
                <span className="text-mutedStone font-sans text-xs tracking-wideLabel uppercase">
                  {c.sector}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex items-start gap-4 mb-10 max-w-3xl">
                <div className="w-12 h-12 rounded-lg border border-hairline flex items-center justify-center text-brass shrink-0">
                  <c.icon size={22} strokeWidth={1.5} />
                </div>
                <h2 className="heading-section text-3xl sm:text-4xl">
                  {c.title}
                </h2>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-5">
              {[
                { label: "The Challenge", text: c.challenge },
                { label: "The Sourcing Profile", text: c.profile },
                { label: "Sifting Process", text: c.sifting },
                { label: "Security Vetting", text: c.security },
                { label: "Final Shortlist Selection", text: c.shortlist },
                { label: "Operational Outcome", text: c.outcome },
              ].map((block, i) => (
                <Reveal key={block.label} delay={0.06 + i * 0.04}>
                  <Card className="h-full p-6 sm:p-7" static={idx === 0 && i === 0}>
                    <p className="section-label mb-3">{block.label}</p>
                    <p className="body-md text-sm">{block.text}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* 5. Verification Framework */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Verification Framework"
            title="Post-deployment metrics over a 12-month horizon."
            description="Selection is not the finish line. We structure optional post-deployment verification so institutions can confirm vendors meet performance and accuracy SLAs—and act if they do not."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {verification.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.08}>
                <Card className="h-full p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <Target size={18} className="text-brass" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl tracking-tighter2 text-stone">
                      {v.title}
                    </h3>
                  </div>
                  <p className="body-md text-sm">{v.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Request Reference Review */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <Card className="p-8 sm:p-12 text-center" static>
            <Reveal>
              <p className="eyebrow mb-4">Reference Review</p>
              <h2 className="heading-section text-3xl sm:text-4xl max-w-2xl mx-auto mb-5">
                Request detailed, redacted summaries under mutual NDA.
              </h2>
              <p className="body-md max-w-xl mx-auto mb-8">
                Institutional teams may request expanded engagement summaries or
                organize legal-to-legal briefing calls. Identifying client details
                remain protected; substance is shared only under appropriate
                confidentiality instruments.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contact" size="lg">
                  Request Reference Review
                  <ArrowRight size={16} />
                </Button>
                <Button href="/trust#hotline" size="lg" variant="secondary">
                  Compliance Desk
                </Button>
              </div>
            </Reveal>
          </Card>
        </div>
      </section>
    </>
  );
}
