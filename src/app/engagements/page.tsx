import type { Metadata } from "next";
import EngagementsPage from "@/components/pages/EngagementsPage";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Selected institutional engagements—sourcing, diligence, and advisory impact under strict confidentiality.",
};

export default function Page() {
  return <EngagementsPage />;
}
