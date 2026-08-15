import type { Metadata } from "next";
import SolutionsPage from "@/components/pages/SolutionsPage";

export const metadata: Metadata = {
  title: "Solutions & Verticals",
  description:
    "Engineered AI sourcing for document intelligence, computer vision, cyber defense, MLOps, and legacy enterprise integration.",
};

export default function Page() {
  return <SolutionsPage />;
}
