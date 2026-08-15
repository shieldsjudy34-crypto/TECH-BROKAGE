"use client";

import { useEffect, useState, FormEvent } from "react";
import {
  Building2,
  Cpu,
  Mail,
  MapPin,
  Clock,
  Shield,
  Calendar,
} from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { offices } from "@/lib/navigation";

type Path = "buyer" | "partner" | null;

function OfficeHours({ tz, city }: { tz: string; city: string }) {
  const [now, setNow] = useState("—");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const tick = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          weekday: "short",
        });
        const parts = formatter.formatToParts(new Date());
        const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
        const minute = parts.find((p) => p.type === "minute")?.value ?? "00";
        const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
        setNow(`${weekday} ${String(hour).padStart(2, "0")}:${minute}`);
        // Active desk hours approx 09:00–18:00 local weekdays
        const day = new Date().toLocaleString("en-US", {
          timeZone: tz,
          weekday: "short",
        });
        const isWeekday = !["Sat", "Sun"].includes(day);
        setActive(isWeekday && hour >= 9 && hour < 18);
      } catch {
        setNow(city);
        setActive(false);
      }
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [tz, city]);

  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-mutedStone font-sans tabular-nums">{now}</span>
      <span
        className={`text-[10px] uppercase tracking-wideLabel font-sans px-2 py-0.5 rounded border ${
          active
            ? "text-brass border-brass/40 bg-brass/10"
            : "text-mutedStone border-hairline"
        }`}
      >
        {active ? "Desk Active" : "After Hours"}
      </span>
    </div>
  );
}

