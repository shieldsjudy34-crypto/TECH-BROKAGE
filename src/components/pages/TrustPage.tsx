"use client";

import {
  Lock,
  Shield,
  FileKey,
  Scale,
  Globe2,
  Phone,
  CheckCircle2,
  Eye,
  KeyRound,
  Cloud,
  Code2,
} from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const handling = [
  {
    title: "NDA-First Frameworks",
    body: "Mutual non-disclosure precedes substantive information exchange. Engagement-specific NDAs layer atop standing agreements when sensitivity requires compartmentalization.",
  },
  {
    title: "Air-Gapped Workspace Methodologies",
    body: "For elevated sensitivity, review work can proceed in controlled environments with no persistent external connectivity and strict media control procedures.",
  },
  {
    title: "Least-Privilege Access Profiles",
    body: "Personnel access to engagement materials is role-scoped, time-bounded, and logged. Need-to-know is operational policy, not aspiration.",
  },
];

const pillars = [
  {
    title: "NIST AI Risk Management Alignment",
    body: "Our evaluation frameworks map to NIST AI RMF functions—Govern, Map, Measure, Manage—so buyer organizations can situate vendor risk within recognized national guidance rather than ad-hoc checklists.",
  },
  {
    title: "SOC 2 Expectation Support",
    body: "We assess vendor control environments against the trust services criteria institutional buyers commonly require, flagging gaps early and documenting evidence quality—not merely certificate possession.",
  },
  {
    title: "Defense Acquisition Security Criteria",
    body: "Where mandates intersect defense or dual-use sensitivity, we incorporate acquisition security considerations including supply-chain scrutiny, personnel pathways, and deployment isolation expectations.",
  },
];

const auditItems = [
  { icon: Code2, title: "Source & Build Integrity", items: ["Secure SDLC evidence", "Dependency provenance", "Signed artifacts / SBOM readiness"] },
  { icon: Lock, title: "Encryption & Transport", items: ["Data-at-rest standards", "TLS / mutual auth posture", "Secrets handling practices"] },
  { icon: KeyRound, title: "Key Management", items: ["BYOK / HYOK options", "HSM / KMS integration", "Rotation & escrow policies"] },
  { icon: Cloud, title: "Cloud Isolation Layers", items: ["Tenant isolation model", "Network boundary controls", "Region pinning & residency"] },
];

const rai = [
  "Explainable AI requirements matched to decision criticality",
  "Bias audit standards for high-impact automated decisions",
  "Model audit trails and change-control documentation",
  "Human oversight and escalation design expectations",
  "Accountability assignment across vendor and buyer roles",
  "Incident response for model failure and misuse scenarios",
];

const geos = [
  {
    region: "European Union",
    focus: "GDPR & emerging AI regulatory regimes",
    detail:
      "Data-processing roles, lawful bases, DPIA readiness, and cross-border transfer mechanisms are evaluated as first-class diligence items for EU-touching deployments.",
  },
  {
    region: "Singapore & GCC",
    focus: "Sovereign cloud architectures",
    detail:
      "Regional buyers increasingly mandate sovereign or locally controlled infrastructure. We map vendor readiness for residency, local support, and jurisdictional legal process exposure.",
  },
  {
    region: "United States Federal",
    focus: "Federal expectations & agency norms",
    detail:
      "Alignment with federal security baselines, authorization pathways, and agency-specific acquisition practices informs shortlist viability for public-sector mandates.",
  },
];

