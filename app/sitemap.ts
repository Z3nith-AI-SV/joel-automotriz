import type { MetadataRoute } from "next";
import { COURSES } from "@/lib/courses";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/cursos`, changeFrequency: "weekly", priority: 0.9 },
    ...COURSES.map((c) => ({
      url: `${SITE.url}/cursos/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
