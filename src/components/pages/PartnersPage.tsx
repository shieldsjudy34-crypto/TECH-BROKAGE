"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import {
  Cpu,
  Plug,
  FileCheck,
  HeadphonesIcon,
  Globe2,
  CheckSquare,
} from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const criteria = [
  {
    icon: Cpu,
    title: "High-Reliability Models",
    body: "Production-proven performance under load, documented failure modes, and measurable accuracy characteristics suitable for institutional risk tolerance.",
  },
  {
    icon: Plug,
    title: "Comprehensive API Coverage",
    body: "Well-documented APIs, authentication models, rate controls, and integration patterns that enterprise middleware and security stacks can absorb.",
  },
  {
    icon: FileCheck,
    title: "Established Compliance Documentation",
    body: "SOC 2 or equivalent paths, security whitepapers, data-processing addenda, and readiness for buyer security questionnaires.",
  },
  {
    icon: HeadphonesIcon,
    title: "Enterprise Support Capabilities",
    body: "Named support tiers, escalation paths, professional services capacity, and willingness to operate under institutional SLAs.",
  },
];

const pipeline = [
  {
    num: "01",
    title: "Partner Intake",
    body: "Confidential submission of company profile, product architecture overview, and target buyer segments under initial NDA.",
  },
  {
    num: "02",
    title: "Technical Verification",
    body: "Structured review of deployment options, security controls, model characteristics, and integration surfaces.",
  },
  {
    num: "03",
    title: "Model Profiling",
    body: "Capability mapping against PDSCOMM domain taxonomies—documenting strengths, constraints, and ideal mandate fit.",
  },
  {
    num: "04",
    title: "Target Client Alignment",
    body: "Introduction only when a live buyer mandate matches your profile—no speculative outreach, no marketplace noise.",
  },
];

const jurisdictions = [
  {
    region: "North America",
    focus: "Federal, state, and enterprise regulated markets",
    notes: "FedRAMP-aware pathways, state privacy regimes, critical infrastructure buyers",
  },
  {
    region: "EMEA",
    focus: "EU institutional and GCC sovereign programs",
    notes: "GDPR alignment, sovereign cloud preferences, multi-language procurement norms",
  },
  {
    region: "APAC",
    focus: "Singapore hub and regional enterprise demand",
    notes: "Cross-border data handling, sector regulators, hybrid deployment preferences",
  },
];

const checklist = [
  { cat: "Architecture", items: ["Deployment topology docs", "Tenancy & isolation model", "Key management design", "Disaster recovery posture"] },
  { cat: "Testing", items: ["Performance benchmarks", "Adversarial robustness notes", "Red-team or pen-test summary", "Accuracy evaluation protocol"] },
  { cat: "Auditing", items: ["SOC 2 / ISO path status", "Logging & audit trail design", "Model lineage documentation", "Third-party assessment history"] },
  { cat: "Scalability", items: ["Throughput characteristics", "Horizontal scaling model", "Multi-region readiness", "Support capacity plan"] },
];

