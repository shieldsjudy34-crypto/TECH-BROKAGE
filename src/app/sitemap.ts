import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/buyers",
  "/technology-partners",
  "/solutions",
  "/engagements",
  "/trust-compliance",
  "/about",
  "/founder",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pdscomm.com";
  const now = new Date();

  return routes.map((route) => {
    const path = route === "" ? "/" : `${route}/`;
    return {
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    };
  });
}