import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://somenath.biomolecular.space"
  const lastModified = new Date()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/awards`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Outreach pages
  const outreachPages = [
    "research-projects",
    "conference-presentations",
    "expert-webinars",
    "scientific-organizations",
    "volunteer-work",
  ].map((slug) => ({
    url: `${baseUrl}/outreach/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Demo page
  const demoPage = {
    url: `${baseUrl}/demo`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }

  return [...mainPages, ...outreachPages, demoPage]
}
