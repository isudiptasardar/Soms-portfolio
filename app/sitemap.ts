import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://somenath.biomolecular.space"

const lastModified = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/publications/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/awards/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Outreach pages
    ...[
      "research-projects",
      "conference-presentations",
      "expert-webinars",
      "scientific-organizations",
      "volunteer-work",
    ].map((slug) => ({
      url: `${baseUrl}/outreach/${slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