export default function TrustPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="section-pad">
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">Trust & Compliance</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl">
              Architected for maximum security.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg mt-7 max-w-2xl">
              A meticulous approach to data custody, system evaluations, and
              transaction security across global jurisdictions—because institutional
              trust is earned through procedure, not claims.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10">
              <Button href="#hotline" size="lg" variant="secondary">
                Contact Compliance Desk
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Information-Handling */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Information-Handling Posture"
            title="How sensitive material is protected in motion and at rest."
            description="Discretion is operationalized through frameworks that govern every engagement from first contact."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {handling.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <Card className="h-full p-7">
                  <div className="w-10 h-10 rounded-md border border-hairline flex items-center justify-center text-brass mb-5">
                    <Lock size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl tracking-tighter2 text-stone mb-3">
                    {h.title}
                  </h3>
                  <p className="body-md text-sm">{h.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Vetting Standards */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Vetting Standards"
            title="Compliance pillars that structure every evaluation."
            description="We do not invent proprietary risk theater. We align operational practice with recognized frameworks institutional stakeholders already trust."
          />
          <div className="mt-14 space-y-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <Card className="p-7 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="w-11 h-11 rounded-lg border border-hairline flex items-center justify-center text-brass shrink-0">
                      <Shield size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl tracking-tighter2 text-stone mb-3">
                        {p.title}
                      </h3>
                      <p className="body-md max-w-3xl">{p.body}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vendor Security Audit Checklist */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Vendor Security Audit Checklist"
            title="What we examine in candidate systems."
            description="A technical checklist spanning source integrity, cryptography, key management, and cloud isolation—applied before shortlist inclusion."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {auditItems.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <Card className="h-full p-6" static>
                  <div className="w-10 h-10 rounded-md border border-hairline flex items-center justify-center text-brass mb-5">
                    <a.icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg tracking-tighter2 text-stone mb-4">
                    {a.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {a.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-mutedStone font-sans flex gap-2"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-brass shrink-0 mt-0.5"
                          strokeWidth={1.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Responsible AI */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Responsible AI & Governance"
                title="Accountability beyond the model card."
                description="Enterprise and public deployments require explainability, bias controls, audit trails, and clear accountability—especially where automated decisions affect rights, safety, or material resources."
              />
            </div>
            <Reveal delay={0.1}>
              <Card className="p-8" static>
                <div className="flex items-center gap-2 mb-6">
                  <Scale size={18} className="text-brass" strokeWidth={1.5} />
                  <p className="section-label mb-0">Governance Expectations</p>
                </div>
                <ul className="space-y-4">
                  {rai.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Eye
                        size={16}
                        className="text-brass shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-sm text-mutedStone font-sans">
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

      {/* 6. Global Regulatory Geographies */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Global Regulatory Geographies"
            title="Local compliance, global operating standard."
            description="Cross-border mandates require geography-specific literacy. We maintain working knowledge of the regimes that most frequently shape our clients’ constraints."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {geos.map((g, i) => (
              <Reveal key={g.region} delay={i * 0.08}>
                <Card className="h-full p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe2 size={18} className="text-brass" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl tracking-tighter2 text-stone">
                      {g.region}
                    </h3>
                  </div>
                  <p className="text-sm text-brass font-sans mb-3">{g.focus}</p>
                  <p className="body-md text-sm">{g.detail}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Secure Trust Hotline */}
      <section id="hotline" className="section-pad border-t border-hairline scroll-mt-24">
        <div className="container-page">
          <Card className="p-8 sm:p-12 lg:p-14" static>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Reveal>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone size={18} className="text-brass" strokeWidth={1.5} />
                    <p className="eyebrow mb-0">Secure Trust Hotline</p>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="heading-section text-3xl sm:text-4xl mb-5">
                    Direct channels for legal, procurement, and security officers.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="body-md mb-6">
                    Establish a secure communication path with our compliance desk
                    before transmitting sensitive materials. We will confirm
                    preferred channels, encryption expectations, and authorized
                    counterparties on both sides.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Legal-to-legal NDA initiation",
                      "Security questionnaire coordination",
                      "Classified-environment engagement scoping",
                      "Incident or concern escalation path",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-mutedStone font-sans"
                      >
                        <FileKey
                          size={14}
                          className="text-brass shrink-0 mt-0.5"
                          strokeWidth={1.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.2}>
                  <Button href="/contact" size="lg">
                    Open Secure Channel
                  </Button>
                </Reveal>
              </div>
              <Reveal delay={0.12}>
                <div className="rounded-xl border border-hairline bg-charcoal/50 p-8">
                  <p className="section-label mb-4">Routing Guidance</p>
                  <p className="body-md text-sm mb-4">
                    Email subjects should omit sensitive detail. Use{" "}
                    <span className="text-stone">compliance@pdscomm.com</span> for
                    desk routing, or initiate via the contact portal selecting
                    “Compliance / Security Officer” as your role.
                  </p>
                  <p className="body-md text-sm">
                    For matters requiring higher assurance, request a secure
                    briefing slot—our team will provide channel instructions
                    appropriate to your classification and jurisdiction.
                  </p>
                </div>
              </Reveal>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
