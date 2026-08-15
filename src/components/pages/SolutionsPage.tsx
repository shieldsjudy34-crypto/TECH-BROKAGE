"use client";

import { useState } from "react";
import {
  FileText,
  Eye,
  Shield,
  GitBranch,
  Server,
  ArrowLeftRight,
} from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const deepDives = [
  {
    id: "document",
    icon: FileText,
    eyebrow: "Domain 01",
    title: "Document Intelligence",
    lead: "Sourcing solutions for extreme-volume semantic text processing, context-aware information parsing, and federated search systems.",
    points: [
      "Multi-format OCR and layout-aware extraction at institutional scale",
      "Semantic retrieval over classified and regulated corpora",
      "Cross-repository federated search with access-control inheritance",
      "Human-in-the-loop review workflows for high-stakes extraction",
      "Language coverage and domain-adaptation pathways",
    ],
  },
  {
    id: "vision",
    icon: Eye,
    eyebrow: "Domain 02",
    title: "Computer Vision & Sensors",
    lead: "Multi-spectral processing, real-time edge inference, security monitoring, and spatial scanning AI software for critical environments.",
    points: [
      "Edge deployment profiles for bandwidth-constrained sites",
      "Multi-spectral and thermal fusion pipelines",
      "Continuous infrastructure and perimeter monitoring",
      "Spatial mapping and change-detection systems",
      "Air-gap and offline model update strategies",
    ],
  },
  {
    id: "cyber",
    icon: Shield,
    eyebrow: "Domain 03",
    title: "Defensive Cyber AI",
    lead: "Automated network threat posture management, vulnerability forecasting, and rapid telemetry analysis under enterprise load.",
    points: [
      "High-throughput telemetry ingestion and correlation",
      "Threat-posture automation integrated with SOC tooling",
      "Vulnerability forecasting and prioritization models",
      "Adversarial resilience and model hardening documentation",
      "SIEM / SOAR interoperability requirements",
    ],
  },
  {
    id: "mlops",
    icon: GitBranch,
    eyebrow: "Domain 04",
    title: "MLOps & Model Audit",
    lead: "Software designed to monitor bias, track drift, audit models, and manage complex training pipelines under governance mandates.",
    points: [
      "Model lineage, versioning, and approval workflows",
      "Drift and performance degradation monitoring",
      "Bias and fairness audit instrumentation",
      "Secure training pipeline controls",
      "Regulatory evidence pack generation",
    ],
  },
];

const comparison = [
  {
    aspect: "Integration Depth",
    generic: "REST wrappers over hosted APIs; limited control plane",
    bespoke: "Deep connectors, private networking, custom auth federation",
  },
  {
    aspect: "Data Custody",
    generic: "Vendor-cloud processing; shared tenancy defaults",
    bespoke: "Buyer-controlled residency, BYOK, air-gap options",
  },
  {
    aspect: "Model Governance",
    generic: "Opaque updates; limited audit export",
    bespoke: "Version pins, change logs, buyer approval gates",
  },
  {
    aspect: "Security Review",
    generic: "Standard SaaS questionnaire responses",
    bespoke: "Architecture deep-dives, isolation proofs, pen-test history",
  },
  {
    aspect: "Commercial Fit",
    generic: "Self-serve tiers; weak indemnity",
    bespoke: "Institutional MSA, SLA, exit and escrow provisions",
  },
];

const sandboxInputs = [
  "Documents / Text Corpora",
  "Video & Sensor Streams",
  "Network Telemetry",
  "Structured Enterprise Data",
  "Multi-modal Mix",
];

const sandboxCompliance = [
  "GDPR / EU",
  "US Federal Expectations",
  "Sovereign Cloud (GCC / SG)",
  "Air-Gapped / Classified",
  "SOC 2 Enterprise Baseline",
];

const sandboxRegions = [
  "North America",
  "EMEA",
  "APAC",
  "Multi-Region",
];