export default function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : "");
  };

  return (
    <>
      {/* 1. Hero */}
      <section className="section-pad">
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">For Technology Partners</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl">
              Secure channels to institutional demand.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg mt-7 max-w-2xl">
              We connect enterprise-grade AI software companies with high-intent
              corporate and government buyers ready for deployment—not tire-kickers,
              not speculative RFPs without budget authority.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button href="#register" size="lg">
                Begin Partner Registration
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Speak with Partnership Desk
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Assessment Criteria */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Partner Assessment Criteria"
            title="What we look for in AI software providers."
            description="Entry into the PDSCOMM ecosystem is selective. These four criteria determine readiness for institutional introduction."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {criteria.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.08}>
                <Card className="h-full p-7">
                  <div className="w-11 h-11 rounded-lg border border-hairline flex items-center justify-center text-brass mb-5">
                    <c.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl tracking-tighter2 text-stone mb-2">
                    {c.title}
                  </h3>
                  <p className="body-md">{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Onboarding Pipeline */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Onboarding Pipeline"
            title="From intake to target client alignment."
            description="A controlled four-stage process. Introductions occur only when mandate fit is verified."
          />
          <div className="mt-14 grid md:grid-cols-4 gap-4">
            {pipeline.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.07}>
                <Card className="h-full p-6">
                  <span className="text-brass font-sans text-xs tracking-wideLabel">
                    Phase {p.num}
                  </span>
                  <h3 className="font-serif text-lg tracking-tighter2 text-stone mt-3 mb-2">
                    {p.title}
                  </h3>
                  <p className="body-md text-sm">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Joint Solution Architecture */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionHeading
              eyebrow="Joint Solution Architecture"
              title="Positioning that speaks procurement language."
              description="Institutional buyers evaluate risk, integration, and accountability—not feature checklists alone. We help qualified partners package capabilities into narratives and artifacts that acquisition teams can defend."
            />
            <Reveal delay={0.1}>
              <div className="space-y-6 body-md">
                <p>
                  Public and private procurement teams require evidence structured
                  around deployment isolation, data custody, model governance, and
                  commercial durability. Marketing materials optimized for venture
                  audiences rarely survive security or procurement review.
                </p>
                <p>
                  PDSCOMM collaborates with accepted partners to refine solution
                  briefs, security questionnaires, reference architectures, and
                  pilot frameworks—so when an introduction occurs, the conversation
                  begins at institutional altitude.
                </p>
                <p>
                  We remain neutral brokers. Packaging support improves clarity; it
                  does not substitute for technical fitness or alter evaluation outcomes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Market Jurisdictions */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Market Jurisdictions"
            title="Global pathways across regulated markets."
            description="Cross-border data handling standards and regional procurement norms shape every introduction we facilitate."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {jurisdictions.map((j, i) => (
              <Reveal key={j.region} delay={i * 0.08}>
                <Card className="h-full p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <Globe2 size={18} className="text-brass" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl tracking-tighter2 text-stone">
                      {j.region}
                    </h3>
                  </div>
                  <p className="text-sm text-stone font-sans mb-3">{j.focus}</p>
                  <p className="body-md text-sm">{j.notes}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Due Diligence Checklist */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Due Diligence Checklist"
            title="Technical self-assessment matrix."
            description="Partners should prepare documentation across these four domains before registration. Incomplete packages delay verification."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {checklist.map((block, i) => (
              <Reveal key={block.cat} delay={i * 0.06}>
                <Card className="h-full p-6" static>
                  <div className="flex items-center gap-2 mb-5">
                    <CheckSquare size={16} className="text-brass" strokeWidth={1.5} />
                    <h3 className="font-serif text-lg tracking-tighter2 text-stone">
                      {block.cat}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-mutedStone font-sans flex gap-2"
                      >
                        <span className="text-brass/60">·</span>
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

      {/* 7. Partner Registration */}
      <section id="register" className="section-pad border-t border-hairline scroll-mt-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="Partner Registration Portal"
            title="Submit under initial NDA terms."
            description="Upload technical documentation, pitch materials, and operational capability summaries. Classified material must not be transmitted here."
            align="center"
            className="mb-12"
          />
          <Reveal delay={0.1}>
            {submitted ? (
              <Card className="p-10 text-center" static>
                <p className="eyebrow mb-3">Registration Received</p>
                <h3 className="font-serif text-2xl tracking-tighter2 text-stone mb-3">
                  Your partner package is under review.
                </h3>
                <p className="body-md">
                  The partnerships desk will acknowledge receipt and outline next
                  verification steps within two business days.
                </p>
              </Card>
            ) : (
              <Card className="p-8 sm:p-10" static>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="p-name">
                        Contact Name
                      </label>
                      <input id="p-name" required className="input-field" placeholder="Full name" />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="p-role">
                        Role
                      </label>
                      <input id="p-role" required className="input-field" placeholder="GTM / Engineering / Executive" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="p-company">
                        Company
                      </label>
                      <input id="p-company" required className="input-field" placeholder="Legal entity name" />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="p-email">
                        Work Email
                      </label>
                      <input id="p-email" type="email" required className="input-field" placeholder="name@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="p-domain">
                      Primary AI Domain
                    </label>
                    <select id="p-domain" required className="input-field">
                      <option value="">Select domain</option>
                      <option>Document Intelligence</option>
                      <option>Computer Vision</option>
                      <option>Predictive Analytics</option>
                      <option>Fraud & Anomaly Detection</option>
                      <option>Cyber Defense AI</option>
                      <option>MLOps & Governance</option>
                      <option>Other / Multi-domain</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="p-summary">
                      Capability Summary
                    </label>
                    <textarea
                      id="p-summary"
                      required
                      className="input-field"
                      rows={4}
                      placeholder="Describe core product, deployment options, and ideal institutional buyer profile."
                    />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="p-file">
                      Technical Documentation Upload
                    </label>
                    <div className="relative">
                      <input
                        id="p-file"
                        type="file"
                        accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
                        onChange={handleFile}
                        className="input-field file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-brass/20 file:text-brass file:text-xs file:font-sans cursor-pointer"
                      />
                    </div>
                    {fileName && (
                      <p className="mt-2 text-xs text-mutedStone font-sans">
                        Selected: {fileName}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-mutedStone/60 font-sans">
                      Accepted: PDF, DOC, PPT, ZIP · Max practical size for portal transfer
                    </p>
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 accent-brass"
                    />
                    <span className="text-xs text-mutedStone font-sans leading-relaxed">
                      I confirm this submission is made under initial NDA terms and
                      contains no classified or export-controlled material. I
                      authorize PDSCOMM to review materials solely for partner
                      qualification purposes.
                    </span>
                  </label>
                  <Button type="submit" size="lg">
                    Submit Partner Registration
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
