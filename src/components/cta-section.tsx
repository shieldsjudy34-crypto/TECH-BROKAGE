import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { AnimatedReveal } from "@/components/animated-reveal";
import { site } from "@/content/site";

export function CTASection({
  eyebrow = "Engage",
  title,
  body,
  primaryLabel,
  secondaryLabel,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-soft/30">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(176,141,87,0.08),transparent_70%)]"
      />
      <Container className="relative py-24 text-center md:py-32">
        <AnimatedReveal>
          <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
        </AnimatedReveal>
        <AnimatedReveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-[1.12] text-offwhite md:text-6xl">
            {title}
          </h2>
        </AnimatedReveal>
        {body && (
          <AnimatedReveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-stone/65 md:text-base">
              {body}
            </p>
          </AnimatedReveal>
        )}
        <AnimatedReveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={site.ctas.briefing.href} size="lg">
              {primaryLabel ?? site.ctas.briefing.label}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </ButtonLink>
            {secondaryLabel && (
              <ButtonLink href={site.ctas.requirements.href} size="lg" variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            )}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}