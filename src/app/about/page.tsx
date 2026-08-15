import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "PDSCOMM global footprint, operating principles, leadership, and briefing calendar—bridging tech hubs and structured procurement.",
};

export default function Page() {
  return <AboutPage />;
}
