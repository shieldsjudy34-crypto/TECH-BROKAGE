import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Secure intake for buyers and technology partners. Schedule a 15-minute briefing with a PDSCOMM broker.",
};

export default function Page() {
  return <ContactPage />;
}
