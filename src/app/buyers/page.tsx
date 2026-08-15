import type { Metadata } from "next";
import BuyersPage from "@/components/pages/BuyersPage";

export const metadata: Metadata = {
  title: "Buyers",
  description:
    "Procurement-ready AI sourcing for government and enterprise acquisition teams—comparative data, diligence, and verified vendor shortlists.",
};

export default function Page() {
  return <BuyersPage />;
}
