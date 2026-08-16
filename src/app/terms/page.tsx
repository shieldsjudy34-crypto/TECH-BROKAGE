import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/section";
import { AnimatedReveal } from "@/components/animated-reveal";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for the PDSCOMM website and for confidential briefings.",
};

export default function TermsPage() {
  return (
    <>
      <header className="relative border-b border-hairline">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
          <AnimatedReveal>
            <Eyebrow index="T">Terms</Eyebrow>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1} blur>
            <h1 className="mt-7 max-w-3xl font-serif text-4xl leading-[1.08] text-offwhite md:text-6xl">
              Terms of use.
            </h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.18}>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-stone/60">
              Working notice. Replace with counsel-reviewed terms before launch.
            </p>
          </AnimatedReveal>
        </div>
      </header>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl space-y-8 text-[15px] leading-relaxed text-stone/65">
            <p>
              This website describes PDSCOMM’s brokerage practice. It is not an
              offer, a marketplace, or a commitment to represent any buyer or
              provider.
            </p>
            <p>
              Briefings and engagements are confidential. Nothing on these pages
              is legal, procurement, or investment advice. Named work happens
              under NDA where appropriate.
            </p>
            <p>
              Questions about these terms:{" "}
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
