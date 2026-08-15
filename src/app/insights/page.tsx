import type { Metadata } from "next";
import InsightsPage from "@/components/pages/InsightsPage";

export const metadata: Metadata = {
  title: "Insights & Briefs",
  description:
    "Market intelligence for decision makers—research briefs on AI regulation, sourcing frameworks, and deployment trends.",
};

export default function Page() {
  return <InsightsPage />;
}
