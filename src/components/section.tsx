import { cn } from "@/lib/utils";
import { AnimatedReveal } from "@/components/animated-reveal";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: number | string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-brass",
        className,
      )}
    >
      {index !== undefined && (
        <span className="tabular-nums text-brass/60">{index}</span>
      )}
      <span aria-hidden="true" className="h-px w-8 bg-brass/50" />
      {children}
    </p>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  index?: number | string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      <AnimatedReveal>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
      </AnimatedReveal>
      <AnimatedReveal delay={0.08}>
        <h2 className="mt-5 font-serif text-3xl leading-[1.15] text-offwhite md:text-5xl">
          {title}
        </h2>
      </AnimatedReveal>
      {lead && (
        <AnimatedReveal delay={0.16}>
          <p className="mt-6 text-[15px] leading-relaxed text-stone/65 md:text-base">
            {lead}
          </p>
        </AnimatedReveal>
      )}
    </div>
  );
}