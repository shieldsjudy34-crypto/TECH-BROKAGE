import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/section";
import { AnimatedReveal } from "@/components/animated-reveal";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How PDSCOMM handles information submitted through this website and during confidential briefings.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="relative border-b border-hairline">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
          <AnimatedReveal>
            <Eyebrow index="P">Privacy</Eyebrow>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1} blur>
            <h1 className="mt-7 max-w-3xl font-serif text-4xl leading-[1.08] text-offwhite md:text-6xl">
              Privacy.
            </h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.18}>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-stone/60">
              Working notice. Replace with counsel-reviewed policy before launch.
            </p>
          </AnimatedReveal>
        </div>
      </header>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl space-y-8 text-[15px] leading-relaxed text-stone/65">
            <p>
              PDSCOMM is a brokerage. Information you send through this site or
              in a briefing is used to evaluate fit and to run an engagement—not
              to sell a list.
            </p>
            <p>
              Intake details, requirements, and files stay inside the
              conversation they were meant for. We do not publish buyer names,
              partner names, or engagement records without defined permission.
            </p>
            <p>
              If you want a record removed, or a copy of what you submitted,
              write through{" "}
              <Link href="/contact/" className="link-underline text-brass">
                Contact
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
