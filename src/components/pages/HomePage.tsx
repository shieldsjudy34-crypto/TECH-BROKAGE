"use client";

import Link from "next/link";
import {
  FileSearch,
  ShieldCheck,
  Network,
  Eye,
  LineChart,
  AlertTriangle,
  Shield,
  GitBranch,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const pillars = [
  {
    icon: FileSearch,
    title: "Buyer Requirements Formulation",
    body: "Translating complex operational needs and institutional constraints into structured technology briefs that procurement teams, security officers, and technical evaluators can act on with clarity.",
  },
  {
    icon: Network,
    title: "Vendor Sourcing & Shortlisting",
    body: "Uncovering and validating elite AI providers aligned to rigid deployment environments, data-sovereignty mandates, and security guidelines—filtering noise before it reaches your evaluation board.",
  },
  {
    icon: ShieldCheck,
    title: "Evaluation & Due Diligence Support",
    body: "Accelerating the vetting process prior to pilot deployment by matching vendor architectures with institutional risk postures, producing comparative scorecards ready for acquisition review.",
  },
];

const capabilities = [
  {
    icon: FileSearch,
    title: "Document Intelligence & Semantic Knowledge Extraction",
    body: "High-volume OCR, context-aware parsing, federated enterprise search, and classified document workflows.",
  },
  {
    icon: Eye,
    title: "Large-Scale Computer Vision & Spatial Intelligence",
    body: "Multi-spectral analysis, edge inference, infrastructure monitoring, and spatial mapping systems.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics & High-Risk Operational Forecasting",
    body: "Mission-critical forecasting models for logistics, resource allocation, and contingency planning.",
  },
  {
    icon: AlertTriangle,
    title: "Fraud, Risk Management & Anomaly Detection",
    body: "Real-time anomaly surfaces, financial crime detection, and continuous risk-signal monitoring.",
  },
  {
    icon: Shield,
    title: "Enterprise Cyber Defense & Applied AI Security",
    body: "Threat-posture automation, telemetry analysis at scale, and vulnerability forecasting platforms.",
  },
  {
    icon: GitBranch,
    title: "MLOps, Model Governance & Automated Audit Tooling",
    body: "Drift monitoring, bias audits, model lineage, and production pipeline governance frameworks.",
  },
];

const phases = [
  {
    num: "01",
    title: "Initial Intake Briefing",
    body: "Identifying core parameters, operational bottlenecks, stakeholder constraints, and success criteria in a confidential discovery session.",
  },
  {
    num: "02",
    title: "Deep Technical Requirements Modeling",
    body: "Documenting deployment constraints, security requirements, data-handling rules, and architectural realities into a structured sourcing brief.",
  },
  {
    num: "03",
    title: "Sourcing, Sifting & Shortlisting",
    body: "Conducting exhaustive market scans across proprietary, established, and emerging AI tools—then filtering to a defensible shortlist.",
  },
  {
    num: "04",
    title: "Structured Evaluation Support",
    body: "Producing comparative scorecards, security posture maps, and performance runbooks that equip acquisition boards for decisive review.",
  },
  {
    num: "05",
    title: "Procurement Coordination",
    body: "Opening controlled vendor communication channels and managing structured onboarding through pilot readiness and commercial alignment.",
  },
];

const engagements = [
  {
    code: "Engagement Alpha",
    sector: "Telecommunications",
    title: "National-scale document synthesis & semantic search",
    body: "Sourced and diligence-qualified an AI document intelligence stack for a national telecom operator processing multi-million-page regulatory and operational corpora under strict data-residency controls.",
  },
  {
    code: "Engagement Beta",
    sector: "Critical Infrastructure",
    title: "High-throughput computer vision for infrastructure monitoring",
    body: "Identified and shortlisted vision platforms capable of multi-site edge deployment for continuous monitoring of energy and transport assets, with air-gap-compatible inference paths.",
  },
  {
    code: "Engagement Gamma",
    sector: "Global Logistics",
    title: "Predictive logistics & supply-chain anomaly modeling",
    body: "Structured a predictive ML sourcing mandate for a multinational shipping group, culminating in a dual-vendor shortlist with validated SLA and integration profiles.",
  },
];

const trustItems = [
  "NIST AI Risk Management Framework alignment",
  "SOC 2 expectation support across vendor evaluations",
  "Secure information-handling & least-privilege access",
  "NDA-first operations from initial contact",
  "Data sovereignty & residency path mapping",
  "Defense and civilian procurement pathway literacy",
];

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="relative section-pad min-h-[88vh] flex items-center">
        <div className="container-page w-full">
          <div className="max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-6">PDSCOMM / Global Sourcing</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                AI brokerage built for procurement-grade decisions.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="body-lg mt-7 max-w-2xl">
                PDSCOMM connects government and enterprise buyers with qualified
                AI software providers—supporting sourcing, evaluation, and due
                diligence from requirements to shortlist.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button href="/contact" size="lg" variant="primary">
                  Schedule a 15‑Minute Briefing
                </Button>
                <Button href="/buyers#intake" size="lg" variant="secondary">
                  Submit Requirements
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-12 text-xs uppercase tracking-wideLabel text-mutedStone font-sans">
                HQ California · Presence Dubai · Singapore · China
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 2. WHAT WE DO ─── */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Capabilities"
            title="Structured AI sourcing—end to end."
            description="Three integrated pillars that convert institutional intent into qualified, diligence-ready vendor shortlists."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Card className="h-full p-7 sm:p-8">
                  <div className="w-11 h-11 rounded-lg border border-hairline flex items-center justify-center text-brass mb-6">
                    <p.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl tracking-tighter2 text-stone mb-3">
                    {p.title}
                  </h3>
                  <p className="body-md">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. WHO WE SERVE ─── */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Two institutional paths. One standard of rigor."
            description="Whether you operate under public-sector constraints or regulated enterprise controls, our sourcing methodology adapts without diluting diligence."
          />
          <div className="mt-14 grid lg:grid-cols-2 gap-5">
            <Reveal>
              <Card className="h-full p-8 sm:p-10 group">
                <p className="eyebrow mb-4">Public Sector</p>
                <h3 className="font-serif text-2xl sm:text-3xl tracking-tighter2 text-stone mb-4">
                  Government Sourcing Paths
                </h3>
                <p className="body-md mb-8">
                  Sourcing optimized for security agency, civilian department,
                  and procurement office constraints—including clearance
                  compatibility, NDA regimes, and modern digital transformation
                  guidelines across federal and regional jurisdictions.
                </p>
                <Link
                  href="/buyers"
                  className="inline-flex items-center gap-2 text-sm text-brass hover:text-brassHover transition-colors font-sans group/link"
                >
                  Explore Public Sector Sourcing
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full p-8 sm:p-10">
                <p className="eyebrow mb-4">Private Sector</p>
                <h3 className="font-serif text-2xl sm:text-3xl tracking-tighter2 text-stone mb-4">
                  Enterprise Procurement Sourcing
                </h3>
                <p className="body-md mb-8">
                  Engineered for complex IT infrastructures, multi-region
                  regulatory compliance, and security standard controls—from
                  hybrid-cloud estates to air-gapped industrial environments
                  requiring absolute vendor accountability.
                </p>
                <Link
                  href="/buyers"
                  className="inline-flex items-center gap-2 text-sm text-brass hover:text-brassHover transition-colors font-sans group/link"
                >
                  Explore Enterprise Sourcing
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 4. CAPABILITY DOMAINS ─── */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Domain Map"
            title="Verified AI capability domains we navigate."
            description="Our network and evaluation frameworks span the domains institutional buyers most frequently mandate—each with domain-specific diligence vectors."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.06}>
                <Card className="h-full p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md border border-hairline flex items-center justify-center text-brass shrink-0 mt-0.5">
                      <c.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg tracking-tighter2 text-stone mb-2 leading-snug">
                        {c.title}
                      </h3>
                      <p className="body-md text-sm">{c.body}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-10 text-center">
              <Button href="/solutions" variant="secondary">
                Explore Solutions & Verticals
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 5. ENGAGEMENT MODEL TIMELINE ─── */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Engagement Model"
            title="A rigorous, multi-stage deployment cycle."
            description="From first confidential briefing to procurement coordination—every phase is documented, gated, and designed for institutional accountability."
          />
          <div className="mt-16 relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-hairline"
              aria-hidden
            />
            <ol className="space-y-0">
              {phases.map((phase, i) => (
                <Reveal key={phase.num} delay={i * 0.06}>
                  <li className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0">
                    <div className="relative z-10 shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-softCharcoal border border-brass/40 flex items-center justify-center">
                      <span className="text-[11px] font-sans tracking-wide text-brass">
                        {phase.num}
                      </span>
                    </div>
                    <div className="pt-1.5 sm:pt-2 pb-2">
                      <h3 className="font-serif text-xl sm:text-2xl tracking-tighter2 text-stone mb-2">
                        {phase.title}
                      </h3>
                      <p className="body-md max-w-xl">{phase.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── 6. PARTNER ECOSYSTEM ─── */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading
                eyebrow="Partner Ecosystem"
                title="Sourcing across validated architectures."
                description="We do not broker logos. We qualify software against the architectural and commercial realities that institutional deployments demand."
              />
            </div>
            <Reveal delay={0.1}>
              <div className="space-y-6">
                {[
                  {
                    t: "Data Sovereignty",
                    d: "Vendors are assessed for residency options, sovereign-cloud readiness, on-prem and air-gapped deployment paths, and contractual data-handling commitments.",
                  },
                  {
                    t: "Model Drift Transparency",
                    d: "We require clear documentation of training data provenance, update cadences, performance monitoring hooks, and explainability tooling available to the buyer.",
                  },
                  {
                    t: "System API Integrations",
                    d: "Evaluation includes integration surface quality, authentication models, rate and isolation controls, and compatibility with legacy enterprise middleware.",
                  },
                  {
                    t: "Service Agreements",
                    d: "Commercial and operational SLAs are stress-tested against institutional uptime, support, indemnity, and exit provisions before shortlist inclusion.",
                  },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="border-l border-brass/40 pl-5 py-1"
                  >
                    <h3 className="font-serif text-lg tracking-tighter2 text-stone mb-1.5">
                      {item.t}
                    </h3>
                    <p className="body-md text-sm">{item.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 7. TRUST & GOVERNANCE ─── */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Trust & Governance"
                title="Discretion as a foundational tenet."
                description="Every engagement operates under NDA-first protocols. Information is compartmentalized, access is least-privilege, and compliance pathways are mapped before commercial discussion begins."
              />
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <Button href="/trust" variant="secondary">
                    Review Trust & Compliance
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Card className="p-8 sm:p-10" static>
                <ul className="space-y-4">
                  {trustItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-brass shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-sm text-mutedStone font-sans leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 8. ENGAGEMENT PORTFOLIOS ─── */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Selected Work"
            title="Selected institutional engagements."
            description="Identifying details altered under strict NDA. These summaries illustrate the class of mandates we support—not marketing case studies."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {engagements.map((e, i) => (
              <Reveal key={e.code} delay={i * 0.08}>
                <Card className="h-full p-7 sm:p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] uppercase tracking-wideLabel text-brass font-sans">
                      {e.code}
                    </span>
                    <span className="text-[11px] uppercase tracking-wideLabel text-mutedStone font-sans">
                      {e.sector}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl tracking-tighter2 text-stone mb-3 leading-snug">
                    {e.title}
                  </h3>
                  <p className="body-md text-sm flex-1">{e.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 text-center text-xs text-mutedStone/60 font-sans">
              Identifying details altered under strict NDA.
            </p>
            <div className="mt-6 text-center">
              <Button href="/engagements" variant="secondary">
                View Engagement Portfolio
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 9. FOOTER CTA is in global Footer; add page-level close ─── */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page text-center">
          <Reveal>
            <p className="eyebrow mb-4">Next Step</p>
            <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl max-w-2xl mx-auto">
              Initiate your requirements review.
            </h2>
            <p className="body-lg mt-5 max-w-xl mx-auto">
              A confidential 15-minute briefing with a PDSCOMM broker—scoped to
              your sector, jurisdiction, and deployment environment.
            </p>
            <p className="mt-6 text-xs uppercase tracking-wideLabel text-mutedStone font-sans">
              California · Dubai · Singapore · China
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" size="lg" variant="primary">
                Schedule a 15‑Minute Briefing
              </Button>
              <Button href="/buyers#intake" size="lg" variant="secondary">
                Submit Sourcing Parameters
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