export default function SolutionsPage() {
  const [input, setInput] = useState(sandboxInputs[0]);
  const [compliance, setCompliance] = useState(sandboxCompliance[0]);
  const [region, setRegion] = useState(sandboxRegions[0]);

  const questions = [
    `What classification level and retention rules apply to ${input.toLowerCase()} in your environment?`,
    `Which ${compliance} controls are non-negotiable versus aspirational for this mandate?`,
    `Must inference and training remain within ${region}, or is cross-border processing permitted under contract?`,
    "What legacy systems must the selected architecture integrate with in phase one?",
    "What accuracy, latency, and false-positive thresholds define pilot success?",
    "Who holds go/no-go authority across security, procurement, and operations?",
  ];

  return (
    <>
      {/* 1. Hero */}
      <section className="section-pad">
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">Solutions & Verticals</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl">
              Engineered applications for critical systems.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg mt-7 max-w-2xl">
              Sourcing capabilities built to integrate with existing legacy
              enterprise platforms and classified network environments—not greenfield
              demos detached from operational reality.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10">
              <Button href="#sandbox" size="lg">
                Open Sourcing Sandbox
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2–5 Deep Dives */}
      {deepDives.map((d, idx) => (
        <section
          key={d.id}
          className="section-pad border-t border-hairline"
          id={d.id}
        >
          <div className="container-page">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <Reveal>
                  <p className="eyebrow mb-4">{d.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.05}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg border border-hairline flex items-center justify-center text-brass">
                      <d.icon size={22} strokeWidth={1.5} />
                    </div>
                    <h2 className="heading-section text-3xl sm:text-4xl">
                      {d.title}
                    </h2>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="body-lg">{d.lead}</p>
                </Reveal>
              </div>
              <Reveal delay={0.12}>
                <Card className="p-7 sm:p-8" static>
                  <p className="section-label mb-5">Sourcing Focus Areas</p>
                  <ul className="space-y-4">
                    {d.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-3 text-sm text-mutedStone font-sans leading-relaxed"
                      >
                        <span className="text-brass mt-1 shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* 6. Legacy Integration */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionHeading
              eyebrow="Legacy Integration Paradigms"
              title="Vendors must meet the estate where it lives."
              description="Institutional AI rarely deploys on a clean slate. Hybrid clouds, private air-gapped systems, and older enterprise databases define the real integration surface."
            />
            <Reveal delay={0.1}>
              <div className="space-y-5">
                {[
                  {
                    icon: Server,
                    t: "Hybrid Cloud Estates",
                    d: "Workloads split across private and public zones require vendors who support private networking, controlled egress, and consistent identity across boundaries.",
                  },
                  {
                    t: "Air-Gapped Environments",
                    d: "Update mechanisms, license validation, and model refresh paths must function without persistent external connectivity—documented and tested, not assumed.",
                  },
                  {
                    t: "Legacy Data Platforms",
                    d: "Mainframe extracts, aging ERP schemas, and proprietary message buses demand connectors and transformation layers that procurement can evaluate for risk.",
                  },
                ].map((item) => (
                  <Card key={item.t} className="p-6">
                    <h3 className="font-serif text-lg tracking-tighter2 text-stone mb-2">
                      {item.t}
                    </h3>
                    <p className="body-md text-sm">{item.d}</p>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Comparative Case Modeling */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Comparative Case Modeling"
            title="Generic API calls versus deep deployments."
            description="Side-by-side contrast establishing why institutional mandates require more than developer-platform convenience."
          />
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-xl border border-hairline bg-softCharcoal">
              <table className="premium-table min-w-[700px]">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Generic API Approach</th>
                    <th>Bespoke / Institutional Deployment</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.aspect}>
                      <td className="text-stone font-medium">{row.aspect}</td>
                      <td>{row.generic}</td>
                      <td>{row.bespoke}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 flex items-center gap-2 text-sm text-mutedStone font-sans justify-center">
              <ArrowLeftRight size={14} className="text-brass" />
              PDSCOMM evaluates candidates against the right-hand column by default.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. Interactive Sandbox */}
      <section id="sandbox" className="section-pad border-t border-hairline scroll-mt-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Interactive Sourcing Sandbox"
            title="Configure a sample architecture brief."
            description="Select inputs, compliance posture, and region. The sandbox surfaces structural questions your briefing must answer—illustrating the rigor of a PDSCOMM intake."
            align="center"
            className="mb-12"
          />
          <Reveal delay={0.1}>
            <Card className="p-8 sm:p-10 max-w-4xl mx-auto" static>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div>
                  <label className="label-field">Primary Inputs</label>
                  <select
                    className="input-field"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  >
                    {sandboxInputs.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label-field">Compliance Posture</label>
                  <select
                    className="input-field"
                    value={compliance}
                    onChange={(e) => setCompliance(e.target.value)}
                  >
                    {sandboxCompliance.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label-field">Primary Region</label>
                  <select
                    className="input-field"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    {sandboxRegions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t border-hairline pt-8">
                <p className="section-label mb-5">
                  Structural Questions for Your Briefing
                </p>
                <ol className="space-y-4">
                  {questions.map((q, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-brass font-sans text-xs tracking-wide shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-mutedStone font-sans leading-relaxed">
                        {q}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button href="/contact" size="lg">
                  Schedule Briefing with This Context
                </Button>
                <Button href="/buyers#intake" size="lg" variant="secondary">
                  Submit Full Requirements
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
