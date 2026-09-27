import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://taha-khan-amazon-growth.dogarrashid5.chatgpt.site";
  return ["", "/about", "/services", "/case-studies", "/contact"].map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 }));
}
