import type { Metadata } from "next";
import PartnersPage from "@/components/pages/PartnersPage";

export const metadata: Metadata = {
  title: "Technology Partners",
  description:
    "Secure channels connecting enterprise-grade AI software companies with high-intent corporate and government buyers.",
};

export default function Page() {
  return <PartnersPage />;
}
