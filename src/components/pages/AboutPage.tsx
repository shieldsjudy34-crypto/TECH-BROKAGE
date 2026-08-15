"use client";

import { useEffect, useState } from "react";
import {
  Scale,
  Microscope,
  Shield,
  Handshake,
  MapPin,
  Users,
} from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { offices } from "@/lib/navigation";

const principles = [
  {
    icon: Scale,
    title: "Absolute Neutrality",
    body: "We do not take equity in vendors we evaluate, accept success fees that bias shortlists, or allow commercial relationships to distort diligence outcomes. Neutrality is a structural commitment.",
  },
  {
    icon: Microscope,
    title: "Technical Rigor",
    body: "Every recommendation is traceable to documented criteria, evidence reviewed, and residual risks disclosed. Rhetoric without artifacts does not enter our work product.",
  },
  {
    icon: Shield,
    title: "Strict Confidentiality",
    body: "Buyer mandates and partner materials are compartmentalized. Discretion is not a marketing line—it is how we retain the trust of institutions that cannot afford leakage.",
  },
  {
    icon: Handshake,
    title: "Long-Term Delivery Commitment",
    body: "We structure engagements for durable outcomes: pilots that mean something, shortlists that survive committee, and optional post-deployment verification over multi-quarter horizons.",
  },
];

const executives = [
  {
    initials: "AR",
    name: "A. R. Caldwell",
    role: "Managing Principal, Global Brokerage",
    bio: "Two decades spanning enterprise systems integration and institutional technology acquisition. Leads buyer engagement standards and multi-jurisdiction mandate design.",
  },
  {
    initials: "MK",
    name: "M. K. Rahman",
    role: "Principal, Technical Diligence",
    bio: "Background in large-scale ML platform engineering and security architecture review. Owns vendor technical verification methodology and domain taxonomy.",
  },
  {
    initials: "SL",
    name: "S. L. Okonkwo",
    role: "Principal, Public Sector Pathways",
    bio: "Former defense and civilian procurement advisor. Specializes in clearance-compatible engagement design and sovereign deployment constraints.",
  },
  {
    initials: "JH",
    name: "J. H. Vogel",
    role: "Director, Partner Ecosystem",
    bio: "Enterprise GTM and alliances leadership across security and analytics software. Governs partner qualification gates and introduction protocols.",
  },
];

const advisors = [
  {
    domain: "International Trade Law",
    detail:
      "Cross-border contracting, export considerations, and multi-jurisdiction commercial frameworks for technology transactions.",
  },
  {
    domain: "Model Compliance",
    detail:
      "AI governance, regulatory horizon scanning, and auditability requirements for high-impact automated systems.",
  },
  {
    domain: "Secure Data Transmission",
    detail:
      "Cryptographic architecture, cross-border transfer mechanisms, and classified-adjacent handling practices.",
  },
  {
    domain: "System Integration",
    detail:
      "Legacy estate interoperability, hybrid-cloud patterns, and large-program technical program management.",
  },
];

const capabilities = [
  { label: "Entity Classification", value: "Independent AI software brokerage & advisory" },
  { label: "Primary HQ", value: "California, United States" },
  { label: "Regional Presence", value: "Dubai · Singapore · Greater China" },
  { label: "Engagement Models", value: "Advisory · Sourcing · Full-cycle validation · Pilot support" },
  { label: "Client Classes", value: "Government (civilian & defense-adjacent) · Regulated enterprise" },
  { label: "Partner Classes", value: "Enterprise-grade AI software providers (selective admission)" },
  { label: "Confidentiality Baseline", value: "NDA-first; engagement-specific compartmentalization" },
  { label: "Commercial Stance", value: "Buyer-aligned neutrality; no vendor equity in active evaluations" },
];

