import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/app/lib/seo";

const CATEGORY_SLUGS = [
  "event-fest",
  "student",
  "underhallning",
  "hoppborgar",
  "fyrverkeri",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/tjanster/uthyrning"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...CATEGORY_SLUGS.map((slug) => ({
      url: absoluteUrl(`/tjanster/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
