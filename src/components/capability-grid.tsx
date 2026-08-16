import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Search,
  ShieldCheck,
  Eye,
  TrendingUp,
  Fingerprint,
  Lock,
  Workflow,
  Target,
  Server,
  Users,
  Compass,
  FileCheck2,
  Vault,
  Scale,
  Gauge,
} from "lucide-react";
import { PremiumCard } from "@/components/premium-card";
import { AnimatedReveal } from "@/components/animated-reveal";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Search,
  ShieldCheck,
  Eye,
  TrendingUp,
  Fingerprint,
  Lock,
  Workflow,
  Target,
  Server,
  Users,
  Compass,
  FileCheck2,
  Vault,
  Scale,
  Gauge,
};

export interface CapabilityItem {
  icon: string;
  title: string;
  body: string;
}

/**
 * Responsive grid of capability cards driven by central content.
 */
export function CapabilityGrid({
  items,
  columns = 3,
}: {
  items: CapabilityItem[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={
        columns === 3
          ? "grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3"
          : "grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2"
      }
    >
      {items.map((item, i) => (
        <AnimatedReveal
          key={item.title}
          delay={i * 0.05}
          className="bg-charcoal"
        >
          <PremiumCard
            icon={iconMap[item.icon]}
            title={item.title}
            body={item.body}
            className="h-full rounded-none border-0 bg-soft/30 hover:bg-soft/60"
          />
        </AnimatedReveal>
      ))}
    </div>
  );
}