import Image from "next/image";
import { BackgroundGridGrain } from "@/components/background";
import { AnimatedReveal } from "@/components/animated-reveal";
import { Eyebrow } from "@/components/section";

/**
 * Interior page hero — unique still per page, never shared.
 */
export function PageHeader({
  index,
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-hairline">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover ken-burns"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-charcoal/74" />
      </div>
      <BackgroundGridGrain className="opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_-10%,rgba(176,141,87,0.09),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <AnimatedReveal>
          <Eyebrow index={index}>{eyebrow}</Eyebrow>
        </AnimatedReveal>
        <AnimatedReveal delay={0.1} blur>
          <h1 className="mt-7 max-w-4xl font-serif text-4xl leading-[1.08] text-offwhite md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </AnimatedReveal>
        {lead && (
          <AnimatedReveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-stone/65 md:text-lg">
              {lead}
            </p>
          </AnimatedReveal>
        )}
      </div>
    </header>
  );
}
