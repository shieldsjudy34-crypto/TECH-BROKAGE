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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pdscomm.com";
  const now = new Date();

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}