function LiveClock({ tz }: { tz: string }) {
  const [label, setLabel] = useState("—");

  useEffect(() => {
    const tick = () => {
      try {
        setLabel(
          new Intl.DateTimeFormat("en-GB", {
            timeZone: tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZoneName: "short",
          }).format(new Date())
        );
      } catch {
        setLabel(tz);
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tz]);

  return <span>{label}</span>;
}

export default function AboutPage() {
  const [activeOffice, setActiveOffice] = useState(0);
  const [booked, setBooked] = useState(false);

  return (
    <>
      {/* 1. Hero */}
      <section className="section-pad">
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">About PDSCOMM</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl">
              Unifying global technology and local compliance.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg mt-7 max-w-2xl">
              PDSCOMM acts as an expert bridge between innovative tech hubs and
              structured procurement organizations around the world—translating
              capability into diligence-ready decisions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Ethos */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Ethos & Principles"
            title="Operating principles that do not flex with the deal."
            description="Four commitments that define how we engage buyers, partners, and counterparties in every jurisdiction."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <Card className="h-full p-7">
                  <div className="w-11 h-11 rounded-lg border border-hairline flex items-center justify-center text-brass mb-5">
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

      {/* 3. Operational Geography */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Operational Geography"
            title="Global footprint. Local accountability."
            description="Select a hub to view regional focus. Presence is designed for timezone coverage and jurisdictional literacy—not vanity offices."
          />
          <div className="mt-14 grid lg:grid-cols-5 gap-6">
            <Reveal className="lg:col-span-3">
              <Card className="p-6 sm:p-8 h-full min-h-[320px] relative overflow-hidden" static>
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 18% 42%, rgba(176,141,87,0.25) 0%, transparent 8%),
                      radial-gradient(circle at 55% 48%, rgba(176,141,87,0.25) 0%, transparent 7%),
                      radial-gradient(circle at 78% 58%, rgba(176,141,87,0.25) 0%, transparent 7%),
                      radial-gradient(circle at 82% 45%, rgba(176,141,87,0.2) 0%, transparent 6%),
                      linear-gradient(135deg, rgba(231,225,215,0.03) 0%, transparent 50%)
                    `,
                  }}
                />
                <p className="section-label relative z-10 mb-8">Focal Offices</p>
                <div className="relative z-10 grid sm:grid-cols-2 gap-3">
                  {offices.map((o, i) => (
                    <button
                      key={o.city}
                      type="button"
                      onClick={() => setActiveOffice(i)}
                      className={`
                        text-left p-4 rounded-lg border transition-all duration-300 ease-premium
                        ${
                          activeOffice === i
                            ? "border-brass/50 bg-brass/10"
                            : "border-hairline bg-charcoal/40 hover:border-brass/30"
                        }
                      `}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin
                          size={14}
                          className={
                            activeOffice === i ? "text-brass" : "text-mutedStone"
                          }
                          strokeWidth={1.5}
                        />
                        <span className="font-serif text-lg tracking-tighter2 text-stone">
                          {o.city}
                        </span>
                      </div>
                      <span className="text-xs text-mutedStone font-sans">
                        {o.region}
                      </span>
                    </button>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <Card className="p-7 h-full" static>
                <p className="eyebrow mb-3">{offices[activeOffice].region}</p>
                <h3 className="font-serif text-2xl tracking-tighter2 text-stone mb-4">
                  {offices[activeOffice].city}
                </h3>
                <p className="body-md text-sm mb-6">
                  {offices[activeOffice].focus}
                </p>
                <div className="border-t border-hairline pt-5 space-y-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wideLabel text-mutedStone font-sans mb-1">
                      Timezone
                    </p>
                    <p className="text-sm text-stone font-sans">
                      {offices[activeOffice].tz.replace(/_/g, " ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wideLabel text-mutedStone font-sans mb-1">
                      Live Local Time
                    </p>
                    <p className="text-sm text-stone font-sans">
                      <LiveClock tz={offices[activeOffice].tz} />
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Executive Profiles */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leadership"
            title="Executive & technical advisory profiles."
            description="Backgrounds spanning enterprise engineering and defense procurement—presented without stock portraiture, as substance over spectacle."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {executives.map((e, i) => (
              <Reveal key={e.initials} delay={(i % 2) * 0.08}>
                <Card className="h-full p-7">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full border border-brass/30 bg-charcoal flex items-center justify-center shrink-0">
                      <span className="font-serif text-brass text-sm tracking-wide">
                        {e.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl tracking-tighter2 text-stone">
                        {e.name}
                      </h3>
                      <p className="text-xs text-brass font-sans mt-1 mb-3">
                        {e.role}
                      </p>
                      <p className="body-md text-sm">{e.bio}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Advisory Network */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Advisory Network Board"
            title="Competencies that extend the core team."
            description="A global advisory network contributing specialized judgment across law, model compliance, secure transmission, and integration practice."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advisors.map((a, i) => (
              <Reveal key={a.domain} delay={i * 0.06}>
                <Card className="h-full p-6">
                  <Users size={18} className="text-brass mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg tracking-tighter2 text-stone mb-2">
                    {a.domain}
                  </h3>
                  <p className="body-md text-sm">{a.detail}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Corporate Capabilities */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Corporate Capabilities"
            title="Institutional specifications at a glance."
            description="Structured parameters for counterparties conducting preliminary vendor or advisor due diligence on PDSCOMM itself."
          />
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-xl border border-hairline bg-softCharcoal">
              <table className="premium-table min-w-[560px]">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilities.map((row) => (
                    <tr key={row.label}>
                      <td className="text-stone font-medium w-1/3">{row.label}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Briefing Calendar */}
      <section
        id="briefing"
        className="section-pad border-t border-hairline scroll-mt-24"
      >
        <div className="container-page max-w-2xl">
          <SectionHeading
            eyebrow="Briefing Calendar"
            title="Reserve a first-stage discovery call."
            description="Select a preferred window. Confirmations route to a broker in your operational timezone."
            align="center"
            className="mb-12"
          />
          <Reveal delay={0.1}>
            {booked ? (
              <Card className="p-10 text-center" static>
                <p className="eyebrow mb-3">Request Logged</p>
                <h3 className="font-serif text-2xl tracking-tighter2 text-stone mb-3">
                  Your briefing request is confirmed in queue.
                </h3>
                <p className="body-md">
                  Expect a calendar hold and secure joining instructions within one
                  business day.
                </p>
              </Card>
            ) : (
              <Card className="p-8 sm:p-10" static>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBooked(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="a-name">
                        Full Name
                      </label>
                      <input id="a-name" required className="input-field" />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="a-email">
                        Work Email
                      </label>
                      <input
                        id="a-email"
                        type="email"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="a-org">
                      Organization
                    </label>
                    <input id="a-org" required className="input-field" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="a-date">
                        Preferred Date
                      </label>
                      <input
                        id="a-date"
                        type="date"
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="a-slot">
                        Preferred Window
                      </label>
                      <select id="a-slot" required className="input-field">
                        <option value="">Select window</option>
                        <option>Morning (local)</option>
                        <option>Midday (local)</option>
                        <option>Afternoon (local)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="a-tz">
                      Your Timezone Hub
                    </label>
                    <select id="a-tz" required className="input-field">
                      <option value="">Select hub</option>
                      {offices.map((o) => (
                        <option key={o.city}>{o.city}</option>
                      ))}
                      <option>Other</option>
                    </select>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Request Briefing Slot
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
