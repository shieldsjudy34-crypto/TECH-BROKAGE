import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "PDSCOMM — AI Brokerage for Procurement-Grade Decisions",
};

export default function Page() {
  return <HomePage />;
}