export default function ContactPage() {
  const [path, setPath] = useState<Path>(null);
  const [submitted, setSubmitted] = useState(false);
  const [briefed, setBriefed] = useState(false);

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
            <p className="eyebrow mb-6">Contact & Intake</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl">
              Secure communication starts here.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg mt-7 max-w-2xl">
              Our channels are built for high-security, high-intent operational
              requests. Select your intake path below—or schedule a 15-minute
              briefing directly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Split Sourcing Terminal */}
      <section className="section-pad border-t border-hairline pt-0">
        <div className="container-page">
          <SectionHeading
            eyebrow="Select Intake Path"
            title="How should we route your request?"
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
            <Reveal>
              <Card
                className={`h-full p-7 sm:p-8 transition-all ${
                  path === "buyer" ? "border-brass/50 ring-1 ring-brass/30" : ""
                }`}
                onClick={() => {
                  setPath("buyer");
                  setSubmitted(false);
                }}
              >
                <div className="w-12 h-12 rounded-lg border border-hairline flex items-center justify-center text-brass mb-5">
                  <Building2 size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl tracking-tighter2 text-stone mb-3">
                  I am looking to source AI Software
                </h3>
                <p className="body-md text-sm mb-4">
                  Buyer path — government and enterprise acquisition teams
                  seeking qualified vendors, diligence support, or advisory.
                </p>
                <span className="text-xs uppercase tracking-wideLabel text-brass font-sans">
                  Buyer Intake →
                </span>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card
                className={`h-full p-7 sm:p-8 transition-all ${
                  path === "partner" ? "border-brass/50 ring-1 ring-brass/30" : ""
                }`}
                onClick={() => {
                  setPath("partner");
                  setSubmitted(false);
                }}
              >
                <div className="w-12 h-12 rounded-lg border border-hairline flex items-center justify-center text-brass mb-5">
                  <Cpu size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl tracking-tighter2 text-stone mb-3">
                  I represent a vetted AI Company
                </h3>
                <p className="body-md text-sm mb-4">
                  Partner path — enterprise-grade AI software providers seeking
                  qualified introduction to institutional demand.
                </p>
                <span className="text-xs uppercase tracking-wideLabel text-brass font-sans">
                  Partner Intake →
                </span>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Secure Intake Engine */}
      <section
        id="intake-engine"
        className="section-pad border-t border-hairline scroll-mt-24"
      >
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="Secure Intake Engine"
            title={
              path === "partner"
                ? "Partner intake form"
                : path === "buyer"
                  ? "Buyer intake form"
                  : "Select a path to configure the form"
            }
            description={
              path
                ? "High-assurance field design with validation. Do not transmit classified material through this channel."
                : "Choose Buyer or Partner above to reveal the appropriate intake fields."
            }
            align="center"
            className="mb-10"
          />

          {!path && (
            <Reveal>
              <Card className="p-10 text-center" static>
                <Shield size={24} className="text-brass mx-auto mb-4" strokeWidth={1.5} />
                <p className="body-md">
                  Awaiting path selection. Your choice determines routing desk,
                  required fields, and follow-up protocol.
                </p>
              </Card>
            </Reveal>
          )}

          {path && (
            <Reveal key={path}>
              {submitted ? (
                <Card className="p-10 text-center" static>
                  <p className="eyebrow mb-3">Secure Submission Received</p>
                  <h3 className="font-serif text-2xl tracking-tighter2 text-stone mb-3">
                    {path === "buyer"
                      ? "Buyer intake logged with the brokerage desk."
                      : "Partner intake logged with the ecosystem desk."}
                  </h3>
                  <p className="body-md">
                    Expect acknowledgment within one business day in your
                    operational timezone.
                  </p>
                </Card>
              ) : (
                <Card className="p-8 sm:p-10" static>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="label-field" htmlFor="c-name">
                          Full Name
                        </label>
                        <input id="c-name" required className="input-field" />
                      </div>
                      <div>
                        <label className="label-field" htmlFor="c-title">
                          Title / Authority
                        </label>
                        <input id="c-title" required className="input-field" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="label-field" htmlFor="c-org">
                          Organization
                        </label>
                        <input id="c-org" required className="input-field" />
                      </div>
                      <div>
                        <label className="label-field" htmlFor="c-email">
                          Secure Email
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    {path === "buyer" ? (
                      <>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="label-field" htmlFor="c-sector">
                              Sector
                            </label>
                            <select id="c-sector" required className="input-field">
                              <option value="">Select</option>
                              <option>Government — Civilian</option>
                              <option>Government — Defense / Security</option>
                              <option>Enterprise — Regulated</option>
                              <option>Critical Infrastructure</option>
                            </select>
                          </div>
                          <div>
                            <label className="label-field" htmlFor="c-env">
                              Deployment Environment
                            </label>
                            <select id="c-env" required className="input-field">
                              <option value="">Select</option>
                              <option>Cloud</option>
                              <option>Hybrid</option>
                              <option>On-Premises</option>
                              <option>Air-Gapped</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="label-field" htmlFor="c-need">
                            Sourcing Need Summary
                          </label>
                          <textarea
                            id="c-need"
                            required
                            rows={4}
                            className="input-field"
                            placeholder="Operational need, constraints, timeline (non-classified)."
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="label-field" htmlFor="c-domain">
                              AI Domain
                            </label>
                            <select id="c-domain" required className="input-field">
                              <option value="">Select</option>
                              <option>Document Intelligence</option>
                              <option>Computer Vision</option>
                              <option>Predictive Analytics</option>
                              <option>Cyber Defense AI</option>
                              <option>MLOps & Governance</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div>
                            <label className="label-field" htmlFor="c-stage">
                              Commercial Stage
                            </label>
                            <select id="c-stage" required className="input-field">
                              <option value="">Select</option>
                              <option>Production customers live</option>
                              <option>Enterprise pilots only</option>
                              <option>Pre-revenue / early</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="label-field" htmlFor="c-cap">
                            Capability & Differentiation
                          </label>
                          <textarea
                            id="c-cap"
                            required
                            rows={4}
                            className="input-field"
                            placeholder="Product summary, deployment options, ideal buyer profile."
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <label className="label-field" htmlFor="c-role">
                        Your Role Type
                      </label>
                      <select id="c-role" className="input-field">
                        <option>Procurement / Acquisition</option>
                        <option>Security / CISO Office</option>
                        <option>Legal / Compliance</option>
                        <option>Technical Leadership</option>
                        <option>Executive Sponsor</option>
                        <option>Partner GTM / Engineering</option>
                      </select>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="mt-1 accent-brass" />
                      <span className="text-xs text-mutedStone font-sans leading-relaxed">
                        I confirm this message contains no classified or
                        export-controlled content and I agree to NDA-first handling
                        of this inquiry.
                      </span>
                    </label>

                    <Button type="submit" size="lg">
                      Submit Secure Intake
                    </Button>
                  </form>
                </Card>
              )}
            </Reveal>
          )}
        </div>
      </section>

      {/* 4. Direct Secure Protocols */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Direct Secure Communication Protocols"
            title="Alternative channels and corporate parameters."
            description="When portal intake is insufficient—legal process, formal notices, or channel establishment for elevated sensitivity."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Mail,
                t: "Compliance Desk",
                d: "compliance@pdscomm.com — security officers and legal counterparties.",
              },
              {
                icon: Building2,
                t: "Brokerage Desk",
                d: "engage@pdscomm.com — buyer mandates and briefing coordination.",
              },
              {
                icon: Cpu,
                t: "Partner Desk",
                d: "partners@pdscomm.com — vendor qualification and ecosystem queries.",
              },
              {
                icon: MapPin,
                t: "Registered Posture",
                d: "Corporate registrar and formal notices via California HQ. Request postal parameters through compliance desk.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 0.06}>
                <Card className="h-full p-6" static>
                  <item.icon size={18} className="text-brass mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg tracking-tighter2 text-stone mb-2">
                    {item.t}
                  </h3>
                  <p className="body-md text-sm">{item.d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm text-mutedStone font-sans max-w-2xl">
              Digital signature and encrypted channel establishment available on
              request. PGP keys and preferred secure messengers are exchanged only
              after counterparty verification.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. Global Time-Zone Matrix */}
      <section className="section-pad border-t border-hairline">
        <div className="container-page">
          <SectionHeading
            eyebrow="Global Time-Zone Matrix"
            title="Office lines and active hours."
            description="Local time updates live from UTC offsets. Desk-active indicates approximate business hours for first response routing."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.06}>
                <Card className="p-6 h-full" static>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={16} className="text-brass" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl tracking-tighter2 text-stone">
                      {o.city}
                    </h3>
                  </div>
                  <p className="text-xs text-mutedStone font-sans mb-1">
                    {o.region}
                  </p>
                  <p className="text-xs text-mutedStone/70 font-sans mb-4">
                    {o.tz.replace(/_/g, " ")}
                  </p>
                  <OfficeHours tz={o.tz} city={o.city} />
                  <p className="mt-4 text-sm text-mutedStone font-sans border-t border-hairline pt-4">
                    {o.focus}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 15-Minute Briefing Scheduler */}
      <section
        id="briefing"
        className="section-pad border-t border-hairline scroll-mt-24"
      >
        <div className="container-page max-w-2xl">
          <SectionHeading
            eyebrow="15-Minute Briefing Scheduler"
            title="Route immediately to an expert broker."
            description="Discovery calls are scoped, confidential, and scheduled into your operational timezone."
            align="center"
            className="mb-10"
          />
          <Reveal delay={0.1}>
            {briefed ? (
              <Card className="p-10 text-center" static>
                <Calendar size={28} className="text-brass mx-auto mb-4" strokeWidth={1.5} />
                <p className="eyebrow mb-3">Briefing Queued</p>
                <h3 className="font-serif text-2xl tracking-tighter2 text-stone mb-3">
                  Your 15-minute briefing request is confirmed.
                </h3>
                <p className="body-md">
                  A broker will issue a calendar invitation and secure join link
                  matched to your timezone preference.
                </p>
              </Card>
            ) : (
              <Card className="p-8 sm:p-10" static>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBriefed(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="br-name">
                        Name
                      </label>
                      <input id="br-name" required className="input-field" />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="br-email">
                        Email
                      </label>
                      <input
                        id="br-email"
                        type="email"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="br-org">
                      Organization
                    </label>
                    <input id="br-org" required className="input-field" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="br-date">
                        Preferred Date
                      </label>
                      <input id="br-date" type="date" required className="input-field" />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="br-time">
                        Preferred Time
                      </label>
                      <select id="br-time" required className="input-field">
                        <option value="">Select</option>
                        <option>09:00 – 10:00</option>
                        <option>10:00 – 11:00</option>
                        <option>11:00 – 12:00</option>
                        <option>13:00 – 14:00</option>
                        <option>14:00 – 15:00</option>
                        <option>15:00 – 16:00</option>
                        <option>16:00 – 17:00</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="br-hub">
                      Operational Timezone
                    </label>
                    <select id="br-hub" required className="input-field">
                      <option value="">Select hub</option>
                      {offices.map((o) => (
                        <option key={o.city}>
                          {o.city} ({o.tz.replace(/_/g, " ")})
                        </option>
                      ))}
                      <option>Other — specify in notes</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="br-notes">
                      Brief Context (optional)
                    </label>
                    <textarea
                      id="br-notes"
                      rows={3}
                      className="input-field"
                      placeholder="Sector, urgency, or topic for routing."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Confirm 15-Minute Briefing
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
