import type { Metadata } from "next";
import TrustPage from "@/components/pages/TrustPage";

export const metadata: Metadata = {
  title: "Trust & Compliance",
  description:
    "PDSCOMM security posture: NDA-first handling, NIST AI RMF alignment, vendor security audits, and global regulatory literacy.",
};

export default function Page() {
  return <TrustPage />;
}
